import React, { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          {title}
        </h2>
        <div className="section-card text-sm leading-relaxed text-slate-200">
          {children}
        </div>
      </div>
    </section>
  );
};
