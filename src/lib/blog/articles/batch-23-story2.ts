import { Film, Search, Eye, MessageSquare, PenLine, Waves, Compass, Users, Layers, Flag } from "lucide-react";
import type { BlogPost } from "../types";

export const batch23: BlogPost[] = [
  {
    slug: "story2-documentary-storytelling-basics",
    title: "Documentary Storytelling Basics for YouTube Creators",
    excerpt:
      "Documentary storytelling turns raw footage into a narrative with a question, a turn, a cost, and a payoff. Here are the basics that separate a doc from a vlog.",
    date: "2024-02-06",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Documentary storytelling is the craft of turning real events into a narrative a viewer can follow. You observe first, then shape the footage into a story that poses a question and holds it open until the end.",
          "That final step is where most creators quit. They film a process, cut it in chronological order, and call the result a documentary. What they have is footage. A documentary decides what the footage means and earns every second the viewer hands over.",
          "I learned this on a 40-minute video about a neighborhood bakery. My first cut was a timeline. The second cut, built around one question the owner could not answer, held viewers for 18 minutes on average.",
        ],
      },
      {
        quote: "Documentary is a decision about what the events meant, not a pile of footage in order.",
      },
      {
        heading: "Start with a question you cannot answer yet",
        paragraphs: [
          "A documentary runs on an open question. Will the shop survive the winter? Did the official report match what the workers saw? If you already know the answer and the video only confirms it, the viewer has nothing to wait for.",
          "The best questions are the ones that kept you filming past the point where a vlog would have stopped. That itch is your structure. Follow it, and the middle of the video stops feeling like padding.",
        ],
      },
      {
        heading: "Observe before you edit",
        paragraphs: [
          "Documentary work starts in the field, not the timeline. You watch longer than feels productive, keep the camera rolling through dead air, and resist steering people toward the answer you expected.",
          "I record what I call drift footage: hands, sidewalks, doorways, the space someone leaves when they walk out of frame. Half of it never gets used. The other half becomes the texture that makes the talking parts believable.",
        ],
      },
      {
        heading: "The shape most documentaries share",
        bullets: [
          "An opening scene that raises the question without stating it outright.",
          "A middle that adds information the subject may not want you to have.",
          "A turn where the question changes shape or the cost becomes clear.",
          "An ending that answers the question and names what stays unresolved.",
        ],
        paragraphs: [
          "You can stretch or compress these beats, but skipping the turn is fatal. Without it the video is a report, and reports do not hold attention.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick one question and let it organize the whole video.",
          "Capture more than you need, then cut toward the question.",
          "Give the story a turn, not just a sequence of events.",
          "End on meaning, not on the last thing that happened chronologically.",
        ],
      },
      {
        heading: "Keep the camera out of the way",
        paragraphs: [
          "The difference between a documentary and a personality video is where the attention sits. If the viewer is watching you react the whole time, the subject never gets room to speak. Get out of the frame when the story can carry itself.",
          "That restraint is harder than it looks. The reward is a video that feels bigger than its creator, which is exactly why people share it.",
        ],
      },
    ],
  },
  {
    slug: "story2-archival-research-storytelling",
    title: "Archival Research for Documentary Storytelling",
    excerpt:
      "Archival research gives a documentary its proof. Learn how to hunt records, clips, transcripts, and footage that turn a claim into a story the viewer trusts.",
    date: "2024-05-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Archival research is how a documentary earns the right to make a claim. You gather records, transcripts, photographs, and old footage before you write a word of narration, because the evidence decides what the story can honestly say.",
          "Most creators skip this step and quote a statistic they found in a second search result. The result feels thin because it is thin. One primary document will outshine ten recycled facts.",
          "I keep a folder for every project called proof. If a sentence cannot trace back to something in that folder, it gets rewritten or cut.",
        ],
      },
      {
        quote: "Archive is the floor the whole argument is built on.",
      },
      {
        heading: "Hunt primary sources first",
        paragraphs: [
          "Primary sources are documents made at the time by people who were there. Diaries, court filings, meeting minutes, shipping manifests, local newspaper microfilm. They are slow to find and worth every hour.",
          "Secondary sources summarize primary ones and introduce errors. Use them as maps to the originals, not as the thing you cite on screen. When I can show the actual page, the viewer stops doubting.",
        ],
      },
      {
        heading: "Where to look when you have no budget",
        bullets: [
          "Public library digital archives, which are free and often underused.",
          "Government record portals for permits, inspections, and court filings.",
          "The Internet Archive's moving image and text collections for period footage.",
          "Local historical societies, whose staff know the collections better than any search engine.",
        ],
        paragraphs: [
          "None of this costs money. It costs patience and a list of search terms you refine for hours.",
        ],
      },
      {
        heading: "Let the gaps become part of the story",
        paragraphs: [
          "Archives are never complete. A destroyed file or a missing photograph is information, not just an obstacle. Saying out loud that the record stops here keeps you honest and often deepens the mystery.",
          "I once built an entire segment around a 30-year gap in a factory's accident logs. The silence did more work than any document could have.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Build a proof folder before you write, not after.",
          "Cite the original document, not the blog that quoted it.",
          "Treat missing records as a story beat, not a failure.",
          "Match every visual claim to something the viewer can see.",
        ],
      },
      {
        heading: "Turn paper into pictures",
        paragraphs: [
          "An archive only helps if the viewer can look at it. Scan the letter, zoom the photograph, hold on the timestamp. Narration over a blank screen wastes the strongest asset you have.",
          "Then read the document out loud in its own words. A 1911 union notice sounds nothing like a modern summary, and that difference is the whole reason you went looking.",
        ],
      },
    ],
  },
  {
    slug: "story2-b-roll-storytelling",
    title: "B-Roll Storytelling: Make Every Cut Say Something",
    excerpt:
      "B-roll storytelling means every cut carries meaning instead of filling time. Learn how to pick and order footage that moves the narrative forward.",
    date: "2024-08-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["narrative", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "B-roll storytelling is the practice of using secondary footage to advance the narrative instead of covering a gap in the narration. Every shot should add information, tension, or texture the viewer did not have a second earlier.",
          "Most creators treat b-roll as wallpaper. The narrator talks, and pretty images drift behind the words. That wastes the most flexible tool in documentary editing, because a well-chosen cut can do the work of a full paragraph.",
          "I edit b-roll last, on purpose. By then I know exactly what each section needs to prove.",
        ],
      },
      {
        quote:
          "If you can swap a shot for any other shot and the meaning holds, you have filler, not b-roll.",
      },
      {
        heading: "Shoot with the argument in mind",
        paragraphs: [
          "You cannot choose strong b-roll in the edit if you never captured it. Before a shoot I write the claims I expect to make, then film the physical evidence for each one. The machine that broke. The empty shelf where the product used to sit.",
          "That list turns a random afternoon of filming into a library I can pull from for months.",
        ],
      },
      {
        heading: "What a cut can carry",
        bullets: [
          "Proof: the object or place that confirms what the narration claims.",
          "Scale: a wide shot that shows how big the operation really is.",
          "Contrast: a before and after placed side by side so the change lands.",
          "Rhythm: a short cut that resets the viewer's attention mid-sentence.",
          "Delay: holding on one image so a reveal arrives a beat later.",
        ],
        paragraphs: [
          "Pick the job before you pick the clip. Otherwise you will choose footage that looks good and says nothing.",
        ],
      },
      {
        heading: "Order matters as much as choice",
        paragraphs: [
          "Two clips in one order tell a story. Swap them and the story inverts. A closed sign followed by a busy counter reads as decline. The same two shots reversed read as recovery.",
          "I storyboard b-roll in pairs on a whiteboard, then move the pairs around until the sequence makes an argument. The narration rarely changes. The meaning does.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Name the job each shot does before you place it.",
          "Shoot evidence for your claims, not just scenery.",
          "Test sequences in both orders and keep the one that argues.",
          "Hold on the strongest image and let the narration wait.",
        ],
      },
      {
        heading: "Sound is half the picture",
        paragraphs: [
          "B-roll without room tone feels synthetic. Keep ambient sound from every location and lay it under the cut. A factory hum or a quiet street tells the viewer the footage is real.",
          "Then use silence deliberately. Dropping the music for one shot makes the next one hit harder than turning it up ever could.",
        ],
      },
    ],
  },
  {
    slug: "story2-interview-driven-documentary",
    title: "Interview-Driven Documentary Storytelling That Flows",
    excerpt:
      "Interview-driven documentaries rise or fall on the questions. Learn how to prepare and record interviews so the story flows instead of stalling.",
    date: "2024-10-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Interview-driven documentary storytelling builds the narrative from what subjects say, then arranges those answers into a story with momentum. The interview is the raw material, and the cut is where the story actually gets written.",
          "The mistake is treating a good interview as a finished segment. A strong answer recorded in hour two might belong in the opening minute, and moving it there is often the difference between a slow start and a gripping one.",
          "I record twice as much interview as I need and expect to use a third of it. Budgeting for waste keeps me from pressuring subjects for a perfect take.",
        ],
      },
      {
        quote: "A great interview answer is raw material. You move the pieces until the scene appears.",
      },
      {
        heading: "Prepare questions you can abandon",
        paragraphs: [
          "I write questions the night before, then treat them as a starting map. The best material usually arrives when a subject goes off script, and rigid question lists kill that.",
          "Order questions from easy to hard. Start with facts and logistics, then move toward the moments that cost something. Trust has to build before the hard question lands well.",
        ],
      },
      {
        heading: "What makes an answer usable",
        bullets: [
          "A concrete detail, such as a date, a name, a number, or a small physical detail.",
          "One clear emotion, not a summary of feelings across years.",
          "An admission the subject did not have to make.",
          "A sentence that answers the question you actually asked.",
        ],
        paragraphs: [
          "If an answer has none of these, it is context. Note it, but do not build a segment on it.",
        ],
      },
      {
        heading: "Cutting interviews into a story",
        paragraphs: [
          "Pull every usable answer into a transcript and label each by what it does: setup, complication, turn, or resolution. Then arrange the labels before you touch the timeline. The story is in the order, not the footage.",
          "I read the assembled transcript as a single monologue. If it does not flow as plain text, it will not flow on screen.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Prepare questions, then let the subject lead.",
          "Record more than you need and label answers by function.",
          "Move strong answers to wherever the story needs them.",
          "Read the assembled transcript before editing picture.",
        ],
      },
      {
        heading: "Protect the subject after the cut",
        paragraphs: [
          "Editing can make an honest person sound evasive if you cut mid-answer. Keep enough of each response that the meaning survives, even when it runs long. Viewers notice when someone is being made to look bad.",
          "When in doubt, show the subject the segment and note their objection on the record. That note can become a strong part of the story instead of a liability.",
        ],
      },
    ],
  },
  {
    slug: "story2-voiceover-narration-documentary",
    title: "Documentary Voiceover Narration: How Much to Say",
    excerpt:
      "Documentary voiceover narration should bridge gaps, not narrate the obvious. Learn when to talk, when to stay silent, and how to write lines that earn airtime.",
    date: "2024-12-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "Documentary voiceover narration is the spoken thread that connects scenes the footage cannot link on its own. Good narration bridges gaps and steps back. Bad narration describes what the viewer is already watching.",
          "The test is simple. Cover the picture and listen to the words alone. If they still make sense, the narration is doing work. If they describe a shot you cannot see, it is redundant.",
          "I write narration last, after the picture is locked, so every line responds to something real on screen.",
        ],
      },
      {
        quote:
          "Narration should say what the footage cannot. The second it repeats the image, it is competing with it.",
      },
      {
        heading: "Write to the cut, not the page",
        paragraphs: [
          "Screenwriting for documentary starts with the edit. Once scenes are in order, I play them and speak aloud what the viewer needs to know that the images do not deliver. What I say out loud becomes the first draft of the script.",
          "That method keeps the narration lean, because filler sounds absurd when you are staring at the exact shot it would cover.",
        ],
      },
      {
        heading: "Lines that earn their place",
        bullets: [
          "A date or figure the viewer cannot infer from the image.",
          "A name that gives a face its proper context.",
          "A connection between two scenes filmed months apart.",
          "A question that sets up the next scene without answering it.",
        ],
        paragraphs: [
          "Each of these adds something invisible. That is the only justification narration needs.",
        ],
      },
      {
        heading: "When to stay silent",
        paragraphs: [
          "The strongest move in many documentaries is to say nothing and let a scene breathe. If a subject pauses, hold it. If a wide shot shows the scale, let the viewer measure it.",
          "I mark my script with the word quiet wherever I plan to stop talking. Those gaps give the next line room to land.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write narration against the locked picture, not before it.",
          "Cut any line that describes what the viewer can already see.",
          "Use silence as a tool, not as dead air.",
          "Let the subject's own words carry emotional moments.",
        ],
      },
      {
        heading: "Match the voice to the story",
        paragraphs: [
          "A cheerful read over heavy material betrays the footage. A solemn read over a light scene drags it down. The delivery has to sit inside the same emotional register as the scenes around it.",
          "I record two takes of every line, one restrained and one warm, then choose per section. Mixing registers across a long video keeps the ear from going numb.",
        ],
      },
    ],
  },
  {
    slug: "story2-observational-scenes-cinema-verite",
    title: "Observational Documentary: Letting Scenes Play Out",
    excerpt:
      "Observational documentary trusts the scene over the script. Learn how patient long takes and small quiet moments build trust with the viewer.",
    date: "2025-02-25",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["narrative", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Observational documentary, often called cinema verite, follows real life as it unfolds and resists the urge to explain it. The camera watches, the scene plays, and the viewer draws conclusions from what they see rather than what they are told.",
          "This mode is slow by design. It trades the safety of narration for the credibility of a moment no one could have staged. When it works, the viewer feels present in a way a scripted segment never achieves.",
          "I shoot observational scenes with one rule: keep rolling until something changes, then roll ten seconds past it.",
        ],
      },
      {
        quote:
          "The moment you ask a subject to repeat something for the camera, it stops being observational and becomes a reenactment.",
      },
      {
        heading: "Patience is the whole method",
        paragraphs: [
          "An observational scene needs time to become itself. The first thirty seconds are usually people performing for the lens. The real behavior arrives once they forget it is there.",
          "I plan for long shoots and small yields. A four-hour day might give me six usable minutes. Those six minutes often carry more truth than a full interview.",
        ],
      },
      {
        heading: "What you need to make it work",
        bullets: [
          "Small cameras or phones that people stop noticing after an hour.",
          "Wireless audio, because a clean long take can survive almost any picture.",
          "Enough storage and batteries to run without stopping.",
          "A willingness to miss things so you can keep attention on the scene in front of you.",
        ],
        paragraphs: ["The gear list is short. The discipline is the hard part."],
      },
      {
        heading: "Editing an observational scene",
        paragraphs: [
          "In the edit, you protect the scene. Cut camera resets and dead weight, but keep the pauses that most editors trim first. A long silence before an answer is often the answer.",
          "I test a scene by watching it with the sound off, then again with my eyes closed. If both passes hold interest, it is ready.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Roll until behavior changes, then hold past it.",
          "Write the scene in the field, not the script.",
          "Keep silences that other editors would cut.",
          "Trust the viewer to interpret what they see.",
        ],
      },
      {
        heading: "Where observation needs help",
        paragraphs: [
          "Pure observation can leave the viewer without a map. A short title card, a single line of narration, a lower-third name, or a date on screen can anchor the scene without explaining it away.",
          "The balance is the craft. Give just enough frame that the scene stays legible, then get out of the way again.",
        ],
      },
    ],
  },
  {
    slug: "story2-investigative-documentary-structure",
    title: "Investigative Documentary Structure: Following the Evidence",
    excerpt:
      "Investigative documentary structure follows evidence toward a claim. Learn how to order findings, build tension, and land a reveal the viewer trusts.",
    date: "2025-05-20",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Investigative documentary structure organizes a story around evidence and the question of what it proves. You collect findings, order them so each one sharpens the question, and hold the biggest piece back until the viewer has earned it.",
          "The temptation is to lead with your conclusion. Resist it. A reveal only lands when the audience has walked the same path you did and can feel the ground shift under them.",
          "I keep every finding on index cards and sort them by what they prove, not by when I found them.",
        ],
      },
      {
        quote:
          "An investigation is a walk through the evidence where the viewer keeps finding the same uncomfortable thing.",
      },
      {
        heading: "Order by revelation, not chronology",
        paragraphs: [
          "The order you discovered facts is rarely the order that serves the story. Move the smallest incriminating detail early so the viewer starts doubting, then stack the bigger ones behind it.",
          "Each finding should change what the previous one meant. If a new fact confirms without complicating, it can wait.",
        ],
      },
      {
        heading: "What every investigation needs",
        bullets: [
          "A single claim you are trying to prove, stated plainly.",
          "Documents or witnesses that support each step.",
          "At least one finding that surprised you.",
          "A response from the side you are examining.",
        ],
        paragraphs: [
          "The last one is not optional. A story that never seeks the other side reads as a hit piece, and viewers can tell.",
        ],
      },
      {
        heading: "Build the reveal",
        paragraphs: [
          "Save your strongest piece of evidence for the point where the viewer has enough context to feel its weight. Drop it too early and it is trivia. Drop it too late and it feels like a gotcha.",
          "I write the reveal line first, then build backward. Knowing the destination keeps me from wandering into tangents the story does not need.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Order findings for increasing impact, not by discovery date.",
          "Let each new fact reframe the one before it.",
          "Always request a response from the other side.",
          "Write the reveal first, then build toward it.",
        ],
      },
      {
        heading: "End on what you can prove",
        paragraphs: [
          "Investigations run on inference, and it is easy to let a strong suspicion pass as a fact. Separate what the documents show from what you believe, and say which is which.",
          "A measured ending that names the limits of your evidence earns more trust than a dramatic accusation you cannot fully support.",
        ],
      },
    ],
  },
  {
    slug: "story2-character-driven-documentary",
    title: "Character-Driven Documentary: One Life, One Arc",
    excerpt:
      "Character-driven documentary follows one person long enough to show real change. Learn how to choose a subject and trace an arc without inventing one.",
    date: "2025-08-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Character-driven documentary follows a single person over enough time that real change becomes visible. The subject carries the story, and your job is to pick someone with a want strong enough to keep a viewer watching.",
          "The format lives on duration. A day with a subject shows a mood. A year shows an arc. The longer you stay, the more the person reveals without ever being asked.",
          "I have followed one subject across 14 months. The final scene only exists because I kept showing up after the interesting parts were over.",
        ],
      },
      {
        quote:
          "You do not cast a documentary subject for charisma. You cast them for a want that will not leave them alone.",
      },
      {
        heading: "Choose the want over the personality",
        paragraphs: [
          "The best subject is not the most articulate person in the room. It is the one with a specific goal they cannot easily reach. A promotion, a recovery, a debt, a record. The viewer needs something to track.",
          "Ask potential subjects what they are trying to change. Vague answers predict a vague film. A sharp answer gives you a spine for months of shooting.",
        ],
      },
      {
        heading: "Signs you have a real arc",
        bullets: [
          "The subject wants one specific outcome, and you can name it.",
          "There is a deadline or a constraint that forces decisions.",
          "Something they believe at the start gets tested.",
          "They keep returning to the same worry without being prompted.",
        ],
        paragraphs: [
          "Two or more of these signals mean you can build a story that holds together across a long shoot.",
        ],
      },
      {
        heading: "Stay long enough to be boring",
        paragraphs: [
          "Documentaries fail when creators leave once the obvious drama ends. Stay through the quiet months. That is where habits show, and habits reveal character better than any crisis.",
          "I schedule shoot days with nothing planned. Most of them yield nothing. One in ten yields the scene that opens the film.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick a subject with a clear, specific want.",
          "Follow through the quiet periods, not just the peaks.",
          "Let change happen on its own schedule.",
          "Keep the ending honest, even when it is unresolved.",
        ],
      },
      {
        heading: "Let the subject keep their privacy",
        paragraphs: [
          "A person's life is not yours to expose. Agree in advance on what stays off camera, and hold to it even when a scene would be stronger with the detail included.",
          "That restraint protects the subject and improves the film. Trust makes people willing to show you the parts they would otherwise guard.",
        ],
      },
    ],
  },
  {
    slug: "story2-video-essay-vs-documentary",
    title: "Video Essay vs Documentary: Choosing the Right Form",
    excerpt:
      "Video essay vs documentary comes down to who leads: your argument or the subjects. Learn which form fits your footage and how to blend them well.",
    date: "2026-02-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "narrative"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "A video essay leads with the creator's argument, while a documentary leads with the subject's world. The essay tells you what to think and shows its evidence. The documentary shows you a world and lets you draw your own conclusion.",
          "Both formats can teach and both can move people. Choosing wrong means fighting the material, because a personal argument buried in observational footage feels unfocused, and a neutral subject forced into a thesis feels rigged.",
          "I decide the form before I shoot, because it changes what I even point the camera at.",
        ],
      },
      {
        quote:
          "The essay asks the viewer to think with you. The documentary asks them to look with you. Pick which invitation you are sending.",
      },
      {
        heading: "Where the essay wins",
        paragraphs: [
          "The essay is stronger when the subject is abstract, such as an idea, a trend, or a piece of culture that has no single character to follow. Your argument becomes the spine, and clips become the evidence.",
          "It also wins when you have a strong point of view the audience is there to hear. People subscribe to essay channels for the thinking, not for the footage.",
        ],
      },
      {
        heading: "Where the documentary wins",
        bullets: [
          "When a real person's experience cannot be summarized by your opinion.",
          "When the truth is contested and multiple voices need room.",
          "When the story changes your own view as you shoot it.",
          "When showing a place or process does more than any argument could.",
        ],
        paragraphs: [
          "In each case, the subject is bigger than your thesis, and the format should admit that.",
        ],
      },
      {
        heading: "Blending the two without losing focus",
        paragraphs: [
          "Hybrids work when one form clearly leads and the other supports. An essay can open with an observational scene, then return to argument. A documentary can use a narrator, as long as the narrator does not override the people on screen.",
          "Name the lead form before you edit. Blends fail when neither form owns the video, and the viewer cannot tell what they are watching.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Essay leads with argument; documentary leads with subject.",
          "Pick the form before you shoot, not after.",
          "Use clips as evidence in essays and as world in documentaries.",
          "Name the lead form in a hybrid so the viewer stays oriented.",
        ],
      },
      {
        heading: "A test before you commit",
        paragraphs: [
          "Write your opening line in each form and read them back. The essay version sounds like a claim. The documentary version sounds like an invitation into a place. Whichever one you can defend for ten minutes is the form to use.",
          "Then delete the other opening. Half the confusion in a draft is two different videos fighting for the same runtime.",
        ],
      },
    ],
  },
  {
    slug: "story2-documentary-ethics-consent",
    title: "Documentary Ethics and Consent for Small Creators",
    excerpt:
      "Documentary ethics and consent protect the people on screen. Learn how to get permission, handle hard moments, and keep trust after the video goes live.",
    date: "2026-09-15",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["storytelling", "narrative"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Documentary ethics and consent are about protecting the real people who let you film them. You get clear permission, explain where the footage will appear, and honor the boundaries a subject sets even when they weaken your best scene.",
          "This is not legal paperwork. It is the human agreement that makes the footage possible in the first place. Break it and you win one video at the cost of your reputation and your access.",
          "I keep a one-page agreement for every subject, written in plain language, and I read it aloud before we shoot.",
        ],
      },
      {
        quote:
          "Consent keeps happening after the signature. You keep checking in until the video is published.",
      },
      {
        heading: "Explain the destination before you roll",
        paragraphs: [
          "People agree to be filmed without knowing where the clip ends up. Tell them the platform, the rough length, and who will see it. A subject who expects a small audience reacts very differently when a clip travels.",
          "If the plan changes afterward, go back and ask again. Reopening the conversation is cheap compared to answering a subject who feels ambushed.",
        ],
      },
      {
        heading: "Boundaries worth writing down",
        bullets: [
          "What the subject will not discuss on camera.",
          "Which family members or coworkers must not appear.",
          "Whether names, faces, or locations can be shown.",
          "Who gets to see the cut before it publishes.",
        ],
        paragraphs: [
          "Writing these down prevents the argument you would otherwise have after release.",
        ],
      },
      {
        heading: "Hard moments need a second thought",
        paragraphs: [
          "A crying interview or a confession can make a video unforgettable. It can also ruin someone's life. Ask yourself whether the subject understood what publishing that moment means, and whether you would trade places.",
          "When in doubt, show the subject the segment and let them decide. Their answer usually reveals something honest about the story that changes how you cut it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Get permission in plain language before filming.",
          "Explain where and to whom the footage will be shown.",
          "Write down the subject's boundaries and respect them.",
          "Let subjects review hard moments before release.",
        ],
      },
      {
        heading: "When you have to say no",
        paragraphs: [
          "Some stories cannot be told without hurting someone who trusted you. Turning those down is part of the work. The video you do not make protects the access that makes the next ten possible.",
          "That restraint is not weakness. It is the reason people keep letting documentarians into their lives.",
        ],
      },
    ],
  },
];
