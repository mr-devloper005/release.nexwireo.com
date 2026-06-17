import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed } from '@/lib/site-connector'
import { buildPostUrl, getPostTaskKey } from '@/lib/task-data'
import { getMockPostsForTask } from '@/lib/mock-posts'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { pagesContent } from '@/editable/content/pages.content'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: pagesContent.search.metadata.title,
    description: pagesContent.search.metadata.description,
  })
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, ' ')
const compactText = (value: unknown) => typeof value === 'string' ? stripHtml(value).replace(/\s+/g, ' ').trim().toLowerCase() : ''
const compactRaw = (value: unknown) => typeof value === 'string' ? value.trim() : ''
const getContent = (post: SitePost) => post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
const getImage = (post: SitePost) => {
  const content = getContent(post)
  const media = Array.isArray(post.media) ? post.media.find((item) => typeof item?.url === 'string')?.url : ''
  const images = Array.isArray(content.images) ? content.images.find((item) => typeof item === 'string') as string | undefined : ''
  return media || compactRaw(content.featuredImage) || compactRaw(content.image) || compactRaw(content.thumbnail) || images || ''
}
const summaryOf = (post: SitePost) => post.summary || compactRaw(getContent(post).description) || compactRaw(getContent(post).excerpt) || ''

const matches = (post: SitePost, query: string, category: string, task: string) => {
  const content = getContent(post)
  const typeText = compactText(content.type)
  if (typeText === 'comment') return false
  const derivedTask = getPostTaskKey(post) || typeText
  if (task && derivedTask !== task) return false
  const categoryText = compactText(content.category)
  const tagsText = compactText(Array.isArray(post.tags) ? post.tags.join(' ') : '')
  if (category && !(categoryText || tagsText).includes(category)) return false
  if (!query) return true
  return [post.title, post.summary, content.description, content.body, content.excerpt, content.category, Array.isArray(post.tags) ? post.tags.join(' ') : '']
    .some((value) => compactText(value).includes(query))
}

function SearchResultCard({ post, index }: { post: SitePost; index: number }) {
  const task = getPostTaskKey(post) as TaskKey | null
  const href = task ? buildPostUrl(task, post.slug) : `/article/${post.slug}`
  const image = getImage(post)
  const summary = summaryOf(post)
  const taskLabel = SITE_CONFIG.tasks.find((item) => item.key === task)?.label || 'Post'
  const strong = index % 5 === 0

  return (
    <Link href={href} className={`group block overflow-hidden rounded-lg bg-white shadow-[0_12px_28px_rgba(8,38,59,.1)] transition hover:-translate-y-1 ${strong ? 'md:col-span-2' : ''}`}>
      {image ? (
        <div className={`relative overflow-hidden bg-[#08263b] ${strong ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}>
          <img src={image} alt="" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-[#38c3cc] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black">{taskLabel}</span>
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        {!image ? <span className="rounded-full bg-[#38c3cc] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black">{taskLabel}</span> : null}
        <h2 className="mt-4 line-clamp-3 text-2xl font-black leading-tight text-black">{post.title}</h2>
        {summary ? <p className="mt-4 line-clamp-3 text-sm font-semibold leading-7 text-[#314a58]">{summary}</p> : null}
        <span className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#006d86] px-4 py-2 text-xs font-black text-[#006d86]">Open result <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

export default async function SearchPage({ searchParams }: { searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }> }) {
  const resolved = (await searchParams) || {}
  const query = (resolved.q || '').trim()
  const normalized = query.toLowerCase()
  const category = (resolved.category || '').trim().toLowerCase()
  const task = ''
  const useMaster = resolved.master !== '0'
  const feed = await fetchSiteFeed(useMaster ? 1000 : 300, useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined)
  const posts = feed?.posts?.length ? feed.posts : useMaster ? [] : SITE_CONFIG.tasks.filter((item) => item.enabled).flatMap((item) => getMockPostsForTask(item.key))
  const results = posts.filter((post) => matches(post, normalized, category, task)).slice(0, normalized ? 80 : 36)

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#dff6fb] text-black">
        <section>
          <div className="teal-geometry text-white">
            <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.search.hero.badge}</p>
                <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">Find releases, announcements, visuals, and resources faster.</h1>
                <p className="mt-6 max-w-xl text-base font-semibold leading-8 text-white/82">{pagesContent.search.hero.description}</p>
              </div>
              <form action="/search" className="self-center rounded-lg bg-white/95 p-6 text-black shadow-[0_18px_42px_rgba(8,38,59,.18)] sm:p-8">
                <input type="hidden" name="master" value="1" />
                <label className="flex items-center gap-3 rounded-full border-2 border-[#b9dce4] bg-white px-4 py-3">
                  <Search className="h-5 w-5 text-[#006d86]" />
                  <input name="q" defaultValue={query} placeholder={pagesContent.search.hero.placeholder} className="min-w-0 flex-1 bg-transparent text-base font-bold outline-none placeholder:text-current/35" />
                </label>
                <button className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#38c3cc] px-6 text-sm font-black text-black transition hover:bg-[#08263b] hover:text-white" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-4 border-b-4 border-[#647b86] px-4 py-10 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#006d86]">{results.length} results</p>
              <h2 className="mt-2 text-4xl font-black">{query ? `Results for "${query}"` : pagesContent.search.resultsTitle}</h2>
            </div>
            <Link href="/media-distribution" className="inline-flex items-center gap-2 rounded-full border-2 border-[#006d86] bg-white px-5 py-3 text-sm font-black text-[#006d86] hover:bg-[#006d86] hover:text-white">Browse latest <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {results.length ? (
            <div className="mx-auto grid max-w-[1280px] gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
              {results.map((post, index) => <SearchResultCard key={post.id || post.slug} post={post} index={index} />)}
            </div>
          ) : (
            <div className="mx-auto my-10 max-w-[1280px] rounded-lg border border-dashed border-[#006d86] bg-white p-10 text-center">
              <p className="text-2xl font-black">No matching posts found.</p>
              <p className="mt-3 text-sm font-semibold opacity-60">Try a different keyword, task type, or category.</p>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}
