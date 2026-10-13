import {
  BarChart3,
  DollarSign,
  MessageSquare,
  PenLine,
  Puzzle,
  Rocket,
  Target,
  Type,
  Users,
  Waves,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch159: BlogPost[] = [
  {
    slug: "press-kit-that-works",
    title: "How to Build a Press Kit That Journalists Actually Use",
    excerpt:
      "A press kit earns its keep when a reporter can pull facts in two minutes. Here is what to include, what to cut, and how to keep it current online.",
    date: "2031-08-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "A press kit is a small set of assets a journalist can grab in under two minutes. If a reporter has to email you for a logo or a founder bio, the kit is already failing at its one job.",
          "Good kits look plain and load fast. They put the facts up front instead of hiding them behind a contact form, because the person deciding whether to write about you has a deadline and a short attention span.",
        ],
      },
      {
        heading: "The assets that do the work",
        paragraphs: [
          "You need a short company description, a founder bio, high resolution logos, and a few product images. Add a fact sheet with the numbers a reporter will want to quote, because hunting for those numbers is where most stories quietly die.",
          "Keep filenames simple and descriptive. A file called final-logo-v3-REAL-FINAL.png slows a reporter down, and slow reporters move to the next story on their list.",
          "Store everything in one folder that anyone can open without a password. If a reporter has to request access or fill in a form, a chunk of them will give up and cover someone else instead.",
        ],
        bullets: [
          "A one paragraph company description written in plain language, not marketing language.",
          "Founder and executive bios with real roles and a line about why they started this.",
          "Logos in PNG and vector formats, with a note about clear space and background rules.",
          "Two or three product screenshots at full resolution, named so nobody has to guess.",
          "A fact sheet with founding date, funding, headcount, and the contact who replies fast.",
        ],
      },
      {
        heading: "Write it for the reporter, not the board",
        paragraphs: [
          "Marketing copy makes reporters suspicious. If your description is packed with adjectives, they will assume the substance is thin and move to the next pitch in their inbox.",
          "Say what you do, who pays for it, and why it exists. Save the enthusiasm for the interview, where a human voice actually helps you.",
          "A simple test is whether a smart person outside your industry can repeat your first sentence back to you. If they cannot, rewrite it until they can.",
        ],
      },
      {
        quote:
          "A reporter should never have to ask for the thing you already have. A good kit exists so the answer is always yes.",
      },
      {
        heading: "Where the kit should live",
        paragraphs: [
          "Put the kit on a public page at a clean address, like yoursite.com/press. A landing page beats a zip file because reporters can link to it and you can update it without resending anything.",
          "Offer a zip download for the people who want everything at once, but never make that the only option. Some newsrooms block downloads, and a broken zip becomes your problem to fix on deadline.",
          "Make the page load fast on a phone, since many people open your pitch while doing three other things. A slow page reads as an unsteady company.",
        ],
      },
      {
        heading: "What to leave out",
        paragraphs: [
          "Skip the long origin story, the full press release archive, and the awards nobody has heard of. Each extra item pushes the useful material further down the page.",
          "Skip fake polish too. A kit that feels like a glossy brochure tells the reporter you have more style than substance, and they will treat your story with the same suspicion.",
          "Do not hide your contact details behind a sales form. The whole point of the kit is to make saying yes easy.",
        ],
      },
      {
        heading: "Keep it current or kill it",
        paragraphs: [
          "An old press kit is worse than no press kit at all. Stale numbers date your company in public and make a careful reporter doubt everything else you sent.",
          "Set a reminder to check the funding numbers, the headcount, and the executive titles every quarter. Update the logo files the moment your brand changes, and remove team members who have left the same week they leave.",
          "If keeping it fresh is too much work, cut the kit down to the five items that matter. A small kit you maintain beats a big one you abandon.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A press kit succeeds when a reporter can pull the facts in two minutes without contacting you.",
          "Include a plain description, bios, logos, product images, and a fact sheet with quotable numbers.",
          "Write in plain language, since adjective heavy copy reads as a warning sign to journalists.",
          "Refresh numbers and titles every quarter so the kit never dates your company in public.",
        ],
      },
    ],
  },
  {
    slug: "one-page-press-release",
    title: "One Page Press Releases That Reporters Finish",
    excerpt:
      "A one page press release respects the reader. Here is the structure that keeps a reporter reading all the way to the closing quote and the offer.",
    date: "2031-08-04",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "A one page press release is a short document that answers who, what, when, and why in the first two sentences. Length is not the problem most releases have. Burying the news under context is.",
          "Keep it to a single page and a reporter will at least read the top. Make them scroll and you have already lost the slower half of your list before they reach the point.",
        ],
      },
      {
        heading: "The first two sentences carry the release",
        paragraphs: [
          "Lead with the news itself. If you raised money, say how much and from whom. If you launched a product, say what it does in one clause a stranger can follow.",
          "Skip the preamble about your founding vision. That belongs three paragraphs down, if it belongs at all, and it rarely earns the space.",
          "The headline should be a fact, not a mood. A reporter scanning twenty pitches will decide in seconds whether the top line is worth their afternoon.",
        ],
      },
      {
        heading: "What goes below the fold",
        paragraphs: [
          "Add one quote from a person with a real title, and make it say something a human would actually say. A quote that repeats the headline is filler, and reporters cut it without blinking.",
          "Add the boilerplate at the bottom in small type. Everyone ignores it except the editors who need your legal name spelled correctly.",
          "Keep your sentences short. A release is read fast, often on a phone, and long clauses make a simple fact feel complicated.",
        ],
        bullets: [
          "A factual headline and a subhead with the single most interesting detail.",
          "A dateline with the city and the date of the announcement.",
          "One paragraph of context explaining why this matters now.",
          "One quote from a named person, written the way they actually talk.",
          "Contact details for someone who answers within the hour.",
        ],
      },
      {
        quote:
          "A release is not a story. It is the raw material a reporter uses to write one, so make the raw material easy to lift.",
      },
      {
        heading: "End with contact, not a plea",
        paragraphs: [
          "Close with the name, email, and phone of a person who will pick up. A generic press alias works for big companies and fails for everyone else.",
          "Put the contact at the bottom and again near the top if space allows. A reporter on deadline should never have to hunt for the one line that lets them reach you.",
          "Do not end with a request to cover you. Reporters know what the release is for, and a plea reads as desperate rather than confident.",
        ],
      },
      {
        heading: "Send it once and follow up once",
        paragraphs: [
          "Send the release when the news is actually live, not a week before. Embargoes exist but they work best with reporters you already trust, and they require you to keep the date you promised.",
          "One polite follow up a day later is fine. Three is harassment, and it gets your address filtered for the next launch you care about.",
          "If a reporter asks for more, answer the same day. The window between interest and a published story is short.",
        ],
      },
      {
        heading: "Keep it clear enough for anyone",
        paragraphs: [
          "Keep the language plain enough for a general reader. Jargon that impresses your industry will confuse an editor who covers several beats at once.",
          "Name products and people exactly as they should appear. Most editors copy the spelling straight from your release, mistakes included.",
          "If lawyers need to review it, get that done before the news is live. A delayed legal note turns a simple update into a correction.",
          "Read it once as if you know nothing about the company. Any sentence that makes you pause is a sentence that will stop a reporter.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A one page release answers who, what, when, and why in the first two sentences.",
          "Lead with the news, not with the company history or a mood setting headline.",
          "Include one usable quote and one contact who answers fast.",
          "Boilerplate belongs at the bottom in small type, never at the top.",
        ],
      },
    ],
  },
  {
    slug: "pitching-journalists",
    title: "Pitching Journalists Without Wasting Their Time",
    excerpt:
      "A good pitch is short, specific, and written for one person. Here is how to pitch journalists so your email earns a reply instead of a delete.",
    date: "2031-08-07",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A pitch to a journalist should be short, specific, and clearly written for that one person. If your email could be sent to fifty reporters without a single change, none of them will feel addressed.",
          "The reply rate comes down to one question in the reporter's mind: is this worth my afternoon? Answer that in the first sentence and you are ahead of most of the inbox.",
        ],
      },
      {
        heading: "Do the reading first",
        paragraphs: [
          "Spend ten minutes with the reporter's recent work before you write. Reference one specific piece, and say plainly how your story connects to what they already cover.",
          "A generic compliment about their great writing is noise. A line about the piece they filed last month shows you are not blasting a list of strangers.",
          "If you cannot find a reason your story fits their beat, that is useful information. It means you have the wrong person, not a bad story.",
        ],
      },
      {
        heading: "Keep it under 150 words",
        paragraphs: [
          "The best pitches fit on a phone screen. Put the news in line one, the reason it matters in line two, and the offer in line three.",
          "Do not attach anything in the first email. Attachments from strangers get ignored or caught by filters, and the reporter has not agreed to open your file yet.",
          "Write the subject line last, after you know the one thing you want them to remember. The subject line is the whole pitch compressed.",
        ],
        bullets: [
          "A subject line that reads like news, not like a newsletter.",
          "One sentence on what is new and why now.",
          "One sentence linking it to the reporter's own beat.",
          "One clear offer, such as an interview, data, or early access.",
          "Your name and a way to reach you in one line.",
        ],
      },
      {
        quote:
          "Reporters do not owe you a reply. Your job is to make replying feel easier than ignoring you.",
      },
      {
        heading: "When they say no, or nothing",
        paragraphs: [
          "Silence is the normal outcome, so do not read it as rejection of your company. It often means the timing is wrong or the beat belongs to someone else.",
          "If you get a no, thank them and ask if there is a better person on the team. That single question turns a dead end into a warm introduction more often than people expect.",
          "A no from the right reporter is better than silence from a long list. At least you now know the beat and can aim better next time.",
        ],
      },
      {
        heading: "Follow up once",
        paragraphs: [
          "Send one follow up two or three days later, and make it add something rather than repeat the ask. A new number or a fresh angle gives them a reason to look twice.",
          "After that, stop. The reporter remembers the person who respected the silence, and that memory helps you the next time you have real news.",
        ],
      },
      {
        heading: "Learn from every pitch",
        paragraphs: [
          "Keep a note of who replied and what they asked for. Patterns show up fast, and they tell you which version of your story travels.",
          "Reread your own sent emails after a week. Most weak pitches look obvious in hindsight, and the fix is usually to cut the first two sentences.",
          "Treat each pitch as one shot in a long relationship rather than a lottery ticket. The founders who win press treat it as a standing habit.",
        ],
      },
      {
        heading: "Pick the right moment to send",
        paragraphs: [
          "Send on a weekday morning in the reporter's own time zone. A pitch that arrives at night gets buried under whatever landed after it.",
          "Avoid the first hour of the newsroom day, when everyone is in a planning meeting. Late morning usually finds a calmer inbox.",
          "Track which send times earn replies from your list, and repeat what works instead of guessing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write every pitch for one specific reporter, not for a list of fifty.",
          "Keep the email under 150 words with the news in the first line.",
          "Skip attachments in the first email and offer something concrete instead.",
          "Follow up once with new information, then let it go.",
        ],
      },
    ],
  },
  {
    slug: "media-outreach-that-works",
    title: "Media Outreach That Earns Coverage You Can Use",
    excerpt:
      "Media outreach works when you bring a reporter something they cannot get elsewhere. Here is how to build a list, time your ask, and measure what happened.",
    date: "2031-08-10",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Media outreach is the work of getting your story in front of the right reporters at the right moment. It works when you bring something a journalist cannot get elsewhere, and it fails when you only bring enthusiasm.",
          "The difference between outreach that lands and outreach that vanishes is rarely the writing. It is the list and the timing behind it.",
        ],
      },
      {
        heading: "Build a list you can defend",
        paragraphs: [
          "A list of two hundred names is not a strategy. Start with twenty reporters who cover your space, and learn what each one actually writes about.",
          "Group them by what they need. Some want data, some want a founder story, and some want a customer who will talk on the record. Match the pitch to the appetite in front of you.",
          "Update the list monthly. Reporters change beats and outlets change editors, so a list from last year is already partly dead.",
        ],
      },
      {
        heading: "Time the ask to their calendar",
        paragraphs: [
          "Newsrooms run on cycles. A funding round in a slow week gets more attention than the same round on a busy Tuesday.",
          "Watch for the moments a beat is quiet, and bring your story then. You are competing for attention, not for fairness.",
          "Avoid the days when everyone pitches the same idea. If a competitor just raised money, wait a week so your story is not read as a pale copy.",
        ],
      },
      {
        quote:
          "Outreach is not a megaphone. It is a match between what you have and what one reporter needs this week.",
      },
      {
        heading: "Give before you ask",
        paragraphs: [
          "Offer the reporter something useful even when it does not produce a story about you. An exclusive data point or an introduction to a good source builds credit you can spend later.",
          "This sounds like charity. It is patience. The reporters who owe you a favor are the ones most likely to open the next email.",
        ],
        bullets: [
          "A short list of reporters who already cover your topic.",
          "Notes on what each one needs, from data to customer stories.",
          "A calendar of slow weeks on their beat.",
          "One thing you can give that costs you little and helps them now.",
        ],
      },
      {
        heading: "Measure replies, not opens",
        paragraphs: [
          "Open rates lie because of privacy features, so do not build a plan around them. Track replies, meetings, and pieces that mention you.",
          "Keep a simple log of who replied, who ignored you, and who asked for something. That log becomes your most valuable outreach asset within a year.",
          "A single piece in the right outlet can be worth more than fifty mentions in places your customers never read.",
        ],
      },
      {
        heading: "Keep outreach human",
        paragraphs: [
          "Write like a person, not a brand. Open with a normal sentence instead of a formal greeting, and drop the corporate tone entirely.",
          "Read your email out loud before you send it. Anything you would not say to someone in a room does not belong in the message.",
          "Remember there is a tired person reading at the other end, often behind on the day. A little directness and a little respect go further than polish.",
        ],
      },
      {
        heading: "Expect most outreach to fail",
        paragraphs: [
          "Even a good outreach program gets ignored most of the time. Plan for a low reply rate and treat each reply as a win worth studying.",
          "The mistake is judging a single week. Outreach compounds, and the reporter who ignored you in March may answer in September.",
          "Keep going after the first quiet month. Many teams quit right before the relationships start to pay off.",
          "Reply rates of a few percent are normal and healthy. Anything much higher usually means you are already pitching people who know you.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A short, well researched list beats a large, generic one every time.",
          "Match each pitch to what that specific reporter actually needs.",
          "Time outreach to the quiet stretches of a beat, not to your own launch calendar.",
          "Track replies and coverage, not open rates that tell you almost nothing.",
        ],
      },
    ],
  },
  {
    slug: "building-press-relationships",
    title: "Building Press Relationships Before You Need Them",
    excerpt:
      "Press relationships are built long before your launch. Here is how to become a useful source so reporters call you when the story is theirs to write.",
    date: "2031-08-13",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "A press relationship is a working friendship with a reporter who covers your world. It is built in the quiet months, not the week you have news, and it pays off when you least expect it.",
          "The founders who get covered on demand are usually the ones who were useful when they had nothing to sell.",
        ],
      },
      {
        heading: "Be a source, not a pitch",
        paragraphs: [
          "Send a reporter a tip that has nothing to do with your company. Point them to a trend, a dataset, or a competitor doing something odd.",
          "Every useful note makes your next pitch easier to open, because your name stops looking like a cold email.",
          "The tip has to be real, though. Passing along a rumor you cannot stand behind burns the trust you were trying to build.",
        ],
      },
      {
        heading: "Respect the boundary",
        paragraphs: [
          "Reporters are not your marketing team, and treating them that way ends the relationship. Never ask to review a draft or approve a quote before it runs.",
          "If you cannot say something on the record, say so up front. Off the record means off the record, and breaking that trust is permanent.",
          "If a story contains an error, ask for a correction politely and once. Editors respond to facts, not to pressure.",
        ],
      },
      {
        quote:
          "The best time to meet a reporter is when you want nothing from them. That is when the relationship is real.",
      },
      {
        heading: "Stay in touch without nagging",
        paragraphs: [
          "A short note every few months keeps you on the radar. Share a milestone, a useful stat, or a question you genuinely want their view on.",
          "Do not send a newsletter to a reporter. They get enough of those already, and yours will read as a mass mail.",
        ],
        bullets: [
          "Send one useful thing that has nothing to do with your product.",
          "Never ask to see a story before it runs.",
          "Respect off the record every single time.",
          "Check in every few months with something worth reading.",
        ],
      },
      {
        heading: "What you get back",
        paragraphs: [
          "When a reporter trusts you, they call you for comment on stories you did not pitch. That is coverage you could never buy, and it arrives because you showed up before you needed it.",
          "These relationships also survive bad news. A reporter who knows you will take your call during a crisis, and that call is worth more than any press release you could send.",
          "These are the relationships that turn a quiet launch into a phone call from a reporter who wants your side first.",
        ],
      },
      {
        heading: "Start with a hello",
        paragraphs: [
          "The first message does not need to be clever. Introduce yourself, say what you work on, and offer to be useful on your beat.",
          "Meet reporters at events when you can, but skip the hard sell. A five minute conversation at a conference beats twenty cold emails.",
          "Follow them on the platform they actually use, and read what they post. The relationship starts with attention, not with an ask.",
        ],
      },
      {
        heading: "Never trade coverage for favors",
        paragraphs: [
          "Never offer anything in exchange for a story except the story itself. Paying for placements, directly or through gifts, breaks the trust and can break the rules.",
          "Do not hint that coverage will help a reporter's career or a shared partnership. They see through it, and it makes the next conversation awkward.",
          "Give information, not inducements. That distinction is the whole difference between a source and a sponsor.",
          "A clean reputation is worth more than one favorable piece, and it lasts far longer.",
          "Say no to the easy shortcut and you keep a name that reporters trust to open.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build press relationships in the quiet months, not the week of your launch.",
          "Be a source first and a pitch second, since useful names get opened.",
          "Respect the line between marketing and journalism at all times.",
          "A trusted reporter will call you for comment long after the launch is over.",
        ],
      },
    ],
  },
  {
    slug: "announcing-a-launch",
    title: "Announcing a Launch Without Adding to the Noise",
    excerpt:
      "A launch announcement competes with every other launch that day. Here is how to find the one detail that makes a reporter stop and read your news.",
    date: "2031-08-16",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "A launch announcement works when it leads with the one detail that makes your news different from the other launches that day. Everything else is supporting material.",
          "Most launch emails fail because they describe the product instead of the change. Reporters cover change, not features, and they can tell the difference in one line.",
        ],
      },
      {
        heading: "Find the one sharp detail",
        paragraphs: [
          "Ask what is genuinely new and say only that. A faster way to do an old task is a detail. A prettier version of a crowded product is not.",
          "If you cannot name the detail in one sentence, you are not ready to pitch. Wait until you can, even if the launch date has been on the calendar for months.",
          "Test the detail on someone outside the company. If they nod and ask a follow up question, you have a story. If they smile politely, you do not.",
        ],
      },
      {
        heading: "Line up your proof",
        paragraphs: [
          "Numbers carry a launch further than adjectives. A customer count, a time saved, or a price cut gives a reporter something to quote without checking with you first.",
          "Photography and founder headshots should be ready too. A reporter who likes the story still needs an image to run alongside it.",
        ],
        bullets: [
          "A customer or user who will talk on the record about the problem you solved.",
          "One number that shows the change is real, such as time or money saved.",
          "A demo that works on the first try, because a broken demo kills the story.",
          "A founder who can explain the news in plain language in under a minute.",
        ],
      },
      {
        quote:
          "Nobody covers a launch. They cover the change a launch makes possible, and your job is to name that change out loud.",
      },
      {
        heading: "Sequence the day",
        paragraphs: [
          "Give exclusive access to one reporter a week early if the story is strong enough to trade. Then tell everyone else the morning it goes live.",
          "Have your assets ready before the emails go out. A reporter who writes in ten minutes needs your facts in five, and a slow reply loses the slot.",
          "Do not announce on a Friday if you can help it. Newsrooms are thin at the end of the week and your story will sit unread until Monday.",
        ],
      },
      {
        heading: "Plan for the quiet after",
        paragraphs: [
          "Most launches get a small bump and then nothing. Decide in advance what you will do when the coverage is thin, so you do not panic and spam your list.",
          "A launch is a start, not a finish. The reporters who skip this one may cover the next version if you stay in touch.",
          "Save the coverage links and the customer replies. They become the proof you show investors and future hires.",
        ],
      },
      {
        heading: "Prepare the founder",
        paragraphs: [
          "The founder is usually the best spokesperson for a launch, so prepare them the same day you prepare the assets.",
          "Give them three sentences they can say without notes and a list of the questions they will get. Then let them talk like a person.",
          "Warn them about the question they will not want. The hard question always comes, and a calm answer ends it quickly.",
        ],
      },
      {
        heading: "Handle the misses with grace",
        paragraphs: [
          "Some reporters will run a critical take, and that is part of the game. A fair question is better for you than being ignored entirely.",
          "If a story lands wrong, reply privately with the facts rather than arguing in public. One calm correction beats a thread war.",
          "Treat the coverage as a set of conversations to continue, not a single verdict to win or lose.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Lead with the single detail that makes your news different, not a feature list.",
          "Bring one number and one customer who will speak on the record.",
          "Prepare every asset before the announcement so fast reporters are not blocked.",
          "Expect a small bump and plan the follow up before the day arrives.",
        ],
      },
    ],
  },
  {
    slug: "crisis-communications-calm",
    title: "Handling a PR Crisis With a Calm Public Voice",
    excerpt:
      "A crisis response is judged by the first hour, not the first week. Here is how to stay calm, say something true, and avoid making the story worse.",
    date: "2031-08-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "A crisis response is judged in the first hour, when information is thin and everyone wants an answer. What you say then shapes how the story is told for weeks.",
          "The instinct to stay silent feels safe and usually backfires. Silence gets filled by other people, and their version is rarely the one you want.",
        ],
      },
      {
        heading: "Say what you know and what you do not",
        paragraphs: [
          "A short statement that admits uncertainty beats a confident statement that later falls apart. Reporters forgive not knowing. They do not forgive being misled.",
          "Give the facts you have verified, name the questions you are still working on, and commit to a time for the next update.",
          "Update on the schedule you set even if there is nothing new. A note saying there is no new information but here is what we are doing keeps the story from filling the gap without you.",
        ],
      },
      {
        heading: "Pick one voice",
        paragraphs: [
          "Route every public word through one person, usually the founder or a trained spokesperson. A company with six voices sounds like six companies, and none of them credible.",
          "Give that person the authority to speak without checking with five people first. A spokesperson who waits for approval cannot move at the speed news requires.",
        ],
        bullets: [
          "One spokesperson who speaks for the company in public.",
          "A holding statement ready before you need it.",
          "A log of every question reporters have asked, answered or not.",
          "A single place where updates get posted so you stop repeating yourself.",
        ],
      },
      {
        quote:
          "In a crisis, speed matters less than honesty. A slow true answer outlasts a fast false one.",
      },
      {
        heading: "Do not argue with the story",
        paragraphs: [
          "Correcting every small error pulls you deeper into the fight and makes the story last longer. Fix what is materially wrong and let the rest go.",
          "Never attack the reporter. The audience remembers the tone of your response far longer than the original claim.",
          "Save the corrections that matter for a calm, factual note later. Fighting in public turns a small error into a bigger story.",
        ],
      },
      {
        heading: "Close the loop with your own people",
        paragraphs: [
          "Your team reads the coverage too, and they need to hear from you before they hear it from the press. Brief them first, and tell them what they can and cannot say.",
          "Customers and partners deserve the same short, plain update. People forgive mistakes when they are told the truth early.",
          "If you made a mistake, say so plainly in the internal note. Your team can handle bad news. They cannot handle being kept in the dark.",
        ],
      },
      {
        heading: "Decide before it happens",
        paragraphs: [
          "Write a short crisis plan while things are calm, because nobody plans well in the middle of a bad day.",
          "List who speaks, who approves the words, where updates go, and how you reach the team after hours.",
          "Practice once. Walk through a fake scenario and you will find the gaps before they cost you.",
        ],
      },
      {
        heading: "Watch the details that spread",
        paragraphs: [
          "Small mistakes travel faster than big ones. A wrong number in your first statement becomes the headline two hours later.",
          "Check facts twice before you publish them, and correct your own errors before someone else does. A company that corrects itself looks steady.",
          "Keep a written record of what you said and when. When a story stretches over several days, that record keeps everyone honest.",
          "If a number changes, update the statement everywhere it appears, including your website and your social posts.",
          "Tell your team the same facts at the same time so nobody contradicts the public line by accident.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The first hour shapes the story, so prepare a holding statement before you need one.",
          "Say what you know and name what you do not, then commit to an update time.",
          "Speak with one voice and stop correcting every minor error in public.",
          "Brief your team and customers before they read the coverage elsewhere.",
        ],
      },
    ],
  },
  {
    slug: "interview-talking-points",
    title: "Interview Talking Points That Do Not Sound Rehearsed",
    excerpt:
      "Talking points keep an interview on track without turning you into a script. Here is how to prepare answers that still sound like a person talking.",
    date: "2031-08-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "Talking points are the three or four ideas you want to land in an interview, not a script you read back. They keep you on track when a question tries to pull you somewhere else.",
          "The goal is to sound prepared and human at the same time. A memorized answer sounds memorized, and reporters notice within the first exchange.",
        ],
      },
      {
        heading: "Write the message, not the sentence",
        paragraphs: [
          "For each point, write the idea in a few plain words, then practice saying it three different ways. That way the words stay fresh and the meaning stays fixed.",
          "Keep the message short enough to remember under pressure. A point you cannot recall without notes is not a point you will land.",
        ],
        bullets: [
          "Your main message in one plain sentence.",
          "Two supporting facts you can repeat without checking notes.",
          "One story that shows the message instead of stating it.",
          "One topic you will not discuss, with a polite way to say so.",
        ],
      },
      {
        heading: "Answer the question that was asked",
        paragraphs: [
          "Politicians dodge, and audiences hate it. Answer the actual question in one sentence, then connect it to your message if you can.",
          "If the question has no honest answer, say the question is fair and explain why you cannot answer it yet. That beats a smooth dodge every time.",
          "Bridging is fine when it is honest. Answer, then add the context the question left out, and stop before you sound like a recording.",
        ],
      },
      {
        quote:
          "A talking point is a destination, not a route. How you get there should change with every question.",
      },
      {
        heading: "Practice out loud, not in your head",
        paragraphs: [
          "Reading notes silently hides the places where you stumble. Say the answers out loud, record yourself, and cut anything that sounds like a brochure.",
          "Practicing out loud also makes silence less scary. Pausing to think reads as honest, while filling every gap with filler words reads as nervous.",
          "Time your answers. If a practice answer runs past forty seconds, trim it until the core lands in the first two.",
        ],
      },
      {
        heading: "Know your exits",
        paragraphs: [
          "Decide in advance which questions you will not answer and how you will redirect. A calm 'I am not the right person for that, but here is what I can tell you' works better than a hard no.",
          "Also agree with your team what counts as on the record. Assumptions about background cause more damage than any bad answer you might give.",
          "Never say 'no comment' if you can avoid it. It reads as guilt to an audience, and there is almost always something true you can offer instead.",
        ],
      },
      {
        heading: "After the interview",
        paragraphs: [
          "Send a short thank you note with any facts you promised. Reporters remember who followed through.",
          "Read the piece when it runs and note what got cut. The missing parts often show what the reporter thought was weakest.",
          "If something is factually wrong, ask for a correction once and stay calm. Most reporters fix honest errors without a fight.",
        ],
      },
      {
        heading: "Face the hard question first",
        paragraphs: [
          "Write down the one question you fear most, then answer it out loud until it stops stinging. The fear shrinks once you have said it.",
          "If the reporter asks it, do not flinch or rush. Slow down, answer in one plain sentence, and move to your point.",
          "A calm response to the hardest question does more for your credibility than any polished answer to an easy one.",
          "Rehearse with someone who will press you, not someone who will nod along.",
          "The people who practice the hard question are the ones who stay calm when it finally arrives.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Talking points are a few ideas to land, not a script to recite.",
          "Answer the actual question first, then connect it to your message.",
          "Practice out loud so the answers stay fresh and the pauses feel natural.",
          "Decide your hard lines and your redirects before the interview starts.",
        ],
      },
    ],
  },
  {
    slug: "tracking-media-coverage",
    title: "Tracking Media Coverage That Actually Matters",
    excerpt:
      "Tracking media coverage is about learning, not applause. Here is how to measure what coverage changes and ignore the numbers that only look good.",
    date: "2031-08-25",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "Tracking media coverage is the habit of recording where your story ran and what it did. Vanity counts of mentions feel good and teach you almost nothing.",
          "The useful question is not how many pieces ran. It is which pieces moved a customer or a partner to act.",
        ],
      },
      {
        heading: "Log the piece, not the echo",
        paragraphs: [
          "Save the original article, the outlet, the reporter, and the date. Then note whether they came to you or you pitched them, since the two teach different lessons.",
          "Skip the syndicated copies and the aggregator reposts. One original piece is worth more than a hundred pages that scraped it.",
          "Note the reporter's name even when the piece is small. The same person may write the bigger story in a year.",
        ],
      },
      {
        heading: "Connect coverage to outcomes",
        paragraphs: [
          "Ask new customers where they heard about you, and add a simple source field to signup if you can. Coverage that drives no action is a hobby, not a result.",
          "The same logic applies to investors and partners. Ask them where they first heard about you, and write the answer down.",
        ],
        bullets: [
          "A running log of outlets, reporters, and dates in one sheet.",
          "A note on whether the coverage was pitched or earned.",
          "A signup field that tracks where new users first heard about you.",
          "A short review each quarter of which stories actually drove action.",
        ],
      },
      {
        quote:
          "Mentions are the weather. What you want to know is whether the weather changed anyone's plans.",
      },
      {
        heading: "Read the coverage for signals",
        paragraphs: [
          "Reporters rarely tell you what they think directly, but their choices do. The angle they picked and the person they quoted show how the market sees you.",
          "Look for the questions they asked but did not print. Those gaps often point to the next story you should tell.",
          "A spike in traffic after a piece tells you the audience cared. A flat line tells you the outlet reached the wrong people, no matter how prestigious it looked.",
        ],
      },
      {
        heading: "Report it honestly to your team",
        paragraphs: [
          "Send a plain summary to your team, including the pieces that were mixed or critical. A coverage report that only lists wins teaches nobody anything.",
          "Over time, an honest log shows which outlets are worth your outreach and which were never going to run your story.",
          "Celebrate the wins, but spend more time on the pieces that fell flat. They are where the useful lessons live.",
        ],
      },
      {
        heading: "Review it every quarter",
        paragraphs: [
          "Once a quarter, read the whole log and ask which outlets and angles actually worked.",
          "Cut the ones that never produced anything and double down on the reporters who cover you well.",
          "Set one or two outreach goals for the next quarter based on what the log taught you, then start again.",
        ],
      },
      {
        heading: "Close the loop with the reporter",
        paragraphs: [
          "After a piece runs, send the reporter a short note. Thank them, add any correction gently, and offer to help on the next one.",
          "Tell them when the coverage brought a customer or a useful conversation. Reporters rarely hear what their work did, and they remember the people who tell them.",
          "This small habit turns a single mention into a relationship you can call on later.",
          "If the piece performed well, share the traffic or the response with them. It gives the reporter evidence for their next pitch and keeps your name warm.",
          "A year of small follow ups builds a list of reporters who answer your emails first, and that is the real return on the work.",
          "That list is the asset you keep when the campaign budget runs out.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Track original pieces and their outcomes, not the total number of mentions.",
          "Record whether coverage was pitched or earned, since each teaches a different lesson.",
          "Connect coverage to signups and sales to see if it actually mattered.",
          "Share honest reports, including critical coverage, so the team learns.",
        ],
      },
    ],
  },
  {
    slug: "when-pr-is-worth-it",
    title: "When PR Is Worth the Money and When It Is Not",
    excerpt:
      "PR is worth it when a story can travel on its own and reach the people who buy. Here is how to judge the spend before you sign the retainer.",
    date: "2031-08-28",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["press", "pr", "marketing"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "PR is worth the money when there is a story that can travel on its own and reach people who might buy. It is a waste when you are paying someone to manufacture news that does not exist.",
          "The retainer is easy to sign and hard to justify later, so decide what a win looks like before the first invoice arrives.",
        ],
      },
      {
        heading: "The cases where PR pays",
        paragraphs: [
          "Fundraising, launches, category creation, and reputation repair are the moments where press still moves the needle. Each one gives a reporter a reason to write that has nothing to do with you liking the coverage.",
          "In each case, the coverage is a means to something else. The story exists to help you raise or sell, not to fill a press page.",
        ],
        bullets: [
          "A funding round that investors and customers will both notice.",
          "A launch with a genuine change a reporter can explain to readers.",
          "A category you are trying to name before a competitor does.",
          "A reputation problem that needs a credible third party to address.",
        ],
      },
      {
        heading: "The cases where it does not",
        paragraphs: [
          "Paying a firm to pitch a product nobody wants is expensive silence. If the story is only interesting to your own team, no publicist can fix that.",
          "Small lifestyle coverage and award programs rarely pay for themselves. Buy them because you want them, not because you expect a return.",
          "Ask what you would do with the retainer if you kept it. If the honest answer is something more useful, keep it.",
        ],
      },
      {
        quote:
          "A publicist can amplify a story that exists. Nobody can amplify a story that does not.",
      },
      {
        heading: "Price the work, not the promises",
        paragraphs: [
          "Be wary of anyone guaranteeing placements, since credible outlets do not take orders. Pay for strategy and relationships, then judge the results over months rather than days.",
          "Ask for a clear scope, a named team, and examples of reporters they have actually placed. Vague promises of big coverage are a warning sign worth taking seriously.",
          "Get the fee structure in writing and understand what is billed. Hourly confusion is how small budgets disappear.",
        ],
      },
      {
        heading: "Do it in house when you can",
        paragraphs: [
          "Early on, founders often pitch better than agencies because they know the story cold and can answer a reporter in seconds. Use a firm when you need reach and relationships you do not have.",
          "Blend the two when budgets allow. Keep the founder pitching the core story while a small team handles the logistics and the follow up.",
          "The founder pitch has one advantage no agency can copy. You care about the answer, and reporters can feel that in a line of email.",
        ],
      },
      {
        heading: "Judge it over a year",
        paragraphs: [
          "PR is a slow asset, so resist judging it week by week. One good relationship can pay off across several launches.",
          "At the end of a year, compare the coverage and the cost against the deals and hires it helped create.",
          "If the math does not work, change the approach or stop. Spending on PR without a reason is just an expensive habit.",
        ],
      },
      {
        heading: "Start small before the retainer",
        paragraphs: [
          "Before you hire a firm, try one launch yourself. You will learn what a reporter needs and where your story is thin.",
          "A small paid experiment, such as a single launch or a focused month, tells you more than a year of guessing from the outside.",
          "Spend real money on PR once the story has proven it can travel. Then a firm amplifies something that already works.",
          "If the experiment fails, you have lost a month and learned what to fix. If it works, you know exactly what you are buying.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "PR earns its keep when a real story can reach the people who buy.",
          "Fundraising, launches, category work, and reputation repair are the strongest cases.",
          "Reject guaranteed placements and vague scopes from any firm.",
          "Pitch the core story yourself early, and hire help for reach and relationships.",
        ],
      },
    ],
  },
];
