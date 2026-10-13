import {
  Activity,
  BarChart3,
  BookOpen,
  Eye,
  Film,
  Layers,
  MessageSquare,
  Star,
  Target,
  Users,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch80: BlogPost[] = [
  {
    slug: "landing-social-proof-types",
    title: "Social Proof on Landing Pages: Which Types Convince",
    excerpt:
      "Social proof on a landing page takes many shapes, and the version that moves a buyer depends on how skeptical they already are when they arrive.",
    date: "2024-03-12",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "When someone lands on your page, they are quietly asking whether people like them already trusted this. Social proof answers that question, and the form you pick matters more than the volume you pile on. A logo bar, a review, a customer count, and a case study each quiet a different doubt.",
          "I have run all four against the same offer and watched each one move a different slice of visitors. Nobody converts because you listed everything. They convert when one piece of evidence matches the fear they carried onto the page.",
        ],
      },
      {
        quote:
          "Proof does not persuade people who were never skeptical. It persuades the ones who were, by matching the exact doubt they walked in with.",
      },
      {
        heading: "The four types of proof",
        bullets: [
          "Recognition proof: familiar logos and names. It calms the fear of being the first to try something unproven.",
          "Result proof: numbers, before and after figures, measured outcomes. It answers whether the product does what it claims.",
          "Peer proof: reviews and community size. It answers whether people like the visitor are happy with the choice.",
          "Deep proof: case studies and long testimonials. It answers whether the result holds up after the first month.",
        ],
        paragraphs: [
          "Match the type to the doubt in front of you. If visitors worry about credibility, lead with recognition. If they worry about whether it works at all, lead with results.",
        ],
      },
      {
        heading: "Why stacking every type backfires",
        paragraphs: [
          "A page that throws a logo bar, three reviews, a counter, and a case study into one scroll reads as anxious. The visitor cannot tell which claim you actually believe, so they discount all of it. Crowding proof signals that the strongest evidence was not strong enough on its own.",
          "One well placed piece beats five stacked ones. Give the page a single argument and let the proof support it, rather than asking the visitor to sort through a pile.",
        ],
      },
      {
        heading: "Reading which doubt dominates",
        paragraphs: [
          "You can hear the dominant doubt in support tickets and sales calls. If the same question keeps coming back, that is the doubt your proof needs to answer first. A page written before those conversations exist is guessing.",
          "Try this cheap test: ask five recent buyers what almost stopped them. Their answers point straight at the proof type your page is missing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick proof by matching the visitor's main doubt, not by adding more of everything.",
          "Recognition proof for credibility, result proof for efficacy, peer proof for belonging, deep proof for durability.",
          "One strong piece in the right spot beats a wall of logos and stars.",
          "Let real buyer questions decide which proof leads the page.",
        ],
      },
    ],
  },
  {
    slug: "landing-testimonial-placement",
    title: "Where Testimonials Should Sit on a Landing Page",
    excerpt:
      "Where you place a testimonial on a landing page decides whether it reads as proof or as decoration, so placement is a real conversion decision.",
    date: "2024-06-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Where you place a testimonial on a landing page decides whether it reads as proof or as decoration. The same sentence can reassure a hesitant buyer or get skimmed past, and the only difference is where it sits in the scroll.",
          "Most pages bury testimonials in a social proof section near the bottom, far from the decision. That location is safe and mostly useless. A quote performs when it answers the doubt that just appeared two lines above it.",
        ],
      },
      {
        heading: "Placement follows the doubt",
        paragraphs: [
          "A landing page is a sequence of small hesitations. The price section raises a cost question. The feature list raises a does it work question. The signup form raises a commitment question. A testimonial placed right after the moment of doubt lands with force because it is timed to the worry.",
          "Move the same quote to a generic wall of reviews at the bottom and it competes with nine other quotes for attention. Context is most of the persuasive work.",
        ],
      },
      {
        quote:
          "A testimonial is only as strong as the doubt standing next to it. Put proof where the question is, not where the design looks tidy.",
      },
      {
        heading: "Positions that usually earn their space",
        bullets: [
          "Directly under the price, paired with a quote about value or return. This is the single highest value slot on most pages.",
          "Beside the primary form, especially a line about how quick or painless signing up was.",
          "After a technical feature block, with a quote from someone who uses that exact feature.",
          "Above the fold only when the quote names a specific result, never a generic rave.",
        ],
      },
      {
        heading: "What to cut",
        paragraphs: [
          "A long testimonial wall at the bottom mostly serves the ego of the marketing team. If a quote is not answering a live doubt, it is noise. Delete weak quotes without mercy and keep the four or five that map to real moments of hesitation.",
          "Better still, repeat your single strongest quote in two places: once where the doubt appears and once near the final call to action. Repetition of one specific claim works better than a different quote every scroll.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place each quote directly after the doubt it resolves.",
          "The price section is the most valuable testimonial slot you own.",
          "Cut generic praise and keep quotes tied to real objections.",
          "Repeat one strong quote instead of collecting many weak ones.",
        ],
      },
    ],
  },
  {
    slug: "landing-logo-bars-that-earn-trust",
    title: "Logo Bars on Landing Pages: Trust or Decoration",
    excerpt:
      "A logo bar on a landing page can earn instant trust or quietly signal filler. The difference is context and timing, not how many brands you stack.",
    date: "2024-09-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A logo bar on a landing page can earn instant trust or quietly signal filler. The difference is context and timing, not how many brands you stack along the top.",
          "When a visitor sees names they recognize next to yours, they borrow your credibility for a moment. When they see a strip of unknown marks, the bar does nothing except take up space.",
        ],
      },
      {
        heading: "Recognition is the whole mechanism",
        paragraphs: [
          "A logo bar works through borrowed trust. The visitor thinks, that company chose to work with them, so they are probably real. This only functions when the logos are already known to that specific audience. A company famous in one industry reads as a blank rectangle in another.",
          "So the question is never do we have logos. It is do our visitors recognize these logos. If the answer is no, a well written customer line will outperform the strip.",
        ],
      },
      {
        quote:
          "A logo bar transfers trust only when the visitor already trusts the logo. Unknown marks borrow nothing.",
      },
      {
        heading: "Getting the details right",
        bullets: [
          "Use a single treatment: same height, same visual weight, no brand winning the size war.",
          "Add a small label such as trusted by teams at, so the relationship is clear without a caption hunt.",
          "Lead with the most recognized name for your audience, not your personal favorite.",
          "Ask permission before you publish a logo, and keep proof of the agreement on file.",
        ],
      },
      {
        heading: "When to skip the bar entirely",
        paragraphs: [
          "If your brand is early and the logos are small, a logo bar can make you look smaller than you are. An empty looking row of marks draws attention to how few partners you have. In that case, use a customer quote that names a specific outcome instead.",
          "You can also delay the bar until you have a handful of recognizable names. Until then, spend the space on a plain sentence about who the product is for.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A logo bar only works when the logos are known to your specific audience.",
          "Keep sizing consistent so no single brand distorts the strip.",
          "Label the relationship plainly to avoid guesswork.",
          "Skip the bar while your partner list is thin and lean on specific quotes.",
        ],
      },
    ],
  },
  {
    slug: "landing-case-study-snippets",
    title: "Case Study Snippets That Carry a Landing Page",
    excerpt:
      "A case study snippet on a landing page can do what a short testimonial cannot. It shows the messy middle where a result actually happens, before any payoff.",
    date: "2025-01-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A case study snippet on a landing page can do what a short testimonial cannot. It shows the messy middle where a result actually happens, before any payoff.",
          "Testimonials sell a feeling. Case studies sell a mechanism. When a visitor has already heard the pitch and still wonders whether it will work for them, a compressed story is the proof that closes the gap.",
        ],
      },
      {
        heading: "The snippet formula",
        paragraphs: [
          "A working snippet has four moving parts: who the customer is, the problem they walked in with, the specific change you made, and the measured outcome. Miss the problem and the result means nothing. Miss the number and the story feels like a mood.",
          "Keep it to a short paragraph with one bolded figure. The goal is a legible before and after that a skimming visitor can absorb in seconds.",
        ],
      },
      {
        heading: "What belongs in a snippet",
        bullets: [
          "A concrete starting condition, such as a team of eight handling all support by hand.",
          "The exact intervention, named plainly, without jargon.",
          "A measured result with a timeframe, not an adjective.",
          "One line of the customer's own words to carry the emotional weight.",
        ],
      },
      {
        quote:
          "A number without a starting condition is trivia. A case study earns belief by showing the distance between before and after.",
      },
      {
        heading: "Where the snippet lives",
        paragraphs: [
          "The strongest location is after your main feature explanation and before the price. At that point the visitor understands the offer and is starting to weigh the cost. A compact story about a peer who got a specific result answers the obvious next question.",
          "Link the snippet to the full case study for the reader who wants depth, but make the snippet stand alone for everyone else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Snippets show mechanism; testimonials show feeling. Use them at different points.",
          "Include who, the problem, the change, and a measured result.",
          "Keep one bolded figure and a single customer line.",
          "Place it after features and before price, then link to the full story.",
        ],
      },
    ],
  },
  {
    slug: "landing-review-widgets-and-ratings",
    title: "Review Widgets and Star Ratings on Landing Pages",
    excerpt:
      "Review widgets and star ratings on a landing page carry weight, but only when they look earned and match what your visitors already recognize.",
    date: "2025-04-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        paragraphs: [
          "Review widgets and star ratings on a landing page carry weight, but only when they look earned and match what your visitors already recognize.",
          "A five star average pulled from a review platform does quiet a real fear: that everyone else regretted buying. The trouble starts when the widget is decorative, unverifiable, or aimed at the wrong audience.",
        ],
      },
      {
        heading: "What the stars actually say",
        paragraphs: [
          "A rating compresses a lot of other people's experience into one glance. It works because humans copy the crowd when they are unsure. The number matters less than the volume behind it. Four and a half stars from two thousand reviews reassures more than five stars from nine.",
          "Show the count next to the average. A lone star value with no sample size reads as marketing, not evidence.",
        ],
      },
      {
        quote:
          "A star rating without a review count is a claim. A star rating with a count is evidence.",
      },
      {
        heading: "Decisions that change how it lands",
        bullets: [
          "Show a live review count and update it, so the number does not look frozen from launch.",
          "Match the platform to your audience; a source they use weekly carries more weight than one they have never opened.",
          "Quote one critical review and your response next to the widget to prove you do not hide the hard ones.",
          "Position the widget near the price and the form, where doubt peaks.",
        ],
      },
      {
        heading: "The risk of a mismatched widget",
        paragraphs: [
          "If your buyers live in a niche community, a giant general platform rating can feel borrowed from a different world. It may even read as faint praise from people who are not like them. Screen the source against your actual audience before you paste the embed.",
          "Also watch load cost. A heavy third party widget that slows the page can cost more in lost visitors than the stars win back. A static snapshot with a link may do the job better.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Always pair the rating with a review count.",
          "Keep the count live so it looks current.",
          "Choose a review source your audience actually trusts.",
          "Feature a hard review and your reply to signal honesty.",
          "Check the widget's load cost before you commit to it.",
        ],
      },
    ],
  },
  {
    slug: "landing-live-social-proof-counters",
    title: "How Live Social Proof Counters Affect a Landing Page",
    excerpt:
      "Live social proof counters show recent activity on a landing page. They can sharpen urgency, and they can also look staged if the numbers lie.",
    date: "2025-08-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Live social proof counters show recent activity on a landing page. They can sharpen urgency, and they can also look staged if the numbers lie.",
          "The idea is simple: if other people are doing this right now, the visitor should act too. It works when the activity is true and relevant. It fails the moment a visitor suspects the counter is a random number generator.",
        ],
      },
      {
        heading: "Where the urgency comes from",
        paragraphs: [
          "A counter like 47 people started a trial today taps into both belonging and scarcity. The mind reads it as this is normal and this is happening without me. That double pull is why the pattern has survived so long in marketing.",
          "The effect depends on plausibility. A number that is too round, too large, or moving too fast triggers suspicion and the whole page loses credibility with it.",
        ],
      },
      {
        heading: "Rules that keep counters honest",
        bullets: [
          "Only show numbers you can actually measure, and say what they count.",
          "Tie the figure to a real window, such as in the last 24 hours, rather than an endless total.",
          "Update it on a real schedule so it does not reset at midnight for no reason.",
          "Keep the language plain so a visitor knows exactly what happened and when.",
        ],
      },
      {
        quote:
          "Fake urgency is easy to spot and expensive to recover from. One inflated counter can make every other claim on the page suspect.",
      },
      {
        heading: "When a counter helps and when it hurts",
        paragraphs: [
          "A counter helps on a product with steady daily activity and a clear action to measure. It hurts on a niche tool where a big number would be implausible anyway. It also backfires on a premium offer where excitement is not the emotion you want.",
          "If your honest daily number is small, do not inflate it. A lower true number with a clear label can still build trust, while a high fake one destroys it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use counters only where the activity is real and measurable.",
          "Label what the number counts and the time window it covers.",
          "Match the figure's size to what is plausible for your offer.",
          "Drop the counter if your honest numbers are small.",
        ],
      },
    ],
  },
  {
    slug: "landing-video-testimonials",
    title: "Video Testimonials on a Landing Page: Worth It",
    excerpt:
      "Video testimonials on a landing page add face and voice to a claim. That extra cost only pays off when the story is specific and clearly unscripted.",
    date: "2025-11-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Video testimonials on a landing page add face and voice to a claim. That extra cost only pays off when the story is specific and clearly unscripted.",
          "A written quote can be edited into something generic. A face on camera is harder to fake, so it carries more weight. That is the entire reason to bother with video, and the entire reason a bad one hurts more than a paragraph would.",
        ],
      },
      {
        heading: "What makes a video land",
        paragraphs: [
          "The strongest clips run under ninety seconds and answer one question. A customer names the problem before the product and closes with a result. Twenty seconds of hello and back story kills the clip before the useful part.",
          "Keep the customer's own words. The moment a scripted line enters, the audience hears it and discounts the whole thing.",
        ],
      },
      {
        quote:
          "A testimonial video is convincing because it is hard to fake. Clean it up too much and you spend the trust you were trying to earn.",
      },
      {
        heading: "Production choices that matter",
        bullets: [
          "Film in a real setting, not a rented studio that screams advertisement.",
          "Add captions, since most visitors watch with sound off.",
          "Let one genuine stumble stay in the edit; it signals a real person.",
          "Keep the logo and lower third minimal so the claim leads, not the branding.",
        ],
      },
      {
        heading: "Placement and cost",
        paragraphs: [
          "Video is expensive in time and attention. Put the clip where the doubt is highest, usually near the price or the final call to action. A wall of five videos rarely gets watched, and each one adds weight to the page.",
          "One strong video usually beats three average ones. If you only have weak clips, a specific written quote may convert better until you can capture a better story.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use video to add evidence a text quote cannot.",
          "Keep clips short and focused on one problem and one result.",
          "Preserve the customer's natural voice and a real setting.",
          "Place the clip near peak doubt and avoid a video wall.",
        ],
      },
    ],
  },
  {
    slug: "landing-quantified-results",
    title: "Quantified Results: Numbers That Sell a Landing Page",
    excerpt:
      "Numbers on a landing page persuade when they carry a source and a timeframe. A bare percentage invites the exact skepticism you wanted to kill.",
    date: "2026-02-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Numbers on a landing page persuade when they carry a source and a timeframe. A bare percentage invites the exact skepticism you wanted to kill.",
          "Say we cut churn by 30 percent and a visitor wonders, for whom, over how long, measured how. Say we cut monthly churn from 4.1 percent to 2.9 percent across 60 accounts in one quarter and the same claim becomes hard to argue with.",
        ],
      },
      {
        heading: "Anatomy of a believable number",
        paragraphs: [
          "A credible figure has four parts: the metric, the starting value, the ending value or change, and the scope. The scope is the part people skip. A result from three accounts is a hint. The same result from a hundred accounts is evidence.",
          "Add the timeframe. Improvement over a week and improvement over a year are completely different claims, and visitors know it.",
        ],
      },
      {
        heading: "Checks before a stat goes live",
        bullets: [
          "Can you name the sample behind the number? If not, do not publish it.",
          "Is the timeframe stated, or is the reader left to assume one?",
          "Would the number still impress if the reader asked, compared to what?",
          "Is the source real and dated, or a rounded memory from a slide?",
        ],
      },
      {
        quote:
          "Skepticism is the default on a landing page. A number with no scope is a promise the visitor cannot verify, so they treat it as noise.",
      },
      {
        heading: "Presenting numbers without clutter",
        paragraphs: [
          "One large figure with a small explanatory line beats a dashboard of metrics. The visitor is not analyzing a report. They are looking for one reason to keep reading. Give them that reason in the largest type on the block.",
          "Group related numbers so the reader can compare, but stop at a small set. Beyond that, the block reads as a chart and the eye skips it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Every number needs a metric, a change, and a scope.",
          "Name the sample and the timeframe or leave the figure out.",
          "Lead with one large number and a plain explanation.",
          "Keep grouped stats to a small set so the eye can compare.",
        ],
      },
    ],
  },
  {
    slug: "landing-social-proof-near-cta",
    title: "Placing Social Proof Next to Your Landing CTA",
    excerpt:
      "Social proof next to a landing CTA lowers the last hesitation. Placed anywhere else, the same testimonial can miss its moment and land as a random compliment.",
    date: "2026-05-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "cta"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Social proof next to a landing CTA lowers the last hesitation. Placed anywhere else, the same testimonial can miss its moment and land as a random compliment.",
          "The moment before a click is the most fragile point on the page. The visitor has read enough to be interested and is now calculating risk. Proof positioned here answers the final question instead of adding to a wall at the bottom.",
        ],
      },
      {
        heading: "What the pre-click moment needs",
        paragraphs: [
          "At the call to action, two doubts tend to surface: will this work for me, and what happens after I click. Each one wants a short piece of proof, not a paragraph. A single line can carry both if it is specific.",
          "A quote like I set it up in ten minutes and cancelled my other tool the same day does more than five stars. It answers effort and outcome at once.",
        ],
      },
      {
        quote:
          "The highest value place for proof is not the top of the page. It is the inch above the button.",
      },
      {
        heading: "Proof that works beside a CTA",
        bullets: [
          "A one line quote naming a concrete result, ideally with a number.",
          "A small trust strip with a payment badge or a verified review count.",
          "A brief risk reducer, such as cancel anytime, paired with a real customer note.",
          "A subtle live count only if the activity is genuine and clearly labeled.",
        ],
      },
      {
        heading: "Mistakes to avoid at the button",
        paragraphs: [
          "The first mistake is stuffing the CTA area until the button competes with clutter. Proof should support the action, not bury it. The second is using a generic rave that could belong to any product, which reads as filler exactly where scrutiny is highest.",
          "The third is repeating the same quote from the top of the page. If you show proof near the button, make it a fresh, sharper line aimed at the closing fear.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the space above the button as your best proof slot.",
          "Answer effort and outcome in one specific line.",
          "Keep the CTA area clean so proof supports rather than buries it.",
          "Use a fresh quote near the button, not a repeat from the top.",
        ],
      },
    ],
  },
  {
    slug: "landing-fake-social-proof-risks",
    title: "Fake Social Proof and the Risk to a Landing Page",
    excerpt:
      "Fake social proof on a landing page is a short term win with a long tail. Real reviews, real names, and real numbers all survive a closer look.",
    date: "2026-09-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Fake social proof on a landing page is a short term win with a long tail. Real reviews, real names, and real numbers all survive a closer look.",
          "Invented testimonials, stock faces, and rounded up metrics can lift a test for a week. Then a prospect checks the review platform, finds nothing, and trusts your page less than if it had shown nothing at all.",
        ],
      },
      {
        heading: "Why it usually gets caught",
        paragraphs: [
          "Buyers are more skeptical than they were five years ago, and the tools to verify are everywhere. They search the quoted name, open the review site, and reverse image search a headshot. A single mismatch unravels the whole page.",
          "The cost is not just the lost sale. It is the reputation you cannot recover, because the story of a caught fake spreads faster than any honest review.",
        ],
      },
      {
        quote:
          "Manufactured proof converts until someone looks. On the internet, someone always looks.",
      },
      {
        heading: "Cheap ways to get real proof fast",
        bullets: [
          "Email your ten happiest customers and ask for one sentence about a specific result.",
          "Offer a small incentive for a review, such as a discount or early feature access.",
          "Record short calls and clip the customer's own words, with permission.",
          "Publish an anonymous case study when a customer cannot be named, with real numbers intact.",
        ],
      },
      {
        heading: "Handling thin proof honestly",
        paragraphs: [
          "When you are early, say so and lean on what is true. A line like we are a small team and this is our first hundred users is more persuasive than a photoshopped logo wall, because it is obviously real.",
          "Scarcity can be true too. A genuine early access limit or a founding price is honest urgency. The rule is simple: if a claim would embarrass you when a journalist asks for the source, do not publish it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fake proof converts briefly and then costs far more than it returns.",
          "Buyers verify names, faces, and review platforms quickly.",
          "Collect real quotes with small incentives and clear permission.",
          "When proof is thin, use honest scarcity instead of invented logos.",
        ],
      },
    ],
  },
];
