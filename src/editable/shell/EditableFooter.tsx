'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Distribution', href: '/media-distribution' },
  ]

  return (
    <footer className="bg-[#e8eef1] text-[#07131c]">
      <section className="teal-geometry">
        <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Ready to Announce with Confidence?</h2>
          <p className="mt-2 max-w-4xl text-xl">Send us a message and a member of our media distribution team will contact you to discuss your needs.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#08263b] px-7 py-3.5 text-lg font-black text-white transition hover:bg-white hover:text-[#08263b]">Contact Us</Link>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr_auto] lg:items-center">
          <Link href="/" className="inline-flex items-center gap-4">
            <img src="/favicon.png" alt="Newsfile logo" className="h-20 w-20 rounded-2xl object-contain" />
            <span className="text-xl font-black uppercase tracking-[.14em] text-[#061b34]">Newsfile</span>
          </Link>
          <div className="flex flex-wrap gap-6 text-sm font-semibold">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#006d86]">{item.label}</Link>
            ))}
            {session ? <button onClick={logout} className="font-semibold hover:text-[#006d86]">Logout</button> : <Link href="/login" className="hover:text-[#006d86]">Login</Link>}
            {!session ? <Link href="/signup" className="hover:text-[#006d86]">Sign Up</Link> : null}
          </div>
        </div>

        <p className="mt-8 text-xs leading-6 text-[#46606b]">{globalContent.footer?.description || SITE_CONFIG.description} Content on this site is provided for general informational purposes and should be reviewed independently before relying on it.</p>
        <p className="mt-5 text-xs text-[#46606b]">Copyright (c) {year} {SITE_CONFIG.name}. All rights reserved.</p>
      </div>

      <Link href="#" className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#38c3cc] text-xs font-black text-black shadow-[0_12px_30px_rgba(8,38,59,.25)] transition hover:-translate-y-1">
        TOP
      </Link>
    </footer>
  )
}
