import { Zap, Layers, BarChart3, Workflow, TrendingUp, Eye } from "lucide-react";
import type { BlogPost } from "../types";

export const legacyPosts: BlogPost[] = [
  {
    slug: "hook-anatomy-3-second-test",
    title: "The Anatomy of a Hook That Survives the 3-Second Test",
    excerpt:
      "The first three seconds decide whether your video gets a real chance. Here's what the hooks of high-retention creators actually do, and how to audit your own.",
    date: "2026-07-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "scripting"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Every video you publish is up against a decision that happens faster than anyone likes to admit. A viewer scrolls, sees your thumbnail, reads your title, and within roughly three seconds either commits to watching or keeps moving. That commitment is not rational — it is a snap judgment based on a single question: is this worth the next ten minutes of my attention?",
          "The hook is the first thing that answers that question out loud. It is the opening phrase, the first shot, the first sentence of your script. And because YouTube measures retention from the very first frame, the hook is also the cheapest place in your entire video to lose or keep a viewer.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You never get a second chance to make a first impression — but on YouTube, you don't even get a full one. The hook is the impression.",
      },
      {
        heading: "What a hook is actually doing",
        paragraphs: [
          "A good hook is not a gimmick and it is not a promise to be flashy. It is a contract. Within seconds the viewer needs to know what this video is about, why it matters to them, and what they will miss if they leave. If any of those three pieces is missing, the brain files the video under 'noise' and moves on.",
          "The most common mistake we see in analyzed scripts is hooks that are vaguely provocative but information-free — a dramatic statement followed by nothing the viewer can hold onto. Drama without direction is just noise with good lighting.",
        ],
      },
      {
        heading: "The four hook patterns that keep working",
        bullets: [
          "The open loop — start in the middle of an unresolved moment and refuse to resolve it until the payoff. 'We tested 14 hooks so you don't have to. The worst one outperformed everything we expected.'",
          "The specific promise — quantify the value up front. 'In six minutes you'll know the three sentences that get viewers to stop scrolling.'",
          "The contrarian claim — surface a belief the audience already secretly holds but rarely hears stated. 'Your retention isn't the problem. Your first ten seconds are.'",
          "The stakes-first cold open — drop the viewer into the highest-stakes beat of the video before any context. 'It took 400 videos for me to realize the hook was the bottleneck — not the topic.'",
        ],
        paragraphs: [
          "These four patterns show up repeatedly across successful channels, which is exactly what makes them useful: they can be extracted, cataloged, and reused. You are not inventing a hook from nothing; you are choosing the pattern that fits your topic, then writing ten seconds of content inside it.",
        ],
      },
      {
        heading: "Writing the first ten seconds",
        paragraphs: [
          "Write the hook last. It sounds backwards, but a hook is a summary of the tension your video resolves, and you cannot summarize tension you have not built yet. Outline your sections, write the body, then come back and compress the single most arresting moment of the script into one or two sentences.",
          "Read the drafted hook out loud. If it takes longer than two breaths to speak, it is too long. If it could apply to a hundred other videos, it is too generic. If it buries the payoff, cut everything before the verb.",
        ],
      },
      {
        heading: "A 3-second audit checklist",
        bullets: [
          "Does the very first word signal a topic the viewer came for — not background about who you are?",
          "Is the value proposition explicit within two sentences, not implied?",
          "Would a stranger repeat this hook back to a friend? If not, there is nothing infectious in it.",
          "Does the hook end on a point of curiosity that the next line of the script actually pays off?",
        ],
        paragraphs: [
          "Apply this checklist to every opening you write. If a hook fails two or more of these checks, rewrite it before touching anything else in the script. It is the highest-leverage ten seconds you will ever write.",
        ],
      },
    ],
  },
  {
    slug: "blueprints-vs-vibes-pattern-extraction",
    title: "Blueprints vs. Vibes: Why Pattern Extraction Beats Guesswork",
    excerpt:
      "Feeling your way through a script works until it doesn't. Pattern extraction turns 'this channel feels good' into a repeatable, teachable formula.",
    date: "2026-08-13",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Most creators have an intuition that certain channels 'just work.' You watch a video, feel the pacing, nod along, and later describe it to a friend as having good energy or solid vibes. Vibes are real — but they are also the last thing you can hand to another person, or to yourself on a deadline, when you need to produce thirty videos a month.",
          "A blueprint is what happens when you extract the structure behind the vibe. It separates what a channel consistently does — its hook formulas, its section rhythm, its transition tactics, its closing patterns — from what it merely did once.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Vibes are the output of structure. If you copy only the vibe, you get the aesthetic without the engine.",
      },
      {
        heading: "Why a single successful video is a trap",
        paragraphs: [
          "Every channel has outlier videos. One blows up for reasons that have nothing to do with the creator's typical structure — a cultural moment, a misaligned recommendation, a thumbnail that caught fire by accident. If you pattern-match against a single hit, you will copy noise and call it signal.",
          "The fix is simple: analyze the catalog, not the hit. Across ten, twenty, or fifty videos, the patterns that survive are structural. The one-off spikes are stories.",
        ],
      },
      {
        heading: "What pattern extraction actually surfaces",
        bullets: [
          "Hook styles — whether the channel opens with a promise, a cold start, a question, or a threshold statement, and how consistently.",
          "Section archetypes — how the body is segmented: problem → proof → method → call to action, or some repeatable variation.",
          "Transition tactics — the verbal and visual bridges used between sections, from recaps to 'but here's the twist.'",
          "CTA placement — when the channel asks for engagement, and whether that timing correlates with comments.",
        ],
        paragraphs: [
          "Once these patterns are written down, they stop being vibes and start being constraints you can design inside. Constraints, counterintuitively, are what make scripts fast to write — you are choosing within a proven framework instead of staring at a blank page.",
        ],
      },
      {
        heading: "From blueprint to better output",
        paragraphs: [
          "The value of a blueprint is not in admiring it. It is in forcing a decision: which patterns from this channel do I adopt, which do I deliberately invert, and which do I leave alone entirely? A creator who can answer those three questions has replaced guesswork with a strategy.",
          "This is the core of the GoScript workflow. We reverse-engineer a channel's structural DNA so you can borrow with intent, not with imitation.",
        ],
      },
    ],
  },
  {
    slug: "retention-curves-decoded",
    title: "Retention Curves Decoded: Where Viewers Drop and Why",
    excerpt:
      "Your retention graph is a trail of decisions. Learn to read the shape of it — and the script edits that flatten the drops.",
    date: "2026-08-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "analytics", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "The retention curve is the most honest feedback your channel gets. Viewers vote with their thumb, and they vote again on every single frame. A curve that holds a plateau means you answered a question the audience was actively asking. A cliff means something broke — and the shape of the drop tells you what.",
          "The mistake is to treat retention as one number. It is not a score to raise; it is a map of moments, and each moment corresponds to a line in your script.",
        ],
      },
      {
        heading: "The three drops you will actually see",
        bullets: [
          "The first-10-second slide — viewers checking that the hook matches the packaging. If this is steep, your title and thumbnail promised something the opening did not deliver.",
          "The mid-video plateau fade — a slow leak starting around the two-minute mark. This is usually a missing transition: sections that start without a reason to keep watching.",
          "The ending cliff — a sharp drop in the final 20 percent. Often the sign of a payoff that resolved too early, leaving a long tail of filler before the CTA.",
        ],
        paragraphs: [
          "Each of these is fixable, but the fix lives in different parts of your workflow. The first drop is a packaging and hook problem. The plateau fade is a script structure problem. The ending cliff is an outline problem — you planned the payoff but forgot to plan the aftermath.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A retention curve is not a report card. It is a diff — a comparison between what you promised and what you delivered, frame by frame.",
      },
      {
        heading: "Reading a flat line versus a wave",
        paragraphs: [
          "A flat, high line is not automatically good. If retention holds at 60 percent across a ten-minute video, viewers stayed — but did they lean in? Flat lines often mean consistent but flat content: perfectly watchable, absolutely forgettable.",
          "Waves, by contrast, show anticipation and release: a drop right before a reveal that spikes when the reveal lands. That pattern is the signature of storytellers, and it is far more valuable than a flat line at equal height.",
        ],
      },
      {
        heading: "Script edits that flatten the drops",
        bullets: [
          "Open with the exact promise your thumbnail implies — within one sentence, not after a 20-second preamble.",
          "End every section on a micro-hook: a partial answer, an unresolved example, or a 'but here's what went wrong' that pulls into the next section.",
          "Move your final payoff earlier, then add a layer after it — consequences, counterpoints, or a 'one more thing' beat. Never let the video peak, then wander.",
        ],
        paragraphs: [
          "You do not need to chase every viewer — nobody holds a whole audience. But the shapes above are consistent, diagnosable, and correctable in editing, which makes retention one of the most decodable metrics in your entire studio.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-to-script-6-step-workflow",
    title: "From Blueprint to Script: A Repeatable 6-Step Workflow",
    excerpt:
      "Analysis is fuel, not output. Here is the exact six-step process we use to turn a channel's structural blueprint into a finished script.",
    date: "2026-10-08",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "scripting", "blueprints"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A blueprint tells you how a successful channel structures its videos. A script is what you actually publish. The distance between the two is a workflow, and most creators burn it with the same vague step: 'then I write it.' This is the repeatable process we use to close that gap — six steps, from raw pattern data to a finished, performable script.",
          "The method matters more than the writing speed. If you can only produce a script when everything is going well, you do not have a process — you have a mood.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The goal of a workflow is not faster writing. It is writing that produces the same quality on a Tuesday afternoon as it does at 2 a.m. when inspiration strikes.",
      },
      {
        heading: "Step 1 — Pick the pattern set",
        paragraphs: [
          "Before a single sentence is written, decide whose structural DNA you are borrowing. Select one or two blueprints that match your topic, format, and audience. Write down their hook styles, section archetypes, and CTA timing as explicit constraints. This is your palette — you work inside it, not around it.",
        ],
      },
      {
        heading: "Step 2 — Write the pitch line",
        paragraphs: [
          "One sentence that states the viewer's problem, your video's promise, and the proof you will deliver. If you cannot write it in under twenty words, the video does not have a spine yet. The pitch line is the contract every later section has to honor, so make it brutal to satisfy.",
        ],
      },
      {
        heading: "Step 3 — Outline sections, not contents",
        paragraphs: [
          "Using the blueprint's section archetype, draft the heading for each beat: hook, context, method part one, proof, counterpoint, promise, CTA. Do not write paragraphs yet. You are laying tracks, and each heading should read like a mini-hook that makes the next heading inevitable.",
          "This is where the outline becomes a script skeleton that you can reorder, cut, or expand before investing words in the wrong structure.",
        ],
      },
      {
        heading: "Step 4 — Assign durations, then expand",
        bullets: [
          "Give each section a target duration before writing. The blueprint's average section weights tell you how much room the channel typically devotes to context versus proof.",
          "Expand headings into speech, one section at a time, without editing as you go. Rough beats get refined later — first passes exist to give the editor something to shape.",
        ],
        paragraphs: [
          "Durations-first writing prevents the classic failure: a brilliant 300-word intro that starves the payoff of its time budget.",
        ],
      },
      {
        heading: "Step 5 — Hook surgery",
        paragraphs: [
          "With the body written, go back to the opening. Rewrite the first sentence so it delivers the promise from your thumbnail in spoken form, within two breaths. Then cut the second — the second sentence is where most scripts start a biography nobody asked for.",
        ],
      },
      {
        heading: "Step 6 — The read-through pass",
        paragraphs: [
          "Read the full script aloud at speaking pace, marking every place you stumble, every repeated word, and every sentence where the breath runs out. The final pass is a performance audit, not a grammar check. If it doesn't breathe, viewers won't either.",
        ],
      },
    ],
  },
  {
    slug: "trending-topics-evergreen-angles",
    title: "Trending Topics Without the Hype: Finding Evergreen Angles",
    excerpt:
      "Trending topics are a race to the bottom of your niche. Evergreen angles are where the compounding views live — this is how you find them.",
    date: "2026-09-10",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["research", "topics", "strategy"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Trending topics look irresistible because they arrive with built-in search interest. The problem is timing: by the time you see the trend, so has every creator in your niche, and the average viewer has already seen three versions of it. You are not entering an empty lane — you are joining the back of a stampede.",
          "Three months later the trend is dead and your video, which took a week to script and edit, is still sitting on your channel with a shelf life that ended before it started.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Trends are weather; evergreen questions are climate. You can forecast the weather for a weekend, but you build your channel on the climate.",
      },
      {
        heading: "The question behind the trend",
        paragraphs: [
          "Every trend is a surfaced version of an underlying question that already existed. AI tools blowing up isn't the topic — 'how do I use AI without sounding like everyone else' is the topic, and it was being searched three years ago. Extract the question the trend is answering, and you have a topic that survives the trend itself.",
          "This is the single highest-leverage research habit we see in channels that compound: they treat spikes as weather reports for what their audience is chronically asking.",
        ],
      },
      {
        heading: "Three sources of evergreen angles",
        bullets: [
          "Support threads and comment sections — the same question asked repeatedly, in slightly different words, is demand you can serve for years.",
          "Your own retention data — the videos that hold flat are signals about the questions your audience actually wants answered; go deeper on those.",
          "Adjacent niches — a proven angle in a neighboring niche is often unclaimed in yours. Repackage the structure, keep the logic, change the examples.",
        ],
        paragraphs: [
          "None of these sources require a trending dashboard. They require noticing where demand is repeating instead of where attention is peaking.",
        ],
      },
      {
        heading: "The angle-first test",
        paragraphs: [
          "Before committing to any topic, write the angle as a complete sentence: 'For [audience], this video delivers [outcome] by [mechanism].' If the sentence still makes sense six months from now, it is evergreen. If it only makes sense this week, it is a trend, and it had better be a short video made deliberately fast, not a big bet.",
          "Your publishing calendar should be most evergreen, one or two trend bets, and zero 'everything else' filler. That split is how channels become libraries instead of diaries.",
        ],
      },
    ],
  },
  {
    slug: "packaging-strategy-titles-thumbnails",
    title: "Packaging as Strategy: Titles and Thumbnails That Earn the Click",
    excerpt:
      "The click happens before the video exists to the viewer. Packaging is a strategic layer of your script — here's how to design it deliberately.",
    date: "2026-09-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Creators tend to treat titles and thumbnails as a packaging step that happens after the real work is done. That ordering has it exactly backwards: the packaging is where the viewer's entire experience begins, and where your script is judged before a single frame plays.",
          "Think of packaging as the first scene of your video — a scene that lives outside the video itself. It has the same job as your hook: make a specific promise to a specific person quickly enough that they choose to continue.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The click is a decision, and decisions need reasons. Titles and thumbnails are not decoration — they are the reasons, made visible.",
      },
      {
        heading: "What packaging is really negotiating",
        paragraphs: [
          "Every click is a trade. The viewer gives a slice of a finite day and expects a return they can predict. The title is the ceiling of that expectation and the thumbnail is the mood. When the two disagree, the click that gets earned is the click that gets refunded five seconds in — which is exactly why packaging mismatches show up as brutal first-ten-second retention drops.",
        ],
      },
      {
        heading: "A title formula that holds up",
        bullets: [
          "Subject + conflict: start with what the video is about, then add the tension. 'Retention Curves' becomes 'Where Viewers Drop and Why.'",
          "Specific beats superlative: 'The 3-Second Test' outperforms 'The Best Hooks Ever.' Specificity is credibility.",
          "Outcome-weighted openings: lead with what the viewer gets, not what the video contains. 'From Blueprint to Script' promises a journey with a destination.",
        ],
        paragraphs: [
          "Write twenty titles before you keep one. The first five are what you already believe; the next fifteen are usually where the actual title lives.",
        ],
      },
      {
        heading: "Thumbnails as a structure spoiler",
        paragraphs: [
          "A strong thumbnail does not show everything — it shows the promise. One face, one object, one idea, and enough negative space that the composition reads at feed size. Text on thumbnails works when it is punctuation, not a paragraph: a word like 'BREAKDOWN' or 'TESTED' that reinforces the title's contract.",
          "The thumbnail should be designed from the same pitch line you used for the script. If the pitch line is strong enough to build a video on, it is strong enough to build a thumbnail on.",
        ],
      },
      {
        heading: "Closing the loop back into the script",
        paragraphs: [
          "Once the packaging exists, the first line of the script must verbally honor it. The thumbnails promise 'TESTED,' the title promises '3-Second Test,' and the hook must say, within two sentences, that a test happened and what it revealed. Packaging, hook, and payoff are one continuous contract — break any link and the viewer feels it, even if they can't name it.",
        ],
      },
    ],
  },
];
