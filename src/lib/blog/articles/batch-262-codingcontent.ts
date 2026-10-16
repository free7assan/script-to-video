import { Activity, Clock, Film, Layers, MessageSquare, Puzzle, Repeat, Rocket, Search, Type } from "lucide-react";
import type { BlogPost } from "../types";

export const batch262: BlogPost[] = [
  {
    slug: "coding-content-screen-recording-setup",
    title: "Screen Recording Setup For Coding Videos That Works",
    excerpt: "A practical screen recording setup for coding content, from editor theme to mic placement, so your tutorials stay readable on every screen today.",
    date: "2040-03-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Screen recording for coding content comes down to two things: a clean capture of your editor and audio that does not fight the viewer. Nail those first, then think about overlays and intro animations. Beginners often do it backwards and then wonder why people leave after ten seconds.",
          "The rest of this piece walks through the parts that matter, in the order you should fix them. None of it requires expensive gear, only a bit of discipline before you hit record."
        ]
      },
      {
        heading: "Match your editor theme to the platform",
        paragraphs: [
          "Most viewers watch on phones in bright rooms. A dark editor with low contrast turns your code into a grey smear. Pick a theme with strong contrast, then open the recording on your own phone before you commit to a full video.",
          "Font size matters more than most people admit. If a line is comfortable to read at arm's length on a laptop, it is probably too small for a phone. Bump it up until the text feels almost comically large to you, because the compression on streaming platforms will shrink it again."
        ]
      },
      {
        quote: "If a viewer has to squint, they have already left."
      },
      {
        heading: "Fix the audio before the picture",
        paragraphs: [
          "A decent USB mic beats a great camera every time. People forgive soft footage, but they will not forgive a hollow room or a fan humming under every sentence.",
          "Record in a small space with soft furniture when you can. A closet with coats hanging in it sounds better than a big empty office, and it costs nothing to set up."
        ]
      },
      {
        heading: "Keep a repeatable capture routine",
        paragraphs: [
          "Close the apps you do not need, silence notifications, and hide the dock or taskbar. A message popping up mid-recording ruins a take and pulls attention away from your code.",
          "Save your window layout as a preset. When every video starts from the same setup, you spend your energy on the lesson instead of rearranging panels for the fifth time."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a high contrast theme and test it on a phone.",
          "Invest in audio before you invest in a camera.",
          "Use a repeatable layout so setup stops eating your time.",
          "Hide notifications and docks before every take."
        ]
      }
    ]
  },
  {
    slug: "coding-content-teaching-concept-steps",
    title: "How To Teach A Coding Concept In Clear Steps That Stick",
    excerpt: "Teaching a coding concept in steps means starting from the smallest working version, then adding one idea at a time so viewers never lose the thread.",
    date: "2040-03-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Teaching a coding concept in steps means deciding on the smallest working version first, then adding one idea at a time. The mistake most tutorials make is showing the finished thing before the viewer understands why it exists.",
          "A concept explained in order gives the viewer somewhere to put each new idea. Skip that order and you are asking them to hold five loose facts in their head at once."
        ]
      },
      {
        heading: "Open with the problem, not the syntax",
        paragraphs: [
          "Start by showing what breaks without the concept. If you are teaching closures, write code that fails because a variable leaked. The syntax means far more once the viewer has felt the problem it solves.",
          "Keep that opening short. Thirty seconds of a broken program is enough to earn attention before you start typing the real thing."
        ]
      },
      {
        quote: "People remember the fix far better when they have seen the wound."
      },
      {
        heading: "Add one moving part per step",
        paragraphs: [
          "Each step should change a single thing. If step four introduces a new function and a new data shape at the same time, the viewer cannot tell which change produced the result.",
          "Say what you are about to change, make the change, then run it. That loop gives the audience a chance to predict the outcome, which is how understanding actually forms."
        ]
      },
      {
        heading: "Check understanding before moving on",
        paragraphs: [
          "Pause and summarize in plain words before you leave a step. One sentence like 'so the function now remembers the value from before' does more than another code example.",
          "If you skip these checkpoints, viewers who fall behind stay behind. They rarely rewind, they just leave."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with the problem the concept solves.",
          "Change one thing per step and run it.",
          "Summarize each step in plain language.",
          "Let viewers predict outcomes before you run the code."
        ]
      }
    ]
  },
  {
    slug: "coding-content-live-coding-no-dead-air",
    title: "Live Coding Sessions Without Dead Air On Camera",
    excerpt: "Live coding without dead air starts with a plan for what you will type and what you will say, so the camera never catches you staring at a blank file.",
    date: "2040-03-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Live coding without dead air is a skill you practice, not a personality trait. You keep talking because you planned what to type before you hit record, not because you are naturally chatty.",
          "The silence problem almost always traces back to preparation. When you know the next three moves, your mouth has something to do while your hands catch up."
        ]
      },
      {
        heading: "Plan the route before you drive",
        paragraphs: [
          "Write the steps as comments before the session starts. Then you narrate a route you already know instead of discovering it live.",
          "This does not fake spontaneity. It removes the parts where you would otherwise sit in silence trying to recall an API signature."
        ]
      },
      {
        heading: "Narrate the decision, not the keystrokes",
        paragraphs: [
          "Saying 'I am typing for' teaches nobody anything. Saying 'I am using a map here because I need to look up values by key later' gives the viewer a reason.",
          "Talk about tradeoffs while you work. Even a quick line about the option you rejected keeps the audience inside your thinking."
        ]
      },
      {
        quote: "The viewer cannot see your thoughts, only your screen and your voice."
      },
      {
        heading: "Have filler moves ready",
        paragraphs: [
          "Keep a few small tasks on hand for the moments you need to think. Formatting a file or renaming a variable buys you time without producing dead air.",
          "If you truly need a pause, say so. 'Give me a second to check this' is honest and it keeps the audience with you rather than wondering if the stream froze."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Script the route as comments before you record.",
          "Explain why you chose something, not what keys you pressed.",
          "Keep small filler tasks ready for thinking moments.",
          "Announce pauses instead of going silent."
        ]
      }
    ]
  },
  {
    slug: "coding-content-project-based-tutorials",
    title: "Project Based Tutorials That Actually Teach Coding",
    excerpt: "Project based tutorials that teach coding work best when you build something real, finish it on camera, and explain every choice along the way.",
    date: "2040-03-10",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "A project based tutorial teaches coding by carrying one small build from empty folder to working result. The viewer learns each idea at the moment the project demands it, which is how most of us learn on the job.",
          "The format fails when the project is too big or too fake. Pick something you would actually use, and keep it small enough to finish in one sitting."
        ]
      },
      {
        heading: "Pick a project you can actually finish",
        paragraphs: [
          "A command line tool or a single page app is plenty. You want a result the audience can run at the end, not a half-built system that trails off.",
          "Scope it so every feature has a clear reason to exist. If a piece is there only to pad the length, cut it."
        ]
      },
      {
        heading: "Build in visible layers",
        paragraphs: [
          "Start with the ugliest working version. Get input, print output, ignore polish. Then improve it in front of the camera so the viewer sees the shape of real work.",
          "Each new layer should answer a question the previous one raised. That gives the build a natural rhythm instead of a random tour of features."
        ]
      },
      {
        quote: "A finished small project beats an unfinished ambitious one every time."
      },
      {
        heading: "Show the messy middle",
        paragraphs: [
          "Real coding involves wrong turns. Show a function that does not work, then fix it on camera. That is often the most useful part of the whole video.",
          "You do not need to fake mistakes. Just stop editing them out so aggressively, and explain what you were thinking when the plan changed."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose a small project you would use yourself.",
          "Build the ugly working version before you polish.",
          "Let each layer answer a question the last one raised.",
          "Keep some wrong turns in the final edit."
        ]
      }
    ]
  },
  {
    slug: "coding-content-showing-your-debugging",
    title: "How To Show Your Debugging Without Losing Viewers",
    excerpt: "Showing your debugging on camera means reproducing the bug first, narrating every guess, and turning a dead end into a lesson viewers can follow.",
    date: "2040-03-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Showing your debugging on camera turns one of the least visible coding skills into the main event. Most tutorials hide the hunt and present only the fix, which leaves viewers without the method.",
          "Done well, a debugging video teaches a process rather than a solution. The viewer walks away knowing how to approach the next bug, not just this one."
        ]
      },
      {
        heading: "Reproduce the bug on camera",
        paragraphs: [
          "Do not skip to the error message. Run the program, show the failure, and confirm exactly when it happens. Reproduction is half the work and it is rarely shown.",
          "Once the failure is visible, state what you expected and what you saw. That gap is the thing you are about to close."
        ]
      },
      {
        heading: "Think out loud while you narrow it down",
        paragraphs: [
          "Talk through your guesses even when they are wrong. 'If this is a caching problem, clearing the cache should fix it' tells the viewer how you are testing an idea.",
          "Use tools that make the search visible, like breakpoints or print statements. The viewer learns the instrument, not just the answer."
        ]
      },
      {
        quote: "The fix is a fact. The search is the skill."
      },
      {
        heading: "End with the fix and the reason",
        paragraphs: [
          "When you find the cause, show the change and explain why it works. Do not stop at 'this fixed it' because that leaves the mechanism unexplained.",
          "Finish by naming the lesson in a general way. If the bug came from assumption about types, the viewer can carry that habit into their own work."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reproduce the failure before you explain it.",
          "State your guesses and test them on camera.",
          "Use visible tools like breakpoints and prints.",
          "Close by naming the general lesson behind the fix."
        ]
      }
    ]
  },
  {
    slug: "coding-content-explaining-errors",
    title: "Explaining Coding Errors In A Way Beginners Get",
    excerpt: "Explaining coding errors in a way beginners get means reading the message out loud, naming the cause, and showing the fix where it actually happens.",
    date: "2040-03-16",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Explaining coding errors in a way beginners get means treating the message as a puzzle to unpack, not a verdict to accept. Beginners skip the text because it looks like noise, so your job is to read it for them.",
          "The goal is to leave the viewer able to read that same error alone next time. Explain the pattern once and it transfers to dozens of future bugs."
        ]
      },
      {
        heading: "Read the error out loud",
        paragraphs: [
          "Slow down and read the whole message on camera. Point at the file name, the line number, and the sentence that describes the problem.",
          "Many viewers have never had anyone walk them through a stack trace. Showing them where to look is half the lesson."
        ]
      },
      {
        heading: "Translate jargon into plain words",
        paragraphs: [
          "Phrases like undefined is not a function sound like a foreign language until someone says 'you tried to call something that does not exist yet.'",
          "Keep a plain version for each term you use. That small translation does more than a definition ever will."
        ]
      },
      {
        quote: "An error message is the computer telling you exactly what it expected."
      },
      {
        heading: "Show the fix in context",
        paragraphs: [
          "Do not paste a corrected line in isolation. Show the surrounding code, make the change, and run the program again so the viewer sees the error disappear.",
          "Then state the rule in one sentence. A short rule is easier to remember than a specific patch."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the full message and point at the important parts.",
          "Translate jargon into everyday language.",
          "Apply the fix inside the surrounding code.",
          "Finish with one short rule viewers can reuse."
        ]
      }
    ]
  },
  {
    slug: "coding-content-series-vs-one-off",
    title: "Tutorial Series Versus One Off Videos For Coders",
    excerpt: "Tutorial series and one off videos for coders solve different problems, so pick the format that matches the depth of what you want to teach.",
    date: "2040-03-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Tutorial series and one off videos for coders answer different questions. A series builds a skill over time, while a single video solves a specific problem in one sitting.",
          "Choosing wrong wastes effort. Start a series for something viewers can learn in one video and you will lose them at part three."
        ]
      },
      {
        heading: "When a series pays off",
        paragraphs: [
          "Series work when the topic has real prerequisites. A full framework or a language feature set needs room to breathe, and each episode can build on the last.",
          "They also reward returning viewers. People who finish part one are likely to watch part two, which gives you a reason to keep going."
        ]
      },
      {
        heading: "When a single video wins",
        paragraphs: [
          "A tight, self contained fix performs better for search and for sharing. Someone searching for one error wants the answer, not a ten part journey.",
          "One offs also let you test ideas fast. Ship a topic, watch the numbers, and build a series only where the interest proves real."
        ]
      },
      {
        quote: "A series is a commitment. Make sure the topic deserves one before you ask viewers to make it too."
      },
      {
        heading: "How to decide before you commit",
        paragraphs: [
          "Ask whether the viewer can finish the task after one video. If yes, make it one. If they would be stuck without more, plan the series.",
          "You can also test with a single video first and expand it later. That keeps you from writing eight scripts for a topic nobody wanted."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use series when the topic has real prerequisites.",
          "Use one offs for focused, searchable fixes.",
          "Test interest with a single video before expanding.",
          "Ask if one video leaves the viewer able to finish."
        ]
      }
    ]
  },
  {
    slug: "coding-content-code-readability-on-screen",
    title: "Code Readability On Screen For Tutorial Audiences",
    excerpt: "Code readability on screen decides whether a coding tutorial lands, so control what is visible, raise the contrast, and zoom into the lines that matter.",
    date: "2040-03-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Code readability on screen is the difference between a tutorial people follow and one they abandon. It has little to do with how clever your code is and everything to do with what the viewer can see.",
          "Small screens punish dense files. Treat every visible line as a cost the audience pays, and spend that budget on the code that actually matters."
        ]
      },
      {
        heading: "Control the file, not the whole repo",
        paragraphs: [
          "Close the sidebars, tabs, and file trees you are not using. A busy editor splits attention and makes the important line harder to find.",
          "If a concept spans several files, show only the active one and name the others in speech. The viewer does not need to see your entire project to follow a point."
        ]
      },
      {
        heading: "Limit what is visible",
        paragraphs: [
          "Keep functions short on screen. If a snippet runs past a comfortable screen height, break it up or hide the parts you are not discussing.",
          "Dim or comment out code that is not in play. A clear visual boundary helps the eye land on the part that changed."
        ]
      },
      {
        quote: "Your editor can hold a thousand lines. Your viewer can track about ten."
      },
      {
        heading: "Use motion with purpose",
        paragraphs: [
          "Zoom in when you reach the key line, then zoom back out. Sudden jumps and constant scrolling force the viewer to rebuild their map of the file.",
          "Avoid fast typing on camera. Slow down when you introduce anything new, then speed up only for the parts the audience already understands."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Close sidebars and hide unused project files.",
          "Keep snippets short enough to fit the screen.",
          "Zoom deliberately instead of scrolling constantly.",
          "Type slowly when you introduce something new."
        ]
      }
    ]
  },
  {
    slug: "coding-content-keeping-pace-for-learners",
    title: "Keeping Pace For Learners In Coding Tutorials",
    excerpt: "Keeping pace for learners in coding tutorials is about matching speed to difficulty, pausing at hard parts, and resisting the urge to rush yourself.",
    date: "2040-03-25",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Keeping pace for learners in coding tutorials comes down to matching your speed to the difficulty of the moment. Fast is fine for setup, fatal for the concept the whole video exists to teach.",
          "You already know the material, so everything feels easy. The viewer is meeting it for the first time and needs the extra seconds you want to cut."
        ]
      },
      {
        heading: "Silence is not the enemy",
        paragraphs: [
          "A short pause after showing a result gives the audience time to think. Constant talking can bury the idea under noise.",
          "Leave the code on screen for a beat before you move on. That small gap is where understanding settles."
        ]
      },
      {
        heading: "Match the pace to the concept",
        paragraphs: [
          "Move quickly through boilerplate and imports. Save your slow, careful delivery for the part viewers cannot guess.",
          "If you find yourself rushing a key explanation, that is a signal to slow down rather than a reason to trim it."
        ]
      },
      {
        quote: "Speed is a tool. Use it where the viewer is safe, not where they are learning."
      },
      {
        heading: "Let viewers breathe at hard parts",
        paragraphs: [
          "Repeat the tricky step in different words. Saying the same idea twice rarely feels redundant to someone meeting it fresh.",
          "Watch your own recording and note where you would rewind. Those spots are where the pace was too fast for the people you are teaching."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Speed through boilerplate and slow down on concepts.",
          "Pause briefly after results so ideas can land.",
          "Repeat hard steps in different words.",
          "Review your recordings for where you would rewind."
        ]
      }
    ]
  },
  {
    slug: "coding-content-building-a-coding-channel",
    title: "Building A Coding Channel That Grows Past Zero",
    excerpt: "Building a coding channel that grows past zero takes one narrow promise, a schedule you can keep, and patience while the early videos find people.",
    date: "2040-03-28",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "tech", "education"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Building a coding channel that grows past zero starts with a promise narrow enough that people can repeat it to a friend. Channels that try to cover everything rarely get remembered for anything.",
          "Growth is slow at first because trust takes time. The early videos mostly fail to find an audience, and that is normal rather than a sign to quit."
        ]
      },
      {
        heading: "Start with one narrow promise",
        paragraphs: [
          "Decide who the channel helps and what problem it solves. 'Backend debugging for new developers' gives viewers a reason to subscribe; 'programming' does not.",
          "You can widen later once people trust the core. Starting broad usually means starting invisible."
        ]
      },
      {
        heading: "Ship on a schedule you can keep",
        paragraphs: [
          "The best schedule is the one you can hold for a year. One careful video a week beats a burst of five followed by silence.",
          "Consistency also teaches you faster. Every upload shows you what worked, which is hard to see from a single video."
        ]
      },
      {
        quote: "A channel is a habit you build in public, not a launch you survive."
      },
      {
        heading: "Read the comments as a curriculum",
        paragraphs: [
          "Questions in the comments tell you what to make next. If three people ask the same thing, that is your next video handed to you.",
          "Treat each answer as a small debt you can repay with a follow up. Over time those follow ups become the backbone of the channel."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one narrow promise you can repeat clearly.",
          "Pick a publishing schedule you can keep for a year.",
          "Mine comments for the next video topic.",
          "Expect slow growth before the audience arrives."
        ]
      }
    ]
  }
];
