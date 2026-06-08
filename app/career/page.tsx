import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { jobs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
  description: "Join Clickmyze Technologies Pvt Ltd and build premium software products with a remote-first engineering team."
};

export default function CareerPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          eyebrow="Career"
          title="Do meaningful product work with sharp, kind people."
          text="We hire engineers, designers, strategists, and cloud specialists who care about craft, ownership, and clear communication."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-5">
          {jobs.map((job) => (
            <article key={job.role} className="glass flex max-w-full flex-col gap-5 overflow-hidden rounded-2xl p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <h2 className="break-words text-2xl font-black text-white">{job.role}</h2>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-2"><Briefcase size={16} /> {job.type}</span>
                </div>
              </div>
              <a href="mailto:careers@clickmyze.com" className="w-full rounded-lg bg-cyanfire px-5 py-3 text-center font-bold text-ink transition hover:bg-mint sm:w-auto">
                Apply Now
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
