"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Preview />
        <KeystrokeDemo />
        <Comparison />
        <HowItWorks />
        <FirstLaunch />
        <UsageGuide />
        <Privacy />
        <FAQ />
        <DownloadBanner />
      </main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-rule bg-background/85 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo />
          <span className="serif text-xl font-semibold tracking-tight">
            Copaste
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-foreground transition">
            Features
          </a>
          <a href="#preview" className="hover:text-foreground transition">
            Preview
          </a>
          <a href="#how" className="hover:text-foreground transition">
            How it works
          </a>
          <a href="#first-launch" className="hover:text-foreground transition">
            Install
          </a>
          <a href="#using" className="hover:text-foreground transition">
            Use
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
        </nav>
        <a
          href="/Copaste_0.1.7.dmg"
          download
          className="hidden sm:inline-flex items-center gap-2 rounded-md bg-accent text-white px-4 py-2 text-sm font-medium hover:bg-accent-hover transition"
        >
          <DownloadIcon />
          Download
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-5">
            For macOS · Free download
          </p>
          <h1 className="serif text-5xl md:text-6xl leading-[1.05] font-semibold tracking-tight">
            Your clipboard,
            <br />
            <span className="italic">remembered.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl">
            Copaste is a quiet little app that lives in your menu bar and keeps
            a tidy history of everything you copy &mdash; text, images, and
            screenshots. Bring any of it back with a single keystroke.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/Copaste_0.1.7.dmg"
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent text-white px-6 py-3 text-base font-medium hover:bg-accent-hover transition shadow-sm"
            >
              <DownloadIcon />
              Download for macOS
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-rule bg-card px-6 py-3 text-base font-medium hover:border-foreground/40 transition"
            >
              Learn more
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Version 0.1.7 &middot; Requires macOS 13.0 or later &middot; ~1.8 MB
          </p>
        </div>
        <div className="md:col-span-6">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

type TabKey = "text" | "images" | "groups";

function HeroCard() {
  const [tab, setTab] = useState<TabKey>("text");
  const rows: ClipEntry[] = [
    {
      text: "https://copaste.app — share with the team",
      time: "Just now",
      pinned: true,
      selected: true,
    },
    {
      text: "git checkout -b feature/landing-redesign",
      time: "2 min ago",
      pinned: true,
    },
    {
      text: "rgba(138, 75, 31, 0.92)",
      time: "8 min ago",
      pinned: true,
    },
    {
      text: "1. Q2 launch checklist\nFinal review with design + eng before Friday demo",
      time: "22 min ago",
      pinned: false,
    },
    {
      text: "alex.rivera@example.com",
      time: "1 hr ago",
      pinned: false,
    },
  ];
  const counts = { text: 42, images: 4, groups: 2 } as const;
  const footerCount = tab === "groups" ? 0 : counts[tab];
  return (
    <div className="relative font-mac">
      <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-3xl blur-2xl" />
      <div className="relative rounded-[12px] border border-black/10 bg-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_60px_-24px_rgba(15,15,15,0.45),0_2px_6px_-2px_rgba(15,15,15,0.15)] overflow-hidden">
        <div className="relative h-9 bg-gradient-to-b from-[#f7f6f4] to-[#ececea] border-b border-black/10 flex items-center px-3">
          <div className="flex items-center gap-[6px]">
            <span className="size-3 rounded-full bg-[#ff5f57] ring-1 ring-inset ring-black/10" />
            <span className="size-3 rounded-full bg-[#febc2e] ring-1 ring-inset ring-black/10" />
            <span className="size-3 rounded-full bg-[#28c840] ring-1 ring-inset ring-black/10" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[12px] text-neutral-600 font-medium tracking-tight">
            Copaste
          </span>
        </div>

        <div className="bg-gradient-to-b from-white to-[#fbfbfa]">
          <div className="px-5 pt-3 flex items-center gap-7 text-[13px]">
            <Tab
              label="Text"
              count={counts.text}
              active={tab === "text"}
              onClick={() => setTab("text")}
            />
            <Tab
              label="Images"
              count={counts.images}
              active={tab === "images"}
              onClick={() => setTab("images")}
            />
            <Tab
              label="Groups"
              count={counts.groups}
              active={tab === "groups"}
              onClick={() => setTab("groups")}
            />
          </div>
          <div className="border-b border-black/[0.08]" />
          <div className="px-3 pt-3 pb-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 rounded-full bg-white border border-black/10 px-3 py-1.5">
              <span className="text-neutral-400">
                <SearchIcon />
              </span>
              <span className="text-[13px] text-neutral-500 flex-1 flex items-center min-w-0">
                {tab !== "text" && (
                  <span className="inline-block w-px h-3.5 bg-neutral-700 mr-0.5 animate-pulse" />
                )}
                Search clipboard history…
              </span>
            </div>
            <button className="text-neutral-400 hover:text-neutral-700 transition p-1 shrink-0">
              <ScanIcon />
            </button>
            <button className="text-neutral-400 hover:text-neutral-700 transition p-1 shrink-0">
              <CalendarIcon />
            </button>
            <button className="text-neutral-400 hover:text-neutral-700 transition p-1 shrink-0">
              <SortIcon />
            </button>
          </div>

          <div className="h-[320px] overflow-hidden">
            {tab === "text" && (
              <div className="px-2 pb-1.5">
                {rows.map((r, i) => (
                  <ClipRow key={i} {...r} />
                ))}
              </div>
            )}
            {tab === "images" && <ImagesGrid />}
            {tab === "groups" && <GroupsView />}
          </div>
        </div>

        <div className="px-3 py-1.5 border-t border-black/[0.08] bg-[#f4f3f1] flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span>↵ paste</span>
            <span>⌘P pin</span>
            <span>⌘⌫ delete</span>
            <span>⌘A all</span>
            <span>⌥↑↓ reorder</span>
          </div>
          <span>{footerCount} items</span>
        </div>
      </div>
    </div>
  );
}

