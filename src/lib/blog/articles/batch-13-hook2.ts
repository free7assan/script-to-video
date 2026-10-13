import {
  Activity,
  BarChart3,
  Clock,
  Eye,
  Layers,
  PenLine,
  Repeat,
  Scissors,
  Search,
  Target,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch13: BlogPost[] = [
  {
    slug: "hook-retention-curve-testing",
    title: "Hook Retention Curve Testing: A Practical Framework",
    excerpt:
      "Learn how to test hooks against YouTube retention data, read the 0:00 to 0:30 curve, and tell a broken opening from a slow middle before you rewrite.",
    date: "2024-02-06",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "A retention curve answers one blunt question: did the hook earn the next 30 seconds? If viewers bail in a steep line before 0:30, the fault sits in the opening, not the body of the video. YouTube Studio hands you this graph for free, and I check it before I touch the script.",
          "Most creators stare at average view duration. That single number hides the shape of the drop. Two videos can share a 45 percent average and behave nothing alike. One holds steady. The other loses half its audience in the first 20 seconds and limps along after. The curve separates those cases.",
        ],
      },
      {
        heading: "What the first 30 seconds actually reveal",
        paragraphs: [
          "The opening 30 seconds is where your hook either converts a click into a viewer or refunds it. On a healthy video, the line dips a little, flattens, then drifts down slowly. On a broken one, it looks like a ski slope.",
          "I flag any video that loses more than 30 percent of its viewers before 0:30. That threshold is not sacred, but it catches the worst offenders fast. Shorts run hotter, so I use 40 percent as the line there.",
        ],
      },
      {
        quote:
          "The retention graph does not care how clever your line sounded in the script. It only reports who stayed.",
      },
      {
        heading: "Setting up a repeatable hook test",
        paragraphs: [
          "Testing means changing one thing at a time. Rewrite the first sentence, keep the rest of the video untouched, then publish and compare the opening curve side by side.",
          "I keep a simple log: hook version, publish date, 30-second retention, and average view duration. Four columns. After ten videos you have a pattern worth trusting.",
        ],
      },
      {
        heading: "How to run the test",
        bullets: [
          "Change one variable per upload: the first sentence, the visual cold open, or the stated promise. Two changes at once and you learn nothing.",
          "Give each version at least 1,000 views before you read the curve. Below that, noise beats signal.",
          "Compare 30-second retention, not total watch time. A great hook can still sit on a weak middle.",
          "Screenshot the graph and label it. Memory lies about which opening worked.",
        ],
      },
      {
        heading: "Reading the cliff and the slope",
        paragraphs: [
          "A cliff near 0:05 usually means the thumbnail lied or the audio was rough. People arrived expecting one thing and got another within a sentence.",
          "A slow slope across the whole video points to pacing, not the hook. Do not rewrite your opening to fix a body problem. I have done that and wasted a week.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge the hook on the 0:00 to 0:30 slice, and judge it on shape, not a single average.",
          "Losing more than roughly a third of viewers in 30 seconds is your signal to rewrite.",
          "Test one variable at a time and log four numbers per upload.",
          "A flat, gentle slope is the goal. A dramatic survive-to-the-end curve usually means the video was too short.",
        ],
      },
    ],
  },
  {
    slug: "hook-thumbnail-promise-match",
    title: "Hook And Thumbnail Promise Match Guide For Creators",
    excerpt:
      "Match your hook to the thumbnail promise, then test both against retention data on YouTube to find out which one is quietly losing the click.",
    date: "2024-05-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Your hook and thumbnail make one promise. When they say different things, viewers feel tricked and leave before 0:30. The fix is to test them as a pair, not as separate assets.",
          "Thumbnail testing tools get all the attention. The opening line gets the rest. I have found that mismatches between the two cost more retention than either one does alone.",
        ],
      },
      {
        heading: "The promise is the product",
        paragraphs: [
          "A thumbnail sells a feeling, a curiosity, or a result. The hook should confirm that same idea in the first sentence, then add a reason to stay. If the thumbnail says 'I quit my job' and the hook opens with a slow story about a childhood pet, you just broke the deal.",
          "Write the promise in one sentence before you record. Tape it above the lens. Every version of the hook has to pass through that sentence.",
        ],
      },
      {
        quote:
          "A thumbnail gets the click. The hook has to honor the reason for it, or the click means nothing.",
      },
      {
        heading: "Testing promise match",
        bullets: [
          "Build two hook versions that make the identical promise but deliver it differently. One direct, one with a short story.",
          "Swap thumbnails on a matched pair only after 72 hours, so the click-through rate has time to settle.",
          "Watch 30-second retention, not just CTR. A great thumbnail with a broken hook boosts clicks and kills the video.",
          "Keep a swipe file of thumbnails and first lines that paired well. Patterns show up fast.",
        ],
      },
      {
        heading: "Warning signs of a mismatch",
        paragraphs: [
          "High click-through and low 30-second retention is the classic tell. People came for the promise and the opening did not match.",
          "Low click-through with strong retention means the thumbnail undersold a good hook. Rewrite the package, keep the script.",
          "I check these two numbers together on every upload. Reading them apart hides the real problem.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the thumbnail and hook as a single promise, tested together.",
          "One good sentence written before recording keeps every hook version on message.",
          "High CTR plus weak 30-second retention points to a promise mismatch, not a bad video.",
          "Low CTR plus strong retention means your packaging, not your script, needs work.",
        ],
      },
    ],
  },
  {
    slug: "hook-first-30-seconds-audit",
    title: "Hook First 30 Seconds Audit For Better Retention",
    excerpt:
      "A simple hook first 30 seconds audit shows where viewers leave. Fix the opening, not the whole video, and watch retention recover much faster.",
    date: "2024-08-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "The first 30 seconds are where your video lives or dies. Run this audit on every upload: pull the retention graph, mark 0:30, and ask whether the line fell off a cliff or drifted down gently.",
          "An audit sounds heavy. Mine takes four minutes and needs no paid tool. YouTube Studio shows the curve, and a screenshot is enough to compare uploads months apart.",
        ],
      },
      {
        heading: "Step one: mark the 30-second line",
        paragraphs: [
          "Zoom the retention graph and find 0:30. Note the percentage still watching. Anything above 70 percent is healthy for a normal video. Below 55 percent tells me the opening threw people out.",
          "Write the number in a spreadsheet next to the publish date. Ten rows in and you have your own baseline.",
        ],
      },
      {
        heading: "Step two: describe the shape",
        paragraphs: [
          "Shape beats any single point. A flat line from 0:00 to 0:30 means the hook held. A cliff in the first five seconds means the audio, the thumbnail, or the first sentence failed.",
          "Slow bleed across 10 to 30 seconds is subtler. Often the setup is fine but the promise arrives too late. I cut 10 seconds of throat-clearing and the line flattens.",
        ],
      },
      {
        quote: "Most bad openings are not boring. They are late.",
      },
      {
        heading: "Common fixes after the audit",
        bullets: [
          "Move the payoff sentence to the first line if the promise shows up after 0:15.",
          "Cut any greeting, channel intro, or 'before we start' ritual. It costs 5 to 8 seconds and buys nothing.",
          "Match the first visual to the thumbnail promise within one second.",
          "Re-record the first line if the energy drops below the rest of the video.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Audit 30-second retention on every upload and log it against the publish date.",
          "Read the shape of the curve, not one number.",
          "A cliff early points to a broken open. A slow bleed points to a late promise.",
          "Four minutes per video is enough to build a real baseline over a quarter.",
        ],
      },
    ],
  },
  {
    slug: "hook-ab-testing-youtube-studio",
    title: "Hook A/B Testing In YouTube Studio Explained",
    excerpt:
      "Hook A/B testing in YouTube Studio works better with a clear promise and one variable. Learn how to read the data without really fooling yourself.",
    date: "2024-11-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "YouTube Studio can test up to three thumbnails per video, but it will not test your hook for you. To test the opening, you publish variants over weeks and compare 30-second retention in the analytics tab.",
          "I treat Studio's thumbnail test as the packaging round and my own scheduled tests as the hook round. They answer different questions.",
        ],
      },
      {
        heading: "What Studio tests, and what it does not",
        paragraphs: [
          "The built-in test rotates thumbnails and reports a winner by watch time. It says nothing about your first sentence. That part is on you.",
          "If you rely only on the built-in tool, you are optimizing the click and ignoring the first 30 seconds. Both matter. A strong thumbnail on a weak hook just accelerates the drop.",
        ],
      },
      {
        heading: "Running your own hook test",
        bullets: [
          "Pick one variable: first sentence, cold open visual, or the stated promise.",
          "Publish version A, wait for at least 1,000 views, screenshot the opening curve, then change the variable and repeat.",
          "Keep the middle and end of the video identical so the only difference is the opening.",
          "Log four numbers: date, 30-second retention, average view duration, and click-through rate.",
        ],
      },
      {
        quote: "A test you cannot read twice is just a guess with extra steps.",
      },
      {
        heading: "Reading a result you can trust",
        paragraphs: [
          "A 3-point change in 30-second retention across a thousand views is noise. I look for 8 points or more before I call a winner.",
          "Seasonality skews small channels hard. A hook tested during a holiday week can look worse for reasons that have nothing to do with the script.",
          "When two versions land within a few points, I run a third. Ties are common and useful. They tell me the hook is not the bottleneck.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Studio handles thumbnail tests; schedule your hook tests yourself.",
          "Change one variable and keep the rest of the video frozen.",
          "Require 1,000 views and an 8-point gap before trusting a result.",
          "Use ties as a signal to look at pacing instead of rewriting the open again.",
        ],
      },
    ],
  },
  {
    slug: "hook-drop-off-graph-diagnosis",
    title: "Hook Drop-Off Graph Diagnosis Without Guesswork",
    excerpt:
      "Hook drop-off graph diagnosis turns a scary retention chart into a to-do list. Find the exact second viewers leave and fix that weak beat fast.",
    date: "2025-03-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "To diagnose a weak hook, find the exact second where the retention line drops hardest, then read the script at that timestamp. The graph points to the sentence, and the sentence explains the graph.",
          "I stopped guessing why videos underperformed once I started matching timestamps to lines. The answer is usually sitting at the exact moment the drop begins.",
        ],
      },
      {
        heading: "Find the steepest slope, not the lowest point",
        paragraphs: [
          "The biggest single drop matters more than the final position. If the line falls 12 percent between 0:08 and 0:14, something on screen at 0:08 sent people away.",
          "Mark the start of the drop, the end, and what you said between them. That window is your suspect.",
        ],
      },
      {
        heading: "Match the timestamp to the script",
        paragraphs: [
          "Open your script and find the sentence that covers the drop window. Nine times out of ten it is a promise you did not keep, a tangent, or a slow transition.",
          "I keep timecodes in my scripts for this reason. '0:10 first claim' makes the diagnosis a two-minute job instead of a rewatch.",
        ],
      },
      {
        quote:
          "The curve is not telling you the video was bad. It is telling you the exact second someone disagreed.",
      },
      {
        heading: "Diagnosis to to-do list",
        bullets: [
          "Drop before 0:05: fix the thumbnail-to-hook match and the first visual.",
          "Drop around 0:10 to 0:20: the setup is too long. Move the payoff up.",
          "Drop near 0:30: the promise was delivered too early and there is no reason to stay.",
          "Steady gentle decline: the hook is fine, look at the middle third instead.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Diagnose on the steepest slope, and read the script at that timestamp.",
          "Keep timecodes in the draft so diagnosis stays fast.",
          "Where the drop starts matters more than how low the line finally goes.",
          "A drop at 0:30 signals a delivered promise, not a broken hook.",
        ],
      },
    ],
  },
  {
    slug: "hook-variant-scripting-method",
    title: "Hook Variant Scripting Method For YouTube Creators",
    excerpt:
      "Hook variant scripting method: write three openings for every video, pick the strongest, and let retention data confirm what your gut guessed.",
    date: "2025-06-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Write three hooks for every video before you record, then let retention data pick the winner over time. The variant you like best in the draft is often not the one that holds viewers.",
          "I keep a running file of winning first lines. After fifty tests, the patterns in that file are worth more than any single video's result.",
        ],
      },
      {
        heading: "Why variants beat one draft",
        paragraphs: [
          "A single opening is a bet. Three versions turn it into a small experiment you can run across uploads. The cost is ten extra minutes of writing, and the payoff compounds.",
          "I do not publish all three. I pick the one that feels strongest, then save the others. When a hook underperforms, the runner-up is already written.",
        ],
      },
      {
        heading: "How to write variants that test something",
        bullets: [
          "Direct promise: state exactly what the viewer gets by the end.",
          "Cold open scene: drop into a moment, then explain why it matters.",
          "Contrarian claim: name a common belief and push back on it in one line.",
          "Question that implies stakes, used sparingly since weak questions hurt more than they help.",
        ],
      },
      {
        quote: "Three drafts cost ten minutes. Guessing wrong costs the whole video.",
      },
      {
        heading: "Let the data choose",
        paragraphs: [
          "Publish, wait for volume, then look at 30-second retention. If the winner surprises me, I study why and update my instincts.",
          "Over a quarter, the file shows which style wins for my audience. For me, direct promises beat clever wordplay most weeks, but the gap closes on story-heavy topics.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write three hooks per video and archive the runners-up.",
          "Make each variant test a different strategy, not just different words.",
          "Let 30-second retention, not taste, pick the winner.",
          "Review the whole file quarterly to see which style keeps working.",
        ],
      },
    ],
  },
  {
    slug: "hook-length-vs-retention",
    title: "Hook Length vs Retention: Finding The Tradeoff",
    excerpt:
      "Hook length vs retention is a real tradeoff. Short openings win most tests, but context-heavy topics need a few extra seconds to set the stakes.",
    date: "2025-10-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "openings"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Shorter hooks usually hold more viewers. On dozens of tests, openings under 8 seconds outperform 15-second intros, but context-heavy topics need a few extra seconds to set the stakes and can lose more when rushed.",
          "There is no universal number. The right length depends on how much the viewer must understand before the payoff makes sense.",
        ],
      },
      {
        heading: "Why short hooks win by default",
        paragraphs: [
          "Every extra second before the promise is a second a viewer can decide to leave. A tight 6-second open removes friction. It works because the viewer gets the why fast.",
          "My best-retaining videos almost always open under 8 seconds. That is not a coincidence. It is the math of the curve.",
        ],
      },
      {
        heading: "When a longer hook earns its time",
        paragraphs: [
          "Technical, financial, and news topics need context. A 12-second setup can raise retention if every second builds tension toward a specific claim.",
          "The test is simple: can you delete the sentence and still make sense of the payoff? If yes, delete it.",
        ],
      },
      {
        quote: "Length is not the enemy. Wasted seconds are.",
      },
      {
        heading: "How to find your length",
        bullets: [
          "Cut your current hook in half and republish style later; compare 30-second retention.",
          "Count the seconds until you state a clear reason to keep watching.",
          "If that number passes 12 seconds, tighten before you test anything else.",
          "Judge by topic type, not by one global rule.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Openings under 8 seconds win most tests, especially for broad topics.",
          "Context-heavy subjects can justify 10 to 12 seconds if every second builds stakes.",
          "The real metric is time until the first clear reason to stay.",
          "Delete any sentence the payoff does not need.",
        ],
      },
    ],
  },
  {
    slug: "hook-sample-size-that-matters",
    title: "Hook Test Sample Size: How Many Views You Need",
    excerpt:
      "Hook test sample size matters more than creative instincts. Learn how many views you need before a retention win is real and not just noise.",
    date: "2026-01-20",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A hook test needs at least 1,000 views before the retention difference means anything. Below that, random variation can swing 30-second retention by 5 points or more and lead you to the wrong conclusion.",
          "I learned this the hard way. I once 'proved' a new opening was better, then watched it flop on the next upload with the same script.",
        ],
      },
      {
        heading: "Why small numbers lie",
        paragraphs: [
          "Retention is an average over people, and small samples bounce. A 500-view video can look great or terrible depending on who happened to click.",
          "I now set a floor: no verdict under 1,000 views. For a channel under 5,000 subscribers, that means waiting days, sometimes a week.",
        ],
      },
      {
        heading: "Rough rules I use",
        bullets: [
          "1,000 views: directional only, do not rewrite the script on it.",
          "5,000 views: enough for a real 30-second retention read on a normal video.",
          "8 points of difference: my minimum gap to call a winner at 1,000 views.",
          "Same topic and format: comparing a cooking hook to a finance hook tells you nothing.",
        ],
      },
      {
        quote: "A test on 400 views is a rumor, not a result.",
      },
      {
        heading: "Getting more signal per test",
        paragraphs: [
          "Batch similar videos so the comparison stays fair. I group uploads by topic and format, then compare hooks inside a group.",
          "If your channel is small, treat every upload as data collection. Save verdicts for when a format has three or four examples with steady view counts.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Wait for 1,000 views minimum before reading a hook test.",
          "Demand a gap of about 8 points to call a winner at the low end.",
          "Compare hooks only within the same topic and format.",
          "Small channels should gather more examples and delay verdicts.",
        ],
      },
    ],
  },
  {
    slug: "hook-retest-loop-after-tweak",
    title: "Hook Retest Loop After You Change One Variable",
    excerpt:
      "Hook retest loop after one variable change keeps your tests honest. Log the numbers, wait for volume, then decide carefully what to change next.",
    date: "2026-05-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "After you change one thing in a hook, retest it the same way you tested the original, then compare the two curves. Changing two things at once breaks the loop and teaches you nothing.",
          "The retest loop is boring and that is the point. Discipline here is what separates a data-driven channel from one that just churns.",
        ],
      },
      {
        heading: "Close the loop on every change",
        paragraphs: [
          "A change without a retest is a hunch. I treat the retest as part of the edit, not an optional follow-up. If I cannot test it, I usually do not make it.",
          "The loop: change one variable, publish, gather volume, compare 30-second retention, log the result, decide the next variable.",
        ],
      },
      {
        heading: "Keeping the loop honest",
        bullets: [
          "Change one variable. Two changes and the result is unreadable.",
          "Wait for the same view threshold as the original test.",
          "Compare the same metric every time: 30-second retention first.",
          "Write the decision before you look at the number, so you cannot move the goalposts.",
        ],
      },
      {
        quote:
          "If the retest changes two things, you have not learned anything. You have just guessed twice.",
      },
      {
        heading: "When the result is flat",
        paragraphs: [
          "Flat results are useful. A dead-even retest often means the hook is not the limiting factor, and the middle of the video is dragging retention down.",
          "I move to pacing and structure when two hook retests tie. Rewriting the open a third time rarely pays off.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Every hook change gets a matched retest, no exceptions.",
          "One variable per loop keeps the result readable.",
          "Commit to the decision rule before you see the number.",
          "Two flat retests mean the bottleneck moved, so look at pacing instead.",
        ],
      },
    ],
  },
  {
    slug: "hook-opening-metrics-you-track",
    title: "Hook Opening Metrics To Track Every Single Week",
    excerpt:
      "Track the hook opening metrics that actually predict retention: 30-second hold, click-through, and the shape of the first minute on every upload.",
    date: "2026-09-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["hooks", "retention", "openings"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Track four opening metrics weekly: 30-second retention, average view duration, click-through rate, and the shape of the first minute. Together they tell you whether the hook, the package, or the middle needs work.",
          "One metric alone misleads. I learned to read them as a set because each one covers for the others' blind spots.",
        ],
      },
      {
        heading: "The four numbers that matter",
        paragraphs: [
          "30-second retention shows whether the hook held. Average view duration shows the whole video. Click-through rate shows the thumbnail and title. The shape of the first minute shows where the drop starts.",
          "I keep a weekly sheet with one row per upload. Fifteen seconds of logging per video.",
        ],
      },
      {
        heading: "What each metric cannot tell you",
        bullets: [
          "A high click-through rate says nothing about the opening; a strong thumbnail can hide a weak hook.",
          "Average view duration hides the shape and lets one strong section mask a bad start.",
          "30-second retention ignores the middle, so a great open can still sit on a video people abandon at 2:00.",
          "None of them name the fix. Diagnosis still needs the timestamp.",
        ],
      },
      {
        quote: "Metrics tell you where the trouble is. The script tells you why.",
      },
      {
        heading: "Reading them together",
        paragraphs: [
          "High CTR with low 30-second retention means the packaging overpromised. Low CTR with strong retention means the package undersold. Both strong with a weak middle is a pacing problem.",
          "I write one sentence of diagnosis per video before I move on. That habit keeps me from fixing the wrong thing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Log 30-second retention, average view duration, CTR, and first-minute shape weekly.",
          "Read the four together; each one has a blind spot.",
          "High CTR with weak retention signals a promise mismatch.",
          "Write one diagnosis sentence per upload to avoid fixing the wrong part.",
        ],
      },
    ],
  },
];
