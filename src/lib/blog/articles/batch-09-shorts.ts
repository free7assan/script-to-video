import { Film, Zap, Scissors, Repeat, Target, Type, Layers, Compass, Map, BarChart3 } from "lucide-react";
import type { BlogPost } from "../types";

export const batch09: BlogPost[] = [
  {
    slug: "shorts-scripting-vertical-video",
    title: "Scripting Vertical Video Is a Different Craft",
    excerpt:
      "A Short is not a trimmed landscape video. The framing and pacing change once the screen goes vertical, and so does where you put the payoff.",
    date: "2024-03-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format", "clips"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "You can spot a bad Short in about two seconds. It is a landscape video dropped into a vertical frame, with black bars at the top and bottom because nobody wanted to re-cut it. The audio makes sense, the footage is fine, and it still feels wrong, like a movie playing on a phone held sideways.",
          "Vertical is not just a smaller rectangle. It changes how much of a person you see, how fast a thumb sits over the screen, and how many ideas a single shot can carry. Write for the format and the format stops fighting you.",
        ],
      },
      {
        heading: "Framing decides your script before you write a word",
        paragraphs: [
          "A vertical frame holds one subject well and crowds anything else. Two people talking means one of them is half out of frame. A wide establishing shot becomes a strip of sky above a road. That constraint is a gift during scripting: it tells you to write around faces, hands, and objects you can hold up to the lens.",
          "I keep a running list of shot types that survive vertical: talking head close-ups, screen recordings, overhead hands, product shots on a plain table. If a beat in the script needs a wide crowd shot to land, I rewrite the beat.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If the idea cannot survive a tight frame and a thumb hovering over it, it was never a Short problem. It was an idea problem.",
      },
      {
        heading: "Short sentences, spoken fast",
        paragraphs: [
          "People watch with the sound off at first and the captions on. Sentences have to survive being read at a glance while someone walks down the street. I cut every clause that does not change the meaning. Where a long-form script says, 'The reason this matters is that most creators never test their hooks,' the Short says, 'Most creators never test their hooks.'",
          "Read the script out loud and time it. If a sentence makes you run out of breath, it will make the viewer lose the thread. Break it into two lines.",
        ],
      },
      {
        heading: "Put the payoff where retention dies",
        paragraphs: [
          "Long-form gives you a slow build. Shorts do not have room for one. Retention on a 45-second clip drops hardest in the first second and again right before the promised payoff. So I front-load: the claim, the result, or the twist shows up inside the first 5 seconds, and the rest of the clip explains how it got there.",
          "This feels backwards if you came from long-form. The instinct is to build suspense. On vertical, suspense is a gamble against a thumb that has already left.",
        ],
        bullets: [
          "Open on the result, then rewind to the process.",
          "Give the viewer something to look at every 2 to 3 seconds.",
          "End one beat before the viewer expects it, not after.",
          "Write the last line first so the whole clip has a target.",
        ],
      },
      {
        heading: "Why it is worth writing fresh",
        paragraphs: [
          "The lazy move is to chop a podcast into vertical slices and call it a day. It works sometimes, but the clips that actually move are almost always re-written, re-shot, or at least re-ordered for the vertical viewer, who never saw the original and does not care that it existed.",
          "Treating vertical as its own craft takes me maybe 20 extra minutes per clip. Over a month that is a few hours, and it is the difference between a channel people tolerate and one they follow.",
        ],
      },
    ],
  },
  {
    slug: "shorts-one-second-hook",
    title: "The One-Second Hook That Decides if They Watch",
    excerpt:
      "Vertical viewers judge a clip before they ever agree to watch it. The first second has room for about eight words, and most scripts spend them on the wrong thing.",
    date: "2024-05-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Pull up your last Short and pause it at the one-second mark. That single frame is the entire pitch. On a vertical feed, the app shows a stranger a moving thumbnail before they have agreed to watch anything, and their finger makes the call in less time than it takes to read this sentence.",
          "Long-form hooks get five to fifteen seconds to set a scene. Vertical gets roughly one second and about eight spoken words. That is the whole budget, and most scripts spend it on the wrong thing.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You are not competing with the video before yours. You are competing with a thumb that has already moved twice.",
      },
      {
        heading: "Lead with the most interesting frame you own",
        paragraphs: [
          "Open on the moment, not the setup. If the clip is about a $4,000 mistake, the first second shows the invoice, not you walking into the office. If it is about a recipe failure, the first frame is the burned pan. Context comes second; the image comes first.",
          "People forgive missing context. They do not forgive boredom. A viewer who sees something strange in frame one will wait two seconds to find out why, and those two seconds are the whole job.",
        ],
      },
      {
        heading: "Say something only this video could say",
        paragraphs: [
          "A generic opener like 'Here is a tip for creators' works on ten thousand videos and therefore belongs to none of them. The hook should be specific enough that no other clip could use it. 'I replaced my intro music and lost 12 percent of viewers' cannot be reused by anyone else.",
          "Specific numbers, names, and objects do the heavy lifting. Vague excitement does not. When I audit a batch of Shorts, the ones under 40 percent average view duration almost always open with a category instead of a claim.",
        ],
      },
      {
        heading: "The one-second checklist",
        bullets: [
          "Can you name what the clip is about from frame one, sound off?",
          "Does the first spoken line contain a specific noun or number?",
          "Would any other channel's Short work with your exact opening line?",
          "Does frame one match the promise the caption and thumbnail make?",
          "Have you cut every word before the verb?",
        ],
        paragraphs: [
          "If a hook misses two or more of these, I rewrite before touching the edit. It is faster to fix a line than to fix a distribution problem.",
        ],
      },
      {
        heading: "Rewriting beats rationalizing",
        paragraphs: [
          "The tempting move after a flop is to blame the algorithm or the time of day. Sometimes the clock matters. Most of the time the first second just did not earn the second one.",
          "I keep a text file of hooks that lost and hooks that won, stripped of context. After 50 entries the pattern is embarrassingly clear: the winners name a thing and the losers describe a feeling.",
        ],
      },
    ],
  },
  {
    slug: "shorts-repurposing-long-form-clips",
    title: "Turning One Long Video Into Ten Shorts That Work",
    excerpt:
      "Repurposing is a search problem, not a cutting problem. A three-hour interview holds a handful of real moments, and the rest is filler that should never ship.",
    date: "2024-06-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "clips", "shorts"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "I used to think repurposing meant dragging the timeline over a podcast and exporting whatever landed under 60 seconds. The clips got views, some of them, but they felt like leftovers. The fix was treating repurposing as a search problem, not a cutting problem.",
          "A three-hour interview holds maybe six genuinely standalone moments. Your job is to find those six, not to slice the whole thing into 30 mediocre pieces.",
        ],
      },
      {
        heading: "Hunt for self-contained tension",
        paragraphs: [
          "A clip needs a question and an answer inside its own borders. I scrub the transcript and mark every place where someone changes their mind, admits a mistake, or states a number that surprises even them. Those are the seams.",
          "I highlight in three colors: green for a strong claim, yellow for the evidence right after it, red for the turn. A clip is usually one green, one yellow, one red, in that order. If a moment has only a green, it is a pull quote, not a Short.",
        ],
        bullets: [
          "Find the turn first, then work backward to the setup.",
          "Twenty to fifty seconds is a safe default for talking-head clips.",
          "Prefer moments where the speaker interrupts themselves.",
          "Cut the greeting and the sign-off. They cost two seconds each and buy nothing.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Nobody watching the clip knows or cares that it came from a three-hour interview. The clip has to justify itself from zero.",
      },
      {
        heading: "Rebuild the opening for people who never saw the source",
        paragraphs: [
          "Raw cuts open with, 'So as I was saying about pricing.' That line only works for someone watching in order. For the clip, I re-record a five-word intro or slap a text card on the first frame that names the claim.",
          "Captions do a lot of this work. A burned-in line like 'The pricing mistake that cost him $40k' sets the scene while the audio catches up. It buys the two seconds the clip needs.",
        ],
      },
      {
        heading: "Batch the output",
        paragraphs: [
          "Pull every candidate moment into a folder before editing any of them. When I cut one at a time I get precious and slow. When I have 12 candidates lined up, I kill the weak ones without ceremony and keep the six that survive a second listen.",
          "This also keeps a series consistent. Same caption style, same intro length, same loudness. A batch of clips that feel like one channel beats six perfect clips that feel like six channels.",
        ],
      },
      {
        heading: "What not to repurpose",
        paragraphs: [
          "Not every long video deserves shorts. A slow tutorial with no single reveal, a rant with no concrete claim, a livestream full of dead air: mine these for quotes, not clips. Forcing a Short out of thin material just fills your channel with content that trains viewers to skip.",
          "My rule is simple. If I cannot write a one-sentence promise for the clip, the source does not have a clip in it yet.",
        ],
      },
    ],
  },
  {
    slug: "shorts-loopability-rewatches",
    title: "Making Shorts Loop So People Watch Them Twice",
    excerpt:
      "Rewatches are free watch time. A loop happens when the last beat flows into the first, and the creators who design for it get two views out of one clip.",
    date: "2024-08-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A loop happens when the last frame of a Short flows into the first frame so smoothly that the viewer does not notice the restart. They watch again, often on purpose, sometimes without realizing it. Rewatches are free watch time, and on vertical platforms watch time is most of the game.",
          "Most creators treat the ending as a place to say goodbye. The loopable ones treat it as a second opening.",
        ],
      },
      {
        heading: "Match the last beat to the first",
        paragraphs: [
          "If the clip opens on a question and closes on the answer, the viewer has to rewind to check the answer against the question. That rewind is a loop. I write endings that point back at the start on purpose.",
          "An example: open with 'Three words got my email opened twice as often.' Close with the three words, then a half beat of silence before the first line returns. The pause is what lets the restart feel intentional.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A good ending does not close the door. It leaves it ajar and lets the autoplay walk back in.",
      },
      {
        heading: "Cut the part where you say goodbye",
        paragraphs: [
          "End on the payoff, not after it. The moment you say 'follow for more' you have given the viewer permission to leave. If a call to action is necessary, put it in the caption or the pinned comment and keep the video's final frame tight to the content.",
          "Silence works too. Half a second of black or a held frame before the restart reads as a breath, not a bug, and loops feel natural instead of jarring.",
        ],
      },
      {
        heading: "Design a rhythm, not a single clip",
        bullets: [
          "Keep clips at a length that divides cleanly into a few loops.",
          "Make the middle interesting on a second watch, with detail missed the first time.",
          "Use motion that carries across the cut: a hand entering frame, a camera pan, a beat drop.",
          "Test the loop by playing it three times yourself. If you notice the seam, so will they.",
        ],
        paragraphs: [
          "I test new Shorts by leaving them running on a phone while I do something else. The ones that keep going past three loops without an obvious restart keep the format. The rest get a new ending.",
        ],
      },
      {
        heading: "Do not force it",
        paragraphs: [
          "Loopability is a multiplier, not a substitute for substance. A clip that loops because it is 5 seconds of confetti will get one extra loop and then lose the viewer for good. The loop should reward a second look, not just trick one.",
          "I would rather have a 45-second clip people watch to the end once than a 6-second clip people loop three times out of confusion.",
        ],
      },
    ],
  },
  {
    slug: "shorts-funnel-and-when-it-isnt",
    title: "When Shorts Work as a Funnel and When They Fail",
    excerpt:
      "Cheap reach at the top sounds great until you measure the crossover. Shorts sell long-form only when the viewer can tell it is the same person making both.",
    date: "2024-10-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "The pitch for Shorts is simple: cheap reach at the top of the funnel, then viewers drift over to the long videos and subscribe. Sometimes that happens. Often it does not, and the creators who get burned are the ones who built a whole strategy on the assumption that it does.",
          "Shorts and long-form are different feeds with different people. Not every short viewer wants a 20-minute video, and treating them as the same audience is where plans break.",
        ],
      },
      {
        heading: "When the funnel works",
        paragraphs: [
          "Shorts feed long-form best when the short is a genuine sample of the long. A 40-second clip of a build teases the full build. A single tip from a 15-minute tutorial makes the tutorial feel necessary. The viewer already wants the thing; the short just proves you have it.",
          "A clear through-line helps. Same face, same set, same opening motif. If the long video feels like a different channel, the bridge collapses.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A Short sells the long video only if the viewer can tell, in the first three seconds, that it is the same person talking about the same thing.",
      },
      {
        heading: "When the funnel does not work",
        bullets: [
          "Your Shorts are pure entertainment and your long-form is technical. The audience for one is not the audience for the other.",
          "Your long videos rely on a slow build that a 30-second viewer has no patience for.",
          "Your Shorts are reposted clips with no face and no name, so there is nothing to follow.",
          "Your long-form is a different topic entirely, and the algorithm sends the wrong people.",
        ],
        paragraphs: [
          "In those cases Shorts can still be worth making. They just are not a funnel. They are their own audience, with their own goals, and you should judge them by their own numbers.",
        ],
      },
      {
        heading: "Decide which job Shorts are doing",
        paragraphs: [
          "I ask one question before every Shorts push: am I using this to grow a long-form channel, or am I building a Shorts channel that happens to have a long-form sibling? The content is similar but the success metrics are not.",
          "For a funnel, I care about profile visits per view. For a standalone Shorts channel, I care about average view duration and shares. Same clips, different scorecard, and chasing the wrong one leads to weird decisions.",
        ],
      },
      {
        heading: "The honest middle",
        paragraphs: [
          "Most channels sit somewhere in between. They get some crossover and some dead ends. That is fine. The mistake is promising yourself a conversion rate you never measured and then feeling like a failure when the graph does not match the story.",
          "Look at the actual click-through from a Short's profile visits to your long videos. If it is healthy, lean in. If it is flat, stop calling it a funnel and start treating it as reach.",
        ],
      },
    ],
  },
  {
    slug: "shorts-captions-silent-viewing",
    title: "Captions Are Not Optional: Writing for Silent Viewing",
    excerpt:
      "Roughly half your viewers watch muted the first time. If a joke or a claim only works in the audio, most of your audience never receives it.",
    date: "2025-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Roughly half the people who see your Short will watch it with the sound off the first time. Maybe they are on a train, maybe the app just autoplays muted. Whatever the reason, your clip has to work as text on a screen before it works as audio.",
          "I learned this the hard way. A Short with a great spoken joke died at 18 percent average view duration because the punchline was invisible to anyone not wearing headphones. I re-cut it with captions and the number nearly doubled.",
        ],
      },
      {
        heading: "Captions are part of the script, not the edit",
        paragraphs: [
          "If you write captions by auto-transcribing whatever you said, you get the ums and the run-ons. I write the on-screen text as its own track: short lines, no filler, placed where the eye already is. Then the spoken audio can breathe.",
          "Two rules I follow. One caption line on screen at a time. And the caption should carry meaning, not just repeat the audio verbatim. If a word does not add anything on screen, cut it.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Sound-off is not a degraded version of your video. For a lot of viewers it is the only version they will ever see.",
      },
      {
        heading: "Placement and pacing",
        bullets: [
          "Keep captions in the lower-middle third, clear of the platform's own buttons and progress bar.",
          "Break lines every two to four words so the eye never has to hunt.",
          "Time each line to the spoken phrase, not the sentence. Reading is faster than listening.",
          "Use one accent color at most. A wall of colored text is decoration, not clarity.",
        ],
        paragraphs: [
          "I keep a template in my editor with the safe zones marked. The top and bottom eighth of a vertical frame belong to the app, not to me.",
        ],
      },
      {
        heading: "Writing for the ear and the eye at once",
        paragraphs: [
          "When a line will be read before it is heard, I write it slightly shorter than I would for audio alone. Redundant phrases that sound natural spoken feel heavy on screen. 'What I want to say is' becomes 'Here is the thing.'",
          "This also improves the audio version. Shorter sentences are easier to follow and easier to caption, which is why the two formats push writers in the same direction.",
        ],
      },
      {
        heading: "Test with the mute on",
        paragraphs: [
          "Before publishing, I watch the whole clip on mute. If I cannot follow the story without sound, the captions are not done. If the captions cover the one interesting visual in the clip, the placement is wrong. Both problems are cheap to fix and expensive to ship.",
          "Accessibility gets cited as the reason for captions, and it is a real one. The selfish reason is just as true: captions are the version most people will actually use.",
        ],
      },
    ],
  },
  {
    slug: "shorts-building-a-series",
    title: "Building a Shorts Series People Come Back For",
    excerpt:
      "A single viral clip is a lottery ticket. A repeatable series is a business, and it only works if the container survives the boring episodes.",
    date: "2025-03-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format", "clips"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "One viral Short is a lottery ticket. A series is a business. When viewers know that every Tuesday brings another installment of the same thing, they start looking for it instead of stumbling onto it, and that changes the numbers in a way a single hit never does.",
          "The catch is that a series is a promise. Break it twice and the audience stops trusting the pattern.",
        ],
      },
      {
        heading: "Pick a frame you can repeat 50 times",
        paragraphs: [
          "A series needs a repeatable container: a format, a premise, a recurring visual. 'Fixing one thing in my studio every episode.' 'Reading one bad headline and rewriting it.' 'One pricing mistake from a real business.' The container is what makes episode 12 feel familiar before it starts.",
          "If you cannot name the container in one sentence, you do not have a series yet. You have a topic, which is different.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A series is a container that survives boring episodes. If episode four is a slog, the format is carrying the show, not the idea.",
      },
      {
        heading: "Make the numbering work for you",
        paragraphs: [
          "Episode numbers do more than organize. They tell a new viewer there is a back catalog, and they tell a returning viewer where they left off. I put a small numeral in the same corner of every clip, and viewers started commenting when they missed one.",
          "Keep the length consistent too. If episodes run 35 to 50 seconds, the audience learns how much time a click costs. Wild swings in length make the series feel unpredictable in a bad way.",
        ],
        bullets: [
          "Same corner, same font, same size for every number.",
          "Keep episode length inside a 15-second band.",
          "Title each part with the promise, not just the number.",
          "Pin a playlist so a new viewer can start at part one.",
        ],
      },
      {
        heading: "Write the hooks as a set, not one at a time",
        paragraphs: [
          "When I batch a series, I write 10 hooks in one sitting and then rank them. Nine mediocre hooks become obvious next to one strong one. Written alone on different days, they all feel fine and they all underperform.",
          "I also vary the entry point. Some episodes open on a result, some on a question, some on a mistake. Same container, different door, or the series starts to feel like reruns of itself.",
        ],
      },
      {
        heading: "Plan the exit",
        paragraphs: [
          "Every series eventually runs out. I decide up front whether it is open-ended or a fixed season of 12 or 20. A fixed season gives viewers a reason to binge the back half and gives me a natural place to stop before the format gets tired.",
          "If a series is working, the numbers will tell you to keep going. If it is not, ending on purpose beats letting it fade out.",
        ],
      },
    ],
  },
  {
    slug: "shorts-clip-stand-on-its-own",
    title: "What Makes a Clip Stand on Its Own Without Context",
    excerpt:
      "A standalone clip answers a question it raises and never says 'as I mentioned earlier.' If a stranger cannot follow it cold, it is not ready to post.",
    date: "2025-06-04",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["clips", "format", "shorts"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A clip stands on its own when a stranger who has never heard of you can follow it and wants to pass it along, all without watching anything else. That is a high bar, and most repurposed moments fail it because they assume context the new viewer does not have.",
          "Context is the enemy. The original audience had 20 minutes of setup. The clip viewer has none.",
        ],
      },
      {
        heading: "It answers a question it raises",
        paragraphs: [
          "A standalone clip creates a small question in the first few seconds and answers it before the end. Not a cliffhanger. A complete thought. The viewer should feel the clip closed a loop, even a small one.",
          "If the clip ends with 'and that is why you always check the contract,' the viewer has to have seen the contract mistake earlier in the clip. If the mistake was in the source video and not the clip, the ending is a dangling reference.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A clip is not a fragment of a video. It is a whole small video that happens to have been born inside a larger one.",
      },
      {
        heading: "It names its own subject",
        bullets: [
          "On-screen text names the topic in the first second.",
          "Any jargon gets one clause of definition, or it comes out.",
          "Faces and names get reintroduced, even if the source video already covered them.",
          "The clip never says 'as I mentioned earlier.' There is no earlier for this viewer.",
        ],
        paragraphs: [
          "These feel redundant when you already know the story. They are the difference between a clip that travels and a clip that only makes sense to people who were already in the room.",
        ],
      },
      {
        heading: "It survives the wrong audience",
        paragraphs: [
          "Your clip will be shown to people who follow a completely different channel. It cannot rely on shared taste or shared history. It has to be interesting on its own terms, to someone who arrived by accident.",
          "I test this by showing clips to a friend who does not follow the topic. If they ask 'wait, who is that' in the first few seconds, I fix the opening. If they ask it at the end, the clip is fine.",
        ],
      },
      {
        heading: "Cut for the stranger, not the fan",
        paragraphs: [
          "The instinct when repurposing is to preserve what made the moment great in context. The better instinct is to rebuild it so the moment lands with no context at all. That usually means a new opening line, a short text card, and a tighter cut.",
          "Fans will still enjoy it. But the clip now has a chance with everyone else, and everyone else is most of the feed.",
        ],
      },
    ],
  },
  {
    slug: "shorts-versus-long-form-strategy",
    title: "Shorts or Long-Form? Pick One With Your Eyes Open",
    excerpt:
      "Shorts buy attention. Long-form earns loyalty. The formats reward different work, and pretending one does the other's job is how channels stall.",
    date: "2025-11-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format", "repurposing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Shorts and long-form are not two settings of the same machine. They reward different things, they find different people, and they ask for different work. Picking between them is less about which is better and more about what you actually want to build.",
          "I run both. They cost me different amounts of energy, and they pay back in different currencies.",
        ],
      },
      {
        heading: "What each format is good at",
        paragraphs: [
          "Shorts are good at reach and at testing ideas cheaply. A single clip can find an audience of thousands overnight. Long-form is good at depth and at revenue. A 15-minute video is where someone decides you are worth an hour of their week, and where ad revenue and sponsorships actually add up.",
          "Shorts rarely pay much directly. Long-form rarely grows fast on its own. The formats are complements, not rivals, but only if you respect what each one does.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Shorts buy attention. Long-form earns loyalty. If you only make one, you are missing half the trade.",
      },
      {
        heading: "The crossover problem",
        paragraphs: [
          "The number that matters is not views on the Short. It is how many of those viewers show up on the long videos. Most channels never measure it, which is why they argue about Shorts strategy using vibes.",
          "I track profile visits per thousand Shorts views and compare it to follow rate. A Short that gets 200k views and 30 profile visits is entertainment. A Short that gets 20k views and 400 visits is a funnel. Different jobs, different winners.",
        ],
      },
      {
        heading: "How I split the time",
        bullets: [
          "One long video a week, cut from a single idea I care about.",
          "Three Shorts a week, two repurposed from the long video and one written fresh.",
          "A monthly review of which Shorts actually sent long-form viewers.",
          "Kill any series that runs two months without moving the crossover number.",
        ],
        paragraphs: [
          "The split is not sacred. In a launch month I might publish only Shorts. In a deep-dive month I might skip them entirely. What stays constant is measuring which format did which job.",
        ],
      },
      {
        heading: "Pick with your eyes open",
        paragraphs: [
          "If you want fast reach and you can produce a lot of small pieces, Shorts suit you. If you want a durable catalog and you like depth, long-form suits you. If you want both, budget the time for both, because neither one does the other's job for free.",
          "The worst outcome is treating Shorts as a growth hack and then wondering why the long-form subscriber count barely moved. The formats were never the same lever.",
        ],
      },
    ],
  },
  {
    slug: "shorts-measuring-performance",
    title: "Measuring Shorts Performance Without Fooling Yourself",
    excerpt:
      "Views tell you almost nothing on their own. A clip can hit 500k views and still be a flop if everyone leaves before the second word.",
    date: "2026-04-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Views tell you almost nothing about a Short. A clip can rack up 500k views and still be a failure if everyone leaves in two seconds. What you want is a small set of numbers read together, not one big number read alone.",
          "I keep four on a dashboard and ignore the rest: average view duration, the retention curve, shares per thousand views, and profile visits per thousand views. Each one answers a different question.",
        ],
      },
      {
        heading: "Average view duration and the first second",
        paragraphs: [
          "Average view duration is the headline. If a 30-second clip holds people for 20 seconds, the content is doing its job. If it holds for six, the hook is the problem, not the body.",
          "Read it with the retention curve. A cliff right at the start means the hook failed. A slow slide means the middle sagged. A rise near the end means the loop is working and people are watching twice.",
        ],
      },
      {
        paragraphs: [],
        quote: "One number is a rumor. Four numbers read together are a diagnosis.",
      },
      {
        heading: "Shares tell you if it is worth passing on",
        paragraphs: [
          "Shares per thousand views is the honesty metric for a Short. Views can come from the algorithm shoving a clip in front of people who scroll past. Shares only happen when someone decides a friend should see this.",
          "A share rate I like to see is around 1 to 2 per thousand. Below that, the clip might be pleasant but forgettable. Well above it, you have something people use to say something about themselves.",
        ],
      },
      {
        heading: "The numbers that do not mean what they seem",
        bullets: [
          "Likes are cheap on vertical feeds; a like costs less attention than a view.",
          "Comments spike on controversial clips that also tank retention. Do not confuse argument with interest.",
          "Subscriber gains from Shorts are real but small; watch profile visits instead.",
          "Raw views without duration are the most misleading number on the platform.",
        ],
        paragraphs: [
          "I have watched channels chase views into a hole, publishing more and more of whatever got a spike, until the whole feed was content their real audience did not want.",
        ],
      },
      {
        heading: "A weekly reading, not a daily one",
        paragraphs: [
          "Shorts numbers bounce hard. A clip that looks dead on day one can pick up on day nine when the feed decides to retest it. I review a batch weekly, compare it to the previous week, and only make a call after two weeks of data.",
          "When a clip wins, I ask why and try to repeat the one thing that caused it. When it loses, I ask the same question. The dashboard is only useful if it changes the next script.",
        ],
      },
    ],
  },
];
