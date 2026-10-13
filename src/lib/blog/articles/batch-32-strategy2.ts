import {
  Activity,
  Clock,
  Compass,
  Flag,
  Layers,
  Repeat,
  Scissors,
  Search,
  Target,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch32: BlogPost[] = [
  {
    slug: "strategy2-seasonal-vs-evergreen-balance",
    title: "Seasonal vs Evergreen: Balancing Your Content Mix",
    excerpt:
      "Seasonal videos spike and vanish, evergreen videos compound slowly. Here is how to balance seasonal vs evergreen content so the channel never goes quiet.",
    date: "2024-02-05",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Seasonal content rides a wave that lasts a few weeks and then drops off a cliff. Evergreen content sits in search results and recommendations for years, collecting views while you are not looking. The right balance depends on where your traffic actually comes from, not on a ratio you copied from someone else's channel.",
          "A cooking channel that pulls most of its views from search should lean evergreen. A channel that lives on trend emails and the home feed should lean seasonal. Pick the wrong direction and you spend weeks on videos that never get a fair shot. The mix is a business decision, and it should follow your numbers rather than your mood.",
        ],
      },
      {
        quote:
          "Seasonal videos pay rent once. Evergreen videos keep paying while you are asleep.",
      },
      {
        heading: "Where each type earns its keep",
        paragraphs: [
          "Evergreen videos answer questions people ask year after year. How to tie a tie. How compound interest works. Which settings to use for a night shot. What a deductible actually does. The topic does not expire, so the video keeps appearing in search without new effort from you.",
          "Seasonal videos cover moments. A product launch, a holiday, a tax deadline, a console release. Their ceiling is higher because the whole audience is thinking about the same thing at once. Their floor is zero the week after the moment passes, and that floor is the part people forget when they plan a calendar.",
        ],
      },
      {
        heading: "Signals your mix is off",
        bullets: [
          "Views collapse every January and never fully recover, which usually means the channel runs on seasonal fuel alone.",
          "Search impressions stay flat while subscriber count grows, a sign you convert attention into spikes instead of library assets.",
          "You dread one specific month every year because nothing in the back catalog carries it.",
          "A single seasonal video brings most of a month's views, so one weak launch sinks the whole quarter.",
        ],
        paragraphs: [
          "Any one of those is survivable. Two or three together mean the channel has no floor under it, and a slow month turns into a panic meeting about why the numbers fell.",
        ],
      },
      {
        heading: "A starting ratio that survives contact",
        paragraphs: [
          "For a channel younger than a year, I would start near two evergreen videos for every seasonal one. The library is thin, searched questions are reliable, and evergreen work builds a base you can point to later when a spike brings strangers in.",
          "For an established channel with a real subscriber base, move toward an even split or even heavier seasonal. The back catalog already does the evergreen work, so fresh spikes reach people who then dig into the library at their own pace.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match the mix to your traffic source, not to a number you saw in a video.",
          "Treat evergreen as the floor and seasonal as the ceiling.",
          "Watch one bad month to find out whether the channel can survive without a spike.",
          "Recheck the ratio twice a year, since search volume and trends both move.",
        ],
      },
      {
        heading: "Reading your own numbers",
        paragraphs: [
          "Open your analytics and split last year's videos by whether the topic still makes sense today. If most of the library is dated, the channel is running on borrowed time. If most of it still applies, you have something solid to build on.",
          "Write down the mix you ran last quarter and the views each type produced. That single comparison tells you more than any generic advice about ratios, and it takes twenty minutes to put together.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-evergreen-backbone-channel",
    title: "Build an Evergreen Backbone for Steady Traffic",
    excerpt:
      "An evergreen backbone is a set of videos that keep working after publish. Build it once and seasonal spikes land on top of steady traffic year round.",
    date: "2024-06-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "consistency"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "An evergreen backbone is a set of videos that keep pulling views long after they publish. It is the part of your library that does not care what month it is. Build it and seasonal spikes get a floor to land on instead of starting from zero every time.",
          "Most channels build this by accident. A tutorial here, a review there. The channels that grow steadily build it on purpose and know exactly which videos are doing the lifting. That difference shows up most in the quiet months, when traffic from the feed slows and search becomes the main source.",
        ],
      },
      {
        heading: "What belongs in the backbone",
        paragraphs: [
          "The backbone holds answers to questions that will not change. How to set up a microphone, how a mortgage payment is calculated, the difference between two common file formats. If the answer will still be true in three years, it belongs in the set.",
          "It also holds your best examples. A video that shows a technique on a real project keeps working because people return to watch the technique applied, not just explained. When a viewer searches for the outcome, your example is what earns the click.",
        ],
      },
      {
        heading: "Picking the first ten",
        bullets: [
          "List the twenty questions new viewers ask you most often in comments and email.",
          "Group them by how long the answer stays correct, then drop anything tied to a specific release date.",
          "Check search demand for each before you script, so you are not guessing at interest.",
          "Pick the ten with the clearest single answer and the lowest chance of aging out this year.",
        ],
        paragraphs: [
          "Ten is enough to start. Those ten videos will carry more weight than the next thirty trend clips you could film instead, because they keep working without another hour of your time.",
        ],
      },
      {
        quote:
          "A backbone is not a best-of list. It is the shelf a new viewer browses when they decide whether to stay.",
      },
      {
        heading: "How to keep it alive",
        paragraphs: [
          "Evergreen does not mean untouched forever. Software changes, prices move, best practices shift. Set a reminder every six months to review the backbone and update anything that drifted out of date.",
          "Updates usually beat new uploads. A refreshed video keeps its watch history and search position, while a reupload starts over with no history at all. That is why the backbone is worth maintaining instead of replacing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Evergreen is a position in your library, not a genre.",
          "Build the backbone before you chase a spike.",
          "Set a twice-a-year review so old answers do not quietly go stale.",
          "Protect it by linking it from the descriptions of your seasonal videos.",
        ],
      },
      {
        heading: "The habit that keeps it standing",
        paragraphs: [
          "Count how many videos in your library still make sense to a new viewer today. If that number is small, you are looking at your next project list. Pick one question you get asked often and turn it into the next backbone entry.",
          "A channel with a solid backbone can survive a quiet month without panic. A channel without one treats every quiet month like a crisis, and that stress leaks into the work.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-seasonal-spikes-planning",
    title: "Planning Seasonal Spikes Without Burning Out Your Team",
    excerpt:
      "Seasonal spikes reward planning and punish panic. A simple calendar built months ahead keeps seasonal content from eating your whole schedule.",
    date: "2024-10-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "consistency"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Seasonal spikes reward people who plan months ahead and punish people who scramble. The panic version looks like this: a holiday is two weeks away, you have no footage, and you publish something rushed. The planned version starts in the summer for a December launch and feels calm from the first shot.",
          "The work is not the filming. It is deciding what to make, then protecting the time to make it before the wave arrives. Most of the exhaustion around seasonal content comes from making those decisions late, when every option feels urgent.",
        ],
      },
      {
        heading: "Map the spikes you actually have",
        paragraphs: [
          "Not every channel has a December. A fitness channel spikes in January. A tax channel spikes in spring. A back-to-school channel spikes in late summer. Write down the two or three moments that reliably lift your niche.",
          "Then check your own analytics for the last two years. The spikes you remember are not always the ones the data shows, and a missed spike is worth knowing about before you plan around it again.",
        ],
      },
      {
        heading: "Working backward from a date",
        bullets: [
          "Mark the spike date, then subtract three weeks for editing and three more for filming.",
          "Reserve the script slot at least two months out so it does not compete with weekly uploads.",
          "Batch the seasonal filming in one or two days instead of spreading it across weeks.",
          "Leave one buffer week for reshoots, because the first take rarely matches the plan.",
        ],
        paragraphs: [
          "Treat the buffer as part of the schedule, not as slack you hope to avoid. The week you do not need is a gift. The week you skipped is the week everything slips.",
        ],
      },
      {
        quote: "A rush only feels fast. Planned work ships earlier with less of it.",
      },
      {
        heading: "Protect the normal schedule",
        paragraphs: [
          "The biggest mistake is letting seasonal production eat the regular uploads. That trades a spike for a slump, and you feel the loss in the weeks after the holiday when the feed has moved on.",
          "Keep the weekly cadence running and fit seasonal work into the gaps. If you cannot, cut the weekly count on purpose and say so, rather than skipping without a plan. Viewers forgive a planned break far more than a silent one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name your spikes from data, not memory.",
          "Start seasonal work two months before the date.",
          "Batch filming so a spike does not become a slow drain.",
          "Do not let the spike erase the schedule that feeds the rest of the year.",
        ],
      },
      {
        heading: "The loop you end up with",
        paragraphs: [
          "The year runs on a loop once you can see it. You plan a spike, film it early, keep the normal schedule intact, and then use the quiet weeks to refill the pipeline for the next one.",
          "That loop is why planning matters more than talent here. The creator with a worse camera and a real calendar beats the creator with better gear and no plan every December.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-holiday-content-calendar",
    title: "A Holiday Content Calendar That Pays After December",
    excerpt:
      "Holiday content usually dies on January first. A holiday content calendar that plans the second life keeps the same upload earning for months.",
    date: "2025-01-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Most holiday content dies on January first. A small change in how you build it lets the same video earn for months after the decorations come down. The trick is to write the holiday piece so a version of it works in the off season.",
          "A gift guide for runners can become a gear guide for new runners. A year-in-review can become a reusable template. Same shoot, two lives, no extra filming required if you plan for it in October.",
        ],
      },
      {
        heading: "Design for two seasons at once",
        paragraphs: [
          "Before you script, ask what the video is really about underneath the holiday wrapper. If the answer is useful outside December, you can structure the video so the holiday part is a scene and the useful part is the spine.",
          "That means shooting a few extra lines in neutral terms. No ornaments in the background for the segment you plan to reuse. It costs ten minutes and saves a whole reshoot in the spring.",
        ],
      },
      {
        heading: "What to build in October",
        bullets: [
          "A buyer's guide with a holiday intro and a body that stands on its own.",
          "A how-to that uses a holiday project as the example but teaches the reusable skill.",
          "A recap that doubles as a beginner's roadmap for the coming year.",
          "A short teaser that points to the long evergreen version in the description.",
        ],
        paragraphs: [
          "Pick two of those four and you have a holiday slate that still has value in March. You do not need all of them, and trying to build everything is how the calendar breaks.",
        ],
      },
      {
        quote: "Holiday content should be a door, not a dead end.",
      },
      {
        heading: "Schedule the second life",
        paragraphs: [
          "Once the holiday passes, the video does not need to sit. Update the title and thumbnail to the neutral angle, refresh the description, and pin it to a relevant playlist so new viewers can find it.",
          "I have seen a single December upload keep pulling views through spring because the creator swapped the packaging instead of burying the file. The footage was the same. Only the wrapper changed.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write holiday videos with a neutral core.",
          "Shoot reusable segments without seasonal props.",
          "Repackage in January instead of abandoning the upload.",
          "Point the seasonal video at your evergreen backbone.",
        ],
      },
      {
        heading: "The calendar entry nobody writes",
        paragraphs: [
          "Add one line to your calendar for the first week of January: repackage the holiday slate. That single reminder is the difference between content that lasts three weeks and content that carries you into spring.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-repurpose-seasonal-to-evergreen",
    title: "Turn Old Seasonal Videos Into Evergreen Assets",
    excerpt:
      "Old seasonal videos still hold reusable lessons. Learn to turn seasonal videos into evergreen assets with a few hours of rework instead of a reshoot.",
    date: "2025-05-06",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "consistency"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "You do not have to choose between throwing away an old seasonal video and reuploading it. Most of the time you can edit it into something that works year round. The footage is already paid for, and the only cost is a few hours of rework.",
          "A video made for a specific moment usually contains a reusable lesson wrapped in dated packaging. Strip the wrapper and you have an asset that earns while you make something new.",
        ],
      },
      {
        heading: "Find the reusable core",
        paragraphs: [
          "Watch the old video and write one sentence for what it teaches. If that sentence makes sense without a date, you have a candidate. If the whole value was the moment, leave it alone and move on.",
          "A Black Friday buying guide might teach how to compare two product categories. That comparison still helps in June. A reaction to a live event probably does not survive the week, and forcing it will not help anyone.",
        ],
      },
      {
        heading: "The refit checklist",
        bullets: [
          "Reorder so the lasting lesson comes first and the dated scene becomes an example.",
          "Cut references to a specific year, price, or event.",
          "Record a new ten-second intro that frames the topic in neutral terms.",
          "Retitle and re-thumbnail for the evergreen keyword, then update the description and links.",
        ],
        paragraphs: [
          "Work in that order. Wording changes fix most videos, and you should only re-edit the body if the core lesson is buried so deep that no title can surface it.",
        ],
      },
      {
        quote: "The date was in the packaging, not the idea.",
      },
      {
        heading: "When a fresh upload is better",
        paragraphs: [
          "Sometimes the old footage is too tied to a moment to save. If the core depends on a product version or a trend that died, a clean new video beats a forced rescue every time.",
          "The test is whether a viewer in six months would understand the point. If they would need context you cannot remove, start fresh and leave the old video up to route any leftover search traffic to the new one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Old seasonal footage is inventory, not waste.",
          "Find the one lasting lesson before you decide.",
          "Repackage wording first, then the edit.",
          "Retire the ones whose value was the moment itself.",
        ],
      },
      {
        heading: "Start with one this week",
        paragraphs: [
          "Go through last year's seasonal uploads and pick one. Write its lesson in a single sentence, then see if a new title and a small cut brings it back to life. One saved video is a small win that compounds with the next.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-evergreen-keywords-search",
    title: "Evergreen Keywords Beat Trend Chasing Every Time",
    excerpt:
      "Evergreen keywords keep sending viewers for years while a trend fades in weeks. Here is why durable search terms should always anchor your channel plan.",
    date: "2025-08-25",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A trend can hand you a spike and then hang you out to dry. Evergreen keywords keep sending viewers long after the trend is forgotten. If you only have time for one, chase the search term and treat the trend as a bonus.",
          "This is not a claim that trends are worthless. It is a claim about what you own. A trend video rents attention for a few days. A keyword video buys a small piece of the search results that keeps paying without more work.",
        ],
      },
      {
        heading: "How evergreen keywords behave",
        paragraphs: [
          "Search volume for a durable question rises and falls gently. It never reaches zero because new people keep needing the answer. A video that ranks for one of these questions receives a trickle every day, and the trickle compounds as the library grows.",
          "Trends behave the opposite way. Volume spikes hard, then falls off within days, and you have to keep feeding the machine to stay visible. That cycle is fine when you have a library behind it and exhausting when you do not.",
        ],
      },
      {
        heading: "Finding durable terms",
        bullets: [
          "Look for questions with steady volume over twelve months, not one sharp peak.",
          "Prefer terms where the answer does not change with each version of a tool.",
          "Ignore anything with a year in the title unless you plan to update it.",
          "Check that the top results are not all from huge brands you cannot outrank.",
        ],
        paragraphs: [
          "That last point matters more than people admit. A perfect evergreen term is useless if the first page is locked up by companies with ten times your authority, so look one level more specific.",
        ],
      },
      {
        quote: "A trend pays this week. A keyword pays every week.",
      },
      {
        heading: "Blending search with the feed",
        paragraphs: [
          "Search gets you found and the feed gets you discovered. The pairing works best when a feed video sends viewers to a search video on the same topic, so the discovery has somewhere to land.",
          "A short, punchy take on a trend can route people to your evergreen breakdown of the same idea. The trend does the attracting and the evergreen does the keeping, which is a much healthier trade than relying on either alone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Evergreen keywords are assets you keep.",
          "Trends are rentals you pay for again and again.",
          "Judge a topic by steady volume, not a single spike.",
          "Let trend videos point at your search videos.",
        ],
      },
      {
        heading: "A five-minute check",
        paragraphs: [
          "Search for your main topic and look at what ranks. Then ask how many of those results will still be worth watching in two years. Build toward that list, and you stop rebuilding your audience from scratch every month.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-seasonal-trend-timing",
    title: "Timing Seasonal Content Before the Wave Breaks",
    excerpt:
      "Seasonal content lives or dies on timing. Learn when to publish seasonal content so it lands exactly on the slope before the search wave peaks.",
    date: "2025-12-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Publish seasonal content too early and it dies before the audience arrives. Publish too late and you miss the wave entirely. The window is narrower than most creators think, and it opens earlier than the holiday itself.",
          "People search for seasonal topics before the season starts. They plan trips weeks ahead and shop for gifts in advance. Your video needs to be waiting on the shelf when that search begins, not uploaded the morning of the event.",
        ],
      },
      {
        heading: "Read the search curve, not the calendar",
        paragraphs: [
          "Open a keyword tool and plot the term you care about over two years. You will usually see the line climb a few weeks before the event. That climb is your real deadline, not the date circled in red on the wall.",
          "For some topics the rise starts a month out. For others it is two weeks. The only way to know which one you are dealing with is to look at the actual curve for your exact phrase.",
        ],
      },
      {
        heading: "Setting your publish date",
        bullets: [
          "Find the week search volume crosses from flat to rising.",
          "Publish one to two weeks before that climb to give the video a head start.",
          "Avoid publishing the day of the event, when the peak is already passing.",
          "Keep the video live afterward so it catches the next cycle and any late search.",
        ],
        paragraphs: [
          "The head start matters because a new video needs a few days of watch time before the platform trusts it with more impressions. Arriving on the slope gives it that runway.",
        ],
      },
      {
        quote: "The event is the peak. Your upload belongs on the slope before it.",
      },
      {
        heading: "The cost of arriving late",
        paragraphs: [
          "A late video competes for an audience that is already leaving. It can still do fine if the topic has search demand after the date, but you leave the best traffic on the table and you know it.",
          "Late also means rushed. The same video made a week earlier would have been better and seen more, which is a frustrating lesson to learn twice in the same year.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Search starts before the event, not on it.",
          "Plot the curve to find the real window.",
          "Publish on the climb, not the peak.",
          "Leave the video up to catch the next cycle.",
        ],
      },
      {
        heading: "Put it on the calendar now",
        paragraphs: [
          "Pick your next seasonal topic and check when its searches start rising. Set the publish date against that line instead of against the holiday, and give the video room to gather momentum before the wave breaks.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-evergreen-refresh-old-videos",
    title: "Refresh Evergreen Videos Instead of Reuploading",
    excerpt:
      "When an evergreen video slides, refreshing beats reuploading. Learn how to refresh evergreen videos while keeping the watch history and ranking you built.",
    date: "2026-03-17",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "consistency"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "When an old evergreen video starts to slide, the reflex is to upload a fresh version. Most of the time that is the wrong move. The old video carries watch history, comments, and a search position that a new upload has to earn from scratch.",
          "Refreshing keeps that history. Reuploading throws it away, and the old video usually keeps ranking above the new one anyway, so you end up competing with yourself for the same spot.",
        ],
      },
      {
        heading: "What a refresh actually touches",
        paragraphs: [
          "A refresh is not a full re-edit. It is a set of targeted changes: a sharper title, a new thumbnail, a tighter first thirty seconds, and an updated description with fresh links.",
          "Sometimes the content itself needs a new segment or a corrected fact. That is a small insert, not a whole new video, and it keeps the parts that already work untouched.",
        ],
      },
      {
        heading: "Refresh order of operations",
        bullets: [
          "Start with the thumbnail and title, since they move click rate the fastest.",
          "Tighten the intro if it spends too long before the payoff.",
          "Fix any outdated fact, price, or software screen that no longer matches reality.",
          "Update the description and add links to newer related videos.",
          "Only re-edit the body if the structure itself underperforms.",
        ],
        paragraphs: [
          "Change one layer at a time so you know what moved the numbers. Swapping everything at once feels decisive and teaches you nothing about what actually worked.",
        ],
      },
      {
        quote: "A refresh keeps the equity. A reupload starts the mortgage over.",
      },
      {
        heading: "When to start over",
        paragraphs: [
          "If the topic has drifted so far it no longer fits the channel, or if the quality gap is enormous, a new video can win. That is the exception, not the default, and it should come with a reason.",
          "Even then, keep the old one live and link the two so the old search traffic can flow to the new video instead of disappearing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Refreshing is cheaper and protects existing ranking.",
          "Change packaging before you touch the body.",
          "Reupload only when the topic or quality has truly moved.",
          "Never delete an old video that still sends traffic.",
        ],
      },
      {
        heading: "Do one this quarter",
        paragraphs: [
          "Find one evergreen video that has slipped this quarter. Change the thumbnail and intro first and watch the numbers for two weeks before doing anything bigger. Small, measured changes add up faster than a full rebuild.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-content-mix-new-channels",
    title: "The Content Mix New Channels Should Start With",
    excerpt:
      "Your first content mix decides whether a new channel builds a floor or burns out. Here is a starting content mix for channels under a year old.",
    date: "2026-06-23",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "New channels rarely fail because they picked the wrong topic. They fail because they picked the wrong mix. Too much trend chasing leaves no library, and too much slow evergreen with no hook leaves no audience to build on.",
          "A starting mix gives you both: enough evergreen to build a floor under the channel, and enough timely work to get discovered while the library is still small and the subscriber list is nearly empty.",
        ],
      },
      {
        heading: "The first ninety days",
        paragraphs: [
          "Spend the first ninety days building evergreen. The search questions in your niche are the most reliable traffic a brand new channel can get, and each one adds a shelf that keeps working after you stop promoting it.",
          "This feels slow. It is not. Every evergreen video is still pulling viewers months later while the trend channel is busy making its next frantic upload to replace the last one.",
        ],
      },
      {
        heading: "A simple starter split",
        bullets: [
          "Six of every ten videos answer a durable question in your niche.",
          "Two of ten respond to something happening right now, to test the feed.",
          "Two of ten tell a story or share a strong opinion, to build a voice.",
          "Review the split after ninety days using views broken down by type.",
        ],
        paragraphs: [
          "Write these down and count them. A mix you track is a mix you can adjust. A mix you keep in your head is a feeling, and feelings are bad at arithmetic.",
        ],
      },
      {
        quote: "New channels need a floor before they need a ceiling.",
      },
      {
        heading: "Adjusting as you learn",
        paragraphs: [
          "Once evergreen videos start bringing steady views, you can add more timely work. The library gives you something to point to when a spike brings new people in, so the spike is not wasted.",
          "If a timely video beats everything else twice in a row, that is data, not luck. Shift the mix toward what the audience proved it wants instead of defending the ratio you started with.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead with evergreen to build a floor.",
          "Use timely videos to test discovery.",
          "Keep a voice-building slot so the channel sounds like you.",
          "Recheck the split every quarter.",
        ],
      },
      {
        heading: "Your next ten videos",
        paragraphs: [
          "Write your next ten planned videos on a page and label each one evergreen, timely, or voice. If nine are timely, you already know what to fix, and the fix is easier than you think.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-retiring-seasonal-videos",
    title: "When to Retire a Seasonal Video From Your Channel",
    excerpt:
      "Not every seasonal video should stay on your channel. Learn when to retire a seasonal video, and when keeping it is the smarter call for search traffic.",
    date: "2026-09-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "consistency"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Not every seasonal video deserves to stay. Some keep earning years later, and some are dead weight that drags down a playlist. Deciding which is which takes a look at the numbers, not sentiment.",
          "Retiring does not always mean deleting. Sometimes it means unlisting, merging, or parking the video somewhere it still helps a viewer without cluttering the channel.",
        ],
      },
      {
        heading: "Signs a seasonal video is done",
        paragraphs: [
          "Check whether the video still gets views in its off season. If it flatlines for months and climbs only for a few weeks, it may still be worth keeping, since a live video costs nothing to leave up.",
          "The real signals to retire are a broken premise, an outdated offer, or content that now misleads viewers. A wrong answer in the library hurts more than an old one that is merely quiet.",
        ],
      },
      {
        heading: "Retire, merge, or keep",
        bullets: [
          "Keep it if it still sends search traffic, even if that traffic is seasonal.",
          "Merge it if a newer video covers the same ground better.",
          "Unlist it if the information is wrong and you cannot update it.",
          "Delete it only if it damages trust and has no traffic worth saving.",
        ],
        paragraphs: [
          "Most seasonal videos fall into the keep category. A quiet video is not a problem. A misleading one is, and that is the line worth acting on.",
        ],
      },
      {
        quote: "An old video is only a problem when it teaches something false.",
      },
      {
        heading: "Handling the handoff",
        paragraphs: [
          "When you merge two videos, keep the old one live and send viewers to the new one through a pinned comment and a description link. Deleting breaks old links and loses whatever ranking the video had built.",
          "If you must remove something, redirect the audience first. Post the replacement, link it from the old video, wait a few weeks, then retire the original once the traffic has moved over.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge seasonal videos by the full year, not the peak.",
          "Fix or merge before you delete.",
          "Never leave a false claim up to save face.",
          "Redirect before you retire anything with traffic.",
        ],
      },
      {
        heading: "Sort the library this month",
        paragraphs: [
          "Sort your seasonal videos into keep, merge, and fix. Most of them stay, and the few that mislead are the only ones that need action. That is a much shorter list than it feels like before you look.",
        ],
      },
    ],
  },
];
