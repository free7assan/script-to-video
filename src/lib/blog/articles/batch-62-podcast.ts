import {
  BookOpen,
  MessageSquare,
  Waves,
  Users,
  Heart,
  Scissors,
  Repeat,
  Flame,
  Compass,
  Layers,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch62: BlogPost[] = [
  {
    slug: "podcast-interview-prep-research",
    title: "How to Prep for a Podcast Interview Without Overdoing It",
    excerpt:
      "Good podcast interview prep is research you can set down once recording starts. Learn the guest's work, then leave room for the conversation to surprise you.",
    date: "2024-02-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "The best podcast interview prep ends before you hit record. You read enough to know what your guest has already said in public, then you close the tabs and let the conversation carry the rest.",
          "Hosts get this wrong in two directions. Some show up cold and ask questions the guest has answered a hundred times. Others arrive with a stack of notes and spend the hour steering toward them, which means they miss the better answer happening live. I have done both, and neither is worth defending.",
        ],
      },
      {
        quote:
          "Prep is not a script. It is the context that lets you notice the moment your guest says something they have never said before.",
      },
      {
        heading: "Research that changes your questions",
        paragraphs: [
          "Read the guest's last three interviews and pay attention to what they dodged. A dodge is an opening. If they kept talking around the same topic without landing on it, ask it plainly and let them decide whether to walk past it again.",
          "Skim their work in their own words rather than summaries written by other people. A founder's old blog post tells you how they frame a problem. A comedian's early set tells you where their timing lives. You are hunting for specifics you can press on later, not trivia to perform with.",
        ],
      },
      {
        heading: "What to write down and what to leave out",
        bullets: [
          "Three to five anchor questions that a stalled conversation can fall back on.",
          "One or two facts worth verifying, like a number or a date they keep repeating.",
          "A single line about why you wanted this guest on the show in the first place.",
          "Names and pronunciations you do not want to fumble while the tape runs.",
        ],
        paragraphs: [
          "Everything else stays out of the room. A page of clever follow-ups you wrote the night before will pull your attention away from the actual thread, and the thread is where the good tape lives.",
        ],
      },
      {
        heading: "The call before the call",
        paragraphs: [
          "A short pre-interview chat, fifteen minutes or less, does more for the recording than any outline. You learn how the guest talks, how quickly they move, and where the nerves sit. You also get to explain what you are making so nobody shows up expecting a different show.",
          "Ask one blunt question during that call. What do you not want to talk about? Knowing the landmines keeps you from stepping on one in the first ten minutes and spending the rest of the hour recovering.",
        ],
      },
      {
        heading: "When the notes fail",
        paragraphs: [
          "At some point the guest will take the conversation somewhere your prep never anticipated. That is not a problem to correct. It is the reason you booked them instead of reading their Wikipedia page on air. If your notes and the live conversation disagree, follow the conversation and leave the notes where they belong.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read past interviews to find dodged questions, not to reuse them.",
          "Keep your notes short enough that you can abandon them without regret.",
          "Use the pre-interview call to hear how the guest actually speaks.",
          "Ask about banned topics early so you do not trip a landmine later.",
          "Trust the live thread over the outline every time.",
        ],
      },
    ],
  },
  {
    slug: "podcast-question-design-open-ended",
    title: "Designing Questions That Open a Podcast Guest Up",
    excerpt:
      "Closed questions get closed answers. A strong podcast interview question hands the guest a stage instead of a checkbox, and it leaves room for a real story.",
    date: "2024-05-23",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Open questions are the ones that cannot be answered with a single word. When did you first realize the plan was failing, invites a scene. Was that hard, invites a shrug.",
          "The gap between those two questions decides how much usable tape you take home. I have sat through forty minutes of yes and no, and I have watched one well-shaped question fill an entire episode without a follow-up.",
        ],
      },
      {
        quote:
          "Ask something a checkbox can answer and you get a checkbox answer. Ask for a scene and the guest has to walk you through it.",
      },
      {
        heading: "Start with the moment, not the lesson",
        paragraphs: [
          "Guests arrive with their conclusions already polished. They know what they are supposed to have learned, and given half a chance they will deliver the lesson before the story. Your job is to hold the lesson back and go to the moment first.",
          "Ask what the room looked like, what they said out loud, what they almost did instead. Detail is where an interview stops sounding like a keynote and starts sounding like a person talking to another person.",
        ],
      },
      {
        heading: "Questions that hand over the stage",
        bullets: [
          "What did the hours before that decision actually feel like?",
          "Walk me through the part nobody else saw.",
          "What were you wrong about at the very start?",
          "Where were you when the call came, and what did you do next?",
          "What did you say to the person who told you no?",
        ],
        paragraphs: [
          "None of these have a correct answer, and that is the point. The guest has to build the response on the spot instead of reaching for a line they have used before.",
        ],
      },
      {
        heading: "The trap of the stacked question",
        paragraphs: [
          "One question at a time. When you ask three things in a single breath, the guest answers whichever one is easiest and you lose the other two. I have heard hosts bundle a soft question with a sharp one and then wonder why the sharp answer never arrived.",
          "If you catch yourself saying and also, stop. Land the first question, listen to the answer, then ask the second only if the guest did not already cover it.",
        ],
      },
      {
        heading: "Silence is part of the design",
        paragraphs: [
          "The question does not end when you stop speaking. A guest who pauses after a hard question is often deciding how much truth to hand over. If you jump in to rescue the pause, they take the exit you just built for them.",
          "Leave it quiet for a beat longer than comfortable. The answer that follows the pause is usually the one you were actually after.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Replace yes or no questions with ones that demand a scene.",
          "Ask for the moment before you ask for the lesson.",
          "Keep one question per breath, never two.",
          "Let silence do the work of a follow-up.",
        ],
      },
    ],
  },
  {
    slug: "podcast-remote-interview-audio",
    title: "Remote Podcast Audio That Does Not Sound Like a Call",
    excerpt:
      "Remote interview audio lives and dies in the room, not the microphone. Fix the space your guest records in before you spend money on another piece of gear.",
    date: "2024-08-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio", "interview"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Remote audio sounds bad for one main reason, and it is not the internet. It is an untreated room reflecting your guest's voice back into a microphone that sits far too close to a wall. Fix the space and the same cheap mic will surprise you.",
          "I have recorded guests on laptops that sounded better than guests on studio condensers, because the laptop was in a closet full of coats and the condenser was in a bare kitchen. Room beats gear nearly every time.",
        ],
      },
      {
        quote:
          "A microphone records the room first and the voice second. If the room is wrong, no amount of gear money will save the take.",
      },
      {
        heading: "The five-minute room fix",
        paragraphs: [
          "Ask your guest to sit in the smallest soft-surfaced space they have. A bedroom with a rug and a full closet will outperform a large open office every single time. Point the mic at their mouth and away from hard walls.",
          "Have them close windows and kill the appliances that hum. A fridge on the other side of a wall can show up as a low drone that is miserable to remove in the edit. If they can hear a fan, so can the microphone.",
        ],
      },
      {
        heading: "Setup that keeps things simple",
        bullets: [
          "One mic per person, close to the mouth, off-axis by a few degrees.",
          "Headphones on every guest so you never record the call audio by accident.",
          "Wired internet where possible, because drops mid-sentence are worse than a little hiss.",
          "Local recording on the guest's side, uploaded after the call instead of streamed live.",
        ],
        paragraphs: [
          "Local recording is the biggest single upgrade you can make. Each side captures its own clean track, and the call quality only becomes a backup rather than the master.",
        ],
      },
      {
        heading: "Fix it in the mix, but lightly",
        paragraphs: [
          "High-pass filtering removes rumble you do not need. A gentle noise gate can quiet a room without chewing the ends of words. Compression used sparingly keeps levels even so the quiet guest and the loud guest sit on the same track without a fight.",
          "Resist the urge to over-process. A voice that has been squeezed and brightened beyond recognition sounds cheaper than a voice that was simply recorded in the right place.",
        ],
      },
      {
        heading: "Backup before you celebrate",
        paragraphs: [
          "Recording software fails. Hard drives fill up. Test both ends before the real session and confirm the files exist the moment you hang up. I have lost a great interview to a single unchecked box, and it took one minute to prevent and a full reshoot to repair.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Coach the room before you coach the gear.",
          "Have every guest wear headphones to avoid call bleed.",
          "Record locally on both sides and treat the call audio as backup only.",
          "Keep processing gentle so the voice still sounds like the person.",
          "Verify both files exist immediately after the call ends.",
        ],
      },
    ],
  },
  {
    slug: "podcast-guest-booking-outreach",
    title: "Booking Podcast Guests Without Begging or Spamming",
    excerpt:
      "Guest booking is a numbers game only if you respect the other person's time. A short, specific podcast interview pitch beats a long one that asks for everything.",
    date: "2024-12-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Booking a guest is not about convincing someone they are lucky to be asked. It is about showing, in a few sentences, that you know their work and that you have a specific reason to talk to them now rather than anytime in the last five years.",
          "The pitches that fail usually fail because they ask for too much before they give anything. They open with a paragraph about your show, then a request for an hour, then a list of logistics. The person on the other end has read that message fifty times this month.",
        ],
      },
      {
        quote:
          "A guest says yes when they can see the episode in their head before they reply. Show them the episode, not your schedule.",
      },
      {
        heading: "Lead with the reason, not the ask",
        paragraphs: [
          "Name something specific they said or built, and connect it to a question you genuinely cannot answer alone. If your pitch could be sent to a hundred other people unchanged, it is not a pitch. It is a mail merge.",
          "Say what the episode is about in one line. Not the show, the episode. A guest will commit to a conversation with a clear shape far faster than to an open-ended invitation to come chat.",
        ],
      },
      {
        heading: "What a short pitch includes",
        bullets: [
          "One line proving you know their work well enough to be specific.",
          "One line describing the episode and why this person is the right voice for it.",
          "One line on format, length, and where it will live.",
          "One easy way to say yes or point you elsewhere.",
        ],
        paragraphs: [
          "That is the whole message. Anything longer competes with the important part for attention, and the important part rarely wins.",
        ],
      },
      {
        heading: "The follow-up rule",
        paragraphs: [
          "Send one follow-up about a week later, and then stop. A second nudge is patience. A fourth is a reason to filter your address. If they decline, thank them and ask who else you should talk to, because a good pitch declines gracefully and sometimes turns into a referral.",
          "Keep a record of who you asked and when. Nothing damages a reputation faster than pitching the same busy person twice in a month because nobody wrote it down.",
        ],
      },
      {
        heading: "When to book the guest who comes to you",
        paragraphs: [
          "Inbound offers arrive with their own pull, usually a book or a launch date. Take the ones that fit your show and turn down the rest without guilt. An episode that exists only to serve someone else's marketing calendar will feel like it on tape, and listeners notice faster than hosts expect.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write each pitch so it could not be sent to anyone else.",
          "Describe the episode, not your whole show.",
          "Follow up once, then let it go.",
          "Turn down inbound guests who do not fit, even when they are famous.",
        ],
      },
    ],
  },
  {
    slug: "podcast-active-listening-interviews",
    title: "Active Listening Is the Skill Podcast Hosts Skip",
    excerpt:
      "Active listening is what separates a podcast interview from a list of questions read aloud. The host who listens well will always out-book the host who talks well.",
    date: "2025-03-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Active listening means tracking what your guest actually said and building the next question from it, instead of holding a numbered list and marching down it. It is the single biggest difference between an interview that flows and one that limps.",
          "Most hosts believe they listen. Then you hear them ask a question the guest just answered, and you realize they were waiting for their turn to talk the whole time. I have been that host, and the tape makes it obvious.",
        ],
      },
      {
        quote:
          "If your next question was written before your guest finished their last answer, you are not interviewing. You are reading.",
      },
      {
        heading: "Listen for the aside",
        paragraphs: [
          "The most useful material often hides in a sentence that starts with something like, off the record, or, this is probably not what you want, or, I have never actually told anyone this. Those asides are doors, and they only open once.",
          "When you hear one, drop the plan. Let the guest finish, then ask for more about exactly that thing. A prepared question can wait for another episode. The aside will not come back.",
        ],
      },
      {
        heading: "Signals worth following",
        bullets: [
          "A short pause right before a strong claim, which often hides a story.",
          "A laugh that arrives before the point, which usually means self-deprecation is coming.",
          "A shift in tense, like when someone slips from the past into the present.",
          "A name that keeps appearing but has never been explained.",
        ],
        paragraphs: [
          "None of these are on any question list. They show up in the moment, and catching them is a listening skill rather than a preparation skill.",
        ],
      },
      {
        heading: "Stop performing your interest",
        paragraphs: [
          "Constant mm-hmms and yeah-yeahs are not listening. They are noise that crowds the track and forces the editor to clip around you. A calm face and a real pause communicate more than a stream of verbal nods.",
          "Your guest can feel whether you are following them. When you genuinely are, they relax into longer and more honest answers without you having to ask for them.",
        ],
      },
      {
        heading: "Reward the answer, then move",
        paragraphs: [
          "When a guest gives you something real, acknowledge it briefly and then go deeper instead of jumping to the next topic. A single follow-up that proves you heard them will pull the interview into territory no script could have reached.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Let your next question come from the last answer, not the page.",
          "Chase the aside the moment it appears.",
          "Cut the verbal nods and let silence carry the interest.",
          "Go one layer deeper before you change subjects.",
        ],
      },
    ],
  },
  {
    slug: "podcast-editing-interviews-for-clips",
    title: "Editing Podcast Interviews Into Clips Worth Sharing",
    excerpt:
      "Turning a podcast interview into clips is a selection problem before it is an editing problem. Find the one clean moment per clip and cut everything that delays it.",
    date: "2025-06-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio", "interview"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "A good interview clip is one idea, spoken clearly, with nothing in front of it. That sounds obvious until you watch clips that spend six seconds clearing their throat before the guest reaches the point. Viewers scroll away during the wind-up.",
          "Start from the strongest sentence and work backward. If the guest lands something sharp, the clip begins a second before that sentence and ends a second after it. The setup the guest needed in the full episode is usually dead weight in a short.",
        ],
      },
      {
        quote:
          "Cut the clip backward from the best line. The wind-up that helped the live conversation will kill the short.",
      },
      {
        heading: "Find the moments first, edit second",
        paragraphs: [
          "Go through the transcript before you touch the timeline. Mark every passage that stands on its own with no context. Many great interview answers depend on the question that set them up, and those are not clip material unless you keep your own voice in.",
          "You are looking for a small set of qualities: a clear claim, an emotional turn, or a piece of specific advice. If a passage needs three sentences of context to make sense, leave it for the full episode.",
        ],
      },
      {
        heading: "What makes a clip survive the scroll",
        bullets: [
          "A first line that lands before the viewer decides anything.",
          "Subtitles that match the spoken words instead of summarizing them.",
          "One idea carried all the way to its end, not cut mid-thought.",
          "Enough silence after the punchline to let it register.",
        ],
        paragraphs: [
          "The last one gets neglected. Cutting the instant a guest stops speaking robs the moment of its landing, and the whole clip feels rushed as a result.",
        ],
      },
      {
        heading: "Build a clip kit",
        paragraphs: [
          "Standardize your captions, your framing, and your lower third so a clip is recognizable within a second. Consistency helps a viewer connect a short back to the show even if they found it in a feed far from the episodes.",
          "Keep a running note of timestamps as you record. Marking moments live saves hours in post, and it means you are choosing clips from memory instead of combing through three hours of tape for one line.",
        ],
      },
      {
        heading: "One clip, one job",
        paragraphs: [
          "Every clip should do a single thing, whether that is making someone laugh, teaching one step, or provoking a strong opinion. A clip that tries to do two jobs usually does neither well. Decide the job before you open the editor and cut to fit it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Cut backward from the strongest sentence in the answer.",
          "Check the transcript before you touch the timeline.",
          "Leave a beat of silence after the punchline.",
          "Give each clip one job and stop there.",
        ],
      },
    ],
  },
  {
    slug: "podcast-follow-up-questions",
    title: "Follow-Up Questions That Keep an Interview Moving",
    excerpt:
      "The follow-up question is where a podcast interview gets its depth. Ask once and you get the surface answer. Ask well and you get the part the guest did not plan.",
    date: "2025-09-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A follow-up is not a repeat of the question with more words. It is a targeted push into the part of the answer your guest skipped. First answers are often the polished version, and the honest version is usually one question deeper.",
          "I treat the first answer to any important question as a warm-up. The guest is testing whether the room is safe. My follow-up tells them it is, and that is when the interesting material shows up.",
        ],
      },
      {
        quote:
          "The first answer is reheated. The follow-up is where you find out whether there is anything underneath.",
      },
      {
        heading: "Push on the missing detail",
        paragraphs: [
          "When a guest glides over something, name it directly. You said the deal fell apart overnight. What happened in that night. The specificity of the follow-up tells them you noticed the gap, and guests usually respect being caught.",
          "This works best when you keep the tone curious rather than prosecutorial. You are not trapping them. You are asking for the part they left out because it did not fit the neat version of the story.",
        ],
      },
      {
        heading: "Phrases that open a second layer",
        bullets: [
          "What were you thinking in that exact moment?",
          "Say more about the part right before that.",
          "What did you not know then that you know now?",
          "Who told you otherwise, and what did you tell them back?",
        ],
        paragraphs: [
          "Each of these forces a specific memory rather than a summary. Vague prompts get vague answers, so make the follow-up demand detail.",
        ],
      },
      {
        heading: "Know when to stop digging",
        paragraphs: [
          "A follow-up has a limit. If the second or third push makes a guest hedge, close up, or laugh the question away, take the hint and move on. Depth is the goal, but cornering someone on tape costs you the trust you spent the first half earning.",
          "Read the discomfort, not the room. Some guests welcome a hard push and some will shut down. Your job is to tell the difference and leave a door open even when you stop.",
        ],
      },
      {
        heading: "Keep a few in reserve",
        paragraphs: [
          "I always carry a short list of universal follow-ups that work on any answer. They are tools, not questions for a specific guest, and having them ready means a flat moment never becomes a dead one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the first answer as a warm-up, not the finish.",
          "Name the detail the guest skipped and ask for it plainly.",
          "Use prompts that force a specific memory.",
          "Back off the moment a guest closes up.",
        ],
      },
    ],
  },
  {
    slug: "podcast-guest-rapport-comfort",
    title: "Putting a Nervous Podcast Guest at Ease on Air",
    excerpt:
      "A nervous podcast interview guest gives safe answers. Lower the stakes before you hit record and the same person will say the things your episode needs.",
    date: "2026-01-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flame,
    content: [
      {
        paragraphs: [
          "Nerves turn a guest into a press release. They give short, careful answers, they avoid the risky story, and they leave you with an hour of nothing you can use. The fix happens before you press record, not during the interview.",
          "Comfort is not about being nice. It is about making the cost of a bad answer feel low. When a guest believes they can stumble without it mattering, they take the chances your show needs.",
        ],
      },
      {
        quote:
          "A guest who feels they can fail will risk a real answer. A guest who feels graded will read you their bio.",
      },
      {
        heading: "Lower the stakes out loud",
        paragraphs: [
          "Tell them at the start that you can cut anything, that there is no live audience, and that they can ask you to stop at any point. Saying those things changes the temperature of the room even before the first question.",
          "Mean it, too. If a guest asks to redo an answer, let them. A reshoot takes thirty seconds and buys a more relaxed guest for the next forty minutes.",
        ],
      },
      {
        heading: "Small moves that calm a room",
        bullets: [
          "Start with an easy question you both know they can nail.",
          "Explain what happens next so nobody is guessing about the format.",
          "Match their energy early instead of overwhelming them with yours.",
          "Give them a glass of water and a reason to take a sip during a heavy answer.",
        ],
        paragraphs: [
          "None of these are dramatic, and that is why they work. Comfort comes from a thousand tiny signals that the situation is under control.",
        ],
      },
      {
        heading: "Handle the first answer carefully",
        paragraphs: [
          "The opening minutes set the trust for everything after. If the first answer is rough, do not signal disappointment. Rewind, reframe the question a little warmer, and let them try again. A guest who sees you absorb a bad take calmly will loosen up for the rest of the session.",
          "Avoid going for the hardest question first. It reads as a test, and a guest who feels tested spends the next hour defending instead of opening.",
        ],
      },
      {
        heading: "End on solid ground",
        paragraphs: [
          "Before you stop recording, bring the guest back to a place where they sound confident. A strong final answer sends them out of the room feeling good, which matters if you ever want them back or want a referral to someone else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "State clearly that anything can be cut or retried.",
          "Open with a question the guest is sure to answer well.",
          "Match energy early rather than setting the pace alone.",
          "Never start with your toughest question.",
          "End on a strong note so the guest leaves relaxed.",
        ],
      },
    ],
  },
  {
    slug: "podcast-interview-intro-outro",
    title: "Podcast Interview Intros That Earn the Next Minute",
    excerpt:
      "The first minute of a podcast interview decides whether a listener stays. A good intro sets the stakes and names what makes this guest worth the hour.",
    date: "2026-04-28",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "interview"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Your intro has one job, and it is not to list the guest's achievements. It is to give a listener a concrete reason to keep going. If the first minute sounds like a resume read aloud, most people are already gone.",
          "I open with the tension of the episode, not the biography. Say what the conversation is really about, and let the credentials surface naturally once the listener is already interested.",
        ],
      },
      {
        quote:
          "A guest's job title is a fact. A reason to keep listening is a hook. The intro needs the second one.",
      },
      {
        heading: "Open on the question, not the person",
        paragraphs: [
          "Find the single most interesting question this episode answers, and ask it in the first few lines. Something like, how do you keep running a company after you have already lost it once, tells a listener the conversation has stakes before they know a single credit.",
          "Once the question is out, you can name the guest and explain briefly why they are equipped to answer it. That order keeps the audience's attention on the idea rather than the title.",
        ],
      },
      {
        heading: "What a strong intro covers",
        bullets: [
          "The one question or conflict the episode explores.",
          "A short line on why this guest can speak to it.",
          "A hint of what the listener will walk away with.",
          "The interview itself, without a long bumper in the way.",
        ],
        paragraphs: [
          "Keep it tight. Every second between the listener and the guest is a second they can decide to leave.",
        ],
      },
      {
        heading: "The outro is not a footnote",
        paragraphs: [
          "Bad outros read a list of links and sign off. A better outro returns to the opening question and says what the conversation changed in your thinking. That closing loop makes the episode feel finished instead of merely stopped.",
          "Then point the listener somewhere specific. The next episode, a related conversation, or one action they can take today. A vague request to subscribe is weaker than a clear next step, and it costs you nothing to be concrete.",
        ],
      },
      {
        heading: "Record intros separately",
        paragraphs: [
          "Record your intro and outro after the interview, once you know what the episode actually became. A pre-recorded intro written before the conversation often promises something the tape does not deliver. Write it last so it can point at the real material.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open with the episode's central question, not a bio.",
          "Introduce the guest only after the stakes are clear.",
          "Close the loop in the outro to make the episode feel complete.",
          "Record the intro and outro after the interview is done.",
        ],
      },
    ],
  },
  {
    slug: "podcast-repurposing-interviews",
    title: "Turning One Podcast Interview Into a Week of Posts",
    excerpt:
      "A single podcast interview can feed a week of content if you cut it deliberately. Pull one idea per post instead of reposting the same clip everywhere.",
    date: "2026-08-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["podcast", "audio", "interview"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "One good interview is enough raw material for a week of posts if you treat each platform as a different cut instead of a duplicate. The mistake is exporting the same clip five times and calling it a content strategy.",
          "Start from the transcript and mine it for separate ideas. A strong hour usually contains a handful of standalone points, and each one can be its own piece with a little reshaping.",
        ],
      },
      {
        quote:
          "Repurposing is not copying. It is translating the same idea into the shape each platform rewards.",
      },
      {
        heading: "Mine the transcript for standalone ideas",
        paragraphs: [
          "Read the transcript with a pen and mark every moment a guest makes a point that survives without the surrounding conversation. Those are your seeds. One might become a short video, another a text post, another a carousel.",
          "Aim for variety. If all your pulled moments are advice, the week will feel one-note. Mix in a story, a disagreement, and a piece of hard-won detail so the set has range.",
        ],
      },
      {
        heading: "Match the cut to the platform",
        bullets: [
          "Vertical video for the emotional or funny moments that read in seconds.",
          "A text post for the argument that needs a paragraph to land.",
          "An audiogram for the line that sounds better than it reads.",
          "A still with a quote for the platform where people scroll slowly.",
        ],
        paragraphs: [
          "The same source moment can become two different posts if you change the container. A sharp line works as a nine-second clip and as a single sentence on its own, and both can run in the same week.",
        ],
      },
      {
        heading: "Do not post the same thing twice",
        paragraphs: [
          "Cross-posting the identical clip to every app is the fastest way to make your audience tired of you. Vary the angle, the caption, and the point of entry even when the underlying idea is the same.",
          "If you only have one truly strong moment, build the week around variations of it rather than stretching weak material to fill the calendar. Fewer good posts beat a full week of filler.",
        ],
      },
      {
        heading: "Bank the leftovers",
        paragraphs: [
          "Not every marked moment belongs in this week. Save the unused ones in a running folder and revisit them when the queue runs thin. An interview from three months ago can still carry a post today, and a deep backlog means you never post something purely to keep the streak alive.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Mark standalone ideas in the transcript before editing begins.",
          "Reshape each idea for the platform instead of duplicating clips.",
          "Never post the identical clip on every app in the same week.",
          "Keep a backlog of unused moments for slow weeks.",
        ],
      },
    ],
  },
];
