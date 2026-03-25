import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет анкету клиента на почту психолога Ирины Штейн."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Method not allowed'}
        }

    body = json.loads(event.get('body') or '{}')
    full_name = body.get('full_name', '').strip()
    birth_date = body.get('birth_date', '').strip()
    request_text = body.get('request_text', '').strip()

    marital_status = body.get('marital_status', '').strip()
    marriage_duration = body.get('marriage_duration', '').strip()
    first_marriage = body.get('first_marriage', '').strip()
    children = body.get('children', '').strip()
    cohabitants = body.get('cohabitants', '').strip()
    occupation = body.get('occupation', '').strip()
    hobbies = body.get('hobbies', '').strip()
    about_self = body.get('about_self', '').strip()

    if not full_name or not birth_date or not request_text:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните все обязательные поля анкеты'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender_email = 'Shteynira@yandex.ru'
    recipient_email = 'Shteynira@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая анкета от {full_name}'
    msg['From'] = sender_email
    msg['To'] = recipient_email

    fields = [
        ('Полное имя', full_name),
        ('Дата рождения', birth_date),
        ('Семейное положение', marital_status),
        ('Как давно в браке', marriage_duration),
        ('Первый брак', first_marriage),
        ('Дети', children),
        ('Проживают вместе', cohabitants),
        ('Занятость / работа', occupation),
        ('Хобби / увлечения', hobbies),
        ('О себе', about_self),
        ('Запрос к психологу', request_text),
    ]

    rows_html = ''
    for i, (label, value) in enumerate(fields):
        if not value:
            continue
        bg = ' style="background: #f9f5ef;"' if i % 2 == 0 else ''
        v_align = ' vertical-align: top;' if label in ('О себе', 'Запрос к психологу') else ''
        rows_html += f'''
            <tr{bg}>
                <td style="padding: 12px; font-weight: bold; width: 200px;{v_align}">{label}:</td>
                <td style="padding: 12px;">{value}</td>
            </tr>'''

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #5c3d2e; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #c47650; border-bottom: 2px solid #f2ddd0; padding-bottom: 10px;">
            Новая анкета с сайта
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            {rows_html}
        </table>
        <p style="color: #8ba888; font-size: 12px; margin-top: 20px;">
            Письмо отправлено автоматически с вашего сайта.
        </p>
    </body>
    </html>
    """

    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(sender_email, smtp_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True, 'message': 'Анкета успешно отправлена'}
    }
