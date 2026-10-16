import { BarChart3, Activity, Eye, TrendingUp, Target, Map, Search, Clock, Compass, Layers } from "lucide-react";
import type { BlogPost } from "../types";

export const batch48: BlogPost[] = [
  {
    slug: "discovery2-measuring-search-performance-basics",
    title: "Measuring Search Performance Without Lying to Yourself",
    excerpt:
      "Measuring search performance gets messy when dashboards show impressions without context. Here are the few numbers that actually predict channel growth.",
    date: "2024-03-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Impressions are a test, not a verdict",
        paragraphs: [
          "Measuring search performance is really about measuring what happens after the click. Impressions only tell you that YouTube showed your video to someone. They do not tell you whether that showing was deserved or wasted.",
          "I have watched people celebrate a huge jump in impressions while their click rate quietly collapsed. More eyes landed on the thumbnail and fewer people wanted it. That is not a win, it is a warning sign dressed up as good news.",
          "The trap is that impressions are the first number you see, and the biggest. A high number feels like approval. It is closer to a lottery ticket than a scoreboard because it measures an offer, not an outcome.",
        ],
      },
      {
        heading: "Start with three numbers",
        paragraphs: [
          "You can ignore most of the reports in Studio and still run a sharp channel. Stick to click through rate, average view duration, and returning viewers for a specific query. The rest of the data supports those three.",
          "Click rate tells you whether the title beats the videos beside it. Duration tells you whether the video kept its promise. Returning viewers tell you whether a single hit turned into a habit.",
          "I keep these three on one line per video and nowhere else. One line forces a clean comparison. A wall of charts encourages me to stare without deciding.",
        ],
        bullets: [
          "Click through rate on search: how often a showing turns into a click.",
          "Average view duration: how long the promised answer held attention.",
          "Returning viewers per topic: evidence that one answer created a habit.",
          "Watch time from search: the metric the recommendation engine weighs most.",
        ],
      },
      {
        quote: "A search result earns the click and the watch, or it borrows attention it can never repay.",
      },
      {
        heading: "Segment before you compare",
        paragraphs: [
          "Blended averages hide the truth. A video ranking for one narrow term looks weak next to a catalog ranking for twenty. Filter the traffic source to YouTube search, then group results by topic instead of by upload date.",
          "When I do this, a pattern appears almost every time. A few videos carry most of the search traffic while the rest sit near zero. That gap is the signal I actually care about. It points to the topics that deserve another video and the ones that should retire.",
          "Grouping by date flatters whatever you published most recently. Grouping by topic shows you which questions the audience keeps asking. I would rather answer the same question well three times than chase three different topics badly.",
        ],
      },
      {
        heading: "Keep a baseline you can defend",
        paragraphs: [
          "Before you change a single title, record four weeks of search data for your best twenty videos. Write down impressions, click rate, and duration for each one. That snapshot is your baseline.",
          "Now any edit has a before and an after. You stop arguing about whether a tweak worked because the shift shows up within days. If nothing moves, you learned something cheap and useful.",
          "I keep the baseline in the same spreadsheet as my dashboard. When someone asks whether a change helped, I open one file and point at two columns. No memory required, no story needed.",
        ],
      },
      {
        heading: "The mistake that costs the most",
        paragraphs: [
          "The most expensive error is chasing a big query you cannot satisfy. A term with hundreds of thousands of searches pulls in an audience that wanted something you did not build. They watch for forty seconds, feel misled, and never return.",
          "A smaller query you fully answer will outlast a larger one you half answer. Slow growth from satisfied viewers compounds. Fast spikes from disappointed ones evaporate and leave your channel worse off.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Impressions measure a test; pair them with clicks and watch time to judge results.",
          "Segment search traffic by topic so a single weak video does not distort the whole picture.",
          "Capture a four week baseline before editing any title or thumbnail.",
          "Judge every change by the delta, never by the final number alone.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-metrics",
    title: "The Search Performance Metrics Worth Tracking Weekly",
    excerpt:
      "The right search performance metrics keep you honest about which videos bring durable traffic. Track these numbers and skip the vanity ones.",
    date: "2024-08-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "A metric should answer a question",
        paragraphs: [
          "A metric earns its place only if it changes a decision. If a number never makes you rename a video, rewrite a title, or drop a topic, you can stop tracking it tomorrow and lose nothing.",
          "Search performance metrics are especially easy to over collect. Studio hands you dozens of them, and most will sit there looking important while you learn nothing actionable.",
          "The test I use is simple. When this number moves, what will I do differently? If there is no answer, the number is decoration.",
        ],
      },
      {
        heading: "The weekly five",
        paragraphs: [
          "I keep a short list and review it every Monday. Five numbers, no more. That constraint forces me to notice movement instead of drowning in dashboards.",
          "Each one maps to a decision I am willing to make that week. If I cannot act on it, it does not earn a slot.",
          "A sixth number creeps in every few months and I make it prove itself. It has to survive two Mondays in a row before it joins the list. Most candidates do not make it that far, which tells me the five were the right call.",
        ],
        bullets: [
          "Impressions per top query, to see whether YouTube is still testing the video.",
          "Click through rate by position, because a low click rate at rank three means the title failed, not the topic.",
          "Average view duration for search traffic alone, not blended with browse.",
          "Views from search per week, to spot slow declines before they compound.",
          "Queries that bring returning viewers, which mark durable demand worth a sequel.",
        ],
      },
      {
        quote: "A click without a watch is a promise made and broken in under sixty seconds.",
      },
      {
        heading: "Read duration as a promise kept",
        paragraphs: [
          "Average view duration is the closest thing to an honesty check. A high click rate with a short duration means the title sold something the video did not deliver.",
          "I compare duration on search against duration on browse for the same video. When search trails badly, the opening addresses the wrong query, even if the topic is right. That single comparison saves me from blaming the algorithm for a script problem.",
          "Duration also reveals the quiet mismatch. Maybe the viewer wanted a quick fix and got a history lesson. Maybe they wanted depth and got a two minute summary. The number flags the gap before the comments do.",
        ],
      },
      {
        heading: "Skip the vanity metrics",
        paragraphs: [
          "Subscribers gained does not tell you which query worked. Likes are noise on a small channel. Total channel views blend search with everything else and hide the one channel you are trying to understand.",
          "I am not saying those numbers are worthless in every context. I am saying they cannot answer a search question. Use the metric that maps to the decision you are actually facing.",
          "When I want a motivating number, I look at subscribers. When I want a useful one, I look at duration. Confusing the two is how creators end up celebrating while their channel stalls.",
        ],
      },
      {
        heading: "How the five work together",
        paragraphs: [
          "No single metric tells the story. Impressions without click rate hides a weak title. Click rate without duration hides a broken promise. Duration without returning viewers hides a one time fluke.",
          "Read together, they form a chain. YouTube offers the video, the viewer accepts, the video delivers, and the viewer comes back. A break anywhere in that chain shows up as a weak link in the five. That is the whole reason I trust the short list over a long one.",
          "The chain also tells me where to look first. A weak link early, at the offer stage, points to packaging. A weak link late, at the return stage, points to trust. Same channel, different job, and the order of the five keeps me from fixing the wrong end.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track metrics that change decisions, not metrics that look impressive.",
          "Keep the weekly list short enough to actually review.",
          "Compare search duration with browse duration to catch broken promises.",
          "Ignore subscriber and like counts when you are diagnosing search.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-dashboard",
    title: "How I Build a Search Performance Dashboard in One Hour",
    excerpt:
      "A search performance dashboard only helps if it fits on one screen. Here is how I build one that answers questions rather than raising them.",
    date: "2025-01-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "One screen or it does not count",
        paragraphs: [
          "A search performance dashboard should fit on one screen and answer three questions fast. Which queries are growing, which videos are slipping, and what changed last week.",
          "If your dashboard needs scrolling and clicking through tabs, you will stop opening it. The tool becomes a monument to good intentions instead of a working habit.",
          "I have built the elaborate version before. It looked impressive and I used it twice. The simple sheet I open every Monday has outlived every fancy tool I ever paid for.",
        ],
      },
      {
        heading: "The four panels I use",
        paragraphs: [
          "I build mine in a spreadsheet and refresh it weekly. Four panels, each with a clear job and no overlap with the others.",
          "I resist adding a fifth panel even when a new question arrives. If the question is urgent, it replaces a panel for the week instead of living beside it. That rule keeps the sheet small enough to read in one glance.",
        ],
        bullets: [
          "A query leaderboard ranked by watch time from search, not by views.",
          "A video health table showing click rate and duration side by side for the last four weeks.",
          "A movement list of queries that gained or lost more than twenty percent.",
          "A notes column where I log every title change with its date.",
        ],
      },
      {
        quote: "A dashboard without a change log is a weather report with the calendar torn off.",
      },
      {
        heading: "Log every change",
        paragraphs: [
          "The notes column is the part most people skip, and it is the one that makes the dashboard useful. A number without context is trivia. A number next to a dated title change is a lesson.",
          "Six weeks of notes will tell you more about your channel than a year of untouched graphs. You start to see which edits pay off and which ones just move numbers around without helping anyone.",
          "I write the note in the same minute I make the change. Waiting until the review means I forget half of what I did and reconstruct a story that probably flatters me.",
          "I also write down the date I saw the change show up, not just the date I made it. Search data lags by several days, and knowing the gap stops me from crediting an edit that could not have caused the movement.",
        ],
      },
      {
        heading: "Refresh on a fixed day",
        paragraphs: [
          "Pick a day and stick to it. I update on Monday mornings before I do anything creative. The ritual keeps the data fresh and stops me from checking numbers every hour.",
          "A weekly cadence also smooths daily noise. One bad Tuesday means nothing. Three down weeks means something is wrong and you can act before the quarter ends.",
          "The fixed day protects my attention more than any app blocker. When I know the review is coming Monday, I can ignore the dashboard the other six days with a clear conscience.",
        ],
      },
      {
        heading: "Keeping it alive",
        paragraphs: [
          "A dashboard dies from neglect faster than from complexity. I keep mine alive by making the weekly update take ten minutes, not an hour. If it grows past that, I cut a panel rather than skip a week.",
          "The goal is not a perfect record. It is a habit strong enough to survive a busy month. A slightly incomplete sheet you actually open beats a flawless one you avoid.",
          "When I fall behind, I fill in the current week and leave the gap. The blank tells the truth about a busy month. Backfilling from memory would only invent numbers that look tidy and mean nothing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the dashboard to one screen so you actually open it.",
          "Rank queries by watch time rather than views.",
          "Log every title change with a date so numbers have context.",
          "Refresh on a fixed day and resist the hourly check.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-benchmarks",
    title: "Search Performance Benchmarks: Compare Against Yourself",
    excerpt:
      "Search performance benchmarks are not universal. Compare your click and watch numbers against your own catalog before you trust any published average.",
    date: "2025-05-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "There is no universal benchmark",
        paragraphs: [
          "Search performance benchmarks are almost useless when you borrow them from a channel that is not yours. A gaming channel and a cooking channel live in different competitive worlds with different viewer habits.",
          "The only honest benchmark is your own history. What did your last ten search videos do? That range is the bar you are actually trying to beat, not some number from a conference slide.",
          "Borrowed numbers feel safe because they are specific. That specificity is exactly what makes them misleading. Your channel has your audience, your topics, and your past reputation to answer for.",
        ],
      },
      {
        heading: "Build your own range",
        paragraphs: [
          "Take your last twenty videos that get meaningful search traffic. Find the median click rate and the median duration for search viewers. Now you have a baseline range instead of a fantasy number.",
          "When a new video lands below the range, I ask why. When it lands above, I ask what to repeat. The comparison is fair because it is against your own work under your own conditions.",
          "I use the median rather than the average. One breakout video can drag an average far from reality. The median shrugs off the outlier and shows what a normal video looks like.",
          "I also split the range by video length. A ten minute explainer and a two minute clip will not share a click rate, and pretending they do makes every comparison slightly wrong. Tighter groups give cleaner answers.",
        ],
      },
      {
        heading: "Signals worth comparing",
        paragraphs: [
          "Some comparisons are more useful than others. I focus on a small set and ignore the rest until a specific question forces me to look wider.",
          "I write the comparison as a single question I can answer yes or no. Is this video beating my median for its topic? That clarity keeps a benchmark review to ten minutes instead of an afternoon.",
        ],
        bullets: [
          "Click rate against your median for videos in the same topic.",
          "Duration against your median for videos of similar length.",
          "Time to first search impressions, which shows how fast YouTube trusted the video.",
          "Percentage of search traffic that comes from your top query, to catch over dependence.",
        ],
      },
      {
        quote: "Compare yourself to who you were six months ago, not to a stranger's sticker on a video.",
      },
      {
        heading: "Published averages and when to ignore them",
        paragraphs: [
          "Industry click rate averages float around four to six percent, and people quote them like law. They are a rough starting grid, nothing more. Your niche may run at two percent or twelve.",
          "I use published numbers only to sanity check, never to set a goal. A goal you cannot control is just anxiety with a spreadsheet attached to it.",
          "The better habit is to write down your own number and date it. Next quarter, compare against that. Your past self is the only competitor who plays by the same rules.",
        ],
      },
      {
        heading: "When your baseline goes stale",
        paragraphs: [
          "A baseline does not last forever. If you changed your format, your niche got more crowded, or your audience shifted older, the old range stops being fair.",
          "I rebuild mine every six months or after any big change. Keeping a stale benchmark is its own quiet lie. It measures a channel you no longer run.",
          "I date the rebuild in the sheet so future me can see how old the range is. A benchmark without a date quietly becomes a myth, and myths are hard to argue with because nobody remembers where they came from.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use your own catalog as the benchmark before trusting any published number.",
          "Compare click rate within the same topic and duration within the same length.",
          "Watch time to first impressions to see how quickly a video earns trust.",
          "Treat industry averages as a rough check, not a target.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-attribution",
    title: "Search Performance Attribution for Small Channels",
    excerpt:
      "Search performance attribution is harder than it looks because a viewer rarely converts on the first click. Track the path, not just the landing.",
    date: "2025-09-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "The last click is not the whole story",
        paragraphs: [
          "Search performance attribution breaks the moment you assume one view equals one visitor. People search, watch a competitor, then come back to you days later. The first touch rarely gets credited.",
          "I stopped chasing perfect attribution and started tracking paths instead. A path is simply the sequence of searches that led someone to my channel and then to a second video.",
          "The path view changes what counts as success. A video that ranks low but sends people deep into your catalog did more for the channel than a high ranking video nobody watched twice.",
          "That reframing changed how I pick topics. I stopped asking which query had the most searches and started asking which query led somewhere. Volume pulls attention in. A path keeps it.",
        ],
      },
      {
        heading: "What you can actually measure",
        paragraphs: [
          "You cannot follow a person across devices, and you should not try. You can measure patterns that hold up well enough to guide decisions without pretending to be exact.",
        ],
        bullets: [
          "Search views followed by a second video view within ten minutes, which signals a satisfied viewer.",
          "Queries that appear alongside your channel name, which suggest growing brand demand.",
          "Returning viewers who arrive from search after a gap of several days.",
          "Videos that send viewers to a specific other video, revealing a natural content path.",
        ],
      },
      {
        quote: "Attribution is not about assigning credit. It is about finding the path that keeps a viewer around.",
      },
      {
        heading: "Build simple cohorts",
        paragraphs: [
          "I group search viewers by the query that brought them and watch what they do next. One query sends people to a playlist. Another sends them straight back to search.",
          "The first query is doing discovery work. The second is failing to hold them. Same traffic source, completely different jobs, and only the path view reveals which is which.",
          "Cohorts do not need software. Sorting the last hundred search views by query and asking where each group went next is enough to see the pattern with your own eyes.",
          "I label the two kinds of query in my notes. One is a doorway, the other is a dead end. Over a few months, the label decides where I spend my next script.",
        ],
      },
      {
        heading: "Do not over engineer it",
        paragraphs: [
          "Fancy attribution models belong to companies with data teams. A solo creator needs one honest question answered: did search traffic turn into people who come back?",
          "If the answer is yes on a topic, make more of it. If the answer is no, the ranking is vanity and you can move on without guilt.",
          "I have seen creators spend a hundred hours building a model that told them what a single sentence could. Ask the simple question first. Reach for the model only when the simple answer runs out of usefulness.",
          "The simple question usually holds for a long time. I have run channels for years on one line of reasoning: does search traffic come back? It has never once failed to point me at the right topic.",
        ],
      },
      {
        heading: "What to do with a good path",
        paragraphs: [
          "When I find a query that reliably sends viewers to a second video, I treat it as a doorway. I add an end screen that points to the natural next step and a pinned comment that offers it again.",
          "Then I watch whether the second video view rate climbs. If it does, the doorway holds real traffic. If nothing changes, the path was noise and I stop investing in a relationship that was never there.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track paths of searches and views rather than a single last click.",
          "Measure search views that lead to a fast second video as a satisfaction signal.",
          "Group viewers by query to see which topic does discovery work.",
          "Keep it simple; you need a direction, not a perfect model.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-rank-tracking",
    title: "Tracking Search Performance Rank Without Obsessing",
    excerpt:
      "Search performance rank often hides behind blended averages. Track your position for each query and watch how one change moves the whole shelf.",
    date: "2026-01-06",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "Rank is a range, not a number",
        paragraphs: [
          "Search performance rank tracking fools people because a reported position is an average across viewers, devices, and times. A rank of four can mean three for some people and eleven for others.",
          "I treat rank as a range with a center. The center matters, but the spread tells me whether YouTube is still learning who should see the video.",
          "The spread also explains the swings that drive people mad. A rank that jumps from four to nine overnight is often noise, not a collapse. Look at the trend line before you panic.",
          "I plot four weeks behind the current point so the line has context. A single dot tells you nothing. A line that drifts for a month is a real signal and worth an edit.",
        ],
      },
      {
        heading: "Track rank next to behavior",
        paragraphs: [
          "A rank number alone is hollow. It only becomes useful when paired with what viewers did at that spot on the shelf.",
          "Rank three with a two percent click rate is worse than rank eight with an eight percent click rate. The shelf position does not matter if the packaging loses the fight for attention.",
          "I write the two numbers side by side in the same row. Seeing them together stops the childish instinct to brag about position while ignoring the click.",
          "When the two disagree, I trust behavior over position every time. The shelf is YouTube's opinion. The click is the viewer's. I would rather learn from the person deciding.",
        ],
      },
      {
        heading: "What to record each week",
        paragraphs: [
          "I keep a small log per target query. The entries take five minutes and pay off for months of decisions.",
        ],
        bullets: [
          "Reported position, recorded on the same day each week.",
          "Click rate for that query, pulled from the search terms report.",
          "Whether the video appears with a thumbnail, a caption, or neither.",
          "Any change I made to the title or description that week.",
          "A note on whether a stronger creator entered the results.",
        ],
      },
      {
        quote: "Chasing rank without watching behavior is like cheering a starting position before the race starts.",
      },
      {
        heading: "When to stop tracking a query",
        paragraphs: [
          "Some queries are not worth the attention. If a term sits past rank twenty for six weeks with no movement, I archive it. The video may still earn passive views, but it is not a battle I am winning.",
          "Archiving is not quitting. It is freeing attention for a query where a small change actually moves the needle in my favor.",
          "I keep the archived list in case the shelf shifts. Sometimes a competitor leaves a niche and an abandoned query becomes winnable a year later. The archive is a parking lot, not a graveyard.",
          "I revisit the archive once a quarter and pull back anything that has started moving. Two queries came back to life last year when the top results got stale or vanished. Attention there was cheap because nobody else was watching.",
        ],
      },
      {
        heading: "The tracker is not the goal",
        paragraphs: [
          "It is easy to turn rank tracking into a hobby. Refresh, screenshot, refresh again. The number changes and nothing about the channel does.",
          "I set a rule for myself. Track once a week, act once a week. If a movement does not lead to an edit or a decision, I note it and move on. Measurement without action is just fidgeting with extra steps.",
          "The weekly limit has a second benefit. It forces me to batch my curiosity into one sitting instead of leaking it across the week. My best creative hours stay protected, and the numbers still get their day.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat rank as a range centered on an average position.",
          "Always read rank beside click rate and duration.",
          "Log the same query on the same day for a clean comparison.",
          "Archive queries that never move so attention stays on winnable terms.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-audit",
    title: "A Search Performance Audit You Can Run in a Day",
    excerpt:
      "A search performance audit is a half day of quiet work that saves months of guessing. Here is the checklist I run before every content sprint.",
    date: "2026-03-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "An audit is triage, not decoration",
        paragraphs: [
          "A search performance audit is a half day spent finding the videos that quietly underperform. It is not a polish session and it is not busywork. The goal is a short list of fixes with the biggest return.",
          "I run one at the start of every content sprint. It keeps me from building new videos on top of old mistakes that are still dragging the channel down.",
          "Triage means you accept that most of the catalog needs nothing. You are hunting for the few broken videos costing you the most, then fixing those and moving on.",
          "I write the audit output as a numbered list of no more than five fixes. A longer list is a wish, not a plan. Five is what a person can actually finish in a week without abandoning the sprint.",
        ],
      },
      {
        heading: "Step one: pull the search report",
        paragraphs: [
          "Export the last ninety days of search traffic. Sort by impressions first, then by click rate. The videos with high impressions and low clicks are the cheapest wins on the whole list.",
          "Those videos already rank. YouTube is showing them to the right people and the thumbnail or title is losing the moment. A new cover image often doubles the click rate within a week.",
          "High impressions are the entry ticket. A video with tiny impressions has a different problem, usually that it never earned a test in the first place. Fix the ranking videos before you rescue the invisible ones.",
          "I check the impression count before anything else. It tells me whether a video is losing a fight or never entered one. Those two problems need completely different fixes, and mixing them up wastes the whole session.",
        ],
      },
      {
        heading: "The checklist I follow",
        paragraphs: [
          "I keep the same checklist every time so nothing slips through. It is short on purpose and fits on an index card.",
        ],
        bullets: [
          "List every video with more than a thousand search impressions.",
          "Flag any click rate below two percent for a title and thumbnail test.",
          "Flag any high click rate with short duration for an opening rewrite.",
          "Find videos that rank for a query their content barely addresses.",
          "Note topics with steady search demand but only one video, which mark a gap.",
        ],
      },
      {
        quote: "An audit turns a pile of old uploads into a to do list you can actually finish.",
      },
      {
        heading: "Fix in order of effort",
        paragraphs: [
          "I start with thumbnails because they take twenty minutes and change the most. Titles come second. Rewriting an opening is a bigger job, so I save it for videos that already earn real traffic.",
          "By the end of the half day I usually have five fixes. Two of them will pay off. That ratio is good enough, and it beats guessing about what is broken.",
          "I also time box each fix. If a title rewrite takes more than fifteen minutes, the video does not matter enough to agonize over. Move to the next one and come back only if you run out.",
          "The time box also stops perfectionism from eating the day. I have spent an hour on a thumbnail nobody would ever see. The clock is there to remind me that a finished fix beats a beautiful one that stays undone.",
        ],
      },
      {
        heading: "Schedule the next one",
        paragraphs: [
          "An audit you run once fades within a season. I put the next one on the calendar before I finish the current one, usually eight to twelve weeks out.",
          "The cadence matters more than the depth. A rough audit every quarter beats a perfect audit every two years. Your catalog keeps growing, and so does the list of old videos quietly costing you clicks.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Audit for fixes that return money, not for tidiness.",
          "Prioritize high impression, low click videos first.",
          "Use a fixed checklist so you never skip the cheap wins.",
          "Work from thumbnail to title to opening, in that order of effort.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-reports",
    title: "Writing Search Performance Reports That Drive Action",
    excerpt:
      "Search performance reports fail when they describe the past and skip the decision. Write the number, the cause, and the next move in one line.",
    date: "2026-05-28",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "A report is a decision",
        paragraphs: [
          "A search performance report fails when it describes the past and stops there. Anyone can read a graph. The value is in the sentence that follows it: the number and the likely cause, plus the next move.",
          "I write my reports for a reader who has thirty seconds. If they cannot act after half a minute, I wrote it wrong and the report will collect dust.",
          "The test is brutal but fair. Hand the report to someone who missed the week. If they ask what they should do, you buried the answer instead of leading with it.",
          "I put the recommendation in the first line and the evidence under it. Readers who trust me can stop after the line. Readers who doubt me can read down for the proof, which is the order they actually want.",
        ],
      },
      {
        heading: "The one line format",
        paragraphs: [
          "Every entry gets one line with three parts. Metric moved this way. Here is what probably caused it. Here is what we do next.",
          "That format forces me to connect data to action. When I cannot fill in the cause, it means I do not understand the movement yet and I should dig before writing anything down.",
          "The format also exposes weak reasoning. A cause that sounds like a guess reads like a guess. That discomfort is useful, because it pushes me to check before I claim.",
          "I have learned to write the word unknown when I mean it. A report that admits a gap is more useful than one that invents a cause. The invented cause sends someone off to fix the wrong thing.",
        ],
      },
      {
        heading: "What good reports include",
        paragraphs: [
          "A few things show up in every report I choose to keep, and they are the same things a future reader will need.",
        ],
        bullets: [
          "The specific query or video, named plainly, not a vague category.",
          "The size of the change in real numbers, not percentages alone.",
          "A dated note on what was edited, so the cause stays visible.",
          "A clear next step with an owner, even when the owner is me.",
          "A short list of what was ignored and why, to prevent re litigating it.",
        ],
      },
      {
        quote: "Numbers make a report. Decisions make it worth reading.",
      },
      {
        heading: "Keep reports boring on purpose",
        paragraphs: [
          "I resist the urge to dress up a report. Colored arrows and clever charts add little. A plain table that answers questions gets opened again next week, and that is the only test that matters.",
          "Boring also makes it comparable. When the format never changes, I can lay two months side by side and see the pattern immediately.",
          "Flashy reports have a hidden cost. They imply the analysis was harder than it was, and they make the next report feel like a production instead of a habit.",
          "I keep the template plain for the same reason I keep the dashboard small. The lower the effort to start, the more likely the habit survives a hard week. Survival matters more than polish.",
        ],
      },
      {
        heading: "Write it while it is fresh",
        paragraphs: [
          "I write the report the same day I pull the numbers. Waiting until the end of the month means I reconstruct stories from memory, and memory always prefers a tidy explanation over the messy truth.",
          "Fresh notes are uglier and more honest. They say the video tanked and I am not sure why. That uncertainty is more useful than a confident sentence written three weeks later.",
          "The fresh note also catches the small things I would otherwise forget. A comment from a viewer, a thumbnail I swapped at lunch, a query that appeared out of nowhere. Those details are the difference between a guess and a record.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write for a reader with thirty seconds and a decision to make.",
          "Use one line per finding: number, cause, next move.",
          "Name specific queries and videos instead of broad categories.",
          "Keep the format stable so months stay comparable.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-ctr",
    title: "Measuring Search Performance Through Click Through Rate",
    excerpt:
      "Search performance lives and dies on click through rate. This is exactly how I measure it without fooling myself about which titles truly work.",
    date: "2026-07-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Click rate is the search channel's pulse",
        paragraphs: [
          "Search performance lives or dies on click through rate. Rank gets you onto the shelf. The click decides whether the video gets a real chance at an audience.",
          "I check click rate per query, never in a blended lump. A strong average can hide two queries doing all the work and five quietly failing behind them.",
          "The blend is comfortable and misleading. It lets a good video carry the reputation of a weak one. Splitting by query is how you find out which titles are actually earning their place.",
          "Blending also hides the video that is carried by one lucky query. Pull that query out and the click rate collapses. I want to know which titles stand on their own and which ones are borrowing a ride.",
        ],
      },
      {
        heading: "Test one variable at a time",
        paragraphs: [
          "When I change a title and a thumbnail in the same week, I learn nothing. The click rate moves and I cannot say why. So I change one thing and wait seven days.",
          "Seven days is usually enough for a ranked video to show a clear trend. If the number does not move, I revert and try the other element instead of stacking guesses.",
          "I also keep the old version saved. Sometimes the original wins and I was about to make the video worse out of boredom. Reverting fast is a skill worth practicing.",
          "I write the original in the log before I touch anything. Two minutes of copying saves a week of trying to remember what the old title said. Memory is a poor archive when your own edits are involved.",
        ],
      },
      {
        heading: "Levers that move click rate",
        paragraphs: [
          "After a few dozen tests, a handful of moves show up again and again across very different niches.",
        ],
        bullets: [
          "Matching the exact phrase people type, since search viewers scan for their own words.",
          "Adding a number or a year to signal freshness on an evergreen topic.",
          "Cutting vague adjectives that could belong to any video in the niche.",
          "Testing a face versus a clean graphic, because niches differ and assumptions are costly.",
          "Keeping the thumbnail readable at the smallest size it appears.",
        ],
      },
      {
        quote: "A title wins or loses in the two words a searcher recognizes before they read the rest.",
      },
      {
        heading: "Watch duration after the click",
        paragraphs: [
          "A rising click rate with a falling duration is a trap. You won the click with a promise the video could not keep. That pattern burns trust and the impressions fade within weeks.",
          "So I judge a title test by two numbers together. Did more people click, and did they stay? A win on the first and a loss on the second is not a win at all.",
          "I have fallen for this more than once. A punchy title lifted clicks for four days, then the duration data arrived and the impressions collapsed. The short win cost me a month of momentum.",
          "So now I watch the second number as closely as the first. A title that lifts clicks and holds duration is a keeper. A title that lifts clicks alone is a loan I will have to repay.",
        ],
      },
      {
        heading: "Give tests time to breathe",
        paragraphs: [
          "Judging a test after two days is how people talk themselves into bad titles. Early data is noisy and often reflects a temporary surge from your existing audience rather than search viewers.",
          "I mark the test day in the log and do not look until the seventh day. That small delay has saved me from reverting good changes and keeping bad ones.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Measure click rate per query, not as a blended average.",
          "Change one variable and give it seven days before judging.",
          "Reuse the searcher's own words in the title.",
          "Pair every click rate win with a duration check.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-performance-tools",
    title: "Choosing Search Performance Tools Without Overspending",
    excerpt:
      "Search performance tools range from free Studio reports to paid rank trackers. Pick the stack that answers your questions, not the loudest one.",
    date: "2026-09-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Buy the tool that answers your question",
        paragraphs: [
          "Search performance tools multiply fast, and most of them answer questions you never asked. I start from a question, then look for the cheapest tool that answers it.",
          "For a small channel, that is often the free search report in Studio plus a plain spreadsheet. No subscription required, and no new dashboard to maintain.",
          "The order matters. Ask the question first, then shop. Buying the tool first means you spend weeks looking for a problem it can solve so the money feels justified.",
          "That is backwards, and it is expensive. A tool is a means to an answer, never the other way around. The question should exist before the checkout page does.",
        ],
      },
      {
        heading: "The stack I actually use",
        paragraphs: [
          "After years of trying everything, I settle on four pieces. Each one has a job and none of them overlaps much with the others.",
        ],
        bullets: [
          "Studio's search terms report for real impressions, clicks, and the queries behind them.",
          "A spreadsheet for the baseline, the change log, and the weekly review.",
          "A rank tracker only when I need to follow one query closely for a launch.",
          "A notes app for ideas about why a number moved, captured in the moment.",
        ],
      },
      {
        heading: "When paid tools earn their cost",
        paragraphs: [
          "Paid rank trackers earn their place when you are managing many queries at once or launching something where a few positions matter. They save time, and time is the real currency on a solo channel.",
          "For a channel with twenty videos and steady demand, they usually add noise instead of clarity. I would rather put that money into a better microphone or an editor.",
          "The honest question is whether the tool saves more hours than it costs dollars. At a small scale the answer is often no. At a large scale it flips fast.",
          "I made the flip once when a launch covered forty queries. Tracking them by hand would have eaten the week, so I paid for a month of rank tracking and cancelled it after. Paying for a season beats paying forever out of habit.",
        ],
      },
      {
        quote: "The best measurement tool is the one you open every week without dread.",
      },
      {
        heading: "Avoid tool sprawl",
        paragraphs: [
          "Every new dashboard is a promise to check it. Collect enough of them and you spend your week maintaining views instead of making videos.",
          "I add a tool only after I have felt the pain it solves for a month. That rule has saved me more subscriptions than any discount code ever could.",
          "The pain test works because it separates real needs from shiny ones. A need keeps showing up. A shiny tool is forgotten by Friday, right after the trial email arrives.",
          "I also notice that the tools I keep are the boring ones. They load fast and answer one question well. The exciting tools with the long onboarding rarely survive a second month.",
        ],
      },
      {
        heading: "Your data outlives the tool",
        paragraphs: [
          "Tools come and go. The baseline, the change log, and the query history are the assets that stay. I keep all of it in plain files I can read without a login.",
          "That habit has paid off more than once. When a service changed its pricing or vanished, my records survived. The numbers were mine, not rented.",
          "That is the quiet advantage of plain files. They open in anything, on any machine, without a subscription check. The story of my channel lives in text I control, and that feels sturdier than any dashboard login.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with a question, then find the cheapest tool that answers it.",
          "Studio reports plus a spreadsheet cover most small channels well.",
          "Pay for rank tracking only when many queries or a launch justify it.",
          "Add a new tool only after the pain has lasted a month.",
        ],
      },
    ],
  },
];
