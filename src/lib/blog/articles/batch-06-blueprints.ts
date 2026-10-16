import { Layers, BarChart3, Zap, Puzzle, Target, Flame, Repeat, Users, Brain, PenLine } from "lucide-react";
import type { BlogPost } from "../types";

export const batch06: BlogPost[] = [
  {
    slug: "blueprint-what-it-captures",
    title: "What a Blueprint Actually Captures (And What It Doesn't)",
    excerpt:
      "A blueprint is not a script template. It is a map of the decisions a channel keeps making, and the difference changes how you write every draft.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "patterns"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Ask ten creators what a blueprint is and you will get ten answers. Most describe a template: an opening, three points, a call to action, done. That is a shape, not a blueprint. A shape tells you where things go. A blueprint tells you why they go there and when to break the pattern.",
          "After pulling apart a few hundred channels, my working definition keeps shrinking. A blueprint captures the repeatable decisions behind a body of work: how the channel earns attention, how it sequences information, how it resolves tension, and how it asks for the next click.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A blueprint captures repeatable structure, not surface style.",
          "Leave out one-off experiments and personality markers.",
          "A pattern needs repetition before it counts.",
          "Run the prediction test before you trust a layer.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "Copy a template and you get a generic video. Copy a blueprint and you get the reasoning, which you can apply to any topic.",
      },
      {
        heading: "The layers worth extracting",
        paragraphs: [
          "In practice, most useful blueprints boil down to four layers. The hook layer covers how the first fifteen seconds are built. The structure layer covers the order and purpose of the body. The pacing layer covers where the video speeds up, slows down, and inserts a break. The close layer covers the final ask and the emotional note it lands on.",
          "Each layer answers a different question, which is why collapsing them into one template loses most of the value. If all you know is the section order, you still have no idea how to write the transitions between those sections.",
        ],
      },
      {
        heading: "What gets left out on purpose",
        bullets: [
          "Surface style choices: fonts, music beds, color accents, catchphrases. These travel poorly between niches and often mislead you about what is doing the work.",
          "One-off experiments: the upload that tried a cold open once and never repeated it. A pattern needs repetition before it counts.",
          "Personality markers: a host's specific humor or accent. You can study the timing of a joke, but copying the delivery is a losing game.",
          "Platform luck: a spike driven by a trend or a recommendation test. It looks like a pattern in a spreadsheet and behaves like a coin flip on your next upload.",
        ],
        paragraphs: [
          "Cutting these is not about being austere. It is about keeping the map readable. A blueprint with thirty entries is a diary. A blueprint with six is a tool.",
        ],
      },
      {
        heading: "The prediction test",
        paragraphs: [
          "If a blueprint is any good, a stranger should be able to read it and predict the shape of the next video on that channel. Show me your notes on how a channel opens, and I should be able to guess the first sentence of an upload I have never seen.",
          "That test is brutal and fast. When it fails, usually one layer is missing or one entry is too vague to act on. 'Strong hook' fails. 'Opens with a number and a claim the viewer cannot verify alone' passes.",
        ],
      },
      {
        heading: "Why this matters for output",
        paragraphs: [
          "A blueprint is a decision-making tool, not a formula to obey. The point is to compress a hundred hours of watching into a page you can argue with. Once the decisions sit on paper, you keep the ones that fit your voice and consciously invert the rest.",
          "That is where the edge lives. Most creators do not need more ideas. They need a clearer picture of the mechanics behind the ideas that already work for them.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-analyze-the-catalog-not-the-hit",
    title: "Analyze the Catalog, Not the Hit: Why Outliers Lie",
    excerpt:
      "One viral video teaches you almost nothing about a channel. Twenty ordinary videos reveal the structure that made it worth studying at all.",
    date: "2024-05-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "The video that put a channel on the map is almost never the one you should study. It is the one that got lucky. Maybe a large account shared it, maybe the thumbnail landed at exactly the right hour, maybe a trend dragged it along for a week. None of that is repeatable, and none of it tells you what the creator actually does well.",
          "When I want to learn from a channel, I skip the top three uploads and start at number ten. That is where the ordinary, workhorse videos live. The structure that survives at that depth is the structure that keeps the channel alive.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Analyze the catalog, not the hit; outliers lie.",
          "Sample the last twenty uploads, not the top twenty.",
          "Drop the extreme highs and lows.",
          "Track the median, not the average.",
        ]
      },
      {
        paragraphs: [],
        quote: "A hit is an event. A catalog is a habit. You can only build on habits.",
      },
      {
        heading: "Why outliers mislead",
        paragraphs: [
          "An outlier looks like a pattern because it is the loudest point on the chart. But a single spike often comes from a variable outside the script: packaging, timing, or an audience the algorithm decided to test that week. Study only the spike and you spend months chasing a cause that was never in your control.",
          "The catalog controls for luck by averaging it out. Over twenty videos, the shared traits are structural, and structure is the part you can practice on purpose.",
        ],
      },
      {
        heading: "How to pick the right sample",
        bullets: [
          "Take the last twenty uploads, not the top twenty. Recency describes the channel you are actually competing with.",
          "Drop anything far below the channel's normal range and anything wildly above it. You want the middle of the distribution, not the edges.",
          "Include at least two videos you personally found boring. The boring ones expose the baseline pattern most clearly.",
          "Track the median, not the average. One viral upload can drag an average so high that it stops describing reality.",
        ],
        paragraphs: [
          "That sample is small enough to actually analyze and large enough to filter noise. Twenty videos takes an afternoon. It beats a hundred hours of scrolling.",
        ],
      },
      {
        heading: "What the catalog tells you that the hit cannot",
        paragraphs: [
          "The catalog shows the channel's defaults. How does it open when there is no trend to ride? Where does it put the call to action on an ordinary upload? How long before the first concrete example appears? Those defaults are the blueprint.",
          "The hit shows what happened once. The catalog shows what happens next.",
        ],
      },
      {
        heading: "A quick exercise",
        paragraphs: [
          "Pick a channel you admire. Sort by oldest, then grab the middle third of its uploads. Read the first thirty seconds of each and write down the very first move every video makes. If the same move shows up in more than half of them, you have found a real pattern, and probably the most valuable line in your notes.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-extracting-hook-formulas",
    title: "Extracting Hook Formulas From Any Channel You Study",
    excerpt:
      "Hooks look like instinct until you count them. Turn a channel's openings into a short list of formulas you can reuse without sounding like a knockoff.",
    date: "2024-08-21",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "patterns", "analysis"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Most creators treat the hook as the one part of the script that cannot be systematized. It feels like magic, so they leave it to inspiration and then wonder why half their openings fall flat. Hooks are not magic. They are a small set of opening moves, repeated with variations, and you can count them in an afternoon.",
          "The trick is to stop watching hooks as a viewer and start reading them as a data set. Same channel, many videos, first two lines only. The patterns surface fast.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read only the first two lines when extracting hooks.",
          "Name the formula, not the topic.",
          "Test the formula before you trust it.",
          "Keep a running list of what repeats.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "A hook formula is just a sentence with the specifics removed. Learn the sentence, supply your own specifics.",
      },
      {
        heading: "Read only the first two lines",
        paragraphs: [
          "Open a channel's video page, sort by popularity, and read the first two sentences of twenty transcripts. Write each one down verbatim. Do not judge them yet. You are collecting samples, not editing them.",
          "Once you have twenty lines on one page, group the ones that share a shape. You will usually land on three to five groups. Each group is a formula waiting to be named.",
        ],
      },
      {
        heading: "Name the formula, not the topic",
        bullets: [
          "The quantified promise: a number plus a payoff. 'Six seconds is all it takes to fix a flat opening.'",
          "The reopened question: a claim the viewer thought was settled. 'Everyone says post daily. The data says otherwise.'",
          "The cold middle: start inside an unresolved moment with no setup. 'It was the fourth rewrite that finally worked.'",
          "The cost reveal: name what the viewer is losing right now. 'You are leaving forty percent of your first minute on the table.'",
        ],
        paragraphs: [
          "Notice that none of these names mention the topic. That is the point. A formula named after a topic only works once. A formula named after its structure works on every topic you will ever cover.",
        ],
      },
      {
        heading: "Test the formula before you trust it",
        paragraphs: [
          "Write three hooks using the formula on your own topics. Read them out loud. If they sound like a parody of the channel you studied, the formula is too tight. If they could have come from anywhere, it is too loose.",
          "The goal is a formula that gives you a starting sentence and gets out of the way. Somewhere around your second or third attempt, the structure stops feeling borrowed and starts feeling like a tool.",
        ],
      },
      {
        heading: "Keep a running list",
        paragraphs: [
          "Save every formula you extract in one document, with one real example attached. Over a year that file becomes your fastest writing aid. When a blank page stalls you, you are not starting from nothing. You are choosing a proven shape and filling it with your own material.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-section-archetypes",
    title: "Section Archetypes and How to Spot Them in a Script",
    excerpt:
      "Bodies of great videos are not improvisation. They are assembled from a handful of recurring section types you can learn to recognize.",
    date: "2024-11-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["patterns", "blueprints", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Strip away the topic and most strong video bodies are built from the same few parts, rearranged. There is the setup that gives context, the proof that makes a claim believable, the method that shows how to do the thing, and the resolution that closes the loop. Different channels weigh these differently, but the parts recur.",
          "Spotting the archetypes is a skill, and like any skill it improves with repetition. Once you can label sections, you can see why one video drags and another flows, even when both cover the same ground.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Look for five archetypes: context, proof, method, objection, resolution.",
          "Label a script fast to see the skeleton.",
          "The order of archetypes tells you what the channel values.",
          "Reuse archetypes in your own writing.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "Structure is invisible until you label it. After that, you cannot unsee it in every video you watch.",
      },
      {
        heading: "The five archetypes I look for",
        paragraphs: [
          "These show up in nearly every strong video I have analyzed, in some order. The names are plain on purpose, because the point is to label what a section is doing, not to sound clever about it.",
        ],
        bullets: [
          "Context: the minimum the viewer needs before anything else makes sense. Strong channels keep this short and cut it the moment it stops earning its place.",
          "Proof: evidence that the claim is real, usually a result, a test, or a specific story. Weak channels skip this and wonder why viewers do not believe them.",
          "Method: the actual how-to. This is where the payoff lives, and where most videos either deliver or disappoint.",
          "Objection: a deliberate pause to answer the doubt the viewer is already forming. This is the section most creators forget.",
          "Resolution: the closing that ties the promise back to the opening and points somewhere next.",
        ],
      },
      {
        heading: "How to label a script fast",
        paragraphs: [
          "Pull up a transcript and draw a line wherever the purpose of the video changes. Do not look for topic changes, look for purpose changes. The moment the video stops setting up and starts proving is a section boundary, even if the topic never moves.",
          "Give each chunk a one-word label from the list. If you cannot label a chunk, it is probably doing two jobs at once, which is usually why that stretch feels muddy.",
        ],
      },
      {
        heading: "What the order tells you",
        paragraphs: [
          "The sequence of archetypes is the channel's signature. Some put proof before method to build belief first. Some open with method and backfill context later. Some bury objection handling at the very end as a preemptive answer to the comment section.",
          "Compare two channels in the same niche and the difference in order is usually the whole reason one feels authoritative and the other feels loose. Same parts, different assembly.",
        ],
      },
      {
        heading: "Using archetypes in your own writing",
        paragraphs: [
          "Before you draft, sketch the sections as labels in order. You do not need full sentences yet, just the sequence. A bad sequence is cheap to fix at that stage and expensive to fix after you have written two thousand words around it.",
          "When a draft feels off and you cannot say why, label the sections. Nine times out of ten, the problem is a missing proof or an objection you never addressed, not the prose.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-turning-blueprint-into-constraints",
    title: "Turning a Blueprint Into Constraints You Can Use",
    excerpt:
      "A blueprint you admire is useless until it becomes a limit you write inside. Here is how to convert observations into constraints that speed up drafting.",
    date: "2025-02-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "blueprints", "analysis"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "There is a strange moment after you finish analyzing a channel. You have a page of observations, and you feel like you understand it, and then you sit down to write and nothing has changed. The notes are descriptive. They describe what the channel did. They do not tell you what to do.",
          "The fix is to rewrite every observation as a constraint. A constraint is a rule you have to write against, and rules are what make a blank page survivable. A page of observations is a book report. A page of constraints is a writing tool.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Turn observations into constraints you can actually use.",
          "Use hard constraints for the skeleton and soft ones for texture.",
          "Add inversion constraints to stand apart.",
          "Keep the list short enough to remember.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "Understanding is passive. A constraint is understanding with a deadline attached.",
      },
      {
        heading: "From observation to constraint",
        paragraphs: [
          "Take a note like 'the channel opens with a specific promise.' As an observation, that is inert. As a constraint it becomes 'the first sentence must contain a number and a payoff.' Now you have something you can fail, which means you have something you can fix.",
          "Do this for every line in your blueprint. Convert the description into a rule the draft either satisfies or does not. If a note cannot be turned into a rule, it was probably decoration, and you can drop it.",
        ],
      },
      {
        heading: "Three kinds of constraints",
        bullets: [
          "Hard constraints: non-negotiable rules like a word limit on the hook or a mandatory proof section. These define the skeleton.",
          "Soft constraints: defaults you follow unless you have a reason not to, like opening sections with a story. These define the texture.",
          "Inversion constraints: rules you deliberately break to stand apart, like ending on a question when the studied channel always ends on a command.",
        ],
        paragraphs: [
          "Most creators only give themselves hard constraints and then wonder why their scripts feel stiff. The soft and inverted rules are what keep the work yours.",
        ],
      },
      {
        heading: "Keep the list short enough to remember",
        paragraphs: [
          "A constraint list that takes ten minutes to reread is worse than no list. Aim for six to eight rules, the ones that actually change behavior on a typical draft. If you cannot recall them without checking, there are too many.",
          "I keep mine pinned above my writing window. Six lines. Everything else lives in the analysis file, where it can inform decisions without cluttering the moment of writing.",
        ],
      },
      {
        heading: "Constraints are temporary by design",
        paragraphs: [
          "A good constraint is not permanent law. It is a guardrail for this season of work, and you should revisit it every quarter or so. If a rule has stopped producing good drafts, it has done its job and should be retired.",
          "The whole point is to move decisions earlier, out of the writing session, so the writing session can be about the writing. Constraints buy you speed on the boring parts and attention for the parts that need you.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-pitfalls-copying-noise",
    title: "Blueprint Pitfalls: Copying Noise and Calling It Signal",
    excerpt:
      "The most expensive mistake in channel analysis is pattern-matching against randomness. Learn the traps that turn a clean blueprint into a pile of false rules.",
    date: "2025-05-07",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "patterns", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "I have watched creators build entire strategies on a pattern that was never real. They saw one video do well with a specific thumbnail style, decided that style was the secret, and spent six months producing nothing else. The video had done well for a different reason, and the strategy quietly drained their channel.",
          "That is the central danger of analysis: mistaking coincidence for structure. A blueprint is only useful if it captures what the channel does consistently, and most of what you notice in a small sample is not consistency at all.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Do not copy noise and call it signal.",
          "Small samples and survivorship bias fake a pattern.",
          "Confounded variables make a cause look obvious.",
          "A style feeling causal is not the same as being causal.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "Any pattern you can find in five videos, you can also find in five random numbers.",
      },
      {
        heading: "The traps that catch almost everyone",
        bullets: [
          "Small samples: two or three videos is not a catalog. You need enough volume that the same traits appear again and again without you hunting for them.",
          "Survivorship bias: you are studying channels that made it. The creators who used identical patterns and failed never show up in your saved list.",
          "Confounded variables: a spike in views might track a change in title length, or it might track the week the channel got featured. You cannot separate the two without more data.",
          "Aesthetic seduction: a distinctive editing style feels causal because it is easy to see. Feels causal is not the same as is causal.",
        ],
        paragraphs: [
          "None of these traps announce themselves. Each one looks exactly like insight from the inside, which is what makes them expensive.",
        ],
      },
      {
        heading: "The test for signal",
        paragraphs: [
          "Here is the question I ask of every candidate pattern: does it hold when I remove the best three videos? If the pattern only exists because of the outliers, it is noise wearing a nice label. If it survives without them, you have found something structural.",
          "Run the test on a blank page. List the pattern, cross off the top three performers, and see if the pattern still describes the remaining videos. Most do not.",
        ],
      },
      {
        heading: "Beware the pattern you wanted",
        paragraphs: [
          "The hardest trap to catch is confirmation. You arrive hoping to find that long-form beats short-form, or that a particular hook style is the answer, and the data conveniently agrees. I have done this to myself more than once.",
          "The guard is to write your prediction down before you look. If the pattern you find matches the prediction you wrote, treat it with extra suspicion rather than extra confidence. Agreement is a warning sign when you are the one choosing the sample.",
        ],
      },
      {
        heading: "Clean blueprints are smaller",
        paragraphs: [
          "Once you apply these filters, your blueprint shrinks. That is the goal. A short list of patterns you actually trust beats a long list where half the entries are noise. You can build on a few reliable rules. You cannot build on thirty guesses.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-borrowed-versus-custom",
    title: "Borrowed Versus Custom Blueprints: When to Build Your Own",
    excerpt:
      "Studying someone else's channel and writing your own formula are two different jobs. Knowing which one a moment calls for saves months of drift.",
    date: "2025-08-26",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "workflow", "patterns"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "There are two ways to get a blueprint. You can borrow one from a channel you studied, or you can build one from your own catalog. They solve different problems, and the mistake I see most often is using the borrowed kind for a job that only a custom one can do.",
          "A borrowed blueprint answers the question 'how does this proven channel work?' A custom blueprint answers 'what do my own successful videos have in common?' Both are useful. Neither replaces the other.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Borrow while you are learning, then build your own.",
          "Stop borrowing when the voice starts overriding yours.",
          "Do not copy a close competitor's blueprint.",
          "Graduate, or you never find what only your channel can do.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "Borrow the structure to learn the craft. Build the custom blueprint to find your voice.",
      },
      {
        heading: "When borrowing is the right move",
        paragraphs: [
          "Borrow when you are early and still learning the mechanics. If you have not produced enough to have your own patterns, studying a channel that already works is the fastest way to internalize structure. Borrowing gives you a proven skeleton to practice inside.",
          "Borrowing is also the right call when you change niches or formats. The old patterns may not transfer, and a borrowed blueprint gives you a starting point instead of a cold start.",
        ],
      },
      {
        heading: "When borrowing turns harmful",
        bullets: [
          "When the borrowed voice overrides yours: viewers can hear the difference between a structure and an impersonation, and they punish the impersonation.",
          "When the channel's niche is close to yours: copying a close competitor's blueprint just makes you a weaker version of them.",
          "When you never graduate: staying on a borrowed blueprint for years means you never discover what only your channel can do.",
        ],
        paragraphs: [
          "Borrowing should have an expiration date. Mine was about a year, and the signal to switch was simple: I could predict my own scripts before writing them, which meant I was ready to look at my own data instead of someone else's.",
        ],
      },
      {
        heading: "How to build a custom blueprint",
        paragraphs: [
          "Pull your own twenty best and twenty typical videos. Analyze them exactly the way you would analyze a stranger's channel, with no mercy about your intentions. What you meant to do does not matter. What shows up across your catalog does.",
          "The custom blueprint will surprise you. Almost every creator finds a strength they did not know they had, and a habit they had no idea was dragging every video down.",
        ],
      },
      {
        heading: "The honest sequence",
        paragraphs: [
          "Start borrowed, then go custom. Learn the rules by studying people who already follow them, then discover which rules are actually yours. A custom blueprint built before you have a catalog is just a mood board with better formatting.",
          "Once you have both, keep them side by side. The borrowed one tells you what good structure looks like. The custom one tells you what your good structure looks like. The gap between them is where your channel lives.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-teaching-a-formula-to-a-team",
    title: "Teaching a Script Formula to a Team Without Losing It",
    excerpt:
      "A blueprint that lives in one head is a bottleneck. Passing it to a team means turning tacit instinct into something people can practice and question.",
    date: "2025-12-11",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "blueprints", "patterns"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "The moment you hire a writer, your personal blueprint becomes a liability. Everything you do by instinct is invisible to them, so they either guess or ask you about every line, and both options kill your output. A formula that only lives in your head cannot scale past one person.",
          "Handing it over is harder than it sounds. Most of what makes a script work is tacit, learned through hundreds of small corrections. The job of teaching is turning that tacit knowledge into something explicit enough to be practiced and argued with.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the formula down, then teach with annotated examples.",
          "Give the team a rubric, not a rulebook.",
          "Show before-and-after edits so rules become visible.",
          "Let the formula change as the channel does.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "You do not teach a formula by explaining it. You teach it by showing the draft before and after the formula touched it.",
      },
      {
        heading: "Write the formula down, then throw it out",
        paragraphs: [
          "Start by documenting the rules, even the messy version. Get them onto one page. This first draft is for you, not the team, and it is mostly there to reveal which rules you actually follow and which ones you just say you follow.",
          "The gap between your stated rules and your real rules is the real curriculum. New writers will follow the document, and the videos will feel off, because the document is missing half of what you do. The fix is to catch those gaps early with examples.",
        ],
      },
      {
        heading: "Teach with annotated examples",
        paragraphs: [
          "Rules land faster when they come with a before and after. A writer who sees the edit learns the formula five times quicker than one who reads the description.",
        ],
        bullets: [
          "Take one strong script and label every section with the archetype it uses, so the writer sees the structure under the prose.",
          "Take one weak draft and mark exactly where it breaks the formula, then show the minimum change that fixed it.",
          "Show two versions of the same hook, before and after, so the rule stops being abstract and becomes a visible edit.",
          "Record a five-minute walkthrough of you editing a draft live, mistakes included. Watching the decisions beats reading the summary.",
        ],
      },
      {
        heading: "Give them a rubric, not a rulebook",
        paragraphs: [
          "A rulebook says 'the hook must be under two sentences.' A rubric asks 'does the hook contain a specific promise the viewer can feel?' The rulebook is easy to satisfy in a way that still fails. The rubric forces judgment, which is what you actually want from a writer.",
          "Pair every rule with the reason behind it. A writer who understands that the hook exists to earn the next ten seconds will make better decisions in cases your document never anticipated.",
        ],
      },
      {
        heading: "Let the formula change",
        paragraphs: [
          "The worst outcome is a team that treats your blueprint like scripture. Formulas drift, niches shift, and a writer who has run a thousand scripts will notice things you missed. Build in a monthly review where the people closest to the work can challenge a rule.",
          "A formula a team can question is a formula a team can own. The ones nobody is allowed to touch are the ones that quietly go stale.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-choosing-the-right-model",
    title: "Choosing the Right Model for Channel Analysis Work",
    excerpt:
      "Not every analysis task needs the biggest model. Matching the model to the job cuts cost, cuts wait time, and sometimes improves the result.",
    date: "2026-04-02",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "When people set up a channel analysis pipeline, the default instinct is to point the largest available model at everything. It feels safer. In practice, it is slower, more expensive, and occasionally worse, because the biggest model will happily over-interpret a category of task that just needs consistency.",
          "Analysis work is not one job. It is several, and they have different demands. Splitting them and matching each to the right model is the difference between a pipeline that hums and one that stalls.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match the model to the job: mechanical, labeling, or judgment.",
          "Benchmark on your own data, not a public leaderboard.",
          "Beware the consistency trap.",
          "Spend where the quality compounds.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "The right model is the smallest one that still gets the classification right on a hundred transcripts.",
      },
      {
        heading: "Three jobs, three demands",
        paragraphs: [
          "Extraction pulls structured facts out of transcripts: hook type, section boundaries, word counts at each timestamp. This work rewards speed and consistency far more than reasoning depth. A fast, cheap model handles it well, and running a heavy model here just burns budget.",
          "Classification sorts segments into categories you have already defined. Again, consistency matters more than cleverness. The model needs to apply the same labels the same way across fifty videos, which is a reliability problem, not an intelligence problem.",
          "Synthesis is where the big model earns its keep. Writing a blueprint from labeled patterns, spotting the tradeoff between two channels, or turning analysis into a strategy all require real reasoning across a lot of context. This is the step to spend on.",
        ],
      },
      {
        heading: "How I pick",
        paragraphs: [
          "The rule of thumb is boring but reliable: pay for reasoning, not for words. Most of the tokens in an analysis pipeline flow through tasks that only need to be consistent.",
        ],
        bullets: [
          "If the task has a single correct mechanical answer, use the fastest model that gets it right. Extraction and counting belong here.",
          "If the task is labeling against a fixed schema, test two or three models on the same fifty items and pick the one with the fewest disagreements. Cheap wins often.",
          "If the task requires judgment across many inputs at once, pay for the strong model. This is the twenty percent of work where quality compounds.",
          "Never assume. Benchmark on your own data, because the model that wins on a public leaderboard is not always the one that wins on your niche's transcripts.",
        ],
      },
      {
        heading: "Beware of the consistency trap",
        paragraphs: [
          "The subtle danger of strong models on simple tasks is variance. A large model may sometimes give a creative answer to a task that wants a boring one, and suddenly your extraction step has a different shape for video forty than it did for video one. Consistency is a feature, and the smallest model that stays consistent usually wins.",
          "Run the same transcript through your chosen model twice. If the two outputs disagree on the mechanical fields, the model is wrong for that job no matter how smart it is.",
        ],
      },
      {
        heading: "Spend where it compounds",
        paragraphs: [
          "The synthesis step is the one you will read and build on, so it deserves the strongest model you have. Extraction and classification are plumbing. You want them cheap, fast, and boring, so the interesting work gets the attention it needs.",
          "This ordering also makes the pipeline honest. When something in a blueprint feels wrong, you know whether to blame the reasoning or the plumbing, and that is worth a lot when you are debugging your own analysis.",
        ],
      },
    ],
  },
  {
    slug: "blueprint-to-outline-one-sitting",
    title: "From Blueprint to Outline in One Focused Sitting",
    excerpt:
      "A blueprint is only as good as the outline it produces. Here is a fast, repeatable session that turns analysis into a draftable plan in under an hour.",
    date: "2026-09-15",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "blueprints", "analysis"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "The most common failure in the blueprint workflow is not analysis and it is not writing. It is the gap between them. You finish a clean blueprint, feel productive, and then the next writing session starts from a blank page anyway. The blueprint never touched the draft.",
          "Closing that gap takes one dedicated session, done the same way every time. The goal is simple: walk in with a blueprint and a topic, walk out with an outline you could hand to a stranger.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fill the skeleton in one focused sitting.",
          "One point per section; two points means two sections.",
          "Add the hook last by compressing the strongest moment.",
          "Mark the transitions; that is the step everyone skips.",
        ]
      },
      {
        paragraphs: [],
        quote:
          "An outline is a blueprint that has been given a topic and a deadline. Until then it is just a nice document.",
      },
      {
        heading: "The session, step by step",
        paragraphs: [
          "Set a hard timer for forty-five minutes. The constraint matters, because the temptation is to keep refining the blueprint instead of using it. The blueprint is done. This session is about output.",
          "Start by restating the promise of the video in one sentence. Not the topic, the promise: what does the viewer get and by when? Everything downstream has to serve that sentence, and most outlines go wrong because it was never written down.",
        ],
      },
      {
        heading: "Fill the skeleton in order",
        paragraphs: [
          "Once the promise sentence exists, the rest of the session is assembly. Do it in order and do not double back.",
        ],
        bullets: [
          "Drop your section archetypes in sequence and give each one a one-line job. Context, proof, method, objection, resolution, or whatever your blueprint calls for.",
          "Under each section, write the single point it must land. One point per section. If a section needs two, it is two sections.",
          "Add the hook last, by compressing the strongest moment in the outline into two sentences. Hooks written first almost always oversell.",
          "Mark the transitions, one phrase each, so the draft does not stall where sections meet. This is the step almost everyone skips and almost everyone regrets.",
        ],
      },
      {
        heading: "Leave the writing for later",
        paragraphs: [
          "Resist the urge to write prose. The moment you start polishing sentences, the timer dies and the outline turns into a half-draft with a shape you cannot change because you already fell in love with the wording.",
          "An outline should be ugly and fast. Full sentences are a warning sign. If you can read the outline and hear the video, the draft will come quickly tomorrow, and that is the whole point of doing this in one sitting.",
        ],
      },
      {
        heading: "Review against the blueprint",
        paragraphs: [
          "Spend the last five minutes checking the outline against the blueprint, not against your taste. Does it use the hook formula? Does it place proof before method if that is the channel's pattern? Have you included the objection section that most drafts forget?",
          "This is where the blueprint finally pays for itself. It is not inspiration and it is not a template. It is a checklist that catches the four or five mistakes you make under time pressure, before they cost you a rewrite.",
        ],
      },
    ],
  },
];
