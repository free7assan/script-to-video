import {
  BarChart3,
  Compass,
  Eye,
  Film,
  Heart,
  Layers,
  Scissors,
  Target,
  Users,
  Zap,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch202: BlogPost[] = [
  {
    slug: "close-up-what-it-tells-the-viewer",
    title: "What a Close-Up Shot Tells the Viewer Every Time",
    excerpt:
      "A close-up shot decides what the viewer should feel in that second. Here is how framing, distance, and timing change the meaning of a tight shot.",
    date: "2035-03-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "A close-up shot answers one question for the viewer: what deserves my attention right now. When you push in, you stop describing a scene and start pointing at a single thing inside it.",
          "That choice carries weight. A wide shot says where we are, then a close-up says what matters, and the cut between them is where your video gets a point of view.",
        ],
      },
      {
        heading: "Distance is an argument",
        paragraphs: [
          "Every step closer changes the claim you are making. A medium shot shows a person and the room around them, while a close-up removes the room and leaves only the face, the hand, or the object.",
          "When you cut to a tight frame, you are telling the viewer that everything else can wait. If that is not true, the shot reads as a detour.",
          "A cooking video shows this well. The host talks in a medium shot, then the knife and the onion fill the frame, and nobody has to say the chopping is the important part.",
        ],
      },
      {
        heading: "What tight frames hide",
        paragraphs: [
          "A close-up strips context, and that stripping is the point. You trade information about the setting for intensity about one subject.",
          "That trade can mislead. Show only a person's eyes and the viewer reads confidence, grief, or boredom from almost nothing, because the frame forbids any other meaning.",
          "Use that on purpose. Tight shots belong to the moment that matters, not to every moment, or the viewer stops noticing when you lean in.",
        ],
      },
      {
        quote:
          "A close-up does not add emotion. It removes everything else so the emotion that was already there has nowhere to hide.",
      },
      {
        heading: "Frame the subject, not the equipment",
        paragraphs: [
          "Beginners frame for the camera instead of the viewer. They leave headroom because it feels safe, or they center a face because a rule told them to, and the result reads as hesitant.",
          "Fill the frame with the thing you want remembered. If the eyes are the point, let them sit near the top third and give the chin room to breathe.",
          "The background still counts at this distance. A bright window behind a face pulls the eye away from the person, so fix the light before you fix the composition.",
        ],
      },
      {
        heading: "When the close-up is the whole video",
        paragraphs: [
          "Some videos live almost entirely in tight frames, and that can work when the subject is texture, craft, or a pair of hands. A woodworking channel can spend eight minutes on grain and glue and never lose the viewer.",
          "The risk is fatigue. Without a wider shot to reset the eye, the viewer loses a sense of place and the tight frames blur into one long surface.",
          "Give the audience one wide shot early and one later. That small breath makes the close-ups feel chosen rather than trapped.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A close-up decides what the viewer should notice, so use it to point rather than to decorate.",
          "Every step closer removes context and adds intensity, and that trade should be deliberate.",
          "Tight frames are easy to misread, so save them for the moment that matters most.",
          "Fix the background and the light first, because small distractions grow at this distance.",
          "Reset the eye with an occasional wide shot so the close-ups keep their power.",
        ],
      },
    ],
  },
  {
    slug: "close-up-shots-of-hands-and-products",
    title: "How Close-Up Shots of Hands and Products Sell",
    excerpt:
      "A close-up shot of hands or a product does the selling before a word is spoken. Learn to frame, light, and time tight shots that make people want to buy.",
    date: "2035-03-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Close-up shots of hands and products do the selling before anyone speaks. A tight frame on a pair of hands shows competence, and a tight frame on a product shows detail the eye can almost touch.",
          "Viewers trust what they can inspect. When a shot lets them see texture, weight, and movement up close, the purchase feels less like a gamble.",
        ],
      },
      {
        heading: "Hands carry proof",
        paragraphs: [
          "Hands show that a real person made or used the thing. A potter's hands on wet clay, a barista's hands on a portafilter, a tailor's hands pinning fabric, each one proves skill without a spoken claim.",
          "Keep the action inside the frame. If the hands leave the shot, the viewer misses the step that mattered and the close-up becomes decoration.",
          "Match the hands to the pace of the product. Fast, confident hands suit a tool, while slow hands suit something delicate.",
        ],
      },
      {
        heading: "Products want one idea each",
        paragraphs: [
          "Point a camera at a product and the temptation is to show everything. Resist it. A close-up should answer a single question, like how the lid seats or how the fabric falls.",
          "Light the surface, not the logo. Buyers already know the brand, so spend the frame on the thing they cannot feel through a screen.",
          "Move the object, not the camera, when you can. A slow turn reveals more than a nervous handheld push, and it keeps the edges sharp.",
        ],
      },
      {
        quote:
          "A product close-up is not a beauty shot. It is a promise that what arrives in the box will look like what the viewer just saw.",
      },
      {
        heading: "Sequence beats a single frame",
        paragraphs: [
          "One tight shot of a product is a picture. Three in a row, moving from wide to detail to use, is a small argument.",
          "Start with the object in context, move to the detail that matters, then show a hand using it. The sequence answers what it is, why it is good, and how it works.",
          "Cut on the action, not after it. When the hand finishes a motion, that is the moment to change the shot.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Hands prove skill and honesty, so keep the action inside the frame.",
          "Give each product close-up one idea instead of a full inventory.",
          "Move the object rather than the camera to keep detail sharp.",
          "Build a short sequence of context, detail, and use to make the sale.",
          "Cut on the action so each tight shot earns the next one.",
        ],
      },
    ],
  },
  {
    slug: "close-up-shots-for-emotion",
    title: "Why Close-Up Shots Carry So Much Real Emotion",
    excerpt:
      "A close-up shot earns its emotion by refusing to look away. Here is how to hold a face, time a tear, and know when staying tight says more than cutting.",
    date: "2035-03-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Heart,
    content: [
      {
        paragraphs: [
          "Close-up shots carry emotion because they refuse to look away. When the frame holds a face, the viewer cannot scan the room for an exit, so the feeling has to land.",
          "The camera does not create the emotion. It removes the places a viewer could hide from it.",
        ],
      },
      {
        heading: "The face is a slow instrument",
        paragraphs: [
          "A tight face works on small movements. A blink, a swallow, a jaw that tightens before it speaks, these read louder up close than any line of dialogue.",
          "Give the moment room to arrive. Cutting the instant something happens tells the viewer you do not trust the shot or the actor.",
          "Watch the eyes before the mouth. The mouth performs, and the eyes leak, so keep both in frame and let the viewer choose where to look.",
        ],
      },
      {
        heading: "Time the tear, do not chase it",
        paragraphs: [
          "Real tears arrive on their own schedule. If you cut away the second before one falls, the audience feels cheated, so hold the frame through the discomfort.",
          "Hold too long and the moment curdles into a performance. The trick is to cut just after the feeling peaks, when the viewer is still inside it but before it turns into a pose.",
          "Editing carries as much weight as the shot here. The same frame lands differently depending on what came before it and what follows.",
        ],
      },
      {
        quote:
          "Emotion on camera is not asked for. It is watched, and a close-up gives the viewer nowhere else to look.",
      },
      {
        heading: "Who you point at matters",
        paragraphs: [
          "Most editors reach for the face in a tense scene, and sometimes the better choice is someone else in the room. A close-up on a listener reacting can say more than the speaker's words.",
          "In a crowd, find the one person who is not performing. Their stillness up close reads as truth, and it pulls attention away from whoever is louder.",
          "Pick the subject whose face changes. If nothing moves inside them, the frame just holds a portrait.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A close-up creates emotion by removing the escapes a viewer would use.",
          "Small movements, not big gestures, carry feeling in a tight face.",
          "Hold through the difficult beat and cut just after the peak.",
          "Point the camera at the listener when the reaction is the story.",
          "Choose the face that actually changes, or the frame becomes a portrait.",
        ],
      },
    ],
  },
  {
    slug: "close-up-sharp-detail",
    title: "Getting Clean Sharp Detail in a Close-Up Shot",
    excerpt:
      "A close-up shot lives or dies on focus. Learn the aperture, distance, and support tricks that keep fine detail crisp without fighting your gear all day.",
    date: "2035-03-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Sharp close-up detail comes down to focus, light, and stillness, in that order. If any one of the three is loose, the others cannot save the frame.",
          "The good news is that none of this requires expensive glass. It requires you to stop moving and start paying attention.",
        ],
      },
      {
        heading: "Stop down a little",
        paragraphs: [
          "Wide apertures look lovely on paper and cruel in practice. At the very open settings, the depth of field is thinner than a fingernail, so a breath moves the plane of focus off the subject.",
          "Close down two or three stops from wide open. You give up a little background blur and gain a margin where the important detail stays sharp even if you sway.",
          "On a phone, this matters too. Tap to focus on the detail you care about, then lock it, because the camera will otherwise hunt for a new subject mid-shot.",
        ],
      },
      {
        heading: "Support beats steady hands",
        paragraphs: [
          "Every claim about steady hands comes from someone who has not watched their own footage. Use a tripod, a monopod, or rest the camera on a solid surface.",
          "When you must handhold, brace your elbows against your ribs and exhale slowly through the shot. The frame still moves, but it moves less.",
          "For the tightest work, add light instead of opening the aperture. More light lets you stop down and keep detail without blur.",
        ],
      },
      {
        quote:
          "Nobody notices the tripod. They notice the soft frame, and they assume the whole video is careless because of it.",
      },
      {
        heading: "Focus on purpose",
        paragraphs: [
          "Decide what must be sharp before you roll. In a ring close-up, that is the stone or the band, not the finger behind it.",
          "Use peaking or magnification to confirm, then take your eye off the assist and watch the actual frame. Tools lie, and the shot is what ships.",
          "Recheck focus after you move the camera or the subject. A single nudge can push the plane past the detail you spent an hour lighting.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Sharpness is focus, light, and stillness, and all three matter at once.",
          "Stop down two or three stops to buy a margin of depth.",
          "Support the camera, because steady hands are a myth under scrutiny.",
          "Add light to shoot at smaller apertures without blur.",
          "Choose the exact detail that must be sharp, then verify it.",
        ],
      },
    ],
  },
  {
    slug: "close-ups-without-a-macro-lens",
    title: "How to Shoot Good Close-Ups Without a Macro Lens",
    excerpt:
      "You do not need a macro lens to get a close-up shot. These distance, lighting, and cropping methods push any lens closer than its spec sheet suggests.",
    date: "2035-03-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "You do not need a macro lens to shoot a convincing close-up. Most lenses focus closer than people think, and the rest is distance, light, and a willingness to crop.",
          "The lens is rarely the limit. The habits around it usually are.",
        ],
      },
      {
        heading: "Find your minimum focus distance",
        paragraphs: [
          "Every lens has a point where it simply will not focus closer. Find it once, mark it, and stop fighting the glass.",
          "Get as close as the lens allows, then move the subject toward the camera instead of the camera toward the subject. A product on a sliding surface gives you millimeters without a new lens.",
          "Zoom lenses often focus closer at the wide end than the tele end, which surprises people. Test both ends before you buy anything.",
        ],
      },
      {
        heading: "Crop with intention",
        paragraphs: [
          "Shooting a little wide and cropping in editing is a real option, if you plan for it. Capture at the highest resolution you have and leave room around the subject.",
          "Do not treat cropping as free. Each crop costs resolution, so a heavy crop on a small sensor will soften the final frame.",
          "Better still, use a longer focal length from farther back. Compression makes the background fall away, and the subject fills the frame without the lens fighting you.",
        ],
      },
      {
        quote:
          "A close-up is a decision about what fills the frame, not a receipt for the lens in your bag.",
      },
      {
        heading: "Light and background do the rest",
        paragraphs: [
          "Close work shows every flaw in your light. A single soft source placed close will flatter a small subject far better than a room full of hard lamps.",
          "Move the background far behind the subject so it blurs, even at moderate apertures. Distance between subject and background does work that aperture cannot.",
          "Watch your own shadow. At this distance you are likely to block the light, so angle the source and step to the side.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Most lenses focus closer than their owners assume, so test before you upgrade.",
          "Move the subject toward the lens instead of forcing the lens closer.",
          "Crop only when you have resolution to spare.",
          "Use distance between subject and background to fake shallow depth.",
          "Place one soft light close and keep your own shadow out of frame.",
        ],
      },
    ],
  },
  {
    slug: "lighting-for-close-up-shots",
    title: "Lighting for Close-Up Shots That Look Natural",
    excerpt:
      "A close-up shot magnifies every lighting mistake. Use these soft, simple setups to keep skin, texture, and product detail looking natural and clean.",
    date: "2035-03-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "Close-up lighting amplifies everything. A soft source that flatters a wide shot will still show every pore and wrinkle when you move in, so the setup has to change with the distance.",
          "Natural is not the same as unlit. It means the light looks like it belongs in the room.",
        ],
      },
      {
        heading: "Softer and closer",
        paragraphs: [
          "The closer the light, the softer it looks, because apparent size is what softens a source. A small panel right beside a face beats a large one across the room.",
          "Move the key off axis so the face keeps some shape. Straight-on light flattens features and makes skin look waxy.",
          "Keep the fill gentle. A bounce card or a white wall is often enough, and a second hard light will fight the first.",
        ],
      },
      {
        heading: "Mind the catchlight",
        paragraphs: [
          "The tiny reflection in a subject's eye tells the viewer where the light comes from. A round catchlight reads as natural, while a rectangle or a strip can distract.",
          "Place the catchlight at the top of the eye, near the edge of the pupil, and size it to match the mood. Big soft catchlights feel open, and small hard ones feel tense.",
          "Do not chase a perfect catchlight at the cost of the face. The light on the skin matters more than the dot in the eye.",
        ],
      },
      {
        quote:
          "Good close-up light is invisible. If the viewer notices the lighting, the shot has already failed at its job.",
      },
      {
        heading: "Watch color and reflection",
        paragraphs: [
          "Mixed color temperatures are obvious up close. A warm lamp on one side and a cool window on the other will paint a face in two colors, so pick one and commit.",
          "Shiny products reflect whatever is around them, including you. Flag the lens and your body with black cloth so they do not appear as a dark smear on a metal surface.",
          "Check the shot on a real screen, not just the camera display. Small screens hide color shifts that a monitor makes obvious.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Move the key closer for softness, because apparent size is what matters.",
          "Keep light off axis so faces keep shape instead of flattening.",
          "Shape a natural catchlight, but never at the expense of the skin.",
          "Match color temperature instead of mixing warm and cool sources.",
          "Flag reflections on shiny subjects so you do not appear in the product.",
        ],
      },
    ],
  },
  {
    slug: "when-close-ups-feel-too-intimate",
    title: "When Close-Ups Feel Too Intimate on the Camera",
    excerpt:
      "A close-up shot can feel like a violation when it pushes too far. Learn the cues that read as intimacy and how to pull back without losing the emotional point.",
    date: "2035-03-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "A close-up can feel like an intrusion when it pushes past what the scene has earned. The viewer senses the distance is wrong before they can explain why, and the moment turns uncomfortable.",
          "Intimacy on camera is a relationship, and relationships have limits that change from subject to subject.",
        ],
      },
      {
        heading: "The cues that cross the line",
        paragraphs: [
          "Extreme tight frames on a stranger, a subject who is clearly distressed, or a moment of real grief all read as invasion rather than observation.",
          "The feeling gets worse when the camera lingers after the emotion has passed. That extra second tells the viewer you are watching for your benefit, not theirs.",
          "A long lens from across a street carries the same weight as a camera in someone's face. Distance in space does not remove the closeness of the frame.",
        ],
      },
      {
        heading: "Pull back without losing the point",
        paragraphs: [
          "Step back one size and keep the subject small in a larger frame. The emotion survives, and the viewer gets a little air to breathe.",
          "Cut to the hands, the feet, or the object they are holding instead of the face. A tight frame on a nervous hand can say what a tight frame on the eyes would exploit.",
          "Ask what the scene has earned. A documentary subject who invited you in gives you room that a passerby never did.",
        ],
      },
      {
        quote:
          "A close-up is a form of attention, and attention can be a gift or a theft. The frame alone does not decide which.",
      },
      {
        heading: "Consent shapes the frame",
        paragraphs: [
          "People on camera feel the difference between a wide lens across the room and a tight one at their shoulder. Give them the choice when you can.",
          "For interviews, explain what you plan to shoot and let the subject see a frame before the real take. Most people relax once the surprise is gone.",
          "Some subjects will still say no to tight coverage, and their answer is the end of the discussion, not the opening of a negotiation.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "An unearned close-up reads as intrusion, not insight.",
          "Lingering after the emotion passes turns observation into exploitation.",
          "A long lens does not soften a frame that is too tight.",
          "Pull back one size or cut to hands to keep emotion without pressure.",
          "Let subjects choose how close the camera comes to them.",
        ],
      },
    ],
  },
  {
    slug: "cutting-between-wide-and-close-up-shots",
    title: "Cutting Between Wide and Close-Up Shots That Flow",
    excerpt:
      "A close-up shot only lands if the edit sets it up. Learn how to cut between wide and tight frames so each change of distance carries meaning and momentum.",
    date: "2035-03-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "Cutting between wide and close-up shots is the backbone of visual storytelling. The wide shot gives the viewer a map, and the tight shot gives them a destination.",
          "When those two sizes trade places with purpose, your video feels guided. When they change at random, the viewer loses the thread.",
        ],
      },
      {
        heading: "Establish before you tighten",
        paragraphs: [
          "Show the space before you move inside it. A wide shot tells the viewer where the action happens, so the following close-up has somewhere to exist.",
          "Leave the wide on screen long enough to be read. A half-second glimpse of a room teaches nothing and just makes the cut feel nervous.",
          "Once the space is clear, you can stay tight for a long stretch without losing anyone.",
        ],
      },
      {
        heading: "Cut on motion, not on breath",
        paragraphs: [
          "Cuts hide best inside movement. Change shot size while a hand is moving or a head is turning, and the eye accepts the jump.",
          "Cutting between two similar-sized shots of the same subject creates the ugly jump cut everyone fears. Change the distance by a clear step and the problem disappears.",
          "Save the hardest cut, wide to extreme tight, for a moment that needs a jolt.",
        ],
      },
      {
        quote:
          "The cut does not move the camera. It moves the viewer, from knowing where they are to knowing what matters.",
      },
      {
        heading: "Match the rhythm to the scene",
        paragraphs: [
          "A calm scene wants slow changes of size, sometimes only two or three across a minute. A tense scene can jump from wide to tight and back within seconds.",
          "Let the size changes echo the emotional shape. Move in as pressure builds and pull wide when it breaks.",
          "Count your sizes while you edit. If you are stuck on one, the scene has gone flat, and if you are changing every second, the viewer is dizzy.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Establish the space wide before you move in tight.",
          "Hide cuts inside motion so the change of size feels natural.",
          "Change distance by a clear step to avoid the jump cut.",
          "Match the pace of size changes to the emotional rhythm.",
          "Track your shot sizes, since too few or too many both flatten a scene.",
        ],
      },
    ],
  },
  {
    slug: "close-up-shots-in-tutorials",
    title: "Close-Up Shots in Tutorials That Actually Teach",
    excerpt:
      "A close-up shot in a tutorial does real teaching work. Here is how to frame steps, hands, and screens so viewers can follow along without pausing every scene.",
    date: "2035-03-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Close-up shots in tutorials do the actual teaching. The wide shot tells the viewer where they are, and the tight shot shows the step they need to copy.",
          "A tutorial without close-ups makes the audience guess at the exact motion, and guessing is where people give up and close the tab.",
        ],
      },
      {
        heading: "Frame the step, not the person",
        paragraphs: [
          "When someone is learning, they care about the hands and the tool, not the instructor's face. Point the tight shot at the action.",
          "Keep the working area centered and steady so the eye can lock onto it. A wandering frame forces the viewer to search for the step.",
          "If the instructor talks through a step, a small face inset can help, but never let it cover the hands doing the work.",
        ],
      },
      {
        heading: "One shot per step",
        paragraphs: [
          "Give each step its own close-up. A single tight shot that covers three actions makes the viewer rewind, and rewinding is a small failure.",
          "Match the shot length to the difficulty of the step. A simple twist needs two seconds, while threading a needle needs ten.",
          "Hold the last frame of each step for a beat so the viewer can confirm what the finished action looks like.",
        ],
      },
      {
        quote:
          "A tutorial close-up is a hand on the viewer's shoulder, slowing them down right before the part that is easy to get wrong.",
      },
      {
        heading: "Show the mistake too",
        paragraphs: [
          "Tutorials often skip the errors, and the close-up is the best place to show them. Frame the wrong grip or the loose screw before you show the fix.",
          "Seeing the failure up close helps the viewer recognize it in their own hands, which is the whole point of a lesson.",
          "Keep the same framing for the error and the correction so the difference between them is obvious.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Point tight shots at hands and tools, since that is what learners copy.",
          "Give each step its own close-up instead of compressing several into one.",
          "Match shot length to how hard the step is to follow.",
          "Hold the finished frame so viewers can confirm the result.",
          "Show the common mistake up close before you show the fix.",
        ],
      },
    ],
  },
  {
    slug: "close-up-variety-with-shot-sizes",
    title: "Building Variety With Close-Ups and Other Shots",
    excerpt:
      "A close-up shot is strongest when it is not the only size you use. Learn how to mix wide, medium, and tight frames to keep a video alive from start to finish.",
    date: "2035-03-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "visuals", "emotion"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        paragraphs: [
          "A close-up shot gains power from contrast. If every frame is tight, the viewer adapts and the tightness stops meaning anything.",
          "Variety of shot sizes is what keeps a video feeling alive, and the close-up is only one note in that mix.",
        ],
      },
      {
        heading: "The three sizes you actually need",
        paragraphs: [
          "You can tell almost any story with a wide, a medium, and a close-up. The wide shows place, the medium shows people, and the tight shows detail or feeling.",
          "Most beginners overuse one size because it feels safe. Watch your own footage and count which size dominates, then plan to break it up.",
          "Add an extreme only when the story demands it. If you reach for it constantly, it stops being extreme.",
        ],
      },
      {
        heading: "Vary for a reason",
        paragraphs: [
          "Change size because the story changed, not because the timer went off. A cut to a close-up should mark a new idea or a new feeling.",
          "Let the sizes breathe. Two different widths in a row can feel just as varied as a wide jumping to a tight frame.",
          "Match cuts are a trap here. Cutting from a medium to a medium of the same pose looks like a mistake, so move a full step in size.",
        ],
      },
      {
        quote:
          "Variety is not decoration. It is the difference between a slideshow and a scene that pulls the viewer forward.",
      },
      {
        heading: "Map the sizes before you shoot",
        paragraphs: [
          "Sketch your sizes into the shot list. Note where the video goes wide for context and where it goes tight for detail, and you will edit faster.",
          "On location, grab a safety wide and a few tight detail shots even if the script does not call for them. They rescue an edit more often than any planned shot.",
          "Review the sequence with the sizes in mind. If a stretch sits on one size for too long, plan a change before you fall asleep to your own footage.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A close-up only lands when it sits beside wider frames.",
          "Three sizes, wide, medium, and close, cover nearly every scene.",
          "Change size to mark a new idea, not to fill a timer.",
          "Move a full step in size at each cut to avoid a confusing jump.",
          "Shoot safety wides and detail shots to give your edit room to move.",
        ],
      },
    ],
  },
];
