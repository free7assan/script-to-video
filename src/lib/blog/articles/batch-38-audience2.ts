import {
  MessageSquare,
  Search,
  Workflow,
  Film,
  Target,
  BarChart3,
  Users,
  Layers,
  Heart,
  Flag,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch38: BlogPost[] = [
  {
    slug: "audience2-interview-audience-first-video",
    title: "Interview Your Audience Before Your First Video",
    excerpt:
      "Interview your audience before your first video and you skip months of guessing. Here is who to ask, what to ask, and how to turn answers into a script.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Interview five people who match your target viewer before you record anything. That is the whole answer, and it sounds too simple to matter until you try it. Five focused conversations tell you more about what to make than a week spent reading comment sections on channels you do not run. The reason is simple: you get to ask follow-up questions, and follow-ups are where the useful detail lives.",
          "The catch is that most new creators ask friends, get polite nods, and learn nothing they could not have guessed. You want people who will tell you where their current solutions fail. Those people usually sit one step removed from you, not in your contact list. A stranger with a real problem will be more honest than a friend who wants to be encouraging.",
        ],
      },
      {
        heading: "Where to find people worth talking to",
        paragraphs: [
          "Start in the places your viewer already complains. A subreddit, a Discord server, a hobby forum, or the comment section of a channel in your niche. Read for an hour and write down the questions that repeat. You will see the same three or four frustrations phrased in different ways, and that repetition is the signal.",
          "Then message ten of the people who wrote those questions. Expect four or five to reply and two or three to agree to a call. That is enough. You are not building a research panel with statistical weight, you are looking for the shape of a shared problem.",
          "Offer something small in return. A fifteen minute call at a time they pick, a thank you note, a copy of your notes afterward. People agree more often when the ask is specific and the time cost is clear up front.",
        ],
      },
      {
        quote:
          "One honest conversation with a stranger beats fifty survey responses from your friends.",
      },
      {
        heading: "Questions that get past politeness",
        paragraphs: [
          "Ask about the last time they faced the problem, not whether they face it. A question like 'tell me about the last video or guide you used to learn this' pulls out a real story. A question like 'would you watch a video about this' pulls out a courteous maybe and nothing else. Past behavior is evidence. Future intent is a guess dressed up as data.",
        ],
        bullets: [
          "What did you try before you found something that worked?",
          "What made the last option you used frustrating?",
          "Where did you go when you got stuck late at night?",
          "What would have made that process easier for you?",
          "Who do you ask when you need an answer fast?",
        ],
      },
      {
        heading: "Turning answers into your first script",
        paragraphs: [
          "Look for the sentence you heard twice. If two separate people described the same frustration in different words, that is your video. Write the title as the fix and the opening as the frustration, using their phrasing where it fits. Viewers recognize their own words faster than they recognize yours.",
          "Keep a running document of these lines. After ten interviews you will have a list of titles that came straight from the people who will click them. On a channel with no history, that list beats any keyword tool, because you are not guessing at demand. You heard it out loud.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Talk to five target viewers before you record anything.",
          "Recruit from communities where the problem is already discussed.",
          "Ask about past behavior and never about future intent.",
          "Build titles from exact phrases you hear more than once.",
        ],
      },
    ],
  },
  {
    slug: "audience2-questions-that-reveal-real-problems",
    title: "Questions That Reveal Real Audience Problems",
    excerpt:
      "The right interview questions reveal audience problems instead of polite agreement. Learn the exact wording that gets people to describe what actually breaks.",
    date: "2024-04-18",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "community"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "The best interview question asks about a specific moment instead of a general opinion. 'Walk me through the last time you did this' almost always works. It forces the person to reconstruct an event, and events carry the messy details that opinions flatten out. You leave those conversations with scenes you can turn into hooks.",
          "Most creators default to questions that invite a yes or a no because yes and no feel safe. They are not safe, they are empty. A conversation full of yeses teaches you nothing about what to build next. You want the small admissions, the workarounds, and the swear words.",
        ],
      },
      {
        heading: "Replace opinion questions with story questions",
        paragraphs: [
          "Take any opinion question and rewrite it as a story request. Instead of 'do you find this hard', ask 'when was the last time this got hard for you'. Instead of 'what features matter', ask 'what did you do the last time the tool let you down'. The story version is harder to answer dishonestly because the person has to remember something.",
          "When they finish a story, do not move on. Ask 'and then what happened'. That single follow-up adds more useful texture than any prepared question. People rush past the interesting part because they think it is boring. Your job is to slow them down.",
        ],
      },
      {
        quote:
          "A story question earns you a scene. An opinion question earns you a sentence you cannot use.",
      },
      {
        heading: "Follow the emotion, not the topic",
        paragraphs: [
          "Notice when someone speeds up, sighs, or laughs at their own answer. Those are the moments where a real problem lives. Ask them to stay there. 'You laughed when you said that, what was going on' is a fair question and people usually answer it honestly.",
        ],
        bullets: [
          "When did this last cost you time you could not get back?",
          "What did you tell yourself when it failed again?",
          "What workaround did you build that you are not proud of?",
          "Who did you complain to about it, and what did you say?",
        ],
      },
      {
        heading: "Write down the exact words",
        paragraphs: [
          "Take notes in the person's own language, not your summary of it. If they call the process 'the weekly scramble', use that phrase. Their vocabulary is the vocabulary of your audience, and it will read as familiar in a script without you explaining a thing.",
          "After five interviews, sort your notes into two columns. One is problems people described more than once. The other is problems that came up once. Build from the first column first. The second column is a waiting list for later videos.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask for the last specific moment, not a general opinion.",
          "Use 'and then what happened' to reach the useful detail.",
          "Follow emotional spikes because they mark real problems.",
          "Record the person's exact phrasing and reuse it in scripts.",
        ],
      },
    ],
  },
  {
    slug: "audience2-remote-interviews-on-a-budget",
    title: "Run Remote Audience Interviews on a Small Budget",
    excerpt:
      "Remote audience interviews on a budget still produce sharp insight. This setup covers recording, scheduling, and storage without spending a fortune.",
    date: "2024-07-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "You can run useful remote interviews for free. A laptop, a free video call link, and a quiet room cover almost everything. The expensive gear matters far less than asking a good question and letting silence work for a second. Do not let a shopping list stop you from starting this week.",
          "The main cost is not money, it is attention. Scheduling across time zones, waiting for slow speakers, and transcribing an hour of talk all take time. Plan for it. The setup below keeps the mechanical parts cheap so you can spend your energy on the conversation itself.",
        ],
      },
      {
        heading: "The minimum viable recording setup",
        paragraphs: [
          "Use the built-in recorder in your video call tool, then keep a local backup on your own machine. Call recordings fail, guests drop, and networks stutter. A second copy on your drive has saved more interviews than any premium plugin ever will.",
          "For audio, a forty dollar USB microphone beats the laptop mic by a wide margin, and headphones stop the echo that ruins a call. If you have neither, sit in a small room with soft furniture and put the laptop on a towel. The goal is clarity, not studio polish.",
        ],
      },
      {
        bullets: [
          "Book fifteen minute slots so a no-show does not wreck your day.",
          "Send the call link and a one line agenda the night before.",
          "Ask permission to record at the top, and keep the answer on tape.",
          "Start the local backup before you say hello.",
        ],
      },
      {
        heading: "Scheduling without the back and forth",
        paragraphs: [
          "A free scheduling page removes four emails from every booking. Set your available windows, share one link, and let people pick. Keep the windows narrow so your calendar stays sane, and offer a couple of evening slots for people in other time zones.",
          "Confirm with a short reminder about an hour ahead. That reminder alone cuts no-shows, because people forget a favor they agreed to last week more easily than a meeting they confirmed this morning.",
        ],
      },
      {
        quote:
          "The best interview setup is the one that lets you start on Thursday instead of shopping until next month.",
      },
      {
        heading: "Storage and cleanup",
        paragraphs: [
          "Keep raw recordings in a folder named by date and guest, and delete the ones you have mined for notes after a month. You rarely revisit raw footage, and a tidy folder keeps the next interview easy to file. Back the folder up to a free cloud tier and move on.",
          "Write your notes within a day while the conversation is fresh. Reading a transcript cold a week later costs you the small details that made the call worth having. A few minutes of notes right after the call is the highest return step in the whole process.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A laptop, a free call link, and a quiet room are enough.",
          "Keep a local backup recording for every interview.",
          "Use a scheduling link to end email ping-pong.",
          "Write your notes the same day the call happens.",
        ],
      },
    ],
  },
  {
    slug: "audience2-turn-interviews-into-content",
    title: "Turn Audience Interviews into Content Ideas",
    excerpt:
      "Turn audience interviews into content ideas by mining quotes, mapping repeated problems, and matching each answer to a format your viewers already watch.",
    date: "2024-10-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "community"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Turn one interview into five content ideas by reading it three different ways. First for the story, then for the problem, then for the exact phrase. Each pass gives you something a keyword tool cannot, because a real person already told you what they wanted in their own words.",
          "The mistake is treating an interview as a single source for a single video. An hour of honest talk usually holds enough raw material for a month of uploads if you sort it properly. The sorting is the skill, and it takes less time than you would expect.",
        ],
      },
      {
        heading: "Mine the transcript in three passes",
        paragraphs: [
          "On the first pass, mark every moment the person described a specific event. Those are story candidates. On the second pass, mark every complaint or workaround. Those are problem candidates. On the third pass, highlight any phrase that sounded vivid or unusual. Those become titles and hooks.",
          "Do this with a highlighter or a text file, whichever keeps you moving. The rhythm matters more than the tool. You want three separate reads rather than one careful read, because each pass notices different things.",
        ],
      },
      {
        bullets: [
          "Event mark: a scene you could replay in a script.",
          "Problem mark: a frustration you can promise to fix.",
          "Phrase mark: wording that sounds like your audience.",
          "Question mark: anything the person asked you back.",
        ],
      },
      {
        heading: "Match each idea to a format",
        paragraphs: [
          "A story becomes a case study or a reaction video. A problem becomes a tutorial or a list of fixes. A phrase becomes a title and a thumbnail line. A question the person asked you becomes a direct answer video, which tends to perform well because the question is real.",
          "Map the strongest idea to the format your channel already runs. Introducing a brand new format at the same time as a new topic splits the signal you send to returning viewers. Keep one variable steady while you test the other.",
        ],
      },
      {
        quote:
          "An interview is not one video. It is a pile of raw ideas waiting to be sorted into the formats you already make.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Read every transcript three times for three different things.",
          "Turn stories, problems, phrases, and questions into separate ideas.",
          "Fit each idea to a format your channel already produces.",
          "Change one variable at a time when you test a new topic.",
        ],
      },
    ],
  },
  {
    slug: "audience2-avoid-leading-interview-questions",
    title: "Avoid Leading Questions in Audience Research",
    excerpt:
      "Leading questions in audience research hand you false confidence. Spot the phrasing that plants your answer and rewrite it before your next interview.",
    date: "2025-01-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A leading question tells the person what answer you want, and most people oblige. 'Do not you think this is confusing too' invites agreement. 'How would you describe this process' invites an answer you did not plant. The difference shows up the moment you try to use the results.",
          "Leading questions feel good during the call because the person agrees with you. That warm agreement is the trap. You walk away believing an idea is validated when all you really collected was politeness. Fixing your wording before an interview is cheaper than rebuilding a strategy on false signals.",
        ],
      },
      {
        heading: "The phrases that plant an answer",
        paragraphs: [
          "Watch for questions starting with 'do not you', 'would not it be better', or 'is not the problem'. Each one carries a built-in conclusion. So does any question where you describe your solution first and then ask for a reaction. You have already anchored the conversation by the time they answer.",
          "Praise flattery is another trap. If you open with how smart the person is, they start protecting that image and hedges get softer. Introduce yourself plainly, get to the question, and let the honesty arrive on its own.",
        ],
      },
      {
        bullets: [
          "Swap 'do not you think' for 'how do you think about'.",
          "Ask about the past instead of proposing a future.",
          "Describe nothing you plan to build before they answer.",
          "Leave room for 'I do not know' and mean it.",
        ],
      },
      {
        quote:
          "If every person agrees with every idea you float, you are interviewing fans, not future viewers.",
      },
      {
        heading: "Test your questions before you ask them",
        paragraphs: [
          "Read each question out loud and imagine a yes or no answer. If a single word can kill the conversation, rewrite it. Good research questions are hard to answer with one word, because they ask for a story and a story needs sentences.",
          "Run a dry pass with a friend who does not care about your channel. If they answer in one word, the question is broken, not the friend. Two minutes of rehearsal saves an interview you would otherwise waste.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Leading questions collect agreement instead of information.",
          "Drop 'do not you think' and similar planted phrasings.",
          "Do not describe your solution before you hear their story.",
          "Pilot questions on someone who will answer in one word.",
        ],
      },
    ],
  },
  {
    slug: "audience2-surveys-versus-interviews",
    title: "Audience Surveys Versus Interviews: Which to Use",
    excerpt:
      "Surveys versus interviews is not a contest. Surveys measure how many people feel a thing, interviews explain why, and strong research uses both in order.",
    date: "2025-04-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Use interviews to learn why, and use surveys to learn how many. Interviews are deep and slow with tiny samples. Surveys are shallow and fast with large samples. Neither one replaces the other, and the order matters more than the choice.",
          "Run the interviews first. You cannot write a good survey about a problem you do not yet understand, because you will not know which answers to offer. The interviews hand you the vocabulary and the options. The survey then tells you which of those options the broader audience recognizes.",
        ],
      },
      {
        heading: "What each method is good at",
        paragraphs: [
          "An interview surfaces the unexpected. People mention a workaround you never considered, and that single sentence can redirect a whole content plan. A survey cannot surface the unexpected, because every possible answer came from you before anyone responded.",
          "A survey measures distribution. Once you know the five problems people have, a survey tells you which one is most common. That number is what you want when you are deciding which video to make first with limited time.",
        ],
      },
      {
        bullets: [
          "Interviews: small samples, deep detail, open answers.",
          "Surveys: large samples, shallow detail, fixed answers.",
          "Interviews first to find the options.",
          "Surveys second to rank the options.",
        ],
      },
      {
        quote:
          "Interviews write the menu. Surveys tell you what most people order.",
      },
      {
        heading: "Designing the survey after the interviews",
        paragraphs: [
          "Turn each repeated problem into one answer choice using the audience's own phrasing. Keep the list short enough to read on a phone, and add an open text field at the end for anything you missed. That field is your next round of interview recruiting.",
          "Ask one question at a time. Bundling two problems into one choice makes the result impossible to read. A short survey people finish beats a long one they abandon halfway.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Interviews explain why, surveys measure how many.",
          "Always run interviews before building the survey.",
          "Use audience phrasing for every answer choice.",
          "Leave one open field to catch what you missed.",
        ],
      },
    ],
  },
  {
    slug: "audience2-find-people-to-interview",
    title: "How to Find People to Interview for Research",
    excerpt:
      "Find people to interview for research by going where your audience already gathers and asking the ones who describe a problem in detail.",
    date: "2025-08-12",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "community", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Find interviewees by looking for detailed complaints, not for lots of members. A forum with fifty active people who describe their problems in paragraphs is worth more than a group of ten thousand who only post links. You want the people who write too much, because they are the ones who will talk.",
          "Recruiting is a numbers game with a gentle tone. Reach out to more people than you need, keep the message short, and make the time cost obvious. A quarter of the people you ask will say yes when the ask is small and specific.",
        ],
      },
      {
        heading: "Places that produce good candidates",
        paragraphs: [
          "Community forums, niche subreddits, and the comment sections of channels that cover the same problem are the obvious spots. Less obvious ones work better: support threads where people describe a broken process, review pages where buyers explain why a tool failed them, and question sites where the same thing gets asked every month.",
          "Your own inbox counts too. If you already run a channel, the people who email long questions are volunteering for an interview without knowing it. Reply and ask for fifteen minutes.",
        ],
      },
      {
        bullets: [
          "Search communities for repeated questions and message the writers.",
          "Read one and two star reviews to find frustrated users.",
          "Mine support threads for people describing a workaround.",
          "Invite the people who already send you long emails.",
        ],
      },
      {
        quote:
          "Interview the person who wrote four paragraphs about a small problem. That is exactly the person who will click your video.",
      },
      {
        heading: "The outreach message that gets replies",
        paragraphs: [
          "Keep it to three sentences. Say who you are, name the specific thing they wrote that caught your eye, and ask for fifteen minutes at a time they pick. Specific beats flattering. Mentioning their actual words shows you read the post, and people respond to that far more than to a generic compliment.",
          "Do not pitch anything in the first message. A research call is not a sales call, and people can smell a pitch from the subject line. Ask about their experience, thank them, and let the relationship sit.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Chase detailed complaints rather than large audiences.",
          "Look beyond forums into reviews and support threads.",
          "Keep outreach to three specific sentences.",
          "Never pitch during a research call.",
        ],
      },
    ],
  },
  {
    slug: "audience2-analyze-interview-transcripts",
    title: "How to Analyze Audience Interview Transcripts",
    excerpt:
      "Analyze audience interview transcripts by tagging repeats, separating quotes from opinions, and building a short list of ideas you can actually film.",
    date: "2025-12-03",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Analyze transcripts by tagging repeats first and interesting one-offs second. A problem that shows up in three different interviews outranks a brilliant insight that appeared once. Frequency is not everything, but it is the fastest filter you have when the sample is small.",
          "The second rule is to separate quotes from opinions. A quote is what the person said. An opinion is your interpretation of it. Keep them in different columns so you can tell later whether a conclusion came from the audience or from your own hopes.",
        ],
      },
      {
        heading: "Tag in two colors",
        paragraphs: [
          "Use one color for anything a person described as a problem, and another for anything they described as a goal. Problems tell you what to fix. Goals tell you what to promise. A strong video usually joins the two: it fixes the problem on the way to the goal.",
          "Count how often each tag appears across your interviews. After six or seven conversations, the top three problems are usually stable. When a new interview stops adding new tags, you have enough to act, and more interviews will only confirm what you already know.",
        ],
      },
      {
        bullets: [
          "Tag problems in one color and goals in another.",
          "Count repeats across every interview you run.",
          "Stop interviewing once new tags dry up.",
          "Keep raw quotes apart from your own reading of them.",
        ],
      },
      {
        heading: "Build the short list",
        paragraphs: [
          "End each analysis session with a list of five ideas and no more. Rank them by how often the problem appeared and how badly it seemed to hurt. A frequent mild annoyance can matter less than a rare problem that ruins someone's week, so read the intensity too.",
          "Write one sentence next to each idea describing the person who has it. That sentence becomes your target viewer for the video and keeps the script pointed at a real person instead of a vague crowd.",
        ],
      },
      {
        quote:
          "If your analysis does not end with a numbered list of ideas, you are reading transcripts instead of deciding what to make.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track repeated problems before interesting one-offs.",
          "Separate the audience's words from your interpretation.",
          "Stop collecting once new tags stop appearing.",
          "Finish every session with five ranked ideas.",
        ],
      },
    ],
  },
  {
    slug: "audience2-incentives-for-interviewees",
    title: "Fair Incentives for Audience Interviewees",
    excerpt:
      "Fair incentives for audience interviewees keep research honest and respectful. Learn what to offer, what to avoid, and why small gestures still work.",
    date: "2026-04-21",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "community"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Offer something small and useful, and be upfront about it. A copy of your notes, a short summary of what you learned, or a modest gift card covers most cases. The incentive should thank the person for their time, not buy a particular answer.",
          "The moment an incentive gets large, the research changes. People start telling you what they think you want in order to earn the reward. A twenty dollar card is gratitude. A two hundred dollar card is a job interview, and the answers will sound like one.",
        ],
      },
      {
        heading: "What actually works as a thank you",
        paragraphs: [
          "A clean summary of your findings is often the incentive people value most. They took the call because they care about the problem, and hearing what other people said about it is genuinely interesting. It also costs you almost nothing to produce if you are already writing notes.",
        ],
        bullets: [
          "A written summary of what you learned across interviews.",
          "Early access to the video or resource that comes from it.",
          "A modest gift card for longer or repeated sessions.",
          "A public thank you with the person's permission only.",
        ],
      },
      {
        quote:
          "Thank people for their time, and keep the reward small enough that honesty still costs them nothing.",
      },
      {
        heading: "Protect the people who help you",
        paragraphs: [
          "Ask before you quote anyone by name. Some people are happy to be credited, and some are talking about a boss or a client they would rather not name in public. When in doubt, anonymize. A vague descriptor like 'a freelance editor' protects the person and still gives your script a real source.",
          "Also ask before you reuse a recording. The permission you got for a research call is not permission for a published clip. It takes one sentence to ask, and it keeps the relationship clean if you want to talk to them again.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep incentives small so answers stay honest.",
          "A findings summary is often the reward people want.",
          "Ask before naming or quoting anyone publicly.",
          "Research consent is not the same as publishing consent.",
        ],
      },
    ],
  },
  {
    slug: "audience2-common-audience-interview-mistakes",
    title: "Common Audience Interview Mistakes to Avoid",
    excerpt:
      "Common audience interview mistakes turn good research into noise. Learn the habits that waste calls and the small fixes that recover the signal.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["audience", "research", "community"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "The most common audience interview mistake is talking more than the person you are interviewing. If you spend the call explaining your idea, you are collecting reactions to a pitch, not research. Aim for the other person to speak about eighty percent of the time and hold yourself to it.",
          "The second mistake is treating every answer as confirmation. When someone disagrees, that is the most valuable minute of the call, and it is the minute most creators skip past. Sit with the disagreement and ask what led them there. It costs nothing and it can save a launch.",
        ],
      },
      {
        heading: "Mistakes that waste a call",
        paragraphs: [
          "Asking hypotheticals wastes time. 'Would you use this' gets a polite answer that predicts nothing. So does pitching too early, and so does stacking three questions into one breath so the person answers only the last. Each of these feels productive and produces nothing you can act on.",
          "Recruiting the wrong people wastes even more. Friends, fellow creators, and anyone who wants to please you will soften their answers. You want the person with the problem, not the person who likes you. It is uncomfortable and it is the entire point.",
        ],
      },
      {
        bullets: [
          "Talking too much and leaving the guest no room.",
          "Asking hypotheticals instead of about the last real event.",
          "Pitching your idea before hearing their story.",
          "Interviewing friends who cannot bear to disagree.",
          "Filling every silence instead of letting one breathe.",
        ],
      },
      {
        quote:
          "The silence you are tempted to fill is usually where the honest answer was about to arrive.",
      },
      {
        heading: "Small fixes that recover the signal",
        paragraphs: [
          "Write your questions the day before and cut the list in half. Fewer, better questions leave room for follow-ups, and follow-ups are where the real material lives. Bring five questions and expect to use three.",
          "After each call, write one sentence about the strongest thing you heard. If you cannot write that sentence, the issue was the questions or the guest, not the topic. Track this over time and you will notice which questions consistently produce something worth keeping.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Let the guest speak about eighty percent of the call.",
          "Treat disagreement as the most useful part of the interview.",
          "Ask about real events, never about hypothetical intent.",
          "Keep the question list short so follow-ups have room.",
        ],
      },
    ],
  },
];
