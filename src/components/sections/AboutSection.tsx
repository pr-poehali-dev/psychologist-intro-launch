import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

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

export default function AboutSection() {
  const aboutSection = useInView();
  const servicesSection = useInView();

  return (
    <>
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

          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/59708334-393c-4312-8070-669d4b5342e8/bucket/738fcb65-af36-435e-9a97-fac190062a72.jpeg"
                alt="Моя рука вам открыта"
                className="w-full h-64 object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3 font-body text-sm italic"
                style={{ backgroundColor: "rgba(249,245,239,0.85)", color: "var(--terra)" }}
              >
                Моя рука открыта вам всегда,<br />
                в ней — зерно надежды и тепло.<br />
                Приходите, даже если вдруг беда —<br />
                вместе мы найдём, где рассвело.
              </div>
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
    </>
  );
}
