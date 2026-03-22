import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/59708334-393c-4312-8070-669d4b5342e8/files/27991b45-0ecf-4bda-bbed-4ad3a4f969bc.jpg";

const services = [
  {
    icon: "Heart",
    title: "Индивидуальные консультации",
    desc: "Личная встреча в безопасном, доверительном пространстве. Разберёмся с тревогой, страхами и жизненными затруднениями.",
  },
  {
    icon: "Users",
    title: "Работа с отношениями",
    desc: "Помогу разобраться в сложностях с близкими людьми, выстроить здоровые границы и улучшить качество общения.",
  },
  {
    icon: "Sprout",
    title: "Личностный рост",
    desc: "Поддержка в поиске себя, своих ценностей и ресурсов. Движение к жизни, которая приносит удовлетворение.",
  },
  {
    icon: "Moon",
    title: "Работа с потерями",
    desc: "Сопровождение в периоды горевания, утраты и сложных жизненных переходов. Бережно и без спешки.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Index() {
  const aboutSection = useInView();
  const servicesSection = useInView();
  const contactSection = useInView();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ backgroundColor: "rgba(249,245,239,0.88)", backdropFilter: "blur(12px)" }}
      >
        <span
          className="font-display text-xl font-semibold tracking-wide"
          style={{ color: "var(--warm-brown)" }}
        >
          Ирина
        </span>
        <div
          className="hidden md:flex gap-8 font-body text-sm font-medium"
          style={{ color: "var(--warm-brown)" }}
        >
          <a href="#about" className="hover:opacity-60 transition-opacity">О мне</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Контакты</a>
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full font-body text-sm font-medium transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
        >
          Записаться
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] blob opacity-30"
          style={{ backgroundColor: "var(--blush)" }}
        />
        <div
          className="absolute bottom-0 left-[-80px] w-[350px] h-[350px] blob opacity-20"
          style={{ backgroundColor: "var(--sage)" }}
        />

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p
              className="font-body text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in opacity-0-init"
              style={{ color: "var(--terra)", animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Психолог · Начинающий специалист
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-up opacity-0-init"
              style={{ color: "var(--warm-brown)", animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Свет в конце<br />
              <em>тоннеля — есть</em>
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-8 max-w-md animate-fade-up opacity-0-init"
              style={{ color: "var(--warm-brown)", animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Все ответы у вас уже есть. Я только помогу найти нужный маршрут и экологично размотать любую головоломку в вашей голове.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up opacity-0-init"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-body font-medium text-base transition-all hover:opacity-90 active:scale-95 shadow-md"
                style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
              >
                Записаться на консультацию
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-full font-body font-medium text-base border transition-all hover:opacity-70"
                style={{ borderColor: "var(--terra)", color: "var(--terra)" }}
              >
                Узнать обо мне
              </a>
            </div>
          </div>

          <div
            className="relative flex justify-center animate-scale-in opacity-0-init"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div
              className="absolute inset-0 blob opacity-40"
              style={{ backgroundColor: "var(--blush)", transform: "scale(1.05) rotate(-5deg)" }}
            />
            <img
              src={PHOTO_URL}
              alt="Анна Соколова — психолог"
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 object-cover blob shadow-xl"
            />
            <div
              className="absolute bottom-4 left-0 z-20 px-5 py-3 rounded-2xl shadow-lg font-body text-sm"
              style={{ backgroundColor: "var(--cream)", color: "var(--warm-brown)", border: "1px solid var(--blush)" }}
            >
              <span className="font-semibold" style={{ color: "var(--terra)" }}>🤝 Безопасное</span> пространство
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--warm-brown)" }}>
            Листайте
          </span>
          <Icon name="ChevronDown" size={18} style={{ color: "var(--terra)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-12">
        <div
          ref={aboutSection.ref}
          className={`container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] mb-3" style={{ color: "var(--terra)" }}>
              О мне
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light mb-6 leading-tight"
              style={{ color: "var(--warm-brown)" }}
            >
              Ирина
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-5"
              style={{ color: "var(--warm-brown)", opacity: 0.85 }}
            >
              Я начинающий психолог — ещё учусь, но уже обладаю достаточными знаниями и инструментами, чтобы помочь размотать любую головоломку в вашей голове.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-5"
              style={{ color: "var(--warm-brown)", opacity: 0.85 }}
            >
              Я не даю готовых советов. Все ответы уже живут внутри вас — я лишь помогу найти нужный маршрут и бережно, экологично привести вас к свету в конце тоннеля.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "var(--warm-brown)", opacity: 0.85 }}
            >
              Работаю в подходах КПТ и клиент-центрированной терапии. Прохожу личную терапию и супервизию.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "КПТ", label: "Когнитивно-поведенческая терапия" },
              { num: "50+", label: "Часов личной терапии" },
              { num: "🌿", label: "Бережный и тёплый подход" },
              { num: "Онлайн", label: "Консультации по всему миру" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl"
                style={{
                  backgroundColor: i % 2 === 0 ? "var(--blush)" : "var(--cream)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="font-display text-3xl font-semibold mb-2"
                  style={{ color: "var(--terra)" }}
                >
                  {item.num}
                </div>
                <div
                  className="font-body text-sm leading-snug"
                  style={{ color: "var(--warm-brown)", opacity: 0.75 }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12" style={{ backgroundColor: "var(--blush)" }}>
        <div
          ref={servicesSection.ref}
          className={`container mx-auto max-w-5xl transition-all duration-700 ${
            servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-14">
            <p className="font-body text-sm uppercase tracking-[0.2em] mb-3" style={{ color: "var(--terra)" }}>
              Услуги
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: "var(--warm-brown)" }}
            >
              Чем я могу помочь
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl group hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: "var(--cream)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "var(--terra)", color: "var(--cream)" }}
                >
                  <Icon name={s.icon} size={22} />
                </div>
                <h3
                  className="font-display text-2xl font-medium mb-3"
                  style={{ color: "var(--warm-brown)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--warm-brown)", opacity: 0.75 }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-3xl text-center font-body text-sm"
            style={{ backgroundColor: "var(--cream)", color: "var(--warm-brown)" }}
          >
            Первая консультация — знакомство и оценка запроса. Стоимость и формат обсуждаются индивидуально.
          </div>
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
              { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00", href: "tel:+79990000000" },
              { icon: "Mail", label: "Email", value: "anna@example.com", href: "mailto:anna@example.com" },
              { icon: "MessageCircle", label: "Telegram", value: "@anna_psych", href: "https://t.me/anna_psych" },
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
            href="mailto:anna@example.com"
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
        <span style={{ opacity: 0.6 }}>© 2026 Ирина · Психолог</span>
      </footer>
    </div>
  );
}