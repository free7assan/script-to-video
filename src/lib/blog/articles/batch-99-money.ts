import { Layers, Compass, Puzzle, Tag, Star, TrendingUp, Repeat, Briefcase, Flame } from "lucide-react";
import type { BlogPost } from "../types";

export const batch99: BlogPost[] = [
  {
    slug: "money-tiered-pricing-offers",
    title: "Tiered Pricing That Makes the Middle Offer Win",
    excerpt: "Most creators post one price and lose money at it. A tiered pricing setup nudges buyers to the middle option, where value and margin finally meet.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "business"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Start with a floor and a ceiling",
        paragraphs: [
          "The quickest way to see how tiered pricing behaves is to write three offers: a cheap entry, a real target, and a premium one. Buyers rarely pick the cheapest when a middle choice is available, so the middle number does most of your selling. Put the option you actually want to sell in the center and price the other two to frame it.",
          "At first I ran a single price for a script package. Adding a smaller and a larger tier changed nothing about my work, but it lifted average order value by roughly a third. The entry tier answered the yes or no question. The premium tier made the middle one look reasonable."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with a floor and a ceiling.",
          "Design the middle tier on purpose.",
          "Give each tier a one-sentence promise.",
          "Cut any tier that does not sell in sixty days.",
        ]
      },
      {
        heading: "Design the middle tier on purpose",
        paragraphs: [
          "The middle offer should solve the main problem without forcing an upsell conversation. If your audience wants a finished script, give them the finished script there, not a template with an email thread attached. Keep the deliverable list short enough to explain in one sentence.",
          "Name each tier after a job, not a size. Small, medium, and large tells the buyer nothing. Starter, Standard, and Done For You tells them who each one is for. Names do more work than discounts."
        ]
      },
      {
        heading: "What each tier should do",
        paragraphs: ["A tier only earns its place if it has a clear job. These are the jobs I check before I publish any pricing page."],
        bullets: [
          "Entry tier removes the biggest objection for a first-time buyer",
          "Middle tier is the offer you would pick yourself, priced for the common case",
          "Premium tier adds a real service like a call, a rush slot, or a rewrite",
          "Every tier needs a one-sentence promise with no jargon",
          "Cut any tier that does not sell in sixty days"
        ]
      },
      {
        heading: "Avoid the trapped buyer feeling",
        paragraphs: [
          "Tiered pricing turns hostile when the cheap option is deliberately broken. Buyers notice when the only way to get a usable product is to pay double. That trick converts once and costs you referrals. Make the entry tier small but genuinely finished.",
          "I keep the entry tier useful enough to stand on its own. If someone buys it and gets a real result, they come back later for the bigger one. The goal is a sequence, not a squeeze."
        ]
      },
      {
        quote: "The middle tier sells because it looks like the safe choice, not because it is the cheapest."
      },
      {
        heading: "Test one number at a time",
        paragraphs: [
          "Change one price, wait, then change another. If you move all three at once you will never know which one did the work. I raise the middle tier by a small amount every few months and watch conversion.",
          "Watch average order value, not just sales count. Ten sales at the middle price beat twenty at the floor if your time is the real cost."
        ]
      }
    ]
  },
  {
    slug: "money-anchor-pricing",
    title: "Anchor Pricing for Digital Products That Breathe",
    excerpt: "Anchor pricing is not about tricking people. It gives a buyer a reference point so the real number reads as fair instead of random and made up.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "revenue"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Give the number somewhere to land",
        paragraphs: [
          "An anchor is any nearby number that tells the buyer what to expect before they see your price. A crossed-out original, a premium bundle, or the cost of a worse alternative all work. Without a reference, any price feels arbitrary, and arbitrary prices invite haggling.",
          "I list the full project rate, then show what the smaller slice costs. The big number makes the small one feel reachable, and it also reminds people that the smaller slice is a deal rather than a shortcut."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Give the number somewhere to land.",
          "Use honest anchors, not fake ones.",
          "Stack the comparison so value is obvious.",
          "Measure the effect of each anchor.",
        ]
      },
      {
        heading: "Use honest anchors",
        paragraphs: [
          "An anchor stops working the moment the buyer discovers it was invented. A fake original price that never existed is easy to spot and hard to forgive. Anchor against real options: a custom quote, a bigger package, or the cost of doing nothing.",
          "The strongest anchor I use is the client alternative. Hiring a full agency for the same script runs into four figures. My package is a fraction of that, and both numbers are true."
        ]
      },
      {
        heading: "Stack the comparison",
        paragraphs: [
          "Put the anchor where the eye lands first. On a pricing page, the larger number sits left or above, and the target price sits beside it. In a video description, one line about what the bigger option costs does the job.",
          "Keep to one anchor per decision. Three competing reference points cancel each other out and push the buyer back to guessing."
        ]
      },
      {
        heading: "Anchor types that hold up",
        paragraphs: ["Not every reference point works. These are the ones I trust because they survive a skeptical reader."],
        bullets: [
          "Your own premium tier, priced and described in full",
          "A real market rate for the same work from a bigger vendor",
          "The cost of the problem continuing, stated plainly",
          "A bundle that includes everything, shown as one number"
        ]
      },
      {
        quote: "A price with no neighbor is just a guess the buyer has to make alone."
      },
      {
        heading: "Measure the effect",
        paragraphs: [
          "Compare conversion before and after you add an anchor, and keep everything else the same. If conversion holds while average order value rises, the anchor is doing its job. If both drop, the anchor is confusing rather than clarifying.",
          "Revisit anchors once a quarter. A number that felt huge last year may look ordinary now, and that changes the story you are telling."
        ]
      }
    ]
  },
  {
    slug: "money-bundle-offers",
    title: "Bundle Offers That Do Not Bury the Good Stuff",
    excerpt: "Bundle offers raise order value when every item already earns its place. Pile in filler and the discount reads as a warning instead of a gift.",
    date: "2024-08-22",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "business", "revenue"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Bundle things that already sell",
        paragraphs: [
          "The safest bundle is two or three items people buy on their own. If each piece has sold at least a few times, the bundle is a convenience, not a gamble. Discount the total by a small amount and the buyer sees a reason to take all of it today.",
          "I bundled a script template with a b-roll shot list after both had sold separately for months. The bundle outsold either piece within a week, because most buyers wanted both and disliked paying twice."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Bundle things that already sell.",
          "Price below the sum, not below cost.",
          "Name the bundle like a product.",
          "Retire bundles that stall.",
        ]
      },
      {
        heading: "Price the bundle below the sum, not below cost",
        paragraphs: [
          "A bundle should look cheaper than buying the parts, because it is one purchase and one download. Fifteen to twenty percent off the total is enough. Deeper discounts signal that the pieces were not worth their list prices to start with.",
          "Work out the floor before you announce anything. Add your costs, add the time to support the bundle, and make sure the total still clears that floor. A popular bundle that loses money is a hobby with extra steps."
        ]
      },
      {
        heading: "Name it like a product",
        paragraphs: [
          "Bundle, pack, and kit are words nobody remembers. Name the bundle after the outcome. The First Video Kit or the Launch Pack tells the buyer what they get before they read the list.",
          "The description should lead with the outcome and follow with the contents. Buyers scan for the reason first and the inventory second."
        ]
      },
      {
        heading: "Bundle checklist",
        paragraphs: ["Run these checks before a bundle goes live. Each one has saved me from a listing I would have regretted."],
        bullets: [
          "Every item has sold on its own at least a few times",
          "Total discount sits between fifteen and twenty percent",
          "The bundle clears your floor after support time",
          "The name describes an outcome, not a container",
          "Contents are listed in one line each, with no filler"
        ]
      },
      {
        quote: "A bundle should feel like a shortcut, not a clearance bin."
      },
      {
        heading: "Retire bundles that stall",
        paragraphs: [
          "If a bundle does not sell in sixty days, break it apart and sell the pieces again. Sometimes the pairing made sense to you and not to anyone else. That is useful information, and it costs nothing to act on.",
          "Keep the bundle that works and leave it alone. Rebuilding a winner to chase a small gain usually resets the sales you already earned."
        ]
      }
    ]
  },
  {
    slug: "money-discount-traps",
    title: "Discount Traps That Quietly Train Buyers to Wait",
    excerpt: "A constant discount teaches your audience to wait for the next sale. Keep discounts rare, earned, and priced so full-price buyers never feel cheated.",
    date: "2024-11-09",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "revenue"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        heading: "Every discount sets an expectation",
        paragraphs: [
          "When you cut a price, you are telling the audience that the next sale will come. Do it often enough and nobody pays full price again. I learned this the hard way after running a monthly coupon for a season and watching full-price sales dry up between them.",
          "The real cost of a discount is not the money off. It is the buyer who now waits, and the trust you spend when they buy early and see it cheaper a week later."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Every discount sets an expectation.",
          "Discount the reason, not the habit.",
          "Guard the full-price buyer.",
          "Track full-price sales, not just sale volume.",
        ]
      },
      {
        heading: "Discount the reason, not the habit",
        paragraphs: [
          "A good discount has a cause: a launch, a returning customer, or a first purchase from a specific group. A discount with no reason becomes the normal price with extra steps. Attach each one to something the buyer can see.",
          "Keep sale prices to a small slice of the calendar. If something is on sale more than it is not, the full price was never real."
        ]
      },
      {
        heading: "Guard the full-price buyer",
        paragraphs: [
          "The people who pay full price are the ones who fund you. If they can find the same product cheaper the following week, they learn to distrust your timing. I stopped announcing surprise sales to my whole list for this reason.",
          "One workaround is a deadline that is clearly stated up front. A launch price that ends on a named date is fair, because the full price was always visible beside it."
        ]
      },
      {
        heading: "Rules I follow for sales",
        paragraphs: ["These guardrails keep a discount from eating the base price. They are boring and they work."],
        bullets: [
          "Every discount has a stated reason and a visible end date",
          "Full price is the default and stays up most of the year",
          "Returning buyers get value first, not the biggest cut",
          "No discount announced to the whole list for a single product",
          "Track full-price sales, not just sale volume"
        ]
      },
      {
        quote: "The cheapest price you ever offer becomes the price people remember."
      },
      {
        heading: "Recover from discount damage",
        paragraphs: [
          "If you have trained your list to wait, you can retrain it. Stop the rolling sale, hold the full price for a full quarter, and add value instead of cutting cost. Expect a lean month and treat it as the cost of the reset.",
          "After the fixed quarter, run one honest launch with a clear deadline. Do that twice and the habit flips back. It is slower than starting clean, and it is still faster than discounting forever."
        ]
      }
    ]
  },
  {
    slug: "money-free-vs-paid",
    title: "When a Free Offer Helps a Business and When It Hurts",
    excerpt: "A free offer is a filter, not a charity. Used well it shows the paid product real value, and used badly it attracts people who never intended to buy.",
    date: "2025-02-17",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "business"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        heading: "Free is a doorway, not a room",
        paragraphs: [
          "A free offer should move a stranger toward the paid product, not replace it. The best ones solve one small problem completely and leave the bigger problem open. If the free version finishes the whole job, nobody buys.",
          "I give away a one-page script outline and sell the full script package. The outline alone helps, and the moment someone wants the finished words, the paid tier is right there."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Free is a doorway, not a room.",
          "Pick free items that cost you little.",
          "Cap and schedule free time.",
          "Every free item needs a next step.",
        ]
      },
      {
        heading: "Pick free items that cost you little",
        paragraphs: [
          "The best free item is cheap for you to deliver and expensive for the buyer to recreate. A template you already use costs you an upload. A single chapter of a guide costs you nothing extra once it is written. Avoid free one-on-one time, because it does not scale and it eats your week.",
          "Set a limit on free time if you give any. A fifteen-minute call once a month is a policy, not a habit that grows into a second job."
        ]
      },
      {
        heading: "The wrong kinds of free",
        paragraphs: [
          "Free that attracts the wrong people is worse than no free offer. A generic giveaway pulls an audience that only wants giveaways, and your list fills with people who never open a sales email. Match the free item to the exact person you want to buy later.",
          "I once ran a broad giveaway and doubled my list with people who never bought anything. I spent three months cleaning up that mistake in the metrics."
        ]
      },
      {
        heading: "Free offer rules",
        paragraphs: ["These are the tests I apply before I give anything away. Each one protects the paid offer behind it."],
        bullets: [
          "Free solves one small problem and points to the bigger one",
          "The cost to deliver is near zero and repeats without effort",
          "It attracts the same person the paid product is for",
          "Free time is capped and scheduled, never open ended",
          "Every free item has a next step toward the paid tier"
        ]
      },
      {
        quote: "Give away the map, sell the guided trip."
      },
      {
        heading: "Measure who converts",
        paragraphs: [
          "Track how many buyers came through the free offer versus another path. If the free route converts at a reasonable rate, keep it. If it brings volume and no revenue, tighten the targeting or the free item itself.",
          "Let the number decide. Free is a tool with a price, and the price is attention you cannot spend twice."
        ]
      }
    ]
  },
  {
    slug: "money-raise-prices",
    title: "How to Raise Prices Without Losing Every Customer",
    excerpt: "When you raise prices you keep most customers if you explain the change and time it well. The ones who leave were usually your thinnest margin anyway.",
    date: "2025-05-03",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "revenue", "monetization"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Tell people before it happens",
        paragraphs: [
          "The worst way to raise a price is to change it quietly and let a customer find out at checkout. A short note two weeks ahead removes the surprise and gives loyal buyers a window to buy at the old rate. Most of them take it, and the goodwill is worth the small delay.",
          "I sent one paragraph to my list before my last increase. It said what was changing, when, and why. Two people replied, both with questions I could answer in a sentence."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tell people before it happens.",
          "Tie the why to the buyer.",
          "Grandfather the right people.",
          "Read the churn honestly.",
        ]
      },
      {
        heading: "Tie the why to the buyer",
        paragraphs: [
          "Never apologize for a price increase. Explain what the buyer gets now that they did not get before: faster delivery, better files, a longer guarantee. If nothing changed for them, the increase still needs a reason, and honest cost is one.",
          "A new price with the same product is a test of loyalty. A new price with more value is a fair trade, and buyers accept fair trades."
        ]
      },
      {
        heading: "Grandfather the right people",
        paragraphs: [
          "Give existing customers time, not forever. A standing discount for people who joined early is fine as a thank you, but an unlimited old price drags your average down for years. Set an end date and stick to it.",
          "I let existing clients keep the old rate for three months, then moved them up. Nobody left, and the ones who stayed valued the heads up more than the discount."
        ]
      },
      {
        heading: "A price increase plan",
        paragraphs: ["Run these steps in order. Skipping the communication step is what turns an increase into a fight."],
        bullets: [
          "Announce two weeks ahead with the date and the reason",
          "Add something the buyer can name, not a vague promise",
          "Give current customers a short window at the old price",
          "Update every page, link, and invoice on the same day",
          "Watch replies for a week and answer each one"
        ]
      },
      {
        quote: "If your price never changes, your work is getting cheaper every year."
      },
      {
        heading: "Read the churn honestly",
        paragraphs: [
          "Some customers will leave after any increase. Compare that loss to the extra revenue from the new price. A ten percent churn on a thirty percent higher price is usually a win, and it takes a month of data to see it.",
          "Keep the customers who pay the new rate and treat them well. They are telling you the price is fair, and they are the ones you build on."
        ]
      }
    ]
  },
  {
    slug: "money-subscription-pricing",
    title: "Subscription Pricing That Earns Its Monthly Renewal",
    excerpt: "Subscription pricing works when each month delivers something new. If the value stops, cancellation follows, and no clever wording will hold a bored member.",
    date: "2025-08-26",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "revenue"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Charge for what repeats",
        paragraphs: [
          "A subscription fits ongoing value: fresh files, updates, or steady access. It does not fit a one-time result. If your product is something a buyer uses once, a payment plan beats a subscription, because the subscription will feel like a bill they forgot.",
          "I moved a project client onto a small monthly retainer only after we found a task that truly repeated. Before that, monthly billing was me charging rent for work I was not doing."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Charge for what repeats.",
          "Set a renewal rhythm members can plan around.",
          "Make renewal feel earned.",
          "Cut any plan that survives only on forgotten charges.",
        ]
      },
      {
        heading: "Set the renewal rhythm",
        paragraphs: [
          "Monthly is easier to start and easier to cancel. Annual upfront is better for cash and better retention. Offer both if you can, and let the annual plan carry a clear saving so the choice is obvious.",
          "Match the rhythm to how often the value arrives. If updates ship every month, monthly makes sense. If updates are quarterly, monthly billing invites the question of what am I paying for this month."
        ]
      },
      {
        heading: "Make renewal feel earned",
        paragraphs: [
          "Send a short note each month describing what changed. It sounds like busywork until you see the cancellations drop. People cancel subscriptions they cannot remember paying for, and a simple log makes the payment feel connected to something.",
          "Give members a reason to stay beyond inertia. Early access, a members-only file, or a quick Q and A every month all work. Inertia alone lasts a few months and then collapses."
        ]
      },
      {
        heading: "Subscription health checks",
        paragraphs: ["Review these every quarter. The answers tell you whether to grow the plan or shut it down honestly."],
        bullets: [
          "The value arrives on a predictable schedule",
          "Monthly members can name what they got last month",
          "Annual plans save money and feel worth locking in",
          "Churn is measured, not assumed to be a fluke",
          "Any plan that only survives on forgotten charges gets cut"
        ]
      },
      {
        quote: "A subscription is a promise to keep showing up, billed in advance."
      },
      {
        heading: "Cancel cleanly",
        paragraphs: [
          "Let people cancel in two clicks. A hard exit raises short-term revenue and ends the relationship badly. The members who leave easily sometimes come back, and the ones trapped leave a review you cannot undo.",
          "Ask one optional question on the way out. The answers show the real reason, and it is almost never the price."
        ]
      }
    ]
  },
  {
    slug: "money-value-based-pricing",
    title: "Value-Based Pricing for Creative Work and Services",
    excerpt: "Value-based pricing sets the fee from the result you deliver, not the hours you spend. It rewards speed and skill instead of rewarding a slow calendar.",
    date: "2025-12-05",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "revenue"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Briefcase,
    content: [
      {
        heading: "Start from the outcome",
        paragraphs: [
          "Ask what the work is worth once it is done. A script that lands a launch can pull in far more than the hours it took to write. Anchoring the fee to that outcome pays for skill rather than for time on a clock.",
          "I stopped quoting by the hour for one client after I noticed a fast, clean script was worth more to them, not less. Faster work should not cost less when the result is the same or better."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start from the outcome the client tracks.",
          "Find a number both sides can see.",
          "Charge for the transformation, not the hours.",
          "Explain the number simply.",
        ]
      },
      {
        heading: "Find a number both sides can see",
        paragraphs: [
          "Value-based pricing needs something measurable. That could be a conversion rate, hours saved, or a campaign target. Without a shared number the fee becomes a debate about feelings.",
          "Agree on the metric before you start. If the client cannot name what success looks like, price a fixed package instead and revisit later."
        ]
      },
      {
        heading: "Charge for the transformation",
        paragraphs: [
          "Bundle the deliverables into a result: not ten posts, but a month of content that stays on brand. The buyer understands the result faster than a list of files, and the result is what justifies the number.",
          "Keep a floor under every value-based quote. If the outcome is uncertain, protect yourself with a base fee plus a small success payment."
        ]
      },
      {
        heading: "When value pricing fits",
        paragraphs: ["Value-based fees are excellent in some jobs and wrong in others. These signs tell you which one you are in."],
        bullets: [
          "The result has a number the client already tracks",
          "Your work directly moves that number",
          "The client can afford a fee tied to the outcome",
          "You can deliver reliably and on a known timeline",
          "There is a base fee if the result is hard to measure"
        ]
      },
      {
        quote: "Charge for the change you make, not for the clock you watch."
      },
      {
        heading: "Explain the number simply",
        paragraphs: [
          "When a value-based fee is higher than the client expected, walk them through the math you both agreed on. Show the metric, the expected move, and the fee as a share of the gain. A number with a story is easier to accept than a number alone.",
          "Stay ready to fall back to a package price. Value pricing is an option in the conversation, not a demand."
        ]
      }
    ]
  },
  {
    slug: "money-limited-time-offers",
    title: "Limited-Time Offers That Skip the Fake Urgency",
    excerpt: "Limited-time offers work when the deadline is genuinely real. Invent a fake countdown and buyers learn to ignore every deadline you set afterward.",
    date: "2026-03-19",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["monetization", "business"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        heading: "Make the deadline true",
        paragraphs: [
          "A real deadline has a cause: a cohort starting, a price step, or stock that actually runs out. When the clock hits zero and nothing changes, buyers notice. The next deadline you set will be worth less because of it.",
          "I ran a launch with a real start date for a group program. The day the group filled, I closed the page, and people believed the next one too."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Make the deadline true.",
          "Pick a clock you can keep.",
          "Add value instead of subtracting it.",
          "Close the loop when it ends.",
        ]
      },
      {
        heading: "Pick a clock you can keep",
        paragraphs: [
          "Short windows create pressure, but only if you can honor them. A three-day sale is fine if you actually end it. A countdown that resets is a lie with a timer.",
          "Longer windows suit bigger decisions. A week is plenty for a course, a day is enough for a template. Match the length to how much thinking the buyer needs."
        ]
      },
      {
        heading: "Add value instead of subtracting it",
        paragraphs: [
          "A strong limited offer adds something for early buyers rather than cutting the price for everyone. A bonus module, a template, or a live session gives the deadline a reason to matter without cheapening the core product.",
          "Bonuses also expire naturally. A live call only exists on one date, so the offer ends without you having to invent scarcity."
        ]
      },
      {
        heading: "Honest urgency checklist",
        paragraphs: ["Run these checks before any countdown goes live. Each one keeps the deadline believable."],
        bullets: [
          "The offer genuinely ends on the stated date",
          "There is a cause: a cohort, a price step, or real stock",
          "Early buyers get a bonus, not just a lower price",
          "The clock is visible and never resets",
          "After it ends, the offer is really gone until next time"
        ]
      },
      {
        quote: "A deadline you keep teaches buyers to trust the next one."
      },
      {
        heading: "Close the loop",
        paragraphs: [
          "When the window shuts, say so. A short note that the offer ended keeps everyone on the same page and sets up the next one. Silence after a deadline makes buyers wonder whether it ever mattered.",
          "Track how many people buy in the final day. A real deadline usually shows a late spike, and a fake one shows a flat line that tells you the audience already stopped believing."
        ]
      }
    ]
  },
  {
    slug: "money-package-deals",
    title: "Package Deals That Make Choosing Simple and Fast",
    excerpt: "Package deals cut the number of decisions a buyer has to make. Fewer choices, clearly labeled, move more people to yes than a long menu of options.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["business", "monetization", "revenue"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Fewer choices, faster yes",
        paragraphs: [
          "Most buyers do not want to build a custom order. They want to pick a package and move on. Three clear options with named outcomes beat a price list where every line needs a quote.",
          "I replaced a long menu on one offer with two packages. Sales went up, support questions went down, and I spent less time explaining what each item cost."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fewer choices means a faster yes.",
          "Name packages by outcome.",
          "Build one obvious default.",
          "Remove the option that has not sold in ninety days.",
        ]
      },
      {
        heading: "Name packages by outcome",
        paragraphs: [
          "The name should answer what the buyer gets, not what it contains. Launch Ready and Always On tell a story. Package A and Package B force the buyer to read everything twice.",
          "Keep the descriptions to three or four lines each. If a package needs a paragraph per item, it is really a custom order wearing a label."
        ]
      },
      {
        heading: "Build one obvious default",
        paragraphs: [
          "One package should look like the sensible pick for most people. Mark it as the common choice and let the other two frame it. That default does the selling so your copy does not have to.",
          "Make the default the offer you would choose for yourself. If you would not buy it, no label will make the buyer want it."
        ]
      },
      {
        heading: "Package design rules",
        paragraphs: ["These rules keep a package list short and effective. They apply to services and digital products alike."],
        bullets: [
          "Three options at most, each with a one-line outcome",
          "One package is the clear default for most buyers",
          "Descriptions run three or four lines, never a page",
          "Every package name answers what the buyer gets",
          "Remove the option that has not sold in ninety days"
        ]
      },
      {
        quote: "A buyer who has to compare ten options often buys none."
      },
      {
        heading: "Let packages replace haggling",
        paragraphs: [
          "When someone asks for a custom mix, point to the closest package first. Most of the time it covers what they need, and the conversation ends faster than a quote. If it truly does not fit, then build the custom order and price it above the default.",
          "Over time, packages train your audience to buy without a call. That saves both sides time, and it keeps your pricing consistent as you grow."
        ]
      }
    ]
  }
];
