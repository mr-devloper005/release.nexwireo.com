import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#dff6fb] text-[#07131c]">
        <section className="teal-geometry text-white">
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight sm:text-7xl">
              Media distribution built for clear public announcements.
            </h1>
            <p className="mt-6 max-w-3xl border-l-4 border-[#38c3cc] pl-5 text-lg font-semibold leading-8 text-white/85">
              {SITE_CONFIG.name} helps press releases, newsroom updates, visuals, and campaign resources feel organized, credible, and easy to explore.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
          <article className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.12)] sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#006d86]">About {SITE_CONFIG.name}</p>
            <p className="mt-6 text-3xl font-black leading-tight sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-8 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/media-distribution" className="inline-flex items-center gap-2 rounded-full bg-[#38c3cc] px-6 py-3 text-sm font-black text-black transition hover:bg-[#08263b] hover:text-white">View Distribution <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-[#006d86] px-6 py-3 text-sm font-black text-[#006d86] transition hover:bg-[#006d86] hover:text-white">Contact Us</Link>
            </div>
          </article>
          <aside className="grid gap-5">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.1)]">
                <span className="block h-1 w-16 rounded-full bg-[#38c3cc]" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#006d86]">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#314a58]">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Explore the releases shaping public conversations.</h2>
            <Link href="/search" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#38c3cc] px-6 py-3 text-sm font-black text-black transition hover:bg-[#08263b] hover:text-white">Search releases <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
