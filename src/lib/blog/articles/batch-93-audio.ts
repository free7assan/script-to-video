import { Waves, Brain, Target, PenLine, Clock, Search, BarChart3, Eye, Layers, Zap } from "lucide-react";
import type { BlogPost } from "../types";

export const batch93: BlogPost[] = [
  {
    slug: "audio-noise-gates",
    title: "How to Set Simple Gates for Cleaner Speech",
    excerpt: "A well set audio gate can cut low level noise without chopping off spoken words or natural pauses to help keep recorded audio clear in small rooms.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Direct answer on gate use",
        paragraphs: [
          "The shortest way to cut room noise is to use a gate that opens only when someone speaks. This basic filter blocks low sounds between words without touching the speech itself when set to match the room.",
          "Most home setups do not need complex side chains to see a change. A small amount of adjustment to threshold and hold can stop fans, traffic or air vents from filling silent gaps in a recording.",
        ],
      },
      {
        heading: "Setting the right threshold",
        paragraphs: [
          "Start by finding the quietest part of speech in the take and note its level. Set the threshold just below that level so the gate stays open for normal speech but closes on sounds that sit lower than speech.",
          "If the threshold is too high, the start of words may be cut off. If it is too low, the gate stays open and lets in noise. Small steps of one or two decibels are far safer than large jumps.",
        ],
      },
      {
        heading: "Timing for natural speech",
        paragraphs: [
          "The attack time controls how fast the gate opens when speech starts. A fast attack can sound abrupt, while a slow attack can miss the first part of a word. For speech, a short attack near a few milliseconds often works well.",
          "Hold and release control how long the gate stays open after speech drops. A short release can chop the end of words, while a long release can leave noise open too long. Aim for a release that matches the pace of speech in the room.",
        ],
      },
      {
        heading: "Practical limits",
        paragraphs: [
          "A gate cannot remove noise that overlaps with speech. It only acts on the gaps between words or pauses. For constant noise that covers speech, a gate will not solve the problem.",
          "Some rooms have noise that rises and falls near speech level. In those cases, use minimal gating or treat the room first. Too much gating always draws more attention to itself than a small amount of left noise.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set threshold just below the quietest speech level to block only low sounds.",
          "Use a short attack with a release that fits the natural pace of speech.",
          "Keep hold long enough to avoid cutting off the ends of words.",
          "Treat constant overlapping noise at the source before relying on a gate.",
          "Test on a short clip before applying to a full recording.",
        ],
      },
    ],
  },
  {
    slug: "audio-room-treatment",
    title: "Simple Ways to Treat a Small Recording Room",
    excerpt: "Small changes to walls and corners can cut harsh echoes and standing waves in audio without needing to rebuild or soundproof an entire recording space.",
    date: "2024-03-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        heading: "Fix the space before plugins",
        paragraphs: [
          "Treating the room gives the biggest gain for recorded audio in small spaces. Soft surfaces and basic absorption stop reflections that make speech sound hollow or hard to understand.",
          "Most of this can be done with items already on hand. A few targeted changes cost little and do not require tearing down walls to improve clarity for speech.",
        ],
      },
      {
        heading: "Tackle reflections first",
        paragraphs: [
          "Find the first reflection points by placing a mirror on the wall near the mic or speaker path. Where you can see the source in the mirror is a spot that will reflect sound back to the mic.",
          "Place light absorbing panels at those points. Even a thick blanket hung carefully can cut early reflections for a test run. Focus on side walls and the wall behind the mic first.",
        ],
      },
      {
        heading: "Control low buildup",
        paragraphs: [
          "Small rooms tend to build up low frequencies in corners. A simple bass trap in two or three corners can help even out the sound without filling the whole room with foam.",
          "Avoid covering every surface. Leaving some hard surfaces can keep the room from feeling dead while still cutting the harshest echoes. Balance is more useful than total coverage.",
        ],
      },
      {
        quote: "Treating reflections gives more clarity than adding any single plugin.",
      },
      {
        heading: "Keep it simple",
        paragraphs: [
          "Test changes as you go by recording the same short line after each fix. Listen back on neutral headphones to judge the change instead of guessing from the room alone.",
          "Leave space for movement and avoid blocking vents. Small, repeated tests will show what helps for your exact room and mic position far better than any fixed rule.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat first reflections before adding effects to recorded audio.",
          "Use mirrors to find reflection points with minimal guesswork.",
          "Add light bass trapping in corners for small room low buildup.",
          "Test each change on a short take for clear results.",
          "Keep some air in the room to avoid an overly dead sound.",
        ],
      },
    ],
  },
  {
    slug: "audio-polar-patterns",
    title: "Choosing Mic Patterns for Clear Speech",
    excerpt: "Picking the right polar pattern for audio recording can block unwanted noise and help keep speech clear without moving the mic far from the speaker.",
    date: "2024-05-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Match pattern to room",
        paragraphs: [
          "A mic's polar pattern shows how sensitive it is to sounds from different directions. Picking the right one for the space will do more for noise control than raising gain.",
          "For speech in a noisy room, a tighter pattern helps. For a quiet controlled space, a broader pattern can sound more natural with less off-axis color change.",
        ],
      },
      {
        heading: "Common options for speech",
        paragraphs: [
          "Cardioid picks up mostly from the front and rejects sound from the back. This is a safe choice for one speaker in a room with some background noise.",
          "Supercardioid and hypercardioid reject more side noise but pick up a small lobe from behind. They need careful placement to avoid picking up sound from behind the mic.",
          "Omnidirectional picks up equally from all sides. It avoids proximity shifts but offers no rear or side rejection, so it works best in very quiet rooms.",
        ],
      },
      {
        heading: "Placement still matters",
        paragraphs: [
          "No pattern can fix bad placement. Keeping the mic close to the speaker gives a better signal to noise ratio and reduces room sound reaching the mic.",
          "Aim the null or rejection zone toward the main noise source. For cardioid, the back null faces away from the speaker area noise. For tighter patterns, pay attention to the rear lobe.",
        ],
      },
      {
        quote: "Pattern choice gives rejection, but distance gives control.",
      },
      {
        heading: "Tradeoffs to know",
        paragraphs: [
          "Tighter patterns can sound less natural off axis and are more sensitive to small head movements. Omnidirectional avoids that but lets in more room sound.",
          "Test two patterns if the mic allows it. Record the same line in the actual space and pick the one that sounds clearest with the least editing needed.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use cardioid for most single speaker speech in mixed rooms.",
          "Try supercardioid only when side rejection is needed and placement is fixed.",
          "Keep distance short to improve signal to noise ratio.",
          "Aim rejection zones toward known noise sources.",
          "Pick based on test takes in the real recording space.",
        ],
      },
    ],
  },
  {
    slug: "audio-mic-placement",
    title: "Finding the Right Mic Spot for Speech",
    excerpt: "Small shifts in audio mic placement can change tone and clarity more than most filters can, so finding a solid spot saves time in later editing.",
    date: "2024-06-12",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        heading: "Start with a known position",
        paragraphs: [
          "For most speech, a few inches from the mouth to about a foot away is a good range. This gives enough presence without overloading the mic or picking up too much room sound.",
          "Work off axis slightly if there are plosives, but not so far that tone thins out. Small changes are easy to judge by ear.",
        ],
      },
      {
        heading: "Avoid common traps",
        paragraphs: [
          "Placing the mic directly in front and very close can cause low boost from proximity. Placing it too far gives a thin sound with more room echo.",
          "Avoid aiming the mic at reflective surfaces like glass or hard tables near the path. Keep it away from air vents, fans or noisy gear that sits close to the pickup area.",
        ],
      },
      {
        heading: "Test in the real space",
        paragraphs: [
          "Record a short script from three positions: close on axis, slightly off axis, and a foot back. Listen back on neutral headphones without effects to compare.",
          "Pay attention to consonants, breath noise and room echo. Pick the spot with the clearest speech and the least need for correction in editing.",
        ],
      },
      {
        quote: "Distance and angle fix more tone issues than any equalizer.",
      },
      {
        heading: "Account for movement",
        paragraphs: [
          "If the speaker moves, use a looser position or a mic with less proximity shift. A fixed head position makes tight placement easier and more consistent across takes.",
          "For seated speech at a desk, set the mic height near mouth level and avoid resting it on a hollow table. A light stand or boom cuts desk noise better than hand holding.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start between a few inches and one foot from the mouth for speech.",
          "Tilt slightly off axis to cut plosives without thinning tone.",
          "Test three positions and pick by ear on neutral headphones.",
          "Keep mic off hollow surfaces to avoid added rumble.",
          "Plan for head movement if the speaker will not stay fixed.",
        ],
      },
    ],
  },
  {
    slug: "audio-plosives-control",
    title: "Simple Ways to Stop Plosives in Speech",
    excerpt: "Quick fixes for audio plosives can save takes by changing angle, distance or a simple pop filter without cutting natural low tones from speech.",
    date: "2024-07-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "Stop air hits at the source",
        paragraphs: [
          "Plosives happen when a burst of air hits the mic from hard consonants like 'p' or 'b'. The simplest fix is to block or redirect that air before it reaches the capsule.",
          "Small changes work best. Moving the mic slightly off axis or increasing distance a little can stop the blast while keeping tone intact.",
        ],
      },
      {
        heading: "Use physical barriers",
        paragraphs: [
          "A basic pop filter placed between mouth and mic catches most bursts. Keep it a few inches from the mic and a bit away from the mouth so it does not muffle speech.",
          "In a pinch, a clean cloth or foam shield can help for a test. For regular use, a mesh pop filter is easy to position and does not block high frequencies as much.",
        ],
      },
      {
        heading: "Adjust mic position",
        paragraphs: [
          "Tilting the mic up or to the side so the burst passes off axis is very effective. This redirects air away from the front of the capsule without needing to cover the mic.",
          "Raising the mic slightly above mouth level and speaking across it also cuts plosives. This keeps a natural tone and leaves room for small head shifts.",
        ],
      },
      {
        quote: "Redirect air, do not cover the capsule to cut plosives.",
      },
      {
        heading: "Fix in editing with care",
        paragraphs: [
          "If a few hits remain, gentle volume edits or short fades can help. Avoid heavy low cuts across a whole phrase as they can thin speech.",
          "Prevention is still faster. Fixing placement or adding a pop filter takes seconds and leaves the natural sound of the voice intact.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Redirect the air burst by angling the mic off axis.",
          "Use a mesh pop filter between mouth and mic for consistent control.",
          "Raise the mic above mouth level and speak across it when possible.",
          "Make only small edits to remove leftover hits.",
          "Test with 'p' and 'b' words at the chosen position.",
        ],
      },
    ],
  },
  {
    slug: "audio-level-matching",
    title: "Keeping Audio Levels Even Across Takes",
    excerpt: "Matching audio levels between takes keeps speech clear and stops listeners from reaching for volume controls when cuts move from one clip to the next.",
    date: "2024-09-06",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Aim for a consistent target",
        paragraphs: [
          "Set a rough target level for speech and stick to it across takes. This cuts the need for large boosts or cuts when editing clips together.",
          "Avoid chasing peaks alone. Use the average level of speech to judge loudness, since peaks can be short and misleading for perceived volume.",
        ],
      },
      {
        heading: "Check before and after takes",
        paragraphs: [
          "Do a quick level check on the first line of each take. If it differs by more than a few decibels, adjust gain at the source before recording more.",
          "Keep notes if the speaker moves or changes tone. Small position shifts often change level more than mic settings do.",
        ],
      },
      {
        heading: "Match in editing",
        paragraphs: [
          "When joining clips, match the loudness of the speech body between them. Use short fades on the cuts to avoid clicks and to smooth small level jumps.",
          "Raise or lower gain on the clip, not with heavy dynamic effects. This keeps tone natural and avoids adding artifacts to clean speech.",
        ],
      },
      {
        quote: "Match speech loudness, not just peak levels, for smooth edits.",
      },
      {
        heading: "Watch for natural variation",
        paragraphs: [
          "Some variation is normal for emphasis. Do not flatten every rise or fall unless they distract from the flow of words.",
          "Compare a few cuts in context. A small difference between sentences is less noticeable than a sudden jump between two words.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a target for speech loudness and use it across takes.",
          "Adjust gain at the source when levels shift between takes.",
          "Match the body of speech between clips, not only peaks.",
          "Use short fades to smooth cuts between different takes.",
          "Keep natural emphasis unless it breaks the listening flow.",
        ],
      },
    ],
  },
  {
    slug: "audio-monitoring-headphones",
    title: "Picking Headphones for Clear Audio Checks",
    excerpt: "Neutral headphones help catch small issues in audio before editing, so picking a flat pair saves time and avoids false fixes to recorded speech.",
    date: "2024-10-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "Why neutrality matters",
        paragraphs: [
          "Colored headphones can hide problems or create false ones. A pair with a flat response shows noise, echo and plosives as they are in the recording.",
          "For speech checks, you do not need sub bass lift. You need clear mids where most speech energy sits so small edits are based on fact.",
        ],
      },
      {
        heading: "Closed or open for the job",
        paragraphs: [
          "Closed back headphones block outside sound and stop bleed if you must monitor in a live room. They can add a small bass bump, so check for that with known speech clips.",
          "Open back headphones often have a flatter response but leak sound. They work best in quiet rooms where you are not recording nearby mics.",
        ],
      },
      {
        heading: "Fit and isolation",
        paragraphs: [
          "A good seal matters more than price for low end accuracy. If the seal breaks, bass drops and you may over correct other areas.",
          "Light weight and comfort help for long editing sessions. Fatigue leads to poor calls, so comfort is part of accuracy.",
        ],
      },
      {
        quote: "Flat response in the mids matters more than extra bass for speech checks.",
      },
      {
        heading: "Quick test before buying",
        paragraphs: [
          "Test with a dry speech clip you know well. Listen for sibilance, room echo and breath sounds without guessing.",
          "Compare to another known pair if possible. Small differences show up fastest on simple speech, not on complex music.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick headphones with a neutral mid range for speech work.",
          "Use closed back to block noise, open back for flatter response in quiet rooms.",
          "Check seal and comfort for long sessions.",
          "Test with a known dry speech clip before committing.",
          "Avoid using only heavily colored headphones for final checks.",
        ],
      },
    ],
  },
  {
    slug: "audio-directivity",
    title: "Using Directivity to Cut Unwanted Sound",
    excerpt: "Understanding audio directivity helps pick mics and angles that reject noise, so speech stays clear without raising gain in a busy recording space.",
    date: "2025-01-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "What directivity means",
        paragraphs: [
          "Directivity is how much a mic favors sound from one direction over others. Higher directivity means more rejection of off axis sound and a better signal to noise ratio for a fixed source.",
          "This is a physical property. It cannot be added after recording, so choosing the right mic and angle at capture saves editing time.",
        ],
      },
      {
        heading: "Common patterns and reach",
        paragraphs: [
          "Cardioid gives solid front pickup with rear rejection. It works well for one person in a typical room with mixed noise.",
          "Supercardioid and hypercardioid have narrower front pickup and more side rejection, but also a small rear lobe. They trade rear safety for side control.",
          "Shotgun mics have very high directivity along a narrow axis. They help when source and noise are far apart, but need careful aiming and stable mounting.",
        ],
      },
      {
        heading: "Use angle to your advantage",
        paragraphs: [
          "Point the most sensitive axis at the speaker and aim the null toward the main noise. Small angle changes can move a noise source into a null with no gain change.",
          "For fixed setups, mark positions. For mobile setups, check a test take after each big move to be sure rejection holds.",
        ],
      },
      {
        quote: "Angle to nulls gives rejection without touching volume.",
      },
      {
        heading: "Limits of directivity",
        paragraphs: [
          "Very tight directivity increases sensitivity to small movements and wind. It can also color sound more off axis if the source shifts.",
          "Rejection only works for sounds coming from the right direction. Reflections that bounce into the pickup axis still reach the mic, so room treatment still helps.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick directivity to match distance between source and noise.",
          "Aim the null at the main noise source for free rejection.",
          "Use tighter patterns only when placement can stay stable.",
          "Expect more movement sensitivity with high directivity mics.",
          "Keep room reflections in mind, as they limit real rejection.",
        ],
      },
    ],
  },
  {
    slug: "audio-latency-issues",
    title: "How to Spot and Fix Audio Latency",
    excerpt: "Audio latency can throw off timing in recording and monitoring, but simple checks on drivers and buffer size can cut delays without new hardware.",
    date: "2025-04-23",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Find the delay first",
        paragraphs: [
          "Latency is the time from input to output. Even small delays make it hard to speak or play in time when monitoring through software.",
          "Test by clapping or tapping while recording the mic and monitoring. Measure the offset between the direct tap and the monitored tap to see the delay in milliseconds.",
        ],
      },
      {
        heading: "Check buffer size",
        paragraphs: [
          "Most of the delay comes from the buffer size in the audio interface or software. A smaller buffer lowers latency but uses more CPU. A larger buffer raises latency but is safer for heavy sessions.",
          "Lower the buffer in small steps until you hear clicks or dropouts, then raise it slightly. This gives the lowest stable latency for your setup.",
        ],
      },
      {
        heading: "Use the right driver",
        paragraphs: [
          "Use a low latency driver for your interface. Generic drivers often add more delay than needed for recording.",
          "If available, try the native driver for the hardware and close unused apps. Some background tools can add extra load and force a larger buffer.",
        ],
      },
      {
        quote: "Stable latency beats the lowest number with dropouts.",
      },
      {
        heading: "Workarounds when delay stays high",
        paragraphs: [
          "If software monitoring still has too much delay, use direct hardware monitoring if the interface offers it. This routes the mic to headphones with little to no digital delay.",
          "For simple speech, record without software monitoring if the room is quiet. Only re enable monitoring when timing with other tracks is needed.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Measure latency with a simple clap test before guessing fixes.",
          "Adjust buffer size down to the lowest stable point for your system.",
          "Use the correct low latency driver for the audio interface.",
          "Try hardware monitoring to avoid software delay entirely.",
          "Close unused apps to free CPU for lower buffer sizes.",
        ],
      },
    ],
  },
  {
    slug: "audio-compression-basics",
    title: "Simple Compression for Even Speech Audio",
    excerpt: "Basic audio compression can even out speech without making it sound flat, but a few settings go further than pushing the threshold too far down.",
    date: "2025-07-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "What compression does",
        paragraphs: [
          "A compressor lowers volume when the signal goes above a set threshold. For speech, this reduces loud peaks and brings up quieter parts, making the whole take easier to listen to at one level.",
          "It does not add volume, it controls range. Used lightly, it keeps tone natural. Used heavily, it can squeeze the life out of speech.",
        ],
      },
      {
        heading: "Key settings in order",
        paragraphs: [
          "Threshold sets when gain reduction starts. Ratio sets how much reduction happens above threshold. A low ratio like 2:1 or 3:1 is often enough for speech.",
          "Attack controls how fast reduction starts on peaks. Release controls how fast it stops after peaks fall. These timing controls matter more for natural sound than extreme ratios.",
        ],
      },
      {
        heading: "Start with light values",
        paragraphs: [
          "Start with a threshold that catches only the loudest peaks, a low ratio, a moderate attack and an auto or medium release. Aim for a few decibels of gain reduction at most for most speech.",
          "Make up gain to match the level before compression. This lets you judge the change fairly without the volume jump tricking your ears.",
        ],
      },
      {
        quote: "A few decibels of reduction sound better than flattening speech.",
      },
      {
        heading: "Watch for common mistakes",
        paragraphs: [
          "Avoid fast attack on speech unless needed, as it can dull consonants. Avoid very slow release that pumps, or very fast release that can chatter.",
          "Do not compress to 'even out' bad mic placement. Fix distance and angle first, then use light compression to polish the take.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use low ratios like 2:1 to 3:1 for natural speech compression.",
          "Time attack and release to fit the pace of the speaker.",
          "Aim for only a few decibels of gain reduction on average.",
          "Add make up gain to compare before and after fairly.",
          "Fix placement before relying on heavy compression.",
        ],
      },
    ],
  },
  {
    slug: "audio-noise-floor",
    title: "Keeping a Low Noise Floor for Clean Audio",
    excerpt: "A low audio noise floor helps speech stand out without added hiss, and most fixes come from gain staging and quiet gear choices in small setups.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "What is noise floor",
        paragraphs: [
          "Noise floor is the quiet hiss or hum present when no one speaks. If it is too high, quiet speech can sound buried and noise becomes obvious when you raise volume.",
          "The goal is to keep speech well above that floor with the least amount of boost after recording. This comes mostly from good gain staging at capture.",
        ],
      },
      {
        heading: "Set gain in the right order",
        paragraphs: [
          "Set input gain so speech peaks near a healthy level without clipping. Avoid recording too quietly, as raising it later also raises the noise floor.",
          "Do not max out preamp gain to fix distance. Move the mic closer or reduce room noise first. A balanced level at input is the best starting point.",
        ],
      },
      {
        heading: "Cut noise at the source",
        paragraphs: [
          "Turn off unused gear, avoid dimmer switches near audio lines and keep cables away from power cords. These small steps stop hum and buzz before they enter the chain.",
          "Quiet the room where possible. Fans, HVAC and hard drives can add steady noise that raises the floor even with a good preamp.",
        ],
      },
      {
        quote: "Fix gain at input to lift speech, not noise, in the recording.",
      },
      {
        heading: "Clean up only when needed",
        paragraphs: [
          "If a little steady noise remains, light noise reduction can help. Apply to pauses or use gentle settings to avoid dulling speech or adding artifacts.",
          "Never rely on heavy noise reduction over poor capture. It trades clarity for quiet and is hard to undo once applied.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record speech at a healthy level to avoid lifting noise later.",
          "Cut steady sources like fans and electrical noise at capture.",
          "Use proper cable routing to avoid hum in small setups.",
          "Apply only light noise reduction as a final touch.",
          "Compare before and after on neutral headphones for any edits.",
        ],
      },
    ],
  },
];
