import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/bucket/940e0f1d-e714-4fb7-8ea8-44ec03141662.png";
const IMG_BATTLE = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/bucket/d3f19d1b-e8d7-4376-b025-d910c94aa198.jpg";
const IMG_LOGO = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/bucket/77a69861-b5a0-4278-b30a-2ea5a01d6b1d.jpg";
const IMG_OBELISK = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/files/2e8684b1-d218-4f20-a299-cca28ad01c3b.jpg";

const NAV = [
  { label: "Об игре", href: "#about" },
  { label: "Механики", href: "#features" },
  { label: "Геймплей", href: "#gameplay" },
  { label: "Поддержать", href: "#support" },
];

const FEATURES = [
  {
    icon: "Swords",
    title: "Spirit Blade",
    desc: "Десятки видов оружия с активными способностями и пассивными бонусами. Каждое оружие воплощает уникальную легенду — от древних богов до воинов-героев.",
  },
  {
    icon: "Shield",
    title: "Сердце обороны",
    desc: "Защищайте обелиски и ключевой артефакт — проводник душ. Обелиски способны атаковать врагов, а через Rogue-like улучшения можно усилить их стихийными эффектами.",
  },
  {
    icon: "Users",
    title: "Кооператив до 4 игроков",
    desc: "Каждый выбирает свою роль — танк, саппорт, контроллер толпы или ДД. Победа возможна только через слаженную командную работу.",
  },
  {
    icon: "Skull",
    title: "12+ рейд-боссов",
    desc: "Гарантированный босс в конце каждой волны. Каждый тип врагов требует своей тактики — от блокирования Крушителей до уничтожения Призывателей.",
  },
  {
    icon: "Sparkles",
    title: "Rogue-like прогрессия",
    desc: "Получайте постоянные усиления трёх типов после каждой волны и этапа. Выбранная стратегия определяет, какие расходники окажутся наиболее эффективными.",
  },
  {
    icon: "Bird",
    title: "Стратегическое воскрешение",
    desc: "Гибель в бою открывает новые возможности — павший игрок превращается в ворона с полным обзором поля боя и может возродиться у Алтаря.",
  },
];

