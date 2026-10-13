import {
  Compass,
  Repeat,
  Search,
  Target,
  Flame,
  Film,
  MessageSquare,
  Type,
  Scissors,
  Feather,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch01: BlogPost[] = [
  {
    slug: "hook-cold-open-vs-context-first",
    title: "Cold Open or Context First: Picking Your Entry Point",
    excerpt:
      "A cold open buys attention with tension. Context first buys it with clarity. Both work, but almost never for the same video.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "scripting"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Open with a cold open and you buy attention with tension. Open with context first and you buy it with clarity. Most creators pick one out of habit, then blame the topic when retention sags in the first thirty seconds. The entry point decides whether anyone hears the rest of your script at all.",
          "I have written both on purpose, and I have watched both fail on purpose. The failure is rarely the wording. It is a mismatch between the opening style and what the viewer actually needs in the first second they land on your video.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A cold open works when the tension is obvious. Context works when the tension is buried. Swap them and both collapse.",
      },
      {
        heading: "What a cold open actually costs",
        paragraphs: [
          "A cold open drops the viewer into the middle of a moment: an argument, a failure, a number that refuses to add up. It works because curiosity is cheaper to trigger than comprehension. You do not have to explain anything yet, you just have to make the viewer feel that something is unresolved.",
          "The cost is orientation. If the stakes are not legible within a few seconds, the viewer has no reason to care about the scene. A cold open with fuzzy stakes reads as noise, and noise gets skipped faster than a slow explanation ever does.",
        ],
      },
      {
        heading: "When context first is the right call",
        paragraphs: [
          "Context first is the honest choice when the viewer cannot feel the tension without a frame. If your video is about a quiet default setting inside a tool, the drama is invisible until you explain what that setting does to a real project. Starting mid-scene there just confuses someone who has never seen the menu.",
          "The trick is to make the context itself a small story, not a definition. Instead of 'today we are going to talk about X,' show a person hitting the problem. A frame delivered as a scene reads very differently from a frame delivered as a lecture.",
        ],
      },
      {
        heading: "A quick decision test",
        bullets: [
          "Can a stranger feel the stakes in your first line with zero setup? If yes, a cold open is available to you.",
          "Does the tension depend on knowing how something normally behaves? If yes, context first wins, but deliver the context as a scene.",
          "Is the payoff visual and fast? Lean cold open. Is it conceptual and slow to land? Lean context first.",
          "Would your cold open still make sense with sound off? If not, you may be hiding the premise behind mood.",
        ],
        paragraphs: [
          "Run every draft through those four questions before you record. Swapping the entry point is a five-minute edit that changes how the entire video is received.",
        ],
      },
      {
        heading: "The hybrid most creators miss",
        paragraphs: [
          "You are not stuck choosing between the two. The strongest openers I audit do both in miniature: a two-second cold beat, one line of context, then the promise. It sounds like this: a strange result, a single sentence explaining why the result is strange, then exactly what the viewer is about to learn.",
          "That order works because it leads with feeling and follows with meaning. Attention first, comprehension second. Flip it and you are asking someone to care before they have been handed a reason.",
          "Pick the entry point deliberately, read your first line as a stranger would, and if nothing pulls, you already have your answer.",
        ],
      },
    ],
  },
  {
    slug: "hook-open-loop-mechanics",
    title: "The Open Loop: Why an Unfinished Thought Hooks a Viewer",
    excerpt:
      "An open loop plants a question and delays the answer. The delay is the mechanism, and most creators close the loop far too early to benefit.",
    date: "2024-05-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "scripting"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "An open loop is a question you raise and refuse to answer. It works because the mind treats an unfinished thought like a small debt. You introduced a gap, and the viewer stays to close it. That is the whole mechanism, which is why the technique shows up in the first line of so many high-retention videos.",
          "I use loops constantly, and I have seen them abused just as often. A loop is not a mystery box you never open. It is a promise with a scheduled payoff, and that schedule is what keeps the exchange fair.",
        ],
      },
      {
        heading: "The three parts of a working loop",
        paragraphs: [],
        bullets: [
          "The gap: a specific question the viewer can repeat back. 'Why did the channel with the worst thumbnails win the month?'",
          "The cost of leaving: a reason the answer matters to them, stated in a few seconds. If the payoff only settles your curiosity, nobody stays.",
          "The payoff: an answer delivered where you implied it would arrive, not four minutes later after a sponsor read.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A loop you never close is a lie. Do it twice and viewers stop trusting your openings, which costs far more than one weak video.",
      },
      {
        heading: "Why delay creates tension",
        paragraphs: [
          "Delay is uncomfortable by design. Ask a question and answer it in the same breath, and the brain files the exchange as complete and moves on. Hold the answer for twenty seconds while doing useful work, and the viewer keeps one thread open and follows it forward.",
          "The useful-work part matters. An open loop is not permission to stall. The time between the question and the answer has to pay rent, either by adding context the payoff needs or by raising the stakes of the answer itself.",
        ],
      },
      {
        heading: "Loops stack, but not forever",
        paragraphs: [
          "Good writers stack loops: the main question stays open while smaller questions open and close along the way. Each small close hands the viewer a tiny reward, which makes waiting for the big answer tolerable instead of annoying.",
          "Two open loops is plenty. Three starts to feel like homework. If a viewer cannot tell which question is the main one, you have not made a video, you have made a to-do list with a face on camera.",
          "Close the loop where you promised. If you said the answer lands after the demo, do not shove it past the demo. The credibility of every future hook depends on whether this one paid off on time.",
        ],
      },
      {
        heading: "Write the payoff before the setup",
        paragraphs: [
          "I draft the answer first, then build the question backward from it. That keeps the gap honest. You cannot promise a satisfying reveal you have not figured out, and writing the payoff first forces you to confirm it exists.",
          "When the payoff is already on the page, the hook writes itself. The gap is just the shortest distance between the viewer's confusion and your resolution, and the shortest distance is almost always the right one.",
        ],
      },
    ],
  },
  {
    slug: "hook-curiosity-gap-done-honestly",
    title: "The Curiosity Gap, Done Honestly Instead of Clickbait",
    excerpt:
      "A curiosity gap just withholds information. Clickbait withholds the point. The difference is whether your video ever delivers what the opening implied.",
    date: "2024-08-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "The curiosity gap is the oldest trick in the book, and it survives because it reflects how attention actually works. You present an incomplete picture, the viewer wants the missing piece, and they watch to get it. Nothing about that is dishonest on its own.",
          "The dishonesty enters later, when the gap implies a payoff the video never provides. That is the line between a hook and clickbait, and it is thinner than most creators admit.",
        ],
      },
      {
        heading: "Information gap versus intent gap",
        paragraphs: [
          "An information gap hides a fact: which camera the pro actually used, what the error message meant, how much the experiment cost. The gap has a shape, and the viewer can feel that an answer exists.",
          "An intent gap hides the whole point. 'You will not believe what happened next' tells the viewer nothing about topic, stakes, or value. It is a lottery ticket, not a hook. If the reveal could be anything, the viewer learns quickly that the opening was a shell.",
          "The fix is simple to state and hard to resist: always let the viewer name what they are waiting for. Even a partial reveal of the answer beats a total blank.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Clickbait borrows attention from the future. The bill comes due in the last minute of the video, when the viewer realizes the title promised something you never shot.",
      },
      {
        heading: "How to size the gap correctly",
        paragraphs: [],
        bullets: [
          "The gap should be small enough that the viewer believes you can resolve it in this video, not a trilogy.",
          "The gap should be specific enough that they could write the question on a sticky note: 'how did this channel cut their edit time in half?'",
          "The gap should map to a real scene you already planned, not a teaser you will have to invent footage for later.",
          "The gap should close in the same video. Cross-video teasing works for serials, not for standalone uploads.",
        ],
      },
      {
        heading: "The honesty test",
        paragraphs: [
          "Read your title, then read the moment in the script where you resolve it. If the resolution is smaller than what the title implied, you have oversold. If it is equal or bigger, you are clean.",
          "I run that test on every draft, and it catches most of my bad instincts. The temptation to inflate the gap is real because inflated gaps win clicks. They just lose the second video, and the third, and eventually the channel.",
        ],
      },
      {
        heading: "What honest gaps earn you",
        paragraphs: [
          "When your openings consistently deliver what they imply, viewers stop guarding themselves against you. They click with less resistance, they sit through the setup, and they trust your next title before they have seen a frame.",
          "That trust is the compounding asset of a channel. A slightly smaller gap that always pays off is worth more than a dramatic gap that pays off half the time, and the retention graphs will show you the difference within a few uploads.",
        ],
      },
    ],
  },
  {
    slug: "hook-specific-promise",
    title: "Promise Hooks: Name the Outcome, Skip the Vague Tease",
    excerpt:
      "A promise hook tells the viewer exactly what they will walk away with. Specific outcomes beat vague teasers because they let people decide to care.",
    date: "2024-11-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "scripting"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A promise hook states an outcome and stakes the video on delivering it. 'In seven minutes you will know the three edits that stopped my first ten seconds from losing viewers.' That sentence names the time, the number, and the result. The viewer can decide, before committing, whether the result is worth their seven minutes.",
          "Vague teases ask for the same commitment without answering that question. That is the entire tradeoff, and it is why I almost always push new writers toward specificity.",
        ],
      },
      {
        heading: "What makes a promise credible",
        paragraphs: [
          "Specificity is the currency. One number, one scope, one clear deliverable. 'Everything you need to know about hooks' promises a textbook. 'The one line that fixed my opening' promises an edit you can make tonight.",
          "Credibility also comes from the shape of the promise. If the outcome is checkable, the viewer trusts you more. 'I will show you the exact script I used' is checkable. 'You will finally understand engagement' is not, because nobody can verify a feeling.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A promise hook is a contract in one sentence. The rest of the video is you honoring it. If you dread that sentence, the promise is too big.",
      },
      {
        heading: "Promises that overshoot",
        paragraphs: [],
        bullets: [
          "Outcomes with no ceiling, like 'master storytelling,' set a bar you cannot clear in one video.",
          "Outcomes you cannot demonstrate, like 'transform your mindset,' leave the viewer with nothing to point at.",
          "Outcomes that depend on the viewer's effort with no path, like 'go viral,' promise a result you do not control.",
          "Outcomes that take a different video to deliver, like 'the full system,' quietly move the goalposts past this upload.",
        ],
      },
      {
        heading: "Match the promise to the format",
        paragraphs: [
          "Shorts can promise a single fact or a single laugh. Long-form can promise a method, a comparison, or a story with a resolution. The mistake is borrowing a long-form promise for a sixty-second video, or shrinking a method into a tease that never lands.",
          "I keep a running list of promises I can actually keep at each length, and I pick from it instead of inventing a bigger claim than the edit supports. The list grows slowly and the retention numbers stay boring, which is exactly what I want.",
        ],
      },
      {
        heading: "Write the promise, then the proof",
        paragraphs: [
          "Draft the promise first, then list the moments that prove it. If the proof is thin, shrink the promise before you shrink the ambition of the video. Nobody remembers that you scaled back. Everyone remembers a payoff that never came.",
        ],
      },
    ],
  },
  {
    slug: "hook-contrarian-backfire",
    title: "Contrarian Hooks and the Exact Point They Backfire",
    excerpt:
      "A contrarian hook works when it flips a belief the audience already doubts. It backfires the moment it flips a belief they actually hold.",
    date: "2025-02-06",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "scripting"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "A contrarian hook takes a belief the audience holds and inverts it. 'Posting more often is not slowing your growth. It is the only thing growing you.' Done well, it hits like a small revelation, because it says out loud something the viewer already suspected but had not heard stated.",
          "Done badly, it hits like a personal attack, and the viewer leaves arguing with you instead of watching. The gap between those two outcomes is narrower than the format suggests, and it comes down to which belief you are inverting.",
        ],
      },
      {
        heading: "Flip doubts, not identities",
        paragraphs: [
          "The safe target is a tactic the viewer half-distrusts anyway. Everyone has a habit they are not sure is working. Name it, push back on it, and you are on their side against a shared frustration.",
          "The dangerous target is anything tied to identity: the platform they chose, the niche they built, the years they already invested. Attack those and the viewer is not curious, they are defensive. Defensive viewers stop listening and start composing a reply before you reach the payoff.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If your contrarian hook makes the viewer defend themselves, you did not open a question. You opened a fight, and fights end with a close tab.",
      },
      {
        heading: "Signs your contrarian hook will backfire",
        paragraphs: [],
        bullets: [
          "It requires the viewer to admit they wasted years of effort before they hear your argument.",
          "It contradicts a result they have personally experienced, not a rumor they picked up secondhand.",
          "It has no proof segment, only a strong claim followed by vibes and jump cuts.",
          "It dismisses the entire category instead of one practice inside it, which reads as arrogance rather than insight.",
        ],
      },
      {
        heading: "How to earn the flip",
        paragraphs: [
          "Lead with the evidence, not the insult. Show the pattern you noticed, then let the claim follow. 'I tracked 40 uploads and the weekly posts underperformed the sporadic ones' sets up the contrarian line far better than opening with the bold statement alone.",
          "Then concede the reasonable exception. The moment you say 'this does not apply if your channel is under a thousand subs,' you prove you have thought about it, and the viewer relaxes enough to keep watching.",
          "Contrarian hooks are a tool for changing minds, and minds close when they feel cornered. Aim the inversion at a practice. Leave the person holding it some dignity.",
        ],
      },
    ],
  },
  {
    slug: "hook-start-mid-scene",
    title: "Start Mid-Scene: Why the Best Openers Skip the Setup",
    excerpt:
      "Beginning at the start feels natural and kills momentum. Dropping viewers into the middle of a scene hands them tension before they can decide to leave.",
    date: "2025-05-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Writers love beginnings. We want to set the context, introduce the character, explain the setup. Film editors learned long ago that this instinct is exactly backwards for the first ten seconds. Audiences do not want the start of the story. They want the part that makes them need the rest.",
          "Starting mid-scene means opening on the moment of highest tension, then letting the audience reconstruct how we got here. The reconstruction is the fun part, and it is work the viewer is happy to do.",
        ],
      },
      {
        heading: "Why chronological openings leak attention",
        paragraphs: [
          "A chronological open asks the viewer to hold a lot of setup with no return. Names, dates, backstory, and a description of the problem, all before a single moment of stakes. Every second of that is a second they could leave, and many do.",
          "Mid-scene inverts the order. Tension first, explanation second. By the time you circle back to the setup, the viewer needs it, which means they actually absorb it instead of skimming past it on the way to the good part.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Nobody opens a novel at the prologue anymore, and nobody opens your video to hear how it started. Start where it hurts.",
      },
      {
        heading: "How to find your entrance point",
        paragraphs: [],
        bullets: [
          "Locate the highest-stakes beat in your outline, usually a failure, a reveal, or a decision with a cost.",
          "Start there, and give the viewer just enough to know what kind of moment they are watching.",
          "Rewind inside the script, not before it. The context becomes a mid-video payoff, not a front-loaded lecture.",
          "Keep the entrance under ten seconds before the first line of orientation, or the scene reads as random.",
        ],
      },
      {
        heading: "Mid-scene without mid-scene confusion",
        paragraphs: [
          "The risk is obvious: drop someone into the middle and they may not know who anyone is or why they should care. The cure is a single orientation line placed right after the beat. Not a paragraph. One sentence that tells the viewer what they just saw and why it matters.",
          "I write that orientation line as if the viewer joined with sound off, then rewatched the last five seconds. That test keeps the bleed minimal and the momentum intact.",
        ],
      },
    ],
  },
  {
    slug: "hook-question-hooks-weak",
    title: "Question Hooks Are Weak. Here Is How to Fix Yours",
    excerpt:
      "Most question hooks fail because the answer is obviously yes or no. The question only earns attention when the viewer cannot guess the answer and cares about it.",
    date: "2025-08-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "scripting"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "How many times have you heard a video open with 'have you ever wondered why your videos do not get views?' It is a question, it is technically a hook, and it is almost always weak. The problem is not the format. The problem is that the viewer can answer it themselves and move on.",
          "A question hook only creates tension when the answer is genuinely uncertain and the viewer actually wants it. Most drafts fail both conditions at once.",
        ],
      },
      {
        heading: "Why the obvious question fails",
        paragraphs: [
          "A yes-or-no question gives the brain a fast exit. The viewer answers internally, feels a small sense of completion, and keeps scrolling. You have handed them closure before the video even starts, which is the opposite of what a hook should do.",
          "Rhetorical questions are worse. 'What if I told you everything you know is wrong?' asks the viewer to process a claim while signaling that no information is coming yet. It reads as filler because it is filler.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A strong question is one the viewer cannot answer and cannot stop trying to answer. Everything else is a search prompt with a camera pointed at it.",
      },
      {
        heading: "Turning a weak question into a real gap",
        paragraphs: [],
        bullets: [
          "Replace the binary with a number: 'how much did this channel spend to gain 100,000 subs?' beats 'do you want more subs?'",
          "Replace the generic with the specific: name the tool, the niche, or the exact metric so the question has edges.",
          "Move the answer closer to the question in time, but not so close that it collapses.",
          "Confirm the viewer cares before you ask. If the topic is niche, spend three words making them care first.",
        ],
      },
      {
        heading: "The rewrite I do most often",
        paragraphs: [
          "When I catch a weak question hook, I usually delete the question mark entirely. 'Have you ever wondered why your retention drops at the start?' becomes 'Your retention does not drop in the middle. It drops in the first eight seconds.' The claim does the same job as the question and gives the viewer something to test against.",
          "Questions still work when the stakes are personal and the answer is unknown. 'Will the algorithm punish you for deleting old videos?' earns a watch because the viewer cannot resolve it alone and the cost of guessing wrong is real. Keep questions rare and make each one count.",
        ],
      },
    ],
  },
  {
    slug: "hook-first-sentence-arithmetic",
    title: "The Arithmetic of the First Sentence of Your Script",
    excerpt:
      "Your first spoken sentence has a measurable budget: seconds on the clock, words in the line, and a comprehension cost you rarely count. Spend it on purpose.",
    date: "2025-12-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "scripting", "retention"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "The first sentence of your script is arithmetic more than art. It has a length, a reading time, and a cognitive cost, and all three are measurable before you ever hit record. Most creators write it by feel and then wonder why the curve dips in the first fifteen seconds.",
          "I started counting words in openings after noticing that my best hooks were consistently shorter and more concrete than my worst ones. The pattern held across dozens of scripts, so I stopped treating the first line as inspiration and started treating it as a budget.",
        ],
      },
      {
        heading: "The three numbers in every opening",
        bullets: [
          "Time to first idea: how many seconds pass before the viewer knows what the video is about. Under four is strong, past eight is a leak.",
          "Words before the point: the word count of everything that is throat-clearing. Names, greetings, and channel housekeeping all live here.",
          "Comprehension cost: how much background a listener needs to parse the sentence. Every unknown term is a small tax you charge the viewer.",
        ],
        paragraphs: [
          "Write the numbers down next to your draft. Seeing '23 words before the point' in black and white is more motivating than any advice to be concise.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A first sentence should cost the viewer almost nothing to understand and give them almost everything they need to care. That is the whole budget.",
      },
      {
        heading: "Where the words actually go",
        paragraphs: [
          "Greetings are the most common leak. 'Hey guys, welcome back to the channel, and if you are new here, consider subscribing' can eat six seconds and communicate nothing about this video. Cut it, or move it after the hook is established.",
          "The second leak is meta-talk about the video itself. 'In this video I am going to show you' delays the actual showing. Say the thing instead of announcing that you will say it.",
          "The third is qualification. 'This is going to sound weird, but' teaches the viewer to brace for something they may not like. Just say the weird thing and let it stand.",
        ],
      },
      {
        heading: "Compress, then compress again",
        paragraphs: [
          "I take my drafted first line and cut it by a third without losing the meaning. Then I cut it again. The second cut is where most of the value shows up, because the first cut removes words and the second removes ideas the viewer did not need yet.",
          "If the sentence survives both cuts and still points at the topic, it is ready. If it needs qualifiers to hold together, the idea underneath is too complicated for one sentence, and the opening probably needs a cold beat instead of a full claim.",
        ],
      },
      {
        heading: "Read it out loud with a stopwatch",
        paragraphs: [
          "The final check is physical. Say the line at your real pace and time it. Anything past six seconds needs a reason to exist. Most of mine do not have one, and they get shorter the moment I hear them spoken.",
        ],
      },
    ],
  },
  {
    slug: "hook-surgery-rewrite-last",
    title: "Hook Surgery: Rewriting Your Opening After the Script",
    excerpt:
      "You cannot write a great hook first, because a hook summarizes tension you have not built yet. Write the body, then cut your opening down to the best line.",
    date: "2026-04-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "scripting", "openings"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Writing the hook first feels productive. It is also the reason so many openings are disconnected from the video that follows. You cannot compress tension you have not built yet, so the opening ends up guessing at a payoff the script has not decided on.",
          "I write the hook last now, and it changed my process more than any course. The body tells me what the video is actually about. The opening is then a matter of surgery: find the sharpest line in the finished script and move it to the front.",
        ],
      },
      {
        heading: "Why first drafts of hooks fail",
        paragraphs: [
          "A hook written before the body works from the title and the outline, which are approximations. It tends to promise the topic instead of the tension, because the tension does not exist in your head yet. That is why early openings often sound like summaries.",
          "Once the body exists, the real hook is usually already buried inside it. It is the line that made you sit up while writing, the one that carries the whole argument in a single sentence. Surgery is finding that line and relocating it.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The best hook is rarely a new sentence. It is a sentence you already wrote, moved to the front where it can do its job.",
      },
      {
        heading: "The surgery checklist",
        paragraphs: [],
        bullets: [
          "Read the finished body and mark every sentence that carries the core tension or the key number.",
          "Choose the one that works with no setup, the one a stranger could understand cold.",
          "Move it to the first line, then adjust the following sentence so the seam disappears.",
          "Cut whatever the body no longer needs, because the relocated line just did that work twice.",
        ],
      },
      {
        heading: "Reordering as a discovery tool",
        paragraphs: [
          "Sometimes the strongest opening is not one sentence but a section you wrote at minute six. Moving it to the front reframes the entire video, and the old beginning becomes supporting context further down. The reorder often fixes pacing problems before you touch the wording.",
          "I keep a scratch copy of the script open and drag blocks around before committing. Five minutes of shuffling beats an hour of trying to force a weak opening to carry weight it was never built for.",
        ],
      },
      {
        heading: "Do the surgery the day after",
        paragraphs: [
          "Editing remotely is hard, and same-day hook surgery suffers from the same curse as same-day proofreading. You still remember what you meant, so you cannot see what the line actually says. I write the body, sleep on it, and cut the opening the next session with fresh eyes.",
        ],
      },
    ],
  },
  {
    slug: "hook-when-not-to-formula",
    title: "When Not to Use a Formulaic Hook (And What to Do)",
    excerpt:
      "Formulas work until the audience recognizes them. There are specific videos where a familiar hook structure costs you more than it buys the opening.",
    date: "2026-09-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "I teach hook patterns because they work and because most creators need a starting point. But patterns have a ceiling, and you hit it the moment your regulars can predict your opening before they hear it. The formula stops being a hook and becomes a tell.",
          "Knowing when to break the pattern is a separate skill from knowing the pattern, and it deserves its own checklist. Here are the cases where I deliberately skip the standard opening.",
        ],
      },
      {
        heading: "When your audience already knows you",
        paragraphs: [
          "Cold opens and curiosity gaps are strongest against strangers. A returning viewer already trusts you and already knows what the channel is about. For them, the elaborate tease can feel like friction between them and the content they came for.",
          "In those videos I often open with the payoff itself, then unpack it. 'This method doubled my watch time. Here is the whole thing.' No tease, because the trust is already in the bank.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A hook is a bridge to an audience that does not know you yet. If they already crossed the bridge, you can stop building it every time.",
      },
      {
        heading: "Cases where the formula costs more than it gives",
        paragraphs: [],
        bullets: [
          "Emotional or personal videos, where a clever tease undercuts the honesty of the moment.",
          "Announcement videos, where the news itself is the hook and any buildup reads as stalling.",
          "Reference content, where the viewer wants the answer immediately and a gap just wastes their time.",
          "Serialized content, where the previous episode already opened the loop and a new one is redundant.",
        ],
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Start with substance. The first sentence states the thing, the second sentence gives the reason it matters, and the third gets out of the way. This pushes the viewer directly into the middle of the value, which is exactly what a confident audience wants.",
          "Another option is the quiet open: a single concrete detail that signals the tone before the content arrives. No tease, no question, just a line that tells the regular viewer what kind of video this is. It works because familiarity, not curiosity, is doing the work.",
        ],
      },
      {
        heading: "Keep the patterns, lose the default",
        paragraphs: [
          "The goal is not to abandon hooks. It is to stop reaching for one reflexively. Ask whether this specific video rewards a tease or punishes one. When the answer is punishment, open plainly and let the substance carry the first ten seconds. Your regulars will appreciate the lack of ceremony.",
        ],
      },
    ],
  },
];
