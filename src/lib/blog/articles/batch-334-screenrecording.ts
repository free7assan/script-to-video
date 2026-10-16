import { Rocket, Eye, PenLine, Target, Scissors, MessageSquare, Flag, Waves, Puzzle, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch334: BlogPost[] = [
  {
    slug: "screen-recording-clean-setup",
    title: "Setting Up a Clean Screen Recording for Tutorials",
    excerpt: "A clean screen recording starts with a tidy desktop, one window, and a fixed capture region. This setup keeps every tutorial readable before you press record.",
    date: "2046-03-01",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        heading: "Shrink the desktop before you capture",
        paragraphs: [
          "A clean screen recording starts with a small capture area, not your full desktop. Close every window you do not need and leave one app on screen. When the viewer sees a single window, their eye lands where you want it and the steps stop competing with clutter.",
          "I keep a second user account just for recording. It has no chat apps, no email badges, and a wallpaper that does not pull the eye. Switching to that account takes ten seconds and removes an entire class of interruptions that would otherwise show up mid take.",
          "Before you record anything, drag every stray file off the desktop and quit the browser tabs you are not using. A busy desktop signals to the viewer that the video will be busy too, and first impressions form in the opening seconds."
        ]
      },
      {
        heading: "Lock the capture size",
        paragraphs: [
          "Set a fixed region and write its exact pixel size on a note you keep nearby. Mine is 1600 by 900, scaled to 1920 by 1080 at export. When every clip shares the same frame, cuts feel calm because the viewer never has to re learn the layout.",
          "Do not drag the region by hand each time you record. Save it as a preset inside your recorder so the same rectangle appears every session. That preset removes the small drift that makes two clips look like they came from two different channels."
        ]
      },
      {
        quote: "The best recording setup is the one you can repeat at eleven at night without stopping to think about it."
      },
      {
        heading: "Hide anything that blinks",
        paragraphs: [
          "Menu bar clocks, notification dots, and update prompts all compete with your steps. Turn on do not disturb, hide the dock if the app allows it, and set your phone face down on the desk. A single popup in the corner can pull attention away from a keyboard shortcut you are about to show.",
          "Check your screen at fifty percent zoom before you start. Small clutter that looks fine on a large monitor can turn into noise on a laptop screen or a phone. What reads as tidy at full size often looks crowded once the video is scaled down in a feed."
        ]
      },
      {
        heading: "Test with a ten second clip",
        paragraphs: [
          "Before the real take, record ten seconds of the exact action you plan to teach. Watch it back once at normal speed. If text is fuzzy or the window sits too small, fix it now rather than after a twenty minute session.",
          "This tiny test catches scaling problems, a muted microphone channel, and the wrong monitor selected. It has saved me more re takes than any written checklist. Ten seconds of checking beats a full reshoot every single time."
        ]
      },
      {
        heading: "Practice the first thirty seconds",
        paragraphs: [
          "The opening half minute is where a viewer decides to stay, so rehearse just that part a few times. Say your title line, show the finished result, and start the first step. A practiced opening sets the tone for everything that follows.",
          "Do not over rehearse the rest of the video. A slightly rough middle is fine, but a fumbled start loses people before the value arrives. Spend your prep time where the attention is thinnest and the stakes are highest.",
          "Once the opening feels easy, hit record and trust the rest of your setup. The clean desktop and the fixed region you prepared will carry the tutorial from there."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use one app window and one fixed capture size",
          "Record from a clean account with notifications off",
          "Save the capture region as a reusable preset",
          "Shoot a ten second test before the full take",
          "Keep the desktop empty of stray files and icons"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-resolution-frame-rate",
    title: "Resolution and Frame Rate That Stays Readable",
    excerpt: "Resolution and frame rate decide whether a screen recording stays readable after upload. Pick a size your editor and your viewer can both live with.",
    date: "2046-03-04",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Pick 1080p and stop second guessing",
        paragraphs: [
          "For a tutorial screen recording, 1920 by 1080 at thirty frames per second is the safe default. It stays sharp when a viewer watches on a phone, and it exports fast enough that you are not waiting an hour for a ten minute clip. Higher frame rates rarely help a tutorial because most of your screen is static text and windows.",
          "The exception is on screen motion such as scrolling, dragging, or a fast cursor path. If those moves look choppy at thirty frames, step up to sixty for that footage only. Mixing frame rates in one timeline is fine as long as you keep them consistent within each clip."
        ]
      },
      {
        heading: "Record at two times your export size",
        paragraphs: [
          "Record at a resolution larger than your final export so you have room to zoom without soft edges. If you export 1080p, capturing at 2560 by 1440 gives you a clean crop when you need to push in on one button. That headroom is the difference between a crisp detail shot and a blurred one.",
          "Do not go all the way to full 4K unless your machine handles it without dropped frames. A dropped frame during a capture shows up as a stutter the viewer notices right when you are showing a precise mouse move. Smooth capture beats maximum resolution for teaching."
        ]
      },
      {
        heading: "Keep text large enough to read",
        paragraphs: [
          "Before recording, bump your editor or app font a couple of steps larger than you use day to day. Text that is comfortable on your own monitor can be unreadable once the video is scaled down in a feed. A viewer should not have to guess a line of code or a menu name.",
          "Test by watching your export on a phone before you publish. If you cannot read the key line while holding the phone at arm length, the resolution is fine but the text size is wrong. Fixing font size solves more readability problems than raising the pixel count ever will."
        ]
      },
      {
        quote: "A bigger file does not make a clearer tutorial. Larger text on a clean background does most of that work."
      },
      {
        heading: "Match your export to the platform",
        paragraphs: [
          "Most platforms re encode whatever you upload, so hitting a standard 1080p with a high bitrate gives the encoder an easier job. Export with a bitrate around twelve to sixteen megabits per second for screen content. Flat regions of text compress well, and a decent bitrate keeps thin lines from smearing.",
          "Do not chase an exotic resolution the platform will just resize. A clean 1080p export with crisp text looks better after processing than a stretched 4K one. Consistency across your channel also trains returning viewers to expect a certain clarity."
        ]
      },
      {
        heading: "Watch bandwidth on the viewer side",
        paragraphs: [
          "A high bitrate export looks great on your own drive but can stutter on a slow connection. The viewer on a train sees the buffer spin instead of your crisp text. Aim for a bitrate that streams smoothly rather than the largest file you can make.",
          "Check your own upload on a phone over mobile data before you publish. If it loads without pausing, most viewers will be fine too. That quick test beats guessing at numbers that only matter on paper.",
          "If a video must carry fine detail, raise the bitrate and accept a larger file. For a talking tutorial with mostly static text, a moderate bitrate keeps both the platform and the viewer happy."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Default to 1080p at thirty frames per second for tutorials",
          "Capture larger than you export so you can zoom in",
          "Raise the app font size before you record",
          "Export at a high bitrate and check the result on a phone"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-script-first",
    title: "Scripting a Tutorial Before You Hit the Record Button",
    excerpt: "A short tutorial script written before you record saves whole re takes. It fixes the order of steps and the exact words you say while your screen is live.",
    date: "2046-03-07",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        heading: "Write the steps as a list first",
        paragraphs: [
          "Before you record a single frame, write the steps as a plain numbered list. Each line is one action the viewer can see happen on screen. That list becomes the spine of the tutorial and stops you from wandering while the recorder runs.",
          "I write the list in a text note with no formatting at all. Numbered lines keep me honest, because if a step takes two sentences to describe it usually means two clicks the viewer needs to see. Splitting those apart makes the edit simpler later."
        ]
      },
      {
        heading: "Say the outcome, then the action",
        paragraphs: [
          "Each step in the script reads as outcome first, then action. Something like, click the gear icon to open settings. The viewer hears what is about to happen and then watches you do it, which keeps their eye on the right part of the screen at the right moment.",
          "This ordering also gives you natural places to trim. If a step drags in the final edit, you can cut the action and keep the outcome line as a bridge. A script with clear outcome lines survives aggressive cutting without losing the thread."
        ]
      },
      {
        heading: "Read it out loud before recording",
        paragraphs: [
          "Read the whole script out loud once with no screen in front of you. Awkward phrasing shows up fast when your mouth has to say it. Any sentence you stumble over will cost you a re take, so rewrite it now while fixing it is cheap.",
          "Time the read with a stopwatch. If the spoken script already runs longer than your target, the finished tutorial will run even longer once the real screen pauses are added. Trimming script lines is easier than trimming a finished timeline."
        ]
      },
      {
        quote: "Script the path, then let the screen do the walking. The words only need to keep pace with the clicks."
      },
      {
        heading: "Leave room for live narration",
        paragraphs: [
          "A full verbatim script can sound stiff when you read it over a live screen. I write short cue phrases instead of whole sentences, then talk around them. The cue keeps me on topic and my voice stays natural because I am not reading a wall of text.",
          "Mark the places where you plan to pause and let the screen breathe. A two second silence after a click gives the viewer time to follow. Those pauses are part of the script even when they are not words on the page."
        ]
      },
      {
        heading: "Keep the script with the project",
        paragraphs: [
          "Save the script next to the recording in the same project folder. When you edit, the list of steps becomes your chapter markers and your description outline. One file does three jobs, which means less duplicated effort across the whole pipeline.",
          "If a step changes during recording, update the script the moment you stop. A stale script is worse than no script, because next time you will trust it and teach the old way by mistake."
        ]
      },
      {
        heading: "Write the description from the script",
        paragraphs: [
          "Your step list doubles as a description outline. Paste the headings in order, add a timestamp for each, and the description writes itself. This saves a separate writing task and keeps the description honest about what happens in the video.",
          "Add the tools and versions you used at the bottom so a viewer can match your setup. Small details like an app version prevent the most common confused comment. The script already told you what you touched, so the list is nearly finished.",
          "If a step changed while recording, fix the outline here too. The description and the script should never disagree, because viewers read one and watch the other and notice when they drift apart."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "List the visible steps before you record anything",
          "Lead each line with the outcome, then the action",
          "Read the script aloud and time it with a stopwatch",
          "Use short cue phrases instead of full sentences",
          "Keep the script in the project folder for editing"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-cursor-and-zoom",
    title: "Keeping a Cursor and Zoom Usable During a Live Demo",
    excerpt: "A cursor and zoom that behave during a screen recording keep viewers oriented. Learn how to slow movement, highlight clicks, and zoom without losing the plot.",
    date: "2046-03-10",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Slow the cursor down",
        paragraphs: [
          "The fastest fix for a jittery screen recording is to move the cursor at half your normal speed. Viewers track the pointer, and a mouse that darts across the screen makes them lose it in a blink. Deliberate movement reads as confidence even when it feels sluggish to you.",
          "Turn on a cursor highlight if your recorder offers one. A soft ring around the pointer makes it visible against both light and dark windows. Pair that with a click animation that flashes once, and the viewer always knows where the action happened."
        ]
      },
      {
        heading: "Zoom for detail, not for drama",
        paragraphs: [
          "Zoom in only when a detail is too small to read at full frame. A short push toward a menu, then a hold, then a pull back is enough. Long sweeping zooms feel like a slideshow and distract from the step the viewer is trying to follow.",
          "Set a floor and a ceiling for your zoom and stay inside them. I rarely go past one point five times because text starts to soften and the motion gets heavy. A gentle move that keeps everything legible beats an extreme one that shows off the effect."
        ]
      },
      {
        heading: "Anchor the cursor before you click",
        paragraphs: [
          "Pause the cursor on the target for a beat before you click. That tiny hesitation lets the viewer catch up, and it makes the click land where the eye already is. Without the pause, the click can happen before the viewer has moved their attention.",
          "After a click, hold still for a moment instead of pulling away. The result of the action appears while the pointer stays put, so the two events stay linked in the viewer mind. Rushing off the target breaks that link."
        ]
      },
      {
        quote: "Move the cursor like you are pointing at something for a friend across the table, not like you are racing a timer."
      },
      {
        heading: "Cut zoom moves you do not need",
        paragraphs: [
          "In editing, remove any zoom that does not serve a step. If a push in ends on the same information the viewer already read at full frame, delete it. Traditional screencasting added constant motion, and modern tutorials are calmer because the editor was willing to cut.",
          "Keep one signature move so your channel feels consistent. I always settle a zoom just before the click it supports, never during. That single habit means the viewer learns your rhythm and stops bracing for surprise movement."
        ]
      },
      {
        heading: "Practice the move before recording",
        paragraphs: [
          "Run the zoom and the cursor path once without recording, the way a musician warms up. Your hand learns the distance and the timing, and the recorded version lands clean. One dry run removes most of the wobble.",
          "Rehearse the exact click order as well. Knowing which click comes next keeps the cursor from wandering while you pause to think. That small confidence shows up as a calm on screen performance.",
          "If a move still feels clumsy after two tries, simplify it. A plain cut to a zoomed still is often clearer than a live move your hand cannot repeat. Choose the version that reads best, not the one that looks most impressive."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Move the cursor at half speed and turn on a highlight",
          "Zoom only when a detail is too small at full frame",
          "Pause on the target before and after each click",
          "Cut any zoom that ends on information already visible"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-cut-dead-time",
    title: "Cutting Dead Time Without Losing the Important Steps",
    excerpt: "Cutting dead time from a screen recording is most of editing. Learn where pauses hide and how to trim them without chopping out the steps that matter.",
    date: "2046-03-13",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "Find the pauses you cannot hear",
        paragraphs: [
          "Most dead time in a screen recording is silent waiting, and it hides from the ear. Scroll through the timeline and watch for flat stretches where nothing on screen changes. A loading spinner, a search box thinking, or a page settling can each eat five to eight seconds.",
          "Watch your own draft at one point five speed on the first pass. The slow spots jump out when everything is sped up. Mark each one with a comment instead of cutting on the spot, so you keep momentum through the whole review."
        ]
      },
      {
        heading: "Cut on the action, not the word",
        paragraphs: [
          "Trim so the cut lands right as the next click or key press starts. When you leave a full second of quiet before each action, the tutorial feels padded even if every line is useful. Tight cuts keep the viewer leaning forward instead of waiting.",
          "Leave a short beat after a result appears so the viewer can read it. The rule is simple. Fast into the action, brief hold on the result, then move on. That pattern removes dead air without making the video feel frantic."
        ]
      },
      {
        heading: "Cut mistakes and tangents without mercy",
        paragraphs: [
          "If you misclicked or opened the wrong menu, cut it unless the mistake is the lesson. Viewers do not need to watch you recover from a typo. Removing those moments is the single biggest time saver in a long screen recording.",
          "The same goes for tangents. A story about your weekend is fine in a vlog and fatal in a tutorial. Move side commentary to the very end or drop it entirely, and the steps stay front and center."
        ]
      },
      {
        quote: "Every second you cut is a second the viewer spends on the step you actually want to teach."
      },
      {
        heading: "Keep the joins invisible",
        paragraphs: [
          "Hard cuts between two nearly identical frames can flash. Add a tiny cross dissolve, or match the cut on a moment of stillness so the eye does not catch the seam. The goal is a timeline that feels like one continuous take even though it is many.",
          "Watch the final cut once with the sound off. If the visuals still read as a coherent sequence, your joins are working. Sound often covers a rough cut, so the silent pass is the honest test."
        ]
      },
      {
        heading: "Use markers to speed the trim",
        paragraphs: [
          "Drop a marker every time you finish a step during recording, or right after. In the edit, markers jump you straight to the places that need trimming. Hunting for a pause in a twenty minute timeline is the slow way to do it.",
          "Name the markers with the step number so you can verify the order later. A marked timeline is a map, and a map makes the cutting pass twice as fast.",
          "When the markers are in place, work through them one at a time and do not scrub back and forth. A linear pass through marked spots keeps you from re watching the same minute five times."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Scan the draft at speed to spot silent waits",
          "Cut into each action and hold briefly on the result",
          "Remove mistakes and tangents unless they teach",
          "Match cuts on still frames to hide the seams"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-narrate-steps",
    title: "Narrating Steps Clearly in a Screen Recording",
    excerpt: "Narrating steps clearly is a skill you can practice. Pace, sentence length, and the order you say things decide whether a screen recording feels easy to follow.",
    date: "2046-03-16",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        heading: "Say the noun before the verb",
        paragraphs: [
          "When you narrate a step, name the thing you are touching before you describe the action. Say, the export button, then, click it. The viewer hears the target first and their eye finds it before your cursor arrives. Reversing that order forces them to hunt.",
          "Keep each spoken step to one action. If you say click and then drag in the same breath, the viewer misses the second half because they are still watching the first. One action per sentence gives the eye time to catch up with the voice."
        ]
      },
      {
        heading: "Vary your pace on purpose",
        paragraphs: [
          "Speak a little slower on the step that matters most and pick up speed on the obvious ones. A flat delivery makes every step sound equally heavy, which wears the viewer down. Letting your pace rise and fall signals where to pay attention.",
          "Pause after a step instead of filling every silence. A short gap lets the result on screen register. Narrators who never stop talking leave no room for the viewer to think, and thinking is how a tutorial actually teaches."
        ]
      },
      {
        heading: "Cut filler words in the edit",
        paragraphs: [
          "Live narration collects filler such as um, so yeah, and right. Do not try to avoid them while recording, just cut them later. A tight edit removes the filler and the viewer only hears the clear parts.",
          "Cut your breaths too when they are loud, but do not over tighten. Removing every pause makes the voice sound artificial. Leave the natural beats and remove only the distracting noises."
        ]
      },
      {
        quote: "Good narration is not perfect speech. It is clear speech with the filler trimmed out."
      },
      {
        heading: "Match the voice to the action",
        paragraphs: [
          "If you record audio live with the screen, watch for drift where your words run ahead of the clicks. Small offsets are easy to nudge in the edit, but large ones need a re record. Keep the voice and the action within a second of each other.",
          "When you record separately, drop the narration onto the timeline and slide it until the key noun lands on the click. The viewer feels that alignment even if they never notice it. It is the quiet difference between a tutorial that flows and one that fights itself."
        ]
      },
      {
        heading: "Record a reference pass first",
        paragraphs: [
          "Before the real narration, do a silent reference pass where you just perform the steps. It shows you where the clicks land and how long each step takes. You learn the rhythm without the pressure of the microphone running.",
          "Then narrate over a second pass with the flow already in your head. The voice matches the action because your hands already know the path. This two pass habit costs a few minutes and pays back in far fewer re takes.",
          "If you dislike doing everything twice, use the silent pass as a rehearsal you delete. Even one dry run is enough to smooth the sentences that would have tripped you up on the real take."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name the target before describing the action",
          "Keep one action per spoken sentence",
          "Slow down on the steps that matter most",
          "Cut filler words and loud breaths in the edit"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-on-screen-callouts",
    title: "On Screen Callouts That Actually Help Viewers",
    excerpt: "On screen callouts can clarify a screen recording or bury it. Use arrows, boxes, and labels with restraint so they point at the step instead of at the noise.",
    date: "2046-03-19",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "Add a callout only when the eye gets lost",
        paragraphs: [
          "A callout earns its place when the viewer would otherwise look in the wrong spot. A box around a small menu item is helpful. An arrow floating over a whole window is decoration. Match each overlay to a real moment of potential confusion instead of sprinkling them everywhere.",
          "If a step is obvious, resist the urge to mark it. Constant overlays train the viewer to ignore all of them, including the one that mattered. Restraint is what makes the useful callout stand out when it finally appears."
        ]
      },
      {
        heading: "Keep the style boring and consistent",
        paragraphs: [
          "Pick one color, one font, and one arrow shape, then use them for the entire video. Consistency means the viewer learns your callout language in the first minute and reads the rest without thinking. A different color for every section just adds noise.",
          "Place labels where they do not cover the thing they describe. A box around a button should sit beside the button, not on top of it. The point is to point at the interface, not to hide it."
        ]
      },
      {
        heading: "Time them to the narration",
        paragraphs: [
          "A callout should appear right as you say the noun it marks, and leave once the action is done. A box that lingers for the whole clip becomes background clutter. In and out, tied to the moment, keeps it useful.",
          "Animate the callout in quickly, within a few frames. Slow fades feel sluggish when a tutorial already moves at a steady pace. A fast draw or a simple pop lands the attention exactly when the voice points at it."
        ]
      },
      {
        quote: "A callout is a pointing finger. Hold it up, point, then put it down."
      },
      {
        heading: "Do not let overlays fight the cursor",
        paragraphs: [
          "If your cursor already sits on the target, a second arrow on the same spot is redundant. Choose one. Either the cursor highlight leads the eye or the callout does, and stacking both splits attention for no gain.",
          "On busy screens, mute the background before you overlay anything. A slight dim on everything except the active region does more than three arrows ever could. Simplicity keeps the focus where the step happens."
        ]
      },
      {
        heading: "Build a small callout library",
        paragraphs: [
          "Save five or six callout styles you use often as presets. A box, an arrow, a label, and a highlight cover most needs. When a new video comes along, you drop in a preset instead of building an overlay from scratch.",
          "Keep the library tiny. A drawer of thirty styles tempts you to use thirty, and each one adds a decision to the edit. A handful of reliable pieces keeps every video consistent and the cutting quick.",
          "Name each preset for its job rather than its look, such as menu box or click arrow. Names tied to purpose mean you reach for the right tool without opening every style to check what it does."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Add a callout only where the eye would get lost",
          "Use one color, font, and shape for the whole video",
          "Time each one to the narration and pull it after",
          "Choose the cursor or the callout, not both at once"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-separate-audio",
    title: "Recording Audio Separately for Cleaner Tutorials",
    excerpt: "Recording audio separately from the screen gives your tutorial a cleaner voice track. It also lets you fix a flubbed line without redoing the whole capture.",
    date: "2046-03-22",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Why separate tracks win",
        paragraphs: [
          "Recording your voice on its own track gives you control the screen capture cannot. You can raise the level, remove a hum, or replace a single sentence without touching the video. On screen audio is convenient, but a dedicated track cleans up far better in the edit.",
          "The setup is simple. Let the screen recorder capture the visuals, and use a separate microphone app to record the voice at the same time. Later you line the two up on the timeline and keep the better sounding track."
        ]
      },
      {
        heading: "Sync with a clap or a click",
        paragraphs: [
          "Start every take the same way so you can find the sync point. I open a text file and type a single letter on camera as I say it out loud. That visible letter and audible word line up in one frame and make alignment trivial.",
          "If you forget the marker, align on a loud click instead. A menu opening or a window snapping shut both create a sharp visual and audio spike. Sliding until the two spikes meet is usually close enough for a tutorial."
        ]
      },
      {
        heading: "Fix a flub without a reshoot",
        paragraphs: [
          "When you stumble over a line, stop, breathe, and say the sentence again from the start. The screen keeps rolling while the clean take captures the fix. In editing you drop the bad take and keep the good one with no seam.",
          "This works because the visuals rarely change between the two attempts. A pause, a repeated line, and the same window on screen means the cut is invisible. It is the main practical reason to keep your voice on its own track."
        ]
      },
      {
        quote: "Record the screen once, record the voice clean, and let the edit marry the two."
      },
      {
        heading: "Clean the voice in a few moves",
        paragraphs: [
          "Cut the low rumble below eighty hertz and tame any harsh peak near the sibilants. A light noise reduction pass removes room hum without making the voice sound processed. Keep the moves gentle, because an over treated voice sounds worse than a slightly noisy one.",
          "Aim for a consistent level across the whole tutorial. Loud and quiet sections pull the viewer out of the steps. Set one target loudness and ride the track so every sentence sits at a similar place."
        ]
      },
      {
        heading: "Set levels before you start",
        paragraphs: [
          "Do a ten second test of your voice level before the first real line. Peaks that clip cannot be recovered, and a level that is too low brings up the room hum when you raise it. Set it once and forget it for the rest of the session.",
          "Aim for peaks that stay below the ceiling with a little headroom to spare. That headroom gives you room to fix a loud laugh or a bumped desk without a re record. A minute of checking protects the entire take.",
          "Write the level down so the next session starts from the same place. Matching levels across videos makes your channel sound intentional instead of assembled from parts that never quite fit."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record the screen and the voice on separate tracks",
          "Sync each take with a visible and audible marker",
          "Redo a flubbed line on the spot and cut the bad take",
          "Clean rumble and level gently, never over treat"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-fix-mistake-editing",
    title: "Fixing a Recording Mistake in the Editing Bay",
    excerpt: "A recording mistake does not mean starting over. With editing habits you can cut a bad take, reshape a pause, or patch a line into a clean screen recording.",
    date: "2046-03-25",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Check whether the mistake is even visible",
        paragraphs: [
          "Watch the mistake once at normal speed before you panic. A wrong click that gets fixed cleanly often disappears with a single trim. Viewers remember the step that worked, not the two seconds you spent recovering.",
          "Ask whether the mistake teaches anything. If your recovery shows a common error and its fix, keep it as a teachable moment. If it is just fumbling, cut it and move on without another thought."
        ]
      },
      {
        heading: "Cut the bad take and keep the voice",
        paragraphs: [
          "If the video is wrong but the narration is fine, replace the clip and keep the audio. Drop a fresh screen recording of the correct action on the track above, align the click to the sentence, then hide the old clip. The voice continues without a jump.",
          "This overlap technique also covers a slow load. Record the correct result separately and slide it in where the wait used to be. The viewer sees the outcome immediately and never watches the spinner."
        ]
      },
      {
        heading: "Reshape a pause to hide a stumble",
        paragraphs: [
          "When the visuals are fine and only the sentence is rough, cut a small span out of the middle and close the gap. The voice stays smooth and the screen never changes, so the edit goes unnoticed. Keep the cut between words to avoid a clipped sound.",
          "If a pause is too short and the words collide, add a frame of room tone between them. Room tone is a few seconds of silence recorded in the same space, and it makes cuts sound natural. Every editor should capture some at the start of a session."
        ]
      },
      {
        quote: "Most recording mistakes are a timing problem, and timing problems are the easiest kind to fix."
      },
      {
        heading: "Patch a line with a second recording",
        paragraphs: [
          "If a sentence is wrong, record just that sentence later and drop it over the top. Match the room and the microphone so the tone blends. A patched line that sits in the same acoustic space is invisible to the viewer.",
          "Keep a list of the lines you need to redo as you review. Recording all the patches in one short session is faster than stopping the edit every time you find one. Small habits like this keep a fixable video from turning into a rewrite."
        ]
      },
      {
        heading: "Keep a scratch timeline for patches",
        paragraphs: [
          "Make a separate timeline for every patch line you record. Stack them there, then copy the good takes into the main edit. Keeping patches apart stops you from cutting the wrong clip in the middle of a review.",
          "Label each patch with its timecode in the main video. When you are ready, you drop it in and delete the scratch copy. A tidy container keeps a messy process from spreading into the finished cut.",
          "This also lets you record all the patches in one sitting instead of stopping every few minutes. Batch the fixes, then return to the edit with everything you need already waiting on the scratch track."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Check whether the mistake is visible at normal speed",
          "Keep good narration and replace only the bad clip",
          "Use room tone to smooth a cut between words",
          "Record all patch lines in one short session"
        ]
      }
    ]
  },
  {
    slug: "screen-recording-tutorial-workflow",
    title: "A Repeatable Workflow for Tutorial Screen Recordings",
    excerpt: "A repeatable workflow turns screen recording from a scramble into a routine. Set your order of steps once, then reuse it for every video on the channel.",
    date: "2046-03-28",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["format", "tutorial", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "Write the pipeline on one card",
        paragraphs: [
          "A repeatable workflow starts as a short checklist you can read in thirty seconds. Mine reads, outline, script, record screen, record voice, edit, publish. Six words that cover the whole job and remove the blank page problem at the start of every video.",
          "Keep the card where you record. When a step is written down, you stop deciding what to do next and just do the next thing. That single change removes most of the friction that makes tutorials feel heavy."
        ]
      },
      {
        heading: "Batch the setup, not the ideas",
        paragraphs: [
          "Set up your recording environment once and reuse it for several videos. The account, the capture preset, and the audio chain stay the same, so the first minute of every session is already done. Batching setup is where the routine pays off most.",
          "Keep ideas in a separate list and pull from it when it is time to record. Mixing brainstorming with production splits your attention. Separating the two means each gets your full focus when its turn comes."
        ]
      },
      {
        heading: "Standardize your export settings",
        paragraphs: [
          "Use one export preset for every tutorial so the output is identical each time. Same resolution, same frame rate, same bitrate. Standard settings mean you can compare two videos and see real differences instead of chasing settings that drifted.",
          "Name the export files with the same pattern so an old project is easy to find. A date plus a short topic label is enough. Predictable names save time when you need a clip or a thumbnail from a video you made months ago."
        ]
      },
      {
        quote: "A workflow is not there to make you faster. It is there to make the next video easy to start."
      },
      {
        heading: "Review the workflow every month",
        paragraphs: [
          "Once a month, look back at three recent tutorials and note where you lost time. Maybe the sync step always costs you ten minutes, or the callouts take too long. Fix one step at a time and update the card.",
          "Do not rebuild the whole process at once. One small improvement that sticks beats a perfect system you abandon in a week. Over a few months those small fixes compound into a routine that runs almost on its own."
        ]
      },
      {
        heading: "Name the folder before you start",
        paragraphs: [
          "Create the project folder and name it before you record the first frame. Use the same date and topic pattern every time. Files that land in a named folder never get lost in the downloads pile.",
          "Put the script, the raw screen capture, the voice track, and the export inside it. One folder holds the whole video, so a future you can reopen the project without a scavenger hunt. The routine closes where it began.",
          "Archive the folder once the video is live so the working drive stays clear. A clean drive makes the next project feel light, and a light start is the whole point of building a workflow in the first place."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the pipeline as a six line card you can read fast",
          "Set up the recording environment once and reuse it",
          "Use one export preset and one file naming pattern",
          "Review and fix one workflow step each month"
        ]
      }
    ]
  }
];
