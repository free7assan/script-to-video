import { Search, Tag, Compass, Activity, Layers, Repeat, PenLine, Rocket, Type, Clock } from "lucide-react";
import type { BlogPost } from "../types";

export const batch08: BlogPost[] = [
  {
    slug: "discovery-youtube-search-intent",
    title: "YouTube Search Intent: Match the Query Before You Rank",
    excerpt:
      "Ranking is the easy part to obsess over. The harder question is whether your video answers the exact job the viewer typed into the box.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Search intent is the job behind the query",
        paragraphs: [
          "When someone types \"how to edit faster in Premiere\" into YouTube, they are not browsing. They have a task and a clock. Your job is to match the shape of that task before you worry about ranking anywhere.",
          "I sort intent into four buckets: learn, compare, copy, and fix. A tutorial serves learn. A \"best mic under $100\" serves compare. A template walkthrough serves copy. A \"why is my export stuck at 99%\" serves fix. Each one wants a different video, even when the topic overlaps almost completely.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Search intent is the job behind the query.",
          "Match the format to the intent, not the other way around.",
          "Read intent from the query words themselves.",
          "The title is a promise; the video is the receipt.",
        ]
      },
      {
        heading: "Match the format to the intent",
        paragraphs: [
          "Format signals intent as loudly as the title does. A 22 minute documentary cannot answer a fix query, and a 90 second clip cannot teach a full workflow. When format and intent disagree, people leave in the first 15 seconds and the impressions dry up within a day.",
          "I keep a simple map. Learn gets a structured breakdown with chapters. Compare gets side-by-side tests and a verdict near the top. Copy gets a screen recording plus a downloadable file. Fix gets the answer in the first 30 seconds, no intro and no backstory.",
        ],
      },
      {
        heading: "Reading intent from the query itself",
        paragraphs: [
          "The words people choose leak what they actually want. You can learn a lot by staring at the autocomplete list for ten minutes instead of guessing at titles.",
        ],
        bullets: [
          "Words like how, why, and what usually mean the viewer wants an explanation, not a product.",
          "Words like best, versus, and or signal a comparison and a decision the viewer is trying to make.",
          "Numbers, dates, and version tags (2026, 5.3) point to a specific answer rather than a broad overview.",
          "Names of people, tools, or games pull in audiences that already understand the space and skip the basics.",
          "Full questions with a question mark often come from voice search, where people type the way they talk.",
        ],
      },
      {
        heading: "The title is a promise, the video is the receipt",
        paragraphs: [
          "Every title writes a check that the first minute has to cash. If the query says fix and you open with a childhood story, you broke the deal. Retention drops, and YouTube quietly stops testing the video in search results.",
          "I check the search terms report in Studio, then watch where the retention curve bends. That bend usually marks the exact second the video stops answering the query. It is humbling and genuinely useful.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Search traffic is the most honest feedback you will ever get. The viewer typed what they wanted, and the graph tells you whether you delivered it.",
      },
      {
        heading: "Where people get intent wrong",
        paragraphs: [
          "The common mistake is chasing volume. A query with 200,000 monthly searches that has nothing to do with your channel brings the wrong people. They watch 40 seconds, feel misled, and never come back.",
          "A smaller query you can fully satisfy beats a huge one you half answer. I would rather rank third for a precise question than sit at number twelve for a vague one that half the internet is also targeting.",
          "There is also a timing trap. Fix queries spike when a tool updates and fade in three weeks. Learn queries hold for years. If your channel is small, the durable question is usually the smarter bet.",
        ],
      },
      {
        heading: "A routine you can run in ten minutes",
        paragraphs: [
          "Before writing a script, I type the candidate query into YouTube and read the top five titles. If all five are listicles and mine is a story, I am fighting the shelf. If two are outdated and the rest are hour-long livestreams, there is room for a tight, current answer.",
          "Then I put the query in the title, answer it in the first sentence of the description, and script the payoff for the opening 30 seconds. That is the whole workflow. No tricks, just alignment between what was asked and what you built.",
        ],
      },
    ],
  },
  {
    slug: "discovery-keywords-without-stuffing",
    title: "How to Use Keywords on YouTube Without Stuffing Them",
    excerpt:
      "Keyword stuffing is a habit from 2012 that still haunts modern channels. YouTube reads meaning now, not word counts, and your viewers do too.",
    date: "2024-06-03",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "algorithm"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        heading: "YouTube does not count keywords like a spreadsheet",
        paragraphs: [
          "The old advice was to repeat a phrase until the algorithm noticed. That advice is dead. Modern systems read context, transcripts, and viewer behavior, so a sentence that a human finds awkward also reads as noise to the machine.",
          "I have tested this on my own uploads. Five natural mentions of a phrase outperformed twenty forced ones every single time, and the natural version held its ranking for months instead of days.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "YouTube does not count keywords like a spreadsheet.",
          "Put the core phrase near the front of the title.",
          "Say the topic aloud in the first 15 seconds.",
          "Name chapters the way a viewer would search.",
        ]
      },
      {
        heading: "Write the way the query is spoken",
        paragraphs: [
          "Start with the exact phrase a viewer would type, then write around it like a person. If the phrase is \"budget travel camera,\" your title does not need it three times. It needs it once, in a place a human would naturally put it.",
          "The transcript matters here more than most creators realize. YouTube can read your speech, so saying the topic out loud in plain language counts as a keyword mention without any written stuffing at all.",
        ],
      },
      {
        heading: "Put the phrase where it earns its place",
        paragraphs: [
          "You have a handful of spots that carry real weight. Fill them with intent, not repetition.",
        ],
        bullets: [
          "Title: put the core phrase near the front, then add the hook that earns the click.",
          "Description, first two lines: restate the promise in one plain sentence a viewer would understand.",
          "Spoken opening: say the topic out loud within the first 15 seconds so the transcript captures it.",
          "Chapters: name each section the way a viewer would search for that specific step.",
        ],
      },
      {
        heading: "The myth of the perfect keyword density",
        paragraphs: [
          "There is no density target. Someone invented one because SEO blogs needed something to measure. In practice, if your script sounds like it was written for a robot, viewers bounce and the ranking falls anyway.",
          "I stopped counting mentions years ago. My only rule is simple: if I read a line out loud and it sounds like marketing copy, I rewrite it. The natural version ranks better and it keeps people watching.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Stuffing keywords is like repeating a friend's name every sentence to make them like you. It does not work in conversation, and it does not work in search.",
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Pick one primary phrase and two or three related phrases that share the same intent. Weave them into the title, the spoken intro, and the chapter names. Then stop thinking about keywords and start thinking about the viewer.",
          "Check the search terms report a week after upload. The phrases YouTube actually used to surface your video are often more specific and more useful than the ones you guessed. Let real data replace your assumptions.",
        ],
      },
    ],
  },
  {
    slug: "discovery-browse-vs-search-traffic",
    title: "Browse Traffic vs Search Traffic: Where Views Come From",
    excerpt:
      "Two doors lead to your video, and the people walking through them want opposite things. Treating them the same is why many uploads stall.",
    date: "2024-09-21",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Two doors, two different people",
        paragraphs: [
          "Search traffic arrives with a question. Browse traffic arrives with time to kill and no plan. The first person already knows what they want. The second person is choosing between you and the thumbnail two inches to the left.",
          "I used to lump both into one \"views\" number and optimize for neither. Once I split them, my decisions got sharper. A search video needs precision. A browse video needs a hook that works in half a second of scanning.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Browse and search are two doors with two different people.",
          "Search rewards clarity and exact matches.",
          "Browse numbers look harsh because the feed tests small first.",
          "Read the two surfaces together, not blended.",
        ]
      },
      {
        heading: "Search traffic rewards clarity",
        paragraphs: [
          "When the viewer typed a query, the title and thumbnail have one job: confirm this is the answer. Cleverness hurts here. If someone searched \"how to make sourdough,\" a mysterious thumbnail leaves them unsure whether to click.",
          "Search-heavy videos age well. I have uploads from two years ago that still pull steady daily views because the question never expires. That consistency is worth more to me than a one-week spike.",
        ],
      },
      {
        heading: "Why browse numbers are so hard to read",
        paragraphs: [
          "Browse depends on a cold start. YouTube shows your thumbnail to a small slice of people and watches what happens. Several factors decide whether it widens the test or closes the door.",
        ],
        bullets: [
          "Click-through rate tells the system whether your packaging wins the glance.",
          "The first 30 seconds decide whether the click was a mistake or a match.",
          "Session behavior matters: if people keep watching after you, the shelf keeps you.",
          "A fresh topic with no history gets a smaller test, so early numbers look harsher than they are.",
          "Thumbnails that look like the ones beside them lose, even when the topic is strong.",
        ],
      },
      {
        heading: "Feeding the browse shelf",
        paragraphs: [
          "I treat the browse shelf as a packaging problem, not a content problem. Same research, same script, but the first five words and the thumbnail carry everything. When I get those right, browse traffic can dwarf search overnight.",
          "The tradeoff is that browse traffic is fickle. A video that gets 100,000 browse views in a week can fall to almost nothing in a month. Search traffic is smaller but it pays rent every day.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Browse buys you a spike. Search pays you a salary. Strong channels learn to run both at once and stop asking which one is better.",
      },
      {
        heading: "Reading the two together",
        paragraphs: [
          "Open the traffic sources report and look at the split for each upload. If everything is search, your packaging is probably safe and dull. If everything is browse, your topics may be too trend-bound to build on.",
          "The channel I admire most runs about a 60/40 mix. Search videos fund the base, browse videos bring new people in. When one side dips, they adjust, and they never panic about a single bad upload.",
        ],
      },
    ],
  },
  {
    slug: "discovery-algorithm-not-slot-machine",
    title: "The YouTube Algorithm Is Not a Slot Machine You Can Beat",
    excerpt:
      "There is no lucky pull, no secret hour, no hidden jackpot. The system is a matchmaker, and matchmakers reward fit over cleverness.",
    date: "2025-01-08",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "algorithm"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "The machine is not random, but it is not fair either",
        paragraphs: [
          "The slot machine story goes like this: upload enough, hit publish at the right minute, and one video finally pays out. I understand the appeal. It makes a chaotic system feel winnable with effort alone.",
          "What actually happens is less dramatic. YouTube tries to match each viewer with a video they will watch and enjoy. When the match is good, it shows the video to more people like that viewer. When it is bad, the test ends.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The algorithm is not random, but it is not fair either.",
          "Volume, upload times, and hashtags are not the levers.",
          "Optimize for the second click, not the algorithm.",
          "Build a repeatable process instead of gambling each upload.",
        ]
      },
      {
        heading: "What actually drives the recommendation",
        paragraphs: [
          "Two clicks matter more than anything else: the click onto your video, and the click that keeps the viewer on YouTube after it ends. Everything the algorithm does serves those two events.",
          "That is why packaging and retention keep showing up in every conversation about growth. They are not tricks. They are the raw signal the system uses to decide whether you deserve a bigger audience.",
        ],
      },
      {
        heading: "The slot machine mindset and what it costs you",
        paragraphs: [
          "Believing in luck changes how you work, and rarely for the better.",
        ],
        bullets: [
          "You upload more often and polish less, because volume feels like the lever.",
          "You chase upload times and hashtags instead of fixing weak openings and dull thumbnails.",
          "You read a single bad video as proof the system hates you, then quit for a month.",
          "You never build a repeatable process, so every upload is a fresh gamble from zero.",
        ],
      },
      {
        heading: "Optimize for the second click, not the algorithm",
        paragraphs: [
          "I stopped asking what the algorithm wants and started asking what makes someone stay. That shift fixed my retention before I ever touched a title formula. People stay for a clear promise and a payoff that arrives on time.",
          "The second click is the underrated one. If your video ends and the viewer closes the app, you were a dead end. If they open another video, you helped the session, and the system remembers that.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You cannot pull the lever and win. You can build a video so good at its job that the machine has no reason to stop showing it.",
      },
      {
        heading: "A better mental model",
        paragraphs: [
          "Think of YouTube as a librarian who watches what everyone reads. When a new person walks in with the same taste as your last viewer, the librarian hands them your book. Disappoint that reader and the recommendation slows.",
          "This model kills the lottery thinking. There is no jackpot to chase. There is only fit, repeated at scale, for as long as you can keep making things people finish.",
        ],
      },
    ],
  },
  {
    slug: "discovery-suggested-videos-adjacency",
    title: "Suggested Videos: How Adjacency Drives YouTube Discovery",
    excerpt:
      "Suggested videos are the biggest discovery surface most creators never study. Your growth often depends on which videos YouTube decides you belong next to.",
    date: "2025-04-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "algorithm", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Adjacency is the room your video walks into",
        paragraphs: [
          "Whenever someone finishes a video, YouTube offers a next one on the right or the end screen. That sidebar is not random. It is a guess about what this specific viewer would watch next, based on what people like them did before.",
          "If your video gets placed beside a giant in your niche, the traffic can be enormous. If it gets placed beside something unrelated, you get clutter clicks and poor retention.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Adjacency is the room your video walks into.",
          "Match the length, pacing, and tone of your neighbors.",
          "Answer the next obvious question the other video left open.",
          "Keep retention strong in the back half, where placement is tested.",
        ]
      },
      {
        heading: "How the shelf gets built",
        paragraphs: [
          "YouTube looks at who watched both videos, not just what the topics share. Two videos with identical keywords can fail to appear together if their audiences never overlap. The audience graph decides, not the word match.",
          "That is why a cooking channel and a woodworking channel can share suggestions: their viewers happen to overlap. Topic is a hint. Behavior is the verdict.",
        ],
      },
      {
        heading: "Signals that make you a good neighbor",
        paragraphs: [
          "You can influence which rooms you appear in, mostly by being watchable next to the channels you want to sit beside.",
        ],
        bullets: [
          "Match the length and pacing of the videos you want to appear after.",
          "Use the same visual and tonal cues so viewers trust the transition.",
          "Cover the next obvious question, the one the other video left open.",
          "Link related videos in your description and end screen to feed the graph directly.",
          "Keep retention strong in the back half, since that is when suggested placement gets tested.",
        ],
      },
      {
        heading: "Pick your neighbors on purpose",
        paragraphs: [
          "I keep a short list of channels whose audience looks like mine. When I plan a video, I ask what their viewers would want next, then build toward that. It sounds cynical. It mostly means staying on topic when I feel like drifting.",
          "Fighting for adjacency with a channel ten times your size is a slow game. Being the obvious next step for a handful of channels your size compounds much faster.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Nobody clicks your video in isolation. They click because it looks like the right thing to watch after something they already trusted.",
      },
      {
        heading: "The compounding effect",
        paragraphs: [
          "Suggested traffic is quiet at first. One video sends you 200 views a day, another 300, and after a year the total is a steady stream you never specifically planned. It arrives long after upload, which is why creators underrate it.",
          "The mistake is treating each upload as a standalone launch. A video is also an entry point into your library. Build for the next click and the library starts working for you while you sleep.",
        ],
      },
    ],
  },
  {
    slug: "discovery-playlists-discovery-surface",
    title: "Playlists as a Discovery Surface Most Creators Ignore",
    excerpt:
      "A good playlist turns single videos into a session. YouTube loves sessions, and it will happily serve your playlist to people who never saw a single upload.",
    date: "2025-08-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "algorithm", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Playlists are an underused front door",
        paragraphs: [
          "Most creators make a playlist, dump ten videos in upload order, and forget it. That is leaving a discovery surface almost entirely unused, and it is one of the easiest things to fix.",
          "A well-built playlist ranks in search on its own, appears in suggestions, and gives a new viewer a reason to stay for 40 minutes instead of four. That session time helps everyone in it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Playlists are an underused front door.",
          "Give the playlist a searchable promise, not a folder name.",
          "Order videos as a path, opening with your strongest.",
          "Keep entries tightly related so the promise holds.",
        ]
      },
      {
        heading: "Why YouTube likes a good playlist",
        paragraphs: [
          "The platform cares about watch time across a session, not just per video. A playlist that keeps someone watching through five videos is a small gift to the recommendation system, and the system remembers.",
          "Playlists also survive better than single videos during topic lulls. When one entry stops getting suggested, the playlist can still surface as a unit and pull traffic to the rest.",
        ],
      },
      {
        heading: "How to build playlists that get watched",
        paragraphs: [
          "The goal is one clear path, not a folder of everything you have ever made.",
        ],
        bullets: [
          "Pick a specific promise, like \"start a podcast from zero,\" so the playlist title can match a real search.",
          "Order videos as a path, beginner to advanced, not by upload date.",
          "Open with your single strongest video so the first impression holds people.",
          "Write a two-sentence playlist description with the same phrase people would search.",
          "Keep entries tightly related; one off-topic video breaks the promise and the session.",
        ],
      },
      {
        heading: "The order matters more than the title",
        paragraphs: [
          "I tested this on a tutorial series. Same videos, same title, but I reordered them into a logical sequence. Average watch time per viewer nearly doubled because people stopped bouncing when a step assumed knowledge they did not have yet.",
          "A playlist is a curriculum. If lesson three requires lesson one, put it third. Viewers forgive a lot, but they will not forgive being confused in the first ten seconds.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A playlist is the cheapest way to turn a stranger who liked one video into someone who watches five. It asks for an afternoon of ordering, not a new upload.",
      },
      {
        heading: "Start with one",
        paragraphs: [
          "Do not build twenty playlists. Build one around your best-performing topic and keep it tight. Link it in the end screen of every relevant video and watch whether session time moves.",
          "When it works, copy the pattern. Over a year, a handful of good playlists can carry a surprising share of your channel's total watch time without a single new script.",
        ],
      },
    ],
  },
  {
    slug: "discovery-metadata-that-matters",
    title: "YouTube Metadata That Actually Matters for Discovery",
    excerpt:
      "Most metadata fields are close to decoration. A few of them do real work, and knowing which is which saves you hours of fiddling.",
    date: "2025-11-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        heading: "Most metadata is decoration",
        paragraphs: [
          "Creators spend a strange amount of time agonizing over tags, hashtags, and the exact placement of a keyword in the description. I did too, until I looked at where views actually came from and realized most of it barely registered.",
          "That does not mean metadata is pointless. It means a few fields carry the weight, and the rest are there for clarity and housekeeping. Spending equal effort on all of them is wasted energy.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Most metadata is decoration.",
          "Title and thumbnail do the heavy lifting.",
          "The first two description lines carry real weight.",
          "The spoken opening is a keyword whether you planned it or not.",
        ]
      },
      {
        heading: "The fields that move discovery",
        paragraphs: [
          "If you only had ten minutes, this is where I would put them.",
        ],
        bullets: [
          "Title: the single highest-value text on the page, and the phrase that earns the click.",
          "Thumbnail: technically an image, but it works like metadata and often decides everything.",
          "First two description lines: shown in search and suggested feeds, so they carry real weight.",
          "Spoken opening: YouTube reads the transcript, so the first sentence is a keyword whether you planned it or not.",
        ],
      },
      {
        heading: "Title and thumbnail do the heavy lifting",
        paragraphs: [
          "I can usually predict a video's fate from the title and thumbnail alone. If a stranger cannot tell what the video is and why it matters in half a second, no description field will save it.",
          "The pair works together. A title that sparks curiosity with a thumbnail that confirms relevance is the whole game. One clever half without the other leaves people guessing, and guessing people scroll.",
        ],
      },
      {
        heading: "Description and tags are for clarity, not ranking",
        paragraphs: [
          "The description's real job is to answer what is this about for the search engine and for the human skimming it. Two honest sentences near the top do more than paragraphs of keyword soup.",
          "Tags live at the bottom of the priority list. They help with misspellings and little else. I fill them because it takes a minute, not because they are a growth lever.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Nobody has ever subscribed because of a hashtag. They subscribed because the thumbnail matched the promise and the first minute kept it.",
      },
      {
        heading: "A quick audit",
        paragraphs: [
          "Take your last five uploads and read only the title, thumbnail text, and first description line. Ask whether a stranger knows what they would get. If the answer is no, you know exactly where to work next.",
          "Ignore the fields that do not move the needle. Get the title, thumbnail, and opening sentence right, and the rest is cleanup you can do in a couple of minutes.",
        ],
      },
    ],
  },
  {
    slug: "discovery-brand-new-channel",
    title: "Discovery for a Brand New YouTube Channel With No Audience",
    excerpt:
      "Zero subscribers is not a death sentence. It is a starting position, and it changes which discovery strategy actually makes sense.",
    date: "2026-02-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "algorithm"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        heading: "No subscribers is not the same as no audience",
        paragraphs: [
          "A new channel feels like shouting into a void, but the void contains millions of people searching every day. They do not care that you are new. They care whether your video answers their question.",
          "This is the one advantage of starting now: search demand already exists, and it does not check your subscriber count before it shows a result.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "No subscribers is not the same as no audience.",
          "Start where search demand already sits.",
          "Treat the first 30 videos as research.",
          "Judge the pattern across thirty uploads, not video three.",
        ]
      },
      {
        heading: "Start where the search demand already sits",
        paragraphs: [
          "Do not open with a channel trailer explaining who you are. Nobody is searching for that. Open with the specific question people in your niche type into the box every day.",
          "I would rather a new channel publish ten tight answers to real queries than one polished brand piece. The answers get discovered. The brand piece gets watched by your mom and then dies.",
        ],
      },
      {
        heading: "The first 30 videos are research",
        paragraphs: [
          "Treat early uploads as experiments, not monuments.",
        ],
        bullets: [
          "Pick queries with steady demand and low competition, the ones where page one looks tired.",
          "Make each video short enough to finish and specific enough to satisfy one clear question.",
          "Watch the search terms report to find which phrasing actually brought viewers.",
          "Note which topics keep retention high, then make more of those and fewer of the rest.",
          "Do not judge the channel on video three; judge it on the pattern across thirty.",
        ],
      },
      {
        heading: "Borrow other people's audiences",
        paragraphs: [
          "Suggested placement is how small channels leapfrog. If your video is a natural next step for viewers of a bigger channel, YouTube can serve it there even with zero followers.",
          "That means making videos that answer the question a popular video left hanging. It is not stealing. It is being useful in the exact spot where someone is already curious.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A new channel's job is not to be discovered by everyone. It is to be the perfect answer for a small, well-defined group that is already searching.",
      },
      {
        heading: "Patience with a plan",
        paragraphs: [
          "Growth at the start is quiet and then sudden. Most channels that break out spent months at near zero and then found one topic that clicked. The work before the click is not wasted; it is how you find the click.",
          "Keep the process honest. Answer a real question, check the data, adjust, repeat. The audience shows up when the answers get good enough, not when you have enough subscribers.",
        ],
      },
    ],
  },
  {
    slug: "discovery-tags-chapters-descriptions",
    title: "Tags, Chapters, and Descriptions: What Helps Discovery",
    excerpt:
      "Three fields everyone fills and almost nobody understands. Two of them help viewers navigate, and one is mostly harmless busywork.",
    date: "2026-06-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "Tags are the least important field, and still worth ten minutes",
        paragraphs: [
          "I am not going to pretend tags are useless, because that overcorrects. They help slightly with misspellings and unusual terms, and they cost almost nothing to add. They are just not the lever people treat them as.",
          "Never sacrifice the title to save a tag. Never repeat the same tag five times hoping it helps. Write a handful of honest, varied tags and move on to the parts that matter.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tags are the least important field, still worth ten minutes.",
          "Chapters help humans, and humans help you.",
          "Write the first two description lines to do a job.",
          "Use natural sentences, not a wall of repeated keywords.",
        ]
      },
      {
        heading: "Chapters help humans, and humans help you",
        paragraphs: [
          "Chapters do not directly boost ranking in any clean way I can measure. What they do is let a viewer jump to the exact answer, which keeps them from leaving out of frustration. That retention shows up in the graph.",
          "They also give search a table of contents to read. If every label is a phrase someone would actually type, the video becomes findable through more than one door.",
        ],
      },
      {
        heading: "Writing a description that does a job",
        paragraphs: [
          "A description has three jobs, and it can do all of them in about 200 words.",
        ],
        bullets: [
          "Say what the video is in the first two lines, since those are the ones that surface in search.",
          "Add timestamps or chapters so viewers can navigate without scrubbing.",
          "Link the one or two resources you promised, and nothing else that distracts.",
          "Use natural sentences with the topic phrase, not a wall of repeated keywords.",
        ],
      },
      {
        heading: "The order I fill out a video",
        paragraphs: [
          "Title first, then thumbnail, then script, then the description. The written metadata comes last because it should describe a finished thing, not rescue an unclear one.",
          "If the description feels hard to write, that is a signal the video's promise is muddy. Fix the video or the title, then the description almost writes itself.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Tags convince almost no one to click. A clear description and honest chapters convince people to stay, and staying is what gets recommended.",
      },
      {
        heading: "Small fields, real effects",
        paragraphs: [
          "None of these three fields will make a bad video work. All three together make a good video easier to navigate, easier to find, and easier to trust. That is the entire job.",
          "Spend the bulk of your energy on the title, thumbnail, and opening. Use tags and descriptions to support those, not to replace them. The hierarchy is stable, and it rarely rewards shortcuts.",
        ],
      },
    ],
  },
  {
    slug: "discovery-evergreen-vs-trend",
    title: "Evergreen vs Trend Discovery: Choosing What to Chase",
    excerpt:
      "One topic pays rent for years. The other pays a lump sum and vanishes. Knowing which one you need right now is the whole decision.",
    date: "2026-09-24",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "algorithm", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "Two clocks run at the same time",
        paragraphs: [
          "Every video is racing two clocks. One measures whether people care this week, the other measures whether they will still care in two years. Most topics lean hard toward one and barely register on the other.",
          "Trend videos spike fast and fall off a cliff. Evergreen videos start slow and keep a low, steady heartbeat. A channel needs both eventually, but the right mix depends on where you are.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Evergreen and trend run on two clocks at once.",
          "Trend videos work best when they relate to your evergreen core.",
          "Speed beats polish when chasing a trend.",
          "One hit trend can fund a month of sturdier uploads.",
        ]
      },
      {
        heading: "What evergreen actually means",
        paragraphs: [
          "Evergreen does not mean boring. It means the question does not expire. \"How to read a tape measure\" will be searched in 2040. \"Reaction to this week's patch\" will not.",
          "The payoff of evergreen is compounding. Each one adds a small floor of daily views, and after twenty of them the floor is high enough that a bad month no longer hurts. I sleep better with a library of these.",
        ],
      },
      {
        heading: "Where trends are worth the risk",
        paragraphs: [
          "Trends are not a trap if you use them with clear eyes.",
        ],
        bullets: [
          "A trend video can introduce your channel to a large audience in a single week.",
          "It works best when the topic still relates to your evergreen core, so new viewers have somewhere to go.",
          "Speed matters more than polish; a perfect video about last week's news is worthless.",
          "One hit trend video can fund a month of slower, sturdier uploads.",
        ],
      },
      {
        heading: "The hybrid approach I use",
        paragraphs: [
          "I try to make trend videos that also teach something durable. A video about a new tool update can still explain the underlying principle people will need after the update is forgotten.",
          "That way the spike brings people in, and the evergreen layer keeps the video alive long after the trend dies. One upload, two clocks, and the downside is far smaller.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A trend is a loan. You get the audience up front and pay it back in relevance. Evergreen is the rent money you keep whether or not anyone notices the day you earn it.",
      },
      {
        heading: "Choosing based on your channel stage",
        paragraphs: [
          "If you are brand new, lean on evergreen search topics so the algorithm has something stable to work with. Trends can spike a channel with no core audience, but the new viewers often leave as fast as they arrived.",
          "Once you have a floor of steady views, loosen up. Mix in trends where they fit your niche, keep the rest evergreen, and review the split every quarter. The ratio should follow your data, not a formula someone sold you.",
        ],
      },
    ],
  },
];
