import { Activity, Briefcase, Compass, Film, Layers, MessageSquare, Target, Type, Zap } from "lucide-react";
import type { BlogPost } from "../types";

export const batch91: BlogPost[] = [
  {
    slug: "editing-on-screen-text-that-people-read",
    title: "On-Screen Text in Editing That People Actually Read",
    excerpt:
      "On-screen text in editing works only when it respects reading speed, contrast, and timing. Here is how to make titles and captions clear and easy to scan.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "On-screen text fails when it asks the viewer to read faster than they can. Graphics in editing respect three limits: reading speed, contrast, and how long a line stays on screen.",
          "When those limits are right, a plain title beats an elaborate one almost every time. Style is the layer you add after the foundation already holds.",
        ],
      },
      {
        heading: "Match text length to screen time",
        paragraphs: [
          "Viewers read roughly 12 to 15 words in three seconds. A title longer than that either needs trimming or needs a longer hold before the cut.",
          "Job titles are the usual offender. Push the full role into the voiceover and keep the on-screen line short enough to land in one glance.",
        ],
      },
      {
        heading: "Contrast beats decoration",
        paragraphs: [
          "Drop shadows, gradients, and outlines all do the same job: they separate text from whatever sits behind it. Pick the simplest effect that keeps the words readable.",
          "Test your title against the busiest frame in the shot, not the calm one. Text that only works on a clean background will vanish the moment the scene gets busy.",
        ],
      },
      {
        heading: "Set a house style for text",
        bullets: [
          "Limit each project to two typefaces so titles feel related across the whole edit.",
          "Keep body text at a fixed size and weight so viewers stop noticing the change.",
          "Reserve one accent color for emphasis instead of tinting every line.",
          "Log exact font sizes and margins in a note so the next editor can match your work.",
        ],
      },
      { quote: "If a viewer has to pause to read your title, the title has already failed." },
      {
        heading: "Key takeaways",
        bullets: [
          "Respect reading speed before you worry about style.",
          "Test contrast against the busiest frame, not the calmest one.",
          "A short, steady text style beats a flashy one-off every time.",
          "Keep a written style sheet so your graphics stay consistent across a series.",
        ],
      },
    ],
  },
  {
    slug: "editing-lower-thirds-that-do-their-job",
    title: "Lower Thirds in Editing That Actually Do Their Job",
    excerpt:
      "Lower thirds in editing should name a person without blocking the shot. Learn sizing, placement, and timing rules that keep your subjects visible.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A lower third has one job: name the person on screen and then get out of the way. If the viewer notices the graphic more than the speaker, it is doing too much.",
          "The best lower thirds share a habit. They sit low, leave the face clear, and disappear before the viewer starts wondering why they are still there.",
        ],
      },
      {
        heading: "Place it below the face, not across it",
        paragraphs: [
          "The lower third rule of thumb still works: keep the graphic in the bottom third and away from the eyes and mouth. On a close-up, shift it even lower or shorten it.",
          "If your subject moves around the frame, place the third where it will not cross their hands or a lower line of text during the shot.",
        ],
      },
      {
        heading: "Hold long enough to read once",
        paragraphs: [
          "Five seconds is a comfortable default for a name and title. Two seconds is too short for most viewers to register, and ten seconds starts to feel stuck on screen.",
          "Animate in over a quarter second, hold steady, then animate out. The hold is the part that matters, so do not rush it to fit a cut.",
        ],
      },
      {
        heading: "What to put in the line",
        bullets: [
          "Name first, then role, separated by a small divider or an extra space.",
          "Drop the company name unless it explains why the person is credible here.",
          "Skip decorative icons that add width without adding meaning.",
          "Left-align the text so a longer name does not break the layout.",
        ],
      },
      { quote: "A lower third that lingers turns a name into a distraction." },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the graphic in the bottom third and clear of the face.",
          "Five seconds is usually the right hold for a name and role.",
          "Animate quickly and let the hold do the work.",
        ],
      },
    ],
  },
  {
    slug: "editing-title-cards-with-a-clear-purpose",
    title: "Designing Title Cards in Editing With a Clear Purpose",
    excerpt:
      "Title cards in editing set the tone before a single frame of content plays. Learn how to choose type, motion, and length so every card earns its place.",
    date: "2024-08-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A title card is a pause the editor chooses on purpose. It orients the viewer, sets a mood, or marks a chapter, and it should never feel like filler.",
          "The cards people remember are restrained. One idea per card, one type treatment, and enough hold time to read without strain.",
        ],
      },
      {
        heading: "Give each card one idea",
        paragraphs: [
          "If a card tries to say three things, the viewer remembers none of them. Split it into separate cards or move part of the message into the voiceover.",
          "Series titles work best when the only thing that changes between cards is the text. Keep the frame layout identical so the viewer settles into a rhythm.",
        ],
      },
      {
        heading: "Pick motion that matches the edit",
        paragraphs: [
          "A documentary card can fade in slowly. An action edit needs a card that cuts or slides with the beat. Borrow the motion language from the footage itself.",
          "Keep the entrance under a second for most content. A slow reveal feels deliberate only when the whole piece is slow.",
        ],
      },
      {
        heading: "Build a card you can reuse",
        bullets: [
          "Save the layout as a template so new episodes start from the same base.",
          "Keep text on its own layer for fast swaps without touching the background.",
          "Name your layers clearly so a teammate can update the card without guessing.",
          "Leave safe margins around the text for platform crops and captions.",
        ],
      },
      { quote: "A title card earns its time by telling the viewer something the footage cannot." },
      {
        heading: "Key takeaways",
        bullets: [
          "One idea per card keeps the message readable.",
          "Match the card motion to the pace of the footage.",
          "A reusable template saves hours across a series.",
        ],
      },
    ],
  },
  {
    slug: "editing-motion-graphics-for-beginners",
    title: "Motion Graphics for Editors Who Are Beginners",
    excerpt:
      "Motion graphics in editing do not require years of animation training. Start with simple moves, timing, and a few rules that keep your work clean.",
    date: "2024-11-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "You do not need to be an animator to add motion graphics to an edit. Most useful graphics are simple: a shape that moves, a number that counts, a line that draws on.",
          "Start with the smallest motion that communicates the point. Learning to hold back is the fastest way to make beginner work look composed.",
        ],
      },
      {
        heading: "Begin with position and opacity",
        paragraphs: [
          "Two properties cover most early work: where an element sits and how visible it is. Animating position and opacity with clean easing gets you surprisingly far.",
          "Add scale and rotation only when they serve the idea. A number that pops bigger as it counts up feels alive; one that spins for no reason feels noisy.",
        ],
      },
      {
        heading: "Timing sells the motion",
        paragraphs: [
          "Ease in and ease out so nothing starts or stops at full speed. Linear motion reads as mechanical, while eased motion reads as intentional.",
          "Align key moments with cut points or music beats. A graphic that lands on a beat feels built into the piece rather than dropped on top.",
        ],
      },
      {
        heading: "Keep the composition simple",
        bullets: [
          "Animate one element at a time so the eye knows where to look.",
          "Leave the background still while foreground graphics move.",
          "Limit a single graphic to a couple of moves before it exits.",
          "Preview at full speed, since slow scrubbing hides awkward pacing.",
        ],
      },
      { quote: "Good motion graphics feel obvious. If the viewer notices the animation itself, it is competing with the message." },
      {
        heading: "Key takeaways",
        bullets: [
          "Position and opacity carry most beginner graphics.",
          "Ease every move and land it on a beat or a cut.",
          "Watch at full speed to judge whether the motion works.",
        ],
      },
    ],
  },
  {
    slug: "editing-caption-styling-that-reads-well",
    title: "Caption Styling in Editing That Always Reads Well",
    excerpt:
      "Caption styling in editing decides whether viewers follow along or give up. Learn font, size, and background choices that keep subtitles readable.",
    date: "2025-03-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Captions are read, not watched, so styling has to favor clarity over flair. A readable caption disappears into the experience, which is exactly the point.",
          "Most caption problems come down to size, line length, and the background behind the words. Fix those and your captions work on almost any screen.",
        ],
      },
      {
        heading: "Size and line length first",
        paragraphs: [
          "Set the caption so it is comfortable to read on a phone. If the text looks small on a laptop, it will be unreadable on a phone in a bright room.",
          "Keep each line to around 32 to 42 characters and break at natural pauses. Two short lines beat one long line that wraps on its own.",
        ],
      },
      {
        heading: "Handle the background",
        paragraphs: [
          "A thin outline or a soft shadow keeps white text visible over a bright frame. Avoid a heavy box behind the words unless the footage is genuinely busy.",
          "Semi-transparent backgrounds work when you need guaranteed contrast. Keep the fill dark and the corners tight so the box does not dominate the frame.",
        ],
      },
      {
        heading: "Style choices worth keeping",
        bullets: [
          "Use a clean sans-serif weight that stays sharp after compression.",
          "Keep the caption color consistent across the whole project.",
          "Reserve bold or color for emphasis on a single word, not full lines.",
          "Match the caption font to your titles so the graphics feel related.",
        ],
      },
      { quote: "If a viewer has to squint, the caption has stopped working." },
      {
        heading: "Key takeaways",
        bullets: [
          "Size for the phone, not the editing monitor.",
          "Break lines at natural pauses to keep them short.",
          "Use outline or shadow instead of a heavy background box.",
        ],
      },
    ],
  },
  {
    slug: "editing-kinetic-typography-basics",
    title: "Kinetic Typography Basics for Modern Video Editors",
    excerpt:
      "Kinetic typography in editing turns words into motion that carries meaning. Learn pacing, emphasis, and restraint so animated text stays readable.",
    date: "2025-06-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Kinetic typography animates words so timing and movement carry part of the message. It works when the motion supports the meaning, and it fails when the motion becomes the show.",
          "The core skills are pacing and emphasis. Both are about deciding which word matters and giving it just enough motion to register.",
        ],
      },
      {
        heading: "Animate with the spoken rhythm",
        paragraphs: [
          "Line up word reveals with the voice track. When the word appears right as it is spoken, the viewer links the sound and the text without effort.",
          "For music-driven pieces, sync reveals to the beat instead. Either way, the viewer should feel the text arrive on purpose, not at random.",
        ],
      },
      {
        heading: "Emphasize one word at a time",
        paragraphs: [
          "Scale, color, or a small shift can mark the keyword in a phrase. Pick a single technique and apply it only to the words that carry weight.",
          "If every word moves, none of them stands out. The contrast between still text and moving text is what creates emphasis.",
        ],
      },
      {
        heading: "Keep it readable",
        bullets: [
          "Hold each phrase long enough to read before the next movement starts.",
          "Avoid stacking several animation styles inside a single line.",
          "Keep the layout centered or consistently anchored so the eye can settle.",
          "Watch the full sequence once at speed before you call it done.",
        ],
      },
      { quote: "Motion should point to the important word, not hide it." },
      {
        heading: "Key takeaways",
        bullets: [
          "Sync text reveals to speech or to the beat.",
          "Emphasize one word at a time to keep contrast.",
          "Hold each phrase long enough to read at full speed.",
        ],
      },
    ],
  },
  {
    slug: "editing-subtitle-placement-and-safe-areas",
    title: "Subtitle Placement and Safe Areas in Video Editing",
    excerpt:
      "Subtitle placement in editing has to survive platform crops and player controls. Learn safe-area rules that keep captions visible on every screen.",
    date: "2025-09-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Subtitle placement is a design decision with technical limits. Put the text too low and a player bar hides it; put it too high and it collides with faces.",
          "Safe areas exist for this reason. Respect them and your captions stay readable whether the clip plays in a feed, a square crop, or on a TV.",
        ],
      },
      {
        heading: "Understand the safe area",
        paragraphs: [
          "Keep critical text inside roughly the central 80 percent of the frame. The outer band gets trimmed on some platforms or covered by interface elements.",
          "Vertical video needs extra care at the top and bottom, since app buttons and captions often live there. Nudge the subtitle line up and confirm it still clears the face.",
        ],
      },
      {
        heading: "Plan for multiple aspect ratios",
        paragraphs: [
          "If the same clip runs as a landscape and a vertical, design the subtitle position for the tighter crop. What survives the square will usually survive the rest.",
          "Build the project so the subtitle layer can move as a group. One adjustment then fixes every version instead of repeating the work.",
        ],
      },
      {
        heading: "Placement checklist",
        bullets: [
          "Keep subtitles inside the central safe area of every exported ratio.",
          "Leave a margin above the bottom edge for player controls.",
          "Check that the line clears the chin and does not cross the eyes.",
          "Confirm the position on a phone before you approve the export.",
        ],
      },
      { quote: "Design for the smallest screen and the subtitles will hold up on the largest." },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep subtitles inside the central 80 percent of the frame.",
          "Leave room for player controls at the bottom.",
          "Position the text for the tightest crop you expect.",
        ],
      },
    ],
  },
  {
    slug: "editing-graphics-brand-kit",
    title: "Building a Reusable Graphics Brand Kit for Editors",
    excerpt:
      "A graphics brand kit in editing keeps every title, lower third, and caption on brand. Learn what to lock down so a team stays consistent at speed.",
    date: "2026-01-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Briefcase,
    content: [
      {
        paragraphs: [
          "A graphics brand kit is the set of fonts, colors, and templates an editing team reuses. It exists so a new project looks like the last one without rebuilding every title.",
          "The kit does not need to be large. A handful of locked decisions prevents the drift that makes a channel look inconsistent over time.",
        ],
      },
      {
        heading: "Lock the basics",
        paragraphs: [
          "Decide on one or two typefaces, a fixed set of colors, and a couple of text sizes. Write them down so the choice stops being a debate on every project.",
          "Include the exact hex codes and font weights. A color that looks close enough is often the start of a slow slide away from the brand.",
        ],
      },
      {
        heading: "Build templates, not one-offs",
        paragraphs: [
          "Turn each repeated graphic into a template: lower third, title card, caption style, end slate. Editors then drop in text instead of rebuilding layouts.",
          "Keep each template in a shared project so updates reach everyone. When the brand changes, you edit once and every future project follows.",
        ],
      },
      {
        heading: "What belongs in the kit",
        bullets: [
          "Two typefaces with approved sizes and weights.",
          "A small color palette with hex codes and use notes.",
          "Templates for lower thirds, titles, captions, and the end card.",
          "A short usage note explaining when each graphic is appropriate.",
        ],
      },
      { quote: "Consistency is not a creative limit. It is the reason the audience recognizes you at a glance." },
      {
        heading: "Key takeaways",
        bullets: [
          "Lock a few fonts, colors, and sizes and write them down.",
          "Turn repeated graphics into reusable templates.",
          "Keep templates in one shared project so updates spread.",
        ],
      },
    ],
  },
  {
    slug: "editing-callout-graphics-that-point",
    title: "Callout Graphics in Editing That Point the Right Way",
    excerpt:
      "Callout graphics in editing guide the eye to a detail the viewer might miss. Learn arrow, box, and label habits that direct attention without clutter.",
    date: "2026-05-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A callout graphic points at something specific so the viewer sees it fast. Arrows, boxes, and labels are the tools, and the goal is to remove doubt about where to look.",
          "Callouts go wrong when there are too many at once. Each one competes for attention, and the frame turns into a diagram instead of a video.",
        ],
      },
      {
        heading: "Point with one clear mark",
        paragraphs: [
          "A single arrow or box around the detail usually beats a busy set of annotations. Place the mark so it touches the subject but does not cover it.",
          "If the detail is small, zoom or enlarge it before you annotate. A callout on an unreadable element just points at a blur.",
        ],
      },
      {
        heading: "Label only when it adds meaning",
        paragraphs: [
          "A label should name something the viewer cannot get from the image alone. If the picture already says it, the label is noise.",
          "Keep label text short and place it near the mark rather than across the frame. The eye should travel a short, obvious path.",
        ],
      },
      {
        heading: "Callout habits that help",
        bullets: [
          "Use one arrow style and one box color so callouts feel consistent.",
          "Animate the mark on and off quickly so it does not linger.",
          "Keep the callout away from captions and other on-screen text.",
          "Match the callout color to a color already in the shot when possible.",
        ],
      },
      { quote: "A callout succeeds when the viewer looks where you want without noticing the arrow." },
      {
        heading: "Key takeaways",
        bullets: [
          "Point at one detail at a time and keep the frame clear.",
          "Label only what the image cannot explain on its own.",
          "Keep the mark consistent so it reads as part of the edit.",
        ],
      },
    ],
  },
  {
    slug: "editing-text-animation-timing",
    title: "Text Animation Timing That Feels Right in Editing",
    excerpt:
      "Text animation timing in editing decides whether titles feel snappy or sluggish. Learn entrance, hold, and exit rules that keep graphics under control.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Text animation timing is the difference between a title that feels crisp and one that drags. The entrance and the exit are short; the hold is where the viewer actually reads.",
          "Once you treat hold time as the important part, the decoration gets easier. Most slow-feeling graphics are simply moving too long around too little text.",
        ],
      },
      {
        heading: "Keep entrances quick",
        paragraphs: [
          "Most on-screen text should arrive in a quarter to half second. Longer entrances feel dramatic, which only works when the whole piece moves at that pace.",
          "Ease the motion so it decelerates into place. A hard stop reads as a glitch, while a short settle reads as control.",
        ],
      },
      {
        heading: "Let the hold carry the read",
        paragraphs: [
          "Work out how long the text needs to be read, then set the hold to that time. The animation frames come out of the entrance and exit, not the reading window.",
          "If the edit forces a short hold, cut words instead of speeding up the reader. Fewer words read fast is better than a full sentence that never lands.",
        ],
      },
      {
        heading: "Timing rules to reuse",
        bullets: [
          "Entrance around a quarter second for snappy cuts.",
          "Hold time equal to the time needed to read the line once.",
          "Exit as short as, or shorter than, the entrance.",
          "Offset moving elements by a small amount so they do not all land at once.",
        ],
      },
      { quote: "If a title feels slow, the problem is usually the hold, not the animation." },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep entrances under half a second for most content.",
          "Set the hold from reading time, not from animation length.",
          "Trim words before you rush the viewer.",
        ],
      },
    ],
  },
];
