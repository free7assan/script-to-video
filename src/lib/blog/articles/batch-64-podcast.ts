import {
  Activity,
  Clock,
  Compass,
  Film,
  Layers,
  Repeat,
  Scissors,
  Type,
  Users,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch64: BlogPost[] = [
  {
    slug: "podcast-repurposing-strategy-basics",
    title: "Podcast Repurposing Strategy for Busy Creators",
    excerpt:
      "A podcast repurposing strategy turns one recording into a week of clips, posts, and notes. This is a simple system a solo creator can actually run.",
    date: "2024-02-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A podcast repurposing strategy is a written plan that turns one recorded episode into a week of smaller pieces. It tells you what to cut, where to publish, and when to stop, so no decision waits for inspiration.",
          "Most hosts skip the plan and improvise instead. They post the full episode, wait six days, then rush out a clip that does nothing. The recording was fine. The missing piece was a routine.",
          "I learned this the slow way. For a year I treated each episode as finished the moment it uploaded. Then I watched a friend pull eight small pieces from a single interview and reach three times the people I did with the same conversation.",
        ],
      },
      {
        heading: "Start with the episode, not the platform",
        paragraphs: [
          "Before you think about formats, listen back and mark the moments that would survive on their own. A sharp answer or a story with a clean ending. Those are your raw materials.",
          "Do this on the same day you record if you can. Your memory of the conversation is still warm, and you will find the good parts faster than someone who waits a week and has to guess.",
        ],
        bullets: [
          "One strong answer that stands alone without setup.",
          "A story with a beginning, a turn, and a close.",
          "A line that made you react out loud the first time you heard it.",
          "A disagreement between two guests that stays civil and clear.",
        ],
      },
      {
        quote:
          "The episode is the factory. The clips are just the products that leave the door.",
      },
      {
        heading: "Work backward from your calendar",
        paragraphs: [
          "Decide how many pieces a single episode should feed before you edit anything. Four clips and one written post is a realistic week for a solo host. Ten is a fantasy that ends with an empty folder and a guilty feeling.",
          "Map each piece to a day. Monday for the full episode, Wednesday for the longest clip, Thursday for a written post, Friday for the short one. Once the days are set, you stop asking whether to publish and just do it.",
        ],
      },
      {
        heading: "Give every clip one job",
        paragraphs: [
          "Short pieces fail when they try to do too much. A clip that explains, entertains, and sells inside forty seconds explains nothing. Pick one job and let the rest go.",
          "An awareness clip shows a strong idea. A trust clip shows how you think. A conversion clip points to the full episode without begging. Each kind has a different shape, and you only find that shape when you commit to one purpose.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the plan before you open an editor.",
          "Mark strong moments the day you record.",
          "Match each clip to one job and one day.",
          "Four careful clips beat ten rushed ones.",
          "Stop editing when the week's slots are filled.",
        ],
      },
      {
        heading: "Keep the plan short enough to run",
        paragraphs: [
          "A strategy you cannot follow on a tired Tuesday is not a strategy. Keep it on one page. If it needs a meeting to review, it has already failed.",
          "The real test is whether a busy week still leaves you with pieces to publish. When the answer is yes, the plan is doing its job and you can forget it is there.",
        ],
      },
    ],
  },
  {
    slug: "podcast-clip-selection-that-lands",
    title: "How to Choose Podcast Clips That Actually Land",
    excerpt:
      "Choosing podcast clips is less about the loudest moment and more about the clearest one. Use these tests to pick clips that hold a total stranger.",
    date: "2024-07-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "The best podcast clips share one trait. A stranger can understand them without the rest of the episode. If a clip needs context you have to explain in the caption, it is not a clip yet.",
          "Hosts chase the funniest moment or the biggest guest name. Both can flop when the moment only works inside the conversation that produced it. A quiet answer that stands alone will outrun a loud inside joke every time.",
          "I used to export whatever made me laugh on playback. Those clips died. The ones that traveled were almost never the ones I expected, and the pattern only showed up after I started testing each cut on someone who had never heard the show.",
        ],
      },
      {
        heading: "The ten second test",
        paragraphs: [
          "Play a candidate clip for someone who has never heard your show. If they ask who is talking or what the topic is, the clip failed before it started.",
          "You have about ten seconds to make the subject clear. That usually means the clip starts one sentence before the good line, not on the line itself. A little runway gives the viewer somewhere to stand.",
        ],
      },
      {
        quote:
          "A clip is not a highlight. It is a small episode that happens to be short.",
      },
      {
        heading: "Look for tension, not volume",
        paragraphs: [
          "Tension keeps attention, and it does not have to be conflict. A question the guest resists, a claim you push back on, a story that turns halfway through. Volume is just noise.",
          "Scan your transcript for words like but, actually, and never. They often mark the exact spot where the real conversation started. When you find one, back up a sentence and listen again.",
        ],
        bullets: [
          "A guest pushing back on your framing.",
          "A story that flips its meaning near the end.",
          "A specific number or claim that invites a reaction.",
          "A moment where you clearly disagree, politely.",
        ],
      },
      {
        heading: "Judge the ending first",
        paragraphs: [
          "Most weak clips end on a fade. The speaker trails off, or the thought continues past the cut. Watch the last three seconds before you approve anything.",
          "A clean close gives the viewer a reason to feel finished. It can be a punchline, a firm conclusion, or a question the full episode answers. Anything that drifts gets cut.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A clip must make sense to a total stranger.",
          "Start one sentence before the best line.",
          "Hunt tension rather than volume.",
          "Fix the last three seconds before posting.",
          "Drop any moment that only works inside the episode.",
        ],
      },
      {
        heading: "Build a shortlist, then sleep on it",
        paragraphs: [
          "Pull twice as many candidates as you need and leave them overnight. The clip that still lands in the morning is the one worth publishing. Everything else was a mood.",
          "Selection is a skill you sharpen by cutting more than you publish. The more clips you reject, the faster the good ones announce themselves. That instinct pays off on every episode you record after this one.",
        ],
      },
    ],
  },
  {
    slug: "podcast-to-youtube-video-workflow",
    title: "A Podcast to YouTube Video Workflow That Scales",
    excerpt:
      "A podcast to YouTube workflow should reuse what you already recorded. Set the export, thumbnail, and title once, then repeat the same steps weekly.",
    date: "2025-01-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A podcast to YouTube workflow starts with one recorded file and ends with a video people can find. The trick is to reuse the audio and the camera feed you already have, then wrap them in a repeatable set of steps.",
          "Creators lose hours rebuilding the same sequence for every episode. They adjust the frame, guess at a thumbnail, rewrite a title from nothing. A fixed workflow removes those choices and turns publishing into assembly.",
          "I rebuilt my own process three times before it stuck. The version that lasted had fewer settings, not more, and it worked the same on a calm week and a chaotic one.",
        ],
      },
      {
        heading: "Lock the export settings",
        paragraphs: [
          "Decide the resolution, the frame rate, and the audio level once, then save them as a preset. Every episode leaves your editor the same way. Consistency here saves you from fixing the same small problem on every upload.",
          "If your camera records separately from your audio, sync them immediately and name the files in a pattern you can read at a glance. Ten seconds of naming now saves ten minutes of searching later.",
        ],
        bullets: [
          "One export preset for the full episode.",
          "One shorter preset for vertical clips.",
          "A naming pattern that puts the date first.",
          "A single folder per episode for every asset.",
        ],
      },
      {
        quote:
          "Publishing should feel like packing a bag you always keep by the door, not rebuilding the bag from scratch each trip.",
      },
      {
        heading: "Make the thumbnail before you edit",
        paragraphs: [
          "Choose the thumbnail frame while the conversation is fresh in your mind. Hunt for a face mid sentence, a hand raised, a visible reaction. A still that carries emotion does more work than a neat graphic.",
          "Then write the title from the clip, not the episode. The episode has an hour to explain itself. The video listing has one line, and it needs to promise something specific.",
        ],
      },
      {
        heading: "Strip the episode into chapters",
        paragraphs: [
          "Add chapter markers as you go. They help viewers jump to the part they came for, and they give you a map of the episode you can reuse when you cut clips later.",
          "The same map tells you which segments earned their length. A topic that people skip in the full video is a topic you can drop from the next episode.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reuse the recording you already made.",
          "Save one export preset and never touch it again.",
          "Pick the thumbnail frame before editing starts.",
          "Write titles from the clip, not the whole episode.",
          "Add chapters to build a reusable map.",
        ],
      },
      {
        heading: "Repeat the steps, not the effort",
        paragraphs: [
          "The value of a workflow is that it stops feeling like a new project every week. Once the steps are fixed, you spend your energy on the conversation and the cut, not on menus you have visited a hundred times.",
          "Keep a short checklist taped near your desk. When the checklist runs without thought, you have a workflow that scales past the point where you would normally burn out.",
        ],
      },
    ],
  },
  {
    slug: "podcast-transcript-repurposing-content",
    title: "Turn a Podcast Transcript Into Weeks of Content",
    excerpt:
      "A podcast transcript is the cheapest content source you already own. Mine it for quotes, posts, and search pages before you record anything new.",
    date: "2025-03-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "A podcast transcript is a written record of everything you already said out loud. Most hosts treat it as a subtitle file and forget it. It is really a stack of drafts waiting to be pulled apart.",
          "The transcript has an advantage over a blank page. The words are already in your voice, and the ideas have already been tested on a listener. You are not inventing. You are extracting.",
          "I started keeping every transcript in a folder and reading them a month later. The distance made the good lines jump out, and I stopped starting new pieces from zero.",
        ],
      },
      {
        heading: "Mine quotes first",
        paragraphs: [
          "Search the transcript for sentences that could stand alone as a post. A sentence works when it makes a claim, admits a mistake, or names a feeling. Highlight them in a single pass and do not judge them yet.",
          "One episode usually yields four or five usable lines. Those become short posts, captions, or the opening of something larger. The transcript hands you the first sentence, which is often the hardest one to write.",
        ],
      },
      {
        quote:
          "You have already said the thing. The transcript just saves you from saying it again badly.",
      },
      {
        heading: "Turn answers into articles",
        paragraphs: [
          "A strong answer in the episode can grow into a written piece. Keep the core claim, then add the context a reader needs that a listener did not. Trim the filler words and the false starts.",
          "Do not paste the transcript raw. Trim the filler, fix the grammar, and rebuild the flow. The goal is a piece that reads as if it began life on the page, even though it started in your mouth.",
        ],
        bullets: [
          "Pull the central claim into the first paragraph.",
          "Add one example the audio version left implied.",
          "Cut every false start and repeated word.",
          "End on the same line that landed in the episode.",
        ],
      },
      {
        heading: "Build pages that search engines can find",
        paragraphs: [
          "Listeners search for answers in text, not audio. A question your guest asked and you answered is a ready made search page. Give it a clear heading and a tight opening.",
          "These pages keep working long after the episode stops getting downloads. The transcript turns a single afternoon of recording into content that keeps earning attention months later.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read transcripts a month later to spot strong lines.",
          "Harvest four or five standalone quotes per episode.",
          "Rebuild answers into articles instead of pasting them.",
          "Turn good questions into search friendly pages.",
          "Let old transcripts keep working after downloads fade.",
        ],
      },
      {
        heading: "Keep the transcript close",
        paragraphs: [
          "Store every transcript in one place you can search. When you need a post on a Thursday and have nothing planned, you can find a line you already said and build from there.",
          "The transcript will never be glamorous. It is the quiet source that keeps feeding your schedule when the ideas run thin, and that reliability is worth more than any single clever post.",
        ],
      },
    ],
  },
  {
    slug: "podcast-shorts-from-long-episodes",
    title: "Cutting Vertical Shorts From Long Podcast Episodes",
    excerpt:
      "Turning long episodes into podcast shorts takes a plan, not luck. Here is how to find vertical moments and frame them for a silent, scrolling viewer.",
    date: "2025-06-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Podcast shorts are the vertical cuts you pull from a long episode and publish on their own. They live in a feed where sound is off by default, so they must work as moving text before they work as audio.",
          "Hosts who ignore that fail. They export a funny minute, add a waveform, and wonder why it dies. The viewer never had the context to laugh, and the captions arrived too small to read on a phone.",
          "Once I started editing shorts as if the sound were gone, my retention doubled. The change was not more effort. It was a different target.",
        ],
      },
      {
        heading: "Find moments that finish fast",
        paragraphs: [
          "A good short resolves inside thirty seconds. Look for a question answered in one breath, a quick story with a clean punch, or a claim that invites a reply. Anything that needs a long setup belongs in the full episode.",
          "The strongest shorts often start mid thought. Cut the greeting and the throat clearing. Drop the viewer into the middle of a sentence and let the first line pull them forward.",
        ],
      },
      {
        heading: "Caption every word",
        paragraphs: [
          "Burned in captions are not optional when most viewers watch with the sound off. Style them so they are readable in a second. Two or three words per line, high contrast, and a size that survives a small screen.",
          "Use the transcript as your starting point, then tighten the wording. Captions that match the spoken line exactly are often too long. Trim them so the text keeps pace with the voice.",
        ],
        bullets: [
          "Keep two to three words per caption line.",
          "Place captions above the platform's interface area.",
          "Highlight one or two key words for emphasis.",
          "Check that captions stay readable at phone size.",
        ],
      },
      {
        quote:
          "A short is a promise kept in half a minute. If the payoff arrives late, the viewer already scrolled.",
      },
      {
        heading: "Frame for the vertical screen",
        paragraphs: [
          "Reframe the video so the speaker fills the height of the screen rather than sitting in a tiny strip. If you have a single camera, keyframe a slow push instead of leaving the frame static and distant.",
          "Keep faces near the upper third where eyes naturally rest. Leave room along the bottom for captions and along the top for any platform labels that appear over your video.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Edit shorts as if the sound were turned off.",
          "Pick moments that resolve in half a minute.",
          "Burn in captions that stay readable on a phone.",
          "Frame the speaker to fill the vertical screen.",
          "Cut the setup and start mid thought.",
        ],
      },
      {
        heading: "Test one short per episode",
        paragraphs: [
          "You do not need a dozen shorts from every recording. Cut one strong vertical and pay attention to how it performs. Use that answer to guide the next one.",
          "Over a few episodes the pattern becomes clear. You learn which moments travel and which stay home, and the cuttings get faster because you stop guessing.",
        ],
      },
    ],
  },
  {
    slug: "podcast-audiogram-clips-guide",
    title: "Podcast Audiogram Clips Without the Guesswork",
    excerpt:
      "An audiogram can make a spoken clip shareable in seconds. Learn when the waveform helps, when it distracts, and how to design one quickly and well.",
    date: "2025-08-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "An audiogram pairs a piece of your audio with a moving waveform, a still image, and captions. It gives a spoken clip something visual to hold while it plays on a platform built for video.",
          "The format is easy to overdo. Fancy waveforms and spinning graphics often pull attention away from the words. The best audiograms stay quiet and let one strong line carry the piece.",
        ],
      },
      {
        heading: "Pick audio that needs no setup",
        paragraphs: [
          "An audiogram only works when the clip makes sense from the first second. There is no room for a long introduction. Choose a line or a short exchange that lands on its own.",
          "Fifteen to forty seconds is usually the right length. Long enough to say something, short enough that the waveform does not become the story.",
        ],
      },
      {
        quote:
          "The waveform is wallpaper. The sentence is the room. Decorate the wall, then get out of the way.",
      },
      {
        heading: "Design rules that survive small screens",
        paragraphs: [
          "Use a solid background and one accent color. Add a portrait if you have one, cropped tight. Put the captions where a thumb will not cover them.",
          "Keep the animation simple. A gentle pulse or a slow progress line is enough to signal that the audio is playing. Busy motion reads as noise on a phone and makes viewers scroll past.",
        ],
        bullets: [
          "One accent color against a plain background.",
          "A tight portrait instead of a wide shot.",
          "Captions that stay clear at small sizes.",
          "Motion that shows playback without stealing focus.",
        ],
      },
      {
        heading: "Where audiograms fit best",
        paragraphs: [
          "Audiograms shine on platforms that favor sharing a single idea. They give a quote a home and make it easy for a listener to pass the moment along without opening a full video app.",
          "They are weaker as a main channel strategy. Use them to spread a clip across places you already post, not to replace the vertical cuts you make for video feeds.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose audio that needs zero setup.",
          "Keep the waveform simple and the text clear.",
          "Fifteen to forty seconds is the sweet spot.",
          "Use one color and one portrait.",
          "Treat audiograms as a sharing tool, not the whole plan.",
        ],
      },
      {
        heading: "Make it once, reuse the template",
        paragraphs: [
          "Build a template with your colors and your caption style, then swap the audio and the portrait for each clip. A reusable template turns a five minute job into a two minute one.",
          "That speed matters when you are pushing several clips out in a week. The template keeps every audiogram looking like it came from the same show without asking you to design it again.",
        ],
      },
    ],
  },
  {
    slug: "podcast-batch-repurposing-routine",
    title: "Batch Repurposing Your Episodes in One Afternoon",
    excerpt:
      "Batch repurposing turns a scattered upload habit into one focused session. Block the afternoon, load every episode, and leave with a week ready.",
    date: "2025-10-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Batch repurposing means cutting many clips in one sitting instead of one piece at a time between other tasks. The setup cost gets paid once, and the rest of the week runs on what you already produced.",
          "The alternative eats your days. Open the editor for a single clip, reload the project, find the file, and lose the thread. Do that five times a week and the work feels heavier than it is.",
          "I moved to one long Friday session and my output doubled. The editing was not faster. I simply stopped paying the startup cost every single day.",
        ],
      },
      {
        heading: "Set up before you start cutting",
        paragraphs: [
          "Gather every episode you plan to mine and drop the files into one folder. Open the project, load the transcripts, and lay out your sequence before you touch a single cut.",
          "Then decide the order. Work through clips by type, all the vertical cuts first, then the audiograms, then the written posts. Switching formats less often keeps your head in one mode.",
        ],
        bullets: [
          "One folder holding every source file.",
          "A transcript for each episode within reach.",
          "A fixed order that avoids switching formats.",
          "A timer so the session ends on schedule.",
        ],
      },
      {
        quote:
          "Batch work trades a little boredom for a lot of freedom. The boredom lasts an afternoon. The freedom lasts the week.",
      },
      {
        heading: "Protect the time",
        paragraphs: [
          "Put the session on the calendar and treat it like a meeting with someone you respect. Turn off notifications and close the tabs you do not need. A batch session dies from interruptions faster than from hard work.",
          "Four hours is plenty for most solo hosts. Two to load and choose, two to cut and caption. When the timer rings, stop even if a clip is unfinished. Save it for the next session.",
        ],
      },
      {
        heading: "Leave with the week scheduled",
        paragraphs: [
          "Do not just cut the clips. Schedule them before you close the laptop. Load each piece into the platform's queue so the week publishes itself while you record something new.",
          "That final step is what makes batching worth it. A folder of ready clips is nice. A full week already scheduled means you can stop thinking about publishing entirely.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Cut many clips in one session, not one at a time.",
          "Load all files and transcripts before editing.",
          "Work by format to avoid constant mode switching.",
          "Guard the block with a timer and no notifications.",
          "Schedule everything before the session ends.",
        ],
      },
      {
        heading: "Adjust the rhythm over time",
        paragraphs: [
          "Start with one batch session a week and see how it feels. Some hosts need two shorter blocks. Others prefer one long morning. The right rhythm is the one you keep without dread.",
          "Track how many pieces a session produces for a month. When the number settles, you know exactly how much content an afternoon buys you, and planning a month gets a lot easier.",
        ],
      },
    ],
  },
  {
    slug: "podcast-guest-clip-permissions",
    title: "Guest Clip Permissions Every Podcaster Should Set",
    excerpt:
      "Clip permissions decided on recording day save you a legal scramble later. A short agreement keeps guest clips simple and clear for everyone.",
    date: "2026-01-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Clip permissions are the rules that say how you may reuse a guest's words after the recording ends. Sorting them out before you press record keeps the relationship clean and your repurposing plan safe.",
          "Guests rarely mind being featured, but they want to know where their face and voice will appear. A vague promise made at the start is worth far less than a one line agreement both of you understand.",
          "I once built a clip campaign around an interview and then had to pull half of it. The guest had agreed to the episode, not to the vertical cuts. One sentence up front would have saved the whole week.",
        ],
      },
      {
        heading: "Cover the basics in one sentence",
        paragraphs: [
          "Ask for permission to reuse the audio and video for promotion across your channels. Name the kinds of places you mean. Social feeds, your site, the show page. A broad clause is easier to agree to than a list nobody reads.",
          "Note whether the guest wants credit in a particular form. A handle, a title, a website. Credit details are cheap to give and they make sharing the clip far more likely.",
        ],
      },
      {
        quote:
          "Consent is fastest when you ask clearly, once, before the tape is rolling.",
      },
      {
        heading: "Know when to ask for more",
        paragraphs: [
          "Some clips go further than a promo post. Paid ads, a course, a book trailer. Those uses sit outside a normal promotional agreement, so ask for a separate yes.",
          "If a guest is employed or represents a brand, check whether their company has a say. A guest can grant their own permission and still not be able to speak for an employer.",
        ],
        bullets: [
          "Promotional reuse across your channels, agreed at booking.",
          "Paid advertising, confirmed separately in writing.",
          "Credit format, agreed so the guest gets named correctly.",
          "Company approval, checked when a guest has an employer.",
        ],
      },
      {
        heading: "Keep it short and human",
        paragraphs: [
          "You do not need a wall of legal text for most shows. A short paragraph in a booking email, replied to with a yes, covers the common cases and leaves a record you can find later.",
          "For anything commercial or high value, talk to a lawyer. The point of the short agreement is to handle the everyday clips so the exceptions are the only ones that need real attention.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask for clip permission before you start recording.",
          "Name the channels you will use in plain language.",
          "Get a separate yes for paid or commercial use.",
          "Confirm plus keep a written record of the reply.",
          "Stay flexible on credit to encourage guest shares.",
        ],
      },
      {
        heading: "Store the permission with the episode",
        paragraphs: [
          "File the agreement next to the recording. When you reach for a clip six months later, you should not have to hunt through an inbox to remember what was allowed.",
          "A tidy record turns repurposing from a risky guessing game into a routine. You know what you can use, you can point to the proof, and the guest stays a friend of the show.",
        ],
      },
    ],
  },
  {
    slug: "podcast-social-distribution-plan",
    title: "A Podcast Social Distribution Plan You Can Keep",
    excerpt:
      "A social distribution plan for your podcast should fit the platforms you already use. Post in fewer places, repeat more, and track what comes back.",
    date: "2026-04-16",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "A social distribution plan is a short list of where each kind of clip goes and when. It exists to stop you from posting everywhere at once and doing none of it well.",
          "New hosts try to be on every platform. They burn out by month two and blame the content. The problem was spread. A podcast with a steady presence in two places beats a ghost account in six.",
          "I cut my platforms in half and my reach went up. Fewer feeds meant better clips, faster replies, and a habit I could actually keep.",
        ],
      },
      {
        heading: "Choose two homes and one guest spot",
        paragraphs: [
          "Pick two platforms as your base and treat them as the priority every week. Everything else is optional, a place you drop a clip when the piece is especially strong.",
          "Match the home to the format. Vertical cuts fit short video feeds. Written quotes fit text based platforms. Long videos belong where people already sit down to watch.",
        ],
      },
      {
        heading: "Repeat more than you post",
        paragraphs: [
          "Most people miss a clip the first time. Sharing the same piece across a few days and formats is not spam. It is giving the idea a second and third chance to reach someone new.",
          "Change the frame each time. A different opening line, a different caption, a still image instead of a video. The core idea stays, the packaging shifts.",
        ],
        bullets: [
          "Post the strongest clip on your first home.",
          "Reuse it as a written quote on your second home.",
          "Reshare a week later with a new opening line.",
          "Keep the busy platforms for your best pieces only.",
        ],
      },
      {
        quote:
          "Reach is not how many doors you knock on. It is how many times you knock on the right ones.",
      },
      {
        heading: "Track what returns",
        paragraphs: [
          "Watch which platform sends people back to the full episode. A like is pleasant. A click to the show is proof the distribution worked.",
          "After a month you will know which feed to feed. Put your effort there and let the weaker ones go quiet without guilt.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick two homes and one place for bonus clips.",
          "Match each format to the right platform.",
          "Repeat good clips instead of always starting new.",
          "Change the packaging, keep the idea.",
          "Track clicks back to the show, not just likes.",
        ],
      },
      {
        heading: "Review the plan monthly",
        paragraphs: [
          "Set a short review at the end of each month. Check which posts drove real listeners and shift the plan toward what worked. Keep the changes small and keep the number of homes steady.",
          "A distribution plan should feel boring in the best way. When it runs without debate, your attention goes back to the conversation, which is the part that earns the audience in the first place.",
        ],
      },
    ],
  },
  {
    slug: "podcast-repurposing-calendar",
    title: "Build a Podcast Repurposing Calendar That Lasts",
    excerpt:
      "A podcast repurposing calendar keeps every clip on schedule. Build one around your real recording rhythm instead of an ideal week you never have.",
    date: "2026-09-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "A podcast repurposing calendar maps each small piece to a date so nothing waits for a burst of motivation. It turns repurposing from a scramble into a schedule you can read at a glance.",
          "Most calendars fail because they are built around a perfect week that never arrives. Three clips daily, a newsletter, a blog, and a live stream. Then one busy Tuesday and the whole grid collapses.",
          "The calendar that survived for me was boring. It assumed I would miss days and planned for it. That single assumption kept it alive for over two years.",
        ],
      },
      {
        heading: "Start from how you really record",
        paragraphs: [
          "Count the episodes you actually publish in a month, not the number you wish you did. Build the calendar on that real number and let every date flow from it.",
          "If you record twice a month, plan around two episodes. Two episodes can still feed more than a dozen pieces if you space them out. The rhythm follows the source, not the other way around.",
        ],
        bullets: [
          "Base the plan on episodes you truly publish.",
          "Spread each episode's pieces across two weeks.",
          "Leave one empty day a week as a buffer.",
          "Keep a small backlog for unavoidable gaps.",
        ],
      },
      {
        quote:
          "A calendar is not a cage. It is a rail that keeps a slow week from turning into a silent month.",
      },
      {
        heading: "Work in themes, not just dates",
        paragraphs: [
          "Group a week's pieces around one idea from the episode. A theme gives your posts a thread and makes them easier to write than a pile of unrelated clips.",
          "When the theme is clear, choosing what to publish next stops being a decision. You just take the next piece that fits and move on.",
        ],
      },
      {
        heading: "Leave room to skip without guilt",
        paragraphs: [
          "Build a buffer of two or three ready pieces. On a hard week, you pull from the buffer and the schedule holds. The goal is to keep the rhythm, not to punish yourself for a missed slot.",
          "Never stack a full week of publishing on top of a recording and editing day. Spread the load or the calendar becomes a reason to quit instead of a reason to continue.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build the calendar around your real output.",
          "Let one episode feed two weeks of pieces.",
          "Theme each week around a single idea.",
          "Keep a small buffer for difficult weeks.",
          "Treat the plan as a rail, not a ruler.",
        ],
      },
      {
        heading: "Review it gently each month",
        paragraphs: [
          "At the end of the month, look at what published and what slipped. Move a few dates, refill the buffer, and keep the structure. Small adjustments keep the calendar useful without inviting a full rebuild.",
          "A calendar lasts when it bends with your life. Build it simple, expect the gaps, and it will keep your show visible even in the weeks when recording feels hard.",
        ],
      },
    ],
  },
];
