import { DollarSign, MessageSquare, Briefcase, Clock, Users, Heart, BookOpen, Target, Layers, BarChart3 } from "lucide-react";
import type { BlogPost } from "../types";

export const batch10: BlogPost[] = [
  {
    slug: "business-adsense-alternatives",
    title: "Monetization beyond AdSense for small creators",
    excerpt: "AdSense can cover small bills, but for most channels it falls short once production costs rise. Affiliate links, digital files, and services offer clearer paths to steady cash flow.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "monetization", "craft"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        heading: "Counting what AdSense actually brings",
        paragraphs: [
          "I ran a test for a friend with 45,000 monthly views on a hobby channel last year. After YouTube took its cut and after currency conversion, the payout came to about $82. That covers one plugin renewal, but not a mic upgrade. For most small channels, $0.001 to $0.005 per view is the real range, not the roundup numbers you see on forums. When your videos cost three or four hours to script and edit, that math gets tight fast.",
          "The first fix is to stop counting gross views as income. Count net after fees, and count net after your real time cost. If a 12-minute video takes six hours to make and earns $6 from AdSense, you are working for a dollar an hour. That number is not a moral failing, but it is a sign to look for other income streams that do not scale only with RPMs."
        ]
      },
      {
        heading: "Picking the right affiliate products",
        paragraphs: [
          "Affiliate sales work best when the product fits the exact moment in your video. For a scriptwriting tutorial, linking to a specific book on outlining makes sense. For a gear review, linking to the exact cable you tested makes sense. Do not link to a generic storefront and hope. Pick one or two products per relevant video, use a clean link in your description, and only recommend items you have used for at least a few days.",
          "Track clicks for 30 days before you judge a product. I have seen a $15 tool convert at 7 percent for one small channel and a $150 tool convert at 0.8 percent for another. The smaller price won, not the larger commission rate. Also note return rates: a 40 percent return on a high commission item can erase your gain. Look for low return items with clear use cases for your viewer."
        ]
      },
      {
        heading: "Selling digital items with no stock",
        paragraphs: [
          "Templates are the easiest starting point. A script outline template for a specific format, like a 60-second explainer, can take one afternoon to make and sell for $9 for years. Checklists, prompt sheets for your editing tools, or a small pack of transition notes can all work. Sell through a platform that handles VAT and downloads so you do not build a checkout from scratch.",
          "The trap is making one giant template pack and calling it done. Make one small, useful file that solves a single problem. If ten people buy it and three reply that it saved them time, expand it slightly. If nobody buys in 60 days, cut a different angle. This small loop saves more time than adding 30 pages."
        ]
      },
      {
        heading: "Services that fit a creator schedule",
        paragraphs: [
          "If you already write scripts for your own videos, you can write short scripts for others in your niche. Offer one fixed package: a 90-second video script for $175, with one round of edits. Fixed scope beats hourly quotes when you are still editing your own uploads. You can cap it at two clients per month and it will not break your upload schedule.",
          "Do not offer everything. Pick one task you already repeat. For example, outline to final VO script in your format. One clear offer is easier to link in a pinned comment for the right viewer than a full portfolio page."
        ]
      },
      {
        heading: "Choosing one to start today",
        paragraphs: [
          "Pick just one of these options and test it for 30 days. Add an affiliate link to three old videos that already get clicks. Or post your single template in one relevant video description. Do not roll out five at once. That is how you stay on track for uploads while adding income."
        ],
        bullets: [
          "Affiliate: one product, one fit, track 30 days",
          "Template: one file, one problem, no bloat",
          "Service: one fixed package, capped count",
          "AdSense: keep it, but do not rely on RPM growth"
        ]
      }
    ]
  },
  {
    slug: "business-sponsorship-trust",
    title: "Sponsorship scripts that keep viewer trust",
    excerpt: "Viewers can tell when a read sounds forced. A small change in phrasing and timing lets you disclose a paid slot without losing the tone that built your audience.",
    date: "2024-03-15",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "sponsorships", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        heading: "Say it in your own words",
        paragraphs: [
          "The safe legal line is a clear disclosure. The useful line is one that sounds like you wrote it on your voice recorder, not in a legal doc. I have tried reading a sponsor's exact script and had to re-record it twice. Viewers did not mind the disclosure once it used the same words I use when I say 'I tested this for a week'. They minded when I sped up and dropped my natural pauses.",
          "Keep the core facts: who paid, what it is, and that it is a paid slot. You do not need to list every detail. You do need to say it before or at the moment of pitch, not buried at the end."
        ]
      },
      {
        heading: "Place the pitch where it fits",
        paragraphs: [
          "A common tradeoff is timing. For a tutorial, inserting a 15-second sponsor read at minute two can break the flow if the step starts there. For some channels, a mid-roll read between sections works. For others, a short lead-in works best. Watch your own video at 1.2x with the read inserted. If it feels like a jump cut in tone, move it.",
          "Do not stack disclaimers. One clear line is better than three. Also avoid comparing two sponsors in the same video. Pick one if possible."
        ]
      },
      {
        quote: "Say the disclosure in the tone you use to talk to a friend about a tool you actually like."
      },
      {
        heading: "Script the boundary",
        paragraphs: [
          "Write what you will not say. For example, refuse claims like 'best ever' or untested numbers. If the sponsor wants a specific phrase, ask for a fact sheet instead and rewrite it. I once traded a single adjective for a verifiable stat and both sides kept their line.",
          "Leave room for doubt. Phrases like 'I found it worked for this task' are honest and still useful to the viewer. They also protect you if a product changes after the video goes live."
        ]
      },
      {
        heading: "Test with a real person",
        paragraphs: [
          "Before final render, read the read aloud to one trusted viewer or just listen back with headphones. If you cringe, edit. Ask one question: 'Does this sound like me pushing something I care about, or reading a card?' If the answer is card, cut five words.",
          "Keep the read short. A 12 to 20 second honest read will hold more trust than a 40 second one packed with points you would not say on your own."
        ]
      },
      {
        heading: "Practical checklist",
        paragraphs: [
          "Make these checks automatic for each deal. They take minutes and save you hours of stress later."
        ],
        bullets: [
          "Clear 'paid by' line in your natural words",
          "Timing tested in the edit timeline",
          "No untested claims or forced superlatives",
          "One read, not multiple mentions",
          "Fact check against current product page"
        ]
      }
    ]
  },
  {
    slug: "business-pricing-without-underselling",
    title: "Pricing your work without underselling",
    excerpt: "A low price may get replies, but it pulls you into scope creep and blocks time for your own channel. Price by scope and by time saved, not by guessing a market low.",
    date: "2024-05-02",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "monetization", "craft"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Briefcase,
    content: [
      {
        heading: "Stop pricing by vibes",
        paragraphs: [
          "The first number I ever quoted for a script was $40. The client replied yes in ten minutes, then asked for four revisions, VO notes, and a cut list. I ended up at $6 an hour. That mistake taught me to price by a fixed package with a cap. Write down how many hours a task takes when you do it for your own video, then multiply by a floor rate you can live with.",
          "Pick one floor. For writing a tight VO script in your niche, set a floor that covers your time plus a small buffer. If your floor is $175 for 90 seconds, do not drop below it for new clients. Your old channel time is not free."
        ]
      },
      {
        heading: "Scope, not length",
        paragraphs: [
          "Length is a rough guide, but format is the real driver. A talking head outline with natural pauses is easier than a technical explainer with precise terms. Count revision rounds: one round is fair, two rounds can be priced in. Count research: if you need to fact check three sources, price it in.",
          "Write the deliverables in one line: 'Final VO script in Google Doc, with cues, delivered in 48 hours, one revision.' That single line blocks half the 'just one small tweak' messages."
        ]
      },
      {
        heading: "Use a simple quote formula",
        paragraphs: [
          "A workable formula for script work: base for the format plus add-ons. Base covers structure, draft, and polish for your standard format. Add-ons: rush (24 hours), second revision pack, b-roll notes, or transcript cleanup. Quote only what the client asked for and list add-ons separately.",
          "Never quote 'starting at'. Quote the exact package. If they need something else, quote the add-on. This keeps you honest and avoids haggling down the base."
        ]
      },
      {
        heading: "Handle 'what is your rate' quickly",
        paragraphs: [
          "When a DM says 'what is your rate', do not ask for budget first. Send your one package link or your one package text. If they reply 'too high', say you can adjust scope to fit, but not the base rate. If they cannot adjust scope, move on. This takes 30 seconds and saves days.",
          "I keep a canned reply saved on my phone. It has the package, the price, and one sample line. That prevents me from writing a long explanation when I am tired."
        ]
      },
      {
        heading: "Price your own channel work",
        paragraphs: [
          "Pay yourself the same rule. If you will not write a 60-second hook for a client at $40, stop writing yours at that rate. Track your effective hourly for one month on your uploads. The number will be humbling or clarifying. Either way, it points to the edits you need to make.",
          "Raise slowly. A $25 bump on one package every three months is easier than a 50 percent jump once. Keep the new price for new clients first, not for existing ones unless agreed."
        ],
        bullets: [
          "Fixed package with one deliverable list",
          "One revision included, extras priced",
          "Floor rate set and written down",
          "Canned reply for rate questions",
          "Log hours for one month to verify"
        ]
      }
    ]
  },
  {
    slug: "business-batching-energy",
    title: "Batching production without flattening your voice",
    excerpt: "Shooting and scripting in blocks saves setup time, but do it wrong and every video sounds like it came off the same conveyor belt. The trick is batching the boring parts.",
    date: "2025-01-14",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "craft", "monetization"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "Batch the plumbing, not the ideas",
        paragraphs: [
          "I tried batching a full month of uploads in two days once. It worked for scheduling and destroyed my enthusiasm by week three. The videos were technically fine and completely interchangeable. What I got wrong was batching the part that needs to feel fresh. Ideas and hooks should stay one at a time, brainstormed the week you need them.",
          "Batch the repeatable labor instead. Setting up lights, importing footage, cutting the same intro animation, writing descriptions. Those steps have no creative voice in them, so doing them in a single pass costs nothing and saves hours of context switching."
        ]
      },
      {
        heading: "A schedule that survives a bad week",
        paragraphs: [
          "My current split is two writing days, one filming day, one edit day, one publishing day. If I lose Monday to a family thing, I still have four days to recover. A batch that needs every single day to line up is not a batch, it is a countdown timer.",
          "Leave one slot empty every week. It sounds wasteful until the first time a video underperforms or a file corrupts and you need the slack to fix it without skipping an upload."
        ]
      },
      {
        heading: "Keep a fresh pass per video",
        paragraphs: [
          "Before a batched video goes out, I read the script out loud and change two sentences. That small pass forces me to hear the topic as a stranger would and pulls the voice back in. Without it, the video reads like it was assembled, because it was.",
          "Batching is a tool for time, not a personality substitute. The audience came for a person, even the parts of the person that are tired."
        ],
        bullets: [
          "Batch setup, editing, and descriptions, never ideas",
          "Keep one buffer day each week for recovery",
          "Read every batched script aloud before publishing",
          "Cap a batch at three or four videos until it feels normal"
        ],
        quote: "Batch the parts that do not need you. Protect the parts that do."
      }
    ]
  },
  {
    slug: "business-hiring-editor",
    title: "Hiring your first editor: the awkward parts",
    excerpt: "Handing over the timeline is harder than it looks. A trial project, a clear style guide, and honest feedback loops will save the relationship before it starts.",
    date: "2025-02-20",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "craft"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "Start with one paid test edit",
        paragraphs: [
          "Never hand a stranger your week of uploads and hope. Give a single short video and pay the full rate even if you do not use it. How they handle a tight brief tells you more than a portfolio. I learned to ask for the raw project file back so I could see how they structured tracks, labels, and cuts.",
          "One editor I tested sent back a beautiful edit with every clip renamed after a burger. Funny, and impossible for anyone else to touch. The rename habit became a question I now ask up front: what are your file conventions?"
        ]
      },
      {
        heading: "Write a style guide, not a wish list",
        paragraphs: [
          "A style guide with timestamps and examples beats a paragraph of adjectives. Include your intro length, your cut rhythm, your caption font, and two reference videos with notes on what you like about each. Be specific about the pauses you keep and the ones you cut.",
          "Keep it to one page. If you need three pages, your format is not consistent yet, and no editor can guess a moving target."
        ]
      },
      {
        heading: "Give notes in one pass",
        paragraphs: [
          "Scattered DMs across three days confuse everyone. Watch once, write all notes with timecodes, and send them together. I sort my notes into two buckets: must change, and opinion. Labeling opinion as opinion keeps trust high and makes the next edit faster.",
          "Pay on a schedule. Late payment kills good editors faster than a bad brief."
        ],
        bullets: [
          "One paid test edit before any commitment",
          "One-page style guide with reference videos",
          "All notes in a single timecoded pass",
          "Separate must-changes from opinions",
          "Pay on the agreed date, every time"
        ],
        quote: "Your job as the client is to remove ambiguity, not to supervise."
      }
    ]
  },
  {
    slug: "business-burnout-sustainable",
    title: "Sustainable output and the burnout trap",
    excerpt: "Uploading every week forever is a promise no one can keep by pushing harder. The fix is a smaller output you can maintain on your worst month, not your best.",
    date: "2025-04-08",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "craft", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        heading: "Design for your worst week",
        paragraphs: [
          "Most channel advice assumes your best week, when you have energy and a good idea ready. Real channels survive on the bad weeks. I cut my cadence from twice a week to once and the total views barely moved, because the videos that were rushed were dragging the average down anyway.",
          "Ask what you can still ship when you have a cold and a house full of errands. That is your real capacity. Anything above it is borrowed against next month."
        ]
      },
      {
        heading: "The hidden cost of a backlog",
        paragraphs: [
          "A backlog feels safe until you notice you are filming video twelve while your audience is watching video four. When the topic moves, your backlog is worthless evidence of what people wanted. I now keep at most two videos ahead and leave the rest as ideas.",
          "Fewer finished videos in the drawer means faster feedback and less emotional investment in content that may be stale."
        ]
      },
      {
        heading: "Rest that does not need a reason",
        paragraphs: [
          "Taking a week off used to feel like quitting. It is not, and the drop-off from a scheduled break is smaller than the drop-off from a video made by someone who resents the camera. Tell the audience when you are away, and they mostly do not care as much as you fear.",
          "Protect one full day where you do not open the editor at all. That day is not slacking, it is the thing keeping the other six days honest."
        ],
        bullets: [
          "Set cadence from your worst week, not your best",
          "Keep no more than two finished videos ahead",
          "Schedule breaks and announce them",
          "One no-editor day every week",
          "Track energy, not just upload count"
        ],
        quote: "A channel you can maintain for five years beats a sprint you cannot finish."
      }
    ]
  },
  {
    slug: "business-craft-over-hacks",
    title: "Long-term craft beats short-term hacks",
    excerpt: "Every few months a new growth trick promises fast views. The creators still here in year five are the ones who got quietly better at the basics.",
    date: "2025-06-11",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "Hacks expire, skills compound",
        paragraphs: [
          "I have watched trend-chasing accounts blow up for two weeks and vanish. The trick worked because it was new, and newness is the one thing you cannot repeat on schedule. A skill like writing a clean hook or reading a retention graph still pays three years later.",
          "That does not mean ignore trends. It means do not build your identity on them. Use a trend as a test for a skill you are already practicing."
        ]
      },
      {
        heading: "Measure the boring metric",
        paragraphs: [
          "Chasing a single viral video is a bad bet because it teaches you almost nothing repeatable. I track average views across my last ten uploads instead. When that line moves up slowly, my craft is improving. When it spikes once and falls back, I just got lucky.",
          "The slow line is the one that predicts income, because advertisers and viewers both respond to consistency, not to one good afternoon."
        ]
      },
      {
        heading: "Practice on purpose",
        paragraphs: [
          "Pick one skill per quarter and work on it deliberately. This quarter, I am rewriting the first fifteen seconds of every script three times before recording. That is it. No new tools, no new format.",
          "Deliberate practice on one thing beats scattered effort on ten. After a year, four sharpened skills show up in every video without you thinking about them."
        ],
        bullets: [
          "Write down the one skill you are practicing now",
          "Track a rolling average, not a single hit",
          "Use trends to test skills, not to replace them",
          "Review last quarter's videos and name what improved",
          "Ship consistently even when the numbers are flat"
        ],
        quote: "The best time to build a skill was three years ago. The second best is the next quarter."
      }
    ]
  },
  {
    slug: "business-negotiating-brand-deal",
    title: "Negotiating a brand deal without ruining the fit",
    excerpt: "A deal is a conversation about scope, not a test of nerve. Know your floor, ask for what the integration actually costs you, and be ready to walk.",
    date: "2025-08-19",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "sponsorships", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Price the integration, not the video",
        paragraphs: [
          "A 15-second pre-roll read and a dedicated two-minute segment are different products. I quote them separately. The number should reflect the extra scripting, the extra shoot, and the trust you are spending on the brand.",
          "Bring one benchmark to the table: your average views for the last ten videos, not your best one. An honest baseline protects both sides from a bad surprise after publishing."
        ]
      },
      {
        heading: "Ask about usage rights early",
        paragraphs: [
          "The fee is often not the expensive part. If the brand wants to run your video as a paid ad for six months on their own channels, that is a separate license and should be priced as one. Ask about paid usage, whitelisting, and territory before you agree on the number.",
          "Write down what happens if they cancel after you have already filmed. A deposit of one third to one half is normal and protects your calendar."
        ]
      },
      {
        heading: "Say no on fit, not on money",
        paragraphs: [
          "The easiest declines are about fit. If the product does not serve your audience, no fee makes the read feel honest. I turned down a deal that would have paid well because the tool was not something I would use twice.",
          "Keep a short list of brands you would genuinely recommend. When one of them reaches out, the negotiation gets easier because you already know what you would say about them."
        ],
        bullets: [
          "Quote pre-roll and dedicated segments separately",
          "Ask about usage rights, whitelisting, and duration",
          "Take a deposit before filming",
          "Benchmark with your average, not your peak",
          "Decline on fit and let the number alone sink bad deals"
        ],
        quote: "A deal you would be embarrassed to publish is not a deal, it is a debt."
      }
    ]
  },
  {
    slug: "business-diversify-income",
    title: "Diversifying income as a creator",
    excerpt: "One income stream means one algorithm decides your rent. Spread across a few channels that share the same audience, and no single change can sink you.",
    date: "2025-10-27",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Start with two, not five",
        paragraphs: [
          "Diversification advice often turns into a list of ten businesses you should start tomorrow. Pick two streams that use the same audience and the same skill. If your videos teach editing, an affiliate link for your editing software and a paid template pack are natural neighbors.",
          "Two streams you actually run beat five streams you keep meaning to set up."
        ]
      },
      {
        heading: "Match the stream to your traffic",
        paragraphs: [
          "High-view, low-engagement channels rarely make good communities, and small tight channels rarely make good ad businesses. Look at where your viewers already spend money and meet them there. If your comments are full of questions about gear, a gear guide pays before merch ever will.",
          "Do not copy the income mix of a channel ten times your size. The same stream that keeps them afloat may be rounding error for you."
        ]
      },
      {
        heading: "Review every quarter",
        paragraphs: [
          "Once a quarter, list your income by source and the hours each one takes. Cut the stream with the worst ratio of stress to dollars. I dropped a print-on-demand line after two quarters because returns ate the margin and the support emails never stopped.",
          "Track the number, not the vibe. A stream that feels fun but loses money is a hobby, and that is fine as long as you call it that."
        ],
        bullets: [
          "Pick two streams that share audience and skill",
          "Match the stream to how your viewers actually behave",
          "Review income by source each quarter",
          "Cut the worst stress-to-dollar ratio",
          "Be honest about which streams are hobbies"
        ],
        quote: "One algorithm should not be able to end your month."
      }
    ]
  },
  {
    slug: "business-small-channel-economics",
    title: "The economics of a small channel",
    excerpt: "Fewer than ten thousand subscribers can still be a real business. The math is smaller, but so are the costs, and the margin can surprise you.",
    date: "2026-01-22",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Run the real numbers once",
        paragraphs: [
          "A channel with 8,000 subscribers and 3,000 views a video can still clear a few hundred dollars a month between ads, affiliates, and one template sale. That is not a salary, but it is also not nothing, and it may cover the tools that made it possible.",
          "Write down your monthly costs: software, music, storage, any contractor time. Subtract that from your income. The first time I did this I found two subscriptions I never used, which is a free raise."
        ]
      },
      {
        heading: "Small can be efficient",
        paragraphs: [
          "You do not need a studio, a manager, or a second shooter. A phone, a cheap lav mic, and a light that cost less than a dinner can carry a channel this size. The overhead that breaks big operations is the same overhead you can simply decline to take on.",
          "The flip side is time. At this scale, your effective hourly is low, and pretending otherwise leads to bad decisions. Treat early months as paying tuition in hours."
        ]
      },
      {
        heading: "Know your next rung",
        paragraphs: [
          "Define the one metric that would change your income most, and chase only that for a quarter. For me it was email subscribers, because a list survives every algorithm change. For you it might be watch time or the number of past clients.",
          "Pick the rung, ignore the rest, and recheck in ninety days. Small channels grow by adding one honest number at a time."
        ],
        bullets: [
          "List monthly costs and cut the dead subscriptions",
          "Keep overhead low on purpose",
          "Name the one metric that moves income most",
          "Recheck progress every ninety days",
          "Count unpaid early hours as tuition, not loss"
        ],
        quote: "Small is not a failure state. It is a cheaper place to learn the same lessons."
      }
    ]
  }
];
