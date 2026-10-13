import {
  BarChart3,
  Clock,
  Compass,
  Layers,
  Repeat,
  Rocket,
  Search,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch81: BlogPost[] = [
  {
    slug: "landing-ab-testing-basics",
    title: "A/B Testing Basics for Landing Pages That Convert",
    excerpt:
      "A/B testing on a landing page means changing one element at a time and measuring which version moves more real visitors to act, not which looks nicer.",
    date: "2024-02-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "An A/B test on a landing page changes one element and measures whether the new version moves more visitors to act. It is the only honest way to know if a headline, a button, or a form actually helps, because memory and taste are terrible judges.",
          "Most teams argue about design in a meeting and crown a winner by whoever talks loudest. A test replaces that argument with a number, and the number does not care how long you worked on the layout.",
        ],
      },
      {
        heading: "What a test can and cannot tell you",
        paragraphs: [
          "A clean test answers a narrow question. Did this button label earn more clicks than that one, for this audience, on this page. It does not tell you why, and it does not promise the same result on a different page.",
          "Treat each result as local knowledge. The lesson from your pricing section may not transfer to your newsletter signup. Small, repeated experiments teach you your own audience far faster than any blog post about best practices.",
        ],
      },
      {
        quote:
          "An A/B test does not tell you what is beautiful. It tells you what a real visitor did when you gave them a choice.",
      },
      {
        heading: "Setting up a test that means something",
        bullets: [
          "Change one element, or one tightly related cluster, so you know what caused the shift.",
          "Decide the goal before you launch, whether that is clicks, signups, or completed checkouts.",
          "Send traffic to both versions at the same time, not one this week and one next week.",
          "Write down the prediction, so you can be wrong on record instead of rewriting history later.",
        ],
      },
      {
        heading: "The mistakes that waste a test",
        paragraphs: [
          "Stopping the moment one version jumps ahead is the fastest way to fool yourself. Early leads are noisy, and the loser often catches up by the end of the run. Pick a sample size and a duration in advance, then let it finish.",
          "Another quiet killer is testing two changes at once. If the new headline and the new button both ship together, a win tells you nothing about which one did the work, and a loss leaves you with no idea what to fix.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A/B tests turn design arguments into measured decisions.",
          "Test one thing at a time so the result has a clear cause.",
          "Lock the goal and the sample size before the test starts.",
          "Treat every result as local, not universal.",
          "Let a test finish instead of reacting to an early lead.",
        ],
      },
    ],
  },
  {
    slug: "landing-testing-sample-size",
    title: "How Much Traffic a Landing Page Test Really Needs",
    excerpt:
      "Sample size decides whether a landing page test means anything. Run it too short and you chase noise instead of the real effect your change has on signups.",
    date: "2024-05-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "A landing page test needs enough visitors for the difference you expect to rise above random noise. Before you launch, estimate how many people must see each version, then refuse to peek early.",
          "This step feels like homework, and that is exactly why teams skip it. Skipping it is how a two day test produces a confident decision that a real sample would have overturned.",
        ],
      },
      {
        heading: "Why small samples lie",
        paragraphs: [
          "Random chance creates swings. Ten visitors might give one version a big lead that vanishes at a thousand. The smaller the sample, the wider the range of outcomes that pure luck can produce.",
          "A rule of thumb holds up well: the smaller the effect you want to detect, the more traffic you need. Catching a two percent lift demands far more visitors than catching a twenty percent jump.",
        ],
      },
      {
        heading: "Rough math you can do on a napkin",
        bullets: [
          "Baseline conversion rate: know where you start before you compare anything.",
          "Smallest lift worth chasing: decide what gain would actually change your business.",
          "Expected traffic per week: divide the needed sample by your weekly volume to see the real timeline.",
          "One version per test: extra arms split your traffic and slow every result.",
        ],
      },
      {
        quote:
          "Ten visitors can crown a winner that a thousand will dethrone. Patience is part of the method, not a virtue on the side.",
      },
      {
        heading: "When you simply do not have the traffic",
        paragraphs: [
          "If your sample would take six months, a strict A/B test is the wrong tool. You will lose interest long before you learn anything. In that case test bolder changes that should produce large swings, or compare whole pages rather than single buttons.",
          "You can also lean on qualitative signals. Watch five session recordings, read the exit surveys, and talk to customers. Those will not prove a lift, but they generate better guesses for the one test you can afford to run.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Estimate the required sample before you launch.",
          "Smaller expected lifts need more traffic to prove.",
          "Bold changes need fewer visitors to show a clear effect.",
          "With low traffic, watch recordings and run bigger swings.",
          "Never call a winner from an early lead.",
        ],
      },
    ],
  },
  {
    slug: "landing-multivariate-testing",
    title: "Multivariate Tests on a Landing Page, Explained",
    excerpt:
      "A multivariate test on a landing page changes several elements at once to find which combination wins. It answers more, but it costs far more traffic.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A multivariate test on a landing page changes several elements at once to learn which combination performs best. Where an A/B test compares two versions, a multivariate test compares many.",
          "Say you have two headlines and two button colors. A multivariate test runs all four pairings and reports not just the best headline but the best pairing. That extra detail is the whole point.",
        ],
      },
      {
        heading: "The cost of testing combinations",
        paragraphs: [
          "Every added variation multiplies the traffic you need. Two elements with two options each is four versions. Three elements with three options each is twenty seven. The math turns brutal fast.",
          "To keep the sample manageable, test few elements with few options. Two or three factors with two options each is usually as far as a normal site can push before the timeline becomes absurd.",
        ],
      },
      {
        quote:
          "A multivariate test trades traffic for detail. If you lack the visitors, the detail never arrives.",
      },
      {
        heading: "When it earns its keep",
        bullets: [
          "You have high traffic and a page that already converts, so small gains matter.",
          "You suspect the elements interact, such as a headline that only works with one image.",
          "You can wait weeks for a verdict without stalling the rest of your roadmap.",
          "You have the tooling to run and read a factorial test correctly.",
        ],
      },
      {
        heading: "Interactions are the real prize",
        paragraphs: [
          "The interesting result is rarely a single winning element. It is the discovery that a headline lifts clicks on its own but drags them down when paired with a specific image. Those interactions stay invisible to a series of single element tests.",
          "Hunt for the combination, not just the strongest part. A modest headline with a well matched image can beat a great headline paired with the wrong one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Multivariate tests compare combinations, not single changes.",
          "Traffic needs grow with every added variation, often steeply.",
          "Limit factors and options or the timeline becomes unreasonable.",
          "The best insight is often how elements interact.",
          "Use it when traffic is high and small gains matter.",
        ],
      },
    ],
  },
  {
    slug: "landing-one-variable-at-a-time",
    title: "Test One Thing at a Time on Your Landing Page",
    excerpt:
      "Testing one thing at a time on a landing page keeps your results readable. Bundle three changes and a win or loss tells you nothing about what to keep.",
    date: "2024-12-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Testing one thing at a time on a landing page keeps every result readable. When one variable moves, you know what caused the shift and what to do with it.",
          "Full redesigns that change everything at once feel productive in a meeting. They are a trap, because a jump in conversion could come from any of six edits and you will never know which.",
        ],
      },
      {
        heading: "The clean test rule",
        paragraphs: [
          "Change a single element, hold everything else steady, and compare. If the new version wins, you keep the change with confidence. If it loses, you revert one line instead of undoing a whole redesign.",
          "There is one exception. A cluster of changes that only makes sense together, like a new offer plus the button that names it, can ship as a unit. Just name the cluster as your single hypothesis so the result stays interpretable.",
        ],
      },
      {
        quote:
          "If you cannot name the one thing you changed, you cannot learn the one thing it taught you.",
      },
      {
        heading: "Why bundles tempt us",
        bullets: [
          "A full refresh feels faster than six small tests in a row.",
          "One designer owns several ideas and wants to see them all live.",
          "Deadlines push teams to bundle instead of sequence.",
          "Stakeholders want visible change, even when it muddies the data.",
        ],
      },
      {
        heading: "Sequencing without losing momentum",
        paragraphs: [
          "Small tests can still ship quickly when you run them back to back. Each winner compounds. A string of five single element wins can grow a page more than one dramatic redesign, and every step stays explainable.",
          "Keep a running list of hypotheses and test them in order of expected impact. This gives you a steady cadence and a clean log of what worked, which becomes your playbook for the next project.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Single variable tests give results you can act on.",
          "Bundles hide the cause of any change in conversion.",
          "Name a cluster as one hypothesis if it must ship together.",
          "Sequence small tests to keep momentum and compound wins.",
          "Keep an ordered list of hypotheses as your playbook.",
        ],
      },
    ],
  },
  {
    slug: "landing-learning-from-losing-tests",
    title: "What to Do After Your Landing Page Test Loses",
    excerpt:
      "A losing landing page test is data, not a failure. The useful move is to ask why the winner won and turn that answer into the next test you run.",
    date: "2025-03-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A losing landing page test is data, not a verdict on your work. The version you preferred lost, and that is exactly the kind of news that moves a page forward.",
          "The lazy response is to shrug and try something random. The better response is to ask what the result implies and design the next test from that question.",
        ],
      },
      {
        heading: "Mine the loss for a reason",
        paragraphs: [
          "A loss points at something real about your visitors, even if it does not say what. Maybe the shorter headline lost because the longer one named a benefit people needed to hear. Maybe the plain button lost because the vague one felt lower risk.",
          "Write two or three plausible explanations, then rank them by how easily you can test each. The next test should separate the leading theories rather than guess again.",
        ],
      },
      {
        quote:
          "A test that loses still paid you. It bought you a sharper question for the next round.",
      },
      {
        heading: "Turning a loss into the next test",
        bullets: [
          "Restate the losing idea in a new form to see if the concept or the wording fell flat.",
          "Test the opposite of the winner to check whether the effect is real or a fluke.",
          "Isolate a sub group, such as mobile visitors, and see if the loss hides behind a segment.",
          "Log the result with the date and the exact change, so the lesson survives staff turnover.",
        ],
      },
      {
        heading: "Do not overcorrect",
        paragraphs: [
          "One loss is a single data point. Rebuilding the whole page around it usually overreacts. Change the part the test covered and leave the rest alone.",
          "Also resist the urge to rerun the same test hoping for a different result. If the sample was clean, believe it. Spend your traffic on a new question instead.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A loss is a result, not a failure.",
          "Generate reasons for the loss and test them.",
          "Isolate segments before you trust a broad conclusion.",
          "Log every test so lessons outlast the team.",
          "Fix only the tested area, not the entire page.",
        ],
      },
    ],
  },
  {
    slug: "landing-testing-low-traffic",
    title: "How to Run Landing Page Tests With Low Traffic",
    excerpt:
      "Low traffic does not ban a landing page test. It changes the method. You make bolder bets, watch more sessions, and stop chasing tiny lifts.",
    date: "2025-06-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Low traffic does not ban landing page tests. It changes the method, pushing you toward bigger swings and more qualitative evidence instead of tiny button tweaks.",
          "A site with two hundred visitors a week cannot detect a two percent lift in any reasonable time. Pretending otherwise wastes months on a test that never reaches a verdict.",
        ],
      },
      {
        heading: "Bet on changes that move the needle fast",
        paragraphs: [
          "When traffic is scarce, only chase changes that should produce a large effect. A new offer, a clearer value proposition, or a radically different page can swing conversion enough to show up in a small sample.",
          "Skip the fine tuning. Button colors and micro copy tweaks need volume you do not have. Save them for a day when you do.",
        ],
      },
      {
        heading: "Cheap ways to learn without volume",
        bullets: [
          "Watch five to ten session recordings and note where attention stalls.",
          "Run a short exit survey that asks what stopped the visitor.",
          "Message ten people who bounced and ask one honest question.",
          "Compare your page against a competitor and list what theirs answers that yours does not.",
        ],
      },
      {
        quote:
          "With little traffic, your eyes and your customers are faster than a test that would take a year to finish.",
      },
      {
        heading: "If you still want a number",
        paragraphs: [
          "One workaround is to test whole pages rather than elements. Comparing two complete versions creates a bigger expected gap, so a smaller sample can still show a signal. It will not be statistically pure, but it is a reasonable guess.",
          "Another is to pool traffic across a campaign. If five similar landing pages can share one change, the combined sample may get you to a verdict. Keep the pages similar enough that the comparison stays fair.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Low traffic favors bold changes over small tweaks.",
          "Use recordings, surveys, and customer chats for signals.",
          "Test whole pages to widen the expected gap.",
          "Pool traffic across similar pages when you can.",
          "Accept that some micro tests must wait.",
        ],
      },
    ],
  },
  {
    slug: "landing-testing-hypotheses",
    title: "How to Write a Strong Landing Page Hypothesis",
    excerpt:
      "A landing page test hypothesis states what you expect to change and why. A sharp one makes the result easy to read; a vague one leaves you guessing.",
    date: "2025-10-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A landing page test hypothesis states what you expect to change and why you expect it. It turns a hunch into a claim you can check and then improve.",
          "Without a written hypothesis, a test becomes a coin flip with extra steps. You see a number move and have no idea whether it confirms anything you believed going in.",
        ],
      },
      {
        heading: "The shape of a good hypothesis",
        paragraphs: [
          "A useful hypothesis names the element, the change, the expected effect, and the reason. It reads like this: because visitors worry about setup time, adding a thirty second setup line under the button will lift trial signups.",
          "That sentence does three jobs. It decides what to build, predicts the direction, and gives you a reason to evaluate, so a surprise result actually means something afterward.",
        ],
      },
      {
        quote:
          "A hypothesis without a reason is a guess. A guess without a prediction cannot teach you anything when it fails.",
      },
      {
        heading: "Bad hypotheses and their problems",
        bullets: [
          "Too vague: we should make the page better. There is nothing to test here.",
          "Too broad: people will like the redesign. You changed ten things and proved nothing.",
          "No prediction: let us see what happens. You cannot be right or wrong.",
          "Reason missing: the button should be green. You learn a color, not a customer truth.",
        ],
      },
      {
        heading: "Where hypotheses come from",
        paragraphs: [
          "Strong hypotheses come from watching real behavior. A pile of support tickets about pricing becomes a hypothesis about an unclear value section. A drop off at the form becomes one about field count.",
          "Keep a running list. When a customer says something twice, it usually deserves a test. Over time that list becomes a documented model of what your audience actually cares about.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "State the change, the expected effect, and the reason.",
          "Predict the direction so the result can confirm or deny.",
          "Reject vague or multi change hypotheses.",
          "Source hypotheses from tickets, drop offs, and customer words.",
          "Keep a running list and test it in order.",
        ],
      },
    ],
  },
  {
    slug: "landing-shipping-test-winners",
    title: "How to Ship the Winning Landing Page Variation",
    excerpt:
      "Shipping the winner is not the finish line on a landing page. You still have to make it permanent, watch it hold, and fold what you learned into the next test.",
    date: "2026-01-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Shipping the winner means replacing the losing version on the live page, not just celebrating a chart. A test only pays off when the better version becomes the default.",
          "Too many teams run a test, note the result, and quietly leave the old page up because the change is buried in a backlog. The lift evaporates and the work was wasted.",
        ],
      },
      {
        heading: "Make the win permanent",
        paragraphs: [
          "Move the winning version into the real codebase and remove the experiment flag. If the test lived in a tool overlay, port the change so it survives a redesign or a migration.",
          "Verify the change on production with fresh eyes. Check mobile, slow connections, and the logged out state, because test versions often skip edge cases that live pages cannot.",
        ],
      },
      {
        quote:
          "A test result is a promise. Shipping the winner is the only way that promise reaches a customer.",
      },
      {
        heading: "Watch it hold after launch",
        bullets: [
          "Track the metric for two weeks to catch a novelty bump that fades.",
          "Check that the lift did not simply move the problem elsewhere, such as form fills dropping after signups rise.",
          "Confirm the losing version is fully gone from every traffic source.",
          "Tell the team what shipped and what it was worth, so the win stays visible.",
        ],
      },
      {
        heading: "Retire the experiment and log the lesson",
        paragraphs: [
          "Close the test in your tool and archive the details. A running experiment that nobody stops becomes clutter, and its data drifts as the page changes around it.",
          "Write one line about what the result means for your model of the visitor. Over a year, those lines become a guide that tells new teammates what your audience responds to, before they run a single test.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Move the winner into production and delete the flag.",
          "Verify the change across devices and edge cases.",
          "Watch the metric for two weeks to rule out novelty.",
          "Close and archive the finished experiment.",
          "Log the lesson so it guides future work.",
        ],
      },
    ],
  },
  {
    slug: "landing-test-duration-mistakes",
    title: "How Long Should You Run a Landing Page Test For",
    excerpt:
      "Test duration decides when a landing page result is real. Stop too early and noise wins; run too long and other changes corrupt the comparison.",
    date: "2026-04-21",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Test duration decides whether a landing page result is real. Stop too early and randomness looks like a winner; run too long and outside changes muddy the comparison.",
          "Most guides say run for two weeks. That number is not magic. The right length depends on your traffic, the size of the effect you expect, and the rhythms of your audience.",
        ],
      },
      {
        heading: "Why two weeks is a rough default",
        paragraphs: [
          "A full week matters because weekday and weekend behavior differ. A test that runs Monday to Friday may show a lift that vanishes when casual weekend visitors show up on Saturday.",
          "Two weeks covers two of each day type, smoothing out daily swings. But it is only a floor. If your sample is small, you may need far longer to reach a verdict.",
        ],
      },
      {
        heading: "Signs a test ran the wrong length",
        bullets: [
          "You called it on day two because one version jumped ahead.",
          "You let it run for months while the page around it kept changing.",
          "The sample is tiny but the numbers look decisive, which usually means luck.",
          "You never set a stopping rule, so the test ends whenever someone remembers it.",
        ],
      },
      {
        quote:
          "A test with no planned end does not measure your page. It measures how long your team stayed interested.",
      },
      {
        heading: "Set the duration before you start",
        paragraphs: [
          "Decide the sample size and the end date in advance, then do not touch the dial until both arrive. This removes the temptation to stop at the first good news, which is the most common way teams fool themselves.",
          "If a genuine emergency forces an early stop, label the result as inconclusive rather than calling a winner. An early peek can inform a hunch, but it should not set your default page.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Two weeks is a floor, not a rule.",
          "Cover a whole number of weeks to balance weekdays and weekends.",
          "Set the sample and end date before launch.",
          "Treat early stops as inconclusive, not final.",
          "Do not extend a test while changing the page.",
        ],
      },
    ],
  },
  {
    slug: "landing-iteration-cadence",
    title: "Building a Steady Landing Page Iteration Rhythm",
    excerpt:
      "A landing page gets better through a steady iteration rhythm, not one big redesign. Small tests on a fixed cadence compound into real conversion gains.",
    date: "2026-09-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["landing-page", "conversion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "A landing page improves through a steady iteration rhythm, not one dramatic redesign. Regular small tests compound, and the gains add up in ways a single overhaul rarely matches.",
          "A rhythm also beats bursts. A feverish week of testing followed by three quiet months produces one shaky result and no learning. A modest weekly habit produces a year of it.",
        ],
      },
      {
        heading: "Pick a cadence you can keep",
        paragraphs: [
          "Choose a pace your team can hold without strain. One test every two weeks is plenty for most small teams. The point is repeatability, not speed, because a cadence you abandon teaches nothing.",
          "Anchor the rhythm to a fixed ritual: review last week's result, pick this week's hypothesis, ship the change. Same slot, same steps, every cycle.",
        ],
      },
      {
        quote:
          "Consistency beats intensity. A slow test every two weeks will outrun a burst you cannot sustain.",
      },
      {
        heading: "What a healthy cycle looks like",
        bullets: [
          "Review the last result and decide what it means for the model of your visitor.",
          "Choose the next hypothesis from your running list, ranked by expected impact.",
          "Ship one change and set the sample and end date before it goes live.",
          "Archive the finished test with one line about the lesson.",
        ],
      },
      {
        heading: "Keeping the loop honest over time",
        paragraphs: [
          "Over many cycles, guard against drift. If the same person always picks the hypothesis, blind spots pile up. Rotate who proposes tests, and revisit old assumptions when the product or the audience shifts.",
          "Also revisit shipped winners once a year. A page that won two years ago may not fit today's visitors. The rhythm never really ends, because a landing page is never finished, only current.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set a cadence you can sustain, not the fastest one.",
          "Use a fixed ritual for review, hypothesis, and ship.",
          "Rate hypotheses by expected impact.",
          "Rotate who proposes tests to avoid blind spots.",
          "Recheck old winners when the audience changes.",
        ],
      },
    ],
  },
];
