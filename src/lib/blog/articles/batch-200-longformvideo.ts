import {
  Activity,
  Clock,
  Compass,
  Film,
  Flame,
  Layers,
  PenLine,
  Repeat,
  Target,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch200: BlogPost[] = [
  {
    slug: "long-form-video-length-decision",
    title: "How Long Should Your Long-Form Video Actually Be",
    excerpt:
      "Your long-form video should run as long as the idea needs and not a second longer. Here is how to find that number before you write a word.",
    date: "2035-01-04",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["format", "length", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Match the length to the number of questions the viewer arrives with. A long video that answers one question in twenty minutes feels padded, and a video that answers six questions in the same time feels generous.",
          "I stopped picking durations first. Now I list the questions, estimate how long each honest answer takes, then add the transitions. The runtime falls out of that sum instead of being imposed on it.",
        ],
      },
      {
        heading: "Start with the question count",
        paragraphs: [
          "Write every question a curious viewer would ask about your topic. Order them from the one that pulls people in to the one that rewards the people who stayed. Each question that needs a real answer earns minutes, and each question you add to pad earns nothing.",
          "A topic with two questions is a short video wearing a long coat. A topic with eight questions can carry a thirty minute piece without a single wasted beat.",
        ],
      },
      {
        quote:
          "Length is an output of your outline, never an input. Pick the runtime last and you stop fighting your own script.",
      },
      {
        heading: "Watch the cost of each added minute",
        paragraphs: [
          "Every extra minute raises the patience you demand from a stranger. It also raises the amount of footage you have to capture and defend in the edit. A twenty minute video is not a ten minute video with more words, it is a different commitment from the person watching.",
          "Ask whether the next minute deepens the promise or stalls it. If it only fills time, cut it and let the video be shorter. A tight twelve minutes beats a loose twenty every single time.",
        ],
      },
      {
        heading: "Length changes the editing job",
        paragraphs: [
          "A long video needs more coverage than a short one because the viewer sees the seams. You cannot hold a twenty minute runtime on a single talking head shot unless the person is genuinely magnetic. Plan cutaways, screen recordings, and scene changes as part of the length decision, not after it.",
          "This is why runtime is partly an editing budget. The longer the piece, the more material you need to hide the transitions and keep the frame moving.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "List the questions first, then let the runtime follow from honest answers.",
          "Two questions rarely support a long video, no matter how good the lighting is.",
          "Each added minute raises the patience you demand, so spend it on substance.",
          "Plan extra coverage before you commit, because length is an editing cost too.",
          "When in doubt, ship the shorter cut. Density keeps people longer than duration does.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-hold-attention-past-intro",
    title: "Holding Attention Past the Intro in a Long Video",
    excerpt:
      "Most long-form video drop-off happens right after the intro. Here is how to build a second opening that keeps people watching into the body.",
    date: "2035-01-07",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "openings", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "Treat the end of your intro as a second opening, not a finish line. The viewer who survived the hook now needs a new reason to keep going, and most videos give them nothing at that moment.",
          "I used to think a strong hook carried the whole video. It carries about ninety seconds. After that, the promise has to renew itself or the drop-off graph falls off a cliff.",
        ],
      },
      {
        heading: "The handoff problem",
        paragraphs: [
          "Every video has a moment where the hook ends and the body begins. That handoff is where attention leaks. The viewer has spent their initial curiosity and wants to know what they get for staying.",
          "Name the payoff at the handoff. Tell them what they will be able to do, decide, or see by the end. A clear destination keeps feet in the room.",
        ],
      },
      {
        quote:
          "The hook opens the door. The handoff is the reason anyone walks through it.",
      },
      {
        heading: "Stack small open loops",
        paragraphs: [
          "A long video stays alive on a series of small unresolved questions. Close one, open the next, and let the viewer feel the thread moving forward. This is not clickbait, it is structure.",
          "Plant each loop exactly where the last one closes. If two loops resolve at once, you hand the viewer a clean exit. One loop at a time keeps them leaning in.",
        ],
      },
      {
        heading: "Vary the format, not just the words",
        paragraphs: [
          "A talking head for twenty minutes wears out even a patient viewer. Change the visual register by cutting to a demo, a diagram, or a different room. Movement resets attention without changing the topic.",
          "I map format changes on the same timeline as my outline. When a section runs long, I add a visual beat instead of more sentences.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the end of the intro as a second opening with its own promise.",
          "State the payoff at the handoff so the viewer knows what staying buys.",
          "Keep one open loop running at all times and close it where the next begins.",
          "Change the visual format when a section risks going flat.",
          "Attention is renewed in small doses, not saved up in the first ten seconds.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-chapters-navigation",
    title: "Using Chapters and Navigation in Long-Form Video",
    excerpt:
      "Chapters turn a long-form video into a place people can move around inside. Use them to answer skimmers without losing your through-line.",
    date: "2035-01-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "navigation", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Chapters let a viewer jump straight to the part they came for. That sounds like it hurts watch time, but it usually helps, because someone who finds their answer stays longer than someone who has to hunt for it.",
          "I add chapters after the script is written, not before. The outline decides the sections, and the sections decide the labels. Doing it the other way turns every chapter into a promise the script cannot keep.",
        ],
      },
      {
        heading: "Name chapters like search results",
        paragraphs: [
          "A good chapter title reads like something a person would type to find it. A label built around the idea beats one built around the position. The words should carry the benefit, not just the order.",
          "Keep them short enough to scan on a phone. If a title needs a comma to make sense, it is too long.",
        ],
      },
      {
        quote:
          "A chapter is a doorway. If the door is unlabeled, nobody opens it.",
      },
      {
        heading: "Protect the through-line",
        paragraphs: [
          "Chapters help navigation, but they can also fragment a story. If every section stands alone, the viewer has no reason to stay for the ending. Keep a running question that ties the sections together.",
          "I usually put the through-line in the first chapter and resolve it in the last. The middle chapters are detours that still serve the same destination.",
        ],
      },
      {
        heading: "Where to place the boundaries",
        paragraphs: [
          "Place a chapter break where the viewer naturally wants a breather, not where your outline happens to end. A break after a dense explanation gives people a moment to catch up.",
          "Do not cut on every topic change. Two related ideas under one chapter feel more coherent than six thin chapters stacked together.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the script first, then cut chapters along its natural joints.",
          "Label chapters with the idea or benefit, not with their order.",
          "Keep a through-line across sections so the video still ends somewhere.",
          "Place breaks after dense passages so viewers can reset.",
          "Fewer, fuller chapters beat many thin ones.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-pacing",
    title: "Pacing a Twenty Minute Video Without Losing People",
    excerpt:
      "Pacing is not speed. A long-form video can move slowly and still hold if every beat earns its place and the rhythm keeps shifting.",
    date: "2035-01-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "pacing", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Pacing is the rhythm of give and take across a long video, and it is not how fast you talk. A slow video with varied beats feels alive, while a fast video stuck in one gear feels exhausting.",
          "I pace by energy, not by word count. Some sections need to breathe and others need to sprint. The contrast between them is what keeps a twenty minute piece from turning into a drone.",
        ],
      },
      {
        heading: "Alternate dense and light sections",
        paragraphs: [
          "After a heavy explanation, give the viewer something easy. A quick example, a joke that lands, or a visual that speaks for itself. The light beat resets their capacity to absorb the next dense one.",
          "Two heavy sections back to back is where most long videos lose people. The viewer runs out of room before you run out of material.",
        ],
      },
      {
        quote:
          "Flat pacing kills more long videos than bad ideas ever will.",
      },
      {
        heading: "Cut on the thought, not the breath",
        paragraphs: [
          "In the edit, end a beat when the idea ends, not when the speaker pauses. Natural pauses feel human, but a pause with no idea behind it is dead air.",
          "I mark the concepts first, then trim around them. The result sounds faster than it is because nothing is wasted.",
        ],
      },
      {
        heading: "Let the ending slow down",
        paragraphs: [
          "The last two minutes can drop their pace. Once the payoff lands, the viewer is settled and will accept a calmer close. Rushing the ending makes the whole video feel like it was running from something.",
          "Save one quiet moment for the goodbye. It gives the piece a shape instead of just stopping.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pace on energy, not on speaking speed.",
          "Follow a dense section with a light one so viewers can reset.",
          "Cut on completed thoughts and remove pauses with nothing behind them.",
          "Slow the final minutes once the payoff has landed.",
          "Contrast between beats matters more than constant motion.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-structure-20-minute",
    title: "How to Structure a Twenty Minute Video That Holds",
    excerpt:
      "A long-form video needs a spine the viewer can feel. Build it from one promise, a few turns, and a payoff that lands where you said it would.",
    date: "2035-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "scripting", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Structure a twenty minute video around one promise and a small number of turns. The viewer should feel each turn move them closer to the payoff you named at the start.",
          "I sketch the spine before I write a line. It has a setup, a couple of turns, and a resolution. If a scene does not sit on that spine, it does not belong in the video.",
        ],
      },
      {
        heading: "Open with the promise",
        paragraphs: [
          "State what the viewer will get, not the topic. A line about what they will be able to do is a promise, while a line about what you will talk about is only a label.",
          "Hold the promise loosely enough to surprise, tightly enough to guide. The viewer should always know roughly where this is going.",
        ],
      },
      {
        quote:
          "A spine you can draw on a napkin will hold a twenty minute video. A spine you have to explain will not.",
      },
      {
        heading: "Build turns, not topics",
        paragraphs: [
          "Turns are moments where the viewer learns something that changes how they see the rest. Topics just sit there. A video made of turns feels like a story, while a video made of topics feels like a list.",
          "I ask of each section: what changes for the viewer here? If the answer is nothing, the section is filler.",
        ],
      },
      {
        heading: "Close the loop you opened",
        paragraphs: [
          "Return to the opening promise in the last section. Show the viewer the payoff in plain terms. An unresolved promise is the fastest way to make people feel cheated, and they will remember it.",
          "The close should feel earned, not tacked on. If it feels tacked on, the spine was weak somewhere in the middle.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One promise, a few turns, one payoff. That is the whole spine.",
          "Open with a result the viewer wants, not a topic label.",
          "A turn changes how the viewer sees the rest, and a topic just sits there.",
          "Cut any section that does not sit on the spine.",
          "Resolve the opening promise in plain terms before you sign off.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-b-roll",
    title: "Planning B-Roll for a Long-Form Video That Flows",
    excerpt:
      "B-roll is not decoration in a long-form video. It carries the pacing, hides the cuts, and gives the viewer something to look at while they think.",
    date: "2035-01-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["format", "production", "pacing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Plan b-roll as part of the script, not as cleanup after the fact. In a long video, b-roll does real work: it covers cuts, sets pace, and gives the eyes something to do while the ears process.",
          "I mark b-roll needs right in the outline, next to the line that requires it. Shooting from a list beats hunting through old footage and settling for whatever fits.",
        ],
      },
      {
        heading: "Shoot to the sentence",
        paragraphs: [
          "For each key line, write what the viewer should see. This turns a vague shoot day into a checklist, and it stops the trap of covering a specific point with generic footage.",
          "Match the visual to the claim. If you say the graph spikes at week three, show the graph. If you say the room went quiet, show the room.",
        ],
      },
      {
        quote:
          "Generic b-roll is the visual equivalent of filler words. It fills time without saying anything.",
      },
      {
        heading: "Build a coverage cushion",
        paragraphs: [
          "Shoot more than the script needs for the sections you know will run long. Long videos eat footage faster than short ones because the frame has to keep changing.",
          "I keep a folder of texture shots: hands, screens, streets, tools. They fill gaps when a section runs longer than planned, and they cost almost nothing to grab.",
        ],
      },
      {
        heading: "Cut b-roll to the beat",
        paragraphs: [
          "Change the shot when the idea changes, not on a fixed timer. A shot that lives too long starts to feel like a still image, and a shot that changes too fast gives the viewer no time to land.",
          "Let important lines sit on a clean shot, and let transitions carry the churn.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark b-roll needs in the outline next to the lines that require them.",
          "Shoot to the sentence so the visual matches the claim.",
          "Keep a cushion of texture shots for sections that run long.",
          "Change shots when the idea changes, not on a fixed clock.",
          "Give key lines a clean frame and let transitions do the busywork.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-scripting",
    title: "Scripting a Long Video Without Padding the Middle",
    excerpt:
      "A long-form video dies in the middle when you script to fill time. Write to answer, and cut every sentence that only exists to reach a runtime.",
    date: "2035-01-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Script a long video by answering questions, never by hitting a word count. Padding is the first thing a viewer feels and the last thing a creator notices.",
          "I write the answer to each question as tightly as I can, then check the total. If it comes up short, I add a question instead of adjectives.",
        ],
      },
      {
        heading: "One idea per paragraph",
        paragraphs: [
          "A paragraph in a script should carry a single idea the viewer can hold. When two ideas share a paragraph, the viewer keeps the first and drops the second.",
          "Short paragraphs also give the editor room to move. A long block of text is hard to trim without losing something important.",
        ],
      },
      {
        quote:
          "If a sentence only exists to make the video longer, it is telling the viewer you had nothing else to say.",
      },
      {
        heading: "Write for the ear, not the page",
        paragraphs: [
          "Read every line out loud. Sentences that look fine on paper often tangle in the mouth, and if you stumble the viewer will too.",
          "Spoken language runs on short clauses. Break long sentences at the commas and let each clause land before the next begins.",
        ],
      },
      {
        heading: "Reward the middle",
        paragraphs: [
          "Most scripts front-load the good material and save the boring proof for the middle. Flip that. Put a genuine payoff in the middle so the viewer learns that staying pays.",
          "The middle is where trust is built or lost. Treat it as a place to deliver, not a place to survive.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Answer questions instead of chasing a word count.",
          "Keep one idea per paragraph so nothing gets dropped.",
          "Read every line aloud and fix whatever tangles.",
          "Put a real payoff in the middle to reward patience.",
          "Cut any sentence that exists only to add length.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-energy-consistency",
    title: "Keeping Energy Consistent Across a Long Video",
    excerpt:
      "A long-form video needs steady energy, not a sprint that fades after ten minutes. Here is how to stay present and engaged from the first minute to the very last.",
    date: "2035-01-24",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["delivery", "retention", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Energy in a long video is a stamina problem, not a caffeine problem. The viewer feels when you are present and when you are coasting, even if they cannot name it.",
          "I record in blocks and check my tone at each break. A tired read is contagious, and no amount of editing makes dead energy sound alive.",
        ],
      },
      {
        heading: "Record in focused blocks",
        paragraphs: [
          "Long recordings drift. Take a real break every twenty or thirty minutes and reset your posture and your intent. Short, fresh takes beat one long, weary one.",
          "Before each block, reread the goal of that section. Knowing what you are building keeps the voice pointed.",
        ],
      },
      {
        quote:
          "Energy is not volume. It is attention. A quiet host who is fully present beats a loud host who is thinking about lunch.",
      },
      {
        heading: "Match energy to the material",
        paragraphs: [
          "Not every line deserves the same intensity. A technical passage wants calm clarity, while a big reveal wants lift. Varying your delivery keeps a long video from flattening into one tone.",
          "I mark high and low beats in the script so I remember where to push and where to settle.",
        ],
      },
      {
        heading: "Protect the last ten minutes",
        paragraphs: [
          "The final stretch is where energy usually collapses. Plan a separate, shorter session for the ending so you arrive fresh instead of drained.",
          "A strong close sends the viewer off with the feeling you want them to keep. Give it the same care as the opening.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat energy as stamina and record in short, focused blocks.",
          "Reread the section goal before every take to stay pointed.",
          "Vary intensity with the material instead of holding one tone.",
          "Save a fresh session for the final ten minutes.",
          "Presence matters more than volume in holding a viewer.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-vs-short-form",
    title: "Long-Form Versus Short-Form: Choosing Your Strategy",
    excerpt:
      "Long-form video and short-form video do different jobs. Pick based on what you want to build: reach, depth, or a relationship with the audience.",
    date: "2035-01-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["format", "strategy", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Short-form buys reach while long-form buys relationship. Neither is better in isolation. The right choice depends on what you want the video to do for your channel this month.",
          "I run both on purpose, but I never expect them to behave the same way. A short that spikes and dies is doing its job, and a long video that grows slowly is doing a different one.",
        ],
      },
      {
        heading: "What each format is good at",
        paragraphs: [
          "Short-form is a discovery engine. It finds new people fast and forgets them fast. Long-form is a depth engine that turns strangers into regulars who come back by name.",
          "If your problem is that nobody knows you, short-form helps. If your problem is that people know you but do not trust you, long-form helps.",
        ],
      },
      {
        quote:
          "Short-form opens the door. Long-form is what makes someone want to live in the house.",
      },
      {
        heading: "Do not force one into the other",
        paragraphs: [
          "A chopped long video rarely works as a short because it lacks a self-contained hook. A stretched short rarely works as a long video because it has one idea and no turns.",
          "Build each format for its own job. Then let short-form point to long-form and let long-form reward the people who clicked.",
        ],
      },
      {
        heading: "Match the format to the goal",
        paragraphs: [
          "Decide the outcome before the format. If the goal is a spike of new eyes, go short. If the goal is a library that keeps earning, go long. If the goal is both, plan a pipeline instead of a single video.",
          "The mistake is choosing a format first and inventing a goal to justify it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Short-form drives reach while long-form builds relationship.",
          "Choose the format after you choose the outcome you want.",
          "Do not chop long videos into shorts and expect them to work.",
          "Use short-form to point people toward your long-form work.",
          "Running both works when each is built for its own job.",
        ],
      },
    ],
  },
  {
    slug: "long-form-video-when-long-works",
    title: "When Long Videos Actually Make Sense for Your Channel",
    excerpt:
      "Long-form video is worth the effort when your topic rewards depth. Here is how to tell whether your idea can carry the runtime or not.",
    date: "2035-01-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["strategy", "format", "depth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Make a long video when the idea has layers, not when you want to look serious. Depth is the only honest reason to ask a stranger for twenty minutes of their attention.",
          "I test every long idea with one question: does this topic get better the more I explain it? If yes, it can carry the runtime. If no, it belongs in a short.",
        ],
      },
      {
        heading: "Signs a topic can go long",
        paragraphs: [
          "Topics that go long have sub-questions, competing answers, or a process with real steps. They reward the viewer who stays with something they could not get in thirty seconds.",
          "Topics that stay short have one sharp point and no room to expand. Stretching them is the fastest way to lose the point and the viewer.",
        ],
      },
      {
        quote:
          "A long video earns its length by being more useful at minute eighteen than it was at minute two.",
      },
      {
        heading: "The cost of going long",
        paragraphs: [
          "Long videos cost more to research, shoot, and edit than shorts do. They also take longer to find an audience, so go in expecting a slow build instead of a spike.",
          "That cost is fine when the topic justifies it. It is a bad trade when the idea was thin to begin with, because you spend the most effort on a video that cannot hold.",
        ],
      },
      {
        heading: "Build a library, not a one-off",
        paragraphs: [
          "Long videos pay off when they stack. A single long piece is a gamble, but a set of long videos on one theme becomes a place people return to, and that is where the format shines.",
          "Plan long work in groups so each video supports the next. The whole becomes worth more than the sum of the parts.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Go long when the topic rewards depth, not when you want to seem serious.",
          "Sub-questions and real steps signal a topic that can carry the runtime.",
          "Expect a slow build and higher production cost from long-form video.",
          "Plan long videos in themed groups so they reinforce each other.",
          "A single honest short beats a padded long video every time.",
        ],
      },
    ],
  },
];
