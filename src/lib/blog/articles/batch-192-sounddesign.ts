import { BarChart3, BookOpen, Feather, Layers, Map, Repeat, Scissors, Search, Target, Waves } from "lucide-react";
import type { BlogPost } from "../types";

export const batch192: BlogPost[] = [
  {
    slug: "sound-design-why-sound-carries-video",
    title: "Why Sound Carries Your Video More Than Picture",
    excerpt: "This is why sound design carries a video long after the visuals fade, and how to treat audio as the lead storyteller rather than a final polish.",
    date: "2034-05-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Why sound leads the experience",
        paragraphs: [
          "Sound design shapes how an audience feels about a video more than most editors want to admit. If the picture is only average but the audio is clean and deliberate, people keep watching. If the audio is thin or harsh, they stop, and no clever cut saves the scene.",
          "The eye forgives a soft frame or a slightly warm white balance. The ear does not forgive hiss, clipping, or a music bed that fights the voice. Treat audio as the lead storyteller and the visuals get an easier job from that point on."
        ]
      },
      {
        heading: "Picture sets the scene, audio sets the mood",
        paragraphs: [
          "Play the same clip twice, once with a warm piano and once with a low drone, and you have two different films. Nothing changed in the frame. The brain reads emotion from tone, pace, and the space around a voice, and it does that work before you notice it.",
          "That is the lever you pull. A room reverb or a distant siren can tell the viewer where they are before any character speaks. Sound builds the world that the camera only sketches, and it does so cheaply."
        ]
      },
      {
        heading: "Where weak audio usually goes wrong",
        bullets: [
          "Levels jump between scenes because nobody checked loudness across the whole timeline.",
          "Music sits under dialogue but never moves, so every line feels buried under the same shelf of tone.",
          "Room tone is missing, so cuts sound like holes instead of places.",
          "Effects come from a pack without matching the distance of the scene or its era.",
          "The mix gets checked on studio headphones and then plays on a laptop speaker that flattens everything."
        ]
      },
      {
        quote: "Viewers will forgive a soft image, but they will not forgive a muddy mix."
      },
      {
        heading: "Treat the mix as a character",
        paragraphs: [
          "Give the mix its own pass on the timeline. Solo the dialogue and ask if every word is clear on a phone speaker. Then bring the music in and check that it never masks a consonant. Do the same check with effects muted, then with everything on.",
          "Small moves beat big ones. A two decibel lift on a footstep, a touch of reverb when the scene moves outside, one second of quiet before a reveal. Each choice is invisible on its own and glaring when it is missing."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Audio carries emotion, so fix it before you polish the picture.",
          "Test every mix on the worst speaker a viewer might use.",
          "Use space and tone to place the scene, not only music.",
          "Small level moves do more than dramatic effects."
        ]
      }
    ]
  },
  {
    slug: "sound-design-layering-a-soundscape",
    title: "How to Layer a Soundscape That Feels Truly Real",
    excerpt: "Layering a soundscape means stacking foreground, mid, and background elements so a scene feels lived in rather than assembled from a sample pack.",
    date: "2034-05-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "What layering actually means",
        paragraphs: [
          "Layering a soundscape is the practice of stacking several recordings so one sound does not have to carry an entire scene. You build depth the way a painter builds a canvas, starting with a broad base and then adding detail closer to the eye.",
          "A believable room is rarely one file. It is a bed of air, a few specific props, and a couple of accents that draw the ear to what matters in the shot."
        ]
      },
      {
        heading: "Three planes of sound",
        paragraphs: [
          "Think in planes. The background plane is steady and quiet, like a fan, a street, or rain on glass. The mid plane holds the sounds tied to the action, like typing, footsteps, or a kettle. The foreground plane carries one or two accents that sync to the edit.",
          "If every plane has the same loudness, the scene turns to mush. Pull the background down until you barely hear it alone, then it still registers when the picture is full."
        ]
      },
      {
        heading: "Build the bed first",
        bullets: [
          "Start with a loop that runs the full length of the scene, not a short clip that repeats audibly.",
          "Match the acoustic space of the shot, so a tiled room does not sound like a carpeted office.",
          "Keep the bed mono when it plays on a phone, and widen it only when the platform supports stereo.",
          "High pass the bed around eighty hertz so it never muddies the dialogue."
        ]
      },
      { quote: "One sound cannot carry a world. Five careful ones can." },
      {
        heading: "Make the layers serve the cut",
        paragraphs: [
          "Every layer should earn its place by pointing at something on screen. A dog barks when the character glances off camera. A car passes as the subject crosses the frame. The sound confirms what the eye already suspects.",
          "When a layer has no job, cut it. A clean soundscape is not a busy one. You are building a room the viewer believes in, and belief comes from restraint more than volume."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Stack a quiet bed, action-level mid sounds, and a few foreground accents.",
          "Match the space of the recording to the space in the shot.",
          "Keep the low end clear so dialogue stays intelligible.",
          "Cut any layer that does not point at something on screen."
        ]
      }
    ]
  },
  {
    slug: "sound-design-room-tone-and-ambience",
    title: "Room Tone and Ambience: The Glue of Every Scene",
    excerpt: "Room tone and ambience hold a scene together. Record the quiet of each location so cuts stop popping and the edit feels continuous.",
    date: "2034-05-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "The quiet you record on purpose",
        paragraphs: [
          "Room tone is the sound of a space with nobody talking. It is the hum of a fridge, the breath of a vent, the faint hiss of a room that never sits in true silence. Ambience is the wider version of that idea, the sound of a place outside the walls.",
          "Record two minutes of tone at every location before the crew packs up. Ask the room to stay quiet for a moment and roll. That clip will save you more time in the edit than any plugin."
        ]
      },
      {
        heading: "Why cuts pop without it",
        paragraphs: [
          "Digital silence between two spoken clips reads as a glitch. The ear hears the room vanish and return, and it pulls the viewer out of the scene. A thin layer of recorded tone under the whole timeline removes that jump.",
          "Ambience does the same job across locations. If a film moves from a kitchen to a garage, the base sound should change at the cut so the viewer feels the move instead of being told about it."
        ]
      },
      {
        heading: "How to use tone correctly",
        bullets: [
          "Lay one continuous tone bed under the scene at a low, constant level.",
          "Match the tone to the camera angle, so a wide shot does not use the quiet of a tight corner.",
          "Fade tone in and out over four to eight frames to avoid clicks.",
          "Keep tone out of the music bus so ducking does not swallow it."
        ]
      },
      { quote: "Silence on a film is a choice, not a default. Record the room so you can decide." },
      {
        heading: "When to break the rule",
        paragraphs: [
          "Some moments want the room to disappear. A reveal, a memory, or a hard beat can land harder with the tone pulled out for a second. That only works if the tone was there first.",
          "So record it, use it, and then remove it when the story asks. The tool is only effective because the baseline is set."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Capture a couple of quiet minutes at every location.",
          "Run a low tone bed under the whole scene to hide cuts.",
          "Change ambience when the setting changes.",
          "Pull tone out only when the story calls for a jolt."
        ]
      }
    ]
  },
  {
    slug: "sound-design-sound-effects-for-emphasis",
    title: "Using Sound Effects for Emphasis Without Overdoing It",
    excerpt: "Sound effects for emphasis should arrive when the picture needs a push. A well placed hit lands harder than a wall of noise competing for attention.",
    date: "2034-05-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "What emphasis sounds like",
        paragraphs: [
          "An emphasis effect marks a moment you want the viewer to feel. It can be a whoosh on a transition, a low boom under a title, or a subtle tick when a number appears. The job is to sync attention, not to fill empty space.",
          "If you can hear the effect as its own event rather than as part of the scene, you probably pushed it too far. Emphasis should feel like the picture got louder, not like a sound was bolted on."
        ]
      },
      {
        heading: "Place them on the action",
        paragraphs: [
          "Line the transient of the effect with the exact frame of the cut or the gesture. A boom that lands two frames late feels sloppy even if nobody can name why. Nudge until the peak sits on the moment.",
          "One accent per beat is plenty. If three effects fire at once, the ear picks none of them. Choose the single sound that best matches the emotion and mute the rest."
        ]
      },
      {
        heading: "A small palette goes far",
        bullets: [
          "A deep boom for weight and finality.",
          "A short whoosh for movement across the frame.",
          "A soft tick for text, numbers, or small reveals.",
          "A reverse swell to pull the viewer toward a cut.",
          "A paper or cloth rustle for tactile detail."
        ]
      },
      { quote: "An accent should point at the moment, not shout over it." },
      {
        heading: "Sound design for emphasis is subtraction",
        paragraphs: [
          "The hardest part is resisting more. Every effect you add makes the next one less special. Pull the music back for half a second and a single boom will hit with twice the force.",
          "Build quiet around the accent and the accent does the work. That is the whole trick, and it costs nothing but patience."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sync every accent to the exact frame of the action.",
          "Keep one emphasis event per beat.",
          "Let quiet around an effect give it power.",
          "Cut any sound that reads as an obvious add-on."
        ]
      }
    ]
  },
  {
    slug: "sound-design-silence-as-a-tool",
    title: "Silence as a Tool: When Less Audio Hits Harder",
    excerpt: "Silence as a tool is the most underused move in sound design. Pull the audio down at the right beat and the next moment lands with real weight.",
    date: "2034-05-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        heading: "The pause before the point",
        paragraphs: [
          "Silence as a tool means removing sound on purpose to make the next moment bigger. Filmmakers call it a drop out. The music cuts, the room fades, and the ear leans in because it expects something.",
          "You do not need true digital silence to use it. Dropping the bed by ten decibels for a beat often reads as full silence to the viewer. The contrast is what they feel."
        ]
      },
      {
        heading: "Where silence earns its place",
        paragraphs: [
          "Use it before a reveal, before a punchline, or right after a loud event. A crash followed by a beat of near quiet can say more than another layer of noise. The stillness gives the audience a second to process.",
          "It also works in interviews. A short pause after a heavy answer lets the words sit. Cutting straight to music robs the line of its room to breathe."
        ]
      },
      {
        heading: "How to place a drop out",
        bullets: [
          "Find the single moment the scene is building toward.",
          "Trim the music and ambience two to twelve frames before it.",
          "Return the bed on the cut so the release feels deliberate.",
          "Check that the pause does not read as a technical error on a phone."
        ]
      },
      { quote: "The loudest thing in a scene is often the second where nothing plays." },
      {
        heading: "Do not overuse it",
        paragraphs: [
          "A drop out loses power when it happens every scene. Save it for the beats that matter most, maybe twice in a short video. If silence is constant, it becomes the new baseline and the trick dies.",
          "The point is contrast. Keep the bed full elsewhere so the quiet has something to push against."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pull audio down before a reveal or a punchline.",
          "A partial cut often reads as full silence.",
          "Return the bed on the cut to make the release land.",
          "Use drop outs sparingly so they stay surprising."
        ]
      }
    ]
  },
  {
    slug: "sound-design-matching-your-sound-to-cuts",
    title: "Matching Your Sound to Cuts So Edits Land Cleanly",
    excerpt: "Matching sound to cuts is how an edit stops feeling like a slideshow. Align the audio transient with the picture change and the whole scene tightens up.",
    date: "2034-05-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "Cuts are heard before they are seen",
        paragraphs: [
          "Matching sound to cuts means placing the peak of a sound on the exact frame where the picture changes. Do it well and the transition feels intentional. Miss it by a few frames and the edit feels loose even when the image is sharp.",
          "The ear is faster than the eye at catching misalignment. Two frames of drift is enough to read as a mistake on a fast cut."
        ]
      },
      {
        heading: "Hard cuts and soft cuts",
        paragraphs: [
          "A hard cut wants a sound with a sharp attack, like a click, a snare, or a door. The transient and the cut should share a frame. A soft dissolve wants the opposite, a long fade or a swell that overlaps both shots.",
          "Match the shape of the sound to the shape of the edit. A gentle crossfade with a hard boom underneath will fight itself every time."
        ]
      },
      {
        heading: "Practical alignment tips",
        bullets: [
          "Zoom into the waveform so you can see the peak, not just hear it.",
          "Nudge in one frame steps rather than dragging freely.",
          "Turn off snapping when fine tuning, then turn it back on.",
          "Check the join at full speed, not only frame by frame.",
          "Keep effects off the music bus so a duck does not shift them."
        ]
      },
      { quote: "If the cut and the sound share a frame, the edit disappears." },
      {
        heading: "Let rhythm guide you",
        paragraphs: [
          "Every scene has a pulse. Footsteps, breaths, and the natural cadence of speech all set a tempo. Cut with that tempo instead of against it and the edit starts to feel musical.",
          "You are not scoring a symphony. You are agreeing with the rhythm already in the footage, then placing one or two accents to confirm it."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Line the audio peak with the exact cut frame.",
          "Match sharp sounds to hard cuts and long fades to dissolves.",
          "Nudge in single frames for precision.",
          "Follow the natural rhythm already inside the footage."
        ]
      }
    ]
  },
  {
    slug: "sound-design-ducking-music-under-speech",
    title: "Ducking Music Under Speech Without Killing the Vibe",
    excerpt: "Ducking music under speech keeps dialogue clear while the score still carries mood. Set the depth and release with care and the mix stays alive.",
    date: "2034-05-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "What ducking is for",
        paragraphs: [
          "Ducking music under speech lowers the score whenever someone talks, then lifts it back when they stop. The goal is simple: every word stays clear while the music still sets the mood between lines.",
          "Without ducking, you face a bad choice. Turn the music up and lose the voice, or turn it down and lose the energy. Ducking lets you keep both."
        ]
      },
      {
        heading: "Depth and release matter most",
        paragraphs: [
          "Depth is how far the music drops. Six to ten decibels is usually enough for narration. Set it deeper and the music pumps audibly, which draws attention to the effect itself.",
          "Release is how fast the music comes back. A slow release, around four hundred milliseconds, sounds natural. A fast one makes the mix breathe in and out like a nervous hand on the fader."
        ]
      },
      {
        heading: "Settings to start from",
        bullets: [
          "Use the dialogue as the sidechain trigger rather than a manual curve when you can.",
          "Start with a six decibel dip and increase only until the voice is clear.",
          "Set attack near ten milliseconds so the first word is never clipped.",
          "Set release near four hundred milliseconds to avoid pumping.",
          "High pass the trigger so bass does not open the duck by mistake."
        ]
      },
      { quote: "Ducking should be felt as clarity, never heard as a fader moving." },
      {
        heading: "When not to duck",
        paragraphs: [
          "If the music has no vocals and sits in a different frequency range from the voice, you may not need to duck at all. A quiet pad under a deep voice can coexist with no automation.",
          "Also skip heavy ducking on musical moments where the score is the point. Let the music lead there and keep speech out of the way instead."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Duck just enough to keep every word clear.",
          "Keep the dip shallow to avoid pumping.",
          "Use a slow release for a natural feel.",
          "Channel the trigger from dialogue, not from the full mix."
        ]
      }
    ]
  },
  {
    slug: "sound-design-cleaning-noisy-audio",
    title: "Cleaning Noisy Audio Without Flattening the Voice",
    excerpt: "Cleaning noisy audio is a balance between removing hiss and keeping a voice that sounds human. Go step by step or you trade one problem for another.",
    date: "2034-05-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Find the noise before you fix it",
        paragraphs: [
          "Cleaning noisy audio starts with knowing what the noise is. Hiss is broad and steady. Hum sits at a fixed low frequency. Room rumble lives under a hundred hertz. Each has a different fix.",
          "Solo a quiet passage and listen closely. Write down what you hear. Guessing at a plugin preset will smooth the whole track and take the life out of the voice."
        ]
      },
      {
        heading: "Order of operations",
        bullets: [
          "Cut the low rumble with a high pass around eighty hertz.",
          "Remove a steady hum with a narrow notch at its exact frequency.",
          "Reduce broadband hiss with a light noise gate or a gentle expander.",
          "Apply a de-esser only if the sibilance survives the rest.",
          "Check the result on speakers and on a phone before you commit."
        ]
      },
      {
        heading: "Do not overclean",
        paragraphs: [
          "The easiest mistake is pushing a denoiser until the voice sounds like it came through a phone line. A little hiss left in a recording is far less distracting than a watery, robotic tone.",
          "Move the reduction slider in small amounts and compare the result against the original. If you cannot hear the noise but the voice still breathes, you have gone far enough."
        ]
      },
      { quote: "A clean voice still sounds like a person. That is the line worth holding." },
      {
        heading: "Prevention beats repair",
        paragraphs: [
          "Most cleanup work is avoidable. Record in a soft room, keep the microphone off the laptop fan, and set gain so the loudest line peaks near minus six decibels. That single habit removes half the noise you would otherwise fight.",
          "When the source is already bad, accept a ceiling. You can make noisy audio usable, but you cannot make it pristine. Set expectations and move on."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Identify hiss, hum, or rumble before you reach for a preset.",
          "Fix low end and hum first, then broadband noise.",
          "Keep reduction light so the voice stays human.",
          "Record clean gain so you fight less noise later."
        ]
      }
    ]
  },
  {
    slug: "sound-design-stereo-versus-mono",
    title: "Stereo Versus Mono: Choosing the Right Mix Space",
    excerpt: "Stereo versus mono is a choice about where people listen. A mix that only works on headphones can fall apart on a phone speaker.",
    date: "2034-05-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "The practical difference",
        paragraphs: [
          "Mono sends the same sound to both ears as one channel. Stereo splits the sound across two channels so each side can differ. The choice changes how a scene feels and how well it survives on small speakers.",
          "Most viewers hear your work on a phone, often on a single speaker. That reality should decide how wide you push the mix."
        ]
      },
      {
        heading: "Keep the core in mono",
        paragraphs: [
          "Dialogue, room tone, and the main melody should sit near the center. Information that lives only on one side can vanish on a mono speaker or earbud. Center content survives every device.",
          "Save the sides for texture, width, and movement. A passing car or a background crowd can live in the channels without risking the important material."
        ]
      },
      {
        heading: "How to test the mix",
        bullets: [
          "Collapse the mix to mono and listen for anything that disappears.",
          "Check that dialogue stays clear with one earbud in.",
          "Play the scene on a phone speaker at low volume.",
          "Watch for phase issues that thin the voice when summed.",
          "Confirm the sides add space rather than confusion."
        ]
      },
      { quote: "If a sound only exists on the left, half your audience never hears it." },
      {
        heading: "Wide where it helps, tight where it counts",
        paragraphs: [
          "Widening the ambience and music can make a scene feel cinematic. Widening spoken words usually makes them harder to follow. Keep the important, informative layer centered and let the mood occupy the edges.",
          "This is not a rule about style. It is a rule about reach. You want the story to arrive intact no matter which speaker the viewer owns."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep dialogue and key melody centered in the field.",
          "Use the sides for texture and movement only.",
          "Collapse to mono before you call the mix done.",
          "Assume most viewers hear you on a small speaker."
        ]
      }
    ]
  },
  {
    slug: "sound-design-building-a-sfx-library",
    title: "Building a Sound Effects Library That Saves Hours",
    excerpt: "Building a sound effects library pays off for years. A small, well named, well tagged collection beats a huge folder you never open.",
    date: "2034-05-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["audio", "editing", "craft"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "Start small and own the sounds",
        paragraphs: [
          "Building a sound effects library is less about volume and more about familiarity. You want a set of sounds you know by heart, so you can place one in seconds instead of scrolling for minutes.",
          "Record your own where you can. A door in your flat, a kettle, footsteps on your stairs. Library sounds are fine, but the ones you captured fit your footage and cost nothing extra."
        ]
      },
      {
        heading: "Name and tag like a librarian",
        paragraphs: [
          "A file called boom final 2 is useless in a month. Use plain descriptive names, like low impact boom deep. Add tags for category, mood, and length so a search finds the right sound fast.",
          "Keep one folder per category and one master index. Consistency matters more than the tool. A plain spreadsheet beats a clever system you stop updating."
        ]
      },
      {
        heading: "A starter structure",
        bullets: [
          "Impacts and booms for weight and transitions.",
          "Movement sounds like whooshes, swishes, and passes.",
          "UI and tick sounds for text, numbers, and clicks.",
          "Ambience loops for rooms, streets, and weather.",
          "Foley for cloth, paper, and small handling detail."
        ]
      },
      { quote: "A sound you cannot find in ten seconds is a sound you do not own." },
      {
        heading: "Maintain it as you work",
        paragraphs: [
          "Every time you hunt for a sound and fail, that is a note to record or download it. Add it once and tag it, and the next project gets easier. The library grows from real needs rather than a shopping spree.",
          "Back it up somewhere whole. A lost effects library can set you back years, and no plugin brings that work back. A simple copy on a second drive is enough."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Favor a small set you know over a huge one you do not.",
          "Record your own sounds when the footage calls for them.",
          "Name files plainly and tag them by category and mood.",
          "Grow the library from real gaps you hit while editing.",
          "Back it up on a second drive."
        ]
      }
    ]
  }
];