const GAMEPLAY_CARDS = [
  {
    title: "«Гнездо ворона»",
    desc: "Хаб-лобби для выбора миссии, экипировки и старта боя. Никаких пустых забегов — каждый выход на поле боя подготовлен.",
    icon: "Home",
  },
  {
    title: "Глубокая кастомизация",
    desc: "Система брони — Плащ, Доспех, Шлем — с бонусами за комплекты. Настройте персонажа под свой стиль игры.",
    icon: "Shirt",
  },
  {
    title: "«Завеса отчаяния»",
    desc: "Система развития персонажа через испытания. Зарабатывайте «Светоч», сражайтесь с порождениями безумия и открывайте новые способности.",
    icon: "Flame",
  },
  {
    title: "Сбалансированная экономика",
    desc: "Три специализированные валюты: Отголоски душ для прокачки, Золотые перья для снаряжения, Осколки идиллиума для эксклюзивной косметики.",
    icon: "Coins",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-xl font-bold tracking-wide text-foreground">
            SONG <span className="text-primary">OF THE</span> RAVENS
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#support"
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 hover:bg-primary/90 transition-colors"
          >
            Поддержать
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG_BATTLE}
            alt="Song of the Ravens battlefield"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                В разработке
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              Song of the
              <br />
              <span className="text-primary text-glow">Ravens</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Хардкорная кооперативная tower defense в сеттинге dark fantasy.
              Объединитесь в отряд до четырёх игроков и отразите натиск заблудших душ
              в бескомпромиссной борьбе за выживание.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Узнать больше
                <Icon name="ArrowDown" size={16} />
              </a>
              <a
                href="#support"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Поддержать проект
                <Icon name="Heart" size={16} />
              </a>
            </div>
          </div>

          <div className="animate-fade-up-delay-1 hidden md:block">
            <div className="relative">
              <img
                src={IMG_LOGO}
                alt="Song of the Ravens Logo"
                className="w-full rounded-sm shadow-2xl shadow-black/50"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 -z-10" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={IMG_HERO}
                alt="Рыцарь-ворон с магической сферой"
                className="w-full shadow-2xl shadow-black/40"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 -z-10" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Об игре</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
                Где граница между<br />
                <span className="text-primary">жизнью и смертью</span><br />
                стёрта
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                В мире Song of the Ravens тьма поглотила всё живое, а граница между
                мирами разрушена. Волна за волной заблудшие души штурмуют последний
                оплот человечества.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Используйте тактику, уникальное оружие Spirit Blade и древние артефакты,
                чтобы защитить то, что осталось. Это кооперативная сага о тьме и надежде,
                где каждое решение определяет ваш уникальный путь к победе.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "4", label: "игрока в кооперативе" },
                  { num: "12+", label: "рейд-боссов" },
                  { num: "30+", label: "видов оружия" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Механики</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
              Тактическая глубина в каждом решении
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="border border-border bg-card p-6 card-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 mb-5">
                  <Icon name={f.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMEPLAY */}
      <section id="gameplay" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Геймплей</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
                Максимум экшена<br />
                <span className="text-primary">без рутины</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Мы кардинально меняем формулу Souls-like, убирая долгий бег по локациям.
                Все битвы с рядовыми врагами и эпические схватки с боссами происходят
                в рамках обороны одной локации.
              </p>
              <img
                src={IMG_OBELISK}
                alt="Обелиск обороны"
                className="w-full shadow-2xl shadow-black/40"
              />
            </div>
            <div className="space-y-5">
              {GAMEPLAY_CARDS.map((c, i) => (
                <div
                  key={c.title}
                  className="border border-border bg-card p-6 card-hover flex gap-5"
                >
                  <div className="shrink-0">
                    <span className="font-display text-4xl font-bold text-primary/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={c.icon} size={18} className="text-primary" />
                      <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COOP BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_BATTLE} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Выживание — это <span className="text-primary text-glow">доверие</span> к союзнику
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ваше развитие — заслуженная награда за преодоление испытаний.
            Игра создаёт идеальные условия для игры с друзьями
            и формирует лояльное комьюнити.
          </p>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Поддержать проект
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Помогите создать<br />Song of the Ravens
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Мы — команда энтузиастов Non-solo Gaming. Каждый вклад приближает
              релиз игры и помогает нам воплотить эту мрачную фантазию в реальность.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-border bg-card p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 border border-primary/20 mb-6">
                <Icon name="Heart" size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Донат</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Поддержите разработку любой суммой. Реквизиты для перевода
                будут добавлены после подключения платёжной системы.
              </p>
              <div className="border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-foreground font-medium">
                  Реквизиты скоро появятся
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Следите за обновлениями
                </p>
              </div>
            </div>

            <div className="border border-border bg-card p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-accent/10 border border-accent/20 mb-6">
                <Icon name="Mail" size={28} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Связаться с нами</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Хотите сотрудничать, предложить идею или просто поддержать словом?
                Напишите нам — мы всегда на связи.
              </p>
              <a
                href="mailto:rinat_galimov_1998@bk.ru"
                className="inline-flex items-center gap-2 bg-secondary border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <Icon name="Mail" size={16} />
                rinat_galimov_1998@bk.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM + FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
                Команда
              </span>
              <h3 className="font-display text-2xl font-bold">Non-solo Gaming</h3>
              <p className="text-muted-foreground mt-1">Команда разработчиков-энтузиастов</p>
            </div>
            <a
              href="mailto:rinat_galimov_1998@bk.ru"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="Mail" size={16} />
              rinat_galimov_1998@bk.ru
            </a>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-lg font-bold">
              SONG <span className="text-primary">OF THE</span> RAVENS
            </span>
            <span className="text-xs text-muted-foreground">
              &copy; 2026 Non-solo Gaming. Все права защищены.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
