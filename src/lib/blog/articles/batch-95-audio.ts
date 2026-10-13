import { Activity, BarChart3, Clock, Film, Scissors, Star, Target, Waves, Zap, Brain } from "lucide-react";
import type { BlogPost } from "../types";

export const batch95: BlogPost[] = [
  {
    slug: "audio-mixing-basics",
    title: "Getting Started With Audio Mixing",
    excerpt: "Audio mixing gives each sound its own space by balancing levels, panning, and tone so that voices and music stay clear for any playback setup.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Why mixing matters",
        paragraphs: [
          "Audio mixing is the process of combining separate tracks into one clear recording. By adjusting levels and placement, you can make a voice stand out without burying music or other sounds.",
          "Small changes to balance often do more than adding effects. Taking time to mix well keeps your project easy to listen to on phones, speakers, or headphones."
        ]
      },
      {
        heading: "Setting up your mix",
        paragraphs: [
          "Start by cleaning each track before blending them. Remove silent gaps and fix obvious noise so you are not masking problems with volume later.",
          "Group related sounds together to save time. For example, keep all background layers in one group and all lead tracks in another for faster control."
        ]
      },
      {
        heading: "Balancing levels first",
        paragraphs: [
          "Focus on the most important sound first, usually the voice. Bring it to a comfortable level, then add music and effects around it rather than raising everything at once.",
          "Leave some headroom by not pushing peaks too high. This gives you space for later changes and helps avoid harsh clipping in the final output."
        ]
      },
      {
        quote: "Balance is more about subtraction than addition when mixing sound."
      },
      {
        heading: "Using space in the mix",
        paragraphs: [
          "Panning can separate similar sounds by placing them in different spots. A slight shift can clear up room for another track without changing volume.",
          "Keep low frequencies centered unless there is a specific reason to move them. That helps maintain a solid feel across most playback systems."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mix level by level, starting with the lead sound before adding others.",
          "Group tracks to keep your session organized and easy to adjust.",
          "Leave headroom and use panning to create space without adding volume.",
          "Check your mix on at least two playback devices for consistency.",
          "Fix track issues at the source instead of covering them with effects."
        ]
      }
    ]
  },
  {
    slug: "audio-sampling-techniques",
    title: "Practical Audio Sampling Techniques",
    excerpt: "Audio sampling lets you reuse small clips of sound, but choosing clean starts and ends is key to keeping loops smooth for any music project.",
    date: "2024-05-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "What is sampling",
        paragraphs: [
          "Sampling means taking a short piece of recorded sound and reusing it in a new track. It can be a single hit, a rhythm, or a longer phrase pulled from an existing recording.",
          "The goal is to make that clip fit your track. With careful edits, a small sample can sound natural instead of chopped or out of place."
        ]
      },
      {
        heading: "Finding clean sources",
        paragraphs: [
          "Choose recordings with little background noise when possible. A dry, isolated sound is easier to shape and blend with your own layers.",
          "Avoid samples with sudden volume jumps at the edges. Steady clips are simpler to loop and less likely to click when played back."
        ]
      },
      {
        heading: "Trimming for smooth loops",
        paragraphs: [
          "Trim at zero crossings where the wave crosses the center line. This small step helps remove clicks at the start or end of a loop.",
          "Try to match the tempo of your project when setting loop length. Small nudges to timing can make a loop feel more locked in with the rest of the track."
        ]
      },
      {
        heading: "Shaping the sound",
        paragraphs: [
          "Apply light filtering to remove unwanted high or low parts. This keeps the sample from clashing with other elements in your mix.",
          "Use volume fades at edges for non-looping clips. A short fade in or out helps avoid abrupt cuts between sounds."
        ]
      },
      {
        quote: "A clean trim will always outlast heavy processing for most loops."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick samples with minimal background noise for easier blending.",
          "Trim at zero crossings to prevent clicks in loops.",
          "Match loop length to project tempo for a tighter feel.",
          "Use fades and filtering to fit samples into the mix.",
          "Test the loop at different speeds before finalizing it."
        ]
      }
    ]
  },
  {
    slug: "audio-field-recording",
    title: "Tips For Field Recording Audio",
    excerpt: "Audio field recording captures real sounds outside the studio, so picking the right mic and location is key to avoiding wind and city noise.",
    date: "2024-08-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "Planning your session",
        paragraphs: [
          "Before you record, scout the location at the same time of day you plan to capture sound. Traffic, weather, and people can change a lot hour by hour.",
          "Have a short list of target sounds to avoid recording aimlessly. This keeps battery life and storage focused on what you need."
        ]
      },
      {
        heading: "Gear choices",
        paragraphs: [
          "A directional mic helps reject sound from the sides and rear. This is useful when you want one specific source over a busy background.",
          "Wind is often the biggest problem outdoors. A foam or fur windscreen can cut wind noise without dulling the sound too much."
        ]
      },
      {
        heading: "Recording technique",
        paragraphs: [
          "Keep the mic as close to the source as is safe and practical. Closer placement means less room noise and more detail in the recording.",
          "Monitor with headphones while recording. This lets you catch issues like handling noise or sudden gusts right away."
        ]
      },
      {
        heading: "Dealing with distractions",
        paragraphs: [
          "Pause when planes or loud vehicles pass if they will not fit your scene. A few extra minutes can save hours of editing later.",
          "Record room tone or silence at the spot after your takes. This gives you matching background for smoothing edits in post."
        ]
      },
      {
        quote: "Silence recorded on site is often more useful than silence made in post."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Scout at your intended time to predict noise patterns.",
          "Use a directional mic and wind protection outdoors.",
          "Monitor with headphones and get close to the source.",
          "Capture ambient room tone for natural edits.",
          "Wait for short distractions to pass before continuing."
        ]
      }
    ]
  },
  {
    slug: "audio-synthesis-waves",
    title: "Basics Of Audio Synthesis Waves",
    excerpt: "Audio synthesis uses simple wave shapes to form tones, and each shape gives a different feel that fits drums, pads, leads, or bass in a track.",
    date: "2025-01-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "Why wave shapes matter",
        paragraphs: [
          "Most synths start with basic waves like sine, square, saw, and triangle. Each has a unique harmonic makeup that affects how bright or mellow a tone sounds.",
          "Choosing the right wave can save time. Instead of stacking effects, a good starting shape often gets you closer to your goal."
        ]
      },
      {
        heading: "Common wave types",
        paragraphs: [
          "Sine waves are smooth and mostly pure tone. They work well for subtle pads, low bass, or simple test tones without extra harmonics.",
          "Square waves have a hollow, bold quality due to odd harmonics. Saw waves are brighter and fuller, while triangle waves sit between sine and square in tone."
        ]
      },
      {
        heading: "Shaping with filters",
        paragraphs: [
          "A low pass filter can tame harsh highs in saw or square waves. Small filter moves can change the feel of a sound without adding new layers.",
          "Try sweeping a filter slowly to hear how harmonics drop off. This is one of the simplest ways to add motion to a static tone."
        ]
      },
      {
        heading: "Adding movement",
        paragraphs: [
          "Modulation lets you change pitch, volume, or filter over time. A slow change can create a breathing pad, while a faster change can add a pulsing feel.",
          "Start with one modulator and one target. Too many changes at once can make a sound busy and hard to control."
        ]
      },
      {
        quote: "The best synth sounds often start with one wave and one filter move."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick the wave shape that matches your goal for tone and energy.",
          "Use low pass filters to control brightness in rich waves.",
          "Add modulation slowly to avoid overcomplicating the sound.",
          "Compare waves at the same pitch to hear clear differences.",
          "Keep presets as starting points and tweak one thing at a time."
        ]
      }
    ]
  },
  {
    slug: "audio-mastering-tips",
    title: "Simple Audio Mastering Tips",
    excerpt: "Audio mastering polishes a finished mix for release by balancing loudness, tone, and spacing so it holds up across streaming and playback devices.",
    date: "2025-03-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Star,
    content: [
      {
        heading: "When to master",
        paragraphs: [
          "Mastering should happen after mixing is complete. Make sure each track is balanced and free of obvious issues before moving to this final step.",
          "Work from a high quality export of the mix. Avoid making mix changes while mastering, as that can undo your focus."
        ]
      },
      {
        heading: "Checking loudness",
        paragraphs: [
          "Aim for reasonable loudness based on your release target. Streaming platforms often use loudness normalization, so extreme levels may not always help.",
          "Use a loudness meter instead of only looking at peak meters. This gives a better view of how loud the track will feel to listeners."
        ]
      },
      {
        heading: "Taming tone",
        paragraphs: [
          "Small EQ moves can fix harshness or muddiness in the whole mix. Cut narrow problem areas before boosting broad ranges to keep natural tone.",
          "Stereo imaging can add space, but keep bass elements centered. Widening low frequencies can cause issues on many speakers and small devices."
        ]
      },
      {
        heading: "Adding final polish",
        paragraphs: [
          "A touch of limiting can raise perceived loudness while controlling peaks. Use it sparingly to avoid squashing the dynamics of the track.",
          "Leave a few decibels of headroom for encoding. This helps prevent distortion when the file is compressed for streaming."
        ]
      },
      {
        quote: "Loud does not mean better when the dynamics are lost."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Only master after the mix is fully finished and approved.",
          "Check loudness with a meter, not just peak levels.",
          "Fix problems with cuts in EQ before making boosts.",
          "Keep low frequencies centered for better playback.",
          "Leave headroom and use limiting with restraint."
        ]
      }
    ]
  },
  {
    slug: "audio-foley-creation",
    title: "Creating Realistic Foley For Audio",
    excerpt: "Audio foley recreates everyday sounds in sync with video, so small props and careful timing can add more life than stock sound effects alone.",
    date: "2025-05-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "What is foley",
        paragraphs: [
          "Foley is the art of recording custom sounds to match actions on screen. Footsteps, cloth movement, and object handling often need custom takes to feel natural.",
          "These small sounds build a sense of presence. Without them, many scenes feel flat even if dialogue and music are strong."
        ]
      },
      {
        heading: "Choosing props",
        paragraphs: [
          "Look for props that match the material on screen. Different shoes on different surfaces create very different footstep sounds.",
          "Household items can work well. For example, certain fabrics, plastics, or wood scraps can mimic larger or different objects with a little testing."
        ]
      },
      {
        heading: "Recording sync",
        paragraphs: [
          "Watch the video while recording to match timing exactly. Small delays between action and sound are easy to notice once you play them together.",
          "Record multiple takes for the same action. Slight variations help avoid a looped feel when actions repeat."
        ]
      },
      {
        heading: "Editing for realism",
        paragraphs: [
          "Trim and align each take to its action frame by frame if needed. Tight sync makes the effect feel connected to the picture.",
          "Add light processing only after sync is solid. Too much reverb or EQ can push custom foley back into sounding generic."
        ]
      },
      {
        quote: "Timing will sell a foley sound more than any effect can."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match props to on-screen materials for believable sounds.",
          "Record while watching video to keep actions in sync.",
          "Capture multiple takes to avoid repetition.",
          "Align edits precisely to the picture for realism.",
          "Keep processing light to preserve natural texture."
        ]
      }
    ]
  },
  {
    slug: "audio-noise-reduction",
    title: "Clearing Noise In Audio Recordings",
    excerpt: "Audio noise reduction removes hum, hiss, or room noise without hurting voice quality when you fix small problems before heavy processing.",
    date: "2025-07-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Finding noise sources",
        paragraphs: [
          "Listen for constant sounds like fan hum, air hiss, or computer noise first. These are easier to reduce than sudden, random sounds.",
          "Capture a noise profile by recording silence in the same space. A short sample of only noise gives better results for many tools."
        ]
      },
      {
        heading: "Preventing noise",
        paragraphs: [
          "Fix issues at the source when possible. Moving a mic, turning off fans, or closing doors can cut noise more than any plugin can.",
          "Use proper mic placement and direction. Getting closer to the voice increases the signal while reducing background pickup."
        ]
      },
      {
        heading: "Using reduction tools",
        paragraphs: [
          "Apply noise reduction in small amounts. Overdoing it can create a watery or hollow sound that draws more attention than the original noise.",
          "Work on a copy of your track. This lets you compare before and after to judge if the change is helping."
        ]
      },
      {
        heading: "Manual cleanup",
        paragraphs: [
          "Cut silent gaps and breaths only when needed. Removing natural pauses can feel unnatural to listeners.",
          "Use spectral editing for short, specific noises like clicks or rattles. Targeting a narrow range keeps the rest of the audio intact."
        ]
      },
      {
        quote: "Less noise reduction usually sounds better than more."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Record a noise profile from the same space as your take.",
          "Solve noise at the source before relying on plugins.",
          "Reduce in small steps and compare results often.",
          "Use spectral edits for localized clicks or buzzes.",
          "Keep natural pauses unless they are clearly distracting."
        ]
      }
    ]
  },
  {
    slug: "audio-eq-strategies",
    title: "Smart EQ Strategies For Audio",
    excerpt: "Audio EQ helps shape tone by cutting problem ranges and boosting only where needed, keeping voices clear without making the mix sound harsh.",
    date: "2025-09-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "When to use EQ",
        paragraphs: [
          "EQ is best for fixing tone issues or separating sounds. Use it after level balancing, since volume changes how we hear tone.",
          "Ask if a problem comes from volume or frequency first. Raising volume may be simpler than boosting a range."
        ]
      },
      {
        heading: "Cut before boost",
        paragraphs: [
          "Look for problem frequencies like muddiness in low mids or harshness in highs. Cutting a narrow band often clears space without adding gain.",
          "Narrow cuts target specific issues, while wide cuts affect the overall feel. Match the width to the problem you hear."
        ]
      },
      {
        heading: "EQ for speech",
        paragraphs: [
          "For voice, clarity often comes from a small lift in upper mids or a cut in low mids that mask speech. Test changes while listening to the full mix.",
          "Avoid excessive high boosts that add sibilance. If 's' sounds sharp, try a narrow cut around that range instead."
        ]
      },
      {
        heading: "EQ for music tracks",
        paragraphs: [
          "Give each instrument its own space by cutting areas where they clash. For example, cutting low mids in a guitar can leave room for a vocal.",
          "Be careful with sub bass boosts on small speakers. What sounds full in headphones may be missing or boomy on other systems."
        ]
      },
      {
        quote: "A single well placed cut can fix more than several boosts."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Solve with volume first, then use EQ for tone conflicts.",
          "Cut problem bands before trying to boost others.",
          "Use narrow cuts for harsh spots and wider cuts for body.",
          "Check speech EQ in the context of music and effects.",
          "Test your EQ on multiple playback devices."
        ]
      }
    ]
  },
  {
    slug: "audio-reverb-choices",
    title: "Choosing The Right Audio Reverb",
    excerpt: "Audio reverb adds space, but the right type depends on size and mood, so small rooms often need less decay than large halls for a natural sound.",
    date: "2026-03-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "4 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Why use reverb",
        paragraphs: [
          "Reverb creates the sense of a space around a sound. It helps dry recordings feel less tight and can connect elements in a mix.",
          "Too much reverb can blur details. The goal is to suggest space without hiding the original sound."
        ]
      },
      {
        heading: "Common reverb types",
        paragraphs: [
          "Room reverbs mimic small spaces with short decay times. Plate reverbs are smooth and work well on vocals. Hall reverbs suggest larger spaces with longer tails.",
          "Convolution reverbs use real spaces, while algorithmic ones offer more control. Both can work well depending on your needs."
        ]
      },
      {
        heading: "Matching space to scene",
        paragraphs: [
          "Keep decay short for intimate scenes or close mic recordings. Longer decays fit big spaces like halls or open outdoor feels.",
          "Consider the original recording space. If a track already has room sound, adding less reverb keeps it natural."
        ]
      },
      {
        heading: "Blending carefully",
        paragraphs: [
          "Use pre-delay to separate the dry sound from the reverb tail. A small pre-delay can keep speech clear while still adding space.",
          "High frequency roll off in the reverb can prevent it from sounding bright or fizzy. This keeps it tucked behind the source sound."
        ]
      },
      {
        quote: "Reverb should support the sound, not compete with it."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose reverb size based on the space you want to suggest.",
          "Keep decay times short for natural, close recordings.",
          "Use pre-delay to maintain clarity in speech and leads.",
          "Roll off highs in reverb to keep it out of the way.",
          "Less reverb often reads as more believable in a mix."
        ]
      }
    ]
  },
  {
    slug: "audio-compression-guide",
    title: "A Practical Guide To Audio Compression",
    excerpt: "Audio compression evens out volume by controlling loud peaks, but slow attack and release times matter most for keeping sound natural and clear.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "sound", "editing"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        heading: "What compression does",
        paragraphs: [
          "Compression reduces the difference between loud and soft parts of a track. By turning down peaks, you can raise the overall level without clipping.",
          "It is a control tool, not just a loudness tool. Used well, it helps details come through in a busy mix."
        ]
      },
      {
        heading: "Key settings",
        paragraphs: [
          "Threshold sets when compression starts. Ratio controls how much it reduces once past threshold. Attack decides how fast it reacts to peaks.",
          "Release sets how quickly it stops compressing. Make up gain brings the level back up after reduction to match the mix."
        ]
      },
      {
        heading: "Choosing attack times",
        paragraphs: [
          "Fast attack grabs sharp peaks but can dull transients. Slow attack lets the first hit through, which keeps drums feeling punchy.",
          "Match attack to the sound. Percussion often likes slower attack, while some vocals may need faster control in certain spots."
        ]
      },
      {
        heading: "Choosing release times",
        paragraphs: [
          "Too fast a release can cause pumping or breathing. Too slow can make the compression feel heavy or lag behind the music.",
          "Aim for the release to follow the rhythm of the track. This keeps changes less noticeable to the ear."
        ]
      },
      {
        quote: "Good compression is felt more than it is heard."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use compression to even levels, not just to make things louder.",
          "Adjust threshold and ratio based on how much control you need.",
          "Keep attack slow for punch and fast only when needed.",
          "Set release to match the track's natural pace.",
          "Use make up gain sparingly and compare before and after."
        ]
      }
    ]
  }
];