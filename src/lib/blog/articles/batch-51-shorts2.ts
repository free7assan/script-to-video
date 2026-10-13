import {
  Activity,
  Brain,
  Clock,
  Eye,
  Flame,
  Layers,
  Repeat,
  Scissors,
  Target,
  Type,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch51: BlogPost[] = [
  {
    slug: "shorts2-how-to-pace-hook-beats",
    title: "Pacing Hook Beats So Viewers Stay Past Three Seconds",
    excerpt:
      "Pace hook beats by volume, not speed. Give the first claim its own second, then stack proof fast so a Short never feels like a slow intro.",
    date: "2024-02-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "Pacing a hook is about when you say each thing, not how quickly you talk. A Short front-loads one claim, then spends the rest of its runtime proving that claim, and the order of those beats matters far more than the tempo.",
          "Most creators mistake speed for pacing. They speak faster, cut harder, and still lose the viewer at second four because they never decided which single idea deserved the opening slot. Rush without structure just sounds anxious.",
        ],
      },
      {
        heading: "Give the first claim its own beat",
        paragraphs: [
          "The opening sentence carries one idea and nothing else. If you fold a second thought into it, the viewer has to sort two things before deciding to stay, and sorting is work. Work is what they leave to avoid.",
          "I give that first line a full second of silence on either side in the edit. The pause makes the claim land as a claim instead of noise. Silence around a strong sentence is cheaper than adding music to a weak one.",
        ],
      },
      {
        quote:
          "A hook is a promise, and a promise made in a hurry sounds like a lie. Let the first beat breathe before you sprint.",
      },
      {
        heading: "Stack proof right after the promise",
        paragraphs: [
          "Once the claim lands, the next beats exist to support it. Evidence, a number, a quick scene, a reaction. Each one should tighten the case rather than open a new topic. New topics belong in a different video.",
          "The mistake I see most is a strong opening followed by context. Context is not proof. Nobody clicked a Short to learn the backstory, and the proof beats are where retention actually gets saved or lost.",
          "Keep each proof beat short. Two or three seconds apiece lets the viewer feel momentum without asking them to hold a long argument in their head.",
        ],
      },
      {
        heading: "Vary beat length on purpose",
        paragraphs: [
          "Uniform pacing is hypnotic in the worst way. When every sentence is the same length, the ear stops tracking and the thumb starts moving. Drop a short beat after two long ones and the change itself holds attention.",
          "I map beats as long, long, short, then a payoff. That rhythm reads as a small story even when the content is a tip. The shape does work the words alone cannot.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One claim owns the first beat, with silence around it.",
          "Proof comes next, never context.",
          "Keep proof beats to two or three seconds each.",
          "Break uniform rhythm with a deliberately short beat before the payoff.",
          "Read the script aloud and cut any beat the promise does not need.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-pattern-interrupt-timing",
    title: "When to Fire a Pattern Interrupt in a Short",
    excerpt:
      "A pattern interrupt works only at the moment attention sags. Time it to the retention dip, not the calendar, and the same trick keeps its power.",
    date: "2024-05-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "A pattern interrupt is a deliberate break in whatever the viewer expects, and it belongs at the point where attention sags. Fire it too early and it looks random. Fire it too late and the viewer has already left.",
          "You can find that moment without guessing. Watch the retention graph of a similar Short and note where the line bends down. That bend is where the next video should place its interrupt.",
        ],
      },
      {
        heading: "Interrupts need a pattern first",
        paragraphs: [
          "You cannot break a pattern that never formed. If the opening is a talking head at a desk, the interrupt might be a hard cut to a screen recording. The viewer has to be settled for the break to register as a break.",
          "This is why back-to-back interrupts flatten out. Two abrupt changes in a row leave nothing for the third to disrupt. Space them by at least ten or fifteen seconds so the eye can relax into the new normal.",
        ],
      },
      {
        heading: "Match the interrupt to the sag",
        paragraphs: [
          "A visual change fixes visual boredom. A tonal change fixes verbal boredom. If people drop during a list, cut the list and jump to the punchline. If they drop during a slow explanation, speed the edit and add movement.",
          "I keep three interrupts ready for any script: a cut to a new angle, a sudden sound cue, and a direct question to the viewer. Reaching for the wrong one looks like a tic, reaching for the right one looks like craft.",
          "The interrupt should also serve the content. A cut that only restarts attention wastes a beat you could have spent advancing the point.",
        ],
      },
      {
        quote:
          "The best interrupt never feels like a trick. It feels like the video finally got to the part you were waiting for.",
      },
      {
        heading: "Do not interrupt the payoff",
        paragraphs: [
          "The one place to resist the urge is the final reveal. Viewers forgive almost anything until the moment they are about to get the answer. Cutting away there reads as cheating and costs you the completion.",
          "Save the last four or five seconds for a clean, uninterrupted landing. The interrupt that carried them there has done its job. Let the ending be the one beat you refuse to break.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Place interrupts at the retention dip, not at fixed intervals.",
          "Let a pattern settle before you break it.",
          "Match the interrupt type to the kind of boredom.",
          "Keep at least ten to fifteen seconds between interrupts.",
          "Never cut away during the final payoff.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-loop-friendly-endings",
    title: "Writing Endings That Make a Short Loop",
    excerpt:
      "A loop friendly ending sends the viewer back to the first frame. Match the last line to the opening image and replays follow without extra edits.",
    date: "2024-09-07",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A loop friendly ending is one where the final second flows into the first, so a replay feels like the clip never stopped. Platforms reward rewatches, and a clean loop turns one view into two or three.",
          "You do not need a clever edit for this. The script decides it. When the last line answers the first line, the viewer's brain treats the rewind as continuation instead of repetition.",
        ],
      },
      {
        heading: "Write the close as a mirror of the open",
        paragraphs: [
          "If the Short opens with a question, close by restating it in the exact words. If it opens on a sound, end on the same sound. The repetition signals a finished circle, and a finished circle invites another pass.",
          "I keep the opening phrase in front of me while I write the last beat. The goal is not to repeat the meaning. It is to repeat the shape so the seam between end and start disappears.",
        ],
      },
      {
        heading: "Cut the sign-off",
        paragraphs: [
          "Thanks for watching kills loops. So does follow for more. Those lines tell the viewer the clip is over, which is the opposite of what a loop needs. The ending should feel like a beginning.",
          "Drop the outro entirely or replace it with a beat that points back. One creator I follow ends every science Short with the same three word phrase, and it lands as a callback rather than a farewell.",
          "The moment you announce the end, the thumb has permission to move. Silence and a cut back to frame one removes that permission.",
        ],
      },
      {
        quote:
          "If your last line could start the video again, you have written a loop. If it says goodbye, you have written a speed bump.",
      },
      {
        heading: "Test the seam frame by frame",
        paragraphs: [
          "Export the Short, then watch the last half second and the first half second back to back. If the transition jars, the loop breaks and the replay will feel accidental.",
          "Matching the visual tone at both ends fixes most of this. A dark closing frame and a bright opening frame fight each other even when the words match. Lighting and motion should agree across the seam.",
          "When the loop is clean, replays climb without you touching the algorithm. The viewer simply forgets to leave.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mirror the opening line or image in the final beat.",
          "Remove every sign-off and call to follow.",
          "Match visual tone across the last and first frames.",
          "Watch the seam at half speed to confirm the loop.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-cutting-dead-air",
    title: "Cutting Dead Air Without Killing the Hook",
    excerpt:
      "Dead air spends the first valuable seconds doing nothing. Trim silences and filler, keep the breath around the hook, and a Short starts moving sooner.",
    date: "2025-01-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Dead air is any stretch where the clip is not delivering a claim, a proof, or a feeling. Trim it and the same script suddenly fits a tighter runtime with more room for the parts that hold people.",
          "The counterintuitive part is that you should keep one specific pause. The silence right before the hook lands is not dead. It is the frame that makes the hook audible.",
        ],
      },
      {
        heading: "Hunt the filler words first",
        paragraphs: [
          "So, um, kind of, you know, basically. These eat whole seconds and add no meaning. Pull the waveform tight and they vanish without the viewer noticing the edit, because nobody was listening to them anyway.",
          "I do a dedicated filler pass before I touch anything else. It is mechanical work, so I can do it while tired, and it usually buys three to five seconds on a one minute clip.",
        ],
      },
      {
        heading: "Cut the silence between ideas",
        paragraphs: [
          "Every pause between two thoughts is a chance to leave. Keep a short breath for rhythm, then cut the rest. The gap between sentence one and sentence two can often halve without the speech sounding rushed.",
          "This is where the tempo of a Short gets set. A clip that moves from idea to idea with almost no gap feels dense and worth watching twice, while the same words with generous pauses feel like a podcast that got lost.",
          "Do not cut so hard that words collide. Leave a sliver of breath so the ear can separate one phrase from the next.",
        ],
      },
      {
        quote:
          "Dead air is not silence. Silence around a hook is a tool. Dead air is silence where nothing was happening.",
      },
      {
        heading: "Protect the pause before the payoff",
        paragraphs: [
          "Right before the reveal, hold a beat. The tiny delay creates anticipation and gives the answer a place to land. Cutting there to save a quarter second costs more attention than it buys.",
          "So the rule is simple. Remove pauses between ideas, and keep the one pause before the punch. The viewer reads that held breath as tension, and tension is what keeps them past the loop point.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Strip filler words in a dedicated first pass.",
          "Cut silence between ideas, not within them.",
          "Leave a sliver of breath so phrases stay clear.",
          "Keep the pause right before the payoff intact.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-visual-vs-verbal-hooks",
    title: "Visual Hooks Against Verbal Hooks in Shorts",
    excerpt:
      "A visual hook stops the eye while a verbal hook stops the ear. Use both, but decide which one leads before you shoot or the Short fights itself.",
    date: "2025-04-26",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A visual hook grabs attention through the image and a verbal hook grabs it through the words. Strong Shorts often lead with one and let the other support it, rather than trying to win both races at the same instant.",
          "Deciding which one leads changes how you shoot. A visual led Short opens on a striking frame. A verbal led Short can open on a plain frame because the sentence is doing the work.",
        ],
      },
      {
        heading: "Visual led hooks need a strange first frame",
        paragraphs: [
          "The eye stops for something unexpected or unfinished. A hand mid action, a result shown before the process, a scene that raises a question the viewer cannot answer alone. The frame should be readable in a fraction of a second.",
          "When the image leads, keep the opening line minimal. A loud visual and a loud sentence compete, and the viewer cannot process both. Let the picture ask the question and the words confirm it.",
        ],
      },
      {
        heading: "Verbal led hooks need a plain frame",
        paragraphs: [
          "If the first sentence is the star, do not bury it under motion graphics. A simple shot gives the words room, and the viewer's attention goes where you point it. Talking head opens work for this reason.",
          "I usually resist adding text on screen for the first line of a verbal hook. The viewer would read and listen at once, and one of the two gets dropped. Save the on screen text for the proof beats.",
        ],
      },
      {
        quote:
          "A visual hook wins the thumbnail. A verbal hook wins the second after. The mistake is asking them to share.",
      },
      {
        heading: "Match the lead to the topic",
        paragraphs: [
          "Some topics are inherently visual, like a transformation or a physical result. Those should lead with the image because the payoff is something you see. Others are abstract, like a money rule or a mindset shift, and those lean verbal.",
          "Ask what the viewer needs to believe to keep watching. If belief comes from seeing, lead visual. If it comes from hearing, lead verbal. The answer usually arrives in one sentence.",
          "When you truly need both, stagger them. Open on the image, let it sit for a beat, then bring in the line. Two hooks in sequence beat two hooks stacked on the same frame.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick one hook as the lead before you shoot.",
          "Visual led opens need a strange, readable first frame.",
          "Verbal led opens need a plain frame and no competing text.",
          "Stagger visual and verbal hooks when you need both.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-text-overlay-timing",
    title: "Timing On Screen Text to the Spoken Hook",
    excerpt:
      "On screen text should arrive with the spoken hook, not lag behind it. Line up words to voice and the caption reinforces the claim instead of splitting attention.",
    date: "2025-08-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "On screen text works when it lands on the same beat as the spoken word. If the caption appears half a second late, the viewer reads rather than listens, and the two streams pull in different directions.",
          "Timing the text is not decoration. It decides which channel leads. Match them and the words reinforce each other. Miss the match and the clip feels slightly broken even when nobody can say why.",
        ],
      },
      {
        heading: "Sync the key word, not the whole line",
        paragraphs: [
          "You do not need to race the full sentence. Put the text on the one word that carries the meaning and let the rest stay spoken. The eye grabs the keyword, the ear holds the sentence, and the two agree.",
          "This also keeps the screen calm. Full sentence captions on a vertical frame turn into a wall, and a wall of text is a reason to scroll. One or two words at a time reads instantly.",
        ],
      },
      {
        heading: "Reveal the text on the beat",
        paragraphs: [
          "If the spoken hook is three seconds, the text should be visible for about three seconds, entering as the voice starts and leaving before the next idea begins. Lag either edge and the sync frays.",
          "I lock text to the waveform first, then animate. Motion added after the timing is set stays subordinate to the voice. Animated text that drives the timing ends up fighting the speaker.",
        ],
      },
      {
        quote:
          "Text that trails the voice makes the viewer wait. Text that leads it makes them guess. Text on the beat disappears, which is the goal.",
      },
      {
        heading: "Do not caption the payoff twice",
        paragraphs: [
          "The reveal should feel spoken. If the punchline is already sitting on screen before it is said, the voice becomes redundant and the delivery loses its surprise. Hold the text back on the final line.",
          "Keep captions for the hook and the proof, then let the payoff run clean with the image and the voice alone. The gap in text reads as a moment, and moments are what people remember.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Land the text on the same beat as the spoken word.",
          "Caption the keyword, not the entire sentence.",
          "Set timing to the waveform before adding any animation.",
          "Pull text off screen for the final payoff.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-word-count-and-pacing",
    title: "Matching Word Count to Shorts Pacing",
    excerpt:
      "Word count sets the floor of your pacing. Count spoken words per second, budget the runtime, and a Short stops running long or feeling rushed.",
    date: "2025-11-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Word count is the most honest pacing tool you have. A comfortable speaking rate runs about two and a half words per second, so the script length quietly caps how much you can say before the runtime is full.",
          "Most bloated Shorts are not badly edited. They were written longer than the clock allows and then squeezed. Counting words before you record saves the squeezing.",
        ],
      },
      {
        heading: "Budget the runtime before the words",
        paragraphs: [
          "A thirty second Short leaves you around seventy five spoken words once you account for pauses and cuts. A sixty second one gives you roughly a hundred and fifty. Write to the number instead of discovering it in the edit.",
          "This budget forces hard choices early. If the script is twenty words over, one idea has to go, and choosing it before recording is easier than choosing it on a timeline at midnight.",
        ],
      },
      {
        heading: "Leave room for the cut",
        paragraphs: [
          "Spoken scripts almost always shrink in the edit, never grow. Filler removal and dead air trimming take out ten to fifteen percent on average. If you write to the exact limit, you finish with a little space to breathe.",
          "That leftover space is useful. It becomes the pause before the payoff or the extra half second the loop needs. Writing slightly under the budget gives the edit somewhere to work.",
        ],
      },
      {
        quote:
          "The runtime you see is the edit. The runtime you can fill is the script. Know the number before you sit in front of the mic.",
      },
      {
        heading: "Count in beats, not just words",
        paragraphs: [
          "Words per second is a rough gauge, but beats are the real currency. A three word beat and a fifteen word beat can take the same time if the short one gets a pause. Budget ideas, then check the word count against them.",
          "I sketch the beats first and assign a rough second count to each. Adding the seconds tells me whether the clip fits before a single line is polished. The plan is faster to fix than the recording.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Assume roughly two and a half spoken words per second.",
          "Budget ninety words for thirty seconds, about one fifty for sixty.",
          "Write slightly under the limit to leave space for cuts.",
          "Assign a time estimate to each beat before writing the lines.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-fixing-retention-dips",
    title: "Finding and Fixing the Retention Dip in a Short",
    excerpt:
      "Every Short has a retention dip. Read the graph, find the exact second people leave, and rewrite that one beat instead of rebuilding the whole clip.",
    date: "2026-02-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A retention dip is the spot where a chunk of viewers leaves, and it shows up as a visible slope in the graph. The good news is that it is almost always one beat, not the whole clip, and one beat is cheap to fix.",
          "I stopped re-recording whole Shorts once I learned to read the graph. The data points at a second, and that second maps to a line I can rewrite.",
        ],
      },
      {
        heading: "Read the slope, not the total",
        paragraphs: [
          "A dip matters more than an average. A clip that holds strong for twenty seconds then falls off a cliff at second twenty one has one fixable problem. A clip that sags slowly everywhere has a pacing problem from the start.",
          "Watch for the vertical drop. That kind of wall usually means the viewer got what they came for and had no reason to wait. The fix is to delay the payoff or add a second reason to stay.",
        ],
      },
      {
        heading: "Map the second to a beat",
        paragraphs: [
          "Pull up the script with timing marks and find which beat sits at the dip. Nine times out of ten it is a transition. A sentence that wraps up the last idea or introduces the next one is where people decide the rest is optional.",
          "Transitions are where you can delete without losing content. Cut the bridge, jump straight to the next beat, and the graph usually flattens. Bridges feel helpful to the writer and like filler to the viewer.",
        ],
      },
      {
        quote:
          "The dip is a message, not a verdict. It points at one line that let the viewer believe the video was over.",
      },
      {
        heading: "Re-test with one change",
        paragraphs: [
          "Change one thing, repost as a variation, and compare the graphs. If the dip moves or shrinks, you found the cause. If it stays at the same second, the problem is upstream in the setup.",
          "This is the loop that improves a channel. Guess a fix, test it, keep the winner, and let the next clip start from the better version. Over a month the dips get shallower across every upload.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat a sharp dip differently from a slow sag.",
          "Locate the beat at the exact dip second.",
          "Delete transitions before deleting content.",
          "Change one variable and compare graphs before judging.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-question-hooks",
    title: "Using Question Hooks Without Wasting the Opening",
    excerpt:
      "A question hook only works when the viewer cannot answer it alone. Ask the right kind of question, keep it short, and the opening earns its seconds.",
    date: "2026-06-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "format"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Brain,
    content: [
      {
        paragraphs: [
          "A question hook works when the answer is not obvious and not already known. If the viewer can answer in their head instantly, the question closes the loop instead of opening one, and they scroll.",
          "Most weak question hooks fail for that reason. They ask something the audience already believes. A good one creates a small gap between what they think and what might be true.",
        ],
      },
      {
        heading: "Ask questions with a wrong answer",
        paragraphs: [
          "The strongest question implies that the common answer is incorrect. Why your most viewed video is probably not your best one. That framing promises a correction, and a correction is worth waiting for.",
          "If the implied answer is simply yes, there is no tension. The viewer nods, feels satisfied, and leaves. You want the nod to be premature so the rest of the clip can complicate it.",
        ],
      },
      {
        heading: "Keep it under ten words",
        paragraphs: [
          "Long questions bury their own hook. The viewer spends the first seconds parsing the sentence instead of feeling the gap. Short questions land in one breath and leave room for the answer.",
          "I cut every question down until removing one more word would break it. That version almost always outperforms the polite, complete one I wrote first.",
        ],
      },
      {
        quote:
          "A question is a hook only when the viewer cannot answer it. If they can, you have written a conclusion with a question mark.",
      },
      {
        heading: "Answer fast, then complicate",
        paragraphs: [
          "Do not sit on the question for the whole clip. Give a quick answer early enough to prove the video is not bait, then complicate it. The quick answer builds trust and the complication builds the reason to stay.",
          "A clip that never answers trains viewers to distrust your questions, and distrust travels across every future upload. Answering early is not a spoiler. It is the receipt that keeps them watching.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask questions the viewer cannot answer instantly.",
          "Imply that the common answer is wrong.",
          "Keep the question under ten spoken words.",
          "Answer quickly, then complicate the answer.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-batching-hook-variations",
    title: "Batching Hook Variations for Faster Shorts Testing",
    excerpt:
      "Batch several hook variations for one Short and post them close together. Let the data pick the winner instead of your gut guessing every time.",
    date: "2026-09-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing", "format"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "Batching hook variations means writing several openings for the same body and testing them as separate posts. Instead of guessing which line wins, you run a small experiment and let the numbers decide.",
          "This is the cheapest way to learn what your audience responds to. The body stays fixed, so any difference in performance comes from the hook, which makes the result readable.",
        ],
      },
      {
        heading: "Write five opens for one body",
        paragraphs: [
          "Take a finished Short and rewrite only the first sentence four more times. Use different angles: a number, a mistake, a question, a contradiction, a result. Same footage, same proof, five ways in.",
          "Five feels like a lot until you try it. Once the body exists, an alternate opening takes seconds, and the set of five usually contains one that clearly outruns the others.",
        ],
      },
      {
        heading: "Post them close together",
        paragraphs: [
          "Spread the variations over a few days at similar times so the platform conditions stay roughly even. If one runs on a holiday and another on a peak evening, the comparison tells you about the calendar, not the hook.",
          "Keep the caption and cover consistent across the set. Changing more than one variable muddies the signal, and you end up arguing about the thumbnail when the hook was the cause.",
        ],
      },
      {
        quote:
          "Your gut wrote five hooks. The feed will tell you which one actually stops thumbs. Trust the test over the preference.",
      },
      {
        heading: "Keep a hook bank",
        paragraphs: [
          "After a few rounds, save the winning opening lines in a note. Patterns emerge, and those patterns become templates you can adapt without a fresh brainstorm every morning.",
          "This bank compounds. A creator with fifty proven hooks starts a new Short from a known stop point instead of a blank page, and the writing gets faster while the results stay steady.",
          "Repurposing helps here too. A hook that won on a long video can often be compressed and reset for a Short, and the test tells you whether the shorter frame keeps its pull.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write five openings for one finished body.",
          "Change only the hook so the test stays clean.",
          "Post variations at similar times and keep captions consistent.",
          "Save winning lines in a bank you can reuse and adapt.",
        ],
      },
    ],
  },
];
