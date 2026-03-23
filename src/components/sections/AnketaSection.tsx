import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const SEND_ANKETA_URL = "https://functions.poehali.dev/3a1a023e-7da8-4842-a5aa-105d8fed3602";

export default function AnketaSection() {
  const anketaSection = useInView();
  const contactSection = useInView();

  const [form, setForm] = useState({ full_name: "", birth_date: "", request_text: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name || !form.birth_date || !form.request_text) {
      setErrorMsg("Пожалуйста, заполните все поля");
      return;
    }
    setFormState("loading");
    setErrorMsg("");
    try {
      const res = await fetch(SEND_ANKETA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ full_name: "", birth_date: "", request_text: "" });
      } else {
        setFormState("error");
        setErrorMsg("Что-то пошло не так. Попробуйте ещё раз.");
      }
    } catch {
      setFormState("error");
      setErrorMsg("Ошибка соединения. Проверьте интернет и попробуйте снова.");
    }
  };

  return (
    <>
      {/* ANKETA */}
      <section id="anketa" className="py-24 px-6 md:px-12" style={{ backgroundColor: "var(--cream)" }}>
        <div
          ref={anketaSection.ref}
          className={`container mx-auto max-w-xl transition-all duration-700 ${
            anketaSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <p className="font-body text-sm uppercase tracking-[0.2em] mb-3" style={{ color: "var(--terra)" }}>
              Первый шаг
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light mb-4"
              style={{ color: "var(--warm-brown)" }}
            >
              Заполните анкету
            </h2>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--warm-brown)", opacity: 0.75 }}>
              Расскажите немного о себе — я свяжусь с вами и мы договоримся об удобном времени.
            </p>
          </div>

          {formState === "success" ? (
            <div
              className="p-10 rounded-3xl text-center"
              style={{ backgroundColor: "var(--blush)", color: "var(--warm-brown)" }}
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-display text-2xl font-medium mb-3" style={{ color: "var(--terra)" }}>
                Анкета отправлена!
              </h3>
              <p className="font-body text-base leading-relaxed opacity-80">
                Я получила вашу анкету и свяжусь с вами в течение дня. Спасибо за доверие.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl flex flex-col gap-6"
              style={{ backgroundColor: "var(--blush)", border: "1px solid var(--border)" }}
            >
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-medium" style={{ color: "var(--warm-brown)" }}>
                  Полное имя
                </label>
                <input
                  type="text"
                  placeholder="Иванова Мария Петровна"
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "var(--cream)",
                    color: "var(--warm-brown)",
                    border: "1.5px solid var(--border)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-medium" style={{ color: "var(--warm-brown)" }}>
                  Дата рождения
                </label>
                <input
                  type="date"
                  value={form.birth_date}
                  onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none transition-all"
                  style={{
                    backgroundColor: "var(--cream)",
                    color: "var(--warm-brown)",
                    border: "1.5px solid var(--border)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-medium" style={{ color: "var(--warm-brown)" }}>
                  С каким запросом обращаетесь?
                </label>
                <textarea
                  rows={4}
                  placeholder="Опишите, что вас беспокоит или с чем хотите разобраться..."
                  value={form.request_text}
                  onChange={(e) => setForm({ ...form, request_text: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl font-body text-base outline-none resize-none transition-all"
                  style={{
                    backgroundColor: "var(--cream)",
                    color: "var(--warm-brown)",
                    border: "1.5px solid var(--border)",
                  }}
                />
              </div>

              {errorMsg && (
                <p className="font-body text-sm text-center" style={{ color: "var(--terra-dark)" }}>
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full py-4 rounded-full font-body font-medium text-base transition-all hover:opacity-90 active:scale-95 shadow-md disabled:opacity-60"
                style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
              >
                {formState === "loading" ? "Отправляем..." : "Отправить анкету"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-12">
        <div
          ref={contactSection.ref}
          className={`container mx-auto max-w-2xl text-center transition-all duration-700 ${
            contactSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] mb-3" style={{ color: "var(--terra)" }}>
            Контакты
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light mb-5"
            style={{ color: "var(--warm-brown)" }}
          >
            Давайте познакомимся
          </h2>
          <p
            className="font-body text-base leading-relaxed mb-10"
            style={{ color: "var(--warm-brown)", opacity: 0.75 }}
          >
            Напишите мне — расскажите о своём запросе или просто задайте вопрос. Я отвечу в течение дня.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (903) 461-88-56", href: "tel:+79034618856" },
              { icon: "Mail", label: "Email", value: "Shteynira@yandex.ru", href: "mailto:Shteynira@yandex.ru" },
              { icon: "MessageCircle", label: "Telegram", value: "@ShteynIra", href: "https://t.me/ShteynIra" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex flex-col items-center gap-3 p-6 rounded-3xl transition-all hover:shadow-md hover:-translate-y-1"
                style={{ backgroundColor: "var(--blush)", color: "var(--warm-brown)" }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
                >
                  <Icon name={c.icon} size={20} />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-wide opacity-60 mb-1">{c.label}</div>
                  <div className="font-body text-sm font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <a
            href="mailto:Shteynira@yandex.ru"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-medium text-base transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
          >
            <Icon name="Send" size={18} />
            Написать мне
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 md:px-12 text-center font-body text-sm"
        style={{ backgroundColor: "var(--warm-brown)", color: "var(--blush)" }}
      >
        <span style={{ opacity: 0.6 }}>© 2026 Ирина Штейн · Психолог</span>
      </footer>
    </>
  );
}