function ImagesGrid() {
  const items = [
    {
      dims: "1440×900",
      time: "5 min ago",
      selected: true,
      kind: "page" as const,
    },
    { dims: "480×320", time: "32 min ago", kind: "dialog" as const },
    { dims: "260×200", time: "1 hr ago", kind: "filter" as const },
    { dims: "640×520", time: "Yesterday", kind: "popup" as const },
  ];
  return (
    <div className="px-3 pt-2 pb-3 grid grid-cols-3 gap-2.5">
      {items.map((it, i) => (
        <ImageThumb key={i} {...it} />
      ))}
    </div>
  );
}

function ImageThumb({
  dims,
  time,
  selected,
  kind,
}: {
  dims: string;
  time: string;
  selected?: boolean;
  kind: "page" | "dialog" | "filter" | "popup";
}) {
  return (
    <div
      className={`group relative rounded-[7px] overflow-hidden bg-white transition ${
        selected
          ? "ring-2 ring-[#3478f6] shadow-[0_0_0_1px_rgba(52,120,246,0.25)]"
          : "ring-1 ring-black/10 hover:ring-black/20"
      }`}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <ThumbPreview kind={kind} />
        <div className="absolute top-1.5 right-1.5 flex items-center gap-1 opacity-90">
          <button
            className="size-[22px] rounded-full bg-black/55 text-white inline-flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition"
            aria-label="Pin"
          >
            <PinIcon />
          </button>
          <button
            className="size-[22px] rounded-full bg-black/55 text-white inline-flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition"
            aria-label="Delete"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className="px-2 py-1.5 flex items-center justify-between text-[10.5px] bg-white border-t border-black/[0.06]">
        <span className="font-medium text-neutral-800">{dims}</span>
        <span className="text-neutral-500">{time}</span>
      </div>
    </div>
  );
}

