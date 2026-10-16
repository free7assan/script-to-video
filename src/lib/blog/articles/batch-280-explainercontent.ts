import {
  Search,
  Layers,
  Puzzle,
  Scissors,
  Target,
  Clock,
  Type,
  Repeat,
  BookOpen,
  DollarSign,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch280: BlogPost[] = [
  {
    slug: "explainer-content-topics-people-ask-about",
    title: "Picking Explainer Topics People Actually Ask About",
    excerpt:
      "Good explainer content starts with a question someone is already asking. Find those questions first, then build the video around one clear answer.",
    date: "2041-09-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Pick explainer topics from questions people already type into search bars and message to their friends. A strong explainer answers one specific thing a real person is stuck on right now, not a broad subject that happens to interest you.",
          "I used to start with the topic I wanted to talk about. That is backwards. The viewer did not arrive wanting your subject. They arrived with a problem, and your video either matches that problem or it does not.",
        ],
      },
      {
        heading: "Mine questions, not keywords",
        paragraphs: [
          "A keyword tells you a phrase exists. A question tells you a person is confused. Collect the raw versions: the forum posts, the customer emails, the comments on someone else's video where the top reply is a link because nobody explained it plainly.",
          "Read those threads until you notice the same confusion showing up in different words. That repetition is your signal. If five strangers phrase the same gap differently, you have a topic with a real audience behind it.",
        ],
      },
      {
        quote:
          "The best explainer topic is a question you have heard three times in three different voices. That is the one to make.",
      },
      {
        heading: "Test the question before you write",
        paragraphs: [
          "Say the question out loud the way a beginner would. If it sounds too broad, narrow it until it becomes answerable in a few minutes. A question like how does this tool work is a series. A question like why does my export look blurry is a single video.",
          "Then check whether you can answer it in one sentence. If you cannot, the topic is still too large. If the one-sentence answer sounds boring, the problem may be the framing rather than the subject.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start from a question someone actually asks, not a subject you find interesting.",
          "Narrow until the topic can be answered in a few minutes.",
          "Confirm you can state the answer in one sentence before you write.",
          "Look for the same confusion repeated in different words.",
        ],
      },
      {
        heading: "What good topics have in common",
        paragraphs: [
          "Every explainer topic that held up for me had a visible before and after. The viewer arrived confused and left able to do something or decide something. If you cannot name what changes for them, the topic is probably a lecture dressed up as an explainer.",
          "Pick the question, answer it plainly, and let the topic stay small. Small and answered beats broad and vague every time.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-structuring-an-explainer",
    title: "Structuring an Explainer So It Holds Attention",
    excerpt:
      "A clear explainer content structure moves from the question to the answer without detours. Here is the shape that keeps viewers watching to the end.",
    date: "2041-09-03",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Structure an explainer content piece around one question, one answer, and the reason the answer is not obvious. Everything else is furniture you can move or remove.",
          "Most weak explainers open with a definition, wander through context, and reach the point at the end. Most strong ones tell you the point early, then spend the rest of the time earning it.",
        ],
      },
      {
        heading: "Open with the tension",
        paragraphs: [
          "The first block should state the problem as the viewer feels it, not as a textbook frames it. Show the moment where the confusion bites. A viewer who recognizes their own situation will stay for the explanation that follows.",
          "Do not spend this opening on greetings or channel business. Those belong at the end, if anywhere. The first ten seconds are the only part of the video you cannot get back once someone leaves.",
        ],
      },
      {
        heading: "Answer early, then justify",
        paragraphs: [
          "Give the answer while attention is high, then use the middle of the video to show why it is true. This inverts the usual school essay shape, and it fits how people watch video. They want the payoff before they commit to the reasoning.",
          "The justification is where your examples, comparisons, and demonstrations live. Each one should support the same answer rather than introduce a second topic you forgot to cut.",
        ],
      },
      {
        quote:
          "State the answer early, then spend the video making it believable. The viewer came for the point, not the buildup.",
      },
      {
        heading: "Close by removing doubt",
        paragraphs: [
          "The final block should handle the objection the viewer is already forming. The one case where your answer does not apply, or the mistake that makes people think it fails. Naming that objection yourself builds more trust than ignoring it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Frame the video around one question and one answer.",
          "Open with the problem as the viewer experiences it.",
          "Give the answer early, then justify it with examples.",
          "End by addressing the objection the viewer is forming.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-using-analogy-well",
    title: "Using Analogy Well in Explainer Videos, and Where It Fails",
    excerpt:
      "An analogy does more work than a definition, but only when it maps cleanly. Learn to build explainer content analogies that hold up under pressure.",
    date: "2041-09-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Use an analogy when the idea is abstract and the viewer needs something concrete to hang it on. The comparison should map onto the real thing in the ways that matter, and break down in ways the viewer will never need.",
          "A borrowed analogy that half fits is worse than no analogy. It teaches a shape that the viewer then has to unlearn when reality does not cooperate.",
        ],
      },
      {
        heading: "Match the structure, not the mood",
        paragraphs: [
          "A useful analogy copies the relationships inside a system, not just the vibe of it. If you compare a queue to a line at a coffee shop, the important part is that the first thing in is the first thing out. The smell of coffee is decoration.",
          "Ask what the analogy needs to preserve. Order, cost, delay, feedback, scale. Whatever property explains the behavior is the property you must keep. Drop the rest.",
        ],
      },
      {
        heading: "Find where it breaks on purpose",
        paragraphs: [
          "Every analogy breaks somewhere. The strong ones tell you where. Saying that the comparison stops at a certain point keeps the viewer from over-extending it into places it does not belong.",
          "This is also a teaching move. When you name the limit, you signal that you understand the real system, not just the story you told about it.",
        ],
      },
      {
        quote:
          "Name where your analogy stops working. That is the moment the viewer trusts that you know the real thing.",
      },
      {
        heading: "One analogy, worked hard",
        paragraphs: [
          "A common mistake is stacking five comparisons for one idea. Each new analogy resets the viewer's mental model and costs them the gains from the last one. Pick the single comparison that fits best and reuse it through the whole video.",
          "Repeat the same image at each new step. The viewer's understanding compounds because the reference is stable, not because the imagery is fresh.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use an analogy when the idea is abstract and needs something concrete.",
          "Preserve the structural relationships, not the surface details.",
          "State where the comparison stops being true.",
          "Reuse one strong analogy instead of stacking several weak ones.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-animation-and-visuals-on-a-budget",
    title: "Animation and Visuals for Explainer Content on a Budget",
    excerpt:
      "You do not need a studio to make clear visuals. Cheap explainer content visuals work when they carry meaning, not when they look expensive.",
    date: "2041-09-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Make cheap visuals by deciding what each shot has to communicate, then drawing the simplest thing that communicates it. A hand-drawn arrow beating a polished animation is common, because clarity travels further than craft.",
          "The temptation is to spend the budget on motion. The better spend is on the plan, because a clear storyboard with plain shapes will outperform a busy animation with no point.",
        ],
      },
      {
        heading: "Constrain your palette",
        paragraphs: [
          "Pick two colors and a background and stop. A tight palette makes simple work look intentional instead of accidental. It also makes your edits faster because every element already matches.",
          "The same goes for type. One font, two weights, a handful of sizes. When the viewer is not decoding visual variety, they spend that attention on the idea.",
        ],
      },
      {
        heading: "Reuse a small kit",
        paragraphs: [
          "Build ten or so reusable pieces: a title card, a lower third, an arrow, a highlight box, a dot that moves. Animation gets cheap when you are placing existing assets instead of inventing new ones for each video.",
          "This kit grows into a visual language. Viewers start to recognize your explainers before they read the channel name, and that recognition costs you nothing extra per video.",
        ],
      },
      {
        quote:
          "The cheapest visual is the one that already exists in your library. Build the kit once, then place it forever.",
      },
      {
        heading: "Let audio carry motion",
        paragraphs: [
          "Sound does a lot of the work people credit to animation. A whoosh on a transition or a click on a reveal makes a static slide feel alive. That is a fraction of the cost of animated graphics.",
          "Record clean narration and you can get away with far less on screen. A viewer listening to a clear voice forgives a simple frame.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Decide what each shot must communicate before you design it.",
          "Limit yourself to two colors and one font family.",
          "Build a reusable kit so animation becomes placement, not invention.",
          "Let clean audio and sound effects carry the sense of motion.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-clarity-over-completeness",
    title: "Clarity Beats Completeness in Explainer Scripts",
    excerpt:
      "An explainer content script that tries to say everything says nothing. Choose what the viewer needs first, and cut the rest without guilt.",
    date: "2041-09-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Write for the viewer who needs one thing, not the critic who wants every edge case. A clear explainer content script leaves things out on purpose, because each extra detail costs the audience attention they needed for the core idea.",
          "Completeness feels responsible while you are writing. It reads as noise while someone is watching, and it is the most common reason a good topic becomes a boring video.",
        ],
      },
      {
        heading: "Separate the core from the caveats",
        paragraphs: [
          "List everything true about your topic. Then mark the small set of points the viewer cannot proceed without. That small set is the script. The rest is a follow-up video, a pinned comment, or nothing at all.",
          "Caveats are where completeness hides. One caveat can build trust. Five caveats in a row teach the viewer that your topic is complicated and they should look elsewhere.",
        ],
      },
      {
        heading: "Cut the second idea",
        paragraphs: [
          "Drafts often contain two videos fighting for one slot. When you find a section that could be its own explainer, remove it and save it. The current video gets sharper and you bank a future one.",
          "A single idea developed well beats two ideas competing for the same seven minutes. The viewer can hold one new thing at a time.",
        ],
      },
      {
        quote:
          "Your job is not to say everything that is true. It is to say enough that the viewer can move forward.",
      },
      {
        heading: "Trust the viewer to continue",
        paragraphs: [
          "You do not have to answer every question in one video. End with the viewer able to act, and let their next question bring them back. Depth you withhold is not dishonesty, it is pacing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Identify the small set of points the viewer cannot proceed without.",
          "Treat most caveats as optional, not mandatory.",
          "Pull out any second idea and save it for its own video.",
          "End when the viewer can act, not when you run out of facts.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-pacing-an-explainer",
    title: "Pacing an Explainer Without Rushing the Payoff",
    excerpt:
      "Pacing in explainer content is about where you slow down. Spend time on the hard idea, move fast through the easy parts, and let the point breathe.",
    date: "2041-09-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Pace an explainer by varying speed on purpose. Move quickly through setup and cover, slow down at the one idea that needs room, then land the payoff and stop.",
          "A video that runs at one speed the whole way feels either rushed or padded, even when the total length is right. The problem is rhythm, not minutes.",
        ],
      },
      {
        heading: "Slow down at the hard turn",
        paragraphs: [
          "Every explainer has a turn where the viewer either gets it or gives up. That is the spot to slow down. Add a pause, repeat the idea in different words, or show it twice. This is where you spend your time budget.",
          "The mistake is spreading even effort across the whole video. When every section gets the same treatment, the hard part gets too little and the easy parts get too much.",
        ],
      },
      {
        heading: "Move fast through the familiar",
        paragraphs: [
          "If the viewer already knows something, do not linger. A quick line of cover is enough. Treating common knowledge as material to explain tells the audience you have misjudged them.",
          "Speed in the easy parts buys you room in the hard ones. Pacing is a trade, and you want the trade to favor the idea that matters.",
        ],
      },
      {
        quote:
          "Spend your time where the viewer might quit. Fast everywhere else is how you afford it.",
      },
      {
        heading: "Let the payoff breathe",
        paragraphs: [
          "After you deliver the answer, resist the urge to jump straight to the outro. A second of quiet, or a single line that restates the point, gives it room to land. Then close.",
          "Endings that sprint past the payoff undo the work the whole video did. Give the viewer a beat to feel that they understand something now.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Vary speed on purpose instead of holding one tempo.",
          "Slow down at the one idea where the viewer might give up.",
          "Rush through material the audience already knows.",
          "Pause after the payoff before you close the video.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-titles-that-promise-clarity",
    title: "Explainer Titles That Promise Clarity, Not Mystery",
    excerpt:
      "A good explainer content title tells viewers what they will understand by the end. Promise clarity, name the question, and skip the bait.",
    date: "2041-09-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Write titles that name the question and suggest the answer is coming. An explainer content title works like a promise of understanding, so the viewer knows what they will be able to do once the video ends.",
          "Mystery titles pull one extra click and lose the trust of the viewer who wanted to learn something. For explainers, that trade is almost never worth it.",
        ],
      },
      {
        heading: "Name the question plainly",
        paragraphs: [
          "The title should contain the question the video answers, or a close paraphrase of it. When the viewer sees their own confusion reflected back, they recognize that this video is for them.",
          "Use the words a beginner would use, not the words an expert would. Search works on plain language, and so does recognition.",
        ],
      },
      {
        heading: "Promise the payoff",
        paragraphs: [
          "Tell the viewer what gets clearer. A title that hints at understanding invites the right person and filters out the wrong one. That filter is a feature, not a loss.",
          "Avoid vague curiosity. A title that could describe fifty videos describes none of them well.",
        ],
      },
      {
        quote:
          "A title is a promise about what the viewer will understand. Keep the promise and they trust the next one.",
      },
      {
        heading: "Skip the bait",
        paragraphs: [
          "Clickbait works once per viewer and costs you the relationship after that. If the title overstates what the video delivers, the viewer learns that your name means disappointment.",
          "A clear title may get fewer clicks from idle scrollers and more from the people who actually finish. For an educational format, the finishers are the audience.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Put the question the video answers into the title.",
          "Use the plain words a beginner would search for.",
          "State what gets clearer by the end.",
          "Trade bait for trust and keep the viewers who finish.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-updating-old-explainers",
    title: "Updating Old Explainers Without Losing the Core",
    excerpt:
      "Old explainer content goes stale when the world moves. Update the facts and visuals, keep the teaching structure that already worked.",
    date: "2041-09-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Update an old explainer by separating the parts that age from the parts that do not. Facts, screenshots, and numbers go stale. The teaching structure and the analogy usually still work.",
          "Refreshing is cheaper than rebuilding, and it protects the search traffic and links the video already earned. A stale explainer quietly teaches wrong things, which is worse than a video nobody finds.",
        ],
      },
      {
        heading: "Find what actually aged",
        paragraphs: [
          "Watch the old video and list every claim with a date attached. Interfaces change, prices move, and best practices shift. Those are your edit targets.",
          "Leave the framing alone unless it was weak to start with. The structure that earned the views is still doing its job even if a screenshot is out of date.",
        ],
      },
      {
        heading: "Re-record only what changed",
        paragraphs: [
          "You rarely need to redo the whole narration. Replace the stale lines, keep the rest, and match the audio quality. This keeps the edit small and the tone consistent.",
          "If your kit and template still exist, the visual updates take minutes. This is the payoff of building reusable assets the first time around.",
        ],
      },
      {
        quote:
          "Separate the facts from the teaching. Refresh the facts and leave the lesson standing.",
      },
      {
        heading: "Tell people what changed",
        paragraphs: [
          "Note the update in the title or description so returning viewers know it is current. A small marker like updated for this year signals that you maintain your library instead of abandoning it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "List every dated claim and treat those as the edit targets.",
          "Keep the teaching structure that already earned views.",
          "Re-record only the stale lines, not the whole script.",
          "Mark the refresh so viewers know the video is current.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-building-a-library-that-lasts",
    title: "Building a Library of Explainer Content That Lasts",
    excerpt:
      "A durable library of explainer content answers evergreen questions and links together. Build videos that keep working long after upload day.",
    date: "2041-09-18",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Build a library by answering evergreen questions that will still make sense in a year, then connecting the videos so each one feeds the next. A library compounds while a feed of one-off uploads does not.",
          "The goal is not volume. It is a set of videos where any single one makes sense alone and together they cover a subject a person could learn from start to finish.",
        ],
      },
      {
        heading: "Pick questions that stay asked",
        paragraphs: [
          "Evergreen questions are the ones beginners keep arriving with. How something works, why it behaves a certain way, what to do when it breaks. These stay relevant because new people keep showing up confused.",
          "Skip the questions tied to a moment. A launch or a trend fades. A fundamental confusion does not.",
        ],
      },
      {
        heading: "Link the videos together",
        paragraphs: [
          "Each explainer should point to the next logical question. That turns a pile of videos into a path, and paths keep viewers inside your work instead of sending them back to search.",
          "Keep the links earned. Send viewers somewhere that answers the question they are now holding, not somewhere that merely promotes you.",
        ],
      },
      {
        quote:
          "A library is a path, not a pile. Each video should hand the viewer to the next question.",
      },
      {
        heading: "Maintain as you go",
        paragraphs: [
          "Set a rhythm for checking old videos so the library stays trustworthy. A short review pass a few times a year catches the stale facts before viewers do.",
          "A maintained library keeps earning attention on its own. That is the difference between building an asset and posting into a void.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose evergreen questions new viewers keep arriving with.",
          "Connect videos so each one leads to the next question.",
          "Link only where the next video truly answers that question.",
          "Review old videos on a schedule to keep the library trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "explainer-content-monetizing-evergreen-explainers",
    title: "Monetizing Evergreen Explainer Content the Honest Way",
    excerpt:
      "Evergreen explainer content can earn steadily if you match the offer to the question. Monetize by helping the viewer take the next step.",
    date: "2041-09-21",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["format", "education", "clarity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Monetize evergreen explainer content by pairing each video with the next step a viewer already wants to take. The video answers the question, and the offer helps them act on the answer.",
          "This works because evergreen videos keep bringing new viewers to the same question. A single offer that fits can keep converting for years without new uploads.",
        ],
      },
      {
        heading: "Match the offer to the question",
        paragraphs: [
          "The offer should be what the viewer needs right after understanding the idea. A tool, a template, a next video, a service. If it solves the problem the video just named, the recommendation feels like help.",
          "When the offer is unrelated to the question, it reads as an interruption. The viewer came to understand something, and you sold them something else.",
        ],
      },
      {
        heading: "Put the ask where it fits",
        paragraphs: [
          "Place the recommendation after the payoff, not before it. Earning the answer first gives the viewer a reason to trust whatever comes next.",
          "One clear ask per video is usually enough. Multiple competing calls split attention and weaken the one that mattered.",
        ],
      },
      {
        quote:
          "The cleanest sale is the next step the viewer was already reaching for. Help them take it.",
      },
      {
        heading: "Let the library compound",
        paragraphs: [
          "Because the videos keep working, the offers keep working. Add a better next step over time and every existing video can carry it, which means your old work gets more valuable, not less.",
          "This is the quiet advantage of teaching over chasing trends. The question stays, so the video stays, so the offer has somewhere to live.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pair each explainer with the next step the viewer wants.",
          "Keep the offer tied to the question the video answers.",
          "Place the ask after the payoff, never before it.",
          "Improve the offer over time and let the whole library carry it.",
        ],
      },
    ],
  },
];
