import { Activity, BarChart3, Clock, Eye, Layers, Repeat, Search, Target, TrendingUp, Users } from "lucide-react";
import type { BlogPost } from "../types";

export const batch107: BlogPost[] = [
  {
    slug: "analytics-reading-youtube-dashboard",
    title: "How to Read Your YouTube Analytics Dashboard Well",
    excerpt: "Learning to read the YouTube analytics dashboard starts on the overview tab. See which numbers answer real questions and which ones just add noise.",
    date: "2027-04-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Start with the overview tab",
        paragraphs: [
          "The YouTube analytics dashboard answers one question well: what happened to your videos after they went live. Open the overview tab first and ignore everything else until it makes sense. That single screen holds views, watch time, and subscriber change in one place, which is enough for most decisions.",
          "Most creators click into every report on day one and drown. The dashboard is a map, not a to-do list. Learn the overview, then move to one deeper report only when a number there raises a specific question."
        ]
      },
      {
        heading: "The four tabs that matter",
        bullets: [
          "Overview: the starting point for views, watch time, and subscriber movement across the whole channel.",
          "Content: a per-video and per-format breakdown so you can compare a long upload against a short.",
          "Audience: who is watching, where they came from, and which videos pulled them in.",
          "Revenue: the money side, useful only after the watch numbers make sense."
        ]
      },
      {
        quote: "The dashboard is a map, not a to-do list."
      },
      {
        heading: "Read numbers as trends, not snapshots",
        paragraphs: [
          "A single day of data says almost nothing. Compare this week to the last four and look for the direction. A view count that dips on a Tuesday is noise; a line that slides down for three weeks is a signal worth chasing.",
          "Set the date range to 28 days for a stable read. Short windows jump around and push you toward fake conclusions. Longer windows smooth the spikes and show the shape of your channel."
        ]
      },
      {
        heading: "Follow one question at a time",
        paragraphs: [
          "Pick a question before you open the dashboard, like why last week was quiet or which video kept people watching. Then find the one report that answers it. This keeps a ten-minute review from turning into an hour of scrolling.",
          "Write the answer down somewhere. A short note each week builds a record the dashboard will not keep for you. After a month, those notes show patterns that no single report reveals."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start on the overview tab and only go deeper when a question demands it.",
          "Judge trends over 28 days, not single days.",
          "Bring one question per review so the session stays short.",
          "Keep your own notes because the dashboard forgets."
        ]
      }
    ]
  },
  {
    slug: "analytics-impressions-vs-views",
    title: "Understanding Impressions vs Views on YouTube",
    excerpt: "Impressions and views are not the same number, and the gap between them tells a story. Learn how YouTube counts each one and what that gap points to.",
    date: "2027-04-04",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "The plain difference",
        paragraphs: [
          "An impression counts every time YouTube shows one of your thumbnails to a viewer on a feed or search page. A view counts a playback. They measure two different moments: the offer and the click. Confusing them is the most common analytics mistake on the platform.",
          "A video can collect a million impressions and a small slice of views. That gap is not failure by itself. It tells you the thumbnail and title reached people, and then something in the packaging or the topic failed to pull them through."
        ]
      },
      {
        heading: "Why the gap matters",
        paragraphs: [
          "If impressions are high and views are low, the feed trusts you enough to show the work, but the packaging is not convincing. If impressions are low and views are high, your packaging works but the feed has not decided to push the video yet.",
          "Neither situation is permanent. Low impressions with strong views often means the video needs more time or a better hook in the first minute. High impressions with weak views usually means the thumbnail or title needs a rewrite."
        ]
      },
      {
        quote: "Impressions measure the offer. Views measure the answer."
      },
      {
        heading: "What to change first",
        bullets: [
          "Thumbnail and title: check whether the promise is clear at a glance.",
          "Topic fit: a strong impression count on an off-topic video will still stall.",
          "First 30 seconds: if people click and leave, the opening overpromised.",
          "Posting time: feeds behave differently on a weekday morning than a weekend night."
        ]
      },
      {
        heading: "Reading them together",
        paragraphs: [
          "Open the reach report for a single video and look at the impression count next to the click rate. They sit side by side for a reason. Together they tell a small story about who saw the cover and who chose to open it.",
          "Do not chase impressions alone. A video can pile up impressions across many feeds and still earn little watch time. Views plus watch time tell you whether the attention stuck, which is the number that grows a channel."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "An impression is a thumbnail shown, and a view is a playback.",
          "A wide gap points to packaging, not to bad luck.",
          "Read impressions next to click rate, never in isolation.",
          "Watch time decides whether the attention was worth having."
        ]
      }
    ]
  },
  {
    slug: "analytics-click-through-rate-basics",
    title: "What Your Click-Through Rate Is Really Telling You",
    excerpt: "Click-through rate is the share of people who see your thumbnail and click. Learn what a normal range looks like and when a low number needs a fix.",
    date: "2027-04-07",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "A one-line definition",
        paragraphs: [
          "Click-through rate, usually called CTR, is views divided by impressions. It answers a narrow question: of everyone the thumbnail reached, how many chose to click. YouTube shows it as a percentage on each video.",
          "A rate of five percent means five out of a hundred people who saw the cover opened the video. That number moves with the thumbnail, the title, the topic, and the audience the feed chose to test."
        ]
      },
      {
        heading: "Ranges shift by channel",
        paragraphs: [
          "There is no universal good number. A niche channel with a hungry audience can sit far above a broad entertainment channel and both can be healthy. Benchmark against your own last ten videos before you compare yourself to anyone else.",
          "Look at the median more than the average. One breakout can drag an average up and hide that most of your recent covers underperform. The median tells you what a typical video earns."
        ]
      },
      {
        heading: "When a low rate needs action",
        bullets: [
          "Below your own median twice in a row: the packaging, not the luck, needs a look.",
          "High impressions with a low rate: the feed is testing you on a wide audience that does not fit.",
          "High rate with low impressions: great packaging, and the video may just need more time.",
          "A sudden drop on one video: check the thumbnail at small size, since most views happen tiny."
        ]
      },
      {
        quote: "CTR is a signal about the cover, not a verdict on the video."
      },
      {
        heading: "Pair it with retention",
        paragraphs: [
          "A great CTR with poor retention means you sold a promise the video never kept. That combination teaches the feed to trust you less over time. You want a decent click rate and people staying past the first minute.",
          "Read CTR and average view duration as a pair. One measures the pull, the other measures the payoff. A channel that grows has both moving in the same direction, and neither one alone tells the full story."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "CTR is views divided by impressions, shown as a percentage.",
          "Your own median beats any published range.",
          "A high rate with weak retention is a broken promise.",
          "Read CTR beside average view duration, never alone."
        ]
      }
    ]
  },
  {
    slug: "analytics-watch-time-explained",
    title: "Why Watch Time Is the Metric YouTube Rewards Most",
    excerpt: "Watch time is the total minutes people spend on your videos. Learn why it drives recommendations and how to grow it without gaming the number.",
    date: "2027-04-10",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "The number YouTube weighs most",
        paragraphs: [
          "Watch time is the total minutes viewers spend watching your videos. YouTube uses it to decide which videos to recommend next. A video that holds people longer earns more chances to be shown, often more than a video with a higher view count.",
          "This is why a quiet video with deep attention can outgrow a flashy one with shallow clicks. Minutes watched, not clicks collected, signal that the work is worth spreading. The platform follows attention, not applause."
        ]
      },
      {
        heading: "Total versus average",
        paragraphs: [
          "Total watch time rises with every new video you publish, so it mostly measures how much you have made. Average view duration tells you how well each video holds a person. Track both, since one is a scoreboard and the other is a skill.",
          "A long video can add a lot of total watch time while holding each viewer poorly. Do not let the total flatter a weak edit. Check how far people actually got before you celebrate the hours."
        ]
      },
      {
        heading: "Ways to grow real watch time",
        bullets: [
          "Tighten the opening so the first thirty seconds earn the next thirty.",
          "Cut the middle padding that makes people reach for their phone.",
          "Match the length to the topic instead of stretching for a target.",
          "End on a reason to stay for the next video rather than a slow fade."
        ]
      },
      {
        quote: "The platform follows attention, not applause."
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Stretching a video to raise minutes backfires. People leave earlier and the feed notices. Padding the runtime wins a small gain in total and a real loss in trust.",
          "Do not buy views either. Bought minutes come from people who never cared, and they drag your averages down while costing money. Slow, honest growth beats a spike that fools no one but you."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Watch time is the total minutes people spend on your videos.",
          "Total time is a scoreboard, and average duration is a skill.",
          "Earn the first thirty seconds and the rest gets easier.",
          "Padding runtime and buying views both cost you in the end."
        ]
      }
    ]
  },
  {
    slug: "analytics-average-view-duration",
    title: "Reading Average View Duration Without the Panic",
    excerpt: "Average view duration can look low and still be fine. Learn what the number really measures and which retention curves deserve action. Here is how to read it.",
    date: "2027-04-13",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "What the number counts",
        paragraphs: [
          "Average view duration is the typical time a viewer spends on one video before leaving. A four-minute average on a ten-minute video means most people watched less than half. On a two-minute video, the same four minutes is impossible, so always read it against the length.",
          "The number rarely matches how a video feels. A strong intro and a weak middle average out to a mediocre figure even when the start was excellent. Open the retention curve to see where the drop actually happens."
        ]
      },
      {
        heading: "Read the curve, not just the average",
        paragraphs: [
          "The retention graph shows the share of viewers still watching at each moment. A steep drop in the first thirty seconds points at the hook. A slow slide through the middle points at pacing. A cliff near the end is usually normal, since people leave once they get what they came for.",
          "Compare curves across your own videos. A curve that holds above your usual line is a win even if the total views are small. Patterns across several videos are worth more than any single reading."
        ]
      },
      {
        heading: "Causes worth checking",
        bullets: [
          "A promise in the title the video never delivers.",
          "A long intro before the actual point arrives.",
          "A tangent that pulls away from the topic people clicked for.",
          "A music or edit choice that makes watching tiring."
        ]
      },
      {
        quote: "A low average with a steady curve is far better than a high average with a cliff at the start."
      },
      {
        heading: "Set a realistic target",
        paragraphs: [
          "Judge duration against your own history and the length of the video. A short clip holding most of its length is a win. A long video holding half is often normal, since long runs invite departures.",
          "Pick one thing to improve per video. If the first thirty seconds leak, fix the opening. If the middle sags, tighten the script. Small, focused fixes compound faster than chasing a single average."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Average view duration only makes sense next to the video length.",
          "The retention curve shows where people leave and why.",
          "A steady curve beats a high average that hides an early cliff.",
          "Fix one leak per video instead of chasing the overall number."
        ]
      }
    ]
  },
  {
    slug: "analytics-subscriber-sources",
    title: "See Where Your YouTube Subscribers Really Come From",
    excerpt: "Subscriber sources show which videos and pages earn your followers each week. Learn to read the report so you can repeat the moments that convert.",
    date: "2027-04-16",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "The report that shows the why",
        paragraphs: [
          "The subscriber sources report shows where each new follower came from. It splits them by videos, channel page, shorts feed, and other entry points. Most creators check the count and skip the source. The source is the useful part.",
          "If most subscribers arrive from one video, that video is doing sales work for the whole channel. If they arrive from the channel page, your branding and layout are pulling weight. Each source points to a different lever."
        ]
      },
      {
        heading: "Common sources and what they mean",
        bullets: [
          "From a video: the content converted a viewer into a follower, so study that video closely.",
          "From the channel page: the look and description did the work, and a banner or bio change can lift it.",
          "From shorts: fast growth, but the audience may watch shorts and skip long uploads.",
          "From search: steady followers who came with a specific need and may return for more."
        ]
      },
      {
        quote: "A subscriber is a viewer who decided your next video was worth a click before it existed."
      },
      {
        heading: "Match the content to the source",
        paragraphs: [
          "If shorts bring followers but long videos lose them, the two formats are pulling different crowds. Give the shorts audience a clear path to the long work, or accept that they are a separate group with its own value.",
          "Look for the video that converts best, then ask what it did. A clear topic, a strong promise, and a reason to return often beat a flashy edit. Repeat the structure, not the exact video."
        ]
      },
      {
        heading: "Do not obsess over one week",
        paragraphs: [
          "Subscriber counts swing with every upload and every viral moment. A single week tells you little. Four weeks of sources show which entry points are steady and which were a one-time spike from a lucky video.",
          "Use the report to decide where to point people next. If search brings committed followers, write for the questions they typed. If shorts bring the volume, keep feeding that feed while you build the bridge to longer work."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The report shows where each follower came from, not just how many.",
          "One video can carry the whole channel and deserves a close look.",
          "Match the next upload to whichever source converts best.",
          "Read four weeks of sources before trusting a single spike."
        ]
      }
    ]
  },
  {
    slug: "analytics-real-time-vs-48-hour",
    title: "What Real-Time Data vs the 48-Hour YouTube Report Shows",
    excerpt: "Real-time data and the 48-hour report answer different questions. Learn when to trust the live view count and when to wait for numbers that settle.",
    date: "2027-04-19",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Why the two disagree",
        paragraphs: [
          "Real-time data updates minute by minute and shows what is happening right now. The 48-hour report waits for the platform to filter and stabilize, so it changes less. Early numbers look exciting and drift as the system cleans up repeated or low-quality plays.",
          "The live count is a rough pulse, not a final score. Treat it as a smoke signal during a launch and a curiosity later. For decisions, wait until the figures settle."
        ]
      },
      {
        heading: "When the live view helps",
        bullets: [
          "In the first hour: a quick read on whether the launch is catching.",
          "After a post: a sense of whether a community or a feed picked it up.",
          "During a live stream: a real-time check on who is still watching.",
          "Never for comparisons, since the early numbers are still moving."
        ]
      },
      {
        heading: "Why the 48-hour report is calmer",
        paragraphs: [
          "Once the system finishes filtering, the numbers stop jumping. This is the version worth comparing across videos. The same date range read later will tell a truer story than the screenshot you took on launch day.",
          "If a video looks slow at hour two, do not panic or delete it. Many good videos find their audience over days, not minutes. The first hour rewards novelty, and the rest of the week rewards fit."
        ]
      },
      {
        quote: "The live count is a smoke signal, not a verdict."
      },
      {
        heading: "A simple rule to follow",
        paragraphs: [
          "Check real-time once after you publish, mainly to catch a broken upload or a wrong thumbnail. Then close it and come back after two days. Choose one moment to review and stick to it so you stop refreshing.",
          "Refreshing does not change the result. It only changes your mood, and usually for the worse. Let the data settle, then make one decision with the calm version in front of you."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Real-time data pulses, and the 48-hour report settles.",
          "Use the live count to spot a broken upload, not to judge a launch.",
          "Early numbers drift, so never compare videos at hour two.",
          "Pick one review moment and stop refreshing between them."
        ]
      }
    ]
  },
  {
    slug: "analytics-benchmarking-your-channel",
    title: "How to Benchmark Your YouTube Channel Properly",
    excerpt: "Benchmarks help you judge your numbers against something real. Learn to build comparisons from your own channel before you look at anyone else.",
    date: "2027-04-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Compare yourself to yourself first",
        paragraphs: [
          "The only benchmark that changes your next video is your own recent history. A five percent click rate means little alone; it means a lot next to your last ten videos. Build your baseline from your own work.",
          "Pull the last twenty videos and list their click rate, watch time, and average duration. The middle value of each becomes your line. Anything well above it is worth copying, and anything well below it is worth a look."
        ]
      },
      {
        heading: "How to build your baseline",
        bullets: [
          "Use the last twenty videos, not the last two, so one outlier cannot skew the line.",
          "Track the median, since a single viral hit distorts an average.",
          "Keep the format separate, since shorts and long videos do not compare.",
          "Refresh the baseline every month as the channel grows."
        ]
      },
      {
        quote: "Your last twenty videos are a better mirror than a stranger's highlight reel."
      },
      {
        heading: "Fight the urge to compare outward",
        paragraphs: [
          "Big channels have teams, budgets, and years of history you cannot see from the outside. Copying their numbers is like comparing a home kitchen to a restaurant. Compare process and topic choices, not raw results.",
          "When you do look outside, study structure rather than figures. How a large channel opens, how it packages an idea, and how it keeps a promise are lessons you can use. Their view counts are not."
        ]
      },
      {
        heading: "Set a target you can hit",
        paragraphs: [
          "Pick one benchmark to beat this month, like raising your median click rate by half a point. A small, clear target beats a vague wish to grow. Then change one thing at a time so you know what worked.",
          "After a month, check the line again. If it moved, keep the habit. If it did not, the change and the result are both on record, and that record is how a channel learns to improve."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build your baseline from your own last twenty videos.",
          "Use the median so one viral hit cannot skew the line.",
          "Study structure in other channels, not their raw numbers.",
          "Chase one small benchmark at a time and log the result."
        ]
      }
    ]
  },
  {
    slug: "analytics-metrics-to-ignore",
    title: "The YouTube Metrics You Can Safely Ignore Each Week",
    excerpt: "Some YouTube metrics look important and never change a decision. Learn which ones to ignore every time so the numbers that matter get your attention.",
    date: "2027-04-25",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The cost of watching everything",
        paragraphs: [
          "Every dashboard number competes for your attention, and the wrong ones win. Metrics you never act on cost you focus that a handful of useful numbers would use better. Ignoring noise is a skill.",
          "Start by naming the three numbers you actually use each week, then close the rest. If a figure has never changed a decision, it is decoration."
        ]
      },
      {
        heading: "Numbers that rarely earn their keep",
        bullets: [
          "Likes: nice to see, weak as a guide, since the people who liked already watched.",
          "Comment count alone: engagement signals, but a low count on a clear explainer can still be healthy.",
          "Subscriber count per video: too small a sample on one upload to mean much.",
          "Traffic source on one video: swings hard and settles after a month."
        ]
      },
      {
        heading: "Why some numbers mislead",
        paragraphs: [
          "A high like rate can sit on a video that nobody finishes, because likes come from the first wave of loyal viewers. A comment spike can come from one angry thread and tell you little about the topic. Signals without context can point the wrong way.",
          "None of these numbers are worthless in every case. The point is that they rarely decide what you make next. Views, watch time, and click rate decide far more."
        ]
      },
      {
        quote: "If a metric has never changed a decision, it is decoration."
      },
      {
        heading: "What to watch instead",
        paragraphs: [
          "Keep a short list: impressions, click rate, average view duration, and subscribers from video. Four numbers cover the whole loop from being seen to being followed. Everything else is a detail you can reach for when a specific question comes up.",
          "This short list keeps your weekly review quick. You spend ten minutes on the numbers that shape your next upload instead of an hour on numbers that never will."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Likes, comments, and one-week traffic sources rarely drive decisions.",
          "A high like rate can sit on a video nobody finishes.",
          "Keep four numbers: impressions, click rate, duration, subscribers.",
          "Name your three weekly numbers and close the rest."
        ]
      }
    ]
  },
  {
    slug: "analytics-weekly-review-routine",
    title: "Build a Weekly YouTube Analytics Routine That Sticks",
    excerpt: "A weekly analytics routine turns scattered numbers into one clear decision. Follow a short checklist that fits in ten minutes and actually sticks.",
    date: "2027-04-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "audience", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Why weekly beats daily",
        paragraphs: [
          "Daily checking gives you noise and anxiety without decisions. Weekly gives every video time to settle and every comparison a fair base. One fixed slot each week is enough to run a channel well.",
          "Pick a day and a time and protect it. The routine only works if it happens without a debate. Same slot, ten minutes, done."
        ]
      },
      {
        heading: "The ten-minute checklist",
        bullets: [
          "Scan the overview for views, watch time, and subscriber change against last week.",
          "List the top three videos by watch time and note what they share.",
          "Check the bottom three and name the likely cause.",
          "Read the retention curve of your newest video and find the biggest drop.",
          "Write one sentence: the change you will make in the next upload."
        ]
      },
      {
        quote: "One decision a week beats a hundred idle checks."
      },
      {
        heading: "Turn the review into action",
        paragraphs: [
          "Data without a decision is just scrolling. End every session with one small change, like a new thumbnail style or a tighter opening. Then test that change across the next few videos before judging it.",
          "Keep a running note of what you tried and what happened. Over a month, the note becomes a record no dashboard keeps. It shows which experiments worked and which were a waste."
        ]
      },
      {
        heading: "Make it survive a busy week",
        paragraphs: [
          "When a week is crowded, do the short version: overview, one retention curve, one sentence. A trimmed routine still beats a skipped one. Consistency matters more than depth here.",
          "If you miss a week, do not restart the whole system. Just pick up the next slot. A routine with a missed turn is normal, and the point is the return, not perfection."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A weekly slot beats daily refreshing for clear decisions.",
          "Run the five-step checklist and finish in ten minutes.",
          "End every review with one change for the next upload.",
          "Keep a running note so experiments do not get forgotten."
        ]
      }
    ]
  }
];
