import { Film, Search, Map, Layers, Eye, Type, Puzzle, Compass, Target, TrendingUp } from "lucide-react";
import type { BlogPost } from "../types";

export const batch166: BlogPost[] = [
  {
    slug: "google-video-seo-how-videos-appear-in-search",
    title: "How Videos Actually Appear in Google Search Results",
    excerpt: "Learn how video surfaces in Google search, from video rich results to key moments, and what decides whether your clip gets a spot.",
    date: "2032-03-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Google can show your video in several distinct places, and each one has its own rules. The most common are video thumbnails beside a normal result, a dedicated video tab, and key moments that let people jump to a specific timestamp.",
          "None of these are guaranteed. Google decides whether to show a video based on where it is hosted, what structured data you provide, and whether the surrounding page looks like a real destination for that topic."
        ],
      },
      {
        heading: "The places a video can show up",
        paragraphs: [
          "Treat each surface as a separate audition rather than one big pool. A clip that wins a thumbnail might never earn a key moments carousel, and the other way around.",
        ],
        bullets: [
          "Standard video result: a thumbnail next to a blue link, often opening inline on the results page.",
          "Video tab and video mode: a filtered view that pulls clips from many domains.",
          "Key moments: labeled timestamps that deep link into the middle of your video.",
          "Thumbnail in Discover and image packs, which lean on the poster image you supply."
        ],
      },
      {
        heading: "What Google needs to consider you",
        paragraphs: [
          "Google has to find the video, understand it, and trust the page it lives on. If any of those three steps breaks, the clip stays invisible in search even when it ranks well on YouTube.",
          "Crawling is the first gate. Self hosted files need a page that references them and a sitemap that points crawlers at the URL. YouTube and other platforms hand Google a clean index, which is why embedded clips often surface faster.",
          "Understanding is the second gate. Titles, descriptions, transcripts, and structured data all feed the same machine. A silent clip with a vague filename gives Google almost nothing to work with."
        ],
      },
      {
        quote: "A video does not rank because it is good. It ranks because Google can confirm what it is about and where it belongs.",
      },
      {
        heading: "Why the host matters so much",
        paragraphs: [
          "Google owns YouTube, so YouTube clips get first class treatment in the index. That does not mean self hosted video is hopeless. It means you have to do more of the work that YouTube does for you: expose the file, describe it, and prove the page is the canonical home.",
          "Many teams run both. They publish on YouTube for reach and embed the same clip on their own page for search authority. The two can rank in different surfaces without cannibalizing each other when the pages are genuinely different."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Video can appear as a thumbnail result, in the video tab, as key moments, or inside Discover.",
          "Crawling, understanding, and page trust are three separate gates your clip must pass.",
          "Hosting changes the effort required: YouTube is indexed for you, self hosted files are not.",
          "Structured data and transcripts are how you replace the context a platform would otherwise provide.",
          "Publishing on both YouTube and your own site can target different surfaces at once."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-structured-data-basics",
    title: "Video Structured Data Basics for Google Search",
    excerpt: "A plain guide to VideoObject structured data, the fields Google reads, and how to mark up a video without breaking your page.",
    date: "2032-03-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Structured data is machine readable text that tells Google what a video is, when it was published, how long it runs, and what the thumbnail shows. The main type for video is VideoObject, written in JSON-LD and placed on the same page as the player.",
          "It does not replace good content. It removes guesswork so Google can place your clip in the right surface without inferring everything from scratch."
        ],
      },
      {
        heading: "The fields that carry weight",
        paragraphs: [
          "You do not need every possible property, but a handful do the heavy lifting. Start with these and expand only when a field adds real information.",
        ],
        bullets: [
          "name: the title of the video as you want it understood.",
          "description: a short summary that matches what viewers see.",
          "thumbnailUrl: the poster image, ideally one that is not a generic frame.",
          "uploadDate: the ISO date the video first went live.",
          "duration: the runtime in ISO 8601 form, such as PT4M13S.",
          "contentUrl or embedUrl: the file location or the embed target."
        ],
      },
      {
        heading: "Common ways people break it",
        paragraphs: [
          "Most failures are small and avoidable. A mismatched thumbnail, a missing upload date, or markup that points at a video the page does not actually show will quietly disqualify the result.",
          "Another frequent problem is duplicating the markup across every page that embeds the same clip. Google wants a canonical page. Pick the one that owns the video and mark it up there.",
          "Never mark up a video that is not playable on the page. If the player is gated behind a form or a login, the structured data claims something the user cannot confirm."
        ],
      },
      {
        quote: "Structured data is a claim. Google checks that claim against what a real visitor would experience.",
      },
      {
        heading: "Testing before you ship",
        paragraphs: [
          "Validate the markup with Google's rich results test and the schema validator before you publish. Then check the video indexing report in Search Console, which separates detected videos from indexed ones and explains the gaps.",
          "Treat the report as a checklist, not a scolding. Each warning points at a field or a page that needs a fix, and clearing them one by one is how a clip moves from detected to eligible."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "VideoObject in JSON-LD tells Google what your video is and where it lives.",
          "Name, description, thumbnailUrl, uploadDate, duration, and contentUrl matter most.",
          "Mark up only the canonical page and only a video that is genuinely playable there.",
          "Validate with the rich results test and the schema validator before publishing.",
          "Search Console's video indexing report shows detected versus indexed videos."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-youtube-versus-self-hosted",
    title: "YouTube Versus Self-Hosted Video for Google SEO",
    excerpt: "Compare YouTube and self-hosted video for Google search, and learn when each host wins and how to run both without conflict.",
    date: "2032-03-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "YouTube is faster to index and easier to rank inside Google's video surfaces because Google already holds a clean copy. Self hosting gives you full control of the page, the schema, and the experience, but you carry the crawling and markup work yourself.",
          "The right answer is usually both, pointed at different goals. Use YouTube for reach and discovery, and use your own player when you want search traffic to land on a page you control."
        ],
      },
      {
        heading: "Where YouTube wins",
        paragraphs: [
          "YouTube solves distribution and discoverability without any plumbing. The platform transcribes, indexes, and recommends, and Google trusts it as an entity.",
        ],
        bullets: [
          "Immediate indexing and eligibility for key moments on Google.",
          "Built in captions and transcripts that feed search understanding.",
          "Recommendation engine that brings viewers you never targeted.",
          "No hosting bill for bandwidth or transcoding."
        ],
      },
      {
        heading: "Where self hosting wins",
        paragraphs: [
          "When the video is the centerpiece of a page, owning the player keeps the whole experience on your domain. The visit does not bounce to a platform that competes for attention.",
          "You also control the schema, the watching time signals, and the data. On page engagement with a self hosted clip can strengthen the page itself rather than a third party profile."
        ],
      },
      {
        heading: "Running both without cannibalizing",
        paragraphs: [
          "The trap is embedding your YouTube clip and your own file on two pages that target the same query. Google then has to pick a canonical, and the two pages fight each other.",
          "Separate the intent. Let the YouTube version serve the platform audience and broad discovery. Let your page serve the specific long tail query with text, schema, and a player you host. Keep the titles and descriptions different enough that they are clearly distinct resources.",
          "If you must embed the YouTube player on your own page, add the video to your sitemap and include VideoObject markup pointing at your page as the home. Do not leave Google guessing which URL is canonical."
        ],
      },
      {
        quote: "The host question is not about prestige. It is about which surface you want the click to land on.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "YouTube indexes faster and earns key moments with little effort from you.",
          "Self hosting keeps the visitor on your domain and gives you full schema control.",
          "Running both works when the pages target different intents and keywords.",
          "Avoid embedding the same clip twice for the same query, or the pages compete.",
          "If you embed a platform player, declare the canonical URL and supply markup."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-getting-thumbnails-into-search",
    title: "Getting Your Video Thumbnails Into Google Search",
    excerpt: "Thumbnails decide clicks in Google video results. Learn the sizing, file, and markup rules that get yours shown instead of skipped.",
    date: "2032-03-10",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Google shows your thumbnail when it can fetch a suitable image and connect it to the video through markup or the platform. Supply a large, high quality poster image and declare it in your VideoObject data, or publish through a platform that already exposes one.",
          "A weak thumbnail does not just lose clicks. It can cost you eligibility for the video surface entirely."
        ],
      },
      {
        heading: "The image rules that matter",
        paragraphs: [
          "Google has been explicit about proportions and minimums, and ignoring them is the fastest way to a generic fallback frame.",
        ],
        bullets: [
          "Use a 16:9 ratio so the crop matches how the result is displayed.",
          "Provide at least 1200 pixels wide, with larger files preferred for crisp rendering.",
          "Keep the file under a few megabytes so fetching is quick and reliable.",
          "Serve it from a crawlable URL that does not require a login or a signed token.",
          "Avoid text that repeats the title, since the title already appears beside it."
        ],
      },
      {
        heading: "Where the thumbnail is declared",
        paragraphs: [
          "For self hosted video, the thumbnailUrl property in VideoObject is the hook. The URL there must return the actual image to Googlebot, not a placeholder or a redirect chain that dead ends.",
          "For platform video, the thumbnail is usually the one you uploaded, though YouTube may swap in an auto generated frame for certain surfaces. Setting a deliberate custom thumbnail keeps you in control.",
          "One subtle failure: a thumbnail that changes every time Google fetches it. Rotating images confuse the connection between the poster and the video, so keep the URL stable."
        ],
      },
      {
        quote: "Your thumbnail is the ad. Google only runs the ad if it can find and trust the creative.",
      },
      {
        heading: "Diagnosing a missing thumbnail",
        paragraphs: [
          "If the thumbnail never appears, check three things in order. Confirm the image URL loads for a crawler without authentication. Confirm the markup or platform exposes it. Confirm the image meets the size and ratio minimums.",
          "Search Console flags thumbnail problems under video indexing, and the URL inspection tool shows whether the image was fetched. Most fixes are a hosting permission or a mismatched URL, not something exotic."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A 16:9 image of at least 1200 pixels wide is the safe baseline for thumbnails.",
          "Declare the poster through thumbnailUrl or rely on a platform that exposes one.",
          "Keep the thumbnail URL stable and crawlable without authentication.",
          "Rotating or mismatched thumbnails break the link between image and video.",
          "Use Search Console video indexing to trace a thumbnail that never shows."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-writing-titles-for-search",
    title: "Writing Video Titles That Rank in Google Search",
    excerpt: "Titles for Google video search follow different rules than YouTube titles. Learn how to write ones that earn the click and the query.",
    date: "2032-03-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A title for Google video search leads with the query and states what the viewer gets. It is plain, specific, and front loaded, because Google may truncate it beside a thumbnail and searchers scan the first words.",
          "YouTube rewards curiosity and emotion. Google rewards clarity that matches the phrase someone typed. The same clip often needs two different titles."
        ],
      },
      {
        heading: "Front load the phrase",
        paragraphs: [
          "Put the words people search for at the start. If the clip answers how to fix a leaking faucet, the title should begin with that idea, not with a brand or a clever hook.",
          "Avoid stacking keywords until the title reads like spam. One clear phrase beats three vague ones, and Google can tell the difference."
        ],
      },
      {
        heading: "Match the page, not just the video",
        paragraphs: [
          "The title on the page and the name in your structured data should agree. When they diverge, Google has to choose, and the result is often a rewritten title you did not write.",
          "Write for the searcher first and the algorithm second. Accuracy earns the click, and the click plus a long watch trains the next decision."
        ],
      },
      {
        heading: "Habits that hurt",
        paragraphs: [
          "ALL CAPS, emoji strings, and exaggerated claims lower trust and can trip quality systems. Numbered promises that the video does not deliver create bounce, which undermines the ranking you just earned.",
          "Do not bury the subject under a series name. A viewer searching for a specific answer should not have to decode your naming convention to find it."
        ],
      },
      {
        quote: "If the title needs a wink to make sense, it is a YouTube title, not a Google title.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead with the phrase people search and state the payoff in plain words.",
          "Keep the page title and the structured data name aligned to avoid rewrites.",
          "One specific keyword phrase beats a pile of loosely related terms.",
          "Caps, emojis, and overpromising hurt trust and increase bounce.",
          "Separate your Google title from your YouTube hook when the goals differ."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-embedding-video-on-a-page",
    title: "Embedding Video on a Page Without Hurting SEO",
    excerpt: "Embedding a video the right way keeps the page fast and readable to Google. Learn placement, markup, and the mistakes to avoid.",
    date: "2032-03-16",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Embed a video where it supports the text, keep it lightweight, and wrap it in structured data that points at the page as the canonical home. A good embed adds context, not dead weight.",
          "Google can rank a page because of a video, but only when the page itself has something to say. A lone player with no text rarely earns anything."
        ],
      },
      {
        heading: "Placement that works",
        paragraphs: [
          "Put the player near the top when the video is the main event, and after the intro when the text carries the answer. Either way, surround it with the words a search engine can read.",
          "Avoid burying the embed below ads, pop ups, or an infinite scroll of unrelated content. If a crawler cannot reach the player quickly, it treats the video as an afterthought."
        ],
      },
      {
        heading: "Keep the page fast",
        paragraphs: [
          "Third party players pull heavy scripts. Defer the iframe until it is needed, lazy load below the fold, and never autoplay a clip with sound, which spikes load and annoys visitors.",
          "Core Web Vitals still matter, and a slow embed drags down the whole page. A fast page with a clean embed beats a rich embed on a sluggish page in most comparisons."
        ],
      },
      {
        heading: "Markup and canonical signal",
        paragraphs: [
          "Add VideoObject schema on the embedding page and include it in your sitemap. This tells Google the page is a real video destination rather than a random mention.",
          "If the same clip is embedded in many articles, pick one URL as the canonical video home and reference it. Scattered embeds with no clear owner dilute every page."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place the embed where it supports the surrounding text, not in isolation.",
          "Keep pages fast: defer, lazy load, and never autoplay with sound.",
          "Add VideoObject markup and include the page in your video sitemap.",
          "Choose one canonical URL for a clip that appears on multiple pages.",
          "A video alone rarely ranks; the page content carries the weight."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-video-sitemaps-explained",
    title: "Video Sitemaps Explained for Google Discovery",
    excerpt: "Video sitemaps tell Google where your clips live and how to understand them. Learn what to include and the errors that block indexing.",
    date: "2032-03-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A video sitemap is an XML file that lists your video URLs along with the page that hosts each one, plus the metadata Google needs to understand it. It is how you hand Google a map instead of hoping it stumbles onto your clips.",
          "The sitemap does not guarantee ranking. It guarantees that Google knows the video exists and where to find the details, which is the prerequisite for every other step."
        ],
      },
      {
        heading: "What each entry carries",
        paragraphs: [
          "Every video entry pairs a page URL with the video it contains. Omitting a field usually means Google has to guess, and guessing costs you eligibility.",
        ],
        bullets: [
          "The page URL that hosts the video and the player location on it.",
          "The thumbnail URL, which must return the real image to crawlers.",
          "The video title and description as you want them understood.",
          "The raw file URL for self hosted video, or the player URL for embeds.",
          "The duration and the publication date when they are known."
        ],
      },
      {
        heading: "The errors that block indexing",
        paragraphs: [
          "Most rejected sitemaps fail on the same few points. The thumbnail URL is blocked by a firewall, the video file returns a 403, or the hosting page does not actually contain the player the sitemap describes.",
          "Another common mistake is listing videos on pages that are not indexable. If the page is noindex or canonicalized elsewhere, the sitemap entry fights your own signals and Google drops the video.",
          "Keep the sitemap current. Removing dead entries matters as much as adding new ones, because stale URLs waste crawl budget and send mixed messages."
        ],
      },
      {
        quote: "A sitemap is a promise that the page matches the file. Google checks that promise, and broken ones get ignored.",
      },
      {
        heading: "Watching it work",
        paragraphs: [
          "Submit the sitemap in Search Console and watch the video indexing report. The gap between detected and indexed videos is your to do list.",
          "When a video gets indexed, the report shows it, and the URL inspection tool confirms the page was crawled. Treat each green entry as proof the plumbing is sound, then repeat for the next clip."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A video sitemap maps each video to its hosting page with the metadata Google needs.",
          "Blocked thumbnails and files are the most frequent cause of rejection.",
          "Only list videos on indexable pages, or the entry conflicts with your signals.",
          "Prune dead entries to protect crawl budget and keep signals clean.",
          "Use the Search Console video indexing report to close the detected to indexed gap."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-choosing-keywords-for-video-search",
    title: "Choosing Keywords for Video Search on Google",
    excerpt: "Video keywords differ from text keywords. Learn how to find phrases where a video wins and how to pair them with the right format.",
    date: "2032-03-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Video search rewards queries where watching beats reading: demonstrations, repairs, tutorials, comparisons, and anything with motion or steps. Find those phrases and the format does part of the ranking for you.",
          "A keyword that works for a blog post may fail for video. The question to ask is whether a person would rather see this done than read about it."
        ],
      },
      {
        heading: "Signals a query wants video",
        paragraphs: [
          "Look for phrases with process words and physical actions. These are the ones where Google already shows video results, which is a strong hint about intent.",
        ],
        bullets: [
          "How to and step by step phrasing tied to a physical task.",
          "Product and service comparisons where seeing the item matters.",
          "Repairs, setups, and installations with a clear sequence.",
          "Reviews that hinge on visual quality or real world use.",
          "Queries where a screenshot or a demo answers faster than prose."
        ],
      },
      {
        heading: "Mining the right sources",
        paragraphs: [
          "Start with the video surfaces themselves. Type a candidate query into Google and check whether a video carousel appears. When Google shows video, it is telling you a clip can win there.",
          "Look at your own search data for pages where visitors bounce quickly. Those are often queries a video would answer better than the current text. Your YouTube comments and support tickets are another rich source of the exact words people use."
        ],
      },
      {
        heading: "Match format to intent",
        paragraphs: [
          "A broad how to query wants a complete walkthrough. A narrow question wants a short focused clip. Misjudging this is why some videos rank for the wrong phrase and then underperform once they arrive.",
          "Group your clips into topics so each one owns a specific query. One strong video for a tight phrase beats five vague videos covering the same ground."
        ],
      },
      {
        quote: "The best video keyword is the one where a viewer would rather watch than read.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Video keywords cluster around demonstration, repair, tutorial, and comparison intent.",
          "If Google already shows a video carousel for a query, a clip can compete there.",
          "Use your own bounces and support questions as keyword sources.",
          "Match video length and depth to how broad the query is.",
          "One focused clip per query beats a scattered set covering similar ground."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-google-versus-youtube-ranking",
    title: "Google Versus YouTube Ranking: What Really Differs",
    excerpt: "Google search and YouTube rank video on different signals. Learn what each rewards so you can optimize for the surface you want.",
    date: "2032-03-25",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "YouTube ranks a video against everything else on YouTube and leans hard on watch time and engagement. Google ranks a web page that happens to contain a video and leans on the page's text, links, and structured data.",
          "Same clip, two contests. Optimizing for one does not automatically win the other, which is why the results can differ so widely."
        ],
      },
      {
        heading: "What YouTube rewards",
        paragraphs: [
          "YouTube is a recommendation engine wearing a search box. It studies how long people watch and what they do next.",
        ],
        bullets: [
          "Watch time and average view duration, weighted by the audience watching.",
          "Click through rate on the thumbnail and title in the feed.",
          "Session behavior, meaning whether your clip keeps people on the platform.",
          "Freshness and consistency signals from regular uploads.",
          "Engagement such as likes, comments, and shares."
        ],
      },
      {
        heading: "What Google rewards",
        paragraphs: [
          "Google ranks the page. The video is one element inside a larger document that must also satisfy the query with text, earn links, and load quickly.",
          "Structured data, a crawlable player, and a clear canonical URL matter here in a way they do not on YouTube. Authority is earned across the whole domain, not by a single channel.",
          "Because the unit is a page, an ordinary article with a strong transcript can outrank a flashy YouTube clip for the same phrase. The text does the ranking; the video adds eligibility and engagement."
        ],
      },
      {
        heading: "Optimizing for both without copying",
        paragraphs: [
          "Shared basics apply to both: a clear topic, accurate metadata, and a real answer. Beyond that, diverge. On YouTube, invest in the hook and the first thirty seconds. On Google, invest in the page text, the schema, and internal links.",
          "Track the two separately. A clip that wins on YouTube may be invisible in Google and the reverse. Knowing which surface is actually sending traffic tells you where to spend your next hour."
        ],
      },
      {
        quote: "Google ranks pages. YouTube ranks attention. A clip that serves both has to be two things at once.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "YouTube ranks against other videos and leans on watch time and engagement.",
          "Google ranks the hosting page using text, links, and structured data.",
          "The same clip can win one surface and lose the other for the same query.",
          "Optimize YouTube for the hook; optimize Google for the page around the video.",
          "Measure the two channels separately to know where traffic truly comes from."
        ],
      },
    ],
  },
  {
    slug: "google-video-seo-tracking-video-search-traffic",
    title: "Tracking Video Search Traffic in Google Analytics",
    excerpt: "Video search traffic hides inside your normal reports. Learn how to isolate it, read it, and turn the numbers into decisions.",
    date: "2032-03-28",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["seo", "google", "discovery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Search traffic from Google video surfaces arrives as ordinary organic visits, so it disappears into your totals unless you separate it. Use Search Console's video data, custom query filters, and event tracking to see which clips actually earn search visits.",
          "The goal is not more dashboards. It is knowing whether your video work moves traffic or just looks busy."
        ],
      },
      {
        heading: "Where the data lives",
        paragraphs: [
          "No single report labels a visit as video search. You assemble the picture from a few sources that each show part of it.",
        ],
        bullets: [
          "Search Console search type filter set to video, which shows impressions and clicks for video results.",
          "Search Console video indexing, which shows which pages are eligible and indexed.",
          "Analytics landing pages, filtered to pages that contain a player.",
          "On page events that fire when a visitor starts or finishes the video.",
          "Query reports, where video driven queries often differ from your text winners."
        ],
      },
      {
        heading: "Reading the numbers honestly",
        paragraphs: [
          "A page can earn video impressions with almost no clicks. That gap tells you the thumbnail or title is not persuading, not that the ranking is broken. Fix the creative before you chase more keywords.",
          "Compare the queries that bring video clicks against those that bring text clicks on the same page. When they overlap heavily, the page is fine. When they diverge, you may have two audiences sharing one URL."
        ],
      },
      {
        heading: "Turning it into decisions",
        paragraphs: [
          "Set a simple baseline: video impressions, video clicks, and average watch time per landing page. Review monthly and act on the biggest gap.",
          "High impressions with low clicks means rework the thumbnail and title. High clicks with low watch time means the video does not match the promise. Strong watch time with weak impressions means the clip is good but under described, so improve schema and captions.",
          "Keep the loop tight. Publish, measure, adjust one variable, and measure again. Video search rewards iteration more than any single clever trick."
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Video search traffic blends into organic totals unless you deliberately separate it.",
          "Search Console's video search type and video indexing report are the primary sources.",
          "Impressions without clicks point at the thumbnail and title, not the ranking.",
          "Compare video queries with text queries on the same page to spot split audiences.",
          "Loop publish, measure, and adjust one variable at a time for steady gains."
        ],
      },
    ],
  },
];
