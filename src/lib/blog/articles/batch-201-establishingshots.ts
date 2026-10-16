import {
  Eye,
  Target,
  Map,
  Compass,
  Repeat,
  Film,
  Users,
  Scissors,
  Waves,
  Layers,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch201: BlogPost[] = [
  {
    slug: "establishing-shot-grounds-scene",
    title: "How an Establishing Shot Grounds a Scene for Viewers",
    excerpt:
      "An establishing shot grounds a scene by telling viewers where they are before the story moves. Here is why that first wide frame earns its place.",
    date: "2035-02-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "An establishing shot grounds a scene by showing viewers where they are before the story asks them to care about anything else. It answers the first question an audience asks without knowing they asked it: where is this happening?",
          "Skip that answer and you spend the next minute rebuilding trust. Give it early and every line of dialogue lands on solid ground.",
          "The shot is not a formality. It is the first piece of information you hand over, and it quietly sets how the viewer will read everything that follows.",
        ],
      },
      {
        heading: "The brain wants a map",
        paragraphs: [
          "When a viewer cannot place a scene, part of their attention stays on the problem of orientation. They are not worried, exactly, but they are unsettled, and that quiet unease pulls focus from what you actually want them to feel.",
          "A wide frame resolves the question in a second or two. Once the space is fixed in the viewer's head, they can relax and follow the people inside it. That is the whole job, and it is smaller than most people assume.",
          "You do not need a sweeping drone move or a helicopter pass over a city. You need enough of the surroundings to say clearly: this is a small kitchen, this is a rooftop at dusk, this is a crowded train platform.",
        ],
      },
      {
        quote:
          "Orientation is not a warmup for the scene. It is part of the scene, and the audience feels its absence long before they could name it.",
      },
      {
        heading: "Place is information, not decoration",
        paragraphs: [
          "It is tempting to treat the opening wide as scenery, a pretty frame you cut away from as fast as possible. That reading misses what the shot carries. A location tells the viewer about money, mood, and stakes before a single character speaks.",
          "A cramped apartment and an open field make the same conversation feel like two different stories. The establishing shot is where you make that choice visible.",
          "Pick the frame for what it says, not for how it looks in a thumbnail. If the location is doing narrative work, let it.",
        ],
      },
      {
        heading: "How long it should hold",
        paragraphs: [
          "Long enough to read the space, short enough to avoid boredom. For most videos that means two to four seconds. Fast-cut content can get away with less, and a slow documentary can hold much longer.",
          "Watch the shot yourself and count what a stranger needs. The moment you understand the place is roughly the moment to cut. Anything past that is you admiring your own footage.",
          "When in doubt, cut a beat earlier than feels comfortable. A wide that overstays its welcome starts to feel like a screensaver, and the scene has to work harder to win attention back.",
        ],
      },
      {
        heading: "Why it pays off later",
        paragraphs: [
          "A grounded opening buys you freedom in the rest of the scene. Once the space is clear, you can cut to closeups, jump in time, or move people around without re-explaining where they are.",
          "That freedom is easy to take for granted until you watch an edit where nobody bothered. Every new beat starts from zero, and the viewer spends the whole video catching up instead of feeling.",
          "Spend two seconds on the place at the top and you save ten elsewhere. It is one of the cheapest trades in editing.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "An establishing shot answers where before it answers why.",
          "Orientation frees attention for the story that follows.",
          "The frame should carry meaning about place, money, and mood.",
          "Two to four seconds covers most scenes.",
          "Cut when the viewer understands the space, not when you get bored.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-what-to-show-first",
    title: "Choosing What to Show First in Your Opening Shot",
    excerpt:
      "Choosing what to show first in an establishing shot shapes how viewers read the whole scene. Here is a simple way to decide the frame that leads.",
    date: "2035-02-03",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Choosing what to show first means deciding which single fact about the location matters most. The frame you open on becomes the viewer's anchor, so pick the detail that pays off later.",
          "Most editors default to the widest possible view. That is safe, but safe is not the same as right.",
          "The opening frame is a statement of priorities. It tells the audience what to notice, and they will carry that instruction through the rest of the scene.",
        ],
      },
      {
        heading: "Lead with the detail that pays off",
        paragraphs: [
          "Before you pick a frame, reread the scene and ask what the audience needs to remember. If a character returns to a red door at the end, open on the red door. If the story turns on bad weather, let the weather lead.",
          "This turns the establishing shot from a generic map into a planted clue. The viewer absorbs the information without noticing they were set up.",
          "A wide frame that shows everything often says nothing in particular. A tighter frame that isolates one meaningful element says more with less screen time.",
        ],
      },
      {
        heading: "Wide first or subject first",
        paragraphs: [
          "There are two common orders. Wide first gives the viewer the room, then moves to the person. Subject first drops them next to a character and fills in the place around them.",
          "Wide first suits calm, observational work. Subject first suits urgency, because it puts the audience inside the action before they have time to think.",
          "Neither order is better. The choice should match the energy of the scene you are about to play.",
        ],
      },
      {
        quote:
          "The first frame is a promise about what the scene will be about. Break that promise and the audience feels cheated, even if they cannot say why.",
      },
      {
        heading: "Let context fill the gap",
        paragraphs: [
          "You rarely have to show everything for the viewer to assume a great deal. A narrow alley implies the street behind it. A lit doorway implies a room you never film.",
          "This is why leaning on one strong detail works. The audience builds the surrounding world from the fragment you chose, and their version is often more vivid than anything you could have captured.",
          "Give them the key and trust them with the lock.",
        ],
      },
      {
        heading: "Test it in the edit",
        paragraphs: [
          "You cannot always know the right opening from a shot list alone. Cut two versions, one that leads wide and one that leads close, then watch both without pausing.",
          "Whichever version makes you lean in is the one. Trust that small physical reaction over any rule you read online.",
          "If both feel flat, the problem is probably the scene, not the frame. Fix the story before you fix the opening.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The opening frame becomes the viewer's anchor for the scene.",
          "Lead with the detail the story pays off later.",
          "Wide first is calm. Subject first is urgent.",
          "A frame that shows everything can say nothing.",
          "Cut two versions and trust the one that makes you lean in.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-wide-shots-set-place",
    title: "Wide Shots That Set the Place Before the Action",
    excerpt:
      "A wide shot sets the place for a scene by giving viewers the lay of the land. Learn how to frame a wide that reads clearly on any screen size.",
    date: "2035-02-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "A wide shot sets the place by pulling back far enough to show the whole space and how its parts relate. It works because viewers read a room faster when they can see the exits, the furniture, and the light in one glance.",
          "The mistake is treating wide as automatically informative. A wide frame with no clear subject is just a lot of empty screen.",
          "Wide is a distance, not a guarantee. What you put inside that distance decides whether the shot does any work.",
        ],
      },
      {
        heading: "Give the wide a focal point",
        paragraphs: [
          "Even a wide frame needs somewhere for the eye to rest. That can be a person, a lit window, a path, or a doorway. Without a point of interest, the viewer's gaze wanders and the shot reads as random.",
          "Place that focal point using a natural leading line or a balanced composition. Roads, hallways, and shorelines all pull the eye inward, which does half the work of telling the viewer where to look.",
          "Then block your subject so they sit near that anchor. A person standing in the middle of a featureless plaza disappears. A person framed against the one bright doorway reads instantly.",
        ],
      },
      {
        heading: "Mind the small screen",
        paragraphs: [
          "Most people watch vertical or phone-sized these days, so a wide shot built for a cinema screen can lose its subject entirely on a phone. Check your frame at thumbnail size before you commit.",
          "If the important part vanishes when shrunk, the shot is too wide for how it will be seen. Move closer or recompose until the main element survives the smaller canvas.",
          "This is the most common reason a beautiful wide fails online. It was composed for a size almost nobody was watching on.",
        ],
      },
      {
        quote:
          "A wide angle is not the same as a wide shot. One changes the lens. The other changes the story the viewer understands.",
      },
      {
        heading: "Let the light place the scene",
        paragraphs: [
          "Light does more locating work than any sign on a wall. Hard midday sun says one kind of place and mood, while soft overcast says another.",
          "Read the light before you set the tripod. If it is flat, wait, move, or build the frame around a better-lit patch of the scene.",
          "A wide with no light direction looks like surveillance footage. A wide with considered light looks like a decision.",
        ],
      },
      {
        heading: "Keep horizons and verticals honest",
        paragraphs: [
          "A tilted horizon in a wide shot is hard to miss and harder to forgive. Level the camera, and check vertical lines like door frames and poles, which bend easily with wide lenses.",
          "Small corrections on set save you from losing part of the frame to a crop in the edit. Do the boring work early.",
          "You can fix a small tilt in post, but you lose resolution and gain stress. It is faster to get it right while standing there.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A wide shot should show the space and its parts at once.",
          "Give the frame a clear focal point or the eye wanders.",
          "Leading lines and thirds direct attention inside a wide frame.",
          "Test the frame at phone size before you trust it.",
          "Level horizons and verticals while you can still fix them.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-location-fast",
    title: "How to Establish a Location Quickly in Any Video",
    excerpt:
      "You can establish a location fast with a few deliberate shots instead of a long tour. Here is a quick method that respects your runtime.",
    date: "2035-02-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "You establish a location quickly by giving the viewer three things in a short burst: the whole space, one telling detail, and a sense of who is moving through it. None of those needs more than a second or two.",
          "A slow, thorough tour of a place is a travel documentary. For everything else, speed is the point.",
          "Fast does not mean careless. It means you know exactly which shots carry the load and you skip the ones that do not.",
        ],
      },
      {
        heading: "Build a small establishing kit",
        paragraphs: [
          "A repeatable set of shots lets you cover any location in minutes. Grab one wide that shows the space end to end. Grab one medium of activity, like people walking or a door opening. Grab one close detail that only exists here.",
          "Those three shots stacked in the edit read as a full place even though you filmed for barely a minute. The viewer fills in the rest with their imagination, which is faster and cheaper than filming every corner.",
          "Label these clips on set so you can find them without scrubbing. A minute saved hunting footage is a minute you keep in the edit.",
        ],
      },
      {
        heading: "Use motion to imply more",
        paragraphs: [
          "A short pan or a walk covering ten paces can suggest a much larger space than you actually shot. Movement implies there is more to see just past the frame edge.",
          "Keep the movement slow and intentional. A wobbling pan reads as a mistake, while a steady reveal reads as a decision.",
          "You can also let someone walk through the frame, which signals that the place is lived in and busy without a single word of narration.",
        ],
      },
      {
        quote:
          "You do not need to show the whole location. You need to show enough that the viewer stops wondering about it.",
      },
      {
        heading: "Cover the entrances",
        paragraphs: [
          "One detail worth prioritising is how people get in and out. Doors, stairs, and gates tell the viewer the geography and set up future movement without extra explanation.",
          "When a character later walks through that same entrance, the earlier shot has already done the explaining. That is continuity doing quiet work.",
          "Entrances also give you natural cut points. A door closing is an ending, and a door opening is a beginning, both handed to you by the location itself.",
        ],
      },
      {
        heading: "Trust silence and sound",
        paragraphs: [
          "You can establish a place with almost no visual width if the sound sells it. A train announcement, rain on a window, or distant traffic locates the scene in the viewer's ear.",
          "Record a little room tone wherever you shoot. Thirty seconds of clean ambient sound is often more useful in the edit than an extra camera angle.",
          "Picture and sound working together establish a location faster than either one alone.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Three shots cover most locations: wide, activity, detail.",
          "A short steady pan can imply space you never filmed.",
          "Cover entrances so later movement needs no explanation.",
          "Ambient sound can locate a scene without a wide frame.",
          "Showing enough beats showing everything.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-reuse-footage",
    title: "Reusing Establishing Footage Across Your Video Series",
    excerpt:
      "Reusing establishing footage lets a series stay consistent without reshooting the same location. Here is how to shoot once and use it for months.",
    date: "2035-02-09",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Reusing establishing footage means shooting a location once and pulling those clips into future episodes. It keeps a series visually consistent and saves you a trip every time the same place appears.",
          "The catch is that repeated footage gets noticed when viewers have seen it too often. Variety within the reuse is what keeps it invisible.",
          "Handled well, reuse feels like a signature. Handled badly, it feels like a corner cut.",
        ],
      },
      {
        heading: "Shoot once, cover many angles",
        paragraphs: [
          "When you have a location you know you will return to, spend extra time there the first visit. Capture several wide angles, a few details, and a couple of moving shots at different times of day if you can.",
          "That upfront effort buys months of use. Later, when the episode needs that place, you have a choice of frames instead of one shot you have already leaned on too hard.",
          "Treat it as stock footage you shot yourself, shot exactly for your story and your colour.",
        ],
      },
      {
        heading: "Match the reuse to the moment",
        paragraphs: [
          "A clip of a quiet morning street will feel wrong under a tense night scene. Keep notes on the light, the weather, and the mood of each stored shot so you grab the right one.",
          "Then vary the treatment. A different colour grade, a trim to a different length, or a slight crop can make the same clip read as a fresh image.",
          "A little variation goes a long way. Viewers notice repetition of the exact same frame, not repetition of a location.",
        ],
      },
      {
        quote:
          "Reuse is not laziness. It is continuity, and audiences reward a world that looks the same every time they visit it.",
      },
      {
        heading: "Know when to retire a clip",
        paragraphs: [
          "If you catch yourself reaching for the same establishing shot four episodes in a row, that is a signal to go back and film something new. Familiar is fine. Stale is not.",
          "Keep a simple list of what you have used and when. A minute of bookkeeping saves you from the slow creep of repetition that viewers start to feel without naming.",
          "Retiring a clip does not mean deleting it. Move it to an archive so it stays available for a callback months later.",
        ],
      },
      {
        heading: "Reuse builds a world",
        paragraphs: [
          "Series that feel like places, not just episodes, tend to reuse their establishing shots on purpose. The same street, the same desk, the same coffee shop becomes shorthand the audience learns to read.",
          "That shorthand is worth protecting. Over time a single frame can carry more meaning than a fresh location, because the viewer already has a history with it.",
          "Consistency is a slow asset, and establishing shots are where you invest in it.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One deliberate shoot can cover a location for months.",
          "Grab several angles and moods on the first visit.",
          "Note the light and weather so you pick the right clip.",
          "Grade and crop reused footage to keep it looking fresh.",
          "Retire a clip before viewers notice the repetition.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-phone",
    title: "Shooting Establishing Shots on a Phone Without Gear",
    excerpt:
      "You can shoot establishing shots on a phone with no extra gear by controlling light and steadying your hands. A few habits make phone footage hold up.",
    date: "2035-02-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "You can shoot establishing shots on a phone by treating light and stability as your whole toolkit. A modern phone sensor is more than good enough for a wide, so the limits are almost always the operator.",
          "That is good news. It means the fixes are habits, not purchases.",
          "Anyone can buy a phone. The gap is in how you stand, where you point, and how much you let the camera drift.",
        ],
      },
      {
        heading: "Find your light first",
        paragraphs: [
          "Phone sensors fall apart in mixed or dim light, so spend your first minutes finding a frame with one clean light source. Face the brighter side of the scene, and avoid pointing at a window with a dark room behind it.",
          "Morning and late afternoon give you soft, even light that flatters almost any location. Middle of the day is harsh and gives you ugly shadows you cannot fix later.",
          "If you must shoot at night, prop the phone against something solid and let the city lights do the work. Grain you can live with. Motion blur you cannot.",
        ],
      },
      {
        heading: "Steady beats smooth",
        paragraphs: [
          "Do not chase a gimbal move with your hands. Lock the phone down or brace your elbows against your ribs, then hold the frame still.",
          "A still wide shot reads as professional. A shaky one reads as an accident, no matter how nice the place looks.",
          "If you want movement, use your feet and walk slowly, keeping the phone level. Slower than feels natural is the right speed.",
        ],
      },
      {
        quote:
          "The phone is not the weak link. Light and steadiness decide whether a phone wide looks deliberate or disposable.",
      },
      {
        heading: "Shoot flat and fix it later",
        paragraphs: [
          "Avoid the built-in filters and heavy contrast. Flat, neutral footage grades better in the app or editor you use after the shoot.",
          "Lock exposure and focus by tapping and holding the screen so the look does not shift mid-clip. Then leave the frame alone and let the scene move.",
          "Turn on grid lines so your horizontals stay level. A crooked phone wide is the most common giveaway that nobody was watching the edges.",
        ],
      },
      {
        heading: "Work within the phone's limits",
        paragraphs: [
          "Do not zoom with your fingers. Digital zoom destroys detail on a phone, so move your feet instead and keep the image sharp.",
          "Keep clips short. A five-second wide is plenty to establish a place, and a shorter clip is easier to stabilise and easier to grade.",
          "The phone rewards restraint. The more you ask it to do, the more it shows you where it struggles.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One clean light source fixes most phone problems.",
          "Soft morning and evening light flatters any location.",
          "Lock the phone down instead of chasing smooth movement.",
          "Walk slowly if you need the frame to move.",
          "Shoot flat, lock exposure, and avoid digital zoom.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-vlogs",
    title: "Establishing Shots for Vlogs That Set the Scene Fast",
    excerpt:
      "Establishing shots for vlogs do the same job as in film, only faster. Learn how to open a vlog episode so viewers know where you are in seconds.",
    date: "2035-02-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "Establishing shots for vlogs work exactly like they do in film, only the window is tighter. You have a few seconds to tell viewers where you are before they decide to keep watching or scroll on.",
          "The good news is that vlogs rarely need elaborate coverage. One clear location shot can carry a whole episode.",
          "You also have an advantage film does not: the place is where you already are, so the material is sitting there for free.",
        ],
      },
      {
        heading: "Open on the place, then the face",
        paragraphs: [
          "A reliable pattern is one wide shot of the setting, then cut to you talking. The wide answers where, and your face answers who. Two shots and the audience is oriented.",
          "Film the wide on your way in. You are already there, so ten seconds of filming before you start talking costs almost nothing and changes how the whole episode opens.",
          "If you film multiple days, grab a fresh location shot each time. It keeps the vlog feeling like it moves rather than sitting in one room.",
        ],
      },
      {
        heading: "Show the day in one frame",
        paragraphs: [
          "A vlog is often about a day, a trip, or a task. One shot of the setting can carry the theme if you pick the right detail. A packed suitcase, a full coffee shop, a trailhead sign all say a lot with no narration.",
          "Pick the detail that tells viewers what kind of episode this is. That is more useful than a beautiful but vague wide.",
          "The detail also gives your thumbnail somewhere to go. A strong establishing frame often becomes the image people click on.",
        ],
      },
      {
        quote:
          "In a vlog, the establishing shot is not setup. It is the first line of the story, and it has to earn the next minute.",
      },
      {
        heading: "Keep a fast intro honest",
        paragraphs: [
          "You do not need a long intro montage with music. A single location beat followed by you speaking is faster and feels less produced.",
          "Match the pace of your channel. High-energy vlogs cut the wide quicker, slower ones can hold. The shot length should sound like the way you talk.",
          "Honest also means real. Do not film a polished location shot that looks nothing like where you actually spent the day.",
        ],
      },
      {
        heading: "Reuse your own places",
        paragraphs: [
          "If your vlog returns to the same city, studio, or route, keep those establishing shots on file. Returning viewers get a small hit of recognition every time the familiar frame appears.",
          "That recognition builds a relationship over time. Your audience starts to know your world the way they know a friend's neighbourhood.",
          "Familiar places do not get boring when they are yours. They become part of the channel's identity.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Vlog openers have seconds, not minutes, to orient viewers.",
          "Pattern: wide of the place, then your face.",
          "Film the location shot on your way in.",
          "One telling detail can set the theme of the day.",
          "Match shot length to the pace of your talking.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-when-to-skip",
    title: "When to Skip the Establishing Shot in a Video",
    excerpt:
      "Knowing when to skip the establishing shot keeps a video moving and avoids wasted seconds. Sometimes dropping the wide is the stronger choice.",
    date: "2035-02-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Skip the establishing shot when the audience already knows the place, when the scene is a continuation, or when mystery is the point. A wide frame is a tool, and not every scene needs the same one.",
          "The rule is not that every scene opens wide. The rule is that the viewer should never feel lost on purpose unless you meant it.",
          "Most videos fail by adding too many wides, not too few. The wide is easy to reach for because it feels safe, and safe repeats get dull fast.",
        ],
      },
      {
        heading: "Continuing scenes do not need a reset",
        paragraphs: [
          "If you established a location in the previous scene and the next one happens in the same place, do not re-explain it. Repeating the wide is dead time.",
          "Save the reorientation for when you move somewhere new. Within the same room, cut straight to the people and trust the audience to keep up.",
          "This is where beginner edits drag. They open every scene wide because it feels tidy, and the result is a video that keeps restarting.",
        ],
      },
      {
        heading: "When mystery is the better choice",
        paragraphs: [
          "Sometimes confusion is the intended feeling. A horror beat or a surprise reveal can gain power from hiding the space until the character sees it too.",
          "In that case you open tight and hold the wide back until the reveal. Withhold the location on purpose, and the eventual wide hits much harder.",
          "Restraint is a technique, not a shortfall. Deciding not to show something is still a decision about the scene.",
        ],
      },
      {
        quote:
          "Reveal the place when the viewer needs it, not because a template says the scene starts wide.",
      },
      {
        heading: "When pace matters more than clarity",
        paragraphs: [
          "Some videos run on momentum, and a wide frame pumps the brakes. A fast montage, a rapid tutorial, or a punchy short may not survive the pause an establishing shot creates.",
          "In those formats, sound and text often locate the scene faster than a wide ever could. A title card or a spoken line does the job in less time.",
          "Ask what the scene loses without the wide. If the answer is nothing, cut it and keep moving.",
        ],
      },
      {
        heading: "Let the story decide",
        paragraphs: [
          "Run the scene in your head and ask whether the viewer knows where they are. If they do, skip the wide. If they do not and the feeling matters, add one.",
          "This keeps you from building a video out of openings and closings with nothing in the middle. Movement should feel continuous, not like a series of restarts.",
          "The best edits feel like the camera never stopped to explain itself. That effect comes from knowing exactly when explanation is unnecessary.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Skip the wide when the location is already known.",
          "Continuing scenes do not need a visual reset.",
          "Withholding the space can build a reveal.",
          "Fast formats often establish place with sound or text.",
          "Add a wide when the viewer is lost, not out of habit.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-match-weather-time",
    title: "Matching Weather and Time in Your Establishing Shot",
    excerpt:
      "Matching weather and time in your establishing shot keeps a scene believable. Mismatched light between the wide and closeups breaks the illusion fast.",
    date: "2035-02-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Matching weather and time means the establishing shot has to agree with the scene it opens. If the wide shows bright sun and the closeup has rainy grey light, the viewer feels the seam even if they never name it.",
          "Consistency is invisible when you get it right and jarring when you do not.",
          "This is one of the few places where the audience is stricter than the filmmaker. Weather is something everyone reads without effort, so they catch a mismatch immediately.",
        ],
      },
      {
        heading: "Shoot the wide and the scene together",
        paragraphs: [
          "The safest approach is to film the establishing shot back to back with the scene, on the same day and in the same light. Then there is nothing to match because nothing changed.",
          "This sounds obvious, but people plan the wide as a separate chore and shoot it days later. That is where mismatches creep in.",
          "If you must film separately, go back at the same hour and wait for similar conditions. Time of day matters as much as the forecast.",
        ],
      },
      {
        heading: "Keep a note on conditions",
        paragraphs: [
          "When you store establishing footage for reuse, write down the weather and the hour. A clip of an overcast afternoon will fight a scene shot in golden evening light.",
          "A short note like wet streets, low sun, or heavy cloud saves you from guessing weeks later when the clips look similar in a file browser.",
          "Notes are cheap and memory is not reliable. Assume you will forget the conditions and write them down anyway.",
        ],
      },
      {
        quote:
          "Weather is not background. It is continuity, and a viewer will spot a sunny wide headlining a rainy closeup in a heartbeat.",
      },
      {
        heading: "Plan around the golden hours",
        paragraphs: [
          "The two hours after sunrise and before sunset give you warm, soft light that is easy to match and flattering to almost any location.",
          "If a scene is important, schedule its establishing shot in that window. You will spend less time correcting colour and more time shooting.",
          "Midday is the hardest light to match because shadows are short and harsh, and they change fast as the sun moves.",
        ],
      },
      {
        heading: "Grading helps only so far",
        paragraphs: [
          "You can nudge colour to hide small differences in light. You cannot turn noon into night without the image going strange.",
          "So get the conditions right at the source. Grading is for polish, not for rescuing footage shot under the wrong sky.",
          "When you do grade, match the wide to the closeups first, then adjust the whole scene together. Fixing one clip in isolation creates a new mismatch somewhere else.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Film the wide and the scene in the same light when possible.",
          "If you shoot separately, return at the same hour.",
          "Note weather and time when you archive establishing footage.",
          "Big light differences cannot be graded away.",
          "Consistency reads as believable; mismatches read as mistakes.",
        ],
      },
    ],
  },
  {
    slug: "establishing-shot-library",
    title: "Building a Library of Establishing Shots Over Time",
    excerpt:
      "Building a library of establishing shots means you never scramble for a location again. A simple habit turns scattered clips into a reusable archive.",
    date: "2035-02-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "film"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Building a library of establishing shots means filming locations when you pass them, not only when a project needs them. Over a year the habit leaves you with a deep archive of places you can pull from at any time.",
          "The work is small and the payoff is large, which is why almost nobody does it.",
          "A library turns a scramble into a search. Instead of hunting for a location on a deadline, you open a folder and pick from material you already shot.",
        ],
      },
      {
        heading: "Shoot on the way, not on demand",
        paragraphs: [
          "Keep your camera or phone ready whenever you travel or commute. When a street, shop, or view catches your eye, grab twenty seconds of it.",
          "You are not filming for a specific project. You are filming the raw material that future projects will need.",
          "Most of these clips will sit unused for months. Then one edit needs a rainy rooftop or a quiet alley, and you already have it in the can.",
        ],
      },
      {
        heading: "Name and sort as you go",
        paragraphs: [
          "A library only helps if you can find things in it. Use a naming pattern that puts location and conditions first, so a search returns what you want.",
          "Group clips by place and by mood. Light and weather are the filters you will reach for most when you are cutting a scene and need something that fits.",
          "Spend two minutes sorting after each shoot. It costs almost nothing now and saves an hour later.",
        ],
      },
      {
        quote:
          "A good library is not a folder of pretty clips. It is a set of answers to questions you have not asked yet.",
      },
      {
        heading: "Grow it deliberately",
        paragraphs: [
          "If your library has obvious gaps, go fill them on purpose. No night shots, no interiors, no city scenes, and you will feel the hole the next time a project needs one.",
          "Keep a running list of the kinds of places you are short on. Treat that list like a shopping list whenever you are out with a camera.",
          "A few dedicated outings can round out a library fast, especially if you shoot the same area in different light.",
        ],
      },
      {
        heading: "Prune without mercy",
        paragraphs: [
          "Libraries rot when everything gets kept. Delete shaky, badly exposed, or duplicated clips as you go.",
          "A smaller set of strong clips is faster to search and easier to trust. If a clip has never been used in a year and never tempted you, it can go.",
          "The goal is not volume. The goal is a folder you can open mid-edit and trust to hold something useful.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Film locations when you pass them, not only for a job.",
          "Twenty seconds on the move builds months of material.",
          "Name clips by location, light, and weather.",
          "Fill gaps on purpose with short dedicated outings.",
          "Delete weak clips so the library stays usable.",
        ],
      },
    ],
  },
];
