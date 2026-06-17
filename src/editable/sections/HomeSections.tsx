import Link from 'next/link'
import { ArrowRight, Globe2, LockKeyhole, Monitor, Search, UserRoundCheck, Zap } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const serviceCards = [
  ['Press Release Distribution', 'Reach media, customers, stakeholders, and online audiences with clean release distribution.'],
  ['Editorial Filing Support', 'Prepare accurate public updates with a workflow designed for speed and clarity.'],
  ['Strategic Communications', 'Shape announcements for brand, investor, and market-facing communication moments.'],
  ['Analytics and Global Reach', 'Track performance signals and extend visibility across channels and audiences.'],
]

const whyCards = [
  { Icon: Zap, title: 'Customer-First Support', text: 'Responsive help for time-sensitive releases, articles, and campaign updates.' },
  { Icon: Globe2, title: 'Global News Distribution', text: 'Organize stories for readers, media contacts, search, and social discovery.' },
  { Icon: UserRoundCheck, title: 'Dedicated Filing Experts', text: 'Keep publishing simple with focused layouts and clear submission paths.' },
  { Icon: LockKeyhole, title: 'Secure Infrastructure', text: 'A dependable presentation layer for public updates and content workflows.' },
  { Icon: Monitor, title: 'All-In-One Platform', text: 'Manage releases, articles, resources, search, and discovery in one place.' },
]

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]

  return (
    <section className="bg-white">
      <div className="teal-geometry min-h-[450px]">
        <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[1280px] flex-col justify-center px-4 py-16 text-white sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[.2em] text-white/75">Newsfile distribution</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Stay Ahead with EDGAR Next</h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold text-white/90">Accurate, on-time media releases made easy by a platform readers can trust.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>Read More</Link>
            {lead ? <Link href={postHref(primaryTask, lead, primaryRoute)} className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-black text-white hover:bg-white hover:text-[#006d86]">Latest Release <ArrowRight className="h-4 w-4" /></Link> : null}
          </div>
          <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 gap-3 sm:flex">
            {[0, 1, 2, 3, 4].map((dot) => <span key={dot} className={`h-2 rounded-full ${dot === 3 ? 'w-8 bg-[#38c3cc]' : 'w-8 bg-white/85'}`} />)}
          </div>
        </div>
      </div>

      <div className="bg-[#dff6fb]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl"><span className="text-[#006d86]">Your Partner</span> for Press Release Distribution and Regulatory Filings</h2>
          <p className="mt-2 text-lg">The choice for organizations managing global news distribution, public updates, and content compliance.</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map(([title, text], index) => (
              <div key={title} className="float-card rounded-lg bg-white p-8 shadow-[0_12px_28px_rgba(8,38,59,.12)]" style={{ animationDelay: `${index * 180}ms` }}>
                <span className="mx-auto block h-1 w-16 rounded-full bg-[#38c3cc]" />
                <h3 className="mt-5 text-xl font-black leading-tight">{title}</h3>
                <p className="mt-4 text-[15px] leading-6 text-[#263e49]">{text}</p>
              </div>
            ))}
          </div>
          <Link href="/create" className="mt-8 inline-flex rounded-full bg-[#38c3cc] px-8 py-3 text-lg font-black text-black transition hover:bg-[#08263b] hover:text-white">Submit Your Press Release</Link>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.length ? posts : []
  if (!railPosts.length) return null
  const loop = [...railPosts.slice(0, 8), ...railPosts.slice(0, 8)]

  return (
    <section className="network-lines bg-[#38c3cc] py-16">
      <div className="mx-auto max-w-[1360px] overflow-hidden px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black">Why TMX Newsfile</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {whyCards.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-lg bg-white p-8 text-center shadow-[0_14px_30px_rgba(8,38,59,.12)]">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#e1f8fb] text-[#006d86]"><Icon className="h-10 w-10" /></div>
              <h3 className="mt-5 text-xl font-black leading-tight">{title}</h3>
              <p className="mt-4 text-[15px] leading-6">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-t-[2rem] bg-[#dff6fb] px-4 py-12 sm:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl font-black">Today&apos;s Top Releases</h2>
            <Link href={primaryRoute} className={dc.button.secondary}>View All <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="overflow-hidden">
            <div className="auto-rail">
              {loop.map((post, index) => <RailPostCard key={`${post.id || post.slug}-${index}`} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const insightPosts = posts.slice(0, 4)
  if (!insightPosts.length) return null

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-black">Chosen by Industry Leaders</h2>
        <div className="mt-12 grid grid-cols-2 items-center gap-10 text-center text-3xl font-black text-black/45 sm:grid-cols-5">
          {['IAMGOLD', 'CANLAN', 'Canadian Natural', 'Suncor', 'shopify'].map((logo) => <div key={logo}>{logo}</div>)}
        </div>
      </div>

      <div className="mt-16 bg-[#dff6fb] py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black sm:text-4xl">Trusted by Professionals Across North America</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['TMX Newsfile is a one-stop resource for our news and public updates. The quality and speed make the process easier to manage.', 'Manager, Administration and Corporate Affairs'],
              ['Our company has issued updates for years. This platform has been a true partner, providing priority service from day one.', 'Blue-Chip Canadian Company'],
              ['We value the combination of compliance trust and brand exposure; it is a rare mix.', 'Ivan Wu'],
            ].map(([quote, author]) => (
              <blockquote key={author} className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.12)]">
                <p className="leading-7">{quote}</p>
                <cite className="mt-5 block text-right text-sm font-black not-italic text-[#006d86]">{author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black">TMX Newsfile Insights</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insightPosts.map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group overflow-hidden rounded-lg bg-white shadow-[0_12px_28px_rgba(8,38,59,.12)] transition hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden"><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5">
                <p className="text-sm text-[#314a58]">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : getEditableCategorySafe(post)}</p>
                <h3 className="mt-4 line-clamp-3 text-base font-black leading-tight">{post.title}</h3>
                <p className="mt-4 line-clamp-6 text-[15px] leading-6 text-[#314a58]">{getEditableExcerpt(post, 210)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-5">
          <span className="h-1 flex-1 rounded-full bg-[#647b86]" />
          <Link href={primaryRoute} className={dc.button.secondary}>View All <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

function getEditableCategorySafe(post: SitePost) {
  return post.tags?.[0] || 'Insight'
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts
  const briefs = source.slice(0, 6)
  if (!briefs.length) return null

  return (
    <section className="bg-[#dff6fb] py-14">
      <div className={`${dc.shell.section}`}>
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <form action="/search" className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.12)]">
            <h2 className="text-3xl font-black">Search the full archive</h2>
            <p className="mt-3 leading-7 text-[#314a58]">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
            <label className="mt-6 flex items-center rounded-full border-2 border-[#b9dce4] bg-white px-4">
              <Search className="h-5 w-5 text-[#006d86]" />
              <input name="q" placeholder="Search releases" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
              <button className="rounded-full bg-[#38c3cc] px-5 py-2 text-sm font-black">Search</button>
            </label>
          </form>
          <div className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.12)]">
            <div className="flex items-center justify-between gap-5 border-b border-[#c8e2e8] pb-4">
              <h2 className="text-3xl font-black">The briefing</h2>
              <Link href={primaryRoute} className="text-sm font-black text-[#006d86]">View all</Link>
            </div>
            <div className="mt-2 grid gap-x-8 md:grid-cols-2">
              {briefs.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return null
}
