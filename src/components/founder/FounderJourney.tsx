import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/** Chapters use the founder's existing biography wording; nothing is added. */
const chapters: { no: string; title: string; body: React.ReactNode }[] = [
  {
    no: "01",
    title: "The Beginning",
    body: (
      <>
        <p>
          DEVAMRUTAM is founded by <strong>Chakka Sraeyes</strong>, a final-year Computer Science and Engineering student at SRM Institute of Science and Technology.
        </p>
        <p>He has a strong interest in Indian spiritual traditions and devotional education.</p>
      </>
    ),
  },
  {
    no: "02",
    title: "Learning & Exploration",
    body: (
      <p>
        He communicates in English, Hindi, Telugu, Tamil and Odia, helping make Sanskrit shlokas, devotional stories and philosophical teachings accessible to children and families across different linguistic backgrounds.
      </p>
    ),
  },
  {
    no: "03",
    title: "Devotional Engagement",
    body: (
      <p>
        His spiritual learning journey includes devotional service at <strong>ISKCON Chennai</strong>.
      </p>
    ),
  },
  {
    no: "04",
    title: "Scriptural Learning",
    body: (
      <>
        <p>
          Bhagavad Gita recitation examination achievements through <strong>Geeta Pariwar</strong>, and traditional devotional programmes completed through <strong>Vishnuchitta Gurukulam</strong> associated with <strong>Bhadrachadri Sri Rama Temple of USA</strong>.
        </p>
        <p>
          His learning achievements include Bhagavad Gita recitation, Vishnu Sahasranama Stotra recitation, Nitya Pooja and Panchamrutha Abhishekam programmes.
        </p>
      </>
    ),
  },
  {
    no: "05",
    title: "The Vision",
    body: (
      <>
        <p>
          DEVAMRUTAM is a spiritual learning and cultural initiative dedicated to making the timeless wisdom of India&apos;s spiritual traditions accessible to children, families and individuals across generations.
        </p>
        <blockquote className="mt-5 border-l border-[#B68A42] pl-5">
          <p className="font-cormorant text-[1.35rem] italic leading-snug text-[#173D32]">
            &ldquo;Ancient wisdom should not remain limited to books; it should become a meaningful part of everyday life.&rdquo;
          </p>
          <footer className="mt-2 text-xs font-medium text-[#77756D]">— Chakka Sraeyes, Founder</footer>
        </blockquote>
      </>
    ),
  },
];

export default function FounderJourney() {
  return (
    <section
      id="founder-journey"
      aria-labelledby="founder-heading"
      className="scroll-mt-20 border-y border-[#E7DFD0] bg-[#FAF8F2] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="block font-devanagari text-xs font-semibold text-[#B68A42]">संस्थापक परिचय</span>
          <h2 id="founder-heading" className="mt-1 font-cormorant text-3xl font-bold text-[#173D32] sm:text-5xl">
            The Founder&apos;s Journey
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-[#B68A42]" aria-hidden="true" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* portrait: first on mobile, sticky beside the story on desktop */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <figure className="mx-auto max-w-sm lg:mx-0">
              <div className="relative p-3">
                <span className="pointer-events-none absolute inset-0 border border-[#B68A42]/60" aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F5EBD9]">
                  <Image
                    src="/images/founder/founder-placeholder.jpg"
                    alt="Chakka Sraeyes, Founder of DEVAMRUTAM"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <figcaption className="mt-5 text-center lg:text-left">
                <p className="font-cormorant text-2xl font-bold text-[#173D32]">Chakka Sraeyes</p>
                <p className="mt-0.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#B68A42]">Founder, DEVAMRUTAM</p>
                <p className="mt-3 text-sm font-semibold text-[#173D32]">Final-year B.Tech CSE Student</p>
                <p className="text-xs text-[#77756D]">SRM Institute of Science and Technology</p>
              </figcaption>
            </figure>
          </Reveal>

          {/* story: vertical timeline of five chapters */}
          <div>
            <ol className="relative ml-2 border-l border-[#D8BC83]">
              {chapters.map((c, i) => (
                <Reveal as="li" key={c.no} delay={i % 2 ? 80 : 0} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
                  <span
                    className="absolute -left-[6px] top-[0.55rem] h-[11px] w-[11px] rounded-full border border-[#B68A42] bg-[#FAF8F2]"
                    aria-hidden="true"
                  />
                  <p className="font-cormorant text-lg font-semibold tracking-[0.2em] text-[#B68A42]">{c.no}</p>
                  <h3 className="mt-0.5 font-cormorant text-2xl font-bold text-[#173D32] sm:text-[1.9rem]">{c.title}</h3>
                  <div className="mt-3 max-w-[60ch] space-y-3 text-sm leading-relaxed text-[#373A35] sm:text-[0.98rem]">{c.body}</div>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-10">
              <p className="max-w-[60ch] text-[0.72rem] italic leading-relaxed text-[#77756D]">
                *Note of Integrity: The founder does not claim formal Acharya or certified guru status, but shares this platform out of dedicated devotional practice, verified scriptural study, and enthusiasm for educating young children.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
