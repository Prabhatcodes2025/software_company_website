import { clsx } from "clsx";

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanfire sm:text-sm">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-[1.07] text-white sm:text-5xl lg:text-[3.4rem]">{title}</h2>
      <p className={clsx("mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg", align === "center" && "mx-auto")}>{text}</p>
    </div>
  );
}
