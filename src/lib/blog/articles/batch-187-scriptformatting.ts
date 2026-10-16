import { Layers, Eye, Clock, Target, Puzzle, BookOpen, Tag, Users, Type, Scissors } from "lucide-react";
import type { BlogPost } from "../types";

export const batch187: BlogPost[] = [
  {
    slug: "script-format-two-column-vs-single-column",
    title: "Two Column vs Single Column Scripts for Video",
    excerpt: "A two column script puts visuals and audio side by side, while a single column script keeps one flow. Here is how to choose the right layout.",
    date: "2033-12-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A two column script gives one column to what the viewer sees and one to what the viewer hears. A single column script writes the piece as continuous narration or dialogue and marks visual moments inline. Both formats work, and neither one is a beginner mistake that you simply grow out of.",
          "The real question is how many timed visual beats your video carries. If a shot must land on a specific line, two columns keep that timing visible on the page for everyone to see. If your visuals can wait until the edit, a single column keeps you moving through the draft much faster.",
          "Think about who reads the file after you finish it. A camera crew and a motion designer need shot detail spelled out line by line. A solo creator recording to a webcam mostly needs words, because the visuals are whatever the camera happens to catch that day."
        ]
      },
      {
        heading: "When two columns earn their keep",
        paragraphs: [
          "Explainer videos, product demos, and anything built from b-roll lean on the two column layout. The visual column spells out shots, animations, and on-screen text while the audio column holds the narration. The reader sees the sync between the two sides at a glance without reading very closely.",
          "Interviews and documentaries fit here as well because the visual column doubles as a shot list you can hand to the camera crew. One page shows the whole plan, and nobody has to guess what gets recorded on the shoot day.",
          "Two columns demand more writing time up front. You must describe every shot and decide how the visual and audio sides line up with each other. That work pays back later when the editor opens the file and already understands how the cut should move."
        ]
      },
      {
        heading: "When one column is enough",
        paragraphs: [
          "Talking-head videos and podcasts rarely need two columns. The camera stays fixed, so the only real variables are what you say and where a graphic or a b-roll insert lands. A simple inline note handles the rest of the visual planning without a second table.",
          "A single column keeps your writing speed high. You finish the draft faster and mark the few visual beats with a bracket or a bold label right in the text. There is no second table to maintain and no half-empty cells to tidy before you share it.",
          "Promo pieces and voiceover scripts fit the single column shape too. The words carry the whole piece, and the visuals get decided once the audio is locked. You avoid writing shot detail that will almost certainly change before the final cut."
        ]
      },
      {
        quote: "The format should match the shoot, not the writing app you happen to like."
      },
      {
        heading: "How to choose in one minute",
        paragraphs: [
          "Ask whether a shot must land on a specific line. If that happens often, you want two columns so the timing stays visible through every scene. If you can say the words first and pick shots later, one column is lighter and faster to finish.",
          "Test both formats on a single episode and watch how your editor reacts. The layout that produces fewer follow-up questions wins, and that is the only test that really matters in the end."
        ]
      },
      {
        heading: "A quick checklist",
        bullets: [
          "Use two columns when visuals and audio must be timed together.",
          "Use one column when the words lead and visuals are light.",
          "Mix the two across a series if episodes shoot differently.",
          "Lock the layout once the editor learns it."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Two column scripts split visuals and audio into parallel tracks.",
          "Single column scripts keep one flow and move faster to write.",
          "Shot-heavy videos benefit from the two column layout.",
          "Talking-head videos usually do not need a second column.",
          "Pick one format and keep it stable across a series."
        ]
      }
    ]
  },
  {
    slug: "script-format-marking-visual-and-audio-columns",
    title: "Marking Visual and Audio Columns in Your Script",
    excerpt: "Marking visual and audio columns inside a script keeps shots and narration aligned, so your edit team knows what to cut before shooting starts.",
    date: "2033-12-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Marking a script means labeling which column holds visuals and which holds audio, then keeping every entry inside its lane. The left column usually describes what the camera shows, and the right column carries the spoken words. Both columns sit side by side so the reader can compare them.",
          "The labels matter more than the order you choose. As long as everyone reads the same layout the same way, a team can move from draft to shoot without a translation meeting in between. Predictable structure is the goal, not a perfect template.",
          "Clear column markings also help when you hand the file to someone new. They can see where a line belongs without asking a question first, which keeps the work moving."
        ]
      },
      {
        heading: "Name the columns and keep the names",
        paragraphs: [
          "Call the visual column Visual or Picture and the audio column Audio or Dialogue. Pick one set of names and use those exact words in every script you write for the project. Consistency teaches the reader where to look.",
          "Short labels beat clever ones. A motion artist scanning the page wants to know instantly whether a block is a shot note or a spoken line, and a familiar word does that job without a pause.",
          "Put the labels in a header row and repeat them on each page. Print and PDF exports lose context when the header only lives on page one, so the reader on page four has to guess."
        ]
      },
      {
        heading: "What belongs in each column",
        paragraphs: [
          "The visual column holds camera moves, framing, on-screen text, b-roll, and graphics cues. Write these as short instructions that a crew can act on without stopping to interpret what you meant.",
          "The audio column holds narration, dialogue, music notes, and sound effects. Keep spoken lines complete so a voice artist can read them straight through without jumping around the page.",
          "When a visual and audio beat lock together, align them on the same row. That pairing is the whole reason two columns exist, and breaking it forces the reader to reconstruct the timing."
        ]
      },
      {
        quote: "A column label is a promise to the reader about where each detail lives."
      },
      {
        heading: "Mistakes that break the columns",
        paragraphs: [
          "Writers often let a single cell grow into a paragraph. Keep entries short and move long explanation into a separate notes area or a comment that hangs off the side. A cell should hold a beat, not an essay.",
          "Mixing a visual cue into the audio column happens when you type fast and stop watching the layout. Read one pass looking only at column placement before you share the draft with anyone.",
          "Empty cells are fine. Do not invent filler to balance the page, because white space tells the reader that a beat genuinely has no companion on that side."
        ]
      },
      {
        heading: "Aligning the two columns",
        paragraphs: [
          "The value of two columns appears in the rows where the visual and audio sides agree. When narration mentions a product, place the product shot on the same row so the reader sees the match instantly.",
          "Some rows carry only one side. A long stretch of narration over a single wide shot leaves the visual column quiet for a while, and that is normal rather than a gap to repair.",
          "Reread the columns as a pair before you share the file. If the visual side describes something the audio never mentions, one of them likely belongs in a different scene."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Label the visual and audio columns and repeat those labels on every page.",
          "Short entries beat long paragraphs inside a table cell.",
          "Align visual and audio beats on the same row when they sync.",
          "Check column placement before sharing the file.",
          "Leave cells empty instead of adding filler."
        ]
      }
    ]
  },
  {
    slug: "script-format-timecodes-and-b-roll-notes",
    title: "Adding Timecodes and B-Roll Notes to Video Scripts",
    excerpt: "Adding timecodes and b-roll notes to video scripts turns a rough draft into a shooting plan that both camera and edit crews can follow on the day.",
    date: "2033-12-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A timecode marks a moment on the timeline, and a b-roll note describes the footage you want at that moment. Adding both to a script turns the words into a plan a crew can actually execute. The page stops being only a reading script and starts working as a production document.",
          "You do not need frame accuracy for every line. Rough marks in minutes and seconds are enough to guide a shoot and speed up the edit later. Start loose and tighten the marks as the video moves closer to production day.",
          "Keep the notes close to the lines they belong to. A timecode floating far from its scene forces the reader to hunt, which defeats the purpose of adding it."
        ]
      },
      {
        heading: "Why timecodes help",
        paragraphs: [
          "Timecodes give everyone one shared reference. Instead of saying the part after the intro, you point to a specific mark and the whole team knows exactly where to look on the timeline.",
          "During editing, a timecode lets a cutter jump straight to a beat without scrubbing the entire file. That saves minutes on every pass through the timeline, and those minutes add up across a long project.",
          "Keep the format fixed, such as hours, minutes, and seconds, and never mix styles inside one script. A single format stops the reader from guessing and makes the marks searchable."
        ]
      },
      {
        heading: "Writing b-roll notes that get used",
        paragraphs: [
          "Good b-roll notes describe the shot rather than the feeling. Write a close-up of hands typing instead of something dynamic here, because the crew cannot film a mood or a vague intention.",
          "Add the source when you know it, such as archive, screen capture, or shot on location. The crew can then gather the right material without a follow-up call the night before the shoot.",
          "Mark optional shots so the director can drop them when the schedule runs short. A labeled optional shot is easier to cut than a surprise conversation on set."
        ]
      },
      {
        quote: "A timecode tells the crew when, and a b-roll note tells them what. Together they remove guesswork."
      },
      {
        heading: "Keeping notes from bloating the script",
        paragraphs: [
          "The script is a reading document first. Too many production notes make it hard to read aloud, and the narrator is reading the same page you are. Keep the narration clear of clutter.",
          "Push long shot lists into an appendix or a linked sheet and keep only the key note inside the script. The crew still has the detail, and the page stays readable for everyone else.",
          "Use a consistent marker, such as a bracketed label, so notes stand apart from spoken lines at a glance. The reader should never confuse an instruction for a line to read."
        ]
      },
      {
        heading: "Matching notes to the edit",
        paragraphs: [
          "Timecodes and b-roll notes do most of their work in the edit, long after the shoot is over. The cutter opens the script, reads the marks, and pulls footage in the order the page lays out.",
          "Keep each note specific enough to act on alone. A cutter working at night should not need to call you to understand what a note means or where a shot came from.",
          "When you change a timecode after a rough cut, tell the editor in the same file. Stale marks in a script are worse than no marks at all.",
          "A clean set of notes also lets two editors share the work without stepping on each other. Both people read the same timecodes and the same b-roll references, so their cuts line up. That shared language keeps a shared edit from turning into a negotiation over every clip. Write the notes as if a stranger will read them alone, because sometimes a stranger does."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Timecodes create a shared reference point for every beat.",
          "B-roll notes should describe the shot and its source.",
          "Keep one timecode format across the whole script.",
          "Move long shot lists into an appendix.",
          "Mark optional shots so they can be cut later."
        ]
      }
    ]
  },
  {
    slug: "script-format-cue-points-for-graphics",
    title: "Placing Cue Points for Graphics in Video Scripts",
    excerpt: "Placing cue points for graphics in video scripts tells the motion artist exactly when a title, lower third, or animation should appear on screen.",
    date: "2033-12-07",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A cue point is a marker that tells the graphics team when an element appears, animates, or leaves the screen. Placed well, it removes a round of guesswork between the writer and the artist. The artist gets a clear job instead of an interpretation.",
          "Cue points live in the script next to the line they support. The artist reads the line, sees the cue, and knows how the timing should land. That proximity is what makes the cue useful rather than decorative.",
          "You can add cue points in a draft and refine them once the voiceover is recorded and the real timing is known. Early cues set intent, and later cues fix the exact frames."
        ]
      },
      {
        heading: "What a cue point should say",
        paragraphs: [
          "State the element, the action, and the timing. A title card that fades in at the start of section two covers all three in one short line the artist can read quickly.",
          "Name the element the way your team already names it. If the lower third is called a banner in your project files, use that same word in the script so nobody has to translate.",
          "Keep each cue short enough to scan. The artist should not have to parse a full sentence to find the instruction buried in the middle of it."
        ]
      },
      {
        heading: "Anchor cues to beats",
        paragraphs: [
          "Tie graphics to spoken words rather than to clock time when you can. As the narrator says the phrase, the title slides in is easier to hit than a raw timestamp that nobody can hear.",
          "When the voiceover shifts, word anchors survive while timestamps break. That resilience saves a rebuild of the animation each time the read changes in the booth.",
          "Use timestamps only when there is no spoken line to hold onto, such as a music-only intro or an opening montage with no narration."
        ]
      },
      {
        quote: "A cue point is a promise to the artist that nothing appears without a reason."
      },
      {
        heading: "Reviewing the cues",
        paragraphs: [
          "Read the script with the cues and imagine each graphic arriving on screen. If two elements land at the same time, decide which one the viewer should notice first so the screen does not fight itself.",
          "Group related cues so the frame does not fill up. Three graphics in one second distract more than they inform, and the viewer usually misses all of them at once.",
          "Send the cue list to the artist before the final voiceover so they can plan the build and flag any element that will not fit the time it has."
        ]
      },
      {
        heading: "Timing against the read",
        paragraphs: [
          "Graphics timing depends on the voiceover more than on the clock. Record the read first, listen back, and place cues where the emphasis actually falls in the take.",
          "A phrase that looked short on the page often stretches in the booth. Give the artist the recorded reference so the animation can breathe with the narration.",
          "If a cue lands in the middle of a word, move it. Graphics that fight the voice feel rushed even when the timing is technically correct.",
          "Keep a short list of the cues you moved after the read so the team can see where the timing changed. A visible trail of small adjustments prevents a long argument during the final review. It also helps the next episode start from a smarter place instead of a fresh guess about what worked. Over a season, those notes build into a reliable feel for pacing that transfers across videos."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A cue point names the element, its action, and its timing.",
          "Anchor cues to spoken words when a line exists.",
          "Use the same element names your team uses in files.",
          "Avoid piling several graphics into one moment.",
          "Share the cue list before final voiceover."
        ]
      }
    ]
  },
  {
    slug: "script-format-keeping-consistency-across-episodes",
    title: "Keeping Script Format Consistent Across Episodes",
    excerpt: "Keeping script format consistent across episodes trains your crew to read fast, so every stage of production moves quicker with fewer questions.",
    date: "2033-12-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Consistency means every episode uses the same headings, column labels, note markers, and file conventions. A predictable structure lets a reader find any detail in seconds instead of scanning the whole page. The reader stops relearning your layout every week.",
          "It is less about beauty and more about speed. A crew that knows where to look works faster and makes fewer errors along the way. The format becomes invisible, which is exactly the point.",
          "Write the rules down once, then treat them as the house style for the whole series. A rule that lives only in one person's head disappears when that person takes a day off."
        ]
      },
      {
        heading: "Why sameness wins",
        paragraphs: [
          "The regular readers of your internal documents are your crew. When the format never changes, they stop re-learning the layout and start reading the content instead. That shift saves a little time on each page and a lot over a season.",
          "Consistency also makes templates, automation, and exports behave. A stable structure can be parsed, searched, and reused across episodes without manual fixing at two in the morning.",
          "Handing a new editor the tenth episode is easy when it looks exactly like the first nine. They can focus on the story instead of decoding your notes."
        ]
      },
      {
        heading: "Where drift creeps in",
        paragraphs: [
          "Format drifts when different people write different episodes. One writer bolds notes, another brackets them, and the next one shouts in all caps to make the same point.",
          "Rush jobs cause drift as well. Someone invents a shortcut at midnight and the shortcut quietly becomes a habit that nobody actually agreed to keep.",
          "Fix drift by keeping a one-page style guide and reviewing every draft against it before the episode ships. Small corrections early prevent a messy, inconsistent season later."
        ]
      },
      {
        quote: "A consistent script is a document your crew can read without thinking about the layout."
      },
      {
        heading: "House style basics",
        paragraphs: [
          "Decide the elements that must repeat, such as the title block, revision date, column labels, and note markers. Write them on a single reference page the whole team can open.",
          "Set rules a machine could follow, such as one blank line between scenes and no bold text inside spoken lines. Simple rules are easier to remember and easier to check.",
          "Review each new episode against the guide before it reaches the crew, and update the guide when the process genuinely changes rather than every time someone has a whim."
        ]
      },
      {
        heading: "Onboarding new writers",
        paragraphs: [
          "A consistent format is also a training tool. A new writer can open last month's episode and see exactly how scenes, notes, and cues are arranged.",
          "Point them to the style guide and one finished script instead of explaining the rules from memory. The example teaches faster than a long list of preferences.",
          "Review their first draft against the guide and fix the structure before the words. Small corrections early keep the season uniform as the team grows.",
          "Keep a short welcome note at the top of the guide that explains why the format exists. When a new writer understands the reason behind a rule, they follow it with far less resistance. The guide then becomes a shared standard instead of a list of demands one person invented. Update that note whenever the process shifts so the reasoning stays current and honest. A team that knows the why corrects drift on its own without waiting for a reminder, and that self-correction keeps a long season readable from the first episode to the last."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Same structure across episodes lets the crew read faster.",
          "Format drift comes from different writers and rushed drafts.",
          "Keep a one-page style guide and check drafts against it.",
          "Stable formats work better with templates and automation."
        ]
      }
    ]
  },
  {
    slug: "script-format-using-script-templates",
    title: "Using Script Templates to Speed Up Your Writing",
    excerpt: "Using script templates to speed up your writing means you stop rebuilding the same layout and spend that time on the words that actually matter.",
    date: "2033-12-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A script template is a pre-built file with the headings, column labels, and note markers already in place. You open it, fill in the content, and skip the setup that repeats on every episode. The template carries the structure so you do not have to.",
          "The point is to remove decisions you make the same way every time. That frees your attention for the writing, which is the part that actually needs your judgment. Setup is not the work, even when it feels productive.",
          "Build the template once from a script you already like, then reuse it for every episode without rebuilding from a blank page."
        ]
      },
      {
        heading: "What belongs in a template",
        paragraphs: [
          "Start with the static furniture: the title block, the revision line, the column headers, and the note markers your team agreed on. These rarely change and always take time to recreate by hand.",
          "Add light placeholder text that shows the expected length of a scene or a visual note. Placeholders quietly teach the pace of a typical episode to anyone new using the file.",
          "Leave the template free of example content that people forget to delete before sharing. A leftover sample line is worse than no sample at all."
        ]
      },
      {
        heading: "Building your own",
        paragraphs: [
          "Take your best finished script and strip out the specific words. What remains is the skeleton you can reuse for the next episode and the one after that.",
          "Save it as read-only or as a separate starting file so a rushed edit cannot overwrite the original by accident. Protecting the master saves you from rebuilding it later.",
          "Version the template when your process changes, and note the change date inside the file so the team knows which copy is current."
        ]
      },
      {
        quote: "A good template makes the right way to write the easiest way to write."
      },
      {
        heading: "Template pitfalls",
        paragraphs: [
          "A template that is too rigid fights the writer. Leave room for a scene that genuinely needs its own shape instead of forcing every segment into the same mold.",
          "A template that is too loose saves nothing. If it has no labels or markers, you are still building from a blank page every single time you sit down.",
          "Keep the template lean. Every unused section is clutter a future writer must scroll past to reach the part that matters."
        ]
      },
      {
        heading: "Templates and team handoffs",
        paragraphs: [
          "A template pays off most when work moves between people. A writer fills the draft, a producer adds notes, and an editor reads the same shape they saw last week.",
          "Share the template with the whole team and keep one canonical copy. When everyone starts from the same file, nobody invents a private layout that others cannot read.",
          "Update the shared template in one place when the process changes. Scattered copies drift fast, and a drifted template is just a blank page with extra steps.",
          "A template is only as good as the habit around it. Keep it in one obvious place and name it so anyone can find it in a hurry. When a writer cannot locate the template, they build a new layout by hand and the drift starts again. A quick link in the project folder removes that excuse. The few seconds spent opening the right file protect the consistency of the whole series, and a lean template is faster to open, faster to fill, and far less likely to be ignored."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Templates remove repeated setup decisions from every episode.",
          "Include static furniture and light placeholders.",
          "Build the template from one of your best scripts.",
          "Keep a master copy that edits cannot overwrite.",
          "Let the template bend when a scene needs it."
        ]
      }
    ]
  },
  {
    slug: "script-format-file-naming-for-scripts",
    title: "Clear File Naming Rules for Video Script Files",
    excerpt: "Clear file naming rules for video script files stop version confusion, so your editor always opens the draft that was approved and signed off most recently.",
    date: "2033-12-13",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Tag,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A file naming rule is a fixed pattern for every script filename. It usually lists the project, the episode, the version, and the date in that order. The pattern turns a folder of mystery files into a list anyone can read.",
          "A predictable name lets anyone find the right file without opening five of them to check. That small habit saves the minutes you would otherwise lose every time someone asks for the latest draft.",
          "Agree on the pattern before a project starts, not after the first mix-up wastes an afternoon and leaves two people editing the wrong file."
        ]
      },
      {
        heading: "What to include",
        paragraphs: [
          "Put the project and episode first so related files sort together in a folder. Add a version number and a date so the newest draft always wins when someone sorts by name.",
          "Use a date format that sorts correctly, such as year, month, then day. Month names and slashes break sorting in most file browsers, which hides the newest file somewhere in the middle.",
          "Avoid spaces and special characters that trip up upload tools and shared links, because a broken link stalls a review and sends someone hunting through chat history."
        ]
      },
      {
        heading: "Version discipline",
        paragraphs: [
          "Number versions in a straight line, such as v01, v02, and v03. Skip words like final and final-final because they lie the moment a producer asks for one more change.",
          "When a version is approved, mark it locked and stop editing it. New work continues in the next number so the approved file stays honest about what it contains.",
          "Keep one folder for drafts and one for locked versions, so the right file is always obvious at a glance and nobody opens a half-finished page by mistake."
        ]
      },
      {
        quote: "A filename is the first instruction you give your editor, so make it a clear one."
      },
      {
        heading: "Common traps",
        paragraphs: [
          "Dates written several ways look alike when you scan fast. Pick one format and hold it across the whole project so the list stays sortable from start to finish.",
          "Deep folder nesting hides the files people need most. A flat folder with strong names often beats a maze of subfolders that nobody can remember.",
          "Renaming shared files breaks links that other people already have. Lock the names once a file leaves your hands and starts moving through the team."
        ]
      },
      {
        heading: "Naming across a season",
        paragraphs: [
          "A naming pattern proves its worth over a full season, not a single file. Twenty episodes with the same structure sort into a clean list that anyone can scan.",
          "Include the episode number early so the folder order matches the release order. The editor then finds episode twelve where they expect it to be.",
          "When you archive a finished season, keep the locked versions and the naming pattern intact. A tidy archive makes a future re-edit far less painful.",
          "A naming pattern fails quietly when one person breaks it. A single file called draft two new final undoes the order of twenty tidy names and sends the newest version somewhere unpredictable. Watch for those breaks during a season and rename on the spot rather than waiting for a cleanup day. A folder kept tidy week by week never needs a heroic rescue at the end. Build the check into your publishing routine so a bad name never survives a single day, and finding any script in the archive takes seconds instead of a long hunt."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use one pattern of project, episode, version, and date.",
          "A sortable date format keeps the newest draft on top.",
          "Number versions in a straight line and lock approved files.",
          "Skip vague labels like final.",
          "Keep filenames free of spaces and odd characters."
        ]
      }
    ]
  },
  {
    slug: "script-format-collaborative-script-documents",
    title: "Collaborative Script Documents for Video Teams",
    excerpt: "Collaborative script documents for video teams let writers, producers, and editors work inside one file without emailing drafts back and forth.",
    date: "2033-12-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A collaborative script document is a shared file that several people can edit at the same time. Changes appear live, so nobody works on a stale copy without knowing it. The team stops passing attachments around like a relay race.",
          "It replaces the slow cycle of emailing attachments and merging edits by hand. The conversation happens next to the words it concerns, which keeps context from scattering across inboxes.",
          "Set a few ground rules before the team starts typing so the file stays readable under deadline pressure instead of turning into a pile of overlapping notes."
        ]
      },
      {
        heading: "Setting ground rules",
        paragraphs: [
          "Decide who has edit access and who only comments. Writers type, reviewers leave comments, and one person owns the final pass so the document has a clear owner.",
          "Agree on how to mark suggestions. Comments for questions and tracked changes for edits keep the file easy to read and the history easy to follow.",
          "Name the current version in the document header so everyone trusts the page they are looking at and nobody edits a section that already changed."
        ]
      },
      {
        heading: "Working at the same time",
        paragraphs: [
          "Live editing speeds up short reviews but can clash when two people rewrite the same paragraph at once. Divide scenes by writer so each person owns a stretch of the script.",
          "Use comments for debate rather than editing over each other. The back and forth stays visible, and nobody loses a good idea in an overwritten line.",
          "Lock a section once it is approved so later edits do not reopen a decision the team already settled over a long meeting."
        ]
      },
      {
        quote: "One shared file beats ten attached drafts, as long as everyone follows the same rules."
      },
      {
        heading: "Protecting the work",
        paragraphs: [
          "Keep an export of approved drafts outside the live file. A shared document is a workspace, not an archive, and workspaces get messy over time.",
          "Back up before a big rewrite. Version history helps when it exists, but a saved copy is faster to restore when something goes badly wrong.",
          "Limit who can delete large blocks of text, because accidental deletes are the real cost of keeping the editing door wide open."
        ]
      },
      {
        heading: "Reviewing in the shared file",
        paragraphs: [
          "A shared document changes how a review feels. Reviewers comment in place while the writer watches the suggestions arrive, which shortens the usual waiting game.",
          "Assign a deadline for comments so the file does not stay open forever. A shared document with no end date becomes a place where decisions go to wait.",
          "When the review closes, the owner resolves every comment and clears the clutter. An empty comment panel signals that the draft is genuinely ready.",
          "A shared file works best when the team agrees on what done means. Set a clear point where comments stop and the owner makes the final call. Without that line, the document stays open, suggestions pile up, and the script never reaches a locked state. Name the moment, honor it, and move the approved draft into its own file. The pressure to wrap up keeps the review sharp and stops small preferences from stalling a good script. Rotate the owner role only between episodes, never mid-review, so one voice resolves the last round of notes and records the reason in a comment for everyone to see later. An owner who explains a decision out loud keeps the team from relitigating the same point in the next draft."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A shared document removes the email attachment cycle.",
          "Give edit rights to writers and comment rights to reviewers.",
          "Divide scenes so two people do not rewrite one paragraph.",
          "Lock approved sections and export them out.",
          "Treat the live file as a workspace, not an archive."
        ]
      }
    ]
  },
  {
    slug: "script-format-on-screen-text",
    title: "Formatting On-Screen Text Inside Video Scripts",
    excerpt: "Formatting on-screen text inside video scripts keeps titles and captions readable when they hit the viewer's screen at speed and in a hurry.",
    date: "2033-12-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "On-screen text is any word the viewer reads in the frame, such as titles, captions, and labels. Marking it clearly in the script keeps it from being invented in the edit by someone guessing at your intent.",
          "Write the exact words you want on screen rather than a description of them. The artist copies what you wrote instead of paraphrasing and drifting away from your meaning.",
          "Keep each on-screen line short enough to read in the seconds it stays visible. If the viewer cannot finish it in time, the words are decoration rather than information."
        ]
      },
      {
        heading: "Writing for the eye",
        paragraphs: [
          "People read slower on screen than they hear speech. Cut on-screen text down to the few words that carry the point, and trust the narration to handle the rest of the context.",
          "Keep one idea per title. A card with several thoughts gets skimmed and then lost before the viewer absorbs any of it, which wastes the space it takes.",
          "Write the visible words in full so nobody has to interpret shorthand later. A complete phrase in the script becomes a complete phrase on screen."
        ]
      },
      {
        heading: "Marking text in the script",
        paragraphs: [
          "Flag on-screen text with a consistent marker so it stands apart from spoken lines. A bracket or a short label works when you use it every single time without exception.",
          "Note the position when it matters, such as lower third or center. Otherwise leave placement to the designer who knows the frame better than the page does.",
          "Record timing for each text element, anchored to the spoken line it supports, so the motion build lands on the right beat instead of floating loose."
        ]
      },
      {
        quote: "If the viewer reads it, write it, and keep it short."
      },
      {
        heading: "Accessibility and review",
        paragraphs: [
          "Spell out tricky names and numbers so caption tools and artists get them right on the first pass. A misspelled name on screen is hard to unsee once it ships.",
          "Read every on-screen line aloud at the speed it will display. If it feels rushed in your own mouth, trim it before the build starts and the read gets slower.",
          "Check contrast and size in the script notes so the designer is not guessing about readability on a small phone screen in bright daylight."
        ]
      },
      {
        heading: "Matching text to the voiceover",
        paragraphs: [
          "On-screen text should support the narration rather than repeat it word for word. If the narrator says the phrase, the title can carry the number instead.",
          "Read the script once with the text elements in place and listen for overlap. When the ear and the eye receive the same message at once, one of them is wasted.",
          "Adjust the script when the two clash. A small rewrite to the narration often fixes a crowded screen faster than shrinking the type.",
          "On-screen text and captions are not the same job even when they share a line. A caption repeats what the viewer hears for accessibility, while a title adds a point the narration does not cover. Mark them differently in the script so the artist does not merge the two by mistake. When the distinction is clear on the page, the final frame shows only the text that earns its place. That discipline keeps the screen calm while still serving viewers who cannot hear the track. If a label repeats the narration, cut it rather than shrink it, because a smaller duplicate is still a duplicate."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the exact words that will appear on screen.",
          "Keep each title to one short idea.",
          "Use a consistent marker for on-screen text.",
          "Spell out names and numbers for captions.",
          "Note position and timing when they matter."
        ]
      }
    ]
  },
  {
    slug: "script-format-that-helps-editing",
    title: "Script Formatting Choices That Help Your Editor",
    excerpt: "Script formatting choices that help your editor reduce back and forth, because clean notes and clear markers save hours in the cutting room.",
    date: "2033-12-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["writing", "scripts", "productivity"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Formatting that helps an editor does one thing well: it answers questions before they are asked. Scene numbers, consistent markers, and clear note types do that work quietly on every page.",
          "An editor should never have to hunt through a paragraph to find what changes on screen. If they are searching, the format is costing them time you already spent.",
          "The format carries as much information as the words once the cut starts, so it deserves the same attention you give the script itself."
        ]
      },
      {
        heading: "Mark what the editor needs",
        paragraphs: [
          "Number scenes so the editor can match script beats to clips. A number is easier to call out in a session than a vague description of where something happens in the story.",
          "Separate spoken lines from production notes visually. The editor reads words in one style and instructions in another, without pausing to sort them on the fly.",
          "Label insert shots and graphics so the editor knows which footage and assets to expect before the timeline is built and the gaps appear."
        ]
      },
      {
        heading: "Reduce back and forth",
        paragraphs: [
          "Every question the editor sends you costs time on both ends. Pre-answer the common ones, such as which take is preferred or where a graphic lands in the scene.",
          "Keep a short notes section at the top for global instructions like music mood or pacing across the whole piece. Global notes do not belong buried in scene twelve.",
          "Update the script when decisions change, so the file never lies about the current plan and the editor trusts what they read."
        ]
      },
      {
        quote: "The best script note is the one the editor never has to ask for."
      },
      {
        heading: "Format for the cut",
        paragraphs: [
          "Use a table or clear indents so the editor can scan rather than read. Scanning is how they find a beat in a long file while a deadline sits on the other side of the edit.",
          "Separate each scene with a clear break so the timeline maps cleanly to the page in front of them. Clean boundaries make the whole project easier to navigate.",
          "Export a clean text version for the editor and keep the styled version for the rest of the team, so each reader gets the format that suits the job."
        ]
      },
      {
        heading: "Handoff notes for the edit",
        paragraphs: [
          "A short handoff section beats a long conversation at the start of an edit. List the preferred takes, the music direction, and any open question in one place.",
          "Mark which scenes are final and which still need a decision. The editor can then work on the settled parts while the rest waits for an answer.",
          "Update the handoff note as the edit progresses so the script stays a live reference. A document that matches reality saves everyone a status meeting.",
          "The handoff note should fit on one screen. If it runs long, the editor stops reading and starts asking, which is the outcome you wanted to avoid. Trim it to the decisions that change the cut and leave the rest for a conversation. A short note gets read twice, once at the start of the edit and once at the end. That second read is often where a missed detail surfaces before the export. Date the note so a stale instruction never masquerades as a current one, and when a decision changes, strike the old line and add the new one rather than erasing the history. That visible trail turns a tense review into a calm one."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Number scenes so script beats match clips.",
          "Separate spoken lines from production notes.",
          "Pre-answer common editor questions in the script.",
          "Update the file when decisions change.",
          "Give the editor a clean text export."
        ]
      }
    ]
  }
];
