import {
  BookOpen,
  DollarSign,
  Eye,
  Layers,
  Map,
  MessageSquare,
  Puzzle,
  Repeat,
  Target,
  Users,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch204: BlogPost[] = [
  {
    slug: "depth-of-field-what-it-means",
    title: "What Depth of Field Actually Means in Your Footage",
    excerpt:
      "Depth of field is the band of sharpness inside a shot, and learning what sets its limits is the fastest way to make your footage look intentional.",
    date: "2035-05-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Depth of field is the range of distance inside a shot that stays acceptably sharp. Everything nearer than that range and everything farther away falls into blur.",
          "Once you understand it, you stop guessing why some footage looks rich and some looks flat. The near and far limits are something you choose, not something that simply happens to you.",
        ],
      },
      {
        heading: "What actually sets the limits",
        paragraphs: [
          "Three things decide the size of that range: how wide the lens opening is, how far away the subject sits, and how long the lens is. A wide opening, a close subject, and a long lens each shrink the sharp zone.",
          "Move any one of them and the blur changes even if the others stay still. That is why the same lens can look clinical in one setup and soft in the next.",
          "This is also why two shots of the same person can feel completely different. A step back or a twist of the aperture ring rewrites the whole frame.",
        ],
      },
      {
        quote:
          "Depth of field is a decision you make with your feet, your aperture, and your lens. The camera only records the result.",
      },
      {
        heading: "The sensor behind the look",
        paragraphs: [
          "A larger sensor makes it easier to get a thin sharp band because you use longer lenses for the same framing. A small sensor fights you, which is why phone footage tends to keep more of the scene sharp.",
          "This is a tool, not a ranking. A camera that holds everything sharp is doing exactly what it was built to do.",
        ],
      },
      {
        heading: "Reading blur on purpose",
        paragraphs: [
          "Blur is information. When the background melts, you are telling the viewer there is only one thing worth watching. When the whole frame is sharp, you invite their eye to wander and explore.",
          "Decide which message the scene needs before you touch the settings. Then pick the aperture that delivers it.",
          "A shot where you never thought about the sharp band is a shot that might say the wrong thing by accident.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Depth of field is the band of acceptable sharpness in front of and behind your subject.",
          "Aperture, distance, and lens length each change how wide that band becomes.",
          "Bigger sensors make a thin sharp band easier to reach.",
          "Soft background tells the eye where to look, so use blur with intent.",
          "Choose the look before you pick the numbers.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-shallow-talking-heads",
    title: "Shallow Depth of Field for Talking Head Videos",
    excerpt:
      "A shallow depth of field keeps a talking head crisp while the room behind them melts away, and that is why it fits most on-camera monologues so well.",
    date: "2035-05-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Users,
    content: [
      {
        paragraphs: [
          "A shallow depth of field turns a cluttered room into a soft background behind your face. For talking head videos, that is usually the point.",
          "The viewer stops noticing the laundry basket on the shelf and starts listening to you. Blur is how you quiet a space without repainting it.",
        ],
      },
      {
        heading: "Why it works for a single speaker",
        paragraphs: [
          "A talking head shot has one job: keep attention on a person. A soft background supports that because it removes visual competition the moment the frame appears.",
          "It also flatters almost anyone. Small room flaws, harsh furniture, and busy walls all dissolve into gentle shapes behind the talent.",
          "You do not need a studio. You need a subject far enough from the wall behind them and a lens opening wide enough to separate the two.",
        ],
      },
      {
        quote:
          "The background should whisper, not talk. Blur is the volume knob for everything behind your subject.",
      },
      {
        heading: "Set it up in three moves",
        paragraphs: [
          "First, pull the subject away from the wall so there is real distance to blur. Second, open the aperture until the edges of their face just hold. Third, check the ears and shoulders, because a chin in focus with soft ears looks broken.",
          "Do not chase the thinnest possible band. If the person leans forward and loses their eyes, you have gone too far.",
          "A slightly deeper setting that survives movement beats a razor thin one that fails on the first nod.",
        ],
      },
      {
        heading: "Watch the falloff",
        paragraphs: [
          "Shallow focus does not need to erase the whole room. Some recognizable texture behind the speaker helps place them in a real world.",
          "Stop down a little when the setting matters to the story. Keep it wide when the person is the only thing that matters.",
          "The best setting is the one you barely notice, because it never calls attention to itself.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pull the speaker away from the wall before you touch the aperture.",
          "Open up until the face holds, then check the ears and shoulders.",
          "Leave some background texture so the room still reads as real.",
          "Avoid a band so thin that a small lean blows the focus.",
          "Match the blur to how much the location matters to the story.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-deep-focus-scenery",
    title: "Why Deep Focus Works for Scenery and Wide Shots",
    excerpt:
      "Deep focus keeps a whole scene sharp from front to back, and for scenery that clarity lets the viewer roam the frame instead of staring at one spot.",
    date: "2035-05-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "Deep focus keeps the foreground, the middle ground, and the far distance all sharp at once. Scenery and travel footage often live or die on that choice.",
          "When everything is crisp, the viewer has permission to wander. Their eye travels from the rock in front to the ridge in back, and the frame feels like a place rather than a portrait.",
        ],
      },
      {
        heading: "When clarity beats blur",
        paragraphs: [
          "A sweeping view is the subject, so blurring most of it wastes the shot. You paid for the whole mountain, so keep the whole mountain readable.",
          "Deep focus also builds scale. A sharp path leading to a sharp peak tells the eye how far the distance really is.",
          "The trick is a small aperture, a wider lens, and a subject far enough away that the near limit does not crowd you.",
        ],
      },
      {
        quote:
          "A shallow frame says look here. A deep frame says look around. Pick the one that matches your story.",
      },
      {
        heading: "The cost of going deep",
        paragraphs: [
          "Small apertures need more light, so deep focus is easier outdoors or with powerful lighting. Indoors, you may have to raise the ISO and accept some noise.",
          "Diffraction is the other tax. Stop down too far and the whole image softens, which is the opposite of what you wanted.",
          "Find the middle setting where the scene is sharp end to end without the lens turning to mush.",
        ],
      },
      {
        heading: "Composing for a sharp frame",
        paragraphs: [
          "With everything in focus, the arrangement does all the work. Use leading lines, layers, and a clear foreground to guide the eye through the depth.",
          "Hide a small human figure in the frame to give the scale a reference. A tiny person on a huge sharp plain says more than the plain alone.",
          "Blur is not automatically better. Sometimes the honest, fully sharp image is the stronger one.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use deep focus when the setting is the subject and the viewer should explore.",
          "A small aperture, a wide lens, and distance all extend the sharp range.",
          "Deep focus needs light and can soften the frame if you stop down too far.",
          "Compose with lines and layers because the arrangement carries the shot.",
          "Add a small figure to give the scale a human reference.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-aperture-and-bokeh",
    title: "How Aperture and Bokeh Shape the Look of Blur",
    excerpt:
      "Aperture controls how much blur you get while bokeh describes how that blur looks, and treating them as the same thing leads to sloppy images.",
    date: "2035-05-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Aperture is the opening inside your lens, and bokeh is the character of the blur it creates. They are related, but they are not the same thing.",
          "Aperture sets the amount. Bokeh sets the personality. Two lenses at the same setting can produce wildly different looking backgrounds.",
        ],
      },
      {
        heading: "Aperture as a number",
        paragraphs: [
          "Aperture is written as an f-number, and smaller numbers mean a wider opening. F1.8 lets in more light and thins the sharp band, while F8 tightens everything up.",
          "Low f-numbers do two things at once: they brighten the image and they shrink the sharp zone. That is why a fast lens is prized for portraits and dim rooms.",
          "Memorize the direction. Lower number, more blur. Higher number, more of the frame in focus.",
        ],
      },
      {
        quote:
          "Aperture is the quantity of blur. Bokeh is the quality. Both matter, and only one of them is a setting.",
      },
      {
        heading: "What good bokeh looks like",
        paragraphs: [
          "Good bokeh is smooth and even. Points of light become soft circles without hard rings or busy edges.",
          "Cheap bokeh turns highlights into harsh donuts or makes the background look nervous and jittery. The blur distracts instead of relaxing the eye.",
          "Blade count in the lens changes the shape of those circles. More blades usually mean rounder, calmer highlights.",
        ],
      },
      {
        heading: "Chasing bokeh wisely",
        paragraphs: [
          "You cannot fake lens character in post, so pick glass whose blur you actually like. Rent before you buy when the background look matters.",
          "Put some distance between the subject and the lights behind them. Bokeh balls come from small bright points far enough back to spread.",
          "But do not turn every shot into a blur test. Bokeh is a spice, not the meal.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Aperture sets how much blur, and bokeh sets how that blur looks.",
          "Lower f-numbers widen the opening, brighten the shot, and thin the sharp band.",
          "Smooth round highlights read as good bokeh, harsh rings read as cheap.",
          "Space between the subject and bright points behind them grows the bokeh.",
          "Pick lenses whose background character you like, because that part is baked in.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-controlling-background-blur",
    title: "Controlling Background Blur Without Losing Context",
    excerpt:
      "You can soften a background without a faster lens, because distance, lens length, and subject placement all push the depth of field around.",
    date: "2035-05-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "You can soften a background without buying a faster lens. Distance, lens length, and where you place the subject all change how much blur you get.",
          "The aperture is only one lever. Learn the other three and you can shape the frame with the gear you already own.",
        ],
      },
      {
        heading: "Distance does the heavy lifting",
        paragraphs: [
          "The gap between your subject and the background matters more than most people think. Push the subject toward the camera and the wall falls away into softness.",
          "The gap between you and the subject matters too. Move closer and the sharp band gets thinner.",
          "When a room is small, rearrange the furniture instead of the settings. Moving a chair two feet often beats changing a lens.",
        ],
      },
      {
        quote:
          "Before you spend money on glass, walk the subject forward and watch the background melt on its own.",
      },
      {
        heading: "Lens length and framing",
        paragraphs: [
          "Longer lenses compress the space and magnify the blur behind the subject. A portrait at fifty millimeters separates more than the same framing at twenty.",
          "That compression is why telephoto shots look so creamy. It is not magic, it is geometry.",
          "Just remember that a longer lens needs more room and steadier support, so plan the shot around the space you have.",
        ],
      },
      {
        heading: "Deciding how much context to keep",
        paragraphs: [
          "Total blur can erase the where of a scene. If the location matters, leave a little sharp so the viewer knows the setting.",
          "A café full of paper lanterns should keep enough detail that the lanterns read as lanterns, not as stray dots of light.",
          "Blur is a dial, not a switch. Turn it up when the person is the story and down when the place is.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Move the subject forward to blur a background without touching the aperture.",
          "A longer lens magnifies blur, while a wider one keeps more context.",
          "In tight rooms, rearrange the space instead of swapping gear.",
          "Leave some detail when the location matters to the story.",
          "Treat blur as a dial you can tune shot by shot.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-keeping-subject-sharp",
    title: "Keeping a Subject Sharp When the Depth Gets Thin",
    excerpt:
      "A thin sharp band is unforgiving when your subject moves, so keeping them in focus comes down to planning the depth and leaving yourself some room.",
    date: "2035-05-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A thin sharp band is unforgiving when your subject moves. Keeping them in focus comes down to planning the depth and giving yourself room.",
          "The goal is not the blurriest background. It is the sharpest face that still looks separated from the room.",
        ],
      },
      {
        heading: "Find the safe zone",
        paragraphs: [
          "Open the aperture slowly and watch where the face starts to soften. Back off one or two stops from that edge so small movements stay inside the sharp band.",
          "Focus on the eye nearest the camera. That is the point the viewer reads, and it is the first place a mistake shows.",
          "If the talent rocks forward and back, give them a slightly deeper band. A reliable shot beats a fragile one.",
        ],
      },
      {
        quote:
          "Focus on the eye, then leave yourself a margin for the breath that comes next.",
      },
      {
        heading: "Use the tools that help",
        paragraphs: [
          "Peaking and magnification overlays show you exactly where the sharp plane sits. Trust them over the small screen on the camera.",
          "Continuous autofocus helps for movement, but it can hunt when the subject turns. Lock it when the shot is static and the person is not.",
          "A monitor with a larger screen makes focus far easier than squinting at a tiny display.",
        ],
      },
      {
        heading: "When movement is the point",
        paragraphs: [
          "If the subject walks toward the camera, a fixed focus point will fail. Either stop down for a deeper band or plan a focus pull with a second pair of hands.",
          "Block the walk so the person ends where your focus already sits. Staging the movement is often simpler than chasing it.",
          "Practice the move before the take. Focus problems are almost always planning problems, not gear problems.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Back off the aperture edge so small movements stay sharp.",
          "Place focus on the eye nearest the camera every time.",
          "Use peaking and magnification instead of trusting a small screen.",
          "Stop down or plan a pull when the subject moves toward you.",
          "Stage the movement to land where your focus already sits.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-on-a-phone",
    title: "How Depth of Field Actually Works on Your Phone",
    excerpt:
      "A phone recreates depth of field with software rather than glass, and knowing how that trick fails helps you decide when to trust it.",
    date: "2035-05-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "A phone builds depth of field with software more than with glass. The lens is tiny, so the device fakes the blur after the fact.",
          "That matters because the fake version works differently from the real thing, and the difference shows up in the details.",
        ],
      },
      {
        heading: "The hard truth about small sensors",
        paragraphs: [
          "A small sensor with a wide lens keeps almost everything sharp on its own. Physically, your phone is a deep focus machine.",
          "Portrait modes get blur by drawing a mask around the subject and softening everything outside it. That is why the feature works best on simple subjects against clean backgrounds.",
          "Real optical blur falls off smoothly with distance. Software blur follows a map, and maps have edges.",
        ],
      },
      {
        quote:
          "Your phone does not open its aperture wider, it paints a blur on top. The paint is good until the subject gets complicated.",
      },
      {
        heading: "Where phone blur breaks",
        paragraphs: [
          "Hair, glasses, and fine edges are the usual failures. The mask cuts through stray strands and leaves a halo around the outline.",
          "Fast movement is another weak spot. The subject leaves the mask and briefly drags blur along with them.",
          "If a hand enters the frame, expect it to look out of place. The phone rarely knows the difference between a foreground hand and the background.",
        ],
      },
      {
        heading: "Getting the most from it",
        paragraphs: [
          "Use portrait modes on still or slow subjects against tidy backgrounds. Keep faces large enough for the mask to trace.",
          "Shoot the same scene with and without the effect and pick per shot. Sometimes the naturally sharp phone image is the honest one.",
          "Do not fake a shallow look on a scene that needs the whole frame readable. The software cannot decide that for you.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Phones create blur with software, not by widening the lens opening.",
          "Portrait modes work best on simple subjects and clean backgrounds.",
          "Hair, glasses, and moving hands are where the fake blur falls apart.",
          "Compare the shot with and without the effect before you commit.",
          "Keep a wide readable scene sharp instead of forcing a shallow look.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-when-blur-looks-cheap",
    title: "When Shallow Blur Looks Cheap and How to Fix It",
    excerpt:
      "Blur starts to look cheap when it fights the way light and distance really behave, and the giveaway is almost always at the edges of your subject.",
    date: "2035-05-23",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: DollarSign,
    content: [
      {
        paragraphs: [
          "Blur reads as cheap when it fights the way light and distance really behave. The giveaway is almost always at the edges of the subject.",
          "Real optical blur blends gradually. Fake or careless blur arrives with a line around the person, and the eye spots that line instantly.",
        ],
      },
      {
        heading: "The usual tells",
        paragraphs: [
          "A halo around the hair or shoulders is the clearest sign of software blur gone wrong. The subject looks cut out and pasted onto a soft plate.",
          "Blur that ignores depth is another tell. If a foreground chair is sharp while the subject blurs, the physics are backwards and the shot feels off.",
          "Sometimes the problem is simpler: the background is blurred so heavily that the frame looks like a smudge with a face on it.",
        ],
      },
      {
        quote:
          "Cheap blur is not blur you dislike. It is blur that does not follow the rules of distance, so the eye rejects it.",
      },
      {
        heading: "Making blur read as real",
        paragraphs: [
          "Keep a little texture in the near background. A fully erased backdrop feels like a green screen even when it is not.",
          "Blur layers by distance. Objects just behind the subject should be only a little soft, and far ones much softer.",
          "Avoid blurring things that sit in front of the subject unless the subject is clearly behind them. Foreground blur needs a reason.",
        ],
      },
      {
        heading: "Fix it in camera, not in post",
        paragraphs: [
          "Most cheap blur comes from trying to rescue a shot later. Get the falloff right while you are filming and you will barely touch the effect.",
          "If you must fake it, soften the edges and feather the mask. A gentle transition hides more than a hard cut ever will.",
          "When the fake never convinces you, reshoot with a real lens. Some shots are worth the extra setup.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Halos around hair and shoulders expose software blur immediately.",
          "Blur must follow distance, or the eye will sense something is wrong.",
          "Leave some near background texture so the scene does not look composited.",
          "Feather any faked mask instead of cutting a hard edge.",
          "Reshoot with a real lens when the fake cannot be saved.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-focus-pulling",
    title: "Focus Pulling: Moving the Eye Through the Scene",
    excerpt:
      "Focus pulling shifts the sharp plane from one subject to another inside a single shot, guiding attention with no cut at all when it is done well.",
    date: "2035-05-26",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Focus pulling moves the sharp plane from one subject to another inside a single shot. Done well, it directs the eye without a cut.",
          "The technique is subtle. It works best when the audience never notices the mechanics and simply finds their attention somewhere new.",
        ],
      },
      {
        heading: "What a pull is for",
        paragraphs: [
          "A pull can reveal a second character, shift power from one face to another, or land on a detail the dialogue just mentioned.",
          "It also buys time. One continuous shot with a pull can carry the beat that two cuts would otherwise handle.",
          "Use it with a reason. A pull with nothing to reveal is just a floating camera with a focus problem.",
        ],
      },
      {
        quote:
          "A good focus pull feels like the story turning its head. If the viewer notices the move, the moment has already slipped.",
      },
      {
        heading: "Planning the pull",
        paragraphs: [
          "Mark both focus points before the take. Know exactly where the first subject sits and where the second one lands.",
          "Set the depth of field thin enough that each point reads as separate, but not so thin that the pull takes forever.",
          "Time the move to the line or gesture that motivates it. Focus should travel when attention travels.",
        ],
      },
      {
        heading: "Executing it cleanly",
        paragraphs: [
          "A smooth pull is steady, not fast. Ease into the change and settle without overshooting, then adjust if you miss.",
          "A follow focus or a second operator makes long pulls far easier than reaching for the barrel by hand.",
          "Practice before the real take and watch the playback. Focus is one of the few things you cannot repair later.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Use a focus pull to move attention without cutting.",
          "Reveal a face, a detail, or a reaction so the move has a purpose.",
          "Mark both focus points before you roll.",
          "Keep the move steady and settle without overshooting.",
          "Practice and check playback, because focus cannot be fixed in post.",
        ],
      },
    ],
  },
  {
    slug: "depth-of-field-interview-setups",
    title: "Depth of Field Choices for Video Interview Setups",
    excerpt:
      "Interview setups need enough depth of field to keep a talking subject sharp through small movements, and too thin a band ruins good answers.",
    date: "2035-05-29",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lenses", "visuals"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Interview setups need enough depth of field to keep a talking subject sharp through small movements. Too thin a band and every nod drifts out of focus.",
          "A person telling a story leans, shifts, and gestures. The camera has to forgive all of that without losing the polish.",
        ],
      },
      {
        heading: "Aim for forgiving sharpness",
        paragraphs: [
          "Interviews reward a slightly deeper band than a posed portrait. You want the face sharp and a touch of room on either side of the subject's movement.",
          "Focus on the near eye and stop down a little past the artistic ideal. The extra safety costs almost nothing on screen.",
          "If two people share the frame, plan a depth that covers both without sacrificing the background. That often means a middle aperture and careful staging.",
        ],
      },
      {
        quote:
          "For an interview, a sharp answer beats a beautiful blur. Protect the words before you protect the background.",
      },
      {
        heading: "Staging the room",
        paragraphs: [
          "Sit the subject away from the wall so the background can soften and the depth is easier to control.",
          "Keep the background simple but not empty. A little texture gives the interview a sense of place and keeps the shot from feeling like a void.",
          "Angle the subject slightly off axis to add shape to the face, and place the lights so the eyes catch a little highlight.",
        ],
      },
      {
        heading: "Recording long answers",
        paragraphs: [
          "An interview runs for a while, so focus drift over time is a real risk. Lock focus when the person is settled and watch the monitor.",
          "Give yourself room to refocus gently between questions instead of during an emotional answer.",
          "A calm, in-focus take is worth more than a dramatic one where the eyes go soft halfway through the reply.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose a slightly deeper band so nods and gestures stay sharp.",
          "Focus on the near eye and stop down a little past the ideal.",
          "Move the subject off the wall to soften the background safely.",
          "Keep a simple but textured background to place the interview.",
          "Lock focus when settled and refocus between questions, not during them.",
        ],
      },
    ],
  },
];
