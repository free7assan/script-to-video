import {
  Activity,
  Compass,
  Eye,
  Film,
  Layers,
  Repeat,
  Rocket,
  Scissors,
  Waves,
  Workflow,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch88: BlogPost[] = [
  {
    slug: "editing-timeline-basics",
    title: "Timeline Basics Every New Video Editor Should Know",
    excerpt:
      "Learn how a video timeline works before you touch a single clip. These editing timeline basics cover tracks, the playhead, and keeping a project sane.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A timeline is the space where an edit stops being an idea and becomes something you can watch. The playhead marks the exact frame in front of you, and every clip, title, and audio file sits on a track waiting for you to decide how long it lives.",
          "New editors fight the timeline because they treat it like a document instead of a map. You are not writing one continuous page. You are laying strips of time beside each other and testing whether they belong together.",
          "Get this part wrong and everything after it feels like a slog. Get it right and the rest of the edit turns into a series of small decisions instead of one giant one.",
        ],
      },
      {
        quote:
          "The timeline rewards patience. Every clip you drop is a small bet that this moment deserves to follow the last one.",
      },
      {
        heading: "Tracks and the playhead",
        paragraphs: [
          "Tracks are lanes. Video goes on one, dialogue on another, and music gets its own so it never tangles with a voice. When a clip lands on the wrong lane you can spot the mistake at a glance, which is the whole reason to keep them apart.",
          "The playhead is your cursor in time. Drag it slowly through a section and watch where your attention drifts. If you look away before a clip ends, that clip is probably running too long.",
          "Zoom in when you trim and zoom out when you judge structure. Most pacing mistakes are invisible at one zoom level and obvious at the other, so switch between them on purpose.",
        ],
      },
      {
        heading: "A workflow that survives revisions",
        bullets: [
          "Lock the tracks you are not editing so a stray drag cannot move them.",
          "Name every clip instead of trusting camera file numbers.",
          "Keep the untouched original media in a bin you never edit from.",
          "Save a version before a big restructure, never after.",
          "Leave a second of handle on both ends of every clip for later trims.",
        ],
      },
      {
        heading: "How a first cut comes together",
        paragraphs: [
          "Drop only the clips that clearly belong, in rough order. Do not fuss over placement yet. Watch it once from start to finish, then move the pieces that feel wrong.",
          "Resist adjusting effects while the structure is still wet. Fix the shape first. Effects are the final layer and they hide problems you still need to see.",
          "When the sequence plays through without making you wince, you have an assembly. That is the point where real editing begins, not where it ends.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the timeline as a stack of moments, not a page of text.",
          "Keep audio on its own tracks so you can mute and fix it fast.",
          "Scrub the playhead to test whether a clip earns its length.",
          "Name clips and version saves so revisions do not break you.",
        ],
      },
    ],
  },
  {
    slug: "editing-cuts-and-transitions",
    title: "Hard Cuts, Dissolves, and When to Use Each One",
    excerpt:
      "A cut should stay invisible until it needs to be felt. Learn when a hard cut serves a scene and when a dissolve papers over an edit that was too weak.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "A hard cut is the default for almost everything. You use it when two shots belong beside each other and the audience should never notice the seam.",
          "Transitions carry meaning. A dissolve suggests time passing. A wipe announces a change of place. A hard cut says nothing and lets the story speak, which is usually what you want.",
          "The mistake beginners make is reaching for a fancier transition whenever an edit feels rough. That instinct hides the problem instead of solving it.",
        ],
      },
      {
        quote:
          "Every transition is a small lie about time. Tell it only when the audience actually wants to be fooled.",
      },
      {
        heading: "Why the hard cut wins",
        paragraphs: [
          "Audiences have watched cuts for a century. Their eyes skip over them the way they skip over a comma. The moment you add a dissolve, you ask them to notice the edit, and you had better have a reason.",
          "A hard cut also keeps the energy of a scene intact. It moves at the speed of the dialogue. Decorative transitions slow the room down and remind people they are watching an edit rather than a moment.",
        ],
      },
      {
        heading: "Transitions that earn their place",
        bullets: [
          "A dissolve across a long passage of time so the jump does not confuse.",
          "A match cut when two shapes or motions rhyme and the link feels clever.",
          "A fade to black at a real act break, not to rescue a soft ending.",
          "A whip pan when you want motion to carry the viewer into the next space.",
          "A sound-led transition where audio from scene two starts before the picture.",
        ],
      },
      {
        heading: "The temptation to decorate",
        paragraphs: [
          "Stock transition packs are fun for an afternoon and a burden for a career. They tempt you to solve story problems with motion graphics, and story problems never yield to motion graphics.",
          "Try cutting the entire piece with hard cuts first. Watch it back. If a spot genuinely needs a bridge, add one. Most of the time the rough cut already reads clean and the transition was never necessary.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start every project with hard cuts and add transitions only on purpose.",
          "A transition is a statement about time or place, so make it mean something.",
          "If an edit feels off, fix the shots before you cover it with a dissolve.",
        ],
      },
    ],
  },
  {
    slug: "editing-b-roll-placement",
    title: "Where to Place B-Roll So It Actually Helps",
    excerpt:
      "B-roll is not wallpaper. Placed with real intent, it covers a jump cut, proves a point, or gives the viewer a quick breath between two heavy ideas.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "B-roll belongs where it does a job: covering a cut, illustrating a claim, or resetting the viewer before a new section. If it is only filling space, it is noise.",
          "The strongest B-roll answers a question the audience is already asking. They hear a name and want to see a face. They hear a number and want to see the chart. Give them the picture at the moment the question forms.",
          "Timing matters more than the shot itself. The same clip can feel helpful or random depending on where you drop it.",
        ],
      },
      {
        quote:
          "B-roll is a supporting actor. When it starts demanding its own scene, the interview is in trouble.",
      },
      {
        heading: "B-roll as a problem solver",
        bullets: [
          "Cover the jump cut where you removed a stumble or a breath.",
          "Show the object a speaker names so the words land harder.",
          "Break a long talking-head stretch before the face grows tiring.",
          "Signal a change of topic so the viewer knows a new section started.",
          "Bridge two locations that would otherwise feel disconnected.",
        ],
      },
      {
        heading: "Matching the words to the picture",
        paragraphs: [
          "Cut the B-roll on the noun, not after it. When the speaker says the building, the building should already be on screen or arrive within a beat. Late B-roll always feels behind the conversation.",
          "Keep the shot long enough to register but not so long that it becomes a second subject. Two to four seconds is usually plenty for a supporting image.",
        ],
      },
      {
        heading: "How much is too much",
        paragraphs: [
          "Some editors cover every second of an interview and end up with a slideshow where a person never seems to finish a thought. Restraint reads as confidence.",
          "Let the face stay on screen during the emotional beats. A person telling you something hard is more interesting than a drone shot of the city. Save the B-roll for the parts that need help.",
          "Audit the timeline at the end and ask what each clip is doing. If you cannot answer in a few words, cut it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place B-roll at the moment a question forms in the viewer's mind.",
          "Cut on the noun so the image lands with the word.",
          "Keep supporting shots short and let faces own the emotional beats.",
          "If a clip has no job, remove it instead of shortening it.",
        ],
      },
    ],
  },
  {
    slug: "editing-audio-levels-dialogue",
    title: "How to Set Dialogue Levels Without Guessing at All",
    excerpt:
      "Dialogue levels decide whether people finish your video. Learn a repeatable audio workflow that keeps voices clear on phones, laptops, and speakers.",
    date: "2024-12-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Dialogue should sit around minus twelve to minus six decibels on the meter, with peaks that never hit zero. That range keeps voices loud enough on a phone and clean enough on a good speaker.",
          "Most bad audio is not a technical failure. It is a mixing decision made by ear in a quiet room, which is the worst place to judge how loud something really is.",
          "Build a small routine and you stop guessing. The routine catches problems the ear forgives.",
        ],
      },
      {
        quote:
          "If a viewer has to reach for the volume button, they have already started deciding whether to keep watching.",
      },
      {
        heading: "Build the mix from the voice down",
        paragraphs: [
          "Set dialogue first and treat every other sound as support. Music and effects exist to sit under the voice, not beside it. Mix them low enough that you can still hear every consonant.",
          "When a track fights the voice, do not raise the voice to win. Lower the other track. A voice pushed too hard turns harsh, and harshness wears a listener out fast.",
        ],
      },
      {
        heading: "A simple level check",
        bullets: [
          "Normalize each dialogue clip so quiet and loud takes start level.",
          "Watch the meter for peaks instead of trusting the fader by eye.",
          "Duck music under the voice so it recovers in the gaps.",
          "Listen once at low volume to catch anything hiding behind the music.",
          "Play the whole mix on a phone speaker before you call it done.",
        ],
      },
      {
        heading: "Compression without squashing",
        paragraphs: [
          "Light compression evens out the loud and soft parts of a voice so the listener is not chasing the volume. A little goes a long way.",
          "If the voice starts to sound flat and lifeless, you have squeezed it too hard. Back off the ratio and let some natural dynamics through. Speech needs air around it.",
        ],
      },
      {
        heading: "The phone speaker test",
        paragraphs: [
          "Most of your audience watches on a phone with a tiny speaker and a noisy room. That test is honest in a way your studio monitors are not.",
          "Play the mix through the phone once. If the dialogue is clear and the music does not swallow the words, you are close. If you strain to hear a sentence, go back and fix the mix, not the playback device.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep dialogue around minus twelve to minus six decibels with clean peaks.",
          "Mix music and effects under the voice, never over it.",
          "Use light compression to even out a voice, then stop before it flattens.",
          "Always finish with a phone speaker check before delivery.",
        ],
      },
    ],
  },
  {
    slug: "editing-pacing-and-rhythm",
    title: "Pacing and Rhythm: The Invisible Work of Editing",
    excerpt:
      "Pacing is the part of editing viewers feel but never name. Learn how shot length, silence, and breath control the rhythm of a cut that holds attention.",
    date: "2025-03-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Pacing is how long each shot stays on screen and how those lengths stack into a feeling. A sequence of short clips feels urgent. A long held shot feels still or heavy.",
          "Viewers never say the pacing was good. They say the video was easy to watch or that it dragged. That vague language is the only feedback rhythm usually gets.",
          "You control it with a stopwatch in your head. Every time you leave a clip in place, you are setting the tempo for the next minute.",
        ],
      },
      {
        quote:
          "Rhythm is not cutting faster. It is knowing exactly when to slow down and then having the nerve to hold.",
      },
      {
        heading: "Shot length sets the tempo",
        paragraphs: [
          "Watch a section with your eyes closed and count the cuts. If they land at a steady mechanical beat, the viewer will feel that machine rhythm and drift. Variation keeps them awake.",
          "Slow a moment down before a reveal, then tighten the cuts right after it. That contrast reads as emphasis, and it costs nothing but timing.",
        ],
      },
      {
        heading: "Signs your pacing is off",
        bullets: [
          "You get bored watching your own rough cut at normal speed.",
          "A clip ends a full second after the idea already landed.",
          "Every cut arrives at the same interval, like a metronome.",
          "A quiet, emotional beat is buried under three quick shots.",
          "You keep adding music to cover a sequence that simply runs long.",
        ],
      },
      {
        heading: "Silence as punctuation",
        paragraphs: [
          "Editors fear a gap of silence and rush to fill it with music. That habit flattens the whole piece. A beat of quiet after a heavy line gives the words room to land.",
          "Try pulling the music out for two seconds at a turning point. The drop does more than a swell would. Then bring it back under the next line and let the contrast do the work.",
        ],
      },
      {
        heading: "Cut on motion, not on thought",
        paragraphs: [
          "Cuts hide best when they ride a movement already in the frame. A hand gesture, a turn of the head, a step forward. The eye follows the motion and misses the seam.",
          "When no motion exists, cut on the end of a phrase or the start of a new idea. The listener's attention naturally resets there, so the edit feels invisible.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Vary shot length on purpose so the edit never feels mechanical.",
          "Slow down before a reveal and tighten up right after it.",
          "Use a beat of silence as punctuation instead of filling every gap.",
          "Cut on movement or on phrase endings to hide the seam.",
        ],
      },
    ],
  },
  {
    slug: "editing-color-correction-basics",
    title: "Color Correction Before Color Grading Explained",
    excerpt:
      "Color correction fixes exposure and white balance so footage looks normal. Color grading adds mood on top. Do them in that order or you fight yourself.",
    date: "2025-06-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Correction is repair and grading is style. Correction makes footage look the way the room actually looked. Grading makes it look the way you want the story to feel.",
          "Skip correction and grade first and you end up grading around problems you never fixed. The shadows stay muddy, the skin stays green, and no amount of warm tint rescues it.",
          "The order is not a preference. It is the only sequence that lets each step build on solid ground.",
        ],
      },
      {
        quote:
          "Fix the frame until it looks real, then color it until it looks right. Never the other way around.",
      },
      {
        heading: "Correction is repair work",
        paragraphs: [
          "Start with exposure. Set the blacks so nothing crushes and the whites so nothing clips. A well-exposed frame gives every later adjustment room to move.",
          "Then fix white balance so a white wall reads as white. If the whole scene leans warm or cool, every color you add later inherits that mistake.",
        ],
      },
      {
        heading: "A correction checklist",
        bullets: [
          "Set black and white points so the image has full range.",
          "Neutralize the white balance on a known white or gray object.",
          "Match exposure across shots so cut points do not flicker.",
          "Check skin tones against a shot that already looks correct.",
          "Correct each clip before adding any creative look.",
        ],
      },
      {
        heading: "Grading is a choice",
        paragraphs: [
          "Once the footage looks real, grading becomes fun. You can push a cool shade into the shadows for a night scene or warm the highlights for a memory. The look carries emotion.",
          "Apply the grade through an adjustment layer, not clip by clip, when you want a scene to share one mood. That keeps the look consistent and easy to change later.",
        ],
      },
      {
        heading: "Consistency between shots",
        paragraphs: [
          "Two shots cut next to each other reveal any color drift instantly. A slightly warmer face on the right side of the cut reads as a mistake even when nobody can name it.",
          "Build a reference frame from the best-lit shot and match every other clip to it. Consistency reads as polish far more than an aggressive look ever does.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct exposure and white balance before you add any creative look.",
          "Match shots to a reference frame so cuts do not visibly flicker.",
          "Apply scene-wide grades on an adjustment layer for consistency.",
        ],
      },
    ],
  },
  {
    slug: "editing-multicam-sync-workflow",
    title: "A Multicam Sync Workflow That Saves Hours",
    excerpt:
      "Multicam editing is only painful when sync is guesswork. A repeatable sync and switch workflow turns hours of angles into a calm cutting session.",
    date: "2025-10-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Multicam editing is fast when every angle shares a common sync point. Capture a clap or a clear camera flash at the top, then every tool can line the angles up in one move.",
          "The pain people describe is usually a sync problem wearing a costume. Fix sync once and the rest of the session becomes clicking between views.",
          "Plan for it on set and the edit takes minutes. Skip it and you spend the day nudging clips by eye.",
        ],
      },
      {
        quote:
          "Sync is the whole job. Once the angles agree on time, cutting multicam is just choosing which face to look at.",
      },
      {
        heading: "Sync before you cut",
        paragraphs: [
          "Clap once and hold it so the sound wave lands on every audio track at the same instant. Drop those clips on a timeline and align the spikes. Now the angles move together forever.",
          "If you forgot the clap, use the audio waveform from a clean mic and match it across cameras. The eye can miss a frame or two, but the waveform will not.",
        ],
      },
      {
        heading: "Multicam habits worth building",
        bullets: [
          "Give each camera a clear name like wide, host, and guest.",
          "Record audio separately and sync it to the camera picture.",
          "Load every angle into one multicam clip before editing starts.",
          "Keep the wide shot on top as your fallback and safety cut.",
          "Cut the audio story first, then switch picture to match it.",
        ],
      },
      {
        heading: "Switching angles with intent",
        paragraphs: [
          "Do not cut to a new angle just because you can. Switch when the speaker changes, when the conversation turns, or when a reaction matters more than a word.",
          "Return to the wide shot when you need a reset. Wide angles lower the pressure and give the viewer a moment to catch up before you push back in.",
        ],
      },
      {
        heading: "Cutting the audio first",
        paragraphs: [
          "Lay the full conversation down as a single audio track and shape that story before you touch the picture. The audio carries the narrative; the angles are decoration on top.",
          "With the audio locked, switching cameras becomes quick and low-stakes. You are matching a known script to faces, not searching for the story inside six streams at once.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Capture a sync point on set so every angle shares one time reference.",
          "Name cameras and load them into a single multicam clip.",
          "Edit the audio story first, then switch picture to serve it.",
          "Use the wide shot as a reset, not a resting place.",
        ],
      },
    ],
  },
  {
    slug: "editing-first-assembly-cut",
    title: "Building a First Assembly Cut Without Drowning",
    excerpt:
      "A first assembly cut is meant to be ugly. Watch it whole, resist polishing, and let a rough sequence show you which scenes really carry the story.",
    date: "2026-01-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "An assembly cut is the first version of the whole piece, put together fast so you can finally watch the story end to end. It is supposed to be rough.",
          "The trap is polishing while you assemble. You spend two hours smoothing one scene, then discover the scene does not belong. That time is gone.",
          "Assemble with the lights off and the quality bar low. You are checking structure, not finish.",
        ],
      },
      {
        quote:
          "Your first assembly is a question, not an answer. It asks whether the story works before you spend a week making it pretty.",
      },
      {
        heading: "Watch it once, notes in hand",
        paragraphs: [
          "Play the assembly from the top without stopping to fix anything. Keep a pad open and write down the moment you get bored, confused, or moved.",
          "Those reactions are the real feedback. A bored stretch means something is too long. Confusion means a missing piece. A moved moment is a keeper to protect in later cuts.",
        ],
      },
      {
        heading: "Rules for a throwaway first cut",
        bullets: [
          "Use every clip you might need, then remove what fails.",
          "Do not add music, titles, or effects yet.",
          "Leave obvious rough edges so you are not tempted to preen.",
          "Keep the cuts approximate and fix timing later.",
          "Name the file assembly so you never mistake it for a final.",
        ],
      },
      {
        heading: "Finding the story spine",
        paragraphs: [
          "Once the whole thing is on screen, the real story tends to appear. Certain scenes carry the thread and others repeat or wander. The assembly is how you see the difference.",
          "Move the keepers earlier if they earn it. A strong moment buried at the end may belong near the top, and you only learn that by watching the full run.",
        ],
      },
      {
        heading: "When to stop assembling",
        paragraphs: [
          "Stop when the piece plays from start to finish and you can follow it. It does not need to be good. It needs to be complete so feedback can be about the story instead of the gaps.",
          "Then put it down for a night. A fresh watch in the morning shows the real problems faster than another hour of staring at the same frame.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Assemble fast and rough so you can watch the full story sooner.",
          "Take notes while watching instead of stopping to fix every clip.",
          "Use the assembly to find the scenes that carry the narrative.",
          "Rest overnight before the first real pass of feedback.",
        ],
      },
    ],
  },
  {
    slug: "editing-jump-cuts-talking-head",
    title: "Jump Cuts in Talking Head Video: Use or Hide",
    excerpt:
      "Jump cuts either speed up a talking head or pull the viewer out of it. Learn how to hide them, or how to use them as a deliberate style choice.",
    date: "2026-05-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A jump cut is what you get when you remove a chunk of a continuous take and the picture snaps to a new position. Used carelessly it looks like a glitch. Used on purpose it can tighten a monologue.",
          "The internet trained audiences to accept visible jump cuts in vlogs and tutorials. A formal film or a polished brand video still reads them as mistakes.",
          "Decide which world your video lives in before you choose whether to hide the cuts or leave them bare.",
        ],
      },
      {
        quote:
          "A jump cut is either a tool or a scar. The difference is whether you chose it or the footage chose for you.",
      },
      {
        heading: "How to hide a jump cut",
        paragraphs: [
          "Cut away to a related shot and back. The B-roll gives the eye a new frame and the jump disappears. This is the standard cover and it works every time.",
          "You can also punch in slightly and hold that crop across the cut. The change in framing reads as a new shot, so the position jump stops registering as an error.",
        ],
      },
      {
        heading: "Ways to smooth a talking head",
        bullets: [
          "Cover the cut with B-roll tied to the words being spoken.",
          "Switch to a tighter crop so the change in framing hides the jump.",
          "Use a quick dissolve when the jump is small and the pace is gentle.",
          "Add a subtle motion or zoom so the frame never sits perfectly still.",
          "Cut on a gesture so the movement carries the eye across the seam.",
        ],
      },
      {
        heading: "When jump cuts become style",
        paragraphs: [
          "In a fast tutorial or a personality-driven vlog, visible jump cuts create energy and trim dead air without a cover shot. The audience expects them and barely notices.",
          "The rule for this style is commitment. If you show one jump cut, show them all, so the rhythm feels chosen rather than sloppy. A single stray jump in an otherwise clean edit reads as a mistake.",
        ],
      },
      {
        heading: "Deciding per video",
        paragraphs: [
          "Ask who is watching and what they expect. A corporate interview and a YouTube explainer call for different treatment even when the raw footage looks identical.",
          "Match the edit to the tone of the piece. Consistency inside one video matters more than which choice you make.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Hide jump cuts with B-roll or a changed crop when polish matters.",
          "Leaving jump cuts visible works only when the style stays consistent.",
          "Read the audience and the tone before choosing your approach.",
        ],
      },
    ],
  },
  {
    slug: "editing-export-settings-delivery",
    title: "Export Settings That Match Where Video Plays",
    excerpt:
      "The wrong export settings undo hours of editing. Match resolution, bitrate, and codec to the platform so your video looks the way you cut it.",
    date: "2026-09-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "Export settings should match the destination. A vertical clip for a phone feed and a 4K master for a client are not the same file, and one preset cannot serve both well.",
          "Start from where the video will play, then work backward to codec, resolution, and bitrate. That order keeps you from exporting a giant file nobody can use.",
          "The goal is simple. The video should look on their screen like it looked on yours.",
        ],
      },
      {
        quote:
          "The export is the last place an edit can break. Get lazy here and the cleanest timeline ships looking soft and washed out.",
      },
      {
        heading: "Know the destination first",
        paragraphs: [
          "Social feeds re-compress whatever you upload, so deliver a high-quality file and let the platform handle the rest. Downscaling a crisp export always beats upscaling a soft one.",
          "For broadcast or client delivery, ask for specs before you render. Frame rate, color space, and audio layout are easier to honor up front than to fix after a rejected handoff.",
        ],
      },
      {
        heading: "Export settings cheat sheet",
        bullets: [
          "Use H.264 for web uploads and ProRes for editing handoffs.",
          "Match the frame rate of your footage to avoid judder.",
          "Keep 1080p for fast turnaround and 4K only when the source supports it.",
          "Aim for a mid-range bitrate so quality holds without a huge file.",
          "Export audio as AAC at a clean level with no clipping.",
        ],
      },
      {
        heading: "Bitrate versus file size",
        paragraphs: [
          "Bitrate is how much data each second of video gets. Push it too low and the picture turns blocky in motion. Push it too high and you wait an hour for a file the platform will shrink anyway.",
          "For 1080p web video, a mid-range bitrate is plenty. Save the heavy numbers for a master file you archive, and export a lighter version for everyday upload.",
        ],
      },
      {
        heading: "Checking the file before you upload",
        paragraphs: [
          "Watch the exported file, not the timeline, before you call it done. Exports can reveal soft focus, audio drift, or a black frame that the preview never showed.",
          "Check the first and last seconds, the loudest moment, and any title card with small text. Those spots fail most often, and they are quick to scan.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose export settings from the destination backward, not from habit.",
          "Keep a high-quality master and a lighter version for uploads.",
          "Match frame rate to the footage so motion stays clean.",
          "Always watch the exported file before delivery, not just the timeline.",
        ],
      },
    ],
  },
];
