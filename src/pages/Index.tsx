import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/files/12d197e8-c9ee-4d59-999e-e0af4d86944e.jpg";
const CATALOG_IMG = "https://cdn.poehali.dev/projects/c2d7d140-ae80-4111-8f6e-7429a913c332/files/3aa4abcc-bed1-45d8-99d1-5412b4f135a1.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Каталог", href: "#catalog" },
  { label: "О нас", href: "#about" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  { name: "Рибай стейк", weight: "300 г", price: 890, badge: "Хит", origin: "Воронежская область", img: HERO_IMG },
  { name: "Филе миньон", weight: "250 г", price: 1120, badge: "Премиум", origin: "Брянская область", img: CATALOG_IMG },
  { name: "Стриплойн", weight: "350 г", price: 780, badge: null, origin: "Воронежская область", img: HERO_IMG },
  { name: "Каре ягнёнка", weight: "400 г", price: 1350, badge: "Премиум", origin: "Дагестан", img: CATALOG_IMG },
  { name: "Свиная вырезка", weight: "500 г", price: 490, badge: null, origin: "Тульская область", img: HERO_IMG },
  { name: "Фарш говяжий", weight: "500 г", price: 420, badge: "Выгодно", origin: "Воронежская область", img: CATALOG_IMG },
];

const CERTS = [
  { icon: "ShieldCheck" as const, title: "ГОСТ Р", text: "Вся продукция сертифицирована по российским стандартам качества" },
  { icon: "Leaf" as const, title: "Фермерское", text: "Мясо от проверенных фермерских хозяйств без антибиотиков и гормонов" },
  { icon: "Thermometer" as const, title: "Холодовая цепь", text: "Температурный контроль от фермы до вашего стола — от 0 до +4°C" },
  { icon: "Award" as const, title: "Халяль", text: "Часть ассортимента имеет сертификацию Халяль" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-2xl font-bold tracking-tight text-primary">
            МясоРубка
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="tel:+79001234567"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Icon name="Phone" size={16} />
            +7 (900) 123-45-67
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Премиальное мясо
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-foreground mb-6">
              От фермы<br />
              <span className="text-primary">до стола</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 font-body">
              Свежее фермерское мясо с доставкой за 2 часа. Без посредников, без заморозки, без компромиссов.
            </p>
            <div className="flex gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Каталог
                <Icon name="ArrowDown" size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                О качестве
              </a>
            </div>
          </div>
          <div className="animate-fade-up-delay-1 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Премиальные стейки"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-4">
              <div className="text-3xl font-display font-bold">100%</div>
              <div className="text-xs uppercase tracking-wider">натуральное</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES STRIP ═══ */}
      <section className="border-y border-border bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "Truck", text: "Доставка за 2 часа" },
            { icon: "Snowflake", text: "Охлаждённое, не замороженное" },
            { icon: "ShieldCheck", text: "Сертификаты качества" },
            { icon: "Undo2", text: "Возврат без вопросов" },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <Icon name={f.icon} size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CATALOG ═══ */}
      <section id="catalog" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Каталог</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Выберите свой отруб
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="group border border-border hover:border-primary/30 transition-all duration-300 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{p.name}</h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">{p.price} ₽</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{p.weight}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {p.origin}
                    </span>
                  </div>
                  <button className="w-full border border-foreground/15 py-2.5 text-sm font-semibold text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT / QUALITY ═══ */}
      <section id="about" className="py-20 md:py-28 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                О нас
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
                Качество,<br />которому доверяют
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                МясоРубка — это прямые поставки с лучших фермерских хозяйств России. 
                Мы лично посещаем каждую ферму, проверяем условия содержания животных 
                и контролируем каждый этап — от выращивания до доставки к вашему столу.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "12+", label: "ферм-партнёров" },
                  { num: "3000+", label: "довольных клиентов" },
                  { num: "24ч", label: "от фермы до вас" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-primary">{s.num}</div>
                    <div className="text-sm text-white/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={CATALOG_IMG}
                alt="Ассортимент мяса"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {CERTS.map((c) => (
              <div key={c.title} className="border border-white/10 p-6">
                <Icon name={c.icon} size={28} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DELIVERY ═══ */}
      <section id="delivery" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Доставка</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Как мы доставляем
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "ShoppingBag",
                title: "Оформите заказ",
                text: "Выберите мясо в каталоге и оформите заказ на сайте или по телефону",
              },
              {
                step: "02",
                icon: "Package",
                title: "Мы соберём",
                text: "Бережно упакуем в термобокс с хладоэлементами для сохранения свежести",
              },
              {
                step: "03",
                icon: "Truck",
                title: "Доставим за 2 часа",
                text: "Курьер привезёт заказ в удобное время. Бесплатно от 3 000 ₽",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <span className="font-display text-7xl font-bold text-primary/10">{s.step}</span>
                <div className="-mt-8 ml-2">
                  <Icon name={s.icon} size={24} className="text-primary mb-3" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-border p-8 md:p-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Условия доставки</h3>
              <ul className="space-y-3">
                {[
                  "Доставка по городу — от 299 ₽",
                  "Бесплатно при заказе от 3 000 ₽",
                  "Доставка за 2 часа в пределах МКАД",
                  "Доставка за город — по договорённости",
                  "Время доставки: ежедневно с 9:00 до 21:00",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Оплата</h3>
              <ul className="space-y-3">
                {[
                  "Наличными при получении",
                  "Картой курьеру (Visa, MasterCard, МИР)",
                  "Онлайн-оплата на сайте",
                  "Безналичный расчёт для юридических лиц",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Icon name="Check" size={16} className="text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-20 md:py-28 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Контакты</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8">
                Свяжитесь с нами
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Телефон</div>
                    <a href="tel:+79001234567" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href="mailto:info@myasorubka.ru" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      info@myasorubka.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                    <span className="text-lg font-semibold text-foreground">
                      г. Москва, ул. Мясницкая, 15
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Режим работы</div>
                    <span className="text-lg font-semibold text-foreground">
                      Ежедневно с 9:00 до 21:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Оставить заявку</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full border border-border px-4 py-3 text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border px-4 py-3 text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Что хотите заказать?"
                    className="w-full border border-border px-4 py-3 text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-display text-2xl font-bold text-primary">МясоРубка</span>
              <p className="text-sm text-white/40 mt-1">Премиальное фермерское мясо с доставкой</p>
            </div>
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-white/30">
              &copy; 2026 МясоРубка. Все права защищены.
            </span>
            <span className="text-xs text-white/30">
              ИНН 7707123456 / ОГРН 1027700123456
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
