import { Layers, MessageSquare, Workflow, Target, Flame, Repeat, Waves, Flag, Scissors, BookOpen } from "lucide-react";
import type { BlogPost } from "../types";

export const batch123: BlogPost[] = [
  {
    slug: "scripts-outline-before-writing",
    title: "Why Outlining Beats Writing by the Seat of Your Pants",
    excerpt:
      "An outline before you write a video script saves rewrites and keeps the story tight. Here is how to plan your beats before you touch the page.",
    date: "2028-08-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "outlining"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Outlining first beats writing by the seat of your pants because it forces you to solve structure before you solve sentences. You decide what the video is about, what order the ideas land in, and how it ends before you write a single line of narration.",
          "The payoff arrives later. Once the shape is settled, drafting becomes filling in blanks instead of guessing your way forward, and you stop discovering halfway down page two that the whole thing has no destination.",
          "I avoided outlines for years because they felt like homework. Then I noticed that every freewritten script collapsed in the middle, and I could trace each collapse back to a plan I never made.",
        ],
      },
      {
        heading: "An outline is a map, not a cage",
        paragraphs: [
          "A common fear is that an outline kills spontaneity. It does the opposite. A map tells you where the cliff is so you can run faster everywhere else, and a script plan works the same way.",
          "You can still riff while drafting. A better line shows up, a joke lands, a stray thought turns out to be the best part of the video. The outline just tells you whether that new material belongs here or in a different episode.",
          "When a tangent is genuinely good, I add it to the map on purpose rather than smuggling it in. That small pause keeps a script from drifting into a second topic nobody asked for.",
          "The map also gives you permission to stop. When the beats are covered, the script is done, and you avoid padding the ending because you cannot tell whether you have said enough.",
        ],
      },
      {
        quote: "An outline is where a video is won or lost. Everything after it is just typing.",
      },
      {
        heading: "What a useful outline holds",
        paragraphs: [
          "A working outline is short. It fits on one screen and reads like a list of promises you intend to keep, nothing more.",
        ],
        bullets: [
          "One sentence stating the single idea the video delivers.",
          "The opening promise, written in the exact words you might say out loud.",
          "Three to five beats that each move the idea forward instead of sideways.",
          "A clear ending, whether that is a call to action or a closing image.",
          "A short note on what you are deliberately leaving out.",
        ],
      },
      {
        heading: "The two pass method I use",
        paragraphs: [
          "On the first pass I write the beats as ugly fragments. No polish, no transitions, just the bones. If a beat cannot be stated in a few words, it is usually two beats wearing one coat.",
          "On the second pass I read the fragments out loud and ask where an audience might get bored. Any beat that only repeats an earlier one gets merged or cut. This is the cheapest edit you will ever make, because nothing has been written yet.",
          "Only then do I draft. By the time I am writing full sentences, the hard decisions sit behind me and I can focus on rhythm, phrasing, and how the lines sound in my mouth.",
        ],
      },
      {
        heading: "When to break your own outline",
        paragraphs: [
          "Outlines are not sacred. If two beats fight each other and the video feels flat, the plan is wrong, not the writing. Rewrite the map and keep going.",
          "The one rule I never break is finishing the draft once the plan feels right. A broken outline is easier to fix than a blank page, and a rough draft gives you something real to react to.",
          "Plans also teach you about your own habits. After a few projects you notice which structures you overuse, and the outline becomes a record of how you think rather than a chore you repeat.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Solve structure first so drafting becomes filling in blanks rather than guessing.",
          "Treat the outline as a map that frees you to run, not a cage that traps you.",
          "Keep the plan to one screen so single ideas stay single.",
          "Read the beats out loud and cut repeats before you write a word.",
          "Rewrite the plan when the ideas collide, and finish the draft once it holds.",
        ],
      },
    ],
  },
  {
    slug: "scripts-writing-for-the-ear",
    title: "Writing for the Ear: How to Make a Script Sound Human",
    excerpt:
      "Writing for the ear means reading every line out loud and cutting what trips the tongue. A script that sounds spoken keeps viewers listening longer.",
    date: "2028-08-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "voice", "delivery"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Writing for the ear means the script is built to be heard once, at normal speed, with no chance to reread a confusing line. Sentences stay short, ideas arrive in order, and every phrase survives being spoken out loud.",
          "Most scripts fail at this because they were written for the eye. They look fine on the page and crumble in the mouth, usually right where the sentence gets long or the clause order flips.",
          "The fix is not dumbing anything down. It is matching the way people actually talk, where the point comes early and the detail supports it afterward.",
        ],
      },
      {
        heading: "Read it out loud or lose",
        paragraphs: [
          "The single best editing tool for a script is your own voice. Reading aloud exposes every clumsy clause, every buried verb, and every place where you run out of breath before the sentence ends.",
          "When I read a script aloud and stumble, I do not blame my delivery. I mark the spot and rewrite it. A listener will never rehearse, so the line has to land the first time.",
          "I also read to someone else when I can. Watching a face go blank tells me more in five seconds than an hour of silent rereading ever could.",
        ],
      },
      {
        quote: "If you have to read a line twice to understand it, the viewer already scrolled away.",
      },
      {
        heading: "Habits that make a script sound spoken",
        paragraphs: [
          "Small moves separate a page that reads well from a script that plays well.",
        ],
        bullets: [
          "Put the subject and verb near the start so the listener does not wait for the point.",
          "Break long sentences into two short ones instead of leaning on commas.",
          "Say the concrete word first and let the abstract version follow, if it is needed at all.",
          "Use contractions, because nobody says do not when they are talking fast.",
          "Repeat a key term instead of swapping in a synonym the ear cannot track.",
        ],
      },
      {
        heading: "The rewrite pass that fixes tongue twisters",
        paragraphs: [
          "Some lines are grammatically clean and still impossible to say. Two hard consonants collide, a string of s sounds hisses, or a phrase echoes a word from the line before it.",
          "I hunt these down in a dedicated pass. I read the script at full speaking pace and circle anything that makes my mouth work harder than it should.",
          "The repair is usually a swap. Trade a word, flip the order, cut an adjective. The meaning stays, but the line suddenly feels easy, and easy is what sounds natural.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write for one listen at full speed, not for a reader who can go back.",
          "Read every script out loud and trust the stumbles as honest feedback.",
          "Keep the subject and verb early so the point lands before attention drifts.",
          "Prefer contractions and repeated key terms over stiff wording and synonyms.",
          "Run a final pass that hunts lines which are hard to say, not just hard to read.",
        ],
      },
    ],
  },
  {
    slug: "scripts-video-structure-basics",
    title: "The Three Part Structure Behind Every Video That Works",
    excerpt:
      "Video structure is simpler than it looks. A hook earns attention, a real body delivers the idea, and a close tells viewers what happens next.",
    date: "2028-08-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "outlining"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Video structure is a hook, a body, and a close. The hook buys attention, the body pays off the promise, and the close tells the viewer what to do or feel next.",
          "That skeleton holds for a thirty second short and a forty minute essay. The scale changes, the parts do not, and knowing which part you are in keeps you from rambling.",
          "Most scripts that feel messy are not badly written. They are missing one of the parts, or they spend so long in the hook that the body never gets room to do its job.",
        ],
      },
      {
        heading: "Why three parts and not five",
        paragraphs: [
          "I have tried the elaborate frameworks with eight named sections and a diagram. They are useful for a team document and useless when you are alone with a blank page.",
          "Three parts are easy to hold in your head while drafting. If you lose your place, you can ask one question, what part is this, and the answer usually fixes the paragraph.",
          "Fewer boxes also mean fewer places to hide. A bloated template lets weak writing look organized, while a simple one forces the actual thinking out into the open.",
        ],
      },
      {
        quote: "Structure is not a straitjacket for creativity. It is the thing that lets a good idea survive contact with the audience.",
      },
      {
        heading: "What each part owes the viewer",
        paragraphs: [
          "Each part has one job, and confusing the jobs is where scripts go soft.",
        ],
        bullets: [
          "The hook states why this video is worth the next minute of someone's life.",
          "The body delivers on that promise with evidence, story, or steps that actually resolve it.",
          "The close sends the viewer somewhere, whether that is the next video or a decision.",
          "A transition stitches the parts together so the seams do not show.",
        ],
      },
      {
        heading: "The middle is where structure earns its keep",
        paragraphs: [
          "The body is the hard part. Openings and endings are fun to write, so they get the attention, while the middle turns into a list of loosely related points that never quite connect.",
          "A body works when each beat raises a question the next beat answers. That chain gives the viewer a reason to stay, because a small question is still open at every pause.",
          "When I plan a body, I write the beats as a column and draw lines between them. Any beat with no line pointing away from it is probably the end, and anything with no line pointing in is probably unnecessary.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat every script as a hook, a body, and a close, no matter the length.",
          "Give each part one job and never let the hook do the body's work.",
          "Chain the body beats so each answers what the previous one raised.",
          "Map the body as a column and cut beats with nothing pointing toward them.",
        ],
      },
    ],
  },
  {
    slug: "scripts-one-idea-per-video",
    title: "One Idea Per Video and Why It Saves Your Retention",
    excerpt:
      "One idea per video keeps the promise clear and the audience focused. When a script carries two ideas, the viewer usually tends to follow neither.",
    date: "2028-08-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "retention"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "One idea per video means the whole script serves a single point from the first line to the last. It keeps the title honest, the hook focused, and the ending satisfying.",
          "When a script carries two ideas, the viewer tends to follow neither. Attention splits, the video feels longer than it is, and the ending satisfies half the room at most.",
          "The rule is not about length. A short video with two ideas is just as split as a long one, because the problem is focus, not runtime.",
        ],
      },
      {
        heading: "The cost of a second idea",
        paragraphs: [
          "A second idea feels free while you are drafting. It is interesting, it is related, and cutting it seems wasteful. So you wedge it in near the end, where it can do the least damage.",
          "That wedge changes what the video is about. The title promised one thing, the hook set up one thing, and now the viewer has to hold a second thing that never got its own setup.",
          "Retention dips in those final minutes for a reason. A viewer who came for one answer senses that the video has quietly become about something else and leaves before the real payoff lands.",
        ],
      },
      {
        quote: "A video that tries to say two things usually says nothing. Pick the hill and take it.",
      },
      {
        heading: "How to test whether you have one idea",
        paragraphs: [
          "You can check focus before you write by forcing the whole script through a few questions.",
        ],
        bullets: [
          "Can you state the idea in one sentence without the word and?",
          "Does every beat either support that sentence or prepare the next beat?",
          "Would cutting one section change what the video is fundamentally about?",
          "Could the title promise everything the script actually delivers?",
          "If a stranger read only the last line, would they know the point?",
        ],
      },
      {
        heading: "What to do with the ideas you cut",
        paragraphs: [
          "The second idea is rarely waste. It is usually a separate video that has been trying to be born early, and it deserves its own hook and payoff.",
          "I keep a running list of these strays. Some become scripts next month, some reveal that I was circling a bigger topic that deserves a whole series.",
          "Saving the idea also removes the sting of cutting it. You are not killing it, you are filing it, and the current video gets to stay sharp because of the delay.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Let one sentence define the video and make every beat serve it.",
          "Expect a second idea to dilute the first, especially when it lands late.",
          "Test focus with a sentence that uses no and, then check the title against it.",
          "Bank the ideas you cut, because most of them are next month's scripts.",
        ],
      },
    ],
  },
  {
    slug: "scripts-opening-lines",
    title: "Opening Lines That Buy You Thirty More Seconds",
    excerpt:
      "Your opening line decides whether anyone hears the rest. A strong first sentence makes a promise, names the stakes, and earns the next thirty seconds.",
    date: "2028-08-10",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "hooks", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Your opening line decides whether anyone hears the rest of the video. A strong first sentence makes a promise, signals the stakes, and gives the viewer a reason to keep listening for the next half minute.",
          "The line does not need to be clever. It needs to be clear about what is coming and why it matters, because a viewer makes the stay or leave decision in seconds.",
          "I write the opener last most of the time. Once I know exactly what the video delivers, I can write the line that best sells it.",
        ],
      },
      {
        heading: "What a first line must do",
        paragraphs: [
          "A first line is a handshake. It tells the viewer who is talking, what the topic is, and whether this is for them, all before the second sentence arrives.",
          "It also sets the tone for everything after it. A calm opener signals a calm video. A blunt opener promises a direct one. Break that promise in line two and the viewer feels the mismatch even without naming it.",
          "The best openers I write tend to include a small tension. A question left hanging, a claim that sounds too strong to be true, a number that does not add up yet. Tension is what keeps a finger off the back button.",
        ],
      },
      {
        quote: "The opener is not a warm up. It is the whole pitch, compressed into one breath.",
      },
      {
        heading: "Openers that fail",
        paragraphs: [
          "Some openings fail so often that I check every draft against the same list.",
        ],
        bullets: [
          "The greeting: a minute of hellos before anything useful happens.",
          "The apology: explaining why the video might be imperfect before it starts.",
          "The buried point: stating the topic but not the reason to care about it.",
          "The bait: a dramatic promise the rest of the script never pays off.",
          "The warm up: clearing your throat on camera while the viewer waits for the video to start.",
        ],
      },
      {
        heading: "How to write five and pick one",
        paragraphs: [
          "I rarely trust my first opener. I write several versions of the same first line, each leaning on a different angle, then read them back to back.",
          "Reading them in a row makes the weak ones obvious. The line that makes me want to hear sentence two is the one the audience would keep, and that reaction is hard to fake.",
          "Drafting options also frees me from polishing a dud. It is faster to write five rough openers than to rescue one that was never going to work.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the opening line as the whole pitch, not a warm up.",
          "Make a promise and imply a stake within the first sentence.",
          "Match the tone of the opener to the tone of the video.",
          "Cut greetings, apologies, and warm ups that delay the point.",
          "Write several options and keep the one that pulls you into sentence two.",
        ],
      },
    ],
  },
  {
    slug: "scripts-transitions",
    title: "Transitions That Keep Viewers From Clicking Away",
    excerpt:
      "Good transitions hide the seams between ideas and carry momentum forward. Weak ones let attention drop exactly where a viewer decides to leave.",
    date: "2028-08-13",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "pacing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Transitions connect one idea to the next so the viewer never has a reason to pause and reconsider. They carry momentum across the seams and make a script feel like one continuous thought.",
          "Weak transitions are where attention drops. A viewer who senses the video has finished a section may decide this is a natural place to leave, and the exit costs you the rest of the runtime.",
          "The fix is to link ideas by cause, question, or contrast, so each section flows into the next instead of stopping cleanly.",
        ],
      },
      {
        heading: "Why transitions feel hard",
        paragraphs: [
          "Transitions are hard because the writer already knows how the ideas connect. In your head the link is obvious, so you skip it and expect the audience to bridge the gap themselves.",
          "The audience cannot see your notes. They only hear the last line and the next line, with nothing in between, so the responsibility for the bridge is yours.",
          "When I get stuck on a transition, I say the two ideas out loud and finish this sentence, the second one follows because. Whatever lands there is usually the transition I was missing.",
        ],
      },
      {
        quote: "Every hard cut is a small invitation to leave. A good transition closes the door on that idea.",
      },
      {
        heading: "Transition moves that never get old",
        paragraphs: [
          "A few reliable moves cover most scripts without sounding repetitive.",
        ],
        bullets: [
          "Cause and effect: the last line sets up a problem the next section solves.",
          "Open question: end on a question the following beat answers.",
          "Contrast: show the exception that makes the next rule necessary.",
          "Callback: return to an image from earlier so the new section feels earned.",
          "Time shift: move the story forward with a clear before and after.",
        ],
      },
      {
        heading: "The pause as a transition",
        paragraphs: [
          "Not every transition needs words. A deliberate pause does work that a sentence would only slow down, especially between two beats that are already tightly linked.",
          "A pause gives the viewer a moment to absorb a point before the next one arrives. It also signals that something new is starting without a clunky line announcing it.",
          "I mark pauses in the script as beats, the same way I mark a line to emphasize. Planning them ahead keeps the delivery from turning into a wall of continuous speech.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Link ideas by cause, question, or contrast so sections flow instead of stopping.",
          "Remember the audience cannot see the connection that feels obvious to you.",
          "Draft the transition by finishing the sentence, the next idea follows because.",
          "Use a planned pause when a line would add more weight than the moment needs.",
        ],
      },
    ],
  },
  {
    slug: "scripts-writing-the-middle",
    title: "Writing the Middle Without Losing the Plot or Momentum",
    excerpt:
      "The middle of a video is where most scripts sag. Keeping the stakes visible and the questions open is how you hold attention past the halfway point.",
    date: "2028-08-16",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "pacing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "The middle sags because the stakes that opened the video fade once the topic is introduced. Attention holds when each beat keeps a question open and moves the viewer closer to the payoff.",
          "Most scripts spend their energy on the opening and the ending, which leaves the middle as a list of facts with nothing pulling the viewer through them.",
          "A strong middle is not busier. It is more purposeful, with every beat doing work the audience can feel.",
        ],
      },
      {
        heading: "The middle sags because the stakes vanish",
        paragraphs: [
          "An opening works because something is at risk. There is a question, a gap, or a promise, and the viewer wants it resolved. Somewhere in the middle, that pressure quietly disappears.",
          "Once the topic is fully explained, the remaining beats feel like added detail rather than progress. The viewer senses the answer has arrived and starts weighing whether to stay for the extras.",
          "I fix this by revealing the payoff slowly. If the video promises a method, the early beats show why the obvious approach fails, and the middle earns the right to present the real thing.",
        ],
      },
      {
        quote: "A middle without tension is just a list. A list does not hold anyone past the first third.",
      },
      {
        heading: "Tactics for keeping the middle alive",
        paragraphs: [
          "These moves keep pressure on the script when the easy excitement of the opening is gone.",
        ],
        bullets: [
          "Withhold the full answer until the beat where it actually lands.",
          "Introduce a complication that the next section has to resolve.",
          "Raise the cost of getting it wrong so the stakes stay visible.",
          "Change the format, from explanation to example to demonstration, to reset attention.",
          "Cut anything that explains without advancing the viewer toward the payoff.",
        ],
      },
      {
        heading: "Plan the midpoint before you draft",
        paragraphs: [
          "I decide the midpoint before I write the middle. Knowing the turn keeps the first half pointing at it and the second half building from it, so the whole section has a direction.",
          "The midpoint does not need to be dramatic. It can be a shift from theory to practice or from problem to solution. What matters is that the viewer can feel the video changing gears.",
          "When I cannot name the midpoint, that is a warning sign. It usually means the script has enough material for an opening and an ending but not enough for the space between them.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep a question open so the viewer has a reason to reach the payoff.",
          "Reveal the answer slowly instead of spending it in the first third.",
          "Introduce a complication that the next section must resolve.",
          "Decide the midpoint before drafting, and treat a missing midpoint as a warning.",
        ],
      },
    ],
  },
  {
    slug: "scripts-call-to-action-placement",
    title: "Where to Place a Call to Action in a Video Script",
    excerpt:
      "Call to action placement changes how your audience responds. An early ask builds momentum while a late ask catches viewers already convinced.",
    date: "2028-08-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "conversion"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Call to action placement depends on what you are asking and how warm the audience is. An early ask rides the momentum of a strong hook, while a late ask lands with viewers who watched the whole video.",
          "Most creators pick a spot out of habit and never test it. Moving the ask by a few beats often changes the response more than rewriting the wording ever does.",
          "The safe default is to ask late for big commitments and early for low effort ones, then adjust based on what the video is actually about.",
        ],
      },
      {
        heading: "Early asks and late asks do different jobs",
        paragraphs: [
          "An early ask works best when the action is small. A subscribe or a quick click costs the viewer almost nothing, so asking before they have fully decided is a fair trade for the value already given.",
          "A late ask fits a bigger commitment. Watching a whole video builds trust, and a viewer who stayed to the end is far more likely to buy, book, or sign up than one who only saw the intro.",
          "The mistake is asking for something large early, before the video has earned it. That reads as pushy because the viewer has not yet received the value the ask implies.",
        ],
      },
      {
        quote: "Ask for the small thing early and the big thing late. The order of your asks should match the order of your proof.",
      },
      {
        heading: "Where the ask fits by video type",
        paragraphs: [
          "The right spot also depends on the shape of the video itself.",
        ],
        bullets: [
          "A tutorial can ask early, because a viewer who came to learn already intends to act.",
          "A story driven video should ask after the emotional payoff, not before it.",
          "A product review earns the ask near the end, once the verdict is clear.",
          "A short has room for one ask, so make it the smallest possible action.",
        ],
      },
      {
        heading: "Writing an ask people do not resent",
        paragraphs: [
          "Placement is half the work. The wording decides whether the ask feels like part of the video or an interruption pasted on top.",
          "I tie every ask to what just happened in the script. If the previous sentence delivered a useful idea, the ask can point at the next logical step, and the viewer feels guided rather than sold to.",
          "One ask per video is usually enough. Stacking several dilutes all of them, because the audience cannot tell which action matters most.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match the size of the ask to how much trust the video has built so far.",
          "Ask early for low effort actions and late for high commitment ones.",
          "Tie the wording of the ask to the idea that landed just before it.",
          "Use one clear ask per video so the audience knows what matters.",
        ],
      },
    ],
  },
  {
    slug: "scripts-editing-a-script-down",
    title: "How to Cut a Script Down Without Losing the Point",
    excerpt:
      "Cutting a script down is easiest when you cut whole ideas before individual words. Trim the redundant beats first and the line edits get far simpler.",
    date: "2028-08-23",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "editing", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "Cut a script down by removing whole ideas before you remove individual words. Deleting a redundant beat can save a minute, while polishing sentences only shaves seconds and leaves the real bloat untouched.",
          "Most drafts are longer than they need to be because they make the same point twice and dress simple thoughts in extra clauses. Fixing the structure first removes most of the excess at once.",
          "Line level editing comes last. Doing it first is like tidying a room before you have decided what to throw away.",
        ],
      },
      {
        heading: "Cut by idea before you cut by word",
        paragraphs: [
          "Every script has beats that repeat each other in different words. The intro restates the title, the first example repeats the intro, and the summary restates the whole middle.",
          "I mark the script by function, labeling each beat as setup, evidence, or payoff. Any two beats with the same label and the same message are candidates for a merge.",
          "When I cut at this level, half the savings appear without touching a single sentence. The writing gets tighter because there is less of it, not because each line got shorter.",
        ],
      },
      {
        quote: "Cutting words is trimming the hedge. Cutting ideas is deciding the garden does not need that hedge at all.",
      },
      {
        heading: "The passes I run on every script",
        paragraphs: [
          "A fixed sequence keeps me from polishing lines that are about to disappear.",
        ],
        bullets: [
          "First pass, delete any beat that repeats a point already made.",
          "Second pass, remove examples that do not add new information.",
          "Third pass, merge short beats that belong together.",
          "Fourth pass, tighten sentences and cut filler phrases.",
          "Fifth pass, read the result out loud to catch anything the cuts broke.",
        ],
      },
      {
        heading: "What to protect when you cut",
        paragraphs: [
          "A few things should survive every trim. The hook that earns attention, the single idea the video promises, and the payoff the viewer came for are not decorative.",
          "Transitions are easy to sacrifice and expensive to lose. Cut one and two good beats can suddenly feel disconnected, so I check the seams after every round of cuts.",
          "The test for anything on the edge is whether removing it changes what the viewer understands. If the answer is no, it can go, and the script gets faster without getting thinner.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Cut whole redundant beats first, because that is where the real length hides.",
          "Label beats by function and merge any that make the same point.",
          "Save sentence level polish for last, after the structure is final.",
          "Protect the hook, the core idea, and the payoff, and check transitions after cuts.",
        ],
      },
    ],
  },
  {
    slug: "scripts-template-that-works",
    title: "A Reusable Video Script Template That Actually Works",
    excerpt:
      "A reusable video script template removes the blank page problem. Fill in the beats, keep the promise clear, and adapt the same skeleton to any format.",
    date: "2028-08-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["scripting", "structure", "templates"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "The short answer",
        paragraphs: [
          "A reusable video script template is a skeleton with labeled slots, so you spend your energy on the ideas instead of inventing a structure every time. Fill the slots, keep the promise clear, and adapt the skeleton to each format.",
          "The template should be small enough to memorize and loose enough to bend. A template you have to open a second document to use is one you will stop using within a month.",
          "The goal is not identical videos. It is a consistent process that lets each script be distinct while the structure holds it together.",
        ],
      },
      {
        heading: "The skeleton of a reusable template",
        paragraphs: [
          "My template has a handful of slots. Each one is a question I answer in a sentence or two, and the answers become the beats of the script.",
        ],
        bullets: [
          "Promise: what single idea does this video deliver?",
          "Opener: what is the first line that earns the next thirty seconds?",
          "Proof: what evidence, story, or steps make the promise credible?",
          "Turn: what changes the direction so the middle stays alive?",
          "Payoff: what does the viewer walk away knowing or feeling?",
          "Ask: what is the one action you want next?",
        ],
      },
      {
        heading: "Fill in the blanks, then break the mold",
        paragraphs: [
          "A template is a starting point, not a rulebook. I fill the slots first because the structure clears my head, then I let the specific video bend the shape where it needs to.",
          "An interview might need two proof slots and no turn. A story driven piece might drop the proof entirely and let the narrative carry the weight. The template survives because it flexes.",
          "The danger is treating the slots as mandatory. A script that forces every beat into a template becomes predictable, and predictable is the one thing an audience notices faster than a missing section.",
        ],
      },
      {
        quote: "A good template is a set of questions, not a set of rules. Answer them, then write the video the answers demand.",
      },
      {
        heading: "Adapting one template across formats",
        paragraphs: [
          "The same skeleton scales across lengths, which is why it is worth building. A short uses compressed versions of every slot, while a long form video expands the proof and turn into whole sections.",
          "For a short, I keep the opener and payoff and shrink everything between into a single beat. For a tutorial, the proof becomes a numbered sequence and the turn introduces the common mistake.",
          "Keeping one template across formats also makes your channel feel consistent. Viewers learn the rhythm without noticing it, and that rhythm is a quiet reason they keep coming back.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build a template small enough to memorize so you actually reuse it.",
          "Use prompts for each slot and turn the answers into beats.",
          "Treat the template as flexible questions, not mandatory rules.",
          "Scale one skeleton across shorts, tutorials, and long form by expanding or shrinking the proof.",
        ],
      },
    ],
  },
];
