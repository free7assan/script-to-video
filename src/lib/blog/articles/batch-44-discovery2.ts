import { Search, Map, Puzzle, Eye, Film, Compass, Layers, Target, Type, BarChart3 } from "lucide-react";
import type { BlogPost } from "../types";

export const batch44: BlogPost[] = [
  {
    slug: "discovery2-google-video-search-ranking",
    title: "How Google Actually Ranks Video Results in Search",
    excerpt:
      "Google video SEO starts with one idea: rank the page that hosts the video, not just the file itself. Here is how those ranking decisions get made.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Google ranks pages, and the page hosts the video",
        paragraphs: [
          "Google does not rank a video file on its own. It ranks the page that contains it. That single fact reshapes how you plan video SEO, because the title tag, headings, and surrounding text all pull weight.",
          "I stopped treating the upload as the finish line. The page hosting the video has to make sense to someone who cannot press play, and it has to state plainly what the video answers.",
        ],
      },
      {
        heading: "The signals that decide placement",
        paragraphs: [
          "Google blends relevance, quality, and context when it decides whether to show a video in a result. No single factor wins. The mix matters more than any one tweak.",
        ],
        bullets: [
          "Page relevance: does the text around the video match the query, or does the clip sit alone on a thin page?",
          "Video metadata: a title, description, and thumbnail that a crawler can read and a person would recognize.",
          "Structured data: VideoObject markup that spells out duration, upload date, and the thumbnail URL.",
          "Engagement: watch behavior on the host page, though Google keeps the exact weighting private.",
          "Freshness and authority: an older page from a trusted site can outrank a newer one from a stranger.",
        ],
      },
      {
        heading: "Key Moments raise the ceiling",
        paragraphs: [
          "A video with labeled chapters can earn a Key Moments result, which lists specific timestamps under the link. That extra space pulls more clicks, and it comes from structure rather than luck.",
          "Chapters have to be real. When a label promises something the timestamp does not deliver, viewers bail and the feature can vanish.",
        ],
      },
      {
        heading: "What I check before publishing",
        paragraphs: [
          "I run a short list every time a video page goes live. It takes about fifteen minutes and saves weeks of guessing.",
          "The page needs a clear title, a description that states the payoff, and a visible transcript. When the video is embedded from YouTube, I confirm the embed is not blocked from indexing.",
        ],
      },
      {
        quote:
          "A video nobody can read is a video Google cannot summarize. The transcript is not an extra, it is the text version of your work.",
      },
      {
        heading: "Common mistakes that stall a video",
        paragraphs: [
          "The most frequent error is embedding a video and writing two lines of text. Google has almost nothing to match, so the page never ranks even when the footage is strong.",
          "Another is hiding the player behind a click a crawler cannot trigger. If the video loads only after a user action, the crawler may never see it at all.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Optimize the hosting page, not only the video file.",
          "Add VideoObject schema so Google can parse duration and thumbnail.",
          "Use honest chapter labels to chase a Key Moments result.",
          "Publish a transcript so crawlers have text to match against queries.",
          "Check indexation before rewording titles that were never read.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-google-key-moments-chapters",
    title: "Key Moments: Getting Chapters Into Google Search",
    excerpt:
      "Key Moments come from chapter data, so video SEO work on timestamps can earn your clip extra links under the main result in Google Search.",
    date: "2024-07-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "A Key Moments result links to parts of your video",
        paragraphs: [
          "A Key Moments result shows several labeled timestamps beneath a video in Google Search. Clicking one jumps the viewer straight to that point in the clip.",
          "It is one of the few video features you can influence directly, and it usually improves click through rate because the snippets answer specific questions on their own.",
        ],
      },
      {
        heading: "The three ways Google finds chapters",
        paragraphs: [
          "Google looks for structure in more than one place. If the source offers none of these, the feature simply will not appear.",
        ],
        bullets: [
          "YouTube chapters, written into the description with a start time and a label on each line.",
          "Clip structured data on your own site, which marks a name, start offset, and URL for a segment.",
          "Visible timestamps on the page that sit near the video and describe each segment in plain words.",
        ],
      },
      {
        heading: "Labels decide whether anyone clicks",
        paragraphs: [
          "A label like Part 2 tells a viewer nothing, and Google gains nothing either. I write each one as a question the timestamp answers, so the snippet reads like a useful answer inside a list.",
          "Keep labels short enough to survive a narrow results layout. Six to eight words usually fit without getting cut.",
        ],
      },
      {
        heading: "When the feature stays hidden",
        paragraphs: [
          "Sometimes you add chapters and nothing changes. The clip may be too short, the labels too thin, or the page too new for Google to trust the segments yet.",
          "I give a page two weeks before judging. If the result still shows nothing, I rewrite the labels and check that the timestamps match the real content second for second.",
        ],
      },
      {
        quote:
          "Chapters are a promise about where the good part lives. Break that promise once and viewers stop trusting the timestamps.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Earn Key Moments with real chapters, not padded labels.",
          "Add clip structured data when you host the video yourself.",
          "Write each label as the question the segment answers.",
          "Give Google time before you assume the feature failed.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-videoobject-schema-markup",
    title: "VideoObject Schema: Markup Google Understands",
    excerpt:
      "VideoObject schema tells Google what a clip contains. Treat video SEO structured data as a contract, and the rich result becomes far more likely to show.",
    date: "2024-12-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Structured data is a labeled package for crawlers",
        paragraphs: [
          "VideoObject is a set of fields that describes a video in a format machines parse without guessing. It names the video, states how long it runs, and points to its image.",
          "Google cannot watch your video. Markup is how you tell it the basics that a human would notice in two seconds of playback.",
        ],
      },
      {
        heading: "Required and recommended fields",
        paragraphs: [
          "Validation tools flag missing required fields first, but the recommended ones often decide whether a rich result appears.",
        ],
        bullets: [
          "Name and description: the title and a short summary that match what viewers actually see.",
          "Thumbnail URL: a reachable image, since Google will not display a clip without one.",
          "Upload date: when the video first went live, kept accurate across updates.",
          "Duration: the runtime in a standard format so the result can label it.",
          "Content URL and embed URL: where Google can fetch the video and where it can play it.",
        ],
      },
      {
        heading: "Markup has to match the page",
        paragraphs: [
          "The fastest way to lose a rich result is to describe one video in the markup and show another on the page. Google compares the two.",
          "I keep the schema in the page head and the visible content in the body, then read both side by side to check they agree on the title and the runtime.",
        ],
      },
      {
        heading: "The errors I see most",
        paragraphs: [
          "Broken thumbnail links top the list. The URL returns a 404, and the result drops the image without warning.",
          "A close second is a duration that does not match the actual file. Small differences pass, but a five minute claim on a two minute clip gets caught.",
          "Last is neglecting updates. When you replace a video, update the upload date and the thumbnail or the stale data lingers for weeks.",
        ],
      },
      {
        quote:
          "Schema is a contract. Whatever you write in it, Google expects the page to honor in front of a real viewer.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Describe the video Google can actually see on the page.",
          "Keep the thumbnail URL reachable and the duration honest.",
          "Test with a validation tool before you publish.",
          "Refresh the markup whenever the video changes.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-google-video-thumbnail-rules",
    title: "Google Video Thumbnail Rules You Have to Meet",
    excerpt:
      "Google video SEO depends on a thumbnail it can fetch. Size, format, and file access decide whether your clip shows an image at all in search results.",
    date: "2025-04-20",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "No thumbnail, no rich result",
        paragraphs: [
          "Google will not render a video result with a broken or missing image. The thumbnail is a hard requirement, not a garnish on top of the listing.",
          "That means the image file has to be reachable by a crawler and described in the markup. If either piece is missing, the result falls back to a plain link.",
        ],
      },
      {
        heading: "The technical requirements",
        paragraphs: [
          "These are the numbers Google publishes, and they rarely change.",
        ],
        bullets: [
          "Formats: common web image types such as JPEG, PNG, GIF, or WebP.",
          "Size: a width of at least 120 pixels, though larger images look better in a results page.",
          "Aspect ratio: a shape close to the standard widescreen ratio keeps the crop sensible.",
          "Robots access: the image URL cannot be blocked in your robots file.",
          "File size: keep it under the documented cap so the crawler fetches it quickly.",
        ],
      },
      {
        heading: "Hosting the image where Google can reach it",
        paragraphs: [
          "A thumbnail on a private server or behind a login wall is invisible. I always load the image URL in a fresh browser to confirm it returns without a redirect chain.",
          "When you embed a video from a platform, make sure the image it exposes is public. A restricted embed can hide the poster frame from everyone, crawler included.",
        ],
      },
      {
        heading: "What makes a thumbnail win the click",
        paragraphs: [
          "Passing validation only gets you into the result. The image still has to earn the tap against nine other listings.",
          "I crop for the small size first. Faces, one strong object, and one short phrase survive the shrink. Busy collages turn to mud at feed scale.",
        ],
      },
      {
        quote:
          "A thumbnail is read before a title on a phone. Design it for the size it will be seen, not the size of your editing timeline.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Treat the thumbnail as a requirement, not an extra.",
          "Keep the image reachable and unblocked by robots rules.",
          "Test the URL in a clean browser before publishing.",
          "Crop for the small display size your viewers will get.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-youtube-videos-in-google-search",
    title: "When YouTube Videos Show Up in Google Search",
    excerpt:
      "Google video SEO often rides on YouTube, but the platform does not guarantee placement. Understand why some clips surface while most stay invisible.",
    date: "2025-08-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "YouTube is one host among many",
        paragraphs: [
          "When you search on Google and see a video, it often comes from YouTube. That does not mean every YouTube upload enters the index.",
          "Google decides per video whether the page is worth showing for a query. Most uploads never qualify for a specific search.",
        ],
      },
      {
        heading: "Why some clips surface",
        paragraphs: [
          "Google leans on the query, the video metadata, and the engagement signals it can read from the platform. A clip that answers a clear question tends to do better than one that wanders.",
          "Titles written for search beat titles written for a subscriber feed. The query the viewer typed is the text both systems compare against.",
        ],
      },
      {
        heading: "What you control on a YouTube upload",
        paragraphs: [
          "The platform limits how much you can change, but the levers still matter.",
        ],
        bullets: [
          "The title, which should name the topic the way a viewer would search it.",
          "The description, where the first sentences repeat the target phrase naturally.",
          "Chapters, which create the timestamps Google can turn into Key Moments.",
          "Captions, which give Google text to read when the audio is the only content.",
          "The thumbnail, which must be public for Google to display it.",
        ],
      },
      {
        heading: "Embedding the same clip on your own site",
        paragraphs: [
          "You can host your own page around a YouTube embed and compete for the same query with more control over the text.",
          "I do this when I own the topic. The host page carries the transcript, the schema, and the internal links that a platform page cannot.",
          "The tradeoff is maintenance. A self hosted page needs its own metadata and its own crawling path, and forgetting either one wastes the effort.",
        ],
      },
      {
        quote:
          "A YouTube page is a rented storefront. It can bring customers, but you do not set the shelf.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "YouTube placement is decided per video, not per channel.",
          "Write titles and descriptions for the query, not for subscribers alone.",
          "Use chapters and captions to feed Google readable text.",
          "Embed on your own page when you want control over the text.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-google-video-indexing-fix",
    title: "Getting Your Videos Indexed by Google Search Fast",
    excerpt:
      "Google video SEO stalls at the first hurdle when a clip never gets indexed. Fix the crawl path before you touch titles or thumbnails.",
    date: "2025-12-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Indexing comes before ranking",
        paragraphs: [
          "A video page that Google has not indexed cannot rank for anything. The first job is getting it into the index, and only then does placement matter.",
          "I check the indexing status before I judge a video's performance. If the page is missing, no title rewrite will help.",
        ],
      },
      {
        heading: "Reasons a video page stays out",
        paragraphs: [
          "The causes are almost always technical, and they show up in a short list.",
        ],
        bullets: [
          "A robots rule that blocks the page or the video file without anyone noticing.",
          "A player that loads only after a click, so the crawler sees an empty container.",
          "No internal links pointing at the page, leaving it stranded from the crawl.",
          "Duplicate content that Google picks a different version of instead.",
          "A very new page that simply has not been crawled yet.",
        ],
      },
      {
        heading: "How to check with Search Console",
        paragraphs: [
          "Search Console has a URL inspection tool and a video indexing report. The inspection tool tells you whether a specific page is indexed and which crawl rule applied.",
          "The video report groups problem pages by cause. I read it once a week so small issues do not pile into a silent traffic drop.",
        ],
      },
      {
        heading: "Requesting indexing the right way",
        paragraphs: [
          "You can ask Google to crawl a page, but the request only works when the page is actually crawlable.",
          "I fix the block, add a link from a page Google already visits, and then request indexing. Most of the time the page lands within a few days.",
          "Repeated requests on a blocked page do nothing except waste your patience.",
        ],
      },
      {
        quote:
          "You cannot rank a page Google never read. Indexation is the door, and every other video SEO task waits behind it.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Confirm indexation before you analyze ranking.",
          "Check robots rules, player behavior, and internal links.",
          "Use the video indexing report to catch problems early.",
          "Link from an indexed page, then request a crawl once.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-video-sitemaps-google",
    title: "Video Sitemaps That Google Will Actually Read",
    excerpt:
      "A video sitemap hands Google the details it cannot guess. Done well, it shortens video SEO timelines and makes each clip discoverable.",
    date: "2026-03-18",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "A sitemap tells Google where the videos are",
        paragraphs: [
          "A video sitemap is a file that lists your video pages along with the metadata for each clip. It points the crawler at content it might otherwise miss.",
          "Google can find videos without one, but the sitemap removes guesswork, especially on sites with many pages.",
        ],
      },
      {
        heading: "Fields that earn their place",
        paragraphs: [
          "You do not need every field. You need the ones Google uses to build a result.",
        ],
        bullets: [
          "The page URL, which must be the page that actually hosts the player.",
          "The thumbnail URL, public and reachable, or the entry is rejected.",
          "The video title and description, written for a person and not a keyword list.",
          "The player location, so Google knows the embed is allowed.",
          "The duration and publication date when you have them accurate.",
        ],
      },
      {
        heading: "Sitemap mistakes that break parsing",
        paragraphs: [
          "Sitemaps fail for dull reasons. An unescaped character in a URL, a thumbnail that returns a 404, or a page URL that no longer exists all get flagged.",
          "I validate the file before submitting and again after any site change. A broken sitemap can quietly stop helping without any visible error on the front end.",
        ],
      },
      {
        heading: "How often to refresh",
        paragraphs: [
          "Regenerate the sitemap whenever you publish or remove a video. A file that lists dead pages wastes a crawl and can lower trust in the whole submission.",
          "For busy channels, an automated build that runs on deploy keeps the file current with almost no effort.",
        ],
      },
      {
        quote:
          "The sitemap is a table of contents for a machine. Keep it short, true, and current, and it does its job.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Submit a sitemap when a site hides videos from simple crawling.",
          "Include a reachable thumbnail or the entry is ignored.",
          "Validate before submitting and after major changes.",
          "Rebuild the file on every publish to avoid dead entries.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-google-discover-video-placements",
    title: "Winning Video Placements in the Google Discover Feed",
    excerpt:
      "Google video SEO extends into Discover, where clips ride on topic interest rather than a typed query. The rules and the payoff both change.",
    date: "2026-05-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "search", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Discover is not a search box",
        paragraphs: [
          "Discover shows content before a viewer types anything, based on what Google thinks they care about. There is no query to match, so relevance works differently.",
          "A video can reach people in Discover who would never have searched for it. That reach comes with less control over the audience.",
        ],
      },
      {
        heading: "What tends to surface",
        paragraphs: [
          "Discover favors fresh, visually strong, clearly titled content on topics with steady interest.",
          "A strong thumbnail matters even more here than in search, because the feed is a wall of images competing for one tap.",
          "Evergreen topics with a news angle do well. So do pages that a returning reader already visits, since Discover leans on a person's history.",
        ],
      },
      {
        heading: "Making a video Discover friendly",
        paragraphs: [
          "The basics overlap with search, but a few habits matter more.",
        ],
        bullets: [
          "A large, clear thumbnail that reads at phone width.",
          "A title that names the topic without tricking the reader.",
          "Freshness signals, since Discover rewards recent publishing.",
          "A fast, mobile first host page so the tap does not bounce.",
          "No misleading framing, because a broken promise gets the whole site demoted.",
        ],
      },
      {
        heading: "Measuring Discover traffic",
        paragraphs: [
          "Discover clicks show up as their own source in Search Console and analytics. Mixing them with search hides how much reach the feed is adding.",
          "I watch Discover separately because it spikes and falls fast. A single day of traffic rarely tells you whether the approach works.",
        ],
      },
      {
        quote:
          "Search answers a question a person asked. Discover guesses a question they have not asked yet. Different game, different patience.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Treat Discover as a feed channel, not a query channel.",
          "Invest in a thumbnail that reads on a phone.",
          "Publish fresh content on topics with lasting interest.",
          "Track Discover traffic on its own to read the trend.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-video-transcripts-google-indexing",
    title: "Transcripts and Captions for Google Video Indexing",
    excerpt:
      "Transcripts give crawlers the words inside a clip. For video SEO, that text is often the only thing Google can match against a search query.",
    date: "2026-08-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "Text is how machines listen",
        paragraphs: [
          "Google does not hear the audio in your video. It reads text. A transcript turns spoken words into something a crawler can index and match against a query.",
          "When a page has no transcript and no captions, the search engine has almost no idea what the clip covers.",
        ],
      },
      {
        heading: "Caption files and transcripts are not the same",
        paragraphs: [
          "People use the words interchangeably, but the files serve different jobs.",
        ],
        bullets: [
          "A caption file is timed, tied to the audio, and displays on screen as the video plays.",
          "A transcript is a full text version with no timing, useful on the page itself.",
          "Both can help indexing, but the transcript is easier for Google to read as page content.",
          "Neither one replaces the other when accessibility matters.",
        ],
      },
      {
        heading: "Where to put the transcript",
        paragraphs: [
          "On a page you control, the transcript belongs in the body, visible and selectable. Hidden text that a visitor cannot read is either pointless or against the rules.",
          "I drop it below the player with a short intro line, so the page reads naturally and the crawler gets the full text in one place.",
          "On a platform you do not control, use the built in caption upload. It is the closest thing to a transcript the platform will index.",
        ],
      },
      {
        heading: "Quality rules for auto captions",
        paragraphs: [
          "Auto generated captions need editing before you rely on them. Names, product terms, and numbers come out wrong often.",
          "I scan for the terms that matter most to the topic and fix those first. A clean transcript beats a long one full of mistakes.",
          "Good captions also help the viewer, which lifts retention and keeps the video watchable with sound off.",
        ],
      },
      {
        quote:
          "Every clip already contains the words. The transcript just lets Google find them.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Publish a visible transcript so crawlers have text to index.",
          "Keep captions and transcripts as separate, useful files.",
          "Edit auto captions before trusting the output.",
          "Fix names, product terms, and numbers first.",
        ],
      },
    ],
  },
  {
    slug: "discovery2-google-video-rich-results-performance",
    title: "Reading Google Video Rich Results Performance",
    excerpt:
      "Video SEO does not end at launch. Search Console reports show which rich results earn impressions and where the clips quietly lose them.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["discovery", "seo", "search"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Rich results are their own report",
        paragraphs: [
          "Search Console separates video rich results from the rest of your traffic. That split is the point. It shows whether your video pages earn special listings or plain links.",
          "I read the video reports on a monthly rhythm, not daily. The numbers move slowly and panic reading them hourly is a waste of attention.",
        ],
      },
      {
        heading: "What the reports actually show",
        paragraphs: [
          "Each report groups pages by issue and by performance, so you can find both problems and wins.",
        ],
        bullets: [
          "Valid pages, which currently qualify for a video rich result.",
          "Error pages, which have a problem that blocks the feature.",
          "Impressions and clicks for the video enhancement, split from the site total.",
          "Issue causes, such as a missing thumbnail or unreachable video file.",
        ],
      },
      {
        heading: "Diagnosing a drop in impressions",
        paragraphs: [
          "A sudden fall in video impressions usually traces to one of three things. A page lost its thumbnail, a video URL broke, or a competitor moved above you.",
          "I start with the error list. Broken assets are common and easy to fix, and they explain most drops within a day.",
          "If the errors are clean, I check the pages that lost the most and inspect them one by one before changing anything site wide.",
        ],
      },
      {
        heading: "A monthly review routine",
        paragraphs: [
          "On the first of each month I open the video reports and note the valid and error counts. Then I fix the errors and export the page list for the next check.",
          "I also compare impressions against the previous month and flag any page that lost more than half its reach. That page gets a hands on review.",
          "The routine is boring on purpose. Boring reviews catch quiet problems that a daily glance would miss.",
        ],
      },
      {
        quote:
          "A rich result you never measure is a guess. The report turns video SEO from hope into something you can actually steer.",
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Read video rich results as a separate channel.",
          "Clear error pages before chasing ranking changes.",
          "Check broken thumbnails and video URLs first.",
          "Run the review monthly and flag pages that lose half their reach.",
        ],
      },
    ],
  },
];
