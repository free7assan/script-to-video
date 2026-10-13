import { Eye, Film, Map, MessageSquare, PenLine, TrendingUp, Type, Users, Waves, Zap } from "lucide-react";
import type { BlogPost } from "../types";

export const batch139: BlogPost[] = [
  {
    slug: "accessibility-captions-help-everyone",
    title: "Why Captions Help Every Viewer, Not Just Deaf Ones",
    excerpt: "Captions help deaf viewers, but they also rescue anyone on a silent phone or in a loud room. Here is why adding them grows your entire audience.",
    date: "2029-12-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "What captions actually do",
        paragraphs: [
          "Captions turn spoken audio into on screen text and add labels for sounds the audience cannot see. They serve deaf and hard of hearing viewers first, yet the same text helps anyone who cannot play sound at that moment.",
          "Think about how people watch today. Phones stay muted in offices and on moving buses. A viewer who cannot hear your voice still decides in three seconds whether to keep watching, and captions are what keep them there."
        ]
      },
      {
        heading: "The quiet majority you never count",
        paragraphs: [
          "Most analytics hide the reasons behind a drop off. A muted autoplay feed punishes videos with no text because there is nothing to read while the sound is off. Captions give that viewer a reason to stop scrolling.",
          "Research on viewing habits keeps pointing the same way. A large share of social video gets watched without sound, and those viewers are not a niche. They are your normal audience on an ordinary day."
        ]
      },
      {
        quote: "Silence is not the exception online. For a huge slice of viewers it is the default, and text is the only door in."
      },
      {
        heading: "Reach viewers who speak another language",
        paragraphs: [
          "A caption track doubles as a translation surface. When your words appear as text, a viewer who reads your language better than they hear it can follow along. Translating that track later opens whole regions without a new shoot.",
          "That same track becomes a search asset. Platforms read captions to understand your topic, so accurate text puts you in front of people searching for the ideas you already cover. The work you did once keeps paying on every upload."
        ]
      },
      {
        heading: "Captions compound",
        paragraphs: [
          "Start with clean captions on your ten most watched videos. Those are the ones new viewers meet first, so the upgrade reaches the most people for the least effort.",
          "Then make captions a step in your normal export, not a project you schedule. A step costs minutes. A project costs a weekend, and weekends get postponed. Put it in the template and it ships with every video."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Captions serve deaf viewers and also every viewer who cannot play sound in the moment.",
          "Muted autoplay feeds punish uncaptioned video by giving the eye nothing to hold.",
          "A caption track becomes a translation surface and a search signal you can reuse.",
          "Bake captions into the export template so they stop being a separate decision."
        ]
      }
    ]
  },
  {
    slug: "accessibility-writing-accurate-captions",
    title: "Writing Captions That Match What You Actually Say",
    excerpt: "Accurate captions take more than a machine pass. Learn to fix names and timing so your text reads like a person wrote it, not like a machine guess.",
    date: "2029-12-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        heading: "Start from a transcript",
        paragraphs: [
          "Accurate captions begin with a transcript you can correct before timing anything. Run your audio through a tool, then read the whole text once with a pen in hand. Machine transcription gets you close, but it drops names and mangles anything said quickly.",
          "Read for meaning, not just spelling. If a sentence confused you on the page, it will confuse a viewer reading along at speed, so fix the sentence in your script notes too. The transcript is evidence of what you said, and a clean one makes every later step faster."
        ]
      },
      {
        heading: "Fix the words machines get wrong",
        bullets: [
          "Check every proper noun and product name against your own spelling.",
          "Listen for homophones the tool guessed wrong, like your and you are.",
          "Add speaker labels when two voices trade lines inside a clip.",
          "Mark sounds that carry meaning, such as a door slamming or a phone ringing."
        ]
      },
      {
        quote: "A caption invites a viewer into the room. A wrong caption tells them they were never expected."
      },
      {
        heading: "Punctuation carries meaning",
        paragraphs: [
          "Punctuation does more work in captions than in a book because a viewer cannot reread a line that already scrolled past. A missing comma turns a pause into a run on sentence, and an understood tone can flip on a single question mark.",
          "Break long thoughts into short caption lines. Two clauses on one line ask the eye to do too much at once, while a natural break gives the reader a place to breathe. Match the pause you spoke, not the grammar rule you learned in school."
        ]
      },
      {
        heading: "Watch the reading speed",
        paragraphs: [
          "Each line of caption needs enough screen time to be read comfortably. If you talk fast, spread the words across more frames instead of shrinking the font. A viewer who misses half a sentence stops trusting the text and stops reading the rest.",
          "Watch the final pass on the smallest screen you own. If a line feels rushed there, it will feel rushed for everyone, and the fix is always timing rather than style."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct a full transcript before you touch timing.",
          "Verify proper nouns, homophones, and sound cues by ear.",
          "Let punctuation match how the line was actually spoken.",
          "Give every line enough screen time to be read once without racing."
        ]
      }
    ]
  },
  {
    slug: "accessibility-on-screen-text-readability",
    title: "Making On Screen Text Easy to Read on Any Device",
    excerpt: "On screen text fails when it is small, low contrast, or on screen too briefly. Fix size, weight, and timing so every viewer can read it at a glance.",
    date: "2029-12-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "Why size is the first fix",
        paragraphs: [
          "On screen text has to survive a phone screen and a television across the room. Keep labels large enough to read at arm's length before you check them on a monitor, because the smallest device sets the floor. If you have to squint on a laptop, a phone viewer has already given up.",
          "Scale text relative to the frame, not to the resolution. A caption sized for a desktop export can shrink into dust once the platform re-encodes and downscales it. Build for the smallest expected view and the larger ones take care of themselves."
        ]
      },
      {
        heading: "Weight, spacing, and margins",
        bullets: [
          "Use a medium or bold weight so thin strokes survive compression.",
          "Leave a little space between letters to keep small text from blurring together.",
          "Keep text inside a safe margin so platform interface elements never cover it.",
          "Limit each on screen line to a short phrase the eye can grasp in one pass."
        ]
      },
      {
        quote: "If a viewer has to pause to read a label, the label arrived too late."
      },
      {
        heading: "Time on screen matters",
        paragraphs: [
          "Text that vanishes in half a second only works for people who already read fast. Give each line enough time to be read twice, or slow the pace of your cut so the viewer never races the edit. Numbers and names deserve extra time because those are the details people stop to check.",
          "Reading speed drops when a viewer is also watching motion behind the words. When the background moves fast, hold the text longer or place it on a calmer part of the frame. The goal is comfort, not cleverness."
        ]
      },
      {
        heading: "Test on the smallest screen",
        paragraphs: [
          "Export a clip and watch it on a phone at normal size, not zoomed in. If any text feels like work, shrink the message rather than the font. Shorter words at a readable size beat a full sentence squeezed to fit.",
          "Ask one person who does not know your topic to read a label back to you. If they stumble, the fault is the design and not the viewer, and that is the kind of feedback worth repeating on every project."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Set the text floor by the smallest screen your audience uses.",
          "Scale type to the frame and keep strokes thick enough to survive compression.",
          "Hold text long enough to be read twice, especially names and numbers.",
          "Test reads with a stranger and shorten the message before shrinking the font."
        ]
      }
    ]
  },
  {
    slug: "accessibility-color-contrast-for-text",
    title: "Choosing Text Colors People Can Actually Read",
    excerpt: "Color contrast decides whether your text is readable at a glance. Learn the simple ratio check that keeps labels legible over any background.",
    date: "2029-12-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "What contrast ratio means",
        paragraphs: [
          "Color contrast is the measured brightness difference between text and what sits behind it. A high ratio keeps letters distinct even for someone with low vision or a screen washed out by sunlight. The W3C guidance of 4.5 to 1 for normal text and 3 to 1 for large text is a floor, not a finish line.",
          "You do not need to memorize the math. Any free contrast checker will tell you the ratio in a second, and the habit of checking takes less time than retyping a caption."
        ]
      },
      {
        heading: "Do not rely on color alone",
        paragraphs: [
          "Color blindness affects a large share of viewers, so two colors that look different to you may look identical to them. If a chart or label depends on color to carry meaning, add a shape or a text label beside it.",
          "Red and green pairings cause the most trouble. Swap one for a shade that differs in brightness, because a gap in lightness is easier to see than a gap in hue when color vision is limited."
        ]
      },
      {
        quote: "Color can decorate a message. It should never be the only thing holding the message up."
      },
      {
        heading: "Busy backgrounds break contrast",
        paragraphs: [
          "Text over footage fails anytime the background shifts from dark to light behind the words. A solid backing bar, a soft shadow, or a dark gradient keeps the ratio steady no matter what plays underneath.",
          "Semi transparent panels help, but test the darkest and lightest frame of the shot. If the text disappears at either extreme, the panel is too weak. One setting rarely covers a whole clip, so check the moments most likely to fight the words."
        ]
      },
      {
        heading: "Make the check routine",
        paragraphs: [
          "Add a contrast pass to your caption style guide and your thumbnail template. When the colors are chosen once and saved, every future video inherits the fix without a second thought.",
          "Revisit the palette when you rebrand, because a new background color can quietly break contrast that used to pass. A few minutes of checking protects months of work."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat 4.5 to 1 as the floor for body text and 3 to 1 for large text.",
          "Pair color with a shape or label so meaning never rides on hue alone.",
          "Use a backing panel or shadow to keep contrast steady over moving footage.",
          "Store the palette in a style guide and recheck it after any rebrand."
        ]
      }
    ]
  },
  {
    slug: "accessibility-describing-visuals",
    title: "Describing Visuals So Blind Viewers Follow Along",
    excerpt: "Describing visuals out loud lets blind and low vision viewers follow your story. Here is how to weave useful detail into what you already say.",
    date: "2029-12-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "Say what the eye would catch",
        paragraphs: [
          "Describing visuals means turning the parts of your video that only exist on screen into words a listener can picture. A blind viewer follows your audio first, so the description has to live inside the narration rather than in a separate note. Describe the details that carry meaning and let small decoration go.",
          "The goal is not a minute by minute inventory. A few well chosen words about a person or a place do more than a paragraph of visual bookkeeping, and they keep the story moving."
        ]
      },
      {
        heading: "Where to add description",
        bullets: [
          "Name a person the first time they appear and describe what makes them distinct.",
          "Mention on screen text that changes the meaning, such as a date or a price.",
          "Note a reaction that sound alone cannot convey, like a nod or a shrug.",
          "Point to a setting when location matters to the story."
        ]
      },
      {
        quote: "A viewer who cannot see the screen still deserves to know what happened, not just what was said."
      },
      {
        heading: "Fold it into your script",
        paragraphs: [
          "Write description into the draft instead of recording it as an afterthought. Spoken lines like a wide shot of the empty street sit naturally when they are planned with the rest of the narration. Retrofitting them later means a second recording pass and a rougher result.",
          "Keep the word order plain. Naming the subject before the action helps a listener build the scene in sequence and avoids the confusion that comes from a sentence that withholds who did what."
        ]
      },
      {
        heading: "Practice with a stranger",
        paragraphs: [
          "Play a clip for someone with the picture turned off and ask them to describe the scene back. The gaps they name are the gaps you missed, and they are usually the moments you assumed were obvious.",
          "Repeat this on a few videos until description becomes a reflex. The more you practice, the less it feels like extra work and the more it improves your writing for every viewer."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Weave description into the narration so it plays within the normal audio.",
          "Name people, key on screen text, reactions, and settings that matter.",
          "Write description into the first draft rather than adding it later.",
          "Test with the screen off and close the gaps a listener points out."
        ]
      }
    ]
  },
  {
    slug: "accessibility-audio-descriptions",
    title: "Audio Descriptions That Add Without Interrupting",
    excerpt: "Audio descriptions narrate what happens on screen during quiet moments. Learn when they help and how to write them without breaking your flow.",
    date: "2029-12-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "What audio description does",
        paragraphs: [
          "Audio description narrates the action that unfolds on screen during the quiet gaps between dialogue. It tells a blind or low vision viewer what they cannot see without talking over the parts they can already hear. Think of it as the visual half of your story, spoken aloud.",
          "Different platforms treat it differently. Some offer a separate track a viewer can switch on, while others expect the description to live inside the main mix. Know which one your audience meets before you plan the recording."
        ]
      },
      {
        heading: "Find room to speak",
        paragraphs: [
          "The craft sits in timing. Description has to land in the pauses, so you either write shorter lines to fit the gaps or leave a beat open where a line is worth adding. Trying to speak through dialogue ruins the very audio the viewer came for.",
          "Listen to the raw track with your eyes closed first. The spots where you feel lost are exactly the spots that need a sentence, and the spots where you feel oriented can stay untouched."
        ]
      },
      {
        quote: "The best audio description is invisible. It fills the silence so well the viewer forgets it was added."
      },
      {
        heading: "When to add a described version",
        paragraphs: [
          "Any video that leans on visuals to make its point benefits from a described version. Tutorials and guided tours with silent action lose most of their meaning without one. Talking head clips with constant speech need less, because the audio already carries the content.",
          "Start with the videos that new viewers meet first, since those earn the most from the upgrade. A described version of your most watched clip reaches more people than a batch of obscure ones.",
          "Consider offering it as a separate upload if the main track cannot be changed. A clearly labeled alternative gives viewers a choice and keeps your original edit intact."
        ]
      },
      {
        heading: "Write for the gaps, not the whole frame",
        paragraphs: [
          "You do not need to describe everything. Focus on what changes the story, like who enters and what they do. A viewer who knows the shape of the scene will fill in the rest from context and sound.",
          "Read the description back in a monotone and trim anything that only repeats what a character already said. Every cut word gives more room for the silence to breathe."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Audio description fills silent gaps to carry the visual half of the story.",
          "Check whether your platform wants a separate track or a mixed in voice.",
          "Prioritize videos that depend on visuals and skip what speech already covers.",
          "Write only for what changes the story and leave the rest to context."
        ]
      }
    ]
  },
  {
    slug: "accessibility-designing-for-sound-off",
    title: "Designing Video for Viewers Who Watch With Sound Off",
    excerpt: "Most viewers meet your video with sound off. Design text, motion, and pacing so the story still lands before anyone even reaches for the volume.",
    date: "2029-12-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "Assume the sound is off",
        paragraphs: [
          "Designing for sound off starts with a simple assumption that holds on most feeds. Many viewers scroll with the volume muted and decide in seconds whether a clip earns their attention. If your opening only works with audio, a large part of the audience never hears the reason to stay.",
          "This is not only an accessibility issue. It is ordinary viewing behavior, and the creators who plan for it keep more viewers through the first few seconds."
        ]
      },
      {
        heading: "Let text carry the story",
        paragraphs: [
          "Captions cover your words, but they cannot carry the whole video on their own. Add short on screen titles for the key points, and let a viewer who reads fast follow the argument without sound. Keep each title brief so the eye never has to choose between the words and the picture.",
          "Think of on screen text as a second script. It summarizes, emphasizes, and labels the parts a silent viewer would otherwise miss, such as a name or a step."
        ]
      },
      {
        quote: "A viewer with the sound off is not paying less attention. They are reading instead of listening."
      },
      {
        heading: "Motion can stand in for audio",
        paragraphs: [
          "A cut, a zoom, or a change of framing can signal a new idea without a single spoken word. When a sound effect would normally mark a transition, pair it with a visual beat so the meaning survives on mute.",
          "Use motion with restraint. Constant movement competes with your text, and the same flashing that signals energy can make the words hard to follow."
        ]
      },
      {
        heading: "Check the clip on mute yourself",
        paragraphs: [
          "Watch your rough cut with the volume at zero and ask one question at each moment: do I know what is happening. The spots where you guess are the spots a silent viewer leaves.",
          "Fix them with a title, a beat of motion, or a slower pace. None of these changes hurt the experience for people who do turn the sound on, which makes it an easy edit to keep."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Plan for muted viewing because most feeds start with sound off.",
          "Use brief on screen titles as a second script that stands alone.",
          "Pair sound driven transitions with a visual beat so meaning survives on mute.",
          "Watch every rough cut on mute and fix the moments where you get lost."
        ]
      }
    ]
  },
  {
    slug: "accessibility-subtitles-vs-captions",
    title: "Subtitles vs Captions: Knowing Which One You Need",
    excerpt: "Subtitles translate dialogue while captions also carry sound cues. Knowing the difference helps you pick the right file for every one of your viewers you serve.",
    date: "2029-12-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        heading: "The core difference",
        paragraphs: [
          "Subtitles translate spoken dialogue into another language and assume the viewer cannot understand the audio. Captions do the same job for viewers who cannot hear the audio at all, so they also describe important sounds and identify speakers. The two look alike on screen, but they answer different questions.",
          "That single distinction decides which file you need. If your audience shares your language and can hear, subtitles are for crossing a language gap. If your audience includes deaf or hard of hearing viewers, you need captions that carry sound information too."
        ]
      },
      {
        heading: "What each format includes",
        bullets: [
          "Captions mark non speech sounds, such as laughter, a door closing, or music swelling.",
          "Captions label the speaker when more than one voice is present.",
          "Subtitles usually keep just the spoken line in the target language.",
          "Both formats follow the same timing and readability rules once written."
        ]
      },
      {
        quote: "Captions answer what would I miss with no sound. Subtitles answer what would I miss without this language."
      },
      {
        heading: "Which one to ship",
        paragraphs: [
          "Ship captions for your primary audience because they serve the widest range of viewers. Then add subtitle tracks for each language you want to reach, using your corrected caption file as the base. Cleaning the text once saves you from fixing the same mistakes in every translation.",
          "Auto generated captions from a platform are a starting point, not a finished track. They ignore sound cues, guess at names, and rarely handle more than one speaker well. Review and edit them before you call the job done."
        ]
      },
      {
        heading: "Keep them consistent",
        paragraphs: [
          "Set one style for both formats so viewers recognize your text across languages. Pick a font and a size that stay the same whether the track is in your language or another.",
          "Store the base caption file with each project. When you translate later, you start from a clean source rather than a fresh machine guess, and the quality carries through every version."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Captions serve viewers who cannot hear and include sound cues and speaker labels.",
          "Subtitles translate dialogue for viewers who do not share your language.",
          "Start from corrected captions and branch off translations from that clean base.",
          "Treat auto generated tracks as a draft you must review, not a finished file."
        ]
      }
    ]
  },
  {
    slug: "accessibility-avoiding-flashing-issues",
    title: "Avoiding Flashes That Make Your Viewers Look Away",
    excerpt: "Rapid flashing can trigger seizures and headaches. Learn the limits that matter and how to test your edits before they ever reach a real viewer.",
    date: "2029-12-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "Why flashing is a real risk",
        paragraphs: [
          "Fast repeating light or a hard cut between bright and dark frames can trigger seizures in people with photosensitive epilepsy. The risk is real but manageable, because the problematic patterns follow patterns we can measure and avoid. A few seconds of careless editing can make a video unsafe for a viewer who had no warning.",
          "The issue is not brightness by itself. It is the speed and contrast of the change, repeated often enough that the eye cannot settle before the next flash arrives."
        ]
      },
      {
        heading: "The limits that matter",
        bullets: [
          "Keep any repeating flash under three cycles per second for the whole clip.",
          "Watch transitions between high contrast colors, not just black and white.",
          "Trim strobe effects, rapid cuts, and flickering overlays that repeat.",
          "Give viewers room to look away without losing the story when a bright beat is unavoidable."
        ]
      },
      {
        quote: "One edit can turn a harmless effect into a health hazard. The fix takes seconds and costs nothing."
      },
      {
        heading: "Build a safety pass",
        paragraphs: [
          "Add a slow motion review to your edit routine. Scrub the timeline at quarter speed and watch for any stretch where light or color flips back and forth. The movement that looks lively at full speed often reveals a steady strobe when slowed down.",
          "If you find a risky section, soften it instead of deleting it. Reduce the contrast or cut to a calmer shot. The energy usually survives, and the danger does not.",
          "Keep a note of what you changed for the next project. Patterns repeat across your videos, so the same fix often prevents the same problem twice."
        ]
      },
      {
        heading: "Warn viewers when you must",
        paragraphs: [
          "Sometimes an effect carries the message and cannot be removed. When that happens, place a clear warning at the start and in the description so a sensitive viewer can prepare or skip ahead.",
          "A warning is a courtesy, not a license to keep the strobe. Use it only when you have already done what you can to soften the risk, and keep the effect as brief as the story allows."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fast, high contrast repetition can trigger seizures in photosensitive viewers.",
          "Cap repeating flashes under three per second and watch color as well as light.",
          "Scrub the edit in slow motion to catch strobes that move too fast to notice.",
          "Soften risky effects first and warn viewers only when the effect must stay."
        ]
      }
    ]
  },
  {
    slug: "accessibility-audience-growth",
    title: "Treating Accessibility as an Audience Growth Channel",
    excerpt: "Accessibility work looks like a cost until you count the viewers it adds. See how captions and clear design widen the reach of every video you publish.",
    date: "2029-12-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["accessibility", "captions", "audience"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Access is reach",
        paragraphs: [
          "Accessibility work gets treated as a cost until you count who it brings in. Captions and clear text widen every video to viewers who were locked out before. The same changes that help a deaf viewer also help a commuter on a silent phone.",
          "Seen this way, accessibility is not a charity line item. It is distribution, and it compounds because each improved video keeps working long after you publish it."
        ]
      },
      {
        heading: "The audience you already missed",
        paragraphs: [
          "Every uncaptioned video quietly turned people away. A viewer who could not follow the audio left without telling you why, and the analytics recorded a drop off with no explanation. Adding the missing text reverses a loss you may never have known you had.",
          "Translation is the second gain. A corrected caption track becomes the base for other languages, so one piece of work opens regional audiences that a single language upload never reached."
        ]
      },
      {
        quote: "You do not grow an audience by finding more people. You grow it by removing the reasons the ones you have walk away."
      },
      {
        heading: "Make it routine, not a project",
        paragraphs: [
          "Treat accessibility as a step in your normal process, not a special effort you schedule. Add captions to the export template, set a contrast rule for thumbnails, and write description into the script from the start. Steps cost minutes, and projects get postponed.",
          "Measure the change the same way you measure anything else. Track watch time and comments on the videos you upgraded, and let the numbers settle the argument about whether the work was worth it.",
          "Start with the handful of videos that new viewers meet first. Those earn the most from every improvement and give you a visible result to build on."
        ]
      },
      {
        heading: "Where to begin this week",
        paragraphs: [
          "Pick your three most watched videos and caption them properly. Then set one rule you will keep on every new upload, such as a readable text size or a contrast check before publishing.",
          "One rule followed beats a long plan abandoned. Each small habit spreads across your whole library, and the audience that could never fully join finally can."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat accessibility as distribution that widens every video you publish.",
          "Uncaptioned clips turn viewers away silently, so the fix recovers lost reach.",
          "Bake captions, contrast checks, and description into your normal process.",
          "Start with your most watched videos and track the watch time they gain."
        ]
      }
    ]
  }
];
