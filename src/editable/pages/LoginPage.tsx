import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#dff6fb] text-[#07131c]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1280px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="teal-geometry flex flex-col justify-center rounded-lg p-8 text-white shadow-[0_18px_42px_rgba(8,38,59,.18)] sm:p-12 lg:p-16">
            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">Media release access</p>
              <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight sm:text-7xl">Welcome back to your distribution workspace.</h1>
              <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-white/82">Login to manage release submissions, review saved details, and continue preparing media distribution updates.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-white p-7 shadow-[0_12px_28px_rgba(8,38,59,.12)] sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#006d86]">Member access</p>
            <h2 className="mt-3 text-4xl font-black">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[#c8e2e8] pt-5 text-sm text-[#314a58]">New here? <Link href="/signup" className="font-black text-[#006d86] underline-offset-4 hover:underline">Create a release account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
