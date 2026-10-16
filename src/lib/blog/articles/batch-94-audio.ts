import {
  Activity,
  BarChart3,
  Flame,
  Layers,
  MessageSquare,
  Repeat,
  Scissors,
  Target,
  Waves,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch94: BlogPost[] = [
  {
    slug: "audio-cleanup-noise-reduction-basics",
    title: "Audio Cleanup: Cutting Noise Without Killing the Voice",
    excerpt:
      "Noise reduction works in small doses. Push it hard and the voice turns metallic. Here is how to clean a rough track without wrecking the take.",
    date: "2024-02-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Audio cleanup is the work of removing hiss, hum, and room sound while leaving the voice recognizable. Most of it happens in small moves, because the ear notices damage long before it notices a number on a meter.",
          "I have rescued thousands of rough recordings, and the tracks that fail are rarely the noisy ones. They are the ones where someone reached for heavy noise reduction first and never asked whether the noise was even the real problem.",
        ],
      },
      {
        heading: "Why aggressive noise reduction backfires",
        paragraphs: [
          "Noise reduction builds a profile of steady background sound, then subtracts that profile from the whole file. At low settings the math is precise. The trouble is that a voice shares frequencies with the noise around it, so every extra decibel of reduction carves into the voice as well.",
          "Push the amount past roughly half strength and you get the watery, metallic tone engineers call artifacts. Listeners cannot name it, but they feel it, and they start describing the speaker as distant or robotic. The fix is almost always a lighter touch, not a different plugin.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Noise reduction is subtraction. The harder you subtract, the more of the voice leaves with the noise, because the two live in the same frequencies.",
      },
      {
        heading: "A workable cleanup order",
        paragraphs: [],
        bullets: [
          "Start with a high-pass filter near 80 to 100 Hz to clear rumble and handling noise the compressor will otherwise amplify.",
          "Remove obvious clicks and plosives by hand before any broadband process, because those spikes fool a noise profile.",
          "Apply gentle noise reduction using a profile captured from a truly silent passage, and stop as soon as the voice thins out.",
          "Finish with a notch or de-hum filter only if a single tone survives the first three steps.",
        ],
      },
      {
        heading: "When to fix the room instead",
        paragraphs: [
          "If every take from the same mic needs heavy reduction, the problem is the space rather than the track. A moving blanket behind the speaker, a mic pulled closer to the mouth, and a door that actually closes will beat any plugin you own.",
          "I would rather spend twenty minutes hanging absorption than an hour per episode scrubbing artifacts. The best cleanup is the noise you never recorded in the first place, so fix the source before you fight the file.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Apply noise reduction in small amounts and check the result on cheap earbuds, where artifacts reveal themselves first.",
          "Handle clicks and plosives manually so your noise profile is built from clean silence.",
          "If every take needs aggressive reduction, change the recording setup before you change the plugin.",
          "Trust your ears over the meter. A quiet track that sounds natural beats a silent one that sounds synthetic.",
        ],
      },
    ],
  },
  {
    slug: "audio-mixing-dialogue-clarity",
    title: "Mixing Dialogue for Clarity When the Room Fights Back",
    excerpt:
      "Dialogue clarity comes from contrast, not volume. A voice reads clean when it sits above the noise and the music with consonants intact.",
    date: "2024-05-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "sound"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Dialogue clarity is about contrast, not level. A voice sounds clear when it sits above the room and above the music, with the frequencies that carry consonants still present. Turning the whole track up does none of that.",
          "I mix a lot of spoken audio, and the most common mistake is boosting the voice instead of clearing the space around it. Clarity is what remains after you remove what is covering it.",
        ],
      },
      {
        heading: "Cut before you boost",
        paragraphs: [
          "A narrow cut in the low-mid range often does more for intelligibility than a wide boost up top. When a voice sounds boxy, the culprit is usually energy between 200 and 400 Hz, and pulling a few decibels there lets the ear separate syllables.",
          "Boosts add gain and, with it, the risk of harshness. Cuts are quieter and more forgiving. Reach for them first, then add presence only if the voice still feels buried after the space around it is clear.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You do not make a voice clearer by making it louder. You make it clearer by making everything else quieter.",
      },
      {
        heading: "The mud range is not always the enemy",
        paragraphs: [
          "Every voice is different. Some speakers carry their warmth exactly where another speaker carries mud, so a cut that helps one take hollows out the next. Sweep the range while the audio plays and listen for the point where the boxiness leaves without the body going with it.",
          "I keep a gentle EQ curve and adjust it per take rather than applying the same preset to a whole channel. Presets are a starting point, and treating them as a finish line is how a series starts to sound stamped out.",
        ],
      },
      {
        heading: "Control level so words do not jump",
        paragraphs: [
          "Even a clean tone gets hard to follow when loud syllables leap above quiet ones. Light compression keeps consonants in reach of the quieter phrases, so the listener is not riding a volume knob in their head.",
          "Keep the gain reduction modest. Two to four decibels of movement is plenty for spoken word, and anything heavier starts to flatten the natural rhythm that makes a person sound like a person.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Sweep the 200 to 400 Hz range and cut only where the boxiness actually lives on that take.",
          "Add presence last, after the space around the voice is clear.",
          "Use light compression to even out words, not to crush dynamics flat.",
          "Compare your mix against a track you love and match the balance, not the volume.",
        ],
      },
    ],
  },
  {
    slug: "audio-loudness-normalization-lufs",
    title: "Loudness Normalization: Hitting the Right LUFS Target",
    excerpt:
      "Loudness normalization measures perceived volume in LUFS. Match the platform target and your audio stops getting turned down on playback.",
    date: "2024-08-26",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Loudness normalization is the process of measuring how loud a track feels, then adjusting it toward a target the platform expects. The unit is LUFS, short for loudness units relative to full scale. Streaming services read that number and turn loud uploads down to a common level.",
          "That last part is why you care. If your master is much louder than the target, the platform simply reduces it, and any distortion you baked in comes along for the ride. Over-compressing for volume buys you nothing on playback.",
        ],
      },
      {
        heading: "What the numbers mean",
        paragraphs: [
          "Integrated loudness measures the whole program. Short-term loudness tracks a rolling window and shows where a section drifts loud or quiet. True peak catches inter-sample spikes that a regular meter misses, which matters because those spikes clip after conversion.",
          "A podcast built for -16 LUFS integrated with a true peak near -1 dBTP will sit comfortably on most platforms. Video-first channels often aim a little lower. Check what your destination asks for and hit that number rather than guessing.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Loudness targets are a contract with the platform. Hit the number and your mix plays back the way you heard it in the room.",
      },
      {
        heading: "Normalize for feel, then check the peaks",
        paragraphs: [
          "I set loudness first, listening for a consistent feel across the whole episode, then I confirm true peak afterward. Loudness and flavor are two separate jobs, and mixing them together is how people end up with a track that measures right but sounds pinched.",
          "If a section reads hotter than the rest, fix it in the mix rather than the limiter. A quiet passage that sits five LUFS under the rest is a mixing problem, and a limiter will only smash the loud parts while leaving the gap intact.",
        ],
      },
      {
        heading: "Common ways the target goes wrong",
        paragraphs: [],
        bullets: [
          "Measuring only the loudest section and assuming the rest matches, when integrated loudness is an average across the whole file.",
          "Ignoring true peak until after export, when inter-sample clipping is already locked into the file.",
          "Slapping a limiter on the master to chase a number instead of balancing the mix underneath it.",
          "Matching loudness but not tone, so the track hits the target and still sounds thin on small speakers.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Learn your platform target and treat it as a fixed goal, not a suggestion.",
          "Measure integrated loudness across the full program, not just your favorite minute.",
          "Keep true peak below -1 dBTP so conversion does not introduce clips.",
          "Fix loudness drift in the mix, because a limiter cannot repair a bad balance.",
        ],
      },
    ],
  },
  {
    slug: "audio-desiser-tame-harsh-sibilance",
    title: "De-Essing: Taming Harsh Sibilance Without a Lisp",
    excerpt:
      "A de-esser reduces harsh sibilance on S and T sounds. Set the range and threshold with care or you trade one problem for a lisp.",
    date: "2024-11-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "A de-esser tames the sharp S and T sounds that make a voice pierce on headphones. It works like a compressor that only reacts to a chosen frequency band, pulling those moments down when they get too loud. Used lightly it is invisible, and used carelessly it leaves the speaker lisping.",
          "Sibilance lives mostly between 5 and 9 kHz, though it varies by voice and microphone. Finding the exact band on your own recording is half the job, and the plugin presets rarely find it for you.",
        ],
      },
      {
        heading: "Find the band before you set anything",
        paragraphs: [
          "Sweep a narrow boost across the high end while a harsh line plays, and note where the unpleasant edge peaks. That is your detection range. Set the de-esser to listen there and to act only when the energy crosses a threshold you choose.",
          "Then switch the plugin to a narrow band and listen closely. The goal is to shave the spike, not to dull the whole top end. If the air around the voice disappears, you are processing too wide a range.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A good de-esser is boring. You notice the harsh edges are gone, and you notice nothing else at all.",
      },
      {
        heading: "Static or dynamic",
        paragraphs: [
          "Static de-essing applies a fixed cut to the whole take, which is fast but often audibly dull. Dynamic de-essing triggers only when the harsh sound appears, which preserves brightness on the rest of the words. I reach for dynamic almost every time.",
          "Watch the gain reduction meter while the file plays. If it sits pinned for most of the take, your threshold is too low. The needle should flicker on the hot S sounds and rest between them.",
        ],
      },
      {
        heading: "Do not ignore the cause",
        paragraphs: [
          "Harsh sibilance is often a recording problem. An off-axis mic, a pop filter too far away, or a hard reflective wall behind the speaker all push the S sounds forward. A de-esser hides that, and a small change in mic placement might remove it.",
          "I fix placement and still keep a light de-esser on the channel. The two are partners rather than rivals, and together they beat either one pushed to its limit.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Find the harsh band by ear on each voice instead of trusting a preset.",
          "Use dynamic de-essing to keep brightness where the S sounds are not.",
          "Keep gain reduction small, three to five decibels on the loudest hits.",
          "Check mic angle and room reflections before you push the plugin harder.",
        ],
      },
    ],
  },
  {
    slug: "audio-eq-carve-space-for-voice",
    title: "EQ for Voice: Carving Space Instead of Boosting It",
    excerpt:
      "EQ for a voice works best as subtraction. Trim the frequencies that cover speech and the words become clear without added harshness.",
    date: "2025-03-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "sound"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "EQ for a voice is mostly subtraction. Every frequency you cut is space you hand back to the words, and every frequency you boost is a chance to introduce harshness. The best voice mixes I hear are built by trimming, not by lifting.",
          "That flips the instinct most people bring from music, where boosts feel like progress. On spoken word, a few well-placed cuts do more than any amount of added top end.",
        ],
      },
      {
        heading: "Start with the low end",
        paragraphs: [
          "A high-pass filter around 80 Hz removes rumble, desk thumps, and room energy you cannot hear on laptop speakers but the compressor will happily amplify. On male voices I often start near 70 Hz, on higher voices a little higher. Listen for the point where the chest tone stays and the mud leaves.",
          "Below the fundamental there is nothing but noise. Clearing it first gives every later move more room to work, and it prevents the low-mid buildup that makes a voice sound congested.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Boost and you add a problem to solve. Cut and you remove one. On voice, cutting wins almost every time.",
      },
      {
        heading: "Find the problem ranges by ear",
        paragraphs: [
          "Mud sits roughly between 200 and 400 Hz and makes a voice sound boxy. Honk lives near 800 Hz to 1 kHz. Harshness shows up around 3 to 5 kHz, which is also where presence lives, so this band is the hardest to handle. Cut too much and the voice loses life.",
          "Sweep with a narrow boost, find the worst offenders, then flip that boost into a gentle cut. Doing it this way trains your ear to name what you hear instead of guessing at a chart.",
        ],
      },
      {
        heading: "Shape the presence last",
        paragraphs: [
          "Once the low end is clean and the problem ranges are trimmed, decide whether the voice needs air around 6 to 10 kHz. A gentle shelf there can add polish, but only after the cuts are done. Adding air to a muddy track just makes brighter mud.",
          "I keep my moves small, one to three decibels, and check on phone speakers as I go. Small cuts survive translation, and large ones tend to fall apart when the playback system changes.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "High-pass first so rumble never reaches your compressor.",
          "Sweep to find muddy and harsh bands, then cut rather than boost them.",
          "Treat 3 to 5 kHz with care, since presence and harshness share that range.",
          "Add air last and keep every move small enough to translate on any speaker.",
        ],
      },
    ],
  },
  {
    slug: "audio-compression-voiceover-control",
    title: "Voiceover Compression: Level Control Without the Pump",
    excerpt:
      "Compression evens out a voiceover and keeps quiet words audible. Set attack, release, and ratio with restraint or the take pumps and breathes.",
    date: "2025-06-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Compression lowers the loudest moments so the quiet ones can be raised later. On a voiceover it keeps words at an even level, which lets the listener relax instead of chasing the volume. Set it well and nobody hears it. Set it badly and the track breathes in a way that is impossible to unhear.",
          "The two knobs people get wrong are attack and release. They control how fast the compressor grabs and lets go, and together they decide whether the voice sounds natural or seasick.",
        ],
      },
      {
        heading: "Ratio and threshold decide the feel",
        paragraphs: [
          "A ratio near 2 to 1 or 3 to 1 is plenty for spoken word. The threshold sets where compression starts, and for a voice you want it low enough to catch the loud syllables without clamping down on every breath.",
          "Watch the gain reduction meter and aim for peaks of three to five decibels on the hottest lines. If it never moves, the compressor is asleep. If it never rests, you are crushing the life out of the read.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Compression should make the voice easier to follow, not louder. The moment you hear it working, you have probably gone too far.",
      },
      {
        heading: "Attack fast, release slower",
        paragraphs: [
          "A quick attack catches the start of a loud word so it does not spike, while a slower release keeps the compressor from pumping between syllables. Fast attack plus fast release is the recipe for that gasping, unnatural sound.",
          "I set release long enough that the compressor holds through a phrase rather than loosening between every word. If the level rises and falls in a visible rhythm, ease the release until the movement smooths out.",
        ],
      },
      {
        heading: "Stack two gentle stages",
        paragraphs: [
          "One heavy compressor does damage. Two light ones, each doing a couple of decibels, stay transparent while still controlling the level. The first handles broad movement, and the second catches the stray peaks that slip past.",
          "After compression, apply makeup gain so the track returns to the level you started with before you compress. Keep the gain reduction modest and the whole chain sums to a voice that sounds even and untouched.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Use a low ratio and let the threshold do the heavy lifting.",
          "Set a fast attack with a slower release to avoid pumping between words.",
          "Split control across two gentle stages instead of one aggressive one.",
          "Add makeup gain so the compressed level matches the original, then compare.",
        ],
      },
    ],
  },
  {
    slug: "audio-room-tone-removal-dialogue",
    title: "Room Tone Removal: Making Dialogue Sound Close",
    excerpt:
      "Room tone removal strips reverb and reflections from dialogue. Get too aggressive and the voice sounds dead and unnaturally tight.",
    date: "2025-09-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Room tone removal reduces the reverb and reflections that make a voice sound distant. The goal is not silence. It is a voice that feels close, as if the speaker moved half a step toward the microphone after the fact.",
          "The tool works by analyzing the tail of each sound and shortening it. Push too far and the voice loses its natural decay, which leaves it sounding clipped and dead. Restraint matters here more than on almost any other process.",
        ],
      },
      {
        heading: "Find the reverb before you remove it",
        paragraphs: [
          "Play a line and listen for the space after the final word. That tail is the room. Estimate how long it lasts, then set your reduction to shorten it by a fraction rather than erase it entirely.",
          "A large, tiled room needs more care than a carpeted one, because the reflections carry more low energy. On those tracks, a light reduction and a small EQ cut in the low-mids often do more than a heavy reverb process.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You are not trying to make the room disappear. You are trying to make the listener forget it was ever there.",
      },
      {
        heading: "Watch for the dead-air trade",
        paragraphs: [
          "Reduction tends to leave a thin, airless quality when applied across a whole take. I check the sound between phrases for that artifact, because the gaps show damage faster than the words do. If the silence sounds processed, ease the amount back.",
          "Sometimes the better move is to reduce only the loudest reflections and leave the quiet parts alone. The ear forgives a little natural room. It does not forgive the metallic sheen that comes from over-processing.",
        ],
      },
      {
        heading: "Fix the recording when you can",
        paragraphs: [
          "If every take from the same space needs heavy reduction, the recording setup is the real issue. A mic closer to the mouth, a rug on the floor, and books on the shelves all reduce how much reverb reaches the capsule.",
          "I would rather move the mic ten centimeters than process the same room out of a hundred files. The closer the mic, the less room it hears, and the less you have to undo later.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Estimate the reverb tail by ear, then reduce a fraction of it rather than all of it.",
          "Check the gaps between phrases, where over-processing shows up first.",
          "Try a low-mid EQ cut before reaching for a heavier reduction setting.",
          "Move the mic closer to cut the room at the source instead of processing it out.",
        ],
      },
    ],
  },
  {
    slug: "audio-music-bed-ducking-levels",
    title: "Mixing Music Beds: Ducking Levels Under Speech",
    excerpt:
      "A music bed supports a voice when it ducks under speech. Static levels bury words, so the right move is movement keyed to the dialogue.",
    date: "2026-01-12",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "sound"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A music bed sits under the voice and lowers itself whenever the speaker talks. That movement is called ducking, and it is the difference between music that supports a video and music that fights it. A fixed level that works in one scene will bury words in the next.",
          "Ducking can be done with a sidechain, where the voice signal tells the music to lower, or by drawing volume automation by hand. Sidechain is faster, and automation is more precise. Most of my projects use a little of both.",
        ],
      },
      {
        heading: "How far to duck",
        paragraphs: [
          "A common starting point is to set the bed around 18 to 22 decibels below the dialogue when the voice is present. The exact number depends on the music, since a sparse piano tolerates less reduction than a dense drum loop.",
          "Set the amount by listening on small speakers. If the bed still competes with the words there, it is too loud, no matter what the meter says. The voice has to win every time it opens its mouth.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The music bed is a supporting actor. The moment you notice it more than the voice, it has taken a role it was never cast for.",
      },
      {
        heading: "Set the timing carefully",
        paragraphs: [
          "Ducking should start just before the voice, not after it, so the first syllable does not poke through at full music level. A short attack of maybe 50 to 100 milliseconds feels natural, and a slower release of a few hundred milliseconds avoids a pumping effect.",
          "Release that is too fast makes the bed jump between phrases, which is more distracting than a steady level. Stretch the release until the music breathes back gradually and the motion stops drawing attention.",
        ],
      },
      {
        heading: "Do not lean on ducking alone",
        paragraphs: [
          "Ducking helps, but arrangement does more. A bed with fewer instruments in the vocal range leaves room without any processing at all. Choosing the right track beats fixing the wrong one.",
          "I also ride the music through intros and outros, where there is no voice and the bed can stand forward. Letting the music lead in those moments makes the ducking under dialogue feel like a deliberate choice rather than a limiter.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Duck the bed 18 to 22 decibels under speech as a starting point, then refine by ear.",
          "Trigger the duck just before the voice so the first word never spikes.",
          "Use a slower release to stop the music from pumping between phrases.",
          "Pick beds with space in the vocal range so you rely on ducking less.",
        ],
      },
    ],
  },
  {
    slug: "audio-hum-removal-noise-gating",
    title: "Hum Removal and Noise Gating for Clean Tracks",
    excerpt:
      "Hum removal strips steady electrical tones while a noise gate silences the gaps. Together they clean a track without dulling the voice.",
    date: "2026-05-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "sound"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Hum removal targets the steady electrical tone that leaks into a recording, usually from power lines or cheap gear. A noise gate handles the other half of the problem by muting the track during pauses. They solve different issues, and confusing them wastes time.",
          "Hum is a specific pitch with harmonics, while hiss and room sound are spread across the spectrum. That difference tells you which tool to reach for, and picking the wrong one leaves the noise untouched.",
        ],
      },
      {
        heading: "Identify the hum frequency",
        paragraphs: [
          "Mains hum sits at 50 Hz in much of the world and 60 Hz in North America, and its problem is the harmonics that stack above it. A notch filter placed only on the root frequency leaves the audible buzz an octave or two higher completely intact.",
          "Use a harmonics-aware de-hum tool if you have one, or notch each harmonic by hand. Sweep to confirm the tone is gone without the voice going hollow, since a wide notch near the low end can thin a voice fast.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A gate cleans the silence. A notch cleans the tone. Apply the wrong one and the noise stays exactly where it was.",
      },
      {
        heading: "Set the gate so it stays invisible",
        paragraphs: [
          "A gate works by lowering the level whenever the signal drops below a threshold. Set the threshold too high and it clips the tails of quiet words, chopping the ends off sentences. Set it too low and it never opens, which does nothing at all.",
          "I close the gate only after I have reduced the noise floor with gentler tools. A gate on a noisy track just slams shut between words and reveals how loud the noise really was, which is worse than leaving it alone.",
        ],
      },
      {
        heading: "Soft tools first, hard tools last",
        paragraphs: [
          "Order matters. Handle hum and hiss with reduction, then use a gentle expander rather than a hard gate to pull the gaps down. An expander lowers the noise in steps, so the transition from speech to silence sounds natural.",
          "A short release keeps the gate from chattering at the end of words. If you hear the track open and close in a rhythm, slow the release until the movement disappears, and check the result on headphones before you commit.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Confirm whether you are fighting a tone or a broadband noise before choosing a tool.",
          "Notch every harmonic of the hum, not just the root frequency.",
          "Set the gate threshold low enough that it never clips the tails of quiet words.",
          "Prefer a gentle expander over a hard gate for speech, and slow the release until it is inaudible.",
        ],
      },
    ],
  },
  {
    slug: "audio-plosives-clicks-editing-repair",
    title: "Repairing Plosives and Clicks in a Voice Recording",
    excerpt:
      "Plosives and clicks are the small sounds that ruin an otherwise good take. Most of them can be repaired with editing before plugins.",
    date: "2026-09-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "Plosives are the bursts of air that hit the microphone on hard P and B sounds, and clicks are the tiny snaps from a dry mouth. Both are common in voice work, and both can usually be fixed by editing rather than by reaching for a plugin that might damage the rest of the line.",
          "The instinct is to run the whole take through a repair tool. The better move is to deal with each event where it happens, because the latest processing applied across an entire file always leaves a mark somewhere.",
        ],
      },
      {
        heading: "Plosives need a targeted fix",
        paragraphs: [
          "A plosive shows up as a low-frequency thump at the start of a word. A high-pass filter placed only on that word, or a short fade over the burst, removes the thump without touching the surrounding audio. Broad de-plosive settings tend to soften the whole low end.",
          "Some editors let you split the plosive from the word and treat the piece on its own. That kind of surgical work sounds tedious, and it is the reason a repaired take can sound untouched while a globally processed one cannot.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Fix the sound where it lives. Every repair applied to the whole file is a compromise the rest of the take has to pay for.",
      },
      {
        heading: "Clicks and mouth noise",
        paragraphs: [
          "Mouth clicks are short, sharp, and easy to spot on a waveform because they look like thin spikes. Most editors have a tool that draws over the spike and fills it from the surrounding audio, which removes the click in seconds with no audible trace.",
          "Work through them in one pass while you listen with good headphones. Left alone, they become the thing viewers notice on the second watch, and there is no plugin that removes them all without scrubbing some real detail from the voice.",
        ],
      },
      {
        heading: "Prevent the ones you can",
        paragraphs: [
          "The cheapest repair is a recording that never needed one. A pop filter between mouth and mic, a mic angled slightly off the direct line, and a glass of water during the session remove most plosives and clicks before they ever reach the file.",
          "Take a short break when your mouth dries out, because clicks cluster when the speaker is tired. A little prevention here saves a long editing pass later, and the take sounds better for it.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [],
        bullets: [
          "Repair plosives at the word level instead of filtering the whole take.",
          "Use the editor repair brush on click spikes, working in one careful pass.",
          "Angle the mic and add a pop filter to prevent most problems at the source.",
          "Pause for water when the mouth dries out, since clicks cluster late in a session.",
        ],
      },
    ],
  },
];
