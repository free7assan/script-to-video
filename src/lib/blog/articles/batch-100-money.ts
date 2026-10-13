import { Activity, BarChart3, Compass, DollarSign, Eye, Layers, Repeat, Target, TrendingUp, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch100: BlogPost[] = [
  {
    slug: "money-revenue-analytics-basics",
    title: "Revenue Analytics Basics Every Creator Should Track",
    excerpt: "Revenue analytics starts with a few plain numbers. Track total income, income per video, and income per thousand views before you chase anything fancier.",
    date: "2024-02-05",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "What revenue analytics answers",
        paragraphs: [
          "Revenue analytics tells you where each dollar came from and which videos earned it. If you cannot name your top three income sources by amount, you are guessing. The fix is small and you already have the data. Write down the numbers you have before you buy any tool.",
          "Most creators look at one figure, the monthly payout, and stop there. That number hides the story. A flat month can come from a strong sponsor deal covering a weak ad month, or from one old video that keeps earning while new uploads flop. Pull the numbers apart and the cause shows up on its own."
        ]
      },
      {
        heading: "The four numbers worth tracking",
        bullets: [
          "Total revenue: every source added together for the month, before you spend a cent.",
          "Revenue per video: total income divided by videos published, so a long catalog does not flatter a weak month.",
          "Revenue per thousand views: total income divided by views in thousands, which shows how well each view pays.",
          "Source mix: the share each stream holds, so you can see when one stream quietly becomes your main income.",
          "Cost per video: hours and cash spent, so a busy month does not look profitable when it was not."
        ]
      },
      {
        quote: "A payout number tells you what happened. A source mix tells you why."
      },
      {
        heading: "Build the sheet once",
        paragraphs: [
          "A spreadsheet with one row per video and columns for views, ad income, affiliate income, and sponsor income takes an hour to set up. Update it once a week for ten minutes. After two months you will see patterns no dashboard gives you, because the dashboard does not know your work hours or your costs. Keep it simple and it will survive.",
          "Keep the sheet honest. If a sponsor pays late, log it in the month the work happened, not the month the cash arrived. Otherwise your busy months look empty and your slow months look rich, and you will draw the wrong conclusion about what to make next."
        ]
      },
      {
        heading: "When to add more detail",
        paragraphs: [
          "Once the basics run for a quarter, add cohort views: how much a video earns in its first 30 days versus after. This reveals whether your back catalog carries the channel or new uploads do. If old videos pay the bills, your job is maintenance, not endless uploads. That single insight can change your whole schedule.",
          "Only add complexity when a plain number cannot answer your question. Extra tabs and charts feel productive but rarely change a decision. The point is to know where the money comes from, then double down on the one stream that already works. Everything else is decoration."
        ]
      },
      {
        heading: "A habit that sticks",
        paragraphs: [
          "The biggest risk is doing this once and quitting. Tie the review to something you already do, like the morning you publish. Open the sheet, spend ten minutes, close it. The same slot each week turns a chore into a rhythm you keep without willpower.",
          "Do not rebuild the sheet when you get bored. Add a column only when a real question needs one. A messy sheet you update beats a perfect one you abandon in three weeks. Boring tools win because they survive.",
          "After a year of this, you will know your channel better than any tool can tell you. You will spot a weak month in its first week and a strong topic by its second video. That is the payoff, and it costs ten minutes a week."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with total revenue, revenue per video, revenue per thousand views, and source mix.",
          "Log income in the month the work happened, not the month it landed.",
          "Add cost per video so profit is real, not guessed.",
          "Review weekly for ten minutes instead of once a year."
        ]
      }
    ]
  },
  {
    slug: "money-video-revenue-metrics",
    title: "Video Revenue Metrics That Guide Real Decisions",
    excerpt: "Video revenue metrics only matter when they change a decision. Keep a short list, pair each money number with a behavior number, and set a 90-day baseline.",
    date: "2024-05-12",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "monetization", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Which metrics earn their place",
        paragraphs: [
          "A video revenue metric earns its place only if it changes what you do next. Views, watch time, and likes are useful, but they do not tell you which video paid for the edit. Narrow the list to numbers tied to cash. A short board you trust beats a big one you ignore.",
          "I keep five on my own board and delete the rest. Each one maps to a decision: publish more, fix a format, raise a price, or drop a topic. When a metric cannot point to one of those moves, it is trivia, not analysis.",
          "Pick a review rhythm that matches your publishing. Weekly for fast channels, monthly for slow ones. The schedule matters less than keeping it. A routine you can hold for a year beats a perfect one you drop by spring."
        ]
      },
      {
        heading: "The shortlist",
        bullets: [
          "Revenue per thousand views: shows which topics pay more per view, so you can weight your calendar.",
          "Revenue per upload: divides monthly income by videos shipped, which stops a big catalog from hiding weak output.",
          "First 48-hour revenue: tells you how fast a video starts earning and whether promotion is worth it.",
          "Returning-viewer revenue share: the portion of income from people who came back, a sign your audience sticks.",
          "Sponsor coverage ratio: the share of monthly costs a single deal covers, so you know your true buffer."
        ]
      },
      {
        quote: "If a number cannot change a decision, it belongs in an archive, not on your board."
      },
      {
        heading: "Read them together",
        paragraphs: [
          "One metric alone lies. High revenue per view with falling returning-viewer share means you are squeezing new people, not keeping them. Low revenue per upload with rising first 48-hour revenue means each video starts fast but the month is thin. Pair a money number with a behavior number before you act.",
          "Write the pairing down. On my board, revenue per thousand views sits next to returning-viewer share. When both climb, I push that topic. When one drops, I dig into the video that caused it and look for the reason.",
          "If a pairing confuses you, it usually means the data is thin. Wait another month instead of forcing a conclusion. Half a story read early can send you chasing the wrong fix for weeks."
        ]
      },
      {
        heading: "Set a baseline first",
        paragraphs: [
          "You cannot spot a change without a baseline. Pick 90 days of older videos, average each metric, and treat that as your floor. Anything above it is a win worth repeating. Anything below it is a question, not a failure.",
          "Rebuild the baseline every quarter. Channels shift when you change format or add a sponsor. An old baseline makes a good month look bad and hides a real slump. Fresh numbers keep your judgment honest.",
          "Write the baseline number at the top of your sheet. Seeing the floor next to this month stops the panic that comes with a slow start. Context calms an anxious creator better than any pep talk."
        ]
      },
      {
        heading: "Review monthly, not daily",
        paragraphs: [
          "Daily checks push you toward tiny edits that do not move income. Monthly reviews let a video settle and give you enough data to judge it. If you must look daily, look at one number, then close the tab and get back to work.",
          "Set a monthly reminder to compare the five metrics against last month and against your baseline. Write one decision you will make from the review. A review with no decision is just scrolling with extra steps.",
          "Bring a notebook. The act of writing the numbers down helps you remember the story behind them. A chart on a screen fades from memory. A line you wrote in your own hand tends to stick."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep only metrics that change a decision.",
          "Pair each money metric with one behavior metric.",
          "Average 90 days of older videos to set a floor.",
          "Rebuild the baseline every quarter."
        ]
      }
    ]
  },
  {
    slug: "money-revenue-per-view",
    title: "Revenue Per View: The Number Most Creators Ignore",
    excerpt: "Revenue per view blends ads, sponsors, and affiliate income into one number. It lets you compare two videos on the same scale and find the topics that pay.",
    date: "2024-08-20",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Why per-view revenue gets skipped",
        paragraphs: [
          "Revenue per view is total income divided by total views, and most creators never calculate it. They watch the payout instead. That is like judging a shop by the till, with no idea how many people walked in. The ratio separates a busy month from a profitable one.",
          "The number is blunt but honest. It blends ads, sponsors, and affiliate income into one figure, so you can compare a talk video against a gear review on the same scale. Two videos with the same views are not equal once money enters the room.",
          "The ratio also exposes the videos you make out of habit. Some formats feel popular and earn little. Seeing the number makes that painful truth easier to accept and far easier to change."
        ]
      },
      {
        heading: "How to compute it cleanly",
        paragraphs: [
          "Add every dollar from all sources for the month, then divide by views in thousands. Do not divide by views in millions unless you note it, or you will confuse yourself later. Write the unit in the column header. Small habits like this save you from a bad decision down the line.",
          "Use a single time window. If income is monthly but views are weekly, your number is noise. Align both to the calendar month, then leave the formula alone. Consistency matters more than precision when you are comparing your own videos."
        ]
      },
      {
        heading: "What moves the number",
        bullets: [
          "Audience location: some regions pay advertisers far more per view than others.",
          "Video length: ads that appear on longer videos add income without adding views.",
          "Content type: buying-intent topics pay more than broad entertainment.",
          "Sponsor load: a single deal can double a month while views stay flat.",
          "Traffic source: search and suggested traffic often pays better than short feed clicks."
        ]
      },
      {
        quote: "Revenue per view is not a score. It is a lens for comparing two videos that look the same size."
      },
      {
        heading: "Acting on the result",
        paragraphs: [
          "If one topic pays double your average per view, make two more of it this quarter. If a whole month sits low, check the traffic mix before blaming the topic. Cheap views from broad feeds drag the average down even when the video performed. Look at the source before you rewrite the script.",
          "Track the number per topic, not just per month. Over a year you will see which three topics carry the channel. That list is your publishing plan. Follow the money instead of your mood on a given Monday.",
          "Sort your last twenty videos by this number and look at the top five. Their titles often share a shape. That shape is a template you can follow without copying the exact topic."
        ]
      },
      {
        heading: "A quick worked example",
        paragraphs: [
          "Say a channel earns 1,400 dollars in a month across 500,000 views. Revenue per view is 2.8 dollars per thousand views. One tutorial made 90,000 views yet brought 600 dollars. That is 6.6 dollars per thousand, more than double the channel average. The lesson is simple: make more of that kind of video.",
          "Now look at a vlog with 200,000 views and 120 dollars. That is 0.6 dollars per thousand. It may still be worth making for other reasons, but it will not pay the rent. Know which video is which before you plan next month.",
          "Do not chase a single high number from one lucky video. Look for the pattern across a dozen. One spike can be luck. A steady trend across many videos is a signal worth betting on."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Divide total monthly income by views in thousands.",
          "Align income and views to the same window.",
          "Compare per topic, not only per month.",
          "Check traffic mix before blaming content."
        ]
      }
    ]
  },
  {
    slug: "money-ad-revenue-tracking",
    title: "Tracking Ad Revenue Across Multiple Platforms",
    excerpt: "Ad revenue arrives from several platforms on different clocks. Track each one separately, attribute income to when views ran, and compare net after fees.",
    date: "2024-11-03",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "revenue", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        heading: "One payout hides many platforms",
        paragraphs: [
          "Ad revenue rarely arrives from one place. A channel can earn from a video platform, a podcast feed, a newsletter ad slot, and a short-form bonus pool. Track each separately or you will credit the wrong one for a good month. The split takes an hour to build and pays back for years.",
          "Start a single sheet with a row per platform and a column for each month. The goal is a clear split, not a perfect accounting system. If the sheet is ugly and correct, it beats a pretty one you never open.",
          "Add a column for the platform fee rate so future you does not have to look it up again. Paste the rate once and every comparison after that is fair. Small setup now prevents a wrong call later."
        ]
      },
      {
        heading: "Match each platform to its report cycle",
        paragraphs: [
          "Platforms pay on different clocks. One settles monthly, another pays 60 days late, and a third uses a rolling 28-day window. Mixing those cycles makes the month look erratic when it is really just timing. Note the cycle beside each row so you do not misread a gap as a loss.",
          "Normalize to when the views happened. If a platform reports 45 days late, log the income against the month the views ran. Mark it as estimated until the real number lands. When the true figure arrives, update the cell and move on."
        ]
      },
      {
        quote: "A late payout is not a bad month. It is a reporting gap you can plan around."
      },
      {
        heading: "Watch the fee line",
        paragraphs: [
          "Every platform takes a cut before you see a number. One might keep 45 percent, another 30. Compare net, not gross. I once moved a series to a platform with a lower rate and gained nine percent, without changing the content.",
          "Currency conversion is the quiet cost. If you are paid in one currency and live in another, the rate on payout day matters. Note it, so a strong month does not look flat when the exchange moved against you.",
          "Ask each platform when money actually lands. A better rate that pays three months late can hurt cash flow more than a worse rate that pays on time. Weigh the timing, not just the percentage."
        ]
      },
      {
        heading: "Set one review day",
        paragraphs: [
          "Pick one day a month to open each report and update the sheet. Do it in the same order every time so you never skip the smallest platform. Small streams add up, and they are the first to be forgotten when you get busy.",
          "After a quarter, you will know which platform deserves more of your effort. Usually one pays clearly better per view. Shift a test batch there before you commit a whole series, and measure the result before you double down.",
          "Mark one platform to test each quarter. Give it three uploads before you judge. One video is never enough to know if a new home will work for your audience."
        ]
      },
      {
        heading: "Keep the smallest stream visible",
        paragraphs: [
          "It is tempting to drop the platform that pays the least. Do not delete it, just give it a fair test each quarter. Some small streams take a year to grow an audience and then pay quietly for a long time after that.",
          "Put every platform on the same sheet, even the tiny ones. When one starts to pay better per view, you want to catch it early, not after you have ignored it for a year and lost the habit of posting there.",
          "Small streams also diversify your income. A channel that leans on one platform is fragile. Several modest streams can add up to more than one big one, and they rarely all dip at the same time."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Log each platform on its own row.",
          "Attribute income to the month the views ran.",
          "Compare net after platform fees, not gross.",
          "Note currency conversion on payout day."
        ]
      }
    ]
  },
  {
    slug: "money-rpm-vs-cpm",
    title: "RPM vs CPM: Reading Both Numbers for Creators",
    excerpt: "RPM vs CPM confuses most creators. CPM is what advertisers pay per thousand impressions. RPM is what you keep per thousand views, after every ad type.",
    date: "2025-01-18",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "The difference in one line",
        paragraphs: [
          "CPM is what an advertiser pays per thousand ad impressions. RPM is what you keep per thousand video views, across all ad types. CPM describes the ad market. RPM describes your bank account, and that is the one that pays your bills.",
          "Creators mix them up because both appear on the same dashboard, sometimes side by side, with no note explaining which is which. Read the label twice before you panic about a number that never touched your income.",
          "Screenshot the definitions from each platform once and keep them in a note. When two dashboards disagree, you will know which number you are reading. That small note prevents a lot of needless worry."
        ]
      },
      {
        heading: "Why RPM is usually lower",
        paragraphs: [
          "Not every view shows an ad. Some viewers skip, some use ad blockers, and some sessions carry no commercial break. So RPM sits below CPM, because fewer impressions ran than views counted. That gap is normal and not a sign of a problem.",
          "Length matters too. A ten-minute video can carry more ad slots than a three-minute one, lifting RPM without changing CPM at all. This is why a longer format can pay better even when the audience is the same size.",
          "When a month looks bad, ask three questions before you act. Did views fall, did the mix shift, or did the season turn. One of those explains most dips without any panic."
        ]
      },
      {
        quote: "CPM tells you what the market pays. RPM tells you what you actually took home."
      },
      {
        heading: "What each number is good for",
        bullets: [
          "CPM: compare your channel against the broader ad market for your niche.",
          "RPM: plan income, set goals, and compare your own videos over time.",
          "Playback-based CPM: judge how advertisers value your specific audience.",
          "RPM by topic: decide which formats to repeat next quarter."
        ]
      },
      {
        heading: "A trap to avoid",
        paragraphs: [
          "Do not chase a high CPM if it comes from a topic your audience does not want. Advertisers pay more for finance and software, but forcing those topics onto a cooking channel breaks trust and drops views. A lower RPM with loyal viewers usually wins over a high RPM with strangers.",
          "Judge the trade-off with two numbers: RPM and returning-viewer share. If RPM rises while returning viewers hold steady, the change is safe. If returning viewers fall, the extra revenue is borrowed against your future.",
          "RPM reflects your choices: length, topic, and where the traffic comes from. CPM reflects advertiser demand you cannot control. Spend your energy on the half you can actually change."
        ]
      },
      {
        heading: "Reading the dashboard without panic",
        paragraphs: [
          "A single low CPM day means nothing. You need a full month before the number settles. Watch the trend line, not the dot. One quiet week rarely changes your yearly picture, even when it feels like the sky is falling.",
          "If both CPM and RPM fall for two straight months, then look for a cause. Check your traffic sources and your topics. Usually a shift in where the views come from explains it, not a sudden change in the ad market.",
          "Season matters too. Ad budgets rise toward the end of the year and dip in January. A flat month after a strong December is normal. Compare the same month against last year, not against last month."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "CPM is the ad rate; RPM is your take per thousand views.",
          "RPM trails CPM because not every view shows an ad.",
          "Use RPM for planning and CPM for market context.",
          "Never trade audience trust for a higher ad rate."
        ]
      }
    ]
  },
  {
    slug: "money-affiliate-revenue-reporting",
    title: "Affiliate Revenue Reporting Without the Guesswork",
    excerpt: "Affiliate revenue reporting goes wrong without a map between videos and links. Tag links, log clicks and conversions, and only count income after refunds close.",
    date: "2025-04-27",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "monetization", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Affiliate money hides in the cracks",
        paragraphs: [
          "Affiliate income is easy to earn and easy to misattribute. A link in an old video can sell a product six months later, and the report will not tell you which video sent the click. Without structure, you credit the newest upload and miss the real driver.",
          "Build a small map between your videos and your links before you scale. One link per video makes later reporting clean. It takes minutes at upload time and saves hours when you review a quarter.",
          "The programs report sales, not intent. Your job is to connect the click to the video that caused it. Without that bridge, the best performer can look like the worst."
        ]
      },
      {
        heading: "Tag links so reports make sense",
        paragraphs: [
          "Most programs let you add a sub-ID or tracking tag to a link. Use the video slug as the tag. When a sale lands, the report shows which video earned it. This one habit turns a flat payout list into a per-video income view.",
          "If a program does not support tags, keep a separate link per video where possible. It takes longer to set up and saves hours later. Clean data early beats a messy cleanup after a big month you cannot explain.",
          "Note the date you added each link. A product can change, a price can rise, and an old recommendation can turn bad. Reviews catch those drift moments before a viewer does."
        ]
      },
      {
        heading: "What to log each month",
        bullets: [
          "Clicks per video, so you can see which content drives interest.",
          "Conversion rate per video, clicks that turn into sales.",
          "Average order value, because one big sale can beat ten small ones.",
          "Refunds and returns, which quietly cut your true total.",
          "Payout status, so unpaid commissions do not inflate the month."
        ]
      },
      {
        quote: "A conversion is not income until the refund window closes."
      },
      {
        heading: "Fix the weak links first",
        paragraphs: [
          "Sort videos by clicks, then by conversion. A video with high clicks and near-zero sales points to a mismatch between the content and the product. Either swap the product or drop the link. A video with few clicks but strong conversion is a quiet winner. Send it more traffic.",
          "Review 90 days at a time. Affiliate behavior shifts with seasons, and a product that sold well in winter may stall in summer. Judge the trend across a quarter, not a single good week that you keep replaying in your head.",
          "Set a floor for action. If a link has under one percent conversion after 200 clicks, replace it. Rules like this stop you from nursing a link that was never going to work."
        ]
      },
      {
        heading: "Build a link map early",
        paragraphs: [
          "Before you have a hundred videos, make a simple list: video title, product, link tag. Five minutes per upload keeps the map current. Later, when a sale lands, you know exactly where it came from without digging through old descriptions.",
          "When you place a link, say out loud why this product fits this moment. If you cannot finish that sentence, the link will not convert. A clear reason beats a higher commission almost every time.",
          "Keep the map in the same file as your income sheet. One place for links and one place for money means one place to check. Splitting them across apps is how the map gets stale and useless."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tag affiliate links with the video slug.",
          "Log clicks, conversion, order value, and refunds.",
          "Sort by clicks, then by conversion, to find fixes.",
          "Do not count income before the refund window closes."
        ]
      }
    ]
  },
  {
    slug: "money-subscription-revenue-metrics",
    title: "Subscription Revenue Metrics for Video Channels",
    excerpt: "Subscription revenue metrics differ from ad income. Watch churn, average revenue per subscriber, and lifetime value, then tie one perk to retention.",
    date: "2025-07-09",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Recurring income needs different numbers",
        paragraphs: [
          "Subscription income behaves unlike ad income. It arrives whether you publish or not, but it leaks through churn. Track the leak or you will mistake a steady payout for growth. A flat payout with rising cancellations is a slow decline in disguise. The total looks calm while the base erodes underneath.",
          "Start with three: new subscribers, cancellations, and net change. If net change sits near zero for months, the channel is treading water even when the payout looks flat and fine. Movement matters more than the headline total. A quiet month with steady joins can be healthier than a loud one with heavy exits.",
          "Keep the three numbers on one line per month. The story lives in how they move together, not in any single figure. A rising total with rising cancellations is a warning, not a win."
        ]
      },
      {
        heading: "Churn is the number to watch",
        paragraphs: [
          "Monthly churn is cancellations divided by subscribers at the start of the month. Five percent sounds small until you run it for a year, where it compounds into most of your base leaving. Small churn improvements beat new marketing in most cases.",
          "Find why people leave. A payment failure is not the same as a choice to cancel. Separate them, because they need different fixes. One is a billing prompt, the other is a product problem.",
          "Do not discount to save a canceling member. A discount hides the real reason for one more month and usually ends the same way. Fix the reason or let them go with grace."
        ]
      },
      {
        quote: "Growth is not new subscribers minus none. It is new subscribers minus the quiet exits."
      },
      {
        heading: "Measure value per subscriber",
        bullets: [
          "Average revenue per subscriber: total recurring income divided by active members.",
          "Lifetime value: average months retained times monthly price.",
          "Upgrade rate: the share who move to a higher tier.",
          "Engagement to churn link: whether active members cancel less, which they usually do."
        ]
      },
      {
        heading: "Tie perks to retention",
        paragraphs: [
          "If you offer a paid tier, find the one perk that keeps people. Often it is a small thing like early access, not a big archive. Ask cancelled members what they missed, and you will learn more than any survey ever tells you.",
          "Test one change at a time. Add a perk, wait a full billing cycle, then read churn. Changing three things at once tells you nothing. Slow tests with clean results beat fast guesses every time.",
          "Look at who upgrades and who cancels. Often the two groups want the same thing and only one gets it. Fix that gap and retention improves without adding a single new feature."
        ]
      },
      {
        heading: "Watch the first 90 days",
        paragraphs: [
          "Early subscribers leave most. A member who stays 90 days often stays for a year. Track your 90-day retention, not just monthly churn. It tells you whether the people who join actually find a reason to stay. If that number is high, new perks matter less than keeping the room warm.",
          "If 90-day retention is low, add a reason to return every week: a members post, a live chat, a file. The goal is a habit, because habits outlast discounts. People keep paying for something woven into their week.",
          "Ask new members what they hope to get in the first month. Then deliver that within two weeks. A promise kept early is worth more than a perk added later."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track new, cancelled, and net subscriber change.",
          "Separate payment failures from real cancellations.",
          "Watch average revenue per subscriber and lifetime value.",
          "Test one retention perk per billing cycle."
        ]
      }
    ]
  },
  {
    slug: "money-revenue-forecasting-creators",
    title: "Revenue Forecasting When Your Income Keeps Moving",
    excerpt: "Revenue forecasting works better as a range than a single guess. Build low and high cases from the last year, and plan fixed costs against the floor.",
    date: "2025-10-22",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Forecasts fail when income moves",
        paragraphs: [
          "Creator income swings because views swing. A single viral video can double a month, and the next month falls back. A forecast that ignores this swing is a wish, not a plan. You need a tool that survives a bad month without collapsing. A range gives you that room to breathe.",
          "The fix is not a better guess. It is a range. Build a low, middle, and high case from your last 12 months, and plan your spending against the low one. The high case is for ambition, not for rent.",
          "Keep the range visible where you plan your month. A number in a document you never open does not shape a decision. Put it beside the calendar you actually use each day."
        ]
      },
      {
        heading: "Build a range, not a number",
        paragraphs: [
          "Sort the last 12 months from lowest to highest. The bottom three average gives your floor, the top three gives your ceiling, and the middle gives the base. That spread is your forecast, and it is honest.",
          "Recalculate each quarter. As your catalog grows, old videos keep earning and the floor slowly rises. That rising floor is the real sign of a stable channel. A high ceiling means little if the floor stays thin. Watch the floor, because that is what your bills actually touch.",
          "Keep a short list of triggers: if income drops below the floor two months running, cut a fixed cost. Deciding the rule while calm beats deciding it while scared."
        ]
      },
      {
        quote: "Plan your costs on the floor. Plan your dreams on the ceiling."
      },
      {
        heading: "Separate fixed from variable costs",
        paragraphs: [
          "Fixed costs, like software and gear payments, come out every month no matter what you earn. Variable costs, like freelance editing, scale with output. Match fixed costs to your floor, so a bad month never forces a cut. A fixed cost you cannot cover in a weak month is a risk, not a tool.",
          "Keep a cash buffer of two low months. It sounds dull and it is exactly what stops a slow quarter from turning into a fire sale of your time. The buffer buys you the right to say no to bad deals.",
          "List every fixed cost and its renewal date. Subscriptions you forgot about are the quiet killers of a tight floor. Cancel one before you add another."
        ]
      },
      {
        heading: "Inputs worth tracking",
        bullets: [
          "Rolling 12-month revenue range, updated each quarter.",
          "Share of income from your single largest source.",
          "Fixed cost total, compared against your floor.",
          "Cash buffer in months, not dollars.",
          "Pipeline of signed sponsor work for the next 90 days."
        ]
      },
      {
        heading: "Stress-test the plan",
        paragraphs: [
          "Take your floor and cut it by 30 percent. If fixed costs still fit, you are safe. If they do not, you have found a fragile spot to fix before a slow quarter arrives and forces the decision for you.",
          "Also test a fast-growth month. If income doubles, decide in advance where the extra goes. Without a rule, a windfall disappears on gear you did not need and cannot return.",
          "Run the test twice a year. Costs creep up with small subscriptions and price changes. A plan that fit in January may not fit in July, and the test catches that drift early."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Forecast a range, not a single number.",
          "Plan fixed costs against your low case.",
          "Keep a two-month cash buffer.",
          "Update the range every quarter as the catalog grows."
        ]
      }
    ]
  },
  {
    slug: "money-revenue-dashboards",
    title: "Building a Revenue Dashboard You Will Actually Use",
    excerpt: "Most creator revenue dashboards get built once and ignored. Design a short board around decisions you make weekly, and leave vanity totals off the main view.",
    date: "2026-02-14",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "A dashboard you will open twice",
        paragraphs: [
          "Most creator dashboards get built once and never opened again. The cause is simple: they answer questions you do not ask weekly. A useful board shows a few live numbers you act on, and hides the rest. The rest live in reports you open when a real question comes up.",
          "Design it around decisions. If a number cannot trigger an action, remove it. Ten numbers you ignore beat none, but one number you trust beats ten. Keep the main view small enough to read in under a minute.",
          "Set a rule for what earns a spot: it must inform a choice you make at least monthly. If it informs a yearly choice, move it to a report. If it informs nothing, delete it."
        ]
      },
      {
        heading: "Start with four panels",
        bullets: [
          "This month so far, total income against last month at the same day.",
          "Income by source, so the mix stays visible.",
          "Revenue per video for the last six uploads.",
          "Net subscriber or member change, the health signal behind the cash."
        ]
      },
      {
        quote: "A dashboard is not a report. It is a mirror you check before you decide."
      },
      {
        heading: "Keep it updated with little effort",
        paragraphs: [
          "Manual updates kill dashboards. Pull from sources you already export, like platform CSV files, and paste them into one sheet with a fixed layout. Ten minutes a week keeps it alive. If it takes an hour, it will die within a month. Short and current beats complete and stale.",
          "Freeze the layout. Moving columns around every month breaks the charts and the habit. Add a new tab for experiments instead of rebuilding the main view. A stable view is easier to trust at a glance. Consistency is what turns a sheet into an instrument.",
          "Name the sheet something plain and keep the link on your bookmarks bar. A board buried three folders deep will not survive a busy week. Friction decides whether a habit lives."
        ]
      },
      {
        heading: "What to leave off",
        paragraphs: [
          "Leave off vanity totals that only grow, like lifetime views. They feel good and change nothing. Leave off real-time counters that spike on one upload and settle back. Leave off any number you check just to feel fine.",
          "If you want a feel-good panel, keep it on a separate tab. Keep the main board for decisions only. The separation is what stops the pretty numbers from crowding out the useful ones.",
          "Cover the totals when you first open the board. Look at the four decision panels first. Check vanity numbers last, if at all, so they do not set your mood for the day."
        ]
      },
      {
        heading: "Share it with collaborators",
        paragraphs: [
          "If you work with an editor or manager, give them a read-only copy. The same four panels keep everyone aligned on what matters. Do not share the vanity tab, or the focus drifts to totals nobody can act on.",
          "Keep one line at the bottom of the board for notes: what changed this week and why. A short log turns the numbers into a story anyone can follow without a call.",
          "Review the board together once a month. Two sets of eyes catch a falling trend that one person excuses away. A quiet question from a teammate is often worth more than a chart."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build the board around decisions, not data.",
          "Show this month, source mix, per-video revenue, and net change.",
          "Automate or shorten updates so you keep the habit.",
          "Leave vanity totals off the main view."
        ]
      }
    ]
  },
  {
    slug: "money-revenue-attribution-video",
    title: "Video Revenue Attribution Across Your Sales Funnels",
    excerpt: "Video revenue attribution shares credit across several touches. Pick one simple rule, tag your links, and find the video that starts most buying paths.",
    date: "2026-09-12",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["revenue", "monetization", "business"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "One video, several touches",
        paragraphs: [
          "A viewer may watch a short, then a long video, then open your newsletter, then buy. Crediting the sale to the last click hides the work the earlier videos did. Attribution is the practice of sharing credit across those touches.",
          "You do not need perfect tracking. You need a rule you apply the same way every month, so the pattern is visible. A rough map you repeat beats an exact map you rebuild from scratch every time.",
          "Say the rule out loud before you start. If you cannot explain it in one sentence, it is too complex to keep for a year. Simple rules survive busy months."
        ]
      },
      {
        heading: "Pick a simple rule",
        paragraphs: [
          "First touch gives credit to the video that started the journey. Last touch gives it to the final step. Linear splits credit evenly. Any rule beats none, as long as you keep it long enough to see a pattern.",
          "For most creators, first touch is the useful one. It tells you which video brings strangers into your world, which is where growth starts. The video that closes a sale matters, but the one that opens the door brings new people.",
          "Write the rule in the same note where you log revenue. When someone asks why a sale counts, the answer is already written down. That record also protects you from changing the rule to flatter a bad month."
        ]
      },
      {
        heading: "Touches worth linking",
        bullets: [
          "UTM tags on links in descriptions, so you know which video sent traffic.",
          "A short link per video, so clicks stay separate in the report.",
          "Landing pages that match the video topic, so the path stays clear.",
          "A question at checkout asking where they heard about you, a rough but real signal.",
          "Newsletter signup source, so you can trace email buyers back to a video."
        ]
      },
      {
        quote: "Attribution is a rule, not a truth. Apply one rule for a year and it will teach you more than five fancy models."
      },
      {
        heading: "Read the path, not the point",
        paragraphs: [
          "Look for the video that appears at the start of most buying paths. That is your doorway, even if it earns little on its own. Make more of it. A boring tutorial that starts ten sales beats a flashy video that starts none.",
          "Then find the video that most often sits right before a purchase. That is your closer. Keep it fresh and accurate, because it does the final convincing. An outdated closer loses sales you never see.",
          "Check the doorway video every quarter. Its traffic can shift as search changes, and a fading doorway is a slow leak in new buyers. Refresh the title and thumbnail when it dips."
        ]
      },
      {
        heading: "Start with two touches",
        paragraphs: [
          "You do not need to track every step. Start with two: the video that first brought the viewer and the page where they bought. If most buyers share the same first video, that is your answer and your next production target.",
          "Add a third touch only when two are not enough to explain a jump in sales. More tracking adds noise before it adds clarity, and noise leads to bad decisions about what to make next.",
          "Keep the rule for a full year before you change it. Switching models every month resets the pattern and teaches you nothing. Patience with one rule beats cleverness with five."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one attribution rule and keep it for a year.",
          "Use UTM tags or per-video short links.",
          "Find the doorway video that starts most journeys.",
          "Keep the closer video accurate and up to date."
        ]
      }
    ]
  }
];
