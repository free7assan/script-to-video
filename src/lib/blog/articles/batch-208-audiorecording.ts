import {
  Activity,
  BarChart3,
  Eye,
  Layers,
  MessageSquare,
  Puzzle,
  Repeat,
  Waves,
  Workflow,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch208: BlogPost[] = [
  {
    slug: "audio-recording-why-audio-beats-video",
    title: "Why Good Audio Beats Good Video in Almost Every Edit",
    excerpt:
      "A clean audio recording fixes more viewer complaints than any camera upgrade, and here is why sound quality decides whether anyone keeps watching.",
    date: "2035-09-01",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "You can shoot a whole video on a phone and hold an audience, but you cannot hold one with audio that fights to be heard. Sound quality decides whether a viewer stays, because ears forgive a soft image far faster than they forgive a muddy voice. This is the first thing I fix on any project, and it is almost never what beginners budget for.",
          "Most people editing their first videos spend everything on a lens and then record dialogue through the camera mic in a tiled room. They wonder why the comments are about the echo. The audio was the weak link the entire time, and no color grade was ever going to hide it.",
        ],
      },
      {
        quote:
          "An audience will tolerate a slightly soft shot for ten minutes. They will abandon a hiss or a hollow room in about ten seconds.",
      },
      {
        heading: "The brain works harder on bad sound",
        paragraphs: [
          "Speech carries the densest information in most videos, so anything that blurs it taxes the viewer. When a room smears consonants or a fridge hums under every sentence, the audience spends attention reconstructing words instead of following the point. That effort is invisible, and it is exhausting, which is why people leave without being able to name what felt wrong.",
          "Picture quality rarely triggers that same cost. A viewer can follow a conversation shot on a dated camera because the image only needs to be legible. Audio has to be intelligible, and those are two different bars to clear.",
        ],
      },
      {
        heading: "Where the money should go first",
        paragraphs: [
          "Before a second lens and before a light kit, buy a way to get a microphone close to the mouth. Proximity solves more problems than any plugin or repair tool you can buy later. A cheap lav clipped near a collar will beat an expensive shotgun sitting across the room, every single time.",
          "Treat audio as the spine of the edit and everything downstream gets simpler. You cut to the rhythm of speech instead of covering gaps where the sound fell apart, and your pacing starts to feel intentional rather than patched.",
        ],
      },
      {
        heading: "A test you can run tonight",
        paragraphs: [
          "Record sixty seconds of yourself talking on your current setup, then listen back on earbuds at low volume. If you have to strain to catch the words, your viewer will strain harder on a phone speaker in a noisy room. That small test replaces a lot of guessing.",
          "Now do the same sixty seconds with a modest lav clipped to your shirt. The gap between those two takes will make the rest of this advice feel obvious, and it will point you at the exact problem to fix first.",
        ],
      },
      {
        heading: "Sound you do not notice is the goal",
        paragraphs: [
          "The best audio in a video is the audio nobody comments on. There is no moment where a viewer thinks the sound is impressive, because the sound simply stopped being an obstacle. Your job is to remove friction, not to impress.",
          "That is a strange target to chase, since you cannot show it off. But it is the same reason a good key light goes unnoticed while a bad one gets called out for casting a shadow on the wall. Invisible craft is still craft.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Viewers forgive an imperfect image long before they forgive unclear speech.",
          "Close the distance between mouth and microphone before buying anything else.",
          "Room tone and electrical hum drain attention in ways viewers cannot name.",
          "Good audio lets you cut on speech instead of patching around silence.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-choosing-a-microphone",
    title: "Choosing a Microphone Without Falling for Hype",
    excerpt:
      "The right microphone for audio recording depends on your room, your subject, and your reach, not on the price tag or the brand on the box at all.",
    date: "2035-09-03",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "The microphone that fits you best is the one that matches your room, your subject, and how far away you have to sit. Price tells you very little on its own. A cheap dynamic mic in a quiet corner will embarrass an expensive condenser in a glass-walled office.",
          "Most buying guides list frequency charts and self-noise figures because those are easy to print. What actually decides your result is pickup pattern, distance, and the noise floor of the space you record in. Get those right and almost any decent mic will work.",
        ],
      },
      {
        quote:
          "Nobody has ever left a video because the microphone cost eighty dollars. They leave because the voice sounds like it came through a paper cup.",
      },
      {
        heading: "Dynamic and condenser, in plain terms",
        paragraphs: [
          "A dynamic microphone is tough, rejects a lot of room, and asks for a strong, close voice. Broadcasters have used them for decades because they keep working when someone shouts or bumps the desk. They are the safer first purchase for a room you cannot treat.",
          "A condenser microphone is more sensitive and captures more detail, which also means it captures the air conditioner. It shines in a treated space where the source is controlled. In a bare apartment it will faithfully record every reflection off the drywall.",
        ],
      },
      {
        heading: "Pickup patterns decide what you hear",
        paragraphs: [
          "An omnidirectional pattern hears everything around it, which is friendly but forgiving of nothing. A cardioid pattern favors what is in front and pushes the rest down, which is why it sits on most vocal mics. A hypercardioid narrows that window further and needs careful aim.",
          "Match the pattern to the job. Interviewing one person at a table, a cardioid lav or a cardioid dynamic both work. Recording two people across from each other, an omnidirectional lav placed between them can be simpler than two mics and a mixer.",
        ],
      },
      {
        heading: "Connection choices matter less than you think",
        paragraphs: [
          "USB mics are convenient and fine for a single voice at a desk, though they tether you to a computer. XLR mics need an interface or a recorder, which sounds like extra cost until you want two inputs or a battery-powered setup away from your desk.",
          "If you plan to grow, buy into XLR early. If you only ever record yourself at the same desk, a good USB mic removes a whole category of troubleshooting. Neither path is wrong, they just box you in differently later.",
        ],
      },
      {
        heading: "How to audition a mic",
        paragraphs: [
          "Buy from a seller with returns and record the same paragraph on each candidate in your actual room. Compare the takes on the same headphones at the same volume. A mic that sounds warm in a store demo can sound thin in your kitchen.",
          "Listen for how it handles the ends of sentences, where proximity drop-off shows up, and for any self-noise when the room is silent. Those details tell you more than any spec sheet will.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match the microphone to the room before you match it to a budget.",
          "Dynamic mics forgive untreated rooms, condensers reward treated ones.",
          "Pickup pattern and distance shape your sound more than brand name.",
          "Choose USB for simplicity at a desk, XLR for flexibility over time.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-lav-vs-shotgun",
    title: "Lav or Shotgun: Which Microphone Wins on the Set",
    excerpt:
      "The lav versus shotgun choice comes down to how much control you have over the frame, and the audio recording question is really a blocking question.",
    date: "2035-09-05",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A lavalier gives you a consistent voice no matter how the camera moves, and a shotgun gives you reach when the subject stays put. The right answer depends on your blocking, not on which one sounds more cinematic in a forum thread.",
          "If you have one subject who talks to camera and stands still, a shotgun on a boom works and needs fewer wardrobe conversations. If your subject walks, gestures, and turns away, a lav clipped to a collar is the only thing that keeps the voice steady.",
        ],
      },
      {
        quote:
          "A lav follows the person. A shotgun follows the aim. Decide which one your shoot actually needs before you decide which one you like.",
      },
      {
        heading: "What a lav does well",
        paragraphs: [
          "Proximity is the superpower. Clip a lav six inches from the mouth and room noise drops away because the voice arrives far louder than everything else. It is small, it is forgiving of camera position, and it works when your subject refuses to stand still.",
          "The tradeoffs are real. Lavs pick up clothing rustle and jewelry clicks, and they add a chest resonance that a boom avoids. Hiding the cable takes practice, wind outdoors can overwhelm a lav without a furry cover, and a poorly placed clip lets a shirt pull across the capsule.",
        ],
      },
      {
        heading: "What a shotgun does well",
        paragraphs: [
          "A shotgun aims. Point it at a face and it favors that direction while pushing down the sides, which cleans up a room without treating it. On a boom just out of frame it sounds natural and avoids the chesty tone a lav can produce.",
          "It demands discipline. Move your subject and the aim drifts. Leave it on the camera and every lens change changes how close it sounds. In a reverberant room a shotgun can still catch the whole space, so it is not a magic fix for bad acoustics.",
        ],
      },
      {
        heading: "The practical hybrid",
        paragraphs: [
          "Many shoots run both and pick in the edit. The lav gives you a safety track that always has the voice, and the boom gives you a richer option when the framing allows. Two clean sources beat one perfect one, because you can mix and match per shot.",
          "If you can only afford one, start with a lav and a recorder. It travels well, needs no second operator, and rescues footage where the camera mic would have failed. Add a shotgun when your productions grow a crew.",
        ],
      },
      {
        heading: "Wind changes everything outdoors",
        paragraphs: [
          "A shotgun outdoors needs a blimp or a softie over the capsule, and even then a gust can defeat it. A lav hidden under a collar is often better protected, though its cable becomes a handling-noise antenna if it is not strain relieved.",
          "Whatever you choose, record a few seconds of silence with the rig in place. That room tone becomes your repair tool when an edit needs a gap filled, and it takes ten seconds on set.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose by blocking first, then by tone preference.",
          "Lavs forgive movement and reject room by sheer proximity.",
          "Shotguns reward a boom operator and precise aim.",
          "Running both gives you options that single-source shoots never have.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-setting-levels",
    title: "Setting Audio Levels So You Never Clip a Take",
    excerpt:
      "Good audio recording levels sit between too quiet and too hot, and the safe target is a peak well below zero, not a needle dancing at the top.",
    date: "2035-09-07",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Aim for peaks around negative twelve decibels and leave headroom above them, because digital audio does not forgive a loud surprise. Levels that look healthy on a meter can still clip when someone laughs or turns their head into the mic.",
          "The instinct to push the gain until the meter bounces near the top is the most common mistake I see. It feels safe because the signal looks strong, but the first loud moment in a three minute performance will distort and there is no undo.",
        ],
      },
      {
        quote:
          "Digital clipping is not a warm sound and it is not a fixable one. Once the waveform is a flat line at the ceiling, the detail is gone for good.",
      },
      {
        heading: "Why headroom is your friend",
        paragraphs: [
          "Real voices are not steady. A whisper and a laugh can differ by twenty decibels in the same sentence, and if you set your ceiling for the whisper, the laugh will smash through it. Headroom is the space you leave so the loudest moment still has somewhere to go.",
          "Record at twenty four bit if you can and aim low. A quiet track with a clean floor can be raised in editing with almost no penalty, while a clipped track cannot be repaired by any tool. Loud and ruined beats quiet and clean only in the wrong direction.",
        ],
      },
      {
        heading: "Reading the meter correctly",
        paragraphs: [
          "Watch the peaks, not the average, when you set the gain. Ask the person to speak at their loudest normal volume, hit record, and adjust until the loudest peaks land near negative twelve. Then let the quiet parts fall where they fall.",
          "If your recorder only shows a needle or a bar with no numbers, keep the loudest peaks around three quarters of the way up and never touching the end. That rough habit keeps you out of trouble when the display gives you nothing precise.",
        ],
      },
      {
        heading: "Gain, and why moving closer is better",
        paragraphs: [
          "Turning down the gain to fix an overpowering mic is treating a symptom. The real fix is distance. Move the microphone farther from the mouth or lower the input before you touch the performer's volume, because gain changes noise along with signal.",
          "Every boost you apply later lifts the room and the electronics with the voice. Getting the level right at the source keeps that noise low and makes your post work a matter of taste rather than rescue.",
        ],
      },
      {
        heading: "One setting to check every time",
        paragraphs: [
          "Before each session, confirm that automatic gain control is off. Phones, cheap recorders, and some cameras default to it, and it will quietly pump the room noise up during pauses. Manual levels are the only way to know what you captured.",
          "A quick spoken count from the performer, followed by a glance at the meter, tells you whether your setup is ready. It takes twenty seconds and it has saved me more reshoots than any other habit on set.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set peaks near negative twelve decibels and leave space above them.",
          "Watch the loudest moment, not the average, when you adjust gain.",
          "Record at twenty four bit so a quiet track stays repairable.",
          "Fix an overpowering mic with distance before you cut the gain.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-noisy-rooms",
    title: "Recording Audio in Noisy Rooms Without a Booth",
    excerpt:
      "You can get usable audio recording in a noisy room without a booth, mostly by moving the mic closer and turning off everything that hums in the house.",
    date: "2035-09-09",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "The fastest way to beat a noisy room is to get the microphone closer, because signal that arrives louder than the noise wins without any processing. A mic two inches from a mouth will beat a mic across the table in the same room every time.",
          "After proximity, the second move is subtraction. Turn off the air conditioner, the fridge you forgot about, the laptop fan, and the phone on the desk. Most rooms are quieter than they seem once you remove the machines you stopped hearing.",
        ],
      },
      {
        quote:
          "There is no noise removal plugin that knows the difference between a human voice and a refrigerator. The only reliable fix happens before you press record.",
      },
      {
        heading: "Work with the room you have",
        paragraphs: [
          "Walk the space with headphones on and listen for the hum you have tuned out. Stand where you plan to record and close your eyes. The things you notice in that silence are the things your microphone will happily record for the whole session.",
          "Soft surfaces help. A closet full of clothes, a bed, a couch, and a wall of books all absorb reflections. Recording near a bed or in a walk-in closet is a genuine upgrade over a bare room with hard floors and glass.",
        ],
      },
      {
        heading: "Directional mics and blankets",
        paragraphs: [
          "A cardioid microphone pointed at the mouth and away from the noise source buys you several decibels of rejection. Aim the back of the mic at the air vent or the window and let the null do the work. Placement is free and it is effective.",
          "If you have time, hang moving blankets behind the speaker and around the microphone. Moving blankets are cheap and they tame the sharp reflections that make a small room sound like a bathroom. They will not silence a truck outside, but they clean up the space you control.",
        ],
      },
      {
        heading: "What to do when the noise will not stop",
        paragraphs: [
          "Sometimes a fan is the only thing keeping the room livable, or a neighbor is renovating, and no amount of placement helps. That is when you record a clean sample of the noise by itself, which a repair tool can use as a fingerprint to subtract later.",
          "Capture twenty seconds of the room with nobody talking and keep it with the take. It is the one piece of post production that genuinely rescues bad conditions, and it costs you almost nothing to grab.",
        ],
      },
      {
        heading: "Plan around the noise schedule",
        paragraphs: [
          "Traffic and construction follow patterns. If you know the leaf blower starts at nine, record at eight. If the office quiets after five, stay late. A little scheduling beats an hour of cleanup.",
          "Keep a take log of what you captured and when. When a noise ruins a line, you want to know instantly whether a quieter alternative exists, and you want it without scrubbing through every file.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Proximity beats processing every time in a loud room.",
          "Turn off the machines you stopped noticing before you record.",
          "Soft furnishings and blankets cut reflections more than you expect.",
          "Grab a clean noise sample to give repair tools something to subtract.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-reducing-echo",
    title: "Reducing Echo in a Small Room That Sounds Too Big",
    excerpt:
      "Reducing echo starts with soft surfaces and mic placement, and the audio recording you get in a treated corner rarely needs much repair afterward at all.",
    date: "2035-09-11",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Echo happens when sound bounces off hard surfaces and arrives at the microphone slightly late, and the cure is absorbing those bounces before they reach the mic. Soft things on the walls and a microphone close to the mouth both reduce it.",
          "A room can sound fine to your ears while the microphone hears a mess, because your brain filters reflections and a capsule does not. That gap between what you hear and what gets recorded is why so many people are surprised on playback.",
        ],
      },
      {
        quote:
          "Your ears are the worst judge of a room you plan to record in. They are too good at ignoring the very reflections the microphone will capture.",
      },
      {
        heading: "Find the worst reflections",
        paragraphs: [
          "Clap once and listen to what comes back. A short, dry snap means the room is reasonable. A ringing tail or a metallic edge points at glass, bare walls, or a tile floor. Those surfaces are your targets.",
          "Stand where the microphone will sit rather than where the speaker will stand. The reflections matter most at the capsule, and that listening position tells you what the recording will actually contain.",
        ],
      },
      {
        heading: "Cheap treatment that works",
        paragraphs: [
          "A thick blanket and an area rug do more than any software. Hang something soft directly behind the microphone and place a rug on the hard floor. You are breaking up the strongest early reflections, which are the ones that muddy a voice.",
          "Move the recording position to a corner near soft furniture. Beds, couches, curtains, and books break up sound, so a bedroom recorded near the bed often beats a dedicated office with hard walls and a glass desk.",
        ],
      },
      {
        heading: "Microphone technique reduces echo",
        paragraphs: [
          "Getting close to the mouth raises the direct voice above the reflected sound, which is the simplest echo reduction there is. A directional microphone aimed away from the reflective wall helps too, because it hears less of what bounces back.",
          "Avoid recording across a table in a bare room. The surface between two people reflects sound straight up into the mic, and it adds a boxy quality that is hard to remove later. Angle the seating or move to a softer spot.",
        ],
      },
      {
        heading: "When you cannot change the room",
        paragraphs: [
          "Some spaces are borrowed and you cannot hang anything. In that case, go to the smallest soft space available, even if it is a car with the engine off or a closet. Proximity plus a small absorptive space can rescue a shoot you cannot otherwise control.",
          "That fallback is worth scouting in advance. Knowing where the quiet, soft corner of a venue lives before the day of the shoot removes a panicked decision when the main room turns out to be all glass and concrete.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Absorb early reflections before reaching for repair software.",
          "Trust a test recording over your ears when judging a room.",
          "Blankets, rugs, and soft furniture do most of the work.",
          "Move the mic closer to lift the voice above the reflections.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-headphone-monitoring",
    title: "Monitoring With Headphones While You Record Video",
    excerpt:
      "Monitoring with headphones during audio recording catches problems while you can still fix them, which is cheaper than discovering them in the edit.",
    date: "2035-09-13",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Listen while you record, because every problem you catch live is one you do not discover after the subject has gone home. Headphones turn a guess into a decision, and they cost less than a reshoot.",
          "Closed-back headphones are the right tool, since they block outside sound and keep the mic from hearing your playback. The cheap earbuds in your pocket will leak audio back into the microphone and defeat the purpose.",
        ],
      },
      {
        quote:
          "If you are not monitoring, you are hoping. Hope is not a production strategy when the talent leaves in twenty minutes.",
      },
      {
        heading: "What to listen for",
        paragraphs: [
          "Listen for the low rumble you cannot hear in the room and the intermittent crackle from a loose cable. The hum that appears only when a light is on shows up the same way. Monitoring surfaces all of it in real time, when a cable swap or a light switch still solves the problem.",
          "Watch for distortion on loud words and for handling noise every time the subject gestures. Those clicks and thumps are invisible on a meter and obvious in headphones, which is exactly why the ears stay on through the whole take.",
        ],
      },
      {
        heading: "Setting headphone volume properly",
        paragraphs: [
          "Set the monitoring level so speech is comfortable, not loud. Loud monitoring hides problems and tires your ears, and a long session at high volume will make you misjudge the low end. You want to hear the flaws, not feel them.",
          "Turn the volume down periodically and listen again. Quiet listening exposes hiss, ticks, and background noise that a loud monitor masks. Producers call this checking at a low level for a reason.",
        ],
      },
      {
        heading: "Solving the leak problem",
        paragraphs: [
          "If your headphones bleed into the microphone, the recording picks up the backing track or the previous take. Closed-back designs and a modest monitoring level fix most of it, and a separate headphone amp can give you control without cranking the mic input.",
          "On a two person shoot, give each person their own monitoring so nobody has to guess. Split the signal, keep the levels modest, and the chance of a leaked track in the final mix drops to near zero.",
        ],
      },
      {
        heading: "Missing a monitor is not an excuse",
        paragraphs: [
          "If you have only one headphone jack, you can still monitor and record by using a splitter or by feeding the camera output. The point is to have some signal path to your ears, even a rough one, rather than none at all.",
          "Wired beats wireless for reliability in most rooms. Bluetooth adds latency and can drop, and in a live take a delay between the mouth and the voice you hear will confuse everyone on camera.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Monitor every take; a detected flaw live is a flaw you can fix.",
          "Use closed-back headphones so playback does not bleed into the mic.",
          "Keep monitoring quiet enough to hear hiss and clicks.",
          "Give each person on set their own headphone feed.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-syncing-separate-audio",
    title: "Syncing Separate Audio to Your Camera Footage",
    excerpt:
      "Syncing separate audio to camera footage is easy if you clap at the start and let the audio recording run a few seconds past the end of the shot.",
    date: "2035-09-15",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Record the camera and the audio device at the same time, capture a sharp clap at the start, and let the audio run a few seconds beyond the last line. That habit makes sync a matter of aligning one spike instead of hunting for a match.",
          "Editors call the clap a sync mark, and it works because a sudden, sharp sound creates the same waveform on both tracks. Line the two peaks up once and the whole take locks together, no matter how long the clip runs.",
        ],
      },
      {
        quote:
          "A clap is the cheapest piece of production insurance you will ever use. Two dollars of attention on set saves an hour of alignment later.",
      },
      {
        heading: "Why separate audio usually sounds better",
        paragraphs: [
          "The camera microphone sits far from the subject and often near the operator, so it catches room and handling noise. A separate recorder with a lav or a boom puts the microphone where it belongs, which is why the extra step is worth it.",
          "Keeping audio off the camera also frees the camera to move. You can shoot wide, close, and across the room without dragging a cable or changing how the sound is captured, because the voice is being recorded on its own track.",
        ],
      },
      {
        heading: "The clap and the roll",
        paragraphs: [
          "Start every take with a clear clap in frame and in range of both microphones. Then pause a beat before the performance starts. That pause is a gift in the edit, because it gives you clean room tone and a visual gap you can slide around.",
          "Keep the audio rolling past the end. Overlapping audio and video gives your editor handles to trim, and it means a slightly late camera start does not cost you the first word of the take.",
        ],
      },
      {
        heading: "Fixing sync in the edit",
        paragraphs: [
          "Zoom into the waveform and find the clap on each track, then move one until the peaks align. That is the whole technique. Once the first clip is matched, keep the rest of the session aligned so you only solve it once.",
          "If you recorded without a clap, look for any sharp sound, such as a door slam or the first hard consonant of a sentence. Any transient that appears on both tracks can serve as your mark, though a planned clap is always cleaner.",
        ],
      },
      {
        heading: "Drift is rare but real",
        paragraphs: [
          "Cheap recorders and cameras run on slightly different clocks, so very long takes can drift apart by a few frames. For normal interview lengths this is not a problem, but for a forty minute continuous take you may need to nudge the audio partway through.",
          "If you shoot long sessions, cut them into shorter takes or use a timecode workflow. Timecode gear costs more and it removes the drift question entirely, which is why documentary crews lean on it for full day shoots.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Clap in range of both devices at the start of every take.",
          "Let the audio roll past the last line for edit handles.",
          "Separate audio frees the camera to move without cables.",
          "Align on a sharp transient, then keep the rest of the session in sync.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-clean-voiceovers",
    title: "Recording Voiceovers That Sound Close and Clear",
    excerpt:
      "Clean audio recording for voiceovers means a quiet corner, a mic slightly off axis, and reading with energy instead of a flat announcement tone.",
    date: "2035-09-17",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A voiceover lives or dies on a quiet corner, a microphone a hand span away and slightly off axis, and a read with real energy. The gear matters less than the conditions and the performance.",
          "Most first attempts sound distant because people sit too far from the mic and flatten their voice into an announcement tone. Move closer, angle the capsule past your mouth to avoid plosives, and talk to one person instead of a crowd.",
        ],
      },
      {
        quote:
          "A voiceover is a conversation with one listener. Read it like a memo to a room and it will sound like a memo. Read it like a message to a friend and it lands.",
      },
      {
        heading: "Build a small booth",
        paragraphs: [
          "Any closet or blanket fort will beat an open living room. Put the microphone between you and whatever is behind it, so the wall behind the mic absorbs the voice instead of reflecting it back.",
          "Turn off the obvious noise makers and put the phone on airplane mode to avoid an alert appearing mid take. A single notification can ruin a perfect paragraph and you will not notice until the edit.",
        ],
      },
      {
        heading: "Microphone placement and the pop",
        paragraphs: [
          "Position the microphone off to the side of your mouth and point it at the corner of your lips, not straight down your throat. That angle keeps breath and plosives out of the capsule while the voice still reads close and full.",
          "A pop filter or a simple foam windscreen helps with hard P and B sounds, but angle and distance do most of the work. If you hear a thump on every word with a hard consonant, you are too close and too much on axis.",
        ],
      },
      {
        heading: "Performing the read",
        paragraphs: [
          "Vary your pace and your volume the way you would telling a story to a friend. Flat, even delivery is the single most common reason a technically clean voiceover still sounds dead. Energy is not the same as volume.",
          "Stand up if the script allows it, because posture changes your breath and your tone. Mark the sentences that matter and slow down for the ones that carry the point. Take a beat between paragraphs so you have editing room.",
        ],
      },
      {
        heading: "Editing the voice without wrecking it",
        paragraphs: [
          "Compression and a gentle high pass can even out a voiceover, but they cannot invent detail that was never recorded. Fix the source first, then use tools to smooth what is already there. Heavy processing on a bad take only makes it louder.",
          "Take one full breath and read the paragraph again if it wobbles. Punching in a single sentence is faster than trying to repair a stumble in the mix, and it keeps the edit invisible.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record in the softest, quietest spot you can find.",
          "Place the mic close and off axis to avoid popping.",
          "Perform with conversation energy, not announcement flatness.",
          "Leave a beat between paragraphs for clean edit points.",
        ],
      },
    ],
  },
  {
    slug: "audio-recording-troubleshooting-bad-audio",
    title: "Fixing Bad Audio After the Shoot Is Already Over",
    excerpt:
      "Bad audio recording is sometimes fixable, but you should know which problems respond to repair and which ones only a reshoot can solve before you waste a day.",
    date: "2035-09-19",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["audio", "gear", "production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Some audio problems yield to repair and some do not, and knowing the difference saves you a wasted afternoon. Clicks, hum, and mild room noise often clean up, while clipping and distortion usually do not.",
          "Start by listening on headphones and writing down every flaw you hear. Naming the problem separates the fixable from the fatal, and it keeps you from applying tools at random in the hope that something works.",
        ],
      },
      {
        quote:
          "Repair tools are excellent at making a bad recording sellable and terrible at making an unusable one good. Learn which side of that line your take is on.",
      },
      {
        heading: "Problems that usually repair",
        paragraphs: [
          "Steady hum from a light or a ground loop responds well to a notch filter or a hum removal tool because the noise sits at a known frequency. Clicks from a cable can be redrawn by hand, and the repair is invisible because the gap is one sample wide.",
          "Mild broadband noise, the kind a fan adds, can be reduced with a learned noise profile. Grab a sample of the room alone and let the tool subtract it. The key word is mild, because aggressive reduction leaves the voice sounding underwater.",
        ],
      },
      {
        heading: "Problems that need a reshoot",
        paragraphs: [
          "Clipping is the clearest one. A waveform that hits the ceiling is a flat line, and all the detail in that moment is gone. No tool can reconstruct what the microphone never recorded, so the loud word is a permanent loss.",
          "Distortion from a bad cable, a cracked capsule, or an overloaded input falls in the same bucket. So does a take where the microphone was far enough away that the voice never rose above the room, because there is no signal left to pull out.",
        ],
      },
      {
        heading: "Buying yourself options",
        paragraphs: [
          "If the foundation is clean but the edges are rough, you can afford to be selective. Fix the hum, tame the clicks, and leave the rest alone, because each repair adds a little artifice to the voice. Restraint keeps the result believable.",
          "Always keep the original file. Process a copy, compare it against the untouched version on the same headphones, and keep whichever sounds more human. Sometimes the imperfect take wins because the repaired one lost something true.",
        ],
      },
      {
        heading: "Prevention is the real lesson",
        paragraphs: [
          "Every repair list is also a prevention list. Set levels lower, move the mic closer, kill the hum before you roll, and the edit gets shorter and the result gets better. The best cleanup is the session that never needed it.",
          "Write down the mistakes from one shoot and put them at the top of the next shoot plan. Over a handful of projects those notes become a checklist, and a checklist beats a repair plugin every time.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Hum, clicks, and mild noise usually respond to targeted repair.",
          "Clipping and distortion are permanent and call for a reshoot.",
          "Name each flaw on headphones before you reach for a tool.",
          "Keep the untouched file so you can judge the repair honestly.",
        ],
      },
    ],
  },
];
