import {
  Brain,
  Clock,
  DollarSign,
  Eye,
  Flag,
  Heart,
  Layers,
  Scissors,
  Target,
  Users,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch79: BlogPost[] = [
  {
    slug: "landing-hero-headline-conversion-psychology",
    title: "How to Write Landing Page Hero Headlines That Convert",
    excerpt:
      "A landing page hero headline conversion leans on clarity before cleverness. Write the promise a stranger can repeat back within five seconds of arriving.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A landing page hero headline conversion comes down to one test: can a stranger repeat your promise back after five seconds. Clever wordplay loses to plain clarity almost every time I run the experiment.",
          "The hero does the heaviest lifting on the page. It has to name who the offer is for and what changes for them. When it fails, no amount of design rescues the rest.",
        ],
      },
      {
        heading: "Lead with the outcome, not the feature",
        paragraphs: [
          "Visitors arrive carrying a private question: what do I get out of this. Feature lists answer a different question, the one about what you built. Outcome language answers theirs.",
          "Swap 'AI-powered scheduling engine' for 'book a month of posts in ten minutes.' One describes the machine. The other describes the visitor's Tuesday afternoon.",
          "I keep a simple test. Read the headline out loud and ask whether a tired person would care. If the answer is no, the headline is about you.",
        ],
      },
      {
        quote:
          "A visitor gives your headline five seconds and one question. Answer the question before you show off.",
      },
      {
        heading: "Make the subhead earn its space",
        paragraphs: [
          "The subhead is where you handle the objection the headline raised. If the headline says fast, the subhead says how. If it says cheap, the subhead explains what you left out.",
          "Two lines is plenty. A subhead that repeats the headline wastes the second most valuable spot on the page. A subhead that adds proof or mechanism keeps the visitor reading into the fold.",
        ],
      },
      {
        heading: "Test one variable at a time",
        bullets: [
          "Change the headline only, and hold the subhead, image, and button fixed so the result means something.",
          "Run the test long enough to gather a few hundred visitors per version before you call a winner.",
          "Write five headline options before you launch, because your first idea is rarely your clearest.",
          "Score each option against clarity and the size of the promise, then ship the one that wins on both.",
          "Keep a swipe file of headlines that made you stop, with a note about why each one worked.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead with the outcome the visitor wants, not the feature you built.",
          "Use the subhead to handle the first objection rather than restate the headline.",
          "Test one variable at a time so every result teaches you something reusable.",
        ],
      },
    ],
  },
  {
    slug: "landing-social-proof-placement",
    title: "Where Social Proof Really Belongs on a Landing Page",
    excerpt:
      "Social proof earns its keep when it lands beside the doubt. Place landing page testimonials next to the claim they support, not in one lonely footer strip.",
    date: "2024-06-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Social proof works when it sits beside the doubt it answers. A testimonial about speed belongs next to your speed claim, not gathered with nine others in a footer nobody reads.",
          "I learned this from a page that had twelve glowing quotes and a weak conversion rate. Moving three of them next to the pricing table did more than adding ten new ones ever did.",
        ],
      },
      {
        heading: "Match the proof to the objection",
        paragraphs: [
          "Every section of a landing page raises a quiet objection. Price raises the question of value. A signup form raises the question of spam. Long onboarding raises the question of time.",
          "Drop a short quote or a number right there, and the objection deflates before it hardens. A line about canceling in one click does more next to the form than a wall of logos above it.",
          "You do not need famous customers. You need a specific person describing a specific relief at the exact moment the reader feels doubt.",
        ],
      },
      {
        heading: "Use the numbers you already have",
        bullets: [
          "Customer count, if the number is large enough to signal safety in numbers.",
          "A single sharp result, such as hours saved or dollars recovered, stated plainly.",
          "A recognizable logo row, but only if your audience already trusts those names.",
          "Review scores with the source named, because an unsourced five stars reads as decoration.",
          "A short quote with a real name and role, since anonymous praise feels invented.",
        ],
      },
      {
        quote:
          "Proof placed far from the doubt is just decoration. Proof placed at the doubt is persuasion.",
      },
      {
        heading: "Keep proof close to the claim",
        paragraphs: [
          "The distance between a claim and its evidence is the distance a reader must hold in their head. Shorten it and the claim feels true before the reader has time to argue.",
          "Group logos near the trust line at the top and save the longer stories for the section where price appears. Each placement should feel like a response, not a parade.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place each piece of proof next to the objection it resolves.",
          "Specific relief from a named person beats generic praise from a crowd.",
          "Move existing proof closer to the doubt before you collect more of it.",
        ],
      },
    ],
  },
  {
    slug: "landing-cta-button-microcopy",
    title: "Writing CTA Button Microcopy That Moves the Click",
    excerpt:
      "Button copy decides the click more often than button color. Write landing page CTA microcopy that says what happens next and the action stops feeling risky.",
    date: "2024-10-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cta", "conversion", "landing-page"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "CTA button microcopy decides the click more often than color ever will. Tell people what happens after they press, and the action stops feeling like a leap.",
          "I once split the same page, same traffic, with nothing changed but the words on the button. The clearer label won by a margin that surprised me, and it was not close.",
        ],
      },
      {
        heading: "Say what happens next",
        paragraphs: [
          "'Submit' describes a form. 'Get my quote' describes the visitor's next state. The second one carries a small promise, and promises move people.",
          "First person helps. 'Start my free trial' reads like the visitor talking, while 'Start your free trial' reads like you talking at them. The switch is tiny and the lift is real.",
          "Keep the label short enough to scan in one glance. If it wraps to two lines on a phone, it is too long.",
        ],
      },
      {
        heading: "Lower the perceived cost",
        bullets: [
          "Name the time it takes, such as two minutes, so the visitor knows the size of the ask.",
          "Say whether a card is required, because surprise card fields kill signups at the last step.",
          "Echo the value in the label, so the button repeats the promise of the section above it.",
          "Avoid vague verbs like submit and send when a concrete verb fits the action.",
        ],
      },
      {
        quote:
          "A button is a promise. The label is the fine print written large enough to trust.",
      },
      {
        heading: "Pair the label with a reason",
        paragraphs: [
          "A button earns more clicks when a short line nearby explains why the action is worth it. 'No credit card needed' under the button removes a specific fear at the exact moment it appears.",
          "Keep that supporting line close, within a glance of the button. Reasons placed three paragraphs away arrive too late to help the decision in front of the visitor.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the label in first person so it sounds like the visitor speaking.",
          "State the time or cost of the action to shrink the perceived risk.",
          "Support the button with a one-line reason placed right beside it.",
        ],
      },
    ],
  },
  {
    slug: "landing-form-field-friction",
    title: "Cutting Landing Page Form Friction Field by Field",
    excerpt:
      "Every form field costs signups, so each one has to earn its place. Reduce landing page form friction and your completion rate climbs without new traffic.",
    date: "2025-01-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Every field on a form costs you signups, so each one has to earn its place. Remove a field and you remove a small reason to quit, and the effect compounds across a long form.",
          "I cut a five-field signup down to two and watched completion jump without touching the headline or the offer. The form was doing the damage the whole time.",
        ],
      },
      {
        heading: "Count the real cost of a field",
        paragraphs: [
          "A field is not just a box. It is a decision, a piece of recall, and a small fear about how the data will be used. Those costs stack as the form gets longer.",
          "Ask what you actually need before the visitor can get value. If a field can wait until after signup, let it wait. Collecting later is cheaper than losing the click now.",
        ],
      },
      {
        heading: "Order fields from easy to hard",
        bullets: [
          "Start with the lightest ask, such as email, so the visitor commits before the effort grows.",
          "Put any sensitive or numeric field after the first easy one, once momentum exists.",
          "Label every field clearly and place the label above the box where eyes scan first.",
          "Show inline validation so errors appear beside the field instead of after a full reload.",
          "Keep error messages plain, since a confusing message adds a fresh reason to abandon.",
        ],
      },
      {
        quote:
          "People rarely quit a form because it is long. They quit because a single step felt unclear or unfair.",
      },
      {
        heading: "Explain why you are asking",
        paragraphs: [
          "A short note under an odd field removes suspicion. 'We ask for your role so we can send the right guide' turns a strange question into a benefit.",
          "Trust matters more on the fields that feel personal. A phone number with no explanation reads as a sales call waiting to happen.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Delete any field you can collect after the first conversion.",
          "Order questions from easy to hard so momentum builds through the form.",
          "Explain unusual fields to keep suspicion from turning into abandonment.",
        ],
      },
    ],
  },
  {
    slug: "landing-anchor-pricing-psychology",
    title: "Using Anchor Pricing Psychology on Landing Pages",
    excerpt:
      "Anchor pricing psychology works because the first number frames every number after it. Show a high reference first and your real price feels reasonable.",
    date: "2025-05-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Anchor pricing psychology works because the first number a visitor sees frames every number after it. Set a high reference point, then present your price against it, and the middle option starts to look sensible.",
          "This is why a crossed-out original price still moves people even when everyone knows the trick. The anchor does its work before the visitor has time to question it.",
        ],
      },
      {
        heading: "Lead with the reference, not the discount",
        paragraphs: [
          "A discount means nothing without something to discount from. Show the full value first, whether that is the annual rate or the cost of the problem, then reveal the price you want them to pick.",
          "The order matters more than the numbers. The same two prices can feel expensive or fair depending on which one the visitor reads first.",
        ],
      },
      {
        heading: "Design around three tiers",
        bullets: [
          "Place your target plan in the middle, where the eye lands after scanning the highest option.",
          "Give the top tier real value so it feels like a serious choice rather than a scarecrow.",
          "Labels like most popular guide attention to the plan you actually want to sell.",
          "Keep the price differences large enough to read at a glance on a phone.",
        ],
      },
      {
        quote:
          "A price is never judged alone. It is always judged against the number right before it.",
      },
      {
        heading: "Let the anchor stay honest",
        paragraphs: [
          "An inflated anchor that no one believes backfires, because visitors spot the fiction and discount everything you say next. Keep the reference grounded in a real comparison.",
          "If you sell a course, compare it to the cost of the mistake it prevents. That anchor is true, and true anchors survive scrutiny.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Show a real reference price before the price you want chosen.",
          "Put your target plan in the middle and mark it clearly.",
          "Keep anchors honest, since a fake one costs you trust on the next screen.",
        ],
      },
    ],
  },
  {
    slug: "landing-scarcity-urgency-ethics",
    title: "Scarcity and Urgency on Landing Pages, Done Honestly",
    excerpt:
      "Scarcity and urgency speed a decision only when they are true. Fake countdowns on a landing page teach visitors to distrust you, and trust is costly to rebuild.",
    date: "2025-09-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["conversion", "landing-page"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Scarcity and urgency push people to decide, but only when they are true. A fake countdown that resets on refresh teaches visitors to distrust your page, and trust is expensive to rebuild.",
          "I have watched a timer reset in front of me and closed the tab. The offer might have been good. The page told me it would lie to close me, so I believed it.",
        ],
      },
      {
        heading: "Use real limits",
        paragraphs: [
          "If seats, stock, or a cohort size is genuinely limited, say so and say why. A reason turns a limit from a trick into a fact the visitor can weigh.",
          "Real scarcity also ends. When the deadline passes, mark the offer closed instead of quietly extending it. Honesty here is what makes the next deadline believable.",
        ],
      },
      {
        heading: "Where urgency belongs",
        bullets: [
          "Near the button, so the reason to act sits with the action itself.",
          "Beside the price, where the cost of waiting is easiest to picture.",
          "In the confirmation step, to remind people without nagging them earlier.",
          "Never in a popup that interrupts the first ten seconds of reading.",
        ],
      },
      {
        quote:
          "Pressure that people can verify builds trust. Pressure they can smell builds suspicion.",
      },
      {
        heading: "Reward action without pressure",
        paragraphs: [
          "You can motivate the same click by rewarding speed instead of punishing delay. A bonus for early signups feels generous, while a penalty for being late feels manipulative.",
          "The difference is who keeps the risk. Generous urgency shares upside. Punishing urgency transfers anxiety, and visitors remember how a page made them feel.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Only use scarcity you can prove, with a reason the visitor can check.",
          "Place urgency next to the button rather than draping it over the whole page.",
          "Reward early action with a bonus instead of threatening a penalty.",
        ],
      },
    ],
  },
  {
    slug: "landing-trust-signals-above-fold",
    title: "Placing Trust Signals Above the Fold That Work",
    excerpt:
      "Trust signals above the fold answer the first silent question: is this safe. A badge or privacy line can hold attention long enough to read the offer.",
    date: "2026-01-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Trust signals above the fold answer the visitor's first silent question: is this safe. A clear privacy note or a recognizable client badge can hold attention long enough to read the offer.",
          "The fold is a gate. Visitors decide in seconds whether to scroll or leave, and a small proof of safety often decides the difference.",
        ],
      },
      {
        heading: "Pick signals your audience already believes",
        paragraphs: [
          "A logo your visitor does not recognize is decoration. A logo from a company they admire is a shortcut to credibility, because it borrows trust the visitor already holds.",
          "Ask what your specific audience trusts. A security badge matters to a finance buyer more than to a hobbyist, and the reverse applies to community awards.",
        ],
      },
      {
        heading: "Signals that carry weight",
        bullets: [
          "A named security or payment standard that your audience recognizes.",
          "A client logo from a company your visitor already respects.",
          "A plain privacy line that says what you do with an email address.",
          "A small real review count, since a number feels safer than an adjective.",
        ],
      },
      {
        quote:
          "Nobody buys something that feels unsafe. The fold is where safety gets established or lost.",
      },
      {
        heading: "Keep the proof specific",
        paragraphs: [
          "Vague trust language does nothing. 'Trusted by thousands' reads as filler, while 'used by 4,120 small studios' gives the eye a fact to rest on.",
          "Specific proof also invites the visitor to imagine themselves in the group. That small act of imagination is where interest starts to become intent.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Answer the safety question near the top, before the visitor decides to leave.",
          "Choose proof your audience already trusts rather than proof you find impressive.",
          "Replace vague trust claims with specific numbers and named sources.",
        ],
      },
    ],
  },
  {
    slug: "landing-color-contrast-cta",
    title: "Color and Contrast Choices That Guide the Click",
    excerpt:
      "Contrast, not color, steers the eye to a CTA. A bright landing page button disappears when everything around it is bright, so design the quiet instead.",
    date: "2026-04-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cta", "landing-page"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Contrast, not color, is what guides the eye to a button. A bright button disappears if everything around it is bright, and a dull one pops when the rest of the page stays quiet.",
          "I stopped chasing the perfect button color once I understood this. The winning move was dimming the section around the button, not picking a louder hue.",
        ],
      },
      {
        heading: "Spend contrast where the decision happens",
        paragraphs: [
          "Contrast is a budget. Every bold shape and saturated block spends some of it, so save the strongest contrast for the one element you want clicked.",
          "If three things on the screen fight for attention, the visitor hesitates. One loud element and a calm background gives the eye an obvious path.",
        ],
      },
      {
        heading: "Rules that hold up in testing",
        bullets: [
          "Keep one high-contrast action color and reserve it for buttons only.",
          "Let body text sit at comfortable contrast so it stays readable without shouting.",
          "Avoid using your action color for decoration, since it dilutes the signal.",
          "Check the button against the background on a phone in daylight, where contrast often fails.",
        ],
      },
      {
        quote:
          "The button does not have to be bright. It only has to be the brightest thing where it sits.",
      },
      {
        heading: "Check accessibility as you go",
        paragraphs: [
          "Contrast that guides the eye also has to be readable for everyone. Low-contrast text pushes some visitors away and buries the very action you want them to take.",
          "Test your color pairings against a contrast checker and keep text legible at small sizes. Guidance that excludes part of your audience is not guidance at all.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Guide the eye with contrast rather than chasing a trendy button color.",
          "Reserve one strong action color for buttons so it stays meaningful.",
          "Verify contrast on real screens, not just in the design file.",
        ],
      },
    ],
  },
  {
    slug: "landing-risk-reversal-guarantees",
    title: "Risk Reversal and Guarantees on Landing Pages",
    excerpt:
      "Risk reversal moves the fear of loss from the visitor to you. A clear guarantee removes the last excuse to wait, and waiting is the enemy of conversion.",
    date: "2026-07-06",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Risk reversal moves the fear of loss off the visitor and onto you. A clear refund promise or trial period removes the last excuse to wait, and waiting is the quiet enemy of conversion.",
          "Most people are not deciding between yes and no. They are deciding between yes and later, and later rarely comes back.",
        ],
      },
      {
        heading: "Name the risk you are removing",
        paragraphs: [
          "A guarantee only works when it targets a real fear. Money-back promises address the fear of paying for nothing. Free trials address the fear of wasted time and setup.",
          "If you know the objection, address it in the wording. 'Cancel anytime in one click' speaks to a cancellation fear that a generic guarantee never touches.",
        ],
      },
      {
        heading: "Guarantees that reassure",
        bullets: [
          "A specific refund window, since a vague promise feels weaker than a named one.",
          "A plain statement of what the visitor must do to claim it.",
          "A visible link to the terms, because buried conditions read as a trap.",
          "A short reason the guarantee is safe for you, which makes it feel real.",
        ],
      },
      {
        quote:
          "A guarantee is not charity. It is a signal that you expect the offer to work.",
      },
      {
        heading: "Make the terms easy to find",
        paragraphs: [
          "A guarantee hidden in the footer does not lower risk, because the visitor never reads it. Put the promise where the decision happens, next to the button and the price.",
          "When the terms are simple enough to state in one line, the visitor trusts them more. Complexity reads as a way to avoid paying up.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Target the exact fear the visitor holds, not risk in general.",
          "State the guarantee plainly and place it beside the action.",
          "Keep terms short and visible so the promise feels reliable.",
        ],
      },
    ],
  },
  {
    slug: "landing-cognitive-load-simplification",
    title: "How to Reduce Cognitive Load on a Landing Page",
    excerpt:
      "Cognitive load is the mental work a landing page demands before anyone can act. Cut the choices and the words, and conversion rises without a new offer.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "Cognitive load is the mental work a page demands before the visitor can act. Every extra choice, column, and word adds a little weight, and most pages carry far more than they need.",
          "The fix is rarely a new offer. It is a shorter page that asks for one clear action and gets out of the way.",
        ],
      },
      {
        heading: "Cut decisions to a single path",
        paragraphs: [
          "When a page offers several next steps, the visitor has to rank them before choosing. That ranking is work, and work slows the click.",
          "Pick one primary action and let everything else step back. A secondary link is fine, but it should not compete for the same attention as the main button.",
        ],
      },
      {
        heading: "Sources of load to remove",
        bullets: [
          "Jargon that forces the visitor to translate a sentence before they can judge it.",
          "Decorative animation that pulls the eye away from the offer.",
          "Duplicate calls to action that make the next step ambiguous.",
          "Long paragraphs where a short one and a list would read faster.",
        ],
      },
      {
        quote:
          "Clarity is not dumbing down. It is removing the friction between a good offer and the person who needs it.",
      },
      {
        heading: "Let white space do the work",
        paragraphs: [
          "Space around an element tells the eye that it matters. Crowding every corner with content makes each piece harder to find and easier to skip.",
          "Break the page into short sections with one idea each. A reader who can skim and still understand the offer is a reader who can decide.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reduce every section to one idea and one next step.",
          "Strip jargon and decoration that add work without adding meaning.",
          "Use spacing to signal importance instead of filling every corner.",
        ],
      },
    ],
  },
];
