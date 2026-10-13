import { Activity, Brain, Feather, Layers, Puzzle, Repeat, Target, Users, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch86: BlogPost[] = [
  {
    slug: "aitools-what-prompt-engineering-means",
    title: "What Prompt Engineering Actually Means for Creators",
    excerpt:
      "Prompt engineering is how creators turn a rough idea into a request an AI tool can answer well. The basics are plainer than the name suggests.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "Prompt engineering is the practice of writing instructions for an AI tool so it returns something close to what you had in mind. For a creator, that means turning a foggy idea into a request specific enough to be useful on the first pass.",
          "The name sounds technical, but the work is mostly editorial. You decide what you want, name the details that matter, and say what to leave out. That is the whole job before you ever touch the output.",
        ],
      },
      {
        heading: "Why vague requests cost you time",
        paragraphs: [
          "A prompt like 'write me a video script' leaves the model to guess the topic, the length, the audience, and the tone. It will produce something, and that something will usually need a full rewrite before it resembles your intent.",
          "The fix is not a secret phrase. It is supplying the context the model cannot infer, so the first draft starts closer to your finish line. That context is often information you already hold in your head.",
          "Every round of guesswork costs you a read, a reaction, and another prompt. Creators who write tighter requests spend less time reacting to drafts and more time making the thing they set out to make.",
          "Over a month the difference compounds. Ten minutes saved on each request turns into hours you can spend on editing, shooting, or resting instead of re-explaining yourself to a tool.",
        ],
      },
      {
        quote: "A good prompt is a decision written down before the writing starts.",
      },
      {
        heading: "The parts of a request that carry the weight",
        bullets: [
          "The task, stated as a verb, so the model knows which action to take.",
          "The audience, because the same idea lands differently for a beginner and for an expert.",
          "The constraints, including length, format, and anything you want avoided.",
          "An example or two when a plain description keeps missing the target.",
          "The voice, described in concrete terms rather than vague mood words.",
        ],
        paragraphs: [
          "None of these parts is complicated on its own. Together they remove the guesswork that makes a first draft feel random, and they give you a checklist to run before you hit send.",
        ],
      },
      {
        heading: "A plain way to start",
        paragraphs: [
          "Write the request the way you would brief a freelancer you just hired for the day. Name the deliverable, the reader, and the shape you want it in, then stop talking and let them work.",
          "Read the output as an editor, not as a customer. Note exactly where it drifted from the brief, and put that correction into the next request instead of fixing the text by hand.",
          "Do that for a week and your prompts start carrying the notes you used to repeat aloud every single time. The request gets shorter even as the results get closer.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Prompt engineering is mostly editorial judgment, not code.",
          "Specific requests save rounds of rewriting.",
          "Brief the tool the way you would brief a new collaborator.",
        ],
      },
    ],
  },
  {
    slug: "aitools-role-prompts-for-creators",
    title: "How Role Prompts Change the Output Creators Get",
    excerpt:
      "Role prompts tell an AI tool who it is speaking as, and that single choice shifts tone, detail, and emphasis in every line it writes for you.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Role prompts tell the model who it is speaking as, and that single choice shifts word choice, detail, and emphasis. Give a creator tool the role of a documentary narrator and the same facts come back in a quieter register than if you asked for a hype host.",
          "The role is not decoration you add for fun. It is a compact way to set expectations the model would otherwise invent on its own, and it often does the work of a paragraph of instructions.",
        ],
      },
      {
        heading: "What a role actually changes",
        paragraphs: [
          "A role steers vocabulary first. A sports coach and a librarian describing the same technique will pick different verbs before either one finishes a sentence.",
          "It also changes what the model treats as important. Ask a curious beginner to explain a topic and it defines the terms. Ask a skeptical reviewer and it leads with the weak points instead.",
          "Because the role filters both words and priorities, it shapes the draft before you give any other guidance. Getting it right early saves you from pushing against the wrong default.",
        ],
      },
      {
        quote: "The role is the smallest instruction that changes the most about the result.",
      },
      {
        heading: "How to write a role that helps",
        bullets: [
          "Name a real point of view, such as a patient teacher or a blunt critic.",
          "Add the audience the role is addressing, since the same role sounds different for kids and for peers.",
          "Keep the role to one or two lines, so it guides the tone without eating your whole prompt.",
          "Pair the role with a task, because a role alone does not tell the model what to produce.",
        ],
        paragraphs: [
          "A role works best when it is specific enough to imagine. Vague titles like 'expert' give the model little to hold onto and tend to return the same generic voice you would have gotten anyway.",
        ],
      },
      {
        heading: "Ways roles go wrong",
        paragraphs: [
          "The most common mistake is stacking roles until they contradict. A friendly mentor who is also a harsh judge leaves the model guessing which voice to follow.",
          "Another is picking a role for style when the task needs accuracy. A colorful storyteller is the wrong guide for a factual recap, no matter how lively the prose turns out.",
          "Test a role by asking whether you could describe it to a person in one sentence. If you cannot, the model probably cannot either, and the role will drift with every new prompt.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A role sets both vocabulary and priorities.",
          "Keep roles short, concrete, and paired with a task.",
          "If you cannot describe the role in one sentence, the model cannot follow it.",
        ],
      },
    ],
  },
  {
    slug: "aitools-few-shot-prompt-examples",
    title: "Few-Shot Examples That Make Prompts More Useful",
    excerpt:
      "Few-shot prompting shows an AI tool a couple of finished examples before you ask for a new one, teaching the pattern faster than any description.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Few-shot prompting means showing the model a couple of finished examples before you ask for a new one. The examples teach the pattern faster than any description of it, because the model reads the pattern instead of translating your words into one.",
          "You have seen this work without a name. Describing a hook style in the abstract is hard, but paste three hooks you like and the model copies the shape almost immediately.",
        ],
      },
      {
        heading: "Why examples beat instructions",
        paragraphs: [
          "Words are lossy. When you write 'punchy and specific', you carry a private picture of punchy that the model cannot see, and it fills the gap with an average of everything it has read.",
          "An example removes that gap. Two or three samples show rhythm, length, and structure at once, and they leave far less room for the model to guess wrong.",
          "Examples also survive translation across tasks. The same pair of samples can anchor a different topic next week, as long as the structure still matches what you need.",
        ],
      },
      {
        quote: "One good example saves a paragraph of explanation you would have rewritten twice.",
      },
      {
        heading: "How to pick examples for a creator task",
        bullets: [
          "Choose samples that share the pattern you want, not just the topic.",
          "Keep them short, so they take seconds to read and stay easy to swap later.",
          "Vary the subject across examples, or the model may copy the content instead of the form.",
          "Put your strongest example last, since the most recent input tends to carry extra weight.",
        ],
        paragraphs: [
          "A useful rule is to mix old and new. Pull two examples that worked before and add one you wrote this week, so the set reflects the direction your channel is actually heading.",
        ],
      },
      {
        heading: "Keeping examples from hogging the prompt",
        paragraphs: [
          "Long examples crowd out the actual request and can push the model toward copying whole phrases. Trim each one to the lines that carry the pattern you care about.",
          "If a sample only earns its place through one sentence, keep that sentence and drop the rest. The model needs the shape, not the full story around it.",
          "Review your examples every few weeks. A sample that felt sharp last season can quietly become the reason your new writing sounds stale.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Examples teach form faster than descriptions of form.",
          "Keep samples short, varied in topic, and pointed at your pattern.",
          "Refresh examples as your channel's voice evolves.",
        ],
      },
    ],
  },
  {
    slug: "aitools-prompt-iteration-loop",
    title: "The Prompt Iteration Loop Every Creator Should Run",
    excerpt:
      "A prompt iteration loop turns a rough request into a reliable one. Change a single variable at a time and keep the version that earns its keep.",
    date: "2024-12-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "automation"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A prompt iteration loop is a repeatable way to improve a request without starting over each time. You change one thing, compare the result, and keep the version that wins, then run it again with the next small change.",
          "Creators who treat prompts as one-shot guesses tend to blame the tool when the result is flat. The better habit is to assume the first draft is a starting point, not a verdict.",
        ],
      },
      {
        heading: "Why one change at a time matters",
        paragraphs: [
          "If you rewrite five things at once, you learn nothing when the output changes. You cannot tell which edit helped and which one quietly hurt.",
          "Isolating a single variable turns each attempt into a small test. Over a handful of rounds you build a clear picture of what your request actually responds to.",
          "The discipline is the same one you use on a thumbnail. You do not redesign the whole image to test a headline, and you should not rewrite an entire prompt to test one constraint.",
        ],
      },
      {
        quote: "Iteration is not indecision. It is how you find out what your prompt is really saying.",
      },
      {
        heading: "A loop that fits a creator's week",
        bullets: [
          "Save the version that produced your best draft before you change anything.",
          "Change one element, such as length or audience, and run the request again.",
          "Compare the two drafts side by side instead of from memory.",
          "Keep the better version, then start the next round from there.",
        ],
        paragraphs: [
          "Three or four rounds is usually enough for a recurring task. Past that you are polishing, and your time is better spent on the edit in front of you.",
        ],
      },
      {
        heading: "Saving the versions that worked",
        paragraphs: [
          "A prompt you cannot find again is a prompt you will rewrite from scratch next month. Keep winning versions in a simple file with a short note on what each one changed.",
          "Name them by the job they do rather than the date you made them. A label like 'shorts intro, warm tone' is easier to reach for than a string of numbers.",
          "When a version starts slipping, the notes tell you what you tweaked last, and that is often the first place to look for the cause.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Change one variable per round so you can read the result.",
          "Compare drafts side by side, not from memory.",
          "Store winning prompts with a note on what made them work.",
        ],
      },
    ],
  },
  {
    slug: "aitools-reusable-prompt-templates",
    title: "Reusable Prompt Templates for Faster Content Work",
    excerpt:
      "Reusable prompt templates turn the requests you repeat into fill-in-the-blank shortcuts, so your best instructions survive from video to video.",
    date: "2025-03-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "automation"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Prompt templates are saved requests you fill in instead of writing from scratch. A creator who scripts, titles, and describes videos ends up writing the same request shapes week after week, and a template captures that shape once.",
          "Think of a template as a form with blanks. The structure stays fixed, and you drop in the topic or the guest each time, so the parts that worked before keep working.",
        ],
      },
      {
        heading: "Where templates pay off most",
        paragraphs: [
          "The best candidates are tasks you run often and judge the same way every time. Titles, descriptions, and short summaries all fit, because you already know what a good one looks like.",
          "One-off tasks are a poor fit. If you will run a request once, a template is overhead, and you are better off writing the request plainly and moving on.",
          "The test is simple. If you found yourself copying last week's request to edit it, that request is ready to become a template.",
        ],
      },
      {
        quote: "A template is a decision you made once and get to reuse every time the job comes back.",
      },
      {
        heading: "Building a template that lasts",
        bullets: [
          "Keep the fixed part short, since the blanks are where your thinking happens.",
          "Mark each blank clearly so you never forget to fill one in.",
          "Include the constraints that stop the output drifting, such as length and tone.",
          "Leave room for an example, so you can swap in a fresh one without rewriting the rest.",
        ],
        paragraphs: [
          "Resist the urge to pack every rule into one template. A focused request with three clear blanks beats a sprawling one that tries to cover your whole workflow.",
        ],
      },
      {
        heading: "Keeping templates from going stale",
        paragraphs: [
          "A template works until your channel changes, and then it quietly works against you. The voice you locked in six months ago may no longer match the one you want now.",
          "Read each template aloud every season. If it no longer sounds like your channel, edit the fixed lines rather than abandoning the form you built.",
          "A small library of five or six sharp templates will do more for you than a folder of fifty you never open.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Templates are best for tasks you repeat and judge the same way.",
          "Keep the fixed part lean and the blanks obvious.",
          "Review templates each season so they track your current voice.",
        ],
      },
    ],
  },
  {
    slug: "aitools-prompt-structure-basics",
    title: "Prompt Structure Basics That Keep Output On Track",
    excerpt:
      "Prompt structure is the order of your instructions. A steady order keeps an AI tool from dropping the parts you care about as a request grows.",
    date: "2025-06-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Prompt structure is the order you put your instructions in. A clear structure keeps the model from dropping the parts you care about when a request gets long, and it gives you a place to look when something goes missing.",
          "Most creators write prompts as a stream of thoughts. That works for short requests, but the model rewards a shape you follow on purpose, especially once the task has more than one requirement.",
        ],
      },
      {
        heading: "The order that holds up",
        paragraphs: [
          "Open with the task and the role, so the model knows what to do and who it is doing it as. Those two lines set the frame for everything that follows.",
          "Add context next, including the audience and any background the model cannot infer. Then state constraints, and finish with the format you want the answer in.",
          "End with a short reminder of the goal if the request is long. A single closing line pulls attention back to the point after a pile of detail.",
        ],
      },
      {
        heading: "A shape you can reuse",
        bullets: [
          "Task and role, stated in one or two plain lines.",
          "Context, covering who reads it and what they already know.",
          "Constraints, naming length, tone, and anything to avoid.",
          "Format, describing the shape of the output you expect.",
        ],
        paragraphs: [
          "You do not need fancy labels. The order itself does the work, and you can reuse it across nearly every creator task without changing much.",
        ],
      },
      {
        heading: "Keeping structure light",
        paragraphs: [
          "Structure is a support, not a cage. If you spend more time formatting the prompt than thinking about the task, you have gone too far.",
          "Plain sentences in a sensible order beat a rigid template you fight against. The aim is clarity for the model and for your future self reading it back.",
          "When output drifts, check the order before you blame the tool. A missing constraint or a buried task is often the real cause.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Order instructions so nothing important is buried.",
          "Task, context, constraints, format is a shape that travels well.",
          "If output drifts, inspect the structure before the tool.",
        ],
      },
    ],
  },
  {
    slug: "aitools-prompt-mistakes-creators-make",
    title: "Prompt Mistakes Creators Make and How to Fix Them",
    excerpt:
      "Most prompt mistakes come from leaving out context an AI tool cannot know. The fixes are small, and they save you rounds of rewriting every week.",
    date: "2025-10-11",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Most prompt mistakes come from leaving out context the model cannot guess. Fixing them rarely needs a new tool, just a request that says more of what you already know and less of what you assume.",
          "The patterns repeat across creators, and naming them makes them easier to catch before you send the request.",
        ],
      },
      {
        heading: "The mistakes that show up most",
        bullets: [
          "Asking for 'a script' without naming the audience, length, or tone.",
          "Piling on contradictory goals, like making it both short and exhaustive.",
          "Trusting a single draft as if it were the only possible answer.",
          "Leaving the format undefined, then reformatting the output by hand.",
        ],
        paragraphs: [
          "Each of these pushes work back onto you after the model has finished. The fix is to move that decision into the request, where it costs one extra line.",
        ],
      },
      {
        quote: "A vague prompt does not save time. It moves the thinking to the moment you have to fix the draft.",
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Name the reader in every request, even when it feels obvious. The model has no idea who follows you, and the audience is often the single line that changes the most.",
          "Pick a length and mean it. If you ask for a thirty second script, say so, and the model stops padding to fill space it thinks it needs.",
          "Treat contradictions as a warning sign. If two requirements pull apart, split them into two requests instead of forcing one output to satisfy both.",
          "Finally, never accept the first draft as the only option. Regenerate once with a small change and compare, because the difference is often larger than you expect.",
        ],
      },
      {
        heading: "A quick pass before you send",
        paragraphs: [
          "Read your request and ask whether a stranger could follow it without your channel open beside them. If not, add the missing piece now.",
          "Check that the task is one action, not three blended together. A single clear job gets a sharper answer than a crowded one.",
          "Confirm the format at the end. Naming the shape you want is the cheapest way to avoid a cleanup pass after the model answers.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name the audience, the length, and the tone every time.",
          "Split contradictory goals into separate requests.",
          "Compare two drafts before you settle on one.",
        ],
      },
    ],
  },
  {
    slug: "aitools-prompting-for-consistent-brand-voice",
    title: "Prompting for a Brand Voice That Stays Consistent",
    excerpt:
      "A consistent brand voice comes from writing your rules down and feeding them into every prompt, so an AI tool matches you instead of averaging everyone.",
    date: "2026-01-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "A consistent brand voice comes from writing your rules down and feeding them into every prompt. The model can match your voice only if you describe it in terms it can act on, and that means leaving vague mood words behind.",
          "Most creators carry their voice in their head and expect the tool to sense it. It cannot, so the output drifts toward a flat average of everything the model has read.",
        ],
      },
      {
        heading: "Turning taste into instructions",
        paragraphs: [
          "Start by naming two or three habits your writing actually has. Maybe you open with a question, keep sentences short, and avoid jargon. Those are instructions the model can follow.",
          "Then describe a habit to avoid. Knowing what your voice is not does as much work as knowing what it is, and it stops the model reaching for its default flourishes.",
          "Write these rules into a single block you paste into every prompt. Over time that block becomes the closest thing you have to a style guide the tool will actually read.",
        ],
      },
      {
        quote: "A voice guide for a model should read like a set of instructions, not a mood board.",
      },
      {
        heading: "Where creators slip",
        bullets: [
          "Describing the voice with adjectives the model cannot act on, such as authentic or fun.",
          "Changing the voice rules for every prompt, so the output never settles.",
          "Skipping an example, which leaves the model to interpret your words alone.",
          "Forgetting to update the guide when the channel's voice shifts.",
        ],
        paragraphs: [
          "An example closes most of these gaps. One paragraph that sounds exactly like you does more for consistency than a page of description ever will.",
        ],
      },
      {
        heading: "Keeping the voice steady over time",
        paragraphs: [
          "Consistency is a practice, not a setting. Revisit the voice block every few months and compare it against your newest work.",
          "If your writing has moved, move the block with it. A guide that lags behind your channel quietly pulls new drafts toward a voice you have already left.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write voice rules the model can act on, not adjectives it cannot.",
          "Include what to avoid, not only what to include.",
          "Refresh the voice block as your channel evolves.",
        ],
      },
    ],
  },
  {
    slug: "aitools-prompt-chaining-workflows",
    title: "Chaining Prompts Into a Workflow Creators Can Trust",
    excerpt:
      "Prompt chaining links several requests so each step feeds the next. It breaks a large content job into small pieces you can check and correct.",
    date: "2026-05-06",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "automation"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Prompt chaining links several requests so the output of one becomes the input of the next. It lets a creator break a big job into steps small enough to check, instead of asking one prompt to do everything at once.",
          "A single giant request hides its mistakes until the end. A chain surfaces them early, when they are cheap to fix.",
        ],
      },
      {
        heading: "When chaining helps",
        paragraphs: [
          "Chaining pays off when a task has clear stages and each stage has a different goal. Research, outline, draft, and polish are four jobs, and asking one prompt to do all of them usually blurs the result.",
          "It also helps when you want to review in the middle. If you need to approve an outline before any script gets written, a chain gives you that gate for free.",
          "For short, simple requests, skip it. A chain adds steps, and steps are only worth their cost when the job is genuinely large.",
        ],
      },
      {
        quote: "A chain is a set of small promises, and each step keeps one before the next begins.",
      },
      {
        heading: "A simple chain to try",
        bullets: [
          "Step one gathers the facts and returns a short list of points.",
          "Step two turns those points into an outline you approve.",
          "Step three writes the draft from the outline alone.",
          "Step four tightens the draft against your voice guide.",
        ],
        paragraphs: [
          "Keep each step narrow. The narrower the job, the easier it is to see when the output goes wrong and where to send it back.",
        ],
      },
      {
        heading: "Keeping a chain from drifting",
        paragraphs: [
          "The risk in any chain is that small errors pile up as the work moves forward. A weak fact in step one becomes a whole section in step three.",
          "Check each output before you pass it on. A ten second read at the join is cheaper than unwinding a flawed draft at the end.",
          "Write down which step failed when something goes wrong. Over time you learn where your chain is strong and which stage needs a tighter prompt.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Chain when a task splits into stages with different goals.",
          "Review at each join so errors do not compound.",
          "Skip chaining for short, single-step requests.",
        ],
      },
    ],
  },
  {
    slug: "aitools-testing-prompts-quality",
    title: "Testing Your Prompts to Raise Output Quality",
    excerpt:
      "Testing prompts means comparing two versions on the same task instead of trusting the first result. A small test shows which request does the work.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai-tools", "automation"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Testing prompts means comparing two versions on the same task instead of trusting the first result. A quick test shows which request is actually doing the work, and it stops you from changing prompts on a hunch.",
          "The habit is familiar from anywhere else you make decisions. You would not change a thumbnail without looking at how the last one performed, so treat prompts with the same curiosity.",
        ],
      },
      {
        heading: "Setting up a fair test",
        paragraphs: [
          "Hold the task steady and change only the part you are testing. If you rewrite the whole prompt and the result improves, you still do not know what helped.",
          "Run both versions on the same input, then read the two outputs back to back. Memory is a poor judge here, because the second draft always feels fresher than it is.",
          "Keep the test small. Two versions and one task is enough to learn something, and it fits into the time you already spend writing the prompt.",
        ],
      },
      {
        quote: "A prompt you never test is a habit, not a decision.",
      },
      {
        heading: "What to measure",
        bullets: [
          "How close the first draft sits to something you would publish.",
          "How much editing you still do after the model answers.",
          "How often a small fix in one area breaks another part.",
          "How the two versions hold up across a few different topics.",
        ],
        paragraphs: [
          "None of these needs a spreadsheet. A short note beside each version tells you enough to choose, and the note is there when you return to the prompt later.",
        ],
      },
      {
        heading: "Turning tests into a habit",
        paragraphs: [
          "You do not need to test everything. Pick the two or three prompts you run most often and give them a proper comparison every season.",
          "Let the winner become your default, and keep the losing version only as a record of what you tried. A short log of attempts saves you from repeating an idea you already rejected.",
          "Over a year, these small tests add up to a set of prompts you trust, which is worth more than any single clever request.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Compare two versions on the same task before you commit.",
          "Change one part at a time so the result means something.",
          "Test the prompts you run most and log what you learn.",
        ],
      },
    ],
  },
];
