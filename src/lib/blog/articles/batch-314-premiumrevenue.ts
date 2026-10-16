import { BarChart3, Map, Star, Waves, Users, DollarSign, TrendingUp, Clock, Workflow, Activity } from "lucide-react";
import type { BlogPost } from "../types";

export const batch314: BlogPost[] = [
  {
    slug: "premium-revenue-rpm-vs-cpm",
    title: "RPM vs CPM and What They Mean for Your Revenue",
    excerpt: "Your premium revenue can look small until you read RPM against CPM in practice for each video and see where the real money comes from each time.",
    date: "2044-07-01",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "The direct answer to reading the gap",
        paragraphs: [
          "RPM is the number to watch for your actual take-home from views, not CPM. CPM tells you what an ad buyer paid, but after splits and ad load, the number left for you is RPM. So when you scan analytics, compare RPMs between videos before comparing raw CPMs for any guess about income.",
          "In practice, a video with a lower CPM can still earn more if it has a higher ad load or longer watch time. That gap is why reading revenue analytics means stopping at CPM and going straight to RPM for a fair look at what each view puts in your pocket."
        ]
      },
      {
        heading: "How to read them side by side",
        paragraphs: [
          "Pull RPM and CPM for the same date range for a single video in your analytics panel. Do not mix all-time with a 28-day window, as shifts in traffic will skew the numbers. For each clip, note the views, RPM, estimated revenue, and traffic source to spot a pattern over time.",
          "When two videos have close views, the one with a few extra cents of RPM will often pull ahead. This only holds true if the sample size is not one day of traffic. Let at least seven days run before judging a small lift as real."
        ]
      },
      {
        heading: "When the gap widens",
        paragraphs: [
          "Some niches pay well for ads but run fewer of them, so CPM looks high while RPM stays flat. Other niches run more ads and keep viewers longer, so RPM climbs even if CPM looks modest. Your job is to find where those two meet for the content you already have.",
          "Keep notes on video length for any test. Going from short clips to longer explainers may not spike CPM, but it can raise RPM enough to cover the effort if watch time holds steady."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Watch RPM, not CPM, to judge your real take-home from views.",
          "Compare the same date range and avoid single-day samples.",
          "Look for ad load and watch time as the hidden drivers.",
          "Test length changes against RPM, not just CPM.",
          "Track one variable at a time to keep results clear."
        ]
      },
      {
        heading: "Small test to run this week",
        paragraphs: [
          "Pick three of your highest-view videos from the last 30 days. For each, log RPM, CPM, views, and traffic source in one row. After seven more days, log the same row again and see which one moved most. That single table will tell you more than guessing at broad averages for your channel."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-traffic-sources",
    title: "Revenue by Traffic Source and Where Money Comes From",
    excerpt: "Your premium revenue often shifts by traffic source, and some clicks earn far more per view even if total clicks look small for that referral path.",
    date: "2044-07-02",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "Why sources split so widely",
        paragraphs: [
          "Not all views are equal for revenue. Views from some sources bring higher RPMs because of viewer intent, device type, or ad demand at that moment. When reading revenue analytics, break down estimated revenue by traffic source for the same window to see which paths carry weight for your channel.",
          "It can be tempting to chase total views from one big source. But if that source pays a few cents less per view, a shift away from a smaller, higher-paying source can drop income even as views climb. Track both views and revenue for each source."
        ]
      },
      {
        heading: "What to look for in the list",
        paragraphs: [
          "Scan your top five sources by revenue, not by views. For each, note RPM, views, and percent of revenue. You may find one source gives only ten percent of views but fifteen percent of revenue. That is the source to protect and test further for related content ideas.",
          "Watch for sources that swing between weeks. A seasonal rise in a certain referral can lift RPM for a few weeks. Logging those swings helps you plan uploads or know when a lift is likely to fade."
        ]
      },
      {
        heading: "Act on the data without overreacting",
        paragraphs: [
          "Do not cut a source just because RPM dipped for one week. Check the sample size and the country mix first. If the country mix changed, that alone can explain a dip. If the mix stayed the same and RPM stayed low for three weeks, then consider testing a small change to titles for that traffic path.",
          "Focus on content that already gets high RPM from one of your top revenue sources. Repurpose or expand those topics before trying to build a new source from zero."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Rank sources by revenue first, then by views.",
          "Compare the same window and note country mix for dips.",
          "Protect high-RPM sources with related content ideas.",
          "Wait for a three-week trend before cutting a path.",
          "Do not trade a small source of high RPM for a large source of low RPM."
        ]
      },
      {
        quote: "A small gain in RPM from the right traffic source will beat a large gain in views from the wrong one almost every time."
      },
      {
        heading: "One action to take now",
        paragraphs: [
          "Export the last 28 days of revenue by traffic source. Mark any with above-average RPM but below-average views. For each of those, pick one video idea that fits what already brought that traffic. Test one idea first instead of testing five at once."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-high-value",
    title: "Spotting Your Highest-Value Content With Clear Data",
    excerpt: "Your premium revenue hides in a few videos that out-earn others, and reading analytics lets you spot those highest-value clips without guessing.",
    date: "2044-07-04",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        heading: "Look past total views",
        paragraphs: [
          "A video with half the views of another can earn double if its RPM runs high. To find these outliers, sort your videos by estimated revenue per thousand views over a fixed window. That view removes total views from the sort and shows earning power per unit of attention.",
          "Focus on videos that earned real revenue, not zeros. Filter to videos published at least seven days ago and with at least a few hundred monetized views. Small samples lie, so set a minimum before sorting."
        ]
      },
      {
        heading: "Find common traits",
        paragraphs: [
          "Once you have five to ten high-RPM videos, scan for shared traits. Look at length, topic, format, and traffic source. You may find that explainers on a narrow topic pull longer watch time and bring higher RPM. Or you may see that a certain format draws a specific source that pays well.",
          "Do not copy the topic blindly. Copy the constraint. If the narrow scope is what forced clarity and held watch time, use that constraint on a new angle instead of repeating the exact title."
        ]
      },
      {
        heading: "Test without breaking what works",
        paragraphs: [
          "Build a small batch of ideas based only on traits that appear in at least two of your high-value videos. Skip one-off traits. For each idea, predict RPM range and traffic source before making it. Then track actual RPM against that prediction after seven days.",
          "Keep one slot for a test and do not swap it weekly. Give tests time for traffic to settle so you judge against real data, not a burst."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sort by revenue per thousand views over a fixed window.",
          "Set a minimum for monetized views to avoid noise.",
          "Look for traits shared by at least two videos.",
          "Test one idea at a time against a prediction.",
          "Keep what already earns and expand its traits."
        ]
      },
      {
        heading: "Make a shortlist this month",
        paragraphs: [
          "Pick five videos with highest revenue per thousand views in the last 28 days. Write one line for each trait they share. From that list, write one video script idea that uses only those shared traits. That is your highest odds test for growing premium revenue without guessing."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-seasonal-swings",
    title: "Seasonal Revenue Swings and How to Read Them Well",
    excerpt: "Your premium revenue will rise and fall with seasonal swings, and reading the timing in analytics helps you plan without chasing short spikes.",
    date: "2044-07-06",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Know the difference between trend and spike",
        paragraphs: [
          "A spike lasts a few days. A seasonal swing lasts weeks and tends to repeat in a loose window each year for many channels. When reading revenue analytics, compare the current window to the same window in the prior year for your channel, not to last week. That context stops panic and stops false hope.",
          "Look at RPM and revenue together. Sometimes views hold steady but RPM drops due to ad demand. Other times RPM rises and pulls revenue up even if views dip. Both are normal, but they need different responses."
        ]
      },
      {
        heading: "Find your own window",
        paragraphs: [
          "Pull 12 months of monthly revenue for your channel. Mark months where revenue is at least fifteen percent above or below the 12-month average. Those are your candidate windows. For each, note RPM, views, and top traffic source to see what caused the shift.",
          "Do not borrow another channel's calendar blindly. Your niche may peak earlier or later. Use your own data first. If you lack a full year, start logging now so next year you have the answer."
        ]
      },
      {
        heading: "Plan without overcommitting",
        paragraphs: [
          "For known high months, build backlog content that fits your proven high-value traits. Do not create brand new formats in a high month hoping to catch traffic. Lean on what already earns. For known low months, do small tests or fix low-RPM videos instead of forcing output.",
          "Avoid pulling all effort into a predicted spike. Keep a base upload schedule you can hold in a low month. That protects consistency without wasting effort on guesses."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Compare to the same window last year, not last week.",
          "Separate RPM shifts from view shifts.",
          "Build a personal 12-month map of swings.",
          "Lean on proven winners in high months.",
          "Keep a minimum schedule for low months."
        ]
      },
      {
        quote: "Patience with a known low month will save more energy than panic over one bad week of revenue."
      },
      {
        heading: "Action plan for this year",
        paragraphs: [
          "Mark three months ahead on a simple sheet: predicted level, action, and stop rule. For the next month, write one action tied to a known trait from your data. Review only against your sheet, not against a single day's revenue number."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-per-subscriber",
    title: "Revenue Per Subscriber and What It Really Tells You",
    excerpt: "Your premium revenue does not scale linearly with subs, and tracking revenue per subscriber in analytics reveals which audience pays off most.",
    date: "2044-07-08",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "Why subs are a lagging signal",
        paragraphs: [
          "Subscribers can grow while revenue per subscriber drops. New subs may come from videos with lower RPM or from sources that monetize less. When reading revenue analytics, track revenue per subscriber for a rolling window, such as the last 28 or 90 days, to avoid mixing old subs with recent performance.",
          "Do not judge a month by total subs. Judge it by how much revenue those recent actions produced relative to the active audience. That ratio is far more honest than a raw subscriber count."
        ]
      },
      {
        heading: "Find a useful number",
        paragraphs: [
          "Pick a fixed window and use estimated revenue for that window divided by subscribers at the start or middle of that window. Be consistent. If you change the window, the number will move, so never compare a 28-day ratio to a 90-day ratio.",
          "Look for videos that raised revenue per subscriber when they gained traction. Those are videos that brought the kind of viewers who engage with monetized content. They are not always the ones with the most new subs."
        ]
      },
      {
        heading: "Use it to pick content",
        paragraphs: [
          "Filter for videos with above-average revenue per subscriber and see what they share. It could be a topic that holds longer watch time, or a format that attracts viewers from a higher-RPM source. Focus on those shared traits for your next batch instead of chasing broad reach.",
          "If revenue per subscriber falls for three weeks straight, check traffic sources first. A shift to a lower-RPM source is the most common cause. Only after ruling that out should you look at ad load or audience mix."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track revenue per subscriber over a fixed rolling window.",
          "Never mix 28-day and 90-day ratios.",
          "Prioritize videos that lift the ratio, not just subs.",
          "Check traffic sources when the ratio drops.",
          "Be consistent with start-of-window subscriber counts."
        ]
      },
      {
        quote: "Growing subs is easy to count, but growing revenue per subscriber is what actually grows income."
      },
      {
        heading: "Quick check this week",
        paragraphs: [
          "Get estimated revenue for the last 28 days and subscribers at day one of that window. Write the ratio. Do the same for the prior 28-day window. If the ratio fell, list top three traffic sources for both windows and compare RPMs. That will show you where to look first."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-where-money-shows",
    title: "Where the Money Shows Up in Revenue Analytics",
    excerpt: "Your premium revenue does not appear in one line, so reading the right panels in analytics shows exactly which clips and sources paid out.",
    date: "2044-07-10",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        heading: "Find the payout columns",
        paragraphs: [
          "Start with the revenue panel filtered to a fixed date range. Look for estimated revenue, not finalized payouts. Then split by videos, by traffic source, and by country. The intersection of those three tells you more than any single top-ten list.",
          "Pay attention to monetized views for each row. A row can have views but few monetized views, which pulls RPM down. If you only look at total views, you will misread why revenue is low."
        ]
      },
      {
        heading: "Read RPM in context",
        paragraphs: [
          "Check RPM against watch time for longer videos. A video watched to the end can run more ads and lift RPM without changing the topic. On the other hand, a high drop-off point can cap ad load no matter how good the intro is. Use these clues to fix existing videos before making new ones.",
          "Do not export one giant table and scan once. Export three focused tables for the same window: top revenue videos, top revenue sources, and bottom five RPM videos with enough monetized views. Compare them side by side for one clear answer."
        ]
      },
      {
        heading: "Track a small set",
        paragraphs: [
          "Pick five videos to track weekly. For each, log RPM, monetized views, estimated revenue, and top traffic source every Friday. After four weeks, you will see which ones move on their own and which only move with a source shift. This takes minutes and builds a useful history.",
          "Keep your view of analytics small on purpose. If you check twenty reports a week, you will react to noise. A single consistent table beats constant browsing."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use estimated revenue and monetized views, not total views.",
          "Cross-filter by video, source, and country.",
          "Link RPM to watch time and drop-off.",
          "Track five videos weekly in one table.",
          "Prefer depth in few rows over breadth in many."
        ]
      },
      {
        quote: "The answer to a revenue question is usually in one row, not in the whole dashboard."
      },
      {
        heading: "Set up your table now",
        paragraphs: [
          "Create a simple table with the columns above for five videos. Fill it for the last 14 days to start. Then fill it every Friday for the next four weeks. At the end, pick one fix based on the clearest row in that history."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-why-videos-out-earn",
    title: "Why Some Videos Out-Earn Others in Simple Terms",
    excerpt: "Your premium revenue varies because a few factors decide why some videos out-earn others, and reading data points to the levers you can adjust.",
    date: "2044-07-12",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "The four levers",
        paragraphs: [
          "Four things explain most gaps: monetized views, ad load, RPM per impression context, and traffic source. If views are equal, the winner is usually more monetized views or a higher-paying source. You cannot control ad rates, but you can control watch time, topic fit, and which content you scale.",
          "Think of each video as a small test of those levers. When one out-earns another, ask which lever moved. If two moved, change only one next time. That keeps your fixes honest."
        ]
      },
      {
        heading: "Watch time beats length",
        paragraphs: [
          "Long videos do not earn more by default. Videos that keep a high share of viewers to later points earn more because they can run more ads. So when reading revenue analytics, look at audience retention for your top revenue videos. Find the point where people drop off most and fix that for a similar video.",
          "Sometimes trimming a slow intro does more for RPM than adding new sections. Test small cuts on an existing video idea before stretching length for its own sake."
        ]
      },
      {
        heading: "Topic fit drives source fit",
        paragraphs: [
          "A topic that matches search intent often brings viewers from sources that pay well and stay longer. That is why two similar lengths can split so far in revenue. Use your traffic source split for each video to see if source, not length, is the reason.",
          "If a video brings high views but low RPM and comes mostly from a low-paying source, do not remake it. Make a new video aimed at a source you already know pays well for that general area."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Focus on four levers: monetized views, ad load, context, and source.",
          "Change one lever per test to know what worked.",
          "Fix drop-off before adding length.",
          "Match topic to a proven high-RPM source.",
          "Scale traits that repeat across winners."
        ]
      },
      {
        quote: "You do not need a new niche to earn more. You need one better lever on content you already know how to make."
      },
      {
        heading: "Run a single comparison",
        paragraphs: [
          "Pick two videos with close total views but very different revenue. For each, get monetized views, RPM, top traffic source, and retention at the halfway point. Write down which of the four levers differs most. Fix only that lever in your next video."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-ignore-numbers",
    title: "When to Ignore the Numbers in Revenue Analytics",
    excerpt: "Your premium revenue will mislead if you react too fast, so knowing when to ignore the numbers is as useful as knowing when to act on them.",
    date: "2044-07-14",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "Ignore single-day moves",
        paragraphs: [
          "One day of revenue can swing for reasons outside your control, from ad demand to timezone shifts. Never change a plan based on a single day's total. When reading revenue analytics, set a minimum window and a minimum sample size before calling a change.",
          "For new videos, wait at least seven days before judging RPM. For older videos with steady traffic, wait at least 14 days to see a trend. If traffic is very low, wait for a monetized view threshold instead of time alone."
        ]
      },
      {
        heading: "Ignore mixed windows",
        paragraphs: [
          "Do not compare last week to last month to this year. Use the same window type every time. If you must compare, adjust for weekdays. For example, compare Monday to Sunday of this week only to the same set last week. Mixing windows is the most common source of false alarms in analytics.",
          "Also avoid mixing estimated revenue from different filters. If you filter by country for one view, keep that filter for the comparison view. Small filter changes create large apparent shifts."
        ]
      },
      {
        heading: "Ignore totals when ratio tells the truth",
        paragraphs: [
          "Total revenue can rise because of one old video getting a burst, not because new content is working. Look at revenue per video for new uploads and at revenue per subscriber for the rolling window. Ratios show direction when totals hide it.",
          "If a fix worked on one video, confirm with the ratio for the relevant window before scaling. One win is a hint. Two wins in the same trait are a reason to scale."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "No single-day decisions for revenue changes.",
          "Use fixed windows and consistent filters.",
          "Wait for enough monetized views, not just time.",
          "Prefer ratios over raw totals for trends.",
          "Require at least two examples before scaling."
        ]
      },
      {
        heading: "Write your stop rules",
        paragraphs: [
          "For any planned change, write a stop rule now. For example: 'Do not judge this test until day eight, and only act if RPM stays above X for at least three days with over Y monetized views.' Put that rule where you see it. Following it will stop more bad calls than any guess."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-plan-uploads",
    title: "Using Revenue Data to Plan Uploads With Confidence",
    excerpt: "Your premium revenue grows when you use data to plan uploads, picking topics from proven winners instead of guessing what to post next each week.",
    date: "2044-07-16",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "Build a shortlist from data",
        paragraphs: [
          "Start with the last 28 days and pull your top five videos by revenue, not views. For each, record topic, length, traffic source, RPM, and retention at halfway. Keep only traits that appear at least twice. That gives you a shortlist of testable ideas based on what already pays for your channel.",
          "Do not add ideas from outside this list until you test at least one from it. The goal is to compound what works, not to expand your list of guesses."
        ]
      },
      {
        heading: "Balance tests and proven content",
        paragraphs: [
          "Split your slots by a simple rule. For example, keep two out of three uploads tied to proven high-value traits. Put the third slot toward a single-variable test. This keeps revenue stable while still learning. If tests regularly fail, shift more slots to proven content for a few weeks.",
          "Match each upload to its predicted traffic source. If you cannot name the likely source, you do not have a clear plan. That one check prevents vague ideas."
        ]
      },
      {
        heading: "Time to seasonal windows",
        paragraphs: [
          "Use your personal seasonal map from earlier data. If a known high window is coming, fill more slots with proven winners. If a known low window is coming, keep the minimum schedule and run smaller tests. This uses the calendar to work for you instead of against you.",
          "Do not rush to finish a batch in a low window. Quality of fit to proven traits beats speed when RPM is likely to be soft."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build a shortlist from top revenue videos only.",
          "Keep most slots for proven traits.",
          "Test one variable in the remaining slot.",
          "Name the likely traffic source for each upload.",
          "Align batch size with your seasonal window."
        ]
      },
      {
        quote: "A fixed rule for slots will beat mood-based planning every week for growing premium revenue."
      },
      {
        heading: "Fill next week's plan",
        paragraphs: [
          "Write three upload ideas now. For each, state its trait match, likely source, and success measure. Make the success measure a number, such as 'reach RPM >= X with >= Y monetized views by day eight'. If all three meet that bar, you have a working plan."
        ]
      }
    ]
  },
  {
    slug: "premium-revenue-month-forecast",
    title: "Forecasting a Month of Income From Your Analytics",
    excerpt: "Your premium revenue can be projected with enough accuracy to plan, and reading recent trends in analytics gives a realistic forecast to work from.",
    date: "2044-07-20",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["monetization", "income", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "Start from a base",
        paragraphs: [
          "Take the last 28 days of estimated revenue as your base. Do not use all-time averages because they flatten seasonal swings. For each of the next four weeks, project using the same weekday mix as the base window. This simple adjustment removes most weekday noise.",
          "Split the base into known stable videos and new uploads. Treat new uploads as zero revenue until they reach the minimum monetized views you set. That keeps your forecast conservative."
        ]
      },
      {
        heading: "Adjust for known shifts",
        paragraphs: [
          "Apply one adjustment at a time. If a traffic source is trending up for three weeks, adjust that source's revenue by a small percent. If RPM fell for three weeks across your top videos, subtract a small percent. Do not apply five adjustments at once. Overfitting the forecast creates false confidence.",
          "Factor in any scheduled uploads by multiplying expected RPM by a conservative estimate of monetized views based on your last similar video. If you have no similar video, do not forecast revenue for it."
        ]
      },
      {
        heading: "Track error weekly",
        paragraphs: [
          "At the end of each week, record actual estimated revenue against forecast for that week. Keep a running error rate over the last four weeks. If error stays above your tolerance for two weeks, lower your adjustments. If error is small, you can be slightly bolder next month.",
          "Do not rewrite the whole forecast every day. Rewrite once per week using the same method. Changing the method hides error and makes it hard to learn."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use the last 28 days with weekday adjustment.",
          "Forecast new uploads only after a minimum threshold.",
          "Apply at most one or two small adjustments.",
          "Track weekly error for four weeks.",
          "Keep the same method to learn from mistakes."
        ]
      },
      {
        quote: "A conservative forecast you actually follow is better than a perfect forecast you ignore."
      },
      {
        heading: "Make your first forecast",
        paragraphs: [
          "Project week one to week four now using the last 28 days. Write your adjustments and your error tolerance. Then check against actuals next Friday. Adjust only the size of changes, not the whole process, when error runs high."
        ]
      }
    ]
  }
];
