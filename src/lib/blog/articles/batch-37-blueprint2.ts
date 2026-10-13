import {
  Activity,
  BookOpen,
  Brain,
  Compass,
  Layers,
  Puzzle,
  Repeat,
  Search,
  Target,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch37: BlogPost[] = [
  {
    slug: "blueprint2-prompt-ai-channel-audit",
    title: "Prompting AI to Audit a Channel: A Working Method",
    excerpt:
      "A strong channel audit prompt hands the model a defined dataset, sharp questions, and an output format. Here is a method that returns findings you can use.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "An effective channel audit prompt gives the model a defined dataset, a specific set of questions, and a format for the answer. Vague instructions like 'analyze my channel' produce paragraphs that read well and tell you nothing you can act on. The model does not know your channel at all.",
          "What the model knows is patterns in the text you paste and whatever it absorbed during training. Your job is to decide which material it sees and what you want back. Everything else in a good audit follows from those two decisions.",
        ],
      },
      {
        heading: "Give the model a dataset, not a vibe",
        paragraphs: [
          "Paste the actual material. Titles, view counts, upload dates, retention notes, top comments, and a few transcripts will do. The model can only reason about what sits in the prompt or its training data, and its training data stops well before your last fifty uploads.",
          "Label the columns and keep the units honest. A table that mixes total views with average views in one column pushes the model toward answers that sound confident and are quietly wrong. Five minutes cleaning the input saves an hour untangling nonsense later.",
        ],
      },
      {
        heading: "Ask for findings, not summaries",
        paragraphs: [
          "A summary restates what you pasted. A finding names a pattern and points to the evidence behind it. Ask for the second one and require the model to cite which rows support each claim.",
          "Force specificity by asking for a small number of observations, say three, ranked by how much they matter. When the model has to choose, the filler drops away and the real signal has room to show.",
        ],
      },
      {
        heading: "Constraints that push past the obvious",
        bullets: [
          "Name the comparison: 'contrast my last ten long videos with my last ten shorts on retention, not on raw views.'",
          "Set a boundary: 'do not mention upload frequency unless a row shows it actually moved performance.'",
          "Request the counter-case: 'list one pattern that would disprove your main finding.'",
          "Ask for a next step: 'give me one test I can run next month to check the top finding.'",
        ],
        paragraphs: [
          "Constraints do more work than encouragement. Telling the model what to ignore removes the safe, generic observations it reaches for first when it has no direction.",
        ],
      },
      {
        quote:
          "Ask a model to summarize and you get a mirror. Ask it to choose and defend, and you start to get analysis.",
      },
      {
        heading: "An output shape worth reusing",
        paragraphs: [
          "State the role, the data, the questions, and the output format in that order. A prompt that opens with 'You are a retention analyst' and then hands over a table gives the model a frame before it reads a single row.",
          "End with the output contract. 'Return five bullets, each with a claim, the rows that support it, and a confidence level of low, medium, or high.' The contract is what makes each answer checkable rather than merely plausible.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Paste real data and label it clearly, because the model cannot see your channel.",
          "Ask for ranked findings with evidence instead of broad summaries.",
          "Use constraints and counter-cases to strip out generic filler.",
          "Always request a fixed output format so you can verify each claim.",
        ],
        paragraphs: [
          "Run the same prompt after your next upload and compare the results. An audit earns its keep when you repeat it, not when you run it once.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-structured-output-channel-analysis",
    title: "Structured Output Prompts for Channel Analysis",
    excerpt:
      "Structured output prompts turn AI channel analysis into rows you can sort and score. Learn the schemas, the field names, and the traps that break them.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A structured output prompt tells the model to answer in a fixed shape, usually JSON or a labeled list, so each response lands in the same fields. That shape is what lets you compare one video to the next instead of reading a fresh essay every time.",
          "Loosen the format and the model invents a new structure with every run. It drifts. You spend the evening reformatting instead of reading, and comparison becomes impossible.",
        ],
      },
      {
        heading: "Why a fixed shape matters",
        paragraphs: [
          "Free text hides inconsistency. Two answers can sound identical and mean different things. A schema forces the model to commit: this is the hook type, this is the drop-off minute, this is the suggested fix. Commitment is what makes the claim testable.",
          "Because the fields never move, you can sort, count, and chart the output. Analysis is comparison, and comparison needs the same columns on every row.",
        ],
      },
      {
        heading: "A schema that covers the basics",
        bullets: [
          "hook_type: a short label such as question, bold claim, or cold open.",
          "retention_risk: the minute where viewers most likely left.",
          "evidence: the specific row or transcript line behind the claim.",
          "confidence: low, medium, or high, never left blank.",
          "next_test: one concrete change to try on the next upload.",
        ],
        paragraphs: [
          "Keep the field names plain and stable across runs. Renaming a field between prompts silently breaks every comparison you built on top of it.",
        ],
      },
      {
        heading: "The traps to avoid",
        paragraphs: [
          "The first trap is the open field. A field labeled 'notes' invites the model to ramble, and rambling text is exactly what you were trying to escape when you moved to a schema.",
          "The second trap is a schema with too many fields. Ten required values push the model to fill blanks with guesses. Six fields it can answer well beat twelve it has to invent.",
        ],
      },
      {
        quote:
          "A schema is a promise about where each answer will live. Break the promise and you are back to reading prose.",
      },
      {
        heading: "Making the model stick to it",
        paragraphs: [
          "Repeat the schema in the prompt and ask the model to return nothing else. If your tooling supports it, request valid JSON and validate the response before you trust a single field.",
          "When a field comes back empty or vague, treat that as a signal. Either the data did not support the field or the field was poorly defined. Fix the prompt, not the output by hand.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A fixed schema turns analysis into rows you can compare.",
          "Keep field names stable, since renaming breaks your comparisons.",
          "Avoid open fields and oversized schemas that invite guesses.",
          "Validate the output and repair the prompt when a field keeps failing.",
        ],
        paragraphs: [
          "Start with four fields, run the prompt on ten videos, then add a field only when you find yourself wanting to sort by it.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-few-shot-prompting-niche-detection",
    title: "Few-Shot Prompting to Detect a Channel Niche",
    excerpt:
      "Few-shot prompting teaches a model your definition of a niche by example. Three labeled cases usually beat a paragraph of explanation about the topic.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Few-shot prompting means showing the model a few worked examples before you ask it to do the task. For niche detection, you label three or four channels as belonging to a niche or not, then ask the model to classify a new one the same way.",
          "Examples carry meaning that definitions miss. 'Fitness channel' means something different to everyone, but two labeled cases pin down where you draw the line.",
        ],
      },
      {
        heading: "Why examples beat adjectives",
        paragraphs: [
          "Ask the model for 'a lifestyle channel' and it will guess at the edges. Show it that food vlogs count while travel vlogs do not, and the boundary becomes concrete enough to reuse.",
          "A definition lists traits. An example resolves conflicts between those traits, which is where most of the real work happens.",
        ],
      },
      {
        heading: "Building the example set",
        bullets: [
          "Pick examples that sit near the boundary, not obvious cases the model would get anyway.",
          "Label both sides: include channels that clearly fit and channels that clearly do not.",
          "Keep the format identical across examples so the pattern is easy to copy.",
          "Use three to five examples, then stop and test before adding more.",
        ],
        paragraphs: [
          "Easy examples waste tokens. The value sits in the hard cases, the channels that could go either way without a clear rule.",
        ],
      },
      {
        quote:
          "One clear boundary example teaches more than a paragraph of adjectives ever will.",
      },
      {
        heading: "Testing the classification",
        paragraphs: [
          "Hold back a few channels and see whether the model sorts them the way you would. If it misses, the fix is usually a new example on the edge, not a longer instruction.",
          "Track where it errs. Repeated mistakes in one direction tell you the boundary is still blurry and needs one more labeled case before it holds.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Show labeled examples instead of relying on adjective definitions.",
          "Choose edge cases, since obvious ones teach the model nothing new.",
          "Keep the example format identical so the pattern is easy to follow.",
          "Test on held-back channels and add an example where it fails.",
        ],
        paragraphs: [
          "Niche labels drift as a channel grows, so revisit the examples each quarter and relabel any that no longer fit.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-prompt-chaining-channel-analysis",
    title: "Prompt Chaining vs One Shot for Channel Analysis",
    excerpt:
      "Prompt chaining splits channel analysis into steps a model can handle one at a time. A single big prompt is faster, and it also fails faster. Here is the trade.",
    date: "2024-12-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A single prompt asks the model to do the whole job at once. Prompt chaining breaks the job into steps, where the output of one prompt becomes the input of the next. The single prompt is quicker to write. The chain is easier to debug.",
          "Neither wins on principle. The right choice depends on how many distinct jobs your analysis actually contains and how much you need to check along the way.",
        ],
      },
      {
        heading: "Where one shot works",
        paragraphs: [
          "Use one prompt when the task is narrow. Classifying a hook or summarizing a transcript is a single job, and splitting it just adds overhead between calls.",
          "One shot also keeps context in one place. When the steps are tightly coupled, a chain can lose the thread between calls and produce a second step that quietly ignores the first.",
        ],
      },
      {
        heading: "Where a chain earns its keep",
        bullets: [
          "Extract first: pull titles, retention notes, and comments into a clean table.",
          "Classify second: label each video by format, topic, and hook style.",
          "Analyze third: look for patterns across the labeled rows.",
          "Recommend last: turn the patterns into a small set of tests.",
        ],
        paragraphs: [
          "Each step has a clear input and a checkable output. When something looks wrong, you know exactly which call to fix instead of reworking one giant prompt and hoping the fix lands.",
        ],
      },
      {
        quote:
          "A chain is a set of small promises. When one breaks, you can see which one.",
      },
      {
        heading: "Keeping the chain from drifting",
        paragraphs: [
          "Pass forward only what the next step needs. Dumping the entire previous output into the next prompt adds noise and invites the model to latch onto a stray detail that never mattered.",
          "Write down what each step must produce. A chain without contracts turns into a game of telephone where the last step barely resembles the first.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use one prompt for narrow jobs and a chain for multi-stage ones.",
          "Give each step a defined input and a checkable output.",
          "Pass forward only the fields the next step needs.",
          "Debug the single broken link instead of rewriting the whole prompt.",
        ],
        paragraphs: [
          "Start with a chain of three steps and merge them only where the handoffs keep losing information.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-context-channel-data-prompts",
    title: "Feeding Channel Data Into AI Prompts Without Waste",
    excerpt:
      "Channel data prompts only work when the model sees the right rows. Learn what to include, what to trim, and how to keep the signal above the noise.",
    date: "2025-03-23",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A channel data prompt is only as good as the rows you feed it. Include too little and the model fills gaps with assumptions. Include everything and the real signal drowns in noise. The skill is choosing the middle.",
          "Most teams err toward dumping every export into the prompt and hoping the model sorts it out. It rarely does. The answer ends up shaped by whichever rows happened to catch the model's attention.",
        ],
      },
      {
        heading: "Start from the question",
        paragraphs: [
          "Let the question decide the data. If you want to know why retention drops early, include opening lines, thumbnail text, and first-minute timestamps. View totals from three years ago will not help.",
          "Work backward from the answer you need. Every field in the prompt should have a reason for being there, and you should be able to say what it would change.",
        ],
      },
      {
        heading: "What usually earns a place",
        bullets: [
          "Titles and thumbnails, because packaging shapes the click.",
          "Retention curves or the minute where viewers leave.",
          "Top comments that explain a reaction in the viewer's own words.",
          "Upload dates, so you can spot seasonal effects.",
          "The format and length of each video, as a control.",
        ],
        paragraphs: [
          "That set covers most questions about why a video performed the way it did, and each item maps to something you can change.",
        ],
      },
      {
        quote:
          "A prompt is a small room. Only bring in what the conversation needs.",
      },
      {
        heading: "Trimming without losing meaning",
        paragraphs: [
          "Cut rows the question does not touch and trim transcripts to the parts that matter. A full hour of speech usually has two or three lines that explain the outcome.",
          "Keep enough context that the model can see the shape of the data. Stripping everything down to a single number removes the pattern along with the noise.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose data by working backward from the question.",
          "Include packaging, retention, comments, timing, and format for most audits.",
          "Trim transcripts to the lines that carry the explanation.",
          "Keep enough rows that the model can see the pattern.",
        ],
        paragraphs: [
          "When in doubt, run the prompt with a lean set first and add a field only when the answer clearly needs it.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-prompt-content-gap-analysis",
    title: "Prompting AI to Find Content Gaps in a Channel",
    excerpt:
      "Content gap analysis prompts compare what a channel covers with what its audience asks for. The trick is giving the model both sides of that comparison.",
    date: "2025-07-05",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A content gap prompt asks the model to find topics your channel covers thinly compared with what viewers want. To do that honestly, the model needs two lists: what you have published and what your audience keeps asking for.",
          "Give it only the first list and it will invent demand. Give it both and it can point to a real gap instead of a topic that merely sounds missing.",
        ],
      },
      {
        heading: "Build both sides",
        paragraphs: [
          "On the supply side, list your recent topics, formats, and lengths. On the demand side, pull recurring questions from comments, search suggestions, and community posts.",
          "The gap lives where demand is loud and supply is quiet. Without both columns, you are guessing which side is actually missing.",
        ],
      },
      {
        heading: "Asking for gaps that make sense",
        bullets: [
          "Name the audience the gap serves, so the model does not chase a topic nobody there wants.",
          "Cap the list at three gaps, ranked by how often the demand appears.",
          "Ask for the evidence behind each gap, such as a repeated comment or search term.",
          "Request one video idea per gap that fits your current format.",
        ],
        paragraphs: [
          "A long list of gaps is easy to generate and hard to act on. A short ranked list is what actually changes your calendar.",
        ],
      },
      {
        quote:
          "A gap is not a topic you skipped. It is a topic you skipped that your audience keeps asking about.",
      },
      {
        heading: "Checking the gaps against reality",
        paragraphs: [
          "Before you film, search your own archive again. Some gaps turn out to be topics you covered and buried under a weak title, which is a packaging problem rather than a content one.",
          "Ask whether the demand is durable or a passing spike. A question that trends for one week is a different opportunity than one that returns every month.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Feed the model both your coverage and your audience demand.",
          "Ask for a short ranked list with evidence, not a long brainstorm.",
          "Check whether a gap is really a packaging or titling problem.",
          "Separate durable demand from a one-week spike before committing.",
        ],
        paragraphs: [
          "Revisit the gap list each month. Demand shifts, and a gap you ignored in spring may be the obvious move by fall.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-prompt-competitor-channel-analysis",
    title: "Prompts for Analyzing a Competitor Channel Honestly",
    excerpt:
      "Competitor channel analysis prompts go wrong fast when the model only sees winners. Feed it the full record and ask for causes you can actually test.",
    date: "2025-10-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A competitor channel analysis prompt works when the model sees the full record, including the videos that flopped. Show it only the hits and it will explain success with traits that also describe the flops.",
          "The honest version compares winners and losers on the same channel, then asks what actually separates them rather than what the channel always does.",
        ],
      },
      {
        heading: "Collect the whole record",
        paragraphs: [
          "Pull a stretch of uploads with their view counts and dates, not just the top ten. Include the quiet videos. Those are the control group that keeps the analysis from turning into flattery.",
          "Note the format, length, and thumbnail style for each one so the model has something to compare beyond the raw numbers.",
        ],
      },
      {
        heading: "Asking for causes, not compliments",
        bullets: [
          "Ask which traits appear in the winners but not the losers.",
          "Require the model to flag any trait shared by both, since those explain nothing.",
          "Request the confidence behind each pattern and the rows that support it.",
          "Ask for one assumption you could test on your own channel.",
        ],
        paragraphs: [
          "A trait that shows up in every video, hit or miss, is a habit, not a cause. The prompt should force the model to separate the two before it draws a conclusion.",
        ],
      },
      {
        quote:
          "If a pattern also describes the flops, it is not a reason for success. It is just something the channel always does.",
      },
      {
        heading: "Turning rival analysis into your plan",
        paragraphs: [
          "Copying a competitor's format rarely transfers, because their audience differs from yours. What travels is the underlying structure: the hook shape, the pacing, the promise in the title.",
          "Test one borrowed structure on your own audience before you rebuild your approach around it. Their result is a hypothesis for you, not a template.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Include flops so winners have a control group.",
          "Look for traits that separate hits from misses, not traits common to all.",
          "Ask for confidence and supporting rows for each pattern.",
          "Treat competitor success as a hypothesis to test, not a template to copy.",
        ],
        paragraphs: [
          "Recheck the competitor every quarter. What worked for them last year may be a saturated move by now.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-system-prompt-channel-analyst",
    title: "Writing a System Prompt for a Channel Analyst",
    excerpt:
      "A channel analyst system prompt sets the model's role, limits, and output rules before any data arrives. A clear one keeps every later answer on track.",
    date: "2026-01-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "blueprints", "analysis"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "A system prompt is the standing instruction a model reads before every request. For channel analysis, it sets the role, the boundaries, and the output rules once, so you do not repeat them in every message.",
          "Written well, it acts like a brief that keeps a long session coherent. Written badly, it adds noise the model has to work around on every turn.",
        ],
      },
      {
        heading: "What belongs in it",
        paragraphs: [
          "Put the role first, then the constraints, then the format. 'You are a channel analyst who works only from the data provided' tells the model its job and its limits in one line.",
          "Add the rules that must never slip: cite the row behind a claim, say when the data cannot support an answer, and never guess at numbers that are not present.",
        ],
      },
      {
        heading: "Rules worth keeping standing",
        bullets: [
          "Work only from provided data and name the row behind each claim.",
          "State clearly when the data cannot answer a question.",
          "Keep the output in the defined format on every reply.",
          "Avoid advice that depends on information you were not given.",
        ],
        paragraphs: [
          "Standing rules beat repeated reminders. Set them once and the model carries them through a long back-and-forth without you restating the basics.",
        ],
      },
      {
        quote:
          "A good system prompt is a standing brief. It says the same thing every time so you never have to.",
      },
      {
        heading: "Keeping it short",
        paragraphs: [
          "Every extra line in a system prompt competes for the model's attention. Keep it under a page and cut anything that restates a rule already covered.",
          "If a rule keeps getting ignored, move it to the end where the model reads it last, or restate it in the user message for that specific task.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set role, constraints, and output format once in the system prompt.",
          "Include a rule to cite data and to admit when data is missing.",
          "Keep it short, since extra lines dilute the important ones.",
          "Move repeat offenders to the end or restate them per task.",
        ],
        paragraphs: [
          "Treat the system prompt as a living brief. Adjust it whenever the same problem shows up across unrelated sessions.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-prompt-evaluation-channel-insights",
    title: "How to Test Whether an Analysis Prompt Works",
    excerpt:
      "Prompt evaluation tells you if an analysis prompt returns real signal or confident noise. Build a small answer key and score each run against it honestly.",
    date: "2026-05-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "To test an analysis prompt, collect a small set of inputs where you already know the right answer, then run the prompt and score the output against that answer key. A prompt that reads well and scores poorly is a prompt that flatters you.",
          "The key does not need to be perfect. It needs to be fixed in advance, so you cannot move the target after you have seen the result.",
        ],
      },
      {
        heading: "Build a small answer key",
        paragraphs: [
          "Pick ten videos you understand well. For each, write down the one finding a good analyst should reach, such as the reason retention dropped at minute four.",
          "Keep the key short and specific. If you cannot state the expected finding in a sentence, the question may be too vague for the model to answer at all.",
        ],
      },
      {
        heading: "Score the output, not the vibe",
        bullets: [
          "Hits: findings that match the key or add a defensible one.",
          "Misses: findings that contradict the key or ignore the obvious cause.",
          "Fabrications: claims with no row or transcript behind them.",
          "Format breaks: replies that ignore the requested shape.",
        ],
        paragraphs: [
          "Track the counts across prompt versions. A change that raises hits and lowers fabrications is progress, even if the prose reads a little rougher.",
        ],
      },
      {
        quote:
          "A prompt you have not tested is a guess wearing a confident face.",
      },
      {
        heading: "Iterate on one thing at a time",
        paragraphs: [
          "Change a single element per round, then rerun the same key. Adjust the role, then the examples, then the format, so you can tell which change moved the score.",
          "When two versions tie, keep the shorter one. Less instruction leaves less room for the model to misread you.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fix a small answer key before you run any prompt.",
          "Score hits, misses, fabrications, and format breaks separately.",
          "Change one element per round and rerun the same test.",
          "When scores tie, prefer the shorter prompt.",
        ],
        paragraphs: [
          "Retest after any model update. A prompt that scored well last month may behave differently on the next version.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-grounding-ai-channel-claims",
    title: "How to Ground AI Analysis in Real Channel Data",
    excerpt:
      "Grounding AI analysis means every claim traces back to a row in your data. Without that link, a model produces confident statements you cannot verify.",
    date: "2026-09-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Grounding means tying each claim the model makes to a specific row, line, or timestamp in the data you supplied. Ungrounded analysis reads well and cannot be checked, which is the worst combination when a decision depends on it.",
          "The model will happily produce either kind. The prompt decides which one you get, and so does the habit of checking what comes back.",
        ],
      },
      {
        heading: "Require the source line",
        paragraphs: [
          "Ask the model to attach a citation to every claim. For a table, that is the row identifier. For a transcript, that is the timestamp and the quoted words.",
          "A claim with no citation is a claim you cannot act on. Make the model label it as unsupported rather than let it pass as a finding.",
        ],
      },
      {
        heading: "Signs an answer drifted off the data",
        bullets: [
          "The claim mentions a metric you never supplied.",
          "Round numbers appear that match no row, a sign of invention.",
          "The reason sounds reasonable but cites nothing.",
          "The model explains a trend using data from a different period.",
        ],
        paragraphs: [
          "Catch these early by spot-checking three citations per run. If any one points to a row that does not say what the claim requires, slow down and fix the prompt.",
        ],
      },
      {
        quote:
          "If a claim cannot point to a row, it is an opinion. Opinions are fine, as long as they are labeled.",
      },
      {
        heading: "Designing for verifiability",
        paragraphs: [
          "Give the model row ids and keep the source table in front of it. When the data is short, paste it whole. When it is long, label the parts so a reference stays meaningful.",
          "Then read the output the way a reviewer would. Open the row behind each finding and confirm it says what the model claims. A few minutes of checking catches most invented detail.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Require a row or timestamp behind every claim.",
          "Make the model mark unsupported claims instead of hiding them.",
          "Spot-check citations for invented metrics and round numbers.",
          "Keep data labeled so references stay meaningful as it grows.",
        ],
        paragraphs: [
          "Grounding is a habit, not a one-time setting. Recheck it whenever the data or the model changes.",
        ],
      },
    ],
  },
];
