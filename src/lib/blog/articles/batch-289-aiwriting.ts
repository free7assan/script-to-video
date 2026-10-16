import { Brain, MessageSquare, PenLine, Feather, Scissors, Search, Tag, Repeat, Heart, Target } from "lucide-react";
import type { BlogPost } from "../types";

export const batch289: BlogPost[] = [
  {
    slug: "ai-writing-what-ai-does-well",
    title: "What AI Writing Does Well for Your Video Scripts",
    excerpt: "AI writing is strongest on pattern work like drafts and hook lists, so learn where the tool earns its keep and where your own voice has to take over.",
    date: "2042-06-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "AI writing is a strong fit for the parts of a script that follow a pattern. It can turn a rough outline into a first draft, spit out dozens of hook lines, and summarize research faster than you can read it.",
          "The tool gets weaker when the value of a video comes from a lived story or a sharp opinion. That split is the whole skill, and once you see it you stop asking AI to do work only you can do."
        ]
      },
      {
        heading: "Where the tool earns its keep",
        paragraphs: [
          "Patterns are everywhere in scripting. Intros, transitions, calls to action, and list segments all follow shapes you have seen a thousand times. AI has also seen them a thousand times, which is why it can produce a usable version in seconds.",
          "This is also why the output often feels familiar. Familiar is fine for structure and terrible for personality. Use the model to build the frame, then walk through it with your own hands."
        ]
      },
      {
        heading: "Where it falls flat",
        paragraphs: [
          "Ask a model to share a personal failure and it will invent one that sounds like a greeting card. Ask it for a hot take and it will hedge until the take means nothing. These are exactly the moments viewers remember.",
          "A script built only from pattern is forgettable because everyone can build the same pattern. Your weird specifics are the thing a competitor cannot copy."
        ]
      },
      {
        quote: "Let the model build the frame, but never let it sign your name to the feeling."
      },
      {
        heading: "A way to divide the work",
        bullets: [
          "Use AI for research summaries and first drafts of structured segments.",
          "Use AI for volume tasks like hook options and title variations.",
          "Keep personal stories, strong opinions, and your final on-camera lines for yourself."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "AI writing handles pattern work well and original thinking poorly.",
          "Drafts and option lists are the safest places to start.",
          "Personal stories and hot takes should come from you.",
          "Judge output by whether it sounds like a person you would watch."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-clear-brief",
    title: "How to Give AI a Clear Brief for Your Scripts",
    excerpt: "A clear brief is the difference between usable AI writing and vague mush, so spell out the viewer, the goal, the tone, and what the script must avoid.",
    date: "2042-06-04",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A brief is the set of instructions you hand the model before it writes a word. When the brief is thin, the model fills the gaps with the most average version of your topic, and average is the last thing a script should be.",
          "Spending two minutes on a brief saves twenty minutes of rewriting. The model cannot read your mind, so anything you care about has to be written down."
        ]
      },
      {
        heading: "Start with the viewer",
        paragraphs: [
          "Name one person the script is for. Not a demographic blob, but a specific viewer with a specific problem. A brief aimed at a new channel owner who keeps quitting at ten subscribers will always beat a brief aimed at people interested in YouTube.",
          "Once the viewer is real, tone decisions get easier. You can tell the model to talk like a friend rather than a lecturer, because now you know who is listening."
        ]
      },
      {
        heading: "Give the goal and the shape",
        paragraphs: [
          "State what the video should make the viewer do, think, or feel by the end. A single sentence is enough. Then give the rough shape, such as a hook, a problem, three fixes, and a close.",
          "Include a short list of things to avoid. Ban the words you hate, the cliches in your niche, and any promise you cannot keep. Models respect a short, specific ban list far better than a vague request to be original."
        ]
      },
      {
        heading: "Add a sample of your own work",
        quote: "Paste one paragraph you wrote yourself and tell the model to match its rhythm."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A brief names the viewer, the goal, the shape, and the bans.",
          "Specific viewers beat broad audiences every time.",
          "A short ban list keeps cliches out of the first draft.",
          "One sample paragraph teaches the model your cadence fast."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-outline-to-draft",
    title: "Drafting a Video Script From an Outline With AI",
    excerpt: "When you bring the outline, AI writing can expand it into a full draft, so your structure stays yours while the model handles the slow business of prose.",
    date: "2042-06-07",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "An outline is your thinking made visible. When you hand that outline to a model and ask for a draft, you keep ownership of the argument while the tool does the typing. This is the single most reliable use of AI in scripting.",
          "The model is good at turning a bullet into a paragraph. It is bad at deciding what the bullet should say. So do the deciding yourself, then let it do the stretching."
        ]
      },
      {
        heading: "Build the outline by hand first",
        paragraphs: [
          "Write each beat as a plain sentence, not a topic word. Instead of a bullet that says hooks, write a bullet that says open with the mistake every new creator makes in week one. Specific beats give the model something to actually expand.",
          "Order matters more than polish at this stage. If the sequence is wrong, no amount of good prose will save the video. Fix the order before you hand it over."
        ]
      },
      {
        heading: "Ask for expansion, not invention",
        paragraphs: [
          "Tell the model to stick to the beats you provided and not add new ones. Otherwise it will pad your script with tangents that feel helpful and read like filler.",
          "Ask for one paragraph per beat to start. Short chunks are easier to judge, and you can request more detail only where a beat feels thin."
        ]
      },
      {
        quote: "The outline is yours, the prose is rented, and you hand the prose back at the end."
      },
      {
        heading: "Refine beat by beat",
        paragraphs: [
          "Work through the draft one section at a time. Delete anything that drifts from the beat, then rewrite the lines you would never say out loud.",
          "This loop is fast because you are editing small pieces instead of arguing with a whole page. Most scripts need two passes at this stage, not ten."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the outline yourself and let the model expand it.",
          "Specific beats produce specific drafts.",
          "Forbid new beats to keep the script on track.",
          "Edit one section at a time so feedback stays clear."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-keep-your-voice",
    title: "Keeping Your Voice When AI Helps With the Edit",
    excerpt: "Your voice survives AI writing when you treat the model as a first pass, then rewrite the lines that sound nothing like the way you actually talk.",
    date: "2042-06-10",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "Voice is the sum of your habits. The words you reach for, the jokes you land, the way you start a sentence when you are excited. A model can imitate a voice if it has enough samples, but it drifts toward the average with every line you leave untouched.",
          "The fix is not to avoid AI. The fix is to treat its draft as raw material and pass it through your own mouth before it becomes a script."
        ]
      },
      {
        heading: "Read every line out loud",
        paragraphs: [
          "Your ear catches what your eye forgives. A sentence that looks fine on screen can trip you up the moment you say it. If you stumble, the line is not yours yet.",
          "Mark the spots where you would say something different and rewrite them on the spot. Those small swaps are where voice lives."
        ]
      },
      {
        heading: "Keep a phrase blacklist",
        paragraphs: [
          "Models lean on a handful of words that no real person says in conversation. Keep a running list of the ones that make you cringe and paste it into every brief.",
          "The list grows over time and becomes a personal style guide. It is one of the cheapest tools you own for making output sound like you."
        ]
      },
      {
        quote: "If you stumble reading a line out loud, that line belongs to the model, not to you."
      },
      {
        heading: "Seed the draft with your own sentences",
        paragraphs: [
          "Write the hook and the closing line yourself before you let the model fill the middle. Those two moments carry the most personality, and they anchor everything between them.",
          "When the model works inside your bookends, it has a target to match. The result needs less correction because it started closer to your voice."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read drafts out loud and rewrite anything that trips you.",
          "Keep a blacklist of words that never sound like you.",
          "Write your own hook and ending as anchors.",
          "Voice comes back in the edit, not in the prompt."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-generic-filler",
    title: "Catching Generic Filler in AI-Written Scripts",
    excerpt: "AI writing fills space with words that sound right and say nothing, so train your eye to spot the filler phrases before they reach the final edit.",
    date: "2042-06-13",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Filler is the enemy of a good script. It is the sentence that restates the last sentence, the transition that connects nothing, the adjective that adds weight without meaning. Models produce filler because their training rewards smooth, complete-sounding prose.",
          "You cannot fix filler by asking the model to stop. You have to catch it yourself, and catching it gets easier once you know the shapes it takes."
        ]
      },
      {
        heading: "The three shapes of filler",
        paragraphs: [
          "First, the empty opener that clears its throat before the point. Second, the summary sentence that repeats what you just said. Third, the hedge that softens a claim until the claim disappears.",
          "None of these are errors the model flags. They read as competent writing, which is exactly why they survive a quick skim."
        ]
      },
      {
        heading: "Cut, then check the cut",
        paragraphs: [
          "Delete every sentence that could be removed without losing meaning. If the script still makes sense, the sentence was filler. Do this pass before you polish anything, because cutting first saves you from editing lines you are about to throw away.",
          "Say the trimmed version out loud. A script with the filler gone usually runs shorter and hits harder, which is the whole point."
        ]
      },
      {
        quote: "If a sentence can vanish and the video still works, it was never carrying its weight."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Filler sounds competent, which is why it survives quick reads.",
          "Watch for empty openers, restated points, and soft hedges.",
          "Delete anything the script survives without.",
          "Cut before you polish so you edit fewer dead lines."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-fact-check",
    title: "Fact-Checking AI Output Before You Press Record",
    excerpt: "AI writing can state a wrong number with total confidence, so build a fact-check pass into your workflow before any claim reaches your camera.",
    date: "2042-06-16",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A model will invent a statistic, a date, or a quote and present it with the same calm tone it uses for things that are true. Your audience trusts you, and that trust is on the line every time you repeat an unchecked number.",
          "Fact-checking is not optional work you do when you have time. It is part of writing with AI, the same way proofreading is part of writing without it."
        ]
      },
      {
        heading: "Flag every claim you did not write",
        paragraphs: [
          "Go through the draft and highlight every number, name, date, and direct quote. These are the spots where a model is most likely to be wrong and most convincing when it is.",
          "For each flag, find a source you trust and confirm the detail yourself. If you cannot confirm it in a couple of minutes, cut the claim rather than risk it."
        ]
      },
      {
        heading: "Prefer claims you can stand behind",
        paragraphs: [
          "The safest facts are the ones from your own experience. You can tell viewers what happened in your channel, what your viewers said, and what you tested. No model can get those wrong because they come from you.",
          "When a script leans too hard on external numbers, that is a sign the topic needs your own angle more than it needs borrowed data."
        ]
      },
      {
        quote: "A confident wrong number costs more trust than a hundred boring correct ones earn."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat every number, name, and quote as unverified by default.",
          "Confirm each flagged claim against a source you trust.",
          "Cut anything you cannot check quickly.",
          "Lean on your own experience when facts are shaky."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-titles-descriptions",
    title: "Using AI to Write Video Titles and Descriptions",
    excerpt: "Titles and descriptions are ideal AI writing tasks because volume helps, so generate many options, then pick the ones that match your promise.",
    date: "2042-06-19",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        paragraphs: [
          "Titles and descriptions are where AI shines because the job is volume. You want twenty options to choose from, not one perfect sentence, and a model can produce a pile before your coffee cools.",
          "The model is bad at knowing which option fits your channel, so you stay the judge. Use it as a machine that generates choices, then apply your taste to the shortlist."
        ]
      },
      {
        heading: "Feed it the real promise",
        paragraphs: [
          "Give the model the actual content of the video, not just the topic. A title is a promise, and the model cannot make an honest promise about a video it has not been told about.",
          "Include the specific result the viewer gets. Specific results beat clever wordplay when someone is scanning a feed."
        ]
      },
      {
        heading: "Sort options into buckets",
        paragraphs: [
          "Ask for variants grouped by angle, such as curiosity, direct benefit, and question. Grouping makes the pile easier to scan and forces variety instead of twenty near-identical lines.",
          "For descriptions, ask for a two-line summary, a short list of what is covered, and a closing line that points to another video. That structure serves both viewers and search."
        ]
      },
      {
        quote: "The model brings the quantity, and your channel brings the taste that picks the winner."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use AI for volume on titles and descriptions.",
          "Feed the model the real promise, not just the topic.",
          "Ask for options grouped by angle for faster choosing.",
          "You pick the final title, never the model."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-repurpose-script",
    title: "Repurposing One Video Script Across Formats With AI",
    excerpt: "AI writing makes repurposing cheap, turning one finished script into shorts, posts, and emails without starting each piece from a blank page.",
    date: "2042-06-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "One good script holds more than one video. The same idea can become a short, a social post, a newsletter section, and a pinned comment. Repurposing used to cost a full rewrite each time, and AI has cut that cost to almost nothing.",
          "The trick is to adapt rather than dump. A short is not a trimmed long video, and a post is not a paragraph with a link. Each format has its own shape, and the model can help you reshape."
        ]
      },
      {
        heading: "Pull the strongest single moment",
        paragraphs: [
          "Find the one beat in the script that stands alone. A strong short usually comes from a single sharp idea, not from a summary of the whole video.",
          "Ask the model to rewrite that beat as a standalone piece with its own hook. This keeps the short from depending on context the viewer does not have."
        ]
      },
      {
        heading: "Rework the opening for each place",
        paragraphs: [
          "The first line has to fit where it lands. A hook that works in a video may fall flat in a fast feed, so have the model produce a few openers tuned to each platform.",
          "Keep the body shared and change the entry point. That is where most of the value sits, because readers skip anything that feels copied from somewhere else."
        ]
      },
      {
        quote: "Repurposing is not shrinking the same thing, it is retelling it for a different room."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One script can feed several formats when you reshape it.",
          "Extract the single strongest beat for short clips.",
          "Rewrite the opener for each platform.",
          "Adapt the body instead of pasting it everywhere."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-when-to-write-yourself",
    title: "Knowing When You Should Write a Video Script Yourself",
    excerpt: "AI writing saves time on most scripts, but some videos need your hand from the first line, and learning that line saves you from hollow content.",
    date: "2042-06-25",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "There is a category of video that a model should never write for you. It is the video where the whole reason to watch is that you lived it, learned it, or believe it. Hand those to a model and you get the shape of a story with none of the pulse.",
          "Knowing which videos those are is a skill worth building. It keeps you fast on the routine work while protecting the ones that build your reputation."
        ]
      },
      {
        heading: "Write it yourself when the stakes are personal",
        paragraphs: [
          "If the video is about a failure, a turning point, or a belief you hold, write it. A model can arrange the words, but it cannot know how the moment felt, and viewers can tell the difference within seconds.",
          "The same goes for anything you might be held to later. An opinion you will defend in the comments should be written in your own words so it actually reflects what you think."
        ]
      },
      {
        heading: "Let AI handle the routine work",
        paragraphs: [
          "Explainer videos, list videos, and updates follow predictable shapes. These are the ones where a model saves you real time and the output needs only a light edit to sound right.",
          "The point is not to write everything yourself out of pride. The point is to spend your writing energy where it changes the outcome."
        ]
      },
      {
        quote: "Save your own hands for the scripts only you could have written."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Personal stories and strong beliefs deserve your own draft.",
          "Anything you must defend publicly should be your words.",
          "Routine explainers and lists are safe to delegate.",
          "Spend your writing energy where it changes the result."
        ]
      }
    ]
  },
  {
    slug: "ai-writing-prompt-for-niche",
    title: "Building a Prompt That Fits Your Niche and Voice",
    excerpt: "A reusable AI writing prompt tuned to your niche beats a generic one, because it carries your topics, your audience, and your terms of the trade.",
    date: "2042-06-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["ai", "writing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A generic prompt gets a generic script. A prompt built for your niche gets something that sounds like it belongs on your channel. The difference is context, and context is something you can write once and reuse forever.",
          "Think of the prompt as a permanent brief. Every time you start a new script, you paste it in, swap the topic, and skip the setup work."
        ]
      },
      {
        heading: "Load it with your world",
        paragraphs: [
          "List the words your viewers use and the ones they never use. Name the products, the common mistakes, and the running debates in your space. The model can only sound like an insider if you tell it what insiders say.",
          "Add the people you are talking to and what they already know. An audience of beginners needs different framing than a room of veterans, even when the topic is identical."
        ]
      },
      {
        heading: "Set the guardrails",
        paragraphs: [
          "Write down your tone rules, your banned phrases, and how long your sentences tend to run. Include how you open videos and how you close them so the output arrives closer to a finished script.",
          "Keep the prompt in a note and update it as your style changes. A prompt you refine over months becomes more valuable than any single piece it helps produce."
        ]
      },
      {
        quote: "A niche prompt is your style guide living inside the tool, ready before you type a word."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build one prompt that carries your niche context.",
          "Name the words and debates your viewers live in.",
          "State your tone rules and banned phrases up front.",
          "Keep refining the prompt as your style changes."
        ]
      }
    ]
  }
];
