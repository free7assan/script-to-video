import {
  Film,
  MessageSquare,
  Target,
  Clock,
  Puzzle,
  Scissors,
  Repeat,
  PenLine,
  Search,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch12: BlogPost[] = [
  {
    slug: "hook2-tutorial-hooks-vs-vlog-hooks",
    title: "Tutorial Hooks vs Vlog Hooks: Same Job, Different Clock",
    excerpt:
      "Tutorial hooks and vlog hooks want the same first ten seconds but earn it two different ways. Here is how to write each without killing retention.",
    date: "2024-02-06",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A tutorial hook sells a destination. A vlog hook sells a moment. Both get roughly ten seconds to earn the next ten, and they spend those seconds in opposite directions.",
          "I write tutorial and vlog openings every week, and the fastest way I have found to sink a good video is to borrow the wrong style. The topic survives the swap. The retention does not.",
        ],
      },
      {
        heading: "What a tutorial hook owes the viewer",
        paragraphs: [
          "A tutorial hook has to answer one question before anything else: what will I be able to do by the end? Viewers arrive with a task, not a mood. If the opening stays vague for even a few sentences, they jump to the next search result that promises something concrete.",
          "Concrete means a finished thing. 'Build a working landing page' or 'fix the export that keeps failing' lands harder than 'learn about web design'. Name the tool when the tool is the point. Always name the outcome.",
          "The clock is the enemy here. Every second spent on atmosphere is a second the viewer spends wondering if the payoff exists. Tutorial viewers are patient once the promise is clear and ruthless when it is not.",
        ],
      },
      {
        heading: "What a vlog hook owes the viewer",
        paragraphs: [
          "A vlog hook has no task to satisfy. The viewer came for a person and a feeling. That means the opening runs on consequence: something is happening, and the outcome is not obvious yet.",
          "The strongest vlog openings start mid-action. You are already driving, already arguing, already walking into the meeting. Orientation arrives second. A vlog that opens by explaining its setup sounds like a tutorial and loses the mood in the same breath.",
          "Vlogs also get to be slower on purpose. Three calm sentences that build a scene can outperform one rushed promise, because the viewer is not shopping for information. They are deciding whether they like being here.",
        ],
      },
      {
        quote:
          "Tutorial hooks trade tension for clarity. Vlog hooks trade clarity for tension. Pick the trade your format can actually afford.",
      },
      {
        heading: "Where the two formats collide",
        paragraphs: [
          "Some videos teach and carry a personality at the same time. Those are stuck between the two styles, and the fix is sequencing rather than choosing. Promise first, scene second. Give one clean sentence about the outcome, then drop into the moment that shows why it matters.",
          "Commentary sits closer to the vlog, with different fuel. Its currency is a claim, not a mood, and that claim has to be arguable. That format deserves its own breakdown, which I have written separately.",
          "The mistake I see most often is stacking both openings at full volume. A promise sentence, then a dramatic scene, then a second promise. That does not double the pull. It doubles the distance before anything gets good.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tutorial hooks lead with the finish line and name the result in the first sentence.",
          "Vlog hooks lead with momentum and open inside a scene that is already moving.",
          "A tutorial can afford a slower second line once the promise lands. A vlog cannot.",
          "Mixed formats should stack the promise first and the scene immediately behind it.",
          "Match the opening to the task, not to the creator's habit of always writing one way.",
        ],
      },
      {
        heading: "A five-second mute test",
        paragraphs: [
          "Mute the first five seconds and watch the frame alone. A tutorial hook should still read as a clear promise on screen. A vlog hook should still read as a scene in progress.",
          "When a muted tutorial looks like a vlog, or a muted vlog looks like a title card, the opening is fighting its own format. Fix the mismatch before you touch the thumbnail.",
        ],
      },
    ],
  },
  {
    slug: "hook2-commentary-hook-essentials",
    title: "Commentary Hooks: Open With a Take Worth Arguing",
    excerpt:
      "Commentary hooks live or die on whether your take is worth arguing with. These opening moves turn an opinion into a reason to keep watching.",
    date: "2024-05-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A commentary hook works like a claim in a debate, not a promise in a tutorial. It has to be specific, defensible, and slightly risky. If nobody could disagree with your first sentence, you have written a summary, not a hook.",
          "I test every commentary opening with one question: who would push back on this? If the answer is nobody, I rewrite the line.",
        ],
      },
      {
        heading: "The take has to be arguable",
        paragraphs: [
          "Commentary runs on friction. The viewer leans in when they sense a position they have not settled yet, not when they hear a fact they already accept. Agreement is comfortable, and comfortable is forgettable.",
          "That does not mean you need a hot take. It means you need a specific one. 'Most editing advice solves the wrong problem' is arguable. 'Editing is important' is wallpaper.",
        ],
      },
      {
        heading: "Name the thing you are arguing about",
        paragraphs: [
          "Vague targets kill commentary hooks. If your opening says 'the industry gets this wrong' without naming what, the viewer has nothing to grip. Name the practice, the tool, the trend, or the advice you are contradicting.",
          "Specificity also protects you. A named target invites a real response. An unnamed one invites the viewer to assume you are talking about whatever annoys them, which usually means they leave.",
        ],
      },
      {
        quote:
          "If your opening line cannot be argued with, it cannot hold attention. Agreement is comfortable, and comfortable is forgettable.",
      },
      {
        heading: "Front-load the conflict, not the disclaimer",
        paragraphs: [
          "Many commentary creators spend the opening hedging. They say the topic is complicated, that reasonable people disagree, that context matters. All true, all boring. Put the nuance at minute six, where the people still watching have earned it.",
          "The opening should state the claim flat, then earn the caveats later. Front-loaded caveats read as fear, and fear is the sound of a script that does not believe its own argument.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open with a claim someone could actually dispute, not a definition.",
          "Name the specific practice or target you are arguing about.",
          "Save the caveats for the middle and state the take clean at the top.",
          "Test the line by naming who would push back. No pushback means no pull.",
        ],
      },
      {
        heading: "The format mismatch to avoid",
        paragraphs: [
          "The most common commentary failure is borrowing a tutorial opening. It promises to explain a topic and never takes a position, so the viewer learns something and feels nothing.",
          "Commentary is not a lecture with attitude. It is an argument you are willing to defend on camera. Write the first line as if a friend just disagreed with you, and the rest usually follows.",
        ],
      },
    ],
  },
  {
    slug: "hook2-tutorial-promise-hook",
    title: "The Tutorial Promise Hook: Say What They Build",
    excerpt:
      "A tutorial promise hook tells viewers exactly what they will have at the end. Here is how to write one that survives the first thirty seconds.",
    date: "2024-08-13",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A tutorial promise hook states the deliverable, not the topic. The viewer should be able to repeat what they are about to get after hearing one sentence, and it should be a thing they can picture, not a subject they can only nod at.",
          "I have rewritten hundreds of tutorial intros, and the pattern is boringly consistent. The videos that hold retention name a finished artifact in the first line. The ones that do not, do not.",
        ],
      },
      {
        heading: "One promise, stated once",
        paragraphs: [
          "The instinct is to stack promises because each one sounds useful. In practice, three promises read as zero. The viewer cannot hold three goals at once, so they hold none and wait to see what the video is really about.",
          "Pick the single outcome you would put in the thumbnail. Say it once, clearly, at the top. Everything else the video covers becomes a bonus rather than a competing claim on attention.",
        ],
      },
      {
        heading: "Make the promise visual",
        paragraphs: [
          "Words like 'understand' and 'master' are invisible. Show the finished object, the fixed error, the before and after. A promise the viewer can see becomes a promise they can want.",
          "This is why 'build a quiz app in 20 minutes' beats 'learn React state'. One is a picture. The other is a category. Categories do not hook people.",
        ],
      },
      {
        quote:
          "A promise you can picture becomes a promise you can want. Categories do not hook anyone.",
      },
      {
        heading: "The promise has to match the payoff",
        paragraphs: [
          "A promise hook is a contract. If you open with a finished app and deliver half of it, the viewer remembers the gap longer than the lesson. Understate the deliverable and overdeliver it.",
          "The fix is to check the script's final beat against the opening line before you record. If the ending does not literally produce the thing you promised, soften the promise or extend the build.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "State the deliverable, not the topic, in the first sentence.",
          "Promise one thing and let the rest of the video become bonus value.",
          "Choose an outcome you can show on screen, not a skill the viewer cannot picture.",
          "Audit the ending against the opening so the contract is paid in full.",
        ],
      },
      {
        heading: "When a promise hook is the wrong choice",
        paragraphs: [
          "Promise hooks fail on story-driven how-tos where the value is the journey, not the artifact. If the lesson is about judgment, a delivered file undersells it.",
          "In those videos, swap the promise for a scene that shows the problem. The tutorial structure stays. Only the opening changes.",
        ],
      },
    ],
  },
  {
    slug: "hook2-vlog-in-medias-res-opening",
    title: "Vlog Hooks: Start in the Middle of Your Day",
    excerpt:
      "Vlog hooks work differently than tutorial or commentary hooks. Starting mid-moment beats starting at the beginning, and here is the timing that proves it.",
    date: "2024-11-04",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A vlog hook should drop the viewer into the middle of something that is already happening. Not the start of your day, not the plan for the video, but the moment where the stakes already exist and the outcome is still open.",
          "This is the oldest trick in narrative writing, and it works on a phone camera for the same reason it works in a novel. People lean toward unfinished situations.",
        ],
      },
      {
        heading: "Why the middle beats the beginning",
        paragraphs: [
          "Beginnings are admin. Wake up, coffee, here is what we are doing today. The viewer has no reason to care yet, because nothing is at risk. The middle skips the admin and hands them a live wire.",
          "Compare two vlog openings. 'Today I am heading to the studio' is a schedule. 'The client just moved the deadline to tomorrow, so we are filming everything tonight' is a scene. Same footage, different hook.",
        ],
      },
      {
        heading: "Pick a moment with an unresolved outcome",
        paragraphs: [
          "Not every mid-day moment qualifies. The scene needs a question the viewer wants answered. Will the shoot finish? Will the deal close? Will the thing they are carrying to the car survive the stairs?",
          "You can manufacture this even on a slow day. If nothing is at stake, find the smallest real tension and open there. A leaking cooler beats a summary of your errands.",
        ],
      },
      {
        quote:
          "Beginnings are admin. The middle hands the viewer a live wire and lets them hold it.",
      },
      {
        heading: "The two-line rule for vlog openings",
        paragraphs: [
          "Line one plants the scene. Line two raises the question. That is the whole structure. Anything beyond two lines before the scene starts is you talking over the moment you should be showing.",
          "I keep this rule because it forces me to cut the throat-clearing. If I cannot get from 'we are mid-crisis' to 'here is the crisis' in two lines, I have not found the hook yet.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open mid-scene, not at the start of the day or the plan for the video.",
          "Give the scene a question the viewer wants answered before you cut.",
          "Keep the setup to two lines and let the footage carry orientation.",
          "On slow days, find the smallest real tension and open there instead.",
        ],
      },
      {
        heading: "The vlog-only warning",
        paragraphs: [
          "This move does not transfer cleanly to tutorials. A tutorial that opens mid-scene without a promise confuses the viewer who came to learn something.",
          "Borrow the momentum, not the mystery. In a tutorial you state the outcome first, then borrow the mid-scene energy to prove why it matters.",
        ],
      },
    ],
  },
  {
    slug: "hook2-commentary-steelman-hook",
    title: "Commentary Hooks: Steelman the Other Side First",
    excerpt:
      "The fastest commentary hook states the strongest version of the view you disagree with. Do that and your take earns attention instead of demanding it.",
    date: "2025-02-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "The strongest way to open a commentary video is to state the opposite case better than its own supporters do. Steelman it, give it its best shot, then show where it breaks. That structure buys you credibility in the first fifteen seconds.",
          "It feels backwards. The instinct is to open with your conclusion, loud. But a loud conclusion reads as a banner, and banners get scrolled past. A fair version of the other side reads as confidence.",
        ],
      },
      {
        heading: "Steelmanning buys credibility fast",
        paragraphs: [
          "When you give the opposing view its best version, two things happen. Supporters of that view keep watching because you did not caricature them. Skeptics keep watching because you clearly know the terrain.",
          "That covers the whole audience. Caricature only keeps the people who already agree, which is the smallest and least valuable group in commentary.",
        ],
      },
      {
        heading: "Then turn the screw",
        paragraphs: [
          "The steelman is a setup, not the argument. Once the strongest case is on the table, you show the crack: the hidden assumption, the missing data, the cost nobody priced in.",
          "The turn has to be earned by the setup. If you skip the fair version, the turn reads as a cheap shot, and the viewer discounts everything after it.",
        ],
      },
      {
        quote:
          "A fair version of the other side reads as confidence. A caricature reads as fear of the argument.",
      },
      {
        heading: "Where steelmanning goes wrong",
        paragraphs: [
          "Some creators steelman so well they never turn. The opening becomes a neutral explainer and the video has no thesis, which puts it back in tutorial territory without the payoff.",
          "Others build a strawman and call it a steelman. The tell is length. If your version of the other side is one weak sentence and yours is a paragraph, you have not done the work.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open by stating the opposing view at its strongest, not its weakest.",
          "Use the fair version to buy trust with both sides of the audience.",
          "Earn the turn before you take it, or the take reads as cheap.",
          "Keep your steelman proportionate to your own argument, or it is a strawman.",
        ],
      },
      {
        heading: "Compatibility check",
        paragraphs: [
          "This structure works for commentary and almost nothing else. Tutorials do not want a counter-argument up front, and vlogs do not want a thesis at all. Keep the steelman where it belongs.",
          "On a commentary channel, though, it is the most reliable opening I know. It gets the right people to stay and the wrong people to leave early, which is exactly the trade you want.",
        ],
      },
    ],
  },
  {
    slug: "hook2-hook-length-by-format",
    title: "How Long Should a Hook Be? It Depends on Format",
    excerpt:
      "Hook length should follow the format, not a rule. Tutorial, vlog, and commentary hooks each need a different runtime before the payoff lands.",
    date: "2025-06-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings", "retention"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "There is no universal hook length. A tutorial hook can be one sentence. A vlog hook often needs three or four. A commentary hook lasts as long as the claim takes to land and not a beat longer.",
          "The number that matters is not seconds. It is the distance between the first line and the moment the viewer understands why they should stay. Keep that distance short for each format's own reason.",
        ],
      },
      {
        heading: "Tutorial hooks: short, because the promise is the payoff",
        paragraphs: [
          "A tutorial hook is done the moment the viewer knows the outcome. That usually takes one sentence, maybe two if you add proof. Stretch it and you are spending trust you have not earned yet.",
          "Watch for the second sentence that rephrases the first. If both sentences say the same promise, delete one. Redundancy reads as filler even when the meaning is fine.",
        ],
      },
      {
        heading: "Vlog hooks: long enough to build a scene",
        paragraphs: [
          "Vlogs need room because they are selling a mood, and moods take a few beats to set. Three to four lines that build a scene is normal and healthy. Cutting a vlog hook to one line often guts the feeling.",
          "The limit is orientation, not time. Once the viewer knows where they are and what is at stake, the hook is over. Extra lines after that point are just you narrating your own intro.",
        ],
      },
      {
        heading: "Commentary hooks: as long as the claim needs",
        paragraphs: [
          "Commentary has the widest range. A steelman opening might run twenty seconds. A hard claim can land in five. The variable is how much setup the argument needs before the turn.",
          "The rule I use: the hook ends when the viewer can predict the shape of the argument. Once they know what is being argued and roughly why, stop selling and start proving.",
        ],
      },
      {
        quote:
          "The right hook length is the distance between the first line and the moment the viewer understands why they should stay.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tutorial hooks close once the outcome is stated, usually one or two lines.",
          "Vlog hooks need three to four lines to establish scene and stakes.",
          "Commentary hooks run until the argument's shape is predictable, then stop.",
          "Cut any second sentence that only restates the first, in every format.",
        ],
      },
      {
        heading: "The overlong-hook tell",
        paragraphs: [
          "If you can delete the first line and the hook still works, it was too long. That is the simplest length test I know, and it catches roughly every bloated intro.",
          "Try it on your last upload. Cut the opening line in a draft and reread. If nothing is lost, the hook was padding. If something breaks, the line was doing real work.",
        ],
      },
    ],
  },
  {
    slug: "hook2-borrowed-vlog-hooks-for-tutorials",
    title: "Borrowing Vlog Hooks for Tutorials: One Condition",
    excerpt:
      "Vlog hooks can rescue a flat tutorial, but only under one condition. Here is when borrowing an opening style across formats actually works well.",
    date: "2025-10-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "You can borrow a vlog hook for a tutorial, but only if the scene you open with contains the lesson. The moment has to be both a hook and a preview of the problem, or the energy evaporates the second the tutorial starts.",
          "I tried this for a year before the condition clicked. The borrowed openings that worked all had the lesson physically visible in the scene. The ones that failed were just mood with a tutorial bolted on.",
        ],
      },
      {
        heading: "What transfers from vlogs",
        paragraphs: [
          "Two things transfer well: momentum and specificity. Starting mid-action gives a tutorial a pulse, and showing a real messy file beats describing a hypothetical one.",
          "The viewer gets proof that the problem is real before you explain the fix. That proof does work a promise line cannot, because it is evidence rather than a claim.",
        ],
      },
      {
        heading: "The one condition",
        paragraphs: [
          "The scene must contain the lesson. If you open on a failing export and the tutorial is about export settings, the scene is doing double duty and the borrow works. If you open on a failing export and the tutorial is about color grading, the scene is decoration.",
          "Decoration hooks fool you because they feel energetic. They get the click and lose the retention, because the viewer arrives at a lesson that has nothing to do with the thing that pulled them in.",
        ],
      },
      {
        quote:
          "A borrowed scene has to be the lesson and the hook at the same time. If it is only decoration, it gets the click and loses the viewer.",
      },
      {
        heading: "Where the borrowing breaks",
        paragraphs: [
          "Tutorial viewers tolerate a scene for a few seconds, then they want the path. Vlog viewers will sit in a scene for a minute. Borrow the pacing and you will lose the tutorial audience.",
          "So keep the scene short, name the outcome right after it, and then get to work. The borrow is a doorway, not a room. Two to three seconds of live problem, one sentence of promise, then the build.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Borrow a vlog hook only when the scene physically contains the lesson.",
          "Use the scene as evidence: show the real problem before you explain it.",
          "Keep the scene to a few seconds, then state the outcome and start.",
          "Reject decorative opening scenes, even when they look energetic on camera.",
        ],
      },
      {
        heading: "A quick gate before you record",
        paragraphs: [
          "Ask one question at the script stage: if I deleted the opening scene, would the tutorial teach the same thing? If yes, the scene is decoration. If no, the scene is the hook.",
          "That gate has saved me from more bad openings than any formula. It is fast, and it does not care how good the footage looked.",
        ],
      },
    ],
  },
  {
    slug: "hook2-one-first-line-three-formats",
    title: "One First Line, Three Formats: A Rewrite Test",
    excerpt:
      "Run one first line through three formats and the hook breaks differently each time. This rewrite test shows which format your opening really fits.",
    date: "2026-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Here is a test that tells you more about a hook than any retention chart. Write your first line in plain, neutral form, then rewrite it three ways: as a tutorial, as a vlog, as commentary. The version that comes easiest is usually the format you are actually making.",
          "I run this on every opening I am unsure about, and it takes about ten minutes. It has caught more mismatched videos than any analytics review.",
        ],
      },
      {
        heading: "Write the neutral version first",
        paragraphs: [
          "The neutral line is flat on purpose. 'Getting better at editing takes longer than people think.' No promise, no scene, no claim. Just the information your video contains.",
          "Starting flat matters because it stops you from solving format and content at the same time. You get the raw material down, then see which format bends it without breaking it.",
        ],
      },
      {
        heading: "Push it toward each format",
        paragraphs: [
          "As a tutorial, the line becomes a deliverable: 'Cut your edit time in half with three timeline habits.' As a vlog, it becomes a scene: 'I just spent six hours on a three-minute cut.' As commentary, it becomes a claim: 'Most editing time is wasted before you ever touch the timeline.'",
          "Notice that all three are true. They are the same fact wearing different clothes. That is the point. Format is a costume, not a different body.",
        ],
      },
      {
        quote:
          "The same fact can wear a tutorial costume, a vlog costume, or a commentary costume. Pick the one that makes you want to keep writing.",
      },
      {
        heading: "Compare the three drafts cold",
        paragraphs: [
          "Read all three out loud the next morning. The one that still feels alive is your opening. The other two felt fine the night before and will feel like work now.",
          "There is a secondary signal too. Whichever draft made you scribble the most follow-up lines is the format your brain already had in mind, even if you sat down to make something else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with a flat, neutral sentence before you choose a format.",
          "Rewrite the same fact as promise, scene, and claim to see what fits.",
          "Trust the draft that survives a cold read the next morning.",
          "If the wrong format wins, change the format rather than forcing the hook.",
        ],
      },
      {
        heading: "What the test exposes",
        paragraphs: [
          "Most often, the test reveals that you wrote a tutorial hook for a video that is really a vlog, or a vlog hook for something that should teach. The mismatch was invisible until the line had to do three jobs.",
          "That is the value. It is cheaper to discover the mismatch in a draft than after the upload, when the only feedback is a flat retention curve.",
        ],
      },
    ],
  },
  {
    slug: "hook2-hook-mismatch-diagnosis",
    title: "How to Spot a Hook Mismatch: Right Topic, Wrong Opening",
    excerpt:
      "Right topic, wrong opening is the most common retention leak. Learn to spot a hook mismatch before you publish the tutorial, vlog, or commentary.",
    date: "2026-05-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "openings"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A hook mismatch is when the opening promises the wrong format. The topic is fine, the thumbnail is fine, and the first thirty seconds still leak viewers, because the opening sold a tutorial to an audience that wanted a story, or the reverse.",
          "It is the hardest retention problem to see because everything else looks healthy. My last mismatch took three uploads to diagnose, and the fix was a single changed sentence.",
        ],
      },
      {
        heading: "Symptom one: the audience arrives, then leaves together",
        paragraphs: [
          "A mismatch shows up as a steep early drop that flattens fast. The people who stayed are the ones who wanted a different video than you advertised, so the curve settles at a smaller, more loyal base.",
          "That shape is different from a bad hook. A bad hook loses viewers gradually. A mismatch loses a chunk in the first fifteen seconds and then stabilizes, because the survivors turn out to be your real audience.",
        ],
      },
      {
        heading: "Symptom two: the comments argue about the wrong thing",
        paragraphs: [
          "Comments are a mismatch detector. If people debate your premise instead of your content, if they ask why you did not cover something the opening implied, the hook oversold a direction the video never took.",
          "I look for the phrase 'I thought this would be about', which is the clearest mismatch signal there is. The viewer told you exactly which opening they clicked for.",
        ],
      },
      {
        quote:
          "A bad hook loses viewers slowly. A mismatch loses them in a clump and leaves you wondering why the survivors are so few.",
      },
      {
        heading: "How to fix a mismatch without a rewrite",
        paragraphs: [
          "You rarely need to change the whole video. Change the opening so it promises what the video actually delivers. If the body is a vlog and the hook promised a tutorial, make the hook a scene.",
          "Then check the thumbnail against the new opening. Mismatches often start at the title and thumbnail, and an opening fix only works if the packaging agrees.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mismatch shows as a steep early drop that flattens into a small loyal base.",
          "Comments that debate your premise, not your content, confirm a mismatch.",
          "Fix the opening to match the body before you consider reshooting.",
          "Recheck the title and thumbnail, since mismatches often start there.",
        ],
      },
      {
        heading: "Prevention beats diagnosis",
        paragraphs: [
          "The cheap fix is to write the first line last, after the video exists. Then the opening cannot promise something the body never built, because you already know what the body did.",
          "I know that annoys people who like writing introductions first. Try it once on a video you have already shot. The opening usually gets shorter and truer in a single pass.",
        ],
      },
    ],
  },
  {
    slug: "hook2-hook-to-payoff-handoff",
    title: "From Hook to Payoff: Handing Off Attention by Format",
    excerpt:
      "The hook only buys the first ten seconds. Each format hands attention to the payoff differently, and getting the handoff wrong wastes a good open.",
    date: "2026-09-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A hook is a loan, not a gift. It borrows attention from the viewer, and the video has to pay it back with a payoff. The handoff between the two is where most good openings get wasted.",
          "I think about the handoff as its own beat, separate from the hook and separate from the body. Each format hands off differently, and mismanaging the seam costs more than a weak first line.",
        ],
      },
      {
        heading: "The handoff in tutorials",
        paragraphs: [
          "Tutorial handoffs should be almost invisible. The promise goes out in line one, and the build starts in line two. Any beat between them reads as delay, and delay is what makes people check the time.",
          "Show the first concrete step immediately. The viewer wants to feel motion toward the thing you promised. Even a five-second detour to explain the plan slows the handoff and costs you.",
        ],
      },
      {
        heading: "The handoff in vlogs",
        paragraphs: [
          "Vlogs hand off by resolving the scene's question. The hook opened a live moment, and the body either answers it or complicates it. The handoff is the cut that says 'here is where that is going'.",
          "The failure mode is a hard reset. The scene ends and the vlog suddenly becomes an itinerary. Keep one thread from the hook running through the next minute, even if the location changes.",
        ],
      },
      {
        heading: "The handoff in commentary",
        paragraphs: [
          "Commentary hands off at the turn. The hook sets up the claim or the steelman, and the body has to start proving it before the viewer loses the thread of the argument.",
          "The worst commentary handoff is a restatement. Repeating the hook in different words feels like progress and delivers nothing. Move straight into the evidence the claim depends on.",
        ],
      },
      {
        quote:
          "A hook borrows attention and the video pays it back. The handoff is the payment plan, and every format writes it differently.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the handoff as its own beat, not an accident between hook and body.",
          "Tutorials hand off by starting the first step immediately after the promise.",
          "Vlogs hand off by carrying one thread from the opening scene forward.",
          "Commentary hands off at the turn, moving into evidence instead of restating.",
        ],
      },
      {
        heading: "The seam test",
        paragraphs: [
          "Play the last line of your hook and the first line of your body back to back with nothing between them. If the pair sounds like two different videos, the handoff is broken.",
          "I do this in the edit bay before I record a fix. It takes seconds, and it catches the exact seam where a strong opening quietly stops mattering.",
        ],
      },
    ],
  },
];
