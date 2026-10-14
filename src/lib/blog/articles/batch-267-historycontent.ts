import {
  BookOpen,
  Clock,
  Flag,
  Heart,
  Map,
  Scissors,
  Search,
  TrendingUp,
  Users,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch267: BlogPost[] = [
  {
    slug: "history-content-turning-events-into-stories",
    title: "Turning Events Into Stories That Hold Viewers",
    excerpt:
      "Turning events into stories is the core skill of any history channel. This guide covers structure, character, and how to keep real facts intact.",
    date: "2040-08-01",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "Start with a person, not a date",
        paragraphs: [
          "Turning events into stories means finding one decision that changed the outcome, then showing why it was hard. A list of dates tells viewers what happened, while a story shows them what it cost. Pick the person closest to the choice and follow their view.",
          "Give that person a want, an obstacle, and a consequence. If the record names no clear protagonist, choose the figure nearest the decision and tell viewers why you chose them. Honest framing keeps the story grounded.",
        ],
      },
      {
        heading: "Structure beats raw chronology",
        paragraphs: [
          "Chronology is a timeline, not a plot. You can move a scene earlier or later as long as viewers know where they are. Open on the moment of tension, then step back to explain how the pieces fit together.",
          "Keep one question alive through the middle. Will the fleet arrive, will the treaty hold, will the letter reach the capital. Answer it near the end, then show the cost that outlived the answer.",
        ],
      },
      {
        quote:
          "History already hands you the plot. Your job is to choose which door the viewer walks through.",
      },
      {
        heading: "Write scenes you can prove",
        paragraphs: [
          "Every scene needs a source. When no source describes the room, you can only describe what the record supports, such as walls, weather, time of day, and the names present. Anything more is invention.",
          "When the record is silent, say so. Uncertainty, handled openly, earns more trust than confident detail that later collapses.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open on a decision rather than a date.",
          "Hold one question through the middle before you resolve it.",
          "Describe only what a source can support.",
          "Tell viewers when the record is silent.",
          "End on a cost, not a tidy conclusion.",
        ],
      },
      {
        heading: "Pace the reveal",
        paragraphs: [
          "Reveal information when it changes a decision, not when it appears in the calendar. A viewer who learns a fact right before it matters will remember it. A viewer buried under context will forget.",
          "Good history scripts cut years, not facts. Keep the events that move the story and compress the rest into a line of narration.",
        ],
      },
      {
        heading: "Let the aftermath do the work",
        paragraphs: [
          "The final beat should show what changed for real people. Treaties, borders, and prices matter because they altered daily life. Return to your protagonist and show the world they left behind.",
          "A strong ending gives viewers a reason to return next time. It closes the loop you opened and leaves one honest thread for the next episode.",
        ],
      },
    ],
  },
  {
    slug: "history-content-using-maps-and-visuals",
    title: "Using Maps And Visuals To Make History Clear",
    excerpt:
      "Using maps and visuals turns abstract history into something viewers can follow. This guide covers when to show a map and when it distracts.",
    date: "2040-08-03",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        heading: "A map answers a question the words raise",
        paragraphs: [
          "Using maps and visuals works best when the narration has just raised a spatial question. If the script says two armies marched toward each other, the viewer immediately wants to see where. Show the map at that moment.",
          "A map dropped in early, before anyone cares, becomes decoration. A map timed to a question becomes an answer the viewer did not know they needed.",
        ],
      },
      {
        heading: "Keep one idea per graphic",
        paragraphs: [
          "Each graphic should carry a single idea. A map that shows borders, troop movement, supply lines, and weather at once will confuse more than it explains. Split it into two beats if you must.",
          "Label only what the sentence mentions. Extra labels pull attention away from the point you are making and slow the viewer down.",
        ],
      },
      {
        quote:
          "A good map does not show everything. It shows the thing the viewer just asked for.",
      },
      {
        heading: "Animate with restraint",
        paragraphs: [
          "Motion should mark change, such as a border moving or a route opening. If nothing changes, a still frame often reads better. Constant drifting and zooming tires the eye.",
          "Match the speed of the animation to the speed of the narration. A slow reveal of a long campaign should not flash past in two seconds.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Show a map when the narration raises a spatial question.",
          "Keep each graphic to one idea.",
          "Label only what the script mentions.",
          "Use motion to mark change, not to fill time.",
          "Match graphic speed to narration speed.",
        ],
      },
      {
        heading: "Verify the geography",
        paragraphs: [
          "Old maps differ from modern ones in borders, place names, coastlines, and the way rivers are drawn. Decide which version your story needs and say which you are using. Mixing eras without a note will mislead viewers.",
          "Check place names against a source from the period when the story is set. A modern name in a scene set centuries ago breaks the spell.",
        ],
      },
      {
        heading: "Let visuals carry the boring parts",
        paragraphs: [
          "Movement across a map can explain logistics faster than any paragraph. Show the supply route, the season, and the distance in one animated line. The narration can stay short.",
          "This is where history video beats a book. Use the screen for space and time, then spend your words on people and choices.",
        ],
      },
    ],
  },
  {
    slug: "history-content-sourcing-historical-claims",
    title: "Sourcing Historical Claims Without Guessing Wrong",
    excerpt:
      "Sourcing historical claims carefully protects your channel and your viewers. Learn how to verify facts, weigh sources, and flag what remains uncertain.",
    date: "2040-08-05",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Name the source out loud",
        paragraphs: [
          "Sourcing historical claims starts with telling viewers where a fact came from. Say whether it is a letter, a court record, a chronicle, or a later historian. A named source does more for trust than a confident tone.",
          "When two sources disagree, present both and explain which one you trust and why. The reasoning is often more interesting than the fact itself.",
        ],
      },
      {
        heading: "Separate primary from secondary",
        paragraphs: [
          "A primary source was made close to the event. A secondary source interprets it later. Both are useful, but they carry different weight, and viewers should know which they are hearing.",
          "Modern retellings repeat each other, so ten articles can trace back to one shaky claim. Follow the chain to the earliest version before you repeat it.",
        ],
      },
      {
        quote:
          "One source is a claim. Two independent sources are a fact worth repeating.",
      },
      {
        heading: "Date everything you can",
        paragraphs: [
          "Attach a date to each source when possible. A letter written during a siege reads differently from a memoir written forty years later. Time changes what a witness could know.",
          "When a date is unknown, say so. An undated source can still be useful if you treat its limits honestly.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tell viewers where each fact comes from.",
          "Show disagreement instead of hiding it.",
          "Weigh primary sources against later retellings.",
          "Trace repeated claims back to the earliest version.",
          "Date your sources and admit when you cannot.",
        ],
      },
      {
        heading: "Beware the confident quote",
        paragraphs: [
          "Famous quotes are often cleaned up, shortened, or invented. Check the earliest printed version before you put words in a historical figure's mouth. A misattributed line can sink an otherwise solid episode.",
          "If a quote cannot be verified, paraphrase it and say what the person is known to have argued. Honesty costs you nothing here.",
        ],
      },
      {
        heading: "Build a source list",
        paragraphs: [
          "Keep a running document of every source you use, with page numbers and links. This saves time when a viewer challenges a claim and protects you if a dispute arises.",
          "Publish a short list in the description. Viewers who want to check your work will respect the gesture, and the habit keeps your own standards high.",
        ],
      },
    ],
  },
  {
    slug: "history-content-avoiding-myths-and-hype",
    title: "How To Avoid Myths And Hype In History Video",
    excerpt:
      "Avoiding myths and hype keeps history video honest. This guide shows how to spot appealing legends, check them against sources, and correct them on screen.",
    date: "2040-08-07",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "Popular stories are not always true",
        paragraphs: [
          "Avoiding myths and hype begins with admitting that the best story is sometimes false. Legends survive because they are memorable, not because they are accurate. Your first job is to check, not to repeat.",
          "Treat a familiar anecdote as a claim to test. If it collapses under a source check, that collapse can itself become part of the episode.",
        ],
      },
      {
        heading: "Spot the tells of a myth",
        paragraphs: [
          "Myths tend to have a perfect line, a single villain, a tidy ending, and a clean moral. Real history is messier. When a story feels too clean, look for the version with more people and fewer certainties.",
          "Watch for numbers that sound round and dramatic. Troop counts and death tolls in old accounts are often guesses dressed as records.",
        ],
      },
      {
        quote:
          "When a story feels too perfect, that feeling is a research instruction.",
      },
      {
        heading: "Correct without lecturing",
        paragraphs: [
          "You can correct a myth by showing the evidence, not by scolding the audience. Introduce the popular version, then walk through what the record actually says. Let viewers feel the correction land.",
          "Credit the audience for caring about accuracy. People accept corrections when they are treated as curious rather than gullible.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Test familiar anecdotes before repeating them.",
          "Treat a story that feels too clean as a warning.",
          "Question round numbers and single villains.",
          "Correct with evidence, not with a lecture.",
          "Let the correction serve the narrative.",
        ],
      },
      {
        heading: "Resist the hype cycle",
        paragraphs: [
          "New discoveries get shared with dramatic headlines that the study itself does not support. Read the paper or the report before you build a segment on it. The gap between the headline and the finding is often the real story.",
          "Say what the evidence shows and what it does not. A cautious claim ages better than an exciting one that gets walked back.",
        ],
      },
      {
        heading: "Keep a myth file",
        paragraphs: [
          "Collect the myths you encounter in a running list. Mark which are debunked, which are contested, and which are simply unsupported. Over time this becomes a library you can draw on.",
          "Many myths deserve their own episode. Audiences enjoy watching a beloved story get tested against the record, as long as you stay fair to why people believed it.",
        ],
      },
    ],
  },
  {
    slug: "history-content-timelines-and-pacing",
    title: "Timelines And Pacing In Historical Documentaries",
    excerpt:
      "Timelines and pacing decide whether a history video feels clear or exhausting. Here is how to order events and control the tempo of a long narrative.",
    date: "2040-08-09",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        heading: "Order events for clarity, not habit",
        paragraphs: [
          "Timelines and pacing matter because viewers can only hold so much at once. Start from the event that raises the central question, then fill in what led there. The calendar is a tool, not a rule.",
          "Flashbacks work when they answer a question the present scene just created. A flashback that arrives before the question feels random and slows the story.",
        ],
      },
      {
        heading: "Give each era a rhythm",
        paragraphs: [
          "Long stretches of calm and short bursts of crisis rarely share one tempo. Let quiet periods move quickly and decisive moments slow down. The contrast tells viewers where to pay attention.",
          "A battle that lasted an afternoon can fill ten minutes. A decade of peace can pass in a sentence. Match screen time to consequence, not to duration.",
        ],
      },
      {
        quote:
          "Screen time should follow consequence, not the calendar.",
      },
      {
        heading: "Signpost the jumps",
        paragraphs: [
          "When you move through time, tell viewers where they are. A date on screen, a change in music, a shift in color, or a single line of narration can carry the shift without confusion.",
          "Repeated jumps without signposts leave viewers lost and quiet. Once an audience stops tracking the timeline, they stop following the argument.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open on the event that raises the central question.",
          "Use flashbacks only to answer a fresh question.",
          "Slow down for consequence and speed up for routine.",
          "Signpost every jump in time.",
          "Match screen time to impact, not to duration.",
        ],
      },
      {
        heading: "Build a master timeline first",
        paragraphs: [
          "Before writing, lay out every event you might include on one page. Then choose the spine of the story and set the rest aside. This keeps you from chasing tangents that do not serve the question.",
          "The master timeline also shows gaps. If a crucial stretch has no sources, you will see it early and can plan how to handle the silence.",
        ],
      },
      {
        heading: "Test the pace out loud",
        paragraphs: [
          "Read the script aloud and time it. Sections that felt quick on the page often drag when spoken. Mark the spots where your own attention wanders.",
          "Cutting a tangent can feel like losing work, but a tightened middle keeps viewers to the end. Pace is a gift to the audience, not a compromise.",
        ],
      },
    ],
  },
  {
    slug: "history-content-putting-people-before-dates",
    title: "Why History Video Should Put People Before Dates",
    excerpt:
      "Putting people before dates is what makes history stick. This guide explains how to build episodes around choices, fears, and stakes instead of a calendar.",
    date: "2040-08-12",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "People carry the meaning",
        paragraphs: [
          "Putting people before dates means asking what a change felt like for someone alive at the time. A tax is a line in a ledger until you show the family that could no longer afford bread. Then it becomes real.",
          "Dates anchor a story, but people carry its meaning. Lead with the human cost and let the dates serve as landmarks along the way.",
        ],
      },
      {
        heading: "Show stakes, not just events",
        paragraphs: [
          "Every scene should answer what someone stood to gain or lose. A treaty is dull until viewers know who would starve if it failed. Stakes turn information into a reason to keep watching.",
          "Name the fear and the hope on both sides. Even a distant ruler becomes understandable when you show what they were afraid of.",
        ],
      },
      {
        quote:
          "A date tells you when. A person tells you why it mattered.",
      },
      {
        heading: "Give ordinary lives equal weight",
        paragraphs: [
          "Kings and generals dominate the record, but farmers, nurses, clerks, and laborers lived through the same events. Their stories are harder to source, yet they often explain the consequences better.",
          "When you cannot find one named commoner, gather several smaller records into a composite and label it clearly as a composite. Honesty keeps the technique safe.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead with what a change cost real people.",
          "Give every scene a clear stake.",
          "Name the fears and hopes on all sides.",
          "Balance famous figures with ordinary lives.",
          "Label any composite character as a composite.",
        ],
      },
      {
        heading: "Let emotion come from facts",
        paragraphs: [
          "You rarely need to tell viewers how to feel. A well chosen detail, such as a child's shoe found in rubble, does the work on its own. Trust the evidence to carry the weight.",
          "Sentiment that the record cannot support reads as manipulation. Stay with what is documented and let the audience draw the feeling.",
        ],
      },
      {
        heading: "End with the people left behind",
        paragraphs: [
          "Close the episode by returning to the lives the event reshaped. Show what continued and what ended. This is where history stops being about the past and starts being about inheritance.",
          "Viewers remember a person long after they forget a year. Build your series so the people, not the dates, are what they carry forward.",
        ],
      },
    ],
  },
  {
    slug: "history-content-handling-sensitive-history",
    title: "Handling Sensitive History With Care On Video",
    excerpt:
      "Handling sensitive history with care means weighing harm, context, and consent. This guide covers tone, warnings, and how to avoid turning pain into spectacle.",
    date: "2040-08-15",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        heading: "Start from who is affected",
        paragraphs: [
          "Handling sensitive history with care begins with asking who still lives with its consequences. Genocide, slavery, famine, and war are not distant topics for many viewers. Their experience should shape how you tell the story.",
          "Ask whether the people you are describing would recognize your account as fair. If you cannot answer that, do more reading before you record.",
        ],
      },
      {
        heading: "Warn without spoiling",
        paragraphs: [
          "Give viewers a clear warning before graphic material, then let them decide. A short note at the start of the video respects the audience without draining the moment of its weight.",
          "Warnings should be specific enough to be useful. Say what kind of content is coming, not just that it is difficult.",
        ],
      },
      {
        quote:
          "Handle pain like evidence, not like entertainment.",
      },
      {
        heading: "Avoid spectacle",
        paragraphs: [
          "Graphic images can inform or they can numb. Show what serves understanding and cut what only shocks. If an image exists to hold attention rather than explain something, it does not belong.",
          "The same standard applies to reenactments. Dramatize the conditions, not the suffering of real, named victims.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask who still lives with the consequences.",
          "Warn viewers specifically and early.",
          "Use graphic material only when it explains something.",
          "Do not dramatize real people's suffering for effect.",
          "Check your account against the affected community.",
        ],
      },
      {
        heading: "Let context carry the weight",
        paragraphs: [
          "Numbers alone rarely convey scale. Pair them with context that helps viewers grasp what they mean, such as what a normal day looked like before the violence began.",
          "Explain causes without excusing them. Understanding why something happened is not the same as justifying it, and viewers can hold both ideas at once.",
        ],
      },
      {
        heading: "Seek outside review",
        paragraphs: [
          "Before publishing, ask someone from the affected community to read the script. They will catch tone and framing problems that are invisible from the outside.",
          "Treat their notes as part of the research, not as a hurdle. A few changes can turn a well meaning video into one that people trust.",
        ],
      },
    ],
  },
  {
    slug: "history-content-archival-footage-and-rights",
    title: "Archival Footage And Rights For History Channels",
    excerpt:
      "Archival footage and rights trip up many history channels. Learn how to find public domain film, clear licenses, and document every source before you publish.",
    date: "2040-08-18",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "Free to view is not free to use",
        paragraphs: [
          "Archival footage and rights confuse many creators because a clip can be easy to find and still illegal to use. Something being online does not place it in the public domain. Ownership has to be checked separately.",
          "Copyright lasts a long time, and it varies by country. Treat every clip as owned until you can prove otherwise.",
        ],
      },
      {
        heading: "Know your safe categories",
        paragraphs: [
          "Public domain material, government works, openly licensed footage, and works you have licensed directly are the easiest to use. Each has conditions, so read the terms rather than assuming the label means no rules apply.",
          "Fair use exists but is narrow and risky for a channel that earns money. Relying on it for entertainment value alone is a gamble.",
        ],
      },
      {
        quote:
          "If you cannot name the owner of a clip, you are not ready to publish it.",
      },
      {
        heading: "Document every source",
        paragraphs: [
          "Keep a spreadsheet with the clip, the owner, the license, the date you cleared it, and any proof of payment. This record protects you if a claim arrives months later.",
          "Store the evidence where you can find it quickly. A calm, documented reply settles most disputes before they grow.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Check ownership even for free to view clips.",
          "Prefer public domain, government, openly licensed, and directly licensed material.",
          "Treat fair use as a narrow exception, not a plan.",
          "Keep a clearance record for every clip you use.",
          "Store proof of permission where you can find it fast.",
        ],
      },
      {
        heading: "Budget for licensing",
        paragraphs: [
          "Good footage costs money, and that cost belongs in your production plan. Include licensing fees before you commit to an episode that depends on rare film.",
          "When the budget is tight, build episodes around material you can clear. A strong script with modest visuals beats a weak script propped up by stolen clips.",
        ],
      },
      {
        heading: "Credit and archive properly",
        paragraphs: [
          "Follow the credit format the owner requires, even when it is awkward. Proper credit is often a condition of the license, not a courtesy.",
          "Archive copies of the exact version you licensed. Footage gets re-edited and re-uploaded, and you may need to show what you actually used.",
        ],
      },
    ],
  },
  {
    slug: "history-content-building-a-history-series",
    title: "Building A History Series That Grows An Audience",
    excerpt:
      "A history series succeeds when viewers know what to expect yet still feel surprised. This guide covers formats, schedules, and hooks that build an audience.",
    date: "2040-08-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Give the series a clear promise",
        paragraphs: [
          "Building a history series starts with a promise viewers can repeat in one sentence. They should know what kind of story they will get each time, even before they press play.",
          "A promise is not a formula. Within the familiar shape, each episode needs its own question and its own reason to exist.",
        ],
      },
      {
        heading: "Pick a format you can sustain",
        paragraphs: [
          "Long documentaries, short explainers, thematic arcs, and deep dives each demand different work. Choose the format you can produce on schedule for a year without burning out.",
          "Consistency beats ambition here. An audience forms around a rhythm, and a series that appears on time teaches viewers when to return.",
        ],
      },
      {
        quote:
          "Viewers subscribe to a promise, then stay for the surprises inside it.",
      },
      {
        heading: "Hook with a question, end with a thread",
        paragraphs: [
          "Open each episode with the question it will answer. Close by opening one honest thread toward the next. That thread is why a viewer watches the follow up.",
          "Do not fake a cliffhanger that you never resolve. Trust built across episodes is worth more than one dramatic ending.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "State the series promise in one clear sentence.",
          "Choose a format you can produce on schedule.",
          "Open every episode with its central question.",
          "Close with one honest thread toward the next.",
          "Never fake a cliffhanger you will not resolve.",
        ],
      },
      {
        heading: "Number and name for browsing",
        paragraphs: [
          "Clear titles and episode numbers help new viewers start at the beginning and returning viewers find what they missed. A messy catalog loses people who want to catch up.",
          "Group related episodes into short runs. A three part arc is easier to promote than a scattered list, and it gives newcomers an obvious entry point.",
        ],
      },
      {
        heading: "Let the audience steer the next season",
        paragraphs: [
          "Read the comments for questions you did not answer. Those gaps often point to the episodes your audience actually wants next.",
          "Invite suggestions without promising everything. A series that responds to its viewers feels alive, and that feeling is what keeps people subscribed.",
        ],
      },
    ],
  },
  {
    slug: "history-content-making-history-feel-present",
    title: "Making History Feel Present For Modern Viewers",
    excerpt:
      "Making history feel present means connecting old decisions to lives today. This guide covers sensory detail, modern stakes, and avoiding cheap presentism.",
    date: "2040-08-27",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["niche", "education", "storytelling"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Bridge the gap with the senses",
        paragraphs: [
          "Making history feel present starts with details a viewer can sense. The smell of a tannery, the noise of a crowded market, the dust of a summer road, the cold of a winter march bring a distant world close.",
          "Use only sensory detail the sources support. A single verified smell does more than a paragraph of invented atmosphere.",
        ],
      },
      {
        heading: "Show what still echoes",
        paragraphs: [
          "Help viewers see how an old decision still shapes their lives. A border drawn centuries ago can explain a modern conflict or a family name. Draw the line from then to now.",
          "Keep the link honest. Not every event has a clear modern consequence, and forcing one weakens the point you are making.",
        ],
      },
      {
        quote:
          "The past feels near when viewers can find a piece of it in their own lives.",
      },
      {
        heading: "Avoid cheap presentism",
        paragraphs: [
          "Judging people by modern standards can feel satisfying, but it often hides the real choices they faced. Explain the world they lived in before you assess what they did.",
          "You can still reach moral judgments. Just earn them by showing the constraints they faced, the alternatives available, the pressure from allies, and the costs they understood.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use sensory detail that the sources can support.",
          "Show how an old decision still echoes today.",
          "Keep modern links honest rather than forced.",
          "Explain the world people lived in before judging them.",
          "Earn your moral conclusions with evidence.",
        ],
      },
      {
        heading: "Use language that lives",
        paragraphs: [
          "Plain, active sentences carry more force than academic phrasing. Say that a family lost its farm instead of describing a transfer of agricultural holdings.",
          "Translate specialist terms on first use. A viewer who has to look up a word has already left the video.",
        ],
      },
      {
        heading: "Let viewers see themselves",
        paragraphs: [
          "Find the ordinary moments inside great events, such as a mother packing a bag before a forced move. These shared human details let any viewer step into the scene.",
          "When history feels present, it stops being a set of dates and becomes a set of choices, much like the ones viewers face now.",
        ],
      },
    ],
  },
];
