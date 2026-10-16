import { Activity, BarChart3, BookOpen, Briefcase, Heart, Puzzle, Search, TrendingUp, Users, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch21: BlogPost[] = [
  {
    slug: "story2-striking-statistics-video-essay-openers",
    title: "Open Video Essays With a Single Striking Statistic",
    excerpt: "A striking statistic can open a video essay in seconds. Here is how to find exactly the right number and frame it so viewers stay all the way to the end.",
    date: "2024-03-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        heading: "Lead with the number, then earn the story",
        paragraphs: [
          "Open with one number that would sound fake if a friend said it out loud. A video essay works best when the first line makes viewers distrust their own assumptions, and a single striking statistic does that faster than any anecdote.",
          "I keep a running note called numbers that stopped me. Every time a statistic makes me pause, I paste it next to the source that produced it. When I sit down to script, I scan that note first, because the strongest opener is usually a number I already reacted to, not one I found while hunting for an opener.",
          "The number does not need to be huge. It needs to be specific. Seven percent is forgettable. Seven percent of nurses working double shifts is a scene.",
        ],
      },
      {
        heading: "Test the stat before you build around it",
        paragraphs: [
          "Not every surprising figure can carry eight minutes of video. I run each candidate through three checks: can I explain it in one sentence, does it touch a debate viewers already have, and can I show a trend line instead of a lone dot?",
          "If it fails the third check, it belongs in the middle of the script, not the open. A flat number starts an argument. A moving line starts a story, because viewers can see where it came from and guess where it goes.",
        ],
      },
      {
        quote: "A number at the start is not proof. It is a promise that the next eight minutes will explain something that felt impossible.",
      },
      {
        heading: "Where data-driven openers fall apart",
        paragraphs: [
          "The common mistake is stacking four statistics in the first minute to look rigorous. That reads like a spreadsheet, not a story, and retention drops right when the viewer should be leaning in.",
          "Pick one number. Sit with it. Let the supporting data arrive later as evidence, so each new figure feels like a reward instead of homework.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep a running note of statistics that made you stop and react. Those are your best candidates.",
          "A strong opener number fits in one sentence and touches something the audience already argues about.",
          "Prefer trend lines over single data points. Movement gives viewers a path to follow.",
          "Name the source in the first 30 seconds. Credibility is part of the hook.",
          "Save secondary figures for the body so each one lands as evidence, not filler.",
        ],
      },
      {
        heading: "Build the payoff before you record",
        paragraphs: [
          "Write the ending before you write the opener. If the final minute resolves the tension that the first statistic created, the whole script tightens.",
          "In GoScript I drop the opener stat into the hook field and keep the supporting figures in the research section. The channel analyzer flags when a claim in the intro has no later payoff, which catches the exact leak most data essays share.",
        ],
      },
    ],
  },
  {
    slug: "story2-research-methodology-video-essays",
    title: "Make Your Research Methodology Part of the Story",
    excerpt: "Your research methodology can be dull, or it can be the twist your video needs. Here is how to turn sample size, method, and limits into real narrative beats.",
    date: "2024-07-08",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["narrative", "structure"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        heading: "Method is a scene, not a footnote",
        paragraphs: [
          "Yes, you can make methodology interesting, but only if you treat it as a scene instead of a footnote. Viewers do not care that you ran a regression. They care whether your method could have produced the wrong answer.",
          "So I show the method the way a detective shows their work. Here is the question. Here is the sample. Then the one thing that nearly broke the whole analysis. That third beat is the scene.",
          "A study of 1,200 remote workers is not compelling on its own. A study of 1,200 remote workers where 300 dropped out because the survey was too long is a story about who survives long surveys.",
        ],
      },
      {
        heading: "Turn sample size into stakes",
        paragraphs: [
          "Sample size stops being a number when you explain who got left out. Twenty students in one seminar tells the audience the finding is a hunch. Twenty thousand responses across six countries tells them you can make a claim.",
          "I put the sample on screen and then name its blind spot in the same breath. That honesty buys more trust than a bar chart ever will, and it sets up the limits section before the viewer thinks to ask.",
        ],
      },
      {
        quote: "Method is the part of research where you show your hands. Most creators hide it. The ones who show it get believed.",
      },
      {
        heading: "Admit the limits out loud",
        paragraphs: [
          "Every dataset has a hole. If you name it before a commenter does, you keep control of the frame. If you bury it, someone in the replies will dig it up and use it against the whole video.",
          "I give limits their own 30 seconds near the end, right after the payoff. By then the audience trusts me enough to hear the caveat without throwing the finding away.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Show the question, the sample, and the near-failure as three beats of one scene.",
          "Translate sample size into stakes by naming who was excluded.",
          "State the biggest limitation yourself, before the comments do.",
          "Place limits after the payoff so trust carries the caveat.",
          "Name the tool and the date. I ran this in R in March 2025 lands better than vague claims about doing some analysis.",
        ],
      },
      {
        heading: "Sequence evidence like a plot",
        paragraphs: [
          "Order your findings by surprise, not by importance. The dull confirming result goes early so the audience has footing. The weird result goes late because that is what they will remember and share.",
          "I storyboard data blocks on sticky notes and rearrange them until the curve of interest rises. If two blocks do the same job, one of them is cut. Tight methods make tight essays.",
        ],
      },
    ],
  },
  {
    slug: "story2-survey-data-video-narrative",
    title: "How to Turn Survey Data Into a Video Narrative",
    excerpt: "Survey data becomes a story when you stop reading percentages and start reading people. How to cast one survey, chart the split, and close with a number.",
    date: "2024-11-21",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        heading: "A survey is a cast of characters",
        paragraphs: [
          "Survey data becomes a narrative the moment you stop reading percentages and start reading people. Yes, 62 percent answered one way, but that is a crowd, not a character.",
          "I split every survey into segments before I write a word. Who agreed, who refused, and who answered in a way that made no sense. Those three groups become the cast.",
          "A single open-text answer can carry a whole act. I found one line in a 4,000-response survey that said the product made them feel watched. That line anchored the entire episode.",
        ],
      },
      {
        heading: "Chart the split, then explain the split",
        paragraphs: [
          "Put the messy split first. If the audience sees a 48 to 44 divide, they lean in because nobody won. Clean 70 to 30 results feel finished, and finished data does not create tension.",
          "Then explain who sits in the smaller group. The minority is usually where the story hides, because they had a reason to disagree with the room.",
        ],
      },
      {
        quote: "Percentages describe a crowd. Quotes describe a person. A video needs both, in that order.",
      },
      {
        heading: "Ask questions that produce scenes",
        paragraphs: [
          "Bad survey questions produce numbers. Good ones produce sentences. Instead of asking whether the tool is useful, ask people to finish this sentence: the last time this failed, I was trying to blank.",
          "Open text is harder to code, and that labor is the point. The sentence you cannot categorize is often the one viewers will remember.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Segment responses into agree, refuse, and unexplainable before scripting.",
          "Lead with close splits because a near-tie creates tension.",
          "Mine open-text answers for one line that can anchor an act.",
          "Write questions that invite sentences, not yes or no taps.",
          "Code the messy answers yourself. The outliers are the story.",
        ],
      },
      {
        heading: "Close the loop with one number",
        paragraphs: [
          "End the essay by returning to the survey with a new lens. You opened with 48 percent. You close by telling the audience what that 48 percent feared, and the number now carries weight it did not have at the start.",
          "That round trip is what makes survey data feel like a narrative instead of a report. The audience leaves with a person in their head, not a pie chart.",
        ],
      },
    ],
  },
  {
    slug: "story2-counterintuitive-finding-video-structure",
    title: "Structure a Video Around a Counterintuitive Finding",
    excerpt: "A counterintuitive finding is free structure if you use it well. Open with the belief your data contradicts, delay the answer, and land the twist.",
    date: "2025-02-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "narrative"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        heading: "Start with what everyone gets wrong",
        paragraphs: [
          "A counterintuitive finding is a free structure, if you use it. Open with the belief your data contradicts, hold it up, then knock it down with the result.",
          "I write the popular belief in the audience's own words. Most people think hard work alone gets you promoted. Then I introduce the dataset that says otherwise. The gap between those two lines is the whole video.",
          "Do not soften the belief to make your finding look bigger. A weak straw man makes the twist predictable, and predictable twists lose viewers in the middle.",
        ],
      },
      {
        heading: "Delay the answer, not the data",
        paragraphs: [
          "You want to show evidence early and the conclusion late. Reveal the dataset at minute two, walk through what it measures, and let the audience guess before you confirm.",
          "The guessing is the engagement. When viewers form a hypothesis, they stay to see if they were right. Comments fill with predictions, which tells the algorithm the video is worth pushing.",
        ],
      },
      {
        quote: "The best counterintuitive essays make the audience complicit. They guess wrong and stay anyway, because now they need the answer.",
      },
      {
        heading: "Handle the objection before the reveal",
        paragraphs: [
          "Someone will say your sample was skewed. Address that fear two minutes before the payoff, not after. Preempting the objection keeps the room on your side when the twist lands.",
          "If the finding still holds after you remove the obvious confound, say so plainly. That single sentence does more for your credibility than any chart.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Open by stating the popular belief in the audience's own words.",
          "Show data early but save the conclusion for the final third.",
          "Let viewers guess so they stay for the confirmation.",
          "Preempt the obvious objection before you reveal the twist.",
          "Never weaken the belief you are correcting. A soft straw man kills the payoff.",
        ],
      },
      {
        heading: "Land the twist, then widen it",
        paragraphs: [
          "After the reveal, show the audience where the same pattern appears again. One surprising result is a fact. Three places it holds become a way of seeing.",
          "I keep a folder of follow-on examples so the ending does not feel thin. A twist that stops at one chart is a trivia answer. A twist that echoes is an idea the viewer carries into next week.",
        ],
      },
    ],
  },
  {
    slug: "story2-humanize-statistics-video-essays",
    title: "Humanize Statistics in Your Next Video Essay",
    excerpt: "Statistics humanize when you attach them to one person viewers can picture. Here is how to find that real case and make the number land on screen.",
    date: "2025-05-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        heading: "Put a face on the number",
        paragraphs: [
          "Statistics humanize when you attach them to one person the audience can picture. Ten thousand evictions a year is abstract. A woman named Dana packing her kitchen in 40 minutes is a scene.",
          "I always look for the individual case inside the aggregate. Most datasets include a field, a timestamp, or a case ID that can pull one record out of the pile.",
        ],
      },
      {
        heading: "Use scale comparisons people can feel",
        paragraphs: [
          "A billion dollars means nothing until you convert it. That is roughly the yearly budget of a mid-size city, or 3 dollars for every person in the country.",
          "I test comparisons on myself first. If I cannot picture it, the audience cannot either. The comparison has to be something they have touched, like rent, groceries, or commute time.",
        ],
      },
      {
        quote: "Numbers get remembered when they get a body. Give the statistic a name, a room, and a reason to move.",
      },
      {
        heading: "Let the person carry the data",
        paragraphs: [
          "Do not narrate the person and then quote the stat. Let the person's words set up the number, so the data arrives as relief or shock rather than an interruption.",
          "I cut back and forth between the human line and the chart. The human line creates the question. The chart answers it. Then the next human line asks a bigger one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Find the single record inside the dataset that stands for the whole.",
          "Convert big figures into something the viewer has paid for or waited in.",
          "Let a human line create the question and the chart answer it.",
          "Cut between person and data so neither becomes background noise.",
          "Test every comparison on yourself before you use it on screen.",
        ],
      },
      {
        heading: "Do not fake the feeling",
        paragraphs: [
          "Manufactured sympathy reads instantly. If the case is thin, say so, and move to a stronger one. Audiences forgive an imperfect example. They do not forgive a story that performs grief it does not have.",
          "The goal is not a tear. The goal is a viewer who now flinches at a number they used to scroll past. That flinch is the whole job.",
        ],
      },
    ],
  },
  {
    slug: "story2-data-visualization-video-storytelling",
    title: "Data Visualization That Tells a Story on Screen",
    excerpt: "A data visualization should make one claim you can say in a sentence. Learn to animate the trend, cut labels, and match the visual to the beat.",
    date: "2025-09-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "A chart is a sentence",
        paragraphs: [
          "Every chart in a video essay should make one claim. If you cannot say what the chart proves in a single sentence, it is not ready for the screen.",
          "I write the takeaway as a caption first, then design the visual around it. The caption usually becomes the on-screen text, and the chart becomes the proof underneath.",
        ],
      },
      {
        heading: "Animate the change, not the chart",
        paragraphs: [
          "Static charts in a moving medium waste the format. Animate the data so the viewer watches the trend build, one year at a time, instead of seeing the finished line dropped in front of them.",
          "I keep animation under six seconds. Longer and the viewer starts reading the axis labels instead of following the point.",
        ],
      },
      {
        quote: "A good data visual does not show everything. It shows the one thing the next sentence needs.",
      },
      {
        heading: "Cut labels, keep meaning",
        paragraphs: [
          "Most charts carry twice the labels they need. I strip gridlines, legends, and decimals until only the comparison survives. If removing a label changes nothing, it was decoration.",
          "Color does one job in a data story: it separates the thing you care about from everything else. Two colors beat five, every time.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write the chart's one-sentence claim before you design it.",
          "Animate the trend building, not the finished shape.",
          "Keep motion under six seconds so attention stays on the message.",
          "Remove any label that does not change the viewer's understanding.",
          "Use one accent color to isolate the data point that matters.",
        ],
      },
      {
        heading: "Match the visual to the emotional beat",
        paragraphs: [
          "A flat line should feel flat on screen, so slow the pacing there. A spike should hit fast, with a cut on the beat. The visual and the edit carry the same feeling, or the essay fights itself.",
          "I storyboard charts next to the voiceover script, not after. When the two are built together, the narration says less and the screen carries more.",
        ],
      },
    ],
  },
  {
    slug: "story2-case-study-storytelling-data",
    title: "Case Study Storytelling With One Honest Dataset",
    excerpt: "One honest case study can show a mechanism better than any average, if you choose well. Here is how to pick the case and put the receipts on screen.",
    date: "2026-01-05",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["narrative", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Briefcase,
    content: [
      {
        heading: "One case beats a thousand averages",
        paragraphs: [
          "A single well-documented case beats a summary statistic when you want viewers to feel a trend. Averages hide the mechanism. One case shows what actually happened, step by step.",
          "I look for a dataset with timestamps, because time turns a case into a narrative. The sequence of events is the plot, and the fields give you the beats.",
        ],
      },
      {
        heading: "Pick the case that breaks the pattern",
        paragraphs: [
          "The best case is representative and strange at once. It follows the trend for most of its life, then does one thing no one predicted. That single deviation is your turning point.",
          "If every case in the dataset behaves the same way, the story is the system, not the individual. Switch to the aggregate chart and save the case for color.",
        ],
      },
      {
        quote: "A case study earns its length by showing the mechanism. If it only restates the average, cut it to a sentence.",
      },
      {
        heading: "Show the receipts",
        paragraphs: [
          "Walk the viewer through the actual records. A timestamped log, a receipt, a support ticket, a forum post from 2019. Primary sources make a case feel reported instead of summarized.",
          "I put documents on screen and read one line aloud. The audience trusts what they can see, and a visible record turns a claim into evidence.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose a case with timestamps so the sequence becomes the plot.",
          "Find the one deviation from the pattern and build the turn around it.",
          "Put primary documents on screen instead of paraphrasing them.",
          "If every case behaves alike, the story is the system, not the person.",
          "Keep the case only as long as it reveals mechanism.",
        ],
      },
      {
        heading: "Generalize at the end, carefully",
        paragraphs: [
          "Once the case lands, tell the audience how far it travels. One case does not prove a rule, and saying so builds trust. Then show two more records that rhyme with it.",
          "The ending moves from one life to a pattern the viewer can spot again. That is how a case study stops being a portrait and becomes a lens.",
        ],
      },
    ],
  },
  {
    slug: "story2-correlation-causation-video-essay",
    title: "Correlation vs Causation in Video Essay Research",
    excerpt: "Correlation is actually a lead, not a conclusion. Learn to name the confound, demand a mechanism, and fix your claim on camera when you get it wrong.",
    date: "2026-04-19",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "narrative"],
    readTime: "8 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "The trap that eats good essays",
        paragraphs: [
          "The fastest way to lose a data-literate audience is to imply that two numbers moving together means one caused the other. It is the most common research mistake on YouTube, and it is easy to fix.",
          "I treat every correlation as a question, not an answer. What else could move both variables? What is the mechanism? If I cannot answer, the claim softens or it gets cut.",
        ],
      },
      {
        heading: "Name the third variable out loud",
        paragraphs: [
          "There is usually a hidden factor behind a neat correlation. Ice cream sales and drownings rise together, and both follow summer heat. Say the confound out loud and your essay gets smarter.",
          "I keep a running list of plausible confounds next to each finding. When one of them explains the pattern, that finding becomes a beat about how easy it is to be fooled.",
        ],
      },
      {
        quote: "Correlation is a lead, not a conclusion. Treat it like a tip you have to verify before you put it on screen.",
      },
      {
        heading: "Offer the mechanism or drop the claim",
        paragraphs: [
          "A causal claim needs a story about how it happens. If you can describe the pathway in plain language, the audience can judge it. If you cannot, they will not buy it, and a sharp commenter will say why.",
          "I write the mechanism as one sentence. Sleep debt lowers attention, which lowers test scores. If that sentence feels thin, the claim is not ready.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat every correlation as a question you still have to answer.",
          "Name the likely confound before a commenter names it for you.",
          "A causal claim needs a one-sentence mechanism or it gets cut.",
          "Use natural experiments when you cannot run a controlled test.",
          "An honest correction builds more trust than never being wrong.",
        ],
      },
      {
        heading: "Correct yourself on camera",
        paragraphs: [
          "When you get it wrong, say so in the next video. A pinned correction and a 20-second segment do more for long-term trust than silence ever will.",
          "Viewers remember how you handle being wrong far longer than they remember the original claim. Make the correction part of the story, and the story gets stronger.",
        ],
      },
    ],
  },
  {
    slug: "story2-citing-sources-video-essay-credibility",
    title: "Cite Sources in Video Essays Without Killing Pace",
    excerpt: "Cite sources in a video essay without slowing the pace. Keep the full link on screen, say the number, and give skeptics a fast way to check.",
    date: "2026-07-11",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        heading: "Citations can be invisible",
        paragraphs: [
          "You can cite heavily without slowing the video. Put the full source on screen in the corner and say the name once, in plain words. That is enough for the viewer who cares.",
          "I keep a source card in the lower third for six seconds while I keep talking. The citation registers without interrupting the sentence.",
        ],
      },
      {
        heading: "Say the number, show the link",
        paragraphs: [
          "Spoken citations should be short. The Bureau of Labor Statistics says wages fell 2 percent. That is a complete citation in one breath, and the link can sit on screen.",
          "I avoid reading full study titles aloud. Nobody parses them, and the pause breaks the rhythm. Save the full title for the description where it belongs.",
        ],
      },
      {
        quote: "A citation is a promise that you did not make the number up. Keep the promise visible and the pace intact.",
      },
      {
        heading: "Build a research section, not a bibliography",
        paragraphs: [
          "I keep every source in the video description under a research heading, ordered the way the video uses them. Viewers who want proof can follow the trail without leaving the essay.",
          "Timestamps next to each source help too. Someone can jump to the exact claim, check it, and come back. That small courtesy earns repeat viewers.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep the full source in the lower third instead of speaking the title.",
          "Say the number and the publisher, then let on-screen text hold the link.",
          "Order the description sources the way the video references them.",
          "Add timestamps so skeptics can verify one claim fast.",
          "Cite the primary source, not the article that summarized it.",
        ],
      },
      {
        heading: "Let sources become characters",
        paragraphs: [
          "A dataset has an origin, and that origin can deepen the story. A survey run by an industry group tells you which way the results lean before you read a single number.",
          "I give the audience that context in one line. Who paid for this study, and what would they want it to say? That question turns a citation into a plot point.",
        ],
      },
    ],
  },
  {
    slug: "story2-data-narrative-arc-video-essays",
    title: "Build a Narrative Arc From a Single Dataset",
    excerpt: "A single dataset already holds a narrative arc you can frame. Learn to open on the anomaly, give the middle a turn, and close in the present tense.",
    date: "2026-09-28",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "narrative"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        heading: "A dataset already has a shape",
        paragraphs: [
          "A single dataset holds a full narrative arc if you read it as change over time. The baseline is your setup, the anomaly is your rising action, and the resolution is what the latest numbers show.",
          "I plot the series before I write anything and mark where it bends. Those bends are my act breaks, and they are sitting in the data, not invented for drama.",
        ],
      },
      {
        heading: "Open on the anomaly, not the origin",
        paragraphs: [
          "You do not need to start at the beginning of the dataset. Start where the line jumps. Then cut back to the calm baseline and let the audience watch the change approach.",
          "That reordering turns a slow climb into a countdown. The audience knows trouble is coming, and the middle of the video becomes the wait.",
        ],
      },
      {
        quote: "The arc is not something you add to data. It is something you find in the shape of the line and then frame.",
      },
      {
        heading: "Give the middle a turn",
        paragraphs: [
          "Long middles sag when nothing changes. I look for a second inflection point, even a small one, and build a mini-turn around it. A dip that recovers is enough to reset attention.",
          "If the data is genuinely flat, the story is why it stayed flat while everything around it moved. Flatness becomes the puzzle instead of a problem.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Plot the series first and mark the bends as act breaks.",
          "Open on the anomaly, then rewind to the calm baseline.",
          "Find a second inflection point to keep the middle alive.",
          "If the data is flat, make the flatness the mystery.",
          "End on the latest numbers so the arc lands in the present.",
        ],
      },
      {
        heading: "Close in the present tense",
        paragraphs: [
          "End the video on the most recent data point, not a summary of the past. The present gives the arc a cliff edge, because the trend is still moving while the viewer watches.",
          "I often finish with one open question the next data release will answer. That question is the sequel hook, and it costs nothing to plant.",
        ],
      },
    ],
  },
];
