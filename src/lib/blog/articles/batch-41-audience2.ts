import {
  MessageSquare,
  Search,
  Layers,
  Eye,
  Target,
  Compass,
  BarChart3,
  TrendingUp,
  Repeat,
  Activity,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch41: BlogPost[] = [
  {
    slug: "audience2-read-viewer-intent-comments",
    title: "Reading Viewer Intent from Comments Without Guessing",
    excerpt:
      "Read viewer intent in your comments by looking for questions and repeated asks, then turn those signals into titles people already want to click.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "community"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Viewer intent shows up in the questions people leave under your videos, not in the view count. A comment that asks 'can you explain the part at 4:12' is a direct statement about what the person came for.",
          "Most creators skim comments for praise and miss the requests buried under the compliments. The requests are the part you can act on. They tell you which explanation failed and which follow-up would land with the same person tomorrow.",
        ],
      },
      {
        heading: "Separate requests from reactions",
        paragraphs: [
          "Reactions like 'great video' or 'this helped' tell you how a viewer felt. Requests like 'do you have a version for X' tell you what they intend to do next. Both matter, yet only the requests point at your next upload.",
          "Sort a month of comments into two piles and you will find the request pile is smaller than you expected. That is normal. A quiet minority states an intent clearly while everyone else watches and leaves without typing a word.",
        ],
      },
      {
        quote:
          "A comment that asks a question is one viewer doing you the favor of telling you what to make.",
      },
      {
        heading: "Count repeats before you act",
        paragraphs: [
          "One request is an anecdote. The same request from five strangers is a topic. Keep a note of the phrases that return, and copy the wording people chose. When you write the title, use their phrasing because it already tested as the words a real viewer picked.",
          "Look, too, at what people do not ask. If a whole section passes without comment, the audience may have understood it or ignored it. A quick question in a pinned comment can tell you which one happened.",
        ],
      },
      {
        heading: "From comments to your next title",
        paragraphs: [
          "Turn the strongest repeat into a working title, then check whether it matches the intent behind the comment. Someone asking for a beginner explanation wants a beginner video, not a deep dive that assumes the vocabulary they clearly lacked.",
          "Keep the running list in one document. After three months it stops being a scramble and becomes a schedule, because every entry started as something a viewer asked for out loud.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat questions in comments as direct statements of intent.",
          "Separate emotional reactions from concrete requests.",
          "Build topics only after the same request repeats.",
          "Match the depth of your answer to the level the commenter showed.",
        ],
      },
    ],
  },
  {
    slug: "audience2-search-intent-vs-watch-intent",
    title: "Search Intent vs Watch Intent: Why They Differ",
    excerpt:
      "Search intent and watch intent are not the same thing, and confusing them wastes good titles. Learn to tell them apart before you plan your next upload.",
    date: "2024-05-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Search intent is a person trying to finish a task. Watch intent is a person deciding how to spend the next ten minutes. The same title can attract both and satisfy neither, which is why so many well made videos stall at a few thousand views.",
          "The two audiences look identical in a search bar. They behave nothing alike once the video starts, and the first thirty seconds is where the difference exposes itself.",
        ],
      },
      {
        heading: "What each person came for",
        paragraphs: [
          "A searcher typed a question, so they arrive with a target and a low tolerance for detours. They want the answer, and they will scrub forward until they find it. A watcher opened a feed with no question in mind and stays as long as the video keeps earning attention.",
          "A searcher rewards a script that gets to the point and labels each step. A watcher rewards a script that builds curiosity and delays the payoff without feeling thin.",
        ],
      },
      {
        bullets: [
          "Searchers scan for the exact phrase they typed.",
          "Watchers decide in seconds whether to keep going.",
          "Searchers tolerate detail if it answers the question.",
          "Watchers leave the moment the energy drops.",
        ],
      },
      {
        quote:
          "A searcher came with a question. A watcher came with time. Write for the one you chose.",
      },
      {
        heading: "Why one video rarely serves both",
        paragraphs: [
          "When you front load the answer to please searchers, watchers lose the open loop that held them. When you bury the answer to please watchers, searchers bounce before the payoff. The compromise that satisfies both usually satisfies neither.",
          "Pick the intent you are writing for and commit. If a topic draws both crowds, make two videos instead of forcing one title to carry two jobs.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Search intent wants a task finished, watch intent wants time filled.",
          "Searchers scan and scrub while watchers drift and decide in seconds.",
          "A video built for both intents usually serves neither.",
          "Split a dual intent topic into two separate videos.",
        ],
      },
    ],
  },
  {
    slug: "audience2-five-kinds-of-viewer-intent",
    title: "Five Kinds of Viewer Intent You Should Really Know",
    excerpt:
      "Viewer intent comes in five common shapes, from solving a problem to confirming a belief. Name the shape you are serving and your script writes itself.",
    date: "2024-09-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Viewer intent usually falls into five shapes. Solving a problem, learning a skill, comparing options, passing time, and confirming something the person already believes. Name the shape before you write and the rest of the decisions get easier.",
          "Creators who skip this step write a video that wanders between purposes. It teaches for a minute, entertains for another, and never fully commits to the reason someone clicked.",
        ],
      },
      {
        heading: "Solve a problem and learn a skill",
        paragraphs: [
          "The problem solver is stuck and needs a fix now. Speed matters more than elegance, and they will forgive a rough video that works. Show the solution early and keep the steps in order.",
          "The skill learner wants to improve over time and accepts a slower pace. They will sit through a longer explanation because they plan to practice. Give them a path with a clear next step.",
        ],
      },
      {
        heading: "Compare, pass time, and confirm",
        paragraphs: [
          "The comparer is choosing between options and wants an honest look at trade-offs. The time passer opened a feed with no goal and leaves the moment the video stops being interesting. The confirmer already leans one way and wants someone to agree.",
          "Each shape wants a different opening. The comparer wants a verdict, the time passer wants a reason to stay, and the confirmer wants their instinct echoed without feeling pandered to.",
        ],
      },
      {
        quote:
          "You cannot write a title that serves all five intents, so stop trying and pick one.",
      },
      {
        bullets: [
          "Problem solver: lead with the fix and keep steps tight.",
          "Skill learner: build a path they can practice.",
          "Comparer: hand over the trade-offs and a verdict.",
          "Time passer: earn each minute with a new hook.",
          "Confirmer: validate the belief with evidence, not flattery.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name one dominant intent before you write a single line.",
          "Let the intent decide your pacing and your opening.",
          "A wandering video is a video with no chosen intent.",
          "Different intents need different titles, not one blended title.",
        ],
      },
    ],
  },
  {
    slug: "audience2-signals-of-real-viewer-intent",
    title: "Spot the Signals That Reveal Real Viewer Intent",
    excerpt:
      "Real viewer intent hides behind polite clicks. Learn the signals that separate a curious browser from someone ready to follow your advice today.",
    date: "2025-01-08",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A click is not intent. Intent is what a person hoped to get the moment before they clicked. Watch where they leave, what they replay, and what they type back to you, and the hope becomes visible.",
          "Most creators read a thumbnail and a view count and stop there. Neither one tells you why the person stopped scrolling, and without that reason you are guessing at the next video.",
        ],
      },
      {
        heading: "Watch where attention drops",
        paragraphs: [
          "A steep drop in the first thirty seconds usually means the opening promised something the video did not deliver. A drop in the middle often means a tangent reached people who came for a narrower answer. Each drop is feedback about intent, not just retention.",
        ],
        bullets: [
          "Early drop: the title and the opening disagree.",
          "Mid drop: a tangent pulled away from the stated goal.",
          "Late drop: the payoff arrived after people already got what they needed.",
          "Replay spikes: a segment worth slowing down for.",
        ],
      },
      {
        quote:
          "Retention graphs are not report cards. They are the audience telling you where their intent stopped being served.",
      },
      {
        heading: "Questions are the clearest signal",
        paragraphs: [
          "When someone asks a question in the comments, they are handing you the exact intent that brought them. The phrasing matters as much as the topic, since it shows the vocabulary they had and the gap they wanted closed.",
          "Complaints do the same job from the other side. A complaint that the video was too basic or too advanced is a statement about the level the viewer expected.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat a click as a hypothesis, not proof of intent.",
          "Read retention drops as intent feedback, not failure alone.",
          "Mine questions and complaints for the level people expected.",
          "Replay spikes mark the part viewers came to see.",
        ],
      },
    ],
  },
  {
    slug: "audience2-title-promise-versus-intent",
    title: "When Your Title Promise Collides with Viewer Intent",
    excerpt:
      "When your title promise and viewer intent disagree, the video underperforms and nobody knows why. Align the two and retention steadies on its own.",
    date: "2025-03-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A title makes a promise. Viewer intent is the reason someone clicked. When the two point in different directions, the viewer leaves early even though nothing in the video is technically wrong.",
          "This is the quiet failure most creators never diagnose. They blame the thumbnail, the upload time, or the algorithm when the real gap sits between what the title sold and what the person wanted.",
        ],
      },
      {
        heading: "The promise you make",
        paragraphs: [
          "Every title sets an expectation about what the viewer will get and how fast they will get it. A title about a quick fix promises speed. A title framed as a story promises a payoff at the end. Neither is better, but each attracts a different person.",
          "Write the promise down in one sentence before you script. If you cannot state it plainly, the title is doing vague work and the viewer will fill the gap with their own guess.",
        ],
      },
      {
        heading: "The reason they clicked",
        paragraphs: [
          "Intent is the private goal behind the click. Someone might click a budgeting video because they want to save money, or because they are avoiding a real task and want something calm to watch. Same title, different reason, different tolerance for a long intro.",
        ],
      },
      {
        quote:
          "Most retention problems are not production problems. They are mismatches between the promise and the reason for the click.",
      },
      {
        heading: "Closing the gap",
        paragraphs: [
          "Rewrite the opening so the first lines answer the title directly and set up the rest. If the intent behind the click was a fast fix, deliver the fix in the opening and use the rest of the video to deepen it rather than delay it.",
          "Test the title against the intent out loud. Say what you think the viewer wants, then say what the title offers. If you need a sentence of explanation to connect the two, the title needs another pass.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the title's promise in one plain sentence before scripting.",
          "Treat retention drops as a promise and intent mismatch.",
          "Answer the title in the opening instead of delaying it.",
          "If the title needs explaining, rewrite the title.",
        ],
      },
    ],
  },
  {
    slug: "audience2-ask-viewers-what-they-want",
    title: "How to Ask Viewers What They Want Without Bad Data",
    excerpt:
      "Ask viewers what they want and you will get better answers when the question is specific. Vague polls collect noise, not viewer intent you can plan around.",
    date: "2025-06-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "community"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Ask viewers about the last time they faced the problem, not whether they would watch a future video. Past behavior is a record. Future intent is a guess, and people guess generously when asked nicely.",
          "That one change fixes most of the bad data creators collect. A question about a past event forces memory, and memory carries the detail you need to make something real.",
        ],
      },
      {
        heading: "Ask about the last time",
        paragraphs: [
          "Instead of 'would you watch a video about X', ask 'tell me about the last time you dealt with X'. The person reconstructs an event, and the event hands you the specific friction they hit. That friction is your hook.",
          "Follow up with 'and then what happened'. People rush past the useful part because they assume it is boring. Your job is to slow them down enough to describe it.",
        ],
      },
      {
        bullets: [
          "What did you try before you found something that worked?",
          "What made the last guide you used fall short?",
          "Where did you get stuck when no one could help?",
          "What would have saved you time on that specific day?",
        ],
      },
      {
        quote:
          "Do not ask what people would watch. Ask what they did last Tuesday when the problem showed up.",
      },
      {
        heading: "Avoid polls that measure nothing",
        paragraphs: [
          "A poll that asks 'which video should I make next' mostly measures which option has the funniest wording. Everyone who answers is self selected, and the loudest options win regardless of demand. Use polls to pick between ideas you already know matter, not to discover the ideas themselves.",
          "When you do run a poll, keep answer choices in the audience's own words and leave one open field. That field is where the surprising intent shows up, the thing you did not think to offer.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask about past behavior instead of future intent.",
          "Use one follow-up to reach the useful detail.",
          "Treat polls as a tiebreaker, not a discovery tool.",
          "Keep one open answer field for what you missed.",
        ],
      },
    ],
  },
  {
    slug: "audience2-analytics-for-viewer-intent",
    title: "How to Read Analytics for Viewer Intent Signals",
    excerpt:
      "Analytics can reveal viewer intent if you read the right metrics. Average view duration and traffic source tell you why people came and whether you kept them.",
    date: "2025-10-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Analytics reveal intent when you pair two numbers instead of staring at one. Average view duration tells you whether people stayed. Traffic source tells you why they arrived. Together they sketch the goal behind the click.",
          "A video with a short average duration and search traffic is a different problem from the same duration with feed traffic. Search visitors likely needed a specific answer and did not find it fast. Feed visitors likely lost interest before the hook landed.",
        ],
      },
      {
        heading: "The pair that matters most",
        paragraphs: [
          "Read duration next to source. Search traffic that stays means your answer matched the query. Search traffic that leaves means the title targeted a query the video never addressed. Same metric, opposite conclusion, decided by where people came from.",
          "Add the retention curve for texture. A flat curve after a mid video dip tells you the viewers who remained came for the second half, which hints that your title attracted the wrong crowd.",
        ],
      },
      {
        heading: "Traffic source is a map of intent",
        paragraphs: [
          "Suggested and browse traffic arrive with light intent, since the platform chose the video for them. Search and playlist traffic arrive with heavy intent, since the person chose a specific thing. Knowing which one dominates a video tells you how much patience you have to work with.",
        ],
        bullets: [
          "Browse traffic needs a strong first thirty seconds.",
          "Search traffic needs the answer near the front.",
          "Playlist traffic expects continuity from the last video.",
          "Notifications fuel returning intent from people who already chose you.",
        ],
      },
      {
        quote:
          "Duration without source is half a sentence. Source without duration is the other half.",
      },
      {
        heading: "What analytics cannot tell you",
        paragraphs: [
          "Metrics show that people left, not what they wanted when they stayed. For the why, you still need comments, direct questions, and the occasional interview. Numbers narrow the field, and people fill in the reason.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read average view duration together with traffic source.",
          "Treat search and feed visitors as different intents.",
          "Use the retention curve to confirm what the numbers suggest.",
          "Let comments and interviews explain the why behind the drop.",
        ],
      },
    ],
  },
  {
    slug: "audience2-browsing-versus-searching-viewers",
    title: "Why Browsing Viewers Differ from Searching Ones",
    excerpt:
      "Browsing viewers and searching viewers arrive with different plans. Match your opening to the one you want, or you will lose half the room in the first minute.",
    date: "2026-02-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Browsing viewers and searching viewers arrive with different plans. One is filling time and can be won or lost in seconds. The other is chasing an answer and will skip ahead to get it. The opening you write says which one you are ready to serve.",
          "Most channels attract both across their catalog and never notice, because the two look the same in a view count. Splitting them apart explains why a video that helped one group bored the other.",
        ],
      },
      {
        heading: "The searching viewer",
        paragraphs: [
          "The searching viewer typed something specific and browses with a goal. They read the title against the query and click the closest match. Once inside, they scan for the answer and leave as soon as they have it, which can be a good outcome if they got what they came for.",
          "For this person, clarity beats mystery. Numbered steps, labeled sections, and an early answer respect the time they spent searching.",
        ],
      },
      {
        heading: "The browsing viewer",
        paragraphs: [
          "The browsing viewer is not looking for anything in particular. They scroll, stop when something catches the eye, and give the video a short trial. If the first lines do not create a reason to stay, they are gone before your hook even finishes.",
          "For this person, the promise has to be interesting before it is informative. Curiosity does the work that clarity does for the searcher.",
        ],
      },
      {
        bullets: [
          "Searcher: match the query, then answer it early.",
          "Browser: earn the next thirty seconds, then keep earning.",
          "Searcher: structure is a courtesy they expect.",
          "Browser: structure matters less than momentum.",
        ],
      },
      {
        quote:
          "A searcher gives you their question. A browser gives you a few seconds and calls it a favor.",
      },
      {
        heading: "Serving both without splitting your channel",
        paragraphs: [
          "Write most uploads for one intent and let the other find them anyway. A clear answer video will still get browse traffic, and a story driven video will still get search traffic. Trying to satisfy both up front is what flattens a video into something nobody remembers.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Searching viewers want the answer, browsing viewers want a reason to stay.",
          "Openings for searchers favor clarity, openings for browsers favor curiosity.",
          "Pick one primary intent instead of balancing both.",
          "Accept that the other audience will still arrive on its own.",
        ],
      },
    ],
  },
  {
    slug: "audience2-viewer-intent-across-platforms",
    title: "Viewer Intent Changes from Platform to Platform",
    excerpt:
      "Viewer intent changes from platform to platform, and a title that works on one can flop on another. Adapt the promise to where the video will actually play.",
    date: "2026-05-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "community"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "The same topic meets a different expectation on every platform. A viewer on one app is learning, a viewer on another is passing time, and the identical title can thrive in one place and sink in the other. The video did not change. The reason for watching did.",
          "Creators who repost without adjusting the framing assume intent travels with the file. It does not. Intent is set by the habits of the people using that app, not by the content itself.",
        ],
      },
      {
        heading: "Same topic, different expectation",
        paragraphs: [
          "A long form platform rewards depth, so viewers there expect a payoff worth the minutes they invested. A short form platform rewards the immediate, so viewers there expect the point in the first breath. Move one video to the wrong place and the pacing reads as either rushed or padded.",
          "Even the opening line carries different weight. What feels like a strong hook on a feed can feel like a slow wind up to someone who arrived from a search query.",
        ],
      },
      {
        bullets: [
          "Long form: depth is the promise and patience is assumed.",
          "Short form: the point lands early or never lands at all.",
          "Search led: viewers arrive with a task and low tolerance for delay.",
          "Community led: viewers arrive because they already trust the source.",
        ],
      },
      {
        quote:
          "Reposting is copying a file. Adapting is respecting a different reason for watching.",
      },
      {
        heading: "Rewriting the promise per platform",
        paragraphs: [
          "Before you publish the same idea in a new place, restate the promise for that audience in one line. Change the opening to serve the intent you expect there, then trim or expand the middle to fit how long people are willing to wait.",
          "This does not mean making two unrelated videos. It means keeping the core idea steady while adjusting the entry point, because intent lives at the entry, not in the topic.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Intent comes from platform habits, not from the video itself.",
          "Rewrite the promise before you repost anywhere.",
          "Adjust pacing and the opening to match local expectations.",
          "Keep the core idea steady while the entry point changes.",
        ],
      },
    ],
  },
  {
    slug: "audience2-track-how-viewer-intent-shifts",
    title: "How to Track Shifts in Viewer Intent Over Time",
    excerpt:
      "Viewer intent shifts as your audience grows, and a topic that landed last year can fall flat today. Track the drift before your plan goes stale.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Viewer intent shifts as your audience grows. The beginners who found you early gain skill, and the questions they ask move up a level. A tutorial that would have thrilled them a year ago now bores the crowd you actually have.",
          "Most creators notice this only after a stretch of underperforming videos. The audience changed quietly, the content plan did not, and the mismatch shows up as a slow decline rather than a dramatic one.",
        ],
      },
      {
        heading: "Why intent drifts",
        paragraphs: [
          "Three forces push intent forward. Returning viewers learn and want more depth. New viewers arrive with the old beginner questions, so the room splits. Then the platform starts showing your videos to a slightly different audience based on what performed, which reshapes who shows up next.",
          "None of these forces announce themselves. You see the result in the numbers weeks later, by which point you have made several videos aimed at a viewer who is not in the room anymore.",
        ],
      },
      {
        heading: "Keep a signal log",
        paragraphs: [
          "Write down the intent you aimed at for each video, then note what the comments, questions, and retention actually suggest. A short line per upload is enough. Over a quarter, the log turns vague suspicion into a visible trend.",
          "The log catches the split early. When half the comments ask beginner questions and half ask advanced ones, you know the room has divided and it is time to label content for each level.",
        ],
        bullets: [
          "Note the intent you targeted before publishing.",
          "Record the level of the questions that arrive afterward.",
          "Watch for two audiences asking opposite things.",
          "Compare the log across a quarter, not a single week.",
        ],
      },
      {
        quote:
          "Your audience is a moving target, and the only way to notice the movement is to write down where you aimed.",
      },
      {
        heading: "Review the log each quarter",
        paragraphs: [
          "Every three months, read the log end to end and name the shift in one sentence. If beginner questions now outnumber advanced ones, lean back toward fundamentals. If the reverse is true, add depth and stop explaining what your regulars already know.",
          "A plan that follows the drift stays useful. A plan built once and never revisited slowly drifts away from the people still watching.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Expect intent to move as returning viewers gain skill.",
          "Log what you aimed at and what the audience signaled back.",
          "Spot the split when two groups ask opposite questions.",
          "Revisit the log each quarter and adjust the plan.",
        ],
      },
    ],
  },
];
