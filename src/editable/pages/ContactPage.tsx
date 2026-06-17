'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release desk', body: 'Send announcement details, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Distribution support', body: 'Discuss press release distribution, media visibility, newsroom placement, and campaign updates.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing workflow, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#dff6fb] text-[#07131c]">
        <section className="teal-geometry text-white">
          <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight sm:text-7xl">Let&apos;s route your media release to the right team.</h1>
            <p className="mt-6 max-w-3xl border-l-4 border-[#38c3cc] pl-5 text-lg font-semibold leading-8 text-white/85">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="grid gap-5">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.1)]">
                <div className="flex items-center justify-between"><desk.icon className="h-6 w-6 text-[#006d86]" /><span className="text-xs font-black text-[#6c7e87]">0{index + 1}</span></div>
                <h2 className="mt-6 text-2xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#314a58]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-lg bg-white p-6 shadow-[0_12px_28px_rgba(8,38,59,.12)] sm:p-10 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#006d86]">Send a message</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
