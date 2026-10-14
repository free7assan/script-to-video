import { Film, Clock, Repeat, Eye, Zap, Layers, BookOpen, Target, Activity, Flag } from "lucide-react";
import type { BlogPost } from "../types";

export const batch205: BlogPost[] = [
  {
    slug: "frame-rate-24-versus-30-frames",
    title: "Frame Rate: Picking 24 or 30 for Your Next Project",
    excerpt: "The right frame rate for a shot comes down to clarity, motion, and how much realism fits the story you want to tell on screen each time.",
    date: "2035-06-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "The direct answer",
        paragraphs: [
          "The frame rate you pick between 24 and 30 frames is not about which one looks better in general. It is about the tradeoff between a film look and clear motion for the type of footage you plan to record.",
          "For scripted stories, 24 frames often feels less busy to the eye. For live events, 30 frames tends to hold small motions in a way that reads more clearly on most screens."
        ]
      },
      {
        heading: "Motion and feel",
        paragraphs: [
          "At 24 frames, each frame shows a larger jump in time between shots, so motion blur builds in a way that can feel soft to viewers. This soft look has long been tied to movies, but it can lose small details when subjects move fast.",
          "At 30 frames, more frames cover the same second, so small gestures stay easier to read. That clarity comes at the cost of less of the stuttered motion that some viewers link to a cinematic feel."
        ]
      },
      {
        quote: "Pick the rate that helps viewers see what matters, not the one with the most hype."
      },
      {
        heading: "When to choose each",
        paragraphs: [
          "Choose 24 frames for planned shots where pacing lets motion unfold without needing split-second clarity. Choose 30 frames for talks, panels, or any scene where lip sync and quick gestures need to land without guessing.",
          "Keep in mind that your audience screen can play a small role, but the content goal should guide the choice first."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use 24 frames to lean toward a film look with a bit more motion blur.",
          "Use 30 frames for clear motion in live or tutorial style footage.",
          "Match the rate to the action, not personal preference alone."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-60-for-clarity",
    title: "Frame Rate 60 Frames: When Clarity Beats Film Look",
    excerpt: "Moving to 60 frames gives clearer motion for fast action, but it can also feel too flat for stories that rely on a softer film look now.",
    date: "2035-06-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Clear motion comes at a cost",
        paragraphs: [
          "At 60 frames, you cover a second with twice as many images as 30 frames. That gives more samples for fast motion and can cut down on blur for panning shots.",
          "The tradeoff is a look that some viewers call overly real. For certain content, that added reality helps, while for scripted drama it can feel out of place."
        ]
      },
      {
        heading: "Where it helps most",
        paragraphs: [
          "Sports, product demos, and how-to clips often benefit from 60 frames because viewers need to track small changes. Even small hand motions read better, so less time is lost to guesswork.",
          "For gaming footage, 60 frames has also become a common baseline because smooth tracking can matter more than a soft film look."
        ]
      },
      {
        quote: "Clarity is useful only when the viewer needs to see the detail."
      },
      {
        heading: "When to avoid 60",
        paragraphs: [
          "For quiet scenes with long holds, 60 frames can make small camera shifts more visible. That can pull focus from mood to mechanics, which may not fit your goal.",
          "File sizes also grow, and some platforms handle 60 frames differently, so plan for export needs before locking in this rate."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use 60 frames for fast action where detail must stay visible.",
          "Avoid 60 frames for slow, moody scenes that rely on softer motion.",
          "Consider file size and playback when choosing 60 frames."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-slow-motion-guide",
    title: "Frame Rate for Slow Motion: A Practical Shooting Guide",
    excerpt: "Shooting high frame rates for slow-mo can stretch time, but getting usable results means planning for light, shutter speed, and playback rate.",
    date: "2035-06-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "Time stretch math",
        paragraphs: [
          "Slow motion works by recording at a high frame rate and playing back at a lower one. For example, 120 frames recorded and played at 30 gives a 4x slowdown in effect.",
          "This simple math is easy to miss when shooting. Plan your playback rate first, then pick a record rate that fits the time stretch you want."
        ]
      },
      {
        heading: "Light and shutter speed basics",
        paragraphs: [
          "Higher frame rates need more light, since each exposure is shorter. A rule of thumb is to keep shutter speed close to double the frame rate when aiming for natural motion blur.",
          "Without enough light, raising gain can add noise. Test small clips before a full take to avoid lost footage."
        ]
      },
      {
        quote: "Record time is cheap, but lost light is not."
      },
      {
        heading: "Practical limits",
        paragraphs: [
          "On a phone, high frame rates for slow motion often come with crop or bitrate limits. On a camera, heat and storage can cap how long you can record at very high rates.",
          "Also note that not all scenes benefit from slow motion. Use it only when stretching time helps explain or show something that normal speed hides."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Plan playback rate before picking record frame rate for slow motion.",
          "Keep light in mind as each frame gets less exposure time.",
          "Use slow motion sparingly to keep its impact."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-and-motion-blur",
    title: "Frame Rate and Motion Blur: Finding the Right Balance",
    excerpt: "Motion blur links to frame rate in subtle ways, and changing rates can make pans feel either smooth or choppy without adjusting anything else.",
    date: "2035-06-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "Blur follows time",
        paragraphs: [
          "Motion blur comes from how far a subject moves during one exposure. So if shutter speed stays fixed while frame rate rises, each frame shows less movement and blur drops.",
          "If you raise frame rate but also raise shutter speed too far, pans can feel jittery. Keeping a near 180-degree shutter can help retain some blur."
        ]
      },
      {
        heading: "Perceived smoothness",
        paragraphs: [
          "More frames can make motion look smoother, but that smoothness can feel strange without blur. This is one reason 60 frames can feel different from 24 frames even on static shots.",
          "For fast pans, lowering frame rate without enough blur can look stuttered. For slow moves, higher rates can look clean."
        ]
      },
      {
        quote: "Smooth motion needs both frames and blur in balance."
      },
      {
        heading: "Practical fix",
        paragraphs: [
          "When moving to a higher frame rate, try to keep shutter speed at roughly double that rate. This keeps blur in line with how we see motion in most cases.",
          "If light limits force a fast shutter, expect less blur and plan pans with more care to avoid jitter."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Motion blur drops as frame rate rises if shutter speed stays fixed.",
          "Aim for shutter speed near twice the frame rate for natural blur.",
          "Pans need extra care at very high frame rates."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-mixing-safely",
    title: "Frame Rate Mixing Safely in One Edit Timeline",
    excerpt: "Mixing frame rates safely in one timeline can work, but mismatched footage often needs timing fixes to avoid stutter or awkward cuts now.",
    date: "2035-06-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Why mixes cause issues",
        paragraphs: [
          "When clips run at different frame rates on the same timeline, playback speed must be adjusted. Without care, that can create stutter or change the feel of motion between cuts.",
          "Some edits can blend well if the difference is small, but large jumps like 24 to 60 can be hard to hide."
        ]
      },
      {
        heading: "Common fixes",
        paragraphs: [
          "Conform clips to the timeline rate before cutting when possible. This keeps timing predictable and avoids frame drops on playback.",
          "For slow motion clips, interpret footage to the target playback rate rather than letting the editor guess. This gives control over the exact stretch."
        ]
      },
      {
        quote: "Conform first, cut second, to avoid guessing later."
      },
      {
        heading: "When to avoid mixing",
        paragraphs: [
          "If a scene has quick cuts between shots, mixed rates stand out more. In that case, it is often easier to shoot at one rate for that scene.",
          "Also note that some platforms re-encode footage, so test a small export to see if any stutter remains."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Conform mixed clips to the timeline rate for cleaner playback.",
          "Interpret high frame rate clips to a set playback rate for control.",
          "Avoid mixing rates across rapid cuts when possible."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-tutorials-versus-film-looks",
    title: "Frame Rates for Tutorials Versus Film Looks",
    excerpt: "Frame rates for tutorials should favor clarity, while film looks often trade some clarity for mood, and that choice shapes viewer focus today.",
    date: "2035-06-06",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "Clarity drives tutorials",
        paragraphs: [
          "For tutorials, viewers need to see text, clicks, and small movements. Rates like 30 or 60 frames help keep those details visible with less blur.",
          "A softer film look can actually work against the goal if it hides key actions or makes text harder to read."
        ]
      },
      {
        heading: "Mood drives film looks",
        paragraphs: [
          "For story-based footage, mood often comes first. A 24 frames look with more motion blur can pull attention to emotion over mechanics.",
          "That same blur can feel distracting in a step-by-step guide where precision matters more than mood."
        ]
      },
      {
        quote: "Show what the viewer came to see, not what looks coolest."
      },
      {
        heading: "Finding middle ground",
        paragraphs: [
          "Some creators use 30 frames for mixed content that has both story and instruction. Others switch rates per scene if the edit allows for clean cuts.",
          "Test with a sample clip from your actual use case. What reads best for your audience should win over trend."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use 30 or 60 frames for tutorials to keep actions clear.",
          "Use 24 frames for story-driven film looks when mood comes first.",
          "Test your choice with real content before committing."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-shutter-speed-basics",
    title: "Frame Rate and Shutter Speed Basics for Clean Footage",
    excerpt: "Shutter speed basics matter as much as frame rate for clean footage, since the two control blur and light in ways that affect each shot.",
    date: "2035-06-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "The 180-degree rule",
        paragraphs: [
          "A common starting point is to set shutter speed to roughly double your frame rate. So for 24 frames, use 1/48 or 1/50; for 30 frames, 1/60; for 60 frames, 1/120.",
          "This gives a balance of motion blur that feels natural to most viewers without adding too much jitter or too much softness."
        ]
      },
      {
        heading: "When to break it",
        paragraphs: [
          "Low light can force a slower shutter, which adds blur. Very bright light can force a faster shutter, which cuts blur and can make pans feel sharp.",
          "For creative looks like stuttered action, a very fast shutter can work. For intentional blur, a slower one can help. Just know the tradeoffs."
        ]
      },
      {
        quote: "Double the rate is a starting point, not a law."
      },
      {
        heading: "Practical tips",
        paragraphs: [
          "Use ND filters in bright light to keep shutter near double rate without overexposing. In low light, add light or accept some blur instead of raising gain too high.",
          "Always check motion on a small pan test. Small changes show up faster than still shots."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start with shutter speed near twice your frame rate.",
          "Use ND filters to keep that ratio in bright light.",
          "Test pans to catch jitter or excess blur early."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-exporting-right-way",
    title: "Exporting at the Right Frame Rate for Each Platform",
    excerpt: "Exporting at the right frame rate can prevent re-encoding issues and playback stutter, but each platform has its own limits to keep in mind.",
    date: "2035-06-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Match to source when possible",
        paragraphs: [
          "Exporting at your edit timeline rate avoids extra frame interpolation. If your timeline is 30 frames, exporting at 30 frames keeps motion as intended.",
          "Interpolated frames can look soft or create odd artifacts, especially on quick pans or text."
        ]
      },
      {
        heading: "Platform notes",
        paragraphs: [
          "Many platforms accept 24, 30, and 60 frames. Some cap 60 frames for certain resolutions or older devices. Vertical 9:16 clips often play well at 30 or 60 frames.",
          "Higher frame rates use more data and may increase upload time. For mobile viewers, data use can matter more than a small bump in smoothness."
        ]
      },
      {
        quote: "Clean motion beats forced high rates for most viewers."
      },
      {
        heading: "Practical plan",
        paragraphs: [
          "Keep your master at the rate you shot and cut. For delivery, use platform guidance if available, but do not raise rate just to meet a trend.",
          "Test a short export on the target device if quality is a concern. A 10-second clip shows more than specs alone."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Export at your timeline rate to avoid interpolation artifacts.",
          "Check platform limits for frame rate and resolution.",
          "Test short exports on target devices before final upload."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-on-a-phone",
    title: "Frame Rate on a Phone: Limits and Smart Choices",
    excerpt: "Frame rate on a phone comes with real limits like crop, heat, and bitrate, so smart choices matter more than maxing out numbers for most shots.",
    date: "2035-06-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "Tradeoffs are built in",
        paragraphs: [
          "Phones often crop the sensor at high frame rates to reach faster read speeds. That means a wider lens becomes tighter, so framing changes without moving the phone.",
          "Bitrate can also drop at max frame rates, which affects fine detail more than the count alone."
        ]
      },
      {
        heading: "When high rates work",
        paragraphs: [
          "For short slow motion clips, shooting at 120 or 240 frames can work well if light is strong. The key is to keep clips short to avoid heat limits.",
          "For general video, 30 frames is often stable. For smoother motion, 60 frames can help if your app allows it without heavy crop."
        ]
      },
      {
        quote: "Max numbers rarely mean max quality on a phone."
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "Test your exact phone model for crop and heat before a shoot. What works for five seconds may fail at 30 seconds at high rates.",
          "Also consider storage and editing: high bitrate 60 or 120 frame clips take space and can slow older devices."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Expect crop and lower bitrate at very high phone frame rates.",
          "Keep high frame rate slow motion clips short to avoid heat issues.",
          "Default to 30 or 60 frames for longer phone footage."
        ]
      }
    ]
  },
  {
    slug: "frame-rate-common-mixups",
    title: "Frame Rate Common Mixups and Easy Ways to Fix Them",
    excerpt: "Common frame rate mixups can lead to stutter, wrong playback speed, or mismatched cuts, but a few checks can fix most issues fast enough now.",
    date: "2035-06-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "technical", "footage"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "Mixing rates in one project",
        paragraphs: [
          "One common mixup is dropping clips from different sources into one timeline without conforming. A 60 frame clip on a 24 frame timeline will play fast unless interpreted.",
          "Another is shooting slow motion but forgetting to set playback rate, so clips play at full speed."
        ]
      },
      {
        heading: "Shutter speed confusion",
        paragraphs: [
          "Keeping shutter at 1/60 for all rates is a frequent error. At 60 frames, 1/60 gives more blur than needed and can feel soft in pans.",
          "At 24 frames, 1/120 can cut blur too much and create jitter on motion."
        ]
      },
      {
        quote: "Check rate, then check shutter, then check playback."
      },
      {
        heading: "Quick fixes",
        paragraphs: [
          "In your editor, check clip properties for true frame rate. Use interpret footage to set playback rate for high frame rate clips.",
          "For shutter, use the double rate as a starting point and test a pan. Small tests save time."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Conform or interpret clips when mixing frame rates.",
          "Match shutter speed to frame rate for natural motion blur.",
          "Test playback speed for slow motion clips before cutting."
        ]
      }
    ]
  }
];
