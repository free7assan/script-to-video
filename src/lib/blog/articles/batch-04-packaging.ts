import { Target, Layers, MessageSquare, Compass, Activity, Type, Users, TrendingUp, Search, PenLine } from "lucide-react";
import type { BlogPost } from "../types";

export const batch04: BlogPost[] = [
  {
    slug: "packaging-title-formulas-that-hold-up",
    title: "Title Formulas That Hold Up After the Novelty Wears Off",
    excerpt:
      "A formula is only useful if it keeps working once the pattern is familiar. These title shapes survive repetition, and these quietly fall apart.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "titles", "ctr"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Most title advice is written about the first impression. A formula gets tested once, the video does well, and everyone declares it a winner. That is not a test. That is a coincidence with good timing.",
          "The real question is whether a title shape still works on your twentieth use, when the audience has seen the pattern often enough to guess the second half. A formula that only works while it feels novel is not a formula. It is a one-trick thumbnail with words attached.",
        ],
      },
      {
        paragraphs: [],
        quote: "A title formula is only proven when it survives the audience recognizing it.",
      },
      {
        heading: "The shapes that keep their edge",
        bullets: [
          "The named outcome. State the specific result the viewer gets, then withhold the method: 'How I cut editing time from 9 hours to 40 minutes.' The method is the video; the outcome is the title.",
          "The numbered inventory. Numbers set expectations for scope and pace, and they age well because they promise structure rather than novelty: '7 title mistakes that quietly kill CTR.'",
          "The reversal. Name a belief the viewer holds, then signal you are about to argue against it: 'Posting more is why your channel stalled.' These stay interesting because the audience knows the claim is contested.",
          "The direct address. Speak to one person in one situation: 'If your thumbnails look fine but underperform, this is for you.' It filters hard, and the filter is the point.",
        ],
        paragraphs: [
          "None of these depend on a fresh gimmick. They depend on information architecture: outcome, scope, tension, or fit. Those four ideas have been in circulation for a century of print headlines, which is exactly why they can be reused without rotting.",
        ],
      },
      {
        heading: "Where formulas go stale",
        paragraphs: [
          "The shapes above fail when you fill them with nothing. '7 amazing title tricks' uses the numbered inventory and says nothing. The structure is sound; the content is hollow. Viewers have learned to smell that, and the click rate drops even though the title looks correct.",
          "A second failure mode is overfitting to your own catalog. If your last three hits all used the reversal shape, you will keep reaching for it, and the audience will start to feel the seams. Rotate shapes on purpose instead of letting the last winner pick for you.",
        ],
      },
      {
        heading: "Test the shape, not the sentence",
        bullets: [
          "Write three titles that use the same shape with different wording. If all three flop, the shape is the problem, not the phrasing.",
          "Write three titles that use different shapes for the same video. If one shape wins across topics, you have found something durable.",
          "Revisit older titles six months later. A shape that still reads as interesting with fresh eyes is worth keeping in rotation.",
        ],
        paragraphs: [
          "This is the honest version of testing. You are not hunting for a magic sentence. You are learning which structures your audience rewards once they are no longer surprised.",
        ],
      },
      {
        paragraphs: [
          "Keep a running file of the titles that earned the click and the ones that did not. After thirty entries the patterns stop being opinions. They become the vocabulary you write every future title from.",
        ],
      },
    ],
  },
  {
    slug: "packaging-thumbnail-composition-at-feed-size",
    title: "Thumbnail Composition at Feed Size, Not Full Screen",
    excerpt:
      "You design on a big monitor, then the thumbnail renders the size of a postage stamp. That gap is where most click-through quietly dies.",
    date: "2024-06-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "thumbnails", "ctr"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "You design a thumbnail on a 27-inch monitor, then it renders the size of a postage stamp in a feed. That gap is where most thumbnails quietly fail. The detail you spent an hour on is invisible, and the part you ignored is the only thing anyone sees.",
          "I keep two versions of every thumbnail open while I work: the full-size canvas and a 320-pixel-wide preview. The preview is the honest one. If the idea does not read there, the full-size version is a nice painting and nothing more.",
        ],
      },
      {
        heading: "Design the silhouette first",
        paragraphs: [
          "At feed size, viewers process shape before they process anything else. A strong thumbnail has a silhouette you could recognize from across the room: a face turned at an angle, a bold object, a clean split between two colors. Build that silhouette before you place a single word.",
          "If you squint at your thumbnail and the main subject blurs into the background, the contrast is too low. Fatten the subject, darken the backdrop, or crop tighter. Composition at this size is mostly a contrast problem pretending to be an art problem.",
        ],
      },
      {
        heading: "The feed-size checklist",
        bullets: [
          "Shrink the canvas to 320 pixels wide and glance for one second. Can you name the subject? If not, crop closer.",
          "Check that no more than one face and one focal object compete for the eye. Two heroes means no hero.",
          "Confirm the busiest detail sits at least 200 pixels from the frame edges, where platform UI can crop or cover it.",
          "Place the thumbnail next to four others from your niche. Does yours win on contrast, or blend into the same palette?",
        ],
      },
      {
        paragraphs: [],
        quote: "A thumbnail is not a poster. It is a billboard seen from a moving car.",
      },
      {
        heading: "Why symmetry keeps losing",
        paragraphs: [
          "Perfectly centered subjects feel calm and calibrated on a big screen, and anonymous in a feed. A slight asymmetry, the subject pushed off-center with breathing room toward the text, gives the eye a path to travel. That path is what makes a thumbnail feel alive at small sizes.",
          "This is not a rule about off-center composition for its own sake. It is about leaving an obvious entry point. If the viewer's eye does not know where to land first, it lands nowhere and keeps scrolling.",
        ],
      },
      {
        heading: "Work at the size that matters",
        paragraphs: [
          "Zoom out until your thumbnail is the size it will actually be consumed, then never make a decision above that size. If it works small, it will work big. The reverse is not true, and that asymmetry is why so many polished thumbnails underperform.",
        ],
      },
    ],
  },
  {
    slug: "packaging-click-as-a-contract",
    title: "The Click Is a Contract You Have to Honor Every Time",
    excerpt:
      "A click is a wager, not a compliment. The viewer bought a specific promise, and the first minute decides whether you kept it.",
    date: "2024-10-21",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["ctr", "packaging", "titles"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A click is not a vote of confidence. It is a small wager. The viewer hands over a few seconds of attention on the bet that the video delivers the exact thing the title and thumbnail implied. Your job is to settle that bet, not to move the goalposts.",
          "Most retention problems are actually contract disputes. The video opened, the viewer realized the promise was different from what they bought, and they left. The graph shows a cliff; the cause is the fine print.",
        ],
      },
      {
        paragraphs: [],
        quote: "A click is a promise with a timestamp. You have about twenty seconds to prove you meant it.",
      },
      {
        heading: "What the viewer thinks they bought",
        paragraphs: [
          "When someone clicks a title like 'Why your first 100 videos feel invisible,' they are buying a specific explanation, not a general pep talk. They will tolerate a slow intro. They will not tolerate discovering the video is really about mindset.",
          "The thumbnail sets the emotional tone and the title sets the topic. If those two disagree, the viewer reconciles them by trusting neither. Match the tone of the image to the claim of the words before you publish.",
        ],
      },
      {
        heading: "Honoring the contract in the first minute",
        bullets: [
          "Restate the promise in your own words within the first sentence. It confirms the viewer is in the right place.",
          "Show the payoff's shape early, even if you withhold the payoff itself. 'Here is the framework, and in a minute I will show why step two breaks for most people.'",
          "Avoid the bait-and-switch where the title promises one thing and the video delivers a related but different one. That trade wins a click and loses a subscriber.",
          "If you must narrow the topic mid-video, say so out loud. 'This is really about X, and here is why that matters.' Honesty keeps the wager alive.",
        ],
      },
      {
        heading: "When breaking the contract is the whole point",
        paragraphs: [
          "Some of the best videos misdirect on purpose. The trick is that the reversal has to pay off immediately and generously. A cold open that pretends to be about one thing and reveals a better thing in fifteen seconds is a gift. The same move stretched over four minutes is a betrayal.",
          "The difference is timing and generosity. You can break the expectation. You cannot break the value. Viewers forgive a surprise. They do not forgive a bait.",
        ],
      },
      {
        paragraphs: [
          "Before you schedule a video, read the title, then watch the first thirty seconds as if you were a stranger who only had that title to go on. If you would feel misled, fix the edit or fix the title. The contract has to hold.",
        ],
      },
    ],
  },
  {
    slug: "packaging-curiosity-versus-clickbait",
    title: "Curiosity Versus Clickbait: Where the Line Actually Is",
    excerpt:
      "Everyone agrees clickbait is bad and curiosity is good, and nobody agrees on which is which. Here is the test that settles it.",
    date: "2025-01-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["ctr", "titles", "packaging"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Everyone agrees clickbait is bad and curiosity is good, and nobody agrees on which is which. The distinction is not about enthusiasm or even exaggeration. It is about whether the video can actually pay off the gap the title opens.",
          "Here is the test I use. A curious title creates a question the video answers. A clickbait title creates a question the video answers with a shrug. Same hook on the surface, completely different debt.",
        ],
      },
      {
        heading: "Signs a title is curiosity, not bait",
        bullets: [
          "The promise is specific enough to be falsifiable. 'The 4-minute rule I use before every upload' can be delivered. 'The secret nobody tells you' cannot.",
          "The gap is honest about scale. If the answer is small, the title does not pretend it is enormous.",
          "The video delivers more than the title implied, not less. The surplus is what turns a click into trust.",
          "The title survives being paraphrased out loud to a friend without sounding like an ad.",
        ],
      },
      {
        paragraphs: [],
        quote: "Clickbait borrows attention against a loan the video never repays.",
      },
      {
        heading: "The exaggeration gradient",
        paragraphs: [
          "Between pure curiosity and outright bait there is a long gradient, and most creators live somewhere on it. 'This changed my life' sits near one end. 'Here is the exact change I made, and the two weeks it took to notice' sits near the other. Both use stakes; only one hands over the goods.",
          "My rule is that you can raise the stakes as high as you can pay. Oversell the emotion and undersell the content, and the click rate looks great for a week while your returning-viewer rate quietly drops. The metric that punishes bait is not CTR. It is the number of people who come back.",
        ],
      },
      {
        heading: "Why bait feels tempting anyway",
        paragraphs: [
          "Bait works on the algorithm in the short term because it works on the human in the short term. A vague, dramatic title catches the eye at exactly the moment attention is cheapest. The cost shows up later, in the comments, in retention, in the slow erosion of a channel's reputation.",
          "Channels rarely die from one bait video. They die from the audience learning, over months, that this channel's titles cannot be trusted. Trust is the slowest asset to build and the fastest to spend.",
        ],
      },
      {
        paragraphs: [
          "Write the title, then ask what the video actually hands over. If the answer is smaller than the title suggests, you do not have a curiosity gap. You have a debt, and you are about to pay it with your reputation.",
        ],
      },
    ],
  },
  {
    slug: "packaging-a-b-testing-titles-honestly",
    title: "A/B Testing Titles Without Fooling Yourself Into False Wins",
    excerpt:
      "A 12-click difference is not a discovery. Here is how to test titles on a small channel without handing your decisions to noise.",
    date: "2025-04-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["titles", "ctr", "packaging"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "A/B testing a title sounds scientific until you try it on a channel with 4,000 subscribers and get a result that means nothing. Small samples lie, and they lie most convincingly when you want to believe them.",
          "You can still learn from title tests. You just have to be honest about what a test at your scale can and cannot prove. Here is how I run them without pretending a 12-click difference is a discovery.",
        ],
      },
      {
        heading: "The math nobody wants to hear",
        paragraphs: [
          "If your video gets 2,000 impressions and a 4 percent CTR, that is 80 clicks. Swapping the title to reach 5 percent adds 20. That difference is inside the daily noise of most channels. Calling it a winner is astrology with a spreadsheet.",
          "At that scale you cannot test single titles. You can only test batches of ideas. Run the same shape of title across five videos and compare it against a different shape across five others. Trends show up in groups, not in pairs.",
        ],
      },
      {
        paragraphs: [],
        quote: "A single title test on a small channel is not data. It is a mood.",
      },
      {
        heading: "How to run tests that survive scrutiny",
        bullets: [
          "Change one thing per test. If you swap the thumbnail and the title together, you learn nothing about either.",
          "Let a test run until impressions stop climbing, not for a fixed 24 hours. Early CTR is skewed by your most loyal viewers.",
          "Write down the hypothesis before you look at the result. Post-hoc explanations are how every result becomes a win.",
          "Track retention and returning viewers, not just CTR. A title that wins clicks and loses watch time is not a winner.",
        ],
      },
      {
        heading: "The one test that always works",
        paragraphs: [
          "The most useful test does not involve the algorithm at all. Show two titles to ten people who fit your audience and ask which one they would click and why. The 'why' is the valuable part, and you never get it from analytics.",
          "This sounds unscientific. It is actually more scientific than the dashboard, because it captures the reason behind the click instead of only the click itself. Reasons generalize. A 3 percent CTR on a Tuesday does not.",
        ],
      },
      {
        paragraphs: [
          "Use the dashboard to confirm what you already suspect, never to invent it. The moment you let a tiny sample tell you what to do, you have handed your creative decisions to noise.",
        ],
      },
    ],
  },
  {
    slug: "packaging-text-on-thumbnails",
    title: "How Much Text Belongs on a Thumbnail, and Where",
    excerpt:
      "Three words or six? The count matters less than the job the text is doing. Here is how to decide what stays and what goes.",
    date: "2025-07-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["thumbnails", "packaging", "ctr"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "The old advice was three words maximum. Then half the platform started using six, and the old advice looked wrong. The truth is that the number matters less than the job the text is doing. Text on a thumbnail is a second headline, and headlines have rules.",
          "Ask what the image already says, then use words only for what the image cannot. If the picture shows a leaking pipe, the text should not say 'leaking pipe.' It should say the thing the picture cannot: the cost, the cause, or the stake.",
        ],
      },
      {
        heading: "The three jobs text can do",
        bullets: [
          "Add specificity the image cannot carry. A face can look shocked; only text can say 'after one upload.'",
          "Name the topic when the visual is abstract. A graph needs a label, not a caption.",
          "Create tension the image cannot. Words can set up a contrast: 'before' on one side, 'after' on the other.",
        ],
        paragraphs: [
          "When text tries to do all three at once, it becomes a paragraph and readers stop reading. Pick the one job this thumbnail needs and let the image carry the rest.",
        ],
      },
      {
        paragraphs: [],
        quote: "Text on a thumbnail is not a caption. It is a headline competing with your title.",
      },
      {
        heading: "Readability at 320 pixels",
        paragraphs: [
          "At feed size, a thin font becomes a gray smudge and a busy background eats the letters. Use heavy weights, high contrast, and a maximum of about five words per line. If you need a smaller font to fit everything, you have too much to say.",
          "Placement matters as much as size. Corners get covered by duration badges and platform chrome. Keep text in the central band, and leave a little air around each letter so the strokes do not bleed together when the image is compressed.",
        ],
      },
      {
        heading: "When zero words is the right answer",
        paragraphs: [
          "Some of the strongest thumbnails have no text at all. A clean reaction shot, a striking object, or a strong before-and-after can carry an entire video without a single letter. Text-free works when the image is unmistakable and the title already supplies the words.",
          "The trap is deciding too early. Draft a version with words and a version without, then compare both at small size. Sometimes the text you were sure you needed was doing the title's job, badly.",
        ],
      },
      {
        paragraphs: [
          "Count your words, then ask if each one earns its space. A thumbnail is the smallest billboard you will ever rent, and every pixel of text is rent you pay against the image.",
        ],
      },
    ],
  },
  {
    slug: "packaging-faces-and-expression-in-thumbnails",
    title: "Faces and Expression in Thumbnails, Beyond the Shocked Look",
    excerpt:
      "The shock face is a cliche because it works. But expression and promise have to agree, or the thumbnail sells a feeling the video never delivers.",
    date: "2025-11-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["thumbnails", "ctr", "packaging"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "The open-mouth shock face became a cliche for a reason: it works. Human eyes find faces before almost anything else, and strong expressions pull attention faster than any graphic design. The problem is that when everyone shocks, nobody shocks.",
          "The interesting question is not whether to use a face. It is which expression belongs to which promise. A grin, a furrow, a raised eyebrow, and a flat stare each tell the viewer something different before they read a word.",
        ],
      },
      {
        heading: "Match the expression to the claim",
        bullets: [
          "If the title promises a revelation, use surprise or disbelief. The face should look like it just learned the thing the title implies.",
          "If the title promises a warning, use concern or a serious stare. A smile on a warning thumbnail reads as a contradiction.",
          "If the title promises a win, let the expression carry the feeling of the win, not a generic cheer. Relief reads as more believable than triumph.",
          "If the title promises analysis, a neutral, direct gaze builds authority. Not every video needs theater.",
        ],
      },
      {
        paragraphs: [],
        quote: "The face is the emotional subtitle. It tells the viewer how to feel before the title tells them what to think.",
      },
      {
        heading: "Authenticity beats intensity",
        paragraphs: [
          "Viewers have gotten good at spotting a posed expression. The wide eyes and open mouth, held for the camera, now read as an ad. A caught moment, mid-laugh or mid-frown, reads as real, and real is the scarce resource.",
          "In practice this means shooting fifty frames and keeping the one where the expression is smallest but truest. You are hunting for the look on someone's face two seconds after the camera stopped rolling, not the one they performed on cue.",
        ],
      },
      {
        heading: "When a face hurts",
        paragraphs: [
          "Faces are not always the answer. If the video is about an object, a process, or data, a reaction face can crowd out the actual subject. The viewer learns to associate your channel with a person's expression instead of a topic.",
          "Pulling the face smaller, turning it to the side, or replacing it with a hand or a pointed finger can keep the human signal without letting it dominate. The face should serve the idea, never the reverse.",
        ],
      },
      {
        paragraphs: [
          "Before you export, cover the face and ask whether the thumbnail still works. If it collapses, the face is carrying too much. If it survives, the expression is doing exactly enough.",
        ],
      },
    ],
  },
  {
    slug: "packaging-ctr-retention-tradeoff",
    title: "The CTR and Retention Tradeoff Nobody Warns You About",
    excerpt:
      "You can max out click-through rate and still lose. Here is why the two numbers pull apart, and how to read them as a pair.",
    date: "2026-02-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["ctr", "packaging", "titles"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "There is a version of optimization where you push click-through rate as high as it will go. It works, briefly. Then the retention graph tells the real story, and it is not kind. The two metrics are connected, and ignoring that connection is how channels grow fast and stall harder.",
          "CTR measures how many people take the bet. Retention measures how many stay after they realize what they bet on. A channel can win the first number and lose the second, and the second is the one that compounds.",
        ],
      },
      {
        heading: "Why the two numbers pull apart",
        paragraphs: [
          "A vague, dramatic title maximizes clicks because it fits almost any video. That is also why it underperforms after the click, since the video can never be as broad as the promise. The narrower and more accurate the title, the lower the CTR and the higher the retention, usually.",
          "This is the tradeoff in plain terms: reach versus fit. You can pick your point on that line, but you cannot live off both ends. Knowing where your channel should sit is a strategy question, not a copywriting one.",
        ],
      },
      {
        paragraphs: [],
        quote: "A click you cannot keep is just a slower bounce.",
      },
      {
        heading: "Reading the pair together",
        bullets: [
          "High CTR with high retention is the dream, and it usually comes from titles that are specific and a little unexpected, not broad and dramatic.",
          "High CTR with low retention means your packaging is overpromising. Tighten the title until the video can actually deliver it.",
          "Low CTR with high retention means you have a great video behind a boring door. The fix is packaging, not the script.",
          "Low CTR with low retention means the topic itself is not landing, and no title rewrite will save it.",
        ],
      },
      {
        heading: "How to optimize the pair without gaming either",
        paragraphs: [
          "The most reliable move is to make the title specific enough that it filters. A narrower title gets fewer clicks from the wrong people and more from the right ones, and the retention curve rewards you for the second group. Specificity is not a tax on reach; it is a filter that improves the quality of the reach you get.",
          "Run this as a monthly habit: list your top five videos by impressions and your top five by average view duration, then look at the overlap. The titles that show up on both lists are the patterns worth repeating.",
        ],
      },
      {
        paragraphs: [
          "Stop treating CTR as the score. Treat it as the opening bid. What matters is whether the video, once opened, returns a profit in watch time. The channels that last win both numbers at the same time, not the ones that max out either.",
        ],
      },
    ],
  },
  {
    slug: "packaging-running-a-packaging-audit",
    title: "Running a Packaging Audit on Your Last Ten Videos",
    excerpt:
      "Your catalog is a portfolio, not a collection. An honest hour of review can find the packaging habits that quietly cap your channel.",
    date: "2026-05-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["packaging", "ctr", "thumbnails"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Packaging problems hide because you see your own thumbnails in a context that does not match the feed. On your channel page they look consistent and calm. In a busy feed, next to competitors, they may look invisible. An audit forces the second view.",
          "The audit is simple and takes about an hour. You review your last ten videos as a stranger would, score the packaging on a few honest criteria, then decide what to change for the next ten.",
        ],
      },
      {
        heading: "Step one: build the fake feed",
        paragraphs: [
          "Open your last ten thumbnails and place them in a single grid, the way a search results page would show them. Now shrink the whole grid until each thumbnail is roughly the size it appears on a phone. This is the view your audience actually gets, and it is almost never the view you designed for.",
          "Do the same with the titles, in a plain list with no styling. Read them down the column. The ones that blur together are the ones that are too similar in shape, and similarity is the enemy of click rate across a catalog.",
        ],
      },
      {
        heading: "Step two: score each package",
        bullets: [
          "Clarity: can you name the subject in one second at phone size? Score 1 to 5.",
          "Contrast: does the thumbnail separate from a typical background in your niche, or does it share the same palette?",
          "Specificity: does the title promise something exact, or something you could apply to fifty videos?",
          "Fit: does the thumbnail's emotion match the title's claim, or do they fight each other?",
          "Originality: have you seen this exact composition on three other channels this month?",
        ],
        paragraphs: [
          "Add the scores and sort. You will usually find that your worst-performing videos are not your worst topics. They are your worst-packaged versions of decent topics.",
        ],
      },
      {
        paragraphs: [],
        quote: "Your catalog is a portfolio, not a collection. It should look deliberate when seen all at once.",
      },
      {
        heading: "Step three: pick two changes, not ten",
        paragraphs: [
          "The temptation after an audit is to overhaul everything. Resist it. Pick the two patterns that scored worst and change only those for your next ten videos. Changing ten variables at once means you cannot tell which one helped.",
          "If clarity scored low across the board, make every thumbnail carry one unmistakable subject at phone size. If specificity scored low, rewrite titles to include a concrete number or outcome. Small, tracked changes beat sweeping redesigns.",
        ],
      },
      {
        paragraphs: [
          "Run the audit quarterly. Packaging decays as your niche evolves and as you unconsciously copy your own last hit. A regular, honest look at the whole catalog is the cheapest quality control a channel can have.",
        ],
      },
    ],
  },
  {
    slug: "packaging-writing-titles-before-scripts",
    title: "Why You Should Write the Title Before the Script",
    excerpt:
      "Writing the script first and naming it later is the standard order. Reversing it makes the promise sharper and the video easier to write.",
    date: "2026-09-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["titles", "packaging", "ctr"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Most creators write the script, then bolt a title onto the end like a name tag at a conference. The title becomes a summary of what happened, which is almost never as sharp as a title written on purpose. Writing it first changes the video, not just the packaging.",
          "A title is a compression of your promise. If you cannot compress the promise into one line before you write, the video probably does not have a promise yet. That is a useful thing to learn in ten minutes instead of ten pages.",
        ],
      },
      {
        heading: "The title as a design constraint",
        paragraphs: [
          "When the title comes first, every section of the script has a job: prove the promise, then complicate it. The title becomes a spine. Without it, sections drift, because each one is deciding its own purpose as it goes.",
          "I keep the working title at the top of the document and reread it before every section. If a section does not serve the title, I either cut the section or admit the title was wrong and move it. Both outcomes are wins.",
        ],
      },
      {
        paragraphs: [],
        quote: "A title written first is a promise you can keep. A title written last is a summary of what you happened to make.",
      },
      {
        heading: "What writing titles first exposes",
        bullets: [
          "Whether the idea is actually interesting. If the sharpest possible title is boring, the video is probably boring too.",
          "Whether the payoff exists. You cannot title a video around a reveal you have not imagined yet.",
          "Whether the scope is sane. A title that needs three clauses to be accurate is a sign the video is really three videos.",
          "Whether the thumbnail is even possible. If you cannot picture the image behind the title, the title may be too abstract.",
        ],
      },
      {
        heading: "The working title versus the final title",
        paragraphs: [
          "The first title you write is a tool, not a decision. It exists to shape the script. As the video develops, you may find the real story is narrower, sharper, or stranger than the working title suggested. Change it then, deliberately.",
          "The failure mode is writing a title first and then defending it past the point where it is true. Hold the working title loosely. It is scaffolding, and scaffolding comes down when the building is done.",
        ],
      },
      {
        paragraphs: [
          "Try it on your next video. Write five candidate titles before you outline a single section, pick the one with the most tension, and let it steer everything that follows. The script gets faster to write, and the packaging stops feeling like an afterthought, because it never was one.",
        ],
      },
    ],
  },
];
