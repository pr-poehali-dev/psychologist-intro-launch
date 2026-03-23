import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/59708334-393c-4312-8070-669d4b5342e8/bucket/1b5fd0f8-721c-4990-8427-62dd235ee201.jpeg";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ backgroundColor: "rgba(249,245,239,0.88)", backdropFilter: "blur(12px)" }}
      >
        <span
          className="font-display text-xl font-semibold tracking-wide"
          style={{ color: "var(--warm-brown)" }}
        >
          Ирина Штейн
        </span>
        <div
          className="hidden md:flex gap-8 font-body text-sm font-medium"
          style={{ color: "var(--warm-brown)" }}
        >
          <a href="#about" className="hover:opacity-60 transition-opacity">О мне</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Услуги</a>
          <a href="#anketa" className="hover:opacity-60 transition-opacity">Анкета</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Контакты</a>
        </div>
        <a
          href="#anketa"
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
              Психолог · Практикующий специалист
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
                href="#anketa"
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
              alt="Ирина Штейн — психолог"
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
    </>
  );
}