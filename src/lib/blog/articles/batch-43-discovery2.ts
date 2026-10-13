import {
  BarChart3,
  Target,
  Type,
  PenLine,
  Search,
  Compass,
  Repeat,
  Clock,
  Map,
  TrendingUp,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch43: BlogPost[] = [
  {
    slug: "discovery2-reading-search-traffic-reports",
    title: "How to Read Your YouTube Search Traffic Reports",
    excerpt:
      "YouTube search traffic reports tell you which queries pulled viewers in and which videos answered them. Here is how to read that data without guessing.",
    date: "2024-03-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "YouTube search traffic reports live in the Audience tab of YouTube Studio under the traffic sources card. Open the search source and you get the exact queries people typed before they landed on one of your videos.",
        ],
      },
      {
        heading: "Where the reports actually live",
        paragraphs: [
          "Most creators never scroll past the top-level views number. The useful detail sits one layer down, where Studio splits traffic by source and then lets you expand search into specific queries. That expansion is the whole point. A channel can show healthy search views while three specific queries carry almost all of them, and you will not see that until you open the list.",
          "Check this tab once a month, not once a year. Search behavior shifts slowly, but a single video losing its grip on one query can quietly cut a reliable stream of new viewers.",
        ],
      },
      {
        quote:
          "The query list is a transcript of what your audience wanted. Your video is just one possible answer to it.",
      },
      {
        heading: "What the query list is telling you",
        bullets: [
          "Queries with high views but weak retention mean the title matched and the content did not. Fix the payoff, not the keywords.",
          "Queries you never targeted but still rank for are free clues about how viewers phrase the problem in their own words.",
          "Queries that appear across several videos suggest a topic worth turning into a series or a playlist.",
          "Queries that only ever feed one old video are a warning that your newer uploads are not competing for that demand.",
        ],
      },
      {
        heading: "The metric most people misread",
        paragraphs: [
          "Traffic source percentages are relative, not absolute. If search drops from twenty percent to ten percent, that may only mean another source grew. Always read the percentage next to the raw view count before you conclude anything has broken.",
          "The number I trust most is repeat presence. A query that keeps showing up for months is real demand. A query that spikes for two days and vanishes was probably a news beat, and there is little to learn from it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open the search source, expand the query list, and read it before you plan your next upload.",
          "Judge a query by retention and repeat appearances, not by a single spike.",
          "Treat untargeted queries as free research into your viewers' language.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-mapping-search-intent",
    title: "Mapping Search Intent Before You Write a Title",
    excerpt:
      "Mapping search intent is how you pick a title that matches what viewers already want. Skip it and you write for an audience that does not exist.",
    date: "2024-06-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Search intent is the job a viewer is trying to finish when they type a query. Map that job before you write a title, and your packaging stops fighting the demand.",
        ],
      },
      {
        heading: "Intent comes in a few recognizable shapes",
        paragraphs: [
          "Some queries want a decision. Someone types the name of two tools plus the word versus, and they want a verdict they can act on. Other queries want a procedure, a sequence of steps that ends with a finished task. A third group wants a quick orientation, a sense of what something is before they commit any real time.",
          "You can usually tell which one you are looking at from the words themselves. Versus, best, and worth it point toward a decision. How to, fix, and set up point toward a procedure. What is and explained point toward orientation.",
        ],
      },
      {
        quote:
          "A title that answers the wrong intent will rank, get the click, and still lose the viewer in the first minute.",
      },
      {
        heading: "Match the format to the job",
        bullets: [
          "Decision queries reward comparison structure and a clear recommendation early, not a slow build to a vague conclusion.",
          "Procedure queries reward visible steps and on-screen order, because the viewer is following along with their hands busy.",
          "Orientation queries reward a plain definition fast, then room to go deeper once the viewer decides to stay.",
          "Mixed queries exist, so pick the dominant intent and satisfy it first instead of splitting your video in half.",
        ],
      },
      {
        heading: "Test the match with one question",
        paragraphs: [
          "After you draft a title, imagine the viewer who typed the query. Ask whether the video you are about to make would leave them satisfied or slightly annoyed. If it is the second one, no amount of keyword tuning will save the retention curve.",
          "This is why intent mapping belongs before the script, not after. It shapes the hook, the structure, and the promise in your title all at once.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the query first, then decide whether the viewer wants a decision, a procedure, or orientation.",
          "Build the structure around that job instead of around your own outline.",
          "Recheck the intent after you draft the title to catch a mismatch early.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-title-keyword-placement",
    title: "Where Your Keyword Belongs in a YouTube Title",
    excerpt:
      "Keyword placement in a YouTube title changes how search reads your video and how viewers read it. Front-load the query without wrecking the hook.",
    date: "2024-09-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Put the main keyword near the front of the title, ideally inside the first three or four words. YouTube search still reads the whole title, but viewers scan the left edge first, and so does the ranking system's sense of what the video is about.",
        ],
      },
      {
        heading: "Front-loading without sounding robotic",
        paragraphs: [
          "The fear is real. Stuff the query in first and the title starts to read like a search bar. The fix is to make the query do actual work in the sentence rather than sit there as a label. A keyword embedded in a promise reads fine. A keyword bolted onto the front of a sentence reads like spam.",
          "Compare a title that opens with the bare topic against one that opens with the same words wrapped in a clear claim. Both signal the subject. Only the second one gives a viewer a reason to click.",
        ],
      },
      {
        heading: "What to keep out of the title",
        bullets: [
          "Channel names and greetings waste the most valuable words in your title.",
          "Repeated keywords inside one title add nothing and make the phrasing awkward.",
          "Punctuation tricks that mimic extra characters do not fool search and do look desperate.",
          "Vague filler like ultimate or insane takes space a real query could use.",
        ],
      },
      {
        quote:
          "The title has one job in search: tell the system and the viewer that this is the answer to a specific question.",
      },
      {
        heading: "A quick placement check",
        paragraphs: [
          "Read your title with the first four words covered. If the remaining words still make sense, the hook probably leads and the keyword is buried. Read it again with only the first four words visible. If that fragment already names the topic, your placement is doing its job.",
          "Titles are cheap to test and expensive to ignore. A small shift in word order can move a video from invisible to obvious in the query list.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Land the main query in the opening words so both search and viewers catch it fast.",
          "Keep the query inside a real claim instead of stacking it as a label.",
          "Cut channel names and filler that push useful words to the back.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-description-first-lines-search",
    title: "The First Lines of a Description That Search Reads",
    excerpt:
      "The opening lines of your YouTube description carry weight in search. Write them for the query, then let the rest of the description breathe.",
    date: "2024-12-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "The first two or three lines of your YouTube description do most of the work for search. YouTube pulls a snippet from that region for results, and viewers often see only that preview before deciding to click.",
        ],
      },
      {
        heading: "Write the top like a second title",
        paragraphs: [
          "Treat the opening of the description as a chance to say the same thing as your title in a different shape. Where the title promised, the description can specify. Where the title was short, the description can name the exact problem the video solves.",
          "Include the main query naturally once. Do not repeat it line after line. Search does not reward repetition, and a viewer who expands the description sees padding immediately.",
        ],
      },
      {
        heading: "What the top of a description should contain",
        bullets: [
          "One sentence that restates what the video delivers and for whom.",
          "The primary query in plain language, once, without forcing it.",
          "A short line about what makes this take different from the obvious result.",
          "Enough substance that the preview snippet reads well on its own.",
        ],
      },
      {
        quote:
          "A description is not a keyword dump. It is the answer key for the question your title asked.",
      },
      {
        heading: "The rest of the description still matters",
        paragraphs: [
          "Timestamps, sources, and links belong below the opening block, where they help viewers and give search more context about the content. Format them clearly so a person can scan them fast.",
          "One trap is pasting an entire transcript into the description. It buries the useful opening under a wall of text and reads poorly for anyone who opens it. Keep the top clean and let the video itself carry the longer narrative.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Front-load the description with a plain-language restatement of the promise.",
          "Use the main query once, then stop repeating it.",
          "Keep timestamps and links below the opening so they help rather than bury it.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-autocomplete-mining",
    title: "Mining YouTube Autocomplete for Real Queries",
    excerpt:
      "YouTube autocomplete hands you real search queries for free. Mining it well beats any guess about what your audience actually types.",
    date: "2025-03-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "YouTube autocomplete suggests queries as you type in the search bar. Those suggestions are pulled from real viewer searches, which makes them one of the cheapest research tools you have.",
        ],
      },
      {
        heading: "How to mine the suggestions on purpose",
        paragraphs: [
          "Type the seed phrase for your topic and stop. Write down every suggestion that appears. Then add each letter of the alphabet to the seed and repeat, the way people do in older keyword tools. The suggestions shift because each added letter surfaces a different slice of what viewers type.",
          "Do this for the phrases your audience already uses in comments and emails, not just the phrases you find in a generic keyword tool. The overlap between what viewers say to you and what they type into search is where the good queries hide.",
        ],
      },
      {
        heading: "What the suggestions reveal",
        bullets: [
          "Question phrasing shows you where viewers want a direct answer, not a broad explainer.",
          "Comparison suggestions reveal a decision the audience is stuck on right now.",
          "Long suggestions expose the specific qualifiers viewers add, like a tool name or a use case.",
          "Suggestions that keep reappearing across seeds mark demand that is stable rather than a passing spike.",
        ],
      },
      {
        quote:
          "Autocomplete is the audience finishing your sentence for you. Your job is to listen longer than one word.",
      },
      {
        heading: "Turn suggestions into a plan",
        paragraphs: [
          "Group the queries you collect by the intent behind them. Several suggestions that point at the same problem deserve a single focused video rather than scattered mentions. A cluster with no answers in the results is a gap worth filling.",
          "Check the current results for a query before you commit. If the top videos are strong and recent, you need a genuinely different angle. If they are thin or old, the query is open.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mine autocomplete with alphabet expansion instead of stopping at the first list.",
          "Collect the phrasings your viewers already use in their own words.",
          "Group suggestions by intent and check the existing results before you film.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-long-tail-search-queries",
    title: "How Long Tail Search Queries Compete on YouTube",
    excerpt:
      "Long tail search queries look small one at a time, but they add up and they are far easier to win. Here is how to target them well.",
    date: "2025-06-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Long tail queries are the specific, multi-word searches that bigger channels mostly ignore. Each one is small, but together they can send a steady trickle of viewers who are unusually ready to watch.",
        ],
      },
      {
        heading: "Why the small queries are worth it",
        paragraphs: [
          "A specific query usually comes with clear intent. The viewer is not browsing. They have a problem and a few words that describe it. That clarity makes them easier to satisfy and more likely to stay for the whole video.",
          "Competition is lighter too. A giant channel chases the broad term because it needs volume. A specific query with two hundred monthly searches is not worth their time, which leaves the door open for anyone willing to answer it properly.",
        ],
      },
      {
        heading: "Where long tail queries come from",
        bullets: [
          "The exact wording viewers use in comments when they describe a problem.",
          "Autocomplete suggestions that add a qualifier to your main topic.",
          "Questions people ask in related communities and forums.",
          "The follow-up searches that show up after a viewer watches a broader video of yours.",
        ],
      },
      {
        quote:
          "One well-answered long tail query is worth more than five broad videos that never reach the right person.",
      },
      {
        heading: "Build a topic web, not a one-off",
        paragraphs: [
          "The real payoff comes when several long tail videos connect. Each one answers a specific query, and together they signal that your channel covers a whole area well. That helps the broad term too, because search and viewers both start to associate you with the topic.",
          "Keep the titles specific to each query. Reusing the same broad title across ten videos confuses search about which one answers what.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Target specific queries with clear intent where big channels will not bother.",
          "Mine comments, autocomplete, and community questions for exact phrasing.",
          "Link related long tail videos so they reinforce the same topic.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-search-vs-suggested-ranking",
    title: "Search and Suggested Rank Videos Differently",
    excerpt:
      "Search and suggested rank videos using different signals. Understanding search and suggested traffic helps you stop blaming the algorithm for the wrong thing.",
    date: "2025-10-08",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Search ranks a video against a query a viewer typed. Suggested ranks a video against the moment another viewer is watching something else. The two surfaces reward different things, and treating them as one system leads to bad decisions.",
        ],
      },
      {
        heading: "What search cares about",
        paragraphs: [
          "Search wants a clear match between a query and a video that answers it. The title and description signal the match, and viewer satisfaction confirms it. If the video holds attention for the person who typed that query, search keeps offering it.",
          "The word to watch here is relevance. Search does not care that a video is blowing up elsewhere. It cares whether this video is the right answer to this specific question, over and over, for the people who ask it.",
        ],
      },
      {
        heading: "What suggested cares about",
        paragraphs: [
          "Suggested is about fit between two videos or a video and a viewing session. It surfaces content that a person watching something similar is likely to keep watching. The signals are session behavior, shared audiences, and how well your video holds a viewer who came from somewhere else.",
          "That is why a video can be a search flop and a suggested success at the same time. Different job, different signals.",
        ],
      },
      {
        heading: "Where the two overlap",
        bullets: [
          "Strong retention helps both surfaces, but search weights the first minute against the specific query.",
          "A clear topic helps search directly and helps suggested find the right neighbors.",
          "Good packaging earns the click that both surfaces need, though suggested is more sensitive to the browse thumbnail.",
        ],
      },
      {
        quote:
          "If search views are weak, read the query list. If suggested views are weak, watch who your video sits next to.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Search is a matching problem; suggested is a session-fit problem.",
          "A video can succeed on one surface and fail on the other without anything being broken.",
          "Diagnose by reading traffic sources instead of guessing at a single algorithm.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-evergreen-search-demand",
    title: "Why Evergreen Search Demand Outlasts Trends",
    excerpt:
      "Evergreen search demand keeps feeding a channel long after a trend dies. Building for evergreen search queries is slower and much steadier.",
    date: "2026-01-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Evergreen search demand comes from queries that stay roughly the same year after year. A trend gives you a burst of attention you can ride once. Evergreen queries keep paying as long as the problem still exists.",
        ],
      },
      {
        heading: "How to tell evergreen from a spike",
        paragraphs: [
          "Look at the query, not the topic. A topic can feel timeless and still be searched in bursts. Ask whether the exact words someone types today will still make sense in three years. If the words describe a repeated need, the demand is evergreen. If they reference a specific event, product launch, or news beat, it is not.",
          "A slow, flat history is usually a better sign than a dramatic climb. Dramatic climbs are exciting and they tend to fade just as fast.",
        ],
      },
      {
        heading: "Where evergreen demand hides",
        bullets: [
          "Setup and repair queries that new people ask every single week.",
          "Comparison queries for tools that keep getting new users.",
          "Explainer queries about ideas that do not go out of style.",
          "Process queries where the steps stay valid even when the platform updates.",
        ],
      },
      {
        quote:
          "Trends rent you an audience for a week. Evergreen queries let you keep the key.",
      },
      {
        heading: "Keep the video from going stale",
        paragraphs: [
          "Evergreen does not mean frozen. Interfaces change, prices change, and best practices move. A dated frame in the opening or a version number in the title can quietly kill a video that would otherwise keep earning search traffic for years.",
          "Revisit your evergreen videos on a schedule. Update screens, fix a renamed tool, and refresh the title if the query has drifted. A small edit often restarts the whole stream.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge evergreen by the query wording, not by how timeless the topic feels.",
          "Prefer stable, flat demand over a sharp spike when you plan long-term.",
          "Update evergreen videos on a schedule so a stale detail does not sink them.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-localized-search-queries",
    title: "Adapting Search Keywords to Language and Region",
    excerpt:
      "Localized search queries differ by more than spelling. Adapting keywords to language and region helps you reach viewers you are currently missing.",
    date: "2026-05-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "The same idea gets searched with different words in different places. Localized search queries are not just a translation problem, and treating them that way leaves traffic on the table.",
        ],
      },
      {
        heading: "Language is only part of the difference",
        paragraphs: [
          "Viewers in two countries speaking the same language often use different terms for the same tool or task. One region says a feature by its brand name, another uses a plain descriptor. Search reflects whichever phrase is common locally, and your single title will only catch one of them.",
          "Spelling adds another layer. American and British spellings split demand even when the intent is identical, and a title tuned to one spelling can be invisible for the other.",
        ],
      },
      {
        heading: "Practical adjustments",
        bullets: [
          "Name the feature the way your target region names it, not the way a global brand page names it.",
          "Pick one spelling convention per video and stay consistent within it.",
          "Use your audience geography data in Studio to see where viewers actually come from before you localize.",
          "Consider a version or a pinned comment in the other phrasing instead of cramming both into one title.",
        ],
      },
      {
        quote:
          "A keyword is only a keyword in the mouth of the person typing it. Region changes the mouth.",
      },
      {
        heading: "Do not overcorrect",
        paragraphs: [
          "Localizing every video for every region dilutes your channel and confuses your core audience. If most of your viewers come from one place, keep that place primary and treat other regions as a bonus.",
          "The goal is to stop missing obvious demand, not to chase every spelling variant. Pick the regions that matter, match their language, and leave the rest alone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Localization means matching local wording, not just translating your title.",
          "Check your geography data before deciding which regions deserve a version.",
          "Keep one primary region and avoid diluting your channel to chase every variant.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-recovering-lost-search-rankings",
    title: "How to Recover a Lost YouTube Search Ranking",
    excerpt:
      "Losing a search ranking stings because it usually happens quietly. Recovering a lost YouTube search position starts with finding out what changed.",
    date: "2026-09-16",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "A lost search ranking usually shows up as a slow decline, not a cliff. Before you change anything, confirm the drop and find out whether the query shrank or a better answer simply replaced yours.",
        ],
      },
      {
        heading: "Separate the two kinds of loss",
        paragraphs: [
          "One possibility is that demand fell. The query itself gets fewer searches than it used to, so everyone ranking for it gets fewer views. That is not something you fix with a better title.",
          "The other possibility is that demand held and you slipped. Newer or stronger videos now answer the same query better in search's eyes. Only the second kind is a ranking problem you can attack.",
        ],
      },
      {
        heading: "What to check first",
        bullets: [
          "Compare current search views against the same period a year ago, not just last month.",
          "Look at the query list to see whether the old query is gone or just pushed down.",
          "Open the videos now ranking above yours and note what they do differently.",
          "Check whether your video still matches the intent the query implies today.",
        ],
      },
      {
        quote:
          "Most ranking losses are really intent drift. The query stayed the same. What the viewer wanted from it did not.",
      },
      {
        heading: "How to fight back",
        paragraphs: [
          "Refresh the title and opening description to match the query and the current intent more sharply. Update anything outdated inside the video, since search watches retention on the query, not just the metadata.",
          "If the query has genuinely shrunk, let it go and put that energy into a related query that is holding. Chasing a fading search term wastes the one resource you cannot recover.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Confirm whether the query shrank or you slipped before making changes.",
          "Refresh the packaging and any stale content to re-match current intent.",
          "Walk away from genuinely shrinking queries and reinvest in stable ones.",
        ],
      },
    ],
  },
];
