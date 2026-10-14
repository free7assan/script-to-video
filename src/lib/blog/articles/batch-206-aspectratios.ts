import { Film, Scissors, Layers, Repeat, Eye, Flag, Target, Map, Puzzle, Compass } from "lucide-react";
import type { BlogPost } from "../types";

export const batch206: BlogPost[] = [
  {
    slug: "aspect-ratio-why-16-by-9-became-standard",
    title: "Understanding Why 16 by 9 Became the Standard Frame",
    excerpt:
      "The 16 by 9 aspect ratio won the standard slot through screen manufacturing, broadcast math, and a decade of quiet compromise between rivals.",
    date: "2035-07-02",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Film,
    content: [
      {
        paragraphs: [
          "The 16 by 9 aspect ratio became the standard video frame because it sat between two rival shapes and let everyone sell the same rectangle. It was less a technical triumph than a business truce signed over many years.",
          "Nobody chose it because it was perfect. They chose it because one shape cut costs for screens, cameras, and distribution at the same time, and a shared shape is worth more than a slightly better one.",
        ],
      },
      {
        heading: "Two formats and one long fight",
        paragraphs: [
          "Before 16 by 9, the world split between the 4 by 3 frame of television and the much wider shapes used in cinema. TV sets were nearly square, films were broad, and the gap between them caused constant headaches for anyone moving content across both.",
          "Wide film ratios like 2.39 to 1 looked dramatic on a big screen but lost huge chunks when squeezed onto a square TV. Viewers got used to pan and scan, where an operator picked which part of the frame to show. It worked, and it annoyed a lot of directors who had composed the whole width on purpose.",
        ],
      },
      {
        heading: "The math behind the compromise",
        paragraphs: [
          "Engineers wanted a shape that could hold both a 4 by 3 image and a wide image without wasting too much glass. The answer sat at the geometric mean of the two, near 1.78 to 1, which the industry named 16 by 9.",
          "That single number let a widescreen film fill most of the screen with thin bars, while older square content fit with bars on the sides. Both looked acceptable, which is the most any standard can promise and often the most it should.",
          "Manufacturers liked it because one panel ratio served computer monitors and televisions alike. Shared demand pushed costs down and made 16 by 9 the quiet default in nearly every device you own.",
        ],
      },
      {
        quote:
          "A standard is rarely the best option. It is the option the most powerful people can agree to stop fighting about.",
      },
      {
        heading: "Why it stuck once it spread",
        paragraphs: [
          "Once screens, cameras, and edit software all assumed 16 by 9, switching became expensive for everyone. Every new tool inherited the old shape, and every creator learned to frame for it. The cost of leaving grew with each passing year.",
          "Streaming sealed the deal. A platform hosting both film and television needed one container, and 16 by 9 was already in place. The standard stopped being a debate and became a background assumption nobody questions.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "16 by 9 sits near the middle between square TV and wide cinema.",
          "It won because one shape lowered costs across many industries.",
          "Shared demand from monitors and TVs pushed prices down.",
          "Pan and scan was the awkward workaround it replaced.",
          "Once tools and habits adopted it, leaving got too costly.",
        ],
      },
      {
        heading: "What this means when you frame today",
        paragraphs: [
          "You inherit a shape chosen by committees, not artists. That is fine as long as you know it. When a platform asks for a different ratio, you are not breaking a law, just stepping off a default that was never sacred.",
          "Treat 16 by 9 as the safe center and build your other versions outward from it. The history explains the habit, and the habit is yours to bend whenever a shot deserves a different window.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-cropping-for-square-and-vertical",
    title: "Cropping Footage for Square and Vertical Frames",
    excerpt:
      "Cropping video for square and vertical aspect ratios fails when you cut the center. Plan the new frame around your subject and the story survives.",
    date: "2035-07-05",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Scissors,
    content: [
      {
        paragraphs: [
          "Cropping for square and vertical aspect ratios works when you recompose around a subject instead of slicing the middle out of the original. A center cut is fast and almost always wrong, because the interesting part of a wide shot is rarely dead center.",
          "The reframe is a second act of directing. You choose what the viewer sees, and you accept that some of the original frame will never be shown to anyone.",
        ],
      },
      {
        heading: "Find the subject before you place the crop",
        paragraphs: [
          "Watch the clip and name the one thing the viewer must see. It might be a face, a hand, a product, or a moving object. Then hold the crop on that subject and let the action guide the frame instead of a fixed center line.",
          "If two people share the shot, pick the one who is talking. If movement crosses the frame, pan the crop to follow it. An audience never misses what was cut when the new frame feels deliberate and steady.",
        ],
      },
      {
        heading: "Square is not a small wide shot",
        paragraphs: [
          "A square frame is symmetrical, so it rewards centered, balanced compositions. I usually push the subject toward the middle and fill the leftover corners with simple graphics or a soft background. Placing a face off in one corner of a square makes the whole image feel lopsided.",
          "Vertical is the opposite problem. Tall space is generous, so I scale the subject up until they own the height and let the background shrink to slivers. A wide shot squeezed into a tall frame leaves a thin band of nothing, so I crop tighter than feels comfortable.",
        ],
      },
      {
        quote:
          "A reframe is not a technical step. It is the moment you decide what the scene was always about.",
      },
      {
        heading: "Protect resolution and edges",
        paragraphs: [
          "Every crop throws away pixels, so a 4K master gives you real room to work. A 1080p source cropped to square or vertical can soften fast, especially after you scale up. Shoot wider and higher than the delivery needs if you know other ratios are coming.",
          "Watch the edges of the source as you move the crop. A sleeve, a chair leg, or half a stranger often sits just outside the safe area and enters the frame the second you slide the window. Nudge the crop until the edges are clean.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Recompose around a subject instead of cutting the center.",
          "Follow movement with the crop rather than freezing it.",
          "Center and balance compositions for a square frame.",
          "Scale the subject up to fill tall vertical space.",
          "Shoot at higher resolution to leave crop room.",
        ],
      },
      {
        heading: "Build the habit of the second edit",
        paragraphs: [
          "I treat a reframe as a fresh edit with its own pacing and its own hero moments. The old timeline is reference, not a template. That mindset change is what separates a clean square or vertical cut from a stretched one.",
          "Do it once and it becomes quick. The first few reframes feel slow, then your eye starts seeing the new frame before you touch the software.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-safe-areas-across-formats",
    title: "Safe Areas to Protect Across Every Aspect Ratio",
    excerpt:
      "Safe areas shift with each aspect ratio and every interface layer. Keep your important content in the middle band and nothing gets covered.",
    date: "2035-07-08",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Safe areas are the parts of a frame that survive every crop and sit beneath no interface control. They change as the aspect ratio changes, so the only dependable rule is to keep faces, text, and products near the center of every version.",
          "Most editors learn this the hard way. A name fits perfectly in a wide cut and disappears under a caption bar once the same clip runs vertical on a phone.",
        ],
      },
      {
        heading: "Why the edges belong to someone else",
        paragraphs: [
          "When a video plays full screen, the platform overlays its own controls. A bottom strip might hold a username, a music note, and a progress bar. The top might carry a title or a profile icon. Those layers move and none of them ask you first.",
          "The exact same clip can lose different edges on different apps. A layout that is safe on one feed is crowded on another. That is why I design for the most crowded case and let the roomier platforms show a little extra breathing space.",
        ],
      },
      {
        heading: "Map the zones for each ratio",
        paragraphs: [
          "I sketch a rectangle inside the frame and treat everything outside it as borrowed. In a wide shot, that inner box is centered and generous. In a vertical shot, the box is tall and narrow, and the top and bottom shrink fast.",
          "A square frame sits somewhere between the two, with corners that get clipped on some players. I keep critical content inside a circle that fits all three shapes, which is roughly the intersection of wide, square, and vertical safe zones.",
        ],
      },
      {
        quote:
          "The frame you export is never the frame the viewer sees. Every app keeps a little for itself.",
      },
      {
        heading: "Design once, check everywhere",
        paragraphs: [
          "I keep an overlay on the timeline that marks the danger areas and switch it on for every project. New work starts with the overlay visible. After a while the habit sticks and I frame for the center without thinking.",
          "Before export, I preview in the actual apps on an actual phone. That last check catches the button rows and caption bars that no template knows about, and it takes two minutes instead of a re-upload.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Keep important content near the center of every ratio.",
          "Treat the outer edge as space that can be covered.",
          "Design for the most crowded platform layout.",
          "Preview in the real app before you publish.",
          "Recheck safe zones after a platform updates its player.",
        ],
      },
      {
        heading: "Make safe zones a reflex",
        paragraphs: [
          "The best time to think about safe areas is on set, not in the edit. When I frame a shot, I already leave the outer margin empty on purpose. That single habit saves a caption from eating the punchline later.",
          "Give it a week of attention and it stops being a checklist. Your eye starts protecting the center by default, which is exactly where it should have been all along.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-exporting-multiple-versions",
    title: "Exporting Multiple Aspect Ratio Versions From One Edit",
    excerpt:
      "Exporting several aspect ratio versions from one edit keeps your message consistent. Build a master, then derive each ratio with intent, not guesswork.",
    date: "2035-07-11",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Exporting multiple aspect ratio versions from one edit starts with a single master and a deliberate plan for each destination. The goal is a family of cuts that share a message but fit their own screens.",
          "The lazy version is one export stretched into every shape. The careful version treats each ratio as its own frame, then reuses the same footage, captions, and pacing underneath.",
        ],
      },
      {
        heading: "Choose the master first",
        paragraphs: [
          "Before any export, I decide which ratio is the source of truth. If the clip lives mostly on YouTube, the wide master leads and I derive the rest. If it is built for a phone feed, the vertical master leads and the wide version is the adaptation.",
          "Everything downstream inherits the master's timing and hero moments. Knowing which frame leads stops the endless argument about which crop looks best, because the leader is already set.",
        ],
      },
      {
        heading: "Keep one timeline and branch it",
        paragraphs: [
          "I duplicate the sequence for each ratio instead of rebuilding from scratch. The audio, the graphics, and the cut points stay shared, so a change to the script updates every version at once.",
          "Each branch gets its own reframing and its own caption placement. The wide branch keeps the original composition. The square branch centers the subject. The vertical branch scales up and protects the middle band.",
        ],
      },
      {
        quote:
          "A master is a commitment. Pick the frame the story was born in, then let every other ratio serve it.",
      },
      {
        heading: "Automate the boring parts",
        paragraphs: [
          "Caption styling, burn-in, and file naming are the same across every version, so I template them. A consistent naming pattern like channel, title, and ratio saves hours when a library grows into the hundreds.",
          "I also set export presets per platform so the bitrate and codec match what each feed wants. Doing this once means every future export is a click, not a research project.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick one master ratio before you export anything.",
          "Duplicate the sequence and branch it per ratio.",
          "Keep audio and cut points shared across versions.",
          "Give each branch its own reframe and captions.",
          "Template captions, naming, and export presets.",
        ],
      },
      {
        heading: "Review side by side",
        paragraphs: [
          "I lay the versions next to each other and watch them together. The eye catches a caption that sits too low or a subject that drifts off frame faster than any checklist. One pass, then publish.",
          "The whole process feels heavy the first time and light after that. Ten destinations do not need ten productions, just one master and a clear plan for each shape.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-and-composition",
    title: "How Aspect Ratio Changes Your Composition Choices",
    excerpt:
      "Aspect ratio shapes composition before you ever touch a camera. Wide, square, and tall frames each reward a different way of arranging a shot.",
    date: "2035-07-14",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Eye,
    content: [
      {
        paragraphs: [
          "Aspect ratio shapes composition because the frame decides where the eye can travel and how much empty space a subject must survive. A wide window rewards horizontal movement and layered depth, while a tall window rewards a single strong vertical subject.",
          "Change the shape and you change the rules. That is why composing for several ratios at once is a skill worth building, not a chore to rush at export.",
        ],
      },
      {
        heading: "Wide frames want depth and motion",
        paragraphs: [
          "A 16 by 9 frame is generous from side to side, so it handles two subjects, a horizon, and layered foreground well. I use those empty sides for movement, letting a walk or a car cross the frame and give the shot a sense of travel.",
          "The risk is a wide frame that feels empty. If the middle holds nothing and the edges hold nothing either, the shot reads as flat. I add foreground, a second subject, or a graphic to give the width a reason to exist.",
        ],
      },
      {
        heading: "Square frames want balance",
        paragraphs: [
          "A square frame has no strong direction, so it rewards symmetry and clean centering. A single subject in the middle feels steady. A subject off to one side leaves an awkward gap unless you fill it on purpose.",
          "I think of a square like a portrait or an album cover. It wants a clear focal point and a background that supports it. Detail is still visible, so a tidy set matters more here than in a cramped vertical frame.",
        ],
      },
      {
        heading: "Tall frames want one hero",
        paragraphs: [
          "A vertical frame is a spotlight. It holds a face, a hand, or a product beautifully and crowds everything else. Two people in a tall frame means one of them lives at the edge, half present, waiting for their turn.",
          "I compose vertical shots close and cut fast. Empty corners at the top and bottom become room for captions. The composition is less about balance and more about stacking information from head to hand.",
        ],
      },
      {
        quote:
          "The frame is not a container you pour a scene into. It is a set of instructions the scene has to obey.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Let the frame shape the shot before the shoot begins.",
          "Use wide space for motion, depth, and two subjects.",
          "Keep square compositions balanced and centered.",
          "Treat vertical as a spotlight for one hero.",
          "Reserve corners and edges for captions and controls.",
        ],
      },
      {
        heading: "Think in the frame you will deliver",
        paragraphs: [
          "The cleanest path is to compose for the primary delivery and design the others as adaptations. You will still shoot coverage, but you will know which shape leads and which one follows.",
          "That clarity shows up on screen. A clip composed for its own frame feels settled, while one that was filmed for another and cropped late always feels a little cramped.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-letterboxing-vs-cropping",
    title: "Letterboxing Versus Cropping: Which Fits Your Footage",
    excerpt:
      "Letterboxing versus cropping is a choice about what matters more, the full image or the full screen. Each option trades something away.",
    date: "2035-07-17",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "Letterboxing versus cropping comes down to a simple trade. Letterboxing keeps the whole image and gives up screen area. Cropping fills the screen and gives up part of the image. Neither is wrong, and the right pick depends on the shot.",
          "The mistake is treating one as the professional choice and the other as a habit. Good editors switch between them based on what the frame is protecting.",
        ],
      },
      {
        heading: "What letterboxing protects",
        paragraphs: [
          "Letterboxing adds bars to fit a wider image inside a narrower screen. Nothing in the original frame is lost, which matters for a cinematic composition, a wide landscape, or any shot where the edges carry meaning.",
          "The cost is real estate. On a phone, bars can eat a third of the screen, and a viewer may swipe past a clip that looks small and dim compared to a full-frame neighbor. Letterboxing is honest and sometimes self-defeating.",
        ],
      },
      {
        heading: "What cropping gains",
        paragraphs: [
          "Cropping fills the screen edge to edge, which reads as bold and immediate on a phone. The subject gets bigger and the frame feels native to the platform rather than imported from somewhere else.",
          "The risk is losing context. A wide shot cropped hard can bury a second character, a prop, or a piece of the environment the story relied on. If the cut removes something the scene needed, the shot gets weaker even as the screen fills.",
        ],
      },
      {
        quote:
          "Bars preserve the image. Cropping preserves the attention. You have to decide which one the shot can spare.",
      },
      {
        heading: "How I decide per shot",
        paragraphs: [
          "I ask whether anything outside the crop actually matters. If the answer is no, I crop and enjoy the full screen. If the edges hold a face, a detail, or a mood, I letterbox and let the bars do their job.",
          "Sometimes I blend the two. I can crop slightly and add a thin frame or a background fill instead of heavy black bars. A blurred, enlarged copy of the image behind the letterboxed version keeps the screen feeling full without cutting content.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Letterboxing keeps the whole image and loses screen area.",
          "Cropping fills the screen and loses part of the image.",
          "Choose per shot based on what the edges carry.",
          "Heavy bars can make a phone clip feel small.",
          "A background fill is a middle path between the two.",
        ],
      },
      {
        heading: "Consistency still matters",
        paragraphs: [
          "Whichever route a clip takes, I try to keep the style steady across a series. Jumping between full-frame crops and heavy bars from one video to the next looks accidental, not artistic.",
          "Pick a default for your channel and break it only when a shot truly demands it. The audience reads consistency as care.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratios-for-ads",
    title: "Picking Aspect Ratios for Every Paid Ad Placement",
    excerpt:
      "Aspect ratios for ads vary by placement, and a single square can waste budget. Match the shape to the slot before you spend on impressions.",
    date: "2035-07-20",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "Aspect ratios for ads need to match the placement or you pay for pixels nobody sees. The same creative in the wrong shape gets letterboxed, cropped, or squeezed by the ad server, and the budget suffers with it.",
          "Before any spend, I check the spec sheet for each placement and build the shapes it asks for. A little planning up front beats a week of guessing why one slot underperforms.",
        ],
      },
      {
        heading: "The three shapes that cover most slots",
        paragraphs: [
          "Most paid placements fall into wide, square, or vertical. Feeds and in-article blocks often want square or near-square. Stories, reels, and short-video surfaces want vertical. Display banners and pre-roll lean wide.",
          "If I can only build a few versions, I start with 1 to 1, 4 to 5, 9 to 16, and 16 to 9. That set covers the vast majority of placements and keeps the work manageable.",
        ],
      },
      {
        heading: "Design for the smallest safe area",
        paragraphs: [
          "Ad networks often crop a single creative to fit several slots, so I keep the logo, the headline, and the product in the center. Anything important near an edge risks being cut by a resize I never see.",
          "I also keep text minimal and large. Small type that survives a desktop preview can vanish on a phone, and a viewer will not lean in to read an ad. The message has to land in a glance.",
        ],
      },
      {
        quote:
          "An ad in the wrong shape is a tax. You pay full price for a fraction of the attention.",
      },
      {
        heading: "Adapt the message, not just the frame",
        paragraphs: [
          "A wide banner and a vertical story are read in different moods. The banner sits beside content and competes for a glance, so it needs one sharp claim. The story holds the whole screen, so it can build a small moment before the call to action.",
          "I rewrite the copy for each shape instead of stretching one line. The frame changes how much room the idea has, and the words should respect that.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Match every creative to the placement spec sheet.",
          "Build square, vertical, and wide as your base set.",
          "Keep logos, text, and product near the center.",
          "Use large type that reads on a small screen.",
          "Rewrite copy for each shape, do not stretch it.",
        ],
      },
      {
        heading: "Test the shapes against each other",
        paragraphs: [
          "Once the versions exist, I run them side by side and let the numbers speak. Sometimes the vertical wins, sometimes the square does. The point is that each slot gets a fair shape instead of a forced one.",
          "Track cost per result by placement, not just by campaign. That view tells you which ratio earns its budget and which is quietly wasting it.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-for-social-platforms",
    title: "Aspect Ratio Guide for Major Social Media Platforms",
    excerpt:
      "The right aspect ratio for social platforms keeps a post from being cropped by the feed. Learn the common shapes and how to protect a posting.",
    date: "2035-07-23",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Map,
    content: [
      {
        paragraphs: [
          "The right aspect ratio for social platforms depends on where the post lands, because each feed crops to its own house shape. Get it wrong and your carefully framed image loses its top, its caption, or both.",
          "A practical approach is to know the common shapes, shoot a little wider than the tightest one, then export a version per platform instead of trusting a single upload.",
        ],
      },
      {
        heading: "Vertical leads the short feeds",
        paragraphs: [
          "Short feeds and story formats are built for tall frames, so 9 by 16 is the native shape there. Content in this shape takes the full screen and feels made for the place it appears, which helps completion rate.",
          "The catch is the interface. The top and bottom of a 9 by 16 frame get covered by profiles, captions, and buttons. I keep the story inside the middle and let the extremes hold background.",
        ],
      },
      {
        heading: "Square still fits the grid",
        paragraphs: [
          "A 1 to 1 square remains a safe choice for feed grids, carousels, and thumbnails. It is symmetrical, it crops politely, and it looks tidy whether the viewer is on a phone, a tablet, or a desktop.",
          "I use square for product shots, quotes, and anything that benefits from a calm, centered composition. It forgoes drama for reliability, and reliability carries far in a crowded grid.",
        ],
      },
      {
        heading: "Wide works for embeds and video pages",
        paragraphs: [
          "16 by 9 is the default for embedded players, longer video pages, and most landscape feeds. If a clip will live in a player with controls, a wide frame avoids awkward bars on the sides.",
          "When I post a wide clip to a mostly vertical feed, I expect a crop. I keep the subject centered and the text high so the automated cut does not slice through the point I was making.",
        ],
      },
      {
        quote:
          "Pick the shape the platform wants first. Fighting the feed with the wrong ratio is a losing bet.",
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Vertical leads short feeds and story formats.",
          "Square stays safe for grids and carousels.",
          "Wide suits embeds and full video pages.",
          "Expect a crop when a shape does not match the feed.",
          "Export a version per platform instead of one upload.",
        ],
      },
      {
        heading: "Keep a small ratio kit",
        paragraphs: [
          "I keep a folder of export presets for 9 by 16, 1 to 1, and 16 by 9 so any clip can ship to any feed in minutes. The kit turns a scrappy post into a deliberate one.",
          "The platforms keep shifting their shapes, so I review the presets twice a year. A stale kit is almost as bad as no kit at all.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-protecting-framing-when-repurposing",
    title: "Protecting Your Framing When Repurposing Video",
    excerpt:
      "Protecting your framing when repurposing video means designing shots that can survive a second shape. Plan extra margin before you ever roll.",
    date: "2035-07-26",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Puzzle,
    content: [
      {
        paragraphs: [
          "Protecting your framing when repurposing video is a planning decision you make before the shoot, not a fix you apply in the edit. If a shot might be reused in another shape, frame it with room to spare.",
          "The idea is simple. Compose the primary frame you need, then check whether a tighter crop would still hold the subject. If it would not, adjust on set while the camera is still rolling.",
        ],
      },
      {
        heading: "Shoot with a center bias",
        paragraphs: [
          "I keep the important action near the middle of the frame even on a wide shot. That way a later crop to square or vertical keeps the subject intact, and I am not forced to choose between losing the face and losing the moment.",
          "This does not mean every shot has to be centered and dull. It means the story-critical element lives in a zone that survives a reshape, while the decorative parts of the frame can fall away without harm.",
        ],
      },
      {
        heading: "Leave headroom and side room",
        paragraphs: [
          "A little breathing space at the top lets a vertical version keep the head in frame. A little room on the sides lets a wide or square version keep the subject from touching an edge. Neither margin costs you anything on the day.",
          "I also shoot at a higher resolution than the delivery needs when I suspect reuse. The extra pixels are the budget that pays for every future reframe.",
        ],
      },
      {
        quote:
          "Framing that survives repurposing is not tight. It is tight in the middle and generous at the edges.",
      },
      {
        heading: "Move the text, not just the image",
        paragraphs: [
          "Text is the first casualty of a repurpose. A caption that fits a wide banner wraps into four lines in a vertical frame. I keep captions short, place them in the center band, and treat them as separate layers so each version can reposition them.",
          "When text is burned into the footage, a reframe can cut it in half. Keeping text on its own layer means every ratio gets a readable version and I never ship a half-word.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Plan reusable framing before the camera rolls.",
          "Keep story-critical action near the center.",
          "Leave headroom and side room for future crops.",
          "Shoot above delivery resolution to allow reframes.",
          "Keep captions on a layer that can be repositioned.",
        ],
      },
      {
        heading: "Make repurposing a default",
        paragraphs: [
          "I assume every good clip will end up in more than one place. That assumption quietly changes how I shoot, and it pays off every time a clip gets a second life months after the first upload.",
          "Protecting framing costs almost nothing on set. Recovering a ruined shot later can cost a reshoot, which is a trade I will take every time.",
        ],
      },
    ],
  },
  {
    slug: "aspect-ratio-choosing-a-master",
    title: "Choosing a Master Aspect Ratio for Your Channel",
    excerpt:
      "Choosing a master aspect ratio gives your channel a consistent frame and simplifies every future export and repurpose decision.",
    date: "2035-07-29",
    author: { name: "GoScript Team", role: "Design" },
    tags: ["format", "technical", "distribution"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Compass,
    content: [
      {
        paragraphs: [
          "Choosing a master aspect ratio means picking the frame your channel treats as home and deriving every other version from it. A master keeps your look consistent and turns each new export into a small, familiar task.",
          "It is a decision about strategy, not just pixels. The shape you lead with tells the audience where your work belongs and how it should be watched.",
        ],
      },
      {
        heading: "Let distribution decide",
        paragraphs: [
          "Start with where most of your views happen. A channel built on long video pages should lead wide at 16 by 9. A channel that lives in short feeds should lead vertical at 9 by 16. The biggest audience gets the native shape.",
          "If you are split evenly, lead with the shape that is hardest to fake. It is easier to crop a wide master into vertical than to rebuild a vertical master into a convincing wide one.",
        ],
      },
      {
        heading: "Consider your subject",
        paragraphs: [
          "Talking heads and product close-ups sit naturally in a tall or square frame. Scenes with two people, movement, or a wide environment want horizontal room. Match the master to what you actually film most.",
          "A cooking channel benefits from the height of a vertical close-up on hands. A travel channel benefits from the width of a horizon. The subject quietly votes for a shape.",
        ],
      },
      {
        quote:
          "Your master ratio is a promise to your audience about how they will see your work.",
      },
      {
        heading: "Build the discipline around it",
        paragraphs: [
          "Once the master is set, I frame every shot for it first and design other ratios as adaptations. The master gets the meticulous composition. The rest get a clean crop and their own caption placement.",
          "I also document the choice in the channel playbook so editors, freelancers, and future me all start from the same frame. A written standard beats a hundred verbal reminders.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick the frame where most of your views happen.",
          "Lead with the shape that is easiest to crop from.",
          "Match the master to your most common subject.",
          "Frame every shot for the master first.",
          "Write the choice down so the whole team follows it.",
        ],
      },
      {
        heading: "Revisit it once a year",
        paragraphs: [
          "Platforms change and audiences move. A master that fit three years ago may not fit now. I review the choice once a year, during a slow week, and change it only if the data is clearly pointing elsewhere.",
          "Changing a master is expensive, so it should be rare and deliberate. Pick well, commit, and let the consistency do the quiet work of building a recognizable channel.",
        ],
      },
    ],
  },
];
