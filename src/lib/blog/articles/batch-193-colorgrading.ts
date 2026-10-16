import {
  BarChart3,
  Eye,
  Film,
  Heart,
  Layers,
  Repeat,
  Scissors,
  Search,
  Target,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch193: BlogPost[] = [
  {
    slug: "color-grading-correction-before-grading",
    title: "Color Grading Starts With Correction, Not Style",
    excerpt:
      "Color grading works only after correction settles exposure and balance. Fix the footage first, then chase a look the whole edit can carry without breaking.",
    date: "2034-06-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Correction is the boring half of color grading, and it decides whether the other half works. You set exposure and neutralize the white balance, then get every shot into a sane place before you think about mood. Skip it and every creative choice afterward fights footage that was never stable to start with.",
          "I learned this the hard way on a travel series where I graded before I corrected. The look felt great on the hero shot and fell apart on the next twelve. Rebuilding from a corrected base took less time than patching the style had cost me.",
        ],
      },
      {
        heading: "Correction is the floor, not the paint",
        paragraphs: [
          "For most editors correction means a few mechanical moves: set the black and white points, fix the color cast, and match the shot to its neighbors. None of these involve taste. You can judge them with scopes instead of your eyes.",
          "Once the floor is level, a look sits on top like furniture in a finished room. Put the furniture down first and you spend the night leveling the floor with the couch still in the way.",
        ],
      },
      {
        quote:
          "Grade a shot you have not corrected and you are decorating a house with no foundation. It will look fine until someone leans on it.",
      },
      {
        heading: "Signs you are still correcting",
        paragraphs: [
          "If you find yourself nudging the same shot in five different directions, you are still correcting. A corrected clip accepts the first reasonable adjustment and stays put. A clip that keeps sliding is telling you the base is wrong.",
          "Scopes help here. If your blacks sit far above zero, no amount of saturation will fix the washed look. If the waveform spikes into the ceiling, the highlights are gone no matter how gentle your tint.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct exposure and white balance before any creative choice.",
          "Match shots to each other before you match them to a mood.",
          "Use scopes to confirm correction, not just your eyes.",
          "A corrected clip stops sliding when you adjust it.",
          "Save the look for last, once the floor is level.",
        ],
      },
      {
        heading: "How to sequence the work",
        paragraphs: [
          "Run correction across the whole timeline in one pass, then grade the whole timeline in a second pass. Switching between the two per shot splits your attention and your eye loses its reference point.",
          "Keep a reference frame open while you work. When you correct shot forty, compare it to shot one, not to the memory of what shot one looked like an hour ago.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-matching-shots",
    title: "How to Match Shots That Do Not Match in Color Grading",
    excerpt:
      "Matching shots is the daily grind of color grading. Here is a simple order of operations for pulling mismatched footage into one clean, believable sequence.",
    date: "2034-06-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Shot matching is the part of color grading that eats whole afternoons, and it never makes the highlight reel. Two cameras, a cloud that moved, a white balance that drifted between takes. Your job is to make the audience never notice any of it.",
          "The goal is not identical frames. It is a sequence where the eye never catches a jump in exposure or color as the cut lands.",
        ],
      },
      {
        heading: "Fix exposure before color",
        paragraphs: [
          "Match your blacks and whites first, because brightness differences read as cuts even when the color is perfect. Drop your reference shot next to the problem shot and compare the waveform rather than squinting at the picture.",
          "Once the tonal range lines up, tackle the color cast. A shot that is slightly green next to a neutral shot looks like a mistake no matter how good the composition is.",
          "Only after both of those do you touch saturation. Cranking saturation to hide a brightness mismatch makes the whole sequence feel loud and cheap.",
        ],
      },
      {
        quote:
          "Nobody walks out of a film praising the shot matching. They walk out because nothing pulled them out of the story, and that is the job.",
      },
      {
        heading: "Use a reference, then trust the scopes",
        paragraphs: [
          "Pick one shot as your anchor, ideally the one everyone else will be judged against. Grade it until it feels right, then leave it on screen as a reference and match everything else to it.",
          "Your eyes adjust to whatever is in front of them, so they will lie to you after ten minutes. The scopes will not. When your eye and the waveform disagree, believe the waveform and then check why.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match brightness before color, and color before saturation.",
          "Keep one anchor shot open as your reference.",
          "Judge exposure with a waveform, not by eye.",
          "Small mismatches survive; big ones break the cut.",
          "Match the sequence, not one frame in isolation.",
        ],
      },
      {
        heading: "When the mismatch is too big",
        paragraphs: [
          "Some footage cannot be matched without looking worse than the mismatch itself. A shot that is two stops under will turn to noise the moment you lift it to match a bright scene.",
          "When that happens, cut around the problem or hide it with a transition. Grading is not a rescue service, and forcing a bad shot to fit drags every good shot down with it.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-scopes-and-waveforms",
    title: "Reading Scopes and Waveforms in Color Grading",
    excerpt:
      "Scopes turn color grading from guesswork into measurement. Learn what the waveform, vectorscope, and parade tell you before you touch a single color wheel.",
    date: "2034-06-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Scopes are the instruments that keep color grading honest. Your monitor shows you a picture, but scopes show you the numbers behind it, and the numbers do not care how tired your eyes are at midnight.",
          "Learn three displays and you have enough to grade almost anything: the waveform, the vectorscope, and the RGB parade.",
        ],
      },
      {
        heading: "The waveform reads brightness",
        paragraphs: [
          "The waveform plots luminance across your image, left to right, with dark at the bottom and bright at the top. A flat line across the top means your highlights are clipped, and a flat line at the bottom means your shadows are crushed.",
          "You want the trace to sit inside the box with breathing room at both ends. Touch the ceiling and you have lost detail you cannot get back.",
        ],
      },
      {
        heading: "The vectorscope reads color",
        paragraphs: [
          "The vectorscope shows hue and saturation on a circle, with the center meaning neutral and the edges meaning fully saturated. A shot with a color cast pushes the whole trace toward one direction, and you can often spot a green or magenta tint here before you see it on screen.",
          "Skin tone lines on the vectorscope give you a target. They are a guide, not a law, but they catch the worst shifts fast.",
        ],
      },
      {
        quote:
          "Stare at a picture long enough and it will convince you it is neutral. A scope has no opinion and no fatigue, which is exactly why you keep one open.",
      },
      {
        heading: "The parade splits the channels",
        paragraphs: [
          "The RGB parade shows red, green, and blue as three separate waveforms. When one channel sits higher than the others across the frame, that is your color cast, and you can fix it by leveling the three.",
          "This is the fastest way to neutralize a shot that looks slightly off but you cannot name why.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The waveform measures brightness from black to white.",
          "The vectorscope measures hue and saturation.",
          "The parade separates RGB so casts become obvious.",
          "Keep traces inside the box, off both ceilings.",
          "Trust the scope when your eye and the numbers disagree.",
        ],
      },
      {
        heading: "How to read them quickly",
        paragraphs: [
          "Glance at the waveform first for exposure, then the parade for casts, then the vectorscope for saturation. That order solves most shots in seconds once it becomes habit.",
          "Do not try to watch all three at once. Pick the one that answers the current question, adjust, then move to the next.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-white-balance-fixes",
    title: "White Balance Fixes Before You Reach for a LUT",
    excerpt:
      "A white balance fix solves more color grading problems than any preset. Correct the cast at the source, then let your look sit on footage that is finally clean.",
    date: "2034-06-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Nine out of ten color grading problems on my timeline turn out to be white balance, not style. The shot looks wrong because the light was wrong, and no LUT will repair a cast that lives in the pixels.",
          "Fix the balance first and the rest of the grade gets easier, because neutral footage accepts any look you put on it.",
        ],
      },
      {
        heading: "Find something that should be neutral",
        paragraphs: [
          "Look for a surface that should be white, gray, or black: a shirt, a wall, a patch of road. If you shot a color chart, even better. Sample it and let the software pull the cast out.",
          "On a real shoot you rarely get a perfect reference, so use the closest neutral you can find and trust the parade to confirm you landed.",
        ],
      },
      {
        heading: "Temperature and tint do different jobs",
        paragraphs: [
          "Temperature handles the blue to orange axis, which is the one a daylight or tungsten mix creates. Tint handles the green to magenta axis, which shows up under fluorescent lighting or mixed sources.",
          "Adjusting temperature when the problem is tint just spins the shot around the wrong axis. Watch the parade and it becomes obvious which one is off.",
        ],
      },
      {
        quote:
          "A cast is not a mood. If you are calling your mistake a style choice, the scope already knows the truth.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fix the cast before you apply any creative look.",
          "Use a neutral reference whenever one exists.",
          "Temperature corrects orange and blue; tint corrects green and magenta.",
          "Confirm the fix on the parade, not just your monitor.",
          "Clean footage accepts a look; dirty footage fights it.",
        ],
      },
      {
        heading: "When to leave a little warmth",
        paragraphs: [
          "Neutral is the safe default, not always the goal. A little warmth on skin can feel inviting, and a cool tint on a night scene reads as moonlight.",
          "The rule is simple. Choose the shift on purpose and keep it consistent across the scene. Accidental warmth is a mistake; chosen warmth is a decision.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-luts-when-to-use",
    title: "When to Use LUTs in Color Grading and When to Skip Them",
    excerpt:
      "LUTs are not a color grading shortcut. Used well they translate or preview a look; used lazily they flatten every shot you own into the same tired frame.",
    date: "2034-06-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A LUT is a lookup table, a set of instructions that maps one color to another. It is a tool, not a finish line, and treating it as the latter is where color grading goes wrong for a lot of creators.",
          "You should reach for a LUT for two reasons: to convert footage from one color space to another, or to preview a look you plan to refine.",
        ],
      },
      {
        heading: "Conversion LUTs versus creative LUTs",
        paragraphs: [
          "Conversion LUTs are the responsible kind. They take log footage from a camera and bring it into a standard space so you can start grading from a normal-looking image. These are technical, and they do their job quietly.",
          "Creative LUTs are the dangerous kind. They add a preset style, often the same teal and orange wash everyone else is using. Drop one on and you inherit somebody else's taste plus all of its flaws.",
        ],
      },
      {
        quote:
          "A creative LUT is someone else's grade applied at full strength to your footage. Sometimes that is exactly what you want. Usually it is a starting point you forgot to refine.",
      },
      {
        heading: "Use a LUT as a step, not an ending",
        paragraphs: [
          "The smart move is to apply a creative LUT at reduced strength, then treat the result as a rough sketch. Pull the opacity back until the image stops looking aggressive, then shape it with your own corrections.",
          "Log footage also gives you more room than you think. A heavy LUT on already-baked footage crushes highlights that were never yours to lose.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "LUTs translate color spaces or preview a look.",
          "Conversion LUTs are safe; creative LUTs carry someone's taste.",
          "Apply creative LUTs at partial strength and refine.",
          "A LUT cannot rescue badly balanced footage.",
          "Build your own look for anything you care about.",
        ],
      },
      {
        heading: "When to skip the LUT entirely",
        paragraphs: [
          "If you are grading a series that needs its own identity, build the look once and save it as a preset you understand line by line. A preset you made will fit footage a stranger's LUT never will.",
          "Skip LUTs altogether on short projects where the grade is simple. Adding a table to every clip just to say you used one is a lot of ceremony for no gain.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-building-a-look",
    title: "How to Build a Color Grading Look That Fits the Story",
    excerpt:
      "Building a look is the fun part of color grading, and the part most likely to run wild. Keep it anchored to the story and the footage will carry it further.",
    date: "2034-06-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "A look is the overall personality of your grade: the palette, the contrast, the way light feels across the whole piece. Building one is the creative half of color grading, and it works only when it grows out of the story you are telling.",
          "Start by asking what the scene needs to feel like, then work backward to the choices that produce that feeling.",
        ],
      },
      {
        heading: "Pull the look from the footage, not a preset pack",
        paragraphs: [
          "Before you impose anything, watch the footage as shot. If the location is warm and dusty, lean into that instead of fighting it toward cool and clinical. A look that cooperates with the material is easier to hold for a whole episode.",
          "Look for one dominant color and one accent. A desert scene might live in amber with a single blue shadow. That tension gives the eye something to travel across.",
        ],
      },
      {
        heading: "Contrast carries more mood than color",
        paragraphs: [
          "Raising or lowering contrast changes how a scene feels faster than any tint. Lifted blacks create a faded, nostalgic mood, while deep blacks and bright highlights create tension and clarity.",
          "Decide the contrast curve before you decide the palette. Color sits on top of contrast, and the mood the contrast creates will tell you which colors belong.",
        ],
      },
      {
        quote:
          "A look is a promise you make in the first minute and keep for the whole piece. Break it once and the audience feels the seam.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build the look from the footage, not from a preset.",
          "Pick one dominant color and one accent.",
          "Set contrast before you set the palette.",
          "Consistency matters more than novelty.",
          "Test the look on your most difficult shot first.",
        ],
      },
      {
        heading: "Test it on the hard shots",
        paragraphs: [
          "Apply the look to the shot you fear most, the muddy interior or the blown-out exterior. A look that survives your worst frame will survive the rest.",
          "Then check the simplest shot, like a face in soft light. If the look makes a clean shot look sick, the palette is too strong and the story will pay for it.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-skin-tones-stay-true",
    title: "How to Keep Skin Tones Looking True in Color Grading",
    excerpt:
      "Skin tones tell the audience when color grading has gone wrong. Keep faces believable and every other choice in the frame becomes easier for viewers to trust.",
    date: "2034-06-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Skin tones are the first thing an audience notices and the last thing they can explain. When color grading pushes a face toward orange or green, viewers feel something is off even if they cannot point to it.",
          "Protect the faces and you have earned permission to be bold everywhere else in the frame.",
        ],
      },
      {
        heading: "Start from a neutral face",
        paragraphs: [
          "Watch a face at normal exposure and ask whether it reads as skin rather than as a color. Pale, flushed, gray, all of these are signals that the balance drifted or the grade pushed too hard.",
          "Use the vectorscope skin tone line as a checkpoint. It is a target, not a cage, because real skin ranges widely, but it catches gross errors before they reach the timeline.",
        ],
      },
      {
        heading: "Watch saturation on faces first",
        paragraphs: [
          "Faces show saturation damage before anything else does. Push saturation up and skin turns waxy and unnatural long before a red jacket looks wrong. Pull it down and faces go gray while the rest of the scene still looks fine.",
          "Adjust saturation with a face on screen. If the skin holds, the rest of the frame usually follows.",
        ],
      },
      {
        quote:
          "Audiences forgive a strange sky. They do not forgive a strange face. Protect skin and you can take chances with everything around it.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge every grade with a face in the frame.",
          "Keep skin near neutral and let deliberate warmth stay subtle.",
          "The vectorscope skin line is a checkpoint, not a rule.",
          "Saturation hurts faces before it hurts anything else.",
          "When in doubt, a believable face beats a bold palette.",
        ],
      },
      {
        heading: "Different skin, same care",
        paragraphs: [
          "Skin tones are not one color, and a grade that flatters one person can leave another looking washed out or unnaturally red. Check the faces you actually have, not a generic target pulled from a tutorial.",
          "Across a channel, aim for a consistent treatment rather than one fixed hue. Consistency between episodes matters more than hitting a single magic number.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-consistency-across-channel",
    title: "Consistency Across a Channel in Color Grading",
    excerpt:
      "Consistency across a channel is what makes color grading feel like a brand. Reuse a tested look and every new upload feels like part of the same body of work.",
    date: "2034-06-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Consistency is what separates a channel from a pile of unrelated videos. When color grading stays steady across uploads, viewers learn your visual signature without being told, and the next video feels familiar before it even starts.",
          "The goal is not identical frames. It is the same family of color and contrast so any two episodes could sit side by side without a fight.",
        ],
      },
      {
        heading: "Save a look you can repeat",
        paragraphs: [
          "Build your grade once, then save the exact settings as a preset or a template project. Rebuilding from scratch every time guarantees drift, and drift is what makes a channel feel scattered.",
          "Note the values you used, not just the preset file. A saved look is only useful if you understand which parts to keep and which parts to adapt per video.",
        ],
      },
      {
        heading: "Lock what changes and what does not",
        paragraphs: [
          "Keep contrast and overall palette fixed, and allow white balance corrections and exposure fixes to vary with each shoot. The fixed parts create the signature, and the flexible parts keep it honest.",
          "This is the difference between a look and a straitjacket. A look bends to fit the footage; a straitjacket breaks it.",
        ],
      },
      {
        quote:
          "A channel is a body of work, not a folder of files. Consistency is the thread that ties the uploads together.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reuse a saved grade so each upload matches the last.",
          "Keep contrast and palette fixed across videos.",
          "Let exposure and white balance vary shot to shot.",
          "Write down the values behind your preset.",
          "Consistency beats novelty on an ongoing channel.",
        ],
      },
      {
        heading: "Check against the last upload",
        paragraphs: [
          "Before you publish, pull a frame from your previous video and compare it to the new one at the same size. If they look like they came from the same world, you are done.",
          "If they clash, the new grade needs a small correction, not a rebuild. Consistency is maintained by small adjustments, not heroic rescues.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-on-a-laptop-screen",
    title: "Color Grading on a Laptop Screen Without Guessing",
    excerpt:
      "Grading on a laptop screen is where many creators work, and it is full of traps. A few habits keep color grading accurate even on a display never built for it.",
    date: "2034-06-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Most of us grade on a laptop, which is a display built for spreadsheets and streaming, not for judging color. That does not make color grading impossible, but it does mean you have to work around the screen instead of trusting it.",
          "The main problems are brightness that runs too high, colors that drift, and a screen that changes depending on the angle you look at it.",
        ],
      },
      {
        heading: "Control the room before the screen",
        paragraphs: [
          "Turn off the overheads and work in a dim room, because a bright room forces you to push the screen brighter than it should be. A screen at full brightness will make every grade look washed out and every shadow look gray.",
          "Keep the wall behind your screen neutral and matte. A colorful poster or a window in your peripheral vision shifts what you think you see.",
        ],
      },
      {
        heading: "Do not trust the display, trust the scopes",
        paragraphs: [
          "On a laptop the scopes matter more, not less, because they are the only part of your setup that does not depend on the panel. Set exposure by waveform and check casts by parade, and the screen becomes a preview rather than a judge.",
          "Calibrate the display if you can, and if you cannot, at least keep brightness moderate and consistent between sessions.",
        ],
      },
      {
        quote:
          "A laptop screen is a window, not a ruler. Use it to watch, and use your scopes to decide.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Dim the room and keep screen brightness moderate.",
          "Judge exposure and color with scopes, not the panel.",
          "Keep your surroundings neutral and matte.",
          "Calibrate if possible, and stay consistent if not.",
          "Check the grade on a second screen before publishing.",
        ],
      },
      {
        heading: "Check on a phone before you publish",
        paragraphs: [
          "Your audience watches on phones, so a phone is the honest test. If the grade holds up there, it holds up for most viewers.",
          "If the phone reveals crushed shadows or a strong cast, adjust the grade rather than the playback. The device is telling you the truth even when your laptop will not.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-common-mistakes",
    title: "Common Color Grading Mistakes and How to Fix Them",
    excerpt:
      "Common color grading mistakes repeat across almost every timeline. Learn to spot them early and your edits get faster, cleaner, and a lot less frustrating.",
    date: "2034-06-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "post"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Almost every bad grade I see makes the same handful of mistakes, and color grading gets easier the moment you can name them. The fix is rarely a better plugin. It is usually doing less, earlier.",
          "Here are the mistakes that show up again and again, and what to do instead of repeating them.",
        ],
      },
      {
        heading: "Grading before correcting",
        paragraphs: [
          "The most common mistake is reaching for a look while the footage is still unbalanced. Style applied to a color cast amplifies the cast, and you end up fighting the same shot for an hour.",
          "Correct first, every time. Exposure and white balance are the floor, and a look belongs on top of a level surface.",
        ],
      },
      {
        heading: "Chasing a look that does not fit",
        paragraphs: [
          "Another mistake is forcing footage into a trend, like teal shadows and orange skin, when the material wants something else. The grade fights the scene and the scene loses.",
          "Let the footage suggest the palette. A look that cooperates with what you shot will hold for the whole piece instead of cracking under pressure.",
        ],
      },
      {
        quote:
          "The best grade is often the one you barely notice. If the audience is thinking about your color instead of the story, you overdid it.",
      },
      {
        heading: "Ignoring the scopes",
        paragraphs: [
          "Grading by eye alone is a mistake because your eyes adapt within minutes and start lying. You convince yourself the image is neutral when it is not, and you only see the truth the next morning.",
          "Keep a scope open and check it often. It costs nothing and it catches the errors your tired eyes wave through.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct exposure and balance before applying any look.",
          "Let the footage choose the palette instead of forcing a trend.",
          "Grade with scopes open, not by eye alone.",
          "Stop when the image serves the story and the grade disappears.",
          "Do less, earlier, and the shot fights you less.",
        ],
      },
      {
        heading: "Working in one long sitting",
        paragraphs: [
          "The final mistake is grading for hours without a break. Fatigue flattens your judgment and you keep escalating adjustments to feel something.",
          "Step away every hour, look at something far away, then come back. Half the corrections you were about to make will look unnecessary once your eye resets.",
        ],
      },
    ],
  },
];
