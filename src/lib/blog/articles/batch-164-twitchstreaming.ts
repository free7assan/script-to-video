import {
  Rocket,
  Puzzle,
  Clock,
  MessageSquare,
  Layers,
  TrendingUp,
  DollarSign,
  Heart,
  Repeat,
  Scissors,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch164: BlogPost[] = [
  {
    slug: "twitch-getting-started-guide",
    title: "How to Get Started on Twitch Without Overthinking It",
    excerpt:
      "Getting started on Twitch needs less gear than you think. Here is the honest path from your first test stream to a channel people come back to.",
    date: "2032-01-03",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Getting started on Twitch comes down to three things: a way to capture your screen or game, a microphone people can hear, and a reason to press go live. You do not need a studio, a lighting rig, or a capture card to start. You need a channel that looks intentional and a habit of showing up.",
          "Plenty of new streamers stall for months buying gear they never use. They research microphones, watch setup videos, and redesign their panels before they have streamed a single minute. The better move is to stream this week with what you already own, then fix the loudest problem after each session.",
        ],
      },
      {
        heading: "The gear that matters first",
        paragraphs: [
          "Audio is the one place where cheap decisions cost you viewers. People will tolerate a soft, blurry picture for hours. They leave in seconds when your voice clips or your mic picks up every key press.",
        ],
        bullets: [
          "A USB microphone beats a fancy webcam. Viewers forgive a blurry face and leave when the sound hurts.",
          "Wired internet if you can get it, because dropouts kill a stream faster than low resolution.",
          "A second screen or a phone for chat, since glancing away from the game every few seconds gets old.",
          "Free broadcast software such as OBS, with a scene that already has your game and mic set up.",
        ],
      },
      {
        heading: "Your first stream should be boring",
        paragraphs: [
          "Treat the first few streams as rehearsals. Pick one game you know well, keep the goal small, and tell the truth: you are new and figuring it out. Viewers are fine with that, and the ones who stay tend to be kind.",
          "Practice talking out loud while you play before you go live. Narrating your thinking feels awkward at first and it is the single skill that separates a watchable stream from a silent one.",
        ],
      },
      {
        heading: "Titles and categories that help people find you",
        paragraphs: [
          "Set your stream title to something a stranger would search, not an inside joke. A title like 'learning Elden Ring, no summons' tells a random viewer exactly what they get.",
          "Pick the exact game category you are playing and browse a few channels in it before you start. Raids, recommendations, and search all start with being findable.",
        ],
      },
      {
        quote: "Nobody finds a stream because the streamer was ready. They find it because the streamer kept going live.",
      },
      {
        heading: "The habits that separate people who last",
        paragraphs: [
          "Show up on a schedule you can defend. Two evenings a week, every week, beats a burst of five streams followed by a month of silence.",
          "Watch your own last stream. It is uncomfortable, and it is the fastest way to spot dead air, bad audio, and a chat you forgot to read.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with audio and a stable connection before you spend on anything else.",
          "Your first streams are practice, so pick a game you already know and keep the scope small.",
          "Give the stream a clear title and category so strangers can actually find it.",
          "Choose a schedule you can hold for months, then review your recordings and fix one problem at a time.",
        ],
      },
    ],
  },
  {
    slug: "twitch-channel-setup-checklist",
    title: "Twitch Channel Setup: A Checklist That Actually Matters",
    excerpt:
      "A clean Twitch channel setup does more for growth than any fancy camera. Work through the panels, info, and settings that new viewers check first.",
    date: "2032-01-06",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "A strong Twitch channel setup is mostly about what a new viewer checks in their first thirty seconds. They look at your name, your profile picture, your offline banner, and the panels under your stream. If those are empty or confusing, they leave before you say a word.",
          "You can finish the whole thing in one afternoon. None of it needs design skills, and none of it has to be perfect. It just needs to answer the question every stranger is asking: what is this channel about?",
        ],
      },
      {
        heading: "The pieces viewers see first",
        bullets: [
          "A profile picture that reads clearly at forty pixels wide. A face or a logo, not a busy photo.",
          "An offline banner with one clear line about what you stream and when.",
          "Three or four useful panels. Socials, schedule, and a way to support you.",
          "A short About section written the way you talk, not like a press release.",
        ],
      },
      {
        heading: "Settings people forget",
        paragraphs: [
          "Turn on two factor authentication before anything else. Streamers get targeted by account theft more than most people realize, and losing your channel to a stranger is a mess you cannot undo.",
          "Link your socials and set a stream category for every game you play. A channel that is easy to reference and easy to find does half your promotion for you.",
        ],
      },
      {
        quote: "A viewer decides whether to stay before they hear your voice. Your channel page is doing the talking for you.",
      },
      {
        heading: "Write your rules before you need them",
        paragraphs: [
          "Set up chat rules and a banned words list while your chat is still quiet. It is easier to think clearly about your boundaries when nobody is testing them.",
          "Give a couple of trusted regulars moderator status once you have them. You cannot read chat and play well at the same time forever, and asking for help early keeps the room calm.",
        ],
      },
      {
        heading: "Keep it current",
        paragraphs: [
          "Revisit the page once a month. Update your schedule when it changes, retire dead links, and rewrite your About section as your channel finds its focus.",
          "The goal is not a permanent design. It is a page that always tells the truth about what a new visitor will get.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Finish your profile picture, banner, and panels before you worry about overlays.",
          "Turn on two factor authentication on day one and never share your login.",
          "Write your chat rules while the room is empty, not in the middle of a problem.",
          "Keep the About section in your own voice so the channel sounds like a person.",
        ],
      },
    ],
  },
  {
    slug: "twitch-stream-schedule",
    title: "Building a Twitch Stream Schedule You Can Keep",
    excerpt:
      "A Twitch stream schedule only works if you can repeat it for months. Pick times around your real life, then protect those slots like a job.",
    date: "2032-01-09",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A Twitch stream schedule works only if you can repeat it for months. Pick fixed days and times that fit your job, your sleep, and the people you live with. Then treat those slots the way you treat any other commitment.",
          "New streamers often copy a full time creator's schedule and burn out within three weeks. The goal is not to stream the most. The goal is to be predictable enough that people learn when to find you.",
        ],
      },
      {
        heading: "Pick times around your audience, not yourself",
        paragraphs: [
          "Check when the game you play is busiest on Twitch. A smaller game with a loyal evening crowd can beat a giant game where you sit buried below hundreds of channels.",
          "If you can only stream at odd hours, lean into it. There is usually less competition and a steady crowd of regulars who are up at the same time as you.",
        ],
      },
      {
        heading: "Make the schedule visible",
        bullets: [
          "Put your days and times in your panels and on your offline banner.",
          "Post the schedule on your socials once a week, not once a year.",
          "Add a chat command so viewers can pull your times with one word.",
          "Tell people when you are taking a break instead of vanishing without a trace.",
        ],
      },
      {
        quote: "A schedule is a promise. Keep it small enough that you can actually keep it.",
      },
      {
        heading: "When life breaks the plan",
        paragraphs: [
          "Something will come up. A family thing, a work trip, a week where you have nothing left. Announce it early, keep it short, and come back on your normal days.",
          "Cancelling once is fine. Cancelling without a word teaches people not to count on you, and that habit is hard to reverse once it sets in.",
        ],
      },
      {
        heading: "Build in breathing room",
        paragraphs: [
          "Leave at least one evening free every week and guard it. A schedule with no gaps looks impressive in the first month and collapses in the third.",
          "You can always add a bonus stream when you feel good. It is much harder to remove one you have promised, so start smaller than you think you should.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose two or three fixed slots you can hold for months, not a dream schedule you cannot survive.",
          "Fit the times to viewer activity and your real life.",
          "Post the schedule where people can find it without asking.",
          "When you miss a stream, say so early and return on the same days.",
        ],
      },
    ],
  },
  {
    slug: "twitch-chat-engagement",
    title: "Keeping Twitch Chat Alive When Nobody Is Talking",
    excerpt:
      "Keeping Twitch chat alive starts before anyone types. Ask easy questions, name people, and treat silence as normal instead of a failure.",
    date: "2032-01-12",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Keeping Twitch chat alive is easier when you stop treating silence as an emergency. Most streams have quiet moments. The trick is to give people something easy to answer and to keep talking as if a friend just walked into the room.",
          "You are the host. Dead air feels long to you and short to everyone else. Fill it with your thinking out loud, a question, or a small story, and chat usually follows.",
        ],
      },
      {
        heading: "Ask questions people can answer",
        bullets: [
          "Low stakes ones, like what to name this character or where everyone is watching from.",
          "Talk to lurkers without demanding anything. A quick hello counts them in.",
          "Read names out loud when people talk. Viewers stay when they feel seen.",
        ],
      },
      {
        heading: "Handle the quiet and the loud",
        paragraphs: [
          "When chat goes quiet, keep narrating. Say what you are doing and why, because silence from you is what makes a room feel dead, not silence from the viewers.",
          "When chat turns messy, slow down and address the room once. Do not let two people turn your stream into their personal argument.",
        ],
      },
      {
        quote: "Chat is not a crowd you perform for. It is a room you are hosting.",
      },
      {
        heading: "Tools that help without taking over",
        paragraphs: [
          "A chat bot can greet people, post your schedule, and run a simple command or two. Keep it light. A bot that talks more than you do makes the stream feel automated.",
          "Timers for recurring messages can remind people about your socials, but space them far apart. The same message every five minutes reads as spam and people tune it out.",
        ],
      },
      {
        heading: "Make regulars feel at home",
        paragraphs: [
          "Learn the names of the people who show up. Ask how their week went. Small callbacks to last stream tell everyone this is a place that remembers you.",
          "When a regular brings a friend, welcome the newcomer directly. That one moment is often what turns a visitor into someone who comes back.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep talking through quiet moments instead of waiting for chat to start.",
          "Ask easy questions and use people's names out loud.",
          "Address problems once and move on.",
          "Let a bot help, but never let it outtalk you.",
        ],
      },
    ],
  },
  {
    slug: "twitch-overlays-branding",
    title: "Twitch Overlays and Branding Without the Clutter",
    excerpt:
      "Good Twitch overlays and branding help viewers read the screen. Here is how to pick fonts, colors, and alerts that stay out of the way.",
    date: "2032-01-15",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Good Twitch overlays and branding help a viewer understand your stream at a glance. They show your name, your newest follower, and your goal without covering the game. Bad ones bury the screen under slanted boxes and animated borders.",
          "The safest rule is to start with almost nothing and add elements only when you can name the job each one does. If a piece of art is not showing information or setting a mood, it is just noise.",
        ],
      },
      {
        heading: "Start with the frame, not the filler",
        bullets: [
          "A webcam frame that hugs the camera instead of filling the whole corner.",
          "A small bar for your name, latest follower, and top cheer.",
          "One alert style. Pick a sound and a look, then use them everywhere.",
          "Room for the game. If your overlay covers gameplay, it is too big.",
        ],
      },
      {
        heading: "Fonts and colors",
        paragraphs: [
          "Use one or two fonts across the whole channel. A readable sans serif for chat and labels, plus maybe a bolder display font for your name. Mixing five fonts makes a channel look like a random template pack.",
          "Pick three colors and reuse them in your panels, your alerts, and your socials. Consistency is what people notice, even when they cannot say exactly why your stream feels put together.",
        ],
      },
      {
        quote: "Branding is not how loud your overlay looks. It is how quickly someone recognizes your stream.",
      },
      {
        heading: "Keep it updated",
        paragraphs: [
          "Change your follower goal, recent sub, and stream title before each session. An overlay still showing last month's number tells people you are not paying attention.",
          "You can build a clean set with free tools or buy a pack and swap the colors to match. Either way, spend your money on audio before you spend it on art.",
        ],
      },
      {
        heading: "Test it on a real screen",
        paragraphs: [
          "Check your overlay on a phone as well as a monitor. Small text disappears on mobile, and a lot of viewers watch Twitch on a phone in bed.",
          "Ask one honest friend what they notice first. If they mention the border instead of the game, you have your answer about what to trim.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Add overlay elements only when each one has a clear job.",
          "Keep overlays off the gameplay and stick to one consistent alert style.",
          "Limit yourself to two fonts and three colors across the channel.",
          "Update goals and titles every stream so nothing looks stale.",
        ],
      },
    ],
  },
  {
    slug: "twitch-growing-from-zero",
    title: "Growing on Twitch From Zero Viewers, Step by Step",
    excerpt:
      "Growing on Twitch from zero viewers is slow, but the people who last treat it like a craft. Here are the habits that quietly add up.",
    date: "2032-01-18",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Growing on Twitch from zero viewers is slow, and almost everyone quits during the quiet stretch. The people who last treat it like a craft. They stream often, review their work, and spend as much time off stream finding an audience as they do on it.",
          "There is no secret that skips the boring part. There are habits that quietly add up, and most of them have nothing to do with being entertaining on command.",
        ],
      },
      {
        heading: "Play games you can win at",
        paragraphs: [
          "Do not pick the biggest game on Twitch. You will sit at the bottom of a list nobody scrolls. Pick something with a real audience and room for a small channel to be seen.",
          "You can also build around a specific angle. Speedruns, no damage runs, or teaching a game to new players. A clear angle gives people a reason to choose you over a bigger streamer.",
        ],
      },
      {
        heading: "Be findable away from Twitch",
        bullets: [
          "Post a clip to TikTok, Shorts, or Instagram every day you stream.",
          "Use titles and tags that people actually search for.",
          "Hang out in other small streams before you ask anyone to watch yours.",
          "Join a community of streamers at your level, not only the big names.",
        ],
      },
      {
        quote: "Zero viewers is not a verdict. It is where everyone starts, whether they admit it or not.",
      },
      {
        heading: "Do not chase the number",
        paragraphs: [
          "Staring at the viewer count steals your attention from the people who did show up. Talk to the one person there like they matter, because to a small channel they really do.",
          "Review a few streams each week. Look for one thing to keep and one thing to change. Over a year, that habit beats any growth trick you will read about.",
        ],
      },
      {
        heading: "Make friends, not followers",
        paragraphs: [
          "The fastest growth often comes from other streamers, not from random viewers. Raid someone, clip their best moment, and show up in their chat when you have nothing to promote.",
          "Those relationships bring real people who stick around. A raid from a friend you supported for months is worth more than a hundred silent viewers from a paid boost.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Avoid the most crowded games and give people a clear reason to pick you.",
          "Promote every stream on a short video platform, not only on Twitch.",
          "Spend time in other small communities before asking for viewers.",
          "Judge progress by your recordings, not by one night's viewer count.",
        ],
      },
    ],
  },
  {
    slug: "twitch-monetization",
    title: "Twitch Monetization: What Pays and What Rarely Does",
    excerpt:
      "Twitch monetization goes past subs and bits. Learn which income streams pay a small channel and which ones only reward the top tier.",
    date: "2032-01-21",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Twitch monetization is not one switch. It is a few separate income streams that open at different sizes, and most of them pay very little for a small channel. The realistic plan is to stack several small ones and grow them together over time.",
          "Subscriptions, bits, and ads are the core. Everything else, from merch to sponsorships, tends to follow once you have a regular audience that trusts you.",
        ],
      },
      {
        heading: "The standard paths",
        bullets: [
          "Subscriptions, where viewers pay monthly for emotes and support.",
          "Bits, which viewers cheer to trigger alerts and messages on stream.",
          "Ads you run during breaks, which pay more as your audience grows.",
          "Donations through a third party link, which many small channels rely on first.",
        ],
      },
      {
        heading: "What actually moves the needle",
        paragraphs: [
          "Your first paying viewer usually comes from a real relationship, not a clever pitch. People support streamers they talk to every week, so the most profitable thing you can do early is be consistent and present.",
          "Emotes matter more than new streamers expect. Good emotes get used across Twitch and quietly advertise your channel for free every time someone posts one in another chat.",
        ],
      },
      {
        quote: "Nobody owes you money for streaming. They pay because they want more of what you already give away.",
      },
      {
        heading: "Income beyond Twitch",
        paragraphs: [
          "Sponsorships, affiliate links, and merch can out earn subs once you have a niche. A small, specific audience is easier to sell to than a big, vague one, and brands pay for focus.",
          "Track everything in one place and check the tax rules where you live. Streaming income is real income, and it is easy to lose track of small payments until they add up to a surprise.",
        ],
      },
      {
        heading: "Do not chase it too early",
        paragraphs: [
          "Pushing donations before you have a community makes a new channel feel like a storefront. Focus on the show first, and money follows attention that feels earned.",
          "When you do add a support link, mention it once and move on. Quiet confidence reads far better than an anxious reminder every ten minutes.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat monetization as several small streams, not one big one.",
          "Build relationships first, since support follows trust.",
          "Invest in emotes because they spread your brand for free.",
          "Track every payment and understand the tax rules for your country.",
        ],
      },
    ],
  },
  {
    slug: "twitch-stream-burnout",
    title: "Avoiding Stream Burnout Before It Wrecks Your Joy",
    excerpt:
      "Stream burnout creeps in when you treat every stream like a test. Learn the early signs and the simple rules that keep streaming fun.",
    date: "2032-01-24",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Stream burnout shows up before you notice it. You start dreading the days you used to enjoy, you snap at chat, and the stream becomes a chore you cannot skip. Catching it early is the whole game.",
          "Streaming rewards consistency, which is exactly why it is easy to push past your limit. The streamers who last build rest into the plan instead of waiting for a crash.",
        ],
      },
      {
        heading: "The warning signs",
        bullets: [
          "You feel relieved when a stream ends instead of satisfied.",
          "You stop enjoying games on stream that you still like off stream.",
          "You skip meals, sleep, or time with people to protect the schedule.",
          "Your mood for the whole day rises and falls with the viewer count.",
        ],
      },
      {
        heading: "Rules that prevent the crash",
        paragraphs: [
          "Set a hard end time and keep it. A stream that always runs long slowly eats your evenings and your energy, and the audience rarely notices the difference.",
          "Take one full day off streaming every week, plus a longer break every few months. Tell your audience in advance so a rest does not look like a disappearance.",
        ],
      },
      {
        quote: "You cannot pour energy into a stream that you never refill anywhere else.",
      },
      {
        heading: "Change the game before it breaks you",
        paragraphs: [
          "Sometimes the fix is not rest but variety. Play something different, do a just chatting stream, or bring a friend on. Monotony drains people faster than long hours do.",
          "If streaming has stopped being fun for weeks, it is fair to cut back or step away. A channel can survive a break. A burned out person often cannot.",
        ],
      },
      {
        heading: "Compare less, create more",
        paragraphs: [
          "Watching bigger streamers can turn inspiration into a slow poison. Their setup, their numbers, and their pace are the result of years you have not lived yet.",
          "Measure yourself against your own last month. That is the only comparison that tells you anything useful about your work.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Watch for dread and resentment, since those show up before a crash.",
          "Set a hard end time and treat rest as part of the schedule.",
          "Break the routine with new games or formats when it goes flat.",
          "It is fine to cut back or stop for a while to protect your health.",
        ],
      },
    ],
  },
  {
    slug: "twitch-multistreaming",
    title: "Multistreaming From Twitch to YouTube and More",
    excerpt:
      "Multistreaming lets one broadcast reach Twitch, YouTube, and TikTok at once. Here is how to set it up without wrecking your chat.",
    date: "2032-01-27",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Multistreaming sends one broadcast to several platforms at once, usually Twitch plus YouTube or TikTok. It sounds like free reach, and sometimes it is, but it also splits your attention and creates chat problems when the setup is careless.",
          "The key is to pick one home platform and treat the rest as extra. Viewers on every platform should still know where your community actually lives.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "A tool such as Restream or a local setup sends your feed to multiple destinations.",
          "Each platform has its own chat, and they do not talk to each other by default.",
          "Some platforms have exclusivity rules, so read the fine print before you start.",
          "Your bitrate now has to keep several services happy at the same time.",
        ],
      },
      {
        heading: "Keep chat in one place",
        paragraphs: [
          "Use a combined chat tool so every platform's messages land in a single window beside your game. Reading four separate chats while playing is a good way to ignore all of them.",
          "Tell viewers on the secondary platforms that your main chat is on your home platform. Some will follow you there, and that is the real point of streaming to more than one place.",
        ],
      },
      {
        quote: "Multistreaming is not more audiences. It is one audience spread thin unless you give people a reason to pick a home.",
      },
      {
        heading: "When not to bother",
        paragraphs: [
          "If your upload speed is shaky, if your chat engagement is already thin, or if you are still learning to stream at all, one platform is plenty. Multistreaming multiplies your problems along with your reach.",
          "For most new channels, the better use of energy is making one stream genuinely good, then reposting clips everywhere else.",
        ],
      },
      {
        heading: "Mind the audio and the rules",
        paragraphs: [
          "Music is the usual trap. A track that is fine on one platform can get a stream muted or struck on another, so keep your music licensed for every place you send the feed.",
          "Check the terms of each service before you build around it. Rules change, and a setup that worked last year can quietly break your channel this year.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose a home platform and treat the others as bonus reach.",
          "Combine chat into one window so you can actually read it.",
          "Check each platform's exclusivity and music rules before you commit.",
          "Skip multistreaming until one platform is already running smoothly.",
        ],
      },
    ],
  },
  {
    slug: "twitch-clips",
    title: "Turning Twitch Streams Into Clips People Share",
    excerpt:
      "Twitch clips turn a three hour stream into short videos that travel. Learn how to mark moments, cut them fast, and post them well.",
    date: "2032-01-30",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["twitch", "streaming", "live"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Twitch clips take a long stream and compress it into short videos that can travel anywhere. A good clip is the cheapest marketing a small channel has, because it keeps finding new people while you sleep.",
          "The people who grow from clips are not lucky. They mark moments as they happen, cut them quickly, and post them where short video actually gets watched.",
        ],
      },
      {
        heading: "Find the moment while you stream",
        bullets: [
          "Say the word clip out loud when something good happens so chat marks it for you.",
          "Watch your VOD the next day and note three moments worth keeping.",
          "Train regulars to clip for you by thanking them when they do.",
          "Aim for a clear beginning, a punch, and a quick ending.",
        ],
      },
      {
        heading: "Cut for the platform",
        paragraphs: [
          "A vertical clip for TikTok or Shorts needs the action centered and captions on, because most people watch with the sound off. A YouTube clip can stay horizontal and run a little longer.",
          "Keep the first second strong. If the funny line lands at the ten second mark, cut everything before it and start there.",
        ],
      },
      {
        quote: "One clip that gets shared beats ten streams nobody saw.",
      },
      {
        heading: "Post often and learn",
        paragraphs: [
          "Post at least one clip every time you stream, even during a quiet week. Patterns show up fast: which games clip well, which jokes land, and which thumbnails earn a click.",
          "Link back to your channel in the clip so a curious viewer has somewhere to go. A clip with no path home is a follower you never get.",
        ],
      },
      {
        heading: "Keep a small library",
        paragraphs: [
          "Save your best clips in one folder. When a game trends again or a topic comes back around, you already have material ready to repost.",
          "Recycle the winners every few months. Most people never saw the first post, and a clip that worked once usually works again.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark clip worthy moments during the stream and review your VOD after.",
          "Cut vertical clips with captions for short video platforms.",
          "Lead with the payoff and trim everything before it.",
          "Post one clip per stream and always link back to your channel.",
        ],
      },
    ],
  },
];
