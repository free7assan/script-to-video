import {
  Activity,
  BookOpen,
  Clock,
  Film,
  Map,
  MessageSquare,
  PenLine,
  Repeat,
  Scissors,
  Users,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch190: BlogPost[] = [
  {
    slug: "table-read-what-it-is-for",
    title: "Table Read Basics: What It Is and Why It Helps",
    excerpt:
      "A table read puts your script in the air before the camera rolls. Here is what a table read is for and how it saves you time on the actual shoot day.",
    date: "2034-03-02",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A table read is the first time your script leaves the page and enters the room. Everyone sits down, reads their parts out loud, and you listen for the places where the writing holds up and the places where it falls apart under a human voice. The camera stays off. That is the whole point.",
          "I treat the table read as cheap insurance. Fixing a weak line on paper costs you five minutes. Fixing that same line after you have booked a shoot day, hired a voice actor, and cut a rough edit costs you a weekend you will never get back. Nobody enjoys reading their own draft aloud. Everybody who skips it wishes they had not.",
          "The best reads feel a little boring. If nobody is performing, you are probably doing it right, and the boring ones tend to produce the sharpest scripts.",
        ],
      },
      {
        quote:
          "The page lies. Your mouth does not. A table read is where the two meet and settle their business.",
      },
      {
        heading: "What a table read is built to catch",
        paragraphs: [
          "Read a script silently and your brain quietly repairs the clunky bits without asking permission. Read it out loud and every repair disappears. You hear the run-on sentence, the repeated word three lines apart, the joke that looked sharp in your head and dies the moment it hits the air.",
          "A read also exposes structure. When the fifth section in a row circles the same idea, you feel the drag in your chest before anyone manages to name it. That feeling is worth more than a page of polite suggestions, because it is honest and it arrives in real time.",
          "The mouth is a better editor than the eye for one simple reason. The eye skims. The mouth cannot skim. It has to say every word you wrote, and any word you would never say out loud announces itself.",
        ],
      },
      {
        heading: "What a table read is not for",
        paragraphs: [
          "This is not a performance. You are not trying to nail the delivery, you are trying to hear the bones underneath it. An actor who over-performs a rough draft hides its problems behind charm, and everyone walks away thinking the script is finished when it is still soft in the middle.",
          "It is also not a vote. You are not counting how many people laughed. You are collecting evidence about which parts survive being spoken, and that evidence belongs to you, not to whoever in the room talks the most.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A table read is a listening exercise, and the camera stays off.",
          "Read every line aloud before you pass judgment on it.",
          "Structure problems show up as drag long before anyone names them.",
          "Keep the recording so you can trust the notes you took.",
          "Run the read before you spend a dollar on production.",
        ],
      },
      {
        heading: "How to run one in under an hour",
        paragraphs: [
          "Send the script the night before so nobody is stumbling over cold pages. Sit where you can all see each other, because a circle keeps people reading at a natural pace instead of racing to the last line.",
          "Record the whole thing on your phone. You will forget the exact second a joke died, and the recording will not. Listen back once, mark the trouble spots, then stop. The read has done its job the moment you know what to fix.",
          "One more thing. Do not rewrite during the read. Just listen and jot notes in the margin. Rewriting while other people are still reading splits your attention and you will miss the next problem coming down the page.",
        ],
      },
    ],
  },
  {
    slug: "table-read-reading-script-out-loud",
    title: "Reading Your Script Out Loud Before You Ever Film",
    excerpt:
      "Reading your script out loud is the cheapest edit you will ever make. It catches what silent reading hides and saves you real time on the set.",
    date: "2034-03-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Reading your script out loud is the single most useful thing you can do before you film. It takes twenty minutes and it catches problems that survive every pass of silent reading. If you do only one rehearsal, make it this one.",
          "I have watched writers proof a script six times and still trip over a sentence on the first take. The eye is forgiving. The ear is not, and the ear is what your audience actually has.",
          "The good news is that this habit compounds. The more you read your own work aloud, the fewer of these traps you write in the first place.",
        ],
      },
      {
        quote:
          "A sentence that looks clean can still be a sentence your mouth refuses to finish.",
      },
      {
        heading: "Why the ear catches what the eye misses",
        paragraphs: [
          "Silent reading runs at the speed of thought, which is fast and generous. Your brain predicts the next word and silently corrects the awkward one before you notice. Speaking forces you to slow down to the speed of breath, and at that speed every clumsy phrase becomes obvious.",
          "Read long enough and you start to hear your own tics. The filler word you use to bridge every paragraph. The habit of starting sentences the same way. These patterns are invisible on the page because the page has no rhythm, only spacing.",
        ],
      },
      {
        heading: "How to read for problems, not for polish",
        paragraphs: [
          "Do not try to sound good. Sounding good is a later job. Your first read is for finding the places where you stumble, the places where you run out of breath, and the places where you get bored halfway through a sentence that you wrote yourself.",
          "Mark every stumble. Circle the word that tripped you, not the whole sentence. A cluster of circles in one paragraph tells you more than any note you could write about it.",
          "Keep a pen moving the whole time. The physical act of marking keeps you from drifting into a performance and forgetting to listen.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read aloud before you film, even if you read alone.",
          "Stumbles point at the exact words that need fixing.",
          "The ear catches rhythm problems the eye cannot see.",
          "Mark the word you tripped on, not the entire line.",
          "One read beats six passes of silent proofing.",
        ],
      },
      {
        heading: "A three pass approach that works",
        paragraphs: [
          "First pass, read straight through and mark nothing. Just get the whole script into the air and feel where it drags. Second pass, read again and circle every stumble and every place you ran short of breath.",
          "Third pass, read only the marked paragraphs. If a fix makes the line easier for your mouth, keep it. If it makes the line prettier but harder to say, throw it out. Ease of speaking is the test, and it rarely steers you wrong.",
          "Repeat this three times and you will have a script that sounds like speech instead of writing. That gap between the two is the entire reason a read exists. Do this on every draft and silent proofing starts to feel incomplete, because you know it is only catching half the problems. A read is slower, but it finds the things that actually break a take, and that trade is worth making every time. The whole loop takes less time than a single bad recording session, which is exactly why I stopped trusting the eye alone.",
        ],
      },
    ],
  },
  {
    slug: "table-read-timing-your-script",
    title: "How to Properly Time a Script With a Table Read",
    excerpt:
      "Timing your script with a table read tells you if it fits the slot before you shoot. Learn the pace math that protects your edit from surprises.",
    date: "2034-03-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A table read doubles as a stopwatch. Read the whole script start to finish without stopping and you learn how long it actually runs when spoken. That number matters more than any guess you made in a word processor.",
          "Word counts lie about time. A page of dense explanation can run longer than two pages of dialogue because explanation is slow to say and dialogue is quick. Only your mouth knows the truth, so let it tell you.",
          "I keep a timer on the desk for every read, and I start it before the first word and stop it after the last. No pauses, no do-overs. That is the number the edit will actually feel.",
        ],
      },
      {
        quote:
          "Read the clock, not the word count. They disagree more often than you would like.",
      },
      {
        heading: "The pace math you can trust",
        paragraphs: [
          "Most people speak somewhere between one hundred and one hundred forty words per minute when they are reading a script they wrote. That is slower than casual conversation because your brain is processing meaning while your mouth is moving. Plan for the low end and you will rarely run long.",
          "Multiply your word count by the slow pace and you get a realistic floor. If a ten minute script comes in at fourteen hundred words, the math already tells you it will run around ten minutes at a comfortable speed, and you have maybe a minute of slack.",
          "If you speak faster than average, enjoy the extra room, but do not budget for it. Leaning on a fast pace makes a script feel rushed, and rushed is the opposite of what a well-timed video should feel like.",
        ],
      },
      {
        heading: "Where timing surprises you",
        paragraphs: [
          "The surprises almost always come from lists and long examples. A bulleted list of five items that looks compact on the page can eat forty seconds once you say each item, pause, and move to the next. Numbers and dates are worse, because your mouth slows down to get them right.",
          "Transitions are another hidden tax. Every time you say some version of now let us turn to, you spend a breath that adds up by the end of a long video.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read the full script aloud with a timer running.",
          "Plan around the slow end of your speaking pace.",
          "Lists, examples, and numbers eat more time than they look.",
          "Transitions add hidden seconds across a long script.",
          "Timing before the shoot protects your edit.",
        ],
      },
      {
        heading: "Turning the number into a decision",
        paragraphs: [
          "Once you know the real runtime, you can make a real choice. Trim, split the script into two videos, or accept the length and shoot it as is. What you should not do is discover the problem in the edit, when cutting means re-recording and re-recording means another shoot day.",
          "Write the measured time on the first page and date it. If you revise the script later, time it again, because a small rewrite can add a full minute you never intended to spend. I time every draft now, even the short ones, because the short ones are where I get lazy and assume the runtime is fine. It usually is not. The timer has saved me from shooting a script that would have needed a hard cut in the edit, and that alone makes the read worth the twenty minutes.",
        ],
      },
    ],
  },
  {
    slug: "table-read-marking-hard-lines",
    title: "Marking the Lines That Are Hard to Say Out Loud",
    excerpt:
      "Marking the lines that are hard to say turns a vague script problem into a concrete fix list you can work through before you ever actually film.",
    date: "2034-03-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Some lines fight back. You get to them in a read and your tongue stumbles or your breath runs out. Those lines are not random. They are a concrete list of fixes waiting to be made.",
          "Marking them during the read is the whole game. If you do not mark them, you will convince yourself on shoot day that you can push through, and you will spend four takes proving yourself wrong.",
          "I mark with a pencil, because the marks are temporary. A printed script with circles and slashes is a map of everything that needs a second look.",
        ],
      },
      {
        quote:
          "When your mouth trips, the line is telling you something your eye was too polite to mention.",
      },
      {
        heading: "What makes a line hard to say",
        paragraphs: [
          "The usual suspects are long clauses stacked on top of each other and abstract phrases that have no picture behind them. A sentence can be grammatically flawless and still be a trap for the person who has to speak it.",
          "Names are a common culprit. A cluster of similar sounding names in one paragraph turns a clean read into a tongue twister, and no audience enjoys watching you fight your own script.",
          "Readability tools will not catch these. A line can score perfectly on every scale and still be a mouthful, because those tools measure length, not the way air and sound behave when you actually speak.",
        ],
      },
      {
        heading: "How to mark without slowing the read",
        paragraphs: [
          "Use a simple system. Circle the exact word that tripped you. Draw a slash where you needed a breath that the punctuation did not give you. Put a small x next to any line you had to read twice.",
          "Do not stop to fix anything mid read. Fixing breaks the rhythm you are trying to measure. Mark and move on, then fix everything in one focused pass afterwards, when you can see the whole cluster of problems at once.",
          "The marks themselves are reminders, not art. Whatever shorthand gets you back to the problem fast is the right shorthand, even if it is just a messy line in the margin.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark the exact word that tripped you, not the whole line.",
          "Slash marks show where you needed an unplanned breath.",
          "Similar sounding names and long clauses cause most stumbles.",
          "Never stop the read to fix; mark and keep going.",
          "Fix the clustered marks in one pass after the read.",
        ],
      },
      {
        heading: "From marks to edits",
        paragraphs: [
          "Most hard lines get easier with one of two moves. Split the sentence, or cut the abstract phrase. Rarely do you need to rewrite the whole paragraph, and rarely does the fix hurt the meaning.",
          "Read the revised lines out loud before you close the document. The fix is only real when the words come out clean, and the only way to know is to say them.",
          "Keep the marked pages until the shoot. They are a quick reference when a line still feels off on the third take, and they remind you which fix you already decided to make. The marks turn a feeling into a task, and a list of tasks is something you can actually clear before the camera comes out. I have never regretted marking too much during a read, and I have regretted skipping a mark more times than I can count. Do it while the stumble is still in your mouth.",
        ],
      },
    ],
  },
  {
    slug: "table-read-second-reader",
    title: "Why a Second Reader Improves Every Table Read",
    excerpt:
      "A second reader turns a solo table read into a real test. Here is how another voice catches the problems you cannot hear when reading alone.",
    date: "2034-03-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Reading your script alone is useful, but a second reader changes the test. When someone else says your words back to you, you hear them as an audience would, without the private context that lives in your head. That distance is the whole benefit.",
          "You wrote the script, so you know what every line is supposed to mean. A second reader does not. Where they hesitate, your meaning leaked out of the words and into your intentions.",
          "I always ask someone who did not help write it. A co-writer will fill the same gaps you do, because they already know what you meant.",
        ],
      },
      {
        quote:
          "You cannot hear your own script the way a stranger hears it, and a second reader is the closest thing to a stranger you can get for free.",
      },
      {
        heading: "What another voice reveals",
        paragraphs: [
          "A second reader exposes the spots where the meaning depends on tone you never wrote down. If they read a sincere line as sarcasm, or a joke flat, the problem is usually the writing, not the reader. Their confusion is data.",
          "They also reveal pace. Two voices trading lines naturally speed up and slow down, and you can hear where the script forces an unnatural rhythm. Solo reading hides this because you are setting the pace for yourself.",
          "The best readers are not the most dramatic ones. They are the ones honest enough to tell you when they lost the thread, even when they can see how much work you put into it.",
        ],
      },
      {
        heading: "How to brief your reader",
        paragraphs: [
          "Tell them not to act. Ask them to read plainly and stop whenever something confuses them. Confusion is the most valuable note they can give you, so make it easy for them to interrupt.",
          "Give them the script a little ahead of time so they are not seeing it cold. A reader who has skimmed once will give you cleaner feedback than one who is discovering the whole thing live.",
          "Keep the session short. Thirty focused minutes with a reader beats two hours of casual reading, because attention fades and so does the quality of the notes.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A second reader hears the script the way an audience will.",
          "Confusion from a reader usually points at a writing problem.",
          "Ask them to read plainly, not to act.",
          "Let them interrupt whenever a line does not land.",
          "Reading aloud together exposes pace you cannot catch alone.",
        ],
      },
      {
        heading: "Reading with them, not at them",
        paragraphs: [
          "Do not defend the script while they read. If they misread a line, that is a signal, not an attack. Take the note, say thank you, and keep moving. You can decide later which notes to act on.",
          "Record the session if you can. Two people talking through a script generate more insight than either one alone, and you will not remember all of it once the conversation ends.",
          "When the session ends, write down the three moments that stuck with you. Those are the ones worth acting on before you head to the next read. The reader does not need to be an expert in your topic. They need to be someone who will tell you the truth when a sentence stops making sense, and that honesty is worth more than any amount of subject knowledge. Find one person, keep them close, and read to them early and often.",
        ],
      },
    ],
  },
  {
    slug: "table-read-dry-runs-camera-on",
    title: "Dry Runs With the Camera On Before You Shoot It",
    excerpt:
      "Dry runs with the camera on turn a rehearsal into real practice. See how a recorded run exposes what a quiet table read cannot ever truly show.",
    date: "2034-03-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "A dry run with the camera on is a rehearsal that leaves evidence. You perform the script the way you plan to film it, record the whole thing, and watch it back before the real shoot. It is uncomfortable and it is worth it.",
          "The camera sees things the room does not. It catches the pause that felt natural and reads as dead air. It catches the gesture you thought was subtle and reads as fidgeting. Watching yourself is the fastest feedback loop you have.",
          "The first dry run is always the worst one you will record, which is exactly why you do it early, when there is still time to change the script.",
        ],
      },
      {
        quote:
          "The room is kind. The lens is not. A dry run hands you the difference before it costs you a shoot day.",
      },
      {
        heading: "What the camera exposes that a read cannot",
        paragraphs: [
          "In a table read you hear the script. In a dry run you see the script, and sight adds a whole category of problems. Eye contact with the lens, posture, and the pacing of your hands all show up, and none of them appear in an audio only read.",
          "The lens is also relentless about energy. A delivery that feels lively in the moment can look flat on playback, especially in a talking head format where there is nothing else for the eye to watch.",
          "Playback is where your assumptions about your own delivery go to die. You think you paused for effect. The footage shows two full seconds of nothing and a slow blink.",
        ],
      },
      {
        heading: "How to run a dry run that helps",
        paragraphs: [
          "Treat it like the real thing. Set up the camera where it will actually sit, stand where you will actually stand, and go through the script start to finish without stopping. A run you keep restarting is not a run, it is a series of false starts.",
          "Watch the recording the same day while the memory is fresh. Note the timestamps where your attention wandered, because those are almost always the moments the edit will have to cut around.",
          "If the dry run runs long, resist the urge to speed up. A rushed take is a worse outcome than a long one, and you can always trim in the edit after you have a clean recording.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A dry run is a rehearsal on camera that leaves a recording.",
          "The lens reveals pauses, gestures, and low energy a read hides.",
          "Run the whole script without stopping to restart.",
          "Watch the playback the same day while it is fresh.",
          "Note the timestamps where your own attention drifted.",
        ],
      },
      {
        heading: "The mindset that makes it useful",
        paragraphs: [
          "Do not aim for perfect on a dry run. Aim for honest. You are not trying to produce the final video, you are trying to see what the final video would look like if you stopped preparing right now. That picture is the whole point.",
          "Most people improve faster from one recorded dry run than from ten silent reads, because the camera keeps score. You cannot argue with footage of yourself losing energy halfway through section three.",
          "Keep the recordings even after the shoot. Comparing an early dry run to the final take is the clearest proof that the rehearsal paid off, and it shows you what to fix next time.",
        ],
      },
    ],
  },
  {
    slug: "table-read-adjusting-from-rehearsal",
    title: "How to Adjust Your Script After Every Rehearsal",
    excerpt:
      "Adjusting your script from rehearsal notes keeps a table read from being a one time event. Learn which fixes to make and which ones to ignore.",
    date: "2034-03-20",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A rehearsal only pays off if you adjust the script afterwards. The read shows you the problems, and the revision is where you solve them. Skip the adjustment and you have spent an hour listening to yourself without changing anything.",
          "The trick is knowing which notes to take. Every rehearsal produces more feedback than the script can absorb, and a writer who tries to fix all of it ends up with a script that pleases the room and bores the audience.",
          "I keep a running list between reads. Every fixed line gets crossed off, and every stubborn one stays on the page until it earns its way out.",
        ],
      },
      {
        quote:
          "The read is a diagnosis. The rewrite is the treatment. Do not confuse the two.",
      },
      {
        heading: "Sorting notes that matter",
        paragraphs: [
          "Separate mechanical notes from taste notes. Mechanical notes are things like a stumble, a sentence that ran out of breath, or a fact that felt unclear. Fix those without argument. Taste notes are things like I would have worded it differently. Those you weigh against your own intent.",
          "A note from one reader is an opinion. The same note from three readers is a pattern, and patterns are worth acting on. When several people trip on the same line, the line is the problem, not the readers.",
          "The hardest notes to judge are the ones that are half right. A reader who says a section drags may have the right symptom and the wrong cure, so treat their discomfort as the signal and find your own fix.",
        ],
      },
      {
        heading: "Rewriting without losing the point",
        paragraphs: [
          "When you fix a hard line, keep the meaning and change the shape. Split the sentence or replace the abstract word with a concrete one. The goal is a line that says the same thing in a way your mouth can deliver.",
          "Resist the urge to rewrite whole sections based on one rough read. Small, targeted edits compound, and they keep you from throwing out good material along with the bad.",
          "Set a limit on how long you will keep revising. Past a certain point you are polishing for yourself, and the audience will never notice the difference you are chasing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fix mechanical notes immediately and without argument.",
          "Treat a repeating note as a pattern, not a preference.",
          "Keep the meaning and change the shape of a hard line.",
          "Make targeted edits instead of rewriting whole sections.",
          "Re-read the revised lines to confirm the fix works.",
        ],
      },
      {
        heading: "Closing the loop",
        paragraphs: [
          "After you revise, read the changed lines out loud again. This is the only way to know whether the fix actually worked. A revision that still stumbles is not a revision, it is a second draft of the problem.",
          "Then schedule the next read. Each pass should shrink the list of problems, and when a read produces almost no notes, you are ready to shoot. That falling number is your signal to stop rehearsing and start filming.",
          "Version your scripts so you can trace a change back to the read that caused it. When a fix makes things worse, you will want to know which pass introduced it. A script that improves with each read is telling you the process works, and a script that keeps circling the same notes is telling you something deeper is wrong. Trust the trend, not your mood on any single pass. When the notes stop changing, the script has stopped improving.",
        ],
      },
    ],
  },
  {
    slug: "table-read-rehearsing-without-overdoing",
    title: "Rehearsing on Camera Without Overdoing the Lines",
    excerpt:
      "Rehearsing on camera without overdoing it is a fine balance. Run the lines too many times and your delivery goes flat. Here is exactly how to stop.",
    date: "2034-03-23",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        paragraphs: [
          "There is a point where rehearsal stops helping. Read and run a script enough times and the words go stale in your mouth, and a performance that was warm on the third run turns mechanical on the twelfth. The skill is knowing when to stop.",
          "Too little rehearsal and you fumble the hard lines. Too much and you sound like you are reciting something you memorized in a waiting room. The sweet spot sits between those two, and it is narrower than most people think.",
          "I have watched good scripts die in the hands of a presenter who ran them forty times, and I have watched rough scripts carry a room because the person still meant every word.",
        ],
      },
      {
        quote:
          "Over rehearse and you trade nervousness for numbness. Neither one is a performance.",
      },
      {
        heading: "Why overdoing it backfires",
        paragraphs: [
          "When you repeat a line often enough, it stops meaning anything and becomes a sound. The audience can hear that. A phrase delivered by rote carries no weight, even when every word is technically correct.",
          "Over rehearsing also kills the small variations that make a delivery feel alive. A fresh reading has little discoveries in it, small stresses and pauses that surprise even you. Run the same line fifteen times and those discoveries are gone.",
          "The flatness is contagious, too. When you check out, the audience checks out with you, and no amount of editing can paste energy back into a delivery that was not there.",
        ],
      },
      {
        heading: "Rehearsing with a stopping rule",
        paragraphs: [
          "Pick a number of passes before you start and commit to it. Two or three full runs are enough for most scripts. Once you can get through the whole thing without a stumble, you are done, and further reps are likely to cost more than they give.",
          "Rehearse for structure, not for perfection. Your goal is to know where each section starts and ends and how the whole thing flows, not to deliver every sentence with flawless polish.",
          "If you must run it again, run it with a purpose. Read once for pacing, once for emphasis, once for the hard lines. Aimless repetition is what wears a script out.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Stop rehearsing once you can run the whole script clean.",
          "Two or three full passes beat a dozen anxious repetitions.",
          "Repeated lines can turn into sound and lose their meaning.",
          "A fresh reading carries small discoveries that vanish with over rehearsal.",
          "Rehearse the structure first, then trust yourself to perform.",
        ],
      },
      {
        heading: "Staying fresh on shoot day",
        paragraphs: [
          "On the day, do a single light run to warm up and then stop. Ration your energy for the takes that matter, because a dry, over rehearsed delivery is hard to walk back once the camera is rolling.",
          "If a line has gone numb, change something small on purpose. A different stress, a pause in a new place. The tiny change forces you to think about the words again, and thinking is what keeps a line from going flat.",
          "Keep the final script visible on a confidence monitor or a page. Knowing the safety net is there lets you relax into the performance instead of gripping every word for dear life. A rehearsed line should feel like something you are telling someone, not something you are getting through. When it starts to feel like a recitation, close the document and walk away for a while. Freshness comes back faster than you think, and you cannot force it with more reps.",
        ],
      },
    ],
  },
  {
    slug: "table-read-notes-to-keep",
    title: "The Notes You Should Keep During a Table Read",
    excerpt:
      "The notes you keep during a table read decide what gets fixed. Learn the few note types worth writing and the many that just waste your time.",
    date: "2034-03-26",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "During a read, the temptation is to write everything down or nothing at all. Both are mistakes. The notes worth keeping are short, specific, and tied to a moment you can point to on the page.",
          "A good note tells you what to do next. A bad note just records that you felt something, without telling you where or why. Train yourself to write the first kind and let the second slip by.",
          "I write notes in the margin, not in a separate document. Margin notes stay attached to the line that caused them, and that attachment is half their value.",
        ],
      },
      {
        quote:
          "A note that cannot tell you which line to change is not a note. It is a mood.",
      },
      {
        heading: "The four notes worth writing",
        paragraphs: [
          "First, stumbles: the words that tripped you as you spoke. Second, drags: the places where you wanted to skip ahead. Third, breaths: the spots where you ran out of air mid sentence. Fourth, questions: the moments where you lost track of what the script was saying.",
          "Each of these points at a specific location and suggests a specific action. A stumble wants a rewrite, a drag wants a cut, a breath wants a pause or a shorter clause, and a question wants clarity.",
          "You will not need all four every time. Some scripts only stumble, some only drag. Notice which category dominates your notes and it will point straight at the weakness in your draft.",
        ],
      },
      {
        heading: "Notes that waste your time",
        paragraphs: [
          "Vague notes like this part feels off give you nothing to act on. So do notes about your own nerves, which are real but not useful to the script. And notes that rewrite the line on the spot, before you have even finished reading it, tend to solve the wrong problem.",
          "Try not to editorialize. You are collecting symptoms during the read, and the diagnosis comes later, once you can see all the notes together and find the pattern.",
          "If you must write a feeling, force yourself to add the line number next to it. Half the time you will realize you cannot, which means the note was never about the script at all.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write short, specific notes tied to a line on the page.",
          "Track stumbles, drags, breaths, and questions.",
          "Each note type points to a clear fix.",
          "Skip vague notes that only record a feeling.",
          "Diagnose patterns after the read, not during it.",
        ],
      },
      {
        heading: "A note system you can run in one pass",
        paragraphs: [
          "Pick two or three symbols and use them consistently. A circle for a stumble, a squiggle for a drag, an underline for a question. Symbols let you mark without breaking your reading pace, and they are faster to scan later than full sentences.",
          "After the read, transfer the marks into a short list. Group them by type so the fixes cluster naturally. When you can see that six drags all sit in the same section, you have found a structural problem hiding inside six small notes.",
          "Keep the notes even after you make the fixes. The next read will produce a new set, and comparing the two shows you whether the script is actually getting tighter or just changing shape. The comparison between two sets of notes is the clearest evidence you have about whether the revision helped. Look for the categories that shrank and the ones that grew, because a new batch of the same drags means your fix missed the real problem. Notes are a record, and records let you see the trend.",
        ],
      },
    ],
  },
  {
    slug: "table-read-to-shoot-plan",
    title: "Turning a Table Read Into a Working Shoot Plan",
    excerpt:
      "Turning a table read into a shoot plan connects rehearsal to production. Use the read to decide what you record and in exactly the right order.",
    date: "2034-03-29",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripts", "presenting", "feedback"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "A table read is not just for the script. It is also the first chance to plan the shoot. By the time you finish reading, you know which sections are strong, which lines are hard, and where the video will need visual support.",
          "The read tells you what to record and in what order. Sections that share a location or a costume can be grouped, and a smart shoot plan saves you hours of setup that the read already paid for.",
          "I treat the read and the plan as one job now. Finishing a read without writing down a shoot order feels like leaving the last page of the book unread.",
        ],
      },
      {
        quote:
          "The read is where the script and the schedule first meet. Use it or book your shoot blind.",
      },
      {
        heading: "Reading the script as a production",
        paragraphs: [
          "As you read, picture each section on camera. Which parts need a visual, a demo, or a cutaway, and which parts can be delivered straight to the lens? Mark them as you go, because the read gives you a clear view of where the words alone will not carry the video.",
          "Notice where you will need props or a second location. Those needs add setup time, and spotting them during a read is far cheaper than discovering them on the day with the crew already waiting.",
          "You will also notice pacing on camera. Sections that read fast may need a longer visual to give the audience room to breathe, and that is a note for the edit as much as the shoot.",
        ],
      },
      {
        heading: "Building the shoot order",
        paragraphs: [
          "Group what you can. Record every talking head segment in one block so the lighting never has to move. Shoot all the screen recordings together so the software is only open once. Batch the work and the day runs itself.",
          "Put the hardest lines early in the shoot, when your energy is highest. Save the easy sections for the end, when you are tired. A tired read of an easy line is fine, a tired read of a complex explanation is a wasted take.",
          "Leave a buffer at the end of the day for the sections you underestimated. Every shoot has one, and the buffer is what keeps a small surprise from turning into a reshoot.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use the read to spot where visuals are needed.",
          "Group scenes by location, lighting, and graphics.",
          "Shoot the hardest lines while your energy is high.",
          "Save easy sections for the tired end of the day.",
          "Turn read notes into a written shoot order you can follow.",
        ],
      },
      {
        heading: "The plan you carry to set",
        paragraphs: [
          "Write it down. A shoot plan on paper keeps the day honest, because you can check off each section and see your progress. The read gave you the insight, and the plan turns that insight into a sequence of concrete tasks.",
          "Include the hard lines and their fixes in the plan. When a line still fights you on set, you can flip straight to the revision you already decided on, instead of improvising a fix under pressure with the camera running.",
          "Keep the plan short enough to hold in one hand. A single page you actually use beats a detailed document you leave in the car. The read and the shoot plan are two halves of the same job, and skipping the plan wastes the insight the read just gave you. Write the order down while it is fresh, tape it somewhere you can see, and let it carry you through the day. A shoot without a plan is just expensive rehearsal.",
        ],
      },
    ],
  },
];
