import {
  Activity,
  Eye,
  Film,
  Layers,
  PenLine,
  Rocket,
  Star,
  Target,
  Type,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch78: BlogPost[] = [
  {
    slug: "landing-hero-headline-first-five-words",
    title: "Hero Headlines That Earn The First Five Seconds",
    excerpt:
      "A landing page hero headline has about five seconds to explain why anyone should stay. Here is how to write one that earns that time and holds a reader.",
    date: "2024-02-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Most hero headlines fail because they describe the product instead of the problem. A visitor decides in roughly five seconds whether the page is for them, and the headline either holds them there or sends them back to the search results. Earning those seconds comes down to one move: name a real person and a real outcome, then stop before the sentence turns into a summary.",
          "The headline is not the place to recap the whole page. It is the place to hand someone one clean reason to keep reading, before doubt has a chance to show up. The subheadline, the proof, the button, all of it sits downstream of that single line.",
        ],
      },
      {
        quote:
          "If your headline could sit on ten competitors unchanged, it is not a headline. It is a category label.",
      },
      {
        heading: "Lead with the reader, not the feature",
        paragraphs: [
          "Features belong lower on the page, where a convinced reader actually wants detail. The hero headline speaks to a situation the reader already recognizes. A line like 'Stop losing leads in your inbox' beats 'AI-powered CRM platform' because the first sounds like a Tuesday afternoon and the second sounds like a press release.",
          "Watch for abstract nouns. Words like solutions, platform, and experience feel safe and say almost nothing. Concrete nouns and verbs carry the weight, and they survive being read at speed by someone who is not yet convinced they care.",
          "A useful test is to imagine the reader nodding. If the headline describes a moment they have lived through, they nod without effort. If it describes a category they have to decode first, they scroll before the noun is finished.",
        ],
      },
      {
        heading: "Keep the promise small enough to believe",
        paragraphs: [
          "You do not need the boldest claim on the internet. You need a claim the reader can imagine being true after a single scroll. A modest, specific promise beats a grand vague one because belief, not volume, is what makes someone stay past the fold.",
          "Pair the headline with a subheadline that answers the obvious next question. If the headline says what changes, the subheadline can say how fast or for whom. Together they cover the first moment of doubt before the reader has to invent an objection on their own.",
          "Overreaching also invites comparison. The bigger the claim, the more the reader thinks of the competitor who promises the same thing. A narrow promise is easier to own, harder to dismiss, and it gives the rest of the page less to live up to.",
        ],
      },
      {
        heading: "Kill the clever, keep the clear",
        paragraphs: [
          "Humor and wordplay can work once a brand has earned the reader's patience. On a cold visitor, a pun costs a second of processing and buys almost nothing. Clarity is the only safe currency in the first line, and it is the line most likely to be read twice.",
          "Read the headline out loud. If it sounds like a category name, rewrite it as something a customer would say to a friend. The spoken version is usually shorter and sharper, which is exactly what a skimming reader needs.",
        ],
      },
      {
        heading: "Write the headline last, then cut it",
        paragraphs: [
          "The strongest headlines are usually written after everything else on the page exists, when you know exactly what you are promising. Drafting the headline first tempts you to describe the product because the offer is not yet sharp.",
          "Once it is written, cut a quarter of the words. Most headlines that survive editing lose their soft opening, their throat-clearing adjective, or their closing clause. The remaining line is the one worth testing, and it is short enough to read in one glance.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name a person and an outcome in the first line, then stop before it becomes a summary.",
          "Cut abstract nouns. If a word cannot be pictured, it is probably not pulling weight.",
          "Make the promise specific and modest enough that a skimmer believes it instantly.",
          "Write it last, then cut a quarter of the words before you ship it.",
        ],
      },
    ],
  },
  {
    slug: "landing-above-the-fold-layout",
    title: "Above The Fold: What Viewers See Before Scrolling",
    excerpt:
      "The above the fold area on a landing page is a budget, not a canvas. Spend it on the few things that decide whether a visitor stays or leaves.",
    date: "2024-06-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Above the fold is everything a visitor sees before they scroll, and on most screens that is less room than designers assume. Treat it as a fixed budget you have to spend. The layout question is not what could fit but what has earned a place in that first screen.",
          "A strong fold answers three things fast: what this is, who it is for, and what to do next. If a visitor has to hunt for any of those, the page is asking for work before it has offered value. Most people decline that trade silently by leaving.",
          "The fold is also the only part of the page every visitor sees. Someone who bounces in the first second never reaches your testimonials or pricing, no matter how good they are. That is why small improvements up top tend to move the whole page.",
        ],
      },
      {
        quote:
          "A fold that tries to say everything ends up saying nothing at the exact moment attention is most expensive.",
      },
      {
        heading: "The elements worth the space",
        paragraphs: [
          "Almost every high-performing fold contains the same small set of parts. A headline that names the outcome, a subheadline that handles the first doubt, one clear action, and a visual that supports the claim rather than decorating it. The order shifts with the audience, but the set rarely does.",
          "Leaving one of these out usually costs more than adding one in. A fold with a headline and button but no subheadline leaves the reader to guess who the offer is for. A fold with visuals and no action looks like a portfolio, not an offer.",
          "A thin strip of proof, such as a customer count or a recognized logo, earns its place when it is real. If the proof is thin or borrowed, it does more harm than good, and the fold is better off with one fewer element.",
        ],
      },
      {
        heading: "Height is a moving target",
        paragraphs: [
          "The old rule of 600 pixels came from desktop monitors few people still use. On a phone, the fold can be as short as 400 pixels once the browser chrome loads. Design for the smallest realistic screen and let larger ones breathe.",
          "This is why fixed-height hero sections with absolutely positioned content break so often. The text overlaps the visual on one device and floats in a sea of empty space on another. Flow-based layout that stacks on small screens survives the range.",
          "Check the fold on a real device, not a design-tool preview that hides the chrome. What you can read there without scrolling is your true above the fold, and it is often smaller than the mockup suggested.",
        ],
      },
      {
        heading: "What to push below the fold",
        paragraphs: [
          "Features, pricing tables, long testimonials, and FAQs are all fine, just not in the first screen. They reward a reader who has already decided to care. Putting them above the fold crowds out the headline and hands a cold visitor a wall of detail to ignore.",
          "The instinct to front-load every benefit is understandable and usually wrong. The fold is a door, not a room. Its only job is to get the right person to step through it and start reading.",
          "Ask a few people to describe what the page offers after five seconds with it. If their answers diverge, the fold is unclear. If they all say the same specific thing, you have spent the budget well.",
        ],
      },
      {
        heading: "Keep the fold honest to the page",
        paragraphs: [
          "Whatever the fold promises, the next screen has to deliver. A headline about speed followed by a slow, dense paragraph breaks the spell immediately. The first scroll should feel like the fold kept its word.",
          "This is why it helps to design the fold and the section just below it together. The transition from promise to proof is the moment trust is either confirmed or quietly lost, and it deserves the same care as the headline itself.",
          "A fold is judged in seconds, but the decision to stay is made over the first two screens. Meeting the promise quickly is what turns a quick glance into a genuine read.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the fold as a budget and make every element justify its place.",
          "Answer what it is, who it is for, and what to do next in one screen.",
          "Design for the shortest realistic phone height, then let larger screens breathe.",
          "Verify the fold on a real device and keep the next screen honest to the promise.",
        ],
      },
    ],
  },
  {
    slug: "landing-hero-cta-placement",
    title: "Where To Place The CTA Inside Your Hero Section",
    excerpt:
      "Hero CTA placement looks like a design choice and behaves like a conversion decision. Placement inside the hero changes who clicks and how many.",
    date: "2024-10-23",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cta", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Put the primary call to action where the reader's eye comes to rest after the headline, and you remove a decision from their path. On most hero sections that resting point sits just below the subheadline, aligned with the text block.",
          "Placement matters because a button asks a visitor to act before they have read anything else. The common mistake is burying it under a visual or centering it so far from the headline that the two feel unrelated.",
          "A CTA should read as the natural next sentence of the headline, not a separate object floating in the corner waiting to be discovered. When the eye lands on it without searching, the click stops feeling like a leap.",
        ],
      },
      {
        quote:
          "A hero CTA is not a question you ask. It is the next step you make feel obvious.",
      },
      {
        heading: "One primary action, not three",
        paragraphs: [
          "A hero with a primary button, a secondary link, and a text link is asking a cold visitor to choose before they understand the offer. Choices slow people down, and slow people leave. Pick the action you most want and let everything else wait.",
          "If you need a softer option for people who are not ready, make it visually secondary by size and weight rather than competing for the same attention. The hierarchy should be obvious at a glance, even with the screen turned away from you.",
          "Every extra option is a small tax on a person who has not yet decided to care. Keep the hero narrow and move the alternatives to a section where the reader has already bought in.",
        ],
      },
      {
        heading: "Match the button copy to the promise",
        paragraphs: [
          "Generic labels like Submit or Learn More throw away the momentum the headline just built. Button text that echoes the headline's outcome keeps the reader inside the same thought, so the click feels like the obvious next move.",
          "If the headline promises a faster close, the button can say Start Closing Faster. That line continues the sentence the headline started, which is exactly what a good CTA does.",
          "Keep it short enough to scan. Four words is usually the ceiling. Longer text is fine for a link, but a button is read in a fraction of a second and needs to land in one beat.",
        ],
      },
      {
        heading: "Give it room and a reason to stand out",
        paragraphs: [
          "Whitespace around the button is not wasted space. A crowded CTA competes with every nearby element and loses. A little breathing room signals that this is the thing to do, which is a strong cue for someone scanning quickly.",
          "Contrast does the rest. If the rest of the hero is calm and muted, a single saturated button becomes the obvious target. If everything is loud, nothing is, and the eye has to search for where to go at the worst possible moment.",
          "Test the button inside the finished hero rather than in isolation. A placement that wins on a blank canvas can lose once the image and proof strip compete for the same attention.",
        ],
      },
      {
        heading: "Measure what the click really means",
        paragraphs: [
          "A button that gets clicked is not automatically a button that works. If the click leads to a form most people abandon, the hero did its job and the next step did not. Track the completed action, not just the tap.",
          "You can run a single placement test, moving the button above versus below the subheadline, and watch the completed signups. The difference is often small, which is itself useful to know.",
          "Knowing the effect is small frees you to stop arguing about pixels and spend the effort on the message instead. The headline usually moves more than the button ever will.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place the primary CTA where the eye lands after the headline and subheadline.",
          "Offer one primary action in the hero and delay every other choice.",
          "Write button copy that continues the headline's promise instead of labeling it.",
          "Track the completed action, not the click, so up is actually up.",
        ],
      },
    ],
  },
  {
    slug: "landing-subheadline-real-work",
    title: "How To Write A Subheadline That Does Real Work",
    excerpt:
      "A landing page subheadline is not filler under the headline. It carries the objection, the specificity, and the reason a reader keeps scrolling the page.",
    date: "2025-02-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "A subheadline earns its place by answering the question the headline just raised. The headline makes a claim, and the subheadline makes that claim credible, specific, or safe for the reader who is deciding whether to believe it.",
          "If it is only restating the headline in smaller type, it is dead weight taking up the most expensive real estate on the page. The fold has no room for a second version of the same sentence.",
          "Think of the two lines as a one-two sequence. The headline gets attention and states the change. The subheadline names the who, the how fast, or the catch, so the reader never has to guess what they are being offered.",
        ],
      },
      {
        quote:
          "The headline sells the destination. The subheadline removes the first reason to doubt it.",
      },
      {
        heading: "Handle the first objection",
        paragraphs: [
          "Every reader arrives with a quiet objection. This is too expensive, this is too complicated, this is not for someone like me. The subheadline is the earliest and cheapest place to defuse the most common one.",
          "If the offer sounds expensive, lead with a result or a free starting point. If it sounds technical, say who it is built for. Naming the objection before the reader can voice it makes the page feel like it understands them.",
          "A reader who feels unseen rarely reads on, no matter how good the product is. Answering the doubt early is a small piece of empathy that pays off in attention.",
        ],
      },
      {
        heading: "Trade adjectives for specifics",
        paragraphs: [
          "Words like powerful, intuitive, and flexible are wallpaper. They feel like claims without committing to anything, and readers have learned to ignore them. A single number or timeframe does more work than a string of praise.",
          "Swap 'Powerful analytics' for 'See which pages leak revenue in one dashboard.' Swap 'Easy setup' for 'Live in ten minutes, no code.' The specific version is harder to write and far easier to believe.",
          "Specificity also makes the claim testable, which is a quiet form of confidence. A vague promise asks for faith. A precise one invites the reader to check, and that invitation is what builds trust.",
        ],
      },
      {
        heading: "Keep it to one or two lines",
        paragraphs: [
          "The subheadline lives above the fold alongside everything else competing for attention. A block of four lines turns the hero into a wall of text and pushes the call to action out of view on smaller screens.",
          "Edit until only the essential sentence remains. If you cannot decide between two useful lines, keep the one that handles the more common objection and move the other into the section below.",
          "Match the tone of the headline while you are at it. Read the two lines as one paragraph and listen for the seam. If the second sounds like a committee wrote it, rewrite it in the same voice as the first.",
        ],
      },
      {
        heading: "Let the page prove the subheadline",
        paragraphs: [
          "A subheadline makes a promise the rest of the page has to keep. If it says setup takes ten minutes, the page should show the steps plainly enough to be believed. A claim that no section supports reads as marketing.",
          "Use the hero subheadline as a contract. Everything below exists to honor it with detail, screenshots, or a real example. When the page keeps its word, the reader stops hunting for reasons to leave.",
          "That contract cuts both ways. If the page cannot back the claim, soften the subheadline rather than leaving a debt the rest of the page has to default on.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use the subheadline to answer the question the headline raises, not to repeat it.",
          "Defuse the single most common objection before the reader can voice it.",
          "Replace praise adjectives with a number, a timeframe, or a named audience.",
          "Keep it to two lines, match the headline's tone, and let the page keep the promise.",
        ],
      },
    ],
  },
  {
    slug: "landing-hero-image-choice",
    title: "How To Pick A Hero Image That Carries Its Weight",
    excerpt:
      "A hero image on a landing page should reinforce the claim next to it. Choosing the right visual is a conversion decision, not a decoration task.",
    date: "2025-06-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A hero image should make the headline more believable, not just more full. If you removed the visual and the page lost no clarity, the image was decoration doing little for the reader.",
          "If removing it made the claim feel abstract or less real, it was doing its job. The best hero visuals show the outcome or the product in use, in a way that matches the reader's world rather than the designer's mood board.",
          "That usually means a real interface, a real person mid-task, or a result they recognize, rather than a stock scene of people celebrating in a glass lobby.",
        ],
      },
      {
        quote:
          "If a random stock photo could replace your hero image without consequence, it was never your hero image.",
      },
      {
        heading: "Match the image to the promise",
        paragraphs: [
          "The visual and the headline should tell the same story. If the headline promises calm and control, a chaotic cluttered photo fights it. If the promise is speed, a slow-looking scene undercuts the words before anyone reads them.",
          "Test by covering the headline and looking only at the image. What does the picture promise on its own? If that answer does not match your headline, one of the two is on the wrong page.",
          "This check takes seconds and catches the most common hero mistake, which is a beautiful image that tells a different story than the words beside it. Fixing the mismatch early is far cheaper than rebuilding the hero after launch.",
        ],
      },
      {
        heading: "Real beats polished more often than not",
        paragraphs: [
          "Product screenshots with real data convert better than glossy renders because they let the reader preview the outcome. A slightly imperfect real screenshot carries evidence. A flawless abstract render carries only mood.",
          "This does not mean ugly is good. It means authentic details, like a real dashboard with plausible numbers, buy trust that a stock image cannot.",
          "Readers are fast at spotting the difference between something real and something staged, even when they cannot explain why it felt off. That instinct is worth designing for.",
        ],
      },
      {
        heading: "Avoid the visual cliche",
        paragraphs: [
          "Certain images have been used so often they carry no meaning. A handshake over a desk, a lightbulb for an idea, a group pointing at a laptop. Readers have seen them thousands of times and their eyes slide right off.",
          "The fix is specificity. A picture of your actual user mid-task beats a staged scene every time, because it shows something the reader has not seen and cannot get from anyone else.",
          "The goal is an image that is both specific and legible. Novelty alone is not enough, and familiarity alone is not enough either. The good ones tend to be built for the offer rather than bought from a library.",
        ],
      },
      {
        heading: "Practical constraints that decide quality",
        paragraphs: [
          "A beautiful image that loads slowly is a slow page, and slow pages lose visitors before the image ever appears. Compress, serve modern formats, and reserve the space so the layout does not jump when it arrives.",
          "Give the image a clear focus point for responsive cropping. On a phone the hero may show only a narrow slice, so the important subject should sit where it survives the crop.",
          "When a photo cannot show the value, an illustration or diagram often can. Pick the medium that makes the offer obvious in one glance rather than the one that looks most expensive.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a hero image that makes the headline more believable, not simply fuller.",
          "Show the outcome or the product in use instead of generic stock scenes.",
          "Cover the headline and read the image alone; the two promises should match.",
          "Compress the file and set a focal point so it survives mobile crops.",
        ],
      },
    ],
  },
  {
    slug: "landing-hero-video-background",
    title: "Hero Video Backgrounds: When They Help Or Hurt",
    excerpt:
      "A hero video background on a landing page can add motion and proof, or it can bury your headline and slow the page. Here is how to tell which one you built.",
    date: "2025-10-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A hero video background earns its keep only when the motion proves something the headline claims. A looping clip of the product working supports the promise. A generic clip of clouds or city lights supports nothing and taxes the page.",
          "The failure mode is familiar. The video looks impressive in review, then ships with a headline that is hard to read over it, a heavy download, and a mobile fallback that never shows the video at all.",
          "Motion is expensive, so it has to pay for itself in clarity or in trust. If the clip is not proof, it is decoration with a bandwidth bill attached.",
        ],
      },
      {
        quote:
          "If the motion is not proving the promise, it is only competing with it.",
      },
      {
        heading: "Readability comes first",
        paragraphs: [
          "Text over video needs contrast that holds across every frame. A clip that is bright in one second and dark in the next will make your headline disappear in the dark moment.",
          "An overlay or a scrim is usually required, and it needs testing against the busiest frame, not the calm opening one. The frame you chose for the mockup is rarely the one that breaks the text.",
          "If you find yourself adding more and more overlay to make the text legible, that is a sign the video is fighting the copy. At some point the honest move is a still image, which will read cleaner and load faster than the clip ever could.",
        ],
      },
      {
        heading: "The performance tax is real",
        paragraphs: [
          "Background video is among the heaviest things you can add to a fold. It delays the moment the page becomes useful, and on a slow connection it is the difference between a visitor who waits and one who leaves.",
          "Mitigations help. Keep clips short and heavily compressed, lazy-load them, and avoid letting the video be the largest contentful element if you can.",
          "A poster image that shows immediately and swaps to video when ready gives readers content while the bytes arrive. That swap is the difference between a fast-feeling hero and a slow one.",
        ],
      },
      {
        heading: "When the payoff justifies the cost",
        paragraphs: [
          "There are hero sections where video is clearly right. A product whose value is motion, a place, or a transformation cannot be shown well in a still. When the clip is the proof, the cost is a trade worth making.",
          "For everything else, a strong still image and a crisp headline will usually win. Readers never see your clever production. They only feel whether the page loaded and whether they understood it.",
          "The safest path is to build the static hero first and add motion later as an optimization. That order stops the video from papering over a headline or an offer that was never strong to start with.",
        ],
      },
      {
        heading: "Respect the visitor who opted out",
        paragraphs: [
          "Some people browse with reduced motion set at the system level, and some are on metered connections. Honoring that preference with a static poster keeps the page usable for a group you would otherwise lose.",
          "Autoplay with sound is almost never acceptable in a hero, and muted autoplay still needs a visible pause control in many regions.",
          "Treat the controls as part of the design rather than an afterthought bolted on at launch. The small courtesy is also a signal that you thought about the person on the other side.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use a hero video only when the motion proves a claim the headline makes.",
          "Test text contrast against the busiest frame, not the calm opening frame.",
          "Lazy-load and keep clips short so the fold is useful immediately.",
          "Honor reduced-motion and provide a clear pause control.",
        ],
      },
    ],
  },
  {
    slug: "landing-social-proof-hero",
    title: "Where To Place Social Proof On A Landing Page",
    excerpt:
      "Placing social proof in the landing page hero can lift conversion before a visitor reads a single feature. The trick is picking proof a stranger trusts.",
    date: "2026-01-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        paragraphs: [
          "Social proof placed near the hero works because it answers the trust question at the exact moment it forms. A visitor reading your headline is deciding whether to believe you.",
          "A thin strip of real proof underneath removes part of that doubt before it can grow into a reason to leave. The proof does not need to be large.",
          "A line noting that thousands of teams already use the product, or a row of logos the reader recognizes, can be enough. What matters is that it is true and that the reader respects the source.",
        ],
      },
      {
        quote:
          "Proof in the hero should feel like a fact, not a plea. The moment it begs, it stops working.",
      },
      {
        heading: "Pick proof your reader actually trusts",
        paragraphs: [
          "A testimonial from someone your reader has never heard of carries little weight in the hero. A logo, a customer count, or a review score from a source the reader already knows does more in the same space.",
          "Match the proof to the doubt. If the reader worries the tool is too small, show scale. If they worry it is too hard, show someone like them using it.",
          "The strongest proof is the one aimed at the specific fear the reader arrived with. Generic praise lands softly because it answers a question nobody asked, while targeted proof lands hard.",
        ],
      },
      {
        heading: "Keep it quiet and specific",
        paragraphs: [
          "A giant wall of five-star graphics in the fold reads as noise and can even trigger suspicion. Subtle proof, quietly placed, tends to land better.",
          "One accurate number with a real source beats a cluster of vague badges that nobody can verify. Numbers should be precise enough to believe.",
          "A rounded claim like 'over ten thousand teams' is fine, but a specific figure with a date attached is stronger because it feels measured rather than inflated for effect. Readers scan numbers faster than badges, and a figure they can repeat back to a colleague travels further than a graphic they forget by lunch.",
        ],
      },
      {
        heading: "Do not fake the proof",
        paragraphs: [
          "Inflated counts and borrowed logos are a fast route to distrust. Readers check, competitors notice, and the short-term lift is not worth the credibility you spend.",
          "If you do not have strong proof yet, show something true and small rather than something large and false. When real proof is thin, a single honest testimonial from an early user outshines a vague claim about thousands.",
          "Authenticity is a feature of proof, not a nice extra you add once the numbers improve. The reader can tell the difference, and so can your future self when the claim is tested.",
        ],
      },
      {
        heading: "Let proof travel down the page",
        paragraphs: [
          "The hero strip is the opening note, not the whole song. Deeper proof, like a detailed case study or a longer quote with a name and a role, belongs lower where an interested reader will find it.",
          "Use the hero for the quick trust signal and the lower page for the evidence that converts the skeptical. Splitting the two keeps the fold clean and gives the careful reader something real to chew on.",
          "Check how the strip looks on a phone before you ship. If it turns into a cramped, unreadable row, reduce it to two or three recognizable marks. Less proof shown well beats more shown badly.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place proof right under the hero content to answer trust doubts as they form.",
          "Choose proof the reader respects and aim it at their specific fear.",
          "Keep it subtle and exact; loud badge walls can read as suspicious.",
          "Reserve detailed case studies for lower on the page, not the fold.",
        ],
      },
    ],
  },
  {
    slug: "landing-mobile-hero-design",
    title: "Designing A Mobile Hero That Loads And Converts",
    excerpt:
      "A mobile hero design lives or dies in the first screen. Small screens reward short headlines, light images, and a CTA that is impossible to miss.",
    date: "2026-04-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "cta"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Design the mobile hero first, because that is where most of your visitors land and where the room is tightest. A layout that works at 375 pixels wide will almost always stretch gracefully to a desktop monitor.",
          "The reverse is rarely true. On a phone the fold is short, the browser chrome eats the top, and typing is a chore, so every pixel has to work harder than it does on a laptop.",
          "Every element in the first screen has to justify itself, and the call to action needs to be reachable with a thumb without a scroll. That constraint is a feature, not a limitation.",
        ],
      },
      {
        quote:
          "If the CTA cannot be reached without scrolling on a phone, the hero is not finished.",
      },
      {
        heading: "Shorten everything",
        paragraphs: [
          "Words that fit on one desktop line wrap into three on a phone, pushing the CTA below the fold. Trim the headline until it lands in two or three lines on the smallest screen, and keep the subheadline to a single idea.",
          "The same goes for the button. A label that scans on desktop might wrap awkwardly on mobile. Test the copy at real phone widths rather than trusting the desktop preview.",
          "Line breaks change how the whole hero reads. A sentence that feels punchy on a wide screen can turn clumsy when it wraps, so shorter is almost always safer on mobile. When in doubt, cut a clause and let the button move up, because a tighter hero reads better on a small screen.",
        ],
      },
      {
        heading: "Treat speed as a design constraint",
        paragraphs: [
          "Mobile connections are less predictable, so a large hero image or video hurts more here than on a laptop. Compress aggressively, use modern formats, and set width and height so the layout does not shift as media loads.",
          "Reserve the image space before it arrives. Layout shift on a phone is disorienting and often sends a tap to the wrong place, which is the worst outcome for a button someone was already trying to press.",
          "Test on a mid-range phone with the network throttled, not a flagship on fast wifi. The experience you are optimizing for is a three-year-old device on a mediocre connection.",
        ],
      },
      {
        heading: "Make the tap target obvious and forgiving",
        paragraphs: [
          "Buttons need enough height and padding to be tapped without precision. Thin links are hard to hit and easy to miss. A full-width or clearly bounded button near the hero text removes a small but real source of friction.",
          "Keep the primary action above the fold and avoid floating widgets that cover it. Chat bubbles and cookie bars compete for the same tiny space.",
          "When they stack, the hero disappears entirely beneath them. Audit the page with every overlay enabled, since that is how many visitors will actually see it.",
        ],
      },
      {
        heading: "Design the fold as a single column",
        paragraphs: [
          "On a phone, multi-column heroes collapse into confusion. A single column that stacks headline, subheadline, button, and image in that order is predictable and quick to read.",
          "Keep the image after the button in source order when possible, or make it light enough to load first without delaying the text. The words are the priority on mobile, and the layout should say so.",
          "That ordering also helps accessibility and loading. Screen readers and slow browsers both work from the top, so putting the headline and button first serves everyone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Design the mobile hero first and let the desktop layout expand from it.",
          "Trim the headline and subheadline so the CTA stays above the fold.",
          "Compress media and reserve space to prevent layout shift on load.",
          "Test on a mid-range phone and a throttled connection, not a flagship.",
        ],
      },
    ],
  },
  {
    slug: "landing-hero-whitespace",
    title: "Why Whitespace Belongs In Above The Fold Design",
    excerpt:
      "Whitespace in above the fold design is not empty space, it is a signal. The right amount of breathing room guides the eye and makes a hero readable.",
    date: "2026-07-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Whitespace in the hero is a tool for guiding attention, not leftover room. Space around a headline makes it feel important and easier to read. Space around a button makes it easy to find.",
          "Empty space is doing work even when it looks like nothing is happening. The urge to fill the fold comes from a reasonable fear: if there is room, why not add another benefit or badge?",
          "The result of that urge is a crowded screen where the eye has no entry point and the reader gives up trying to parse it. Breathing room is what keeps the hierarchy legible at a glance.",
        ],
      },
      {
        quote:
          "Every element you add to a crowded hero steals attention from every other element.",
      },
      {
        heading: "Group what belongs together",
        paragraphs: [
          "Whitespace is really about relationships. Elements close together read as related, and elements far apart read as separate. A tight headline and subheadline feel like one thought.",
          "Use spacing to build those groups on purpose. If the CTA belongs to the headline, keep it near. If a strip of proof is a separate idea, give it more room so it reads as its own note rather than part of the pitch.",
          "A headline floating far from its button feels disconnected, which is why proximity is one of the strongest signals a layout can send without a single word.",
        ],
      },
      {
        heading: "More room usually means fewer words",
        paragraphs: [
          "Whitespace and verbosity are linked. A hero that feels calm is one that says less, because there is not enough text to fill the space.",
          "When a fold feels cramped, the fix is often deleting a line rather than shrinking the type. This runs against the instinct to add a clarifying phrase for every possible reader.",
          "The clearer move is to trust one strong line and let the space around it carry the emphasis. Removing words is usually faster than designing around them.",
        ],
      },
      {
        heading: "Balance beats symmetry",
        paragraphs: [
          "A hero does not need everything centered to feel ordered. A left-aligned text block with the image on the right often reads more cleanly because the eye follows the text and then rests on the visual.",
          "What matters is a clear path. The reader should move from headline to subheadline to button without bumping into anything. Whitespace is what keeps that path open.",
          "Symmetry can look tidy in a mockup while failing on a phone, where centered text and a floating image rarely align the way the design intended. On mobile, left-aligned text usually holds up better for the same reason the diagonal layout does, which is that it gives the eye a clear edge to follow.",
        ],
      },
      {
        heading: "Scale whitespace with the screen",
        paragraphs: [
          "The amount of space that feels generous on a desktop can push the button off a phone screen. Spacing should scale down on smaller viewports instead of staying fixed.",
          "A simple rule is to reduce vertical gaps on mobile until the headline and button both fit in the first screen. That single adjustment often fixes a hero that looked fine in the design tool.",
          "Do not confuse empty with effective, either. Space that directs the eye is designed. Space that just sits there exposes a page that is thin on substance. Read the hero on the smallest screen you support and trim the gaps until nothing feels tight or hollow.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat whitespace as a tool that guides the eye rather than waste to remove.",
          "Use spacing to group related elements and separate distinct ones.",
          "When a hero feels cramped, cut a line before shrinking the type.",
          "Scale the spacing down on mobile so the headline and CTA still fit.",
        ],
      },
    ],
  },
  {
    slug: "landing-hero-testing",
    title: "How To Test Your Hero Section Without Guessing",
    excerpt:
      "Testing a hero section without guessing means changing one meaningful thing at a time. Clean hero tests reveal what actually moves conversion on a page.",
    date: "2026-09-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["conversion", "cta"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Test one meaningful change at a time and let the result tell you which direction to go next. Most hero tests fail because someone swaps the headline, the image, and the button color in a single pass.",
          "When everything changes at once, you cannot say which change caused the lift or the drop. The hero is a good place to test because it is seen by everyone and influences everything below it.",
          "A headline that lands changes how the whole page is read, so small wins here compound across the rest of the funnel. That advantage is why the fold rewards careful testing more than any other section.",
        ],
      },
      {
        quote:
          "A test you cannot explain is a test you will learn nothing from, even when the numbers move.",
      },
      {
        heading: "Pick variables worth testing",
        paragraphs: [
          "Not every change deserves an experiment. Button color is a common first choice and usually a weak one, because the difference it makes is small.",
          "The headline, the offer, and the visual carry far more weight and are worth the setup cost. Start where the leverage is highest rather than where the change is easiest.",
          "If your headline describes a feature while the offer is an outcome, test the message before you touch the pixels. Message tests move numbers that styling rarely does.",
        ],
      },
      {
        heading: "Give the test enough room to speak",
        paragraphs: [
          "Small samples produce noisy results. A test that ends after forty visitors is telling you about randomness, not about your hero, and the conclusion will not hold.",
          "Decide the sample size and duration before you launch, and resist the urge to call it early when one side pulls ahead by a few clicks.",
          "Beware too many variants at once. Each added version splits your traffic and lengthens the time before any result means anything. Two clear options beat five murky ones every time.",
        ],
      },
      {
        heading: "Watch behavior, not only click rates",
        paragraphs: [
          "A headline can lift clicks and still hurt the business if it attracts the wrong people. Pair the conversion number with a quality signal, such as signups that complete onboarding.",
          "Read the session recordings too. When a variant underperforms, the recording often shows readers bouncing at the same spot, which tells you what to fix next.",
          "That spot is usually a specific line, not the whole page. Finding it turns a vague sense that something is wrong into a repair you can make this week.",
        ],
      },
      {
        heading: "Log what you learned",
        paragraphs: [
          "A test is only worth the time if the lesson outlives the experiment. Write down what you changed, what happened, and your best explanation.",
          "Over time that log becomes more valuable than any single result. Patterns emerge about what your audience responds to, and those patterns guide the next ten headlines.",
          "Decide what winning means before you start, and record ambiguous results honestly rather than dressing them up as wins. A false positive sends you building on ground that was never there.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Change one meaningful element per test so you can explain the result.",
          "Test message and offer before styling; they move conversion more.",
          "Set the sample size and duration in advance instead of stopping early.",
          "Log every test so the lesson outlives the experiment.",
        ],
      },
    ],
  },
];
