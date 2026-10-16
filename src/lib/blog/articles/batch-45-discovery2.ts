import { Layers, Map, Puzzle, Target, Search, Repeat, Workflow, TrendingUp, BarChart3, Flag } from "lucide-react";
import type { BlogPost } from "../types";

export const batch45: BlogPost[] = [
  {
    slug: "discovery2-what-is-keyword-clustering-video",
    title: "What Is Keyword Clustering for Video: A Practical Primer",
    excerpt:
      "Keyword clustering for video groups search phrases by the one clip that can answer them, so each upload owns a whole topic instead of chasing a single term.",
    date: "2024-02-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "A direct definition",
        paragraphs: [
          "Keyword clustering for video means grouping the phrases people search on YouTube by the single upload that could satisfy them. Instead of assigning one keyword to one video, you build a set of clusters and let a strong video own each cluster from end to end.",
          "The idea is borrowed from web SEO, but video changes the math. A blog post can cover twenty questions in one page. A video has a runtime and one central promise, so it can only carry a cluster that fits inside its format.",
        ],
      },
      {
        heading: "Why single keywords keep failing",
        paragraphs: [
          "Chasing one phrase per upload looks tidy on a spreadsheet and falls apart in practice. Two of your videos end up targeting near-identical searches, they split the same audience, and neither builds enough watch history to rank well. YouTube does not know which one to push.",
          "A cluster fixes that by accident. When every upload has a clear question and a clear neighbor, the algorithm can tell them apart. The viewer gets the right clip, and you stop competing with yourself for the same shelf space.",
        ],
      },
      {
        heading: "How a cluster actually forms",
        paragraphs: [
          "You can group phrases by hand in a spreadsheet, and for a small channel that is usually enough. The rules I use are simple and boring, which is why they work.",
        ],
        bullets: [
          "Same job: every phrase in the cluster is trying to finish the same task, like setting up a microphone or editing a short.",
          "Shared audience: the terms point at people with the same background, so one script can assume the same level of knowledge.",
          "Answerable by one format: the whole cluster fits inside a tutorial, a review, or a comparison without stretching the runtime.",
          "Distinct from neighbors: if two clusters could be answered by the same 8 minute video, they are really one cluster, so merge them.",
        ],
      },
      {
        heading: "The size of a cluster matters less than the boundary",
        paragraphs: [
          "Beginners ask how many keywords belong in a cluster. That is the wrong question. A cluster is defined by its edge, not its count. Five tightly related phrases make a clean cluster. Forty loose ones make a mess that no single video can serve.",
          "I would rather ship four small, well-bounded clusters than one giant bucket called \"filming tips\" that swallows half the channel. Small clusters produce specific titles, and specific titles get clicks from people who already want exactly that thing.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A cluster is not a list of keywords. It is a promise that this video, and only this video, is the place to get this one job done.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Clustering is a planning habit, not a ranking trick. It changes what you decide to make before a single frame is recorded.",
        ],
        bullets: [
          "Group phrases by the shared job they describe, not by how similar the words look.",
          "Keep every cluster answerable by one video with one clear format and runtime.",
          "Merge clusters when a single upload could satisfy both, or you will compete with yourself.",
          "Write the title and the opening line from the cluster, then let the script follow.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-topic-cluster-map-youtube",
    title: "How to Build a Topic Cluster Map for a Video Channel",
    excerpt:
      "A topic cluster map shows which videos should exist, how they connect, and where the gaps sit, all before you script a single thing for the channel.",
    date: "2024-06-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "Start from your one real subject",
        paragraphs: [
          "A cluster map starts with the narrow subject your channel can actually own. Not \"fitness\" and not \"tech,\" but the intersection you keep returning to, like strength training for people over forty or budget audio for solo creators.",
          "Write that subject at the top of a page. Everything else on the map has to justify its connection to that line. If a cluster needs three hops of logic to fit, it belongs on someone else's channel.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start from your one real subject.",
          "Sort the questions people ask into clusters.",
          "Classify clusters as entry, bridge, deep, or orphan.",
          "Keep the map alive as you learn.",
        ]
      },
      {
        heading: "List the questions people ask",
        paragraphs: [
          "Now collect the questions, not the keywords. People search in questions even when they type fragments. If I can phrase a search as a real question a real person would say out loud, it is worth a spot on the map.",
          "Pull from autocomplete, the comments on other people's videos, forum threads, and your own inbox. I keep a running note and dump anything that sounds like a question. Volume comes later. Coverage comes first.",
        ],
      },
      {
        heading: "Sort the questions into clusters",
        paragraphs: [
          "Once you have thirty or forty questions, sort them into groups where one video could answer the whole group. Name each group with plain words. \"First week of training\" beats \"onboarding narrative.\" You are building a plan for yourself, so skip the jargon.",
          "Expect this step to take the longest. Sorting is judgment work, and it is where most of the value lives. When a question refuses to fit anywhere, that is a signal you found a new cluster rather than a problem to force.",
        ],
      },
      {
        heading: "Draw the links between clusters",
        paragraphs: [
          "Clusters are not islands. A beginner cluster on equipment should point to a form cluster, which points to a programming cluster. Drawing those arrows shows the path a viewer takes as they learn, and it tells you which video should link to which.",
        ],
        bullets: [
          "Entry clusters pull in beginners who searched a broad, popular question.",
          "Bridge clusters answer the next question the same viewer asks a week later.",
          "Deep clusters serve the small loyal audience that stays for months.",
          "Orphan clusters share no link with anything, which usually means they are off-topic.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A map is not a to-do list. It is a picture of the territory, and it tells you which path a stranger takes from curious to committed.",
      },
      {
        heading: "Keep the map alive",
        paragraphs: [
          "The map is a working document, not a one-time exercise. Every few months I open mine and mark what shipped, what flopped, and what new questions appeared in the comments. A cluster that never gets views is a signal that the question was mine, not the audience's.",
          "Treat the map as a conversation with your viewers. They keep telling you what they want. Your job is to arrange those answers into videos that fit together.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-pillar-and-supporting-videos",
    title: "Pillar and Supporting Videos: The Shape of a Cluster",
    excerpt:
      "Pillar videos carry a broad topic while supporting videos answer the narrow questions around it, and the pair only works when the two link in both directions.",
    date: "2024-11-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Two roles inside one cluster",
        paragraphs: [
          "Every healthy cluster has a pillar and a set of supporting videos. The pillar is your broad, evergreen answer to the whole topic. The supporting videos go deep on the narrow parts the pillar only mentions in passing.",
          "Think of the pillar as the map and the supporting videos as the detailed streets. A viewer lands on either one, and the other exists to catch them next.",
        ],
      },
      {
        heading: "What makes a good pillar",
        paragraphs: [
          "A pillar needs to stand on its own for someone who watches only that one video. It should define the topic, cover the main branches, and plant the hook for each supporting clip without turning into a trailer reel.",
          "Keep the pillar current. If the topic changes, the pillar is the first video you update, because it is the front door for the whole cluster. A stale pillar drags down everything linked to it.",
        ],
      },
      {
        heading: "Supporting videos do the narrow work",
        paragraphs: [
          "Supporting videos win on specificity. \"Best budget mic for voiceover under $80\" is not a pillar. It is a supporting video, and it will outrank a broad pillar for that exact query because it answers the query completely.",
          "The mistake is treating supporting videos as lesser. They often bring the most search traffic because they match long, precise phrases where competition is thin. The pillar gets the credit, but the supporting clips do the converting.",
        ],
      },
      {
        heading: "Linking makes the cluster real",
        paragraphs: [
          "A pillar and its supporting videos only become a cluster when they reference each other. That means cards, end screens, pinned comments, and honest mentions inside the script. The links tell the viewer where to go next and tell the platform these videos belong together.",
        ],
        bullets: [
          "The pillar links out to every supporting video in the cluster.",
          "Each supporting video links back to the pillar near the start and the end.",
          "Supporting videos link sideways to one close neighbor when the topics overlap.",
          "Pin a comment on the pillar listing the videos in the cluster for easy navigation.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A pillar without supporting videos is a lonely summary. Supporting videos without a pillar are scattered answers nobody can find again.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Pillar and supporting roles come down to breadth and depth. Get the split right and the cluster becomes a system that feeds itself.",
        ],
        bullets: [
          "One pillar per cluster, broad and current, and many supporting videos that go narrow.",
          "Supporting videos often win the search traffic, so give them real production effort.",
          "Linking in both directions is what turns a pile of videos into a cluster.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-group-keywords-by-search-intent",
    title: "Group Video Keywords by Search Intent Before Anything Else",
    excerpt:
      "Group video keywords by search intent first, because the exact phrase matters less than the job the viewer is trying to finish during that session.",
    date: "2025-01-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Intent is the real unit of a cluster",
        paragraphs: [
          "Two keywords that share almost every word can belong to different clusters if the viewer wants different things. \"Best camera for vlogging\" wants a verdict. \"How to hold a vlogging camera\" wants a technique. Same topic, opposite intents, different videos.",
          "So intent comes before wording. I sort phrases into buckets called learn, compare, copy, and fix, and only then do I decide where each cluster starts and stops.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Intent is the real unit of a cluster.",
          "Sort into four buckets: learn, compare, copy, fix.",
          "Format is itself an intent signal.",
          "Mixed intent kills a cluster.",
        ]
      },
      {
        heading: "The four buckets in practice",
        paragraphs: [
          "Learn queries want understanding, and they reward clear structure and good pacing. Compare queries want a decision, so they reward direct verdicts and side-by-side footage. Copy queries want to reproduce a result, so they reward files and screen recordings. Fix queries want the problem gone, so they reward the answer in the first thirty seconds.",
          "Mapping phrases to buckets takes an afternoon. It saves weeks of building the wrong format for the right topic, which is the most expensive kind of mistake in content work.",
        ],
      },
      {
        heading: "Format is an intent signal",
        paragraphs: [
          "The format you pick tells a viewer what kind of video they are about to watch before they click. When the format contradicts the intent, they bounce in seconds and the impressions fade within a day.",
        ],
        bullets: [
          "Learn wants chapters, on-screen text, and a slow build that respects a beginner.",
          "Compare wants a shortlist, a test, and a recommendation delivered early and repeated late.",
          "Copy wants a downloadable asset and a recording that shows every click.",
          "Fix wants the solution up front, then the explanation for anyone who wants to understand it.",
        ],
      },
      {
        heading: "Mixed intent kills a cluster",
        paragraphs: [
          "If a cluster contains both learn and compare phrases, the video will try to teach and decide at the same time, and it will do neither well. Split the cluster. Let the tutorial teach and let the review decide.",
          "The same trap shows up in series. A beginner filler and an advanced deep dive share a topic but not an intent, so they should not sit in the same cluster just because the words overlap.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You are not ranking for a string of words. You are answering a mood, and the mood decides whether your format gets two minutes or two seconds.",
      },
      {
        heading: "A quick sorting routine",
        paragraphs: [
          "Before I plan any cluster, I read each candidate phrase and ask what the viewer wants to walk away with. If I cannot answer in one sentence, the phrase is too vague to build around, and I drop it or split it.",
          "Then I group phrases that share both a topic and an intent. Those are the clusters worth a video. Everything else waits until I understand it better.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-serp-overlap-video-clustering",
    title: "SERP Overlap: The Clustering Signal Most Creators Ignore",
    excerpt:
      "SERP overlap tells you when two video keywords belong together, because the same clips keep appearing in the results for both queries on search.",
    date: "2025-04-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Let the results page do the sorting",
        paragraphs: [
          "SERP overlap is the share of results that appear for two different searches. When YouTube shows the same clips for two queries, it is telling you those queries mean the same thing to the audience, and one video can serve both.",
          "This is the fastest clustering signal available and almost nobody uses it. You do not need a tool. You type two phrases into YouTube and look at whether the top results are the same videos.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Let the results page do the sorting.",
          "High overlap means fewer, stronger videos.",
          "Low overlap is a gift that separates topics.",
          "Fold overlap into your cluster map.",
        ]
      },
      {
        heading: "Reading overlap by hand",
        paragraphs: [
          "Type query A, note the first five videos. Type query B, note the first five. Count how many show up on both lists. If three or more overlap, the queries belong in one cluster. If none overlap, they are separate videos.",
          "That hand test takes two minutes and beats most paid tools for small channels. The results are live and channel-aware, which a keyword database never quite is.",
        ],
      },
      {
        heading: "What high overlap buys you",
        paragraphs: [
          "When two phrases overlap heavily, a single well-made video can rank for both, so you spend one production budget and collect two streams of traffic. It also means your title can speak to both queries without stuffing either phrase.",
        ],
        bullets: [
          "Fewer, stronger videos instead of many thin ones that split your own audience.",
          "Titles and thumbnails that match a whole cluster rather than one narrow phrase.",
          "Clearer decisions about which uploads to make next and which to skip entirely.",
          "A natural merge of near-duplicate ideas before they become competing videos.",
        ],
      },
      {
        heading: "Low overlap is a gift too",
        paragraphs: [
          "When two phrases you expected to be similar return totally different results, that is just as useful. It means the audience sees them as distinct, so you should build distinct videos with distinct hooks.",
          "I have saved myself from merging two ideas I was sure belonged together, only to find YouTube treated them as separate rooms. Trust the results page over your own instinct about wording.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If the same videos keep showing up for two searches, the audience is not making a distinction. Neither should you.",
      },
      {
        heading: "Folding overlap into the map",
        paragraphs: [
          "I run the overlap test during cluster planning, not after. It prunes the map before I overbuild. Phrases that overlap get merged into one node, and phrases that do not get their own branch.",
          "The result is a smaller, sharper map with fewer redundant uploads. That is the whole point of clustering, and overlap is the cheapest way to get there.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-cluster-keywords-video-series",
    title: "Clustering Keywords for a Video Series, Not One Upload",
    excerpt:
      "Clustering keywords for a video series turns scattered uploads into a teaching path, where each episode answers the next question the same viewer asks.",
    date: "2025-08-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "When a cluster deserves a series",
        paragraphs: [
          "Some clusters are too big for one video but too connected to split into strangers. That is when a series makes sense. A series is a cluster stretched across several uploads, each one a clear step in a single journey.",
          "The rule is simple. If the viewer cannot learn the whole cluster from one sitting, and the steps build on each other in order, build a series instead of a lone video.",
        ],
      },
      {
        heading: "Designing the path",
        paragraphs: [
          "A series needs a beginning, a middle, and an end that a viewer can feel. Episode one assumes nothing. The middle episodes each solve one leg of the problem. The last episode closes the loop and points somewhere new.",
          "Map the episodes to clusters first, then write. If two episodes answer the same search, you have duplicated a node. If one episode jumps two steps ahead, you have skipped a node and viewers will bail at the gap.",
        ],
      },
      {
        heading: "Keeping episodes findable on their own",
        paragraphs: [
          "A series fails when only episode one gets views and the rest gather dust. To avoid that, every episode must answer a real search query on its own, even if it references the others.",
        ],
        bullets: [
          "Each episode targets its own cluster, so it can be found without watching the others.",
          "Each opens with a short recap so a new viewer is never lost.",
          "Each ends pointing to the next step, which grows the whole playlist.",
          "The playlist itself carries a title that matches the parent cluster.",
        ],
      },
      {
        heading: "The playlist is the pillar",
        paragraphs: [
          "In a series, the playlist takes the role of the pillar. It is the front door that holds all the supporting episodes, and its description and title should speak to the broad cluster the way a single pillar video would.",
          "Treat the playlist as a product, not a folder. Name it for the promise, order it for the learning path, and pin the best episode first when the series is still small.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A series is not a batch of videos published close together. It is a cluster with a curriculum, and the viewer feels the order.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Series are the right tool when a cluster has depth and sequence. Get the path right and each upload lifts the others.",
        ],
        bullets: [
          "Use a series when the cluster needs multiple sittings and has a natural order.",
          "Give every episode its own searchable query so it stands alone.",
          "Let the playlist act as the pillar that ties the episodes together.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-playlists-as-keyword-clusters",
    title: "Playlists Are Keyword Clusters You Can Actually Control",
    excerpt:
      "Playlists are keyword clusters you control directly, and treating them as deliberate grouping tools changes how both viewers and search treat your videos.",
    date: "2025-12-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "A playlist is a manual cluster",
        paragraphs: [
          "Most clustering happens in a spreadsheet you never ship. A playlist is the one place where a cluster becomes visible to the audience and to search. It is a grouping you can name, order, and edit any time.",
          "That makes playlists the most underused clustering tool on the platform. A viewer who finishes one video gets handed the next, and the order you choose shapes what they learn and how long they stay.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A playlist is a cluster you control.",
          "Name it for the cluster, not the folder.",
          "Order by dependency, opening with the strongest entry.",
          "Do not overstuff; keep the promise tight.",
        ]
      },
      {
        heading: "Naming for the cluster, not the folder",
        paragraphs: [
          "Playlist titles rank and get surfaced, so name them like a pillar video. \"Beginner Audio Setup, Start to Finish\" beats \"Audio Stuff.\" The title should describe the whole cluster the way a good pillar title would.",
          "Write a real description too. Two or three sentences that mention the cluster's main queries help the playlist appear in search results, and they set expectations for anyone who lands on it cold.",
        ],
      },
      {
        heading: "Order is a story",
        paragraphs: [
          "The default order is newest first, which is almost always wrong for a teaching cluster. Set the order to match the learning path so a new viewer starts where they should and moves forward.",
        ],
        bullets: [
          "Open with the most searched, easiest entry video so the playlist has a strong front door.",
          "Arrange the middle by dependency, so each step assumes only what came before.",
          "Close with a video that points to the next playlist, keeping the journey going.",
          "Reorder whenever you learn something from retention, since the order is free to change.",
        ],
      },
      {
        heading: "Do not overstuff",
        paragraphs: [
          "A playlist is a cluster, so it should hold one topic with a clear boundary. Adding every vaguely related upload makes the playlist vague, and vague playlists rank for nothing and retain nobody.",
          "I would rather run four tight playlists than one giant one. Tight playlists have honest titles, and honest titles get clicked by people who want exactly that path.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You cannot edit the algorithm, but you can edit a playlist. It is the one cluster you get to build with your own hands.",
      },
      {
        heading: "Playlists and the wider map",
        paragraphs: [
          "Playlists should mirror the clusters on your map. If your map has five clusters, you should be able to point to five playlists, or a plan for them. When the two line up, planning and publishing stop fighting each other.",
          "That alignment also gives you a ready-made content calendar. An empty playlist is a cluster waiting to be filled, and it shows you the exact videos the map is asking for.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-evergreen-vs-trending-clusters",
    title: "Evergreen and Trending Video Clusters: Bet on Both",
    excerpt:
      "Evergreen and trending video clusters do different jobs, and a channel that only chases one of them either starves slowly or spikes and then fades fast.",
    date: "2026-03-17",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Two clocks in one channel",
        paragraphs: [
          "Evergreen clusters answer questions that stay relevant for years, like how to structure a video or how to set up a home studio. Trending clusters answer what is happening right now, like a new tool release or a viral format.",
          "The two run on different clocks. Evergreen clusters compound slowly and pay for years. Trending clusters spike hard and decay in weeks. A healthy channel needs both running at once.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Bet on both evergreen and trending clusters.",
          "Evergreen is the floor; trending is the ceiling.",
          "Ship trends within the window; speed beats polish.",
          "Fold lasting trend questions into evergreen clusters.",
        ]
      },
      {
        heading: "Why evergreen clusters are the floor",
        paragraphs: [
          "Evergreen clusters are the floor of your channel. They bring steady search traffic that does not care what month it is, and they build a library a new viewer can binge. Without them, every month starts from zero.",
          "They also compound. Each evergreen video in a cluster strengthens the others through links and watch history, so the tenth upload tends to perform better than the first. That is the quiet power of building on stable ground.",
        ],
      },
      {
        heading: "Why trending clusters are the ceiling",
        paragraphs: [
          "Trending clusters are the ceiling. They can bring a flood of new viewers in days, but only if you move fast and accept that the video has a short shelf life.",
        ],
        bullets: [
          "Trending videos win when speed matters more than polish, so ship within the window.",
          "They feed new people into your evergreen library through links and playlists.",
          "They decay, so never build your long-term plan around them.",
          "Some trends leave behind a lasting question, which you can fold into an evergreen cluster later.",
        ],
      },
      {
        heading: "The blend that survives",
        paragraphs: [
          "I aim for a split close to two evergreen videos for every trending one. That keeps the library growing while still catching the moments that bring fresh eyes. When a trend hits, I check whether it maps to a cluster I already own before building something disposable.",
          "The best trends are the ones that reinforce an evergreen cluster. A video about a new tool works harder when it also links back to your foundational setup videos, turning a spike into new subscribers who stay.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Evergreen clusters keep the lights on. Trending clusters open the door. You need the lights on when a crowd walks through.",
      },
      {
        heading: "Tracking which is which",
        paragraphs: [
          "Review your clusters every quarter and label them evergreen or trending. Watch their traffic curves. Evergreen clusters should hold a flat line, and trending ones should show a spike and a fall.",
          "When a trending cluster flattens and holds, you were wrong about it being a trend. Fold it into your evergreen map and treat it as a permanent resident. The curve rarely lies.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-measure-keyword-cluster-performance",
    title: "How to Measure Whether a Video Keyword Cluster Works",
    excerpt:
      "To measure whether a video keyword cluster works, track the whole group across retention, search terms, and internal traffic instead of one video at a time.",
    date: "2026-06-25",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Measure the cluster, not the video",
        paragraphs: [
          "A single video can be a dud while its cluster is healthy, and a single video can spike while its cluster is hollow. To know what is real, add up the cluster and read the group.",
          "Pull the group of videos that share a cluster and look at them together. Total views matter less than whether the cluster feeds itself and whether it keeps a flat traffic line over months.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Measure the cluster, not the single video.",
          "Read search terms and internal click-through.",
          "Check retention on the entry video.",
          "Flat traffic over time signals a healthy cluster.",
        ]
      },
      {
        heading: "The numbers that actually mean something",
        paragraphs: [
          "Skip the vanity totals. Four signals tell you whether a cluster is doing its job, and all four live inside YouTube Studio.",
        ],
        bullets: [
          "Cluster search terms: are the videos showing up for the phrases you planned, or for unrelated ones?",
          "Internal click-through: do viewers move from one video in the cluster to another?",
          "Retention on the entry video: does the front door hold people long enough to meet the neighbors?",
          "Flat traffic over time: does the cluster hold steady, or spike and die, which signals a trend.",
        ],
      },
      {
        heading: "Read the search terms report by cluster",
        paragraphs: [
          "The search terms report is the single most honest file you will read. It lists the exact phrases viewers typed to find each video. When a cluster works, those phrases match your plan. When they do not, you either misread the intent or the algorithm found a different audience.",
          "I copy the terms into the cluster's tab on the map and mark the surprises. Those surprises are often better than the plan, and I let them reshape the next video in the cluster.",
        ],
      },
      {
        heading: "Look for self-feeding",
        paragraphs: [
          "The clearest sign of a working cluster is self-feeding traffic. A new viewer finds one video, then watches another in the same cluster through a card or playlist. That movement tells you the cluster holds together as a group.",
          "If nobody ever crosses between the videos, the linking is weak or the topics are too far apart. Fix the links before you make more videos. A finished cluster beats a bigger one every time.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A cluster works when a stranger can enter through any door and still find the rest of the house.",
      },
      {
        heading: "Turn the reading into a decision",
        paragraphs: [
          "Measurement only pays off if it changes what you do next. A healthy cluster earns more videos. A hollow cluster gets a linking fix or a pruning. A cluster that only spiked gets folded into the trending column and treated as disposable.",
          "That is the whole loop. Plan the cluster, ship it, read it as a group, then decide. Repeat every quarter and the map stays honest.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-keyword-clustering-mistakes",
    title: "Keyword Clustering Mistakes That Waste Your Video Effort",
    excerpt:
      "Most keyword clustering mistakes for video come from treating it like a web SEO chore instead of a plan for what to film, group, and link next.",
    date: "2026-09-12",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "Mistake one: clustering by wording",
        paragraphs: [
          "The most common error is grouping phrases because they look alike on a screen. Word similarity is not topic similarity. \"Camera settings for night video\" and \"camera for night video\" differ by one preposition and want two different videos, one about technique and one about gear.",
          "Cluster by the job the viewer wants done, then check the wording. Never the other way around. The words are a symptom, not the system.",
        ],
      },
      {
        heading: "Mistake two: making clusters too big",
        paragraphs: [
          "A giant cluster feels productive on paper and fails in production. If ten phrases cannot fit inside one video, they are not one cluster, no matter how related they seem.",
          "Big clusters produce vague titles, and vague titles attract the wrong people. Split early. A tight cluster that ranks beats a sprawling one that confuses everyone, including the algorithm.",
        ],
      },
      {
        heading: "Mistake three: forgetting the links",
        paragraphs: [
          "A cluster only exists if the videos point at each other. Many creators group videos in a spreadsheet and never connect them on the platform, so the audience never experiences the group.",
        ],
        bullets: [
          "No cards between videos means no cross-traffic, so the cluster never feeds itself.",
          "No playlist means a new viewer has no path and drifts away after one video.",
          "No pinned comment leaves mobile viewers without an easy way to find the rest.",
          "No mention in the script means the links feel bolted on and get ignored.",
        ],
      },
      {
        heading: "Mistake four: mixing intents in one group",
        paragraphs: [
          "Learn and compare phrases do not belong together, even when they share every other word. A video that tries to teach and decide at once does both badly.",
          "Check the intent of each phrase before it joins a cluster. If the intent differs, the cluster splits, and each half gets its own video and its own format.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Clustering is not a filing task you finish once. It is the decision that tells you what to make next, and it never stops changing.",
      },
      {
        heading: "Mistake five: building clusters for search alone",
        paragraphs: [
          "A cluster that satisfies search but bores viewers will not last. Search brings the click, and the video has to hold attention after that. A cluster of dry, keyword-matched uploads decays fast no matter how well planned it was.",
          "Build for the viewer first and let search follow. When the topic genuinely helps someone, the phrases tend to line up on their own, and the cluster holds because people actually finish the videos.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Avoid these traps and clustering becomes the planning tool it was meant to be, keeping your channel focused and your library connected.",
        ],
        bullets: [
          "Cluster by viewer job, not by how similar the keywords look.",
          "Split clusters that cannot fit inside one clear video and format.",
          "Link every video in a cluster so the group exists for the audience.",
          "Keep intents separate, and build for the viewer before the search engine.",
        ],
      },
    ],
  },
];
