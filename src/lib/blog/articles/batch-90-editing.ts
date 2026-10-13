import { Flame, Heart, Layers, BarChart3, Repeat, Eye, Puzzle, Waves, Users, Film } from "lucide-react";
import type { BlogPost } from "../types";

export const batch90: BlogPost[] = [
  {
    slug: "editing-color-grading-basics",
    title: "Color Grading Basics for Editors Who Hate Color",
    excerpt:
      "Color grading scares new editors, but the core idea is small. Fix exposure and white balance, then shape the mood, and stop long before the image looks plastic.",
    date: "2024-02-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Color grading is a two step job. First you fix what the camera got wrong, then you decide what feeling the shot should carry. Skip the first step and every creative choice sits on a broken foundation.",
          "Most beginners flip that order. They chase a moody look before the exposure is sane, and the footage ends up fighting itself. The grade looks wrong, and they blame the preset instead of the order they worked in.",
          "The order matters more than any single slider. Do the repair work well and the creative part becomes almost easy, because you are polishing a solid image instead of rescuing a broken one.",
        ],
      },
      {
        heading: "Repair comes before style",
        paragraphs: [
          "Color correction is repair work, and it should feel boring on purpose. You set the black point, lift the white point, neutralize any sickly cast, and make sure skin sits somewhere believable. Once the image is neutral, you finally have a clean canvas.",
          "Grading starts after that repair. Now you push warmth into a sunset, crush the shadows in a thriller, or wash a memory scene in pale green. The difference is intent, because every choice now serves the story instead of patching a problem.",
          "I keep correction and grade as separate layers even in a small project. When the mood changes, I swap the creative pass and keep the correction untouched underneath.",
        ],
      },
      {
        heading: "Read the scopes, not your tired eyes",
        paragraphs: [
          "Your eyes adapt within seconds. A screen that looked neutral five minutes ago will look warm because you have been staring at a blue image. Scopes never adapt, which is exactly why pros lean on them over their own judgment.",
        ],
        bullets: [
          "The waveform shows where your blacks and whites actually sit, clipping included.",
          "The vectorscope reveals whether skin has drifted toward green or magenta.",
          "The RGB parade splits the channels so you can spot a cast that lives in only one of them.",
          "A false color view paints anything overexposed in loud stripes before you commit.",
        ],
      },
      {
        quote:
          "A grade that draws attention to itself has usually failed. The viewer should feel the scene, not the slider.",
      },
      {
        heading: "An order that keeps you out of trouble",
        paragraphs: [
          "I work in passes and rarely touch everything at once. Correct exposure across the whole timeline first, because a consistent base makes the look read the same from shot to shot. Balance the shots to each other second. Add the creative look last, on top of a clean base.",
          "When a look falls apart, you can back out the creative layer without losing the correction underneath. That separation saves hours when a client asks for something warmer two days later, and it keeps you honest because the real footage never disappears.",
          "A version history helps too. Save the corrected stage as its own version before you start the look, and you always have a clean point to return to when a wild idea goes wrong.",
        ],
      },
      {
        heading: "The mistakes that look obvious later",
        paragraphs: [
          "The most common error is pushing a look until it clips. Highlights lose detail, skin turns orange, and the image stops looking like the scene you actually shot. A restrained grade ages far better than a loud one.",
          "The other error is grading a whole project in one sitting. I grade a scene, step away for ten minutes, and come back with fresh eyes before I commit. Color is easy to overdo when you have been staring at it too long.",
          "A good night of sleep changes what you see. If a grade still looks right the next morning, it is probably close to done.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct first so the base is neutral, then grade for mood and story.",
          "Trust the waveform, the vectorscope, and the RGB parade over your adapting eyes.",
          "Keep correction and creative look on separate layers so you can undo one without the other.",
          "Stop when the image supports the story, because a loud grade pulls focus from the content.",
        ],
      },
    ],
  },
  {
    slug: "editing-color-psychology-mood",
    title: "Color Psychology in the Edit: Setting Mood Before Words",
    excerpt:
      "Color psychology gives you a quiet tool. Before a single line of dialogue lands, hue and warmth already tell the viewer how to feel about the scene.",
    date: "2024-04-18",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Color psychology is the study of what hues make people feel. In editing you use it to set emotional context without a single line of dialogue.",
          "Blue cools a scene and reads as distance or sadness. Warm amber reads as safety, memory, or late afternoon. Those associations shift with culture, so nothing is truly universal.",
          "The practical point is simple. Decide what the audience should feel, then pick a temperature that nudges them there before the story does any heavy lifting. Think of color as a stage set. It puts the audience in a mood before the actor says a word, and that head start is worth a lot.",
        ],
      },
      {
        heading: "Warm and cool carry most of the weight",
        paragraphs: [
          "If you remember one rule, remember this one. Warm colors advance toward the viewer and cool colors recede. Skin sits in the warm zone, which is why a blue cast on a face feels wrong within a second.",
          "Directors lean on that pull constantly. A safe house is graded warm and low contrast. The moment the character steps toward danger, the grade slides cool and the contrast climbs. The audience feels the shift without ever naming it.",
          "You can test the effect yourself. Freeze a frame, warm it, then cool it, and watch how fast your read of the scene changes. The image barely moves and your interpretation swings anyway.",
        ],
      },
      {
        heading: "Saturation is the volume knob",
        paragraphs: [
          "Saturation controls how loud color feels. A muted grade feels grounded and serious. A punchy grade feels playful or heightened, closer to a comic book than a documentary.",
          "Pull saturation down for grief and quiet. Push it for comedy and anything aimed at kids. The same shot at two saturation levels tells two entirely different stories.",
          "The trap is treating saturation as a fix for a flat image. It never is. If a shot looks dull because the lighting was weak, color cannot rescue it, no matter how far you push the dial. The same goes for contrast, since a heavy grade on flat footage just makes flat footage look strange.",
        ],
      },
      {
        quote:
          "Color is the fastest way to say what the script takes a page to explain.",
      },
      {
        heading: "Associations worth testing",
        paragraphs: [
          "No hue means one fixed thing, but a few patterns show up often enough to plan a scene around.",
        ],
        bullets: [
          "Green skews toward illness or envy, which is why it haunts institutional settings.",
          "Yellow grabs attention fast and turns anxious when it leans acid.",
          "Red reads as passion and urgency, and it pulls the eye harder than any other hue.",
          "Desaturated blue grey has become shorthand for cold thrillers, so it now feels familiar rather than fresh.",
        ],
      },
      {
        heading: "Where culture changes the read",
        paragraphs: [
          "White means mourning in parts of East Asia and celebration in much of the West. The same split shows up with other hues, so a grade meant to travel needs a sanity check before it ships.",
          "If your audience is global, lean on brightness and contrast to carry meaning and treat color as support. The scene still reads when the associations differ from viewer to viewer.",
          "Localizing a grade is rarely as simple as swapping one hue. A single color can carry opposite meanings in two markets, so check before you commit to a shortcut.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a dominant temperature first and let supporting colors agree with it.",
          "Use saturation to set emotional volume, quiet for grief and loud for comedy.",
          "Watch skin tone above all, since a cold face reads as unnatural to almost everyone.",
          "Test your palette against the story beat, because a hue that helped one scene can fight the next.",
        ],
      },
    ],
  },
  {
    slug: "editing-lut-workflow",
    title: "How LUTs Fit Into a Real Color Editing Workflow",
    excerpt:
      "A LUT is a shortcut, not a finished look. Used well it gets a flat log file into a sane place so your own grade has plenty of room to breathe.",
    date: "2024-06-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A LUT is a lookup table, a saved math recipe that remaps one set of colors to another. It is a starting point, not a finished look, and treating it as the finished look is where most projects go wrong.",
          "Most editors use two kinds. A technical LUT converts flat log footage into a normal image. A creative LUT imitates a film stock or a specific mood.",
          "They solve different problems, so mixing them up creates confusion. One restores reality, the other interprets it. The names in the file often give it away, since LUTs labelled with a camera model and log profile are technical, while ones named after a film or a mood are creative.",
        ],
      },
      {
        heading: "Technical LUTs do the boring part",
        paragraphs: [
          "Camera log profiles record a wide range of brightness so you keep detail in highlights and shadows. That footage looks washed out and grey straight off the card, which is completely normal.",
          "A technical LUT maps that flat signal back into a space your monitor can show honestly. Get this step right and everything after it becomes easier to judge.",
          "If you use the wrong conversion, skin and sky land in the wrong place and no creative grade can fix it. Match the LUT to the exact log profile your camera recorded. Different cameras need different conversions, so the same file rarely works across a mixed shoot.",
        ],
      },
      {
        heading: "Creative LUTs are a first impression",
        paragraphs: [
          "Creative LUTs promise a one click cinematic look, and that promise is mostly marketing. Dropped straight onto log footage, they often break skin and blow out the sky.",
          "They work far better on top of a corrected image. Treat the creative LUT as a draft opinion about the mood, then bend it toward your own footage.",
          "A good habit is to preview three or four and pick the one that gets you closest. Then you edit the result rather than hunting for a perfect single click that does not exist.",
        ],
      },
      {
        heading: "When a LUT helps and when it hurts",
        paragraphs: [
          "The decision comes down to consistency and time. If a scene is uniform and the deadline is tight, a LUT saves real hours. If the light keeps changing or the shots come from several cameras, build the correction by hand instead.",
        ],
        bullets: [
          "Use one when a project needs speed and the shots share the same camera and exposure.",
          "Skip it when the sun changed mid scene, because a fixed recipe cannot account for that.",
          "Dial its strength back with an opacity slider so the base correction still shows through.",
          "Rebuild the parts that break, since a LUT is editable math rather than a locked filter.",
        ],
      },
      {
        quote:
          "A LUT is an opinion about color. Your job is to decide whether that opinion fits the footage in front of you.",
      },
      {
        heading: "Building your own LUTs",
        paragraphs: [
          "Once you grade a look you love, export it as a LUT and reuse it on future projects. This turns your taste into a tool you can apply in seconds.",
          "Custom LUTs still need a corrected base to work, so think of them as a saved costume rather than a new body. The foundation stays your own, and the LUT just adds the outfit.",
          "Keep a small library of your own looks and name them clearly. In a year you will not remember what dark cinematic v3 was, and a clear name saves you from guessing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Technical LUTs normalize log footage while creative LUTs suggest a mood.",
          "Apply creative looks after correction so they have a clean image to work from.",
          "Reduce intensity when a LUT overshoots rather than accepting it whole.",
          "Match your log profile to the right conversion or the colors land in the wrong place.",
        ],
      },
    ],
  },
  {
    slug: "editing-contrast-saturation-balance",
    title: "Balancing Contrast and Saturation Without Crushing the Image",
    excerpt:
      "Contrast and saturation move together, so pushing one usually forces a choice about the other. Learn how they trade off and your grades stop looking muddy.",
    date: "2024-09-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Contrast controls the gap between dark and bright, while saturation controls how vivid the colors are. Push one too far and the other usually needs to give.",
          "New editors often max both. The result looks harsh and muddy at the same time, with blown highlights and colors that scream for no reason.",
          "The fix is not a magic number. It is understanding that these two sliders talk to each other, so every move on one changes what the other can do. A grade is a balance, not a checklist, and the strongest image usually comes from restraint on both dials.",
        ],
      },
      {
        heading: "Contrast is a shape, not a slider",
        paragraphs: [
          "Real contrast is about where you place the midpoint. Move it and you decide which tones read as shadow and which read as light.",
          "Crushing the blacks adds punch, but do it everywhere and detail vanishes in the dark. Lifting the shadows softens the image, yet go too far and everything turns grey and flat.",
          "I look at the histogram before I decide. If the data already hugs both ends, adding contrast just clips the edges and destroys information the camera captured. Once that detail is gone, no slider brings it back, which is why I protect the ends and shape the middle.",
        ],
      },
      {
        heading: "Saturation punishes bad exposure",
        paragraphs: [
          "Color lives in the midtones. Overexpose a face and the skin loses the subtle hue that made it human. Underexpose and the whole frame goes muddy brown.",
          "This is why I fix exposure before I touch the saturation dial. A vivid grade on a badly exposed shot just magnifies the mistake.",
          "When a shot looks lifeless, check the waveform first. The problem is usually light, and more color will only bury it. Fix the exposure and the color comes back on its own, and skin snaps to believable once the midtones are placed well.",
        ],
      },
      {
        heading: "Trade offs to watch",
        paragraphs: [
          "Every choice on these two dials pulls against the other, so I weigh the trade offs while I grade instead of discovering them at the end. A change that helps one scene can quietly hurt the next one.",
          "That does not mean avoiding the sliders. It means moving them with a reason, then checking the result in context rather than on a single frozen frame.",
        ],
        bullets: [
          "More contrast lets you get away with slightly more saturation, since deep shadows hide color noise.",
          "Lower contrast needs calmer color, or the frame starts to feel like a cartoon.",
          "Skin sets the ceiling, so check the face before you judge the whole grade.",
          "Neutral objects like concrete and clouds expose an oversaturated sky faster than anything else.",
        ],
      },
      {
        quote:
          "Great grades feel effortless because the editor solved the contrast and saturation problem before the viewer ever noticed it existed.",
      },
      {
        heading: "A workflow that keeps both in check",
        paragraphs: [
          "Set exposure first, then contrast, then saturation, in that order. Each step builds on the one before, so a change late in the chain has less chance of breaking everything.",
          "Flip between the graded and ungraded image often. The original reminds you what the scene looked like, and that comparison catches the moment you pushed past what the footage could support.",
          "Before you finalize, watch the scene on a phone and on a laptop. Small screens crush contrast and hide shadow detail, and a grade that only works on a calibrated monitor is a grade that fails for most of your audience.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lock exposure first, because saturation just amplifies whatever is already there.",
          "Adjust the contrast midpoint to shape the mood instead of only yanking the slider.",
          "Let skin tone set your upper limit for color intensity.",
          "Recheck neutral objects, which reveal overcooked color quickly.",
        ],
      },
    ],
  },
  {
    slug: "editing-color-consistency-across-shots",
    title: "Keeping Color Consistent Across Every Shot in a Scene",
    excerpt:
      "Color consistency is what separates a professional scene from a pile of clips. Match the shots to one reference and the cut stops jolting the viewer.",
    date: "2024-11-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Color consistency means every shot in a scene feels like it came from the same moment. When one clip drifts green and the next runs warm, the cut feels broken even if nobody knows why.",
          "The fix is to pick one reference shot and match the others to it, not to some abstract notion of correct color.",
          "This is unglamorous work, and audiences never praise it. They only notice when it is missing, which is exactly why it matters. I think of it the way a musician thinks of tuning. Nobody claps for it, and an out of tune instrument ruins everything else.",
        ],
      },
      {
        heading: "Why cameras drift",
        paragraphs: [
          "Auto white balance shifts between takes. Clouds pass over the sun. A light on set changes temperature as it warms up. None of this looks wrong on its own.",
          "Play the shots back to back and the drift becomes obvious. The eye catches the jump instantly, and the audience reads it as a mistake rather than a style choice.",
          "This is why consistency is judged in context. A single shot on its own can look perfect and still be the one that ruins a scene when it sits next to its neighbors. So I rarely judge a shot alone, and watch it in the timeline between the shots it will actually touch.",
        ],
      },
      {
        heading: "Matching by the numbers",
        paragraphs: [
          "I start with the scopes. Set the black point of each shot to the same level, match the white point, then match the midtone brightness. Now the shots share a foundation.",
          "Only after that do I look at hue. Skin is the anchor, so I nudge the color balance until faces read the same warmth from cut to cut.",
          "Numbers first keeps me objective. When I match by eye alone, I chase the monitor and my own tired perception instead of the actual signal. At the end of a long day the two disagree often, and the scope wins.",
        ],
      },
      {
        quote:
          "If a viewer notices your color, you either nailed the mood or broke the scene. Consistency is how you aim for the first one.",
      },
      {
        heading: "Signs a scene is drifting",
        paragraphs: [
          "These signals are easy to spot once you know them, and each one points to a slightly different fix. Spotting the type of drift saves you from grading randomly.",
          "I keep the list in mind while scrubbing the timeline, because the problem is always easier to name than to notice in the moment.",
        ],
        bullets: [
          "Skin changes from pink to orange when you cut between two people talking.",
          "Shadows in one shot carry a blue tint while the next shot leans brown.",
          "Brightness jumps even though the location never changed.",
          "The same object shifts hue as the camera moves around it.",
        ],
      },
      {
        heading: "Speed tricks that still respect the work",
        paragraphs: [
          "When a scene has dozens of similar shots, I grade one fully and match the rest to it with a comparison view. Two shots side by side on one screen makes the difference impossible to miss.",
          "Copying a grade to a group of shots is fine as long as you revisit each one. The copy gives you a starting point, and the tweaks handle the differences in exposure and angle that always exist.",
          "Good tracking software also helps when a shot moves, since a correction that follows the subject survives a camera push better than a static one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one hero shot per scene and match everything to it.",
          "Match black point, white point, and midtones before you touch hue.",
          "Use skin as the constant that holds a scene together.",
          "Copy your grade to similar shots, then tweak, instead of grading each clip from zero.",
        ],
      },
    ],
  },
  {
    slug: "editing-thumbnail-color-contrast",
    title: "Thumbnail Color Contrast That Survives the Crowded Feed",
    excerpt:
      "Thumbnail color has to win in a space the size of a stamp. Lean on contrast, a clean background, and one focal hue that no neighbor is using.",
    date: "2025-02-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Thumbnail color has one job, which is to pull a click from a busy feed. That means contrast against the background and a focal hue that does not blend into everything around it.",
          "Most channels ignore this and upload an image that looks fine full size but vanishes the moment it drops to a fraction of that width.",
          "The feed is the only place that matters. If the thumbnail fails at small size beside its competitors, the beautiful version on your desktop never gets seen. Treat the large version as a preview and the tiny version as the real test.",
        ],
      },
      {
        heading: "Contrast beats brightness",
        paragraphs: [
          "A bright thumbnail is not the same as a readable one. What matters is the difference between the subject and what sits behind it.",
          "A dark background behind a lit face pops harder than a bright background behind a lit face, because the edge is clearer at small size. Contrast creates that edge.",
          "I test this by shrinking the thumbnail to a tiny square and stepping back. The image either separates from its surroundings or it melts into the page. When it works, the viewer looks at the face and then the title, in that order, without being told.",
        ],
      },
      {
        heading: "Pick one dominant hue",
        paragraphs: [
          "The eye cannot settle on four competing colors. Choose one hue to carry the thumbnail and let the rest stay quiet.",
          "Red and orange tend to cut through a feed full of blue and grey. Notice what your competitors use, then go somewhere else on purpose.",
          "Consistency across your channel also helps. If regular viewers learn your palette, they recognize new uploads without reading a single word. That recognition is quiet branding.",
        ],
      },
      {
        heading: "Checks before you upload",
        paragraphs: [
          "The checks take two minutes, and they catch the mistakes that cost you the most clicks. Run them every single time, even when you are in a hurry.",
          "Small screens are unforgiving, and a thumbnail that looks great on a large monitor can still fail on a phone. Do not trust the big view you are designing in.",
          "The list below catches the failures that actually lose the click, so it is worth memorizing until it becomes automatic.",
        ],
        bullets: [
          "Squint at the thumbnail from across the room and see what still reads.",
          "Shrink it to phone size and confirm the face and the main object survive.",
          "Check the text against the image, because thin letters on busy color turn to soup.",
          "Compare it beside three competitor thumbnails rather than on its own.",
        ],
      },
      {
        quote:
          "A thumbnail is a color decision long before it is a design decision.",
      },
      {
        heading: "Text color is the last trap",
        paragraphs: [
          "The words on a thumbnail fail more often than anything else. White text on a bright sky disappears, and yellow text on a warm face turns to mush.",
          "Add a subtle shadow, a stroke, or a shape behind the words. The viewer reads the title in one glance instead of squinting for a second, and that second is the difference between a click and a scroll.",
          "Keep the font heavy and the words few. Four large words beat ten small ones every time, because the viewer is not really reading, they are scanning.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Four rules cover most of what a thumbnail needs to win in a crowded feed. They are quick to apply and easy to forget under a deadline.",
        ],
        bullets: [
          "Design for the smallest size the thumbnail will ever appear.",
          "Use contrast between subject and background, not raw brightness.",
          "Limit the palette to one loud hue and let the rest support it.",
          "Test against real neighbor thumbnails, since a feed is the only context that counts.",
        ],
      },
    ],
  },
  {
    slug: "editing-node-based-color-tools",
    title: "Node Based Color Tools and When They Actually Pay Off",
    excerpt:
      "Node based color tools scare editors who learned on sliders. The idea is simple: stack small steps, see each one, and change one without redoing the rest.",
    date: "2025-05-21",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A node is one small color step with a name. Node based tools let you stack those steps and view any of them in isolation, which makes complex grades easier to fix.",
          "Slider interfaces hide their order of operations inside one panel. Nodes put that order in front of you as connected boxes.",
          "The benefit is not visual flair. It is being able to point at a single decision and change it without unraveling everything you did after. For a single quick clip, plain sliders may honestly be faster, and that is fine.",
        ],
      },
      {
        heading: "Serial nodes are a recipe",
        paragraphs: [
          "Serial nodes run one after another, like following a recipe. Correct exposure in the first, balance color in the second, add the look in the third.",
          "Because each step lives alone, you can turn one off to see its effect. That is the whole point, and it beats guessing which slider caused the problem.",
          "When a grade looks wrong, I walk the chain from the start. The broken node shows itself quickly, and I fix it without disturbing the rest of the work. Reading the chain is also how I learn, because seeing my own steps in order shows me where a bad habit keeps creeping in.",
        ],
      },
      {
        heading: "Parallel nodes blend ideas",
        paragraphs: [
          "Parallel nodes feed two versions of the image into one output. That lets you key a sky in one branch while leaving the subject untouched in the other.",
          "Use them when two adjustments would fight if stacked in a line. A separate branch keeps each decision clean.",
          "The classic case is a bright sky with a dark subject. One branch tames the sky, the other lifts the subject, and the blend respects both zones. The same idea handles a product against a bright wall, or a face lit from one side while the other falls into shadow.",
        ],
      },
      {
        heading: "Where nodes earn their keep",
        paragraphs: [
          "Nodes shine brightest on work that gets revisited, and they fade into the background on one off jobs that ship the same day.",
          "The pattern is simple. The more a project gets reopened, the more the structure pays for the small extra setup.",
          "On a channel that uploads weekly, that extra setup is almost always worth it, because nothing ships clean on the first pass.",
        ],
        bullets: [
          "Long form projects where you need to find a specific step fast.",
          "Shots that need a mask on one area without disturbing the rest.",
          "Collaboration, since a named node tells the next editor what you did.",
          "Revisions, because you can disable one node instead of rebuilding the grade.",
        ],
      },
      {
        quote:
          "Nodes do not make you a better colorist. They just make your reasoning visible, which is most of the battle.",
      },
      {
        heading: "Getting started without fear",
        paragraphs: [
          "You do not need to learn every node type on day one. Start with two or three and build a grade you already understand, then add complexity only when a shot demands it.",
          "The mental shift is small once it clicks. Think of the grade as a sentence, where each node is a word, and you are editing the words rather than rewriting the whole page.",
          "Start simple and grow. The editors who struggle are usually the ones who build ten nodes before they understand the first three. Patience beats a crowded node tree every time.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "A few habits keep a node tree readable and quick to revise, even months after you first built it.",
        ],
        bullets: [
          "Think of each node as one decision, not one slider.",
          "Keep correction and creative looks in separate nodes.",
          "Use parallel nodes when two changes would otherwise conflict.",
          "Name your nodes so the grade explains itself later.",
        ],
      },
    ],
  },
  {
    slug: "editing-visual-rhythm-cuts",
    title: "Visual Rhythm: How Cuts and Color Set the Whole Pace",
    excerpt:
      "Visual rhythm comes from how shots and color change over time. Fast cuts raise the pulse, slow holds calm it, and a hue shift can mark a turn in the story.",
    date: "2025-08-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Visual rhythm is the pace a viewer feels, built from how long each shot stays and how the color changes between them. It is the heartbeat under the story.",
          "Two edits can use identical clips and feel completely different based on where the cuts land and how the grade shifts.",
          "Because it is felt rather than read, rhythm is easy to ignore while editing. It shapes the experience anyway, whether or not you planned it. That is the danger, because an unplanned rhythm still lands, and it usually lands as boredom.",
        ],
      },
      {
        heading: "Cut length is a tempo",
        paragraphs: [
          "Short shots push the pulse up. Long holds slow it down and give the viewer room to breathe. Neither is better, and a scene that never varies either one turns numbing.",
          "Match cut length to the emotion. A chase wants fragments. A quiet confession wants the camera to stay put and let the silence do work.",
          "Watch for accidental uniformity. If every shot runs roughly the same length, the scene flattens into a metronome no matter how good the footage is. Break the pattern on purpose, because one long hold after a run of quick cuts hits harder than any single cut could.",
        ],
      },
      {
        heading: "Color shifts mark chapters",
        paragraphs: [
          "A hue change can signal a new act without a title card. Shift from warm to cool and the audience feels they have crossed into different territory.",
          "Save the biggest shifts for the biggest turns. If the color jumps every few seconds, none of the jumps mean anything.",
          "This is why I map the emotional beats of a script before I grade. Knowing where the story turns tells me where the color should turn with it. A simple timeline note does the job, and I decide whether the color should shift there or stay steady.",
        ],
      },
      {
        quote:
          "Rhythm is not speed. It is the pattern of tension and release that keeps a viewer leaning in.",
      },
      {
        heading: "Tools that shape rhythm",
        paragraphs: [
          "A handful of editing moves do most of the work, and they are worth knowing by name.",
          "None of them are complicated, but each one buys a different kind of smoothness. The trick is choosing the right tool for the beat you are cutting.",
          "Used together, they turn a stack of clips into something that flows without the viewer ever noticing the seams.",
        ],
        bullets: [
          "J and L cuts overlap audio and picture so a transition feels smooth rather than abrupt.",
          "Match cuts link two shots through a shared shape or color and carry momentum across a scene change.",
          "Cutting on action hides the seam inside movement and makes a fast sequence feel fluid.",
          "Beat matching lands cuts on music accents, which reads as confident when the tempo fits.",
        ],
      },
      {
        heading: "Reading your own edit out loud",
        paragraphs: [
          "A trick that never fails is to watch a rough cut with the sound off, then with the picture off. The pacing problem shows up in one pass or the other, separated from everything else.",
          "If the silent version drags, the visual rhythm is off. If the audio only version feels fine but the picture does not, the cuts are fighting the beat instead of riding it.",
          "Do this early, on the rough cut, when changes are still cheap. Rhythm problems are hardest to fix once the whole project is polished.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Four habits keep a cut from feeling like a metronome, no matter how short the shots get.",
        ],
        bullets: [
          "Vary shot length so the viewer never settles into a numbing pattern.",
          "Use color shifts as chapter marks and reserve the big ones for real turns.",
          "Let the emotion decide tempo instead of cutting fast out of habit.",
          "Hide hard cuts inside motion so speed stays readable.",
        ],
      },
    ],
  },
  {
    slug: "editing-color-accessibility-viewers",
    title: "Color Choices in Editing That Keep Every Viewer With You",
    excerpt:
      "Color accessibility is not a nice extra. A large slice of viewers see hues differently, so redundant cues in your grade keep the story readable for them too.",
    date: "2025-12-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "workflow"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A large number of men and a smaller number of women see color differently than you do, and that changes how a grade reads. Accessibility means never leaning on hue alone to carry meaning.",
          "If the only thing telling viewers green means safe and red means danger is the color, part of the audience gets nothing.",
          "This is a design problem, not a moral lecture. Solving it gives you a clearer edit, and clear edits hold attention for everyone. The audience you keep is larger, because clarity helps even viewers with perfect color vision.",
        ],
      },
      {
        heading: "Redundancy is the fix",
        paragraphs: [
          "Pair every color cue with a second signal. A shape, a label, a position, or motion can carry the same message so color becomes a bonus.",
          "When you mark a team in red and blue, also tag them with a symbol or a text label. Viewers who cannot separate the two hues still follow the game.",
          "The habit is cheap to build. Every time you reach for color to explain something, ask what else on screen could say the same thing. Once you start asking, you notice how often a shape or a label would have done the job better than a hue.",
        ],
      },
      {
        heading: "Contrast matters more than hue",
        paragraphs: [
          "Text over video fails far more often from weak contrast than from an odd color. Light text on a light background disappears no matter how pretty the palette is.",
          "Check the luminance difference between your text and the frame behind it. If they sit close in brightness, the words will vanish on a small screen.",
          "A safe rule is to keep a clear gap in brightness between text and background, then use color only to reinforce what contrast already did. Grey text on a mid grey bar is the classic failure, because it looks tasteful in the edit and disappears on a phone in daylight.",
        ],
      },
      {
        heading: "A quick accessibility pass",
        paragraphs: [
          "Run through this list before every export. It takes minutes, and it catches the problems that are invisible to you and obvious to someone else.",
          "The point is not to slow down your process, but to build a reflex that catches issues before a viewer does. After a while it stops feeling like a checklist.",
          "Most of these fixes take seconds once you know to look for them, which is why the pass is worth keeping in your routine.",
        ],
        bullets: [
          "Add a shape or label anywhere color alone signals meaning.",
          "Run subtitles over a subtle shadow or bar rather than trusting the footage.",
          "Test your grade in greyscale to see what survives without hue.",
          "Keep essential text away from moving backgrounds that shift brightness.",
        ],
      },
      {
        quote:
          "Designing for color blindness rarely hurts the grade. It usually forces cleaner decisions that help everyone.",
      },
      {
        heading: "Why it pays off beyond accessibility",
        paragraphs: [
          "Cues that rely on contrast and shape survive small screens, bad lighting, and tired eyes. A phone in bright sun washes out color, but it does not wash out a clear edge.",
          "So the same decisions that welcome viewers with a color vision difference also rescue everyone watching in less than ideal conditions. That is a rare case where the right call is also the practical one.",
          "It costs you almost nothing to build the habit, and the edit gets stronger in the process.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Four habits cover most of what accessibility asks of a grade, and none of them slow you down once they are automatic.",
        ],
        bullets: [
          "Never let color be the only cue for a piece of information.",
          "Back up every hue with a shape, label, or position.",
          "Check luminance contrast on any text that sits over footage.",
          "Preview in greyscale to catch meaning that depends on color alone.",
        ],
      },
    ],
  },
  {
    slug: "editing-hdr-color-management",
    title: "HDR Color Management Without Any of the Guesswork",
    excerpt:
      "HDR color management decides how bright and vivid your finished video looks. Get the tags and the pipeline wrong and the same grade looks dull on every screen.",
    date: "2026-09-15",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "post-production"],
    readTime: "9 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "HDR color management is the set of rules that tell a display how to interpret your bright and colorful footage. Get it wrong and your grade plays back flat, dim, or blown out on the viewer's screen.",
          "The rules cover the color space, the transfer function, and the metadata baked into the file. They sound technical, but the goal is simple, which is to look the way you intended.",
          "The reason it feels confusing is that several settings must agree at once. Miss one and the whole chain shifts. The good news is that you set these rules once per project, then forget them, as long as you set them correctly at the start.",
        ],
      },
      {
        heading: "The two pipelines",
        paragraphs: [
          "Most confusion comes from mixing a scene referred pipeline with a display referred one. Scene referred keeps everything in a wide working space until the end. Display referred bakes a target look earlier.",
          "Modern editors favor a scene referred flow. You import log into a wide space, grade there, and convert to the delivery standard only when you export.",
          "The scene referred habit pays off when you need several versions. One grade in a wide space can deliver to SDR and HDR without starting over, and it keeps you from baking mistakes into the footage early, when a wrong choice is hardest to undo.",
        ],
      },
      {
        heading: "Why it looks wrong",
        paragraphs: [
          "A common failure is grading in SDR and exporting HDR. The highlights that looked fine in the edit suddenly clip because the display expects more range.",
          "The opposite also bites. Grade in HDR and deliver SDR with no tone mapping and the image flattens, losing the punch you spent hours building.",
          "Both problems trace back to the same cause, which is a mismatch between what you graded for and what you shipped. I note the target in the project name so I cannot forget it three weeks later. Small reminders prevent the biggest mistakes in color work.",
        ],
      },
      {
        heading: "Settings that must agree",
        paragraphs: [
          "Each of these settings sits in a different menu, which is why they drift apart so easily. Check them as a group before you grade a single clip.",
          "Miss any one of them and the others still behave, which is what makes the failure so hard to trace later.",
        ],
        bullets: [
          "Match the project color space to the footage, not to a preset you found online.",
          "Set the correct transfer function so brightness values map as intended.",
          "Tag the export with the right metadata so players know how to read it.",
          "Check the grade on a reference display, since phone screens vary wildly.",
        ],
      },
      {
        quote:
          "HDR is not only more brightness. It is a contract between your timeline and the screen playing it back.",
      },
      {
        heading: "A calm way to set it up",
        paragraphs: [
          "Start with the delivery target written down before the first clip lands on the timeline. Knowing whether you are shipping SDR, HDR, or both removes most of the ambiguity.",
          "Then configure the project once and leave it alone. Changing the color management mid project is where the real damage happens, because every shot you graded reacts differently to the new rules.",
          "If you must change it, do so on a copy of the project so you can compare the two versions and see exactly what moved.",
        ],
      },
      {
        heading: "Key takeaways",
        paragraphs: [
          "Four simple checks catch the mistakes that ruin HDR delivery more often than anything else on this list.",
        ],
        bullets: [
          "Decide the delivery standard before you start grading, not after.",
          "Keep a scene referred pipeline so adjustments stay non destructive.",
          "Tone map properly when going between HDR and SDR.",
          "Verify on hardware that can actually show the range you are grading.",
        ],
      },
    ],
  },
];
