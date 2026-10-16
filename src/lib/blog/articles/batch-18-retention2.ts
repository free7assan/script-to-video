import { Clock, Layers, PenLine, Puzzle, Repeat, Scissors, Target, TrendingUp, Type, Workflow } from "lucide-react";
import type { BlogPost } from "../types";

export const batch18: BlogPost[] = [
  {
    slug: "retention2-end-screen-strategy",
    title: "End Screens That Earn the Next Click, Not a Bounce",
    excerpt:
      "A strong end screen is a decision, not a decoration. Here is how the last twenty seconds turn a passive viewer into the next click and the next session.",
    date: "2024-02-01",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "An end screen works when it removes a decision instead of adding one. The viewer has just finished a video, which means they are in the single moment they are most likely to click something else. Your job in those last twenty seconds is to make the next click obvious.",
          "Most end screens fail because they behave like a billboard. Four boxes, a subscribe button, a channel watermark, and a playlist card all compete for the same glance. The viewer does not choose. They leave.",
        ],
      },
      {
        heading: "Two elements, not six",
        paragraphs: [
          "A good end screen offers two choices at most: the one video you most want them to watch next, and a subscribe prompt if they have earned it. Anything past that splits attention until it becomes noise.",
          "Watch where the eye goes. Someone holding a phone sees roughly the middle half of the frame during those final seconds. If your best recommendation sits in a corner they are not looking at, it may as well not exist. Put the next video where a face would be, centered and slightly high.",
          "Choose the recommendation by intent, not by upload date. If this video answered how to write a hook, the next one should answer what happens after the hook. A viewer who watched a video about retention does not want your most popular upload from three years ago. They want the one that continues the thought they are still holding.",
        ],
      },
      {
        paragraphs: [
          "Frame the recommendation before the end screen appears. A card that pops up cold asks the viewer to parse a thumbnail at the exact moment their attention is already leaving. A line of narration that names the next video turns that popup into a payoff they were waiting for.",
          "Keep the audio alive while the cards are on screen. Silence plus boxes reads as credits, and credits mean the video is over.",
        ],
      },
      {
        quote:
          "The last twenty seconds are not a goodbye. They are the only stretch where the viewer has nothing to do but decide what comes next.",
      },
      {
        heading: "Writing the handoff",
        paragraphs: [
          "Draft the final narration as a bridge into the recommended video. Something like: that covers the hook, but the part nobody warns you about is the second sentence, and that is the whole next video. The end screen then confirms what the voice already promised.",
          "The safest bridge is the sequel. If this video was part one of a question, part two is the obvious click. Weak bridges happen when the next video shares a topic but not a thread.",
          "This is where creators discover they picked the wrong next video. If the bridge sounds forced, the recommendation is wrong. The narration is a test: if you cannot connect this video to the next one in a single sentence, your viewers cannot either.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Treat the end screen as a handoff, not a sign-off.",
          "Offer at most two actions, and center the primary one in the frame.",
          "Pick the next video by topic adjacency, not recency.",
          "Name the recommendation in narration before the card appears.",
          "Keep audio running while the cards are visible.",
        ],
      },
      {
        paragraphs: [
          "Test it the cheap way. Compare end-card click-through on two videos about the same topic, one where you name the next video out loud and one where you do not. The number will settle the argument faster than any theory about thumbnails.",
          "Check the retention graph at the same second the cards appear. If the curve drops when the boxes show up, your end screen is costing you viewers rather than routing them. A working end screen is not polish. It is the cheapest retention you will ever buy.",
        ],
      },
    ],
  },
  {
    slug: "retention2-outro-not-goodbye",
    title: "Why Your Outro Should Be a Bridge, Not a Goodbye",
    excerpt:
      "Thanks for watching is the most expensive sentence in your script. A real outro hands the viewer somewhere to go instead of closing the door.",
    date: "2024-05-12",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Thanks for watching is the most expensive sentence in your script, and almost every creator says it. It tells the viewer the experience is over, hands them permission to leave, and wastes the last moment they were still paying attention.",
          "An outro is not a polite formality. It is the hinge between this video and everything else you have made. Treat it like the closing line of a chapter, not the back cover of a book.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A goodbye tells the viewer the session is over.",
          "Turn the outro into a hinge to one specific next video.",
          "Pair any subscribe ask with a reason tied to this video.",
          "Reserve the last spoken line for the next promise.",
        ]
      },
      {
        heading: "What a goodbye actually does",
        paragraphs: [
          "The default outro does three damaging things at once. It signals the end, it asks for something, and it offers no direction. The viewer hears the wind-down music, sees the subscribe animation, and reaches for their phone.",
          "Closure is a feeling, and the brain uses it to justify leaving. Once you say some version of that is all for today, you have given the viewer a clean exit. Most of them take it, not because the video was bad, but because you told them it was over.",
          "The wind-down is contagious. As soon as your delivery softens and the music swells, the viewer's attention drops with it. You cannot recover a goodbye with a surprise cut back to content, because the feeling already landed.",
        ],
      },
      {
        quote:
          "Nobody leaves a video because it ended. They leave because the creator announced the end and gave them nothing on the other side.",
      },
      {
        heading: "Turning the outro into a hinge",
        paragraphs: [
          "Replace the thank-you with a pointer. Instead of thanks for watching, say the next thing the viewer is probably wondering and tell them where you answer it. That can be another video, a playlist, or a question you pose for the comments.",
          "If you run a series, name the position in the series. If this was number three of a build, say so, and say what number four solves. Sequence is the most natural reason to keep watching, and it costs one sentence to install.",
          "There is a version of this for every format. A tutorial points to the advanced build. A review points to the comparison. A story points to the moment the story changed. The pointer only has to be honest, not clever.",
        ],
      },
      {
        heading: "Outro fixes that take five minutes",
        bullets: [
          "Cut the phrase thanks for watching entirely and watch what the retention curve does at the tail.",
          "Replace the summary with a pointer to one specific next video.",
          "If you must ask for a subscribe, pair it with a reason tied to what they just watched.",
          "Reserve the last spoken line for the next promise, not the current recap.",
        ],
      },
      {
        paragraphs: [
          "The order matters. Most creators recap, then ask, then sign off. A better order is point forward, give one reason, and stop, then let the end screen carry the ask. When the audio and the card say different things, the viewer follows the audio.",
          "One more tell is the recap itself. Recapping what the viewer just watched treats them like they were not paying attention. They were. Use that space to point forward instead.",
          "You can hear a weak outro in your own edit. If the last lines would still make sense as the end of your channel, they are a goodbye. If they only make sense as the start of the next video, they are a bridge.",
        ],
      },
      {
        paragraphs: [
          "Write the outro first, before the body. Decide where the viewer goes when this ends, and let the video earn that destination. The outro stops being cleanup duty and becomes the one line that keeps the session alive.",
          "The best outros sound like a person mid-thought who noticed you were still listening and told you where the thought continues.",
        ],
      },
    ],
  },
  {
    slug: "retention2-last-thirty-seconds",
    title: "Why the Last Thirty Seconds Decide the Next Watch",
    excerpt:
      "Most videos do not crash at the end, they trail off. Tightening the last thirty seconds is the fastest retention fix you will ever make on an old upload.",
    date: "2024-08-20",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "pacing"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Clock,
    content: [
      {
        paragraphs: [
          "The retention graph almost always dips in the final thirty seconds, and creators read that dip as normal. It is not. That tail is where viewers decide whether to click the next video or open a different app, and most endings are quiet defeats.",
          "Watch your own last half minute. If it is a recap, a wind-down, or a string of clipped sentences that never quite land, the video does not end. It runs out.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Endings trail off when they only restate.",
          "End on a beat, then stop.",
          "Cut recap verbs like 'to sum up' from the tail.",
          "Make the final line and the end screen point at the same video.",
        ]
      },
      {
        heading: "Why endings trail off",
        paragraphs: [
          "Scripts get written top to bottom, and energy follows that direction. The hook gets twenty drafts, the middle gets a beat sheet, and the ending gets whatever is left when you are tired. That is the whole explanation.",
          "Trailing off is also structural. If you saved the payoff for the final minute, the last thirty seconds are spent delivering it, so there is no room for a clean landing. The answer arrives and the video just stops. Feels abrupt, reads as unfinished.",
          "There is a third cause: fear of stopping. Creators pad the end with thanks and subscribe reminders because silence feels rude. The viewer does not read it as polite. They read it as the video already being over.",
        ],
      },
      {
        quote:
          "A video should not run out. It should stop, on purpose, at the exact second the viewer is most willing to keep going.",
      },
      {
        heading: "Ending on a beat",
        paragraphs: [
          "Decide the final beat before you write it. That beat is one clear change: a decision, a reversal, a number that moved. Then land the last words right after it, while the impact is still ringing.",
          "Do not put the reveal and the farewell in the same sentence. Separate them. Let the reveal sit, say one short line that points forward, and stop. Silence after a strong beat is more confident than a paragraph of summary.",
          "A clean landing often sounds smaller than you expect. One sentence can be enough if the beat before it did the work.",
        ],
      },
      {
        heading: "A quick end-of-video audit",
        bullets: [
          "Read only the last fifteen lines. Do they contain a new change, or only restatement?",
          "Find the last moment of impact and check how many words come after it. If it is more than a sentence or two, cut.",
          "Search the script for recap verbs: as we saw, to sum up, in conclusion. Cut them from the tail.",
          "Check the final line against the end screen. Do they point at the same next video?",
        ],
      },
      {
        paragraphs: [
          "Most of the fix is deletion. The ending you need is usually already in the script, buried under three sentences of wrap-up. Cut the wrap-up, keep the beat, and the last thirty seconds stop leaking.",
          "One caution: do not confuse a short ending with a rushed one. The final beat still needs to land. You are cutting the filler around it, not the payoff itself.",
          "This is the cheapest edit in your whole catalog. Old videos can be re-uploaded or clipped with a tighter ending, and the tail of the retention curve moves. I have seen a single re-cut ending lift average view duration more than a new thumbnail did.",
        ],
      },
      {
        paragraphs: [
          "Write the ending while you still care. Draft the final beat in the same session as the hook, when the idea is loud in your head. Endings written last sound like endings written last.",
          "Test the tight version against the old one on the same video and compare average view duration. That single number is the whole argument.",
        ],
      },
    ],
  },
  {
    slug: "retention2-cta-stacking",
    title: "Why Stacking Too Many CTAs Loses You All of Them",
    excerpt:
      "Like, subscribe, comment, click the link, watch the next one. Five CTAs at the end of a video get fewer clicks than one ask placed with intent.",
    date: "2024-11-28",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Every call to action competes with every other call to action. Like, subscribe, ring the bell, join the newsletter, buy the course, watch this playlist. Stack five asks into the last minute and the viewer does none of them. The brain treats a pile of requests as noise and stops parsing.",
          "The fix is not a better script for each ask. It is fewer asks. A video can carry one real request, sometimes two if they are clearly different sizes.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One primary ask per video.",
          "Match the ask to the emotion, not your growth goals.",
          "Put the low-cost ask early and the big ask at the end.",
          "If two asks coexist, split them by two minutes.",
        ]
      },
      {
        heading: "Why stacks fail",
        paragraphs: [
          "Each ask has a cost. Asking for a comment pulls attention to the comment box. Asking for a subscribe pulls it to the button. When both happen in the same breath, they cancel and the viewer does neither.",
          "Stacks also signal desperation. One confident ask reads as a recommendation. Four asks read as a creator who needs something from you, and viewers can feel that shift in tone even when they cannot name it.",
          "There is a technical problem too. End-screen elements, cards, and buttons all occupy the same corner of the frame. Even at two asks, if both live in the last five seconds, they overlap and one gets buried.",
        ],
      },
      {
        quote:
          "A viewer can act on one ask at a time. Give them five and the honest answer is zero.",
      },
      {
        heading: "Pick the one that matters",
        paragraphs: [
          "Choose the single action that best fits this video and the viewer's mood at that moment. A funny video earns a subscribe. A tutorial earns a click to the follow-up. A community post earns a comment. The ask should match the value they just received.",
          "If you have two asks, separate them. Put the small one early, around the first third, and the important one at the end. Never let them share a sentence.",
          "The ask should sound like something you would say to a friend, not something a dashboard told you to say.",
        ],
      },
      {
        heading: "Rules for asking",
        bullets: [
          "One primary ask per video. Extra asks need a separate moment.",
          "Match the ask to the emotion of the video, not to your growth goals.",
          "Put the low-cost ask early and the big ask at the end.",
          "Write the ask in plain speech, without animation or a sound effect.",
          "If two asks must coexist, split them by at least two minutes.",
        ],
      },
      {
        paragraphs: [
          "The mid-roll ask is underrated. Around a third of the way in, viewers are still engaged and have not yet formed an opinion about leaving. A short, low-cost request there outperforms a louder one in the final seconds when attention is already spent.",
          "Notice the pattern. The best-performing channels ask less, not more. They pick one thing per video and trust that a viewer who liked this one will look for the rest on their own.",
          "Track it honestly. Note which ask you used and what moved. After five videos you will know which request your audience actually answers and which one they scroll past.",
        ],
      },
      {
        paragraphs: [
          "For the next video, try deleting every ask except the one that matters most. Add nothing to replace them. If clicks or subscribes fall, you had a rare case where the stack worked. Most creators find the opposite, and it stays true across the next ten uploads.",
          "The blunt version: if every video asks for everything, no single video asks for anything.",
        ],
      },
    ],
  },
  {
    slug: "retention2-playlist-binge-chain",
    title: "How to Design an Outro That Starts the Next Video",
    excerpt:
      "A binge chain is built in the outro, not the playlist. Give viewers a reason the next video answers the question this one just raised right away.",
    date: "2025-03-09",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Workflow,
    content: [
      {
        paragraphs: [
          "Session watch time is the metric most creators ignore and the one that decides how far the algorithm pushes a channel. It counts how long a viewer stays on YouTube after your video ends. The outro is where that session is either extended or closed.",
          "A playlist can suggest the next video, but it cannot give a reason. The outro is the only place you can explain why the next video matters to the person who just watched this one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Design a chain, not a catalog.",
          "End each video by naming the specific next video.",
          "Keep the link to one sentence, after the payoff.",
          "Order the playlist to match the chain, not the upload dates.",
        ]
      },
      {
        heading: "The chain, not the catalog",
        paragraphs: [
          "A binge chain is a sequence, not a folder. Order matters. If video one raises a question and video two answers it, the pair performs better than either alone, as long as the viewer knows the order.",
          "Build the sequence before you publish. Decide what question each video opens and which one closes it. Then the outro has a job: point at the exact video that closes the loop this one opened.",
          "The most common mistake is linking by popularity. The most-viewed video is not the next step in a thought. It is a different thought that happened to spread.",
        ],
      },
      {
        quote:
          "Playlists organize your videos. Outros connect them. Only one of those keeps a viewer in the session.",
      },
      {
        heading: "Writing the chain link",
        paragraphs: [
          "The link is one sentence. Name the question this video leaves open, then name the video that answers it. Something like: we covered what to cut, but choosing the order is the part that trips most people up, and that is the next video.",
          "Make the link honest. If the next video does not actually continue the thought, viewers feel the bait and the trust drops. A forced link is worse than no link at all.",
          "Read the link out loud. If it sounds like an ad for another video, rewrite it until it sounds like a continuation.",
        ],
      },
      {
        heading: "Building a chain that holds",
        bullets: [
          "Map questions and answers across three to five videos before publishing any of them.",
          "End each video by naming the specific next video, not the channel.",
          "Keep the link to one sentence and place it after the payoff, never before.",
          "Check that the recommended video's opening answers the promise the outro made.",
          "Reorder the playlist so the sequence matches the chain, not the upload dates.",
        ],
      },
      {
        paragraphs: [
          "Pair the spoken link with a matching card and end screen, so the visual and audio point at the same video. A mismatch splits the click. When they agree, the next video starts before the viewer decides to look for one.",
          "Do not chain everything. Some videos are standalone. Forcing a sequel onto a topic that has no next step dilutes both videos.",
          "The reward compounds. A viewer who watches two videos in a session is far more likely to return than one who watched a single video, even if each video is the same length. The chain is doing that work, and it lives in the last sentence.",
        ],
      },
      {
        paragraphs: [
          "Start with the two videos closest in topic and link them properly. Test session duration before and after. If the chain holds, extend it. Most channels already have the raw material for a chain. They just never built the links.",
          "Sequels outperform one-offs because they borrow trust the first video already earned. The outro is where you spend it.",
        ],
      },
    ],
  },
  {
    slug: "retention2-loop-closure-trust",
    title: "Close Every Loop Before the End or Trust Leaks Out",
    excerpt:
      "Promises you never pay off cost more trust than a weak ending does. Every unclosed loop teaches viewers to stop believing the next one you make.",
    date: "2025-06-17",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "An open loop is a promise. You pose a question, tease a result, or hint at a turn, and the viewer agrees to keep watching in exchange for the payoff. When the video ends without that payoff, the exchange broke.",
          "One broken promise is survivable. A pattern of them changes how viewers watch everything else you make. They stop extending the trust that keeps them past the hook.",
          "The effect is slow, so it is easy to miss. Viewers rarely leave in the middle of a broken promise. They finish, they feel vaguely let down, and they are less likely to click the next one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "List every question the first minute promises.",
          "Mark each one closed, deferred with a destination, or forgotten.",
          "Fix the intro loop first; it is the loudest promise.",
          "Cut any tease you have no plan to pay off.",
        ]
      },
      {
        heading: "The loop ledger",
        paragraphs: [
          "Before you record, list every question the script raises. Then mark each one as closed, deferred, or forgotten. A deferred loop is fine if you say when it closes and then close it. A forgotten loop is the one that costs you.",
          "Most forgotten loops hide in the intro. Creators tease the biggest question in the first ten seconds to earn the click, then get absorbed in the middle and never return to it. The viewer remembers. The graph at the end shows it.",
          "Keep the ledger visible while you edit. It is far easier to spot a missing payoff in a list than in a script you have read twenty times.",
        ],
      },
      {
        quote:
          "Trust is not a feeling you build with a good video. It is a balance you keep every time you say you will show something and then actually show it.",
      },
      {
        heading: "Closing loops on purpose",
        paragraphs: [
          "Give every loop an explicit close. If the answer is in this video, land it clearly and let the viewer feel the click. If it belongs in another video, say so and name that video in the outro. The worst outcome is ambiguity, where the viewer is not sure whether they missed it or you did.",
          "You can also close loops early. If a question gets answered before the viewer expected, use that freed attention to open the next one. Closure and curiosity can pass the baton in a single sentence.",
        ],
      },
      {
        heading: "A loop audit you can run in ten minutes",
        bullets: [
          "List every question the first minute promises.",
          "Mark each one closed, deferred with a destination, or forgotten.",
          "Fix the intro loop first, since it is the loudest promise you make.",
          "If you deferred something, name the video that resolves it.",
          "Cut any tease you have no plan to pay off.",
        ],
      },
      {
        paragraphs: [
          "There is a second kind of loop that matters: the emotional one. A video that opens on a person's frustration should close on what changed for them. Answering the factual question is not enough if the feeling is left hanging. Viewers track both.",
          "I started marking emotional loops with a different color in the outline. It made the gaps obvious.",
          "When you close both kinds, the ending feels earned rather than assembled. You can end on a quiet line because the viewer already got what they came for.",
        ],
      },
      {
        paragraphs: [
          "Read your intro and outro back to back. Every promise in the first should have an answer or a named destination in the last. If one does not, you have found the leak, and it is usually a single sentence to patch.",
          "A channel with a reputation for paying off its promises can afford a slower start. The audience is not just watching one video. They are banking on a pattern.",
        ],
      },
    ],
  },
  {
    slug: "retention2-abrupt-ending-peak",
    title: "Why You Should End on the Peak, Not the Summary",
    excerpt:
      "The summary tucked after your best moment is where viewers leave. End on the peak and let the last strong beat be the last thing they will hear.",
    date: "2025-09-25",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["pacing", "structure"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "The strongest moment in your video is almost never the last one. It is the reveal, the reversal, the result that lands, and it usually arrives with a minute or two of recap still to go. Everything after the peak is downhill, and the viewer feels it.",
          "End at the peak, or one line past it. The recap you were taught to include is where attention drains fastest, because nothing new is happening and the viewer already knows the answer.",
          "I used to think the recap made the video feel finished. What it actually did was give the viewer a soft place to stop paying attention.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Summaries are for the writer, not the viewer.",
          "Cut to the peak instead of recapping it.",
          "If the energy drops before the words stop, you ran past the peak.",
          "Do not let the end screen follow two sentences after the best moment.",
        ]
      },
      {
        heading: "Summaries are for the writer",
        paragraphs: [
          "Recaps exist because the writer worries the viewer did not follow. That worry is mostly misplaced. A viewer who stayed to minute nine understood the video. Restating it gives them a stretch with no new information, which is the precise condition that sends a hand toward the phone.",
          "There is one case for a recap: a dense, technical video where steps must be stable before the next one. Even then, the recap belongs in the middle, as a checkpoint, not tacked onto the end.",
        ],
      },
      {
        quote:
          "Endings are not summaries. An ending is the last new thing the viewer gets to feel before the video closes.",
      },
      {
        heading: "How to cut to the peak",
        paragraphs: [
          "Find the sentence that delivers the main change. Everything after it is suspect. Read those trailing lines and mark the ones that add a new thought versus the ones that restate. Keep the new thought, cut the rest.",
          "Then write a single closing line. Not a recap. A pointer, a callback, or a short reflection that lands the feeling. One line is usually enough when the beat before it did real work.",
          "Read the last three lines without the ones before them. If they still make sense as an ending, you have kept too much. They should depend on the beat that precedes them.",
        ],
      },
      {
        heading: "Signs your ending runs past the peak",
        bullets: [
          "You can summarize the last paragraph in fewer words than it takes to read.",
          "The final lines use phrases like as you can see or in the end.",
          "The energy of the delivery drops before the words stop.",
          "The end screen appears two sentences after the best moment.",
        ],
      },
      {
        paragraphs: [
          "Test the cut on yourself. Watch the video once and note the second your attention first dips. If that second sits before the last line of narration, you have found the true ending. Everything after it is optional, and most of it is not worth keeping.",
          "Some creators resist this because ending abruptly feels incomplete, like stopping mid-sentence. It only feels that way to the person who wrote it. To the viewer, a sharp ending reads as confidence.",
          "The exception is a video that ends on a question or an invitation. There the last line is the point, and it should stay.",
        ],
      },
      {
        paragraphs: [
          "Try it on a short video first, where the stakes are low. Cut the final thirty seconds down to one line and publish. Most people report no drop in comments and a small lift in how many watch another. The peak was doing the work all along.",
          "The abrupt ending is not rude. It is the sound of a creator who trusted the audience to be paying attention. Most of the time, they were.",
        ],
      },
    ],
  },
  {
    slug: "retention2-subscribe-ask-timing",
    title: "When to Ask for the Subscribe and Why the End Is Too Late",
    excerpt:
      "Asking for the subscribe in the final seconds is asking too late. The best moment is the one where you have just delivered something worth more.",
    date: "2026-01-03",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["retention", "structure"],
    readTime: "6 min read",
    accent: "#f97316",
    icon: TrendingUp,
    content: [
      {
        paragraphs: [
          "Creators usually ask for the subscribe in the last ten seconds, right next to the end screen. That is the worst slot in the video. Attention is already leaving, and the ask reads as a toll on the way out.",
          "The best moment to ask is the one where you have just given the viewer something they can use. The value is fresh, and the request feels like a natural next step rather than a debt.",
          "Most channels run the same ask in the same slot forever because removing it feels risky. That is a habit, not a strategy.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The end is too late to ask for a subscribe.",
          "Place the ask within a few seconds of a clear payoff.",
          "Use one sentence and name the benefit to the viewer.",
          "Treat any end-screen ask as a reminder, not the main request.",
        ]
      },
      {
        heading: "Why the end fails",
        paragraphs: [
          "By the final seconds, the viewer has already decided whether they will stay. The subscribe prompt cannot change a decision that was made a minute earlier. It can only confirm it.",
          "There is a subtler problem. An ask placed at the very end is associated with the goodbye, so the viewer learns that subscribes are something creators beg for at the door. Put the ask next to a payoff and it associates with value instead.",
          "There is also a placement that helps: right after you deliver the thing the title promised. The viewer is satisfied, and satisfaction is the best condition for a request.",
        ],
      },
      {
        quote:
          "Ask for the subscribe when the viewer feels understood, not when the video is over.",
      },
      {
        heading: "Finding the value moment",
        paragraphs: [
          "The value moment is the beat where the viewer thinks yes, that is exactly the thing I needed. It usually sits in the middle third, right after a concrete win: a number that moved, or a fix they can copy. Ask right after that.",
          "Keep the ask short and specific. Tell them what the subscribe gets them, not that subscribing helps the channel. Subscribers who join for a reason stay. Subscribers who join from guilt leave quietly and drag down your next video's engagement.",
        ],
      },
      {
        heading: "Timing the ask",
        bullets: [
          "Place the ask within a few seconds of a clear payoff.",
          "Use one sentence. Long asks weaken both the ask and the moment.",
          "Name the specific benefit of subscribing, not the favor it does you.",
          "If you keep an end-screen ask, treat it as a reminder, not the main request.",
          "Skip the ask entirely on videos where it would break the tone.",
        ],
      },
      {
        paragraphs: [
          "Consider asking twice with different framing, once mid-video for the value crowd and once at the end for the people who stayed. The repetition is fine if the two asks are far apart and do different jobs. It is the back-to-back double ask that annoys people.",
          "Do not chase the first ten seconds. Asking before you have given anything is the one placement that reliably backfires.",
          "Track which placement moves subscribers over your next ten videos. Keep the ask that a creator would actually make to a friend, and drop the rest.",
        ],
      },
      {
        paragraphs: [
          "The honest test is whether you would say the ask out loud to someone who just told you the video helped. If it would sound strange, you have written a growth tactic, not a request. Move the ask to the value moment and say it like a person.",
          "The subscribe is not the goal of the video. It is a byproduct of a video that kept its promise at the right moment.",
        ],
      },
    ],
  },
  {
    slug: "retention2-end-card-copy",
    title: "How to Write End Card Copy That Reads at a Glance",
    excerpt:
      "End card copy gets less than two seconds of attention. Short, concrete text on the card beats a clever line that nobody has time to finish reading.",
    date: "2026-05-14",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "retention"],
    readTime: "5 min read",
    accent: "#f97316",
    icon: Type,
    content: [
      {
        paragraphs: [
          "End card copy is read in under two seconds, usually while the video is still playing and the viewer is deciding whether to leave. That budget rules out most of what creators write on cards. Clever loses to clear.",
          "The card has one job: make the next click feel obvious. Every word that does not do that job is taking attention from the words that do.",
          "Watch a video you have published and try to read your own end card at normal speed. Most creators cannot, and they wrote it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Write end card copy for the glance.",
          "Front-load the outcome in the first two words.",
          "Cap the card at six words and one idea.",
          "Use the same phrasing in narration and on the card.",
        ]
      },
      {
        heading: "Write for the glance",
        paragraphs: [
          "Assume the viewer sees three words before deciding. Put the payoff in those three. A card that says start here: the editing system beats a card that says you might also enjoy this video about editing, because only one of them survives a glance.",
          "Use concrete nouns and active verbs. Name the outcome. Life of a thumbnail beats our process. The specific thing beats the category.",
          "Numbers are the fastest proof you can put on a card. Five minutes, three steps, one line. A number gives the eye something to land on.",
        ],
      },
      {
        quote:
          "Nobody reads an end card. They recognize it. Write for recognition, not comprehension.",
      },
      {
        heading: "Structure of a card that works",
        paragraphs: [
          "Four short pieces, stacked or in a corner: a verb, the subject, one proof, and the face. Think watch, next: the retention test, two minutes. That is enough. The proof can be a number or a time.",
          "Match the card's voice to the video's voice. If the video is plain and direct, a card full of exclamation marks feels like a different channel. Consistency is how the card reads as a continuation rather than an ad.",
          "The verb is doing more work than the rest of the card. Watch, try, build, steal. Pick one and lead with it.",
        ],
      },
      {
        heading: "Card copy rules",
        bullets: [
          "Front-load the outcome. The first two words carry the click.",
          "Cap the card at six words unless it is a title you cannot shorten.",
          "One idea per card. Two cards with two ideas beat one card with two.",
          "Use the same phrasing in the narration and on the card.",
          "Remove any text that repeats the video you just finished.",
        ],
      },
      {
        paragraphs: [
          "Contrast matters as much as wording. Text over a busy frame disappears. A dark or blurred patch behind the words buys you a readable card for the price of a few seconds in the editor. White text on a bright thumbnail is the most common way a good line goes unread.",
          "Check it on a phone. Most of your viewers watch there, and a card that reads fine on a monitor is often too small on a screen held at arm's length. If you have to squint, rewrite or enlarge.",
        ],
      },
      {
        paragraphs: [
          "Write three versions of the same card and rotate them. The wording is testable, and the winner is usually the one that names the outcome fastest. Clever lines feel good to write and lose to plain ones almost every time.",
          "If a card needs a second glance to make sense, it has already failed. The glance was all you had.",
        ],
      },
    ],
  },
  {
    slug: "retention2-closing-line",
    title: "How to Write the Last Line of a Video People Remember",
    excerpt:
      "The last line is the one viewers quote back to you. It should call back to the opening, land a feeling, and then stop before it explains itself.",
    date: "2026-09-30",
    author: { name: "GoScript Team", role: "Editorial" },
    tags: ["structure", "retention"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: PenLine,
    content: [
      {
        paragraphs: [
          "The last line of a video does the same work as the first. The first line earns the watch; the last line decides what the viewer remembers and whether they come back. Most creators write one with care and the other as an afterthought.",
          "A strong closing line calls back to the opening, lands a feeling, and stops. It does not explain itself, because explanation is the enemy of a line that is meant to linger.",
          "I keep a note titled last lines and add any sentence that gave me chills in someone else's video. Most of them are under twelve words.",
        ],
      },
      {
        heading: "Callback beats summary",
        paragraphs: [
          "The most reliable shape is the callback. You opened with an image, a number, or a phrase. Bring it back at the end, changed by what the video covered. The repetition creates a small sense of completion without a single word of recap.",
          "A callback works because the viewer already carries the first line. You are not introducing anything new. You are closing a circuit they did not realize was open.",
          "The callback does not need to be word for word. A repeated image or a return to the same number is enough to make the ear feel the circle close.",
        ],
      },
      {
        quote:
          "A good last line sounds inevitable. The trick is that it only feels inevitable once the viewer has heard everything before it.",
      },
      {
        heading: "Make it short and land it",
        paragraphs: [
          "Short lines hit harder than long ones. Strip the last sentence until only the turn remains. If the line still works after you delete a clause, delete another. The reader's ear rewards compression.",
          "Then deliver it. A great closing line said at the same pace and volume as the paragraph before it will vanish. A small drop in pace, or a beat of silence before the final clause, tells the viewer to hold on to it.",
          "Watch your own delivery at the end of a long shooting day. Tired reads flatten the last line, and a flat closing line undoes ten good minutes.",
        ],
      },
      {
        heading: "Testing a closing line",
        bullets: [
          "Read it right after the opening line. Do they rhyme in idea?",
          "Say it without the preceding paragraph. If it cannot stand, it is explaining rather than landing.",
          "Check for recap verbs. Cut any line that starts with so, in the end, or as we saw.",
          "Record it once with a pause before the final clause and once without. Keep the one that feels like a decision.",
          "If you can swap a synonym and lose nothing, the line is not specific enough.",
        ],
      },
      {
        paragraphs: [
          "Specific lines outlast clever ones. The exact number, the exact object, the exact moment from the video will stick to a viewer longer than a general truth. Beware the closing line that could end any video on your channel. It is probably too broad to mean anything.",
          "The same line should not end every video, either. A signature sign-off can build a brand, but it also tells the viewer the video is over the instant they hear it. If you want the ending to keep them, vary it.",
        ],
      },
      {
        paragraphs: [
          "Write the last line in the same sitting as the hook, when the whole arc is still in your head. Then read both aloud and listen for the echo. When they answer each other, you have an ending that closes the video and opens the next one.",
          "A closing line is not the place to introduce a new idea. If a new thought arrives, it is a new video, and it belongs in the outro as a pointer.",
        ],
      },
    ],
  },
];
