import {
  BookOpen,
  Compass,
  DollarSign,
  Feather,
  Heart,
  MessageSquare,
  PenLine,
  Rocket,
  Workflow,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch61: BlogPost[] = [
  {
    slug: "podcast-script-outline-template",
    title: "A Podcast Script Outline Template That Actually Scales",
    excerpt:
      "A podcast script outline template keeps every episode on track. Here is the exact block structure I use to draft faster and cut the rambling.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "A podcast script outline template is a set of fixed blocks you fill in before you hit record. Mine has five: cold open, intro, body segments, ad break, and outro. The template stops me from staring at a blank page and keeps me from talking in circles for twenty minutes.",
          "I adopted one after editing an episode where I made the same point four times in different words. The outline did not make that show boring. It made the boring parts show up on paper before I spent an hour recording them.",
        ],
      },
      {
        heading: "Why a template beats a full script",
        paragraphs: [
          "A full script earns its keep inside a tight five minute segment. Longer episodes need room to wander, and a fixed script fights that. You end up reading sentences you wrote when you were tired and rushing to finish.",
          "An outline keeps the structure firm and the wording loose. You know where the episode is going, and you can still chase a good tangent without losing the thread.",
          "The trade is honest. You give up polished prose and get natural talk, plus a shape that keeps listeners oriented from start to finish.",
        ],
        bullets: [
          "Cold open: twenty to forty seconds, one sharp idea, no music.",
          "Intro: ten seconds, name the show, promise the episode.",
          "Body: two to four segments, each built around a question.",
          "Ad break: dropped where the topic already pauses.",
          "Outro: one takeaway, one ask, one tease for the next show.",
        ],
      },
      {
        quote:
          "An outline is scaffolding. The talk still has to hold itself up, but the scaffold keeps it from collapsing.",
      },
      {
        heading: "Build the skeleton in fifteen minutes",
        paragraphs: [
          "Sit down before you record and fill every slot with a single sentence. That sentence is the promise the segment has to keep. If you cannot write it in one line, the segment is not ready yet.",
          "Fifteen minutes of prep saves a full edit pass. I time myself with a kitchen timer and stop when it rings, even with gaps left, because a rough skeleton beats a perfect one you never finish.",
          "Keep the same order every week. Repetition turns the template into muscle memory, and after a month you will draft an episode while walking the dog.",
        ],
      },
      {
        heading: "Leave room for the unscripted",
        paragraphs: [
          "The best moments in an interview arrive when a guest says something you did not plan. A tight outline crowds those moments out. A loose one leaves a gap for them to land.",
          "Mark two or three spots where you can let a conversation run past the plan. Then trust yourself to cut back to the next block. The outline is a map, not a cage.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Five fixed blocks cover a full episode.",
          "Outline instead of scripting, unless the segment is short.",
          "Write one promise sentence per segment.",
          "Time the prep and stop when the timer rings.",
          "Save unscripted space for the moments you cannot plan.",
        ],
      },
    ],
  },
  {
    slug: "podcast-interview-questions-script",
    title: "Writing Podcast Interview Questions That Go Deep",
    excerpt:
      "A podcast interview questions script should do more than list topics. Draft questions that pull real stories instead of flat one word answers.",
    date: "2024-06-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A podcast interview questions script works when each question opens a story, not a status update. My rule is simple: if a question can be answered with yes or no, it does not belong on the list.",
          "I learned this the hard way after a guest gave me nine one word answers in a row. The episode ran forty minutes and felt like a form. The next week I rewrote my questions around moments and the show finally sounded alive.",
        ],
      },
      {
        heading: "Start with the story you want, then work backward",
        paragraphs: [
          "Before I write a single question, I decide what the listener should feel by the end of the interview. Maybe it is surprise at how hard the guest's first year was. Maybe it is respect for a choice they almost avoided.",
          "Once I know the feeling, the questions fall into place. Each one moves the guest closer to that moment. Questions that do not move the story get cut, no matter how clever they sound in my notes.",
          "This also stops the interview from becoming a biography read aloud. You are not marching through a career year by year. You are pulling out the handful of scenes that explain the person.",
        ],
      },
      {
        heading: "Ask for the specific scene",
        paragraphs: [
          "Abstract questions invite abstract answers. Ask what someone learned from failure and you get a tidy lesson. Ask what they said out loud in the parking lot after the meeting ended and you get a scene.",
          "Specific questions are easier to answer too. The guest does not have to summarize a decade of experience. They just have to remember one afternoon.",
        ],
        bullets: [
          "Where were you standing when you heard the news?",
          "What did you do in the first hour after the deal fell apart?",
          "Who told you to keep going, and what did they actually say?",
          "What was the line you almost said out loud but held back?",
          "When did you first suspect you were wrong about this?",
        ],
      },
      {
        quote:
          "A good interview question hands the guest a doorway and trusts them to walk through it.",
      },
      {
        heading: "Order for texture, not chronology",
        paragraphs: [
          "I do not ask questions in the order events happened. I order them by how the episode should feel. An early warm question settles the guest, a middle one pushes on tension, and a late one asks them to reflect.",
          "Keep two backup questions in your pocket for when the conversation stalls. Pull one out, and if it lands, let the plan go. The script exists to serve the talk, not the other way around.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write questions that require a story, not a yes or no.",
          "Decide the feeling first, then build questions toward it.",
          "Trade abstract questions for specific scenes.",
          "Order by emotion, not by calendar.",
          "Keep two backups and abandon the script when the talk gets good.",
        ],
      },
    ],
  },
  {
    slug: "podcast-cold-open-script",
    title: "Writing a Podcast Cold Open That Hooks Listeners",
    excerpt:
      "A podcast cold open decides whether anyone hears the rest. Here is how to script the first thirty seconds so a new listener really stays put.",
    date: "2024-10-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "A podcast cold open is the first thing a listener hears before the intro music and the show name. The strongest ones drop straight into a moment, a claim, or a question and make you need the answer.",
          "I ignored cold opens for two years because I thought the intro was the opening. The data told a different story. Episodes with a sharp first line held twice as many new listeners past the minute mark.",
        ],
      },
      {
        heading: "Lead with tension, not a summary",
        paragraphs: [
          "Most weak opens explain what the episode is about. Great opens make the listener feel the stakes before they know the context. You want a small itch that only the episode can scratch.",
          "Cut the phrase that starts with anyway or so. Open in the middle of a scene. If the episode is about quitting a job, start with the moment the resignation email was half written, not with a summary of the career.",
          "The cold open should run twenty to forty seconds. Long enough to build a hook, short enough that the listener has not yet decided to skip.",
        ],
      },
      {
        heading: "Four opens that earn the next minute",
        paragraphs: [
          "There is no single template, but a few shapes work again and again. Pick the one that fits the episode and does not feel forced.",
        ],
        bullets: [
          "The scene drop: start inside a moment and let context arrive later.",
          "The bold claim: state something the listener will doubt, then promise proof.",
          "The unanswered question: pose a puzzle and hold the answer until the middle.",
          "The counterintuitive fact: open with a number or detail that stops the scroll.",
        ],
      },
      {
        quote:
          "The cold open is a promise. If the rest of the episode does not keep it, the listener never trusts your next tease.",
      },
      {
        heading: "Record three versions and keep the shortest",
        paragraphs: [
          "I record three cold opens for every episode and almost always keep the one that cuts the fastest to the point. Adrenaline makes us overexplain, and the first take usually buries the hook under setup.",
          "Play all three back to back. The one that makes you lean in is the one to use. You are not judging your performance. You are judging whether you would keep listening.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Put a real hook before the intro music.",
          "Open inside a moment, not with a summary of the topic.",
          "Keep the cold open under forty seconds.",
          "Record three takes and keep the fastest to the point.",
          "Never write a tease the episode cannot pay off.",
        ],
      },
    ],
  },
  {
    slug: "podcast-intro-script",
    title: "Scripting a Podcast Intro That Nobody Wants to Skip",
    excerpt:
      "A podcast intro script has one job, which is to get out of the way. Learn what to cut and what to keep to earn the listener for thirty minutes.",
    date: "2025-01-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "A podcast intro script should be short enough that nobody needs a skip button. Ten to twenty seconds is plenty. Say the show name, say what this episode delivers, and get to the conversation.",
          "My first intros ran a full minute with music and a list of the guest's accomplishments. I was proud of them. Listeners skipped them, and I could see the dip on the retention curve every single week.",
        ],
      },
      {
        heading: "Cut the résumé and keep the promise",
        paragraphs: [
          "Reading a guest's credentials out loud is the fastest way to lose a listener. Nobody tuned in for the LinkedIn summary. They tuned in because a specific idea sounded interesting.",
          "Replace the résumé with a single sentence about what the listener will get. One line of promise beats three lines of biography, and it respects the audience's time.",
        ],
      },
      {
        heading: "What a tight intro contains",
        paragraphs: [
          "You do not need much. A short intro can follow the same shape every episode, which also helps returning listeners settle into the show.",
        ],
        bullets: [
          "The show name, spoken once.",
          "The guest's name and what they do in one line.",
          "The specific thing this episode is about.",
          "A five second reason to keep listening.",
        ],
      },
      {
        quote:
          "An intro that respects the listener is the cheapest form of trust you will ever buy.",
      },
      {
        heading: "Write it once, then reuse the frame",
        paragraphs: [
          "Draft your intro template a single time and swap in the variables each week. This keeps the opening consistent and removes one more blank page from your prep.",
          "Vary the middle line, not the frame. Listeners like a familiar start. The sameness is a feature, because it tells them they are in the right place.",
          "When in doubt, cut a sentence. A short intro almost never gets a complaint. A long one always does.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the intro under twenty seconds.",
          "Swap the résumé for one clear promise.",
          "Use the same frame each week and change the details.",
          "A short intro is safer than a clever long one.",
        ],
      },
    ],
  },
  {
    slug: "podcast-transition-phrases",
    title: "Podcast Transition Phrases That Keep the Flow",
    excerpt:
      "Good podcast transition phrases move the show without filler. Here are some lines that shift topics smoothly and keep listeners from drifting away.",
    date: "2025-05-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Podcast transition phrases are the verbal bridges that carry a listener from one segment to the next. Without them, an episode feels like a pile of topics. With them, it feels like a single trip.",
          "I used to think transitions were filler. Then I edited an episode where every topic change landed with a thud and realized the show had no connective tissue at all.",
        ],
      },
      {
        heading: "Signal the turn before you take it",
        paragraphs: [
          "A good transition tells the listener that the ground is about to shift. That small warning is why people stay. They know a new idea is coming and they are ready for it.",
          "You do not need clever wording. You need a clear signpost and a reason. Say that you are moving to a different question, then say why it matters now.",
          "Avoid dead air. Silence between segments reads as a mistake unless you fill it with intention. Even a soft line about a break can keep the listener anchored.",
        ],
      },
      {
        heading: "Lines that work in almost any episode",
        paragraphs: [
          "Keep a few phrases ready so you are never hunting for a bridge mid-record. These are the ones I reuse the most, and none of them sound like a robot wrote them.",
        ],
        bullets: [
          "That answer opens something bigger, so let me ask about it directly.",
          "Before we leave this, I want to sit with one part of it.",
          "That is one side of the story. Here is the other one I want to test.",
          "Let's step back and look at what this looks like over a year.",
          "We have covered the hard part. Now for the part people miss.",
        ],
      },
      {
        quote:
          "A transition is not decoration. It is the moment you tell the listener the episode is still worth their time.",
      },
      {
        heading: "Practice transitions in the edit, not the script",
        paragraphs: [
          "You cannot fully script a bridge because you do not know what the guest will say. I write rough transition markers in the outline, then record clean bridges in post once I hear the actual conversation.",
          "This keeps the transitions honest. They respond to what was really said instead of a guess you made before the room filled with talk.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Warn the listener before every topic shift.",
          "Keep a short list of bridges ready to use.",
          "Fill segment gaps with intention, never dead air.",
          "Write final transitions during the edit.",
          "A clear bridge is better than a clever one.",
        ],
      },
    ],
  },
  {
    slug: "podcast-storytelling-script",
    title: "Using Story Beats to Shape Your Podcast Script",
    excerpt:
      "Story beats give a podcast script its pull. Map the setup, the turn, and the payoff before you record so a spoken segment lands like a story.",
    date: "2025-09-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Story beats are the small structural turns that give a spoken segment momentum. You place a setup, a complication, and a payoff, and a plain anecdote starts to pull the listener forward.",
          "I stole this from screenwriting and it changed how I outline. A forty second story told with clear beats holds attention better than a five minute ramble with one strong line buried in the middle.",
        ],
      },
      {
        heading: "The three moves every segment needs",
        paragraphs: [
          "Every story you tell on a podcast needs a place to stand, a problem to solve, and a resolution that answers the opening. Miss the problem and the story is forgettable. Miss the resolution and it feels like a waste.",
          "Beats are just markers in your outline. You are not writing dialogue. You are noting where the tension rises and where it releases, so you can feel the shape before you record.",
          "Once you can see the shape, you can cut. A story with one clear complication beats a story with four half told ones.",
        ],
      },
      {
        heading: "How to mark beats in an outline",
        paragraphs: [
          "I use short labels in the margins of my outline. They take ten seconds to write and keep me from losing the thread when a guest starts riffing.",
        ],
        bullets: [
          "Setup: who, where, and the one detail that grounds the scene.",
          "Stake: what the person stands to lose if this goes wrong.",
          "Turn: the moment the situation changes direction.",
          "Cost: what it took to get through it.",
          "Payoff: the line that answers why you told this story at all.",
        ],
      },
      {
        quote:
          "Beats do not make a story fake. They make sure the real one does not get lost between two other topics.",
      },
      {
        heading: "Use beats for the episode, not just anecdotes",
        paragraphs: [
          "You can run a whole episode on story logic. The cold open is the setup, the middle segments raise the stakes, and the outro pays it off. That arc is why some shows feel finished and others just stop.",
          "Map the episode arc on the same page as the segment beats. When you can see both, you can tell whether a story belongs in the middle or near the end where it lands hardest.",
          "Not every episode needs an arc. Interviews run on their own current. But when you want a solo show to feel like a journey, beats are how you build it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark setup, turn, and payoff before you record.",
          "One clear complication beats four vague ones.",
          "Use short margin labels to keep the shape visible.",
          "Apply story logic to the whole episode, not only anecdotes.",
        ],
      },
    ],
  },
  {
    slug: "podcast-ad-read-script",
    title: "How to Script a Podcast Ad Read That Converts",
    excerpt:
      "A podcast ad read script fails the moment it sounds like an ad. Write host reads that keep listener trust and still send people to the offer link.",
    date: "2026-01-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "A podcast ad read script should sound like you talking, not a brand talking through you. The best host reads keep the same voice as the show and still name the offer, the reason, and the next step.",
          "Sponsors send copy that reads like a press release. Your job is to translate it. I rewrote my first ad reads word for word and the conversion rate doubled once they sounded like the rest of my episodes.",
        ],
      },
      {
        heading: "Earn the read before you start it",
        paragraphs: [
          "Listeners forgive an ad when they trust the host. They resent one when it interrupts a story at the worst moment. Place the break where the conversation already pauses, and the read costs you less goodwill.",
          "A short honest setup helps too. Saying that a product paid for the episode and that you actually use it sets expectations. Most listeners reward that honesty instead of punishing it.",
          "Never pretend an ad is part of the show. The audience hears the shift in tone instantly, and faking it burns trust you cannot buy back.",
        ],
      },
      {
        heading: "The pieces every host read needs",
        paragraphs: [
          "Sponsor copy arrives long and dense. Strip it down to the few elements that matter and rebuild it in your own words.",
        ],
        bullets: [
          "The problem the product solves, said plainly.",
          "One specific thing you use it for.",
          "The offer and the exact code or link.",
          "A single clear call to action, repeated once.",
        ],
      },
      {
        quote:
          "An ad read is a recommendation with a deadline attached. Keep the recommendation honest and the deadline clear.",
      },
      {
        heading: "Practice the read out loud twice",
        paragraphs: [
          "Read the copy aloud before you record the episode. Awkward phrasing that looks fine on paper trips you up in the booth, and a stumble breaks the illusion that you are just talking.",
          "Mark every word you would never say and replace it. If a line makes you cringe, it will make the listener cringe, and a cringe is where the click gets lost.",
          "Keep the read between thirty and sixty seconds. Long enough to explain the offer, short enough that it does not swallow the episode.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Rewrite sponsor copy into your own voice.",
          "Place the break where the conversation already pauses.",
          "Name the offer, the code, and one call to action.",
          "Rehearse out loud and cut every line you would not say.",
          "Honesty about the sponsorship protects the read.",
        ],
      },
    ],
  },
  {
    slug: "podcast-solo-episode-script",
    title: "How to Structure a Solo Podcast Episode Script",
    excerpt:
      "A solo podcast episode script carries the whole show by itself. Use a solid segment plan to hold attention without a guest to bounce ideas off.",
    date: "2026-04-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A solo podcast episode script needs a visible structure because there is no guest to carry the pace. Break the episode into clear segments and give each one its own question to answer.",
          "Solo shows went from my least confident format to my favorite once I stopped trying to fill an hour with one idea. The fix was simple. I record three to five small segments instead of one long monologue.",
        ],
      },
      {
        heading: "Build the episode from small pieces",
        paragraphs: [
          "A single idea stretched over forty minutes turns thin fast. Several related ideas, each with a beginning and an end, keep the energy moving. The listener gets a small win every few minutes.",
          "Treat each segment like a mini episode. It opens with a question, makes a point, and lands on a line worth remembering. Then the next one starts and the pattern repeats.",
          "This structure also makes recording easier. You can stop and restart between segments, which means a bad take costs you two minutes instead of a whole session.",
        ],
      },
      {
        heading: "A solo segment plan you can reuse",
        paragraphs: [
          "The plan does not change much from episode to episode. You just refill the slots.",
        ],
        bullets: [
          "Cold open with the sharpest claim of the episode.",
          "A quick frame that tells the listener the shape of the show.",
          "Three to five segments, each answering one question.",
          "A short mid-episode reset to break the rhythm.",
          "An outro that names the single best idea and asks for one action.",
        ],
      },
      {
        quote:
          "Solo does not mean alone. You are in conversation with the listener, and structure is how you keep your half worth hearing.",
      },
      {
        heading: "Read the room you cannot see",
        paragraphs: [
          "Without a live guest, you lose the cues that tell you to slow down or explain more. You have to build those cues into the script. Pause after a big point and imagine the question a listener would ask.",
          "Answer that imagined question on the spot. It sounds like a tangent, but it meets the listener where they are and keeps the episode from racing past them.",
          "Listen back before you publish and note where your attention wandered. Those spots are where the structure needs one more small segment or one less.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record several small segments, not one long monologue.",
          "Give every segment its own question and payoff.",
          "Reuse the same plan and refill the slots each week.",
          "Answer the listener's imagined question out loud.",
          "Review the recording for spots where you lost interest.",
        ],
      },
    ],
  },
  {
    slug: "podcast-outro-script",
    title: "Writing a Podcast Outro That Earns the Follow",
    excerpt:
      "A podcast outro script is your last chance to keep a listener. End with a clear takeaway, a single clear ask, and a good reason to come back.",
    date: "2026-07-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "A podcast outro script turns the end of an episode into the start of a relationship. Recap the single best idea, make one clear ask, and hint at what comes next. Keep it under a minute.",
          "I used to end episodes with a sheepish thanks and silence. Then I started scripting the last thirty seconds, and my follow and review numbers moved more in one month than in the previous year.",
        ],
      },
      {
        heading: "Recap one thing, not ten",
        paragraphs: [
          "The outro is not a summary. Pick the one idea you most want the listener to carry out the door and say it again in a fresh sentence. A single remembered point beats five forgotten ones.",
          "Restating the best idea also helps people who listened while driving. They may have missed the nuance the first time, and the recap gives it a second chance to stick.",
        ],
      },
      {
        heading: "Make one ask, and only one",
        paragraphs: [
          "Creators dilute their own call to action by asking for everything at once. Follow, subscribe, rate, review, share, join the newsletter, and check the link. A listener overwhelmed by choices does nothing.",
          "Pick the one action that matters most this week and ask for it alone. Next week you can ask for something else.",
        ],
        bullets: [
          "Follow the show if this is your second or third episode.",
          "Leave a review if a specific idea helped you.",
          "Send this episode to the one person who needs the topic.",
          "Grab the free resource at the link if you want to go deeper.",
        ],
      },
      {
        quote:
          "The follow is not a favor you beg for. It is a promise that the next episode will be worth the return trip.",
      },
      {
        heading: "Tease the next show, then stop talking",
        paragraphs: [
          "A short tease gives the listener a reason to come back. Name the next topic or guest in one line, then get out. Resist the urge to ramble past the end, because the fade is a clean place to land.",
          "Write the outro before you record the episode. Knowing how you will close keeps the whole conversation pointed at a real destination.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the outro under a minute.",
          "Recap one idea instead of summarizing everything.",
          "Ask for a single action, never a list.",
          "Tease the next episode in one line.",
          "Script the ending before you record.",
        ],
      },
    ],
  },
  {
    slug: "podcast-show-notes-script",
    title: "Turning Your Podcast Script Into Useful Show Notes",
    excerpt:
      "Your podcast script already holds most of the show notes. Pull the key lines, links, and timestamps so every episode is easy to search and share.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "Show notes are the written companion to your episode, and your script already contains most of what they need. Pull the key lines, links, and timestamps from the outline instead of writing notes from scratch.",
          "I wasted a year writing notes as an afterthought at midnight. Once I started harvesting them from the script during the edit, the notes got sharper and the task took ten minutes.",
        ],
      },
      {
        heading: "Start from the quotes, not the summary",
        paragraphs: [
          "The best show notes lift two or three lines straight from the episode. A real quote in the guest's own words does more than a tidy paraphrase, and it gives searchers something specific to find.",
          "Scan your script or transcript for the moments that made you stop. Those are the lines worth pulling. One strong quote near the top invites the reader in.",
          "Keep the summary to a few sentences. The notes exist to help someone decide to listen, not to replace the episode.",
        ],
      },
      {
        heading: "What every set of notes should include",
        paragraphs: [
          "The format is boring on purpose. Listeners and search engines both reward consistency, so keep the same sections in the same order every week.",
        ],
        bullets: [
          "A two or three sentence summary of the episode.",
          "Two or three pull quotes from the script.",
          "Timestamps for the main segments.",
          "Links to anything mentioned, in order of appearance.",
          "One line on where to follow the guest.",
        ],
      },
      {
        quote:
          "Show notes are the searchable version of your episode. If they are vague, the right listener never finds the show.",
      },
      {
        heading: "Write them while the episode is fresh",
        paragraphs: [
          "Harvest the notes during the edit, when the story is still in your head. Come back a week later and you will have forgotten the small details that make the notes useful.",
          "Add keywords naturally. If the episode is about interview prep, the words interview and preparation should appear in the summary because that is what a person would type.",
          "Save the format as a template. Fill in the blanks each week and publish. Done consistently, notes become a quiet source of new listeners who arrive from search, long after the episode released.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pull notes from the script during the edit.",
          "Lead with two or three real quotes.",
          "Keep the summary to a few sentences.",
          "Add timestamps and links in a fixed order.",
          "Use a template so the format never drifts.",
        ],
      },
    ],
  },
];
