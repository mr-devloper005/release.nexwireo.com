'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LockKeyhole, Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Distribution', href: '/media-distribution' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_1px_0_rgba(0,109,134,.18)]">
      <div className="mx-auto grid min-h-[112px] max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#b8dce3] lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link href="/" className="flex items-center justify-center gap-5 text-center">
          <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-20" />
          <span className="hidden border-l border-[#c9dde3] pl-5 text-xl font-black uppercase tracking-[.14em] text-[#061b34] sm:inline">{SITE_CONFIG.name}</span>
        </Link>

        <div className="flex items-center justify-end gap-3 text-sm">
          <Link href="/search" className="hidden items-center gap-2 font-semibold transition hover:text-[#006d86] sm:inline-flex"><Search className="h-4 w-4" /> Search</Link>
          {session ? (
            <>
              <button type="button" onClick={logout} className="hidden font-semibold sm:block">Logout</button>
            </>
          ) : <Link href="/login" className="hidden items-center gap-1 font-semibold sm:inline-flex"><LockKeyhole className="h-4 w-4" /> Login</Link>}
          {!session ? <Link href="/signup" className="hidden rounded-full bg-[#38c3cc] px-5 py-2.5 font-black text-black transition hover:bg-[#08263b] hover:text-white sm:inline-flex">Sign Up</Link> : null}
        </div>
      </div>

      <div className="border-t border-[#d2e7ec] bg-white">
        <div className="mx-auto flex min-h-[48px] max-w-[1280px] items-center gap-7 px-4 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 text-[15px] font-semibold hover:text-[#006d86]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#d2e7ec] bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            {[...navItems, { label: 'Search', href: '/search' }, ...(session ? [] : [{ label: 'Login', href: '/login' }, { label: 'Sign Up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-[#e9f8fb] px-4 py-3 text-sm font-black">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl bg-[#e9f8fb] px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
