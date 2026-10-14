import {
  Clock,
  Map,
  Target,
  Users,
  Repeat,
  Eye,
  Flag,
  MessageSquare,
  Waves,
  Layers,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch183: BlogPost[] = [
  {
    slug: "shot-list-saves-time",
    title: "Why a Shot List Saves You Time Before You Roll",
    excerpt:
      "A shot list saves time by moving every camera decision off the shoot day. Here is how planning ahead keeps your crew moving and your edit clean.",
    date: "2033-08-02",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A shot list saves time by moving every camera decision off the shoot day and onto a planning page. You decide what you need while you are calm, then execute while you are tired, which is the whole trick.",
          "People mix up the script and the shot list all the time. The script says what the video means. The shot list says how the camera captures that meaning, in what order, from which angle, and with what fallback if the light falls apart.",
        ],
      },
      {
        heading: "Where the hours actually go",
        paragraphs: [
          "On a shoot with no list, the clock drains into small arguments. Someone asks whether to grab a wide before the close, the group debates it, the light shifts, and you shoot the same beat three ways because nobody wrote down what the beat needed.",
          "None of that looks expensive in the moment. Stack those ten minute detours across a day and you wrap two hours late with footage that still misses a key angle.",
          "A list removes those decisions before they happen. You read the first row, set the camera, and roll. The crew stops waiting on your brain and the location stops drifting under changed light.",
        ],
      },
      {
        quote:
          "A shot list does its work before the camera leaves the bag. It is one decision you made once so you do not have to make it forty times.",
      },
      {
        heading: "What belongs on the page",
        paragraphs: [
          "Every row should name the shot, the subject, the lens or focal length, the movement, and a short reason it exists. A list without the reason becomes a grid you follow on autopilot. A list with the reason lets you bend the plan when the scene asks for it and still land what you came for.",
          "Try to hold a scene to one page. When a scene spills over, that is usually a signal to split it into two shooting blocks with their own light and their own energy.",
        ],
      },
      {
        heading: "The effect builds quietly",
        paragraphs: [
          "Your first shoot with a list will feel stiff. Around the fifth one, you notice the real gain: you finish early and still have fuel for the pickups that make a cut breathe. That spare capacity is where the good footage lives.",
          "It also reshapes the edit. A labeled list means named clips, and named clips sort themselves. You stop scrubbing through twenty minutes of unlabeled B-roll hunting for the one pan you half remember liking.",
          "Time saved on set is nice. Time saved in the edit, on every project, is the part that compounds.",
        ],
      },
      {
        heading: "Keep it a list, not a script",
        paragraphs: [
          "A shot list is not a storyboard and it is not a script. It does not need to describe mood or subtext. It needs to tell a camera operator what to point at and when to stop.",
          "If you find yourself writing paragraphs inside each row, you are planning a different document. Cut the prose and keep the instructions.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A shot list moves decisions off the shoot day and onto a planning page.",
          "Give every row a shot, subject, lens, movement, and a reason.",
          "Hold one scene to one page so the list stays usable on location.",
          "Named clips sort themselves, which shortens the edit.",
          "The real payoff is spare energy for pickups, not a faster wrap.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-group-by-location",
    title: "Grouping Shots by Location to Cut Setup Time on Set",
    excerpt:
      "Grouping shots by location cuts setup changes and keeps your gear in one place. Learn the simple ordering rule that saves hours on any shoot day.",
    date: "2033-08-05",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Grouping shots by location means you shoot everything that happens in one place before you move, instead of chasing the story in chronological order. The camera moves once per location rather than once per scene, and that single rule saves more time than almost any other planning habit.",
          "Story order and shoot order are separate ideas. A scene that reads as ten separate moments on screen may all live in your kitchen, and there is no reason to light that kitchen five different times across a week.",
        ],
      },
      {
        heading: "Why location order beats story order",
        paragraphs: [
          "Every time you change location you pay a tax: packing, travel, parking, finding power, and rebuilding the light. Those costs stack. Shoot in story order and you may pay that tax a dozen times for a six minute video.",
          "Shoot in location order and you pay it once per place. The crew stays warm, the light you set stays set, and the gear you pulled out stays out because you are not switching rooms every hour.",
          "The trade is mental, not physical. Holding the story in your head while shooting out of order takes practice, which is exactly what a marked shot list is for.",
        ],
      },
      {
        quote:
          "You are not filming a story. You are filming a pile of pieces that will become a story in the edit. Location order respects that.",
      },
      {
        heading: "How to build the list",
        paragraphs: [
          "Start by listing every shot in story order, then sort the whole list by location. Add a column for the scene each shot belongs to so you never lose the thread.",
          "Mark which locations are locked, which are borrowed, and which depend on daylight. Daylight dependent shots go first. Night exteriors and interiors you control can wait.",
          "Count the setups per location and move on. That number tells you how long to block out, and it stops you from promising a shop owner you will be gone in twenty minutes when you really need an hour.",
        ],
      },
      {
        heading: "A quick sort example",
        paragraphs: [
          "Say your video has a park scene, a kitchen scene, and a car scene, and the story runs kitchen, car, park. Shooting in story order means three locations and three setup taxes. Sorting by location gives the same result if each place is used once, so here the gain is small.",
          "Now imagine the park appears in four separate beats. Story order sends you back three extra times. Location order keeps you there once. The more a place repeats in the script, the more the sort is worth.",
        ],
      },
      {
        heading: "Keep the story visible",
        paragraphs: [
          "One danger of location order is losing track of a performance that needs continuity. If a character holds a cup in one beat and not the next, shooting out of order will expose it. Note prop and wardrobe state on the list before every scene change.",
          "Give your actors the same consideration. Tell them the scene will be shot out of order and hand them the context of each beat as you go. A performer who knows why they are angry in take fourteen will give you something usable.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Shoot everything in one place before moving to the next location.",
          "Group by location to pay the setup tax once per place.",
          "Sort by location but keep a scene column so the story stays visible.",
          "Shoot daylight dependent setups first and controlled interiors later.",
          "Track props and wardrobe because out-of-order shooting exposes continuity gaps.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-angles-focal-lengths",
    title: "Noting Angles and Focal Lengths on a Shot List",
    excerpt:
      "Noting angles and focal lengths on a shot list prevents coverage gaps and reshoots. A few extra columns turn a wish list into a usable camera plan.",
    date: "2033-08-08",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Noting angles and focal lengths on your shot list is how you avoid discovering in the edit that every shot looks the same. The angle tells you where the camera stands. The focal length tells you how much of the world it pulls in or flattens out.",
          "Most coverage fails not because the shots are bad but because they are identical. Three wides from the same height and distance give an editor nothing to cut against.",
        ],
      },
      {
        heading: "Angle first, then distance",
        paragraphs: [
          "Angle is the direction the camera looks from: front, three quarter, profile, behind, high, low. Two shots of the same subject from the same distance but different angles still cut together, because the viewer feels the change in position.",
          "Distance is a separate dial. A wide, a medium, and a close up from one angle give you a scene. Add a second angle at one distance and you have a conversation. Write both on the list as separate columns so you can see the gaps before you shoot.",
          "The goal is coverage that gives the editor options. If every row reads close up, you have one rhythm for the whole video, and that rhythm will feel flat by minute two.",
        ],
      },
      {
        quote:
          "An editor can only cut what you handed them. Angles are not decoration. They are the joints a scene bends on.",
      },
      {
        heading: "Focal length changes the feeling",
        paragraphs: [
          "Focal length is not just how much you fit in frame. A wide lens stretches the space and pushes the subject back into it. A long lens compresses distance and pulls the background up behind the subject. The same performance reads differently on each.",
          "For interviews, a long lens at a distance can make a small room feel calm and private. A wide lens close to the face makes the room feel loud and immediate. Neither choice is wrong. The list should record which feeling you chose and why.",
          "If you only own one lens, note the zoom position or the distance you plan to stand. Consistency matters more than gear. The list is there so the fourth interview matches the first one shot last month.",
        ],
      },
      {
        heading: "A practical column layout",
        bullets: [
          "Shot number and the scene it belongs to.",
          "Subject and action in plain words.",
          "Angle, such as front, profile, high, low, or over the shoulder.",
          "Focal length or distance from the subject.",
          "Movement, if any, and a reason the shot exists.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Coverage fails when every shot shares one angle and distance.",
          "Track angle and focal length in separate columns to spot gaps.",
          "Different focal lengths change how a performance reads, not just how much fits.",
          "A long lens in a tight room feels private while a wide close up feels loud.",
          "Note the lens even when the gear is fixed, so return shoots match.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-solo-creators",
    title: "Shot Lists for the Solo Creator Doing Everything",
    excerpt:
      "Shot lists for solo creators replace a second set of eyes. Build one that keeps you honest when nobody is there to catch a missed angle or lens.",
    date: "2033-08-11",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Shot lists for solo creators do the job a second person normally covers. With no one to ask whether you got the wide, the list becomes the voice that keeps you honest and stops you from driving home with half a scene in the can.",
          "When you run camera, sound, and performance at once, your working memory is already full. Anything not written down is a coin flip. The list carries the parts your brain cannot hold while you are in character.",
        ],
      },
      {
        heading: "The cost of working alone",
        paragraphs: [
          "A two person crew catches mistakes in real time. The operator sees the boom in frame. The director notices a missed line. Alone, you find those problems in the edit, weeks later, when the location is gone and the light is impossible to rebuild.",
          "Every missed shot on a solo project costs a return trip. A return trip costs time you may not have. The list is cheap insurance against a reshoot you cannot schedule.",
        ],
      },
      {
        quote:
          "When you are the whole crew, the shot list is your second set of eyes. Write it like someone else will check your work, because later, you will.",
      },
      {
        heading: "Design it for one pair of hands",
        paragraphs: [
          "Keep the order physical, not conceptual. Group shots that use the same setup so you touch the camera as little as possible. Set the tripod once and grab four framing options before you move it.",
          "Note where you will stand and where the camera will sit, because you cannot see the frame and the performance at the same time. If a shot needs you on screen, plan how you will start and stop it without walking into view.",
          "Add a time estimate per block. Solo shoots run long because nobody is there to move you along. The estimate on the page does the pushing.",
        ],
      },
      {
        heading: "Plan around your weakest channel",
        paragraphs: [
          "Decide which part of the craft you can monitor and which you cannot. If you can watch the frame, you can let sound drift a little. If you are watching sound, accept that framing will be approximate and build in a second take from the same mark.",
          "Write reminder lines on the list itself. A short note like check the top of frame or listen for the HVAC hum costs nothing and saves a take. The list is allowed to nag you.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Alone, the shot list replaces the second person who would catch mistakes.",
          "Order shots by setup so you move the camera as little as possible.",
          "Note camera position and your own position, since you cannot watch both.",
          "Add time estimates per block to keep a solo shoot from stretching.",
          "Use short reminder notes for the channel you cannot monitor.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-reusable-template",
    title: "Building a Reusable Shot List Template That Ships Fast",
    excerpt:
      "A reusable shot list template turns planning into a ten minute habit. Design it once, then adapt the rows to each project instead of starting blank.",
    date: "2033-08-14",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A reusable shot list template turns planning into a short habit instead of a blank page problem. You build the skeleton once, then every new project starts half planned before you write a single row.",
          "The template is not a list of shots. It is the columns, the categories, and the prompts that stop you from forgetting the same things on every shoot.",
        ],
      },
      {
        heading: "What belongs in the skeleton",
        paragraphs: [
          "The header matters more than it looks. Location and weather backup force you to name a plan B before the day arrives. Project and date keep versions straight when you are three drafts deep.",
        ],
        bullets: [
          "Header fields for project, date, location, and weather backup.",
          "Rows for shot number, scene, subject, angle, lens, movement, and reason.",
          "A standing safety section for the wide, the cutaway, and the handle.",
          "A checklist footer for cards, batteries, and sound.",
        ],
      },
      {
        heading: "Build it from your last three shoots",
        paragraphs: [
          "The best template comes from your own mistakes, not from a download. Look at your last three edits and write down every shot you wished you had. Those become rows in the safety section.",
          "Look at what you always shoot well and rarely need. Those become optional rows you can strike. Over time the template reflects how you actually work rather than how a stranger thinks you should.",
        ],
      },
      {
        quote:
          "A template is memory you do not have to carry. It holds the boring parts so your attention can stay on the scene.",
      },
      {
        heading: "Adapt, do not obey",
        paragraphs: [
          "The template should bend to the project, not the other way around. A talking head video and a product demo share a skeleton but not a body. Keep the frame and swap the organs.",
          "Version it. Save a copy per format: interview, tutorial, vlog, product. Each copy drifts toward what that format needs, and you stop re-deciding the same structure every week.",
        ],
      },
      {
        heading: "Keep it short enough to use",
        paragraphs: [
          "A template that runs four pages will not be opened on a busy morning. Favor fewer fields you always fill over many fields you sometimes skip. The best template is the one you actually reach for.",
          "Print it, or keep it open on a phone you can glance at between takes. A plan you cannot see on set is just a document.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A template fixes the columns and prompts so each project starts half planned.",
          "Build it from shots you missed on past edits, not from a download.",
          "Keep a standing safety section for wide, cutaway, and handle.",
          "Save per format copies for interviews, tutorials, vlogs, and demos.",
          "Short beats thorough because a long template never gets opened.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-check-off-while-filming",
    title: "Checking Off Your Shot List While You Film Without Stress",
    excerpt:
      "Checking off your shot list while you film keeps you honest without slowing the day. Simple marking habits beat a perfect list you never touch on set.",
    date: "2033-08-17",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Checking off your shot list as you film keeps the plan honest without slowing the day down. A mark next to a row is proof you have it, and proof is the thing that lets you leave a location without doubt.",
          "The habit only works if marking is faster than forgetting. If ticking a box takes more effort than the shot itself, you will stop doing it by lunch.",
        ],
      },
      {
        heading: "Make the mark cheap",
        paragraphs: [
          "A pen and a printed page beat an app you have to poke at with a glove on. If you shoot digitally, a text file you keep open works fine. The point is that marking takes under a second.",
          "Use a simple system: a check for shot, a dot for attempted but compromised, a strike for skipped on purpose. That tiny vocabulary tells you at a glance what still needs attention when the light is fading.",
        ],
      },
      {
        heading: "The end of day sweep",
        paragraphs: [
          "Checking off during the day is not enough on its own. Before you power down, walk the list one more time and read it against the cards. The mind plays tricks after six hours, and a shot you remember grabbing may exist only in the plan.",
          "The sweep catches the row you told yourself you would do after lunch. It also catches the shot you marked as good but shot at the wrong frame rate. Reviewing footage on the spot is the only cheap moment to notice.",
        ],
      },
      {
        quote:
          "A list nobody marks is a wish. A list marked as you go is a receipt. Only one of them lets you leave in peace.",
      },
      {
        heading: "Do not let the list run the day",
        paragraphs: [
          "Checking off is a record, not a command. Some shots will stop being necessary once you see the location. Others will appear that the list never imagined. Mark what you actually did, including the shots you improvised.",
          "An improvised shot that works deserves a row written by hand. That row is how the list learns. Next time the same location comes up, you will not have to rediscover the angle you found by accident.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark shots as you go, but keep marking faster than forgetting.",
          "Use a small vocabulary: check, dot for compromised, strike for skipped.",
          "Sweep the list against your cards before you leave the location.",
          "A marked list is a record, not a command, so note improvised shots too.",
          "Handwritten rows help the list improve for the next shoot.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-safety-shots",
    title: "Safety Shots: Covering Yourself on Every Scene",
    excerpt:
      "Safety shots are the cheap insurance that saves an edit. Plan a wide, a cutaway, and a handle for every scene so a mistake never ends the project.",
    date: "2033-08-20",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Safety shots are the cheap coverage you grab so a single mistake cannot ruin an edit. They are not exciting, they are not the reason the video works, and they are the difference between a rough cut and a rescheduled reshoot.",
          "A safety shot is any footage that covers a problem: a wide of the whole scene, a cutaway of hands or environment, a few extra seconds of a take held before and after. None of it is glamorous. All of it is freedom.",
        ],
      },
      {
        heading: "The problem a safety shot solves",
        paragraphs: [
          "You cannot cut a scene if the only angle you have shows a boom in frame or a line flubbed at the worst moment. Editors need alternatives. A safety wide lets you leave a bad close up and keep the audio underneath.",
          "A cutaway covers a jump cut, a continuity error, or a moment where the subject glances at the lens. Without one, the editor is stuck with the mistake and has to leave it in.",
        ],
      },
      {
        quote:
          "Nobody praises a safety shot in the final cut. They just notice when it is missing, because the edit limps.",
      },
      {
        heading: "Which safeties to plan",
        bullets: [
          "A clean wide of every scene with no movement and steady sound.",
          "A cutaway set of the environment: hands, doors, windows, tools.",
          "A handle of five seconds before and after each take.",
          "A room tone recording of at least thirty seconds per location.",
          "A second take of any line that felt risky, from the same mark.",
        ],
      },
      {
        heading: "Grab them without breaking the day",
        paragraphs: [
          "Safety coverage should cost minutes, not hours. Set the wide once and let it roll while the scene plays. Cutaways can be gathered in a single pass at the end of each block when the light is already set.",
          "Room tone is the easiest one to forget and the most painful to miss. It is the connective tissue that hides audio edits. Record it before the crew starts packing, because silence on location is never really silent once people start moving.",
        ],
      },
      {
        heading: "Do not use safety as an excuse",
        paragraphs: [
          "A safety shot is not a substitute for a good primary take. If you lean on coverage to fix weak planning, you end up with a folder of options and no scene. Grab safeties after the planned shots, not instead of them.",
          "The discipline is simple: shoot what you planned, then shoot the insurance. In that order, the safeties stay cheap and the scene stays strong.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Safety shots are inexpensive coverage that protect an edit from one bad take.",
          "Plan a clean wide, cutaways, handles, room tone, and a backup take.",
          "Gather safeties after the planned shots so they cost minutes, not hours.",
          "Record room tone before anyone breaks down the location.",
          "Use safeties as insurance, never as a replacement for a strong primary take.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-interviews",
    title: "Shot Lists for Interviews and Talking Heads on Camera",
    excerpt:
      "Shot lists for interviews keep talking heads from looking flat. Plan the angles, cutaways, and B-roll before the subject sits down in front of the lens.",
    date: "2033-08-23",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Shot lists for interviews keep a talking head from looking like a webcam call. The subject sits once, but the camera should come away with several angles, cutaways, and B-roll so the edit has somewhere to go when the answer runs long.",
          "An interview is not one shot. It is coverage of a conversation, planned in advance so the room does not go stale while you improvise your next angle.",
        ],
      },
      {
        heading: "The standard interview setup",
        bullets: [
          "Two cameras at matched focal lengths for clean cutting between them.",
          "One tighter angle for emphasis on a key line.",
          "One wide of the subject in the space for context.",
          "Hands, face details, and props as cutaways.",
          "B-roll of the environment and the subject doing the thing they describe.",
        ],
      },
      {
        paragraphs: [
          "Two cameras at the same distance give you matched framing, which means cuts between them feel invisible. Add a third at a different distance and you have a rhythm: wide for context, medium for the answer, tight for the moment the voice drops.",
          "If you only have one camera, plan to shoot the interview twice in framing terms. Run the whole thing on the medium, then ask for a few key answers again on the tight. Same words, second angle, and now you can cut.",
        ],
      },
      {
        quote:
          "An interview without coverage is a recording. Coverage is what makes it a scene.",
      },
      {
        heading: "Plan before the subject sits",
        paragraphs: [
          "Do your shot list before your guest arrives. Once they are in the chair, every minute you spend moving a light is a minute their energy drains. The list keeps that window short.",
          "Decide the eyeline and the background first, because those lock the room. Eyeline toward you makes the subject look at the interviewer. Eyeline just off camera makes them look like they are thinking to themselves. The list should state which, so the cameras match.",
        ],
      },
      {
        heading: "B-roll and cutaways",
        paragraphs: [
          "B-roll covers the moments where you must trim. If the subject repeats themselves or pauses for ten seconds, a cutaway hides the edit. Plan a list of B-roll that shows what they are describing, not just pretty filler.",
          "Ask permission to film during the setup, while they open a laptop or pour a coffee. Hands doing a task are the most versatile cutaways you can own, and they cost you nothing extra.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat an interview as coverage of a conversation, not a single shot.",
          "Match two cameras at the same distance so cuts between them disappear.",
          "With one camera, run the medium then repeat key answers on the tight.",
          "Fix eyeline and background before the subject sits down.",
          "Gather hands and task B-roll during setup for free cutaways.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-keep-it-flexible",
    title: "Keeping a Shot List Flexible Without Losing It",
    excerpt:
      "Keeping a shot list flexible means knowing what is fixed and what is open. Here is how to hold the plan loosely enough that good accidents survive.",
    date: "2033-08-26",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Keeping a shot list flexible means knowing which rows are fixed and which are open. The fixed ones protect the scene. The open ones leave room for the accident that turns a competent video into a memorable one.",
          "A rigid list and a loose list are both failures, in opposite directions. One ignores what the location offers. The other forgets what the video needs.",
        ],
      },
      {
        heading: "Sort rows into must, should, and could",
        paragraphs: [
          "A must shot is one the edit cannot survive without. A should shot improves the scene but has a substitute. A could shot is a luxury you grab if time allows. Mark them on the page and you can make decisions in seconds when the day slips.",
          "When the schedule tightens, cut from the bottom. You drop could shots first, then should shots, and you protect the must list with everything you have. That order is the entire value of the ranking.",
        ],
      },
      {
        quote:
          "Flexibility is not the absence of a plan. It is a plan with the importance of each row already decided.",
      },
      {
        heading: "Leave room for the location",
        paragraphs: [
          "A location will offer shots you did not imagine. A reflection, a doorway, a patch of light that lands in a corner at four in the afternoon. If the list is packed to the minute, those gifts have nowhere to live.",
          "Build small windows into the schedule. A blank row labeled open is permission to follow what the place gives you. Creators who shoot the same angle every time are not lacking skill. They are lacking room to notice.",
        ],
      },
      {
        heading: "Change the plan out loud",
        paragraphs: [
          "When a shot stops making sense, say so and cross it out. Quietly skipping rows is how a list rots. Naming the change keeps the crew aligned and keeps the document accurate for the next shoot.",
          "Keep a small note of what you changed and why. A list marked up over a shoot becomes a more honest plan for the next time you stand in the same room.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Split rows into must, should, and could so you can cut fast under pressure.",
          "Protect the must list and drop luxuries first when the day slips.",
          "Leave open windows for shots the location offers unasked.",
          "Cross out rows out loud so the crew stays aligned.",
          "Notes about changes make the next version of the list better.",
        ],
      },
    ],
  },
  {
    slug: "shot-list-over-planning-pitfalls",
    title: "The Pitfalls of Over-Planning Your Shot List on Set",
    excerpt:
      "Over-planning a shot list can strangle a shoot. Learn where structure helps, where it hurts, and how to plan enough to move fast without rigid rows.",
    date: "2033-08-29",
    author: { name: "GoScript Team", role: "Craft" },
    tags: ["pre-production", "planning", "filming"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Over-planning a shot list strangles a shoot the same way under-planning does. The list stops being a tool and becomes a script with no room for the scene, and you spend the day serving rows instead of making a video.",
          "The line is not about how long the list is. It is about whether the list answers questions or creates them. A good plan removes doubt. An overbuilt one adds homework.",
        ],
      },
      {
        heading: "Signs the list has grown too heavy",
        bullets: [
          "Every shot is written as a paragraph with staging notes.",
          "The schedule has no gaps and no fallback.",
          "You cannot mark a shot as optional because all of them feel mandatory.",
          "You are planning shots for scenes you have not read in the actual script.",
          "The list takes longer to build than the shoot itself.",
        ],
      },
      {
        paragraphs: [
          "The clearest signal is fear. If the list exists to guarantee no mistake, it will also guarantee no discovery. A shoot with no room to fail has no room to surprise you, and surprise is often the only thing the viewer remembers.",
          "Planning is meant to free attention, not consume it. When the list demands your focus on set, it has stopped doing its one job.",
        ],
      },
      {
        quote:
          "Plan enough to move fast. Plan so much that you cannot move at all and you have built a cage, not a shot list.",
      },
      {
        heading: "The cost of the perfect plan",
        paragraphs: [
          "An overstuffed list makes every deviation feel like failure. The operator who should grab a better angle hesitates because it is not on the page. The scene that wants a different ending gets forced back into the written one.",
          "It also hides the real risk. A plan with two hundred rows looks thorough while missing the one question that matters: is any of this interesting? Volume is not the same as thought.",
        ],
      },
      {
        heading: "Where to stop",
        paragraphs: [
          "Stop adding rows when the remaining questions can be answered by looking through the lens. Stop scheduling when the day has no cushion. Stop writing when you cannot tell a must shot from a could shot.",
          "Keep the plan thin enough to carry in your head and detailed enough to trust. The best lists I have used fit on one page and left me free to chase the thing I saw out of the corner of my eye.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Over-planning turns the list from a tool into a cage.",
          "Watch for paragraph long shots, zero scheduling gaps, and fear-driven detail.",
          "A plan with no room to fail has no room to surprise.",
          "Volume in the list is not the same as thought about the scene.",
          "Stop when the remaining questions need the lens, not the page.",
        ],
      },
    ],
  },
];
