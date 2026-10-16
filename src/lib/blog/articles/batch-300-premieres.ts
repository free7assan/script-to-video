import {
  BarChart3,
  Clock,
  Compass,
  Film,
  Flag,
  Layers,
  MessageSquare,
  Repeat,
  Rocket,
  Users,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch300: BlogPost[] = [
  {
    slug: "premieres-what-they-are-good-for",
    title: "What YouTube Premieres Are Actually Good For Today",
    excerpt:
      "A YouTube premiere is a scheduled launch with a countdown and live chat. Learn what it is good for and when a normal upload serves you better.",
    date: "2043-05-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A YouTube premiere publishes a video on a schedule and pairs it with a countdown and a live chat. It exists for one thing above all: gathering your audience in a single moment instead of letting them drift in whenever the feed surfaces the upload.",
          "That shared moment is the whole point. The waiting screen and the chat exist to concentrate attention that a normal upload spreads across days.",
        ],
      },
      {
        heading: "What a premiere is good for",
        paragraphs: [
          "A premiere works when the video benefits from company. An announcement, a milestone, a finale, or a release people have been asking about all gain something when the audience watches together and reacts in real time.",
          "It also works as a deadline for you. The scheduled start forces the edit to finish, which helps creators who keep polishing a video that is already done.",
        ],
      },
      {
        heading: "Where it does not help",
        paragraphs: [
          "None of that makes a premiere a better container for a routine tutorial or a vlog. Those videos want to be found whenever someone needs them, and a countdown only delays that.",
          "If your audience is not in the habit of showing up at a set time, a premiere can become a quiet room with an empty chat. The format cannot manufacture an audience that was never going to gather.",
        ],
      },
      {
        quote:
          "A premiere is a scheduled party. You can send invitations, but you cannot force anyone to dance.",
      },
      {
        heading: "The attention trade",
        paragraphs: [
          "Concentrated attention has a cost. The video no longer gets the slow trickle of views a normal upload collects in the first hour, because everything is pushed toward one start time.",
          "What you get instead is a spike, a chat you can actually read, and a reason for the audience to treat the video as an event rather than a backlog item.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A premiere concentrates attention at one start time instead of spreading it out.",
          "It suits announcements, milestones, finales, and releases people already expect.",
          "It gives you a hard deadline to finish the edit.",
          "Routine videos are usually better served by a normal upload.",
          "An empty chat means the audience was not ready to gather, not that the idea failed.",
        ],
      },
      {
        heading: "Deciding in advance",
        paragraphs: [
          "Pick the premiere when the video has a reason to be watched together. Pick the normal upload when the video needs to be found on demand.",
          "Most channels do not need premieres on every video. They need a handful of moments where the audience has a good reason to clear an hour and show up.",
        ],
      },
    ],
  },
  {
    slug: "premieres-scheduling-a-premiere",
    title: "Scheduling a YouTube Premiere Without the Guesswork",
    excerpt:
      "Scheduling a premiere is more than picking a time. This guide covers countdown timing, notification windows, and a setup your audience notices.",
    date: "2043-05-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Scheduling a premiere means choosing a start time your audience can actually keep, then setting the countdown long enough to remind them and short enough to stay relevant. A good default is two to three days out, announced in a post and an update.",
          "The schedule lives in the video's visibility settings. You set the date and time, and the platform handles the waiting page and the notification when the countdown ends.",
        ],
      },
      {
        heading: "Pick a time your audience keeps",
        paragraphs: [
          "Start from when your viewers are already online. Check the audience tab for the hours your regulars tend to watch, then place the premiere inside that window.",
          "Avoid competing with your own schedule. Do not stack a premiere on the same evening you normally drop two other videos, because you will split the attention you are trying to gather.",
        ],
      },
      {
        heading: "How long the countdown should run",
        paragraphs: [
          "Two to three days gives the platform time to surface the waiting page and gives viewers time to see the reminder. A one week countdown can work for a big event, but interest cools if the gap stretches past that.",
          "A premiere scheduled for the next hour mostly reaches people who are already on the site. That can be fine for a small, loyal audience and a poor fit for a channel trying to pull new viewers.",
        ],
      },
      {
        quote:
          "The countdown is a promise about when to return. Break the promise by moving the slot and you teach the audience not to trust the next one.",
      },
      {
        heading: "Setting the notification",
        paragraphs: [
          "Premieres give you a notification option that fires when the video goes live. Use it when the video is important, because viewers who opt in expect a real event and tune out if the alert is routine.",
          "If you fire that notification every week, it stops feeling like news. Save it for the videos you genuinely want a crowd for.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Two to three days is a reliable countdown length for most channels.",
          "Schedule the start inside the hours your regular viewers already watch.",
          "Do not stack a premiere on top of your other uploads.",
          "The notification is a scarce resource, so spend it on real events.",
          "A short countdown suits loyal audiences, not cold ones.",
        ],
      },
      {
        heading: "The checklist before you publish",
        paragraphs: [
          "Confirm the thumbnail and title are final, because the waiting page shows the packaging for the entire countdown. A weak thumbnail will be seen many times before the premiere starts.",
          "Write the description, pin a comment with the start time, and tell the audience in your last video. Scheduling is the easy part. Making the slot worth keeping is the work.",
        ],
      },
    ],
  },
  {
    slug: "premieres-building-a-countdown",
    title: "Building a Countdown That Makes Premieres Feel Big",
    excerpt:
      "A countdown is the one moment a premiere has over a normal upload. Here is how to build anticipation without overselling a video people can watch later.",
    date: "2043-05-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "A countdown builds anticipation by showing viewers a start time they can plan around and a waiting page they can share. It works best when the video itself has something to look forward to, because a clock over an ordinary video is just a delay.",
          "The countdown is not decoration. It is the mechanism that converts a passive subscriber into someone who shows up at a specific hour.",
        ],
      },
      {
        heading: "What the waiting page shows",
        paragraphs: [
          "The waiting page carries the thumbnail, the title, the description, and the live chat. It is the first real impression of the video, and it stays up for the entire countdown.",
          "Treat it like a landing page. Put the strongest reward in the title and the most useful context in the description, because people judge the video before a single frame plays.",
        ],
      },
      {
        heading: "Give the wait a job",
        paragraphs: [
          "Post a teaser clip or a short that points at the premiere. Share a still from the video. Ask a question in the community tab that the video will answer.",
          "Every small prompt gives the audience a reason to come back to the waiting page, and each return makes the start time harder to forget.",
        ],
      },
      {
        quote:
          "Anticipation is not built by a timer. It is built by giving people something specific to anticipate.",
      },
      {
        heading: "Set expectations, not hype",
        paragraphs: [
          "Tell viewers what they will get, not how amazing it will be. A countdown over a vague promise creates a small letdown the moment the video starts.",
          "When the promise is plain, the countdown becomes useful rather than theatrical. The audience arrives ready for the thing you described.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The countdown converts subscribers into viewers who show up on time.",
          "The waiting page is a landing page, so finalize its packaging.",
          "Teaser clips and community posts give the wait a purpose.",
          "Specific promises beat inflated ones once the video starts.",
          "A timer over an ordinary video only delays it.",
        ],
      },
      {
        heading: "When the clock should be short",
        paragraphs: [
          "If the video is timely, keep the countdown brief so it does not age before it starts. If it is evergreen, a longer window can work, because the topic will still matter in a week.",
          "Match the length to the shelf life of the idea. A news reaction cannot wait, while a deep tutorial can afford a few more days.",
        ],
      },
    ],
  },
  {
    slug: "premieres-live-chat-during",
    title: "Live Chat During a Premiere and How to Use It",
    excerpt:
      "Live chat turns a premiere into a room instead of a broadcast. Learn how to open the chat, keep it moving, and use comments as content for later videos.",
    date: "2043-05-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Live chat turns a premiere into a shared room. Viewers type while the video plays, and you can appear in the chat to answer questions, thank people, and steer the conversation.",
          "The chat is the feature that separates a premiere from a normal upload. It gives the audience a way to react in the moment and gives you material you can reuse later.",
        ],
      },
      {
        heading: "Opening the chat before the start",
        paragraphs: [
          "The chat is live during the countdown as well as the video. Greet early arrivals and let them settle in, because the people who show up first are usually your most loyal viewers.",
          "A warm open sets the tone for everyone who follows. If the first messages are friendly, later arrivals copy that tone without being told.",
        ],
      },
      {
        heading: "Keeping the room moving",
        paragraphs: [
          "Ask a question tied to the video, then react to the answers. When you respond to one person, others type to get the same attention, and the room begins to move on its own.",
          "Drop small pieces of context that are not in the video. Behind the scenes details give the chat something to carry between your replies.",
        ],
      },
      {
        quote:
          "A live chat is a room, and rooms take their mood from whoever speaks first.",
      },
      {
        heading: "Turning chat into content",
        paragraphs: [
          "Screenshot the best questions and comments. They become community posts, short responses, and ideas for the next video.",
          "Viewers who see their name in a later post learn that the chat is read, which makes them likelier to return for the next premiere.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The chat runs during the countdown and the video.",
          "Early arrivals set the tone for the whole room.",
          "Questions and behind the scenes notes keep the chat active.",
          "Good comments become posts and future video ideas.",
          "A read chat brings people back to the next event.",
        ],
      },
      {
        heading: "When the chat is quiet",
        paragraphs: [
          "A quiet chat is not a failure. Some audiences watch without typing. Keep talking anyway, and ask simpler questions so the barrier to replying drops.",
          "You can also seed the room yourself. Answer a question nobody asked, or point out a detail in the video, and let the audience find its voice.",
        ],
      },
    ],
  },
  {
    slug: "premieres-versus-normal-upload",
    title: "Deciding Premieres Versus a Normal Upload on YouTube",
    excerpt:
      "A premiere and a normal upload are not the same tool. Compare watch time, notifications, and chat to pick the right one for each video you publish.",
    date: "2043-05-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A premiere gathers the audience at one time with a countdown and a chat. A normal upload publishes immediately and collects views whenever the feed and search surface it.",
          "The choice is about timing and attention, not about which one is better in general.",
        ],
      },
      {
        heading: "How each one treats attention",
        paragraphs: [
          "A premiere concentrates attention into one hour. A normal upload spreads that attention across days and weeks, and it keeps gathering long after the first day.",
          "Concentrated attention is louder. Spread attention is longer. Which one you want depends on the video and the moment.",
        ],
      },
      {
        heading: "What a premiere adds",
        paragraphs: [
          "A premiere adds a waiting page, a countdown, a chat, and a notification. It also adds a deadline for you and a set time for the audience to remember.",
          "A normal upload adds nothing extra. It is faster to publish, and it never asks the audience to be somewhere at a specific hour.",
        ],
      },
      {
        quote:
          "Premieres are for moments. Normal uploads are for the rest of the calendar.",
      },
      {
        heading: "Where the chat earns its keep",
        paragraphs: [
          "The chat only helps if people use it. On channels with an active comment culture, it can carry a whole hour. On quieter channels, it can sit empty while the video plays.",
          "Check your recent comment sections before you commit. If viewers rarely reply, the chat may not be the draw you hope for.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A premiere concentrates attention, a normal upload spreads it.",
          "Premieres add a countdown, chat, notification, and a deadline.",
          "Normal uploads are faster and stay discoverable on demand.",
          "The chat only helps on channels where viewers already talk.",
          "Match the format to the video, not to habit.",
        ],
      },
      {
        heading: "A simple rule",
        paragraphs: [
          "Use a premiere when the video is an event the audience knows about in advance. Use a normal upload when the video should be found by someone searching for it next month.",
          "Most channels run both. They save premieres for the handful of videos that deserve a crowd and publish everything else the ordinary way.",
        ],
      },
    ],
  },
  {
    slug: "premieres-promoting-ahead-of-time",
    title: "Promoting a Premiere Before It Goes Live on YouTube",
    excerpt:
      "Promoting a premiere starts well before the countdown. Learn the teaser, the reminder, and the channel post that get the right viewers into the chat.",
    date: "2043-05-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Promoting a premiere means telling the audience the date, reminding them as it approaches, and giving them a reason to set that hour aside. The work happens before the countdown ends, not during it.",
          "A premiere with no promotion is a scheduled video most people will miss. The countdown only helps viewers who already know it exists.",
        ],
      },
      {
        heading: "The teaser",
        paragraphs: [
          "Post a short clip or image a week out that names the premiere and the topic. Keep it simple, with the date visible and one reason to care.",
          "The teaser plants the date. Viewers may not act on it right away, but the reminder later lands on familiar ground.",
        ],
      },
      {
        heading: "The reminder",
        paragraphs: [
          "Send the notification and a community post on the day of the premiere. This is the message that converts interest into attendance.",
          "One reminder works better than five. Repeat messages train the audience to ignore the next one.",
        ],
      },
      {
        quote:
          "Promotion is not begging for attendance. It is telling people the time so they can decide whether to come.",
      },
      {
        heading: "Reaching beyond subscribers",
        paragraphs: [
          "Shorts, other platforms, and email lists can all point at the premiere. Each channel reaches a different slice of the audience, and the countdown benefits from every one of them.",
          "Cross promotion works best when the message is consistent. Use the same date and the same promise everywhere so the event feels real.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Promotion happens before the countdown ends.",
          "A teaser plants the date, a reminder brings people back.",
          "One strong reminder beats several weak ones.",
          "Cross promotion widens reach if the message stays consistent.",
          "An unpromoted premiere reaches only the audience that already knows.",
        ],
      },
      {
        heading: "Timing the push",
        paragraphs: [
          "Start light and finish loud. A teaser a week ahead, a reminder the day of, and a final nudge an hour before the start is a schedule that does not fatigue the audience.",
          "Keep the ask small and specific. Come watch at this time is easier to act on than a vague plea for support.",
        ],
      },
    ],
  },
  {
    slug: "premieres-for-a-small-audience",
    title: "Running a Premiere for a Small Audience Without a Crowd",
    excerpt:
      "A small audience can make a premiere feel warmer and easier to run. Here is how to set one up when you have fewer than a hundred regular viewers.",
    date: "2043-05-20",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "A premiere for a small audience works the same way as a large one. You schedule a start time, run a countdown, and open a chat, and the intimacy can make the event feel warmer than a packed room.",
          "Small is not a problem to fix. It is a different room, and it rewards a different style of hosting.",
        ],
      },
      {
        heading: "Set the size you expect",
        paragraphs: [
          "Plan for the viewers you actually have. If twenty people usually show up, design the chat around twenty, not around two hundred.",
          "Reading every message becomes possible at a small scale. Use that advantage instead of pretending the room is bigger than it is.",
        ],
      },
      {
        heading: "Make it conversational",
        paragraphs: [
          "Ask individual viewers questions and reply to them by name. A small chat can feel like a call with regulars, which is hard to pull off in a large one.",
          "Treat the chat as part of the reason people came rather than an interruption. At this scale the conversation is a feature, not a distraction.",
        ],
      },
      {
        quote:
          "A room of ten people who came on purpose beats a room of a thousand who wandered in.",
      },
      {
        heading: "Building from here",
        paragraphs: [
          "Invite the small crowd to return. Regulars who attend a handful of premieres become the audience that shows up to the bigger ones later.",
          "Growth for a small channel comes from turning a few loyal viewers into a habit, not from chasing a number that was never realistic.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Plan the chat for the room you actually have.",
          "Small chats let you read and reply to everyone.",
          "A conversational tone is an advantage, not a fallback.",
          "Regulars from small premieres become the base for larger ones.",
          "Intimacy can beat scale for early channels.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Do not fake scale with padded language or inflated promises. A small audience can tell, and the letdown costs more than the modest event would have.",
          "Run the premiere as if the room is the right size, because for your channel it is.",
        ],
      },
    ],
  },
  {
    slug: "premieres-for-a-series",
    title: "Premieres for a Series and the Rhythm They Create",
    excerpt:
      "A series premiere sets a habit if you keep the slot steady. Learn how to space episodes, name them, and end each one so the next return feels automatic.",
    date: "2043-05-23",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A series premiere sets a habit when the start time stays steady. If episode one airs Tuesday at eight, the audience learns to expect episode two at the same hour, which is how a casual viewer becomes a regular.",
          "Consistency does more than any single launch. The rhythm is the product.",
        ],
      },
      {
        heading: "Choose a slot and keep it",
        paragraphs: [
          "Pick a time you can hold for the whole run. Moving the slot week to week breaks the habit before it forms.",
          "A fixed slot gives viewers a small routine to slot into their week. That routine is what brings them back without a reminder.",
        ],
      },
      {
        heading: "Name and number the episodes",
        paragraphs: [
          "Clear numbering tells viewers where they are in the series and which one to watch next. It also makes the playlist easy to follow.",
          "A series that is easy to follow grows on its own, because a new viewer can start at the beginning and catch up without guessing.",
        ],
      },
      {
        quote:
          "A schedule is a promise. A series kept on schedule is a promise kept over and over.",
      },
      {
        heading: "Ending each episode",
        paragraphs: [
          "Close each premiere by naming the next one. A short preview at the end gives the audience a reason to return at the same time next week.",
          "The ending is the handoff. If it is vague, the habit has nothing to catch onto.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A steady slot turns a series into a weekly habit.",
          "Keep the time you can actually hold for the full run.",
          "Numbering and playlists make the series easy to follow.",
          "End each episode by pointing at the next one.",
          "The rhythm, not the launch, carries the series.",
        ],
      },
      {
        heading: "Series that fit the format",
        paragraphs: [
          "Serialized content fits premieres well, because each episode builds on the last and the audience wants to react together. Standalone videos fit less well, since there is nothing to continue.",
          "Match the series to the format. An ongoing story gives the countdown something real to promise.",
        ],
      },
    ],
  },
  {
    slug: "premieres-live-chat-moderation",
    title: "Handling Live Chat Moderation During a Premiere",
    excerpt:
      "Moderation during a live chat decides whether a premiere feels welcoming or chaotic. Learn the filters, the roles, and the calm moves that keep a room on track.",
    date: "2043-05-26",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Moderation keeps a premiere chat welcoming. You set filters, assign moderators, and remove messages that break the rules before they cool the room.",
          "A premiere chat moves fast, and unchecked spam can bury the friendly messages that make the event worth attending.",
        ],
      },
      {
        heading: "Set up before you start",
        paragraphs: [
          "Turn on blocked words, add a few moderators you trust, and decide the rules in advance. Setting them during the premiere means reacting while the video is already rolling.",
          "Slow mode and a hold for review give you breathing room. They buy seconds when a burst of messages arrives faster than you can read.",
        ],
      },
      {
        heading: "Give moderators clear rules",
        paragraphs: [
          "Tell moderators what to remove and what to leave. A short written list beats a vague instruction to keep things clean.",
          "Consistency is what makes moderation feel fair. When the rules are the same for everyone, the room trusts the process.",
        ],
      },
      {
        quote:
          "Moderation is not about silencing people. It is about protecting the reason they came.",
      },
      {
        heading: "Handling the moments that test you",
        paragraphs: [
          "Every channel gets a troll, a spoiler, or a heated argument. Decide now how you will respond, so you are not improvising in front of a live audience.",
          "Stay calm and quick. A firm, quiet removal does less damage than an argument that pulls the room off the video.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set filters, rules, and moderators before the premiere starts.",
          "Slow mode and review hold give you time to react.",
          "Give moderators a clear list so decisions stay consistent.",
          "Plan responses to trolls and spoilers in advance.",
          "Quiet, firm action beats a public argument.",
        ],
      },
      {
        heading: "After the premiere",
        paragraphs: [
          "Review what was removed and why. Patterns tell you whether the filters need tuning or the room simply needs clearer ground rules.",
          "Moderation is a habit across premieres, not a one time setup. Each event teaches you what the next one will need.",
        ],
      },
    ],
  },
  {
    slug: "premieres-when-not-worth-it",
    title: "When a YouTube Premiere Is Not Worth the Effort",
    excerpt:
      "A premiere adds work that many uploads do not need. Learn the signs that a countdown will cost you more attention than the video can earn back.",
    date: "2043-05-28",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["launch", "live", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A premiere is not worth it when the video has no audience waiting and no reason to be watched together. The countdown, the chat, and the promotion all cost attention that the video may not repay.",
          "The format has real overhead. Run it on the wrong video and you spend a week of promotion to fill a room that stays quiet.",
        ],
      },
      {
        heading: "The signs it will fall flat",
        paragraphs: [
          "A quiet comment section, a small loyal base, and a routine video all point at a normal upload. None of them is fatal on its own, but together they suggest the countdown will land with a thud.",
          "If nobody asked about the video before it existed, a countdown will not create the demand it needs.",
        ],
      },
      {
        heading: "The hidden costs",
        paragraphs: [
          "Premieres ask for a fixed slot, a waiting page, a reminder, and live attention during the video. That is a small campaign, and it competes with everything else on your calendar.",
          "The view count can also disappoint. A premiere pushes views into one hour, so a weak turn out looks worse than the same video gaining views slowly.",
        ],
      },
      {
        quote:
          "A tool you use on every video stops being a tool and becomes a habit you no longer question.",
      },
      {
        heading: "Better uses of the energy",
        paragraphs: [
          "Put the promotion effort into the packaging instead. A stronger thumbnail and title help every video, while a premiere helps only one.",
          "Save the premiere slot for the video that genuinely needs a crowd, and let the rest publish the ordinary way.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Premieres carry real overhead in time and attention.",
          "Quiet channels and routine videos rarely benefit from them.",
          "A fixed slot competes with the rest of your schedule.",
          "Concentrated views can expose a weak turn out.",
          "Spend premieres on videos that need a crowd.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Ask whether the audience would clear an hour for this video if you asked them to. If the answer is no, publish it normally and save the premiere for something they would.",
          "The format rewards restraint. The channels that use it well are the ones that use it rarely.",
        ],
      },
    ],
  },
];
