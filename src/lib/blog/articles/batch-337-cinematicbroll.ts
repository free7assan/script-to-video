import {
  Eye,
  Film,
  Zap,
  Layers,
  Waves,
  MessageSquare,
  BookOpen,
  Compass,
  Activity,
  Scissors,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch337: BlogPost[] = [
  {
    slug: "why-b-roll-keeps-viewers-watching",
    title: "Why B-Roll Keeps Viewers Watching Past the Hook",
    excerpt:
      "B-roll holds attention long after the hook fades. Here is why the eye keeps watching when the shot changes and how coverage buys you more seconds.",
    date: "2046-06-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "B-roll keeps viewers watching because the human eye is wired to notice change. A talking head holds attention for a while, then the brain treats the unchanging frame as background noise and starts hunting for the exit. Cutting to something else resets that clock.",
          "Most creators assume their script is the only reason people stay. The script matters, but the image is doing quiet work the entire time. When the image stops changing, the script has to carry every second alone, and that is a fight no script wins for long.",
          "Think about the last video you finished. Odds are it never left one frame for more than a few seconds without giving you something new to look at. That rhythm is not an accident, and it is easier to build than most people think.",
        ],
      },
      {
        heading: "What b-roll is actually for",
        paragraphs: [
          "B-roll is not decoration. It is the visual proof that what you are saying is real, and it is the pause that lets a viewer absorb a claim before the next one lands. Strip it out and your best line falls on a frozen face with nothing to look at.",
          "When you cut away at the right moment, you give the viewer a small rest without giving them a reason to leave. That rest is what makes a dense explanation survivable, and it is why documentaries lean on it so heavily.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Viewers do not leave because they are bored of your voice. They leave because the screen stopped giving them something new to process.",
      },
      {
        heading: "Why the eye leaves a static shot",
        paragraphs: [
          "A static shot is fine for a few seconds. Stretch it and the frame stops reading as a person and starts reading as a poster. The viewer notices the edges of the image, the wall behind you, the way the light never moves, and attention drifts.",
          "The fix is not constant motion. It is change with purpose: a new angle, a relevant object, a wider view that shows context. Change tells the brain there is more to see, so it stays a little longer.",
        ],
      },
      {
        heading: "The coverage rule",
        paragraphs: [
          "Shoot three times more coverage than you think you need. If a line mentions a tool, a place, or a result, you want a shot for each one ready on the timeline. Editing is where you find the gap, and by then you are not driving back to the location.",
          "Match coverage to the claim, not to the mood. A shot that shows the thing you are describing beats a pretty shot that shows nothing, almost every time you have to choose.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Change is attention. Every new frame buys a few seconds, and a frozen frame spends them.",
          "B-roll is proof and pause, not decoration. Cut away when a claim needs room to land.",
          "Shoot three times the coverage you expect to use so the edit never stalls on a missing shot.",
          "Choose relevant shots over pretty ones when the two compete for the same gap.",
        ],
      },
    ],
  },
  {
    slug: "shooting-b-roll-on-a-phone",
    title: "Shooting B-Roll on a Phone That Feels Cinematic",
    excerpt:
      "Shooting b-roll on a phone comes down to light, stability, and restraint. These habits make pocket footage look like it cost far more than it did.",
    date: "2046-06-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Shooting b-roll on a phone works when you respect three things: light, stability, and restraint. The sensor in your pocket is genuinely good now, and the gap between phone footage and camera footage is usually the operator, not the hardware.",
          "I have shot inserts on a phone that cut cleanly against footage from a much heavier rig. Nobody watching ever asked which shots came from which. The look came from how the shots were made, not what they were made with.",
        ],
      },
      {
        heading: "Get the settings right before you roll",
        paragraphs: [
          "Lock exposure and focus by tapping and holding on your subject. Auto exposure will happily brighten and darken mid-shot as you pan, and that breathing is the fastest way to make footage look amateur.",
          "Shoot the highest frame rate you can for slow motion and the standard rate for everything else. Do not mix them by accident, because a clip shot at sixty and played at normal speed looks subtly wrong to everyone.",
          "Turn on the grid and keep it on. It costs nothing and it keeps your horizons level, which is the single most common giveaway of a casual shot.",
        ],
      },
      {
        heading: "Move like a person, not a tripod",
        paragraphs: [
          "Brace your elbows against your ribs and let your body absorb the shake. Walk with bent knees and heel-to-toe steps. A slow, controlled drift reads as intentional, while a jittery hand reads as a mistake.",
          "Lean against a wall, a railing, or a doorframe when you can. Borrowed stability is free, and it lets you hold a longer shot than your arms would allow on their own.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A phone in steady hands beats a cinema camera in shaking ones. Stability is the cheapest upgrade you will ever make.",
      },
      {
        heading: "Shoot for the edit, not the moment",
        paragraphs: [
          "Grab a wide, a medium, and a close of anything worth including. The wide sets the scene, the medium shows the action, and the close carries the feeling. Editors stitch those three together constantly.",
          "Hold each shot a few seconds longer than feels necessary. You cannot stretch footage that ends early, and a little extra room on both ends saves more edits than any filter.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lock exposure and focus so the image does not breathe while you pan.",
          "Brace against your body or a wall instead of chasing a gimbal you do not own.",
          "Shoot a wide, a medium, and a close of every subject worth keeping.",
          "Hold each clip a few seconds long so the edit has room to breathe.",
        ],
      },
    ],
  },
  {
    slug: "natural-light-that-looks-good",
    title: "Natural Light That Actually Looks Good on Camera",
    excerpt:
      "Natural light that looks good on camera is mostly about timing and direction. Learn to read the sun and your footage stops fighting the room.",
    date: "2046-06-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Natural light that looks good on camera comes down to two choices: when you shoot and which way you face. You cannot control the sun, but you can control where you stand, and that single decision changes everything about the frame.",
          "I plan most shoots around windows and golden hour because both give soft, generous light for free. The crews who fight the sun end up with harsh shadows and blown highlights that no amount of grading will rescue.",
        ],
      },
      {
        heading: "Soft light beats bright light",
        paragraphs: [
          "A bright source is not a flattering source. Direct midday sun carves hard shadows under the eyes and nose, and it clips the highlights on skin until faces look plastic. Soft light wraps around a subject and hides the small flaws everyone has.",
          "You get soft light from a big source relative to your subject. A window with a sheer curtain, an open sky on an overcast day, or shade next to a bright wall all do the job. The source being large is the whole trick.",
        ],
      },
      {
        heading: "Direction shapes the mood",
        paragraphs: [
          "Front light is flat and safe. Side light gives shape and texture, which is why portraits love it. Backlight separates your subject from the background and adds a glow, though you have to watch for exposure on the face.",
          "Face the window, not the wall. The difference between a subject lit head-on by a window and one lit from behind is the difference between a usable shot and a silhouette.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You do not need more light. You need the light you already have to hit your subject from a better angle.",
      },
      {
        heading: "Work with the clock, not against it",
        paragraphs: [
          "Golden hour lasts roughly an hour after sunrise and before sunset, and it flatters almost anything. The light is low, warm, and soft, so shadows stay gentle and skin glows.",
          "Overcast days are secretly excellent for talking heads because the entire sky becomes one giant softbox. Do not cancel a shoot because the sun hid. Shoot faces on cloudy days and save the sunshine for landscapes.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Prefer soft, large sources over bright, small ones for anything with a face in it.",
          "Move your subject, not the sun, to fix bad shadows.",
          "Use side light for texture and backlight for separation, but check exposure on the face.",
          "Treat overcast days as a free softbox instead of a reason to reschedule.",
        ],
      },
    ],
  },
  {
    slug: "composing-cinematic-shots",
    title: "Composing Shots That Feel Cinematic and Intentional",
    excerpt:
      "Composing cinematic shots is less about rules and more about deliberate choices. Depth, balance, and negative space do the heavy lifting here.",
    date: "2046-06-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Composing cinematic shots means deciding what the viewer looks at first, then arranging everything else to support that. A frame that feels intentional almost always has one clear subject and a background that stays out of its way.",
          "The rules of composition are useful starting points, not laws. Once you know why they work, you can break them on purpose, and breaking them on purpose is what separates a style from a mistake.",
        ],
      },
      {
        heading: "Build depth into every frame",
        paragraphs: [
          "Flat frames feel like snapshots. Put something in the foreground, your subject in the middle, and something in the background, and the image suddenly has space you can fall into. Depth is what makes a two-dimensional screen feel like a place.",
          "Shoot through things. A doorway, a plant, or a fence rail between you and the subject adds a layer and quietly implies that the viewer is peeking into a real space.",
        ],
      },
      {
        heading: "Use the rule of thirds as a habit",
        paragraphs: [
          "Place your subject or key lines on the thirds instead of dead center. Centered can feel static, while offset framing gives the eye somewhere to travel and leaves room for the subject to look into.",
          "Leave space in front of a face that is looking to the side. Crowding a subject against the edge they are facing feels tense for the wrong reasons.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A cinematic frame is not a beautiful accident. It is a series of small choices that together tell the eye where to go.",
      },
      {
        heading: "Let negative space do work",
        paragraphs: [
          "Empty space is not wasted space. A large area of sky, wall, or shadow can make a small subject feel isolated, calm, or overwhelmed, depending on how you balance it. Silence in a frame reads as confidence.",
          "Pair negative space with a clean background. Busy backgrounds fight the subject for attention, and no amount of composition fixes a distracting wall of clutter.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Decide the single subject first, then remove anything that competes with it.",
          "Layer foreground, subject, and background so the frame has depth.",
          "Use the rule of thirds and leave look space in front of a subject.",
          "Treat negative space as a tool for mood, not an empty area to fill.",
        ],
      },
    ],
  },
  {
    slug: "camera-movement-without-a-gimbal",
    title: "Camera Movement Without a Gimbal: Handheld Tricks",
    excerpt:
      "Camera movement without a gimbal is still smooth if you borrow stability. These handheld techniques give you motion that reads as controlled.",
    date: "2046-06-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Camera movement without a gimbal comes down to isolating your hands from your legs. The shake you see on amateur footage comes from the whole body transmitting steps into the frame, so you stabilize the chain rather than the camera alone.",
          "I have gotten smooth push-ins and slow pans with nothing but two hands and a strap. A gimbal helps, but it is not the reason movement looks professional. Control is.",
        ],
      },
      {
        heading: "Brace the camera into your body",
        paragraphs: [
          "Pull your elbows in tight against your ribs and hold the camera close to your chest. Your torso becomes the rig, and your hands only make small corrections. The further the camera is from your body, the more it amplifies every wobble.",
          "Use the camera strap as a tension point. Push the camera slightly away until the strap goes taut, and you get three points of contact that resist drift without any hardware.",
        ],
      },
      {
        heading: "Walk like you are carrying a full cup",
        paragraphs: [
          "Bend your knees and roll from heel to toe with each step. Keep your upper body level and let your legs do the cushioning. It looks strange, and it works, which is why every camera operator does it.",
          "Move slower than feels right. Fast movement magnifies shake, while a slow drift stays readable. If you need to cover ground quickly, cut between two static shots instead of running with the camera.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Smooth movement is not about a tool. It is about refusing to let your steps reach the lens.",
      },
      {
        heading: "Use the environment as a stabilizer",
        paragraphs: [
          "Slide the camera along a railing, table, or wall for a clean lateral move. Rest your forearm on a ledge and pivot from the elbow for an arc that holds steady. The world is full of improvised dolly tracks if you look for them.",
          "Lean into a doorframe or press your back against a wall when you need a long hold. Borrowed stability is free, and audiences never notice the help you took from the room.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tuck your elbows in and hold the camera close so your torso absorbs the shake.",
          "Use the strap with slight outward tension for a third contact point.",
          "Walk with bent knees and a slow heel-to-toe roll, always slower than feels natural.",
          "Slide along railings and walls to get clean moves without any rig.",
        ],
      },
    ],
  },
  {
    slug: "matching-b-roll-to-narration",
    title: "Matching B-Roll to Your Narration Beat by Beat",
    excerpt:
      "Matching b-roll to your narration is a timing problem more than a visual one. Cut on the stressed word and the whole edit starts to click.",
    date: "2046-06-06",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Matching b-roll to your narration works best when you cut on the word, not between sentences. Viewers connect image and meaning at the exact moment a noun or a verb lands, and a shot that appears a beat early or late feels disconnected.",
          "The most common mistake is putting a shot on screen for the whole paragraph. It drifts off the specific idea after a second or two, and the viewer stops trusting that the picture means anything.",
        ],
      },
      {
        heading: "Cut on the stressed word",
        paragraphs: [
          "Read your script out loud and mark the words that carry the meaning. Those are your cut points. If the line is about a falling number, the shot of the graph should land on the word falling, not two seconds later.",
          "Leave a shot up while its idea is on screen, then move on. A cut that arrives with the word reads as insight. A cut that arrives after it reads as an afterthought.",
        ],
      },
      {
        heading: "Give the eye a ladder",
        paragraphs: [
          "Order your shots from wide to close or close to wide across a sequence. A ladder gives the viewer a sense of moving through the idea instead of watching a slideshow of unrelated images.",
          "Keep each shot on a similar rhythm unless you are intentionally changing the pace. Erratic shot lengths with no reason feel jumpy, and jumpy edits make even good narration feel anxious.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A shot is not illustrating a sentence. It is landing on a single word, and the word is where the meaning lives.",
      },
      {
        heading: "Match abstraction with something concrete",
        paragraphs: [
          "When the narration turns abstract, reach for a specific image. Talking about growth is vague, so show a plant, a line climbing, or a hand turning a dial. Concrete images make abstract claims easier to hold.",
          "Save your most literal shots for your most important claims. If a number matters, show the number. If a place matters, show the place. Reserve the moody shots for the transitions between ideas.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark stressed words in the script and cut on them, not between sentences.",
          "Move shots in a wide to close ladder so the sequence has direction.",
          "Swap in concrete images when the narration goes abstract.",
          "Spend your most literal shots on your most important claims.",
        ],
      },
    ],
  },
  {
    slug: "building-a-b-roll-library",
    title: "Building a B-Roll Library You Reuse Every Week",
    excerpt:
      "Building a b-roll library turns one afternoon of shooting into months of easy edits. Organize by moment, not by camera or date.",
    date: "2046-06-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Building a b-roll library works best when you organize clips by what they mean, not by when you shot them. A folder named Tuesday tells you nothing at the editing desk, while a folder named typing gives you an answer in a second.",
          "The creators who edit fastest are not more talented. They simply stopped searching for footage they already own and started tagging it so they can find it.",
        ],
      },
      {
        heading: "Shoot for the library, not just the video",
        paragraphs: [
          "Every time you go out for one video, grab a few generic shots you did not plan for. Hands on a keyboard, coffee being poured, a door opening, a phone screen. These stocks come up in almost every project.",
          "Keep a running list on your phone of shots you wish you had. The next time you are anywhere near a location that can fill one of those gaps, shoot it in ten minutes and file it away.",
        ],
      },
      {
        heading: "Tag by moment and mood",
        paragraphs: [
          "Use tags like morning, focus, transition, or city at night. Moment tags tell you when a clip fits into a story, and mood tags tell you whether it belongs under a happy line or a serious one.",
          "Two or three honest tags beat twenty vague ones. If you cannot decide what a clip means, you probably will not reach for it, so either tag it clearly or let it go.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A library is only useful if you can find the clip in fewer than ten seconds. Organization is not tidiness. It is speed.",
      },
      {
        heading: "Review and prune on a schedule",
        paragraphs: [
          "Once a month, open the library and delete the shots you have never used. Formats change, projects change, and footage that no longer fits just slows your search down.",
          "Back it up somewhere that survives a dead laptop. A library you spent months building is worth more than the drive it sits on, and rebuilding it from scratch is a week you will never get back.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Organize by meaning, not by date or camera, so clips are findable in seconds.",
          "Capture generic inserts on every shoot to keep the library stocked.",
          "Tag for moment and mood, and keep tags few and honest.",
          "Prune and back up on a schedule so the library stays fast and safe.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-basics",
    title: "Color Grading Basics Every Creator Should Know",
    excerpt:
      "Color grading basics start with correction, not creativity. Match your shots first, then push a look that supports the mood of the scene.",
    date: "2046-06-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Color grading basics start with a boring step: correction. Before you chase a moody look, you make every shot match in exposure and white balance, or the whole edit will feel like it was assembled from three different films.",
          "Creativity comes second. A grade that fights the footage never looks intentional, while a subtle grade on matched footage looks like it was always meant to be that way.",
        ],
      },
      {
        heading: "Correct before you create",
        paragraphs: [
          "Set your blacks and whites first so nothing is crushed or blown. Then fix the white balance so whites actually read as white. Only after that should you touch color, because a look built on a broken base will fall apart on the next shot.",
          "Use one reference shot as your anchor and match the rest to it. Pick the clip with the best light, correct it, then grade every other shot until it sits next to that clip without obvious difference.",
        ],
      },
      {
        heading: "Keep the look simple",
        paragraphs: [
          "A grade is a few decisions, not fifty sliders. Nudge contrast, cool the shadows a little, warm the highlights, and stop. Restraint is what makes a look feel professional rather than filtered.",
          "Skin tones are the test. If faces look orange or green, your grade has gone too far, no matter how good the rest of the frame looks. Protect skin above everything else.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Good color is invisible. When a viewer notices your grade, it is usually because something in it is wrong.",
      },
      {
        heading: "Match the mood, not the trend",
        paragraphs: [
          "Warm, lifted tones feel nostalgic and friendly. Cool, contrasty tones feel serious and technical. Pick the one that matches what your video is saying, then keep it consistent across the whole piece so the mood holds.",
          "Do not chase a look you saw elsewhere if your footage was shot in completely different light. A grade is a conversation with your own material, and every scene has its own answer.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Correct exposure and white balance across shots before you add any creative look.",
          "Anchor the grade to one reference clip and match the rest to it.",
          "Keep the grade to a few deliberate moves, and protect skin tones above all.",
          "Choose a mood that fits the message and keep it consistent throughout.",
        ],
      },
    ],
  },
  {
    slug: "music-that-fits-the-mood",
    title: "Picking Music That Fits the Mood of Your Edit",
    excerpt:
      "Picking music that fits the mood is about serving the story, not your taste. Match energy and texture to the scene and let the visuals lead.",
    date: "2046-06-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Picking music that fits the mood starts with one question: what should the viewer feel right now? Once you answer that, the track is easy to narrow down, and the choice stops being about what you personally like.",
          "The track is never the star of an explainer video. Its job is to hold the emotional floor steady so the images and words can do the work on top of it.",
        ],
      },
      {
        heading: "Match energy to the scene",
        paragraphs: [
          "Fast, busy music pushes urgency. Slow, sparse music creates room to think. If your narration is dense, pick a track with fewer competing elements so the voice stays clear.",
          "Watch the intensity curve of your video. Music that stays at one level for eight minutes goes numb, so choose a track with a build, or layer two tracks so the emotion can move.",
        ],
      },
      {
        heading: "Let dynamics do the editing",
        paragraphs: [
          "Drop the music under your most important sentence and bring it back after. That small dip is more dramatic than any swell, because it tells the viewer to listen.",
          "Time your cuts to the beat when the video is upbeat, and cut against the beat when it is serious. Cutting on every beat for a heavy topic makes it feel cheerful, which is rarely what you want.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If the viewer notices the music, one of two things happened. Either the moment needed it, or the track was louder than the story.",
      },
      {
        heading: "Clear the rights before you fall in love",
        paragraphs: [
          "Work only with licensed or royalty free tracks. A perfect song you cannot legally use is a trap, and platforms will mute or pull the video the moment it gets traction.",
          "Keep a folder of cleared tracks sorted by mood. When an edit needs a lift or a landing, you reach into the folder instead of reopening the search you already did last month.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose the track by the feeling you want, not by personal taste.",
          "Match musical density to narration density so the voice stays clear.",
          "Dip the music under key lines instead of raising it.",
          "Only use cleared tracks and keep them organized by mood for reuse.",
        ],
      },
    ],
  },
  {
    slug: "pacing-visuals-to-the-edit",
    title: "Pacing Visuals to the Edit for Better Retention",
    excerpt:
      "Pacing visuals to the edit means controlling how long a shot holds the eye. Get the rhythm right and retention stops leaking in the middle.",
    date: "2046-06-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["visuals", "b-roll", "cinematography"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Pacing visuals to the edit is about how long each shot is allowed to hold the eye. Too long and the viewer gets bored, too short and they never settle. The sweet spot changes with the emotion of the scene.",
          "Most weak edits have one speed. They cut at a steady interval for the whole video, and that lack of contrast is what makes even good material feel flat.",
        ],
      },
      {
        heading: "Vary your shot lengths",
        paragraphs: [
          "Mix long holds with quick bursts. A few seconds of calm followed by a run of fast cuts makes the fast section feel faster than it would on its own. Contrast is what creates the sense of speed.",
          "Save your shortest cuts for punchlines and reveals. When three or four quick shots land in a row, the eye speeds up, and a quick return to a long shot then feels like a deep breath.",
        ],
      },
      {
        heading: "Let the narration set the tempo",
        paragraphs: [
          "Cut where the speaker pauses, stresses a word, or changes subject. The narration is the metronome of the edit, and following it makes the visuals feel like they belong to the words instead of running alongside them.",
          "When there is no narration, the pacing is entirely yours to set. Build a rhythm with the music, then break it on purpose at the moment you want the viewer to pay attention.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Flat pacing is a flat video. The edit should breathe, and breathing means the length of a shot changes with the feeling.",
      },
      {
        heading: "Guard against the long middle",
        paragraphs: [
          "The middle of a video is where retention leaks, because it usually has the least novelty. Add a visual change, a new location, or a fresh shot style right where attention tends to drop.",
          "Read your timeline like a heartbeat. If it looks like an even row of identical blocks, the whole thing is moving at one speed, and you have a pacing problem to fix before you publish.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Vary shot lengths so contrast creates the feeling of speed.",
          "Cut on pauses and stressed words so visuals follow the narration.",
          "Add a visual change in the middle where retention is most likely to drop.",
          "Read your timeline as a rhythm and fix any stretch that runs at one speed.",
        ],
      },
    ],
  },
];
