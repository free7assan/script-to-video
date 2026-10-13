import {
  PenLine,
  Heart,
  Clock,
  Target,
  Rocket,
  BookOpen,
  Repeat,
  Workflow,
  Users,
  MessageSquare,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch74: BlogPost[] = [
  {
    slug: "copy-email-subject-lines",
    title: "Writing Email Subject Lines People Actually Open",
    excerpt:
      "A strong email subject line earns the open before anyone reads your message. Here is how to write subject lines that turn a glance into a click.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "headlines"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Writing a subject line gets easier once you accept that its only job is to earn the next second of attention. Promise something specific to the reader, then remove every word that does not help that promise land.",
          "Most subject lines fail because they describe the email instead of giving someone a reason to open it. Monthly update and our latest news are labels. A label tells the reader that skipping costs them nothing.",
          "The line you write also sets the tone for everything after it. A muddled subject line makes the reader expect a muddled message, and they carry that expectation down the page.",
        ],
      },
      {
        quote:
          "A subject line is a bargain. You offer a reason to open, and the reader decides whether the trade is worth two seconds of their day.",
      },
      {
        heading: "Promise beats cleverness",
        paragraphs: [
          "Cute subject lines get admired in a meeting and ignored in an inbox. The ones that pull their weight make a plain offer. A fix, a number, or a question the reader already wants answered.",
          "Specificity does the heavy lifting. Reduce your packaging costs in thirty days beats improve your business. Naming the reader's situation makes the message feel addressed to them rather than to a crowd.",
          "Cleverness still has a place, but it has to serve the promise. A joke that hides the offer forces the reader to work for the reason, and most people will not bother. Curiosity and fear both work, though they age differently. Curiosity keeps opening week after week. Fear works until it starts feeling cheap, and then it trains readers to ignore the alarm.",
        ],
      },
      {
        heading: "Length, preview text, and the first glance",
        bullets: [
          "Front-load the important nouns so they survive truncation on a phone.",
          "Keep one idea in the line. Two promises compete and neither one wins.",
          "Treat preview text as the second half of the subject, not a repeat of it.",
          "Let the sender name carry whatever trust you have not earned yet.",
          "Cut filler words that delay the point, like just, quick, and reminder.",
        ],
        paragraphs: [
          "Preview text is free space that most senders waste. If it echoes the subject line word for word, you have spent two chances to earn a click and used only one.",
          "Keep the line under sixty characters if you can. That is not a hard rule so much as a target that forces you to trim. The shorter the line, the less room there is for a wasted word.",
        ],
      },
      {
        heading: "Test without fooling yourself",
        paragraphs: [
          "Run one honest test at a time and let it finish before you act on the numbers. A line that wins on a Tuesday morning may lose on a Saturday, so compare like with like.",
          "Open rate is not the whole story. A subject line that promises drama can win the open and lose the trust, which shows up later as unsubscribes and ignored messages. Watch what happens after the click too.",
          "The goal is not a single winner. It is a clearer sense of what your readers respond to, built from a handful of clean tests over a few months.",
        ],
      },
      {
        heading: "Rules worth breaking",
        paragraphs: [
          "Every rule in this article has an exception you will only spot by reading your own results. Maybe your audience opens on curiosity alone, or maybe your product is the drama. Those exceptions are earned, not assumed.",
          "The test is whether the line sounds like you without sounding like everyone else. If your subject line could sit on top of a dozen other newsletters, it has not earned its place in yours.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Give the reader a specific reason to open instead of describing the email.",
          "Write for the first glance on a small screen and front-load the nouns.",
          "Use preview text to add something the subject line did not already say.",
          "Test one variable at a time and judge it on more than the open rate.",
        ],
      },
    ],
  },
  {
    slug: "copy-welcome-email-sequence",
    title: "Welcome Emails That Set the Tone for Everything",
    excerpt:
      "A welcome email confirms the choice your subscriber just made. Learn to write the welcome email sequence that turns a fresh signup into a habit.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "A welcome email should do one job. Confirm the decision your subscriber just made and tell them what happens next. Bury that under a brand history and you lose the warmest attention you will ever get from them.",
          "The signup is a small act of trust. Someone handed you an address and expected something in return. The first message decides whether that trust grows or quietly fades.",
          "Start with what the reader feels at the exact moment of signing up. Curiosity, relief, or a small hope that this time the emails will be worth it. Match that feeling in the first line and they stay long enough to hear your offer.",
        ],
      },
      {
        quote:
          "The welcome email is the only message your reader opens because they wanted to hear from you. Treat it like the one chance it is.",
      },
      {
        heading: "The first hour matters most",
        paragraphs: [
          "Send the first welcome message while the reason for signing up is still fresh. Delay it a day and the reader has moved on to something else and forgotten why they cared.",
          "Keep that first note short. One idea, one link, one clear action. A reader who just joined does not need your entire catalog. They need a reason to come back.",
          "Plan the whole flow as a conversation. The first message asks a question the second one answers, and the third one builds on that answer. Each note should feel like a step forward, never a restatement.",
        ],
      },
      {
        heading: "Write like a person, not a brochure",
        paragraphs: [
          "The welcome sequence is where a lot of brands start sounding like a press release. Awards, mission statements, and a wall of features show up before anything useful does. None of it answers the question the reader is actually holding.",
          "Say what they get and why it helps. If your product saves time, say how much and in what situation. A concrete promise reads as honest. A grand one reads as someone else's marketing.",
          "Short sentences help here. A welcome sequence gets read on a phone, often one handed and between other tasks, and long winding paragraphs get abandoned halfway through. Make every line do work.",
        ],
      },
      {
        heading: "What a good sequence covers",
        bullets: [
          "Message one: deliver whatever you promised, plus one quick win.",
          "Message two: show how to get going without reading a manual.",
          "Message three: prove the value with a short story or example.",
          "Message four: make the next step obvious and low effort.",
          "Later messages: keep teaching, and stop counting the sends out loud.",
        ],
        paragraphs: [
          "Keep the pace gentle. Four to six messages across two weeks is usually enough to shape a habit without becoming noise.",
          "The sequence is not a countdown to the big reveal. It is the beginning of a habit, so each message should leave the reader slightly more curious than it found them.",
        ],
      },
      {
        heading: "End on an action, and an opening",
        paragraphs: [
          "Every welcome message should finish on one obvious next step. Read the guide, pick a template, or reply with a question. A concrete action beats a vague invitation to explore.",
          "Give them a personal way out as well. A line that invites a reply turns the sequence back into a conversation, which is how most good email relationships actually start.",
          "Once the sequence ends, what makes it good is that it feels finished rather than abandoned. A closing note that thanks the reader and sets the cadence for what arrives next turns the last send into a calm handoff instead of a dead end.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Spend the welcome on one promise and one clear next step.",
          "Send the first message while the signup reason is still fresh.",
          "Replace brand biography with the specifics your reader came for.",
          "Let the sequence teach in small pieces rather than one long dump.",
          "Close each message with an action and a standing invitation to reply.",
        ],
      },
    ],
  },
  {
    slug: "copy-cart-abandonment-emails",
    title: "Cart Abandonment Emails That Do Not Feel Pushy",
    excerpt:
      "A cart abandonment email buys back a decision the shopper already wanted to make. Use copy that removes hesitation without applying pressure.",
    date: "2024-08-27",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "A cart abandonment email buys back a decision the shopper already wanted to make. They put something in the cart on purpose. Something small stood between them and checkout, and your copy can address that without pushing.",
          "The tone of the first send matters more than the discount inside it. A message that sounds like a helpful nudge keeps goodwill. One that sounds like a store clerk chasing someone down the street does not.",
          "Remember that the email is not the sale. The sale already happened inside their head when they added the item. What you are writing now is reassurance.",
        ],
      },
      {
        quote:
          "The shopper does not need convincing that they wanted the item. They need one barrier removed and an easy way back.",
      },
      {
        heading: "Lead with the unfinished thing",
        paragraphs: [
          "Show the item and a plain sentence about why it is worth coming back for. Remind them of the specific thing they were considering, not a generic call to finish your order.",
          "Put the product name or image first so the reader does not have to scroll to remember what they wanted. Then add the single sentence that makes the item feel worth revisiting.",
          "If the product has a detail that helps the decision, put it here. Reviews, sizing, shipping speed, or a return policy can settle the exact doubt that stalled the cart in the first place.",
          "A sentence about the shopper rather than the product changes the feel entirely. You had your eye on this, phrased softly, puts the person back inside the email. It is a small shift, and it reads like service instead of a sale.",
        ],
      },
      {
        heading: "Answer the quiet objections",
        paragraphs: [
          "Most abandoned carts come down to a handful of real questions. Will it arrive in time. Can I return it. Is this the right size. Does the price still hold. Write one line for whichever objection fits your store.",
          "If price is the barrier, do not hide your answer. Plainly restate shipping costs or taxes so the total stops feeling like a surprise. Most shoppers would rather see the number than chase it.",
          "Do not invent urgency you cannot back up. A countdown that resets every visit teaches shoppers to ignore your timers. A real deadline, clearly stated, is a different thing entirely.",
        ],
      },
      {
        heading: "How the sends should be spaced",
        bullets: [
          "First send: a short reminder within a few hours, no discount.",
          "Second send: address a likely objection and offer help.",
          "Third send: a real incentive with a firm end date, if you use one.",
          "Stop after that. More messages do not create more intent.",
        ],
        paragraphs: [
          "Resist the urge to stack on a bigger discount before the third send. It trains shoppers to wait, and the wait becomes a habit you have to keep feeding.",
          "A shopper who ignores all three sends made a choice. Respect it and let the cart go instead of following them around the inbox.",
        ],
      },
      {
        heading: "A discount can feel like a gift",
        paragraphs: [
          "When you do offer an incentive, tie it to the thing they wanted instead of a general percent off. A code that brings their exact item down to a specific price reads as a favor. Ten percent off the whole store reads as a bribe.",
          "Frame the offer as a return, not a rescue. You are helping them get the item they already chose, not tempting them into a purchase.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Remind shoppers of the specific item instead of scolding them to check out.",
          "Use the copy to remove one real obstacle, not to add pressure.",
          "Save any incentive for later sends and keep the deadline honest.",
          "Set a hard limit on how many times you will follow up.",
          "Tie any discount to the exact item they wanted.",
        ],
      },
    ],
  },
  {
    slug: "copy-cold-email-outreach",
    title: "Writing Cold Email Copy That Gets a Real Reply",
    excerpt:
      "Cold email copy works when it reads like one person writing to another about something specific. Learn how relevance and a small ask earn a real reply.",
    date: "2024-12-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A cold email works when it reads like one person writing to another about something specific. The reply comes from relevance, not from a clever opener or a paragraph of praise.",
          "Recipients can spot a template in about a second. The moment the message feels copied and pasted, the reader stops reading it as a request and starts reading it as noise.",
          "A cold email is a gamble with someone else's attention. The best way to respect that is to make the message worth the ten seconds it takes to read, and no longer.",
        ],
      },
      {
        quote:
          "Praise that could be sent to anyone tells the reader you did not look. Detail that applies only to them tells them you did.",
      },
      {
        heading: "Earn the first sentence",
        paragraphs: [
          "Open with something true about the person or their work that shows you paid attention. A recent launch, a role change, or a public decision works because it could not be pasted into someone else's email.",
          "Avoid the fake compliment that leads nowhere. I love what you are doing is empty. The sentence that follows it should connect that point to why you are writing, or it should not be there.",
          "One specific observation beats a general trend every time. Mention something you could only know by looking at their work, and the reader assumes the rest of the message carries the same care.",
        ],
      },
      {
        heading: "Make the ask small and clear",
        paragraphs: [
          "Big asks get ignored because they are expensive to answer. Would you like to buy is a heavy request from a stranger. Would a short call next week be useful is lighter, and it gives the reader an easy yes or no.",
          "Say what you do in plain words, then explain who you help and how. Skip the jargon that only makes sense inside your own company. The reader is deciding whether to spend time, not whether to admire your vocabulary.",
          "If you can, show proof early. A sentence that names a result you produced for someone similar does more than a promise that you could. Claims are cheap; examples are not.",
          "Leave out anything you cannot support in the first ten seconds. The moment a reader has to wonder whether your example is real, you lose the thread your opening spent whole sentences building.",
        ],
      },
      {
        heading: "Follow up without nagging",
        bullets: [
          "Wait a few days, then add one new piece of information.",
          "Keep each follow-up shorter than the last one.",
          "Give the reader a clean way to say not interested.",
          "Stop after two or three tries and close the loop politely.",
        ],
        paragraphs: [
          "A follow-up that repeats the same request with more words looks desperate. One that offers a fresh reason reads like a person who has something worth considering.",
          "The best follow-ups assume interest is still possible, not that the first email was ignored. That small shift in tone changes how the reader hears it.",
        ],
      },
      {
        heading: "When the reply says no",
        paragraphs: [
          "A polite thanks but not now is a small win. It closes the thread cleanly and leaves the door open for next quarter. A reply at all means your message landed like it was written by a person.",
          "Keep the response to a single line. Do not argue the case again or ask why. A short, warm sign off leaves a better impression than a five paragraph counterpoint.",
          "You can check in again a week or two later like a normal person. One line, no agenda, and you read as someone who handles rejection well, which is a better reputation than any pitch builds.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open with a specific detail that could not be sent to anyone else.",
          "Ask for something small enough that yes costs almost nothing.",
          "Write the offer in plain words instead of internal jargon.",
          "Add something new with each follow-up, then stop cleanly.",
          "Treat a polite no as a good outcome and leave quietly.",
        ],
      },
    ],
  },
  {
    slug: "copy-email-cta-buttons",
    title: "Email CTA Copy That Tells Readers What Happens Next",
    excerpt:
      "A strong email call to action names the outcome, not the mechanics. Learn how to write email CTA copy that readers click without a second thought.",
    date: "2025-03-22",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["cta", "copywriting"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Rocket,
    content: [
      {
        paragraphs: [
          "A strong email call to action names the outcome, not the mechanics. Submit, click here, and learn more describe what the reader has to do, which is the opposite of what makes them do it.",
          "The reader is asking one silent question. What do I get if I tap this. Answer that in the button and the words around it, and the click stops feeling like a risk.",
          "The call to action is where an email either pays for itself or goes quiet. Everything you wrote before it is really just working to make this small moment feel safe.",
        ],
      },
      {
        quote:
          "Tell the reader what happens after the click, and the click becomes the obvious next move instead of a leap of faith.",
      },
      {
        heading: "Verb plus outcome",
        paragraphs: [
          "Start with a verb the reader performs and finish with the result. Get the checklist, start the free trial, reserve your seat. Each one promises something concrete on the other side.",
          "Keep the phrase in the first person when it fits. Start my trial pulls the reader into the action more than start your trial does, because it sounds like their own thought.",
          "Cut the verbs nobody wants to do. Subscribe, submit, and go forward describe effort, not benefit. Nobody wakes up hoping to submit.",
          "Reserve exclamation marks for genuine exceptions. On a button, a single exclamation works once a year, not once a week.",
        ],
      },
      {
        heading: "One primary action per email",
        paragraphs: [
          "Every email needs a single main action. When three buttons compete for the same attention, the reader hesitates and often chooses nothing. Pick the one thing you want and make it the loudest option on the page.",
          "Secondary links can exist, but they should look and read like secondary. If the unsubscribe link is as bold as the buy button, you have built a fork in the road that wastes the reader's time.",
          "This holds for every send, including ones that are mostly informational. A newsletter that is really building toward a link should still point at that link once, clearly.",
          "The button label and the subject line are the two most read parts of any email. Give both the same care, because the subject line decides the open and the button decides the click.",
        ],
      },
      {
        heading: "Buttons, links, and the words around them",
        bullets: [
          "Place the button after the reason it exists, not before it.",
          "Write surrounding text that sets up the promise the button fulfills.",
          "Keep link text descriptive so the reader knows where it leads.",
          "Avoid stacked buttons that split attention between two goals.",
          "Repeat the same action once lower down for readers who scrolled.",
        ],
        paragraphs: [
          "The copy above the button does the persuading. The button confirms the decision. If the button has to do the arguing on its own, the message underneath it was too thin.",
          "One button, one color that stands apart from the page, and a label that names the result. That is usually enough.",
        ],
      },
      {
        heading: "What a bad button costs",
        paragraphs: [
          "Ambiguous CTA copy quietly bleeds conversions you never see. Readers who would have taken the next step hesitate, and hesitation in email usually ends with the message being closed.",
          "The fix is cheap. Show the button to someone outside your team and ask what happens when they click it. If they cannot say, neither can your readers.",
          "Run that test with a fresh reader instead of asking the team. Familiarity hides ambiguity, and your team already knows what every button means.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name the result in the button instead of the mechanics of clicking.",
          "Choose one primary action per email and let the rest stay quiet.",
          "Use the text before the button to make the promise believable.",
          "Repeat the same action further down for readers who scroll past.",
          "Test the button on an outsider to make sure it is not ambiguous.",
        ],
      },
    ],
  },
  {
    slug: "copy-newsletter-copywriting",
    title: "Newsletter Copy That People Keep Reading Weekly",
    excerpt:
      "Newsletter copy earns its place in an inbox by being worth the read every time. Here is how to write issues with a point of view people return for.",
    date: "2025-07-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "headlines"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "A newsletter earns its place in an inbox by being worth the time it takes to read, every single time. That means a clear point of view and a rhythm readers can rely on, not a pile of links with a greeting on top.",
          "The subscription is a recurring promise. Each issue either keeps that promise or spends down the goodwill you built with the last one.",
          "Think of the open as earned attention, not owed attention. The moment the reader feels the issue was written for someone else first, they start reaching for unsubscribe.",
        ],
      },
      {
        quote:
          "People do not open a newsletter to hear from a brand. They open it to hear from a voice they have decided to trust.",
      },
      {
        heading: "Give every issue a spine",
        paragraphs: [
          "An issue needs one idea it can stand on. A single lesson, argument, or story gives the reader a reason to finish and something to remember. Five loosely related items give them nothing to hold.",
          "State that idea early. If the reader has to reach paragraph four to understand what the issue is about, many will never get there.",
          "You can still include links and short asides. The trick is that they all orbit the same idea, so the reader finishes with one clear thought instead of a fog.",
          "Adjectives do not make an idea stronger. Rescue the weakest sentences by replacing enthusiasm with evidence, because a specific example convinces where a gushing descriptor only asserts.",
        ],
      },
      {
        heading: "A format readers can trust",
        paragraphs: [
          "Consistency does more good than novelty. A stable format lets readers know where to find the thing they came for, whether that is a short essay, a tip, or a roundup.",
          "Keep a section order and a rough length. Readers who know what to expect open more often, because the decision costs them less each week.",
          "A little repetition in the opening and closing lines builds a home feel. That sounds small, but habit is built from the details that stay the same.",
          "The format is not the enemy of your voice. It holds the voice steady while the topics change, the way a good column keeps a byline recognizable.",
        ],
      },
      {
        heading: "Writing links and blurbs that respect attention",
        bullets: [
          "Write a short line for why each link matters before you add it.",
          "Skip items you cannot say anything useful about.",
          "Keep blurbs to a sentence or two so curiosity does the rest.",
          "Put the most valuable item where readers reliably look first.",
          "Cut the housekeeping that nobody reads past the first issue.",
        ],
        paragraphs: [
          "A roundup earns its keep when the curator's judgment shows. If you would not send a link to a friend with a reason attached, leave it out of the issue.",
          "Links do the showing, but only the ones you have actually read and reacted to. A link you copied from a feed reads exactly like that.",
        ],
      },
      {
        heading: "Endings that pull the next open",
        paragraphs: [
          "The last lines of an issue do the work of the next one. Close with a question readers can answer, or point at what is coming so the anticipation has somewhere to live.",
          "A sign that looks like a person is worth a hundred about the author sections. Readers return for a conversation, not a biography.",
          "Drop a small promise for next week, even the rough shape of a topic. It gives readers something to hold between issues, and delivering on it compounds the trust.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build each issue around one idea the reader can carry away.",
          "Keep a stable format so opening the newsletter feels predictable.",
          "Add a reason to every link instead of dumping a bare list.",
          "Write everything as a voice a reader could recognize without a logo.",
          "Use the ending to set up the next issue and keep the loop alive.",
        ],
      },
    ],
  },
  {
    slug: "copy-re-engagement-emails",
    title: "Win-Back Emails That Bring Quiet Readers Back",
    excerpt:
      "A win-back email should give a dormant reader a fresh reason to care, not a guilt trip. Re-engagement copy like this is what revives a cold interest.",
    date: "2025-10-18",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "A win-back email should give a dormant reader a reason to care again, not a guilt trip about leaving. If your best argument is that they have not opened in a while, you do not have one yet.",
          "Silence usually means something changed, not that the reader stopped liking you. Maybe their situation shifted, or your messages stopped matching what they came for. The win-back is your chance to find out which.",
          "Approach the reader like an old acquaintance, not a lost account. The difference shows up in every sentence you choose.",
        ],
      },
      {
        quote:
          "Readers do not owe you their attention. Win it back with something new, or let them go without a fight.",
      },
      {
        heading: "Name the reason, not the absence",
        paragraphs: [
          "Lead with a change worth noticing. A new feature, a better format, or a shift in what you cover gives the reader something to respond to. We miss you does not.",
          "If you can be honest about what changed on your side, say it. Readers forgive a gap more easily when you give them a concrete reason to come back rather than a vague plea.",
          "A single example of your best recent work beats any amount of describing it. Show them the new thing so they can judge it with their own eyes.",
          "Keep the whole message short enough to read in a single glance. A dormant reader asked to resurface does not want to climb a wall of text to do it.",
        ],
      },
      {
        heading: "Lower the cost of coming back",
        paragraphs: [
          "Make the return easy and small. One click to a short summary, a single useful idea, or a simple preference update asks less than a full re-onboarding.",
          "Preference centers help here. Letting readers choose what they receive turns a vague re-subscribe into a specific, low effort decision about their own inbox.",
          "The smaller the first step, the more likely the reader takes it. One link and one click is a request. A survey with ten questions is a second job.",
        ],
      },
      {
        heading: "Offer a reason and a clean exit",
        bullets: [
          "Tell the reader what is different since they last engaged.",
          "Ask for one small action instead of a full return to old habits.",
          "Let them choose the topics they want to get.",
          "Give an obvious way to leave if they have truly moved on.",
        ],
        paragraphs: [
          "An honest goodbye button is not a failure. It protects your sender reputation and it respects the reader who has decided your messages are no longer for them.",
          "Readers treat a confidence-inspiring unsubscribe as a sign of a confident sender. The ones that hide the link earn suspicion at the moment they need the opposite.",
          "Choose the subject line like the whole campaign depends on it, because it does. The same reader who ignored a dozen messages will judge this one by its first three words.",
        ],
      },
      {
        heading: "When to let a reader go",
        paragraphs: [
          "After a couple of well made attempts, stop. Continuing to email someone who never opens does nothing for them and slowly teaches inbox providers to distrust your mail. A trimmed list that still reads is worth more than a big one that gets buried.",
          "Emailing a quiet list forever is doing it out of fear. Let the list shrink and the numbers you do see will mean something again.",
          "Judge the campaign by its best outcome, which is often the reader who unsubscribes cleanly instead of marking you as spam.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Win readers back with something new, not with guilt about leaving.",
          "Make the return action small and specific rather than a full reset.",
          "Let readers pick their own topics through a preference center.",
          "Stop after a fair attempt and let the goodbye be clean.",
          "Judge the campaign by what happens on the list you keep, not the one you trim.",
        ],
      },
    ],
  },
  {
    slug: "copy-onboarding-email-drip",
    title: "Onboarding Email Drips That Teach One Thing at a Time",
    excerpt:
      "Onboarding email copy works best when each message teaches a single action. Learn how a drip turns new users into people who understand the product.",
    date: "2026-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Onboarding emails work best when each message teaches a single action and then gets out of the way. A drip that tries to explain everything at once produces readers who understand nothing and quit early.",
          "A new user is not short on enthusiasm. They are short on clarity. Your job is to turn that first burst of interest into a habit before it fades.",
          "The drip is not a series of announcements. It is a curriculum, and each email is one lesson with a single step to practice.",
        ],
      },
      {
        quote:
          "The measure of an onboarding email is not what it says. It is what the reader can do afterward that they could not do before.",
      },
      {
        heading: "One action per message",
        paragraphs: [
          "Every onboarding email should point at one action the reader can finish in a few minutes. Set up your first project. Connect your account. Invite one teammate. Each message removes exactly one obstacle.",
          "When you ask for two things, you double the chance the reader does neither. The next message can carry the second task once the first one is done.",
          "One action also gives you an easy way to measure success. Did people complete the step? If not, the message or its timing is the problem.",
        ],
      },
      {
        heading: "Sequence the teachable moments",
        paragraphs: [
          "Order matters more than you might think. Teach the step that makes the product feel useful before you teach the settings that make it feel complete. A user who sees value early will stick around to configure things later.",
          "Match each email to where the reader likely is. A message about advanced reports makes no sense to someone who has not created a single record yet. Meet them where their hands already are.",
          "Watch where your own new users stall and reorder around it. The best sequence is not the one designed in advance. It is the one revised after watching a few dozen people try.",
        ],
      },
      {
        heading: "What each message should carry",
        bullets: [
          "One clear action stated in the subject line and the body.",
          "A short reason why that action is worth a few minutes.",
          "A single link that goes straight to the right screen.",
          "A sentence that confirms what happens once they finish.",
          "No optional extras competing with the main step.",
        ],
        paragraphs: [
          "Keep the language plain. A new user does not know your internal names for things yet, so use the words a beginner would recognize instead of the ones your team uses in meetings.",
          "A screenshot of the exact screen they will land on removes a lot of hesitation. Most first steps are lost because people fear the wrong button, not because they lack motivation.",
          "Read every message as if you are the user, not the product manager. The distance between those two readings is where most onboarding copy goes wrong.",
        ],
      },
      {
        heading: "Measuring whether anyone learned",
        paragraphs: [
          "Open rates tell you little about onboarding. Watch whether people complete the action each email describes. If a step is being skipped, the copy or the timing is the problem, not the reader.",
          "Use what you find to reorder the drip. A message people finish is doing its job. One that consistently stalls is asking for too much, too early, or in the wrong words.",
          "Track which users make it to the product's version of a first win. That single moment predicts retention better than most other metrics you can watch.",
          "Watch the reply line too. Onboarding is one of the few places where asking people to write back is neither cheap nor strange.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Ask for one action per email and leave the second task for later.",
          "Teach the step that makes the product feel useful first.",
          "Match every message to where the reader likely is right now.",
          "Measure completed actions instead of open rates.",
          "Use a screenshot to lower the fear of the wrong button.",
        ],
      },
    ],
  },
  {
    slug: "copy-email-personalization-tokens",
    title: "Personalized Email Copy Without the Creepy Feel",
    excerpt:
      "Personalized email copy helps when it uses details readers expect you to have. Learn which signals build trust and which ones make people uneasy.",
    date: "2026-05-16",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "headlines"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Personalization helps when it uses information the reader expects you to have, and it hurts when it uses information they did not hand over. A first name and a past purchase are fine. A reference to their browsing history can feel like being watched.",
          "The line is not about how much you know. It is about whether the reader can predict how you learned it. Predictable personalization builds trust. Surprising personalization breaks it.",
          "The goal is to sound like a person with good memory, not like software running on everyone's data at once.",
        ],
      },
      {
        quote:
          "Good personalization feels like being remembered. Bad personalization feels like being tracked. The reader can tell the difference in an instant.",
      },
      {
        heading: "The signals readers accept",
        paragraphs: [
          "Readers expect you to know the details they gave you. Their name, the plan they bought, the last thing they ordered, the city they shipped to. Using those well reads as attentive service.",
          "The trouble starts with data that feels collected rather than shared. Location pulled from a device, pages they only looked at, or third party lists cross the line from helpful into unsettling.",
          "Context decides what feels ok. A shipping address used to check inventory is welcome. The same address used to remarket a nearby store can feel like surveillance.",
          "Personalization that saves the reader time is always welcome. Recommendations, reminders, and renewals do real chores. Copy that exists only to prove you remember something is just showing off.",
        ],
      },
      {
        heading: "Dynamic copy that still reads clean",
        paragraphs: [
          "A merge tag that arrives empty ruins the illusion fast. Dear , with a blank where the name should be, tells the reader they are part of a mass send and that you did not check.",
          "Build fallbacks that read as natural sentences when a field is missing. A default greeting that sounds like something a person would write keeps the message intact even when the data is not there.",
          "Test the flow with bad data on purpose. Send yourself the ugly versions first, the ones missing names and products, so you know they never reach a real list looking broken.",
          "Keep the design flexible around the longest values a field can hold. A long company name can break a layout you never tested.",
        ],
      },
      {
        heading: "Signals, swaps, and the rules around them",
        bullets: [
          "Use details the reader knowingly shared with you.",
          "Set a fallback for every merge field so blank data never shows.",
          "Keep personalization inside the sentence, not bolted to the front.",
          "Avoid referencing actions the reader has no idea you were watching.",
          "Let readers edit or remove the details you hold about them.",
        ],
        paragraphs: [
          "A little goes a long way. One well placed detail often lands harder than five tags crammed into a single line, because it feels like attention rather than automation.",
        ],
      },
      {
        heading: "Test for surprise, not just clicks",
        paragraphs: [
          "A personalized line can lift clicks and still damage trust. Check for the reactions that show up later, like unsubscribes, spam complaints, and replies that ask how you knew something. A small click bump is not worth a lasting unease.",
          "Use that test to set your own boundaries before a new data source is added to the stack. If you would be startled to receive the same line yourself, that is the answer.",
          "Keep a running list of what felt fine and what felt off, then check new ideas against it before they get coded into templates.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Personalize with details the reader knowingly gave you.",
          "Always set a clean fallback so blanks never reach the inbox.",
          "Keep the detail inside the sentence instead of tacked on top.",
          "Watch for surprise and unsubscribes, not only for click gains.",
          "Send yourself the broken versions before anything goes live.",
        ],
      },
    ],
  },
  {
    slug: "copy-sales-email-follow-up",
    title: "Sales Follow-Up Emails That Do Not Read as Begging",
    excerpt:
      "A sales follow-up email earns a reply when it adds something new and gives the reader an easy out. Learn the approach that keeps deals alive.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["copywriting", "cta"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "A follow-up email works when it adds something new, even a small thing, and gives the reader an easy way to say not now. Repeating the same ask with more urgency reads as pressure and gets ignored.",
          "Most silence after a sales email is not a no. It is a not yet, buried under a busy week. Your follow-up has to be worth pulling out of that pile, or it becomes part of the noise.",
          "Think of the thread as a conversation and yourself as the polite one keeping it alive without demanding the other person's time.",
        ],
      },
      {
        quote:
          "The strongest follow-up does not push harder. It hands the reader something they did not have the first time.",
      },
      {
        heading: "Every follow-up carries a reason",
        paragraphs: [
          "Each message should give the reader a fresh reason to reply. A relevant case study, a short answer to a likely question, or a small piece of news about the product all work because they move the conversation forward.",
          "If you cannot think of anything new to add, you probably should not send the message yet. A follow-up with nothing in it is just a reminder that you are waiting, and waiting is your problem, not theirs.",
          "Keep a running note of what you have already sent so you never repeat yourself. The reader will notice a recycled line faster than you think.",
        ],
      },
      {
        heading: "Make yes and no equally easy",
        paragraphs: [
          "Give the reader two clear paths. A simple way to move forward and a simple way to close the loop for now. When the only option is yes, people stall, because saying nothing feels safer than saying not interested.",
          "A direct line like a quick no works fine here is a relief to busy readers. It costs nothing, and it often gets a reply because it removes the discomfort of having to let you down gently.",
          "Offer a middle option sometimes. A fifteen minute call, a one line answer by email, or a calendar link for next month all give the reader a low stakes way forward.",
        ],
      },
      {
        heading: "What a good follow-up includes",
        bullets: [
          "One new piece of information the reader did not have before.",
          "A short recap of the problem so they do not have to dig.",
          "A small, specific ask that takes seconds to answer.",
          "An honest option to say no and close the thread.",
          "A plain sign off with no manufactured urgency.",
        ],
        paragraphs: [
          "Keep it short. The longer a follow-up gets, the more it looks like you have nothing to add and are filling the space with words.",
          "Write the whole thing as if the reader will read it on a phone between meetings. Half of your audience will.",
          "End with your name and nothing else. One recipient, one signature, zero signature blocks, so the reply lands on a person.",
        ],
      },
      {
        heading: "Know when to stop",
        paragraphs: [
          "After a few honest attempts spread over a reasonable stretch of time, let it rest. Endless follow-ups burn your credibility and the reader's patience at the same time. A clean close keeps the door open for the day their situation actually changes.",
          "Some teams set the number of touches in advance for exactly this reason. Deciding before you start makes it easier to keep the promise after three quiet replies.",
          "Archive the thread instead of deleting it. A contact who says not now may surface again next quarter, and the history is the fastest way back in.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Add something useful to every follow-up instead of repeating the ask.",
          "Offer a clear yes and an equally clear no so stalling is not the default.",
          "Keep each message short and specific about the next step.",
          "Stop after a fair run and leave the door open politely.",
          "Track what you have already sent so no message repeats itself.",
        ],
      },
    ],
  },
];