import { BarChart3, Eye, Clock, Compass, Repeat, Puzzle, Waves, Users, Type, TrendingUp } from "lucide-react";
import type { BlogPost } from "../types";

export const batch28: BlogPost[] = [
  {
    slug: "packaging2-ctr-baseline-before-comparisons",
    title: "Build a CTR Baseline Before You Judge Any Video",
    excerpt:
      "A single video's CTR tells you almost nothing on its own. Build a simple baseline range for your channel first, then judge every upload against it.",
    date: "2024-02-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "One video's CTR tells you almost nothing on its own. You need a baseline first: the normal range your channel produces under similar conditions, computed before the new video exists. Only then does the number mean anything.",
          "Build that range in YouTube Studio by exporting impressions and click-through rate for your last thirty uploads into a spreadsheet. Sort by impressions so you compare videos that got similar exposure, then note the middle of the pack rather than the extremes.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build a CTR baseline before judging any video.",
          "Separate traffic sources before comparing.",
          "Ignore videos under 10,000 impressions.",
          "Refresh the range every quarter.",
        ]
      },
      {
        heading: "What a baseline actually looks like",
        paragraphs: [
          "My channel's recent range sits between 3.8 and 5.6 percent for videos that clear 50,000 impressions. A new video at 4.1 is unremarkable. A new video at 7.2 is worth studying, and a new video at 2.4 under the same impressions points at the package, not the topic.",
          "A range beats a target because every niche has its own normal. Gaming channels I have looked at often sit near 8 percent, while finance channels can live happily at 3. The number that matters is not the industry average. It is your own recent spread.",
        ],
      },
      {
        quote: "A CTR without context is a mood. A CTR against your own baseline is a measurement.",
      },
      {
        heading: "Conditions that break the comparison",
        bullets: [
          "Traffic source. A search-driven video and a browse-driven video pull different CTR, so separate them before you compare anything.",
          "Impressions floor. Ignore any video under about 10,000 impressions. The sample is too small to say much.",
          "Age. Read CTR at seven days, then again at thirty. Mixing the two windows flatters or punishes videos for no reason.",
          "Season. Your January baseline is not your July baseline, so refresh the range every quarter.",
        ],
        paragraphs: [
          "When one of these conditions changes, the comparison is no longer apples to apples. Flag the video in your sheet and leave it out of the baseline rather than letting an outlier move the range.",
        ],
      },
      {
        heading: "Build the range once, then reuse it",
        paragraphs: [
          "Recalculate the baseline every quarter and keep the old version. A range that drifts upward over a year is a quiet sign that either your packaging is improving or your audience is softening. Both are worth knowing.",
          "The sheet itself can be trivial: publish date, impressions at day seven, CTR at day seven, CTR at day thirty, and a notes column. Five columns and a filter give you more insight than any dashboard default view.",
        ],
      },
      {
        paragraphs: [
          "Before you decide a thumbnail failed, open the baseline. If the new number sits inside your normal spread, you have no evidence of a failure yet, only a video that performed like most of your videos. That is a very different reason to change something.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-impressions-and-ctr-as-a-pair",
    title: "Impressions Matter More Than CTR in Most Reports",
    excerpt:
      "Impressions and CTR have to be read as a pair, not in isolation. A low rate on a million impressions can easily beat a high one on a few thousand.",
    date: "2024-05-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A CTR only means something next to the impressions that produced it. Ten percent on eight hundred impressions is noise. Four percent on 400,000 is a signal.",
          "YouTube Studio shows the pair side by side for a reason. The reach column tells you how much the algorithm tested you, and the CTR column tells you how the test went. Reading one column while ignoring the other is how creators celebrate nothing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read impressions and CTR as a pair.",
          "Under 10,000 impressions, treat CTR as a rough signal.",
          "Above 100,000 impressions, a small CTR move is meaningful.",
          "Rising impressions with steady CTR means the algorithm is finding new viewers.",
        ]
      },
      {
        heading: "The two failure modes",
        paragraphs: [
          "Low impressions with a high CTR usually means the algorithm never found your audience, not that your package is bad. A video with a 9 percent CTR on 3,000 impressions may simply have been shown to your most loyal viewers. That number says nothing about strangers.",
          "High impressions with a low CTR is the other story, and it is often good news wearing a bad costume. If the algorithm spent 500,000 impressions on you, it believed in the video. A 3 percent CTR there can still be 15,000 clicks, which is more than many channels get in a month.",
        ],
      },
      {
        quote: "CTR is the percentage. Impressions are the size of the room. A percentage of a tiny room is still a tiny number of people.",
      },
      {
        heading: "How to read the pair in Studio",
        bullets: [
          "Under 10,000 impressions, read CTR as a rough signal only. Click volume is too small to trust.",
          "Between 10,000 and 100,000 impressions, compare CTR to your baseline and ignore the absolute value.",
          "Above 100,000 impressions, a small CTR move is meaningful and worth investigating.",
          "If impressions climb while CTR holds, the algorithm is finding new viewers successfully.",
        ],
      },
      {
        heading: "The trap of chasing CTR alone",
        paragraphs: [
          "A title engineered only for clicks can push CTR up and drag impressions down, because the algorithm measures satisfaction too. When retention sags, YouTube stops spending impressions on the video, and the reach column quietly collapses. The CTR looked great the whole time.",
          "I once watched a video sit at a handsome 6 percent CTR and die with 12,000 impressions because everyone who clicked left in twenty seconds. The percentage was fine. The distribution was the problem.",
        ],
      },
      {
        paragraphs: [
          "Judge packaging by the pair. A video is working when impressions are healthy and CTR clears your baseline at the same time. One without the other is a clue, not a verdict.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-early-ctr-skewed-by-subscribers",
    title: "Why the First Three Hours of CTR Mean Almost Nothing",
    excerpt:
      "The first few hours of CTR are skewed by subscribers and email. Wait until browse and suggested traffic arrives before you truly believe the number.",
    date: "2024-08-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "The first three hours of CTR are contaminated by your subscribers, your email list, and your most loyal fans. It is not a random sample of your audience. It is your fan club.",
          "Those people clicked before the video was pushed to cold viewers on browse and suggested. Their behavior is real, but it is not representative. If you decide the thumbnail failed at hour two, you are reading your most forgiving audience and calling it the market.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The first three hours of CTR measure loyalty, not packaging.",
          "Check at 48 hours for the first honest reading.",
          "Recheck at seven days for the stable number.",
          "Give evergreen videos twenty-one days.",
        ]
      },
      {
        heading: "Who shows up first",
        paragraphs: [
          "In the first hour, most views come from notifications, the subscriptions feed, and a small group of returning viewers. This group has already decided they like you. Their CTR runs two to three times higher than the long-run number, almost every time.",
          "Somewhere between hour three and hour twenty-four, browse and suggested traffic arrives. This is the traffic that decides a video's future, and it is the traffic that was missing when you panicked at breakfast.",
        ],
      },
      {
        quote: "The early CTR is a poll of your friends. Wait for the strangers to vote.",
      },
      {
        heading: "When to actually read the number",
        bullets: [
          "Check at 48 hours, once suggested and browse traffic has entered. That is your first honest reading.",
          "Recheck at seven days. The curve flattens, and the stable number is the one worth comparing to your baseline.",
          "Ignore the first-hour spike entirely. It measures loyalty, not packaging.",
          "If the video is evergreen or search-driven, give it twenty-one days before you judge the package.",
        ],
      },
      {
        heading: "The exception that proves the rule",
        paragraphs: [
          "Occasionally a video with a bad thumbnail gets almost no impressions in the first day, and the early CTR is your only clue that something is off. That is a reach problem, not a CTR problem. No CTR number, early or late, tells you why the algorithm withheld impressions.",
          "Treat a fast, low-reach start as a flag to look closer, not as proof. Pull the video up next to your recent uploads and compare thumbnails at phone size. The answer is usually visible there, not in the 2 a.m. dashboard refresh.",
        ],
      },
      {
        paragraphs: [
          "Stop checking CTR hourly. The number you want only appears after the crowd you do not know shows up, and they are never early.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-ctr-meaning-by-traffic-source",
    title: "CTR Means Three Different Things by Traffic Source",
    excerpt:
      "Search, browse, and suggested feeds each produce very different CTR numbers. Compare a video only against others that arrived through the same door.",
    date: "2024-12-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A single CTR figure blends several audiences with very different habits. Search, browse, and suggested traffic each produce their own click rate, and averaging them hides the story.",
          "Someone who typed a query into search has declared intent. Someone scrolling the home feed has declared nothing. Their click rates differ by design, so a blended number can move for reasons that have nothing to do with your thumbnail.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "CTR means three different things by traffic source.",
          "Read CTR per source in Advanced Mode.",
          "Compare only like with like.",
          "A browse-only CTR drop often means the algorithm changed the audience.",
        ]
      },
      {
        heading: "The three sources, briefly",
        paragraphs: [
          "Search traffic converts high because the viewer already knows what they want. A 6 to 12 percent CTR there is common, and it says the title matched the query. It rarely says the thumbnail is brilliant.",
          "Browse and home feed traffic is a cold audience. CTR is lower, often 2 to 5 percent, and this is the number where packaging does its real work. Suggested traffic sits in between and depends heavily on whether the recommending video shares your audience.",
        ],
      },
      {
        quote: "A blended CTR is an average of people who wanted you and people who have never heard of you.",
      },
      {
        heading: "Splitting the number",
        bullets: [
          "Open Advanced Mode in YouTube Analytics and select Traffic Source. Read CTR per source, not at the top level.",
          "Compare only like with like. A search-heavy video should be judged against your other search-heavy videos.",
          "Watch which source dominates. A video living on browse has a packaging question; one living on search has an intent story.",
          "A CTR drop in browse alone often means the algorithm changed who it showed the video to, not that your thumbnail got worse.",
        ],
      },
      {
        heading: "Why the top-level number lies",
        paragraphs: [
          "If a video's traffic shifts overnight from mostly search to mostly browse, the blended CTR falls even though nothing about the package changed. The audience changed. Reading the average as a judgment on your thumbnail is reading a change in the room as a change in the door.",
          "I have seen a tutorial lose two full points of CTR because it started getting suggested to a broader, colder audience. Same title. Same image. Different people.",
        ],
      },
      {
        paragraphs: [
          "Before you blame a thumbnail for a CTR dip, open the traffic source report. Most of the time the mix changed, and the mix is not something a new font fixes.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-survivorship-bias-in-packaging",
    title: "Survivorship Bias Is Skewing Your Packaging Data",
    excerpt:
      "You study only your top videos for packaging clues and quietly miss the base rate. For every hit there are dozens of identical thumbnails that went nowhere.",
    date: "2025-03-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "thumbnails"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "When you study only your hits, you learn what worked once, not what works. The videos that flopped used the same tricks and got no attention, and you never examine them.",
          "This is survivorship bias, and packaging analysis is full of it. You copy the title shape and red arrow from your best video and quietly forget the eleven other videos that used them and went nowhere.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Survivorship bias skews packaging data.",
          "Build a spreadsheet of every upload, not just the top five.",
          "Tag each with thumbnail style and title shape.",
          "Weight by frequency, not by a single win.",
        ]
      },
      {
        heading: "The base rate you skip",
        paragraphs: [
          "Say one video out of twelve in a batch used a close-up face and hit 200,000 views. The easy conclusion is that faces work. The honest question is how many of the other eleven also used faces and did not move.",
          "If your last twenty uploads used nine different thumbnail styles and only one broke out, you do not have a style that works. You have one lucky draw. The base rate across all twenty is the real lesson, and it is usually humbling.",
        ],
      },
      {
        quote: "A hit tells you something succeeded. Only the whole catalog tells you why.",
      },
      {
        heading: "How to study the losers",
        bullets: [
          "Build a spreadsheet of every upload from the last six months with its impressions and CTR, not just the top five.",
          "Tag each one with the thumbnail style and title shape you used. Now you can see which styles appear in both columns.",
          "Look for styles that show up often but never break out. Those are habits, not strategies.",
          "Weight by frequency. A style used twice with one win is weaker evidence than a style used ten times with four wins.",
        ],
      },
      {
        heading: "The same trap in borrowed ideas",
        paragraphs: [
          "It is worse when you copy another channel's approach. You see their viral thumbnail but not the forty they published before it. You are studying a survivor with no denominator.",
          "When I look at a big channel for ideas, I sort their uploads by oldest and scroll back through the forgettable ones. That graveyard is more instructive than the highlight reel, because it shows the experiments that did not pay off.",
        ],
      },
      {
        paragraphs: [
          "Collect your flops on purpose. The video that got 900 views with a great thumbnail teaches you more about your audience than the one that got lucky.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-isolating-title-and-thumbnail-tests",
    title: "Stop Swapping Title and Thumbnail in the Same Test",
    excerpt:
      "Changing the title and thumbnail at once proves almost nothing. Test one variable at a time, or you will credit the wrong change for the win, then repeat.",
    date: "2025-07-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["titles", "thumbnails"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "If you change the title and the thumbnail at the same time, you learn that something helped, not what helped. Split the variables or skip the test.",
          "Packaging is two levers, and they pull different behaviors. The thumbnail wins the half-second glance; the title confirms the promise. Mixing them in one change tells you the combination moved, which is useless for the next video.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Stop swapping title and thumbnail in the same test.",
          "Change the thumbnail first, hold the title.",
          "Change the title next, hold the thumbnail.",
          "Keep a log of which lever you moved.",
        ]
      },
      {
        heading: "Why the combo test fails",
        paragraphs: [
          "You swap both on a video and CTR rises from 4 to 5.2 percent. Did the stronger face do it, or the number in the title? You cannot say, so you cannot repeat it reliably. You are back to guessing, just with more spreadsheets.",
          "The reverse is worse. CTR drops after a double change, and now you do not know which of the two new ideas to abandon. Both might be good. One might be a keeper hidden behind a bad partner.",
        ],
      },
      {
        quote: "A test with two variables returns one answer: something happened.",
      },
      {
        heading: "How to isolate without waiting forever",
        bullets: [
          "Change the thumbnail first and hold the title. Give it seven days, then read CTR against your baseline.",
          "Change the title next and hold the new thumbnail. Another seven days, another reading.",
          "If you cannot wait, run the two versions across two similar videos released a week apart, not the same video twice.",
          "Keep a log of which lever you moved and the result. After ten tests the pattern is yours.",
        ],
      },
      {
        heading: "The honest limit of small-channel testing",
        paragraphs: [
          "On a channel under 10,000 subscribers you rarely have enough traffic to test cleanly, even with isolation. Two videos with 2,000 impressions each cannot separate a real effect from a Tuesday.",
          "When traffic is thin, run deliberate choices instead of experiments, and learn from qualitative feedback: comments, messages, and the retention curve. Save A/B testing for when you have the impressions to support it.",
        ],
      },
      {
        paragraphs: [
          "If you must change two things, admit you are redesigning, not testing. Testing means one lever, one reading, one conclusion.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-reading-ctr-decay-curve",
    title: "CTR Decay Is Normal, but the Curve Shape Is Not",
    excerpt:
      "CTR almost always falls after the first burst of impressions, and that is expected. That slide is normal; the exact shape of the curve is what you read.",
    date: "2025-10-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "CTR almost always falls after the first burst of impressions, and that is expected. The speed and shape of the fall tell you more than the starting number.",
          "A video that opens at 9 percent and settles at 4 over a week is behaving normally. The high early number came from loyal viewers, and the settle is the audience arriving. What matters is where and how it flattens.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Decay is normal, but the curve shape is not.",
          "Log day one, seven, and thirty CTR.",
          "The floor where the number stops moving is your true packaging performance.",
          "A falling CTR with steady retention is a smaller problem.",
        ]
      },
      {
        heading: "Reading three curve shapes",
        paragraphs: [
          "A gentle slope that flattens high means the video kept finding new audiences without losing them. This is the shape you want, and it usually means the package and the content agree.",
          "A steep cliff in the first day, settling very low, means the algorithm tested the video and the broad audience rejected the package. The early fans inflated the start; the strangers did not follow.",
          "A slow, steady decline over weeks is simply decay as the topic ages and the algorithm moves on. That is not a packaging problem. It is a shelf life.",
        ],
      },
      {
        quote: "The first numbers are a greeting. The final numbers are the verdict.",
      },
      {
        heading: "What to log each week",
        bullets: [
          "Day one CTR, day seven CTR, and day thirty CTR. Three points describe the curve.",
          "The gap between day one and day seven. A large drop means the loyal-viewer effect is strong.",
          "Where the number stops moving. That floor is your true packaging performance.",
          "Retention at the same checkpoints. A falling CTR with steady retention is a smaller problem than either alone suggests.",
        ],
      },
      {
        heading: "When decay is actually good",
        paragraphs: [
          "A video that decays slowly can out-earn a video that spikes. A steady 3 percent that holds for months beats a 7 percent that dies in a week once you count total watch time.",
          "I stopped chasing the highest opening CTR after I noticed my best long-term videos never had the biggest day-one numbers. They had the flattest curves, and the curves compounded while the spikes did not.",
        ],
      },
      {
        paragraphs: [
          "Read the whole curve before you judge a package. The opening is a rumor, and the floor is the fact.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-splitting-ctr-new-returning-viewers",
    title: "Split Your CTR Numbers by New and Returning Viewers",
    excerpt:
      "Returning viewers click your videos far more often than strangers. Mix them together and your CTR number hides which group actually responded.",
    date: "2026-01-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Returning viewers click your videos far more often than strangers. Blend the two and your CTR hides which group actually responded to the package.",
          "Fans click out of habit and trust. New viewers click out of interest in the promise. Those are different tests, and a single average runs them together until you cannot tell which one failed.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Split CTR by new and returning viewers.",
          "High new-viewer CTR with low returning means you are finding fresh audiences.",
          "High returning CTR with low new means you are preaching to the choir.",
          "Both high means packaging and content pull the same direction.",
        ]
      },
      {
        heading: "Why the split matters",
        paragraphs: [
          "In YouTube Analytics, the Audience tab separates new and returning viewers. On most channels, returning viewers click at two to four times the rate of new ones. A video with a 5 percent blended CTR might be 9 percent from returning viewers and 3 percent from new ones.",
          "Those are two different verdicts. The returning number tells you the channel is healthy. The new number tells you whether the packaging works on people who owe you nothing, and that is the number that governs growth.",
        ],
      },
      {
        quote: "Returning viewers are grading your relationship. New viewers are grading your thumbnail.",
      },
      {
        heading: "What each pattern tells you",
        bullets: [
          "High new-viewer CTR with low returning means your packaging is finding fresh audiences. Watch retention on those new viewers closely.",
          "High returning CTR with low new-viewer CTR means you are preaching to the choir. The package is not earning strangers.",
          "Both low points at the topic or the timing, not the thumbnail alone.",
          "Both high is the goal, and it usually means the title, image, and content are all pulling the same direction.",
        ],
      },
      {
        heading: "The number to actually grow",
        paragraphs: [
          "Growth lives in the new-viewer column. You can keep a channel alive on loyal viewers, but you cannot grow one on them. If the new-viewer CTR sits under 2 percent, the package is not surviving the cold test.",
          "I pull the new-viewer CTR for my last ten uploads every month. It is a more honest scoreboard than subscriber count, because it measures strangers, and strangers are where the next thousand subscribers come from.",
        ],
      },
      {
        paragraphs: [
          "A blended CTR flatters you with your own fans. Split the number before you trust it, and grow the column that comes from people who have never heard of you.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-device-differences-in-ctr",
    title: "What Counts as Good CTR Depends on the Device",
    excerpt:
      "Phone, desktop, and TV viewers behave differently. A thumbnail that wins on a big screen can quietly lose on the phone where most watching happens.",
    date: "2026-05-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["thumbnails", "titles"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Most watching happens on a phone, where thumbnails render small and titles wrap. A CTR that looks strong across all devices can hide a weak phone performance, which is the one that matters.",
          "YouTube Analytics lets you read device type, and the split is rarely even. If 65 percent of your audience watches on mobile, the mobile CTR is roughly two-thirds of your real result. The desktop number is a minority opinion.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "What counts as good CTR depends on the device.",
          "Check the device breakdown before judging.",
          "If mobile lags desktop by two points, the thumbnail is too fine.",
          "Do not let high TV CTR inflate your read.",
        ]
      },
      {
        heading: "The phone is the real canvas",
        paragraphs: [
          "On a phone, the thumbnail is a thumb-sized square and the title is truncated after a few words. Detail you are proud of disappears, and the first three words of the title carry almost all the weight.",
          "A thumbnail that reads well on a 27-inch monitor can become a gray smudge at phone size. The fix is contrast and one clear subject, not more resolution. I design at 320 pixels wide and only zoom in to polish.",
        ],
      },
      {
        quote: "Design for the phone and the desktop takes care of itself. The reverse is not true.",
      },
      {
        heading: "Reading the device split",
        bullets: [
          "Check the device breakdown before judging any CTR. A desktop-heavy audience rewards different packaging.",
          "If mobile CTR lags desktop CTR by more than two points, the thumbnail is too fine or the title too wordy.",
          "Test titles by reading only the first three words. If they do not stand alone, shorten the title.",
          "TV traffic clicks highest of all, often above 8 percent, because viewers are relaxed and browsing. Do not let it inflate your read.",
        ],
      },
      {
        heading: "Practical design rules that survive the phone",
        paragraphs: [
          "Use two or three fat words at most on the image, high contrast, and a face or object that fills the frame. Keep the title's payoff in the first four words so it survives truncation.",
          "These rules cost nothing on desktop and save you on mobile. My mobile CTR rose about a full point after I stopped putting five-word labels in the corners where phones crop them.",
        ],
      },
      {
        paragraphs: [
          "Read CTR for the device most of your viewers use, and design there first. The big-screen version is a bonus, not the target.",
        ],
      },
    ],
  },
  {
    slug: "packaging2-reading-reach-and-ctr-together",
    title: "Read Reach and CTR Together Before You Change Anything",
    excerpt:
      "Impressions up and CTR down is not automatically a problem. Read reach and click rate together before you rewrite a thumbnail that is probably fine.",
    date: "2026-08-21",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Rising impressions with a falling CTR is not automatically bad, and falling impressions with a rising CTR is not automatically good. Neither number decides alone.",
          "The pair describes what the algorithm did and how the audience responded. Together they tell you whether to touch the package, the topic, or nothing at all.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read reach and CTR together before changing anything.",
          "Healthy reach with under-baseline CTR for two videos means fix the packaging.",
          "Low reach with above-baseline CTR means the topic or timing is the issue.",
          "Low reach and low CTR means change the idea, not the font.",
        ]
      },
      {
        heading: "The four quadrants",
        paragraphs: [
          "Rising impressions and rising CTR is the easy case. Do more of whatever that was.",
          "Rising impressions with a falling CTR usually means the algorithm widened the audience to colder viewers. That is often the natural life of a growing video, not a failure. The question is whether retention is holding.",
          "Falling impressions with a rising CTR means the algorithm stopped spending reach even though the people who saw it clicked. That usually points to weak retention or a topic the platform cooled on, not a packaging flaw.",
          "Both falling is the clear signal that something is wrong. Start with the topic and the first thirty seconds.",
        ],
      },
      {
        quote: "Impressions tell you how far the net was cast. CTR tells you how many fish bit. You need both to know whether to move the boat.",
      },
      {
        heading: "The decisions the pair supports",
        bullets: [
          "Healthy reach and CTR above baseline: leave it alone and let it run.",
          "Healthy reach and CTR under baseline for two videos in a row: fix the packaging.",
          "Low reach and CTR above baseline: the package is fine, the topic or timing is the issue.",
          "Low reach and low CTR: change the idea, not the font.",
          "High reach, sagging CTR, steady retention: let it keep working, since watch time still accrues.",
        ],
      },
      {
        heading: "Why single-number decisions backfire",
        paragraphs: [
          "If you rewrite a thumbnail because CTR dipped while impressions climbed, you may be fixing a healthy video that was simply reaching colder people. The rewrite can reset its momentum and lose the reach it had earned.",
          "I have done exactly that. A video at 180,000 impressions with a sliding CTR looked like a problem. I changed the thumbnail, impressions fell off a cliff, and the CTR improved on a fraction of the reach. I optimized myself into a smaller audience.",
        ],
      },
      {
        paragraphs: [
          "Before you change anything, put the two numbers side by side and ask what the algorithm did and what the audience did. The answer is usually in the relationship, not in either metric.",
        ],
      },
    ],
  },
];
