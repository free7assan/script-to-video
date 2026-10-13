import { Eye, Search, BookOpen, Map, Clock, Layers, Tag, Scissors, Repeat, Compass } from "lucide-react";
import type { BlogPost } from "../types";

export const batch34: BlogPost[] = [
  {
    slug: "blueprint2-competitor-teardown-decisions",
    title: "Competitor Teardown: Steal the Decisions, Not the Script",
    excerpt:
      "A competitor teardown pays off when you extract the repeatable decisions behind a video and deliberately leave the exact wording behind for someone else.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A competitor teardown works when you pull out the repeatable decisions behind a video and leave the exact wording behind. Copy the sentence and you inherit a script that already had its day. Copy the decision and you can point it at a topic nobody has touched.",
          "Most people do this backward. They open a competitor's best upload, transcribe it, then rewrite the same three beats with new nouns. That is not analysis. That is a cover song with the labels scraped off.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If your notes could be swapped into the original video without anyone noticing, you studied the words instead of the machine that produced them.",
      },
      {
        heading: "Separate the decision from the delivery",
        paragraphs: [
          "Every line in a strong video sits on two layers. The delivery is the phrasing, the joke, the specific example. The decision is why that line exists at that moment: to delay the payoff, to raise the stakes, to name the viewer's objection before they close the tab.",
          "Write the decision layer in plain language. Instead of noting 'great opening line about rent', note 'opens on a cost the viewer pays monthly and cannot easily cut'. Now you have something you can actually reuse on a different subject.",
        ],
      },
      {
        heading: "A teardown you can act on",
        bullets: [
          "Log the first fifteen seconds as a job description. What does that opening have to accomplish before the viewer is allowed to leave?",
          "Mark every turn in the argument and label the reason it turns. Curiosity, proof, contrast, or relief. Four labels cover most cases.",
          "Note where the video breathes. A pause after a claim is a decision, not filler, and it is one of the easiest things to reuse badly.",
          "Write down what the creator refused to do. The topic they skipped and the tangent they cut tells you as much as the finished cut does.",
        ],
      },
      {
        heading: "Keep two columns, always",
        paragraphs: [
          "I keep a two column table for every channel I study. On the left, what the creator did. On the right, what I would do with the same move for my own audience. The right column is where the value lives, and it stays empty if you are only transcribing.",
          "This habit also kills lazy copying at the source. The moment you have to write an application for someone else's move, you notice which moves only worked because of their face, their audience, or their timing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Study decisions, not phrasing. Phrasing ages in weeks; decisions survive a topic swap.",
          "Write every observation as something you could apply tomorrow, or throw it out.",
          "The gaps matter. What a competitor avoids is data, not an accident.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-read-the-catalog-not-the-hit",
    title: "Read the Catalog, Not the Hit: Why One Spike Lies",
    excerpt:
      "A single viral upload teaches you almost nothing about a channel. The ordinary videos underneath reveal the structure worth studying at all.",
    date: "2024-06-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "The upload that put a channel on the map is usually the worst one to study because luck did part of the work. When I want to learn from someone, I skip their top three videos and start at number ten.",
          "Down at number ten you find the workhorses. The videos that got no push, no trend, no big share, and still carried the channel. Whatever structure survives down there is the structure that actually holds.",
        ],
      },
      {
        paragraphs: [],
        quote: "A hit is an event. A catalog is a habit, and you can only build on habits.",
      },
      {
        heading: "Why the spike fools you",
        paragraphs: [
          "An outlier looks meaningful because it is the loudest point on the chart. But a single spike often comes from something outside the script: a thumbnail that happened to land, a recommendation test, or an audience the platform decided to try that week.",
          "Study only the spike and you spend months chasing a cause you never controlled. The catalog averages that noise out. Over twenty videos, the traits those videos share tend to be structural, and structure is the part you can practice.",
        ],
      },
      {
        heading: "How to read a catalog in one sitting",
        bullets: [
          "Sort by date and ignore the view counts for the first pass. You are hunting for repeats, and the numbers pull your eye toward noise.",
          "Skim the first thirty seconds of ten videos back to back. Note every opening you would bet money on seeing again.",
          "Count how often the channel uses the same close. A close that repeats is a formula the creator trusts.",
          "Flag the two videos that break the pattern. Ask whether the channel changed direction or just had a bad week.",
        ],
      },
      {
        heading: "The median video is your teacher",
        paragraphs: [
          "Pick the video sitting dead center of the view range, not the top and not the bottom. That median upload is the clearest picture of what the channel does when nothing unusual happens.",
          "I reverse outline the median video first, then check it against two more like it. If the same shape shows up three times in a row, it is safe to treat as a blueprint. If it shows up once, it is a mood.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start at video ten, not video one. The middle of the catalog is where repeatable structure hides.",
          "Repeats are the signal. A trait that appears once is a coincidence, not a plan.",
          "Use the median upload as your template and treat outliers as questions to investigate later.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-start-with-the-transcript",
    title: "Start Every Reverse Engineer With the Transcript",
    excerpt:
      "A transcript turns a video you watched into text you can mark up. That one shift makes competitor analysis faster, calmer, and far easier to compare.",
    date: "2024-11-05",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Pull the transcript before you do anything else. Watching a video twice and taking notes from memory is slow and unreliable. A transcript gives you the raw text so you can mark it up like code.",
          "This sounds small and it changes everything about how fast you can compare one channel to another. Text you can search beats a video you have to scrub through.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You cannot compare what you cannot align side by side. The transcript is the cheapest way to put two videos on the same page.",
      },
      {
        heading: "Mark it up in two passes",
        paragraphs: [
          "On the first pass, draw a line wherever the topic or stakes change. Do not label anything yet. Just cut the text into moves the way you would cut a film into scenes.",
          "On the second pass, give each move a one word function: hook, setup, proof, turn, close. Now the video has a skeleton you can compare to any other video on the same channel.",
        ],
      },
      {
        heading: "What to look for in the text",
        bullets: [
          "Repeated connective phrases. If the creator reaches for the same words to change direction, that is a signature you can study.",
          "How quickly the first promise appears. In text, this is easy to measure in sentences.",
          "Where the video restates the payoff. Strong creators often promise once, deliver early, then re-promise before the close.",
          "Sentences that end on a question or a cliff. These are the load bearing walls of retention, and text makes them obvious.",
        ],
      },
      {
        heading: "Keep a running shape file",
        paragraphs: [
          "After you mark up a few transcripts from one channel, a shape starts to appear. Save it to a single file. Hook, setup, proof, turn, close, with the typical length of each part and the typical move inside it.",
          "That file becomes your lookup table. When you sit down to script your own video, you are not staring at a blank page. You are looking at a shape that already worked and deciding where to break it on purpose.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Transcript first, notes second. Marking up text is faster and far more comparable than watching twice.",
          "Two passes keep you honest: one to cut the video into moves, one to name each move's job.",
          "Save the shape you find. A one page reference beats a memory of a good video every time.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-map-hook-patterns",
    title: "Map Hook Patterns Across Ten Videos, Not Just One",
    excerpt:
      "A single hook tells you nothing about a channel. Ten hooks side by side reveal the formula your competitor trusts and where it is starting to wear out.",
    date: "2025-03-22",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Write down the first line of ten competitor videos before you judge any single hook. One opener is an anecdote. Ten openers plotted together are a pattern you can copy or deliberately break.",
          "This is the fastest useful study in the whole discipline. Hooks carry the most weight, they are short, and collecting ten of them takes under an hour.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You pattern is only a pattern once you have counted it. Until then it is a hunch with a confident voice.",
      },
      {
        heading: "Sort the hooks by the tension they create",
        paragraphs: [
          "Most hooks manufacture one of a few kinds of tension. A stated loss, a withheld reason, a contradiction, or a promise with a deadline. Tag each opener with the kind of tension it creates, not the words it uses.",
          "Once ten hooks are tagged, the distribution tells you something. A channel that opens on loss eight times out of ten is betting that fear beats curiosity. You now know their default, and defaults are the easiest thing in the world to differentiate against.",
        ],
      },
      {
        heading: "Questions that make the map useful",
        bullets: [
          "Does the hook name the viewer's problem, or does it name the creator's conclusion? The better channels name the problem.",
          "How long before the first concrete detail lands? A number, a name, or a scene. Vague hooks live longer than they should.",
          "Do they front load the topic or bury it? Hiding the subject works only when the tension is strong enough to carry the wait.",
          "Which hooks did the channel retire? An abandoned formula usually means the audience grew tired of it, which is a warning you get for free.",
        ],
      },
      {
        heading: "Turn the map into your own default",
        paragraphs: [
          "After the ten are tagged, pick the tension kind your competitor leans on least and see if it fits your voice. That is often where a channel has room, because you are not fighting their strongest move head on.",
          "Then write three of your own hooks in the tension kind you chose. Compare them side by side with the ten you logged. If yours create the same tension with different words, you have learned the pattern instead of borrowing it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Collect ten hooks before you draw a conclusion from any of them.",
          "Tag by the tension a hook creates, not by the words it uses, so the pattern travels across topics.",
          "The tension your competitor avoids is often the cleanest opening for your own channel.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-measure-pacing-not-vibes",
    title: "Measure Video Pacing Instead of Trusting the Vibe",
    excerpt:
      "Pacing is a number, not a feeling. Counting cuts and seconds per beat turns your competitor analysis from a guess into something you can compare.",
    date: "2025-08-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "If you want to learn pacing, count instead of watching. 'Their videos feel fast' is not usable. 'They change the visual every four seconds and land a new idea every twenty two' is usable, and it takes a stopwatch.",
          "Pacing is one of the few parts of a video you can measure with a clock, so measure it. Feelings about tempo are the easiest thing to be wrong about.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Fast is not a style. It is a number. Until you have the number, you are describing your own boredom, not their editing.",
      },
      {
        heading: "Two numbers worth logging",
        paragraphs: [
          "The first number is the average seconds between edits in the first minute. The second is the average seconds between new ideas across the whole video. These two move differently, and mixing them up is why most pacing advice is useless.",
          "A video can cut every three seconds and still drag, because nothing new is happening. Another can hold one shot for ten seconds and feel urgent, because each second advances the argument. The edit number and the idea number tell apart those two cases.",
        ],
      },
      {
        heading: "Reading the shape of the timeline",
        bullets: [
          "Map where the edits slow down. A longer held shot after a big claim is usually a placed pause, and it is doing work.",
          "Find the first minute's rhythm, since that is where pacing is set. If the opening is slow, the audience has decided by then.",
          "Check the last minute separately. A close is often paced faster than the body to compress the call to action.",
          "Compare the pacing of the channel's top video and its median one. A gap between them tells you what the audience rewarded.",
        ],
      },
      {
        heading: "Make it comparable",
        paragraphs: [
          "Log the two numbers for five videos from one channel in a single table. Now you have a baseline. When you script your own video, you can target a slower or faster rhythm on purpose instead of hoping the edit will fix it later.",
          "The point of measuring is not to imitate their exact number. It is to know what number you are choosing, and to be able to tell whether your draft is anywhere close.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track edits per minute and new ideas per minute separately. The two together explain why a video feels slow or urgent.",
          "The first minute sets the pace and the last minute breaks it, so read them on their own.",
          "A baseline of five videos turns pacing from a vibe into a target you choose deliberately.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-title-thumbnail-pairs",
    title: "Study Title and Thumbnail Pairs as a Single Unit",
    excerpt:
      "A competitor's title and thumbnail work together, and judging them apart hides the real trick. Read the pair as a single pitch to the viewer.",
    date: "2025-12-27",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A title and a thumbnail are one pitch shown twice, so study them as a pair. Read together, they tell you what the creator believed would make a stranger stop.",
          "Open a competitor's uploads page and cover the thumbnails. Read only the titles. Then cover the titles and look only at the images. The gaps between the two readings are where the interesting decisions live.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The title asks a question and the thumbnail answers it, or the thumbnail asks and the title answers. When neither one asks, the pack has no reason to click.",
      },
      {
        heading: "The question and answer test",
        paragraphs: [
          "Most strong pairs split the work. One part creates an open loop and the other leans into it. A thumbnail showing a wrecked kitchen under a title about a dinner disaster is doing exactly that.",
          "When a pair fails, both halves are usually trying to be the answer. Two complete statements sit there and nothing pulls the viewer in. Log the pairs where one half clearly asks and the other clearly answers, then count how often the channel does it.",
        ],
      },
      {
        heading: "Details to log for each pair",
        bullets: [
          "The number of words in the title. Channels that trust their thumbnail use fewer.",
          "Whether the face carries emotion that matches the title's mood, or fights it.",
          "What is left out. The most clicked pairs usually imply something the viewer has to resolve.",
          "Repetition of format. A channel that reuses a template is telling you which layout it trusts.",
        ],
      },
      {
        heading: "From teardown to your own first draft",
        paragraphs: [
          "After you log ten pairs from one channel, write your own title and thumbnail idea as a pair in a single sentence. If you cannot say how one half opens a loop and the other closes it, the idea is not ready.",
          "This practice forces packaging decisions to the front of the script, where they belong. A video built around a loop the title already promised is far easier to write than one where the packaging is decided the day before upload.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge titles and thumbnails together, never alone. The pair is the actual pitch.",
          "In most winning pairs, one half asks and the other answers. Two answers cancel out.",
          "Write your own packaging as a pair before scripting so the loop is set from the start.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-find-competitor-gaps",
    title: "Find the Content Gaps a Competitor Leaves Open",
    excerpt:
      "Your best ideas often sit in the questions a competitor never answers. Mapping those gaps turns their catalog into a map of your opportunities.",
    date: "2026-02-14",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["analysis", "blueprints", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        paragraphs: [
          "The fastest way to find your next idea is to list the questions a competitor never answers. Their catalog is not just a model to copy. It is a map with blank spaces, and the blanks belong to you.",
          "I keep a gap column next to every teardown. Every time the creator raises a topic and moves past it, I write down the follow up they skipped.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A competitor's habits show you what their audience wants. Their omissions show you what their audience is still asking.",
      },
      {
        heading: "Where gaps hide",
        paragraphs: [
          "Gaps show up in three reliable places. A topic the channel mentioned once and never returned to. A question in the comments that got a short reply instead of a video. A step in a process the creator assumes everyone already knows.",
          "None of these are mistakes on their part. A channel picks a lane and stays in it. The trouble is that the lane leaves side streets wide open, and side streets are cheap to own.",
        ],
      },
      {
        heading: "How to mine a catalog for gaps",
        bullets: [
          "Read the comments on their three most viewed videos and collect every question. The repeats are demand.",
          "Note the topics they always mention in thumbnails but never make a full video about.",
          "Look for the beginner version of an advanced video. Experts skip the floor, and the floor is where most viewers stand.",
          "Check the old uploads. A topic the channel covered two years ago may be stale enough to redo properly today.",
        ],
      },
      {
        heading: "Rank the gaps before you pick one",
        paragraphs: [
          "Not every gap is worth filling. Score each candidate on two things: how often the question appears, and whether you can bring something the competitor could not. A gap with high demand and no edge is a crowded room with the lights off.",
          "The best gaps sit where interest is steady and the competitor is structurally unable to follow. If they avoid it because it does not fit their format, that is a moat, not a weakness.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the gap column as seriously as the pattern column. What is missing is as useful as what repeats.",
          "Comments, skipped steps, and stalled topics are the three richest places to look for gaps.",
          "Only fill a gap when demand is steady and you can bring an angle the competitor cannot.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-build-a-reverse-outline",
    title: "Build a Reverse Outline From Any Video You Study",
    excerpt:
      "A reverse outline rebuilds a finished video as a plan, so you can see the structure underneath. It is the single most useful teardown habit I know.",
    date: "2026-05-03",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "A reverse outline rebuilds a finished video as a plan you could hand to a writer. You take the video apart and write down each beat as an instruction, in order, as if you were planning it from scratch.",
          "The exercise forces you to explain why each part exists. Watching a good video shows you that it works. Reverse outlining makes you say how.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "An outline and a script are the same idea pointed in opposite directions. Reverse outlining is how you walk a finished video back to the plan it came from.",
      },
      {
        heading: "The format is boring on purpose",
        paragraphs: [
          "Each line of a reverse outline is one beat with a job. Landing the premise. Proving the premise with a story. Raising the cost of ignoring it. Resolving it. Asking for the next step.",
          "Keep the lines short and verb first. If you cannot reduce a two minute section to one line, you do not understand its job yet, and that is the whole point.",
        ],
      },
      {
        heading: "Rules that keep it honest",
        bullets: [
          "Never write what the section says. Write what it does. Meaning belongs in the notes, not the outline.",
          "One line per job. If a line has two verbs, it is two beats.",
          "Keep a separate column for length. A beat that runs long for small work is a pacing decision you should notice.",
          "Mark the beats that were optional. Star them. Those are the ones you can cut or swap without breaking the shape.",
        ],
      },
      {
        heading: "Reuse it as scaffolding",
        paragraphs: [
          "Once the outline is written, flip it. Replace each beat with your own topic and you have a plan that inherits the structure without inheriting the words. That is the difference between a blueprint and a script.",
          "I keep a folder of these. When a new idea shows up, I ask which outline's shape fits it best, drop the idea into that frame, and start writing. The blank page problem mostly disappears.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reverse outlines record jobs, not meaning. What each beat does is the part you can reuse.",
          "Short verb first lines keep you from hiding uncertainty in long notes.",
          "A folder of outlines gives you reusable scaffolds and kills the blank page.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-the-clone-trap",
    title: "The Clone Trap: Why Copying a Competitor Fails",
    excerpt:
      "Copying a competitor's script feels safe and rarely works. The reasons it fails are predictable, and knowing them keeps you out of the clone trap.",
    date: "2026-07-21",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Copying a competitor's script fails because the script was never the whole product. It worked alongside their face, their history, and their audience's expectations, and none of that travels when you paste the words into your channel.",
          "The clone trap is tempting because it removes the scariest part of making videos, which is deciding. It replaces a decision with a template, and that trade always costs more than it saves.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A script lifted from a bigger channel is a costume. The audience can tell it does not fit, even when they cannot say why.",
      },
      {
        heading: "Three ways a clone breaks",
        paragraphs: [
          "First, the audience mismatch. Their viewers came for a person and a promise you do not share, so the same beats land flat on people who never asked for them.",
          "Second, the ceiling. The original keeps climbing because it keeps testing. A clone only knows the version that already worked, so it slowly falls behind a channel that is still moving.",
          "Third, the trust problem. Viewers who spot the imitation discount everything else you make. It is the most expensive mistake on this list because it compounds.",
        ],
      },
      {
        heading: "What to borrow instead",
        bullets: [
          "Borrow the sequence of jobs. Hook, proof, turn, close. Keep their order if it is good; use your own content inside it.",
          "Borrow the test they ran. If a competitor tried three thumbnail styles, learn from the result without copying the artwork.",
          "Borrow the discipline. If they post on a fixed day, that habit is worth more than any single script.",
          "Leave the phrases alone. The exact words carry their voice, and their voice is the one asset you cannot move.",
        ],
      },
      {
        heading: "The honest test",
        paragraphs: [
          "Before you ever publish, read your draft back and ask whether the creator you studied could publish it unchanged. If yes, you have not written a video. You have written a stand in for someone else's.",
          "The goal of studying competitors is to speed up your own decisions, not to replace them. Structure travels. Voice, audience, and history do not. Knowing which is which is the entire skill.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Scripts do not work in isolation. They lean on a face, a promise, and an audience you may not share.",
          "Borrow sequence and discipline; leave the exact words with their owner.",
          "If the creator you studied could publish your draft unchanged, it is a clone, not your work.",
        ],
      },
    ],
  },
  {
    slug: "blueprint2-weekly-research-routine",
    title: "A Weekly Competitor Research Routine That Sticks",
    excerpt:
      "Reverse engineering competitors works better as a small weekly habit than a one-off sprint. Here is a routine you can keep running for months.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["workflow", "analysis", "blueprints"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Pick one hour a week and study a single competitor hard. A short, repeating routine beats the heroic weekend where you tear down six channels and remember none of them.",
          "The reason is simple. Patterns only become visible across time, and a habit gives your notes a chance to accumulate. A one-off sprint gives you a pile of screenshots and no shape.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Consistency turns watching into data. A channel studied once is a curiosity. The same channel studied monthly becomes a case study.",
      },
      {
        heading: "The hour, broken down",
        paragraphs: [
          "Ten minutes on the new uploads. Note anything that broke their usual pattern, because a change in habit is the most informative event you will see all week.",
          "Twenty minutes on transcripts. Pull one recent video, mark up the moves, and add its shape to your running file for that channel.",
          "Twenty minutes on packaging. Compare the last five title and thumbnail pairs and look for a repeated template.",
          "The last ten minutes are for writing down one thing you will apply to your own next video. One action, decided before you close the notes.",
        ],
      },
      {
        heading: "What to keep across weeks",
        bullets: [
          "A single running file per channel, so patterns from three months ago sit next to this week's notes.",
          "A short list of experiments the channel ran and whether they repeated the result.",
          "A quote log of their recurring phrases, which shows voice better than any description.",
          "A running list of gaps you noticed, ready for the week you want a new idea.",
        ],
      },
      {
        heading: "Protect the routine from itself",
        paragraphs: [
          "The trap with a weekly habit is scope creep. One channel, one hour, one action. If the file gets too long to scan in a minute, it has stopped being useful.",
          "Rotate the channel every season, not every week. Staying with one long enough to see a change is the entire value. Then move on and compare what you learned against the next one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One channel, one hour, one action a week beats an occasional deep sprint.",
          "Changes in a competitor's habits are your best signal, so log them the moment they show up.",
          "Keep one short running file per channel and rotate channels by season, not by week.",
        ],
      },
    ],
  },
];
