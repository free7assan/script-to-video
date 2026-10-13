import {
  Eye,
  Target,
  TrendingUp,
  Repeat,
  Map,
  MessageSquare,
  Rocket,
  BarChart3,
  Activity,
  DollarSign,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch70: BlogPost[] = [
  {
    slug: "newsletter-open-rate-benchmarks",
    title: "Newsletter Open Rate Benchmarks That Actually Matter",
    excerpt:
      "Open rate tells you who trusted your subject line enough to tap. Here are the benchmarks worth tracking and the ones you can safely ignore every week.",
    date: "2024-02-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Open rate is the share of delivered emails that a reader actually opens. For most newsletters a healthy range sits between 35 and 50 percent, though that band moves with list size and niche.",
          "It matters because it is the first signal that your subject line and sender name earned a tap. It is also the easiest metric on your dashboard to misread.",
        ],
      },
      {
        heading: "What a good open rate looks like",
        paragraphs: [
          "A 60,000 person list built from a lead magnet will open lower than a 2,000 person list grown from replies and referrals. Benchmarks shift with how people arrived and how long they have stayed.",
          "Treat any published benchmark as a starting line, not a report card. Your own eight week trend says more about your list than a stranger's average ever will.",
        ],
      },
      {
        heading: "Why open rate moves",
        bullets: [
          "Subject line clarity, since a crowded inbox rewards plain language over clever wordplay.",
          "Sender name recognition, because a familiar name gets opened before an unfamiliar one.",
          "Send time consistency, which trains readers to expect you on a certain day and hour.",
          "List age, since addresses go quiet the longer they sit untouched.",
        ],
      },
      {
        heading: "Where open rate lies to you",
        paragraphs: [
          "Apple's Mail Privacy Protection inflates opens by prefetching images. A chunk of your reported opens may never involve a human at all.",
          "If your open rate jumps overnight without a matching jump in clicks, prefetching is usually the cause. Use opens as a direction, then confirm with clicks before you change your strategy.",
        ],
      },
      {
        quote:
          "An open rate without a click rate is a number that flatters you and teaches you nothing.",
      },
      {
        heading: "How to act on it",
        paragraphs: [
          "Segment by engagement and send your strongest work to readers who open most often. Let quiet addresses rest for a few weeks, then send one re-engagement note before you remove them.",
          "Watch the gap between opens and clicks. When opens climb but clicks stay flat, your subject lines are winning attention that your content cannot hold.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track open rate as a personal trend, not against someone else's average.",
          "Prefetching inflates the number, so verify every open spike with clicks.",
          "Consistent send times do more for opens than any subject line trick.",
          "Pair opens with clicks before you decide what is actually working.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-click-through-rate",
    title: "Click Through Rate: The Metric Your Newsletter Lives On",
    excerpt:
      "Click through rate measures how many readers trusted your words enough to leave the inbox. It is the honest metric that open rate can never quite be.",
    date: "2024-05-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Click through rate is the percentage of delivered emails where a reader clicked at least one link. It cannot be faked by an image prefetch the way opens can, which is why it belongs at the top of your report.",
          "Everything else you measure exists to explain this number or to move it.",
        ],
      },
      {
        heading: "Reading your click through rate",
        paragraphs: [
          "Most newsletters land between 2 and 5 percent. Business to business sends often sit lower, while tight niche lists with a clear call to action can climb past 8 percent.",
          "A falling click rate while opens hold steady usually means your content lost focus, not your subject lines.",
        ],
      },
      {
        heading: "What drags clicks down",
        bullets: [
          "Too many links competing for one click, which splits attention across the issue.",
          "A call to action buried below three paragraphs of setup.",
          "Buttons that look identical to body text, so readers skim right past them.",
          "Offers that speak to your goals instead of the reader's problem.",
        ],
      },
      {
        quote:
          "Opens measure curiosity. Clicks measure intent. Never confuse the two when you plan the next issue.",
      },
      {
        heading: "How to lift it",
        paragraphs: [
          "Give each issue one primary action and keep secondary links rare. If a reader cannot tell what you want them to do in two seconds, they will do nothing.",
          "Put the main link near the top while attention is highest, then repeat it once at the end for the people who read to the bottom.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Click through rate is the hardest metric for prefetching to fake.",
          "One clear call to action beats five competing links every time.",
          "Falling clicks with steady opens point to weak content, not weak subject lines.",
          "Review clicks by link position to learn how far readers actually get.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-list-growth-rate",
    title: "Newsletter List Growth Rate Without the Vanity Math",
    excerpt:
      "List growth rate hides more than it shows. Learn how to separate real audience growth from vanity signups that never open a single issue you send.",
    date: "2024-09-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "audience", "email"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "List growth rate is your net gain in subscribers over a period, expressed as a percentage of the list you started with. It counts new signups minus unsubscribes and bounces, so it tells a truth that raw subscriber totals hide.",
          "Watch it weekly, because a growing list with a shrinking open rate is often a list filling up with the wrong people.",
        ],
      },
      {
        heading: "The math worth doing",
        bullets: [
          "New subscribers this month divided by subscribers at the start of the month.",
          "Subtract unsubscribes and hard bounces before you call anything growth.",
          "Track the source of each signup so you know which channels build a real audience.",
        ],
      },
      {
        paragraphs: [
          "Buying a list or running a broad giveaway spikes the number and damages everything downstream. Those addresses rarely open, and mailbox providers notice the drop in engagement across your whole list.",
          "A smaller list that reads every issue is worth more than a large one that ignores you.",
        ],
      },
      {
        quote:
          "Growth that comes from people who never open is not growth. It is a slow leak wearing a smile.",
      },
      {
        heading: "Sources that build real lists",
        paragraphs: [
          "Referrals from readers outperform almost any paid channel, because a friend's recommendation carries trust you cannot buy. One sentence at the end of an issue asking readers to share it can beat a month of ads.",
          "Guest essays, podcasts, and free tools that solve one problem bring people who already care about your topic. They tend to stick around.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Net growth subtracts unsubscribes and bounces, not just adds signups.",
          "Giveaways and purchased lists inflate totals and hurt deliverability.",
          "Referrals and guest appearances build lists that actually read.",
          "A smaller engaged list beats a large indifferent one.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-churn-rate",
    title: "Newsletter Churn Rate and When to Let Readers Go",
    excerpt:
      "Churn is not a failure you can wish away. Here is how to read your unsubscribe rate, spot the warning signs early, and decide when to let quiet readers go.",
    date: "2025-01-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "audience", "email"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Churn rate is the percentage of subscribers who leave over a given period, usually through unsubscribes, hard bounces, or spam complaints. A monthly churn under half a percent is healthy for most newsletters, and above 2 percent you have something worth investigating.",
          "Unsubscribes are not the enemy. Readers who stay out of obligation drag your engagement down and cost you deliverability.",
        ],
      },
      {
        heading: "Why readers leave",
        bullets: [
          "They forgot they signed up, which points to a weak welcome sequence.",
          "The content drifted from the promise that got them to subscribe.",
          "You send too often for their appetite, or too rarely to stay memorable.",
          "A single off brand issue can trigger a wave of exits.",
        ],
      },
      {
        paragraphs: [
          "Look at when people leave, not only how many. A spike after a specific issue tells you more than the monthly total ever will.",
          "Track churn by acquisition source, and you may find one channel quietly feeding you people who were never a fit.",
        ],
      },
      {
        quote:
          "Letting disengaged readers go is not failure. Carrying them forever is what actually costs you.",
      },
      {
        heading: "Managing churn without chasing it",
        paragraphs: [
          "Run a re-engagement series before you purge anyone. Give quiet readers one clear chance to stay, and treat silence as an answer.",
          "Keep a small preferences center so readers can choose less email instead of no email. That trade keeps the relationship alive.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Monthly churn under half a percent is a healthy baseline to aim for.",
          "Unsubscribes beat spam complaints, so make leaving easy.",
          "Churn by source reveals which channels send the wrong people.",
          "A re-engagement series recovers readers you would otherwise lose.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-deliverability-metrics",
    title: "Deliverability Metrics That Decide If Anyone Sees You",
    excerpt:
      "Deliverability metrics decide whether your newsletter lands in the inbox or the spam folder. These are the numbers that keep your sender reputation alive.",
    date: "2025-04-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Deliverability metrics tell you whether your newsletter reaches the inbox or dies in the spam folder. Bounce rate and spam complaint rate sit at the top of the list, and inbox placement tells you how providers actually treated you.",
          "A perfect issue that lands in spam is an issue nobody read.",
        ],
      },
      {
        heading: "The signals mailbox providers watch",
        bullets: [
          "Bounce rate, where a hard bounce above 2 percent starts to raise flags.",
          "Spam complaint rate, which should stay under 0.1 percent for most senders.",
          "Inbox placement, the share of sends that reach the primary tab.",
          "Engagement, since providers reward lists that get opened and read.",
        ],
      },
      {
        paragraphs: [
          "Keep your complaint rate low and your list clean. Remove hard bounces immediately, and confirm every signup with a double opt in so nobody joins by accident.",
          "Authentication records like SPF, DKIM, and DMARC are table stakes now. Without them your mail may be filtered before a human ever judges it.",
        ],
      },
      {
        quote:
          "A great issue that lands in spam is a great issue nobody read. Deliverability is not a technical chore, it is the price of being heard.",
      },
      {
        heading: "Fix problems before they spread",
        paragraphs: [
          "Warm up a new sending domain slowly and keep your volume steady. Sudden spikes look like spam to automated filters.",
          "Segment by engagement and suppress the addresses that never open. Sending only to people who read protects the reputation the rest of your list depends on.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Bounce and complaint rates are the fastest warning signs of trouble.",
          "Authenticate your domain with SPF, DKIM, and DMARC.",
          "Double opt in prevents accidental signups that turn into complaints.",
          "Sending only to engaged readers protects everyone else's deliverability.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-reply-rate",
    title: "Reply Rate Is the Newsletter Metric Nobody Tracks",
    excerpt:
      "Reply rate is the newsletter metric most teams never track, and it may be the clearest signal of whether readers actually care about what you publish each week.",
    date: "2025-08-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "audience"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Reply rate is the share of readers who respond to an issue by hitting reply. It is missing from most analytics dashboards because it is hard to automate, and that is exactly why it is so valuable.",
          "A reply is the strongest signal a reader can send. Someone stopped, formed a thought, and typed it out for you.",
        ],
      },
      {
        heading: "Why replies beat clicks",
        paragraphs: [
          "Clicks show an intent to leave the inbox. Replies show that the issue moved a reader enough to talk back. One good reply often predicts a subscriber who stays for years.",
          "Replies also train mailbox providers, since a real two way thread tells them your mail deserves attention.",
        ],
      },
      {
        heading: "How to invite replies",
        bullets: [
          "Ask one specific question at the end of an issue instead of a vague prompt.",
          "Request a single word answer, which lowers the effort required to respond.",
          "Reply to every response yourself, at least while your list is small enough to manage.",
          "Mention that replies reach you directly, since many readers assume nobody is listening.",
        ],
      },
      {
        quote: "You cannot buy a reply. You can only write something worth answering.",
      },
      {
        heading: "Measuring it without fancy tools",
        paragraphs: [
          "Count replies manually for a few weeks and note the percentage per issue. Even a rough figure guides you better than zero measurement.",
          "If replies rise on the issues where you asked a direct question, you have found a repeatable lever.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reply rate is invisible in most dashboards and worth tracking anyway.",
          "A reply signals deeper engagement than any click can.",
          "One specific question beats a generic call to respond.",
          "Two way threads improve how providers treat your mail.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-conversion-rate",
    title: "Newsletter Conversion Rate From Reader to Buyer",
    excerpt:
      "Newsletter conversion rate connects your writing to revenue. Here is how to measure reader to buyer movement without fooling yourself with last click praise.",
    date: "2025-11-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Newsletter conversion rate is the percentage of subscribers who take a valuable action, whether buying, booking, or starting a trial. For most small publishers it runs between half a percent and 3 percent per issue, and it compounds over time.",
          "Judge it across a quarter, not a single send, because buying decisions rarely happen on the first email.",
        ],
      },
      {
        heading: "Attribution is messier than it looks",
        paragraphs: [
          "Last click credit lies. A reader may see your product in issue twelve after reading quietly for months, then buy through a searched link that grabs the credit.",
          "Ask new customers how they found you, and keep a dedicated link or coupon so you can see your newsletter's real share.",
        ],
      },
      {
        heading: "What moves conversion",
        bullets: [
          "Trust built over many issues, since familiarity lowers the barrier to buy.",
          "An offer that matches what your readers already care about.",
          "Social proof from other subscribers who took the same step.",
          "One ask per issue rather than a scattered set of promotions.",
        ],
      },
      {
        quote:
          "A newsletter that sells every week sells nothing. A newsletter that earns trust sells without asking twice.",
      },
      {
        heading: "Placing the ask",
        paragraphs: [
          "Put your offer where attention is highest and pair it with a reason to act now. Honest urgency works, and invented urgency erodes the trust you spent months building.",
          "Track revenue per issue alongside the conversion rate, so a small percentage on a loyal list does not get mistaken for failure.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Measure conversion across a quarter, not one send.",
          "Last click attribution undercounts newsletters, so ask customers directly.",
          "Trust built over time does more for sales than any single pitch.",
          "One honest ask per issue beats a wall of promotions.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-click-to-open-rate",
    title: "Click to Open Rate Separates Interest From Curiosity",
    excerpt:
      "Click to open rate separates genuine interest from idle curiosity. Learn what a healthy ratio looks like and what a falling number is trying to tell you.",
    date: "2026-03-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Click to open rate divides clicks by opens, showing how many people who opened went on to click. A healthy figure usually falls between 10 and 20 percent, and it isolates content quality from subject line appeal.",
          "When opens rise but click to open rate drops, you are attracting the wrong kind of attention.",
        ],
      },
      {
        heading: "Why this ratio is useful",
        paragraphs: [
          "Open rate mixes two things, the pull of your subject line and the value of what sits inside. Click to open rate strips out the subject line and grades the content on its own.",
          "It also survives the prefetch problem, since it only counts opens that led somewhere.",
        ],
      },
      {
        paragraphs: [
          "Compare click to open rate across issues to find which topics your readers finish and act on. A pattern will emerge faster than you expect.",
          "Use it to test subject lines in isolation. Send the same content under two subject lines, and the ratio tells you which headline pulled the more engaged reader.",
        ],
      },
      {
        quote:
          "Subject lines get the door open. Click to open rate tells you whether anyone was glad they walked in.",
      },
      {
        heading: "Where it can mislead",
        paragraphs: [
          "Apple's prefetching inflates the denominator, which pushes the ratio artificially low. Keep that in mind before you panic over a sudden dip.",
          "Small lists make this ratio jump around, so read it in ranges rather than exact figures.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Click to open rate grades content separately from subject lines.",
          "A 10 to 20 percent range is a reasonable target to watch.",
          "Prefetching distorts the number, so read it with care.",
          "Use it to test subject lines while holding content steady.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-list-health-metrics",
    title: "List Health Metrics Before Your Sender Reputation Dies",
    excerpt:
      "List health metrics warn you before your sender reputation collapses. Track these signals so a healthy list does not quietly rot into a deliverability problem.",
    date: "2026-06-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "audience", "email"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "List health comes down to how engaged your subscribers are and how clean your data stays. The signals that matter are recent open activity, bounce rate, and the share of your list that has gone quiet.",
          "A list of 50,000 where most addresses ignore you will underperform a list of 5,000 that reads every word.",
        ],
      },
      {
        heading: "Signals of a healthy list",
        bullets: [
          "A stable share of readers opening within the last thirty days.",
          "Bounce and complaint rates that stay flat over time.",
          "Clicks and replies that show up consistently, not in random spikes.",
          "Growth that comes from sources you can name.",
        ],
      },
      {
        paragraphs: [
          "Run a re-engagement campaign at least once a year. Ask quiet readers to confirm they still want your mail, and remove the ones who stay silent.",
          "This feels painful because the list shrinks. What actually happens is your engagement rates climb and providers start trusting your sends again.",
        ],
      },
      {
        quote:
          "A big quiet list is a liability. A small loud one is an asset. Pick the second every time.",
      },
      {
        heading: "Keeping data clean",
        paragraphs: [
          "Remove hard bounces on every send and never let them sit in your list. Suppress addresses that complain, and honor unsubscribes within a day.",
          "Tag subscribers by how they arrived and how often they engage. Those tags let you send more to the people who want it and less to everyone else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Engagement matters more than raw subscriber count.",
          "Re-engage quiet readers yearly and cut the ones who never respond.",
          "Clean hard bounces and honor unsubscribes quickly.",
          "Tag by source and engagement so you can target properly.",
        ],
      },
    ],
  },
  {
    slug: "newsletter-revenue-per-subscriber",
    title: "Revenue Per Subscriber: The Only Growth Number",
    excerpt:
      "Revenue per subscriber turns a fuzzy audience into a number you can grow on purpose. Here is how to measure it and what to do when the figure stalls.",
    date: "2026-09-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["newsletter", "email", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Revenue per subscriber divides the money your newsletter earns by the size of your list. It turns a vague audience into a figure you can grow on purpose, whether your income comes from ads, products, or paid tiers.",
          "A list of 5,000 earning two dollars per subscriber beats a list of 50,000 earning ten cents.",
        ],
      },
      {
        heading: "How to calculate it",
        paragraphs: [
          "Add up every revenue source for a period, then divide by the average subscriber count. Run it monthly and quarterly so short term noise does not fool you.",
          "Track it per source too, because sponsored placements and direct sales behave differently and deserve separate eyes.",
        ],
      },
      {
        heading: "Ways to raise it",
        bullets: [
          "Improve the offer so each reader spends more, rather than chasing new subscribers.",
          "Add a paid tier for the readers who already open everything.",
          "Sell relevant products to your most engaged segments.",
          "Raise sponsorship rates once you can show real engagement numbers.",
        ],
      },
      {
        quote:
          "Chasing subscribers is a cost. Growing revenue per subscriber is a return. One of them pays for the other.",
      },
      {
        heading: "When the number falls",
        paragraphs: [
          "When revenue per subscriber drops while your list grows, your acquisition is outrunning your ability to serve the people you attract. Slow down and fix the fit before you spend more on growth.",
          "Set a target and review it against your own history. It is the clearest sign that your newsletter is building a business and not just an audience.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Revenue per subscriber reveals the value of each reader.",
          "Compare it monthly and quarterly to cut through noise.",
          "A paid tier and better offers raise it faster than list growth.",
          "Falling revenue per subscriber means acquisition is outpacing fit.",
        ],
      },
    ],
  },
];
