import { Activity, BarChart3, Compass, Feather, MessageSquare, Puzzle, Repeat, Search, Target, Users } from "lucide-react";
import type { BlogPost } from "../types";

export const batch240: BlogPost[] = [
  {
    slug: "viewer-feedback-asking-right-questions",
    title: "Asking the Right Questions to Get Viewer Feedback",
    excerpt: "Good viewer feedback starts with good questions. Learn how to ask in a way that pulls out real answers instead of polite noise.",
    date: "2038-05-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        heading: "Ask for the answer you can act on",
        paragraphs: [
          "The best viewer feedback questions ask about a specific moment, not a general feeling. 'What part did you almost skip?' gets you somewhere. 'Did you like it?' gets you a shrug and a thumbs up. If a question cannot change what you do next, cut it.",
          "People answer what they can recall. A viewer who watched yesterday can tell you where they got bored. A viewer asked to rate your whole channel will invent something to be nice. Keep the window small and the subject concrete."
        ]
      },
      {
        heading: "Open questions beat ratings",
        paragraphs: [
          "A one to five star rating tells you a number and hides the reason. Ask the viewer to finish a sentence instead: 'The part that confused me was...' or 'I wanted more of...'. Their words carry detail a scale flattens.",
          "Ratings still have a place when you compare many videos at once. Use them as a screen, then go read the comments under the ones that scored low. The number points you to the video; the words tell you why."
        ]
      },
      {
        quote: "If a question cannot change what you do next, it does not belong in the survey."
      },
      {
        heading: "Keep the survey short",
        paragraphs: [
          "Every extra question costs you completions. Three good questions beat twelve padded ones. Put the one that matters most first, because half your viewers will leave before the end.",
          "Test your survey on a few regulars before you send it wide. Watch where they pause. If they ask what you mean, the question needs a rewrite, not a longer explanation."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask about a specific moment, not the whole video.",
          "Open questions reveal reasons that ratings hide.",
          "Use ratings to screen and comments to explain.",
          "Short surveys get finished more often."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-surveys-versus-comments",
    title: "Viewer Feedback: Surveys Versus Comment Sections",
    excerpt: "Surveys and comments both gather viewer feedback, but they answer different questions. Here is how to use each one without confusing them.",
    date: "2038-05-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Two tools, two jobs",
        paragraphs: [
          "Surveys give you structure and comments give you texture. A survey forces every viewer through the same questions, which makes the results easy to count. Comments let people say whatever they want, which makes them rich and impossible to tally by hand.",
          "Use a survey when you need a number you can track over time. Use comments when you need to understand a feeling you cannot name yet. Reaching for the wrong one wastes the effort."
        ]
      },
      {
        heading: "What comments do well",
        paragraphs: [
          "Comments show you the language viewers use. When the same odd phrase shows up five times, that phrase is a hook waiting to happen. You will never get that from a checkbox.",
          "Comments also surface the wild edge cases. A survey asks about the average viewer; a comment section shows you the obsessed one. Both matter, and they rarely overlap."
        ]
      },
      {
        heading: "Where surveys win",
        paragraphs: [
          "Surveys reach the quiet majority who never post. Silent viewers are often your bulk audience, and their answers shape more of your channel than the loud few. A survey is the only clean way to hear them.",
          "Surveys also let you segment. Split answers by watch time or tenure and the same question can mean different things to new viewers and long time fans. Comments cannot be split this way."
        ]
      },
      {
        quote: "Comments show you the loud edge. Surveys show you the quiet middle."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Surveys give countable structure; comments give detail.",
          "Comments reveal the exact words viewers use.",
          "Surveys reach silent viewers who never comment.",
          "Segment survey answers by watch time to see who is speaking."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-watching-what-viewers-rewatch",
    title: "Watch What Viewers Rewatch to Find Real Value",
    excerpt: "The rewatch graph is one of the most honest viewer feedback signals you have. Find the loops people replay and build more of them.",
    date: "2038-05-08",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Rewatches are the honest signal",
        paragraphs: [
          "A rewatch means a viewer chose to see that moment again, and that choice leaves data. The replay graph in your analytics shows where the same seconds get viewed more than once. Those spikes are free viewer feedback that no comment box captures.",
          "People replay two kinds of things: a dense explanation they needed twice, and a moment they simply enjoyed. Both are worth building more of. The graph cannot tell them apart on its own, so watch the video yourself at those marks."
        ]
      },
      {
        heading: "Read the spikes, then look at the scene",
        paragraphs: [
          "Pull up the video and jump to each replay spike. Ask what happens there. A sharp line, a small joke, a diagram that took three seconds to land: those are the units your audience values.",
          "Write those moments down in plain words. Over a month, the list turns into a style guide built from your own viewers instead of from someone else's advice. That list is worth more than any single report."
        ]
      },
      {
        quote: "A replay is a viewer voting with their time, and the ballot is anonymous."
      },
      {
        heading: "Turn loops into a format",
        paragraphs: [
          "If a three second visual keeps getting replayed, consider a whole video built around that kind of visual. If a certain explanation style loops, lead with it. Rewatches point at the parts of your craft that already work.",
          "Do not chase every spike. Some replays come from confusion, where viewers rewind because they missed something. Check the pacing around the mark before you call it a win."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Replay spikes are honest feedback you did not have to ask for.",
          "Watch the scene at each spike to learn what caused it.",
          "Keep a running list of replayed moments as a style guide.",
          "Separate joyful replays from confusion rewinds."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-reading-analytics-with-context",
    title: "Reading Analytics With Context Before You React",
    excerpt: "Analytics only make sense with context. Learn how to pair numbers with the story around them so viewer feedback leads to good calls.",
    date: "2038-05-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "A number alone explains nothing",
        paragraphs: [
          "A drop in retention is a fact without a reason, and the reason lives outside the chart. Context is the upload schedule, the topic, the thumbnail test, the holiday weekend. Read the number next to those and it starts to speak.",
          "Most panic comes from reading one metric in isolation. Before you change anything, write down three possible causes. If you cannot name a cause, you do not have enough information to act."
        ]
      },
      {
        heading: "Line up the week around it",
        paragraphs: [
          "Put the video beside everything else that happened that week. Did you post on an odd day? Did a bigger creator cover the same topic? Did your last upload pull a different crowd who then left? A chart shows the shape; the calendar shows the why.",
          "Look at the video before and after it too. Reaction to one upload often tells you more about the last one than its own numbers do. Viewers carry habits from video to video."
        ]
      },
      {
        heading: "Separate the metric from the goal",
        paragraphs: [
          "High views with low watch time is not a failure if your goal was reach. Low views with deep watch time is not a failure if your goal was a loyal core. Context includes what you were trying to do in the first place.",
          "Write the goal down before you upload, not after. A goal set in advance turns a wall of numbers into a scorecard you can actually read against."
        ]
      },
      {
        quote: "A metric without a goal is just a number looking for a feeling."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name three possible causes before you act on a dip.",
          "Compare the video to the week and the uploads around it.",
          "Decide the goal before publishing so the numbers have a target.",
          "No context means no reliable conclusion."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-separating-signal-from-noise",
    title: "Separating Signal From Noise in Viewer Feedback",
    excerpt: "Not all viewer feedback deserves a response. Learn how to sort the signal from the noise without dismissing the quiet majority.",
    date: "2038-05-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Signal repeats, noise reacts",
        paragraphs: [
          "One harsh comment is noise, and the same point from twenty viewers is signal. Signal tends to repeat across unrelated people, while noise clusters around a single angry moment. Ask whether a complaint has appeared before you treat it as a pattern.",
          "Recency bias pushes you to fix the last thing you read. Track comments over weeks and the true patterns rise above the daily spikes. A notebook beats a memory here."
        ]
      },
      {
        heading: "Weight by who is talking",
        paragraphs: [
          "A longtime viewer who has watched fifty videos carries more weight than a drive by commenter. Neither is worthless, but they are not equal. Note who is speaking, not just what they said.",
          "New viewers often flag confusion, which is gold for your first minute. Veterans flag depth, which is gold for your middle. Same comment section, two different jobs."
        ]
      },
      {
        quote: "One comment is a mood. The same comment from twenty people is a message."
      },
      {
        heading: "Keep a discard pile",
        paragraphs: [
          "Deliberately set aside feedback you will not act on, and write why. A discard pile keeps you from re-litigating the same noise every week. It also shows you, over time, whether you were right to ignore it.",
          "Review the discard pile once a month. Sometimes the thing you thought was noise turns out to have been early signal. Opinions can shift while you were not looking."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat repeated complaints as signal and one-off jabs as noise.",
          "Weight a comment by the viewer who left it.",
          "Write down what you are ignoring and why.",
          "Revisit the discard pile monthly in case it aged into signal."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-acting-without-losing-your-voice",
    title: "Acting on Viewer Feedback Without Losing Your Voice",
    excerpt: "You can follow viewer feedback and still sound like yourself. Learn where to bend, where to hold, and how to tell the difference.",
    date: "2038-05-17",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        heading: "Bend on delivery, hold on identity",
        paragraphs: [
          "Feedback about pacing, length, and clarity is usually worth taking because it changes how you say something, not who you are. Feedback that asks you to become a different kind of creator is a different conversation. One is craft, the other is character.",
          "Sort every note into those two piles before you decide. Most tension comes from mixing a pacing tweak with an identity demand. Kept apart, each is easier to judge on its own."
        ]
      },
      {
        heading: "Let feedback shape the edges",
        paragraphs: [
          "You can adjust your intro, your examples, and your sign off without touching your core. Think of your voice as the center and the format as the edge. Viewers touch the edge most, so that is where change costs you least.",
          "Run a small change for a few videos and watch the numbers. If the tweak lands, keep it; if it feels wrong, drop it. The center only moves when the evidence is strong and the change still feels like you."
        ]
      },
      {
        quote: "Take every note about craft, and weigh every note about character."
      },
      {
        heading: "Say no on purpose",
        paragraphs: [
          "Some creators drift because they never decide what is off limits. Name three things you will not change no matter how loud the requests get. Writing them down makes the line visible when a popular comment pushes against it.",
          "A clear no also earns trust. Viewers sense when a creator is bending only for approval, and that read is worse than the original complaint. Consistency about your own limits reads as confidence."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sort feedback into craft notes and identity notes.",
          "Test changes at the edges of your format first.",
          "Write down three things you will not change.",
          "Consistency about your limits earns more trust than pleasing everyone."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-closing-the-loop-with-viewers",
    title: "Closing the Loop With the Viewers Who Spoke Up",
    excerpt: "When viewers give feedback, tell them what happened next. Closing the loop turns one comment into ongoing trust and better future input.",
    date: "2038-05-20",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "Tell them what you did",
        paragraphs: [
          "When you act on feedback, say so out loud in a later video. A simple line that you shortened the intro because people asked does more than the fix itself. It tells viewers their input moved something real.",
          "You do not need to credit anyone by name. The point is to make the loop visible. Once viewers see that speaking up changes the channel, they keep speaking up, and they do it with more care."
        ]
      },
      {
        heading: "Explain the no as well as the yes",
        paragraphs: [
          "Explaining a decision you turned down is just as valuable. If people asked for something you will not do, say why in a sentence. A reasoned no respects the request more than silence.",
          "This also sets expectations. Viewers learn that not every ask becomes a feature, because you are balancing the whole channel, not one request. That understanding keeps the tone civil."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mention changes you made so viewers see their input mattered.",
          "Explain refused requests with a short reason.",
          "Visible follow-through encourages more thoughtful feedback.",
          "Closing the loop is a habit, not a one time gesture."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-handling-conflicting-requests",
    title: "Handling Conflicting Feedback From Your Viewers",
    excerpt: "Viewers will ask for opposite things at the same time. Here is how to weigh conflicting feedback and make a call you can defend.",
    date: "2038-05-23",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Conflict usually means two audiences",
        paragraphs: [
          "When one group wants longer videos and another wants shorter ones, they are often not the same viewers. The conflict is a signal that your audience has split into camps. Your job is to decide which camp you are building for.",
          "Look at watch time by group before you pick. If the long video fans watch twice as deep, their requests carry more weight for a channel built on depth. Data settles arguments that opinion keeps alive."
        ]
      },
      {
        heading: "You cannot satisfy everyone at once",
        paragraphs: [
          "Trying to please both camps often produces a middle that pleases neither. A video designed to be short and deep ends up being neither. Pick a side and let the format commit.",
          "You can still serve the other group elsewhere. A second format, a playlist, or a livestream gives the minority a home without warping your main channel. Separate spaces beat blended compromises."
        ]
      },
      {
        heading: "Make the call and say why",
        paragraphs: [
          "Once you decide, state your reasoning in a sentence. People accept a clear choice far more easily than a vague shuffle that tries to hide it. Decisiveness reads as respect.",
          "Revisit the call in a few months. Audiences change, and a choice that was right in spring can be wrong by fall. Note the date you decided so you know when to look again."
        ]
      },
      {
        quote: "Pleasing both sides at once usually pleases no one."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Conflicting requests often mean you have two audiences.",
          "Use watch time to weigh which group matters more for your goal.",
          "Give the smaller group its own format instead of blending.",
          "State your reasoning and set a date to revisit it."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-for-new-formats",
    title: "Using Viewer Feedback When You Test New Formats",
    excerpt: "New formats need different feedback than your core videos. Learn what to ask and what to ignore while a format is still finding its feet.",
    date: "2038-05-26",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Judge a new format differently",
        paragraphs: [
          "A first attempt at a new format will not match your core videos, and holding it to that bar kills good ideas early. Judge a test on whether it found any traction at all, not on whether it beat your best work.",
          "Ask whether the right people watched it. A format aimed at new viewers that pulled mostly veterans tells you the packaging missed, not the idea. Look at who showed up before you judge the result."
        ]
      },
      {
        heading: "Ask about the format, not the episode",
        paragraphs: [
          "When you test something new, ask viewers about the format itself. Did the structure work? Would you watch another like this? Episode level feedback is noisy on a first run, but format level feedback shows up clearly.",
          "Separate the idea from the execution. Viewers often reject a rough first episode while liking the concept. Read between the lines so you do not throw out a good format over a bad first cut."
        ]
      },
      {
        quote: "A first draft is a question, not a verdict."
      },
      {
        heading: "Give a format room to breathe",
        paragraphs: [
          "Three episodes is a fair test. One is a fluke, two is a trend, three tells you whether there is a floor. Decide the number in advance so a weak opener does not spook you into quitting.",
          "Keep the surrounding variables steady during a test. Do not change your schedule and your thumbnail style in the same month you debut a format, or you will not know what moved the numbers."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge a new format on traction, not on beating your best video.",
          "Ask about the structure, not one rough episode.",
          "Set the number of test episodes before you start.",
          "Change one variable at a time so the feedback stays readable."
        ]
      }
    ]
  },
  {
    slug: "viewer-feedback-building-a-habit-of-iteration",
    title: "Building a Habit of Iteration From Viewer Feedback",
    excerpt: "Iteration works best as a routine, not a rescue. Build a simple loop that turns viewer feedback into steady, small improvements.",
    date: "2038-05-29",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "iteration"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "Make it a loop, not a rescue",
        paragraphs: [
          "Treat feedback as a weekly loop with the same steps each time: collect, sort, pick one change, ship it, note the result. A repeatable loop beats a frantic overhaul you only attempt after a bad month.",
          "Small steady changes compound. One tweak per week is fifty tweaks a year, and you can trace each back to what a viewer told you. That trail is your real progress."
        ]
      },
      {
        heading: "Pick one change at a time",
        paragraphs: [
          "Change too many things at once and you learn nothing. Isolate one tweak, ship it across a few videos, then read the response. Slow on purpose is faster than guessing in bulk.",
          "Write the change and the reason in a log. Future you will forget why a choice was made, and the log turns a vague memory into a decision you can revisit with evidence."
        ]
      },
      {
        heading: "Keep the loop honest",
        paragraphs: [
          "The trap is collecting feedback and never acting, which feels like work without the result. Cap the collection time and force a decision at the end. A loop that never closes is just reading.",
          "Celebrate the small wins out loud. When a viewer says the pacing felt better, that is your loop paying off. Noticing those moments keeps the habit alive through the quiet weeks."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Run feedback as a fixed weekly loop with clear steps.",
          "Ship one change at a time so the result is readable.",
          "Keep a short log of what you changed and why.",
          "Force a decision at the end so the loop always closes."
        ]
      }
    ]
  }
];
