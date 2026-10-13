import { BarChart3, Compass, DollarSign, Film, Repeat, Scissors, Search, Type, Users, Waves } from "lucide-react";
import type { BlogPost } from "../types";

export const batch65: BlogPost[] = [
  {
    slug: "podcast-rss-feed-distribution-basics",
    title: "RSS Feeds Still Drive Every Podcast Distribution",
    excerpt:
      "Your podcast RSS feed is the single source every app reads from. Get the tags right once and every directory updates itself with no extra work.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "The RSS feed is the file that every podcast app checks for new episodes. When you publish, you update that file and the directories come to you. Nothing about distribution works until the feed is clean.",
          "Most hosts generate this feed for you, so the work is really about the fields inside it. Title, description, artwork, and enclosure URL are the parts that matter. If one is wrong, the whole listing can break.",
        ],
      },
      {
        heading: "What the feed actually contains",
        paragraphs: [
          "An RSS feed is a list of items wrapped in channel details. The channel holds the show title, artwork, and owner email. Each item holds one episode with its audio link, duration, and publish date.",
          "Apps do not store your episodes. They read the feed and pull what it points to. That is why changing an old episode description can update it in some apps and not others, depending on how often they refresh.",
          "Refresh times vary. Some apps check every few hours, others may take a day. This lag confuses people who expect every change to appear the moment they save it.",
        ],
      },
      {
        heading: "Tags that break listings",
        paragraphs: [
          "The enclosure URL must point straight to the audio file, not a page. A redirect that works in a browser can still fail inside a player.",
          "Artwork needs to be square, in the correct size range, and served over HTTPS. Mixed protocol artwork shows as a gray box in some apps.",
          "Episode GUIDs should never change. If they do, apps treat old episodes as new and can push them back into subscriber feeds.",
        ],
      },
      {
        quote:
          "Treat the feed like the product page for every episode, because for most apps that is exactly what it is.",
      },
      {
        heading: "Check your feed before you submit",
        paragraphs: [
          "Paste your feed URL into a validator before you send it anywhere. Fix the errors it reports, then submit to each directory.",
          "Read the feed the way an app would. If a field is missing or looks odd to you, it will look odd to a listener too.",
          "Keep a copy of the feed URL somewhere you can find it. Every directory asks for it, and you will need it again when you move hosts.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The RSS feed is the source every podcast app reads, so fix it first.",
          "Point enclosures straight at audio files and keep artwork square and secure.",
          "Never change episode GUIDs or old items can reappear as new.",
          "Validate the feed and keep its URL handy for every directory.",
        ],
      },
    ],
  },
  {
    slug: "podcast-directory-submission-checklist",
    title: "A Podcast Directory Submission Checklist That Works",
    excerpt:
      "Submitting a podcast to every major directory takes one afternoon. Skip a step at launch and you lose weeks of listeners before anyone tells you.",
    date: "2024-05-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Directory submission is the step that puts your show in front of listeners. The big names are Apple Podcasts, Spotify, and YouTube Music, and the rest reach smaller but real audiences. Submit everywhere your show can live.",
          "Most directories pull from your RSS feed, so you submit that feed once per platform. The work is mostly filling out forms and confirming ownership.",
        ],
      },
      {
        heading: "Start with the big directories",
        paragraphs: [
          "Apple Podcasts is still the index many other apps borrow from, so start there. Spotify accepts a feed directly and has its own flow. YouTube Music now takes audio feeds too.",
          "After those, add Amazon Music, Pocket Casts, Overcast, and Podcast Addict. Each one is a short form and a confirmation email.",
          "Some tools offer one submission that pushes to many directories. Read what they cover before paying, because the list changes over time.",
        ],
      },
      {
        heading: "Get your details ready first",
        paragraphs: [
          "Have the show title, a short description, a long description, and your category choices written down before you start. Retyping them fifteen times invites typos.",
          "Pick categories carefully. They drive some recommendation features, and they are a pain to change later.",
          "Keep a spreadsheet of which directories you submitted to and when. When an episode fails to appear somewhere, this log saves you guessing.",
        ],
      },
      {
        heading: "Confirm ownership and watch for errors",
        paragraphs: [
          "Apple may ask you to prove you own the feed by sending a code to the email listed in it. Make sure that address is one you can open.",
          "After submission, search each app for your show and play an episode. A listing that exists but will not play is worse than no listing.",
          "Approval can take from hours to a couple of weeks. Do not resubmit in a panic, since duplicates cause problems.",
        ],
      },
      {
        quote:
          "Submitting to one directory is easy. Submitting to all of them and knowing your show works in each is the real job.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Submit your feed to Apple, Spotify, and YouTube Music first, then the smaller apps.",
          "Write your show details once and reuse them to avoid typos.",
          "Confirm feed ownership and test playback in each app.",
          "Keep a log of submissions so missing episodes are easy to trace.",
        ],
      },
    ],
  },
  {
    slug: "podcast-clip-strategy-social-video",
    title: "Turn Every Podcast Episode Into Social Video Clips",
    excerpt:
      "One podcast episode holds a dozen short clips. Cutting them for social video gives each idea a second life and sends new listeners back to the full show.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Clips are the cheapest way to reach people who will never search for a podcast. A single strong moment can travel on its own and carry a link back to the full episode.",
          "Think of the episode as raw material rather than a finished product. The best clips are self-contained, so they make sense without the surrounding hour.",
        ],
      },
      {
        heading: "Find moments that stand alone",
        paragraphs: [
          "A good clip has a beginning, a point, and an end inside thirty to sixty seconds. If a viewer needs the previous five minutes to follow it, cut a different moment.",
          "Look for strong opinions and surprising numbers. Quick stories work too, because the emotion carries the weight even when the setup is thin.",
          "One episode usually yields eight to fifteen usable clips. Do not force a weak moment just to hit a daily posting goal.",
        ],
      },
      {
        heading: "Reformat for vertical video",
        paragraphs: [
          "Take the audio and put a face on the screen. A talking-head clip with captions holds attention better than a static image over a waveform.",
          "Burn captions into the frame. Most social video plays muted, so silent text is doing the work of sound.",
          "Keep the full episode as the payoff. End the clip with a clean line that points people to where they can hear the rest.",
        ],
      },
      {
        quote:
          "A clip is not a trailer. It is a complete thought that happens to sit inside a longer one.",
      },
      {
        heading: "Publish on a schedule you can keep",
        paragraphs: [
          "Do not dump twenty clips the day an episode drops and then go quiet for a week. Spread them out and let each one find its audience.",
          "Match the clip to the platform. A conversational moment can run longer on YouTube, while the same moment may need tighter pacing elsewhere.",
          "Watch which clips get watched to the end. Those moments tell you what your audience wants more of, and you can steer future episodes toward them.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat each episode as raw material for eight to fifteen self-contained clips.",
          "Pick moments that make sense without the surrounding conversation.",
          "Add captions and a talking head for vertical video.",
          "Publish on a steady schedule and use clip performance to guide future episodes.",
        ],
      },
    ],
  },
  {
    slug: "podcast-seo-episode-titles-show-notes",
    title: "Podcast SEO for Episode Titles and Show Notes",
    excerpt:
      "Podcast SEO comes down to titles and show notes people actually search for. Write both with the words your audience types, not the words you like.",
    date: "2024-12-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Episode titles and show notes are the two places podcast SEO usually works. Titles get read by apps and search engines, while notes give those systems more words to match against a query.",
          "The rules are plain. Use the words a listener would type, put the most important phrase early, and write for a human before a crawler.",
        ],
      },
      {
        heading: "Write titles people search for",
        paragraphs: [
          "A title should name the topic, not the episode number. \"Episode 47\" tells a search engine nothing and tells a new listener less.",
          "Put the main phrase in the first few words. A guest name can follow, but the subject comes first.",
          "Avoid clever titles that hide the point. If someone cannot tell what the episode is about from the title alone, rewrite it.",
        ],
      },
      {
        heading: "Show notes that add real words",
        paragraphs: [
          "Show notes are not a place to paste a transcript and walk away. A short summary at the top does more for search than a wall of raw text.",
          "List the topics and names mentioned in the episode. These are the terms that connect your page to someone's query.",
          "Add timestamps so listeners can jump to a section. They also give search engines structure to read.",
        ],
      },
      {
        heading: "Transcripts help but are not the whole answer",
        paragraphs: [
          "A full transcript is useful for accessibility and for matching long-tail queries. Post it below the summary rather than instead of it.",
          "Check that auto transcripts have the right names. A guest whose name is spelled wrong five times will not surface for searches on that name.",
          "Link to anything you mention in the episode, whether that is a book, a tool, or another episode. Internal links keep people on your site.",
        ],
      },
      {
        quote:
          "Search engines cannot listen to your episode. Titles and notes, plus a transcript, are how you tell them what it was about.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead titles with the phrase listeners actually search for.",
          "Write a short summary before any transcript in the show notes.",
          "List guest names, topics, and timestamps to add searchable terms.",
          "Fix name errors in transcripts so guests surface in search.",
        ],
      },
    ],
  },
  {
    slug: "podcast-cross-promotion-guest-swaps",
    title: "Cross-Promotion Swaps That Grow Podcast Audiences",
    excerpt:
      "A podcast cross-promotion swap puts your show in front of another host's audience, and it costs nothing but an introduction and a shared clip.",
    date: "2025-03-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Cross-promotion is trading introductions with another host so each show meets the other's listeners. You appear on their feed, they appear on yours, and both audiences get a reason to sample something new.",
          "It works because the trust is borrowed. A listener who already likes one host will give a recommendation from that host more weight than an ad.",
        ],
      },
      {
        heading: "Pick shows that fit, not shows that are big",
        paragraphs: [
          "The best partner is not the largest show in your niche. It is a show whose audience would plausibly like yours and whose host you can actually reach.",
          "Look for similar length and similar tone with overlapping topics, without being a direct clone. Two shows that are too alike compete for the same attention.",
          "Send a short, specific pitch. Say what you liked about a recent episode and propose a concrete swap, not a vague idea to collaborate someday.",
        ],
      },
      {
        heading: "Make the swap actually mutual",
        paragraphs: [
          "A common mistake is one host promoting hard while the other barely mentions the deal. Agree on what each side will publish and when.",
          "Record a short promo or a full guest spot. Pick whichever fits your format and commit to running it in a real episode, not a buried mention.",
          "Swap links in your show notes and a pinned post. Small placements add up when both sides do them.",
        ],
      },
      {
        quote:
          "Borrowed trust is the whole point of a swap. If neither host risks a real recommendation, nothing moves.",
      },
      {
        heading: "Measure whether it worked",
        paragraphs: [
          "Watch new subscriber spikes in the days after the partner publishes. A promo with no following bump tells you the fit was wrong.",
          "Ask the partner for honest feedback. If their audience did not respond, the topic may not travel across shows.",
          "Keep a short list of hosts who delivered results. Repeat swaps with them beat chasing a new partner every month.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Trade placements with shows whose audience plausibly overlaps yours.",
          "Pitch with a specific compliment and a concrete proposal.",
          "Agree on what each side publishes so the swap stays mutual.",
          "Track subscriber spikes and repeat swaps that actually delivered.",
        ],
      },
    ],
  },
  {
    slug: "podcast-distribution-analytics-metrics",
    title: "Which Podcast Distribution Channels Actually Deliver",
    excerpt:
      "Podcast analytics can tell you which apps and channels bring listeners and which just sit there. Read the right numbers and move your effort.",
    date: "2025-07-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Podcast analytics show where plays come from, but the raw total hides more than it reveals. Two shows can post the same download count while one grows an audience and the other just cycles the same people.",
          "The useful question is not how many downloads you got. It is which channels brought new listeners who stuck around.",
        ],
      },
      {
        heading: "Know what each number means",
        paragraphs: [
          "Downloads are not listeners. One person can trigger several downloads across devices and apps, which inflates the count.",
          "Unique listeners and follower growth are closer to the truth, though not every app reports them the same way.",
          "Completion rate tells you whether people actually heard the episode. A high download count with a low completion rate means the promise did not match the content.",
        ],
      },
      {
        heading: "Compare channels fairly",
        paragraphs: [
          "Apple, Spotify, and YouTube each report in their own dashboard with their own rules. Do not expect the tiles to match.",
          "Look at trends over a month rather than a single day. Daily swings are noise, while a slow climb or decline is a signal.",
          "Separate organic discovery from your existing subscribers. A channel that only reaches people who already follow you is not growing anything.",
        ],
      },
      {
        quote:
          "Downloads measure interest in a moment. Growth measures whether the show earned a place in someone's week.",
      },
      {
        heading: "Turn numbers into action",
        paragraphs: [
          "If one app drives most new listeners, double down there with better artwork and a pinned trailer. If another app sends traffic that never completes an episode, stop treating it as a priority.",
          "Test one change at a time so you can tell what moved the number. Changing artwork, title, and cadence together teaches you nothing.",
          "Cut channels that consume time without adding listeners. Distribution is a budget, and attention is the currency.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat downloads as a rough signal, not a listener count.",
          "Compare follower growth and completion rate across apps.",
          "Read trends over weeks, not single days.",
          "Cut channels that bring no new listeners and reinvest the time.",
        ],
      },
    ],
  },
  {
    slug: "podcast-email-list-own-distribution",
    title: "Build an Email List to Own Podcast Distribution",
    excerpt:
      "An email list is the one podcast distribution channel you control. Platforms can change their rules, but a list of listeners is yours to keep.",
    date: "2025-10-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "An email list turns a podcast from a channel you rent into an audience you own. Apps control who sees your episode, but nobody can take your subscribers away.",
          "Newsletter signups are slower than follows. That slower pace is exactly why the list lasts when a platform changes its algorithm or shuts down.",
        ],
      },
      {
        heading: "Give people a reason to subscribe",
        paragraphs: [
          "A listener already gets your episodes in an app. The email has to offer something the feed does not.",
          "Use extended show notes, bonus context, or a heads-up about an episode that is coming. The pitch should be specific, not just \"join my newsletter.\"",
          "Place the ask where people finish an episode. That is the moment they are most likely to want more.",
        ],
      },
      {
        heading: "Collect emails without being annoying",
        paragraphs: [
          "One clear link in the show notes and one spoken mention per episode is usually enough. Repeating the ask five times wears people down.",
          "Send people to a simple page that explains what they get. A page that only says \"subscribe\" gives them no reason to type an address.",
          "Never buy a list or add people who did not opt in. A big list of strangers is not an audience, and it can hurt your sending reputation.",
        ],
      },
      {
        quote:
          "Every platform you publish to is borrowed reach. The list is the only part of distribution you carry with you.",
      },
      {
        heading: "Send emails people open",
        paragraphs: [
          "Send on a rhythm you can keep, whether that is weekly or monthly. A predictable schedule beats bursts followed by silence.",
          "Write subject lines that name the actual content. Curiosity tricks work once and then train people to ignore you.",
          "Track opens and clicks to see which topics land. Use that feedback to shape future episodes, since the list and the show feed each other.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use email as the distribution channel you fully control.",
          "Offer something beyond the feed to earn a signup.",
          "Ask once per episode and point to a page that explains the value.",
          "Send on a steady schedule and let click data guide future episodes.",
        ],
      },
    ],
  },
  {
    slug: "podcast-transcripts-search-accessibility",
    title: "Podcast Transcripts That Help Search and Access",
    excerpt:
      "A podcast transcript does two jobs at once. It makes your show searchable and it opens the door for people who cannot hear the audio at all.",
    date: "2026-01-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "A transcript is a text version of everything said in an episode, and it serves listeners and search engines at the same time. Search cannot index audio, so without text your words are invisible to it.",
          "Accessibility is the other half. Deaf and hard of hearing listeners, along with anyone in a loud place, can read what they could not hear.",
        ],
      },
      {
        heading: "How transcripts help discovery",
        paragraphs: [
          "Search engines match text to queries. A transcript turns an hour of spoken words into something a crawler can read.",
          "Long-tail questions that never appear in your title can live inside the transcript. Someone searching that exact phrase can find your episode.",
          "Transcripts also feed featured snippets and AI summaries, since those tools work from text.",
        ],
      },
      {
        heading: "Accuracy matters",
        paragraphs: [
          "Auto transcripts are a starting point, not a finished product. They mangle names, jargon, and accents, and those errors hide the very terms you want found.",
          "Correct guest names first, since those are high-value search terms and the easiest errors to spot.",
          "Fix recurring words like product names or acronyms. A single pass through the transcript removes most of the damage.",
        ],
      },
      {
        heading: "Publish transcripts usefully",
        paragraphs: [
          "Put a shorter summary above the full transcript so a reader gets the gist without scrolling. The transcript supports the summary, not the other way around.",
          "Format with speakers and clear paragraphs. A wall of unbroken text is hard to read and hard for machines to parse.",
          "Keep transcripts on your own site when possible. A third-party page you do not control may not pass the benefit back to you.",
        ],
      },
      {
        quote:
          "If search cannot read your episode, it cannot recommend it. A transcript is how you hand search engines the words you already said.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Post transcripts to make audio searchable and accessible.",
          "Correct guest names and recurring terms before publishing.",
          "Lead with a short summary, then the full transcript below.",
          "Host transcripts on your own site to keep the search value.",
        ],
      },
    ],
  },
  {
    slug: "podcast-monetization-distribution-reach",
    title: "Podcast Monetization Depends on Distribution Reach",
    excerpt:
      "Podcast monetization follows distribution. Sponsors pay for reach, so the shows that get listed everywhere and grow an audience earn more over time.",
    date: "2026-05-16",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Money in podcasting tracks distribution. Sponsors buy attention, and attention comes from being present in the apps people already use.",
          "A show with a loyal but undiscovered audience earns less than a smaller show that shows up on every platform. The difference is reach, not quality.",
        ],
      },
      {
        heading: "What sponsors actually buy",
        paragraphs: [
          "Sponsors buy download numbers, listener geography, and the trust a host has with the audience. Your media kit should state these plainly.",
          "A show that only reaches one country limits which sponsors fit. Broad distribution widens the list of brands that can work with you.",
          "Niche shows still earn well. A small audience with a specific interest can command higher rates than a large general one, because the ad fits.",
        ],
      },
      {
        heading: "Build reach before chasing deals",
        paragraphs: [
          "Do not pitch sponsors with a low download count and a promise to grow. Spend the first year submitting to directories, publishing on a schedule, and promoting clips.",
          "Growth from cross-promotion and clips compounds. Each new listener makes the next sponsor conversation easier.",
          "Keep your back catalog clean and searchable. Advertisers look at the whole show, not just the latest episode.",
        ],
      },
      {
        quote:
          "Advertisers do not fund potential. They fund the audience you can prove you have already reached.",
      },
      {
        heading: "Turn reach into revenue",
        paragraphs: [
          "Once you have consistent numbers, price your spots by what comparable shows charge. Undercharging signals weak reach to buyers.",
          "Add more formats as you grow, from host-read ads to subscriptions and live events. Each one builds on the same audience.",
          "Track which sponsor spots perform so you can sell the next round with evidence instead of hope.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sponsors pay for proven reach, so distribute before you pitch.",
          "State downloads, geography, and audience fit in a clear media kit.",
          "Grow with clips and swaps so each sponsor talk gets easier.",
          "Track ad performance and price spots against comparable shows.",
        ],
      },
    ],
  },
  {
    slug: "podcast-video-youtube-distribution",
    title: "Putting Your Video Podcast on YouTube the Right Way",
    excerpt:
      "YouTube is a podcast distribution channel that rewards video, not just audio. Recording with the camera in mind changes how the show performs there.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "YouTube treats a video podcast as video first. If you only upload a static image over audio, the platform has little reason to recommend it.",
          "The fix is simple. Record the conversation with cameras, use the footage to make clips, and let the full episode live on the same channel.",
        ],
      },
      {
        heading: "Record for the screen, not just the mic",
        paragraphs: [
          "Frame every speaker so their face fills enough of the picture to read on a phone. Wide shots of a room lose people on small screens.",
          "Light the faces and avoid backlight. A window behind the guest turns them into a silhouette, and no amount of audio quality fixes that.",
          "Capture clean audio separately. YouTube viewers forgiving a plain background will not forgive muddy sound.",
        ],
      },
      {
        heading: "Think in clips before you publish",
        paragraphs: [
          "Long episodes rarely get suggested on their own. Short clips pulled from the conversation are what bring new people to the channel.",
          "Cut vertical versions for social and a horizontal highlight for YouTube Shorts. Each platform gets a version built for how it is watched.",
          "Use a title and thumbnail that name the topic, not the episode number. Browse traffic ignores numbers.",
        ],
      },
      {
        heading: "Structure the channel as a library",
        paragraphs: [
          "Group full episodes and clips so a new viewer can find more of what they liked. Playlists do this better than a loose upload feed.",
          "Write descriptions that summarize each episode. YouTube search reads them, and so do people deciding whether to click.",
          "Keep a consistent schedule. Regular uploads tell the platform the channel is active and give returning viewers something to expect.",
        ],
      },
      {
        quote:
          "On YouTube, the audio is the content but the video is the cover. The cover decides whether anyone hears the content at all.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record with cameras and frame faces for small screens.",
          "Cut short clips to feed the channel and social platforms.",
          "Name topics, not episode numbers, in titles and thumbnails.",
          "Use playlists and descriptions to build a findable library.",
        ],
      },
    ],
  },
];
