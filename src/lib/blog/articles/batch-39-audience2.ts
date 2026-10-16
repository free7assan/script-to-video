import {
  Users,
  BookOpen,
  Layers,
  Clock,
  Rocket,
  Flag,
  Eye,
  Heart,
  Repeat,
  MessageSquare,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch39: BlogPost[] = [
  {
    slug: "community-setup-welcome-flow",
    title: "Community Welcome Flow: Onboarding That Holds New Members",
    excerpt:
      "A community welcome flow decides whether new members speak up or drift away within days. Set up the first ten minutes before you invite anyone.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "A community welcome flow is the sequence a new member sees in their first few minutes, and it decides whether they ever post again. Get those first ten minutes right and the server mostly runs itself. Skip them and you will keep recruiting people who join, read, and vanish.",
          "I have watched two servers launch the same week with near-identical topics. One felt alive within a month. The other collected hundreds of members and almost no messages. The topic was not the difference. What happened right after someone clicked join was.",
        ],
      },
      {
        heading: "Build the landing moment",
        paragraphs: [
          "The moment someone joins is the only time you are guaranteed their attention. Treat it like a storefront. Put a short greeting in the default channel that names exactly one thing to do next, and make that step small enough to finish in a minute.",
          "A setup that works: one channel called start-here with a pinned post, a reaction role that lets people pick their interests, and a single open thread for introductions. That is the whole thing. Every extra decision you stack before a first message costs you members.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "The goal of onboarding is not to explain everything. It is to get one small action out of a stranger before their attention expires.",
      },
      {
        heading: "Give people a lane",
        paragraphs: [
          "Most new members go quiet because they cannot tell where they fit. A wall of thirty channels does not help, it makes them freeze. Narrow the map. If your server is about video editing, do not open with separate rooms for color, audio, pacing, thumbnails, and gear. Open one room and let it get messy first.",
          "Add structure only when a room has a proven, recurring problem. When gear talk floods your editing channel every single day, split it into its own space. Structure that grows from real behavior gets used. Structure you design on paper in advance mostly sits empty.",
        ],
      },
      {
        heading: "A welcome flow you can copy",
        bullets: [
          "A start-here post under 150 words that names the one action you want, with a link straight to it.",
          "A reaction role menu with three to five interest tags, never more than that.",
          "A single introduction thread, plus a pinned example intro from you so nobody has to invent a format.",
          "A human reply within a few hours to every first post for the first month.",
        ],
      },
      {
        heading: "The reply that keeps them",
        paragraphs: [
          "Onboarding does not end when the welcome message sends. It ends when a real person answers what the new member wrote. A template cannot do this part. Someone has to read the intro and respond to something specific in it, by name.",
          "This is the work nobody budgets for, and it is the highest-value hour you can spend on a young community. A reply from the owner in the first day tells a new person that this place is watched and that adding to it is safe.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Design the first minute around one small action, not a tour of everything.",
          "Open fewer channels than feels comfortable and let demand create the rest.",
          "Reply to every first post like a person, not a bot.",
          "Measure the flow by how many new members post twice, not once.",
        ],
      },
    ],
  },
  {
    slug: "community-moderation-rules",
    title: "Community Moderation Rules Members Actually Follow",
    excerpt:
      "Community moderation rules fail when they read like a legal document. Write fewer rules, make them concrete, and say what happens when someone breaks one.",
    date: "2024-04-18",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Good moderation rules are short, concrete, and written in plain language. If a new member needs a lawyer to parse what is allowed, your rules are decoration, not a system.",
          "I have read hundreds of rule pages while auditing servers. The ones that hold up all share a shape. They describe behavior a moderator can point to, and they name a consequence before anyone needs it.",
        ],
      },
      {
        heading: "Write behavior, not vibe",
        paragraphs: [
          "Be respectful is the most common rule and the least useful one. Nobody knows where respect ends and disagreement starts, so every enforcement call turns into an argument about feelings.",
          "Replace it with something a moderator can observe. No insults aimed at a person; attack the argument instead. That line gives you a clear test. Someone calls another member an idiot, you act. Someone says an idea is weak, you leave it alone.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A rule you cannot enforce in one sentence is a rule you will enforce unfairly.",
      },
      {
        heading: "Name the consequence up front",
        paragraphs: [
          "Members behave better when they know the price of a mistake. State the sequence, then follow it. A first offense gets a quiet warning. A repeat gets a short mute. Harassment or slurs skip straight to removal.",
          "The sequence has to be visible. Publish it in the rules channel and keep a private log of every action. When someone asks why they were muted, you should be able to point to a date, a message, and the rule that covers it.",
        ],
      },
      {
        heading: "A rule set that survives contact",
        bullets: [
          "No slurs, harassment, or targeted insults, enforced the first time.",
          "No unsolicited promotion or DM spam outside the designated channel.",
          "Keep spoilers tagged and stay on topic for the room you are posting in.",
          "Disagree with ideas freely, but leave the person out of it.",
          "If a moderator asks you to drop a thread, drop it and take it up in private.",
        ],
      },
      {
        heading: "Revise on a schedule",
        paragraphs: [
          "Rules rot. A line written for a fifty-person server reads wrong at five thousand. Every few months, read your rules against what actually gets reported and delete whatever never fires.",
          "Cutting a dead rule is not a weakness. It is proof the page is maintained. Members notice when the rules match reality, and that is what makes them follow the rest.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Describe behavior a moderator can observe, not a mood you want.",
          "Publish the consequence for each rule before you need to apply it.",
          "Keep the list under ten lines and pin it where new members land.",
          "Review the rules every quarter and remove what no longer fires.",
        ],
      },
    ],
  },
  {
    slug: "community-channel-structure",
    title: "Channel Structure: Building a Server People Can Read",
    excerpt:
      "Channel structure decides how easy your community is to read. Most servers open too many rooms early and wonder why nobody can find the conversation.",
    date: "2024-07-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Channel structure is the layout of rooms in your server, and it decides how easily a member finds the conversation they want. Start with too many rooms and people scatter. Start with too few and one loud topic drowns out everything else.",
          "There is no perfect map, only one that grows at the speed of real demand. I have rebuilt channel lists three times in a single server because the first two were guesses, not responses.",
        ],
      },
      {
        heading: "The one-room start",
        paragraphs: [
          "A new community needs fewer rooms than you think. Open a general chat, an introductions thread, and one off-topic room. That is enough to launch. Watch what people keep saying in general and split only when a pattern repeats for a week.",
          "When gear questions take over your general chat five days running, that is your signal. Create a gear room, move the conversation, and pin a note in general pointing there. The new room arrives with traffic because the demand already existed.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Every channel you open is a promise that something will happen there. Empty channels teach members the whole server is empty.",
      },
      {
        heading: "Names that pull their weight",
        paragraphs: [
          "Channel names are wayfinding. A visitor should know where they are from the label alone, without reading a description. Ask-questions beats support. Thumbnail-critique beats design-chat with a vague pinned note.",
          "Group related rooms under headers so the list scans in seconds. Inside a header called Make, keep your script, edit, and thumbnail rooms together. Reordering a list is a cheap change with a large effect on how quickly a stranger orients.",
        ],
      },
      {
        heading: "Rules of thumb for layout",
        bullets: [
          "Launch with three rooms and grow one at a time as topics repeat.",
          "Give every room a single, obvious purpose you can say in four words.",
          "Keep announcements read-only so they never get buried under chat.",
          "Retire a room after a month of silence instead of letting it become a ghost town.",
        ],
      },
      {
        heading: "Prune without guilt",
        paragraphs: [
          "A tidy server beats a complete one. If a room has gone quiet for a month, archive it. Members feel the difference between a place that is maintained and one that accumulates dead space.",
          "You can always bring a room back when demand returns. A smaller map that works is worth more than a larger map nobody can navigate.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Start small and let real traffic create new rooms.",
          "Name channels for the action a member wants to take.",
          "Group rooms under headers so the list scans fast.",
          "Archive dead rooms instead of leaving them empty.",
        ],
      },
    ],
  },
  {
    slug: "community-moderation-schedule",
    title: "Moderation Schedules That Cover Every Time Zone",
    excerpt:
      "A moderation schedule keeps a community safe around the clock. Without time zone coverage, the quiet hours become the hours your rules stop applying.",
    date: "2024-09-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A moderation schedule is a shared plan for who is watching the community at which hours. Without one, your rules only exist while the first few moderators happen to be awake, and the overnight window turns into a free-for-all.",
          "The problem is rarely a lack of volunteers. It is that nobody wrote down who covers what, so everyone assumes someone else is on duty. The gaps show up in the report log a week later.",
        ],
      },
      {
        heading: "Map your real traffic first",
        paragraphs: [
          "Before you assign shifts, look at when people actually post. Pull a week of activity and mark the busy hours in each major time zone your members live in. Most communities find their peak sits in a window the current team never covers.",
          "Build the schedule around that chart, not around who is the most enthusiastic volunteer. Enthusiasm does not scale to a 3 a.m. queue of reports, but a clear plan does.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Coverage is not about having the most moderators. It is about having the right hours filled by people who actually agreed to those hours.",
      },
      {
        heading: "Rotate the bad shifts",
        paragraphs: [
          "Nobody should own the dead zone forever. Rotate the unpopular windows on a monthly basis so the same person is not stuck with the graveyard every quarter. Fair rotation is what keeps a team from quietly dissolving.",
          "Pair a new moderator with an experienced one on their first few shifts. They need a person to ask when a report is ambiguous, and a shared channel where the two of them can talk through a call in real time.",
        ],
      },
      {
        heading: "A schedule that people respect",
        bullets: [
          "Publish the roster where everyone can see it, with names next to hours and time zones spelled out.",
          "Set a minimum of two moderators awake in any four-hour window during peak activity.",
          "Give every shift a clear handoff note so the next person knows what is pending.",
          "Rotate the unpopular hours monthly so the load stays even.",
        ],
      },
      {
        heading: "Handle the gap honestly",
        paragraphs: [
          "Some hours will stay thin no matter what you do. When that happens, lean on slow-mode and automated filters during the uncovered window. A channel that moves slower overnight is easier to clean up in the morning than one that exploded unchecked.",
          "Tell members the quiet hours are lightly covered. People forgive a delayed response. They do not forgive a rule that silently stopped applying while they slept.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Base the roster on real posting times, not on guesswork.",
          "Rotate the worst shifts so no one burns out on them.",
          "Require a handoff note between every pair of shifts.",
          "Use slow-mode to soften hours you cannot staff.",
        ],
      },
    ],
  },
  {
    slug: "community-first-100-members",
    title: "The First 100 Members: Recruiting Without Burning Out",
    excerpt:
      "The first 100 members set the culture of everything that follows. Recruit slowly on purpose and you avoid the empty-room problem most servers hit.",
    date: "2024-11-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "The first 100 members decide what your community feels like forever, because they write the messages every later arrival reads. Recruit them slowly and on purpose, and the place looks alive before you ever promote it widely.",
          "The common mistake is buying a burst of members before the server has a pulse. A thousand joiners landing in a dead room all leave within a day, and you have spent your launch budget on an empty hall.",
        ],
      },
      {
        heading: "Recruit by hand at first",
        paragraphs: [
          "For the first twenty members, invite individuals you have actually talked to. A direct message that references something specific beats any public post. You are not filling seats, you are seeding a conversation with people who already care about the topic.",
          "Every person you add by hand arrives knowing someone. That single fact makes them far more likely to post, and their posts are what convince the next wave that the server is worth joining.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A small server where everyone knows each other feels bigger than a large one where nobody does.",
      },
      {
        heading: "Seed the rooms before you open them",
        paragraphs: [
          "Nothing kills a newcomer's urge to post like an empty channel. Before you invite a group, put a few real conversations in each room so the first visitor sees a place mid-thought, not a blank page.",
          "You can seed with your own questions and the early members' answers. A room that already contains a running discussion gives a shy person something to reply to instead of something to start from nothing.",
        ],
      },
      {
        heading: "A slow-growth plan",
        bullets: [
          "Invite the first twenty members by name from people you already know.",
          "Seed each room with two or three real threads before it goes public.",
          "Add ten members a week and reply to every introduction within a day.",
          "Hold off on broad promotion until new members start welcoming each other on their own.",
        ],
      },
      {
        heading: "Let members bring members",
        paragraphs: [
          "The best recruits come from people already inside. When a member invites a friend, that friend arrives with a host and a reason to stay. Make inviting easy, and celebrate it without turning it into a contest that rewards spam.",
          "Watch for the moment the community starts greeting its own newcomers. That is the signal your first hundred are working. From there, growth can speed up because the culture carries itself.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Recruit the first twenty by hand, not by broadcast.",
          "Never open a room that has not been seeded with real talk.",
          "Grow by a steady trickle and reply to every new introduction.",
          "Speed up only once members start greeting each other.",
        ],
      },
    ],
  },
  {
    slug: "community-moderation-escalation",
    title: "Moderation Escalation: From Warning to Permanent Ban",
    excerpt:
      "Moderation escalation is the path from a first warning to a permanent ban. Clear steps keep enforcement fair and stop small problems from growing.",
    date: "2025-01-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Moderation escalation is the ordered set of steps a team takes as a member breaks rules again and again, ending at removal if nothing changes. Written down, it protects everyone. Improvised, it produces grudges and inconsistency.",
          "The value is not the punishment. It is the predictability. When members know what follows a warning, most of them stop before the next step, and the ones who do not give you a clean reason to act.",
        ],
      },
      {
        heading: "Start with the smallest move",
        paragraphs: [
          "Most first offenses deserve a private nudge, not a public scolding. A short message explaining what went wrong and how to fix it resolves a surprising share of cases, and it keeps the member from feeling attacked in front of the room.",
          "Save public action for behavior everyone can already see. If a message is still visible and clearly against the rules, remove it and say why. If it was a one-off in a fast thread, a quiet word often does more.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Every escalation step should feel boring and expected. The moment enforcement feels personal, the whole team loses credibility.",
      },
      {
        heading: "Define the ladder in advance",
        paragraphs: [
          "Write the steps before you need them, when nobody is angry. A workable ladder runs from private warning, to public note, to short mute, to long mute, to removal. Slurs, threats, and harassment skip the bottom rungs entirely.",
          "Give each step a time limit. A short mute means a day, not forever by accident. Review a long mute before it ends so the person is not left locked out while the team forgets them.",
        ],
      },
      {
        heading: "A ladder you can actually run",
        bullets: [
          "First offense: a private message naming the rule and asking for a change.",
          "Repeat offense: a visible note in the channel so witnesses see the boundary hold.",
          "Continued offense: a timed mute long enough to interrupt the pattern.",
          "Serious harm such as threats or slurs: immediate removal, no prior step required.",
        ],
      },
      {
        heading: "Document every rung",
        paragraphs: [
          "Keep a private record of each action with the date, the message, and the step taken. This log is what lets a second moderator handle the same person the same way, even a month later.",
          "When a ban is challenged, the log answers the question. You show the pattern, the warnings, and the removal, and the decision stands on its own without anyone having to argue about memory.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Reach for the smallest step that will actually change the behavior.",
          "Write the ladder down before a heated moment forces you to improvise.",
          "Let serious harm skip straight to removal.",
          "Log every action so the next moderator can match your call.",
        ],
      },
    ],
  },
  {
    slug: "community-lurker-to-poster",
    title: "Turning Lurkers Into Posters Without Forcing It",
    excerpt:
      "Most members lurk and never post, and that is normal. Turning lurkers into posters takes small openings, not guilt or pressure to participate.",
    date: "2025-03-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Most community members will never post, and that is not a failure. Turning lurkers into posters is a matter of lowering the cost of a first message, not of pushing people who are happy to read.",
          "The mistake is treating quiet members as a problem to fix. A lurker who reads every day is still part of the room. Your job is to leave a door open, not to drag them through it.",
        ],
      },
      {
        heading: "Make the first post cheap",
        paragraphs: [
          "A blank reply box is intimidating after months of silence. Offer formats that ask for almost nothing. A poll with two options, a yes-or-no question, or a thread where the answer is a single link all give a lurker a way in that costs less than a paragraph.",
          "Ask about specifics, not about opinions. Which editing app do you open first is easier to answer than what do you think about storytelling. Specific questions get specific replies, and a reply is how the silence breaks.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Nobody lurks because they dislike you. They lurk because speaking first feels expensive. Lower the price.",
      },
      {
        heading: "Reply fast to the rare first message",
        paragraphs: [
          "When a lurker finally writes, the response speed matters more than the response length. A short reply within the hour tells them the room is live. A reply three days later teaches them that posting goes nowhere.",
          "React to what they said, not to the fact that they spoke. Thanking someone for posting makes them feel watched. Answering their actual question makes them feel heard, and heard people come back.",
        ],
      },
      {
        heading: "Small openings that work",
        bullets: [
          "A weekly poll with two choices and no wrong answer.",
          "A thread that invites one link, such as what you are working on today.",
          "A specific question about tools rather than about opinions.",
          "A quiet invitation in the welcome message that says reading is fine too.",
        ],
      },
      {
        heading: "Do not punish the quiet",
        paragraphs: [
          "Guilt campaigns and activity quotas backfire. A message that calls out silent members makes them feel accused, and accused people leave. The rooms where lurkers eventually speak are the ones that never made speaking mandatory.",
          "Some lurkers convert after a single good experience, and some never do. Both are fine. A community is healthier with a large silent majority that trusts the room than with a small noisy core that resents everyone else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lower the cost of a first post with polls and single-link threads.",
          "Reply within the hour to every rare first message.",
          "Ask about specifics, not about broad opinions.",
          "Never guilt people for reading instead of posting.",
        ],
      },
    ],
  },
  {
    slug: "community-moderation-burnout",
    title: "Moderator Burnout: Keeping Your Team From Quitting",
    excerpt:
      "Moderator burnout ends more community teams than bad members do. Rotate hard tasks, watch the warning signs, and let people step back without shame.",
    date: "2025-06-14",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "research"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Moderator burnout is the slow exhaustion that makes your most reliable people quit without warning. It ends more community teams than any single troublemaker, because it takes the whole crew down at once.",
          "The signs show up before the resignation. The moderator who used to answer every report starts skipping the hard ones. Replies get shorter. The person who always volunteered for the messy channel goes quiet in chat.",
        ],
      },
      {
        heading: "Share the ugly work",
        paragraphs: [
          "The burnout comes from the worst tasks, not the volume. Handling harassment, deciding bans, and reading the report queue drain people. If the same two moderators own every hard call, they will leave, and they will be right to.",
          "Rotate the grim jobs the way you rotate shifts. Nobody sits in the report queue for more than a set block of days. Pair the hardest categories with a second person so no one decides a ban alone.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A moderator who feels alone with the hard calls will quit. A moderator who has a partner in them will stay through almost anything.",
      },
      {
        heading: "Let people step back",
        paragraphs: [
          "Give every moderator an easy way to take a break without leaving the team. A vacation flag, a temporary role, or just a message saying I am offline this week should be normal, not a confession.",
          "When someone says they are done, believe them and thank them. A burned-out moderator who is talked into staying becomes a resentful one who does less and makes the room feel worse.",
        ],
      },
      {
        heading: "Habits that keep a team alive",
        bullets: [
          "Cap how many days in a row one person handles the report queue.",
          "Require two people on any permanent ban decision.",
          "Make stepping back for a week simple and free of guilt.",
          "Check in with each moderator every month about how the work feels.",
        ],
      },
      {
        heading: "Watch the load, not just the people",
        paragraphs: [
          "Track how many reports each moderator handled in a month. Uneven numbers are the early warning. A team where one person takes triple the load is not a strong team, it is a fragile one held up by a single back.",
          "Add moderators before you need them. Recruiting during a crisis is harder than recruiting during a calm week, and the crisis is exactly when the remaining team starts to fracture.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Rotate the emotionally heavy tasks, not only the shifts.",
          "Never let one moderator decide a ban alone.",
          "Make time off normal and easy to take.",
          "Track per-person load and fix the imbalance early.",
        ],
      },
    ],
  },
  {
    slug: "community-engagement-rituals",
    title: "Recurring Rituals That Keep a Community Active",
    excerpt:
      "Recurring rituals give a community a reason to return each week. One steady event beats a dozen scattered prompts that nobody remembers.",
    date: "2025-09-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Recurring rituals are the fixed events that give members a reason to come back on a schedule, such as a Monday critique thread or a Friday show-and-tell. One steady ritual does more for activity than a dozen scattered prompts.",
          "The reason is memory. A recurring event trains people when to show up. A one-off prompt asks them to notice it, care about it, and find time for it on the same day, which most people never do.",
        ],
      },
      {
        heading: "Pick a rhythm you can keep",
        paragraphs: [
          "The fastest way to kill a ritual is to promise a daily event and deliver it for two weeks. Choose a cadence the smallest version of your team can sustain during a busy month. Weekly is plenty for most communities, and biweekly beats a habit that breaks.",
          "Anchor the ritual to a day people already remember. Monday resets, a midweek check-in, and a weekend wrap each carry a natural cue that helps members expect the event without a reminder.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "A ritual is a promise about time. Break it twice and members stop planning around it.",
      },
      {
        heading: "Make it easy to join midstream",
        paragraphs: [
          "A good ritual accepts new people every single time. If the event depends on having been there last week, a newcomer stands at the edge with nothing to do. Design each round so someone can jump in cold.",
          "Keep the format short and repeatable. A critique thread with a fixed template, a link drop with one rule, or a share-your-win post that takes a sentence all let a first-timer participate without homework.",
        ],
      },
      {
        heading: "Rituals that tend to stick",
        bullets: [
          "A weekly critique thread where members post one piece of work for feedback.",
          "A Monday goal post and a Friday follow-up on whether it happened.",
          "A recurring show-and-tell where the only rule is one link or one line.",
          "A monthly recap that collects the best moments from the weeks before.",
        ],
      },
      {
        heading: "Let rituals retire",
        paragraphs: [
          "Not every ritual lasts forever, and that is healthy. When participation drops for three rounds in a row, retire the event instead of propping it up. A tired ritual signals to members that the community has run out of ideas.",
          "Replace one retired ritual with one new one at most. Too many experiments at once means none of them take root, and members lose track of what actually happens in your server.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a cadence your smallest team can keep all year.",
          "Anchor events to days members already remember.",
          "Design each round so a newcomer can join cold.",
          "Retire any ritual that misses three rounds running.",
        ],
      },
    ],
  },
  {
    slug: "community-culture-set-early",
    title: "Community Culture: The Tone You Set in Week One",
    excerpt:
      "Community culture gets set in the first week and then hardens. Decide the tone you want early, because later arrivals will copy whatever they find.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["community", "audience"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Community culture is the tone your members copy from what they see in the first week, and once it sets it is hard to change. Decide how you want people to talk before the room fills, because later arrivals imitate the earliest voices.",
          "This is why a server can feel warm and welcoming in month one and cold and cliquey by month six, even with the same rules. The people changed, and the new ones read the temperature of the existing room before they opened their mouths.",
        ],
      },
      {
        heading: "Model the tone yourself",
        paragraphs: [
          "Culture is taught by example more than by rules. If you want patient questions, answer a beginner patiently in public where everyone can see it. If you want playful banter, start some and let it run.",
          "Your early posts are a template. Members look at how the owner replies to a dumb question, a disagreement, or a joke to learn what is normal here. Whatever you do three times becomes the default.",
        ],
      },
      {
        paragraphs: [],
        quote:
          "Members do not read your culture from a pinned post. They read it from the last ten messages and copy what they see.",
      },
      {
        heading: "Name the behaviors you want",
        paragraphs: [
          "Vague goals like be kind do not teach anything. Say what good behavior looks like in your specific rooms. We answer beginner questions without sarcasm. We disagree with the idea and leave the person out of it. We celebrate small wins out loud.",
          "Then reward those behaviors the moment they appear. A quick reaction on a helpful answer, a shout-out for a thoughtful disagreement, and a reply to a new member all tell the room what earns attention here.",
        ],
      },
      {
        heading: "Signs your culture is holding",
        bullets: [
          "New members copy the house style within their first few posts.",
          "Experienced members answer beginners without being asked.",
          "Disagreements stay about the idea and never about the person.",
          "Regulars correct small slips themselves before a moderator steps in.",
        ],
      },
      {
        heading: "Redirect drift before it sets",
        paragraphs: [
          "Culture drifts, and the fix is quick course correction, not a lecture. The first time an insider mocks a newcomer, respond right there. That single public correction resets the room and shows everyone which way the boundary runs.",
          "You will correct the same behaviors more than once in the early weeks. That repetition is the work. A culture set on purpose in month one saves you years of moderation you would otherwise be doing by hand.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat your first week of posts as a template members will copy.",
          "Name specific behaviors instead of vague values like be kind.",
          "Reward the tone you want the moment you see it.",
          "Correct drift publicly the first time, not the tenth.",
        ],
      },
    ],
  },
];