function ThumbPreview({ kind }: { kind: "page" | "dialog" | "filter" | "popup" }) {
  if (kind === "page") {
    // A landing-page screenshot vibe: warm bg, headline, CTA, side panel
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#fbf8f3] via-[#f7f1e6] to-[#f3ead8] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-3 bg-white/70 border-b border-black/[0.05] flex items-center px-1.5 gap-0.5">
          <span className="size-[3px] rounded-full bg-[#ff5f57]" />
          <span className="size-[3px] rounded-full bg-[#febc2e]" />
          <span className="size-[3px] rounded-full bg-[#28c840]" />
          <span className="ml-1 h-[3px] w-6 rounded-sm bg-neutral-300" />
        </div>
        <div className="absolute inset-0 pt-4 px-2 flex gap-2">
          <div className="flex-1 min-w-0">
            <div className="h-[3px] w-8 rounded bg-[#8a4b1f]/70 mb-1.5" />
            <div className="h-2 w-full rounded bg-neutral-900" />
            <div className="h-2 w-3/4 rounded bg-neutral-900 mt-0.5" />
            <div className="space-y-[2px] mt-2">
              <div className="h-[2px] w-full rounded bg-neutral-400/70" />
              <div className="h-[2px] w-5/6 rounded bg-neutral-400/70" />
              <div className="h-[2px] w-3/4 rounded bg-neutral-400/70" />
            </div>
            <div className="mt-2 flex gap-1">
              <span className="h-3 w-10 rounded bg-[#8a4b1f]" />
              <span className="h-3 w-8 rounded border border-neutral-300 bg-white" />
            </div>
          </div>
          <div className="w-[58px] rounded-md bg-white shadow-[0_4px_10px_-4px_rgba(0,0,0,0.25)] border border-black/10 p-[3px] self-start">
            <div className="flex gap-[2px] mb-1">
              <span className="size-[3px] rounded-full bg-[#ff5f57]" />
              <span className="size-[3px] rounded-full bg-[#febc2e]" />
              <span className="size-[3px] rounded-full bg-[#28c840]" />
            </div>
            <div className="h-[3px] rounded bg-neutral-200 mb-1" />
            <div className="space-y-[2px]">
              <div className="h-[3px] rounded bg-[#cfe0f5]" />
              <div className="h-[3px] rounded bg-neutral-100" />
              <div className="h-[3px] rounded bg-neutral-100" />
              <div className="h-[3px] rounded bg-neutral-100" />
              <div className="h-[3px] rounded bg-neutral-100" />
              <div className="h-[3px] rounded bg-neutral-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "dialog") {
    // Settings/preferences dialog screenshot — dark macOS sheet
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d2127] to-[#11151a] p-2 flex items-center justify-center">
        <div className="w-full bg-[#2b2e34] border border-white/10 rounded-[5px] text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="px-2 py-1 flex items-center gap-1 bg-gradient-to-b from-[#3a3d44] to-[#2b2e34] border-b border-black/30">
            <span className="size-[5px] rounded-full bg-[#ff5f57]" />
            <span className="size-[5px] rounded-full bg-[#febc2e]" />
            <span className="size-[5px] rounded-full bg-[#28c840]" />
            <span className="mx-auto text-[7px] text-white/80 font-medium">
              Preferences
            </span>
          </div>
          <div className="p-2">
            <div className="text-[7px] text-white/60 mb-0.5">Text clips</div>
            <div className="h-[5px] rounded-full bg-white/10 relative overflow-hidden mb-1.5">
              <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-[#3478f6] to-[#5a96ff]" />
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[6px] text-white/90 font-medium">
                100
              </span>
            </div>
            <div className="text-[7px] text-white/60 mb-0.5">Image clips</div>
            <div className="h-[5px] rounded-full bg-white/10 relative overflow-hidden mb-1.5">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-[#3478f6] to-[#5a96ff]" />
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[6px] text-white/90 font-medium">
                30
              </span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="size-[7px] rounded-sm bg-[#3478f6] inline-flex items-center justify-center">
                <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <span className="text-[7px] text-white/80">Launch at login</span>
            </div>
            <div className="flex justify-end gap-1 mt-1.5">
              <span className="px-1.5 py-[2px] rounded-[3px] text-[6.5px] bg-white/10 text-white/80">
                Cancel
              </span>
              <span className="px-1.5 py-[2px] rounded-[3px] text-[6.5px] bg-[#3478f6] text-white">
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "filter") {
    // Mini calendar / date picker
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    return (
      <div className="absolute inset-0 bg-white p-1.5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7px] font-semibold text-neutral-800">May 2026</span>
          <div className="flex gap-0.5 text-neutral-400">
            <span className="size-2 inline-flex items-center justify-center rounded-sm bg-neutral-100">
              <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="m15 6-6 6 6 6"/></svg>
            </span>
            <span className="size-2 inline-flex items-center justify-center rounded-sm bg-neutral-100">
              <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="m9 6 6 6-6 6"/></svg>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-[1px] text-[5.5px] text-neutral-500 mb-0.5">
          {["S","M","T","W","T","F","S"].map((d, i) => (
            <span key={i} className="text-center">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[1px]">
          {days.map((d) => (
            <span
              key={d}
              className={`aspect-square inline-flex items-center justify-center rounded-[2px] text-[5.5px] ${
                d === 12
                  ? "bg-[#3478f6] text-white font-semibold"
                  : d === 8 || d === 19
                    ? "bg-[#cfe0f5] text-neutral-800"
                    : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    );
  }
  // popup — terminal/code editor screenshot
  return (
    <div className="absolute inset-0 bg-[#1e1f24] overflow-hidden">
      <div className="h-3 bg-gradient-to-b from-[#3a3d44] to-[#2b2e34] flex items-center px-1.5 gap-0.5 border-b border-black/40">
        <span className="size-[3px] rounded-full bg-[#ff5f57]" />
        <span className="size-[3px] rounded-full bg-[#febc2e]" />
        <span className="size-[3px] rounded-full bg-[#28c840]" />
        <span className="mx-auto text-[6px] text-white/70 font-medium">
          page.tsx
        </span>
      </div>
      <div className="p-1.5 font-mono text-[6.5px] leading-tight space-y-[1px]">
        <div className="text-neutral-500">
          <span className="mr-1">1</span>
          <span className="text-[#c084fc]">import</span>
          <span className="text-white/85"> Link </span>
          <span className="text-[#c084fc]">from</span>
          <span className="text-[#86efac]"> &quot;next/link&quot;</span>
        </div>
        <div className="text-neutral-500">
          <span className="mr-1">2</span>
        </div>
        <div className="text-neutral-500">
          <span className="mr-1">3</span>
          <span className="text-[#c084fc]">export default function</span>
          <span className="text-[#fde047]"> Page</span>
          <span className="text-white/85">() {`{`}</span>
        </div>
        <div className="text-neutral-500 pl-2">
          <span className="mr-1">4</span>
          <span className="text-[#c084fc]">return</span>
          <span className="text-white/85"> (</span>
        </div>
        <div className="text-neutral-500 pl-3">
          <span className="mr-1">5</span>
          <span className="text-white/60">&lt;</span>
          <span className="text-[#7dd3fc]">main</span>
          <span className="text-white/60">&gt;</span>
        </div>
        <div className="text-neutral-500 pl-4">
          <span className="mr-1">6</span>
          <span className="text-white/60">&lt;</span>
          <span className="text-[#7dd3fc]">h1</span>
          <span className="text-white/60">&gt;</span>
          <span className="text-white/85">Copaste</span>
          <span className="text-white/60">&lt;/</span>
          <span className="text-[#7dd3fc]">h1</span>
          <span className="text-white/60">&gt;</span>
        </div>
        <div className="text-neutral-500 pl-3">
          <span className="mr-1">7</span>
          <span className="text-white/60">&lt;/</span>
          <span className="text-[#7dd3fc]">main</span>
          <span className="text-white/60">&gt;</span>
        </div>
        <div className="text-neutral-500 pl-2">
          <span className="mr-1">8</span>
          <span className="text-white/85">)</span>
        </div>
        <div className="text-neutral-500">
          <span className="mr-1">9</span>
          <span className="text-white/85">{`}`}</span>
        </div>
      </div>
    </div>
  );
}

function GroupsView() {
  return (
    <div className="px-2 pb-2">
      <button className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-[6px] hover:bg-black/[0.035] transition text-left">
        <span className="size-[18px] rounded-full bg-[#3478f6] text-white inline-flex items-center justify-center shrink-0">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
        <span className="text-[13px] font-semibold text-neutral-900">
          New Group
        </span>
      </button>
      <div className="mx-2 border-b border-black/[0.07]" />
      {[
        { name: "Project Atlas", count: 12 },
        { name: "Design tokens", count: 6 },
      ].map((g) => (
        <button
          key={g.name}
          className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-[6px] hover:bg-black/[0.035] transition text-left mt-1"
        >
          <span className="text-[#3478f6] shrink-0">
            <FolderIcon />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-neutral-900 leading-tight truncate">
              {g.name}
            </div>
            <div className="text-[11px] text-neutral-500 leading-tight mt-0.5">
              {g.count} items
            </div>
          </div>
          <span className="text-neutral-400 shrink-0">
            <ChevronRightIcon />
          </span>
        </button>
      ))}
    </div>
  );
}

function FolderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 6.8A2.5 2.5 0 0 1 5.5 4.3h3.2a2 2 0 0 1 1.55.74l1.06 1.31a1 1 0 0 0 .78.37h6.4A2.5 2.5 0 0 1 21 9.22v8.28A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-10.7z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function Tab({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`pb-2.5 -mb-px border-b-2 flex items-center gap-2 transition cursor-pointer outline-none ${
        active
          ? "border-[#3478f6] text-neutral-900"
          : "border-transparent text-neutral-500 hover:text-neutral-800"
      }`}
    >
      <span className={`text-[13px] ${active ? "font-semibold" : "font-medium"}`}>
        {label}
      </span>
      <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-[10.5px] font-medium bg-black/[0.06] text-neutral-600">
        {count}
      </span>
    </button>
  );
}

type ClipEntry = {
  text: string;
  time: string;
  pinned?: boolean;
  selected?: boolean;
};

function ClipRow({ text, time, pinned, selected }: ClipEntry) {
  return (
    <div
      className={`group flex items-start gap-2.5 rounded-[6px] px-2.5 py-1.5 transition ${
        selected
          ? "bg-[#cfe0f5] ring-1 ring-inset ring-[#9cbde6]/40"
          : "hover:bg-black/[0.035]"
      }`}
    >
      <span
        className={`shrink-0 mt-[3px] ${pinned ? "text-[#d97706]" : "text-neutral-400"}`}
      >
        {pinned ? <PinIcon /> : <DocIcon />}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[13px] text-neutral-900 leading-snug whitespace-pre-line line-clamp-2">
          {text}
        </div>
        <div className="text-[11px] text-neutral-500 mt-0.5 leading-tight">
          {time}
        </div>
      </div>
      <button
        className="shrink-0 mt-[3px] text-neutral-400 hover:text-neutral-700 transition"
        aria-label={pinned ? "Unpin" : "Pin"}
      >
        {pinned ? <PinOffIcon /> : <PinIcon />}
      </button>
      <button
        className={`shrink-0 mt-[3px] transition ${
          pinned
            ? "text-neutral-400 hover:text-neutral-700"
            : "text-[#ef4444] hover:text-[#dc2626]"
        }`}
        aria-label="Delete"
      >
        <TrashIcon />
      </button>
    </div>
  );
}

function DocIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

function Features() {
  const items = [
    {
      title: "Hotkey-driven",
      body: "Summon Copaste from anywhere with a global shortcut. Default ⌘⇧V — rebind it to anything from the menu bar.",
      icon: <KeyIcon />,
    },
    {
      title: "Text and images",
      body: "Every copy is preserved exactly as you made it, including images, file paths, and rich snippets.",
      icon: <LayersIcon />,
    },
    {
      title: "Pin what matters",
      body: "Pin frequently-used snippets so they stay close. Unpinned history can be cleared in one click.",
      icon: <PinIcon />,
    },
    {
      title: "Built-in screenshots",
      body: "Capture any region of your screen and drop it straight into your clipboard history.",
      icon: <CameraIcon />,
    },
    {
      title: "Quiet by design",
      body: "Lives in the menu bar with no Dock icon. No accounts, no telemetry, no nagging.",
      icon: <MoonIcon />,
    },
    {
      title: "Local first",
      body: "Your clipboard never leaves your Mac. Stored in a small SQLite database under your account.",
      icon: <LockIcon />,
    },
  ];
  return (
    <section id="features" className="border-t border-rule bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            Features
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Small app, big memory.
          </h2>
          <p className="mt-4 text-muted">
            Copaste does one thing well: it remembers what you copy and gives
            it back to you instantly. Nothing more.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3 border border-rule rounded-xl overflow-hidden">
          {items.map((it) => (
            <div key={it.title} className="bg-card p-7">
              <div className="size-9 rounded-md bg-[#f5efe2] text-accent inline-flex items-center justify-center">
                {it.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {it.title}
              </h3>
              <p className="mt-2 text-muted text-[15px] leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preview() {
  return (
    <section id="preview" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
              The popup
            </p>
            <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
              One keystroke. Everything you copied.
            </h2>
            <p className="mt-4 text-muted">
              Press your shortcut anywhere &mdash; in your editor, your browser,
              your terminal. Copaste appears, you pick a clip with the arrow
              keys, and it pastes straight into the app you were in.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              {[
                "Type to filter through your history",
                "Pin items with ⌘P, edit them inline, or delete with ⌫",
                "Optional Always on Top mode for reference snippets",
                "Configurable storage limits to keep things tidy",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckIcon />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Download and open",
      body: "Drag Copaste into your Applications folder. Launch it and grant Accessibility access so it can paste for you.",
    },
    {
      n: "02",
      title: "Copy as you normally would",
      body: "Copaste runs quietly in the background. Every copy is captured and added to your local history.",
    },
    {
      n: "03",
      title: "Press ⌘⇧V",
      body: "Bring up the popup, pick a clip, hit return. It pastes into whatever app you were using — done. Want a different combo? Change it from the menu bar.",
    },
  ];
  return (
    <section id="how" className="border-t border-rule bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            How it works
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Three steps. No setup.
          </h2>
        </div>
        <ol className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-accent pt-5">
              <div className="serif text-2xl text-accent font-semibold">
                {s.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-muted text-[15px] leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FirstLaunch() {
  return (
    <section id="first-launch" className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            First launch
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Opening Copaste the first time.
          </h2>
          <p className="mt-4 text-muted">
            macOS will show a &ldquo;developer cannot be verified&rdquo; warning
            the first time you open Copaste. That&rsquo;s not a bug &mdash;
            it&rsquo;s Gatekeeper checking who signed the app. Copaste uses a
            self-signed certificate instead of a paid Apple Developer ID, so
            macOS asks you to confirm before opening it. After you say yes
            once, Copaste opens normally forever.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-rule bg-card p-7">
            <p className="text-xs uppercase tracking-[0.14em] text-muted mb-2">
              macOS 13 &middot; 14
            </p>
            <h3 className="serif text-xl font-semibold tracking-tight">
              Ventura &middot; Sonoma
            </h3>
            <ol className="mt-5 space-y-3 text-[15px] text-foreground">
              <Step n={1}>
                Drag <strong>Copaste.app</strong> from the DMG into your{" "}
                <strong>Applications</strong> folder.
              </Step>
              <Step n={2}>Open Finder &rarr; Applications.</Step>
              <Step n={3}>
                <strong>Right-click</strong> (or Control-click) Copaste{" "}
                &rarr; <strong>Open</strong>.
              </Step>
              <Step n={4}>
                Click <strong>Open</strong> in the warning dialog.
              </Step>
              <Step n={5}>
                Done. Copaste opens normally from now on, and macOS won&rsquo;t
                ask again.
              </Step>
            </ol>
          </div>

          <div className="rounded-xl border border-rule bg-card p-7">
            <p className="text-xs uppercase tracking-[0.14em] text-muted mb-2">
              macOS 15 or later
            </p>
            <h3 className="serif text-xl font-semibold tracking-tight">
              Sequoia
            </h3>
            <ol className="mt-5 space-y-3 text-[15px] text-foreground">
              <Step n={1}>
                Drag <strong>Copaste.app</strong> from the DMG into your{" "}
                <strong>Applications</strong> folder.
              </Step>
              <Step n={2}>
                Try to open Copaste &mdash; macOS will block it with a warning.
              </Step>
              <Step n={3}>
                Open <strong>System Settings &rarr; Privacy &amp; Security</strong>.
              </Step>
              <Step n={4}>
                Scroll down to &ldquo;Copaste was blocked…&rdquo; and click{" "}
                <strong>Open Anyway</strong>.
              </Step>
              <Step n={5}>
                Confirm with your Mac password, then click{" "}
                <strong>Open</strong> in the next dialog.
              </Step>
              <Step n={6}>
                Done. Copaste opens normally from now on, and macOS won&rsquo;t
                ask again.
              </Step>
            </ol>
          </div>
        </div>

        <div className="mt-10 max-w-3xl rounded-lg border border-rule bg-card px-6 py-5">
          <p className="text-[15px] text-muted">
            <strong className="text-foreground">Is it safe?</strong> The
            warning is about <em>who signed</em> the app, not about what the
            app does. Copaste runs entirely on your Mac &mdash; no servers, no
            sync, no telemetry &mdash; and stores everything in a local SQLite
            file under your account. See{" "}
            <a href="#privacy" className="underline hover:text-foreground">
              Privacy
            </a>{" "}
            for the full picture.
          </p>
        </div>
      </div>
    </section>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 inline-flex items-center justify-center size-6 rounded-full bg-accent text-white text-[12px] font-semibold">
        {n}
      </span>
      <span className="leading-snug">{children}</span>
    </li>
  );
}

function UsageGuide() {
  return (
    <section id="using" className="border-t border-rule bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            Using Copaste
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            From install to muscle memory.
          </h2>
          <p className="mt-4 text-muted">
            Once Copaste is in your menu bar, here&rsquo;s the full walkthrough
            &mdash; setup, daily flow, and the handful of power features
            tucked into the menu.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <GuideCard
            eyebrow="One-time setup"
            title="Get Copaste ready"
          >
            <Step n={1}>
              <strong>Grant Accessibility.</strong> Open System Settings
              &rarr; Privacy &amp; Security &rarr; Accessibility, then toggle
              Copaste ON. Required so Copaste can paste into other apps.
            </Step>
            <Step n={2}>
              <strong>Launch at Login</strong> (optional). Click the menu bar
              icon &rarr; Launch at Login. Copaste will be ready every time
              you boot up.
            </Step>
            <Step n={3}>
              <strong>Customize the shortcut</strong> (optional). Menu bar
              &rarr; Change Shortcut… &rarr; press your preferred combo. Default
              is <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>V</Kbd>.
            </Step>
          </GuideCard>

          <GuideCard
            eyebrow="Day to day"
            title="The 5-second flow"
          >
            <Step n={1}>
              <strong>Press</strong> <Kbd>⌘</Kbd> <Kbd>⇧</Kbd> <Kbd>V</Kbd>{" "}
              from anywhere &mdash; the popup appears.
            </Step>
            <Step n={2}>
              <strong>Type</strong> to filter, or use{" "}
              <Kbd>↑</Kbd> <Kbd>↓</Kbd> to scroll through your history.
            </Step>
            <Step n={3}>
              <strong>Hit</strong> <Kbd>↵</Kbd> &mdash; the clip pastes into
              the app you were just in.
            </Step>
            <Step n={4}>
              <strong>Pin</strong> (<Kbd>⌘</Kbd> <Kbd>P</Kbd>) clips you
              reuse. <strong>Delete</strong> with <Kbd>⌘</Kbd> <Kbd>⌫</Kbd>.
            </Step>
            <Step n={5}>
              Switch tabs to browse <strong>Text</strong>,{" "}
              <strong>Images</strong>, or <strong>Groups</strong>.
            </Step>
          </GuideCard>

          <GuideCard
            eyebrow="From the menu bar"
            title="Power features"
          >
            <Step n={1}>
              <strong>Take Screenshot…</strong> &mdash; capture any region of
              your screen and drop it straight into your clipboard history.
            </Step>
            <Step n={2}>
              <strong>Always on Top</strong> &mdash; keep the popup floating
              above other windows for reference snippets.
            </Step>
            <Step n={3}>
              <strong>Storage Limits…</strong> &mdash; tune how many text and
              image clips Copaste keeps. Pinned clips are never trimmed.
            </Step>
            <Step n={4}>
              <strong>Clear Unpinned History</strong> &mdash; one click wipes
              everything except your pins.
            </Step>
            <Step n={5}>
              <strong>Reset Accessibility Permission…</strong> &mdash; the
              fix-it button if pasting ever stops working after a macOS or
              Copaste upgrade.
            </Step>
          </GuideCard>
        </div>

        <div className="mt-10 rounded-xl border border-rule bg-card p-6 md:p-7">
          <p className="text-xs uppercase tracking-[0.14em] text-muted mb-3">
            Cheat sheet
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 text-[15px]">
            <ShortcutRow keys={["⌘", "⇧", "V"]} label="Open the popup" />
            <ShortcutRow keys={["↑", "↓"]} label="Scroll through clips" />
            <ShortcutRow keys={["↵"]} label="Paste selected clip" />
            <ShortcutRow keys={["esc"]} label="Close the popup" />
            <ShortcutRow keys={["⌘", "P"]} label="Pin / unpin" />
            <ShortcutRow keys={["⌘", "⌫"]} label="Delete clip" />
            <ShortcutRow keys={["⌘", "A"]} label="Select all" />
            <ShortcutRow keys={["⌥", "↑"]} keys2={["⌥", "↓"]} label="Reorder pins" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-rule bg-card p-7 flex flex-col">
      <p className="text-xs uppercase tracking-[0.14em] text-muted mb-2">
        {eyebrow}
      </p>
      <h3 className="serif text-xl font-semibold tracking-tight">{title}</h3>
      <ol className="mt-5 space-y-3.5 text-[15px] text-foreground">
        {children}
      </ol>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-[5px] border border-rule bg-background text-[12px] font-medium text-foreground align-middle">
      {children}
    </kbd>
  );
}

function ShortcutRow({
  keys,
  keys2,
  label,
}: {
  keys: string[];
  keys2?: string[];
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 shrink-0">
        {keys.map((k, i) => (
          <Kbd key={i}>{k}</Kbd>
        ))}
        {keys2 && (
          <>
            <span className="text-muted text-[12px] mx-1">/</span>
            {keys2.map((k, i) => (
              <Kbd key={i}>{k}</Kbd>
            ))}
          </>
        )}
      </div>
      <span className="text-muted">{label}</span>
    </div>
  );
}

function KeystrokeDemo() {
  return (
    <section className="border-t border-rule bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            In motion
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Three keys. Two seconds.
          </h2>
          <p className="mt-4 text-muted">
            Press the shortcut anywhere, pick a clip, hit return — the popup
            disappears and your text is in the app you were already using.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8 items-stretch">
          <Frame label="1 · Press the shortcut">
            <div className="flex items-center justify-center gap-2 h-full py-6">
              <DemoKey label="⌘" delay={0} />
              <DemoKey label="⇧" delay={1} />
              <DemoKey label="V" delay={2} />
            </div>
          </Frame>
          <Frame label="2 · Pick a clip">
            <div className="relative h-full p-3">
              <div className="anim-popup rounded-md border border-black/10 bg-white shadow-sm overflow-hidden">
                <div className="px-2 py-1 border-b border-black/[0.06] flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-1.5 rounded-full bg-[#febc2e]" />
                  <span className="size-1.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative p-2">
                  <div className="absolute left-2 right-2 top-2 h-7 rounded-[5px] bg-[#cfe0f5] anim-cycle" />
                  <div className="relative space-y-2">
                    {[
                      "https://copaste.app",
                      "rgba(138, 75, 31, 0.92)",
                      "alex.rivera@example.com",
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="h-7 px-2 flex items-center text-[12px] text-neutral-800"
                      >
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Frame>
          <Frame label="3 · It pastes">
            <div className="h-full p-4 flex items-center">
              <div className="w-full rounded-md border border-black/10 bg-white shadow-sm p-3 text-[13px] font-mono text-neutral-800">
                <span className="text-neutral-400 select-none">$ </span>
                <span className="anim-type align-middle">
                  https://copaste.app
                </span>
                <span className="anim-caret inline-block w-px h-3.5 bg-neutral-700 align-middle ml-0.5" />
              </div>
            </div>
          </Frame>
        </div>
      </div>
    </section>
  );
}

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-rule bg-card overflow-hidden flex flex-col">
      <div className="flex-1 min-h-[160px] bg-[#fbf8f3]">{children}</div>
      <div className="px-4 py-3 border-t border-rule text-[13px] text-muted">
        {label}
      </div>
    </div>
  );
}

function DemoKey({ label, delay }: { label: string; delay: 0 | 1 | 2 }) {
  return (
    <span
      className={`anim-key ${delay === 1 ? "delay-1" : delay === 2 ? "delay-2" : ""} inline-flex items-center justify-center min-w-12 h-12 px-3 rounded-lg border border-black/15 bg-white text-xl font-medium text-neutral-800`}
    >
      {label}
    </span>
  );
}

function Comparison() {
  const rows = [
    { label: "Remembers what you copy", os: "Just the last thing", cp: "Your last 100+ items" },
    { label: "Search through history", os: "—", cp: "Type to filter" },
    { label: "Pin frequent clips", os: "—", cp: "⌘P to pin, ⌘⌫ to delete" },
    { label: "Capture images", os: "—", cp: "Text, images, screenshots" },
    { label: "Quick keyboard access", os: "—", cp: "⌘⇧V from anywhere (rebindable)" },
    { label: "Stays on your Mac", os: "Yes", cp: "Yes — local SQLite only" },
  ];
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3">
            Compared
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Built for what macOS forgot.
          </h2>
          <p className="mt-4 text-muted">
            The default clipboard remembers exactly one thing. Copaste fills
            the gap — quietly, locally, and with the same shortcut feel you
            already have.
          </p>
        </div>
        <div className="mt-10 rounded-xl border border-rule bg-card overflow-hidden">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] text-[15px]">
            <div className="px-5 py-4 font-semibold border-b border-rule">
              Feature
            </div>
            <div className="px-5 py-4 font-medium text-muted border-b border-l border-rule">
              macOS clipboard
            </div>
            <div className="px-5 py-4 font-semibold text-accent border-b border-l border-rule">
              Copaste
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className="contents">
                <div
                  className={`px-5 py-4 ${i < rows.length - 1 ? "border-b border-rule" : ""}`}
                >
                  {r.label}
                </div>
                <div
                  className={`px-5 py-4 text-muted border-l border-rule ${i < rows.length - 1 ? "border-b" : ""}`}
                >
                  {r.os}
                </div>
                <div
                  className={`px-5 py-4 border-l border-rule ${i < rows.length - 1 ? "border-b" : ""}`}
                >
                  {r.cp}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  const pillars = [
    {
      icon: <LockIcon />,
      title: "Stays on your Mac",
      body: "Clips live in a single SQLite file under your account. Nothing is uploaded, synced, or shared.",
    },
    {
      icon: <EyeIcon />,
      title: "Only what you copy",
      body: "Copaste reads from the system pasteboard. It does not log keystrokes, screen contents, or anything else.",
    },
    {
      icon: <NoSignalIcon />,
      title: "No accounts, no telemetry",
      body: "There’s nothing to sign up for. The app makes no network calls of its own — not even for analytics.",
    },
  ];
  return (
    <section id="privacy" className="border-t border-rule bg-[#1a1814] text-[#faf6ec]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[#d6cfc1] mb-3">
            Privacy
          </p>
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            What we keep, and where.
          </h2>
          <p className="mt-4 text-[#d6cfc1]">
            A clipboard quietly accumulates the most sensitive things you
            handle &mdash; passwords, tokens, drafts, addresses. Copaste’s
            defaults assume that.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
          {pillars.map((p) => (
            <div key={p.title} className="bg-[#22201c] p-7">
              <div className="size-10 rounded-md bg-white/5 text-[#f0c890] inline-flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#d6cfc1]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#a8a094]">
          Database location:{" "}
          <code className="font-mono text-[#d6cfc1]">
            ~/Library/Application Support/Copaste/clips.sqlite
          </code>
          . Open it, inspect it, delete it — it’s your file.
        </p>
      </div>
    </section>
  );
}

function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function NoSignalIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.5 16.05a6 6 0 0 1 7 0" />
      <path d="M12 20h.01" />
      <path d="m3 3 18 18" />
    </svg>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Is Copaste free?",
      a: "Yes. Copaste is free to download and use. There are no accounts, subscriptions, or in-app purchases.",
    },
    {
      q: "Does my clipboard data leave my Mac?",
      a: "No. Everything is stored locally in a small SQLite database under your user account. Copaste does not connect to any servers.",
    },
    {
      q: "What macOS versions are supported?",
      a: "Copaste runs on macOS 13 (Ventura) or later, on both Apple Silicon and Intel Macs.",
    },
    {
      q: "Can I change the keyboard shortcut?",
      a: "Yes. Open Copaste from the menu bar and choose “Change Shortcut…” to pick whichever combination you like.",
    },
    {
      q: "How do I clear my clipboard history?",
      a: "Click the menu bar icon and choose “Clear Unpinned History.” Pinned clips are kept; everything else is removed.",
    },
    {
      q: "Why does it ask for Accessibility permission?",
      a: "Pasting into another app on macOS requires Accessibility access. Copaste only uses it to deliver the clip you select.",
    },
    {
      q: "Why does macOS warn about Copaste on first launch?",
      a: "Copaste is signed with a self-signed certificate, not an Apple Developer ID — that’s how it stays free. Gatekeeper doesn’t recognise the signature, so it asks you to confirm before opening. See “First launch” above for the exact steps; after you confirm once, Copaste opens normally forever.",
    },
    {
      q: "Is it safe to install despite the warning?",
      a: "Yes. The warning is about who signed the app, not what the app does. Copaste runs entirely on your Mac, makes no network calls, and stores everything in a single SQLite file under your account. You can inspect (and delete) that file at any time.",
    },
  ];
  return (
    <section id="faq" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.18em] text-muted mb-3 text-center">
          Questions
        </p>
        <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Frequently asked.
        </h2>
        <div className="mt-12 divide-y divide-rule border-y border-rule">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-medium text-foreground">{f.q}</span>
                <span className="text-muted group-open:rotate-45 transition-transform">
                  <PlusIcon />
                </span>
              </summary>
              <p className="mt-3 text-muted text-[15px] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadBanner() {
  return (
    <section className="border-t border-rule bg-[#1a1814] text-[#faf6ec]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="serif text-3xl md:text-4xl font-semibold tracking-tight">
            Get Copaste for your Mac.
          </h2>
          <p className="mt-3 text-[#d6cfc1]">
            A 1.8 MB download. No installer. No account. Just drag it to
            Applications and you&rsquo;re done.
          </p>
        </div>
        <a
          href="/Copaste_0.1.7.dmg"
          download
          className="inline-flex items-center gap-3 rounded-md bg-[#faf6ec] text-[#1a1814] px-6 py-3.5 text-base font-medium hover:bg-white transition"
        >
          <DownloadIcon />
          Download Copaste 0.1.7
        </a>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <Logo small />
          <span>
            © {new Date().getFullYear()} Copaste. Made for macOS.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-foreground transition">
            Features
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
          <a
            href="/Copaste_0.1.7.dmg"
            download
            className="hover:text-foreground transition"
          >
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}

function Logo({ small }: { small?: boolean }) {
  const size = small ? 22 : 26;
  return (
    <span
      className="inline-flex items-center justify-center rounded-md bg-accent text-white"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="3" width="11" height="14" rx="2" />
        <rect
          x="5"
          y="7"
          width="11"
          height="14"
          rx="2"
          fill="currentColor"
          stroke="none"
          opacity="0.25"
        />
        <rect x="5" y="7" width="11" height="14" rx="2" />
      </svg>
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 shrink-0 text-accent"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134c.071.222.124.564.16 1.013.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.766 2.375-.72.449.036.791.089 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
    </svg>
  );
}

function PinOffIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134c.071.222.124.564.16 1.013.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.766 2.375-.72.449.036.791.089 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
      <path
        d="m.5.5 15 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="m6 6 1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8V6a3 3 0 0 1 3-3h2" />
      <path d="M16 3h2a3 3 0 0 1 3 3v2" />
      <path d="M21 16v2a3 3 0 0 1-3 3h-2" />
      <path d="M8 21H6a3 3 0 0 1-3-3v-2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function SortIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 4v16" />
      <path d="m3 8 4-4 4 4" />
      <path d="M17 20V4" />
      <path d="m21 16-4 4-4-4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="15" r="4" />
      <path d="m21 3-9.5 9.5" />
      <path d="m17 7 3 3" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 18 9 5 9-5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7h3l2-3h4l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
