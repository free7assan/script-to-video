import {
  Film,
  Scissors,
  BookOpen,
  Feather,
  Layers,
  Repeat,
  Compass,
  Workflow,
  Search,
  BarChart3,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch128: BlogPost[] = [
  {
    slug: "repurpose-one-video-many-formats",
    title: "How to Turn One Video into Many Content Formats",
    excerpt:
      "One recording can feed a whole week of posts. Here is how to repurpose a single video into clips, articles, and emails without starting over.",
    date: "2029-01-02",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "workflow", "format"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "One recording can become a dozen pieces of content if you treat the transcript as the raw material and the video as only one output. The trick is to map each asset to a single idea so you never water down the point.",
          "Most creators upload the video and stop there. That leaves the strongest parts of the work unused, and then they wonder why a good episode disappears from view in two days.",
          "I learned this the slow way. For a year I published one video a week and treated each one as finished the moment it went live. The archive grew, and almost none of it worked for me a second time.",
        ],
      },
      {
        quote:
          "The video is not the product. The idea inside it is the product, and the video is only one way to deliver that idea.",
      },
      {
        heading: "Mine the transcript first",
        paragraphs: [
          "Pull the full transcript before you touch a timeline. Reading the words exposes the passages that carry a clean argument, and those passages are the ones worth exporting. Editing decisions get easier when you can see the sentences instead of scrubbing for them.",
          "Highlight any moment that states a complete thought in three sentences or less. Those highlights become your queue of future assets, and the list usually gives you more material than the video itself can hold.",
          "The folder matters as much as the habit. Store transcripts in one place with a consistent name so future-you can find a passage without reopening the video. When I broke that rule for a month, my output dropped to almost nothing.",
        ],
      },
      {
        heading: "Give every format one job",
        bullets: [
          "Shorts take the single sharpest claim and cut everything that does not support it.",
          "Blog posts keep the argument and rewrite the examples so they read without a screen.",
          "Newsletters lead with the lesson and send readers to the video only when it adds something.",
          "Audio keeps the conversation but trims the visual references that stall a listener.",
        ],
        paragraphs: [
          "When a format carries two jobs, the audience senses the overload and stops. One idea per asset keeps every version clear, and clarity is what makes a small video feel bigger than its runtime.",
          "Ask what a stranger would repeat after seeing the asset. If they cannot summarize it in one line, it is carrying too much. Split it in two and give each part its own format.",
        ],
      },
      {
        heading: "Where this quietly breaks down",
        paragraphs: [
          "Repurposing fails when the source idea was thin to start with. No format can rescue a video that never said anything, and spreading a vague point across five channels only spreads the fog further.",
          "A strong source is the real input. Everything else is distribution, and distribution multiplies whatever quality you started with, for better and for worse.",
        ],
      },
      {
        heading: "Run the pass every week",
        paragraphs: [
          "Set aside one hour a week to work through the highlight list you built. Pick the two strongest passages, choose two formats for each, and ship them. This rhythm beats the occasional marathon session because it keeps the source video visible long after launch day.",
          "Over a month, that habit turns four videos into a small library. None of it required new filming, only a decision to look again at what you already made and treat it as stock rather than a finished artifact.",
          "Keep the sessions short on purpose. An hour of focused work beats an afternoon you keep postponing, and the shorter block makes the whole task feel repeatable week after week.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The transcript, not the timeline, is where repurposing actually starts.",
          "Each asset should carry exactly one idea from the source video.",
          "Exporting more clips is not the goal, a clearer message per clip is.",
          "Reusing footage is fine, reusing a muddled point is not.",
          "A running highlight list outlives any single platform or tool.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-long-form-to-shorts",
    title: "Turning Long-Form Video into Shorts That Hold Up",
    excerpt:
      "Long clips and shorts pull in opposite directions. These rules help you repurpose long-form video into shorts that still make sense even alone.",
    date: "2029-01-04",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "A short taken from a long video fails when it assumes the viewer watched the long video. The fix is to rebuild the opening so the clip stands on its own, then let the rest of the footage carry the payoff.",
          "I have cut hundreds of shorts from hour-long recordings, and the ones that travel are never the ones I expected. They are the ones I re-framed instead of the ones I simply trimmed.",
          "That gap between expectation and result is the whole lesson. You cannot feel which moment will land, so you build a frame that lets any strong moment land.",
        ],
      },
      {
        heading: "Find the self-contained moment",
        paragraphs: [
          "Scan for a passage that names its own subject in the first sentence. If the speaker says what the point is before they elaborate, that passage is a candidate. If they start with a pronoun pointing back at something you cut, keep looking.",
          "A strong candidate also resolves inside the clip. A short that ends on a question you never answer reads as a tease, and a tease only works when the viewer already trusts you.",
          "The best moments often sit inside a longer explanation that gives them meaning. That is exactly why you rebuild the frame instead of trusting the original edit order.",
        ],
      },
      {
        quote:
          "A short is not a smaller version of the long video. It is a separate argument that happens to borrow the footage.",
      },
      {
        heading: "Rebuild the first three seconds",
        paragraphs: [
          "Record a new opening line if you have to. Two sentences of setup can rescue twenty seconds of good material, and that trade is almost always worth it. The viewer needs to know the subject before they can care about the conclusion.",
          "Then trim ruthlessly after the hook. Long videos reward patience, and shorts punish it. Every second that does not move the point forward hands the viewer a reason to swipe away.",
          "The hook does not need to be loud. It needs to be specific, because a specific line gives the viewer a reason to expect a specific payoff.",
        ],
      },
      {
        heading: "Match the pacing to the feed",
        paragraphs: [
          "Shorts platforms reward a faster cut rhythm than a channel page does. Tighten the gaps, remove the pauses, and let the idea arrive before the viewer's thumb decides. The content can stay calm even when the edit moves quickly.",
          "That pace has a limit. When you cut so hard that the reasoning disappears, you get motion without meaning. Keep the sentences that carry the logic and drop the ones that only decorate it. Most clips need less speed than the editor assumes.",
        ],
      },
      {
        heading: "Keep a shorts backlog",
        paragraphs: [
          "Every long video usually hides three or four possible shorts. Log them as you edit the long version so you are never staring at a blank timeline later. A backlog turns a slow week into a scheduled one.",
          "When you post, stagger the clips so they do not compete for the same attention window. Two shorts about the same topic released on the same day split the same audience instead of adding to it, so name the series and space the releases out.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose passages that name their subject in the first sentence.",
          "Resolve the idea inside the clip instead of ending on a tease.",
          "Rewrite the opening when the original assumes too much context.",
          "Cut from the middle first, not from the hook.",
          "Log future shorts while you still have the long edit open.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-video-to-blog-post",
    title: "Repurposing a Video into a Blog Post People Read",
    excerpt:
      "A video transcript is already a draft. This guide shows how to repurpose a video into a blog post that people actually finish reading to the end.",
    date: "2029-01-06",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "blogging", "format"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A transcript is a first draft, not an article. To repurpose a video into a post, strip the spoken rhythm, add the structure a reader expects, and rewrite the examples so they work without a screen.",
          "I have published transcripts unedited exactly once. It read like a conversation no one could hear, and the page views proved the point within a week.",
          "The rewrite is not busywork. Clean writing is what lets a good spoken idea survive on a page where nobody can hear your tone.",
        ],
      },
      {
        heading: "Rework speech into sentences",
        paragraphs: [
          "Spoken language carries filler that looks broken in print. Cut the false starts, the repeated phrases, and the verbal nods that kept the camera rolling. What remains is a cleaner argument with far fewer words.",
          "Then merge the fragments into real sentences. A reader cannot hear the breath between your lines, so every transition has to be visible on the page.",
          "Read the result out loud once more. If a sentence trips your tongue, it will trip a reader's eye too. Rewriting for the ear and rewriting for the eye are closer than people assume.",
        ],
      },
      {
        heading: "Add what the video could only show",
        paragraphs: [
          "If the video relied on a screen share, describe what was on screen in plain language. If it leaned on tone, supply the context that carries tone in writing. A reader who never pressed play should still follow the logic without guessing.",
          "Headings do most of this work. They break a long argument into steps, and they let a skimmer find the part they came for. Use them often and make each one promise something specific. A vague heading like the details gives a reader no reason to slow down.",
          "The written page also has room to go deeper than the video needed to. Use that space to answer the follow-up question a viewer would have asked in the comments.",
        ],
      },
      {
        quote:
          "Readers skim before they commit. Give them a structure worth skimming and they will stay for the details.",
      },
      {
        heading: "Give it a headline that earns the click",
        paragraphs: [
          "The video title rarely works as an article headline. Video titles lean on curiosity and faces, while search readers want the outcome stated plainly. Rewrite the headline so it names the promise and the audience.",
          "A useful pattern is to state the result first, then the constraint. Plain headlines with a clear payoff outperform clever ones on a page where the reader has no thumbnail to guide them.",
        ],
      },
      {
        heading: "Publish with intent",
        paragraphs: [
          "Link the post to the video and the video to the post, but do not make one a summary of the other. Each should stand alone, because readers arrive from search, from email, and from social at different moments.",
          "Update the post when the video ages. A blog page can be corrected in a minute, while a recording is frozen the day you upload it. That flexibility is the quiet advantage of turning video into words.",
          "Keep the depth honest. Padding a thin idea into a long article reads worse than a short one that respects the reader's time.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the transcript as raw material, never as a finished post.",
          "Cut spoken filler and rebuild the remaining lines into full sentences.",
          "Describe anything the audience could only see on screen.",
          "Use headings so a reader can navigate without listening.",
          "Rewrite the headline for search intent, not for a thumbnail.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-video-to-newsletter",
    title: "Turning a Video into a Newsletter Readers Finish",
    excerpt:
      "A newsletter is not a video summary. Learn how to repurpose a video into an email that earns the click and still reads well inside the inbox.",
    date: "2029-01-09",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "newsletter", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "A good newsletter does one thing the video cannot: it reaches readers who will never press play. To repurpose a video into email, drop the script and lead with the single most useful sentence you said.",
          "I treat every email as a standalone note. If it only makes sense after watching the video, it is not a newsletter, it is a reminder to watch one.",
          "That standard sounds strict until you receive a few emails that fail it. The difference between a note and a nudge is obvious the moment you are the reader.",
        ],
      },
      {
        heading: "Lead with the lesson",
        paragraphs: [
          "Your first line should deliver the value before you mention the video. Readers decide in the preview pane whether to open at all, so the subject and the opening sentence have to do the heavy lifting on their own. If the value only shows up after a paragraph of throat clearing, most readers will never reach it.",
          "After the lesson, a link to the video becomes an invitation rather than a requirement. That order respects the reader and still sends the curious to the full recording.",
        ],
      },
      {
        heading: "Trim the transcript hard",
        paragraphs: [
          "Email rewards brevity more than any other format. Take the core argument, cut every supporting story that needs a visual, and keep one example that works in plain text. If a passage needs a diagram, it belongs in the video, not the inbox.",
          "I usually get three hundred words out of a forty-minute recording. The rest of the transcript stays in a folder for future issues, which turns one video into a small series over time.",
          "Do not pad the email to make it feel substantial. A short note with one clear idea beats a long one that circles the point, and readers forward useful messages while ignoring bloated ones. Write the issue you would want to receive, then stop when the idea is complete.",
        ],
      },
      {
        quote:
          "The email should be worth reading even if the reader never clicks. If it is not, the click was never the point.",
      },
      {
        heading: "Build a cadence, not a blast",
        paragraphs: [
          "One video does not have to become one email. Split a strong episode across two or three issues and let each carry its own idea. Readers tolerate frequency far better than they tolerate thin value.",
          "Track which issues earn replies rather than which earn clicks. Replies tell you what the audience actually wants from you, and that signal is worth more than any open rate. I keep a running note of every reply and reread it before drafting the next issue, because the audience usually tells me exactly what to write about.",
        ],
      },
      {
        heading: "Write the subject line last",
        paragraphs: [
          "Draft the body first, then pull the most specific line out of it for the subject. Specific subjects beat clever ones because they tell the reader exactly what they will get.",
          "Avoid vague teasers you cannot deliver on. A subject that oversells trains readers to distrust the next one, and trust is the only currency a newsletter really has. Unsubscribes rarely come from one bad email. They come from a pattern where the reader stops expecting value.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Deliver the lesson before you ask for a click.",
          "Cut any passage that needs a screen to make sense.",
          "Keep one example that survives as plain text.",
          "Save the unused transcript for later issues instead of deleting it.",
          "Write the subject line from the body, not before it.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-clips-without-losing-context",
    title: "Cutting Clips Without Losing the Story Around Them",
    excerpt:
      "A clip ripped out of context loses its meaning. These repurpose habits help you cut clips from a long video without breaking the story around them.",
    date: "2029-01-12",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "clips", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A clip loses the viewer when it starts before the setup or ends before the payoff. The rule I follow is simple: a clip must contain its own beginning, middle, and end, even if each part is only a few seconds long.",
          "This is harder than it sounds, because the most quotable lines often sit in the middle of a longer explanation that gives them meaning.",
          "Once you accept that, the job changes. You are no longer trimming a video, you are rebuilding a small one.",
        ],
      },
      {
        heading: "Add the missing setup",
        paragraphs: [
          "When the line needs context, record a one-sentence intro and place it before the clip. That tiny frame costs you three seconds and buys back the entire meaning of the moment. Viewers who never saw the long video will not notice the seam.",
          "You can also use a short on-screen line of text, but spoken setup tends to feel more natural and survives better when someone watches with the sound off.",
          "The setup does not have to repeat the whole premise. It only has to name the subject so the payoff lands. One clear sentence is usually enough to carry a viewer through a thirty-second clip.",
        ],
      },
      {
        quote:
          "A clip is a small story. If you cut out the setup or the payoff, you are left with a fragment that only you can decode.",
      },
      {
        heading: "End on the resolution",
        paragraphs: [
          "Trim past the applause and stop exactly where the thought lands. Extra seconds after the payoff invite the viewer to leave before the loop restarts. The cleanest clips end on the sentence that answers the question they opened with.",
          "If the resolution is buried, you have two choices: extend the clip to include it, or pick a different moment. Never ship a clip that raises a question it never closes.",
        ],
      },
      {
        heading: "Mind the platform frame",
        paragraphs: [
          "Once the meaning is intact, check the shape. Cropping a wide shot into a vertical frame can cut out the very gesture that made the moment work. Reframe so the speaker and the point stay visible together.",
          "Captions help here. A viewer scrolling with sound off still gets the setup if the words are on screen, and captions also fix names and numbers that audio alone tends to blur. That small layer turns a silent scroll into a fair chance for the clip.",
        ],
      },
      {
        heading: "Review before you publish",
        paragraphs: [
          "Watch each clip with fresh eyes and pretend you have never seen the long video. If any sentence confuses you, a stranger will be lost. That habit catches most context failures before they reach an audience. It takes ten seconds and saves a bad upload.",
          "Keep the original timestamps in your notes so you can return to the source later. When a clip performs well, the surrounding passage is often the next asset worth cutting. A short list of those timestamps becomes a queue you can work through on a slow afternoon.",
          "Before a clip leaves your editing app, run one short checklist: does it name its subject, resolve its question, and fit the frame. Three yes answers and it is ready.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Every clip needs its own beginning, middle, and end.",
          "Add a one-sentence spoken intro when the source assumes context.",
          "Stop the clip the moment the thought resolves.",
          "Prefer a different moment over a fragment that never closes.",
          "Use captions so the setup survives with the sound off.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-older-content",
    title: "How to Repurpose Older Content Without Repeating",
    excerpt:
      "Old videos still hold ideas worth resurfacing. Learn how to repurpose older content without repeating yourself or boring your most regular viewers.",
    date: "2029-01-15",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "library", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Old content is not dead content. To repurpose it well, pick pieces that still answer a question people ask, then update the examples so the idea feels current even though the recording is old.",
          "I revisit my first year of videos every few months, and roughly one in five still holds up with a light edit and a new frame.",
          "The other four are not failures. They are simply tied to a moment that has passed, and part of the skill is knowing which is which.",
        ],
      },
      {
        heading: "Audit for evergreen value",
        paragraphs: [
          "Sort your back catalog by whether the core idea depends on a date, a price, or a tool version. Ideas about workflow and decisions age well, while anything that names a specific interface tends to rot fast.",
          "Mark the evergreen pieces and ignore the rest. Trying to revive time-sensitive content usually costs more effort than making something new, and the result still reads as stale.",
          "Do the audit in one sitting and write the verdict down. A list of evergreen titles becomes your raw supply for slow weeks, and a written list is far easier to act on than a mental hunch. I sort that list by confidence so the safest candidates float to the top.",
        ],
      },
      {
        heading: "Update, do not just reupload",
        paragraphs: [
          "Add a current example, fix a claim that no longer holds, and cut the parts that only made sense at the time. A republished idea should offer a reason to watch again, and a better example is often that reason.",
          "When I revisit a video, I write down three things that changed since the original. That list becomes the spine of the new version and keeps it from feeling like a copy. If I cannot name three genuine changes, the idea probably should not return yet.",
        ],
      },
      {
        quote:
          "Repurposing old work is not recycling. It is editing what you knew then with what you know now.",
      },
      {
        heading: "Space out the returns",
        paragraphs: [
          "Do not resurface the same topic twice in a short window. Regular viewers notice repetition even when the footage is new, and the faster you cycle, the more it looks like a rerun.",
          "A calendar helps here. Six months between returns gives the idea time to feel fresh again, and it gives you time to gather better examples for the next pass. I mark the return date the day the original publishes so I never have to remember it.",
        ],
      },
      {
        heading: "Let retired work rest",
        paragraphs: [
          "Some videos should stay retired. If the topic has moved on or the advice could mislead someone today, quietly leave it alone. Not every old asset deserves a second life. A smaller list of good candidates beats a long list you never get around to using.",
          "When an old idea still works, resist the urge to film it again from scratch. A fresh frame, a corrected claim, and one new example often carry more weight than a full remake that costs a week.",
          "The judgment call is part of the craft. Revisiting work only pays when you can honestly say the new version is better than the old one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep ideas that survive without a date, a price, or a tool version.",
          "Update examples instead of reposting the original untouched.",
          "Note what changed since the first version and build the new one around it.",
          "Let time-sensitive videos stay retired.",
          "Leave room between returns so the topic feels fresh.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-cross-posting-rules",
    title: "Cross-Posting Rules That Keep Repurposing Clean",
    excerpt:
      "Cross-posting goes wrong when you dump the same file everywhere. These repurpose rules keep each platform feeling native and genuinely intentional.",
    date: "2029-01-18",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "distribution", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Cross-posting fails when the same file lands everywhere with no adjustment. To repurpose across platforms, change the frame, the length, and the opening line to match how people use each one.",
          "A vertical clip dropped onto a horizontal feed looks lazy, and viewers read lazy as a reason to keep scrolling. I would rather post nothing on a platform than post something that signals I did not bother to check.",
          "I keep a short list of platform quirks next to my export settings. It saves me from re-learning the same small rules every single week.",
        ],
      },
      {
        heading: "Adapt the shape first",
        paragraphs: [
          "Check the aspect ratio and safe zones before you upload anything. A caption that sat fine on one app often disappears behind the interface on another. Re-framing takes minutes and prevents a file from looking broken. It is the cheapest quality upgrade you can make.",
          "Once the shape fits, revisit the first line. The same hook that works on a professional network can feel stiff on a casual feed, so a small rewrite keeps the tone native. I often soften a formal opening or sharpen a playful one depending on where it is going.",
          "Sound matters too. Some feeds start muted, so any clip that depends on an opening sentence has to carry that meaning in text as well. Add a caption when the audio does the setup.",
        ],
      },
      {
        heading: "One platform, one primary format",
        paragraphs: [
          "Decide what each platform is actually for before you post. If one app is where you explain and another is where you entertain, the same video should not arrive looking identical on both.",
          "This does not mean making a fresh asset for every site. It means choosing which version belongs where, and being willing to skip a platform when the fit is weak. Restraint is part of the strategy, not a failure of effort.",
        ],
      },
      {
        quote:
          "Posting everywhere is not the same as being present everywhere. A weak fit on one platform can cost you more than staying quiet there.",
      },
      {
        heading: "Watch for cannibalization",
        paragraphs: [
          "When the same audience follows you in several places, identical posts compete for the same attention. Slight variation in the hook and the timing helps each version find its own moment. Small differences in wording can separate two posts that would otherwise cancel each other out.",
          "If two platforms overlap heavily, stagger the posts by a day. You lose nothing and you give the first version room to breathe before the second arrives. A shared audience will notice a duplicate post long before your analytics do.",
        ],
      },
      {
        heading: "Document your rules",
        paragraphs: [
          "Write down the size, tone, and caption rules for each platform once, then reuse the checklist forever. A short note saves you from re-deciding the same small things every week.",
          "Rules also make delegation possible. When someone else posts on your behalf, the checklist carries the judgment you would have applied yourself. Handing over the checklist is far easier than explaining your instincts in a hurry.",
          "Maintain a single master file for each piece and export every platform version from it. When the master changes, you know exactly which exports need to be redone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Re-frame for each platform before you publish, not after.",
          "Rewrite the opening line to match the tone of the feed.",
          "Assign each platform a primary format and respect it.",
          "Skip a platform when the fit is weak rather than forcing it.",
          "Write the rules down once so you stop re-deciding them.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-workflow",
    title: "A Repurposing Workflow You Can Run Every Week",
    excerpt:
      "A weekly repurpose workflow beats sporadic bursts of effort. Here is a simple routine for turning one recording into useful assets across the month.",
    date: "2029-01-21",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "workflow", "systems"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A repurposing workflow works when it fits inside a single sitting. Mine has four steps: transcribe, highlight, assign formats, and schedule. That is the whole system, and it takes about an hour once the recording exists.",
          "The point of a workflow is not to make you productive on paper. It is to remove the decisions that stop you from starting, so repurposing becomes something you do rather than something you plan.",
          "That distinction matters more than any tool choice. Tools change, and a habit built around a clear sequence survives the change.",
        ],
      },
      {
        heading: "Step one: transcribe",
        paragraphs: [
          "Get a clean transcript before you do anything else. It becomes the single source every other asset draws from, and it spares you from rewatching the video to find a quote you half remember.",
          "Keep transcripts in one folder with a clear naming pattern. When you cannot find last month's text, the workflow breaks at the worst possible moment, usually the week you most need a head start. A dated filename costs nothing and saves a scramble. It is a tiny convention with an outsized payoff.",
        ],
      },
      {
        heading: "Step two: highlight",
        paragraphs: [
          "Read the transcript once and mark complete thoughts. Do not judge them yet. At this stage you are gathering candidates, and a generous highlight list gives you more to choose from when the schedule gets thin.",
          "I aim for eight to twelve highlights per video. Some will never leave the list, and that is fine. The list is a buffer, not a to-do list you must clear.",
          "Mark the moment by timestamp as you go. When you return to cut or write, the timestamp saves you from searching the whole transcript again. That small habit is the difference between a five-minute edit and a twenty-minute hunt.",
        ],
      },
      {
        heading: "Step three: assign and schedule",
        paragraphs: [
          "Match each highlight to one format, then place it on a calendar with a date. Assigning without scheduling is how ideas pile up and go stale, so the date matters as much as the format does.",
          "Batch the actual production later. Deciding what to make and making it are two different jobs, and doing them at once is what makes repurposing feel exhausting and expensive. I plan on Monday and produce on Thursday, and the gap does most of the work for me.",
        ],
      },
      {
        quote:
          "A workflow you can finish in an hour will outproduce a perfect system you never start.",
      },
      {
        heading: "Step four: review and repeat",
        paragraphs: [
          "At the end of each month, look back at what you shipped and note which format carried your ideas best. Fold that lesson into the next cycle instead of starting from a blank page.",
          "The workflow improves through repetition, not redesign. Run the same four steps for a few months before you change anything, and let the evidence decide what to fix.",
          "Treat the weekly hour like a meeting you cannot move. When it becomes optional, it becomes the first thing you drop in a busy week, and the backlog grows faster than you can clear it. Put it on the calendar with a clear start and end.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the workflow to four steps so it can finish in one sitting.",
          "Transcribe once and draw every asset from that single source.",
          "Highlight generously, then filter when you schedule.",
          "Assign a format and a date together, or the idea will stall.",
          "Let repetition, not redesign, improve the system.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-avoid-duplicate-penalties",
    title: "Avoiding Duplicate Content Penalties When You Repurpose",
    excerpt:
      "Duplicate content worries stop many creators from repurposing. Here is how to repurpose work across sites without tripping duplicate content filters.",
    date: "2029-01-24",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "seo", "publishing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Search engines do not punish you for repurposing. They struggle when the same text appears in several places with no signal about which version is the original. The fix is to make the relationship between versions explicit.",
          "I have republished my own work for years, and the only trouble came from pages that competed with each other because nobody told the crawler where the source lived.",
          "Nothing about that problem is mysterious. It is a labeling issue, and labeling is easy once you decide to do it.",
        ],
      },
      {
        heading: "Designate a canonical page",
        paragraphs: [
          "Pick one home for each piece and point other versions at it with a canonical tag. That single line tells the search engine which page to rank and keeps the copies from splitting the credit. Deciding the home before you publish avoids the argument later.",
          "If you cannot set a canonical tag, link back to the original from the top of the copy. It is a weaker signal, but it still clarifies the relationship between the two pages.",
          "Keep a short record of which page is canonical for each piece. Once you publish across a few sites, that map is the only thing standing between clarity and a slow mess of competing URLs. I keep mine in the same file as my source list so the two never drift apart.",
        ],
      },
      {
        heading: "Rewrite instead of duplicating",
        paragraphs: [
          "The stronger move is to rewrite the piece for each home rather than copy the file. Different openings, different examples, and a different angle make the versions genuinely distinct, which removes the question entirely. A rewrite also forces you to notice which parts were never clear to start with.",
          "This is also better for readers. A version written for a community site should sound like a community post, not like a corporate page with the logo swapped. Readers notice the difference immediately.",
        ],
      },
      {
        quote:
          "There is no penalty for saying the same thing twice. There is a penalty for publishing two pages that fight over the same sentence.",
      },
      {
        heading: "Check before you post",
        paragraphs: [
          "Before publishing, search for a distinctive sentence from your draft. If a copy already ranks, decide whether the new version adds something worth indexing or should simply point back instead.",
          "This check takes a minute and prevents the slow drift where your own pages crowd each other out of the results. Repurposing should widen your reach, not split it. When in doubt, improve the original instead of publishing a near duplicate.",
        ],
      },
      {
        heading: "Keep a source map",
        paragraphs: [
          "As your library grows, maintain a simple list of every place a piece has appeared. When you update the original, you know exactly which copies need the same correction. The list also answers whether a piece has already been reused somewhere, which is easy to forget.",
          "Without that map, old versions quietly go out of date and start contradicting your newer work in public. A single document prevents a problem that is otherwise invisible.",
          "When you publish a new version, link to the original rather than hiding it. That tells search engines and readers where the idea began, and it keeps your own pages from competing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one canonical home for every piece you republish.",
          "Point the copies at the original with a canonical tag when possible.",
          "Rewrite openings and examples so each version stands apart.",
          "Avoid publishing near-identical pages that compete for one query.",
          "Keep a source map so updates reach every copy.",
        ],
      },
    ],
  },
  {
    slug: "repurpose-measure-results",
    title: "Measuring Repurpose Results Without Fooling Yourself",
    excerpt:
      "You cannot improve repurposing you never measure. Here is how to read the numbers and tell which repurpose bets truly deserve more of your time.",
    date: "2029-01-27",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["repurposing", "analytics", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "To measure repurposing, track each asset back to its source and compare formats on the same idea. Raw view counts mislead because platforms report differently, so the useful signal is which format moved an idea to more people.",
          "I stopped trusting a single vanity number after a clip with modest views drove more signups than a video with ten times the reach.",
          "That experience reshaped how I plan. I now ask what each asset is for before I judge how it did.",
        ],
      },
      {
        heading: "Compare formats, not platforms blindly",
        paragraphs: [
          "Group assets by the idea they came from, then look at how each format performed within that group. A blog post that brings steady search traffic may matter more than a clip with a short spike, even if the clip looks bigger on the day.",
          "Give each format enough time before you judge it. Search pages build slowly, while social posts peak fast and fade, so a week is too early to rank one against the other.",
          "Record the comparison in one place. A simple table of idea, format, and outcome beats a scattered set of screenshots you will never reopen. I add one row per asset and skim the table every month to spot the pattern.",
        ],
      },
      {
        heading: "Track the action, not just the audience",
        paragraphs: [
          "Decide what the repurposed asset is supposed to do before you post it. If a newsletter version exists to earn replies, measure replies. If a clip exists to send viewers to the long video, measure the clicks rather than the likes.",
          "This step keeps you honest. When a format hits its intended action, it earned a place in the rotation, whatever its raw reach happened to be. A format that looks small but converts is worth more than a format that looks big and converts nothing.",
        ],
      },
      {
        quote:
          "Reach tells you who saw it. The action tells you whether the repurpose was worth the effort.",
      },
      {
        heading: "Retire what underperforms",
        paragraphs: [
          "Review the rotation every month and cut the formats that never move their idea. Keeping a format out of habit wastes time you could spend on the two that work.",
          "What remains is a short list of channels proven to carry your ideas, and that list is worth more than any dashboard full of noise. Fewer channels, used well, beat many channels used evenly.",
        ],
      },
      {
        heading: "Review on a schedule",
        paragraphs: [
          "Set a fixed day each month to read your own numbers, and write one sentence about what you will change. A scheduled review turns scattered observations into a decision you actually act on. Without the date, the numbers pile up unseen and the lessons never reach your workflow.",
          "Changing nothing is a valid outcome, as long as you chose it on purpose. The review exists to make the choice deliberate rather than accidental.",
          "Before you tweak your repurposing, write down what each format currently produces. Without a baseline you cannot tell whether a change helped or whether the week was simply better than average. I note the baseline the same day I change the routine so the comparison stays fair.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tie every asset back to the idea and video it came from.",
          "Compare formats within the same idea instead of across platforms.",
          "Give search pages more time than social posts before judging.",
          "Measure the intended action, not the most flattering number.",
          "Review on a fixed schedule and record the decision you made.",
        ],
      },
    ],
  },
];
