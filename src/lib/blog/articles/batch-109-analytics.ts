import { Activity, BarChart3, Compass, Eye, Film, Layers, Rocket, Search, TrendingUp, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch109: BlogPost[] = [
  {
    slug: "analytics-browse-suggested-search-traffic",
    title: "Browse Vs Suggested Vs Search: Reading YouTube Traffic",
    excerpt: "Browse, suggested, and search bring viewers for different reasons. Learn what each traffic source means for how your videos actually get discovered.",
    date: "2027-06-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Three sources, three intents",
        paragraphs: [
          "Browse, suggested, and search are the three main ways people find videos on YouTube. Browse puts your thumbnail on the home feed, suggested places you beside another video, and search answers a typed query. Each one reflects a different moment of intent, so treating them as one number hides the story.",
          "A video that wins on browse is riding impressions and click-through, not keywords. A video that wins on search is answering a question people already had. If you judge both with the same yardstick you will fix the wrong thing."
        ]
      },
      {
        heading: "What each source really tells you",
        paragraphs: [
          "Browse traffic leans on your existing audience and the home feed algorithm. It rewards consistency, strong thumbnails, and a channel people recognize. A sudden browse spike usually means the feed is testing you with a new audience.",
          "Suggested traffic comes from recommendation rails next to other videos. It says the algorithm sees overlap between your topic and whatever the viewer just watched. Search traffic is slower and steadier. It compounds because old videos keep getting found long after upload."
        ]
      },
      {
        quote: "A browse spike is a test, not a trophy. The feed is asking whether strangers will stay, and the answer lives in your retention graph."
      },
      {
        heading: "How the split usually looks",
        bullets: [
          "Browse dominates for channels with a loyal following and reliable uploads.",
          "Suggested surges when one video matches a popular topic and gets pulled into other people's sessions.",
          "Search grows over months and rarely spikes, which makes it easy to ignore until it is half your traffic.",
          "Direct and external traffic are small but tell you who is sharing your work off-platform."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read each source as a separate signal instead of one blended view count.",
          "Match your fix to the source: thumbnails for browse, topic fit for suggested, titles for search.",
          "Track search traffic monthly because it compounds quietly.",
          "When two sources move at once, dig into which video triggered the change."
        ]
      },
      {
        heading: "Where to focus first",
        paragraphs: [
          "Start with whichever source already sends you the most views. Improving a channel's strongest lane is faster than building a new one from zero. Once that lane is stable, spend a month pushing search by targeting phrases your best videos already rank for.",
          "The goal is not to maximize one source. It is to know which source is doing the work this month so you can make one honest change and measure it."
        ]
      }
    ]
  },
  {
    slug: "analytics-reading-traffic-sources-report",
    title: "How To Read The Traffic Sources Report Without Guessing",
    excerpt: "The traffic sources report can look like noise. Here is how to read the numbers, spot real shifts, and turn the traffic sources report into decisions.",
    date: "2027-06-04",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Start with one video, not the channel",
        paragraphs: [
          "The channel-level traffic sources report blends every video into one pie chart, which is why it rarely points to an action. Open a single video instead. The report resets to that video's last 28 or 365 days and the proportions become readable.",
          "Once you are looking at one upload, ask a simple question. Which source is carrying it, and did that change after the last time I touched the title or thumbnail? That is the whole method."
        ]
      },
      {
        heading: "Pick the right date range",
        paragraphs: [
          "Traffic sources shift with the window you choose. A 7-day view tells you what is happening now. A 365-day view tells you what built the video over its life. Comparing a fresh upload on a year window makes a promising start look flat.",
          "For new videos, watch the first 48 hours on the shortest window and record the split. Then check again at two weeks. The gap between those two snapshots is where the real signal lives."
        ]
      },
      {
        heading: "The columns that matter",
        bullets: [
          "Views per source tells you where the volume is, but not whether viewers stayed.",
          "Average view duration per source shows which audience actually watched.",
          "Impressions and click-through on browse separate a thumbnail problem from a topic problem.",
          "Watch time percentage matters more than raw views when you compare sources."
        ]
      },
      {
        quote: "Views tell you who showed up. Watch time tells you who stayed. The traffic sources report only gets useful when you read both columns together."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Analyze one video at a time before judging the channel.",
          "Match the date range to the age of the video.",
          "Treat views and watch time as a pair, never alone.",
          "Write down the split after each change so you have a baseline."
        ]
      },
      {
        heading: "Turn the reading into a move",
        paragraphs: [
          "If browse views are high but click-through is low, your thumbnail is the lever. If browse click-through is fine but retention drops, the hook or pacing is the problem. If suggested carries the video and search is missing, your title lacks the phrases people type.",
          "One report, one decision. That habit beats any dashboard."
        ]
      }
    ]
  },
  {
    slug: "analytics-search-terms-report",
    title: "Mining The Search Terms Report For Real Keywords",
    excerpt: "Your search terms report shows the exact queries that found you. Learn how to mine YouTube search terms for titles, topics, and steady evergreen traffic.",
    date: "2027-06-07",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "What the report gives you",
        paragraphs: [
          "The search terms report lists the phrases people typed before they clicked your video. It sits under a video's reach tab and shows the exact words, not a summary. That raw list is the closest thing to reading viewers' minds that YouTube offers.",
          "Most creators check it once and move on. The ones who grow search traffic treat it as a running list of titles they have not written yet."
        ]
      },
      {
        heading: "Separate matches from misses",
        paragraphs: [
          "A query that already matches your video is proof of intent. A query that is adjacent but not answered is an opportunity. Sort the list and tag each line as either served or missed.",
          "If ten people searched the same missed phrase and your video ranked for it anyway, that is a green light for a dedicated upload. Search rewards the video that answers the query directly."
        ]
      },
      {
        heading: "How to use the phrases",
        bullets: [
          "Lift high-intent phrases into future video titles word for word.",
          "Group related queries into one topic cluster instead of ten thin videos.",
          "Check which of your old videos already rank, then update their titles to match the real phrase.",
          "Ignore vanity queries with one view; they are noise, not demand."
        ]
      },
      {
        quote: "Search terms are not suggestions. They are receipts. Every phrase on that list is someone who wanted an answer and decided you were the closest thing to it."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the search terms report per video, not channel-wide.",
          "Tag each query as served or missed to find gaps.",
          "Turn repeated missed phrases into planned titles.",
          "Revisit monthly, because old videos keep collecting new queries."
        ]
      },
      {
        heading: "Build a keyword habit",
        paragraphs: [
          "Keep a simple doc of every phrase that shows up three times or more. When you plan the next batch of videos, start from that doc instead of a blank page. Over a few months this turns search from an accident into a pipeline.",
          "Search is the only traffic source you can engineer on demand. The report is where you find the parts."
        ]
      }
    ]
  },
  {
    slug: "analytics-suggested-video-overlap",
    title: "Reading Suggested Video Overlap To Steal Audiences",
    excerpt: "Suggested video overlap shows which channels YouTube pairs you with. Use that suggested video data to borrow audiences and grow where you already fit.",
    date: "2027-06-10",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "YouTube already told you your neighbors",
        paragraphs: [
          "The suggested videos report inside advanced analytics lists the exact videos that sent you viewers through recommendation. It is a map of which creators YouTube thinks share your audience, and it is built from real watch behavior, not guesswork.",
          "If one channel keeps appearing, the algorithm has decided your viewers like both of you. That is a free introduction you did not have to earn."
        ]
      },
      {
        heading: "Find the overlap that matters",
        paragraphs: [
          "Look for videos with smaller channels than yours but strong views. Getting pulled into their suggestion rail means you are reaching an audience that has not fully found you yet. That is the cheapest growth available.",
          "Now check the reverse. Which of your videos appear in the rails of bigger channels? Those are your strongest assets for suggested traffic, and they deserve more support, not less."
        ]
      },
      {
        heading: "What to do with the pairs",
        bullets: [
          "Study the topics, titles, and hooks of the videos you overlap with most.",
          "Make a video that answers the same question from your angle to compete for the same rail.",
          "Pin a comment or end screen linking the two so the pairing becomes stronger.",
          "Ignore one-off overlaps; chase the channels that show up again and again."
        ]
      },
      {
        quote: "Suggested traffic is borrowed attention. The algorithm lends it when your video feels like the natural next click, so earn it by fitting the rail, not fighting it."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The suggested report is a ranked list of your true audience neighbors.",
          "Narrow channels sending you views are prime growth targets.",
          "Reinforce your strongest pairs with links and comments.",
          "Chase repeat overlap, not random spikes."
        ]
      },
      {
        heading: "Turn overlap into a plan",
        paragraphs: [
          "Pick three channels that show up most in your report. Watch their top videos this month and note the format, length, and promise. Then make your version of the topic and let the rail decide.",
          "You are not copying. You are joining a conversation the algorithm already started on your behalf."
        ]
      }
    ]
  },
  {
    slug: "analytics-external-traffic-sources",
    title: "What External Traffic Tells You About Off-Platform Reach",
    excerpt: "External traffic is small on most channels but reveals who shares your work. Learn to read external traffic sources and reward the places that send viewers.",
    date: "2027-06-13",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "External is not a rounding error",
        paragraphs: [
          "External traffic is often under five percent of views, so creators write it off. That is a mistake. It is the only source where a human chose to paste your link somewhere, which makes it a signal of genuine pull.",
          "The external sources report breaks those views down by site and app. Google Search, Reddit, WhatsApp, and Discord show up as separate rows. Each one is a different kind of referral with a different viewer behind it."
        ]
      },
      {
        heading: "Read the platforms honestly",
        paragraphs: [
          "Google Search external visits usually mean your video matches a broader query and earns the top video slot. Messaging apps mean someone forwarded you in a group. Forums mean your take was useful enough to cite.",
          "Each pattern points to a different action. Search referrals reward clean titles. Messaging referrals reward punchy moments people want to share. Forum referrals reward substance over polish."
        ]
      },
      {
        heading: "How to encourage more",
        bullets: [
          "Put a shareable line in the description that a reader could paste without edits.",
          "Answer questions in communities where your video is the natural follow-up.",
          "Match your title to how people phrase the problem in search.",
          "Track which external row grows after each post and repeat the one that works."
        ]
      },
      {
        quote: "You cannot convince the home feed to like you. You can convince one person to send your link to a friend, and that is the traffic source you control."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "External traffic measures pull, not push.",
          "Break it down by site to see which communities care.",
          "Design descriptions and titles for sharing.",
          "Small growth here compounds through word of mouth."
        ]
      },
      {
        heading: "Give it a little fuel",
        paragraphs: [
          "Set a target: grow external traffic by two percent this quarter. Do that by being genuinely useful in three places your audience already gathers. Watch the source report to see which one responds.",
          "External is the slowest and most durable traffic you own. Treat it like a garden, not a lottery."
        ]
      }
    ]
  },
  {
    slug: "analytics-shorts-feed-vs-long-form",
    title: "Shorts Feed Vs Long-Form: Where Your Views Really Come From",
    excerpt: "Shorts feed and long-form build views in totally different ways. Compare shorts feed traffic with long-form discovery so you stop misreading your numbers.",
    date: "2027-06-16",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "Two feeds, two behaviors",
        paragraphs: [
          "The shorts feed is a swipe machine. Views pile up fast, retention is measured in seconds, and the swipe rate does the judging. Long-form lives on browse, suggested, and search, where a single view can be ten minutes of attention.",
          "Comparing them by raw views is the fastest way to feel good for no reason. One thousand shorts views and one thousand long-form views are not the same currency."
        ]
      },
      {
        heading: "Read each on its own terms",
        paragraphs: [
          "For shorts, watch the viewed-versus-swiped ratio and the average percentage viewed. A short with high views but a fast swipe is being served to the wrong people. For long-form, watch click-through and average view duration together.",
          "The crossover you actually want is shorts viewers who then watch long-form. Check the traffic sources of your long-form videos for the shorts feed row. If it grows, your shorts are doing their job as a feeder."
        ]
      },
      {
        heading: "Signs a short is feeding long-form",
        bullets: [
          "The shorts feed row appears in your long-form traffic sources at all.",
          "Subscriber growth spikes after a short, then long-form watch time follows.",
          "The short teases one specific long video and that video's views tick up.",
          "Comments on the short ask for the full story."
        ]
      },
      {
        quote: "A short is a trailer, not a film. Judge it by whether people want the rest, not by how many swiped past it during a lunch break."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Never compare shorts and long-form on views alone.",
          "Use swipe rate for shorts and watch time for long-form.",
          "Look for the shorts feed row in long-form sources.",
          "Design shorts that point at one long video, not everything."
        ]
      },
      {
        heading: "Make the two work together",
        paragraphs: [
          "Post a short that clips the strongest forty seconds of your next long video. In the short, name the full video and pin a comment. Then watch the long video's traffic sources for a shorts feed bump over the following week.",
          "When the feeder works, you stop guessing which format to make. You make both, and one feeds the other."
        ]
      }
    ]
  },
  {
    slug: "analytics-notification-traffic",
    title: "Notification Traffic: The Small Source of Retention",
    excerpt: "Notification traffic is tiny on paper but tells you who your real fans are. Learn to read notification clicks and what they reveal about subscriber loyalty.",
    date: "2027-06-19",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "The row most creators skip",
        paragraphs: [
          "Notification traffic sits low in the traffic sources list, usually a sliver of total views. It counts the people who tapped a bell alert and landed on your video. That is a self-selected group of your most loyal viewers.",
          "Because it is so small, its real value is not volume. It is quality. Notification viewers have already opted in, so their watch time is usually far above your channel average."
        ]
      },
      {
        heading: "What the number is telling you",
        paragraphs: [
          "Compare notification views to your subscriber count. If only a fraction of subscribers click, your notifications may be throttled or your titles are not compelling to the people who already know you.",
          "Watch the trend after a big upload. A loyal base will show a notification bump in the first few hours. If it never appears, the alert is not landing, and your early velocity suffers as a result."
        ]
      },
      {
        heading: "Use it as a health check",
        bullets: [
          "Notification watch time above average means your core audience is engaged.",
          "A rising notification share after a series means the series is resonating.",
          "A falling share over several uploads can point to bell fatigue or inconsistent topics.",
          "Very low notification views on a large channel often means weak first-hour appeal."
        ]
      },
      {
        quote: "Notifications are a tiny sample of your best viewers. When that sample loses interest, the algorithm notices before your view count does."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat notification traffic as a loyalty gauge, not a growth channel.",
          "Compare it to subscriber count to spot throttling.",
          "Check the first-hour bump after every upload.",
          "Declining notification share is an early warning worth acting on."
        ]
      },
      {
        heading: "Fix a weak notification pulse",
        paragraphs: [
          "If your notification bump is thin, sharpen the first ten seconds so the alert pays off. Keep titles consistent enough that subscribers know what they are clicking. Avoid burying the promise behind a slow intro.",
          "You will never grow big on notifications. You can use them to keep the audience that already cares from drifting away."
        ]
      }
    ]
  },
  {
    slug: "analytics-diagnosing-slow-video",
    title: "Diagnosing A Slow Video Using Traffic Sources",
    excerpt: "A video that never takes off is readable. Walk through a slow video diagnosis using traffic sources to find whether the problem is reach, clicks, or retention.",
    date: "2027-06-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Slow is a symptom, not a cause",
        paragraphs: [
          "Every slow video fails at one of three stages: it is not being shown, it is shown but not clicked, or it is clicked but not watched. Traffic sources tell you which stage broke, and that saves you from editing a video that was never the problem.",
          "Open the video, set the date range to its full life, and look at impressions, click-through, and average view duration in that order."
        ]
      },
      {
        heading: "Stage one: reach",
        paragraphs: [
          "If impressions are low, the algorithm barely tested the video. That usually means the topic is crowded, the thumbnail blends in, or the upload followed a long gap. Check the browse and suggested rows. Flat lines there mean no test happened.",
          "Low reach is rarely fixable by re-cutting. It is fixed by giving the feed a clearer reason to try again, which usually means a stronger thumbnail or a follow-up video on the same theme."
        ]
      },
      {
        heading: "Stage two: clicks",
        paragraphs: [
          "If impressions are healthy but click-through is weak, the thumbnail and title are losing the race. Compare your rate to your own channel average, not to a guessed benchmark. A dip below half your normal rate is a clear packaging problem.",
          "Look at the browse row specifically. Browse impressions with low click-through is the cleanest signal that people saw you and chose someone else."
        ]
      },
      {
        heading: "Stage three: retention",
        paragraphs: [
          "If clicks are fine but watch time is poor, the video delivered something different from what the thumbnail promised. Find the drop-off point and read what you said just before it. That is your mismatch."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Diagnose in order: reach, then clicks, then retention.",
          "Low impressions means the feed never tested it.",
          "Low click-through is packaging, not content.",
          "Poor retention is a promise the video did not keep."
        ]
      },
      {
        heading: "Act on the right stage",
        paragraphs: [
          "Most creators jump to retention because it feels fixable. The report is telling you to check reach and clicks first. Fix the stage that actually failed and leave the rest alone.",
          "A slow video is a diagnosis. Read it before you operate."
        ]
      }
    ]
  },
  {
    slug: "analytics-doubling-down-winning-source",
    title: "How To Double Down On A Winning Traffic Source",
    excerpt: "When one traffic source starts working, most creators spread thin. Learn how to double down on a winning source before the algorithm moves on.",
    date: "2027-06-25",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        heading: "Notice the win early",
        paragraphs: [
          "A winning source shows up as one row in your traffic report pulling far above its usual share. Maybe search jumped after a well-titled upload, or suggested spiked because one video matched a trending topic. The first job is to notice it within days, not weeks.",
          "Set a simple rule. If any single source grows by half over its normal share within a month, treat it as a green light and stop treating uploads as separate experiments."
        ]
      },
      {
        heading: "Feed the source, do not drift",
        paragraphs: [
          "The instinct after a win is to try something totally new. That scatters your signal. Instead, make the next two or three videos in the exact lane that worked. Same topic angle, same format, same title pattern if search is the winner.",
          "For search, that means more videos aimed at adjacent queries. For suggested, it means videos close enough to sit in the same rails. For browse, it means a recognizable series the feed can serve to the same viewers."
        ]
      },
      {
        heading: "Signals that a source is still hot",
        bullets: [
          "The winning row keeps growing for two or three uploads, not just one.",
          "New viewers from that source subscribe at a normal or better rate.",
          "The same video keeps earning views from the source weeks after upload.",
          "Adjacent topics pick up the same source, showing the demand is broad."
        ]
      },
      {
        quote: "Momentum is a window, not a permanent state. Double down while the source is warm, because algorithms get bored faster than audiences do."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Define a threshold that tells you a source is winning.",
          "Make the next few videos in the winning lane.",
          "Watch whether the source holds for multiple uploads.",
          "Resist chasing a shiny new format mid-streak."
        ]
      },
      {
        heading: "Know when the streak ends",
        paragraphs: [
          "Every source cools. When the winning row returns to its baseline for two or three uploads, the window has closed. That is the moment to test a new lane, not before.",
          "Doubling down is a discipline. You ride the source while it lasts, then move on without regret."
        ]
      }
    ]
  },
  {
    slug: "analytics-building-discovery-mix",
    title: "Building A Discovery Mix That Does Not Depend On One Source",
    excerpt: "Relying on one traffic source is fragile. Learn to build a discovery mix across search, suggested, browse, and external so one algorithm change cannot sink you.",
    date: "2027-06-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analytics", "discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "One source is a single point of failure",
        paragraphs: [
          "Channels that live on browse alone die when the feed changes its mind. Channels that live on suggested alone get quiet when a trend cools. A discovery mix spreads the risk so no single algorithm update can erase your reach overnight.",
          "The mix does not need to be even. It needs to be intentional, with at least two sources that can carry a normal week of views."
        ]
      },
      {
        heading: "What a healthy mix looks like",
        paragraphs: [
          "A durable channel usually has search as its floor, suggested as its upside, browse as its loyal base, and external as its word of mouth. Search is the floor because it keeps paying long after upload. Suggested is the upside because it can spike on any good video.",
          "Your numbers will differ, but no single row should be so large that losing it would gut the channel. If one source is over half your views, you have concentration risk, not strength."
        ]
      },
      {
        heading: "Build each leg on purpose",
        bullets: [
          "Search: write titles that answer queries people actually type.",
          "Suggested: study who you overlap with and make videos that fit those rails.",
          "Browse: keep a recognizable series and consistent publish rhythm.",
          "External: be useful in three communities where your audience gathers."
        ]
      },
      {
        quote: "You are not trying to win one algorithm. You are trying to be interesting enough that several of them want to show you."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set a rule: no single source above half your views.",
          "Treat search as your floor and suggested as your ceiling.",
          "Grow each leg with a specific habit, not hope.",
          "Review the mix once a month and rebalance what drifted."
        ]
      },
      {
        heading: "Review and rebalance",
        paragraphs: [
          "Once a month, pull the channel traffic sources report and note each row's share. Flag anything that crept past your concentration line. Then spend the next month strengthening the weakest leg you can actually influence.",
          "A discovery mix is not built in a week. It is maintained by noticing drift early and correcting it before crisis does it for you."
        ]
      }
    ]
  }
];
