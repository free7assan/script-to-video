import {
  BarChart3,
  Compass,
  Eye,
  Layers,
  Repeat,
  Search,
  Tag,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch358: BlogPost[] = [
  {
    slug: "video-keywords-how-research-differs",
    title: "How Video Keyword Research Differs From Written Content SEO",
    excerpt:
      "Blog SEO and video keyword research share a surface, but search intent, competition data, and YouTube autocomplete all behave differently than Google.",
    date: "2048-03-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Video keyword research starts from different rules than blog keyword research. YouTube weighs click-through rate and minutes watched more heavily than backlinks, so a phrase that is trivial to rank for on Google can be nearly impossible for a small channel. The tool you use and the signals you trust have to change with the platform.",
          "Google can rank a thin page for a head term if the domain behind it is strong enough. YouTube cannot do that. It needs evidence that real people click the video and keep watching, and that evidence only exists after the video has already earned impressions.",
        ],
      },
      {
        heading: "Intent shows up differently in the results",
        paragraphs: [
          "Search the same phrase on both platforms and compare what comes back. A query like 'how to budget monthly' returns text articles on Google and person-to-person vlog advice on YouTube. The format of the winners tells you what the audience expects before you film anything.",
          "Creators lose rankings by matching the phrase but ignoring the format. If the top ten results are screen-recorded tutorials and yours is a podcast clip pulled from a longer conversation, the algorithm will test you against those winners and then stop sending impressions. Read the format first, then decide whether you can beat it.",
          "There is a second gap between the platforms: YouTube results change fast. A phrase that had three weak competitors last month can look completely different after one large channel posts about it, so research done for video has a shelf life measured in weeks rather than years. Recheck the results page close to the day you publish.",
        ],
      },
      {
        quote:
          "A keyword is not a phrase with volume. It is a bet on what kind of video people want when they type that phrase.",
      },
      {
        heading: "Competition data needs its own reading",
        paragraphs: [
          "Difficulty scores built for text pages do not translate to video. A keyword with low reported difficulty can still be crowded if a handful of large channels hold the top positions and their uploads keep collecting views every week. The number is describing a different game.",
          "YouTube results also age differently than search results. A video that has accumulated steady watch time for four years is hard to displace, because every new query keeps feeding it more of the same traffic. Check how old the current winners are, not only how big their channels are.",
          "One more habit helps here. Judge competition against the channel you have today, not the one you hope to have. A phrase that would be comfortable at fifty thousand subscribers is usually a distraction at five hundred, and the competition check is where that difference becomes visible.",
        ],
      },
      {
        heading: "Where the honest signals come from",
        paragraphs: [
          "Autocomplete is free and comes straight from real query logs. Type the opening words into the YouTube search box and read the completions that appear. They skew toward phrases people searched recently, which is information no monthly volume estimate gives you.",
          "Once your channel has any history, the research tab inside YouTube Studio shows the queries your actual viewers used. That data is private to you and no third-party tool can approximate it. When it disagrees with an external estimate, trust the Studio data.",
        ],
      },
      {
        quote:
          "The search box tells you what people want. The current results tell you what they are willing to click.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "YouTube ranks watch behavior, so difficulty scores meant for Google will mislead you.",
          "Compare the format of the top ten results before committing to any phrase.",
          "Autocomplete and the Studio research tab report real queries that paid tools guess at.",
          "Old videos with steady views are the hardest competition; check result age every time.",
          "Run your research where you will publish, not only in the blog SEO tools you already know.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-from-your-own-topic",
    title: "Start Video Keyword Research From Topics You Already Own",
    excerpt:
      "Channels grow faster when video keyword research starts from subjects you can talk about for hours, then narrows to phrases real viewers type.",
    date: "2048-03-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Begin with the subjects you can speak about without notes, then run keyword research to find the exact phrasing viewers use inside that territory. Starting the other way around, with tool output you have no feel for, produces videos you cannot carry for eight minutes.",
          "Owning a topic is not arrogance. It means you already know the follow-up questions, the common mistakes, and the vocabulary the audience uses. That knowledge is what keeps watch time high, and watch time is what makes a chosen phrase winnable.",
        ],
      },
      {
        heading: "Depth beats broad demand",
        paragraphs: [
          "A phrase with two hundred thousand monthly searches is useless to you if the topic dies after your first scripted minute. Someone with real depth can answer the question the viewer did not know to ask, and that answer is why they subscribe after the video ends.",
          "New channels tend to chase the biggest number in the tool. I did the same early on and produced three videos on subjects I found tolerable at best. Retention told the truth every time. The videos where I had opinions to spare held viewers, and the ones where I was summarizing other people did not.",
          "There is a practical test for depth that takes no time at all. Imagine filming the video with no script and a single take. If you can talk for six minutes without stalling, the topic is yours to develop. If you stall at ninety seconds, a script will not save it.",
        ],
      },
      {
        quote:
          "Research finds the wording. Only your existing knowledge decides whether the video earns the click twice.",
      },
      {
        heading: "Turn expertise into candidate phrases",
        paragraphs: [
          "List the questions people actually ask you, in comments, in emails, or in person. Those are phrases with proven demand from an audience that already tolerates you, which is the best starting data a small channel has. Write them in the wording the asker used, not your internal jargon.",
          "Then translate. Your term for a concept is rarely the viewer's term, and autocomplete will show you the gap in about ten seconds. Keep your original list, keep the translated list, and research both. The intersection is usually where your first five videos live.",
        ],
      },
      {
        heading: "Check your phrases against real search behavior",
        paragraphs: [
          "Take each candidate phrase into the YouTube search box and read the completions. If your exact phrasing triggers nothing and the suggestions branch off in an unrelated direction, reword before you film. The completions are telling you how the audience names the problem.",
          "Next, look at who currently wins. If every result is a channel you have never heard of with modest view counts, you have found an opening. If the top row is all million-subscriber channels, keep the phrase for later and pick a narrower version of it now.",
          "Keep a shortlist of the phrases that survive these checks. Ten candidates is plenty for a month of uploads, and a shorter list keeps you honest about finishing what you start. A topic you never film contributes nothing, no matter how good the phrase looked in the box.",
        ],
      },
      {
        quote:
          "The best keyword for a small channel is one the audience already asks about and the big channels have not bothered to answer properly.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start from subjects you can discuss at length, then research the exact viewer wording.",
          "Questions people already ask you are proven demand and free keyword data.",
          "Translate your jargon into audience language using autocomplete as the referee.",
          "Breadth of demand matters less than your ability to answer the follow-up question.",
          "Skip phrases owned by large channels and take a narrower version of the same idea.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-search-suggestions",
    title: "Using YouTube Search Suggestions to Find Video Keywords",
    excerpt:
      "The search box knows what people want. Reading YouTube suggestions carefully gives you video keyword ideas that no paid tool reports with the same accuracy.",
    date: "2048-03-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "YouTube autocomplete is a live feed of real queries, and reading it deliberately gives you more usable video keyword ideas than most paid tools for the same twenty minutes of work. Type a seed phrase, read every completion, and write down the ones that match videos you could actually make.",
          "The trick is treating suggestions as data instead of decoration. Each completion is a phrase real people typed, weighted toward recent and repeated searches. That makes it a demand signal with no estimation error at all, which is rare and worth building a habit around.",
        ],
      },
      {
        heading: "Read the seed word from several angles",
        paragraphs: [
          "One seed phrase rarely gives you enough. Take your core topic and run it through the obvious modifiers, words like 'how', 'vs', 'for beginners', 'at home', and the current year. Each modifier surfaces a different corner of demand, and some corners will be wide open.",
          "Also try the phrases you would never search yourself. Your vocabulary is not the audience vocabulary, and the gap between the two is where easy rankings hide. Run your translated terms alongside your original ones and keep whatever the search box completes.",
        ],
      },
      {
        quote:
          "Autocomplete has no agenda. It shows you what people typed, not what a tool estimated they probably type.",
      },
      {
        heading: "Use the alphabet pass with restraint",
        paragraphs: [
          "Appending a letter after your seed phrase expands the completion set, and running through a few letters is a fast way to find long-tail phrasings. Do this for the topics you already know you will cover, not as an endless exercise, or you will collect phrases you have no plan to film.",
          "One warning about volume of collection. A list of two hundred phrases is not research, it is hoarding. Pick the ten that match videos on your calendar, and let the rest go. The value of the suggestions is in the selection, not in the size of the spreadsheet.",
          "Read the order of the completions as well as the words. The first suggestion is not automatically the best target, since popular phrases often carry the toughest competition. Treat the list as a map of demand and then pick the corner you can actually serve.",
        ],
      },
      {
        heading: "Suggestions also reveal format demand",
        paragraphs: [
          "Read past the noun and into the tail of each completion. Words like 'review', 'tutorial', 'reaction', 'explained', and 'vs' are format instructions. When your topic consistently completes with 'tutorial', a talking-head opinion piece is fighting the query instead of serving it.",
          "This is the part most creators skip, and it is the part that saves a shoot. Knowing the phrase is half the research. Knowing which video shape the phrase expects is the other half, and the search box tells you both at the same time.",
          "Watch how a phrase shifts when you add or remove a modifier. Small changes can move a query from a broad audience to a narrow one, and the narrow version is usually easier for a small channel to own. The search box makes those shifts visible in seconds, which is why it beats guessing.",
        ],
      },
      {
        quote:
          "The tail of a suggestion tells you the format. The head of it tells you the subject. Ignore either half and you film the wrong video.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Autocomplete reflects real, recent queries, so treat every completion as recorded demand.",
          "Run your core topic through common modifiers and your own translated terms.",
          "Use the alphabet pass on topics you already plan to film, not as a collecting hobby.",
          "Words in the suggestion tail like 'tutorial' or 'vs' signal the expected video format.",
          "Shortlist only the phrases that match videos on your actual production calendar.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-demand-vs-competition",
    title: "Judging Keyword Demand Versus Competition for New Videos",
    excerpt:
      "Demand and competition decide whether a video keyword is worth filming. Search interest sets the ceiling; the strength of current results sets your odds.",
    date: "2048-03-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Judge a video keyword by weighing demand against the strength of whoever currently holds the phrase. Demand sets the ceiling on impressions you could ever earn. Competition determines whether those impressions reach a channel of your size at all.",
          "Most creators look at only one side. They either chase big numbers and lose to established channels, or they pick phrases so obscure that no one searches them. The workable phrases sit in the middle, and finding them takes about fifteen minutes of manual inspection per topic.",
        ],
      },
      {
        heading: "Reading competition without a score",
        paragraphs: [
          "Search the phrase and look at the top ten results yourself. Note the subscriber count of each channel and the view count on each video. A result with more views than the channel has subscribers usually means the phrase pulls traffic beyond the existing audience, which is what you want.",
          "Then check upload dates. A page of results that are all four years old is an aging set that a fresh, better video can displace. A page where the top three were uploaded last month means active creators are fighting for this phrase right now, and you would be joining a live brawl.",
          "Ratios matter more than raw views. A video with twenty thousand views on a channel of four hundred subscribers is doing far more work than a video with two hundred thousand views on a channel of two million. The first one is being found by search, and that is the behavior you want to copy.",
        ],
      },
      {
        quote:
          "Demand tells you how big the prize is. The current results tell you who is already holding it and how tired they are.",
      },
      {
        heading: "Matching demand to your channel size",
        paragraphs: [
          "A phrase with a huge search count is not automatically good news. For a channel with eight hundred subscribers, competing for a head term means competing against channels that outproduce you weekly, and the algorithm will favor them on authority alone for a long time.",
          "The comfortable range for a growing channel is a phrase where the current winners look beatable. Modest channels holding top positions, videos with decent but not astronomical views, and a topic you can cover more thoroughly than they did. That combination converts far better than a vanity number.",
        ],
      },
      {
        heading: "Watch the second-order signals",
        paragraphs: [
          "Open the top two or three videos and skim the comments. If viewers are asking questions the video never answered, you have found a gap that better packaging and a fuller script can exploit. Demand exists and the current supply is incomplete, which is the ideal scenario.",
          "Also look at whether the phrase appears in video titles of the winners. If the top results all contain the phrase naturally, treat that as confirmation the phrase drives their clicks. If they rank without it, the phrase matters less than the channel, and you should look for a different target.",
          "Do not skip the packaging of the winners either. Read their titles and study their thumbnails to understand which promise the audience is actually clicking. The phrase brought viewers to the results page, but the packaging decided the click, so both layers belong in your competition notes.",
        ],
      },
      {
        quote:
          "A keyword is worth filming when the people holding it look like they could be beaten by someone who simply made a better video.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Demand sets your ceiling; competition sets your odds. You need both before filming.",
          "Audit the top ten manually: channel size, view counts, and upload dates tell you more than a score.",
          "Views exceeding subscriber counts on current results signal traffic beyond existing audiences.",
          "Comments full of unanswered questions mark a phrase where better supply can win.",
          "Prefer phrases where modest channels hold top positions over head terms owned by giants.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-long-tail-phrases",
    title: "Why Long-Tail Phrases Win for Small YouTube Channels",
    excerpt:
      "Long-tail phrases carry less volume and far less competition, which makes them the smartest video keyword target when your channel has no authority yet.",
    date: "2048-03-12",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Long-tail phrases are the practical keyword target for small channels because nobody with a large audience is bothering to compete for them. Each one brings fewer searches, and those searches convert into subscribers at a much higher rate because the viewer arrived with a specific problem.",
          "A head term might produce a spike of impressions you cannot win. A long-tail phrase produces a trickle you can own completely, and a hundred owned trickles outperform one contested river over the span of a year of uploads.",
        ],
      },
      {
        heading: "What counts as long-tail for video",
        paragraphs: [
          "Long-tail for video is not just a longer string of words. It is a phrase carrying a situation, a constraint, or a specific intent. 'Fixing a dripping kitchen tap in a rented flat' beats 'plumbing repair' in every way that matters to a channel without authority.",
          "Watch the phrasing of real queries in autocomplete and comments for these details. The situation words are what a big channel skips, because a broad video earns more total views. That gap is your entry point, and it costs you nothing except specificity in your script.",
          "Specific phrases also age better. A broad topic attracts a fresh wave of large channels every few months, while a detailed scenario query stays quiet because it does not look like a smart growth move to anyone chasing a big number. That quiet is where a small channel builds its first real audience.",
        ],
      },
      {
        quote:
          "Big channels chase averages. Small channels survive on the specific cases the averages leave behind.",
      },
      {
        heading: "Volume is not the prize, intent is",
        paragraphs: [
          "Forty monthly searches on a phrase with clear intent beat four thousand on a vague one. The forty viewers want one thing, your video provides that thing, and a meaningful share of them subscribe because they finally found an answer instead of a survey.",
          "Vague phrases attract viewers with loosely matched expectations, and they leave within ninety seconds when the video does not match. That damages your retention profile on the very query you hoped to grow on. Specific phrases protect you from that pattern by pre-filtering the audience.",
          "That filtering changes how the ranking system reads your video. When the people who click stay, retention looks strong and the algorithm keeps testing the upload on harder queries. A trickle of precisely matched viewers can earn you wider impressions than a flood of mismatched ones ever will.",
        ],
      },
      {
        heading: "Building long-tails from a head term",
        paragraphs: [
          "Take the head term you ultimately want to own and stack modifiers onto it until the phrase describes one exact scenario. Add the audience level, the environment, the tool or budget involved, and the outcome. Each addition shrinks competition faster than it shrinks demand.",
          "Then verify each version in the search box. Completions that appear for your modified phrase are real demand; a phrase that triggers nothing needs another modifier or a different word order. Keep the ones that autocomplete confirms and schedule those first.",
          "Group related long-tails under one head term in your planning sheet. The group becomes a small cluster, and the cluster becomes the subject your channel is known for. One video establishes nothing on its own, but eight videos around the same quiet subject eventually do.",
        ],
      },
      {
        quote:
          "Specificity is the only currency a new channel can outspend the incumbents with.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Long-tail phrases are contested by almost nobody and convert viewers into subscribers faster.",
          "For video, long-tail means a phrase carrying a situation, constraint, or precise intent, not just more words.",
          "Low-volume phrases with clear intent outperform high-volume vague ones on retention.",
          "Stack audience, environment, and outcome modifiers onto a head term, then confirm each in autocomplete.",
          "Let big channels keep the averages while you collect the specific cases they ignore.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-matching-keyword-to-title",
    title: "Match Every Video Keyword to a Title People Will Click",
    excerpt:
      "A keyword that never appears in the title wastes its ranking power. Video keyword research should end with a title draft, not a spreadsheet row.",
    date: "2048-03-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Your keyword research is unfinished until you have a title draft that contains the phrase in a form a human would actually click. YouTube leans hard on the title to decide which queries a video deserves impressions for, and viewers use it to decide whether to click at all.",
          "Treat the title as the deliverable of research, not as a packaging step that happens later. A phrase that only lives in your tags and description is a phrase you have half-committed to, and half-commitments produce videos that never get tested properly.",
        ],
      },
      {
        heading: "Front-load the phrase without sounding like a robot",
        paragraphs: [
          "Put the phrase near the start of the title so it survives truncation in search results and on mobile. If the important words sit after the thirty-fifth character, a large share of your audience will never see them, and the match you engineered becomes invisible.",
          "The title still has to read like something a person wrote. 'Beginner drone settings explained for your first flight' carries the phrase cleanly, while a stuffed version of the same words reads as spam and kills click-through. Read your title aloud; if it sounds like a database record, rewrite it.",
          "Counting characters is part of this. Titles get cut off on mobile around the sixty-character mark, and anything placed after that point is a bonus rather than a guarantee. When the phrase is long, shorten the words around it instead of pushing it later in the line.",
        ],
      },
      {
        quote:
          "A title that matches the query but insults the reader wins the ranking and loses the click, which is the worst of both.",
      },
      {
        heading: "Let the thumbnail argue a different point",
        paragraphs: [
          "The title carries the phrase; the thumbnail carries the emotional argument. Splitting the work that way keeps both elements readable and stops you from repeating the same words twice on the same screen. Redundant packaging wastes half of your real estate.",
          "Strong pairs follow a pattern: the title states what the video answers, and the thumbnail shows the outcome or the stakes. Viewers process both in under a second, and the combination is what converts an impression into a visit. Research should feed both halves.",
        ],
      },
      {
        heading: "End research with three title drafts",
        paragraphs: [
          "Before you close the research session, write three possible titles for the chosen phrase, each front-loading it differently. This takes five minutes and saves you from filming a video you cannot package, which happens more often than creators admit.",
          "Keep those drafts next to the script. When the video is ready, pick the version with the clearest promise rather than the cleverest wording. Clever titles lose to clear ones almost every time in search results, where the viewer is comparison shopping against nine alternatives.",
          "The three drafts also tell you whether the phrase is too vague. If every version sounds the same and none of them promise anything specific, the phrase is doing too little work. Add the detail that makes this video different from the nine results sitting next to it.",
        ],
      },
      {
        quote:
          "If you cannot write a believable title for the phrase, you have chosen the wrong phrase or the wrong video. Fix one of them before shooting.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Research ends with a title draft; a phrase parked only in tags is half a decision.",
          "Front-load the keyword so it survives mobile truncation and still reads naturally.",
          "Let the title carry the phrase and the thumbnail carry the emotional argument.",
          "Write three title variants per keyword and keep them beside the script.",
          "Choose clarity over cleverness, since search results reward the clear promise.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-one-idea-per-video",
    title: "One Idea per Video Keeps Your Keyword Strategy Clean",
    excerpt:
      "Cramming three topics into one upload confuses both viewers and the ranking system. One video keyword per idea gives the algorithm a clear signal to work with.",
    date: "2048-03-17",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Give each video one keyword and one promise, then deliver that promise without detours. Videos built around a single idea give the ranking system a clean signal about what the upload deserves impressions for, and they give viewers a reason to stay to the end.",
          "Multi-topic videos look efficient in the planning stage and expensive in the results. They split watch time across audiences who each came for a different thing, and the algorithm reads that split as weak relevance rather than as generous scope.",
        ],
      },
      {
        heading: "Why mixed videos stall",
        paragraphs: [
          "Every topic change resets attention. The viewer who came for the second topic sits through the first, leaves early, and drags your retention curve down at a moment that matters for ranking. The viewer who came for the first topic leaves once the detour begins.",
          "I have killed several videos over this. Each time the script had two ideas I liked equally, and each time the retention graph showed the audience making the same choice I refused to make. The video that commits to one idea outperforms the ambitious compilation nearly every time.",
          "The confusion spreads to your channel page as well. Viewers who arrive for one thing and get another are less likely to browse your other uploads, because they cannot tell what your channel is about. Clear single-idea videos teach the audience what to expect next time.",
        ],
      },
      {
        quote:
          "Ambition belongs in the number of videos you plan, not in the number of ideas you cram into a single upload.",
      },
      {
        heading: "Splitting a big topic into a sequence",
        paragraphs: [
          "Big topics are not one video with a long runtime, they are a series waiting to be scheduled. Take the subject you want to own and divide it along the questions a viewer would ask in order, then assign each question its own phrase and its own script.",
          "The sequence also compounds. Viewers who finish part one are primed for part two, session time across your channel rises, and each video ranks for its own phrase instead of splitting signals across three. Playlists turn keyword breadth into watch time instead of competition with yourself.",
          "Numbering helps the sequence hold together. 'Part one' and 'part two' send a clear signal that the ideas are related without merging them into one bloated upload. The viewer understands the structure before they click, and the algorithm sees two clean matches instead of one muddled one.",
        ],
      },
      {
        heading: "How to tell when one idea is really two",
        paragraphs: [
          "If the video needs two separate introduction sentences, it is two videos. That rule has saved me from more muddled scripts than any outline template. The intro is where you make the promise, and one clean sentence is all a single idea needs.",
          "Another test: write the title for one idea, then write the title for the other. If you cannot fit both into one honest title, do not fit both into one video. The title is the contract, and a contract with two clauses gets enforced halfway.",
        ],
      },
      {
        quote:
          "One video, one phrase, one promise. Break that pattern on purpose for a series, never by accident in a script.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Single-idea videos give the algorithm a clean relevance signal and give viewers a reason to stay.",
          "Topic changes reset attention and damage the retention curve right where ranking is decided.",
          "Split large subjects into ordered questions and let each question own its own keyword.",
          "If a video needs two intro sentences or two honest titles, it is two videos.",
          "Use playlists to make keyword breadth work for your channel instead of against it.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-avoiding-stuffing",
    title: "How to Avoid Keyword Stuffing Without Losing Rankings",
    excerpt:
      "Repeating a phrase across the title does not help a video rank. A good video keyword sits in the title once and reads like something a person would write.",
    date: "2048-03-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Use the keyword in the title and let natural variants carry it through the description and spoken script. YouTube's systems understand synonyms and context well enough that repeating the exact phrase four times adds nothing and signals spam to both the algorithm and the viewer.",
          "Stuffing was a real tactic when search matching was crude. It is now a liability, because the same systems that understand what your video is about also notice when a description reads like it was written for a machine. Write for the viewer and the matching takes care of itself.",
        ],
      },
      {
        heading: "Where stuffing shows up most often",
        paragraphs: [
          "Titles that repeat the phrase twice are the loudest version of the problem. A title that reads 'Best Budget Cameras 2048 | Top Budget Camera Guide' wastes characters, looks desperate, and suppresses click-through from the very audience the phrase was meant to attract.",
          "Tag walls and description blocks that cycle the same six words are quieter versions of the same habit. Neither is helping you rank for anything you were not already eligible for, and both create the impression of a channel optimizing for machines instead of for people.",
          "Watch for stuffing in the spoken script too, because it is easier to miss there. Saying the exact phrase five times in a two-minute span sounds unnatural out loud, and viewers hear it even when they cannot name the problem. The transcript should read like speech, not like a checklist.",
        ],
      },
      {
        quote:
          "Every word spent repeating the keyword is a word not spent on the reason someone should watch.",
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Place the exact phrase in the title and the first line of the description, then write the rest of the description the way you would explain the video to a friend. Synonyms, related terms, and the specific situation inside the video do more for matching than repetition ever did.",
          "In the script, say the phrase where it belongs naturally and use variants elsewhere. Spoken language is full of related words, and the transcript gives YouTube all the context it needs to classify the video correctly. A script that sounds human matches better than a script written for crawlers.",
          "A short checklist keeps this simple. Put the phrase in the title, repeat it naturally once in the description, mention it once in the script, and stop. Everything past that point is repetition you will pay for in trust rather than gain in reach.",
        ],
      },
      {
        heading: "Signs you are stuffing already",
        paragraphs: [
          "Read your title and description aloud. If either sounds like a keyword salad, a viewer would have bounced before finishing the sentence. That reaction is the real cost of stuffing, and it shows up in click-through rate before it shows up anywhere else.",
          "Another sign: you chose the phrasing of the description before choosing the message. When the goal is covering keywords instead of explaining the video, the writing goes stiff and the viewer can feel it. Start from the explanation and let the phrase appear where it is useful.",
        ],
      },
      {
        quote:
          "Optimize the packaging for a person making a two-second decision, and the ranking systems will keep up on their own.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Put the exact phrase in the title and first description line, then write the rest for humans.",
          "Modern matching understands synonyms, so repetition adds risk without adding reach.",
          "Double-keyword titles waste characters and suppress click-through from warm viewers.",
          "Tag walls and description loops read as spam to both the algorithm and the audience.",
          "If your title sounds like a keyword salad when read aloud, rewrite it before publishing.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-checking-across-videos",
    title: "Check a Keyword Across Several Videos Before You Commit",
    excerpt:
      "One phrase can look perfect in a tool and still fail on your channel. Cross-check every video keyword against your last ten uploads before filming anything.",
    date: "2048-03-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Search your own channel for the phrase before you write a new script, and look at what you have already published that touches the same query. If a previous video already ranks for it, a new upload will split the audience instead of growing it.",
          "This habit costs five minutes and prevents the most common self-inflicted damage on growing channels. Two videos competing for one phrase share the impressions, confuse the audience about which to watch, and leave both of them underperforming their potential.",
        ],
      },
      {
        heading: "Cannibalization on your own channel",
        paragraphs: [
          "Keyword cannibalization happens when two of your uploads target the same query. YouTube picks one to show, usually the older one with established watch history, and the newer video struggles to earn its own impressions no matter how good it is.",
          "You will not always notice it happening. The early views on the new upload look normal, the older video dips slightly, and nothing triggers an obvious alarm. Checking against your recent titles before filming is the only reliable way to catch it in advance.",
          "Sequels are the exception worth planning. If the first video earned attention and viewers keep asking for more, a second one on the same subject can work when it targets a clearly different query. The distinction is whether the new video answers a new question or repeats the old one in new clothes.",
        ],
      },
      {
        quote:
          "Your biggest competitor for a new phrase is often the last video you published on the same subject.",
      },
      {
        heading: "A quick audit method",
        paragraphs: [
          "Keep a simple log: date, title, primary phrase, and secondary phrases for every upload. Before researching a new topic, scan the phrase column for overlap. A match means you either refresh the old video or reframe the new one toward a genuinely different query.",
          "You can also search your channel name plus the phrase directly in the search box and see what surfaces. If an old video appears for that query, treat it as an incumbent. That is your video, with your audience, holding the position you were about to challenge.",
          "The log pays off in a second way. Over time it shows which phrases you keep circling without ever filming, and that pattern usually points to a topic you avoid for a reason. Either fix the reason or drop the phrase for good, because a shortlist is only useful when it eventually turns into uploads.",
        ],
      },
      {
        heading: "Choosing between a refresh and a new video",
        paragraphs: [
          "When an existing upload already ranks for the phrase you want, a refresh often beats a new upload. Update the title, re-cut the intro, extend the sections viewers complained about, and let the existing watch history carry the improvement. The video already has authority to work with.",
          "Film something new when the old video's angle genuinely cannot serve the current query, or when the format has moved on. Two videos on the same broad subject are fine when they claim different specific phrases. Overlap in topic is normal; overlap in target query is the problem.",
          "Track the outcome either way. After a refresh or a new upload, check impressions for the phrase over the following two weeks. If only one video gains, the split is working cleanly. If both trade places, you still have overlap and one of them needs a sharper angle.",
        ],
      },
      {
        quote:
          "Before you add a video, know whether you are adding to your channel or competing with it.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Search your own channel for the phrase before writing any new script.",
          "Two uploads targeting one query split impressions and leave both underperforming.",
          "Maintain a log of titles and phrases so overlap checks take five minutes.",
          "A video of yours already ranking for the phrase is an incumbent; refresh it when possible.",
          "Overlapping topics are fine; overlapping target queries are the real mistake.",
        ],
      },
    ],
  },
  {
    slug: "video-keywords-simple-workflow",
    title: "A Simple Keyword Workflow for Planning Every Video",
    excerpt:
      "Research gets easier when it becomes a repeatable loop. This video keyword workflow takes an hour and fits between scripting sessions, then back to the script.",
    date: "2048-03-25",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "keywords", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Use a five-step loop: pick a seed topic, expand it with autocomplete, verify demand against the current results, shortlist one phrase, and draft the title before you write anything. The whole loop takes about an hour and produces a decision instead of a pile of notes.",
          "The value of a fixed workflow is not efficiency, it is consistency. When every topic passes through the same steps, your choices become comparable across months, and patterns in what works start to show up in your own data instead of in your memory.",
        ],
      },
      {
        heading: "Step one and two: seed and expand",
        paragraphs: [
          "Start with a subject you can speak on at length and write down three seed phrases in the words a viewer would use. If you cannot write three, you do not understand the audience wording yet, and that gap needs fixing before any tools get involved.",
          "Take each seed into the YouTube search box, read the completions, and run a short alphabet pass. Capture only the phrases that match videos you could actually produce in the next two months. Collection without a production plan is clutter, not research.",
          "Time-box the expansion step. Twenty minutes is enough to gather candidates for a week of uploads, and a timer stops the endless scrolling that turns research into procrastination. Once it rings, move on with whatever you have.",
        ],
      },
      {
        quote:
          "A workflow that produces one confident decision per hour beats a dashboard that produces fifty ambiguous ones per day.",
      },
      {
        heading: "Step three and four: verify and shortlist",
        paragraphs: [
          "For each candidate phrase, open the top ten results and record channel sizes, view counts, and upload dates. This manual pass takes ten minutes per phrase and tells you more about your odds than any difficulty score built for text pages.",
          "Then shortlist exactly one phrase per video. One phrase keeps the title honest and the script focused, and it keeps your channel from competing with itself. The runners-up go back on the list for future uploads, where they will still be useful.",
          "Write down why you rejected each option while the reasons are fresh. Those notes are what stop you from researching the same dead phrase again next month, and they make the loop faster every time you run it. A short rejection note saves more time than a long list of candidates.",
        ],
      },
      {
        heading: "Step five and the archive",
        paragraphs: [
          "Draft the title immediately, while the phrase is still fresh and you can still hear how a viewer would say it. A title written days later tends to drift back into internal jargon, and the match you worked for quietly dissolves.",
          "Log the phrase, title draft, and date in a plain spreadsheet, then review the log monthly. Old shortlists are gold, since phrases you set aside three months ago often have less competition now. The archive turns past research into future video ideas without any new tooling.",
          "Set a monthly review slot and keep it short. Fifteen minutes with the log is enough to notice which phrases produced videos that performed and which ones lingered untouched. That feedback loop is the part that improves your judgment over a year, and no tool can replace it.",
        ],
      },
      {
        quote:
          "Keep the loop small enough that you actually run it. A beautiful research process you abandon in week two was never a process at all.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Run a fixed loop: seed, expand, verify, shortlist one phrase, draft the title.",
          "Only capture phrases you could film within the next two months.",
          "Manual inspection of the top ten results beats any borrowed difficulty score.",
          "Shortlist one phrase per video to keep titles honest and channels un-cannibalized.",
          "Archive every decision and revisit the log monthly; old shortlists are cheap future ideas.",
        ],
      },
    ],
  },
];
