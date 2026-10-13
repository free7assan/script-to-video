import { BookOpen, Layers, Clock, Target, Tag, PenLine, Film, Waves, Workflow, Puzzle, Flag, Repeat } from "lucide-react";
import type { BlogPost } from "../types";

export const batch35: BlogPost[] = [
  {
    slug: "blueprint2-format-naming",
    title: "Format Naming Rules for a Shared Script Library",
    excerpt: "A format library helps teams set clear rules for shot order, timing, and labels so that each video follows the same structure with less guesswork.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      { heading: "Setting a fixed name for each part", paragraphs: ["The quickest way to avoid confusion in a shared script is to assign one fixed name to each part of a video. A format library should list names like intro, body, and outro with a short reason for each. For example, a local news team can call its lead block 'open' and keep that name for every weekday clip. This habit saves time when people search for specific parts across hundreds of files."] },
      { heading: "Rules for numbers and labels", paragraphs: ["Names work best when they follow a few clear rules. Use plain words, keep them short, and avoid mixing languages in the same folder. For a cooking show, a team could use 'step01', 'step02', and 'step03' to mark recipe parts. These labels make it easy to sort files by order without reading full scripts. The goal is not to invent new terms but to pick a few and use them every time."] },
      { heading: "Keeping names the same over time", paragraphs: ["A format library only helps if people do not change names on a whim. Pick names once, write them down, and point new team members to that list. If a name no longer fits, replace it in the list first and update old files in a set batch. This keeps old links working when possible and stops small edits from creating new names. Over a few months, a stable list becomes second nature for the whole team."] },
      { quote: "Pick three names, write them down, and use them for one month before adding more." },
      { heading: "Handling special cases", paragraphs: ["Not every video fits a basic set of names. A live event may need a 'break' or 'ad' block that does not appear in scripted films. A format library should allow a small set of extra names but not an open list. For example, a sports crew can allow 'replay' and 'stat' blocks only when needed. This keeps rare cases clear without letting every clip get its own name."] },
      { heading: "Key takeaways", bullets: ["Assign fixed names to parts and write the list in one place for all team members to see.", "Follow simple rules for numbers and labels to keep files in order without extra reading.", "Keep names stable by updating the list before changing files in bulk or over time.", "Allow only a few special names to handle rare cases without breaking the pattern."] }
    ]
  },
  {
    slug: "blueprint2-layout-presets",
    title: "Layout Presets to Lock Script Structure",
    excerpt: "A format library helps teams set layout presets for headers, cues, and text blocks so that every script keeps the same spacing and line breaks.",
    date: "2024-03-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      { heading: "Why layout matters", paragraphs: ["A script is easy to read when the layout stays the same from page to page. A format library can store layout presets that set margins, line breaks, and where cues go. For example, a training video team can use one preset for how-to clips and another for Q and A clips. These presets stop people from reformatting text by hand for each new script."] },
      { heading: "What to include in a preset", paragraphs: ["Each preset should cover the parts that change most often. Include header fields like title, date, and speaker. Include cue markers for voice, visuals, and pauses. For a product demo, a preset can leave space for on-screen text in one column and voice lines in another. By storing these choices, a format library makes the layout clear without long notes."] },
      { heading: "Applying presets to new scripts", paragraphs: ["To use a preset, a team member loads it when creating a new script file. This fills in the required fields and sets spacing right away. For example, a local church can keep one preset for weekly sermons to save time for volunteers. Loading a preset also helps new writers match the team's style from their first day. Over time, people stop guessing and start writing content instead."] },
      { quote: "Load a preset once, then spend your time on words, not margins." },
      { heading: "Adjusting presets without breaking old files", paragraphs: ["Presets will need small changes as needs shift. A format library should keep a version for each preset so old scripts stay readable. For example, a school media club can keep preset v1 for last year's clips and v2 for this year's clips. When changing a preset, note why the change was made and how it affects new scripts. This keeps history clear while still moving forward."] },
      { heading: "Key takeaways", bullets: ["Store layout presets in one place to keep spacing, cues, and headers the same across scripts.", "Include fields that writers fill often, like speaker names, visuals, and timing notes.", "Use preset versions to avoid breaking old files when layouts need to change.", "Apply presets at the start of a project so new writers follow the rules with no extra notes."] }
    ]
  },
  {
    slug: "blueprint2-shot-numbering",
    title: "Shot Numbering to Track Cuts in Scripts",
    excerpt: "A format library helps teams set shot numbering rules that link each script line to a cut, making edits easier to track across long projects.",
    date: "2024-04-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      { heading: "Why count shots", paragraphs: ["Long videos can have dozens or hundreds of cuts. Without clear shot numbers, editors and writers waste time pointing to 'that one clip' in reviews. A format library should define how to number shots for each project type. For example, a documentary crew can number shots in order from start to end with no gaps. This makes it simple to say 'fix shot 24' and have both people look at the same cut."] },
      { heading: "Choosing a numbering style", paragraphs: ["There are a few common styles: simple numbers, scene-based numbers, or numbers with letters. A simple sequence works well for short clips. Scene-based numbers work well for films with many acts. For a tutorial series, scene 1 shots could be 1.01, 1.02 to show their order. A format library should pick one style per project type and state it clearly."] },
      { heading: "Linking numbers to script lines", paragraphs: ["Shot numbers only help if they appear in the right places. Put the number next to the visual cue and next to the cut point in the script. For example, a product demo can list 'SHOT 05: show close-up of button' in the visuals column. This links the written line to the video cut without extra notes. When numbers stay in sync, edits go faster and reviews take less time."] },
      { quote: "If you cannot point to a number, you will point to a guess." },
      { heading: "Handling inserts and changes", paragraphs: ["Edits often add or remove shots late in a project. A format library should say how to handle this. One option is to keep original numbers and add letters for inserts, like 12a. Another option is to renumber after major cuts. For a news package with tight time limits, many crews renumber after each edit pass to keep a clean list. The choice depends on the team, but it must be written down and followed."] },
      { heading: "Key takeaways", bullets: ["Define one shot numbering style per project type in your format library for consistent use.", "Put shot numbers next to visual cues so writers and editors see the same cut point.", "Choose a clear rule for inserts, like adding letters or renumbering after major edits.", "Use numbers in reviews to cut back on vague notes and speed up fixes."] }
    ]
  },
  {
    slug: "blueprint2-segment-markers",
    title: "Segment Markers to Split Long Videos",
    excerpt: "A format library helps teams set segment markers that split long videos into clear parts for scripts, edits, and reviews with less back and forth.",
    date: "2024-05-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      { heading: "Splitting for clarity", paragraphs: ["Long videos are easier to handle when split into clear segments. A format library can list standard segment markers like 'intro', 'setup', 'example', and 'end'. For a lecture video, splitting into 10-minute parts helps students find topics and helps editors focus on one part at a time. Clear splits also make it easier to reuse parts in other videos."] },
      { heading: "Where to place markers", paragraphs: ["Markers should go at natural breaks in content. Put a marker at the start of a new topic, after a transition, or before a change in speaker. For a roundtable, a marker can start when a new person takes the lead. A format library should show where to put markers in both the script and the timeline. This keeps the written plan in line with the final cut."] },
      { heading: "Naming segment markers", paragraphs: ["Use short, plain names for markers. Avoid long labels that take up space in a timeline. For a how-to series, names like 'tools', 'steps', and 'tips' are short and clear. A format library should limit names to a set list to stop new names from spreading. When everyone uses the same names, search tools can find segments across many videos."] },
      { quote: "Split where the topic changes, not where the page ends." },
      { heading: "Using markers in reviews", paragraphs: ["Segment markers speed up feedback by giving exact points to talk about. Instead of saying 'around the middle', a reviewer can say 'in the example segment'. For a software demo, this means fewer clips sent back and forth. A format library can include a note on how to use marker names in review notes. This small habit saves hours on large projects."] },
      { heading: "Key takeaways", bullets: ["Split long videos into segments at natural topic changes to make them easier to edit and reuse.", "Place markers in both scripts and timelines to keep plans in sync with cuts.", "Use a short, fixed list of marker names from your format library to aid search and clarity.", "Refer to marker names in reviews to give exact feedback with less confusion."] }
    ]
  },
  {
    slug: "blueprint2-timing-templates",
    title: "Timing Templates for Consistent Run Times",
    excerpt: "A format library helps teams use timing templates to set target lengths for parts, keeping videos on track without cutting key points at the end.",
    date: "2024-06-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      { heading: "Setting time targets", paragraphs: ["Most videos have a target run time set by a channel or client. A format library can store timing templates that break that total into parts. For example, a 60-second ad can split to 10 seconds for intro, 40 for product, and 10 for call to action. These targets guide writing so the final cut hits the right length with less rework."] },
      { heading: "Planning words per second", paragraphs: ["Speaking pace varies by audience. A timing template should note a rough words-per-second range for the project. For a clear explainer, many teams plan for 150 to 160 spoken words per minute. A format library can include a small table of paces for common formats. This helps writers estimate length before recording starts."] },
      { heading: "Adjusting for visuals", paragraphs: ["Not all time is spoken. B-roll, text on screen, or silence can take seconds that words do not cover. For a cooking video, showing a pan sizzle may add five seconds with no voice. A timing template should leave room for these visuals. By counting them early, a team avoids cutting voice lines at the end to hit a time limit."] },
      { quote: "Plan for silence and visuals, not just spoken words." },
      { heading: "Tracking against targets", paragraphs: ["Use timing templates as a check, not a hard rule. Track time for each segment as you write and edit. For a weekly news clip, a producer can check segment times against the template at each edit pass. If a part runs long, cut from that part first or move content. A format library should say when to check times to catch issues early."] },
      { heading: "Key takeaways", bullets: ["Break total run time into segment targets in a timing template stored in your format library.", "Use a rough words-per-second range to estimate spoken length before recording.", "Leave space for visuals, pauses, and text that add time without spoken words.", "Check times at set points in editing to fix overages before the final cut."] }
    ]
  },
  {
    slug: "blueprint2-style-tokens",
    title: "Style Tokens to Keep Text Consistent",
    excerpt: "A format library helps teams use style tokens for terms, numbers, and names so that captions and scripts read the same way across every video.",
    date: "2024-07-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      { heading: "Why text style matters", paragraphs: ["Small text choices add up. Writing 'email' vs 'e-mail', or '10 percent' vs '10%', can look uneven across a series. A format library can store style tokens that list preferred terms, number formats, and names. For a tech review channel, using 'Wi-Fi' the same way in every caption builds a clear, repeatable style. These tokens save time in edits and reviews."] },
      { heading: "Common tokens to define", paragraphs: ["Start with the items that appear most. Define product names, brand names, and common terms. Define number rules, like when to spell numbers or use digits. Define date and time formats for captions. For a local business series, list street names and service terms once. A format library should keep these in one list so anyone can check them."] },
      { heading: "Using tokens in scripts and captions", paragraphs: ["Make style tokens easy to use. Put them in a reference list near the script template or in a shared file. For example, a nonprofit can list 'GoScript' as the exact product name to avoid typos. When writing captions, use the token instead of guessing. This keeps auto captions and manual edits consistent without long debates."] },
      { quote: "One source of truth for terms stops ten edits for the same typo." },
      { heading: "Updating tokens as things change", paragraphs: ["Brands change names and terms shift over time. A format library should track token changes with dates. For example, a rebrand may change a product name from 'v1' to 'v2' on a set date. Update the token list and note where to apply it. Old videos can keep their original terms, while new videos use the new token. This keeps history clear and new work consistent."] },
      { heading: "Key takeaways", bullets: ["Define style tokens for terms, numbers, names, and dates in one list in your format library.", "Use tokens in scripts and captions to avoid small inconsistencies across a video series.", "Keep tokens easy to access by linking them to your script templates.", "Track token updates with dates so old and new videos follow the right terms."] }
    ]
  },
  {
    slug: "blueprint2-caption-slots",
    title: "Caption Slots to Place Text on Screen",
    excerpt: "A format library helps teams use caption slots to set where text appears on screen so that captions never cover key visuals or logos.",
    date: "2024-08-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      { heading: "Planning safe zones", paragraphs: ["Captions need space that does not cover logos, faces, or text in the video. A format library can define safe zones for each platform. For example, YouTube and other players often crop edges on some devices. A team can mark a bottom band of the frame for captions on most clips. This keeps text readable without hiding key visuals."] },
      { heading: "Defining caption slots", paragraphs: ["Caption slots are fixed places on screen for text. A format library can list slots like 'bottom-left', 'bottom-center', or 'top-right' with notes on when to use them. For a product demo, bottom-center may work for voice captions, while top-right may show short labels. By picking from a small list, editors do not have to place text by eye each time."] },
      { heading: "Matching slots to content", paragraphs: ["Different scenes need different slots. A scene with text at the bottom may need captions at the top. A scene with a logo at top-right may need captions at bottom-center. For a tutorial with step numbers on screen, a format library can say which slot to use for each segment type. This prevents conflicts between on-screen text and captions."] },
      { quote: "Put captions where they never fight with what the viewer needs to see." },
      { heading: "Testing slots on target devices", paragraphs: ["A slot that looks fine on a laptop may cover text on a phone. Test caption slots on common screen sizes for your audience. For example, a school video may need to work on older phones with small screens. A format library should include test notes for each slot. This catches issues early before publishing to many viewers."] },
      { heading: "Key takeaways", bullets: ["Define safe zones and caption slots in your format library for each target platform.", "Pick from a small set of slots so placement stays consistent across editors and clips.", "Match slots to scene types to avoid covering logos, faces, or on-screen text.", "Test slots on common devices to keep captions readable for most viewers."] }
    ]
  },
  {
    slug: "blueprint2-transition-specs",
    title: "Transition Specs to Link Video Clips",
    excerpt: "A format library helps teams use transition specs to set how clips link, keeping cuts clear and avoiding distracting effects between scenes.",
    date: "2024-09-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      { heading: "Choosing the right transition", paragraphs: ["Transitions connect clips and can set the pace of a video. A format library should list allowed transitions for each project type. For example, a news package may only use straight cuts to keep a direct feel. A short promo may use a simple fade between sections. Limiting choices keeps the style consistent and avoids overusing effects."] },
      { heading: "Setting timing for transitions", paragraphs: ["Timing matters as much as the type. A fade that is too long can slow a fast clip. A format library can set transition lengths in frames or seconds. For a tutorial, a 10-frame fade may work between major sections. For a quick tip clip, straight cuts may need no extra time. Storing these specs stops guesswork in the edit room."] },
      { heading: "When to use no transition", paragraphs: ["Not every cut needs an effect. Many edits work best with a straight cut between shots in the same scene. A format library should say when to skip transitions. For example, in a step-by-step demo, cutting from one action to the next keeps focus on the task. Knowing when to do nothing is just as important as knowing when to add an effect."] },
      { quote: "A good cut often means no transition at all." },
      { heading: "Matching transitions to segments", paragraphs: ["Link transitions to segment markers from your format library. Use one transition type to move between major segments, and another for small cuts inside a segment. For a lecture, a fade may mark the end of one topic and start of the next. Straight cuts can mark smaller points inside that topic. This gives viewers clear cues without distracting effects."] },
      { heading: "Key takeaways", bullets: ["List allowed transition types per project in your format library to keep a consistent edit style.", "Set transition lengths in frames or seconds to avoid cuts that feel too slow or too fast.", "Skip transitions for cuts inside the same scene to keep focus on the content.", "Match transition types to segment changes so viewers see clear breaks between topics."] }
    ]
  },
  {
    slug: "blueprint2-audio-cues",
    title: "Audio Cues to Guide Voice and Sound",
    excerpt: "A format library helps teams use audio cues to mark voice, music, and sound effects so that tracks stay clear for editors and mixing tasks.",
    date: "2024-10-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      { heading: "Marking voice tracks", paragraphs: ["Clear voice cues prevent mix-ups between speakers and voiceovers. A format library can define labels like 'VO', 'ONCAM', and 'SFX' for each track. For a two-person interview, label each speaker by name or initial. For example, 'MARTIN: intro' tells the editor which mic to use. These labels go in the script next to each line so audio and video stay in sync."] },
      { heading: "Planning music and sound", paragraphs: ["Music and sound effects need clear start and stop points. A format library can list audio cue types like 'music fade in', 'music fade out', and 'hit'. For a promo, mark when music starts under voice and when it fades out for a key point. These cues help the mixer know the intent without guessing. Clear notes also save time when revising a mix later."] },
      { heading: "Setting audio levels by cue", paragraphs: ["Different cues call for different levels. Voice should sit above music for most clips. A format library can include rough level notes for common cues. For example, 'VO: -14 dB, music under: -24 dB' gives a starting point. These are not fixed rules for every room, but a baseline to avoid starting from zero on each project."] },
      { quote: "Label the sound before you mix the sound." },
      { heading: "Using cues for timing", paragraphs: ["Audio cues can also mark timing points. A 'pause' cue shows where to leave silence for effect. A 'beat' cue can line up a visual to a sound. For a product demo, a 'click' sound cue can match the moment a button is pressed. A format library should list these timing cues so writers and editors use the same terms."] },
      { heading: "Key takeaways", bullets: ["Label voice, music, and sound effects with fixed cue names from your format library.", "Mark start, stop, and fade points for music and effects in the script.", "Include rough audio level notes as a starting point for mixing each project type.", "Use timing cues like pause or beat to line up sound with visuals in a consistent way."] }
    ]
  },
  {
    slug: "blueprint2-revision-stamps",
    title: "Revision Stamps to Track Script Changes",
    excerpt: "A format library helps teams use revision stamps to log changes, so anyone can see what changed, when, and why without digging through old files.",
    date: "2024-11-01",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      { heading: "Why track revisions", paragraphs: ["Scripts go through many small edits. Without a clear history, people may use an old version or miss a fix. A format library should require revision stamps on scripts. For example, a client may approve v1 but need a change that becomes v2. A stamp with date, name, and note tells the team which version is current and what changed."] },
      { heading: "What to include in a stamp", paragraphs: ["Each revision stamp needs a few fields. Include a version number, the date of change, the person who made it, and a short note. For a weekly show, a stamp like 'v3, 2024-11-05, J. Kim, fixed intro timing' is enough. A format library should list these fields and say where to put the stamp on the script. This keeps stamps consistent across the team."] },
      { heading: "When to stamp changes", paragraphs: ["Not every typo needs a new version number. Stamp when content changes in a meaningful way, like new lines, cut sections, or approved edits. For example, after a review meeting, the producer stamps the script with the agreed changes. A format library should set clear points for stamping. This avoids version bloat while still tracking key changes."] },
      { quote: "Stamp for decisions, not for spaces." },
      { heading: "Using stamps with shared files", paragraphs: ["Shared storage can hold many files. Revision stamps help people pick the right one. For a project with client feedback, the team can share 'script_v3.pdf' with the stamp shown on page one. A format library can also require the stamp in the file name or header. This cuts confusion when sending files by email or chat."] },
      { heading: "Key takeaways", bullets: ["Require revision stamps on scripts to show version, date, person, and a short note.", "Stamp only for meaningful changes, not small text fixes, to keep versions clear.", "Put stamps in the header and, when sharing, in the file name to avoid mix-ups.", "Keep a short history in stamps so teams can trace changes without digging through old copies."] }
    ]
  },
  {
    slug: "blueprint2-checklist-build",
    title: "Checklist Build for a Format Library",
    excerpt: "A format library helps teams use a final checklist to verify names, layouts, timing, and stamps before marking any video script as complete.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Product" },
    tags: ["blueprints", "analysis", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      { heading: "Why end with a checklist", paragraphs: ["Even with good rules, small items slip through. A format library should end with a checklist that covers all parts. For example, a production team can run the same list before sending a script to an editor. This catches missing shot numbers, wrong slot choices, or old revision stamps. A short list saves time and prevents avoidable fixes."] },
      { heading: "Items to check for structure", paragraphs: ["Start with the basics. Check that segment markers use names from the allowed list. Check that shot numbers follow the chosen style. Check that layout uses the right preset for the project type. For a tutorial, these checks make sure each step lines up with the correct number and segment. A format library should list these as yes or no items."] },
      { heading: "Items to check for text and audio", paragraphs: ["Next, check text and sound. Verify style tokens are used for names and terms. Check caption slots match each scene. Check audio cues list voice, music, and effects with clear points. For a promo, this keeps captions readable and the mix clear. These checks focus on quality without adding long notes."] },
      { quote: "Check five minutes now to save five hours later." },
      { heading: "Items to check for timing and history", paragraphs: ["Finish with timing and history. Compare segment times to the timing template and adjust if needed. Confirm the revision stamp has version, date, person, and note. For a client video, this shows what changed and that run time meets the target. A format library should mark these as required before approval."] },
      { heading: "Key takeaways", bullets: ["Use a final checklist from your format library to catch small errors before sending scripts out.", "Check structure items like markers, shot numbers, and layout presets for each project type.", "Verify text and audio items like style tokens, caption slots, and audio cues for clarity.", "Confirm timing against templates and include a complete revision stamp before marking as done."] }
    ]
  }
];
