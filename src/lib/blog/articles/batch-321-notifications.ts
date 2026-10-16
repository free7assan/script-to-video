import { Activity, BarChart3, Clock, Eye, Flame, Heart, Repeat, Target, TrendingUp, Users } from "lucide-react";
import type { BlogPost } from "../types";

export const batch321: BlogPost[] = [
  {
    slug: "notifications-when-a-video-triggers",
    title: "What Happens When a Video Triggers a Notification",
    excerpt: "YouTube notifications do not fire for everyone the moment you publish, so understanding who gets them shapes how you plan each upload and your viewer habits",
    date: "2045-02-03",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "A notification goes out to subscribers who opted in, but the system decides the moment and the order. It rarely reaches everyone at once, and some subscribers never see it at all.",
          "That gap between publishing and being seen is the first thing to understand if you want the bell to work for your channel."
        ]
      },
      {
        heading: "What the bell actually controls",
        paragraphs: [
          "The bell is a setting a viewer chooses, not something you can force. When someone rings it, YouTube may alert them about new uploads. When they leave it off, the platform decides whether to alert them based on their habits.",
          "So two subscribers can follow the same channel and get different alerts. One rings the bell and gets a ping. The other watches often enough that the system sends one anyway."
        ]
      },
      {
        quote: "You cannot make the bell ring for anyone. You can only make it worth ringing."
      },
      {
        heading: "Why the moment varies",
        paragraphs: [
          "Alerts do not all leave at the same second. The system spreads them out to avoid flooding a viewer with too many at once. If a subscriber follows many active channels, your alert may sit behind others.",
          "This is why a video can seem slow at first and then pick up. The alert is still arriving for some people while others already watched."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Notifications reach opted in subscribers first, not your whole audience.",
          "The bell is a viewer choice that you cannot override.",
          "Alerts are spread out, so early numbers do not tell the full story.",
          "Some subscribers get alerts from habit even without the bell.",
          "Plan for a slow start instead of expecting one big spike."
        ]
      },
      {
        heading: "What to do with this",
        paragraphs: [
          "Stop judging an upload by its first hour. Give the alert time to travel and check again the next day.",
          "Then ask a simpler question. Did the people who arrived stay? That answer matters more than how fast the notification moved."
        ]
      }
    ]
  },
  {
    slug: "notifications-when-some-uploads-send-none",
    title: "Why Some Uploads Never Send a Bell Notification",
    excerpt: "Not every upload earns notifications for your subscribers, and the reasons often come down to viewer habits rather than anything wrong with the video itself",
    date: "2045-02-05",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Some uploads send no notification because the system decides an alert would not help the viewer. That call leans on how often someone watches your channel and how they reacted to past alerts.",
          "It is a decision made for each subscriber, not a switch you flip for the whole channel."
        ]
      },
      {
        heading: "The habit test",
        paragraphs: [
          "If a subscriber used to open your videos and now ignores them, the system notices. Alerts to that person slow down or stop. The same happens when someone has not watched in a long while.",
          "This is why the count of subscribers and the count of alerts never line up. You are not being punished. The platform is protecting a viewer from content they stopped engaging with."
        ]
      },
      {
        quote: "A silent upload is often a signal about habits, not a verdict on the video."
      },
      {
        heading: "When the upload is not the problem",
        paragraphs: [
          "Before blaming the video, check the pattern. If several uploads sent no push, the cause is usually the audience being quiet, not one weak topic.",
          "Look at returns instead. Are the same familiar names watching within a day? That tells you the engaged core is still there even when a broad alert does not go out."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Alerts are decided per subscriber, not per channel.",
          "Quiet viewers gradually stop receiving your notifications.",
          "A silent push usually points to habits, not a bad video.",
          "Subscriber counts never match the number of alerts sent.",
          "Judge an upload by who returns, not by a missing ping."
        ]
      },
      {
        heading: "Reading it without panic",
        paragraphs: [
          "A missing notification is not proof that something broke. Treat it as feedback about attention and act on the part you control.",
          "Make the next video easy to click for the people who still watch. That is the lever you actually hold."
        ]
      }
    ]
  },
  {
    slug: "notifications-the-bell-and-viewer-habits",
    title: "The Bell and the Habits That Subscribers Build",
    excerpt: "The bell and YouTube notifications matter less than the habits subscribers form, because routine watching often predicts who sees a new upload first",
    date: "2045-02-07",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Habits decide who sees your uploads far more than the bell does. A subscriber who watches on a routine gets alerted almost every time, whether they rang the bell or not.",
          "The bell is a small nudge. The routine is the real engine behind repeat views."
        ]
      },
      {
        heading: "How a habit forms",
        paragraphs: [
          "A habit forms when a person keeps finding a reason to click. A run of videos that deliver on their titles teaches someone that your channel is worth a regular visit.",
          "Once that trust exists, watching becomes automatic. They open a new upload without needing a push at all."
        ]
      },
      {
        heading: "Settings follow behavior",
        paragraphs: [
          "Most people never touch the bell. They leave it off and let the platform decide. For them, their own history with your channel is the setting.",
          "This means your upload record shapes your alerts. Good videos train more alerts. Neglected videos train fewer."
        ]
      },
      {
        quote: "The bell is a request. Habit is the agreement that follows."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Viewer habits drive alerts more than the bell does.",
          "Consistent value turns watching into an automatic routine.",
          "Most subscribers never change their bell setting at all.",
          "Your upload record quietly shapes who gets notified.",
          "Build the habit and alerts take care of themselves."
        ]
      },
      {
        heading: "Shaping the habit on purpose",
        paragraphs: [
          "You shape habits with reliability. Pick a level of quality you can repeat and hold it video after video.",
          "Do not chase one viral moment and then disappear. The quiet returning viewer is what trains the next notification."
        ]
      }
    ]
  },
  {
    slug: "notifications-how-new-subscribers-get-alerts",
    title: "How Bell Notifications Behave for New Subscribers",
    excerpt: "New subscribers may not get YouTube notifications at first, and their early viewing habits decide how often the platform alerts them about later uploads",
    date: "2045-02-09",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "A new subscriber often gets no notification for a while. The platform has little history with them, so it waits to see whether they actually watch before it starts sending alerts.",
          "If they ring the bell, they may get alerts sooner. If they do not, their own behavior fills in the blanks."
        ]
      },
      {
        heading: "The cold start",
        paragraphs: [
          "Every new subscriber begins with a blank slate. The system does not know if they subscribed on impulse or if they intend to return.",
          "So the first few uploads act as a test. Watch a couple and the alerts begin. Ignore them and the alerts may never start."
        ]
      },
      {
        heading: "Why the first video matters",
        paragraphs: [
          "The video a person subscribes on is the best chance to set the tone. If that video satisfies them, the next upload is easier to notice.",
          "That is why a clear, complete video converts a casual viewer into someone who will actually open a future notification."
        ]
      },
      {
        quote: "A new subscriber is a promise. The next upload is where you keep it."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "New subscribers often receive no alerts until they watch more.",
          "The system waits for evidence before sending notifications.",
          "Ringing the bell can speed up those early alerts.",
          "The video someone subscribes on sets the tone.",
          "Treat the next upload as the moment you earn attention."
        ]
      },
      {
        heading: "A patient approach",
        paragraphs: [
          "Do not expect a fresh subscriber to appear in every alert from day one. Give the relationship time to develop.",
          "Focus on making each upload a good reason to return. The alerts will follow the watching, not the other way around."
        ]
      }
    ]
  },
  {
    slug: "notifications-posting-times-and-alerts",
    title: "How Posting Times Affect Who Actually Gets Notified",
    excerpt: "Posting times shape when YouTube notifications arrive, but the best slot depends on when your audience is awake and ready to watch rather than a universal rule",
    date: "2045-02-11",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Posting time influences when a notification lands, but there is no single best hour that fits every channel. The right slot depends on when your viewers are already online.",
          "A well timed upload meets people when they are ready to click. A poorly timed one arrives while they are asleep."
        ]
      },
      {
        heading: "The schedule the system learns",
        paragraphs: [
          "The platform watches when your audience tends to watch. Over time it schedules alerts to match those active windows.",
          "When you post at a steady time, that pattern becomes clearer. When you post at random hours, the alerts have less to work with."
        ]
      },
      {
        heading: "Reading your own data",
        paragraphs: [
          "Your analytics show when viewers are active across the day. That window is your best first guess for an upload time.",
          "Test one slot for several videos before moving it. A single result tells you very little, but a run of results shows a trend."
        ]
      },
      {
        quote: "The best posting time is the one your own viewers already keep."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "There is no universal best time to post for notifications.",
          "Alerts align with when your audience is usually active.",
          "A steady posting time helps the system predict your rhythm.",
          "Use your own activity data to pick a slot to test.",
          "Give a slot several videos before judging it."
        ]
      },
      {
        heading: "Consistency over perfection",
        paragraphs: [
          "Chasing a perfect hour can waste more time than it saves. Picking a good hour and holding it usually serves you better.",
          "Reliability helps viewers know when to look. That expectation quietly boosts how many alerts get opened."
        ]
      }
    ]
  },
  {
    slug: "notifications-why-creators-should-not-rely-only",
    title: "Why Creators Should Not Rely Only on Notifications",
    excerpt: "Notifications bring a share of viewers, but creators who lean on them alone miss the wider audience that arrives from search and suggested feeds",
    date: "2045-02-13",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Notifications reach only a slice of the people who could watch. Building a channel around that slice alone leaves most of your growth untouched.",
          "Search and suggested feeds keep bringing viewers long after an alert has faded."
        ]
      },
      {
        heading: "The slice you can see",
        paragraphs: [
          "Alerts feel powerful because the first spike is visible. You watch a burst of views and assume the notification did the work.",
          "But that burst is small next to the total. Most views on a healthy channel come from people who never saw a notification for it."
        ]
      },
      {
        heading: "Where the rest come from",
        paragraphs: [
          "A strong title and thumbnail keep earning clicks through search and suggested feeds. A useful video keeps getting shared by people who found it later.",
          "These sources do not depend on the bell. They depend on the video being worth finding."
        ]
      },
      {
        quote: "Notifications start a video. They do not carry it."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Notifications reach a small slice of potential viewers.",
          "The first hour spike hides where most views come from.",
          "Search and suggestions deliver viewers without any alert.",
          "Shared links add reach long after a notification fades.",
          "Make videos worth finding, not just worth announcing."
        ]
      },
      {
        heading: "Balancing the sources",
        paragraphs: [
          "Keep the bell in perspective. It is one channel among several, and it rewards an audience that is already engaged.",
          "Write for the viewer who arrives cold from a search result. That work pays off across every source at once."
        ]
      }
    ]
  },
  {
    slug: "notifications-how-to-earn-the-click",
    title: "How to Earn the Click on Every Video Notification",
    excerpt: "Earning the click on a video notification takes a clear title, a reason to act now, and trust built over time, so fewer alerts get ignored by subscribers",
    date: "2045-02-15",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Most notifications get ignored in a glance. The click is earned by a title that promises something specific and a channel history that makes the promise believable.",
          "You cannot control the alert, but you control what it says and what the viewer finds."
        ]
      },
      {
        heading: "The title does the heavy lifting",
        paragraphs: [
          "On a phone, a notification shows a short line of text. If that line is vague, a busy subscriber scrolls right past it.",
          "A specific title gives a clear reason to act. State the payoff plainly instead of teasing around it, and the click gets easier."
        ]
      },
      {
        heading: "Trust decides the second look",
        paragraphs: [
          "A catchy line only works if your past videos delivered. Break that trust once and alerts get treated like noise.",
          "Keep the gap small between what a title promises and what the video gives. Consistency is what makes people tap."
        ]
      },
      {
        quote: "The notification asks for the click. Your track record decides whether it gets one."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Most notifications are ignored in a single glance.",
          "A specific title beats a vague one every time.",
          "Past delivery makes a new promise easy to trust.",
          "Match what the title says to what the video delivers.",
          "Earn the click, do not demand it."
        ]
      },
      {
        heading: "A repeatable habit",
        paragraphs: [
          "Before posting, read your title as if it were the only line on a busy screen. Ask whether it gives a clear reason to stop.",
          "If it does not, rewrite it. Small edits here do more for views than most changes you could make later."
        ]
      }
    ]
  },
  {
    slug: "notifications-what-fatigue-does-to-a-channel",
    title: "What Notification Fatigue Does to Your Channel",
    excerpt: "Notification fatigue sets in when alerts arrive too often, and once subscribers tune out a channel it takes far more than a good video to win attention back",
    date: "2045-02-17",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "Notification fatigue happens when alerts feel like too many. A subscriber learns to ignore them, and the habit sticks even after the heavy posting stops.",
          "Once that switch flips, a single good video rarely flips it back."
        ]
      },
      {
        heading: "How fatigue builds",
        paragraphs: [
          "It builds slowly. A burst of uploads here, a shaky promise there, and the alerts start to feel like chores.",
          "The platform notices the ignored alerts too. It may send fewer, which deepens the silence."
        ]
      },
      {
        heading: "Posting into a void",
        paragraphs: [
          "Fatigue is easy to miss at first. You keep publishing and assume the audience moved on.",
          "The clearest sign is steady subscribers with soft views. The list is there, but the attention is not."
        ]
      },
      {
        quote: "Attention is a habit. Fatigue is how a habit quietly breaks."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Too many alerts teach viewers to ignore them.",
          "Ignored alerts often lead the system to send fewer.",
          "Fatigue grows over time instead of appearing at once.",
          "Steady subscribers with weak views can signal fatigue.",
          "Earning attention back takes patience and better videos."
        ]
      },
      {
        heading: "Protecting attention",
        paragraphs: [
          "Treat each alert as a request you must justify. Post with a purpose instead of posting to fill a schedule.",
          "If your numbers sag, slow down and improve the promise. Fewer, stronger uploads rebuild the habit faster than more noise."
        ]
      }
    ]
  },
  {
    slug: "notifications-why-subscriber-counts-do-not-equal-views",
    title: "Why Subscriber Counts Do Not Equal Video Views",
    excerpt: "Subscriber counts never matched video views, because many subscribers watch rarely while notifications reach only a sliver of the people who once clicked",
    date: "2045-02-19",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "A subscriber count is a total of everyone who ever clicked the button. It is not a count of people who will watch any given video.",
          "Most channels see a small share of their list show up, and notifications reach an even smaller share of that."
        ]
      },
      {
        heading: "A list is not an audience",
        paragraphs: [
          "People subscribe for many reasons and then drift. Some clicked once and forgot. Others watch one topic and skip the rest.",
          "The count keeps the memory of old interest. Views show the interest that is still alive today."
        ]
      },
      {
        heading: "Where the viewers come from",
        paragraphs: [
          "A big video pulls most of its viewers from beyond the subscriber list. Search and suggestions bring strangers who never saw a notification.",
          "This is why a channel can grow its count while single videos stay flat, and also the reverse."
        ]
      },
      {
        quote: "The subscriber count is a memory. The view count is what is happening now."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Subscriber count totals everyone who ever clicked, not current watchers.",
          "Most lists show up only in part on any given video.",
          "Notifications reach a smaller slice than the list suggests.",
          "Search and suggestions often supply the largest share of views.",
          "Judge health by current views, not by the rising number."
        ]
      },
      {
        heading: "What the gap teaches you",
        paragraphs: [
          "Stop treating the count as a promise of views. Treat it as one audience among several that a video can reach.",
          "Then work on the videos that convert strangers, since that is where steady growth actually lives."
        ]
      }
    ]
  },
  {
    slug: "notifications-building-a-posting-rhythm",
    title: "Building a Posting Rhythm Subscribers Can Expect",
    excerpt: "Building a posting rhythm helps subscribers expect your uploads, which raises the odds they act on notifications and return without one, week after week",
    date: "2045-02-21",
    author: {
      name: "GoScript Team",
      role: "Research"
    },
    tags: ["audience", "growth", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "A direct answer",
        paragraphs: [
          "A posting rhythm is a pattern viewers can predict. When they expect an upload, they look for it, and alerts become a reminder rather than a surprise.",
          "Predictable timing turns a casual follower into a regular one."
        ]
      },
      {
        heading: "Why rhythm beats frequency",
        paragraphs: [
          "Posting a lot in bursts then going quiet confuses an audience. A steady cadence, even a slower one, builds a stronger habit.",
          "The goal is not the most uploads. It is the schedule you can keep without breaking your quality."
        ]
      },
      {
        heading: "Picking a cadence",
        paragraphs: [
          "Choose a pace you can hold for months, not weeks. Weekly, biweekly, or monthly all work if you keep them steady.",
          "Then hold the day and time as closely as you can. Small slips are fine. Long gaps erase the pattern."
        ]
      },
      {
        quote: "A rhythm is a promise you keep with your calendar."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A predictable posting rhythm makes alerts feel expected.",
          "Steady cadence builds a stronger habit than posting in bursts.",
          "Pick a pace you can hold for months without losing quality.",
          "Keep the day and time as consistent as your schedule allows.",
          "Long gaps break the pattern viewers were forming."
        ]
      },
      {
        heading: "Holding the line",
        paragraphs: [
          "When life gets busy, protect the rhythm before the extras. Ship the scheduled video even if it is a little simpler.",
          "Showing up on time teaches viewers to trust the schedule. That trust is worth more than any single polished upload."
        ]
      }
    ]
  }
];
