import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lanchonete Anos 50 — Cardápio, Preços e Endereço" },
      {
        name: "description",
        content:
          "Lanchonete retrô com hambúrgueres, porções e milk-shakes. Veja o cardápio com preços, horários e como chegar.",
      },
      { property: "og:title", content: "Lanchonete Anos 50 — Cardápio & Endereço" },
      {
        property: "og:description",
        content: "Cardápio digital com preços, horários de funcionamento e endereço da lanchonete.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const NAME = "Lanchonete Anos 50";
const ADDRESS = "Av. Paulista, 1000 — Bela Vista, São Paulo/SP";
const PHONE = "(11) 99999-0000";
const HOURS = [
  { days: "Terça a Quinta", time: "18h — 23h" },
  { days: "Sexta e Sábado", time: "18h — 00h" },
  { days: "Domingo", time: "12h — 22h" },
  { days: "Segunda", time: "Fechado" },
];

type MenuItem = { name: string; desc: string; price: string; tag?: string };
type MenuCategory = { id: string; title: string; emoji: string; items: MenuItem[] };

const MENU: MenuCategory[] = [
  {
    id: "burgers",
    title: "Hambúrgueres",
    emoji: "🍔",
    items: [
      {
        name: "Clássico Anos 50",
        desc: "Blend 150g, queijo, alface, tomate e molho da casa no pão brioche",
        price: "R$ 24,90",
        tag: "Mais pedido",
      },
      {
        name: "Duplo Cheddar",
        desc: "Dois blends 150g, cheddar derretido, cebola caramelizada e bacon",
        price: "R$ 32,90",
      },
      {
        name: "X-Frango Crocante",
        desc: "Filé de frango empanado, queijo, maionese verde e picles",
        price: "R$ 26,90",
      },
      {
        name: "Veggie Retrô",
        desc: "Burger de grão-de-bico, queijo vegano, rúcula e tomate seco",
        price: "R$ 25,90",
      },
    ],
  },
  {
    id: "porcoes",
    title: "Porções",
    emoji: "🍟",
    items: [
      {
        name: "Batata Frita Grande",
        desc: "Porção generosa com cheddar e bacon opcional",
        price: "R$ 19,90",
      },
      {
        name: "Onion Rings",
        desc: "Anéis de cebola empanados com molho barbecue",
        price: "R$ 17,90",
      },
      {
        name: "Frango a Passarinho",
        desc: "Porção 500g com limão e farofa",
        price: "R$ 34,90",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas & Shakes",
    emoji: "🥤",
    items: [
      {
        name: "Milk-Shake Clássico",
        desc: "Chocolate, morango ou baunilha, servido no copo de vidro",
        price: "R$ 16,90",
        tag: "Destaque",
      },
      {
        name: "Ovomaltine Shake",
        desc: "Shake cremoso com cobertura crocante de Ovomaltine",
        price: "R$ 21,90",
      },
      {
        name: "Refrigerante Lata",
        desc: "Coca-Cola, Guaraná, Fanta ou Sprite",
        price: "R$ 6,00",
      },
      {
        name: "Suco Natural",
        desc: "Laranja, maracujá ou limonada suíça, 500ml",
        price: "R$ 9,90",
      },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    emoji: "🍰",
    items: [
      {
        name: "Brownie com Sorvete",
        desc: "Brownie quente, sorvete de creme e calda de chocolate",
        price: "R$ 15,90",
      },
      {
        name: "Petit Gateau",
        desc: "Bolo com recheio cremoso de chocolate e sorvete",
        price: "R$ 18,90",
      },
    ],
  },
];

function SectionTitle({ children, kicker }: { children: string; kicker?: string }) {
  return (
    <div className="text-center">
      {kicker ? (
        <p className="font-script text-2xl text-gold">{kicker}</p>
      ) : null}
      <h2 className="font-display text-3xl uppercase tracking-wide text-foreground sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-primary" />
        <span className="text-lg">★</span>
        <span className="h-px w-12 bg-primary" />
      </div>
    </div>
  );
}

function MenuCard({ category }: { category: MenuCategory }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-primary/40 bg-card p-6 shadow-[4px_4px_0_0_var(--primary)]">
      <h3 className="mb-5 flex items-center gap-3 font-display text-xl uppercase text-primary">
        <span className="text-2xl">{category.emoji}</span>
        {category.title}
      </h3>
      <ul className="space-y-5">
        {category.items.map((item) => (
          <li key={item.name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-foreground">{item.name}</span>
              {item.tag ? (
                <span className="rounded-full bg-gold/25 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold">
                  {item.tag}
                </span>
              ) : null}
              <span className="mx-1 hidden flex-1 border-b-2 border-dotted border-border sm:block" />
              <span className="whitespace-nowrap font-display text-primary">{item.price}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-primary px-4 py-2 text-center font-display text-xs uppercase tracking-[0.2em] text-primary-foreground sm:text-sm">
        Desde 2026 · Lanches artesanais desde a fritadeira
      </div>

      <header className="sticky top-0 z-20 border-b-4 border-primary bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-script text-3xl text-primary">
            {NAME}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide md:flex">
            <a href="#cardapio" className="hover:text-primary">
              Cardápio
            </a>
            <a href="#sobre" className="hover:text-primary">
              Sobre
            </a>
            <a href="#contato" className="hover:text-primary">
              Contato
            </a>
          </nav>
          <a
            href="#cardapio"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
          >
            Ver cardápio
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b-4 border-primary bg-secondary/15">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, var(--foreground) 0 2px, transparent 2px 14px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
          <p className="font-script text-3xl text-accent sm:text-4xl">Bem-vindo à</p>
          <h1 className="mt-2 font-display text-5xl uppercase leading-tight text-primary sm:text-7xl">
            {NAME}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Hambúrgueres artesanais, porções crocantes e milk-shakes servidos no clima dos
            anos 50. Coma aqui ou leve para viagem!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cardapio"
              className="rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              🍔 Ver cardápio
            </a>
            <a
              href="#contato"
              className="rounded-md border-2 border-primary bg-card px-6 py-3 font-bold uppercase tracking-wide text-primary shadow-[4px_4px_0_0_var(--primary)] transition-transform hover:-translate-y-0.5"
            >
              📍 Como chegar
            </a>
          </div>
        </div>
      </section>

      <section id="cardapio" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Cardápio digital">Sabores & Preços</SectionTitle>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {MENU.map((category) => (
            <MenuCard key={category.id} category={category} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Preços sujeitos a alteração. Consulte combos e promoções do dia no balcão.
        </p>
      </section>

      <section id="sobre" className="border-y-4 border-primary bg-card">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <SectionTitle kicker="Nossa história">Sobre a casa</SectionTitle>
          <p className="mx-auto mt-8 max-w-2xl text-muted-foreground sm:text-lg">
            A {NAME} nasceu da paixão por lanches bem feitos: pão fresquinho todos os dias,
            blend de carne moído na hora e aquele atendimento de bairro que faz você se
            sentir em casa. Tudo servido com muito queijo, muito carinho e uma trilha sonora
            de jukebox.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { emoji: "🥩", title: "Blend fresco", desc: "Moído todos os dias, nunca congelado" },
              { emoji: "🥖", title: "Pão do dia", desc: "Assado na padaria do lado, de manhã" },
              { emoji: "🏍️", title: "Delivery", desc: "Raio de 5 km, pedido pelo WhatsApp" },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border-2 border-border bg-background p-6">
                <div className="text-3xl">{f.emoji}</div>
                <h3 className="mt-3 font-display text-sm uppercase text-primary">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Venha nos visitar">Endereço & Horários</SectionTitle>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-2 border-dashed border-primary/40 bg-card p-8 shadow-[4px_4px_0_0_var(--accent)]">
            <h3 className="font-display text-lg uppercase text-accent">📍 Onde estamos</h3>
            <p className="mt-4 text-lg font-semibold">{ADDRESS}</p>
            <p className="mt-2 text-muted-foreground">Telefone / WhatsApp: {PHONE}</p>
            <a
              href="https://maps.google.com/?q=Av.+Paulista,+1000,+São+Paulo"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 font-bold uppercase tracking-wide text-accent-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="rounded-xl border-2 border-dashed border-primary/40 bg-card p-8 shadow-[4px_4px_0_0_var(--accent)]">
            <h3 className="font-display text-lg uppercase text-accent">🕒 Funcionamento</h3>
            <ul className="mt-4 space-y-3">
              {HOURS.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold">{h.days}</span>
                  <span className="mx-1 flex-1 border-b-2 border-dotted border-border" />
                  <span className={h.time === "Fechado" ? "font-bold text-primary" : ""}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-primary bg-primary px-4 py-8 text-center text-primary-foreground">
        <p className="font-script text-2xl">{NAME}</p>
        <p className="mt-2 text-sm opacity-90">{ADDRESS}</p>
        <p className="mt-3 text-xs uppercase tracking-widest opacity-75">
          © 2026 {NAME} · Feito com muito queijo 🧀
        </p>
      </footer>
    </div>
  );
}
