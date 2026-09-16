---
title: "The Crystal That Ticks: How Physicists Built a New Phase of Matter Out of Time"
pubDate: 2026-09-15
description: "A Nobel idea that sounded like perpetual motion, a proof that it was impossible, a loophole — and then experiments in a diamond, a chain of atoms, and Google's quantum computer."
label: "Physics"
tags: ["time crystals", "quantum physics", "condensed matter", "symmetry"]
---

Imagine a clock that never needs winding. No battery, no spring, no plug — just a steady tick, tick, tick that keeps going on its own. It sounds like a scam, the kind of thing a con artist sketches on a napkin right before asking for your money. And for a while, that's more or less what the world's physicists thought too.

Then they built one.

Well — almost. The real story of "time crystals" is stranger and more interesting than the clickbait version, and it runs through a Nobel laureate's wild idea, a decade of people proving each other wrong, and a diamond, a chain of levitating atoms, and Google's quantum computer. Here's what's actually going on.

## First, what is a crystal, really?

Forget the healing crystals on your aunt's windowsill. To a physicist, a crystal is simply matter whose building blocks lock into a pattern that repeats through space. Salt, diamond, quartz, a snowflake — zoom in and you find atoms sitting at neat, regular intervals, the same arrangement over and over.

Here's the deep part. Empty space doesn't care where you are; one point is as good as any other. Physicists call that a symmetry. When atoms freeze into a crystal, they break that symmetry: suddenly some locations (where an atom sits) are special and others (the gaps) are not. The universe went from "everywhere is the same" to "here, here, and here." That act of spontaneously picking out a pattern is one of the most important ideas in all of physics.

Now for the leap. Space isn't the only thing with that kind of symmetry. Time has it too: the laws of physics work the same today as they did yesterday and will tomorrow. So a physicist named Frank Wilczek asked a question in 2012 that sounds like a riddle: if matter can spontaneously break symmetry in space to make an ordinary crystal, could matter break symmetry in time — settling into a rhythm, a pattern that repeats not across a room but across seconds?

He called it a time crystal. And because he'd just won the Nobel Prize, people took the idea seriously.

<figure class="article-diagram" aria-hidden="true">
  <svg viewBox="0 0 520 168" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D" font-family="system-ui,sans-serif">Two kinds of repeating pattern</text>
    <rect x="16" y="36" width="232" height="100" rx="6" fill="rgba(192,88,0,0.07)" stroke="#C05800" stroke-width="1.5"/>
    <text x="132" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D">Ordinary crystal</text>
    <circle cx="56" cy="90" r="8" fill="#C05800" opacity="0.85"/>
    <circle cx="94" cy="90" r="8" fill="#C05800" opacity="0.85"/>
    <circle cx="132" cy="90" r="8" fill="#C05800" opacity="0.85"/>
    <circle cx="170" cy="90" r="8" fill="#C05800" opacity="0.85"/>
    <circle cx="208" cy="90" r="8" fill="#C05800" opacity="0.85"/>
    <text x="132" y="120" text-anchor="middle" font-size="10" fill="#713600">repeats across space</text>
    <rect x="272" y="36" width="232" height="100" rx="6" fill="rgba(113,54,0,0.06)" stroke="#713600" stroke-width="1.5"/>
    <text x="388" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D">Time crystal</text>
    <line x1="300" y1="90" x2="476" y2="90" stroke="#713600" stroke-width="1.5" opacity="0.35"/>
    <circle cx="318" cy="90" r="6" fill="#713600"/>
    <circle cx="370" cy="90" r="6" fill="#713600"/>
    <circle cx="422" cy="90" r="6" fill="#713600"/>
    <circle cx="474" cy="90" r="6" fill="#713600"/>
    <text x="388" y="120" text-anchor="middle" font-size="10" fill="#713600">repeats across time</text>
    <text x="260" y="156" text-anchor="middle" font-size="10" fill="#713600">Same idea, different dimension: pick a pattern where none was required.</text>
  </svg>
  <figcaption>An ordinary crystal picks out special places. A time crystal picks out special moments — a rhythm that wasn't written into the laws of physics.</figcaption>
</figure>

## The dream, and why it seemed impossible

