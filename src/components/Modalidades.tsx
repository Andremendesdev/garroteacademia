"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dumbbell,
  Swords,
  HandMetal,
  Music2,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const modalidades: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Dumbbell,
    title: "Musculação",
    description:
      "Equipamentos premium, horário livre e treinos para ganho de massa, definição e condicionamento.",
  },
  {
    icon: Swords,
    title: "Muay Thai",
    description:
      "Arte marcial tailandesa com foco em técnica, condicionamento físico e defesa pessoal.",
  },
  {
    icon: HandMetal,
    title: "Boxe",
    description:
      "Treino de impacto com técnica, velocidade e resistência em ambiente profissional.",
  },
  {
    icon: Music2,
    title: "FitDance",
    description:
      "Aulas dinâmicas que unem ritmo, emagrecimento e diversão em cada sessão.",
  },
];

function ModalidadeCard({
  icon: Icon,
  title,
  description,
  index,
  visible,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  visible: boolean;
}) {
  const delayClass = `delay-${Math.min((index + 2) * 100, 600)}`;

  return (
    <div
      role="listitem"
      className={`group/mod glass-card flex flex-col gap-3 rounded-2xl border border-white/8 p-5 transition-[border-color,box-shadow] duration-500 hover:border-red-800/45 hover:shadow-[0_0_28px_rgba(220,38,38,0.18)] motion-reduce:transition-none sm:p-6 ${
        visible ? `animate-scale-in ${delayClass}` : "opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-800/30 bg-red-950/40 shadow-[0_0_14px_rgba(220,38,38,0.18)] transition-shadow duration-500 group-hover/mod:border-red-700/50 group-hover/mod:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          aria-hidden
        >
          <Icon
            size={20}
            className="text-red-600 drop-shadow-[0_0_6px_rgba(220,38,38,0.7)]"
          />
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="flex items-center gap-2 font-display text-lg tracking-[0.04em] text-[var(--white-neon)] sm:text-xl">
            <span
              className="text-red-600"
              aria-hidden
            >
              ▪
            </span>
            {title}
          </h3>
        </div>
      </div>
      <p className="text-sm font-light leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}

export function Modalidades() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="modalidades"
      aria-labelledby="modalidades-heading"
      className="relative overflow-x-clip bg-[var(--bg-deep)] py-10 sm:py-12 lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(220,38,38,0.08)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="ambient-orb pointer-events-none absolute -right-32 top-1/4 h-[280px] w-[280px] rounded-full opacity-35"
        aria-hidden
      />
      <div className="grain-overlay pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-6 max-w-2xl sm:mb-8 lg:mb-10">
          <Badge
            variant="neon"
            className={`mb-3 w-fit gap-1.5 px-2.5 py-1 text-[8px] font-semibold tracking-[0.18em] uppercase sm:mb-4 sm:text-[9px] ${
              visible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <span
              className="glow-pulse h-1 w-1 rounded-full bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.9)]"
              aria-hidden
            />
            Modalidades
          </Badge>

          <h2
            id="modalidades-heading"
            className={`space-y-0 leading-none ${
              visible ? "animate-slide-up delay-100" : "opacity-0"
            }`}
          >
            <span className="block font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-[0.9] tracking-[0.02em] text-[var(--white-neon)]">
              TREINE DO SEU JEITO.
            </span>
            <span className="block font-display text-[clamp(1.75rem,5vw,3.25rem)] leading-[0.9] tracking-[0.02em] text-red-600 text-glow-red">
              ESCOLHA SUA MODALIDADE.
            </span>
          </h2>

          <div
            className={`mt-3 flex items-center gap-3 sm:mt-4 ${
              visible ? "animate-slide-up delay-200" : "opacity-0"
            }`}
            aria-hidden
          >
            <div className="neon-red-line h-px w-10 bg-red-600/80" />
            <div className="neon-red-line h-[3px] w-[3px] rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
            <div className="h-px w-4 bg-red-700/50" />
          </div>

          <p
            className={`mt-4 max-w-lg text-base font-light leading-relaxed text-zinc-400 sm:text-[1.05rem] ${
              visible ? "animate-slide-up delay-300" : "opacity-0"
            }`}
          >
            Musculação, artes marciais e dança — tudo na mesma academia, com
            estrutura e profissionais preparados para cada objetivo.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5"
          role="list"
          aria-label="Modalidades da Academia Garrote"
        >
          {modalidades.map(({ icon, title, description }, index) => (
            <ModalidadeCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
