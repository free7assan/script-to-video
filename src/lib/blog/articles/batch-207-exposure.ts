import { Activity, BarChart3, Compass, Eye, Flag, Layers, Scissors, Target, Waves, Zap } from "lucide-react";
import type { BlogPost } from "../types";

export const batch207: BlogPost[] = [
  {
    slug: "exposure-triangle-explained",
    title: "The Exposure Triangle Explained Without The Jargon",
    excerpt: "The exposure triangle controls how bright your shot looks. Read aperture, shutter speed, and ISO so your exposure choices become deliberate, not accidental.",
    date: "2035-08-01",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        heading: "What exposure actually controls",
        paragraphs: [
          "Exposure is the total amount of light that reaches your sensor for one frame. Three settings decide it: aperture, shutter speed, and ISO. Move any one of them and you change how bright the image turns out.",
          "The trick is that all three also change something besides brightness. Aperture changes depth of field, shutter speed changes motion blur, and ISO changes noise. You are never adjusting brightness alone."
        ]
      },
      {
        heading: "Aperture: the size of the hole",
        paragraphs: [
          "Think of aperture as the pupil of your lens. A wider opening lets in more light and blurs the background. A narrow opening lets in less light and keeps more of the frame sharp.",
          "Numbers like f/1.8 and f/16 confuse people because the small number is the big opening. Learn to read them backward and the confusion disappears."
        ]
      },
      {
        heading: "Shutter speed: the length of the blink",
        paragraphs: [
          "Shutter speed is how long the sensor stares at the scene. A fast shutter freezes a moving subject and cuts light. A slow shutter gathers more light but smears motion.",
          "Once you go below the reciprocal of your focal length, hand shake starts to show. That is when you either open the aperture, raise ISO, or put the camera on something solid."
        ]
      },
      {
        quote: "The exposure triangle is one decision with three consequences. Your taste decides which consequence you can live with."
      },
      {
        heading: "ISO: the last dial you touch",
        paragraphs: [
          "ISO amplifies the signal from the sensor. It does not create light, it just boosts what is already there. Push it too far and grain and color noise creep into the shadows.",
          "On most modern cameras you can shoot a stop or two higher than you would expect without much damage. Treat ISO as the dial that rescues a shot, not the one you reach for first."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Aperture, shutter speed, and ISO together set exposure, and each one changes the look.",
          "Open the aperture for light and blur, stop it down for depth.",
          "Slow the shutter for light, but not past the point of hand shake.",
          "Raise ISO only when the other two cannot get you there.",
          "Learn the triangle once and you stop guessing on every shoot."
        ]
      },
      {
        heading: "How to practice this week",
        paragraphs: [
          "Set your camera to manual and pick one subject that does not move. Change only the shutter speed for ten frames and watch the brightness shift. Then hold shutter steady and change aperture. Then ISO.",
          "By next week your hand will know the moves before your brain does. That is when exposure stops being a mystery."
        ]
      }
    ]
  },
  {
    slug: "exposure-reading-camera-meter",
    title: "Reading Your Camera Meter So Exposure Stops Guessing",
    excerpt: "Your camera meter is a suggestion, not a command. Learn what the meter is measuring so you can read your camera meter and expose with intent.",
    date: "2035-08-04",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BarChart3,
    content: [
      {
        heading: "The meter wants middle gray",
        paragraphs: [
          "Your camera meter assumes the world averages out to a middle gray, roughly the brightness of a concrete sidewalk. It reads the scene, compares it to that target, and tells you how far off you are. The reading is a starting point, not a verdict.",
          "Point that same meter at snow and it will underexpose, because it wants to drag the white down to gray. Point it at coal and it will overexpose. The meter is consistent and often wrong."
        ]
      },
      {
        heading: "Know which mode you are in",
        paragraphs: [
          "Metering modes change which part of the frame the camera weighs. Matrix or evaluative mode reads the whole scene and applies its own logic. Center-weighted favors the middle. Spot reads a tiny circle exactly where you aim it.",
          "Most of the time matrix gets you close. When a subject is backlit or the frame has extreme contrast, spot metering on the face gives you a reading you can actually trust."
        ]
      },
      {
        quote: "The meter does not know what matters in your frame. You do. Aim it at the thing you refuse to lose, then bias the result."
      },
      {
        heading: "Reading the scale",
        paragraphs: [
          "Inside the viewfinder you will find a row of tick marks with a zero in the middle. Each mark is a third of a stop. The moving bar shows how far the camera thinks you are from its target.",
          "Zero is not holy. If you aim at a bright sky and want to keep the skin tone open, dropping one or two thirds into the minus side is a choice, not a mistake."
        ]
      },
      {
        heading: "Exposure compensation is your bias knob",
        paragraphs: [
          "When you shoot in an automatic mode, exposure compensation lets you nudge the advice of the meter without leaving the mode. Turn it down when the scene is darker than the meter thinks. Turn it up when the scene is bright enough to fool it.",
          "Find the compensation dial and learn it by feel. It is the fastest way to bend an auto mode to your will."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "The meter targets middle gray, so it fails on very bright or very dark scenes.",
          "Spot metering on your subject gives the most honest reading.",
          "The zero mark is a reference, not a rule.",
          "Exposure compensation is how you disagree with the meter quickly."
        ]
      },
      {
        heading: "Test it on purpose",
        paragraphs: [
          "Take three shots of a white wall: one at the meter reading, one a stop over, one a stop under. Look at them on a big screen. You will never forget which one the meter wanted and which one you wanted."
        ]
      }
    ]
  },
  {
    slug: "exposure-faces-exposed-correctly",
    title: "Exposing Faces Correctly In Any Kind Of Light",
    excerpt: "A properly exposed face carries a scene. Learn to expose for skin, protect highlights, and keep faces readable even when the light fights back.",
    date: "2035-08-07",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        heading: "Skin is the reference",
        paragraphs: [
          "Skin tones sit near the middle of the brightness range, which is why they make a good anchor. If the face looks right, the rest of the frame usually falls into place. Expose for the face first and let the background land where it lands.",
          "Cameras meter toward gray, so a face in shadow can read as darker than it is and a face in sun can read as brighter. Your job is to correct for that habit, not obey it."
        ]
      },
      {
        heading: "Protect the highlights, rescue the shadows",
        paragraphs: [
          "When highlights blow out, the detail is gone for good. When shadows fall dark, there is often data left to pull back later. That imbalance tells you which way to lean on a contrasty scene.",
          "For a face lit from one side, expose so the bright cheek holds texture. The shadow side can sit a stop or more down and still look natural."
        ]
      },
      {
        quote: "A face that reads is a face the viewer trusts. Nobody has ever left a video because the background was two thirds of a stop dark."
      },
      {
        heading: "Watch the color of skin",
        paragraphs: [
          "Underexposed skin turns muddy and gray. Overexposed skin loses warmth and goes chalky. Both mistakes are easy to spot once you know to look for them.",
          "When in doubt, keep skin a touch on the bright side of the meter and pull it back in post. A slightly hot face grades down better than a crushed one."
        ]
      },
      {
        heading: "Backlight is the hard test",
        paragraphs: [
          "Put the sun behind your subject and the meter will expose for the sky, leaving the face in the dark. Switch to spot metering on the cheek or dial in positive compensation.",
          "If you cannot move the light, move the subject. A half turn toward the sun often fixes a silhouette without touching a single setting."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Expose for the face and let the frame follow.",
          "Highlights are unrecoverable, so never let them clip on skin.",
          "Slight overexposure on skin is easier to fix than underexposure.",
          "Backlit faces need spot metering or positive compensation.",
          "Move your subject before you fight the light."
        ]
      },
      {
        heading: "Build the habit",
        paragraphs: [
          "Before every take, glance at the face and ask one question: does the skin read? Ignore the histogram for a second and trust your eye on the thing that matters most."
        ]
      }
    ]
  },
  {
    slug: "exposure-overexposure-vs-underexposure",
    title: "Overexposure Vs Underexposure: Which One Can You Save",
    excerpt: "Both misses cost you, but not equally. Compare overexposure and underexposure so you know which mistake to avoid and which one you can repair.",
    date: "2035-08-10",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        heading: "Clipping is a one way door",
        paragraphs: [
          "Overexposure pushes pixels toward pure white, and once they hit the top there is no detail stored underneath. Underexposure keeps detail in the shadows, just buried in noise. That difference decides which error is recoverable.",
          "When a highlight clips, it is gone. When a shadow crushes, it is usually a push of a slider away from coming back."
        ]
      },
      {
        heading: "What each one looks like",
        paragraphs: [
          "Overexposed footage looks washed out, with blown skies and skin that loses its shape. Underexposed footage looks heavy and dark, and the noise floor rises the moment you lift it.",
          "The honest test is the recover test. Open both files in your editor and push them back toward normal. One will fall apart faster than the other."
        ]
      },
      {
        quote: "If you must miss, miss dark. Shadows keep their secrets longer than highlights keep theirs."
      },
      {
        heading: "Why cameras reward a slight underexposure",
        paragraphs: [
          "Modern sensors hold more range below middle gray than above it. That headroom means you can underexpose a little and lift later with less damage than you would expect.",
          "This is not permission to shoot everything two stops down. A gentle bias on a bright day is different from starving the sensor of light."
        ]
      },
      {
        heading: "Reading the warning signs",
        bullets: [
          "Overexposure: blinkies cover large areas, the histogram piles up on the right edge, the sky turns to a white slab.",
          "Underexposure: the histogram crowds the left edge, and shadows turn to noise when you lift them.",
          "Either one: the face loses its shape and the viewer notices before they can name it."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Blown highlights cannot be recovered, so guard them first.",
          "Shadows usually carry enough data to lift.",
          "Sensors favor a small underexposure over a small overexposure.",
          "Watch the histogram edges, not the middle.",
          "Never expose so dark that lifting creates noise."
        ]
      },
      {
        heading: "Make the choice consciously",
        paragraphs: [
          "On every shoot, decide which is worse for that shot: a clipped sky or a noisy face. Then expose around that answer instead of hoping you get lucky."
        ]
      }
    ]
  },
  {
    slug: "exposure-zebras-and-histograms",
    title: "Zebras And Histograms: Trusting The Tools You Have",
    excerpt: "Your camera ships with exposure tools most shooters ignore. Learn to read zebras and histograms so you stop judging brightness by eye alone.",
    date: "2035-08-13",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Activity,
    content: [
      {
        heading: "Two tools, two jobs",
        paragraphs: [
          "Zebras paint stripes over areas that hit a set brightness, usually near clipping. The histogram shows how the whole frame distributes from black to white. One warns you about a spot, the other shows you the overall shape.",
          "Together they tell you more than the tiny LCD ever will, because a bright room makes every screen look dim and a dark room makes it look bright."
        ]
      },
      {
        heading: "Setting zebras where they help",
        paragraphs: [
          "Set your zebras around 95 percent so they only fire when something is about to clip. If they appear on skin, you are too hot. If they cover the sun or a specular highlight only, you are fine.",
          "Some shooters set a second zebra zone lower, near 70 percent, to mark skin that is hovering right at the top. Two thresholds turn a warning into a guide."
        ]
      },
      {
        quote: "A histogram is not a scoreboard. It is a shape, and you decide which shape fits the scene in front of you."
      },
      {
        heading: "Reading histogram shapes",
        paragraphs: [
          "A scene with a bright sky and dark foreground shows two humps. A flat gray wall shows one narrow spike. A night scene piles everything to the left and that is correct.",
          "The moment a hump touches the right edge, you are losing data. The left edge is softer, but a wall of pixels there means you are underexposed."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Zebras protect highlights while the histogram shows the whole spread.",
          "Set zebras near 95 percent and treat them as a clip alarm.",
          "Judge the histogram by shape, not by a single ideal curve.",
          "Check both before your first take and after any light change.",
          "Never trust the LCD brightness alone in a bright room."
        ]
      },
      {
        heading: "Practice on a hard scene",
        paragraphs: [
          "Point your camera at a window with a dark room behind it. Watch how the histogram splits into two humps and how the zebras cling to the glass. Change the exposure until the humps sit where you want them.",
          "Do that a few times and the tool stops being abstract. It becomes the second pair of eyes you always carry."
        ]
      }
    ]
  },
  {
    slug: "exposure-mixed-lighting",
    title: "Exposure In Mixed Light And How To Tame The Room",
    excerpt: "Mixed light throws color and brightness at you at once. Learn to expose in mixed light, pick your anchor, and keep skin honest under competing sources.",
    date: "2035-08-16",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        heading: "Mixed light is two problems at once",
        paragraphs: [
          "Mixed light means sources with different color temperatures and different brightness levels in one frame. A warm lamp on one side and a cool window on the other will expose unevenly no matter what the meter says.",
          "The fix starts with choosing which source you will trust. You cannot serve all of them equally, so pick the one that touches your subject."
        ]
      },
      {
        heading: "Pick your anchor and expose for it",
        paragraphs: [
          "Find the light that lands on the face and expose for that. Let the cooler or warmer source fall where it may. A slightly off color in the background reads as atmosphere, not error.",
          "Once the anchor is set, white balance becomes the next decision. Fix the color of the key light and let the others disagree on purpose."
        ]
      },
      {
        quote: "Mixed light is not a problem to solve. It is a mood to aim, and your job is to decide which color wins."
      },
      {
        heading: "When to fight and when to lean in",
        paragraphs: [
          "Sometimes you want the contrast. A blue window against a warm interior can look intentional and rich. Other times the color clash is ugly and you need to kill one source.",
          "Practical fixes beat technical ones. Turn off the lamp, draw the blind, or move the subject two steps toward the window. The fastest solution is usually a hand, not a setting."
        ]
      },
      {
        heading: "Keeping skin believable",
        paragraphs: [
          "Skin is the one thing that has to look right under mixed light. If the face reads warm when it should read neutral, the shot feels off even if nobody can say why.",
          "Check skin under each source before you roll. If the face crosses between two colors, decide where the cut sits or light it yourself."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Choose one source as your exposure anchor and stick with it.",
          "Set white balance for the light on your subject, not the room.",
          "Let secondary sources disagree when the contrast looks good.",
          "Fix mixed light with practical moves before reaching for settings.",
          "Guard skin color above every other element."
        ]
      },
      {
        heading: "Plan before you shoot",
        paragraphs: [
          "Walk the room and name each source out loud: key, fill, background. Decide which one wins before the camera comes out. Then expose for the winner and shoot."
        ]
      }
    ]
  },
  {
    slug: "exposure-lock-your-exposure",
    title: "Lock Your Exposure Before The Light Moves On You",
    excerpt: "Auto exposure drifts whenever your subject starts to move. Learn to lock your exposure so a bright doorway or passing cloud does not ruin a good take.",
    date: "2035-08-19",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        heading: "Auto exposure follows the scene, not your subject",
        paragraphs: [
          "Left to itself, the camera re-meters every time the frame changes. Pan toward a window and the whole shot dims. Let a cloud pass and it brightens. Your subject may not have moved, but the exposure has.",
          "Locking the exposure freezes one reading so brightness stops chasing the light. That single habit fixes more footage than any lens."
        ]
      },
      {
        heading: "Ways to lock it",
        paragraphs: [
          "On a camera, use auto exposure lock or switch fully to manual. On a phone, tap and hold the focus point until the lock indicator appears, then drag the sun icon. The mechanics differ but the goal is the same.",
          "Lock on a face or a midtone, not on the sky. You are choosing the value that matters, then refusing to let the camera second-guess you."
        ]
      },
      {
        quote: "The camera is happy to re-expose your shot a dozen times a minute. You are the only one in the room who knows what the shot is supposed to look like."
      },
      {
        heading: "When locking pays off",
        paragraphs: [
          "Any time your subject stays put but the frame moves, locking wins. A talking head against a window, an interview as people walk behind, a product shot with a hand entering frame.",
          "If both subject and light change, locking can trap you. In that case leave auto on and learn its habits instead."
        ]
      },
      {
        heading: "Watch the seam",
        paragraphs: [
          "When you finally leave or switch modes, the brightness will jump. Cut around it or make the change mid-move so the transition hides. A sudden exposure shift is more distracting than a slightly wrong one.",
          "Good editors hide the seam. Good shooters plan where it lands."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Auto exposure drifts whenever the frame changes.",
          "Lock on a face or midtone, never on the sky.",
          "Lock when the subject is steady but the scene moves.",
          "Leave auto on only when both light and subject keep changing.",
          "Plan where any exposure jump will land."
        ]
      },
      {
        heading: "Make locking automatic",
        paragraphs: [
          "Set your camera to lock exposure with one button press and practice until your thumb finds it without looking. On a phone, the long press becomes second nature.",
          "Once locking is a reflex, you stop reviewing footage and wondering why half of it flickers."
        ]
      }
    ]
  },
  {
    slug: "exposure-on-a-phone",
    title: "Exposure On A Phone: Getting It Right By Hand",
    excerpt: "Phone cameras expose well until they do not. Learn manual exposure on a phone, the sun slider, and when to overrule the automatic result on the fly.",
    date: "2035-08-22",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        heading: "Phones expose for the scene, not the subject",
        paragraphs: [
          "A phone camera is built to make a balanced-looking image fast. That usually works, until the scene has a bright window or a dark stage. Then it protects the average and lets your subject suffer.",
          "The good news is that every phone gives you a way to overrule it. It is built into the camera app, one tap away."
        ]
      },
      {
        heading: "The tap and the slider",
        paragraphs: [
          "Tap where you want the camera to focus and meter. A small sun icon appears beside the focus box. Drag it up to brighten and down to darken. That is manual exposure in its simplest form.",
          "Hold the tap and the exposure locks in place. Now you can move the phone and the brightness will not drift, which matters the moment you start panning."
        ]
      },
      {
        quote: "The phone already knows how to expose an average scene. You are there for the scenes that are not average."
      },
      {
        heading: "When to use a real app",
        paragraphs: [
          "Third party camera apps expose ISO and shutter separately, the same way a mirrorless body does. That control helps in low light, where the phone wants to raise ISO and smear the frame with noise reduction.",
          "For casual footage the built in slider is enough. For anything you will grade, an app that lets you set shutter is worth the few dollars."
        ]
      },
      {
        heading: "Locking color along with exposure",
        paragraphs: [
          "On many phones, locking exposure also holds white balance, which stops the whole scene from shifting color as you move. That is a quiet benefit most people never notice.",
          "If the color drifts anyway, tap a neutral surface first, then lock. Gray pavement works better than a colored wall."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Tap to meter, drag the sun to adjust, hold to lock.",
          "Phones protect the average, so overrule them on contrasty scenes.",
          "Lock exposure before you pan to stop brightness drift.",
          "Use a manual app when you need shutter and ISO control.",
          "Lock on something neutral to keep color steady too."
        ]
      },
      {
        heading: "Practice in a tricky spot",
        paragraphs: [
          "Stand in a doorway with a bright room behind you and shoot into the dark. Drag the sun up and watch the face come back. Then lock it and walk forward.",
          "A few minutes of this and a phone stops being a point and shoot. It becomes a camera with settings you actually control."
        ]
      }
    ]
  },
  {
    slug: "exposure-fixing-in-post",
    title: "Fixing Exposure In Post Within The Honest Limits",
    excerpt: "Post can rescue an exposure miss, but only so far. Learn the honest limits of fixing exposure in post and when to reshoot instead of pushing pixels.",
    date: "2035-08-25",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        heading: "Post adjusts, it does not invent",
        paragraphs: [
          "An editor can lift, lower, and shape the brightness you captured. It cannot recreate detail that was never recorded. Once a highlight clips or a shadow hits the noise floor, the data is simply not there.",
          "So the first question in the grade is not how much can I push, but how much was captured in the first place."
        ]
      },
      {
        heading: "How much is too much",
        paragraphs: [
          "Lifting a stop is usually safe. Two stops starts to show noise and color shift. Three stops is a rescue, not a grade, and it will look like one on a big screen.",
          "The same goes the other way. Pulling down a slightly hot shot is easy. Pulling down a shot that clipped on the face just reveals flat, lifeless skin."
        ]
      },
      {
        quote: "You can fix a wrong exposure. You cannot fix a missing one. That line is the whole discipline."
      },
      {
        heading: "Fix what you can, truthfully",
        paragraphs: [
          "Start with the highlight recovery slider to see if any top end survives. Then set your black point and let the midtones settle. Add a touch of contrast and leave the noise alone.",
          "If the result needs heavy noise reduction to look clean, you have pushed past the limit. Soft skin beats sharp grain only when the grain is the problem."
        ]
      },
      {
        heading: "When to walk away",
        paragraphs: [
          "Sometimes the footage is beyond saving and the honest move is to reshoot. A face that clips, a sky with no gradient, a whole scene shot two stops dark in a dim room. No slider brings those back.",
          "Reshoots are cheaper than a video that looks broken. That is a hard call and the right one."
        ]
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Post shapes existing data; it does not create new data.",
          "One stop of recovery is normal, three is a rescue.",
          "Highlight recovery only works if something was recorded.",
          "Heavy noise reduction is a sign you pushed too far.",
          "Reshoot when the clip is gone, not when it is dark."
        ]
      },
      {
        heading: "Shoot for the grade",
        paragraphs: [
          "If you know you will grade, expose with a little headroom and keep the highlights safe. Give the editor room to move instead of a file pinned to the edges.",
          "The best exposure fix is the one you set up before you pressed record."
        ]
      }
    ]
  },
  {
    slug: "exposure-common-mistakes",
    title: "Common Exposure Mistakes And How To Stop Making Them",
    excerpt: "Most exposure errors repeat across shoots. Spot the common exposure mistakes, understand why they happen, and build habits that keep them out.",
    date: "2035-08-28",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["cinematography", "lighting", "basics"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        heading: "Mistakes have patterns",
        paragraphs: [
          "Exposure errors are rarely random. The same few show up again and again because our instincts fight the camera. Name the pattern and it gets much harder to repeat.",
          "Here are the ones that cost the most, and what to do instead."
        ]
      },
      {
        heading: "Trusting the LCD",
        paragraphs: [
          "The screen on the back of your camera lies. It brightens in sunlight and dims in a dark room, so judging exposure by eye on set is a gamble. Use the histogram or a waveform instead.",
          "If your camera has a false color or zebra tool, use it. The screen is for framing and focus, not for brightness."
        ]
      },
      {
        heading: "Exposing for the wrong thing",
        paragraphs: [
          "Meters average toward gray, so point them at a bright sky and your subject goes dark. Point them at a black wall and everything blows out. Always aim the reading at what you decided matters.",
          "On a face, that usually means spot metering or positive compensation. On a landscape, it might mean protecting the highlights and lifting later."
        ]
      },
      {
        heading: "Chasing a perfect histogram",
        paragraphs: [
          "A balanced histogram is not a goal. A scene shot at night should pile left, and a snowy field should pile right. Chasing a fat middle bump flattens scenes that were supposed to have contrast.",
          "Read the shape against the scene, not against an ideal."
        ]
      },
      {
        quote: "The most common exposure mistake is not a wrong number. It is not deciding what the shot is about before you set one."
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Never judge exposure from the LCD alone.",
          "Aim the meter at your subject, not the brightest thing in frame.",
          "Stop treating a centered histogram as the target.",
          "Protect highlights first, shadows second.",
          "Decide the subject before you touch a dial."
        ]
      },
      {
        heading: "Turn mistakes into checks",
        paragraphs: [
          "Build a short pre-roll checklist: what is the subject, where is the light, what does the histogram shape look like. Three questions, ten seconds, fewer ruined takes.",
          "Habits beat talent on set. The shooters who expose well are usually the ones who check the same few things every time."
        ]
      }
    ]
  }
];