Wilczek's version was bold: he imagined a ring of quantum particles that would spontaneously start rotating and keep rotating forever — even in its lowest-energy state, the state where, by every rule we know, nothing is supposed to happen.

That's the part that set off alarm bells. A system that moves forever at its lowest energy sounds an awful lot like a perpetual motion machine — a device that runs without fuel — and perpetual motion machines are the physics equivalent of a unicorn. They violate the conservation of energy. They don't exist.

Sure enough, the objections came fast. Within a year, one physicist showed that Wilczek's spinning ring wasn't actually the true lowest-energy state — a boring, motionless version had less energy and would win. Then, in 2015, two theorists delivered the knockout: a general mathematical proof that a system sitting quietly in equilibrium at its lowest energy simply cannot keep something moving in a repeating pattern forever. The lowest-energy state has to be still.

So that was that. The beautiful idea was, strictly speaking, dead.

Except for one word: equilibrium.

## The loophole: don't let it settle down

The 2015 proof ruled out time crystals in equilibrium — in a system left alone to reach its calmest, most settled state. But what if you never let it settle? What if you keep poking it?

This is the trick that brought the whole field roaring back to life around 2016. Instead of a quiet system, physicists studied a driven one: kick it rhythmically, over and over, at a steady beat. Then watch what it does.

Here's the punchline, and it's genuinely weird. When you drive certain systems at one rhythm, they respond at a slower one. Picture pounding on a piano key twice every second — and hearing a note come out only once a second. The system has invented a beat that wasn't in your input. It's marching to half your drum. Physicists call this a "subharmonic" response, and it's the unmistakable fingerprint of a time crystal.

<figure class="article-diagram" aria-hidden="true">
  <svg viewBox="0 0 520 176" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D" font-family="system-ui,sans-serif">The subharmonic fingerprint</text>
    <text x="28" y="58" font-size="11" font-weight="600" fill="#38240D">Drive</text>
    <text x="28" y="74" font-size="9" fill="#713600">period T</text>
    <line x1="100" y1="64" x2="500" y2="64" stroke="#C05800" stroke-width="1.5" opacity="0.25"/>
    <circle cx="124" cy="64" r="7" fill="#C05800"/>
    <circle cx="196" cy="64" r="7" fill="#C05800"/>
    <circle cx="268" cy="64" r="7" fill="#C05800"/>
    <circle cx="340" cy="64" r="7" fill="#C05800"/>
    <circle cx="412" cy="64" r="7" fill="#C05800"/>
    <circle cx="484" cy="64" r="7" fill="#C05800"/>
    <text x="28" y="118" font-size="11" font-weight="600" fill="#38240D">Response</text>
    <text x="28" y="134" font-size="9" fill="#713600">period 2T</text>
    <line x1="100" y1="124" x2="500" y2="124" stroke="#713600" stroke-width="1.5" opacity="0.25"/>
    <circle cx="124" cy="124" r="8" fill="#713600"/>
    <circle cx="268" cy="124" r="8" fill="#713600"/>
    <circle cx="412" cy="124" r="8" fill="#713600"/>
    <text x="260" y="164" text-anchor="middle" font-size="10" fill="#713600">You pound twice a second. The system answers once a second — a beat it invented.</text>
  </svg>
  <figcaption>A time crystal does not simply echo the drive. It locks onto a slower rhythm of its own and keeps it even when the drive is slightly imperfect.</figcaption>
</figure>

For this to count as a real, stable phase of matter rather than a fluke, two things have to hold. First, the rhythm has to be stubborn: you can jitter your driving beat a little and the system keeps ticking at its own pace, refusing to be knocked off. Second — and this is the clever bit — the system has to avoid simply overheating into random mush, which is what usually happens when you keep dumping energy into something. The escape route is a phenomenon with a mouthful of a name, many-body localization, where the particles effectively get stuck in place and can't pass energy around to heat each other up. Frozen in that way, they can tick indefinitely without cooking themselves.

This isn't quite Wilczek's original dream — it needs an outside drive, so it's not a free clock spun from nothing. But it's unmistakably a new, ordered pattern in time. And unlike the dream, you can actually build it.

## Building the impossible

### 2017 — The first ones

