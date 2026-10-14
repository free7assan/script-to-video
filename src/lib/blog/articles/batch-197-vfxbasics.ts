import { Film, Scissors, Layers, Map, Eye, Puzzle, Type, DollarSign, Flame, Compass } from "lucide-react";
import type { BlogPost } from "../types";

export const batch197: BlogPost[] = [
  {
    slug: "vfx-when-effects-help-or-hurt",
    title: "When Visual Effects Help a Video and When They Hurt",
    excerpt: "Visual effects can clarify a story or bury it. Knowing when effects help a video and when they hurt is the first skill any editor needs to build.",
    date: "2034-10-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        heading: "Start with the story",
        paragraphs: [
          "Effects earn their place when they answer a question the audience already has. If a viewer wonders what a character sees on a screen, a clean insert answers it in a second. If they wonder how a machine works, a simple diagram does the job without a word of narration.",
          "Effects hurt when they arrive before the need. A flashy transition that no one asked for pulls the eye away from the words being spoken. The meaning behind those words gets lost in the noise, and the viewer remembers the flash instead of the point.",
        ],
      },
      {
        heading: "Every effect costs time and attention",
        paragraphs: [
          "Each effect adds render time, and each render you wait on is time you could spend cutting. A shot with ten layers takes longer to build, longer to fix, and longer to export. That cost rarely shows up in the final video, but you pay it on every revision.",
          "There is also a cost to the viewer. The eye can track only so much at once, and a busy frame forces a choice. When a lower third, a particle burst, and a zoom all fire together, the brain picks one and drops the rest, so half your work never registers.",
          "Good editors treat effects like seasoning. A little carries the flavor, and too much ruins the dish. Add one thing, watch it, then decide if the scene can hold another without tipping over.",
        ],
      },
      {
        quote: "The best effect is the one the audience never notices because it did its job and got out of the way.",
      },
      {
        heading: "Match the effect to the moment",
        paragraphs: [
          "An effect that fits a fast montage can feel wrong in a quiet interview. Read the energy of the scene before you open any effects panel. Slow, still shots usually want restraint, while quick cuts can carry more motion and color.",
          "When in doubt, cut the effect and watch the scene again. If the story still lands, the effect was never needed in the first place. If something now feels missing, you know exactly what that thing was and can add it back with intent.",
        ],
      },
      {
        heading: "Test with fresh eyes",
        paragraphs: [
          "Finish the cut, then walk away for a few hours. When you return, the effects that felt clever often look loud. Fresh eyes catch the moments where you added something just to prove you could.",
          "Ask one other person to watch and tell you what they remember. If they describe the effect instead of the story, it took too much room. That single answer tells you more than any technical review.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Add an effect only when it answers a question the viewer already has.",
          "Count the render time and the attention each extra layer costs.",
          "Match the energy of the effect to the energy of the scene.",
          "Remove an effect and rewatch to see if the story still lands.",
          "A fresh pair of eyes will tell you if the effect stole the scene.",
        ],
      },
    ],
  },
  {
    slug: "vfx-simple-keying-and-masking",
    title: "Simple Keying and Masking for Beginner Editors",
    excerpt: "Keying and masking let a beginner editor remove a background or hide part of a frame. This guide covers when simple keying and masking are enough for a scene.",
    date: "2034-10-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "Two tools, two jobs",
        paragraphs: [
          "Keying removes a color from a shot so you can place something behind it. Masking draws a shape that hides or reveals part of the frame. Most simple composites only need these two tools and a steady hand.",
          "A key works best against a flat, even background, like a green screen or a bright wall. A mask works when there is no clean color to remove and you just need to hide one small area, such as a logo or a stray object.",
        ],
      },
      {
        heading: "Setting up a clean key",
        paragraphs: [
          "Light the background so the color stays even across the whole frame. Hot spots and shadows create edges that the key cannot read, which leaves gaps or hard lines around the subject. Two soft lights on the backdrop often fix this before you touch any slider.",
          "Keep the subject away from the backdrop so the color does not spill onto skin or clothing. Spill shows up as a green or blue tint on the back of arms and hair, and it is far easier to prevent on set than to remove later.",
          "Start the key with a wide sample of the background color. Then adjust the edge softness until the outline blends with the new scene. A slightly soft edge usually reads better than a razor sharp one that jitters.",
        ],
      },
      {
        heading: "When a mask is the better choice",
        paragraphs: [
          "If the background has no single color to remove, a mask is faster than a key. Draw a rough shape, then feather the edges so the boundary does not look like a hard cutout. Track the shape if the camera or the subject moves.",
          "Masks work well for hiding logos, removing a cable, or revealing a second video inside a shape. They fall apart on complex edges like loose hair, where a key or a mix of both tools does a better job.",
          "You can combine the two. Use a key to pull the main subject, then a mask to clean up a small area the key missed. Layering a key and a mask often beats forcing either tool to do everything.",
        ],
      },
      {
        quote: "A clean edge comes from a clean set, not from a long afternoon in the key settings.",
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "Do not crank the edge controls to fix a bad source. If the background is patchy, no slider will save it, and heavy correction adds a glow around the subject. Fix the light instead.",
          "Do not forget the new background. A perfectly keyed subject dropped on a flat gray plate still looks fake. Match the light, the color, and the grain of the new scene so the subject belongs.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Light the backdrop evenly so the key has one color to read.",
          "Keep the subject away from the screen to avoid color spill.",
          "Use a mask for logos and small fixes, a key for full backgrounds.",
          "Combine a key and a mask when one tool cannot do the whole job.",
          "Match the new background light and grain to sell the effect.",
        ],
      },
    ],
  },
  {
    slug: "vfx-screen-replacement-basics",
    title: "How Screen Replacement Works in Simple Video Shots",
    excerpt: "Screen replacement puts a new image onto a phone or monitor in a shot. Learning screen replacement basics makes this effect quick to set up and easy to sell.",
    date: "2034-10-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "Corner pin first",
        paragraphs: [
          "Screen replacement swaps the dull image on a device for a sharper one you control. The base tool is a corner pin, which lets you drag the four corners of a new image to match the screen in the shot.",
          "You place the new image over the device, then grab each corner and pull it to the matching corner of the screen. With four corners in place, the software distorts the image so it sits flat on the angled surface.",
        ],
      },
      {
        heading: "Match the screen light",
        paragraphs: [
          "A screen is a light source, so the image you add should glow a little. Set the layer to a screen or add blend mode, or raise the brightness until the new content feels lit the way the real screen would be. A bright image on a dark set always looks pasted on.",
          "Add a slight blur to the image so it matches the focus of the rest of the scene. A screen that is sharper than the actor standing next to it breaks the illusion in a heartbeat.",
          "If the actor touches the screen, keep their reflection or their finger in front of the new image. Cutting the hand behind the screen makes the moment feel wrong even if no one can say why.",
        ],
      },
      {
        quote: "Four corners, one glow, and a touch of blur carry most screen replacements all the way home.",
      },
      {
        heading: "Tracking the corners",
        paragraphs: [
          "When the camera moves, the corners move too. Track four points on the device and let the software follow them, or animate the corners by hand on shorter shots. Hand keyframes are often faster on a shot that lasts only a few seconds.",
          "Watch for drift, where the new image slowly slides off the screen. Check the first and last frames, then fix the middle if needed. A tiny amount of drift shows up clearly once the clip plays.",
        ],
      },
      {
        heading: "Sound adds the final touch",
        paragraphs: [
          "Add small interface sounds that match the taps and swipes in the shot. A click for a button press and a soft tap for a scroll makes the new screen feel real. Silence is what usually gives a fake screen away.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use a corner pin to match the four corners of the screen.",
          "Light the new image so it glows like a real display.",
          "Blur the image to match the focus of the scene.",
          "Track the corners or animate them by hand on short shots.",
          "Layer small tap and swipe sounds to sell the screen.",
        ],
      },
    ],
  },
  {
    slug: "vfx-motion-tracking-basics",
    title: "Motion Tracking Basics for Realistic Composites",
    excerpt: "Motion tracking keeps added elements locked to a moving camera. These motion tracking basics cover tracking points, solving a shot, and fixes for common errors.",
    date: "2034-10-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "What tracking actually does",
        paragraphs: [
          "Tracking reads the movement of the camera by watching features in the shot. Once the software knows how the camera moved, it can place a graphic, a label, or a new object so it sticks to the scene through the whole clip.",
          "Tracked elements feel real because they share the motion of everything else on screen. When a label drifts against a moving background, the eye catches it at once. Good tracking removes that drift.",
        ],
      },
      {
        heading: "Pick strong points",
        paragraphs: [
          "Choose spots with clear contrast that stay visible for the whole shot. Corners of signs, brick edges, and sharp patches of text all make solid points. Smooth walls and blank skies give the tracker nothing to hold, so it wanders.",
          "Spread your points across the frame instead of clumping them in one corner. Points that cover the width and height of the shot give the software a stronger sense of depth and rotation.",
          "Set the tracking region tight around each point. A small box tracks a specific feature, while a large box lets the software average in nearby motion and lose the detail you wanted.",
        ],
      },
      {
        quote: "If a point is hard for your eye to follow, it will be hard for the tracker too.",
      },
      {
        heading: "Solving the move",
        paragraphs: [
          "Once the points track, the software solves the camera move and builds a 3D space for the shot. Short clips with a slow move solve in seconds. Fast moves and motion blur make the solve harder and often need more points.",
          "Check the solve before you add anything. Watch the tracked points as they play back, and watch for any that jump, slide, or stick. Fix the bad points first, because every later step builds on that data.",
        ],
      },
      {
        heading: "Common errors and fixes",
        paragraphs: [
          "Drift often comes from a point that locked onto the wrong feature halfway through. Delete the point and track again with a tighter region. If a subject walks through a point, mask it out so the tracker ignores the passing body.",
          "If the whole solve looks shaky, add more points and try again. A second pass with better spread usually beats hand fixing the result. Hand correction is a last resort, not a first step.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track high contrast features that stay visible for the whole shot.",
          "Spread points across the frame to read depth and rotation.",
          "Keep the tracking region tight around each point.",
          "Check the solve for jumps and drift before adding elements.",
          "Re-track weak points instead of hand fixing the result.",
        ],
      },
    ],
  },
  {
    slug: "vfx-screen-recordings-in-scene",
    title: "Adding Clean Screen Recordings into a Live Scene",
    excerpt: "Dropping a screen recording into a live scene takes more than a corner overlay. Here is how to blend a screen recording into a live scene cleanly.",
    date: "2034-10-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Start with a matching capture",
        paragraphs: [
          "Record the screen at the same frame rate as the camera so the motion lines up. Record at the resolution of the target screen, not larger, so you never have to shrink and soften the image to make it fit.",
          "Hide the cursor if the shot does not need it. A cursor that jumps around a static screen pulls the eye away from the point you are making. Turn it off unless a click is part of the story.",
        ],
      },
      {
        heading: "Place it like a real screen",
        paragraphs: [
          "Match the four corners of the capture to the device in the shot, the same way you would for a screen replacement. If the device sits at an angle, the image must sit at that angle too, or it will look flat and wrong.",
          "Light the recording so it glows from the screen. Raise the brightness until the content feels like a light source in the room. Add a soft blur so the screen matches the focus of the rest of the frame.",
          "Keep any hands, reflections, or objects in front of the screen. Cutting them out makes the device look like a hole in the shot rather than a thing sitting there.",
        ],
      },
      {
        quote: "A screen recording only feels captured on set when the light, the angle, and the focus all agree.",
      },
      {
        heading: "Cut to the useful part",
        paragraphs: [
          "Raw captures run long and full of dead time. Cut to the moment that matters and speed up the rest. A slow scroll at two or three times speed reads as natural while a full speed scroll often drags.",
          "Break long captures with a cut or a small zoom when the point changes. Constant motion bores the viewer, and a cut reminds them that time has passed on screen.",
        ],
      },
      {
        heading: "Add sound and grain",
        paragraphs: [
          "Layer in small clicks and taps that match what the viewer sees. Add a touch of grain to the recording so it matches the camera footage. Clean digital footage dropped into a grainy shot looks like a patch, and grain ties the two together.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Capture at the frame rate and resolution of the target screen.",
          "Match the four corners to the angle of the device.",
          "Light and blur the recording to match the scene.",
          "Cut to the useful moment and speed up slow scrolls.",
          "Add tap sounds and grain so the screen belongs in the frame.",
        ],
      },
    ],
  },
  {
    slug: "vfx-cleaning-mistakes-in-post",
    title: "Cleaning Up Mistakes in Post Without Reshoots",
    excerpt: "Small mistakes on set do not always need a reshoot. These fixes clean up mistakes in post, from stray objects to slips in the background of a frame.",
    date: "2034-10-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Decide what is worth fixing",
        paragraphs: [
          "Not every slip needs a fix. The eye forgives a lot in a moving shot, and a small flaw often passes by without notice. Fix the mistakes that pull attention from the point, and leave the rest alone.",
          "Rank each problem by how visible it is and how cheap it is to remove. A stray cable in the corner of a static shot is easy. A boom that crosses a face for ten frames is hard, and you may be better off cutting around it.",
        ],
      },
      {
        heading: "Cover it with what is already there",
        paragraphs: [
          "The cheapest fix copies a piece of the frame over the mistake. Grab a clean patch of the same wall, sky, or floor and place it over the problem, then feather the edges so the patch disappears.",
          "This clone style fix works best on flat, even textures. On busy or patterned areas the patch shows, and you need to match the pattern by hand or choose a different shot.",
          "Move the shot in time to find a clean frame to borrow from. A few frames before or after the mistake often gives you the exact patch you need from the same camera angle.",
        ],
      },
      {
        quote: "The best fix is invisible, and the fastest invisible fix is usually a patch you already have in the shot.",
      },
      {
        heading: "Remove and replace",
        paragraphs: [
          "When a patch will not cover the mess, paint out the object and rebuild the background. Remove a sign from a wall, then paint the wall back in with matched texture and light. Keep the brush work loose and check it at full size as you go.",
          "Track the removal with the camera so the fix moves with the shot. A static patch on a moving camera slides off the object within a second and draws the eye straight to the error you tried to hide.",
        ],
      },
      {
        heading: "Keep the grade in mind",
        paragraphs: [
          "Any fix you add must take the same color grade as the rest of the shot. A patch that is a touch warmer or darker shows up under the final look even if it looked fine in the raw edit. Check the fix after the grade, not before.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fix only the mistakes that pull attention from the point.",
          "Clone a clean patch of the same texture over small slips.",
          "Borrow a patch from a clean frame nearby in time.",
          "Track removals so the fix moves with the camera.",
          "Check every fix after the color grade, not before.",
        ],
      },
    ],
  },
  {
    slug: "vfx-text-and-callout-overlays",
    title: "Text and Callout Overlays That Guide the Viewers",
    excerpt: "Text and callout overlays point the eye to what matters in a shot. Good text and callout overlays stay readable, timed, and tied to the spoken words.",
    date: "2034-10-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        heading: "Lean on placement",
        paragraphs: [
          "A callout tells the viewer where to look. Place it next to the thing it describes, not in a fixed corner, so the eye makes the link without effort. The closer the label sits to its target, the faster the point lands.",
          "Keep text away from busy parts of the frame. A line over a patterned shirt or a moving crowd gets lost. Move it over a calm area, even if that means waiting for the camera to settle.",
        ],
      },
      {
        heading: "Time each line to the voice",
        paragraphs: [
          "Bring a callout in as the words that explain it are spoken, and take it out when the point is done. A label that lingers after the narration moves on feels stale and clutters the frame.",
          "Do not stack too many at once. One callout on screen at a time is easy to read. Three at once forces the viewer to scan and they miss the thing you most wanted them to see.",
          "Give each line a beat of its own on screen. Even a fast talking clip needs a moment for the eye to read the words before they vanish. Snappy timing that leaves no read time wastes the callout.",
        ],
      },
      {
        quote: "A callout is a signpost, and a signpost nobody has time to read is just clutter.",
      },
      {
        heading: "Keep it readable",
        paragraphs: [
          "Use a size that holds up on a phone. Tiny text looks fine on a large monitor and vanishes on a small screen, where most viewers watch. Test the cut on a phone before you call it done.",
          "Add a soft shadow or a subtle backing panel behind the text so it stays legible over any image. Light text on a light background disappears without help, and a backing panel solves it in one move.",
        ],
      },
      {
        heading: "Stay consistent",
        paragraphs: [
          "Pick one font, one color, and one motion for every callout in a series. Consistency lets the viewer learn the pattern and read faster. When each callout looks different, the viewer spends energy learning the style instead of the content.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place each callout beside the thing it describes.",
          "Time text to the spoken words and remove it when the point ends.",
          "Show one callout at a time to keep the frame readable.",
          "Add a shadow or backing panel so text survives any image.",
          "Keep the font, color, and motion consistent across a series.",
        ],
      },
    ],
  },
  {
    slug: "vfx-effects-on-a-budget",
    title: "Visual Effects on a Budget for Small Creators",
    excerpt: "You do not need a studio to add visual effects. These visual effects on a budget tips help small creators get clean results with free and low cost tools.",
    date: "2034-10-24",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        heading: "Spend on the set, not the software",
        paragraphs: [
          "A clean background and steady light cost less than most people think and save hours later. A plain wall, a cheap green cloth, and one soft light can carry dozens of shots. Money spent here removes work you would otherwise pay for in time.",
          "Shoot more than you need. Extra takes and alternate angles give you patches to borrow when you fix mistakes later. A few seconds of extra footage is the cheapest insurance you can buy.",
        ],
      },
      {
        heading: "Use free tools well",
        paragraphs: [
          "Free editors like DaVinci Resolve and HitFilm can key, track, and composite without a license fee. The tools are not the limit. The limit is practice, and practice is free.",
          "Build a small library of reusable assets. Grab free fonts, sound effects, and overlay packs from sites that allow commercial use. Reusing the same pieces across videos saves time and keeps your look consistent.",
          "Learn one effect at a time. Trying to master keying, tracking, and grading at once leads to shallow work. Learn the tool, finish a shot, then move to the next.",
        ],
      },
      {
        quote: "On a small budget, time is the currency, so spend it learning one tool at a time instead of buying ten.",
      },
      {
        heading: "Fake it when you can",
        paragraphs: [
          "Not every effect needs to be real. A shake can come from a hand slap on the desk. A glow can come from a light in frame. Practical tricks read as real because they are real, and they cost nothing.",
          "Use real light and real smoke when you can, and add the digital layer only where the practical trick stops. The mix of real and digital almost always beats an all digital approach on a tight budget.",
        ],
      },
      {
        heading: "Plan the shot before you roll",
        paragraphs: [
          "Sketch the effect before the shoot so you know what to capture. If you plan to track a label, you need points in frame. If you plan to key, you need a clean backdrop. A minute of planning saves an hour of fixing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Invest in a clean backdrop and steady light before new software.",
          "Shoot extra takes to give yourself patches for later fixes.",
          "Lean on free editors and free commercial use assets.",
          "Learn one effect at a time and finish a shot before moving on.",
          "Use practical tricks and add digital work only where they stop.",
        ],
      },
    ],
  },
  {
    slug: "vfx-avoiding-overdone-effects",
    title: "Avoiding Overdone Effects in Short Form Video",
    excerpt: "Too many effects can hide a good story. These tips on avoiding overdone effects in short form video keep edits punchy without burying the message on screen.",
    date: "2034-10-27",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        heading: "Pick one hero moment",
        paragraphs: [
          "A short video can hold one big effect well. Decide which beat deserves the flourish and keep the rest plain. The contrast makes the hero moment land harder than if every beat shouted.",
          "Ask what the viewer should feel at the peak. Build the effect to serve that feeling, then strip anything that does not. A single clean reveal beats five stacked tricks every time.",
        ],
      },
      {
        heading: "Watch the wobble and the zoom",
        paragraphs: [
          "Constant camera shake and endless zooms wear the viewer out. Shake reads as energy for a second, then it reads as noise. Save it for the drop, not for the whole clip.",
          "Random zoom punches on every cut look like a template. Use a zoom when the point needs it, and let the plain cut carry the rest. The plain cut is a tool, not a gap to fill.",
          "Watch the clip muted and at normal speed. Effects that felt subtle while you built them often read as busy when the sound is gone. Trim the ones that only worked because the music covered them.",
        ],
      },
      {
        quote: "An effect that fires on every beat leaves no beat to remember.",
      },
      {
        heading: "Let the words lead",
        paragraphs: [
          "Short form lives on the spoken line, so give the words room. Effects that cover the mouth or race the narration make the viewer work. Let the voice lead and let the visuals follow behind it.",
          "Cut the effect if it competes with the hook. The first three seconds decide whether someone stays, and a busy opening pushes them away. Keep the open clean and let the story grab them.",
        ],
      },
      {
        heading: "Review against a plain cut",
        paragraphs: [
          "Export two versions, one with effects and one plain, then watch them back to back. The plain cut tells you what the story does on its own. If the effects do not clearly improve it, keep the plain one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one hero effect and keep the rest of the clip plain.",
          "Save shake and zooms for the peak instead of every beat.",
          "Watch muted at normal speed to spot effects that only worked with music.",
          "Let the spoken line lead and keep effects behind the words.",
          "Compare against a plain cut and keep the effects only if they win.",
        ],
      },
    ],
  },
  {
    slug: "vfx-learning-effects-software",
    title: "How to Start Learning the Effects Software Today",
    excerpt: "The best way to learn effects software is to finish small projects. This plan for learning effects software builds skills through short practice shots.",
    date: "2034-10-30",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["editing", "visuals", "effects"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Finish small projects",
        paragraphs: [
          "The fastest way to learn is to finish short shots instead of studying endless tutorials. Pick a tiny goal, like keying a subject onto a new background, and complete it end to end. A finished shot teaches more than ten half watched videos.",
          "Keep each project short enough to finish in a sitting. A five second shot with one effect gives you a full lesson in setup, keying, and export. The finish line matters more than the difficulty.",
        ],
      },
      {
        heading: "Copy shots you like",
        paragraphs: [
          "Find a shot you admire and rebuild it. You will hit the same problems the original artist hit, and solving them teaches you the tool from the inside. Copying is practice, not theft, as long as you do not pass the work off as your own.",
          "Break the shot into steps before you start. Write down what happens first, second, and last, then follow the list. A plan keeps you from jumping between tools and losing your place.",
        ],
      },
      {
        quote: "Skill comes from the shots you finish, not the tutorials you save.",
      },
      {
        heading: "Learn the ten percent that matters",
        paragraphs: [
          "Most shots use a small set of tools. Learn keying, masking, tracking, and the corner pin, and you can handle a large share of real work. Master those few skills before you chase the rare ones.",
          "Reuse what you build. Keep your project files and your own presets so the next shot starts faster. Skill compounds when you build on your own past work instead of starting from zero each time.",
        ],
      },
      {
        heading: "Get feedback early",
        paragraphs: [
          "Post a short clip and ask one specific question, like whether the key edge holds up. Vague praise teaches nothing, but one clear note on a real problem moves your work forward. Show your shots often and fix one thing at a time.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Finish short shots end to end instead of watching endless tutorials.",
          "Rebuild shots you admire and list the steps before you start.",
          "Learn keying, masking, tracking, and the corner pin first.",
          "Save your project files and presets to reuse on the next shot.",
          "Ask one specific question when you post a clip for feedback.",
        ],
      },
    ],
  },
];
