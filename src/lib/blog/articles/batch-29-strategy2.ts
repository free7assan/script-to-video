import {
  Users,
  Compass,
  Repeat,
  Search,
  Star,
  Heart,
  Clock,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch29: BlogPost[] = [
  {
    slug: "strategy2-first-100-subscribers",
    title: "First 100 Subscribers: Where a New Channel Begins",
    excerpt:
      "Your first 100 subscribers come from people who already trust you, not the algorithm. A concrete plan for earning each one without gimmicks or paid ads.",
    date: "2024-02-07",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["growth", "strategy"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Your first 100 subscribers almost never arrive through search or a recommendation feed. They come from people who already know your name, plus a few strangers you earn one at a time. Treat that as the whole objective for your first three months and growth stops feeling random.",
          "I learned this after watching a channel with 12 videos sit at 40 subs for half a year. The videos were fine. The creator was waiting for the platform to notice instead of handing the link to anyone who would care.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write down thirty real names and message them one by one.",
          "Post where your people already gather before you link anything.",
          "Track which single source produced the most subscribers.",
          "Resist buying ads until the manual version works once.",
        ]
      },
      {
        quote:
          "The algorithm does not discover you. It amplifies a signal you create somewhere else first.",
      },
      {
        heading: "Write down thirty names",
        paragraphs: [
          "Open a note and list thirty people who would genuinely find your topic useful. Not friends who will click out of loyalty. People with the actual problem your channel solves. For a channel about home coffee gear, that is anyone who complained about their grinder in the last month.",
          "Send each of them one message and one link. Not a broadcast. A short note about why you made the video and which part you think they will find useful. Roughly a third will watch. Half of those will subscribe because the recommendation came from a human.",
        ],
      },
      {
        heading: "Post where your people already gather",
        paragraphs: [
          "One subreddit thread or niche forum answers more questions than a month of scheduled uploads. Answer a real question well, then link the video only if it genuinely extends the answer.",
          "Forums punish drive-by links fast. Give the full answer in the post, add the video as a deeper version, and people click because you already helped them for free.",
        ],
      },
      {
        heading: "The math that keeps you honest",
        paragraphs: [
          "At 100 subscribers you are looking for a 1 percent conversion from roughly 10,000 targeted views. That sounds small until you remember those views can come from answering 200 questions in places your audience already reads.",
          "Track where each subscriber came from for the first month. If a source produces zero after several tries, drop it. If one produces ten, double down before you touch anything else.",
        ],
      },
      {
        heading: "What to keep doing",
        bullets: [
          "Name thirty real people with the problem and message them one by one.",
          "Answer questions in one niche forum before you link anything.",
          "Watch which single source produced the most subscribers and repeat it.",
          "Resist buying ads until the manual version works at least once.",
        ],
      },
      {
        heading: "Why this stage is short",
        paragraphs: [
          "Manual outreach feels unscalable because it is. That is the point. The first 100 teach you who your audience is and what wording makes them click.",
          "Once you know that, search and recommendations have something to amplify. Skip it and you hand the platform a signal with no idea who it is for.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-zero-audience-niche",
    title: "Picking a Niche When Nobody Is Watching You Yet",
    excerpt:
      "Niche selection fails when it is theoretical. Choose a lane by testing three topics for two weeks each and letting real responses pick the winner.",
    date: "2024-03-19",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A niche is not a permanent identity you pick on day one. It is the narrowest lane you can test fast, then widen once one topic keeps outperforming the rest. Most new creators freeze at this step and never publish.",
          "I froze for two months on a channel name I eventually changed anyway. The naming was not the bottleneck. Publishing was.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start narrower than feels comfortable.",
          "Test three lanes, two weeks each.",
          "Watch for follow-up questions, DMs, and evergreen views as signals.",
          "Name the audience, not the topic.",
        ]
      },
      {
        quote:
          "You cannot think your way to a niche. You can only test your way to one.",
      },
      {
        heading: "Start narrower than feels comfortable",
        paragraphs: [
          "'Productivity' is not a niche. 'Task management for freelancers who juggle five clients' is. The narrower version tells you what to film next Tuesday and who to send it to.",
          "Narrow also means fewer competitors fighting for the same search terms. A video titled for freelancers can rank where a generic productivity video gets buried under channels with a million subscribers.",
        ],
      },
      {
        heading: "Test three lanes, two weeks each",
        paragraphs: [
          "Pick three topics inside your general interest. Make four videos per topic across two weeks. Do not judge by views alone. Watch which topic produced comments, DMs, and saves, because those are the signals a small channel can actually generate.",
          "At the end, one lane will have stranger engagement that the others lack. That is your niche for the next six months, not forever.",
        ],
      },
      {
        heading: "Signals that a lane is working",
        bullets: [
          "Strangers ask follow-up questions instead of just liking.",
          "You get one or two DMs per ten views on a topic.",
          "A single video keeps gaining views weeks after upload.",
          "You can name five more video ideas in that lane without effort.",
        ],
      },
      {
        heading: "Widening without losing the plot",
        paragraphs: [
          "Once a lane works, adjacent topics are safe. If freelancer task management works, project templates and invoicing tools are close enough that the same viewers care.",
          "Widen one step at a time. Jumping from freelancer tools to general productivity drops the reason your early viewers stayed, and early viewers are the ones who tell the platform what your channel is about.",
        ],
      },
      {
        heading: "Name the audience, not the topic",
        paragraphs: [
          "I stopped naming channels after subjects and started naming them after people. A channel called 'for freelancers who hate admin' attracts a clearer viewer than one named after software.",
          "The test is whether a stranger can guess who the channel is for in three seconds. If they cannot, you have described a topic, not a niche.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-consistency-before-growth",
    title: "Consistency Before Growth: Ship Volume, Not Perfection",
    excerpt:
      "Waiting for polished videos stalls new channels. A fixed publishing rhythm of simpler uploads builds the muscle and the data you need to grow.",
    date: "2024-05-28",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["consistency", "growth"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Consistency beats polish for a channel with no audience. Twenty decent videos teach you more than three perfect ones, because each upload is a data point about what your viewers do. Perfection delays the only thing that compounds early: repetition.",
          "I spent six weeks on my first video. It got 60 views. The video I made in a weekend two months later got 4,000 because I had stopped guessing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Consistency beats perfection; ship volume.",
          "Set a pace you can hold on a bad week.",
          "Build a buffer, not a backlog.",
          "Template the intro and outro so they cost minutes, not hours.",
        ]
      },
      {
        heading: "The cost of a blank calendar",
        paragraphs: [
          "A missed upload does not just lose one video's views. It breaks the feedback loop. You need a steady stream of uploads to learn which titles and topics your audience responds to.",
          "The math is blunt. At one video a month, you test twelve ideas a year. At one a week, you test fifty-two. The weekly channel reaches a working formula in the time the monthly channel finishes its first real experiment.",
        ],
      },
      {
        quote:
          "Volume is not a shortcut. It is the only way to collect enough evidence to stop guessing.",
      },
      {
        heading: "Set a pace you can hold on a bad week",
        paragraphs: [
          "Pick the upload rate you can hit during your worst week, not your best. If a cold knocks you out for three days and the schedule collapses, the schedule was fiction.",
          "For most new creators that is one video every one or two weeks. Slow enough to survive real life, fast enough to keep the loop turning.",
        ],
      },
      {
        heading: "Where to protect quality",
        paragraphs: [
          "Consistency does not mean posting garbage. It means spending your effort where it shows. For a talking-head channel that is the first thirty seconds and the thumbnail. For a tutorial that is the outcome the viewer sees.",
          "Let the middle be efficient. A clear screen recording with clean audio beats a heavily edited segment nobody asked for. Save the polish for the parts that decide whether someone stays.",
        ],
      },
      {
        heading: "Build a buffer, not a backlog",
        bullets: [
          "Batch two or three videos before you publish the first one.",
          "Keep one finished video in reserve for a bad week.",
          "Template your intro and outro so they take minutes, not hours.",
          "Track upload dates next to a single metric so you can see the pattern.",
        ],
      },
      {
        heading: "When to slow down",
        paragraphs: [
          "Once a format works, slowing down to make each one better is worth it. The difference is that you are now iterating on a known winner instead of searching in the dark.",
          "From zero, you do not have a winner yet. You have a hypothesis, and hypotheses need tests. Ship enough to find one.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-borrowed-audience-collabs",
    title: "Borrowed Audience: Growing Through Collaboration",
    excerpt:
      "Collaboration moves a new channel faster than posting alone. Find peers at your level, trade a real favor, and borrow an audience that trusts them.",
    date: "2024-07-11",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["growth", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Borrowing an audience means appearing in front of viewers who already trust someone else. A guest spot, a joint video, or a shout-out from a peer can do in a day what solo uploads take a month to manage. The catch is that you have to bring something real to the trade.",
          "I got my first real jump from a creator with 800 subscribers. Same size as me. No gatekeeper involved, just two people swapping an audience.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Aim sideways, not upward, for collaborations.",
          "Bring a specific offer, not a vague idea.",
          "Use formats that work at small scale.",
          "Do the work first, then convert the borrowed attention.",
        ]
      },
      {
        heading: "Aim sideways, not upward",
        paragraphs: [
          "New creators chase big channels and get ignored. The peers worth approaching have roughly your subscriber count and a similar topic. They face the same problem you do: a small audience and no reason for anyone to notice.",
          "Sideways swaps are easy to agree on because the value is obvious. Both sides gain access to a fresh, relevant audience without a gatekeeper deciding.",
        ],
      },
      {
        quote:
          "The best collaborator is not the biggest name. It is the one whose audience looks exactly like the one you want.",
      },
      {
        heading: "Bring a specific offer",
        paragraphs: [
          "'Let's collab sometime' goes nowhere. A specific offer does. Propose an exact format, like a joint Q and A or a guest segment on their existing show. Make it easy to say yes.",
          "Name what they get. Exposure, a video edit you will handle, a topic their audience has asked for. The clearer the trade, the higher the reply rate.",
        ],
      },
      {
        heading: "Formats that work at small scale",
        bullets: [
          "Guest answers on your channel, then you appear on theirs.",
          "A two-part topic split across both channels with links swapped.",
          "A shared challenge where both channels document their results.",
          "A reaction or commentary on the other creator's work with permission.",
        ],
      },
      {
        heading: "Do the work first",
        paragraphs: [
          "Approach people after you have mentioned or supported them. Share their video and answer their comments. When your offer arrives, it reads as a relationship instead of a cold ask.",
          "Expect rejections. I message ten creators to land two collaborations. Two real ones beat a hundred unanswered cold emails.",
        ],
      },
      {
        heading: "Convert borrowed attention",
        paragraphs: [
          "A collab spike is fragile. Most guest viewers will not subscribe on the first visit. Point them to one specific video that matches what they came for, and pin a comment that gives them a reason to stay.",
          "Check the week after a swap. If the new subscribers stick, the audience was a fit. If they vanish, the match was wrong and your next collaboration should target someone closer.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-search-vs-recommendations",
    title: "Search or Algorithm: Where a New Channel Gets Traction",
    excerpt:
      "New channels win on search before they win on recommendations. Target specific problems people type into YouTube and let those views compound.",
    date: "2024-09-24",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "A brand-new channel should start with search, not recommendations. Recommendations reward channels with watch history the platform can use to find an audience. Search rewards anyone who answers a specific question clearly. One of those is available to you on day one.",
          "I tell every new creator the same thing. Stop trying to go viral and start answering queries. Viral is a lottery you enter after you have a ticket.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Recommendations are closed early for a new channel.",
          "Find queries with room and title videos to match.",
          "Link related videos so search traffic spills into your catalog.",
          "Let search performers guide your next topics.",
        ]
      },
      {
        heading: "Why recommendations are closed early",
        paragraphs: [
          "The recommendation system needs data about who watches you and when. With five videos and no watch history, it has almost nothing to work with, so your uploads get shown to a small, random test group.",
          "That test group can still produce a hit, but the odds are low and the pattern is hard to repeat. Search is different because the viewer arrives with an explicit need, and your job is to meet it.",
        ],
      },
      {
        quote:
          "Recommendations find you an audience. Search lets you find the audience yourself.",
      },
      {
        heading: "Find queries with room",
        paragraphs: [
          "Go to YouTube search and type your topic. Fill in the box slowly and note the autocomplete suggestions. Those are real phrases people type. Sort by upload date to see how recently the top results were made.",
          "You want queries where the top videos are old or thin on detail. A video that thoroughly answers a specific question can rank there without needing a large channel behind it.",
        ],
      },
      {
        heading: "Titles that match the query",
        paragraphs: [
          "Put the exact phrase someone types into the title. A video titled 'How to back up Lightroom presets on a Mac' beats 'My Lightroom workflow tips' for the person searching that exact problem.",
          "Match the phrasing, then add the payoff. The title should confirm the query and hint at the result. Viewers click when the match is obvious.",
        ],
      },
      {
        heading: "Compound, then expand",
        bullets: [
          "Pick ten specific queries your audience actually types.",
          "Make one clear video per query, titled to match.",
          "Link related videos so search traffic spills into your catalog.",
          "After search views start, let the best performers guide your next topics.",
        ],
      },
      {
        heading: "When recommendations open up",
        paragraphs: [
          "Once a handful of videos earn steady search views, the platform learns who you are for. Those viewers watch more than one video and leave comments, which builds the history recommendations need.",
          "That is when a video can break out beyond search. It rarely happens before. Search is not the lesser path. It is the on-ramp.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-first-1000-true-fans",
    title: "The First 1000 True Fans Behind a Small Channel",
    excerpt:
      "You do not need a million subscribers to sustain a channel. A thousand people who watch everything you make and buy once in a while will do.",
    date: "2024-11-06",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["growth", "strategy"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        paragraphs: [
          "A thousand true fans is not a slogan, it is arithmetic. If 1,000 people each spend $50 a year on your work, that is $50,000 before platform cuts. You get there by serving a small group intensely, not by chasing reach.",
          "I know creators with 300,000 subscribers who cannot cover their costs and creators with 4,000 who can. The difference is whether the audience trusts them enough to pay attention.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Define what a true fan looks like for you.",
          "Serve them like they are the whole audience.",
          "Measure fans by comments, signups, and replies, not subs.",
          "Turn attention into income slowly.",
        ]
      },
      {
        heading: "What a true fan looks like",
        paragraphs: [
          "A true fan watches most uploads within a day and tells a friend. They are not a passive subscriber who clicked once and forgot. You can count them by watching repeat viewers, not subscriber totals.",
          "At the start your true fans might number eight. That is enough to test whether your work resonates. Eight people who care will tell you more than 800 who do not.",
        ],
      },
      {
        quote:
          "Reach is borrowed. Trust is earned. Only one of them buys anything.",
      },
      {
        heading: "Serve them like they are the whole audience",
        paragraphs: [
          "Answer every comment while the channel is small. Ask what they are struggling with and make the next video about it. When people see their question become your content, they stop being viewers and start being part of the channel.",
          "This does not scale forever, and it does not need to. The first thousand people are built hand to hand. The next thousand can be built with what you learned from the first.",
        ],
      },
      {
        heading: "Turn attention into income slowly",
        paragraphs: [
          "Wait to sell anything until you understand what your audience already pays for. A channel about budgeting rarely sells a budgeting course well to people who are broke. Find the adjacent problem they are happy to spend on.",
          "Start with something small and specific: a template or a short checklist. Small offers tell you who is ready to pay before you build something large.",
        ],
      },
      {
        heading: "Measuring fans, not subscribers",
        bullets: [
          "Count comments from the same names across several videos.",
          "Track email signups and community members, not just subs.",
          "Watch average views per video, a steadier signal than spikes.",
          "Note who replies to polls and story prompts.",
          "Ask directly what people would pay to solve.",
        ],
      },
      {
        heading: "The patience part",
        paragraphs: [
          "Getting to a thousand true fans takes years of consistent, useful work. There is no compression trick. The creators who last are the ones who find the work itself sustainable before the audience arrives.",
          "Build for the eight people watching now. They are the seed of the thousand, and they will tell you whether the seed is worth planting again tomorrow.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-small-audience-engagement",
    title: "Serving 50 Viewers the Way You Would Serve 50,000",
    excerpt:
      "A small audience is a laboratory. Treat fifty viewers with the attention a big channel reserves for thousands, and they will build the habit for you.",
    date: "2025-01-21",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["growth", "consistency"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Fifty engaged viewers beat fifty thousand indifferent ones when you are starting. Those fifty are your test group. They tell you what works, and they do it with enough detail to change your next video.",
          "I stopped feeling bad about small numbers the week I asked three viewers what confused them. Two named the same thing. I fixed it and the next video held people twice as long.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reply like the channel is a conversation.",
          "Turn comments into a content calendar.",
          "Give the audience a role, not just a vote.",
          "Do not chase the wrong metric.",
        ]
      },
      {
        heading: "Reply like the channel is a conversation",
        paragraphs: [
          "When you have fifty comments, reply to all of them. Not with a heart, with a sentence. Answer the question, ask one back. People return to channels where they were spoken to.",
          "That behavior builds a habit. Viewers start checking your uploads because they expect a response, and the platform reads that returning behavior as a signal worth spreading.",
        ],
      },
      {
        quote:
          "Nobody owes a small channel their attention. Gratitude is a growth strategy.",
      },
      {
        heading: "Turn comments into a content calendar",
        paragraphs: [
          "Every question in your comments is a video idea with proof that at least one person wants it. Keep a running list. When two people ask the same thing, that is your next upload.",
          "This is why small channels can beat big ones on relevance. You are close enough to hear the request directly instead of guessing from aggregate data.",
        ],
      },
      {
        heading: "Give the audience a role",
        bullets: [
          "Run a poll to pick between two video ideas.",
          "Ask viewers to submit examples you feature on screen.",
          "Name a recurring series so people can follow it.",
          "Credit the people whose questions drove an episode.",
          "Invite early viewers into a small community space.",
        ],
      },
      {
        heading: "Do not chase the wrong metric",
        paragraphs: [
          "A spike from a broad, off-topic video brings strangers who never return. It looks like growth and behaves like noise. A slow climb of repeat viewers looks flat and compounds.",
          "Judge a video by whether the people who watched it come back for the next one. That number is small and stubborn and far more useful than a single big day.",
        ],
      },
      {
        heading: "The compounding effect",
        paragraphs: [
          "Fifty people who trust you become the ones who share your work, answer questions in the comments, and buy your first small product. They do the marketing a big channel pays for.",
          "Treat them like the audience you want, and they will recruit the audience you do not have yet.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-publishing-schedule-zero",
    title: "Building a Publishing Schedule You Can Actually Keep",
    excerpt:
      "A publishing schedule only works if it survives your worst week. Choose a pace below your limit, protect the buffer, and let the rhythm do the work.",
    date: "2025-04-15",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["consistency", "strategy"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A schedule you can keep is worth more than an ambitious one you abandon. Pick an upload rate you can hit even during a bad week, then protect the time you set aside to make it happen.",
          "Every creator I know who quit blamed motivation. Every one who lasted had a routine they could run while unmotivated. The routine, not the mood, held the channel together.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick the worst-week pace and build a buffer first.",
          "Block the time, not the goal.",
          "Reduce the cost per video with templates and batching.",
          "Review the schedule monthly and adjust before it cracks.",
        ]
      },
      {
        heading: "Pick the worst-week pace",
        paragraphs: [
          "Estimate how long one video takes from idea to upload. Now double it. That is roughly what a real video costs once life interferes. Schedule against the doubled number.",
          "If one video takes six hours at your best, assume twelve in a normal week. If you have six hours a week free, you publish every two weeks. Say it out loud before you promise weekly.",
        ],
      },
      {
        quote:
          "A cadence you miss half the time is not a cadence. It is a source of guilt with a thumbnail.",
      },
      {
        heading: "Block the time, not the goal",
        paragraphs: [
          "Put the recording and editing blocks in a calendar like meetings. Goals are vague and easy to postpone. Calendar blocks are specific and easier to defend.",
          "Protect one block for scripting and one for editing. If a block gets eaten, move it instead of dropping it. Moving preserves the rhythm, dropping resets it.",
        ],
      },
      {
        heading: "Build a buffer before you announce",
        bullets: [
          "Finish two or three videos before you publish the first.",
          "Keep one completed video as insurance for a bad week.",
          "Reuse templates for intros, outros, and thumbnails.",
          "Batch the boring parts, like exports and descriptions.",
          "Review the schedule monthly and adjust before it cracks.",
        ],
      },
      {
        heading: "Reduce the cost per video",
        paragraphs: [
          "The easier a video is to make, the easier the schedule is to keep. Cut anything that does not affect whether the viewer stays. A repeated intro and a fixed editing preset buy back hours.",
          "Lowering the cost per video is not lowering quality. It is moving effort from decoration to the parts that change the outcome.",
        ],
      },
      {
        heading: "When to break the schedule",
        paragraphs: [
          "Some videos are worth the disruption: a collaboration, a timely topic, a piece you know will overperform. Break the rhythm on purpose and return to it on purpose.",
          "The damage comes from silence, not flexibility. One skipped upload is fine if the next one lands when you said it would.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-niche-community-hubs",
    title: "Finding Your People in Niche Communities Off-Platform",
    excerpt:
      "A niche forum or newsletter puts you in front of the exact people your channel serves. Show up, answer questions, and let the audience grow from there.",
    date: "2025-08-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["growth", "strategy"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Your audience often gathers somewhere the algorithm cannot see, like a forum or a niche newsletter. Showing up there with useful answers puts you in front of the exact people your channel serves, without competing for impressions.",
          "I built the first real audience for one channel entirely from a 4,000-member Discord. No paid promotion. Just answering questions for a few months before I ever posted a link.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Find where the conversation already lives.",
          "Give before you link.",
          "Pick two communities and go deep.",
          "Become a regular, not a drive-by promoter.",
        ]
      },
      {
        heading: "Find where the conversation lives",
        paragraphs: [
          "Search your topic plus 'forum' or 'discord' and see what surfaces. Look for spaces with steady activity and specific problems, not the biggest server you can find. A smaller space where people ask real questions beats a huge one full of noise.",
          "Newsletters are underrated. A writer who covers your exact subject often has a list of exactly the people you want to reach, and they are reachable for a guest post.",
        ],
      },
      {
        quote:
          "A hundred people in the right room beats a cold audience of a hundred thousand.",
      },
      {
        heading: "Give before you link",
        paragraphs: [
          "Spend weeks answering without mentioning your channel. Build a name for solving the specific problem. When people trust your answers, a link feels like a favor instead of an ad.",
          "Most communities ban links until you have history. Earn that history first. A single well-received answer can send more qualified viewers than a week of cold outreach.",
        ],
      },
      {
        heading: "Where to be, and how",
        bullets: [
          "Pick two communities and go deep instead of ten you skim.",
          "Answer questions in full, then offer the video as extra depth.",
          "Share the video only when it directly answers what was asked.",
          "Track signups from each space to know what works.",
          "Become a regular, not a drive-by promoter.",
        ],
      },
      {
        heading: "Turn members into subscribers",
        paragraphs: [
          "Community members do not convert like strangers. They need a reason to leave the platform they already like. Make the channel the place where you go deeper than a comment allows.",
          "Point them to one video that matches the exact problem they have. A direct match converts far better than a general channel trailer aimed at everyone.",
        ],
      },
      {
        heading: "The slow, durable path",
        paragraphs: [
          "Community-led growth is slower than a lucky recommendation and far less likely to disappear overnight. Those people already chose the topic. You are just showing up where they are.",
          "Show up consistently in two rooms and you will never wonder where your next hundred subscribers come from. You will know their usernames.",
        ],
      },
    ],
  },
  {
    slug: "strategy2-measuring-early-growth",
    title: "Measuring Early Growth Without Fooling Yourself",
    excerpt:
      "Early analytics lie if you read the wrong numbers. Track retention, returning viewers, and search impressions instead of chasing raw view spikes.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["strategy", "growth"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Most early channels measure the wrong thing. Total views feel good and mean little. The numbers worth watching at the start are average view duration and search impressions. Those point to whether the channel is building something.",
          "I wasted a year refreshing a subscriber count that barely moved. The metric that would have helped me was retention, and I ignored it because the number was small and unfriendly.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Measure watch behavior, not just views.",
          "Watch the returning-viewers share.",
          "Track search impressions and the queries behind them.",
          "Ignore one-off vanity spikes.",
        ]
      },
      {
        heading: "Views versus watch behavior",
        paragraphs: [
          "Views count entries. Watch behavior counts whether anyone stayed. A video with 200 views and 60 percent retention is a better sign than one with 2,000 views that people abandon in ten seconds.",
          "Find the retention graph and look at the first thirty seconds. If the line falls off a cliff, the opening is the problem. If it holds and drops at a specific point, something in the middle lost people.",
        ],
      },
      {
        quote:
          "A view is a person who showed up. Retention is a person who decided to stay.",
      },
      {
        heading: "Watch the returning viewers number",
        paragraphs: [
          "Returning viewers tells you how many people came back after watching something before. On a new channel this number is tiny, and it is the clearest signal that your work is sticking.",
          "An off-topic video can triple your views and leave returning viewers flat. A narrow video that a smaller group watches completely can raise it. Trust the second one.",
        ],
      },
      {
        heading: "Search impressions and click-through",
        paragraphs: [
          "Impressions show how often your video appeared to someone. Click-through rate shows how many clicked. A high impression count with a low click-through points at the title and thumbnail, not the content.",
          "Look at which queries trigger your impressions. Those phrases tell you what the platform thinks your channel is for, which is often different from what you intended.",
        ],
      },
      {
        heading: "A simple early scorecard",
        bullets: [
          "Average view duration and the shape of the retention graph.",
          "Returning viewers as a share of total viewers.",
          "Search impressions and the queries behind them.",
          "Click-through rate on impressions.",
          "Comment quality, not comment count.",
        ],
      },
      {
        heading: "Ignore the vanity spikes",
        paragraphs: [
          "A single viral video can distort every number for a month. Judge a channel by the floor, not the peak. What do your worst recent videos do? That baseline is the real state of your audience.",
          "Track five videos before you draw a conclusion. One data point is an anecdote, five is a trend, and a trend is the only thing worth changing your approach over.",
        ],
      },
    ],
  },
];