Two teams pulled it off almost simultaneously. At the University of Maryland, Chris Monroe's group levitated a short chain of ytterbium atoms with electric fields and flipped them with laser pulses in a steady rhythm — and watched the flips repeat at half the pulse rate. A month later, a Harvard team led by Mikhail Lukin made a second one out of flaws in a diamond. Two completely different systems, same bizarre behavior. That's exactly what you'd want to see if this were a real phase of matter and not a quirk of one particular gadget.

### 2021 — Google's quantum computer

The milestone that made headlines. A collaboration including Stanford, Princeton, and Google's quantum team programmed 20 quantum bits on Google's Sycamore processor to behave as a time crystal — and, crucially, they got all the ingredients of that "frozen, can't overheat" recipe working together for the first time. Earlier experiments had been almost time crystals; this one had the full set. (An honest caveat: the machine could only run the experiment for a few hundred cycles, so the "forever" part still leans on theory and simulation.)

### 2022 — A different flavor

In Hamburg, physicists made a time crystal that didn't need a rhythmic kick at all. They shone a steady, unchanging laser into a cloud of ultra-cold atoms in a mirror-lined cavity — and the system spontaneously started oscillating anyway, choosing its own rhythm out of a steady input. If the 2017 versions are a swing pushed on a beat, this one is a swing that starts swinging on its own.

### 2020s — Getting practical

Other teams have made time crystals collide and exchange particles, built versions that work at room temperature instead of a hair above absolute zero, and — in 2025 — connected one to an external mechanical device for the first time, a step toward actually using one. In that experiment the crystal kept its rhythm going for a hundred million cycles.

<figure class="article-diagram" aria-hidden="true">
  <svg viewBox="0 0 520 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D" font-family="system-ui,sans-serif">From forbidden idea to working device</text>
    <line x1="36" y1="62" x2="484" y2="62" stroke="#713600" stroke-width="1.5" opacity="0.25"/>
    <circle cx="52" cy="62" r="7" fill="#C05800"/>
    <text x="52" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="#38240D">2012</text>
    <text x="52" y="92" text-anchor="middle" font-size="9" fill="#713600">Wilczek</text>
    <text x="52" y="106" text-anchor="middle" font-size="9" fill="#713600">proposes it</text>
    <circle cx="148" cy="62" r="7" fill="#713600"/>
    <text x="148" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="#38240D">2015</text>
    <text x="148" y="92" text-anchor="middle" font-size="9" fill="#713600">Proof: not in</text>
    <text x="148" y="106" text-anchor="middle" font-size="9" fill="#713600">equilibrium</text>
    <circle cx="244" cy="62" r="7" fill="#C05800"/>
    <text x="244" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="#38240D">2017</text>
    <text x="244" y="92" text-anchor="middle" font-size="9" fill="#713600">Ions and</text>
    <text x="244" y="106" text-anchor="middle" font-size="9" fill="#713600">diamond</text>
    <circle cx="340" cy="62" r="7" fill="#713600"/>
    <text x="340" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="#38240D">2021</text>
    <text x="340" y="92" text-anchor="middle" font-size="9" fill="#713600">Sycamore</text>
    <text x="340" y="106" text-anchor="middle" font-size="9" fill="#713600">processor</text>
    <circle cx="436" cy="62" r="7" fill="#C05800"/>
    <text x="436" y="46" text-anchor="middle" font-size="10" font-weight="600" fill="#38240D">2025</text>
    <text x="436" y="92" text-anchor="middle" font-size="9" fill="#713600">Wired to a</text>
    <text x="436" y="106" text-anchor="middle" font-size="9" fill="#713600">real device</text>
    <text x="260" y="136" text-anchor="middle" font-size="10" fill="#713600">Barely a decade from "mathematically forbidden" to a crystal you can plug into something.</text>
  </svg>
  <figcaption>The field did not quietly accept the impossibility proof. It changed the question — then built the answer in several different laboratories.</figcaption>
</figure>

## No, it's still not free energy

Let's kill the perpetual-motion fantasy for good, because nearly every breathless headline flirts with it.

