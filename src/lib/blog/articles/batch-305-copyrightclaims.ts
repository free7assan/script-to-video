import {
  Flag,
  Search,
  MessageSquare,
  Target,
  Zap,
  Waves,
  Feather,
  BookOpen,
  Layers,
  Repeat,
} from "lucide-react";
import type { BlogPost } from "../types";

export const batch305: BlogPost[] = [
  {
    slug: "copyright-claim-vs-strike",
    title: "Copyright Claim Versus Strike: What Actually Happens",
    excerpt:
      "A copyright claim and a copyright strike look alike in your dashboard, but they carry very different stakes for your channel and your account.",
    date: "2043-10-02",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Flag,
    content: [
      {
        paragraphs: [
          "A copyright claim is a request for the ad money a specific video earns. A strike is a penalty against your entire channel that can strip upload rights and freeze features. They arrive through the same notification bell, yet the consequences could not be more different. Reading the label correctly is the first step to a calm response.",
          "New creators often treat the two as the same scare, which leads to slow answers and avoidable damage. Knowing which one sits in front of you changes every decision that follows, from how fast you move to whether you hire help.",
        ],
      },
      {
        heading: "What a claim actually means",
        paragraphs: [
          "A claim usually comes from Content ID, the system that scans uploads against a database of copyrighted works. When a match fires, the rights holder can take the video's revenue, mute it in some regions, or block it entirely. All of that can happen before a human ever watches your upload.",
          "A claim is not an accusation of theft. It is an assertion of ownership over some part of your video, and the upload typically stays live while you sort it out. You keep your audience, your comments, and your watch time.",
          "Claims are common and often wrong. A few seconds of background music, a clip from a game, or a sound effect can trigger one without anyone intending harm. The system is built to catch matches, not to judge intent.",
        ],
      },
      {
        heading: "What a strike actually means",
        paragraphs: [
          "A strike is a formal penalty issued after a copyright owner files a legal takedown request. It lands on the channel rather than a single video, and it arrives with a warning and a countdown. That countdown is the part most people miss.",
          "Three strikes within 90 days ends the channel outright. A single strike also freezes features like live streaming and new uploads for a period, which can stall a growing account at the worst possible moment.",
        ],
      },
      {
        quote: "A claim asks for your money. A strike asks for your channel.",
      },
      {
        heading: "Why the gap matters",
        paragraphs: [
          "Because a claim is financial, you can usually resolve it without real risk. You can dispute, replace the audio, or share revenue, and the video stays up through most of it. None of those choices threaten the account itself.",
          "A strike is procedural and severe. You have limited options, tight deadlines, and a permanent mark that adds up across your channel. Every strike you collect brings the three strike limit closer.",
          "Mixing these up is how creators lose money they did not need to lose. Treat a claim as a negotiation and a strike as an emergency.",
        ],
      },
      {
        heading: "Where each one comes from",
        paragraphs: [
          "Claims arrive through automated matching most of the time, which means no human reviewed your video before your revenue vanished. The quiet part is that automated matches fail constantly on short or altered audio.",
          "Strikes require a rights holder to submit a formal legal notice. Someone decided your use crossed a line and attached their name to the complaint, so the stakes and the paperwork are heavier.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A claim takes money from one video, while a strike penalizes the whole channel.",
          "Content ID claims are automatic and common, so most of them are survivable.",
          "Strikes come from legal takedown requests and count against a 90 day window.",
          "Three active strikes can terminate a channel, so treat strikes as urgent.",
          "You can resolve claims with disputes or edits, but strikes need a formal response.",
        ],
      },
    ],
  },
  {
    slug: "copyright-content-id-explained",
    title: "How YouTube Content ID Flags Your Videos Automatically",
    excerpt:
      "Content ID scans every upload against a massive database, and that one system quietly decides the fate of millions of copyright claims each day.",
    date: "2043-10-04",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Search,
    content: [
      {
        paragraphs: [
          "Content ID is the automated copyright matching system that runs every time you upload. It compares your audio and video against a database of files that rights holders have submitted, then flags anything it believes belongs to them.",
          "The check happens in minutes, long before a person could watch your video. If a match scores high enough, the system applies whatever policy the rights holder chose.",
        ],
      },
      {
        heading: "How the matching actually works",
        paragraphs: [
          "Rights holders upload reference files to YouTube, each tied to a policy. Those policies range from monetizing your video to blocking it worldwide, and the system applies the choice automatically.",
          "When your upload plays, Content ID looks at audio fingerprints and visual patterns. A match is a probability, not a verdict, and short or distorted clips can score as matches even when they should not.",
          "That is why a two second hum, a car horn, or a bit of crowd noise can trigger a claim on a video you made entirely yourself.",
        ],
      },
      {
        heading: "The policies you can expect",
        paragraphs: [
          "A monetize policy lets your video stay up while the rights holder collects the ad income. A block policy removes it in some or all countries, and a mute policy silences the matched audio.",
          "Some holders set the policy to track only. Those videos stay up, keep their revenue, and simply report data back to the owner, which is a useful reminder that not every claim is a demand.",
        ],
      },
      {
        quote:
          "Content ID does not ask whether your use is fair. It asks whether your file resembles a reference file.",
      },
      {
        heading: "Why so many claims are wrong",
        paragraphs: [
          "The database holds millions of references, and many overlap. Public domain recordings, licensed stock, and even silence have triggered matches in the past.",
          "Rights holders also change policies over time, so a video that sat clean for years can pick up a claim later without you touching it. Age is no protection once a new reference enters the pool.",
        ],
      },
      {
        heading: "What this means for your workflow",
        paragraphs: [
          "Assume every upload will be scanned and plan around it. Keep a copy of every license, receipt, and source note so a dispute takes minutes instead of days.",
          "When a match looks wrong, you can dispute it, and the rights holder has 30 days to respond. If they do nothing, the claim expires and your revenue returns.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Content ID is automatic and compares your file to a reference database.",
          "Policies set the outcome, from taking revenue to blocking the video.",
          "Matches are probabilities, so short clips trigger false claims often.",
          "You can dispute a match, and silence from the holder expires the claim.",
          "Keeping licenses on hand turns a stressful dispute into a quick reply.",
        ],
      },
    ],
  },
  {
    slug: "copyright-disputing-a-claim",
    title: "Disputing a Copyright Claim on YouTube Step by Step",
    excerpt:
      "Disputing a copyright claim is a structured process, and following the steps in order keeps your video live while you make your case on YouTube.",
    date: "2043-10-06",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: MessageSquare,
    content: [
      {
        paragraphs: [
          "Disputing a copyright claim is a structured process with clear steps and firm deadlines. You are telling YouTube and the rights holder that the match is wrong, and you are asking for the money back.",
          "The important detail is that your video stays up while the dispute runs. You are not gambling the upload by speaking up, at least not until the later stages.",
        ],
      },
      {
        heading: "Start with the claim details",
        paragraphs: [
          "Open the claim in YouTube Studio and read which part of the video matched. The panel will name the song or clip, the rights holder, and the policy they applied.",
          "Sometimes the fix is obvious and does not need a dispute. If the matched audio is a small background track, muting or trimming it removes the claim in minutes.",
        ],
      },
      {
        heading: "Write a dispute a human can verify",
        paragraphs: [
          "A dispute asks why you believe the claim is wrong. Pick the reason that fits, then add a short explanation with a date, a source, or a license name.",
          "Do not paste a long emotional appeal. Give the reviewer facts they can check, such as the recording date, the public domain status, or the license you hold.",
        ],
      },
      {
        quote: "A dispute works best when it reads like a receipt, not a speech.",
      },
      {
        heading: "What happens after you submit",
        paragraphs: [
          "The rights holder has 30 days to answer. If they release the claim, your video returns to normal and the revenue comes back.",
          "If they reject your dispute, you can appeal, but the video may pick up the original policy again during the wait. If you win at the appeal stage, that claim cannot return.",
        ],
      },
      {
        heading: "When to walk away",
        paragraphs: [
          "Not every wrong claim is worth the fight. If the matched clip is a minor part of a large video, deleting that clip can be faster than a month of waiting.",
          "Save your disputes for cases where the claim takes real money or threatens the video's reach. Pick your battles and keep your record clean.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Your video usually stays live during a dispute, so speaking up is low risk.",
          "Read the claim first, because trimming a small clip may end it instantly.",
          "Give reviewers checkable facts instead of a long emotional story.",
          "The rights holder has 30 days, and silence expires the claim in your favor.",
          "Appeals can reintroduce the claim, so use them for cases that matter.",
        ],
      },
    ],
  },
  {
    slug: "copyright-false-claim-response",
    title: "When a Copyright Claim Is Wrong: Fixing Bad Matches",
    excerpt:
      "A copyright claim can be flat wrong, and the fastest fix is a calm dispute backed by the license or source that proves why the match fails for you.",
    date: "2043-10-08",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Target,
    content: [
      {
        paragraphs: [
          "A copyright claim can be flat wrong, and the fastest fix is often a calm dispute backed by proof. Automated matching fails more than the interface suggests.",
          "Your job is not to prove you are a good creator. Your job is to show that this specific match does not hold up.",
        ],
      },
      {
        heading: "Confirm the match is really wrong",
        paragraphs: [
          "Listen to the section the claim points to and compare it with the reference the system named. Sometimes the match is correct and you simply forgot a track was playing.",
          "If you used a stock track, check whether the license actually covers YouTube. Some purchases cover personal projects only, and that gap is what the claim is flagging.",
        ],
      },
      {
        heading: "Gather your evidence first",
        paragraphs: [
          "Pull the license file, the invoice, or the original recording that shows the work is yours. Note the date you added the audio and the date of the claim.",
          "Screenshots of the license terms and the download page help more than a paragraph of explanation. Reviewers work quickly and trust documents over assertions.",
        ],
      },
      {
        quote: "The strongest dispute is boring. It attaches a file and states a fact.",
      },
      {
        heading: "Submit and track the clock",
        paragraphs: [
          "File the dispute with the clearest reason available, then note the 30 day window. Set a reminder so you do not miss the rights holder's reply.",
          "If they ignore the dispute, the claim expires and the revenue returns automatically. That silent win is more common than most creators realize.",
        ],
      },
      {
        heading: "If the claim keeps coming back",
        paragraphs: [
          "Repeated false matches from the same source can be appealed again or reported. Keep every response so a pattern is easy to show later.",
          "You can also trim or replace the flagged audio if the video earns little and the fight is not worth your time. A pragmatic exit is not a defeat.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Verify the match before disputing, because some claims are correct.",
          "Stock licenses sometimes exclude YouTube, so read the terms first.",
          "Attach licenses, invoices, and receipts rather than writing long appeals.",
          "Ignored disputes expire after 30 days and restore your revenue.",
          "Keep every reply so a repeated false claim becomes easy to prove.",
        ],
      },
    ],
  },
  {
    slug: "copyright-responding-to-strike",
    title: "Responding to a YouTube Copyright Strike the Right Way",
    excerpt:
      "A copyright strike is serious, but a fast and honest response can shorten the damage and keep your channel alive when the mistake was not yours.",
    date: "2043-10-11",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Zap,
    content: [
      {
        paragraphs: [
          "A copyright strike is a formal penalty, and the clock starts the moment it lands. You have a few choices, and each one has a deadline attached.",
          "Read the notice slowly. It names the work, the rights holder, and the exact date of the takedown, and those details shape your next move.",
        ],
      },
      {
        heading: "Understand what you can still do",
        paragraphs: [
          "You can request a retraction from the rights holder if you reach an agreement. You can submit a counter notification if you believe the takedown is wrong. You can also simply wait the strike out.",
          "A strike lasts 90 days if you complete the required steps. It is not permanent by default, but the damage during those weeks is real.",
        ],
      },
      {
        heading: "The retraction path",
        paragraphs: [
          "Retraction only happens if the person who filed the complaint agrees. That usually means removing the video, signing an agreement, or paying for the use.",
          "Reach out politely and admit what happened if you made a mistake. Many holders will retract once the content is gone and the apology is sincere.",
        ],
      },
      {
        quote:
          "A strike is a legal notice, so treat every reply as something a lawyer might read.",
      },
      {
        heading: "When to file a counter notification",
        paragraphs: [
          "A counter notification is a formal legal statement, not a casual message. It says under penalty of perjury that the takedown was a mistake or a misidentification.",
          "Only use it when the claim is genuinely wrong. Filing a false counter can expose you to real legal risk and lose the rights holder's goodwill.",
        ],
      },
      {
        heading: "Protect the channel while you wait",
        paragraphs: [
          "Stop uploading risky material until the strike clears. One more strike during the window doubles the pressure on your account.",
          "Review your back catalog for anything that might match, then remove or replace the audio before it becomes a second strike.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "A strike is a formal penalty with a 90 day countdown, not a single bad day.",
          "Retraction, counter notification, and waiting are your main options.",
          "Reach out to the rights holder politely if you genuinely made a mistake.",
          "A counter notification is a sworn legal statement, so use it honestly.",
          "Pause risky uploads while a strike is active to avoid a second one.",
        ],
      },
    ],
  },
  {
    slug: "copyright-safe-music-choices",
    title: "Avoiding Copyrighted Music in Your YouTube Videos",
    excerpt:
      "Avoiding copyrighted music starts before you open the editor, when you decide which tracks are actually safe to use in your own YouTube videos.",
    date: "2043-10-13",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Waves,
    content: [
      {
        paragraphs: [
          "Avoiding copyrighted music starts before you open the editor. The track you grab in a hurry is the one that turns into a claim weeks later.",
          "The safest habit is to decide on audio sources once, then reuse them instead of searching fresh for every upload.",
        ],
      },
      {
        heading: "Where claims come from in music",
        paragraphs: [
          "Content ID listens to the whole track, including short loops and background beds. Even a quiet instrumental under your voice can trigger a match.",
          "Live performances, covers, and remixes are especially risky because the composition and the recording can each be owned by different people.",
        ],
      },
      {
        heading: "A safer approach to picking tracks",
        paragraphs: [
          "Choose music from a library that grants a clear license for monetized YouTube uploads. Read the license page, not just the marketing line.",
          "Keep the same set of trusted tracks and credit them the way the license requires. Consistency beats a shelf of forgotten downloads.",
        ],
      },
      {
        quote:
          "A track is safe only when you can point to the sentence in the license that says so.",
      },
      {
        heading: "What to do with an existing claim",
        paragraphs: [
          "If a claim already exists, you can often mute the audio or swap the track rather than dispute it. A quick edit removes the problem without a month of waiting.",
          "For videos that earn well, a dispute may be worth it. For a video that earns little, replacing the music is usually the cheaper path.",
        ],
      },
      {
        heading: "Build a repeatable system",
        paragraphs: [
          "Save every license and every download link in one folder tied to the project. When a claim arrives, the answer is already on your drive.",
          "Bookmark two or three reliable libraries and stop improvising. Fewer sources means fewer surprises.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Pick your audio sources up front instead of searching per upload.",
          "Loops and quiet background beds can still trigger a Content ID match.",
          "Covers and remixes carry two rights, so they are riskier than they look.",
          "Muting or swapping the track often beats a long dispute.",
          "Reuse a small set of cleared tracks and keep every license saved.",
        ],
      },
    ],
  },
  {
    slug: "copyright-licensed-royalty-free-audio",
    title: "Licensed and Royalty-Free Audio That Keeps You Safe",
    excerpt:
      "Licensed and royalty-free audio keeps your channel safe, but the terms behind each track matter more than the label on the store you buy from.",
    date: "2043-10-16",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Feather,
    content: [
      {
        paragraphs: [
          "Licensed and royalty-free audio keeps your channel out of trouble, but the terms behind each track matter more than the label on the store. The words free and royalty-free are not the same as safe for monetization.",
          "A license is a set of permissions, not a vibe. Read what it actually allows before you drag the file into your timeline.",
        ],
      },
      {
        heading: "Royalty-free does not mean copyright-free",
        paragraphs: [
          "Royalty-free means you do not pay per play or per view. It does not mean the creator gave up ownership or that every use is covered.",
          "Many royalty-free tracks still require attribution, forbid resale, or limit use in certain contexts. The license spells out those limits in plain language.",
        ],
      },
      {
        heading: "The licenses worth trusting",
        paragraphs: [
          "Creative Commons has several versions, and some allow commercial use while others do not. Check for the commercial and no-derivatives terms before you rely on one.",
          "Beware of public domain claims that are only partly true, because a recording can be public domain while the composition still needs a license.",
        ],
      },
      {
        quote: "Keep the receipt. A license you cannot find is a license you do not have.",
      },
      {
        heading: "Attribution and proof",
        paragraphs: [
          "When a license asks for credit, put the credit where the license says, whether that is the description or the video itself. Save a screenshot of the terms with the date.",
          "If the library changes its terms later, your saved copy shows what you agreed to when you downloaded the track.",
        ],
      },
      {
        heading: "Building a safe audio shelf",
        paragraphs: [
          "Collect a small set of tracks you have cleared and reuse them across videos. Familiar audio means faster editing and fewer claims.",
          "Note the source, the license type, and the download date next to each file. That single habit saves hours when a claim shows up.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Royalty-free is a billing term, not proof that a track is safe.",
          "Read the license for commercial use, attribution, and resale limits.",
          "A public domain recording does not always free the composition.",
          "Keep a screenshot of the terms with the date you downloaded them.",
          "Reuse a small cleared shelf instead of chasing new tracks constantly.",
        ],
      },
    ],
  },
  {
    slug: "copyright-fair-use-myths",
    title: "Fair Use Myths That Get YouTube Creators in Trouble",
    excerpt:
      "Fair use is narrower than most creators think, and treating it as a blanket permission is how many channels end up with copyright strikes on their record.",
    date: "2043-10-19",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: BookOpen,
    content: [
      {
        paragraphs: [
          "Fair use is narrower than most creators think, and treating it as a blanket permission is how channels collect strikes. It is a legal defense you raise after a dispute, not a label you apply to your own video.",
          "Only a court can truly decide fair use. Content ID and YouTube do not make that call for you.",
        ],
      },
      {
        heading: "Myth one: short clips are always safe",
        paragraphs: [
          "There is no magic number of seconds that makes a clip legal. Length is one factor among several, and a brief clip can still be the heart of a song or a joke.",
          "Using a few seconds does not automatically help you if those seconds carry the value someone paid to create.",
        ],
      },
      {
        heading: "Myth two: credit fixes everything",
        paragraphs: [
          "Giving credit is polite and often required, but it does not grant you rights. Attribution and permission are two separate things.",
          "You can name the artist clearly and still face a claim, because the owner decides how their work is used.",
        ],
      },
      {
        quote: "Fair use is a defense, not a permission slip.",
      },
      {
        heading: "Myth three: educational use is exempt",
        paragraphs: [
          "Educational purpose helps your case, but it does not switch off copyright. A channel that earns nothing can still be blocked or struck.",
          "Transformation matters more than your intent. Commentary, criticism, and parody tend to fare better than straight reuse with a credit line.",
        ],
      },
      {
        heading: "What to do instead of guessing",
        paragraphs: [
          "When you are unsure, use licensed material or create the asset yourself. A few minutes of original work beats a legal theory you cannot defend.",
          "If you must use someone else's work, ask for written permission and keep it. A one line email can settle a dispute before it starts.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Fair use is a defense you raise later, not a permission you grant yourself.",
          "There is no seconds count that makes a clip automatically legal.",
          "Crediting an artist does not replace getting permission.",
          "Educational and nonprofit channels can still receive blocks and strikes.",
          "Ask for written permission or make the asset yourself when unsure.",
        ],
      },
    ],
  },
  {
    slug: "copyright-keeping-records",
    title: "Keeping Copyright Records for Every Video You Publish",
    excerpt:
      "Keeping copyright records sounds tedious, yet a simple folder of licenses and sources can settle a claim in minutes instead of dragging on for weeks.",
    date: "2043-10-22",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Layers,
    content: [
      {
        paragraphs: [
          "Keeping copyright records sounds tedious, yet a simple folder of licenses and sources can settle a claim in minutes instead of dragging on for weeks. The record is what turns your word into proof.",
          "You do not need software or a brand new habit. One folder per channel, organized by video, is enough.",
        ],
      },
      {
        heading: "What to save for every video",
        paragraphs: [
          "Store the license or receipt for every track, image, and clip you did not make yourself. Include the download date and the page where the terms lived.",
          "If you bought a pack of assets, keep the invoice and the readme. Those files name the terms you agreed to at purchase.",
        ],
      },
      {
        heading: "How to organize it without friction",
        paragraphs: [
          "Name each file after the video and the asset it covers, then drop it in a dated folder. When a claim arrives, search the video title and you have the answer.",
          "A screenshot takes seconds and survives a website redesign. Terms pages change, and your copy preserves the version you relied on.",
        ],
      },
      {
        quote: "Memory is not a record. A dated file is.",
      },
      {
        heading: "Records during a dispute",
        paragraphs: [
          "A dispute reviewer wants facts, and your folder supplies them fast. Attach the license and state the date, and the case gets simple.",
          "If a claim returns, your history shows the pattern and makes each new response shorter than the last.",
        ],
      },
      {
        heading: "Make it part of the workflow",
        paragraphs: [
          "Save the license as you add the asset, not later. Later never comes, and the claim that needs the file always arrives at the worst time.",
          "Five minutes of filing per video protects revenue and keeps your account in good standing over years of uploads.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "One folder per channel, organized by video, is enough to start.",
          "Save licenses, invoices, and receipts for every asset you did not make.",
          "Screenshot the terms because license pages change over time.",
          "Attach documents during a dispute so reviewers can verify quickly.",
          "File assets as you add them, since later almost never happens.",
        ],
      },
    ],
  },
  {
    slug: "copyright-repeat-infringer-consequences",
    title: "Repeat Copyright Problems and What They Cost Your Channel",
    excerpt:
      "Repeat copyright problems add up on a channel, and the consequences grow faster than most creators expect until a whole account is on the line.",
    date: "2043-10-25",
    author: { name: "GoScript Team", role: "Research" },
    tags: ["legal", "policy", "copyright"],
    readTime: "7 min read",
    accent: "#f97316",
    icon: Repeat,
    content: [
      {
        paragraphs: [
          "Repeat copyright problems add up on a channel, and the consequences grow faster than most creators expect until a whole account is on the line. One strike feels survivable. A pattern does not.",
          "YouTube watches the tally, not the excuse. The same mistake three times is treated very differently from a single slip.",
        ],
      },
      {
        heading: "How the counts stack up",
        paragraphs: [
          "Three strikes within 90 days ends the channel and removes its videos. The window matters, so old strikes that expire stop counting against you.",
          "Claims work differently and do not stack into strikes on their own. A flood of claims hurts income and reach, but only a legal takedown creates a strike.",
        ],
      },
      {
        heading: "The damage beyond the strike",
        paragraphs: [
          "Repeat problems can end access to the Partner Program and to features like live streaming. Sponsors and partners notice a channel with a shaky record.",
          "Even resolved claims drag down momentum while they sit. The video earns less, ranks lower, and gets shared less during the wait.",
        ],
      },
      {
        quote:
          "A channel does not fall from one bad day. It falls from a pattern left unmanaged.",
      },
      {
        heading: "How to break the cycle",
        paragraphs: [
          "Find the source of your repeat claims and remove it. If the same track keeps triggering matches, retire it and replace the whole shelf.",
          "Slow down on risky footage and licenses until the record clears. A few weeks of caution beats losing the channel entirely.",
        ],
      },
      {
        heading: "Recovering after the damage",
        paragraphs: [
          "Complete every required step to clear a strike, and keep proof of each one. Then audit your back catalog before the next upload.",
          "Treat the recovery as a reset of your process. The goal is not just to survive this strike, but to make the next one unlikely.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Three strikes in 90 days can end the channel and remove its videos.",
          "Claims hurt income and reach but do not stack into strikes.",
          "Repeat issues can cost Partner Program and live streaming access.",
          "Retire the track or footage that keeps triggering the same claims.",
          "Clear each strike fully, then audit your catalog before uploading again.",
        ],
      },
    ],
  },
];
