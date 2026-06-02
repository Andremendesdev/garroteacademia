"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Shield,
  Zap,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HERO_IMAGE = "/fundo2.png";

const stats = [
  { value: "+1.200", label: "Alunos Ativos" },
  { value: "8 Anos", label: "De Excelência" },
  { value: "4.9", label: "Avaliação", icon: true },
];

const trustBadges = [
  { icon: Users, text: "+1.200 alunos" },
  { icon: Shield, text: "Equipamentos premium" },
  { icon: Zap, text: "Acomp. profissional" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[var(--bg-deep)] md:min-h-dvh"
    >
      {/* ── Layer 0: Full-bleed cinematic photo ── */}
      <div
        className="pointer-events-none absolute inset-0 md:min-h-dvh"
        aria-hidden
      >
        {/* Mobile: CSS background garante cover em 100% da tela */}
        <div
          className="hero-bg-mobile absolute inset-0 md:hidden"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Academia Garrote"
        />
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="cinematic-bg-image hidden md:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#060608]/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608] via-[#060608]/82 to-[#060608]/48" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/20 to-[#060608]/35" />
      </div>

      {/* ── Atmospheric layers (neutro, sem vermelho) ── */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_4%_6%,rgba(8,10,35,0.55)_0%,transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_45%,transparent_35%,rgba(0,0,0,0.82)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-deep)]/90 to-transparent sm:h-56 sm:from-[var(--bg-deep)]"
        aria-hidden
      />
      <div className="grain-overlay z-0 opacity-30" aria-hidden />

      {/* ── Decorative depth (tons neutros) ── */}
      <div
        className="ambient-orb pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full"
        aria-hidden
      />
      <div
        className="ambient-orb pointer-events-none absolute -left-24 bottom-1/4 h-[280px] w-[280px] rounded-full opacity-50"
        aria-hidden
      />
      {/* ── Content ── */}
      <div className="relative z-10 flex w-full flex-col pt-[70px] pb-4 sm:pb-6 md:min-h-dvh md:items-start lg:pt-[calc(70px+4.5rem)] lg:pb-8">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:py-12 lg:px-12 lg:pb-10 lg:pt-6">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-7 lg:gap-9">
              <Badge
                variant="neon"
                className="animate-slide-up w-fit gap-1.5 px-2.5 py-1 text-[8px] font-semibold tracking-[0.18em] uppercase sm:text-[9px]"
              >
                <span
                  className="glow-pulse h-1 w-1 rounded-full bg-red-600 shadow-[0_0_6px_rgba(220,38,38,0.9)]"
                  aria-hidden
                />
                Melhor Academia de Piraju. Since 2025
              </Badge>

              <h1
                id="hero-heading"
                className="animate-slide-up delay-100 space-y-0 leading-none"
              >
                <span className="block font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.86] tracking-[0.02em] text-[var(--white-neon)] lg:text-[clamp(2.5rem,5vw,5.5rem)]">
                  DISCIPLINA
                </span>
                <span className="block font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.86] tracking-[0.02em] text-[var(--white-neon)] lg:text-[clamp(2.5rem,5vw,5.5rem)]">
                  SUPERA
                </span>
                <span className="block font-display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.86] tracking-[0.02em] text-red-600 text-glow-red lg:text-[clamp(2.5rem,5vw,5.5rem)]">
                  MOTIVAÇÃO
                </span>
              </h1>

              <div
                className="animate-slide-up delay-200 flex items-center gap-3"
                aria-hidden
              >
                <div className="neon-red-line h-px w-10 bg-red-600/80" />
                <div className="neon-red-line h-[3px] w-[3px] rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
                <div className="h-px w-4 bg-red-700/50" />
              </div>

              <p className="animate-slide-up delay-300 max-w-[27rem] text-base font-light leading-[1.75] text-zinc-400 sm:text-[1.05rem]">
                Todo mundo começa do zero, o{" "}
                <span className="font-semibold text-red-600 text-neon-red">SEGREDO</span> é{" "}
                <span className="font-semibold text-zinc-100">NÃO PARAR</span>
              </p>

              <div className="animate-slide-up delay-400 flex flex-wrap gap-3">
                <Button asChild size="lg" className="group">
                  <Link href="#planos">
                    Começar Agora
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#estrutura">Ver Estrutura</Link>
                </Button>
              </div>

              <div className="animate-slide-up delay-500 grid w-full max-w-xl grid-cols-3 gap-1.5 sm:gap-3">
                {trustBadges.map(({ icon: Icon, text }) => (
                  <Badge
                    key={text}
                    variant="default"
                    className="min-w-0 flex-col justify-center gap-1 px-1.5 py-1.5 text-center text-[8px] leading-snug whitespace-normal sm:flex-row sm:gap-2 sm:px-3 sm:text-[11px] transition-shadow hover:shadow-[0_0_14px_rgba(220,38,38,0.22)] hover:border-red-800/40"
                  >
                    <Icon size={12} className="text-red-600 shrink-0 max-sm:h-2.5 max-sm:w-2.5" aria-hidden />
                    {text}
                  </Badge>
                ))}
              </div>

              <div
                className="animate-slide-up delay-600 flex flex-wrap items-stretch gap-0 divide-x divide-zinc-800/60 border-t border-red-900/25 pt-6 shadow-[0_-1px_20px_rgba(220,38,38,0.08)] lg:border-0 lg:pt-1 lg:shadow-none"
                role="list"
                aria-label="Indicadores da academia"
              >
                {stats.map(({ value, label, icon }) => (
                  <div
                    key={label}
                    role="listitem"
                    className="flex min-w-[100px] flex-col gap-0.5 px-5 first:pl-0 last:pr-0"
                  >
                    <span className="flex items-center gap-1 text-xl font-semibold tracking-tight text-white text-neon-red">
                      {value}
                      {icon && (
                        <Star
                          size={14}
                          className="fill-red-600 text-red-600 drop-shadow-[0_0_6px_rgba(220,38,38,0.8)]"
                          aria-label="estrelas"
                        />
                      )}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#planos"
          className="group/explore animate-fade-in delay-800 mt-2 flex flex-col items-center gap-0.5 self-center text-zinc-600 transition-colors hover:text-red-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600/50 rounded-lg px-1 lg:absolute lg:bottom-10 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:gap-1.5 lg:px-2"
          aria-label="Rolar para conhecer os planos"
        >
          <span className="text-[8px] font-semibold tracking-[0.22em] uppercase sm:text-[9px] lg:text-[11px] lg:tracking-[0.26em]">
            Explorar
          </span>
          <div className="explore-scroll-track lg:h-6" aria-hidden />
          <ChevronDown
            size={13}
            className="explore-scroll-bounce text-red-600/80 drop-shadow-[0_0_6px_rgba(220,38,38,0.6)] group-hover/explore:text-red-600 lg:hidden"
            aria-hidden
          />
          <ChevronDown
            size={18}
            className="explore-scroll-bounce hidden text-red-600/80 drop-shadow-[0_0_8px_rgba(220,38,38,0.65)] group-hover/explore:text-red-600 lg:block"
            aria-hidden
          />
        </a>
      </div>
    </section>
  );
}
