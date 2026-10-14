import {
  BookOpen,
  PenLine,
  Film,
  Map,
  MessageSquare,
  Layers,
  Puzzle,
  Feather,
  Workflow,
  Eye,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch182: BlogPost[] = [
  {
    slug: "storyboarding-what-a-storyboard-is-for",
    title: "What a Storyboard Is For Before You Ever Hit Record",
    excerpt:
      "A storyboard is a rough plan of what the camera sees, drawn before you ever shoot. It catches weak ideas while they are still cheap to change.",
    date: "2033-07-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["pre-production", "visuals", "planning"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A storyboard is a rough visual plan of what the camera will see in each shot, drawn before anyone records a frame. Its job is to catch weak ideas while changing them is still cheap. Think of it as a rehearsal that costs nothing but a pencil.",
          "Most creators skip it because they picture film studios and animation teams. A talking head video with three cutaways does not need a Hollywood board. It does need ten minutes of thinking put down where you can see it.",
        ],
      },
      {
        quote:
          "The board is not there to look good. It is there to fail cheaply, on paper, before the failure costs you a shoot day.",
      },
      {
        heading: "The problem a board actually solves",
        paragraphs: [
          "Scripts describe words. They say almost nothing about what the viewer is looking at while those words land. A board closes that gap by forcing you, shot by shot, to decide what fills the screen.",
          "Once the shots are visible, you notice things a script hides. Two scenes might want the same visual. A joke that reads well on the page might need a reaction shot you never planned.",
          "The board makes those collisions impossible to ignore. You fix them by moving a frame, not by reshooting a scene.",
        ],
      },
      {
        heading: "What a board is not",
        paragraphs: [
          "It is not a contract. Nothing is broken if the final video looks different from the sketch. The board is a thinking tool, and thinking is allowed to change.",
          "It is also not a drawing test. Stick figures, boxes, and arrows carry all the information a board needs. A board has to be readable, not beautiful. Anyone who turns it into a portfolio piece has stopped using it.",
        ],
      },
      {
        heading: "How much detail is enough",
        paragraphs: [
          "A useful board shows framing, subject, and motion. It does not need lighting notes or lens choices unless those decisions are the whole point of the video.",
          "For most videos, one small sketch per script beat is plenty. If a shot needs a paragraph to explain, the shot is probably too complicated.",
          "The board just told you that early, which is the whole point. A simple board you finish beats a detailed one you abandon halfway.",
        ],
      },
      {
        heading: "Where the board fits in the workflow",
        paragraphs: [
          "Build the board after the script says what each section has to do, and before you schedule a shoot. That order keeps the board tied to intent instead of drifting into decoration.",
          "When one person writes, shoots, and edits alone, the board is mostly a conversation with your future self. That conversation still saves reshoots, because you forget the plan faster than you would like to admit.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A board is a rough plan of what the viewer sees, not a finished piece of art.",
          "Draft it after the script and before the shoot, while changes are still cheap.",
          "Keep it ugly if that helps. Boxes and arrows carry the idea.",
          "Use it to spot visual collisions and missing shots early.",
          "Treat it as a living plan, not a contract you must obey.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-sketching-rough-frames",
    title: "Sketching Rough Frames That Carry a Real Idea",
    excerpt:
      "Rough storyboard frames are supposed to be ugly. A box, a stick figure, and an arrow can hold an idea that a clean drawing would only ever bury.",
    date: "2033-07-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["storyboarding", "sketching", "workflow"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Sketching a frame is the act of deciding what the camera sees in one shot, using whatever marks are fast enough to keep up with your thinking. Speed matters more than accuracy here.",
          "The goal is not a drawing you would frame on a wall. The goal is a decision you can point at when the shoot day arrives and your memory has gone soft.",
        ],
      },
      {
        quote:
          "Your first fifty sketches are practice. Your fifty-first is a decision. That shift is the only skill you are actually training.",
      },
      {
        heading: "Why ugly sketches win",
        paragraphs: [
          "Polish slows you down and invites you to defend a drawing instead of a shot. A loose sketch keeps the frame open long enough for you to change your mind.",
          "Nobody edits a stick figure twice. When the drawing is rough, throwing it out costs nothing, so the weak frame leaves before it can cost you a shoot day.",
          "Roughness also keeps the focus on composition. When faces are blank circles, you argue about where people stand, which is the part that matters.",
        ],
      },
      {
        heading: "What belongs in the margin",
        paragraphs: [
          "Notes beside the frame do more work than the frame itself. Mark the camera move, the sound cue, and the line of script that pairs with the shot.",
          "Keep margin notes short. A board covered in full sentences is a script wearing a costume, and it stops being useful the moment you need to scan it fast.",
        ],
      },
      {
        heading: "A drill that makes you faster",
        paragraphs: [
          "Take one page of an old script and sketch a frame for every visual beat in ten minutes. Do not erase. Do not perfect. Keep the pen moving and count how many shots you can name.",
          "Repeat the drill with a new script each week. The aim is not better drawings. It is a faster link between reading a line and seeing the shot.",
          "Once that link is fast, boarding stops feeling like a chore and starts feeling like a reflex.",
        ],
      },
      {
        heading: "When to stop sketching",
        paragraphs: [
          "Stop when the next shot is obvious without drawing it. The board exists to remove doubt, and once the doubt is gone, more frames add nothing.",
          "If you find yourself sketching the same shot five times with tiny changes, you are avoiding a script problem. Close the board and fix the section on the page.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sketch for speed, not accuracy. A legible box beats a careful drawing.",
          "Let each frame settle subject, scale, and motion before you move on.",
          "Use margin notes for camera and sound instead of crowding the picture.",
          "Throw out weak frames early, while they cost nothing.",
          "Drill the read-to-sketch link until it stops feeling like work.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-planning-camera-angles",
    title: "Planning Camera Angles Before You Reach the Shoot",
    excerpt:
      "Deciding camera angles while storyboarding saves you from guessing on set. A few marks can lock the shot before the gear even leaves the bag.",
    date: "2033-07-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["camera", "shot-lists", "pre-production"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Planning camera angles means choosing, on paper, where the camera sits for each shot and why. Doing it during storyboarding turns a set of nerves into a checklist.",
          "Angle is not decoration. It tells the viewer how to feel about a subject, whether to trust them, shrink from them, or lean in.",
        ],
      },
      {
        quote:
          "An angle chosen for a reason survives the edit. An angle chosen for a mood usually ends up on the cutting room floor.",
      },
      {
        heading: "Start with the effect, not the lens",
        paragraphs: [
          "Ask what the viewer should feel in this beat. A low angle makes a subject loom. A high angle makes them small.",
          "Once the effect is named, the lens and distance mostly sort themselves out. This order keeps technical choices serving the story instead of showing off.",
          "A board that lists the effect next to each angle becomes a set of instructions anyone on the crew can follow.",
        ],
      },
      {
        heading: "Coverage and safety angles",
        paragraphs: [
          "For each scene, decide how much coverage you need. A talking segment might want a wide, a medium, and one insert. A fast montage might need a dozen tiny shots planned in a grid.",
          "Plan one safety angle for any shot that is hard to repeat. If the main framing fails, the board already named a backup.",
        ],
      },
      {
        heading: "Boarding movement",
        paragraphs: [
          "Movement gets its own mark. A pan, a push, or a handheld drift should be drawn as an arrow with a start and end position, not left to memory.",
          "If two moves fight for the same beat, keep one. A board that shows a pan and a zoom on the same shot is telling you the edit has not been decided yet.",
          "Movement also sets pace. A slow push reads as gravity. A quick whip reads as surprise. Draw the speed, not just the path.",
        ],
      },
      {
        heading: "Match angles to the edit",
        paragraphs: [
          "Angles only matter in sequence. A wide followed by a close reads as emphasis. A close followed by a close reads as unease.",
          "Sketch neighboring shots together so you can feel the cut before you shoot it. The board is the cheapest place to discover that two angles clash.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose each angle by the effect it has on the viewer.",
          "Let the effect decide the lens and the distance.",
          "Plan a safety angle for any shot that is hard to repeat.",
          "Draw movement as an arrow with a start and an end.",
          "Sketch shots in sequence so clashes show up early.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-mapping-scene-order",
    title: "Mapping Scene Order So the Story Holds Together",
    excerpt:
      "Mapping scene order on a storyboard shows where the story sags before you film a single take. Reordering paper is faster than reordering a shoot.",
    date: "2033-07-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["scene-order", "editing", "planning"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Mapping scene order means laying every scene on the board in the sequence the viewer will meet it, then checking that the order earns attention at each step. It is the cheapest edit you will ever make.",
          "Most weak videos are not badly written. They are well-written pieces stacked in the wrong order.",
        ],
      },
      {
        quote: "Reordering a board takes ten minutes. Reordering a shoot takes a week.",
      },
      {
        heading: "Order carries the meaning",
        paragraphs: [
          "The same three scenes can feel like a triumph or a slog depending on which one comes first. Order is not packaging. Order is part of the argument.",
          "Put the strongest tension close to the top. Save the payoff for after the viewer has invested something, even if that something is only thirty seconds of attention.",
          "Write each scene on a card and move the cards around before you draw anything. The order is cheaper to fix at this stage than at any other.",
        ],
      },
      {
        heading: "Find the sag",
        paragraphs: [
          "Read the board straight through and mark the moment your attention drops. That dip is the sag, and it is usually a scene that repeats what an earlier one already said.",
          "Cut it or merge it with the scene beside it. A board makes the sag visible because you can see the whole run at once instead of one scene at a time.",
        ],
      },
      {
        heading: "Cutting and combining",
        paragraphs: [
          "Two short scenes doing similar work often become one better scene. Combine them and give the survivor the stronger half of each.",
          "If a scene exists only to move a character from one place to another, it is travel, not story. Draw it in one frame or cut it.",
          "Every removal makes the remaining scenes carry more weight. That pressure is where the video gets its shape.",
        ],
      },
      {
        heading: "When to break the order",
        paragraphs: [
          "Chronology is a default, not a law. A flashback, a cold open, or a callback can all beat plain sequence if the payoff justifies the confusion.",
          "Break order only when the new arrangement creates meaning the old one could not. Otherwise you are adding friction for no return.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lay every scene out in the order the viewer meets it.",
          "Put the strongest tension near the top and the payoff later.",
          "Mark the sag, then cut or merge the scene causing it.",
          "Combine scenes that do the same job into one stronger scene.",
          "Break chronology only when the new order creates new meaning.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-talking-head-videos",
    title: "Storyboards for Talking Head Videos and Cutaways",
    excerpt:
      "Talking head videos still need a storyboard, but not to plan the face. The board plans every cutaway that keeps a long edit from ever stalling.",
    date: "2033-07-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["talking-head", "storyboarding", "youtube"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A talking head video still benefits from a storyboard, even though the main shot never changes. The board is not there to plan the face. It is there to plan everything the face cuts to.",
          "Without those cutaways planned, an edit becomes a hunt through footage for something to cover a jump. The board removes that hunt.",
        ],
      },
      {
        quote: "The talking head is the spine. The board plans the ribs.",
      },
      {
        heading: "Why the on-camera parts need a plan",
        paragraphs: [
          "Even a static shot changes meaning through framing. A slight push at a key line, or a wide that reveals a prop, can carry a beat that words alone cannot.",
          "Mark where you want a pause, a zoom, or a shift in position. These small moves keep a long segment from flatlining.",
          "A board also flags the lines that need a cutaway, so you know in advance which sentences will sit under B-roll.",
        ],
      },
      {
        heading: "Boarding cutaways and B-roll",
        paragraphs: [
          "List the visual support each paragraph needs. A claim about speed wants a clock or a screen. A story about a mistake wants the mistake, even if you stage it later.",
          "Draw each cutaway as its own frame and number it against the script line. That number is what saves you in the edit.",
        ],
      },
      {
        heading: "A one-page format that works",
        paragraphs: [
          "Split the page into a column of small frames and a column of script. Keep only the words that the frames cannot carry on their own.",
          "Add a third thin column for audio notes like music cues or sound effects. Three columns on one page cover nearly every talking head video.",
          "If the page spills onto a second sheet, the video may be trying to do too much for its length. The board just gave you that warning for free.",
        ],
      },
      {
        heading: "Where the board ends",
        paragraphs: [
          "Once the cutaways are named and the key moves are marked, stop. A talking head board does not need a frame for every breath.",
          "Hand the page to the editor and let the footage fill the gaps. The board named the structure. The edit gives it rhythm.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use the board to plan cutaways, not the talking head shot.",
          "Mark small moves like a pause or a push at key lines.",
          "Number each cutaway against the script line it supports.",
          "Keep the whole plan to one page with a script and audio column.",
          "Stop boarding once the structure is named and let the edit work.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-tutorial-videos",
    title: "Storyboarding Tutorial Videos Without Overplanning",
    excerpt:
      "Storyboarding a tutorial means planning the order of steps and the shots that prove each one. The board catches the missing step before a viewer does.",
    date: "2033-07-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["tutorials", "storyboarding", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Storyboarding a tutorial means planning the order of steps and the shots that make each one clear. The board protects the viewer from the parts you understand so well that you forget to show them.",
          "A tutorial lives or dies on clarity. The board is where you catch the missing step before a viewer gets lost and leaves.",
        ],
      },
      {
        quote: "You cannot teach what you have not shown. The board is the showing.",
      },
      {
        heading: "Start from the steps, not the shots",
        paragraphs: [
          "Write the steps first as plain instructions. The shots exist to prove each step happened, so the steps decide the frames.",
          "A step that takes one sentence might need three shots: the setup, the action, and the result. Draw all of them so the viewer sees the before and after.",
          "If a step is hard to show, the board exposes it early. You can then plan an animation or a close-up instead of apologizing on camera.",
        ],
      },
      {
        heading: "Showing hands and screens",
        paragraphs: [
          "Decide where the camera points for hands-on work. Overhead shots read as instruction. Close side shots read as craft.",
          "For screen recordings, frame the moment the cursor lands on the button that matters. A wide screen shot teaches nothing if the action is a speck.",
        ],
      },
      {
        heading: "Leave room for the viewer",
        paragraphs: [
          "Every step needs a beat to land. Board a short pause after anything complex so the viewer can catch up.",
          "Split long steps into smaller ones on the board, even if you keep them as one step in the final edit. The board is where you find the natural breaks.",
          "Mark where a recap belongs. A one-line summary after a tricky section can save a viewer who drifted for ten seconds.",
        ],
      },
      {
        heading: "Check the board against the script",
        paragraphs: [
          "Read the finished board and the script side by side. Every instruction should have a frame, and every frame should match a step.",
          "Any frame without a step is decoration. Any step without a frame is a place the viewer will get lost. Fix both before you shoot.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the steps first, then let the steps decide the shots.",
          "Show the setup, the action, and the result for each step.",
          "Point the camera where the work actually happens.",
          "Board short pauses and recaps so viewers can keep up.",
          "Match every frame to a step before you start shooting.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-graphics-to-script-beats",
    title: "Matching Graphics to Script Beats in a Storyboard",
    excerpt:
      "Matching graphics to script beats means deciding which lines get a visual aid. A graphic placed after the edit patches a gap instead of supporting a point.",
    date: "2033-07-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["graphics", "script-beats", "visuals"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Matching graphics to script beats means deciding which lines get a visual aid and which lines stand on camera alone. The board is where that decision gets made, not the edit.",
          "Graphics placed after the fact tend to cover gaps instead of supporting points. Placed on the board, they carry the argument.",
        ],
      },
      {
        quote: "A graphic that arrives late is a patch. A graphic planned on the board is a point.",
      },
      {
        heading: "Find the beat before the graphic",
        paragraphs: [
          "Read the script aloud and mark each idea that a picture could make clearer. Those marks are your beats.",
          "Not every beat needs a graphic. A line that already paints a picture in words might get weaker when you cover it with a chart.",
          "Circle the beats that carry numbers, comparisons, or steps. Those types almost always earn a visual.",
        ],
      },
      {
        heading: "Choosing the graphic type",
        paragraphs: [
          "Match the shape of the idea to the shape of the graphic. A trend becomes a line. A split becomes two columns. A process becomes a sequence.",
          "Draw the rough graphic in the frame on the board. Even a scribbled bar chart tells you whether the idea fits the space.",
        ],
      },
      {
        heading: "Placement and pacing",
        paragraphs: [
          "Decide whether the graphic appears before, during, or after the line it supports. A preview graphic sets up a point. A delayed graphic confirms it.",
          "Give each graphic enough screen time to be read. A chart that flashes for one second is noise with a border.",
          "Mark the exit too. Knowing when a graphic leaves is as important as knowing when it arrives.",
        ],
      },
      {
        heading: "Keep graphics in one family",
        paragraphs: [
          "Plan the look across the whole board, not frame by frame. Shared colors and type make separate graphics feel like one system.",
          "A board that mixes five styles will produce a video that feels stitched together. Pick two visual rules and apply them everywhere.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark the beats that a picture would make clearer.",
          "Match the shape of the idea to the shape of the graphic.",
          "Decide when each graphic appears and when it leaves.",
          "Give every graphic enough time on screen to be read.",
          "Keep colors and type consistent across the whole board.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-keeping-a-board-simple",
    title: "Keeping Your Storyboard Simple Enough to Use It",
    excerpt:
      "Keeping a storyboard simple means drawing only what you need to make the next decision. A board you finish beats a board you keep perfecting forever.",
    date: "2033-07-21",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["simplicity", "storyboarding", "focus"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "Keeping a storyboard simple means drawing only what you need to make the next decision. Every extra detail is another thing to maintain and another reason to stall.",
          "A simple board gets finished. A complicated one gets abandoned around frame four, which is worse than no board at all.",
        ],
      },
      {
        quote: "A board you finish is worth more than a board you perfect.",
      },
      {
        heading: "The real cost of a complicated board",
        paragraphs: [
          "Detail invites doubt. The more you draw, the more there is to second-guess, and second-guessing eats the time the board was meant to save.",
          "A dense board also hides its own weak spots. When everything has equal detail, nothing stands out as the shot that needs fixing.",
          "Simplicity keeps the board honest. Blank space shows you exactly where the plan is thin.",
        ],
      },
      {
        heading: "One idea per frame",
        paragraphs: [
          "Each frame should answer a single question about the shot. If a frame is trying to show framing and lighting and a costume change, split it.",
          "Fewer ideas per frame means more frames, which is fine. Small frames are quick to draw and quick to scan.",
        ],
      },
      {
        heading: "Set a detail cap",
        paragraphs: [
          "Choose a fixed level of detail and hold it. Stick figures with a horizon line are enough for most videos.",
          "The cap stops you from drifting into rendering. It also keeps every frame comparable, so you can read the board at a glance.",
          "If one frame suddenly has more detail than the others, ask why. Sometimes it means that shot matters more, and sometimes it means you are avoiding a harder frame.",
        ],
      },
      {
        heading: "Review with fresh eyes",
        paragraphs: [
          "Leave the board overnight and look again. A simple board lets you reabsorb the whole plan in seconds, which makes review cheap.",
          "Any frame you cannot understand at a glance was either drawn too busy or is doing too much. Either way, simplicity is the fix.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Draw only what you need to make the next decision.",
          "Give each frame one idea instead of several.",
          "Set a fixed level of detail and hold it across the board.",
          "Use blank space to show where the plan is thin.",
          "Review the board with fresh eyes and simplify anything unclear.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-digital-board-tools",
    title: "Choosing Tools for Digital Storyboards That Last",
    excerpt:
      "Digital storyboard tools let you duplicate, reorder, and share frames, but the software never plans the video for you. The plan still has to come from your head.",
    date: "2033-07-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["tools", "digital-boards", "workflow"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Digital storyboard tools replace paper with a canvas you can duplicate, reorder, and share. The trade is speed for editability, and that trade usually pays off once a project grows.",
          "The tool matters less than the discipline. A messy board in a fancy app is still a messy board.",
        ],
      },
      {
        quote: "The software does not plan the video. It just makes the plan easier to move.",
      },
      {
        heading: "What to look for",
        paragraphs: [
          "Prioritize fast frame creation. If adding a panel takes more than a second, you will draw fewer of them and your plan will get thinner.",
          "Look for reordering, since scene order changes more than anything else on a board. A tool that makes reordering painful will keep your order frozen.",
          "Sharing matters if more than one person touches the video. A board nobody else can open is a personal note, not a plan.",
        ],
      },
      {
        heading: "Drawing versus templates",
        paragraphs: [
          "Some tools push you toward reusable templates. Templates speed up repetitive formats like talking head videos with the same layout.",
          "Freehand drawing beats templates when the shots are unusual. Most projects want a mix, so pick a tool that allows both.",
        ],
      },
      {
        heading: "Sharing and versioning",
        paragraphs: [
          "Digital boards change, and changes need a trail. Know which version the crew is looking at before the shoot starts.",
          "Keep one board as the source of truth and archive old versions. Circulating three near-identical boards is how mix-ups happen.",
          "Comment features help, but only if people use them. A note in the margin of the right frame beats a message thread nobody can find later.",
        ],
      },
      {
        heading: "Keep the paper option open",
        paragraphs: [
          "Sometimes a napkin beats an app. For a three-shot video, paper is faster and there is nothing to open.",
          "Use digital when the project has many frames or many collaborators. Use paper when the plan is small, and switch when it stops being small.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Favor tools where adding a new frame takes almost no time.",
          "Pick software that makes reordering frames painless.",
          "Share the board early if more than one person works on the video.",
          "Keep one board as the source of truth and archive old versions.",
          "Use paper for small plans and switch to digital when they grow.",
        ],
      },
    ],
  },
  {
    slug: "storyboarding-reviewing-before-you-shoot",
    title: "Reviewing Your Storyboard Before You Start Shooting",
    excerpt:
      "Reviewing a storyboard before the shoot means reading the whole plan as the viewer would. Fixing gaps on paper costs minutes. Finding them on set costs the day.",
    date: "2033-07-29",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["review", "pre-production", "quality"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Reviewing a storyboard before the shoot means reading the whole plan as if you were the viewer, then fixing gaps while they are still free to fix. This pass catches more mistakes than any single frame will.",
          "A board that has never been reviewed is a draft you decided to film. The review is what turns it into a plan.",
        ],
      },
      {
        quote: "Shoot day is the worst time to meet your own outline for the first time.",
      },
      {
        heading: "The pre-shoot review pass",
        paragraphs: [
          "Read the board from the first frame to the last without stopping. Note where you get confused, bored, or unsure what happens next.",
          "Confusion usually means a missing shot. Boredom usually means a repeated one. Both are cheap to fix on paper.",
          "Read it out loud with the script in hand. The places where the words and frames disagree are the places that will slow you down on set.",
        ],
      },
      {
        heading: "Questions to ask each frame",
        paragraphs: [
          "For every frame, ask what the viewer sees and what changes from the frame before it. A frame where nothing changes may not need to exist.",
          "Ask whether the shot is shootable with the time and gear you have. A beautiful frame you cannot capture is a plan for a different video.",
        ],
      },
      {
        heading: "Sign-off and last changes",
        paragraphs: [
          "Walk the board with anyone who will be on set. They will spot practical problems you have stopped seeing after the tenth read.",
          "Make the changes in one pass, then freeze the board. A plan that keeps shifting cannot guide a shoot.",
          "Freezing does not mean the shoot cannot improvise. It means everyone starts from the same map, so any detour is a choice instead of an accident.",
        ],
      },
      {
        heading: "What the review replaced",
        paragraphs: [
          "The review exists so the shoot is not your first look. Every problem found here is a problem you did not discover with a camera running.",
          "It is slower for ten minutes and faster for the whole day. That trade is almost always worth taking.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the whole board once without stopping and mark trouble.",
          "Treat confusion as a missing shot and boredom as a repeat.",
          "Check that every shot is shootable with your time and gear.",
          "Walk the board with the crew and fix problems in one pass.",
          "Freeze the board so the shoot starts from a shared plan.",
        ],
      },
    ],
  },
];
