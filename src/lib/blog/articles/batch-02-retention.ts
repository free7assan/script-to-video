import { Activity, Repeat, Waves, Scissors, Flag, Film, TrendingUp, Clock, Search, PenLine } from "lucide-react";
import type { BlogPost } from "../types";

export const batch02: BlogPost[] = [
  {
    slug: "retention-beat-density-pacing",
    title: "Pacing Is About Beat Density, Not Cuts Per Minute",
    excerpt:
      "Cuts per minute tell you almost nothing about pace. Beat density, the rate at which something changes for the viewer, is the number that actually decides whether a video drags.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "pacing", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "Most creators measure pacing with the wrong instrument. They count cuts per minute, or scrub the editing timeline, or watch their own video at double speed to check whether it drags. None of that tells you whether the story is moving. A video can have forty cuts a minute and feel frozen, and it can hold one static shot for nine minutes and grip like a vice.",
          "Pacing is beat density. A beat is any moment where something changes for the viewer: a question gets answered, a stake rises, a new piece of information lands, a character wants something they did not want a sentence ago. If two minutes pass without a change, the viewer feels it even if they cannot name it.",
        ],
      },
      {
        heading: "What counts as a beat",
        paragraphs: [
          "Beats are not edits, and they are not sentences. They are units of change the viewer can track. 'I tried this for a week' is not a beat until we know what happened. 'I tried this for a week and lost three hundred subscribers on day two' is a beat, because something moved.",
          "The common mistake is treating information as a beat. Dumping ten facts in a row is one beat repeated ten times. The viewer's brain registers a steady state and starts looking for the exit. Density comes from alternating what changes, not from volume.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A video stops feeling slow the moment something keeps changing. Pace is a property of the story, not the timeline.",
      },
      {
        heading: "Auditing beat density in a script",
        paragraphs: [
          "Take your last video's script and mark every line where something changes for the viewer. Not every line where you say something. Changes only. If you can go four or five lines without a mark, that stretch is a candidate for compression.",
          "Then time the gaps. In a talking-head video, a beat roughly every eight to fifteen seconds holds attention. In a narrative or documentary piece you can stretch to thirty or forty seconds if the tension is carrying the viewer. The number is not sacred; the absence of change is the problem.",
        ],
      },
      {
        heading: "Density without panic",
        bullets: [
          "Compress the setup. The fastest way to raise beat density is to cut the runway before the first change.",
          "Split compound beats. If one line delivers two changes, check whether they land better separated.",
          "Cut repeated beats. Three examples of the same point is one beat, not three.",
          "Add a stake instead of a tangent. A new direction still has to matter to the same question.",
        ],
        paragraphs: [
          "None of this means cutting for the sake of speed. Some of the best moments are slow on purpose: a long pause before a reveal, a held shot while a realization lands. Slow works when the viewer knows something is coming. It fails when nothing is coming and the script is filling time.",
        ],
      },
      {
        heading: "Where beat density pays off",
        paragraphs: [
          "You can feel the difference in the analytics later, but you can feel it in the script first. When beats are dense, writing the next line is easier because the previous line is still doing work. When beats are thin, every sentence has to invent its own momentum, and that is when scripts start to read like a list of things you researched.",
          "Write the beats before you write the words. A one-page beat sheet, change after change, is often all the structure a ten-minute video needs. The prose is decoration on a skeleton that was already moving.",
        ],
      },
    ],
  },
  {
    slug: "retention-section-transitions-rehooks",
    title: "Transitions Are Re-Hooks: How to Keep Sections Airborne",
    excerpt:
      "Viewers leave at seams, not mid-sentence. Close one loop and open the next in the same breath, and the whole video stops feeling like it has exits.",
    date: "2024-05-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Every section of a video is a small video, and every small video has its own exit. Viewers do not leave at random. They leave at seams: the moment a section ends and the next one begins, when the tension you built has been spent and the next promise has not yet been made. Transitions are where retention quietly bleeds out.",
          "Most creators treat transitions as connective tissue, a sentence or two that gets you from point A to point B. That is a wasted opportunity. A transition is the cheapest place in the script to plant the next reason to stay.",
        ],
      },
      {
        heading: "The spent-tension problem",
        paragraphs: [
          "When you answer the question a section posed, the viewer gets a small hit of closure. Closure is dangerous. It is the feeling of 'I got what I came for,' and the brain uses that feeling to justify leaving, especially if the next section opens with a fresh setup they did not ask for.",
          "The fix is to close one loop and open the next in the same breath. Do not let the viewer breathe in the gap. 'That is how the ranking works. But it only pays off if your first ten seconds earn the watch, which is a different problem.' The closure and the next promise share a sentence.",
        ],
      },
      {
        heading: "Transition shapes that hold",
        bullets: [
          "The question handoff. End a section with the question the next one answers, so the viewer exits one into the other.",
          "The contradiction. Close on a fact, then undercut it: 'Except it did not work for anyone under ten thousand subscribers.'",
          "The escalation. Take the result you just delivered and raise the stakes attached to it.",
        ],
        paragraphs: [
          "Pick the shape that fits the material. The question handoff is the safest. The contradiction works when you have a real edge case. Escalation works when the section ended on a number or a result that can be pushed further.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Viewers do not leave in the middle of a good section. They leave in the half-second between one section ending and the next one earning them.",
      },
      {
        heading: "Writing transitions before they feel needed",
        paragraphs: [
          "Transitions fail because they are usually written last, as glue, after the sections are done. Write them first. When you outline a five-section video, draft the last line of each section as the promise the next section has to fulfill.",
          "Do this and you get a chain: each section ends by making the next one necessary. Read the last lines of every section back to back. If they read as a complete argument on their own, your transitions are working. If any of them reads like a period, rewrite it into a comma.",
        ],
      },
      {
        paragraphs: [
          "A good transition does not announce itself. Nobody should notice the machinery. They should just find that they never quite reached for their phone, because every time a thought finished, another one was already pulling. That is the whole trick, and it lives in one or two sentences per section.",
        ],
      },
    ],
  },
  {
    slug: "retention-mid-video-sag-fix",
    title: "The Mid-Video Sag: Diagnosing the Ten-Minute Cliff",
    excerpt:
      "The middle third of a long video sags for predictable reasons. Find the moment your original question goes quiet, and you have found the cliff.",
    date: "2024-08-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "pacing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Open the retention graph on almost any video longer than eight minutes and you will see the same shape. A steep drop in the first thirty seconds, a slow decline through the setup, then a cliff somewhere in the middle third. That cliff is the sag, and it shows up so reliably that you can plan around it before you publish.",
          "The sag is not a mystery. It is the point where the initial question has been partially answered, the payoff is still far away, and the viewer has run out of reasons to keep going. The video is still good. It is just no longer urgent.",
        ],
      },
      {
        heading: "Why the middle fails",
        paragraphs: [
          "Intros run on curiosity. Endings run on payoff. The middle runs on promise alone, and promise is the weakest fuel of the three. If your middle is a list of supporting points, the viewer has to trust that the list matters. Most will not extend that trust for four minutes.",
          "A middle section usually sags because it is doing work the viewer did not ask for: context, background, definitions, the history of the topic. All of it may be worth including. None of it is why anyone clicked.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The middle of a video is not where you prove you are right. It is where you keep the question alive long enough for the answer to matter.",
      },
      {
        heading: "Repairs that work",
        bullets: [
          "Move the payoff earlier and make the middle a consequence. If the answer is at minute eleven, tease it at minute four and let the middle show what it costs.",
          "Install a midpoint turn. Introduce a new problem, a reversal, or a second question around the halfway mark.",
          "Cut the context you can imply. If a sentence of setup can be shown in a graphic or a two-second clip, do that and reclaim the minute.",
        ],
      },
      {
        heading: "Finding your sag before your viewers do",
        paragraphs: [
          "Read your outline and mark the moment the original question stops being the loudest thing in the video. That mark is usually within thirty seconds of the sag. Watch the transcript around it and ask what the previous minute actually delivered. If the answer is 'context,' you have found the culprit.",
          "You can also test it cheaply. Publish a version where the middle is trimmed by twenty percent and compare the retention curve at the same timestamp. Same topic, same intro, shorter middle. The graph will tell you whether the sag was padding or substance.",
        ],
      },
      {
        paragraphs: [
          "Fixing the sag is rarely about adding energy. It is about removing the parts that asked the viewer to wait without giving them something to hold. Cut the waiting, keep the question, and the cliff flattens.",
        ],
      },
    ],
  },
  {
    slug: "retention-pattern-interrupts-not-gimmicky",
    title: "Pattern Interrupts That Never Feel Like a Gimmick",
    excerpt:
      "Zoom sounds and jump cuts interrupt the pattern and also teach the viewer that your video is noise. Real interrupts change the mode of attention, not just the frame.",
    date: "2025-01-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "pacing", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Pattern interrupts get a bad reputation because the visible ones are terrible. A random zoom, a meme sound, a jump cut every two seconds. These do interrupt the pattern, which is the point, and they also teach the viewer that the video is noisy. The interruption becomes its own predictable pattern, and predictable is exactly what we were trying to escape.",
          "A useful interrupt changes the viewer's mode of attention, not just the frame. It gives the brain something new to do. The test is whether the interrupt serves the content or covers for the lack of it.",
        ],
      },
      {
        heading: "Interrupts that carry meaning",
        bullets: [
          "Change the format: shift from talking head to screen recording when the explanation gets concrete.",
          "Change the register: drop from narration to a raw clip of you reacting in real time.",
          "Change the pace: follow three fast beats with one long, quiet one.",
          "Change the source: cut to a viewer comment or a direct quote when the claim needs proof.",
        ],
      },
      {
        paragraphs: [
          "Every one of those changes what the viewer is doing. They are not decorating the content. They are the content changing clothes. When the format shifts because the subject shifted, nobody notices a trick. They notice that the video understood what it was talking about.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A pattern interrupt should feel like the video taking a breath, not like someone leaning over and shaking you.",
      },
      {
        heading: "The gimmick test",
        paragraphs: [
          "Mute the interrupt. If muting it loses nothing, it was decoration. Remove it. If the point it made disappears with it, it was doing work.",
          "Then ask whether you could predict it. If you can guess the next zoom, the next sound, the next cut, the interrupt has become wallpaper. Wallpaper is not an interrupt; it is a texture the viewer stops seeing.",
        ],
      },
      {
        paragraphs: [
          "The best pattern interrupts are almost invisible in the script. They show up as a beat where the energy changes, a question that flips the direction, a clip that reframes everything before it. They are written, not edited in later. When you find yourself reaching for a sound effect to fix a flat section, the flat section is the real problem.",
        ],
      },
    ],
  },
  {
    slug: "retention-ending-resolution-vs-aftermath",
    title: "End on the Aftermath, Not Just the Resolution",
    excerpt:
      "Most videos stop at the answer. The stronger ending lingers in the aftermath, where the answer turns into a point of view worth subscribing to.",
    date: "2025-03-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Most videos end at the resolution. The question gets answered, the experiment concludes, the point lands, and the creator says thanks for watching. That is a complete video. It is also, too often, a forgettable one.",
          "The ending is the last impression and the last chance to earn a follow, a like, or the next click. Resolution closes the loop. Aftermath shows the viewer what the closure meant, which is a different and more durable thing.",
        ],
      },
      {
        heading: "Resolution is a fact; aftermath is a feeling",
        paragraphs: [
          "Resolution answers 'what happened.' Aftermath answers 'so what, and now what.' A resolution is the last domino falling. Aftermath is the creator turning to the camera to say what it cost, what they would do differently, or what it changes about everything you just watched.",
          "When a video stops at the answer, the viewer's takeaway is information. When it lingers in the aftermath, the takeaway is a point of view. Points of view are what people subscribe for.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The answer is not the ending. The answer is the last thing that happens before the ending.",
      },
      {
        heading: "Ways to write an aftermath",
        bullets: [
          "Zoom out and name the lesson, then qualify it with the one case where it fails.",
          "Show the cost. What did the result require you to give up or risk?",
          "Look forward. What does this change about the next decision or the next video?",
          "Hand it back. Ask the viewer where they have seen the same pattern in their own work.",
        ],
      },
      {
        paragraphs: [
          "Do not do all four. Pick the one that matches the emotional temperature of the piece. A dry experiment earns a qualified lesson. A personal story earns the cost. A tutorial earns the forward look.",
          "One caution: aftermath is not a recap. Repeating what the video already said is filler dressed as a conclusion. The aftermath has to add something the viewer did not already have.",
        ],
      },
      {
        paragraphs: [
          "Test your endings by reading the last thirty seconds out loud. If it feels like a summary, it is resolution only. If it feels like the creator has one more thought they cannot leave unsaid, you have found the aftermath. That is the version people quote in the comments.",
        ],
      },
    ],
  },
  {
    slug: "retention-editing-choices-protect-retention",
    title: "Editing Choices That Quietly Protect Retention",
    excerpt:
      "Retention is mostly writing, but editing can bury a good script or save a marginal one. The edits that matter are the quiet ones that remove friction.",
    date: "2025-06-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "analytics", "pacing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Retention is mostly a writing problem, but editing can save a marginal script or bury a good one. The choices that protect retention are rarely flashy. They are small, structural, and cumulative, and most of them come down to removing friction between the viewer and the next idea.",
          "By friction I mean anything that makes the viewer spend attention on something other than the content: a confusing cut, a graphic they cannot read in time, a music bed that fights the narration, a silence that reads as a technical glitch.",
        ],
      },
      {
        heading: "Keep the audio ahead of the eye",
        paragraphs: [
          "The single most reliable editing rule I know: the viewer should hear what matters before or as they see it, never after. If a graphic appears and the narration explains it two seconds later, those two seconds are dead air. The brain is waiting.",
          "Cut your visuals to the narration, not the other way around. When a new concept is introduced, the audio carries it and the visual confirms it. Confirmation is fast and satisfying. Explanation is slow and costs attention.",
        ],
      },
      {
        heading: "Small edits, real retention",
        bullets: [
          "Trim the dead air at the head of every clip. Half-seconds add up to minutes across a long video.",
          "Hold b-roll slightly longer than feels comfortable so the voice stays continuous.",
          "Keep one music bed for a section, then change it at a beat, not at random.",
          "Cut graphics that need more than three seconds to read; nobody pauses to study your chart.",
        ],
      },
      {
        paragraphs: [
          "None of these edits draw attention to themselves, which is why they work. The viewer never thinks 'nice edit.' They just do not get pulled out of the video, and not getting pulled out is the whole job.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The best retention edit is the one the viewer never notices, because they never had a reason to look away.",
      },
      {
        paragraphs: [
          "Editing cannot invent a reason to stay. If the script has no momentum, tight cuts just deliver nothing faster. But when the script is solid, these choices keep the viewer moving from beat to beat without stalling, and stalling is where curves bend.",
          "Treat the timeline as a place to protect a decision you already made in the script, not a place to make that decision for the first time.",
        ],
      },
    ],
  },
  {
    slug: "retention-flat-line-trap",
    title: "The Flat-Line Trap: Watchable but Completely Forgettable",
    excerpt:
      "A flat retention curve looks like success until you check engagement. Watchable and forgettable is its own kind of failure, and it hides from the numbers you check first.",
    date: "2025-09-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "analytics"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "There is a failure mode that hides from analytics. The video holds. The retention curve is a gentle slope, no cliffs, no spikes. Average view duration is decent. And it does almost nothing for the channel. No comments worth replying to, no new subscribers, no shares. Watchable and forgettable at the same time.",
          "This is the flat-line trap. A flat curve can mean a video that never offends, never surprises, and never gives anyone a reason to feel something. Consistency is not the same as engagement, and a curve that never dips can also never peak.",
        ],
      },
      {
        heading: "Why flat curves lie",
        paragraphs: [
          "A steep drop is feedback. A flat line is a shrug. The retention graph tells you people stayed; it does not tell you whether they cared. You can hold an audience with competence alone, and competence is the floor, not the ceiling.",
          "The numbers that expose the trap are the engagement ones. Watch time per view, likes, comments, subscribers gained, repeat viewers. A high-retention video with flat engagement is usually a video that was fine.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A flat retention curve is not a compliment. Sometimes it is just a room full of people politely waiting to leave.",
      },
      {
        heading: "What breaks the flat line",
        bullets: [
          "Take a real position. A video that argues for something will lose some people and galvanize others.",
          "Include one moment that could be clipped and shared on its own, not as a highlight reel but as a real point.",
          "Answer a question the audience already argues about in the comments.",
          "Show the failure, not only the polished result.",
        ],
      },
      {
        paragraphs: [
          "Each of those does the same thing: it gives the video a shape. Peaks and valleys come from stakes. If nothing is at risk, the viewer has nothing to root for, and a viewer with nothing to root for does not comment, subscribe, or return.",
        ],
      },
      {
        paragraphs: [
          "Do not optimize for a perfectly flat curve. Optimize for a video worth reacting to, then let the curve look however it looks. Some of the best-performing videos have ugly retention graphs, because the people who stayed stayed hard. I would take a spiky, opinionated forty percent over a polite, forgettable fifty-five.",
        ],
      },
    ],
  },
  {
    slug: "retention-intros-first-thirty-seconds",
    title: "Why Your First Thirty Seconds Still Waste Viewers",
    excerpt:
      "The hook wins the click. The next thirty seconds decide whether anyone stays. Here is where that half minute goes and how to reclaim it in the rewrite.",
    date: "2026-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure", "pacing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Everyone obsesses over the first three seconds, and they should. But there is a second window that gets far less attention and costs just as much: the thirty seconds after the hook. Plenty of videos win the click and then spend half a minute explaining, hedging, or introducing themselves.",
          "That half minute is not neutral. Retention is cumulative, and every second you spend on setup is a second the viewer is not getting the thing they clicked for. By the time the video starts, you have already paid a tax you did not need to pay.",
        ],
      },
      {
        heading: "Where thirty seconds goes",
        paragraphs: [
          "Watch your last video from second three to second thirty and count how much of it the viewer could not have known from the thumbnail and title. Anything they already knew is wasted.",
          "Most of that waste takes a few recognizable forms. The welcome-back housekeeping speech. The definition the topic did not require. The montage of what is coming, which spoils the payoff and delivers none of it.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Win the click, then earn the next second. The hook gets you in the room; the following thirty seconds decide whether anyone sits down.",
      },
      {
        heading: "What belongs in the first thirty seconds",
        paragraphs: [
          "The fix is not to rush the hook. It is to make the second beat of the video as load-bearing as the first. Whatever the curiosity gap promised, start paying it immediately, even in small installments.",
          "Open on the result, the strongest clip, or the single most surprising fact, then pull back to explain how you got there. Let the explanation arrive as a reward rather than as a prerequisite. Save the identity and the housekeeping for the end, where they are a natural next step instead of a toll gate.",
        ],
      },
      {
        heading: "A thirty-second audit",
        bullets: [
          "Does the viewer learn something new between second three and second thirty?",
          "Could the thumbnail and title have told them everything you say in that stretch? Cut what they already know.",
          "Does the video promise a specific payoff, then postpone it just long enough to feel earned rather than withheld?",
          "If a stranger watched only the first thirty seconds, could they describe the video in one sentence?",
        ],
      },
      {
        paragraphs: [
          "Run the audit on your next draft before you publish. Most people find ten to fifteen seconds they can move or delete. Reclaim those seconds and the whole curve gets a little flatter in the right direction, which is to say it stops falling.",
        ],
      },
    ],
  },
  {
    slug: "retention-predicting-drop-points",
    title: "How to Predict Drop Points Before You Publish",
    excerpt:
      "Your drop points are visible in the script before they show up on the graph. Learn the pattern, score the draft, and fix the leaks while fixing is still cheap.",
    date: "2026-05-06",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "analytics", "pacing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Retention curves are usually read after the fact, as a postmortem. That is wasteful. The drop points you will see on the graph are almost always visible in the script first, if you know what to look for. You can predict them before you publish, and prediction is what lets you fix them while fixing is still cheap.",
          "The trick is not a tool or a model. It is learning to feel where attention will be asked to do unpaid work.",
        ],
      },
      {
        heading: "The predictable culprits",
        bullets: [
          "Any stretch where the script explains something the viewer did not ask about yet.",
          "The moment after a major payoff, when the initial question has been answered.",
          "A sponsor or housekeeping segment that interrupts a rising beat instead of following a resolution.",
          "A list of examples where each one repeats the previous point instead of adding a new one.",
        ],
      },
      {
        paragraphs: [
          "These are not guesses. They are the same places drops show up across nearly every channel I have looked at. Learn the pattern and you can scan a script in five minutes and find the soft spots.",
          "Read with a simple question at every line: what is the viewer getting right now? If the honest answer is 'waiting,' mark it. Mark enough of those and your predicted drop points start to look like your actual ones.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "If you cannot say what the viewer gains from the next thirty seconds, neither can they, and they will leave to find something that answers the question.",
      },
      {
        heading: "Scoring the draft",
        paragraphs: [
          "Give each minute a score from one to five for the strength of its reason to stay. A five is a reveal or a turn. A one is context. Chart the scores and you get a fake retention curve before you even record.",
          "Then fix the ones. Move a reveal earlier, cut a context block, or add a stake to a flat minute. Rerun the score. What you are really doing is getting a second attempt at a test that, on YouTube, you only get once.",
        ],
      },
      {
        paragraphs: [
          "Prediction will not be perfect. Some drops come from delivery, thumbnail-to-content mismatch, or an audience that simply did not want this topic. But most come from the script, and most of those are fixable before the camera turns on. That is a much better place to spend an hour than staring at analytics next week.",
        ],
      },
    ],
  },
  {
    slug: "retention-script-problem-not-editing",
    title: "Retention Is a Script Problem, Not an Editing Problem",
    excerpt:
      "You can tighten the edit forever and still lose viewers. If the script never gave them a reason to stay, no cut rate will save it.",
    date: "2026-09-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure", "analytics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "When a video underperforms, the first instinct is to blame the edit. More cuts, more movement, better sound design. Those things help at the margin. They do not fix the core problem, which is almost always that the script gave the viewer no reason to keep watching.",
          "Editing controls how a video feels. Writing controls whether there is anything to feel. No amount of pace rescues a script with no tension, and no pacing change fixes a section that has no reason to exist.",
        ],
      },
      {
        heading: "What editing can and cannot do",
        paragraphs: [
          "Editing can remove friction. It can tighten dead air, fix a confusing sequence, or make a strong point land harder. What it cannot do is invent stakes the script never set up, or manufacture curiosity about a question that was never asked.",
          "If the viewer is bored, that is information about the script. Editing a bored viewer into a patient one is not a thing that happens.",
        ],
      },
      {
        heading: "Symptoms that point to the script",
        bullets: [
          "People leave right after a payoff because the next section never opened a new loop.",
          "Comments ask questions the video answered, meaning it answered them too fast or buried them.",
          "Retention is high through the intro and drops the moment the actual topic starts.",
          "The video gets watched but not shared, a sign it informed without ever mattering.",
        ],
      },
      {
        paragraphs: [
          "Notice that none of those are fixed by cutting faster. They are fixed by writing differently: reordering, re-hooking, cutting whole sections, moving reveals earlier. That work happens before the timeline, not inside it.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "You cannot edit your way out of a script that never gave the viewer a reason to stay. You can only rewrite it.",
      },
      {
        paragraphs: [
          "The practical version of all this is a change in process. Draft, then read the script as a viewer and mark where you would leave. Fix those spots in the text. Only then open the editing software.",
          "Editing still matters. It is the difference between good and great. But it is not the difference between watched and abandoned. That one is decided by the script, and it is decided long before anyone touches a cut.",
        ],
      },
    ],
  },
];
