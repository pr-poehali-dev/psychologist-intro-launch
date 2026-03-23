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

    if not full_name or not birth_date or not request_text:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Заполните все поля анкеты'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender_email = 'Shteynira@yandex.ru'
    recipient_email = 'Shteynira@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая анкета от {full_name}'
    msg['From'] = sender_email
    msg['To'] = recipient_email

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #5c3d2e; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #c47650; border-bottom: 2px solid #f2ddd0; padding-bottom: 10px;">
            Новая анкета с сайта
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f9f5ef;">
                <td style="padding: 12px; font-weight: bold; width: 180px;">Полное имя:</td>
                <td style="padding: 12px;">{full_name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; font-weight: bold;">Дата рождения:</td>
                <td style="padding: 12px;">{birth_date}</td>
            </tr>
            <tr style="background: #f9f5ef;">
                <td style="padding: 12px; font-weight: bold; vertical-align: top;">Запрос:</td>
                <td style="padding: 12px;">{request_text}</td>
            </tr>
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