The versions physicists actually built do not give you energy for nothing. The driven ones need that outside rhythm to keep going — cut the drive and the magic stops. And even while it's ticking, you can't extract useful work from the oscillation; over each cycle, no net energy is being siphoned out. The honest way to put it is that a time crystal bends one of the rules that normally forbid it — either the "must be left alone" rule or the "runs forever" rule — but it never actually breaks the law of energy conservation. The impossible clock stayed impossible. What physicists found instead was something subtler and, arguably, cooler: a genuinely new kind of order.

## So why should anyone care?

Because that stubborn, self-correcting rhythm might be useful.

The biggest hope is quantum memory. Quantum computers are maddeningly fragile — their information leaks away in fractions of a second because the tiniest disturbance scrambles it. A time crystal's rhythm, by contrast, is naturally resistant to being knocked off course. If you could store information in something that rugged, you might hold onto it far longer than today's quantum hardware allows — and do it passively, without the constant, energy-hungry error-correction that current machines rely on.

There's also sensing. Because a time crystal's ticking is so precise and so stable, it could act as an exquisitely sensitive detector of tiny changes in magnetic fields, temperature, or motion — potentially beating the limits of conventional instruments — or serve as an ultra-reliable frequency reference, the kind of steady beat that precision measurement depends on.

<figure class="article-diagram" aria-hidden="true">
  <svg viewBox="0 0 520 132" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D" font-family="system-ui,sans-serif">What a stubborn tick might be good for</text>
    <rect x="16" y="36" width="232" height="68" rx="6" fill="rgba(192,88,0,0.07)" stroke="#C05800" stroke-width="1.5"/>
    <text x="132" y="62" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D">Quantum memory</text>
    <text x="132" y="82" text-anchor="middle" font-size="10" fill="#713600">Hold information in a rhythm</text>
    <text x="132" y="96" text-anchor="middle" font-size="10" fill="#713600">that resists being knocked off</text>
    <rect x="272" y="36" width="232" height="68" rx="6" fill="rgba(113,54,0,0.06)" stroke="#713600" stroke-width="1.5"/>
    <text x="388" y="62" text-anchor="middle" font-size="12" font-weight="600" fill="#38240D">Precision sensing</text>
    <text x="388" y="82" text-anchor="middle" font-size="10" fill="#713600">A stable beat as a detector</text>
    <text x="388" y="96" text-anchor="middle" font-size="10" fill="#713600">or frequency reference</text>
  </svg>
  <figcaption>Neither application is a product yet. Both rest on the same property: a rhythm that stays itself even when the world around it jitters.</figcaption>
</figure>

The reality check: no serious physicist thinks your laptop will contain a time crystal next year. The conditions they need are finicky, and turning a lab curiosity into a product is a long road strewn with engineering problems. They may end up as niche components — a memory module here, a sensor there — rather than the heart of a future computer. But the trajectory is remarkable. In barely a decade, time crystals went from "mathematically forbidden" to being built in a diamond, run on a quantum computer, and wired into a real device.

## The last twist

Here's the thing physicists still argue about, and it's a fitting end to the story: they don't fully agree on what should count as a time crystal. The famous "impossibility" proof wasn't wrong — it ruled out one specific definition. Every new experiment nudges at the edges of another. So the real drama was never quite "do time crystals exist?" It was "what, exactly, do we mean by one?"

Which is a very physics way for a story to end: not with a discovery that settles everything, but with a discovery that makes us ask a sharper question. The clock is ticking. We're still working out what that means.

## Further reading

- [First Time Crystal Built Using Google's Quantum Computer](https://www.quantamagazine.org/first-time-crystal-built-using-googles-quantum-computer-20210730/) — Quanta Magazine
- [In search of time crystals](https://physicsworld.com/a/in-search-of-time-crystals/) — Physics World
- [The Quest to Crystallize Time](https://www.scientificamerican.com/article/the-quest-to-crystallize-time/) — Scientific American
- [How to Create a Time Crystal](https://physics.aps.org/articles/v10/5) — APS Physics
- [Time crystal in a quantum computer](https://news.stanford.edu/stories/2021/11/time-crystal-quantum-computer) — Stanford Report
- [Time crystals could power future quantum computers](https://www.aalto.fi/en/news/time-crystals-could-power-future-quantum-computers) — Aalto University
