import { Scissors, Search, PenLine, Repeat, Film, Type, Workflow, Layers, BarChart3, Flag } from "lucide-react";
import type { BlogPost } from "../types";

export const batch52: BlogPost[] = [
  {
    slug: "shorts2-repurposing-long-videos",
    title: "Repurposing Long Videos Into Shorts That Work",
    excerpt:
      "Repurposing long videos into Shorts works best when every clip gets its own opening and ending. Here is how to pick moments and shape the cuts you pull.",
    date: "2024-02-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Repurposing long videos into Shorts works when each clip is treated as its own piece, with an opening and an ending that stand alone. The footage is raw material, and the edit is the product.",
          "Most people point at a forty minute recording, drag out sixty seconds, and publish. That shortcut shows in the numbers. A clip with no setup and no landing feels like walking into a conversation that already ended.",
          "Before I touch the timeline, I write the point of the clip in one sentence. If I cannot write that sentence, the moment is not ready to leave the long video yet. That single habit has killed more bad clips for me than any editing trick.",
        ],
      },
      {
        heading: "The footage is not the product",
        paragraphs: [
          "Long videos carry context. A Short cannot. When I pull a segment, I ask what a viewer needs to know in the first few seconds to care, then I write that line and cut everything before it.",
          "Sometimes the best moment is a stray answer buried in the middle. It lands because of the twenty minutes that came before, and none of those twenty minutes fit in a Short. So I rebuild the setup from scratch. One line of context usually does the job.",
          "The same logic applies to the ending. A long video rolls on to the next topic. A Short has to stop with intent, a beat before the viewer expects it, or the clip dribbles out and the swipe happens on its own.",
          "I keep the original file untouched through all of this. Editing decisions belong on a copy, because the moment I start trimming the source I lose the freedom to try a different cut next week.",
        ],
      },
      {
        quote:
          "A good repurposed Short hides the fact that anything came before it. The clip should feel like it started exactly where it needed to.",
      },
      {
        heading: "Choose moments with a spine",
        paragraphs: [
          "Not every strong moment can carry a Short. I look for a clip that already holds a clear claim and a real payoff, even when each part is a single sentence. That structure is what keeps a thumb from moving.",
          "Weak picks are the ones that need a paragraph of explanation before they make sense. Strong picks explain themselves by the end of the first breath, so the viewer never feels behind. I would rather publish four clips like that than ten that need a preface.",
        ],
        bullets: [
          "A clear claim or question inside the first line.",
          "A moment where the speaker changes direction or admits something.",
          "A payoff a viewer could repeat to a friend later.",
          "A clean stopping point that does not require a follow-up clip.",
          "Enough visual variety to survive a silent autoplay feed.",
        ],
      },
      {
        heading: "Rebuild the opening, keep the middle",
        paragraphs: [
          "The middle of a long clip often works untouched. The opening rarely does. I record a fresh intro when the original starts mid-thought, then cut straight to the strongest existing beat.",
          "This hybrid approach costs a few minutes and rescues a clip that would otherwise sit on a drive. It also keeps the tone consistent across a series, so a viewer who bounces between Shorts hears one steady voice.",
          "Keep a folder of these replacement intros. After a month you own a bank of openers you can drop onto almost any clip, which turns an afternoon of editing into an hour. The bank grows faster if you record two or three extra lines every time you sit down at the microphone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat a Short as a new piece of work, not a trim.",
          "Write the missing context instead of hunting for a clip that already has it.",
          "Pick moments that contain a claim and a payoff on their own.",
          "Replace the opening more often than you replace the middle.",
          "Match the ending to the pace of the feed, not the pace of the source.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-clip-selection",
    title: "How to Pick the Right Clips From Long Footage",
    excerpt:
      "Good clip selection decides whether repurposing pays off. Learn how to scan long footage and find the moments that deserve a Short of their own.",
    date: "2024-05-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "The fastest way to pick clips from long footage is to watch for questions and answers instead of watching for good lines. A strong Short usually starts with something the speaker asks or promises, and ends where that promise is paid off.",
          "I scan a recording three times with three different jobs. First for structure, second for energy, third for clean starts and stops. Going in with one pass and no plan is how a two hour video eats an afternoon.",
        ],
      },
      {
        heading: "The first pass is about structure",
        paragraphs: [
          "On the first pass I do not stop for anything. I mark timestamps where the topic changes, because topic boundaries are where clips are born and where they die. A clip that starts in the middle of a topic feels like it is missing its head.",
          "By the end of this pass I have a rough map. Ten topic markers on a forty minute video is normal. Most of them will not become Shorts, and that is fine. The map exists so I can move quickly on the next pass.",
          "Working through headphones at this stage helps. Small audio cues, a change in room tone or a shift in the guest's posture, often mark a boundary before the words do.",
          "A recording does not hand you clips. You have to decide what counts as a clip before you start, or you end up with a folder of fragments that never become posts. I define the bar first and hold every candidate against it.",
        ],
      },
      {
        heading: "The second pass is about energy",
        paragraphs: [
          "Now I go back and listen for the minutes where the speaker leans in. Tone matters more than the words on a transcript, because a joke or an aside that reads flat often plays great, and a neat sentence that reads well can land like a lecture.",
          "I highlight anything that made me react the first time. Laughter, a raised voice, a pause before a confession. Those are the beats a viewer scrolls toward, and they are worth a second look even when they are messy.",
          "When a moment has energy but no clear point, I still flag it. Sometimes the fix is a fresh opening line that gives the energy a job. Cutting for feeling first and meaning second keeps me from overlooking a clip that only needed framing.",
        ],
      },
      {
        quote:
          "Pick for tension, not for polish. The cleanest sentence is often the least interesting clip.",
      },
      {
        heading: "The third pass is about edges",
        paragraphs: [
          "The last pass is where I decide in and out points. A clip can hold a great middle and still fail because the first second is dead air or the last second trails off. I nudge the start to the first real word and the end to the beat after the punch.",
        ],
        bullets: [
          "Start on the word, not on the breath before it.",
          "Trim one second past the punch line for a clean landing.",
          "Avoid starting a clip with a filler like so or anyway.",
          "Check that both edges make sense with the sound off.",
        ],
      },
      {
        heading: "Decide the length on purpose",
        paragraphs: [
          "Length is a choice, not a discovery. A joke may need fifteen seconds, a story may need ninety, and some explanations refuse to fit at all. I would rather cut a strong ninety second clip than bend the material to hit an arbitrary number.",
          "When a candidate cannot settle into a length, that is usually a sign it is really two clips wearing one coat. Splitting it is better than cramming it. The viewer on the other side of the split never knows the two were once connected.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use separate passes for structure, energy, and edges.",
          "Mark topic changes first, then hunt for moments that made you react.",
          "Treat tone as a better signal than transcript neatness.",
          "Let the idea set the length instead of forcing a target.",
          "Split a clip that refuses to settle into one clear length.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-hook-from-transcript",
    title: "Pull Shorts Hooks Straight From Your Transcript",
    excerpt:
      "Repurposing video gets easier when you mine the transcript. Most strong Shorts hooks are already sitting in the words you recorded out loud.",
    date: "2024-08-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Your best hook is usually already recorded. When you repurpose a long video, the transcript is a list of sentences the speaker said out loud, and some of them are sharper than anything you would write on a notepad.",
          "I read transcripts before I watch footage now. Reading is faster, and the weak lines fall away in seconds. What survives the read is what I go back and cut.",
          "Reading also keeps me honest. On camera a line can sound profound, and on the page it turns out to be a restatement of the sentence before it. The transcript does not let that slide.",
        ],
      },
      {
        heading: "Look for spoken sentences, not written ones",
        paragraphs: [
          "A hook pulled from real speech has a rhythm that written copy rarely matches. Someone said it to another person, so it carries a pulse. A line like here is the part nobody tells you only works because a human said it with a face on camera.",
          "I copy candidate lines into a fresh note and read them with no context. If a line still stands on its own on a blank page, it can open a Short. If it needs the paragraph around it, back to the pile.",
          "This habit changed how I record. Knowing the transcript is coming, I sometimes state an idea twice, once woven into the conversation and once clean, so the mining pass has a ready made hook.",
        ],
      },
      {
        heading: "Shorten without sanding off the edges",
        paragraphs: [
          "Spoken lines arrive with filler. I cut the uhs and the false starts, then look for a smaller phrase inside the sentence that does the same job in half the words.",
          "The trap is trimming until the line sounds like a headline. Keep the odd word or the slight awkwardness. That texture is what makes a viewer trust that a person said it, not a copywriter.",
          "I keep a small list of phrases I refuse to let through, because they read as filler even when the thought behind them is fine. Cutting them forces a more specific sentence.",
        ],
      },
      {
        quote:
          "A transcript is a quarry. You chip away the filler and the hesitations until the sentence underneath shows up.",
      },
      {
        heading: "Build a hook bank from every recording",
        paragraphs: [
          "I keep one running document of hooks pulled from past videos. It takes ten minutes after each recording session and pays back for months, because hooks are the hardest part of a Short to get right.",
        ],
        bullets: [
          "Store the line exactly as spoken before you edit it.",
          "Note the timestamp so you can find the footage again.",
          "Tag each hook by topic so future clips can reuse it.",
          "Flag any hook that already performed so you can study why.",
        ],
      },
      {
        heading: "Test the hook against the clip",
        paragraphs: [
          "A great line still has to match the clip behind it. If the hook promises a secret and the clip delivers a definition, the retention chart will show the mismatch in the first few seconds. The words and the footage have to agree on what the viewer is about to get.",
          "When they disagree, the fix is usually the hook, not the clip. The moment is fine. It is the promise attached to it that pulled people in for the wrong payoff.",
          "I also watch where the clip stops relative to the promise in the hook. If the hook asks a question and the clip ends before answering it, the replay button is the only way the viewer gets closure, and most will not bother.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the transcript before you rewatch the footage.",
          "Steal spoken sentences instead of writing hooks from scratch.",
          "Trim filler, but leave some human texture in place.",
          "Keep a tagged hook bank so old recordings keep earning.",
          "Make sure the hook promises what the clip actually delivers.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-one-video-many-shorts",
    title: "Turn One Long Video Into a Week of Shorts",
    excerpt:
      "One long video can become a week of Shorts if you plan the repurposing before the footage airs. A little structure beats a last minute scramble.",
    date: "2024-11-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "One long video can carry a week of Shorts when you decide the cut list before the long video goes live. The trick is not more editing. It is a plan made while the material is still fresh.",
          "I stopped treating Shorts as an afterthought. Now every long recording starts with a note of four to seven moments that could stand alone, and that note becomes the week.",
          "The plan protects against the worst version of this work, which is sitting down a week later with no memory of what was good and rewatching hours of tape to find out. A note made in the moment costs seconds.",
        ],
      },
      {
        heading: "Plan the cut list during the outline",
        paragraphs: [
          "When I outline a long video, I mark the beats that have a claim and a payoff. Those beats are candidate Shorts, and seeing them early changes how I shoot. I might say a line twice, once for the long version and once clean for a Short.",
          "This planning costs nothing extra at record time and saves an entire editing session later. The moments are already flagged, so I never have to rewatch a two hour file to remember what was good.",
          "It also raises the quality of the long video. Knowing which beats will travel makes me sharpen them in the moment, because I can picture the seven clips I am about to cut from a single sitting.",
        ],
      },
      {
        heading: "Space the posts so they do not compete",
        paragraphs: [
          "Dumping five Shorts in one hour splits your own audience. I space them across the week and let each one get a fair shot at the feed before the next drops.",
          "The order matters too. I open with the strongest hook, follow with the most useful clip, and save the one that sparks comments for the middle of the week. A little sequencing keeps the run from peaking on day one.",
          "I also avoid dropping two clips that share a topic back to back. If Monday and Tuesday both cover pricing, the second one feels like a rerun even when it is new footage. Splitting them across the week keeps each idea fresh.",
        ],
      },
      {
        quote:
          "A long video is a season, and the Shorts are the episodes. Plan the season and the episodes write themselves.",
      },
      {
        heading: "Give each Short one job",
        paragraphs: [
          "Every clip in the week gets a single purpose. One drives a comment, one teaches a step, one sends viewers to the full video. Overlapping jobs make a run feel repetitive even when the clips are different.",
        ],
        bullets: [
          "Assign each Short one goal before you edit it.",
          "Vary the opening frame so the run does not look cloned.",
          "Point at least one Short back to the long video.",
          "Leave one clip that is pure personality with no pitch.",
          "Keep a spare clip in reserve for a slow day.",
        ],
      },
      {
        heading: "Review the week as a set",
        paragraphs: [
          "Before the week starts, I watch all the clips back to back. Breaks in pacing, repeated openers, and two clips that argue the same point loud enough to notice. Fixing those in advance is easy. Fixing them after three have posted is not.",
          "The review also tells me if the run has a shape. A week that starts strong and fades was likely ordered wrong, not edited wrong. Reshuffling costs nothing before you publish and everything after.",
          "When a clip stands out on its own but drags the set down, it usually means it is too similar to the one before it. Moving it, or holding it for next week, fixes the run without touching the edit.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose the cut list while you outline the long video.",
          "Shoot a clean version of key lines while the camera is rolling.",
          "Space the Shorts across a week instead of stacking them.",
          "Give each clip a single stated job.",
          "Watch the whole run before the first clip goes out.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-vertical-reframe",
    title: "Reframing Landscape Footage for Vertical Feeds",
    excerpt:
      "Turning landscape footage into vertical Shorts takes more than a crop. Learn where to move the frame so the repurposed clip still reads well.",
    date: "2025-01-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["format", "shorts", "repurposing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Cropping landscape footage to vertical usually fails because the subject drifts out of frame the moment someone moves. A reframe is a decision about where to keep the camera pointed, and it has to follow the action.",
          "I treat the vertical frame as a moving window over the wide shot. My job is to keep the face, the hands, and whatever is being pointed at inside that window at all times.",
          "The old failure is a fixed crop that looks fine in the first frame and then loses the subject the second they lean forward. A reframe is something you maintain, not something you set once.",
        ],
      },
      {
        heading: "Find the subject and lock on",
        paragraphs: [
          "The first pass is automated for a reason. Tracking holds the subject far better than a fixed crop, because people sway even when they think they are sitting still. I let the tool do the tracking, then fix the places where it makes a bad choice.",
          "Automation tends to jump when two people share the frame. Left alone, the window snaps back and forth until the clip feels seasick. On those shots I pick one person and stay with them, even if the other person is the one talking for a beat.",
          "Places where the track loses the plot get a manual keyframe. Those spots are easy to find, because the window stops moving or drifts toward the background while the person keeps talking. I fix them before captions, since a moving crop under fixed text looks broken.",
        ],
      },
      {
        heading: "Respect the headroom",
        paragraphs: [
          "A vertical frame is tall, so most of the gain is above and below the subject. If you crop tight to the face you leave dead space at the bottom and lose the energy of the gesture. I usually pull out a little so hands stay visible.",
          "Captions eat the lower third of a Short. If the mouth sits too low in the frame, the text lands across the chin. I raise the framing so the face clears the caption zone before I export.",
          "I keep a mental safe zone about a third of the way down from the top of the frame. Faces sit in that band, which leaves air above the head and room for text below the chin. It is a rough guide, not a rule, but it saves a lot of fiddling.",
        ],
      },
      {
        quote:
          "The crop is not a rectangle you draw once. It is a camera you keep pointing for the length of the clip.",
      },
      {
        heading: "When a shot will not convert",
        paragraphs: [
          "Some footage should stay landscape. A wide room, a group around a table, a scene that depends on the spread of a diagram. Stretching those into vertical strips ruins them.",
        ],
        bullets: [
          "Rebuild the moment as a close talking head instead.",
          "Zoom into the single object the shot is about.",
          "Add a screen recording or graphic to carry the idea.",
          "Split the wide shot into two vertical cuts of each person.",
          "Skip the clip and pick a talking beat from elsewhere.",
        ],
      },
      {
        heading: "Set up the reframe once per source",
        paragraphs: [
          "Reframing gets quicker when every clip from one source shares the same base settings. I define the safe zone once, reuse it, then adjust only the clips where someone moves out of range.",
          "I also stop treating the preview monitor as truth. It shows a clean feed while the platform draws buttons and title text over the top. A little margin around the edges keeps the important part of the frame from disappearing behind the interface.",
          "I export the base framing as a preset so the next clip from the same source starts close to right. Small wins like that add up across a batch of ten clips from one recording.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use tracking, then correct the frames where it guesses wrong.",
          "Keep hands in frame so the shot has motion and life.",
          "Frame above the caption zone before exporting.",
          "Let some landscape shots stay landscape, and rebuild them instead.",
          "Leave margin so platform buttons do not cover the subject.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-caption-first",
    title: "Why Shorts Repurposing Should Start With Captions",
    excerpt:
      "Most Shorts play with the sound off, so captions are not a finishing touch. Starting repurposing with text changes how the whole clip gets cut.",
    date: "2025-04-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Start with captions and the rest of the Short gets easier. A large share of viewers watch with the sound off, so the text is not decoration. It is the part that carries the clip when the audio is muted.",
          "I lay in captions before I make any other edit. Seeing the words on screen shows me where a clip drags, because a long line of text is a signal that the sentence underneath it is too slow.",
          "The ordered approach is also faster. Laying text and then trimming around it is one pass. Trimming first and fitting text afterward is two, and the second pass is where mistakes slip in.",
        ],
      },
      {
        heading: "Captions expose weak writing",
        paragraphs: [
          "When a sentence appears as a single block of text, you feel its length. I read the captions at the speed of a scrolling thumb, and any line that needs more than a glance gets rewritten or cut.",
          "This is why caption first beats caption last. Adding text at the end means you only style it. Adding it first means the text shapes the edit, and the edit comes out tighter as a result.",
          "There is a second benefit I did not expect. Reading the clip forces me to catch small errors the audio hides, like a name said once or a number that never gets restated. Those fixes cost nothing before publishing and a comment section after.",
        ],
      },
      {
        heading: "Style the text so it never fights the footage",
        paragraphs: [
          "One font, two or three weights, and a shadow or a solid backing. That is the whole system. The goal is legibility over a moving background, not a typography project.",
          "Keep the text out of the top right, where platform buttons sit, and out of the bottom strip, where the caption bar and the progress line live. Center or lower middle is safe.",
          "I also keep the text movement small. Bouncing words and wild animations pull attention from the face without adding meaning. A simple pop or fade keeps the eye on the mouth and the message.",
        ],
      },
      {
        quote:
          "If the Short only works with the sound on, it does not work for most of the people who will see it.",
      },
      {
        heading: "A quick caption pass that holds up",
        paragraphs: [
          "I time the captions to the spoken words, then bump any line that flashes for less than a second. Fast text is unreadable, and unreadable text is wasted space.",
          "Where a speaker repeats a word or leans on a phrase, I let the caption do the same. Matching the spoken rhythm keeps the text and the audio from fighting, which is the whole point of subtitling a Short at all.",
        ],
        bullets: [
          "Break captions at natural pauses, never mid phrase.",
          "Hold each line long enough to be read twice.",
          "Highlight the one or two words that carry the meaning.",
          "Check the clip muted before you check it with sound.",
          "Keep the same caption style across a series for recognition.",
        ],
      },
      {
        heading: "Treat the first caption as a hook",
        paragraphs: [
          "The first line of text is often the real hook, more than the first spoken word. A viewer with the sound off reads before they hear anything, so that opening caption has to stand alone as a sentence worth staying for.",
          "I rewrite it a few times and test it against the clip without audio. If the opening caption is flat, the rest of the good editing never gets a chance to matter.",
          "I keep a few stock openings that travel well, then adapt one to the clip. A line like most people get this backwards works on many topics, but only when the clip actually reverses a common belief.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write captions first so the text shapes the edit.",
          "Let long lines tell you which sentences to cut.",
          "Keep text clear of the platform buttons and caption bar.",
          "Always review the Short muted before publishing.",
          "Treat the first caption as a hook in its own right.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-batch-workflow",
    title: "A Batch Workflow for Repurposing Video Into Shorts",
    excerpt:
      "Batching turns repurposing from a daily grind into a single focused session. Here is a workflow that keeps the quality high and the tabs closed.",
    date: "2025-07-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "format", "shorts"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Batching works because repurposing asks for the same kind of attention over and over. Switching between cutting, captioning, and writing titles ten times a day wastes more energy than the tasks themselves.",
          "My workflow groups those jobs into one session. I do all the clipping, then all the captions, then all the titles. Each stage uses a different part of my head, so I never pay the cost of jumping between them.",
          "The order matters more than the speed. Clipping while the memory of the source is fresh, then letting a gap pass before writing, gives the titles a little distance and a better eye.",
        ],
      },
      {
        heading: "Stage one, choose and cut",
        paragraphs: [
          "The first stage is pure selection. I pull every candidate clip from a recording and cut the rough in and out points. No captions, no titles, no thumbnails. Those come later.",
          "I keep the clips in one folder named for the source video. The folder is the unit of work. When it is full, the video is done and I move on to the next one.",
          "Rough cuts at this stage are allowed to be ugly. The goal is to capture the moment while I still remember why it was good, not to finish the edit. Polishing now would turn one stage into three.",
        ],
      },
      {
        heading: "Stage two, write and time",
        paragraphs: [
          "Once the clips exist, I caption all of them in one sitting and write the titles at the same time. Handling text as a group keeps the voice consistent and stops me from repeating the same opener five times.",
          "Titles get written last in this stage because by then I have watched every clip twice. The best title for a clip is easier to see after you have cut it, not before.",
          "I keep one line of guidance taped above the monitor, which is to write for the muted viewer. Every title and caption has to land with the sound off, and that single reminder shapes a lot of small choices.",
        ],
      },
      {
        quote:
          "Do the same kind of work in one sitting. Context switching is the hidden tax on every repurposing habit.",
      },
      {
        heading: "Stage three, schedule and rest",
        paragraphs: [
          "The final stage is boring on purpose. I load the finished clips into a scheduler, spread them across the week, and close the project. Nothing gets posted the day it is made, so there is no temptation to rush one out.",
          "The scheduler does the rest, and that is the point. When posting is a reflex, it eats time that belongs to making the next batch. Automating it means the work goes out whether or not I remember to push a button.",
          "I also set the batch to publish while I am asleep. Waking to clips already live removes the urge to tinker with them after the fact, which usually makes them worse.",
        ],
        bullets: [
          "Schedule clips at least a day after finishing them.",
          "Spread a single source video across several weeks if needed.",
          "Keep one clip in reserve for gaps and slow news days.",
          "Archive the source folder so old batches stay searchable.",
        ],
      },
      {
        heading: "Protect the session from interruptions",
        paragraphs: [
          "The batch only pays off if the session runs without leaks. I close the analytics tab, silence notifications, and keep a scratch note for stray ideas instead of chasing them mid stage. Every interruption costs more than the minute it takes.",
          "I also cap the batch. Six to ten clips is enough for one sitting. Past that, my judgment on titles slips and I start approving weak cuts just to reach the end of the folder.",
          "I keep water and a timer nearby and treat the batch like any other appointment. When it takes too long, the fix is usually a smaller source folder, not a longer session.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Split repurposing into choose, write, and schedule stages.",
          "Never mix clipping with captioning in the same pass.",
          "Write titles after cutting, not before.",
          "Finish a batch before you publish any of it.",
          "Cap the batch size so quality does not slide at the end.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-library-series",
    title: "Build a Shorts Series From Your Video Library",
    excerpt:
      "Your whole back catalog is a Shorts series waiting to be built. A steady repurposing angle turns old videos into a recognizable run of posts.",
    date: "2025-10-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Old videos are not dead inventory. Pick one angle and run it across a dozen past recordings, and you have a Shorts series with a name instead of a pile of unrelated clips.",
          "The angle is the whole game. A series needs a promise a viewer can recognize in the first second, not a theme so broad it could cover anything you have ever said.",
          "The catalog is an asset most creators forget they own. It has already been shot, edited, and published once. A series just gives that work a second life in a different feed.",
        ],
      },
      {
        heading: "Pick an angle narrow enough to repeat",
        paragraphs: [
          "Mistakes I made in my first year is a series. Advice is not. The narrow angle tells me where to look in the library and tells the viewer what they are getting each time.",
          "I test an angle by asking whether it can produce five clips from five different videos. If it can only pull from one recording, it is a good Short, not a series.",
          "Narrow also makes the search faster. With a clear angle I can skim old transcripts for the one kind of moment I need instead of rewatching everything and hoping something fits.",
        ],
      },
      {
        heading: "Give the series a fixed frame",
        paragraphs: [
          "A recognizable series keeps one visual and one structural habit. The same opening line, the same caption color, the same closing beat. The repetition is the point. It signals to the feed that these clips belong together.",
          "This does not mean every clip looks identical. It means the bones match, so a viewer who liked clip three trusts clip twelve before it even starts.",
          "I write the opening line as a template so it does not eat time each episode. Something like this is the mistake I see most often. The topic changes, the shape stays, and the viewer learns to expect it.",
        ],
      },
      {
        quote:
          "A series is a promise you keep. The angle says what, and the fixed frame says you can count on it.",
      },
      {
        heading: "Mine the library without repeating yourself",
        paragraphs: [
          "Pull clips from across the whole catalog instead of draining one video. Mined that way, the series stays fresh and it quietly reintroduces old work to people who never saw it.",
          "A single old video will not carry a whole run anyway. Most recordings have two or three usable moments at best, so the series forces you to spread out and keeps any one video from wearing thin.",
          "Reading old transcripts rather than rewatching old footage speeds this up a lot. I can scan a year of recordings in an afternoon and leave with a shortlist for the month.",
        ],
        bullets: [
          "Spread source videos across the series run.",
          "Note which old videos keep producing usable clips.",
          "Retire an angle once the clips start sounding the same.",
          "Link related clips so new viewers can binge a topic.",
        ],
      },
      {
        heading: "Know when to end a series",
        paragraphs: [
          "A series has a natural life. When the clips start repeating the same point in different words, the audience feels it before the numbers do. Ending on a strong run beats dragging it until people tune out.",
          "I keep a short list of follow up angles ready, so the week after a series ends is not blank. The transition is easier when the next promise is already named.",
          "A clean ending also gives the audience a reason to follow, because a finished run signals that the next one is coming. A series that never ends starts to feel like filler.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Turn the catalog into a series with one narrow angle.",
          "Test an angle by whether five videos can feed it.",
          "Hold one visual frame so the series reads as a set.",
          "Draw from many old videos instead of mining one dry.",
          "End the series before the clips start repeating.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-measuring-repurposed-shorts",
    title: "Measuring Which Repurposed Shorts Actually Perform",
    excerpt:
      "Not every repurposed Short deserves a sequel. Track the few signals that reveal which clips your repurposing should be doing more of to build.",
    date: "2026-02-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["shorts", "repurposing", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Measuring repurposed Shorts comes down to two questions. Did people watch to the end, and did they do anything after. Everything else is noise on a small account.",
          "I ignore raw view counts when I compare clips, because the feed delivers wildly different audiences between posts. A clip with fewer views but a higher finish rate usually taught me more.",
          "The two questions filter out the vanity numbers. A pile of views with no finish and no action usually means the feed tested the clip and the audience passed. That is useful to know and easy to misread as success.",
        ],
      },
      {
        heading: "Watch the retention curve, not the total",
        paragraphs: [
          "The shape of the curve tells the story. A cliff in the first two seconds is a hook problem. A slow leak through the middle is a pacing problem. A drop right before the end means the payoff came too late.",
          "I compare curves between clips pulled from the same long video. Same source, same audience, so the differences point at my editing choices instead of the material itself.",
          "Reading curves side by side is the fastest feedback loop I have found. Within a handful of clips I can usually tell whether my current hook style is helping or just adding noise.",
        ],
      },
      {
        heading: "Rewatches are the quiet signal",
        paragraphs: [
          "When a Short loops, the number to watch is the rewatch rate. A clip that people play twice earned a second look without asking for it. Those clips are the ones I study and copy.",
          "Rewatches rarely come from information alone. They come from a turn people want to see again, or a line delivered well enough to deserve a replay.",
          "I keep an eye on shares for the same reason. When someone sends a Short to a friend, the clip did a job beyond the moment, and shares often predict which topics deserve a follow up.",
        ],
      },
      {
        quote:
          "Views tell you the feed tried. Finish rate and rewatches tell you the clip earned it.",
      },
      {
        heading: "Turn the data into a repeatable list",
        paragraphs: [
          "After a month of repurposing I sort the clips and look for patterns. The winners often share a source type, a length, or an opening style, and that pattern becomes the next batch brief.",
          "The sheet stays plain. One row per clip with the source, the length, the finish rate, and a note on how it opened. That is enough to compare clips without drowning in dashboards.",
          "I review it once a month, not daily. Daily numbers swing too much to mean anything, and staring at them turns a creative habit into an anxious one.",
        ],
        bullets: [
          "Log source video, length, and finish rate per clip.",
          "Group winners by opening style to spot a pattern.",
          "Cut a format that finishes low instead of doubling down.",
          "Reuse the structure of a rewatch winner on a new topic.",
        ],
      },
      {
        heading: "Do not overfit to one good clip",
        paragraphs: [
          "A single breakout Short can pull a whole strategy off course. I wait until a pattern shows up in at least three clips before I change how I work, because one lucky post proves little.",
          "Small accounts also see noisy numbers from week to week. Reading a trend means reading a month, not a Monday. Patience here saves a lot of misguided edits.",
          "When a clip fails, I resist rewriting everything around it. One weak post tells me about one edit, not about the whole approach. The month is the unit I trust, and the month is where I make decisions.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Judge repurposed Shorts by finish rate and action, not views.",
          "Read the retention curve to find hook, pacing, or payoff faults.",
          "Treat rewatches as the clearest sign a clip earned its replay.",
          "Turn the monthly pattern into the brief for the next batch.",
          "Wait for a pattern in three clips before changing the formula.",
        ],
      },
    ],
  },
  {
    slug: "shorts2-avoiding-duplicate-content",
    title: "Keeping Repurposed Shorts From Feeling Like Reruns",
    excerpt:
      "Repurposing the same long video twice is fine, but publishing near identical Shorts is not. A few simple changes keep every clip feeling new.",
    date: "2026-09-23",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["repurposing", "shorts", "format"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Repurposing the same long video more than once is normal. Publishing the same Short twice is what gets you a bored audience and a feed that stops pushing your clips.",
          "The fix is not to avoid the source. It is to change enough that a repeat viewer still gets something new from a moment they have already heard.",
          "The bar I use is simple. If a viewer who saw the first version would not learn anything new from the second, it is not ready to post. New packaging on the same old point is still a rerun.",
        ],
      },
      {
        heading: "Change the angle, not just the trim",
        paragraphs: [
          "A clip can be cut two ways. Frame it as a lesson in one Short and as a mistake in another, using the same footage but a different opening line. Same words, different entry point, different payoff.",
          "The safe rule I use is to change the first three seconds and the last three seconds. If both edges are new, the clip reads as new even when the middle is familiar.",
          "Sometimes the strongest refresh is just a different edit point. Starting one sentence later can shift the entire point of a moment without touching the audio around it.",
        ],
      },
      {
        heading: "Rotate the visuals",
        paragraphs: [
          "If the footage must repeat, change what the viewer looks at. Swap the caption style, add a graphic, cut to a screen recording, or reframe the shot tighter. Visual variety covers a lot of repeated audio.",
          "I keep a running list of alternate b roll for common topics so I can lay something different under a line I have used before.",
          "Music is part of the visuals too. A different track and a different edit rhythm make a repeated clip feel like a new one, even when the footage is untouched. Sound is the easiest layer to change and the one most people ignore.",
        ],
      },
      {
        quote:
          "Repeat the idea if it is worth repeating. Never repeat the packaging, because that is the part the viewer notices.",
      },
      {
        heading: "Space repeats far apart",
        paragraphs: [
          "Time is the cheapest fix. A clip that feels stale next week feels fresh six months later to everyone but your most devoted viewer, and even they will forgive one callback.",
          "The log is what makes spacing practical. Without it I rely on memory, and memory is exactly what fails when a source video is two years old and holds a dozen moments.",
          "Publishing more, not less, also helps. The fuller your feed gets, the less a single repeat stands out, because the new clips carry the run and the old one hides in plain sight.",
        ],
        bullets: [
          "Wait at least a full quarter before reusing the same moment.",
          "Track published clips so you do not duplicate by accident.",
          "Rewrite the title and caption, not just the thumbnail.",
          "Prefer a new moment from the source over a tired repeat.",
          "Save true callbacks for clips the audience already loved.",
        ],
      },
      {
        heading: "Log what you have already used",
        paragraphs: [
          "Most accidental reruns come from forgetting, not laziness. A simple sheet listing each source video and the timestamps already published removes the guesswork before a clip ever gets made.",
          "The log also shows gaps. When you can see which parts of a catalog have never been cut, the next batch practically chooses itself from the untouched side of the list.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reuse the source, not the exact clip.",
          "Change the opening and closing lines when you revisit a moment.",
          "Rotate visuals so repeated audio still looks new.",
          "Space repeats months apart and log what you have published.",
          "Let the log point you toward unused parts of the catalog.",
        ],
      },
    ],
  },
];
