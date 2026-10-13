import {
  Activity,
  Brain,
  Clock,
  Film,
  PenLine,
  Repeat,
  Scissors,
  Type,
  Waves,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch50: BlogPost[] = [
  {
    slug: "shorts2-caption-timing",
    title: "Caption Timing That Actually Keeps Viewers Watching",
    excerpt:
      "Caption timing decides whether viewers read or leave. Sync short captions to speech so every line lands right where the eye already expects it.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Caption timing is the delay between a spoken word and its text appearing on screen. Keep that gap under a quarter second and viewers stop noticing the captions at all. Let it drift past half a second and the eye starts hunting, which is the moment people swipe away.",
          "Most editors sync a short once and move on. I review every caption track twice, once for the words and once for the timing, because a line that arrives late reads like a mistake even when the copy is flawless.",
          "None of this requires fancy software. A timeline and fifteen minutes of attention will get a short most of the way there. What it requires is refusing to trust the automatic sync and checking the result the way a viewer will actually experience it.",
        ],
      },
      {
        heading: "Where the drift actually comes from",
        paragraphs: [
          "Drift rarely starts as laziness. It starts with auto-transcription that guesses at pauses, then gets compounded when an editor shifts a whole block instead of fixing one word. By the end, the captions are technically present and practically useless.",
          "The other source is speech speed. A speaker who accelerates mid-sentence leaves the text lagging, while a slow delivery leaves words hanging on screen after the voice has moved on. Timing is not one setting you set once. It changes line by line, and someone has to measure it.",
          "A third source is the platform. Some tools render captions with a built-in offset, so the track looks correct in the editor and plays back late in the feed. I export a test clip and watch it inside the app before I trust any timing pass done on the desktop.",
        ],
      },
      {
        quote:
          "A caption that appears a beat late teaches the viewer to distrust the whole edit. The words do not have to be wrong for the short to feel broken.",
      },
      {
        heading: "A timing pass you can run in five minutes",
        bullets: [
          "Scrub the timeline at half speed and watch the captions instead of the footage. Every late line shows up in one pass.",
          "Fix the spoken word, not the block. Nudging a whole group creates fresh drift at both edges.",
          "Cut the caption the instant the syllable ends. Text that lingers past the sound feels heavier than it is.",
          "Leave a small breath between captions. Two lines touching on screen merge into a wall the eye cannot scan.",
          "Rewatch on a phone with the sound off. Silent viewing exposes timing problems faster than audio ever will.",
        ],
      },
      {
        heading: "Why the eye trusts a well-timed short",
        paragraphs: [
          "Reading runs faster than listening, so viewers finish a caption before the speaker finishes the sentence. When the next line lands on cue, the brain reads ahead, feels competent, and stays comfortable. When it lands late, that same brain stalls and starts negotiating with the thumb.",
          "I think of caption timing as a handoff. The voice passes meaning to the text, and the text takes over for anyone watching on mute. A clean handoff is invisible. A fumbled one is the only thing the viewer remembers.",
          "That is why I treat timing as part of the edit, not a finishing step. It sits alongside the cut decisions, and it gets the same attention I give a punchline.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Target a quarter second or less between speech and text.",
          "Fix individual captions instead of shifting whole blocks.",
          "Review at half speed, then review again with the sound off.",
        ],
        paragraphs: [
          "Timing is the least glamorous part of a short and the fastest way to lose a viewer. Spend the extra pass. Nobody credits good timing, but everybody feels bad timing and leaves.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-auto-vs-manual-captions",
    title: "Auto Captions vs Manual: What Shorts Editing Needs",
    excerpt:
      "Auto captions get you most of the way. The last stretch, names, numbers, and punchlines, is exactly what decides whether a short reads clean.",
    date: "2024-04-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "Auto captions get a short to roughly ninety percent accuracy in seconds, and that is a genuine bargain. The remaining ten percent is where the value hides. Names, numbers, product terms, and punchlines are what the tools miss most, and they are also the words a viewer notices getting mangled.",
          "So the real question is not whether to use auto captions. It is where to stop and edit by hand.",
        ],
      },
      {
        heading: "The economics of transcription",
        paragraphs: [
          "Manual transcription of a sixty-second clip takes twenty to forty minutes if you type every word. Auto transcription takes two minutes and then ten more to correct. The math favors auto for almost every creator, as long as the correction step actually happens.",
          "The correction step is the whole game. Auto tools fail predictably: proper nouns, homophones, and anything said with emphasis. Emphasis is the cruel part, because the lines you stressed are the lines the tool guesses worst, and those are the lines carrying your short.",
          "There is a middle path the cost math misses. For short clips with heavy jargon, I skip auto transcription and type the captions by hand from the start, because correcting a bad transcript for specialized vocabulary takes longer than writing it clean. The tool still wins on casual talking-head footage.",
        ],
      },
      {
        quote:
          "Run auto captions to save the typing. Run them again to catch the mistakes. The second pass is not optional.",
      },
      {
        heading: "Where manual editing pays off",
        bullets: [
          "Proper nouns of every kind: brands, people, places, and anything with an unusual spelling.",
          "Numbers spoken quickly, where the tool writes fifteen when the speaker said fifty.",
          "Industry terms it has never learned and will guess at with confidence.",
          "Punchlines and tag lines, where a single wrong word drains the joke or the point.",
          "Words spoken over background music, which transcription handles poorly.",
        ],
        paragraphs: [
          "The list works as a filter rather than a rulebook. When a tool nails every word on a clip, I leave it alone and spend the saved time editing the pacing instead. When it fumbles even one name, the whole track gets a manual read, because a single visible error makes viewers doubt the rest.",
        ],
      },
      {
        heading: "The hybrid workflow I use",
        paragraphs: [
          "I let the tool transcribe, then I read the captions as a script before I touch the edit. Reading them as text exposes errors faster than watching them scroll, because I am not distracted by the footage. Anything that reads oddly gets checked against the audio.",
          "Then I fix style in the same pass. The tool capitalizes and punctuates for its own convenience, not for a vertical short. I strip the punctuation that adds clutter, split the long lines, and fix the cadence so each caption matches how the line is actually spoken.",
          "The last step is a watch-through at normal speed with the captions on and the sound low. Louder than a whisper, quieter than a conversation, roughly how a viewer checks a short in public. Any line that is hard to follow at that volume gets shortened or moved.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Auto captions are the starting point, never the finished track.",
          "Names, numbers, and emphasized lines need a hand check.",
          "Read captions as plain text to catch errors faster.",
        ],
        paragraphs: [
          "The gap between a polished short and a sloppy one is often just the correction pass. Auto tools earn their keep every time, and they still need a human who reads the result.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-caption-style-readability",
    title: "Caption Styling That Keeps Text Readable on Shorts",
    excerpt:
      "Caption styling is a readability problem before it is a design one. Get size, contrast, and line length right and the color debate mostly solves itself.",
    date: "2024-07-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Every caption style question collapses into one: can a stranger read this line in half a second on a phone, mid-scroll, over whatever footage is behind it? If the answer is yes, the style works. If it is no, no amount of font personality saves it.",
          "I start with readability and treat appearance as a constraint on it. That order keeps me out of the trap where a style looks great in the editor and fails on a tiny screen.",
        ],
      },
      {
        heading: "Size and line length before style",
        paragraphs: [
          "A caption on a vertical short should take up real estate. Text that looks oversized on a monitor is usually correct on a phone, because the viewer holds the phone at arm's length and reads while the footage moves.",
          "Line length matters just as much. Two to four words per line reads cleanly. Six words forces the eye to track across the frame, and tracking breaks the second a hard cut lands behind the text.",
          "I also cap the number of lines on screen at any moment. Two stacked lines are readable at a glance if the words are chosen well. Three lines and up, the viewer is reading instead of watching, and the footage becomes a backdrop for a paragraph.",
        ],
      },
      {
        quote:
          "If the viewer has to pause to read a caption, the caption has already slowed the short. Speed of reading is the only review that counts.",
      },
      {
        heading: "Contrast and color",
        bullets: [
          "Put a dark outline or shadow behind light text. Bare text over footage disappears against light backgrounds.",
          "Use one highlight color for the word that carries the line. Multiple colors turn a caption into wallpaper.",
          "Avoid thin fonts. Strokes that look elegant at full size vanish at phone resolution.",
          "Test against your brightest and busiest scene, not your calmest one.",
          "Keep the active word and the rest of the line at different weights so the eye knows where to land.",
        ],
        paragraphs: [
          "Contrast is not only about light and dark. It is about separation. Text with a shadow reads even against a bright sky, and text inside a solid box reads on anything, though the box can feel heavy on a clean shot. I pick the lightest treatment that still separates, then test it against the busiest frame in the short.",
        ],
      },
      {
        heading: "The template trap",
        paragraphs: [
          "Preset caption templates are a fast way to a consistent look, and a fast way to blend into everyone else using the same preset. The fix is not to avoid templates. It is to treat the preset as a starting point and adjust two things: the weight of the highlighted word and the amount of empty space around each line.",
          "I also match the caption style to the content. A calm explainer short reads fine in a clean, low-contrast style. A fast comedy short needs bolder text that pops between cuts. The style should follow the tempo of the edit, not the mood board.",
          "Consistency across shorts matters more than any single style choice. Once I settle on a look, I keep the same weight and the same margins for a whole run of shorts, so returning viewers recognize the channel before they read the name. The style becomes a signature instead of a lottery.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge every style on a phone, mid-scroll, with the sound off.",
          "Keep lines short and contrast high regardless of the palette.",
          "Use templates as a base, then bend them to the tempo of the edit.",
        ],
        paragraphs: [
          "Styling is downstream of reading. Solve the reading problem and the design part becomes a small set of choices you can make quickly and stop second-guessing.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-cut-rhythm-short-form",
    title: "Cut Rhythm: Editing Pace That Holds Attention",
    excerpt:
      "Cut rhythm is not cutting fast. It is placing each cut where the viewer's attention naturally resets, then breaking that pattern on purpose.",
    date: "2024-10-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Cut rhythm is the pattern of your edits across a short, not the raw speed. A cut can land too early and break a thought, or too late and let the energy sag. The skill is placing each cut where attention naturally resets, then breaking the pattern once it becomes predictable.",
          "New editors treat fast cutting as a virtue. It is not. Constant cutting at the same interval flattens the video into one long texture, and the viewer stops feeling any of it.",
        ],
      },
      {
        heading: "Cuts are punctuation",
        paragraphs: [
          "A cut does the work a comma or a period does in writing. It ends a thought or separates two ideas. If you scatter cuts randomly, the short reads like a sentence with commas between every word. The viewer can parse it, and it is exhausting.",
          "I map my cuts to beats of the script before I touch the timeline. Each change of idea gets a cut. Within one idea, I hold the frame and let the delivery carry it. The result feels faster than it is, because every cut marks something.",
          "Long-form editing rewards patience, so creators trained on it often cut shorts too slowly. The instinct to let a shot breathe fights the format. A short has fewer ideas, which means each one has to arrive sooner and clear out faster, and the edit is where that compression happens.",
        ],
      },
      {
        heading: "Where the pace tends to break",
        bullets: [
          "The opening held too long: three seconds of a static face before the first cut tells the viewer nothing is coming.",
          "The middle cut at a fixed interval: a metronome rhythm reads as mechanical.",
          "The ending with no acceleration: the last five seconds should compress toward the payoff, not coast.",
          "The cut on a breath: slicing mid-breath sounds like a glitch and reads as an error.",
          "The j-cut that arrives with the wrong audio: moving sound before picture only works when the sound belongs to the next idea.",
        ],
        paragraphs: [
          "These breaks usually share a cause. The editor cut on the timeline instead of in their head. Reading the script out loud and marking where your own attention dips is a faster way to find the slow spots than scrubbing frame by frame, because the dips map directly to the cuts that need to move.",
        ],
      },
      {
        quote:
          "Speed is not a style. Rhythm is. Two shorts cut at the same pace can feel entirely different depending on where the cuts fall.",
      },
      {
        heading: "Reading the waveform",
        paragraphs: [
          "I cut with the waveform visible. Spoken audio has natural valleys between phrases, and those valleys are the cleanest places to cut. Cutting inside a peak slices a word in half, and even when it is inaudible, the missing breath makes the edit feel thin.",
          "When I want contrast, I break the waveform rule deliberately. One cut placed hard in the middle of a stressed word can add a jolt. That only works because the rest of the short respects the valleys, so the break reads as intent.",
          "The final check is watching the short twice in a row without stopping. If the second pass feels smoother than the first, the rhythm is working. If it feels repetitive, one interval has taken over, and I look for the cut that needs to move a beat earlier or later.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat cuts as punctuation, one per idea.",
          "Vary the interval so the pace never becomes a metronome.",
          "Cut in the audio valleys, then break the rule once for effect.",
        ],
        paragraphs: [
          "Rhythm is what separates a short that feels edited from one that feels assembled. Slow down and place the cuts. The speed takes care of itself.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-vertical-framing-safe-zones",
    title: "Vertical Framing and the Safe Zones Editors Forget",
    excerpt:
      "Vertical framing lives and dies by the safe zones. Ignore the UI overlay and your caption, logo, or subject ends up behind a button nobody can move.",
    date: "2025-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Vertical framing is about one constraint: the app draws buttons, handles, and a caption line over your video, and those overlays sit in fixed places. Ignore them and your best content ends up buried under a like button or a username.",
          "The safe zone is the rectangle that survives every overlay. Everything you need the viewer to read or see has to live inside it. Footage can bleed to the edges, but information cannot.",
        ],
      },
      {
        heading: "The safe zones that matter",
        paragraphs: [
          "On most vertical platforms, the bottom of the frame is crowded with the caption block, the username, and the interaction buttons. The top holds a header of tabs. That leaves a central band where your subject and your on-screen text can survive.",
          "I keep a guide overlay in my editor showing those margins, and I check every export against it. A subject whose eyes sit above the safe line will look fine in the editor and get half-hidden in the feed.",
          "Different platforms draw different overlays, so a safe zone tuned to one app can fail on another. When I publish to more than one place, I build against the most crowded margins. It costs a little empty space on the roomier app and saves a redesign on the tighter one.",
        ],
      },
      {
        heading: "What usually ends up outside the safe zone",
        bullets: [
          "Captions placed too low, where the platform's own caption block sits on top of them.",
          "Subjects framed by a horizontal crop, so their head lands in the header strip.",
          "Logos and watermarks tucked into a corner that an interaction button covers.",
          "On-screen prices or links parked at the very bottom, exactly where the UI lives.",
          "Subtitles stretched across the full width, so the first and last words bleed off the edges.",
        ],
        paragraphs: [
          "The list looks obvious written down, and it still happens on most first exports. Editors frame the shot in a full-screen preview where nothing overlays the video. Switching to a device mockup, or dropping a still of the app over the frame, makes the collision impossible to miss.",
        ],
      },
      {
        quote:
          "The safe zone is not a suggestion from the platform. It is the boundary between a short people can read and one they have to guess at.",
      },
      {
        heading: "Reframing instead of cropping",
        paragraphs: [
          "The lazy move is to drop horizontal footage into a vertical canvas and crop the sides. That centers the shot and ignores where the subject actually sits. The better move is to reframe: scale and nudge so the subject lands in the central band.",
          "For talking-head footage, I anchor the eyes in the upper third of the safe zone and let the empty space fall below the chin where the caption block will sit anyway. For action footage, I track the movement and keep the point of interest inside the band as it moves.",
          "The extra minute of reframing is what makes a vertical short look composed rather than converted. Cropping is a decision not to decide.",
          "For footage I shoot myself, I frame vertically from the start and keep the subject centered high. That removes most reframing work, and it means the raw clip already respects the safe zones. Shooting for the crop is a habit worth building before the edit ever begins.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep every piece of information inside the central safe band.",
          "Check exports against a margin guide, not just the editor preview.",
          "Reframe footage to the subject instead of cropping to the center.",
        ],
        paragraphs: [
          "Vertical framing rewards planning. Know where the overlays sit before you shoot, and the edit becomes a matter of placing the subject where the platform cannot cover it.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-first-two-seconds-edit",
    title: "Editing the First Two Seconds of a Short for Retention",
    excerpt:
      "The first two seconds of a short are an editing problem, not a writing one. Motion, text, and a cut decide whether the scroll stops before a word is spoken.",
    date: "2025-04-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "The first two seconds of a short are decided before the script matters. The viewer is mid-scroll, volume often off, and their thumb is already loaded. What stops it is almost never a clever sentence. It is motion, on-screen text, or a cut that signals something is happening.",
          "I edit the opening as its own piece. It gets its own timing pass, its own text pass, and its own review with the sound off, because that is how most viewers will meet it.",
        ],
      },
      {
        heading: "The first frame is a thumbnail",
        paragraphs: [
          "The frame a viewer sees before playback is the actual thumbnail, regardless of what you chose on upload. If that first frame is a blank wall or a mouth mid-syllable, the scroll continues. If it is a face mid-expression or a readable phrase, the thumb slows.",
          "I pick the opening frame deliberately. Often I trim a few frames off the front so playback starts on the most legible moment, even if the audio technically began earlier.",
          "That frame is also the silent pitch. If it contains a word or a face that signals the topic, a scrolling viewer gets the premise without waiting for playback. I choose it the way I choose a title, because for a fraction of a second it is the title.",
        ],
      },
      {
        quote:
          "You cannot write your way past a dead first frame. Motion and text buy the seconds that give the script a chance.",
      },
      {
        heading: "Edits that buy the first two seconds",
        bullets: [
          "Open on motion. A move, a reveal, or a hand entering frame tells the eye something is in progress.",
          "Put the hook in text immediately, so silent viewers get the premise without pressing play sound-on.",
          "Cut once within the first second to establish that this is edited, not a static clip.",
          "Start the audio on a stressed word, not on a breath, so the first sound arrives with energy.",
          "Skip any intro card. A logo before the content is a two-second tax most shorts cannot afford.",
        ],
      },
      {
        heading: "What to cut from the front",
        paragraphs: [
          "The biggest offender is the setup breath. Most takes begin with an inhale and a small throat clear. Trim that and the short starts on the actual first word, which can feel abrupt in the editor and correct in the feed.",
          "The second offender is context. If the first line explains the video instead of delivering it, move that line later or delete it. The viewer does not need to know what kind of short they are watching before they have a reason to care.",
          "I keep a rule for myself: if the first two seconds could be removed without changing anything, they have already failed. Every frame up front should be doing work that the rest of the short cannot do.",
          "I also check the first sound separately from the first image. Sometimes the strongest frame and the strongest word do not arrive together, and a trim of two or three frames can sync them. When they line up, the opening feels intentional instead of lucky.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose the opening frame like a thumbnail.",
          "Lead with motion and on-screen text, not a spoken setup.",
          "Cut the breath and the context from the front.",
        ],
        paragraphs: [
          "Two seconds is a tiny budget with an outsized return. Edit the opening harder than any other part and the retention curve will reflect it.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-sound-design-shorts",
    title: "Sound Design for Shorts Without Crushing the Voice",
    excerpt:
      "Sound design in a short should support the voice, not compete with it. Loud music feels energetic in the editor and unlistenable on a phone speaker.",
    date: "2025-08-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Sound design in a short has one job: make the voice easy to hear and the edit feel alive. Most shorts fail the first half of that. Music sits too loud, the bass muddies the speech, and a viewer on a phone speaker hears a wall of noise instead of a person talking.",
          "The fix is not better music. It is a mix that respects the voice as the main event and treats everything else as support.",
          "Every short gets the same treatment regardless of length. A fifteen-second clip with a bad mix loses viewers just as fast as a long one, and the fix is identical. Start with the voice and let everything else find its place under it.",
        ],
      },
      {
        heading: "Mixing voice against music",
        paragraphs: [
          "The voice is the anchor. I set it first and mix everything against it, not the other way around. Music that sounds balanced next to a silent track will almost always be too loud once speech returns.",
          "Phone speakers cannot reproduce bass. A music track with heavy low end loses its punch and adds mud on the exact device most viewers use. I often cut the low frequencies from a backing track so it sits above the voice instead of beneath it.",
          "I also ride the voice level by hand on the loudest lines. Compression helps, but a phone speaker still distorts on a shout, and a quick volume dip catches what the compressor misses. It is a small adjustment that keeps the mix clean on the worst playback device instead of the best one.",
        ],
      },
      {
        bullets: [
          "Duck the music under every spoken line, then let it rise in the gaps.",
          "High-pass the music track so the low end does not fight the voice.",
          "Keep a small headroom so the mix never clips when the speaker gets loud.",
          "Match music energy to the section, not the whole video. One loop for sixty seconds reads as wallpaper.",
          "Set the voice just under the ceiling, then bring music up until it is only felt, not noticed.",
        ],
        paragraphs: [
          "I keep effects on a separate audio track so I can mute the whole layer in one click. That makes it easy to check whether the short still works with zero sound design, which is a good test of whether the edit is carrying the weight or the effects are covering for it.",
        ],
      },
      {
        quote:
          "If a viewer reaches for a volume button to hear the talking, the sound design has already lost the short.",
      },
      {
        heading: "Foley and silence",
        paragraphs: [
          "Small sounds do a lot of work in a vertical short. A whoosh on a cut, a click on a caption reveal, a subtle hit on a punchline. These are seasoning. Used on every cut, they become a tic the viewer tunes out within a few seconds.",
          "Silence is the tool editors forget. Dropping the music for one beat before a reveal makes the reveal land harder than any riser. The empty space stands out precisely because the rest of the short is full.",
          "Effects that are slightly late read as sloppy, so I nudge each one to hit exactly on the cut. A whoosh that lands a frame after the edit sounds disconnected even if the viewer cannot name why. Place the sound on the frame, not near it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mix the voice first and set music against it.",
          "High-pass the music for phone speakers.",
          "Use silence and a few key sounds instead of constant effects.",
        ],
        paragraphs: [
          "Good sound design in a short is mostly restraint. The viewer should never think about the mix. They should just hear the point and keep watching.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-repurpose-long-to-shorts",
    title: "Repurposing Long Videos Into Shorts That Stand Alone",
    excerpt:
      "Repurposing long videos into shorts fails when the clip depends on context. A short has to carry its own premise, payoff, and reason to exist.",
    date: "2025-12-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Repurposing a long video into a short sounds simple until you try it. The moment you pull out of context needs the context to make sense. A short does not get to lean on an earlier segment, so the clip has to carry its own premise, its own payoff, and its own reason to exist.",
          "That is why I treat repurposing as a rewrite, not a trim. I am not extracting a piece of the long video. I am building a new short that happens to use some of its footage.",
        ],
      },
      {
        heading: "Shorts are not trailers",
        paragraphs: [
          "A trailer promises a payoff that lives somewhere else. A short has to deliver in full. The mistake is grabbing the most exciting thirty seconds of a long video and calling it done, when that moment only excites people who already watched the rest.",
          "The test is blunt. Show the clip to someone who has not seen the long video. If they are confused or unimpressed, the short is a trailer. If they get the point and feel something, it stands alone.",
          "I keep a folder of every long video I might repurpose and pull candidate moments from it over time. A clip that fails the stand-alone test today might work next week with a new opening line, so I do not delete the idea. I just decline to publish it until it can carry itself.",
        ],
      },
      {
        quote:
          "A repurposed short should be understandable to someone who will never watch the long video. If it only works for fans, it fails the feed.",
      },
      {
        heading: "Choosing the moment to repurpose",
        bullets: [
          "Pick a self-contained idea, not the climax of a longer argument.",
          "Check that the first three seconds make sense without a setup line.",
          "Confirm the payoff arrives inside the short rather than promising a later one.",
          "Look for moments where the point can be restated in a single line of on-screen text.",
          "Prefer footage that is visually interesting on its own, since the short has no room to explain a boring frame.",
        ],
        paragraphs: [
          "That filter sounds strict, and it should be. Most moments in a long video do not survive it. The ones that do tend to be short, self-contained, and a little surprising, which is exactly the shape a feed rewards. The rest stay in the source as chapters instead of becoming posts.",
        ],
      },
      {
        heading: "Reframing the context",
        paragraphs: [
          "Once I have the moment, I write a new opening line that gives the short its own premise. Sometimes that line comes from elsewhere in the long video. Sometimes I record it fresh. Either way, it exists so the clip can stand up without the audience knowing anything about where it came from.",
          "Then I reframe for vertical. Horizontal footage gets recomposed so the subject sits in the safe band, and captions carry the parts the original relied on a visual to explain. The short earns its own thumbnail, its own caption style, and its own pacing.",
          "I also rewrite the caption track from scratch for each short. The long video's captions carry assumptions and shorthand that a fresh viewer will not follow. Starting clean keeps the short readable on mute and forces me to say the premise plainly.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Repurpose by rewriting, not by trimming.",
          "Test whether the clip works for someone who never saw the source.",
          "Give every short its own premise line and its own vertical framing.",
        ],
        paragraphs: [
          "The long video is a quarry, not a mold. Pull the raw material, then build the short as if it were always meant to stand alone.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-on-screen-text-hooks",
    title: "Writing On-Screen Text Hooks for Silent Viewers",
    excerpt:
      "On-screen text is a second narrator for people watching on mute. Write it as a hook, not a transcript, and it can carry the entire short on its own.",
    date: "2026-04-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Most viewers meet a short on mute. That makes on-screen text a second narrator, one that has to tell the story without the audio doing any of the work. Treat it as a caption and you get a transcript. Treat it as a hook and it can carry the short alone.",
          "I write the on-screen text as its own pass, separate from the spoken script. The two should agree on meaning and diverge on wording, because reading the same sentence you are hearing is a waste of a channel.",
        ],
      },
      {
        heading: "Text as a second narrator",
        paragraphs: [
          "A good text line does something the voice cannot. It names the number the voice is circling. It states the claim the voice is building toward. It labels the moment so a silent viewer knows what they are looking at without an explanation.",
          "That means the text line is often shorter and sharper than the spoken line. The voice can ramble toward a point. The text has to land it in four words.",
          "There is a limit to how much text a silent viewer will absorb. Past a few cards, the short becomes something to read rather than watch, and the footage stops mattering. When the text is doing too much work, the real problem is that the idea needs more footage, not more words.",
        ],
      },
      {
        bullets: [
          "Keep a text hook on screen in the first second, before anyone presses play sound-on.",
          "State one idea per text card. Two thoughts on screen means neither gets read.",
          "Use text to carry what the voice implies, not to repeat it word for word.",
          "Place a payoff line at the moment of the reveal so mute viewers get the same punch as everyone else.",
          "Leave the text up long enough to read twice. If it flashes, it may as well not exist.",
        ],
        paragraphs: [
          "I keep a bank of text lines that work without audio and reuse the structures when a new short needs one. A number, or a short verdict the footage then answers. Those shapes travel across topics, and having them ready cuts the writing time for the visible layer down to minutes.",
        ],
      },
      {
        quote:
          "If the sound is off, the text is the video. Write it like the only thing the viewer will ever see.",
      },
      {
        heading: "Placement and rhythm",
        paragraphs: [
          "Text has to respect the same safe zones as everything else. I keep it in the central band, away from the caption block and the interaction buttons, and I avoid letting it collide with the platform's own caption line.",
          "Rhythm matters too. A card that changes on every beat feels frantic, and one that sits for ten seconds feels abandoned. I time text changes to the ideas in the short, so each card appears as a new thought begins and leaves when the next one arrives.",
          "I test the text pass by watching the short muted on a phone. If I can follow the whole thing and still feel the ending, the text is doing its job. If I need the audio to make sense of it, the visible layer is not finished.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write on-screen text as a separate pass from the spoken script.",
          "Use text to state what the voice only implies.",
          "Time card changes to ideas, and keep them in the safe band.",
        ],
        paragraphs: [
          "On-screen text is the cheapest way to survive a muted feed, and one of the easiest to get wrong. Write it with the same care you give the hook line, because for many viewers it is the hook line.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-loop-editing-short-length",
    title: "Loop Editing and Choosing the Right Short Length",
    excerpt:
      "Loop editing turns a short's ending into its beginning. Pick a length that matches the idea, then cut so the last frame pulls the viewer back in.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Loop editing is the practice of ending a short so it flows straight back into the first frame. Playback restarts without a seam, the viewer watches a second pass before they notice, and the platform reads that extra watch as retention. It is one of the few editing tricks that pays on both sides.",
          "It only works if the length already fits the idea. A padded short cannot loop, because the viewer feels the padding and leaves before the ending could pull them back.",
        ],
      },
      {
        heading: "Why loops work",
        paragraphs: [
          "A short that ends on a clean resolution tells the brain the task is done and invites the swipe. A short that ends on an open beat leaves a thread hanging, and the loop closes it by returning to the start. The viewer is not lost. They are finishing a thought.",
          "The first and last frames are the join. If the last frame matches or rhymes with the first, the restart is invisible. If they clash, the loop reads as a replay and the illusion breaks.",
          "Length also changes how the loop is perceived. A fifteen-second short can loop three times before a viewer consciously notices. A sixty-second short usually gets one repeat, and if the seam is not tight, that repeat feels like a mistake instead of a feature.",
        ],
      },
      {
        quote:
          "A looped short does not ask the viewer to watch again. It simply makes the ending feel unfinished, and the start feel like the answer.",
      },
      {
        heading: "Length by intent",
        bullets: [
          "A single fact or joke lands in ten to twenty seconds. Looping these is easy because the idea is small and repeatable.",
          "A short demonstration or before-and-after wants thirty to forty-five seconds, with the loop built on the transformation.",
          "A mini story needs closer to a minute, and it loops best when the ending echoes the opening line.",
          "Anything past a minute has to earn it. Padding a thin idea to hit a length is the fastest way to lose the loop.",
        ],
        paragraphs: [
          "I decide length before I decide shots. Starting from a target duration and filling it invites padding, which is fatal to a loop. Starting from the idea and letting it set the length keeps the short tight, and tight is what lets the seam work at all.",
        ],
      },
      {
        heading: "Cutting for the loop",
        paragraphs: [
          "I build the loop backward. I pick the final image first, then shape the opening so it can meet that image. Often that means trimming a hair off the front so the first frame sits closer to the last, or reordering two beats so the ending lands on the right note.",
          "The audio has to loop too. A music track that ends on a resolved chord signals closure, and closure kills the loop. I cut the audio so it ends mid-phrase, or I extend the music past the last visual frame so the sound carries into the restart.",
          "I watch the loop point at least five times in a row. Small jumps show up only after the third or fourth cycle, when the eye has memorized the last frame. Fixing those frames is what turns an accidental restart into a clean one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match the length to the idea before you think about looping.",
          "Build the ending and opening toward each other so the join disappears.",
          "Keep the audio unresolved so closure does not end the watch.",
        ],
        paragraphs: [
          "Loop editing is the last pass, not the first. Get the idea, the length, and the rhythm right, then shape the seam so the short feeds itself.",
        ],
      },
    ],
  },
];
