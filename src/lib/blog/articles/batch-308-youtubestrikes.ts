import {
  Clock,
  Flag,
  Layers,
  MessageSquare,
  Puzzle,
  Repeat,
  Search,
  Star,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch308: BlogPost[] = [
  {
    slug: "strikes-how-strikes-accumulate",
    title: "How YouTube Channel Strikes Accumulate Over Time",
    excerpt:
      "Channel strikes rarely arrive as a surprise. They build from small policy hits, and learning how they stack up helps you stop the very next one.",
    date: "2044-01-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Strikes on a channel accumulate one at a time, and each one raises the price of the next mistake. A single strike clears after 90 days. A second or third inside that same window can push the channel toward termination.",
          "Most creators treat a first strike as a warning. It is not. The system logs it and starts a clock while it watches for the next one. Knowing how that math works is the difference between a bad week and a lost channel.",
        ],
      },
      {
        heading: "The ninety day window",
        paragraphs: [
          "Every strike stays active for 90 days from the day it lands. During that window the channel carries one strike on its record, and the clock does not pause. If nothing new arrives, the strike simply expires and the record goes clean again.",
          "The trap is timing. A strike from January still counts in March. Creators who get a second strike in that overlap often thought the first one had already faded. It had not.",
        ],
      },
      {
        heading: "Why the second strike hurts more",
        paragraphs: [
          "One active strike limits some features and slows your reach. Two active strikes open the door to a two week upload freeze, and three within 90 days trigger termination.",
          "Each level removes more of your safety net, so the second strike matters far more than the first. The penalty is not linear. It compounds.",
        ],
      },
      {
        quote:
          "A strike does not punish the video that caused it. It punishes every video you post while the strike is still live.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A strike lasts 90 days and expires on its own if nothing new lands.",
          "Two active strikes can trigger a two week upload freeze.",
          "Three active strikes within 90 days ends the channel.",
          "A second strike is far heavier than the first because penalties compound.",
          "Track the exact expiry date of every strike instead of guessing.",
        ],
      },
      {
        heading: "How to read your own record",
        paragraphs: [
          "Open the strikes page in YouTube Studio and note the date of each active strike. Write the 90 day expiry beside it. That single habit tells you how much room you actually have.",
          "If a strike is close to expiring, slow down and review your next few uploads before posting. If it is fresh, treat the next 90 days as a high risk stretch and avoid anything near the edges of policy.",
        ],
      },
    ],
  },
  {
    slug: "strikes-warning-that-is-not-a-strike",
    title: "Why a YouTube Warning Is Not the Same as a Strike",
    excerpt:
      "A warning is not a strike, and confusing the two leads to bad calls. Fix the pattern the warning points to before it turns into something worse.",
    date: "2044-01-03",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "A warning is not a strike. It is a message from YouTube telling you that something you posted sits close to the line, and that repeated behavior could turn into a strike later.",
          "Warnings carry no 90 day clock and no immediate penalty. That is exactly why creators ignore them, and why so many end up with a real strike a month later.",
        ],
      },
      {
        heading: "What a warning actually is",
        paragraphs: [
          "A warning usually follows a single video that brushes against a policy. YouTube reviews it, decides it is not severe enough for a strike, and flags the channel instead.",
          "The flag does not expire and does not appear on your public record. It is a note to yourself, whether or not you read it that way.",
        ],
      },
      {
        heading: "Why warnings still matter",
        paragraphs: [
          "A warning tells you the classifier already looked at your content and did not like what it saw. Ignore that and the next video from the same pattern gets a strike instead.",
          "Creators who fix the pattern after a warning rarely see a second one. Creators who shrug it off usually meet the strike within weeks.",
        ],
      },
      {
        quote:
          "A warning is the cheapest lesson YouTube will ever give you. A strike is the same lesson with a fee attached.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A warning is not a strike and carries no 90 day clock.",
          "Warnings do not show on your public channel record.",
          "A warning means a reviewer already looked at your content.",
          "Fixing the pattern after a warning usually prevents the strike.",
          "Ignoring warnings is the most common path to a real strike.",
        ],
      },
      {
        heading: "How to respond to a warning",
        paragraphs: [
          "Read the notice in YouTube Studio and find the exact policy it cites. Then scan your last ten uploads for the same pattern, because the warning rarely comes from one video alone.",
          "Edit or unlist anything that repeats the pattern, and write a short note about what to avoid next time. That note is more useful than the warning itself.",
        ],
      },
    ],
  },
  {
    slug: "strikes-appealing-a-strike",
    title: "How to Appeal a YouTube Channel Strike the Right Way",
    excerpt:
      "Appealing a YouTube strike works only when you have a real case. A good appeal is short, specific, and built on the policy text rather than on frustration.",
    date: "2044-01-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "You can appeal a strike once, and the outcome depends on the argument you make. YouTube gives you a single shot, so an appeal built on anger wastes it.",
          "A successful appeal points to a specific policy and shows why the video does not break it. It stays short. Anything else gets skimmed and denied.",
        ],
      },
      {
        heading: "When an appeal can actually win",
        paragraphs: [
          "Appeals win when the strike was a mistake, for example a clip taken out of context, a false copyright match, or a medical or educational video judged too harshly.",
          "They lose when the content really does break the rule. If it does, no amount of writing changes the result.",
        ],
      },
      {
        heading: "How to write the appeal",
        paragraphs: [
          "Start with one sentence naming the policy you think was misread. Then explain, in plain words, what your video actually shows and why that fits inside the rules.",
          "Skip the story about your channel history and your subscribers. The reviewer cares about the video, the policy, and nothing else.",
        ],
      },
      {
        quote:
          "An appeal is not a plea. It is an argument, and weak arguments get denied fast.",
      },
      {
        heading: "What happens after you submit",
        paragraphs: [
          "You wait. Reviews can take days, sometimes longer when volume is high. During the wait your strike stays active, so do not post anything risky.",
          "If the appeal fails, the strike stands for its full 90 days. A second appeal is not available for the same strike.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "You get one appeal per strike, so make it count.",
          "Win by citing the policy and the exact content in dispute.",
          "Emotional appeals are denied, factual ones have a chance.",
          "The strike stays active while the appeal is under review.",
          "A denied appeal leaves the full 90 day penalty in place.",
        ],
      },
      {
        heading: "A short template that works",
        paragraphs: [
          "Open with the policy name. Add two or three sentences about what the video shows. Close by asking for a human review of the specific clip.",
          "That structure respects the reviewer time and keeps the focus on facts. It is boring on purpose, and boring appeals win more often than clever ones.",
        ],
      },
    ],
  },
  {
    slug: "strikes-what-happens-at-each-strike",
    title: "What Happens at Each Level of a YouTube Strike",
    excerpt:
      "Each level removes a different set of features and adds a new deadline. Knowing what a channel strike costs at every stage changes how you react.",
    date: "2044-01-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Strike one limits reach and some features, while strike two adds a two week upload freeze. Strike three ends the channel, and the timeline from first to third can be as short as 90 days.",
          "The penalties stack rather than replace each other, so every new strike feels heavier than the last one.",
        ],
      },
      {
        heading: "Strike one: limits without a freeze",
        paragraphs: [
          "With one active strike you keep uploading, but the channel loses live streaming and custom thumbnails. Several monetization paths close as well, and reach on new videos often drops.",
          "The strike expires after 90 days if nothing else lands. Treat that window as fragile and keep your uploads well inside policy.",
        ],
      },
      {
        heading: "Strike two: the upload freeze",
        paragraphs: [
          "A second strike inside the same window triggers a two week freeze. You cannot post, and the clock keeps running on both strikes.",
          "For channels that post daily, two weeks of silence hurts more than the strike itself. Many creators lose momentum they never regain.",
        ],
      },
      {
        heading: "Strike three: termination",
        paragraphs: [
          "Three active strikes within 90 days removes the channel. The content, the subscribers, and any stored revenue go with it.",
          "At that stage appeals are much harder and rarely succeed. The time to fight is at strike one, not strike three.",
        ],
      },
      {
        quote:
          "The distance between strike one and strike three is not a long runway. It is three mistakes in three months.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Strike one restricts features and reach for 90 days.",
          "Strike two adds a two week upload freeze.",
          "Strike three terminates the channel.",
          "Penalties stack, so each strike costs more than the last.",
          "The time to act is strike one, not strike three.",
        ],
      },
      {
        heading: "Track your exposure",
        paragraphs: [
          "List every active strike with its expiry date and its remaining days. That number is your real risk budget.",
          "Once you can see the counter, decisions get easier. You know when to slow down, when to hold a video, and when the pressure finally lifts.",
        ],
      },
    ],
  },
  {
    slug: "strikes-waiting-out-a-strike",
    title: "How to Wait Out a YouTube Channel Strike",
    excerpt:
      "Waiting out a strike tests patience more than skill or luck. Use the 90 days to fix the cause and return with videos that stay clear of the line.",
    date: "2044-01-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A strike expires on its own after 90 days, and there is no shortcut to speed that up. The waiting period is fixed, so the only thing you control is how you spend it.",
          "Creators who treat those weeks as a pause come back stronger. Creators who keep fighting the system usually collect a second strike.",
        ],
      },
      {
        heading: "What you can and cannot do",
        paragraphs: [
          "While the strike is active, most features stay locked and your reach may sag. You can still upload on a first strike, though the freeze from a second one removes even that.",
          "You cannot review, monetize, or live stream in the usual way. Plan around those gaps instead of fighting them.",
        ],
      },
      {
        heading: "Use the time to fix the cause",
        paragraphs: [
          "Find the video that triggered the strike and identify the exact policy it broke. Then check the rest of your library for the same pattern.",
          "Edit, unlist, or delete anything that repeats the mistake. A quiet cleanup now prevents the next strike later.",
        ],
      },
      {
        quote:
          "A strike is a forced timeout, and timeouts only help the people who use them.",
      },
      {
        heading: "Keep creating off platform",
        paragraphs: [
          "Draft scripts and stockpile footage while the channel is limited. When the strike lifts, you can publish without a blank week.",
          "Sitting idle for 90 days drains momentum. Staying busy keeps your skills sharp and your audience warm.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A strike expires after 90 days with no way to shorten it.",
          "Some features and reach stay limited for the full period.",
          "Use the wait to fix the pattern that caused the strike.",
          "Keep writing and planning so you can return fast.",
          "Anger during the wait often leads to a second strike.",
        ],
      },
      {
        heading: "The day the strike lifts",
        paragraphs: [
          "Check that the strike is gone from your record before you resume your normal schedule. Then post one safe, solid video and watch the reach.",
          "Rebuild slowly for a week or two. The channel is clean again, but your habits are what keep it that way.",
        ],
      },
    ],
  },
  {
    slug: "strikes-keeping-a-clean-record",
    title: "How to Keep a Clean YouTube Strike Record for the Long Run",
    excerpt:
      "A clean record is not luck. It comes from small habits that keep every upload inside the rules, and it is the cheapest form of channel insurance you can build.",
    date: "2044-01-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        paragraphs: [
          "Keeping a clean record means no active strikes at any time, and it comes from habits rather than from luck. Channels that stay clean treat every upload as if a reviewer will watch it.",
          "That sounds paranoid until a strike lands. The creators who never see one are usually the ones who built these habits early.",
        ],
      },
      {
        heading: "Review before you publish",
        paragraphs: [
          "Watch your own video once with fresh eyes and ask what a stranger might object to. Most strikes come from clips that made sense in context but look bad alone.",
          "If a scene is borderline, cut it. A small edit costs seconds. A strike costs 90 days.",
        ],
      },
      {
        heading: "Know the policies that bite",
        paragraphs: [
          "Copyright, spam, misleading metadata, and harmful content cover most strikes. Read each policy once and note where your content type touches it.",
          "You do not need to memorize the rules. You need to know which ones apply to you.",
        ],
      },
      {
        heading: "Keep your metadata honest",
        paragraphs: [
          "Titles and thumbnails should match the video. Clickbait that overpromises can be read as misleading and put the channel at risk.",
          "Tag and describe content accurately. Honest metadata rarely triggers a strike.",
        ],
      },
      {
        quote:
          "A clean record is boring to maintain and expensive to lose. That trade is worth remembering.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A clean record means zero active strikes at all times.",
          "Review each upload the way a stranger would.",
          "Learn the handful of policies that cause most strikes.",
          "Honest titles and thumbnails lower your risk.",
          "Cut borderline scenes instead of gambling on them.",
        ],
      },
      {
        heading: "Make it a routine",
        paragraphs: [
          "Add a five minute check to your upload day. Watch the final cut and scan the metadata. Then confirm nothing sits near a policy line.",
          "Repeat it every week and it stops feeling like work. That routine is what a clean record looks like in practice.",
        ],
      },
    ],
  },
  {
    slug: "strikes-recovering-after-a-strike",
    title: "How to Recover After a YouTube Strike and Regain Momentum",
    excerpt:
      "Recovering after a strike takes patience and a clean next few uploads. The goal is simple: prove to the system, and to yourself, that the mistake is behind you.",
    date: "2044-01-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Recovery after a strike starts the moment it expires, not the moment it lands. Once the 90 days pass, the record clears and you can rebuild reach with steady, safe uploads.",
          "The first few videos after a strike matter more than usual. They set the tone for how the channel comes back.",
        ],
      },
      {
        heading: "Wait for the strike to clear",
        paragraphs: [
          "Do not rush back the day the strike lifts if you feel unsure about your content. Confirm the strike is gone, then post something you would bet on.",
          "A clean first upload signals to the algorithm and your audience that the channel is stable again.",
        ],
      },
      {
        heading: "Start with your safest content",
        paragraphs: [
          "Pick a topic you know sits far from any policy line. Avoid anything with third party music or borrowed footage for the first week.",
          "Bank a few easy wins before you push into riskier formats again.",
        ],
      },
      {
        quote:
          "A strike does not erase your channel. It asks whether you learned the lesson behind it.",
      },
      {
        heading: "Watch your numbers calmly",
        paragraphs: [
          "Expect reach to lag for a while. The algorithm does not punish you forever, but it also does not reward a channel it just flagged.",
          "Track trends over two or three weeks instead of judging a single video. Recovery is a slope, not a switch.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Recovery starts when the strike expires, not before.",
          "Your first few uploads should be your safest ones.",
          "Avoid borrowed footage and music for the first week back.",
          "Reach can lag for two or three weeks, so watch trends.",
          "Steady, clean posting rebuilds good standing faster than a viral swing.",
        ],
      },
      {
        heading: "Rebuild trust with your audience",
        paragraphs: [
          "Tell your viewers what happened in a short, honest note if the strike affected them. Most audiences respect a creator who owns a mistake.",
          "Then get back to the schedule they subscribed for. Consistency does more for recovery than any apology post.",
        ],
      },
    ],
  },
  {
    slug: "strikes-versus-claims",
    title: "YouTube Strikes Versus Claims: What Is the Difference",
    excerpt:
      "Strikes and claims are not the same, even though they both arrive as bad news. A claim touches revenue while a strike touches your ability to post at all.",
    date: "2044-01-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "A claim and a strike are different tools with different consequences. A copyright claim affects the money on one video. A strike affects your whole channel and its standing.",
          "Creators mix them up constantly, then react with the wrong fix. Knowing which one you have tells you what to do next.",
        ],
      },
      {
        heading: "What a copyright claim is",
        paragraphs: [
          "A claim comes from a rights holder who says your video uses their work. It usually routes the video revenue to them or limits the video in some countries.",
          "Claims do not carry the 90 day clock that strikes do. Many can be resolved or disputed without touching your channel record.",
        ],
      },
      {
        heading: "What a strike is",
        paragraphs: [
          "A strike is a penalty from YouTube for breaking a community guideline or a copyright rule. It lands on the channel and triggers the escalating penalties.",
          "Three strikes in 90 days terminates the channel. A claim rarely goes that far.",
        ],
      },
      {
        heading: "Copyright claims and copyright strikes",
        paragraphs: [
          "A copyright claim is the milder version. A copyright strike is what you get when a rights holder formally submits a takedown request and it is upheld.",
          "One claim can be cleared by editing or removing the music. A copyright strike forces you to wait, appeal, or complete copyright school.",
        ],
      },
      {
        quote:
          "A claim takes your money. A strike takes your platform. Treat them with the seriousness each one deserves.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A claim usually affects one video and its revenue.",
          "A strike affects the whole channel and can escalate.",
          "Claims do not start the 90 day strike clock.",
          "Copyright claims and copyright strikes have different fixes.",
          "Always check which one you actually received.",
        ],
      },
      {
        heading: "How to tell them apart",
        paragraphs: [
          "Open the notice and read the wording. If it mentions a claim on a video, it is revenue related. If it mentions a strike on your channel, the clock has started.",
          "When in doubt, look at your strikes page in Studio. Claims will not appear there, and that absence is a clue.",
        ],
      },
    ],
  },
  {
    slug: "strikes-avoiding-common-causes",
    title: "Avoiding the Most Common YouTube Strike Causes",
    excerpt:
      "Most strikes trace back to a short list of causes you can control. Learn where the risk hides in your own workflow and you remove it before it costs you.",
    date: "2044-01-17",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Most strikes come from a handful of causes: borrowed music, reused footage, misleading titles, and heated claims presented as fact. Fix those four and you remove the majority of your risk.",
          "You do not need to learn every policy line. You need to know where your own content tends to drift.",
        ],
      },
      {
        heading: "Third party music and footage",
        paragraphs: [
          "Using a song or clip you do not own is the single most common trigger. Even a few seconds can be enough for a claim or a strike.",
          "Stick to licensed libraries or record your own audio. It is the easiest risk to eliminate.",
        ],
      },
      {
        heading: "Misleading titles and thumbnails",
        paragraphs: [
          "A thumbnail that promises something the video does not deliver can be read as misleading metadata. That is a strike cause, not just a growth tactic gone wrong.",
          "Match what you show to what you say. Curiosity is fine. Deception is not.",
        ],
      },
      {
        heading: "Harmful or unverified claims",
        paragraphs: [
          "Health, financial, and safety topics invite scrutiny. A bold claim without a source can cross into harmful or misleading content.",
          "Cite what you can, soften what you cannot prove, and keep strong opinions clearly framed as opinions.",
        ],
      },
      {
        quote:
          "Strikes are rarely random. They follow the parts of your workflow you stopped checking.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Borrowed music and footage cause the most strikes.",
          "Misleading titles and thumbnails can trigger a strike.",
          "Unverified health and money claims invite scrutiny.",
          "Audit your workflow for these causes regularly.",
          "Eliminating known risks beats reacting to strikes later.",
        ],
      },
      {
        heading: "Run a risk audit",
        paragraphs: [
          "Go through your last twenty uploads and hunt for borrowed assets and overpromising metadata, then flag any unsupported claims. Note every one you find.",
          "Then fix the pattern, not just the individual video. The goal is to make the risky habit hard to repeat.",
        ],
      },
    ],
  },
  {
    slug: "strikes-habits-that-prevent-strikes",
    title: "Habits That Prevent YouTube Channel Strikes for Good",
    excerpt:
      "Preventing channel strikes is a habit problem, not a knowledge problem. A few repeatable checks before each upload keep your record clean without slowing you.",
    date: "2044-01-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["policy", "appeals", "safety"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Preventing strikes is about habits, not about memorizing policy. A short checklist before every upload catches the mistakes that cause most penalties.",
          "Channels that stay clean do the boring work on repeat. There is no secret beyond that.",
        ],
      },
      {
        heading: "Build a pre upload checklist",
        paragraphs: [
          "Before publishing, confirm every asset is yours or licensed, the title matches the video, the claims can be supported, and the metadata is honest. These checks cover most of your risk.",
          "Keep the list short enough that you will actually use it. A long checklist gets skipped.",
        ],
      },
      {
        heading: "Separate facts from opinions",
        paragraphs: [
          "State clearly when something is your view rather than a proven fact. That framing protects you on health and money topics.",
          "Label sources and link them when you can. Transparency lowers the odds of a harmful content flag.",
        ],
      },
      {
        heading: "Keep an asset log",
        paragraphs: [
          "Track where every clip and track came from. When a claim arrives, you can prove your license in minutes instead of panicking.",
          "The log also stops you from reusing something you already knew was risky.",
        ],
      },
      {
        quote:
          "Clean channels are not lucky. They just never skip the checks that everyone else finds boring.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A short pre upload checklist prevents most strikes.",
          "Confirm assets are yours or properly licensed.",
          "Frame opinions as opinions and cite your sources.",
          "Keep a log of where every asset came from.",
          "Repeatable habits beat last minute memory every time.",
        ],
      },
      {
        heading: "Make the habit automatic",
        paragraphs: [
          "Attach the checklist to something you already do, like your final export or your scheduling step. Habits stick when they ride on an existing routine.",
          "After a month it stops feeling like a checklist and starts feeling like part of the job. That is when your record stays clean on its own.",
        ],
      },
    ],
  },
];
