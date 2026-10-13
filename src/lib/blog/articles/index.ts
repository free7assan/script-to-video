import type { BlogPost } from "../types";
import { legacyPosts } from "./legacy";
import { batch01 } from "./batch-01-hooks";
import { batch02 } from "./batch-02-retention";
import { batch03 } from "./batch-03-storytelling";
import { batch04 } from "./batch-04-packaging";
import { batch05 } from "./batch-05-channel-strategy";
import { batch06 } from "./batch-06-blueprints";
import { batch07 } from "./batch-07-audience";
import { batch08 } from "./batch-08-discovery";
import { batch09 } from "./batch-09-shorts";
import { batch10 } from "./batch-10-business";
import { batch11 } from "./batch-11-hook2";
import { batch12 } from "./batch-12-hook2";
import { batch13 } from "./batch-13-hook2";
import { batch14 } from "./batch-14-hook2";
import { batch15 } from "./batch-15-retention2";
import { batch16 } from "./batch-16-retention2";
import { batch17 } from "./batch-17-retention2";
import { batch18 } from "./batch-18-retention2";
import { batch19 } from "./batch-19-story2";
import { batch20 } from "./batch-20-story2";
import { batch21 } from "./batch-21-story2";
import { batch22 } from "./batch-22-story2";
import { batch23 } from "./batch-23-story2";
import { batch24 } from "./batch-24-packaging2";
import { batch25 } from "./batch-25-packaging2";
import { batch26 } from "./batch-26-packaging2";
import { batch27 } from "./batch-27-packaging2";
import { batch28 } from "./batch-28-packaging2";
import { batch29 } from "./batch-29-strategy2";
import { batch30 } from "./batch-30-strategy2";
import { batch31 } from "./batch-31-strategy2";
import { batch32 } from "./batch-32-strategy2";
import { batch33 } from "./batch-33-strategy2";
import { batch34 } from "./batch-34-blueprint2";
import { batch35 } from "./batch-35-blueprint2";
import { batch36 } from "./batch-36-blueprint2";
import { batch37 } from "./batch-37-blueprint2";
import { batch38 } from "./batch-38-audience2";
import { batch39 } from "./batch-39-audience2";
import { batch40 } from "./batch-40-audience2";
import { batch41 } from "./batch-41-audience2";
import { batch42 } from "./batch-42-audience2";
import { batch43 } from "./batch-43-discovery2";
import { batch44 } from "./batch-44-discovery2";
import { batch45 } from "./batch-45-discovery2";
import { batch46 } from "./batch-46-discovery2";
import { batch47 } from "./batch-47-discovery2";
import { batch48 } from "./batch-48-discovery2";
import { batch49 } from "./batch-49-shorts2";
import { batch50 } from "./batch-50-shorts2";
import { batch51 } from "./batch-51-shorts2";
import { batch52 } from "./batch-52-shorts2";
import { batch53 } from "./batch-53-shorts2";
import { batch54 } from "./batch-54-shorts2";
import { batch55 } from "./batch-55-tiktok";
import { batch56 } from "./batch-56-tiktok";
import { batch57 } from "./batch-57-tiktok";
import { batch58 } from "./batch-58-tiktok";
import { batch59 } from "./batch-59-tiktok";
import { batch60 } from "./batch-60-tiktok";
import { batch61 } from "./batch-61-podcast";
import { batch62 } from "./batch-62-podcast";
import { batch63 } from "./batch-63-podcast";
import { batch64 } from "./batch-64-podcast";
import { batch65 } from "./batch-65-podcast";
import { batch66 } from "./batch-66-newsletter";
import { batch67 } from "./batch-67-newsletter";
import { batch68 } from "./batch-68-newsletter";
import { batch69 } from "./batch-69-newsletter";
import { batch70 } from "./batch-70-newsletter";
import { batch71 } from "./batch-71-copy";
import { batch72 } from "./batch-72-copy";
import { batch73 } from "./batch-73-copy";
import { batch74 } from "./batch-74-copy";
import { batch75 } from "./batch-75-copy";
import { batch76 } from "./batch-76-copy";
import { batch77 } from "./batch-77-landing";
import { batch78 } from "./batch-78-landing";
import { batch79 } from "./batch-79-landing";
import { batch80 } from "./batch-80-landing";
import { batch81 } from "./batch-81-landing";
import { batch82 } from "./batch-82-aitools";
import { batch83 } from "./batch-83-aitools";
import { batch84 } from "./batch-84-aitools";
import { batch85 } from "./batch-85-aitools";
import { batch86 } from "./batch-86-aitools";
import { batch87 } from "./batch-87-aitools";
import { batch88 } from "./batch-88-editing";
import { batch89 } from "./batch-89-editing";
import { batch90 } from "./batch-90-editing";
import { batch91 } from "./batch-91-editing";
import { batch92 } from "./batch-92-editing";
import { batch93 } from "./batch-93-audio";
import { batch94 } from "./batch-94-audio";
import { batch95 } from "./batch-95-audio";
import { batch96 } from "./batch-96-money";
import { batch97 } from "./batch-97-money";
import { batch98 } from "./batch-98-money";
import { batch99 } from "./batch-99-money";
import { batch100 } from "./batch-100-money";
import { batch101 } from "./batch-101-money";
import { batch102 } from "./batch-102-brand";
import { batch103 } from "./batch-103-brand";
import { batch104 } from "./batch-104-brand";
import { batch105 } from "./batch-105-brand";
import { batch106 } from "./batch-106-brand";
import { batch107 } from "./batch-107-analytics";
import { batch108 } from "./batch-108-analytics";
import { batch109 } from "./batch-109-analytics";
import { batch110 } from "./batch-110-analytics";
import { batch111 } from "./batch-111-community";
import { batch112 } from "./batch-112-live";
import { batch113 } from "./batch-113-merch";
import { batch114 } from "./batch-114-membership";
import { batch115 } from "./batch-115-youtubeseo";
import { batch116 } from "./batch-116-collab";
import { batch117 } from "./batch-117-workflow";
import { batch118 } from "./batch-118-narrative";
import { batch119 } from "./batch-119-algorithm";
import { batch120 } from "./batch-120-mindset";
import { batch121 } from "./batch-121-thumbnails";
import { batch122 } from "./batch-122-titles";
import { batch123 } from "./batch-123-scripts";
import { batch124 } from "./batch-124-interviews";
import { batch125 } from "./batch-125-research";
import { batch126 } from "./batch-126-faceless";
import { batch127 } from "./batch-127-niche";
import { batch128 } from "./batch-128-repurpose";
import { batch129 } from "./batch-129-blogbeyond";
import { batch130 } from "./batch-130-funnel";
import { batch131 } from "./batch-131-shortmonetize";
import { batch132 } from "./batch-132-course";
import { batch133 } from "./batch-133-coaching";
import { batch134 } from "./batch-134-freelance";
import { batch135 } from "./batch-135-affiliate";
import { batch136 } from "./batch-136-legal";
import { batch137 } from "./batch-137-gear";
import { batch138 } from "./batch-138-studio";
import { batch139 } from "./batch-139-accessibility";
import { batch140 } from "./batch-140-global";
import { batch141 } from "./batch-141-mediakit";
import { batch142 } from "./batch-142-speaking";
import { batch143 } from "./batch-143-oncamera";
import { batch144 } from "./batch-144-voice";
import { batch145 } from "./batch-145-documentary";
import { batch146 } from "./batch-146-tutorial";
import { batch147 } from "./batch-147-reviews";
import { batch148 } from "./batch-148-series";
import { batch149 } from "./batch-149-humor";
import { batch150 } from "./batch-150-education";
import { batch151 } from "./batch-151-mediabusiness";
import { batch152 } from "./batch-152-team";
import { batch153 } from "./batch-153-licensing";
import { batch154 } from "./batch-154-audienceresearch";
import { batch155 } from "./batch-155-music";
import { batch156 } from "./batch-156-broll";
import { batch157 } from "./batch-157-motion";
import { batch158 } from "./batch-158-camera";
import { batch159 } from "./batch-159-press";
import { batch160 } from "./batch-160-evergreen";
import { batch161 } from "./batch-161-livecommerce";
import { batch162 } from "./batch-162-instagramreels";
import { batch163 } from "./batch-163-linkedinvideo";
import { batch164 } from "./batch-164-twitchstreaming";
import { batch165 } from "./batch-165-webinars";
import { batch166 } from "./batch-166-googlevideoseo";
import { batch167 } from "./batch-167-emailmarketing";
import { batch168 } from "./batch-168-fansupport";
import { batch169 } from "./batch-169-gamingcontent";
import { batch170 } from "./batch-170-foodcontent";
import { batch171 } from "./batch-171-travelcontent";
import { batch172 } from "./batch-172-fitnesscontent";
import { batch173 } from "./batch-173-beautycontent";
import { batch174 } from "./batch-174-techcontent";
import { batch175 } from "./batch-175-kidscontent";
import { batch176 } from "./batch-176-b2bcontent";
import { batch177 } from "./batch-177-nonprofitcontent";
import { batch178 } from "./batch-178-eventcoverage";
import { batch179 } from "./batch-179-personalbrand";
import { batch180 } from "./batch-180-creatoreconomy";

export const posts: BlogPost[] = [
  ...legacyPosts,
  ...batch01,
  ...batch02,
  ...batch03,
  ...batch04,
  ...batch05,
  ...batch06,
  ...batch07,
  ...batch08,
  ...batch09,
  ...batch10,
  ...batch11,
  ...batch12,
  ...batch13,
  ...batch14,
  ...batch15,
  ...batch16,
  ...batch17,
  ...batch18,
  ...batch19,
  ...batch20,
  ...batch21,
  ...batch22,
  ...batch23,
  ...batch24,
  ...batch25,
  ...batch26,
  ...batch27,
  ...batch28,
  ...batch29,
  ...batch30,
  ...batch31,
  ...batch32,
  ...batch33,
  ...batch34,
  ...batch35,
  ...batch36,
  ...batch37,
  ...batch38,
  ...batch39,
  ...batch40,
  ...batch41,
  ...batch42,
  ...batch43,
  ...batch44,
  ...batch45,
  ...batch46,
  ...batch47,
  ...batch48,
  ...batch49,
  ...batch50,
  ...batch51,
  ...batch52,
  ...batch53,
  ...batch54,
  ...batch55,
  ...batch56,
  ...batch57,
  ...batch58,
  ...batch59,
  ...batch60,
  ...batch61,
  ...batch62,
  ...batch63,
  ...batch64,
  ...batch65,
  ...batch66,
  ...batch67,
  ...batch68,
  ...batch69,
  ...batch70,
  ...batch71,
  ...batch72,
  ...batch73,
  ...batch74,
  ...batch75,
  ...batch76,
  ...batch77,
  ...batch78,
  ...batch79,
  ...batch80,
  ...batch81,
  ...batch82,
  ...batch83,
  ...batch84,
  ...batch85,
  ...batch86,
  ...batch87,
  ...batch88,
  ...batch89,
  ...batch90,
  ...batch91,
  ...batch92,
  ...batch93,
  ...batch94,
  ...batch95,
  ...batch96,
  ...batch97,
  ...batch98,
  ...batch99,
  ...batch100,
  ...batch101,
  ...batch102,
  ...batch103,
  ...batch104,
  ...batch105,
  ...batch106,
  ...batch107,
  ...batch108,
  ...batch109,
  ...batch110,
  ...batch111,
  ...batch112,
  ...batch113,
  ...batch114,
  ...batch115,
  ...batch116,
  ...batch117,
  ...batch118,
  ...batch119,
  ...batch120,
  ...batch121,
  ...batch122,
  ...batch123,
  ...batch124,
  ...batch125,
  ...batch126,
  ...batch127,
  ...batch128,
  ...batch129,
  ...batch130,
  ...batch131,
  ...batch132,
  ...batch133,
  ...batch134,
  ...batch135,
  ...batch136,
  ...batch137,
  ...batch138,
  ...batch139,
  ...batch140,
  ...batch141,
  ...batch142,
  ...batch143,
  ...batch144,
  ...batch145,
  ...batch146,
  ...batch147,
  ...batch148,
  ...batch149,
  ...batch150,
  ...batch151,
  ...batch152,
  ...batch153,
  ...batch154,
  ...batch155,
  ...batch156,
  ...batch157,
  ...batch158,
  ...batch159,
  ...batch160,
  ...batch161,
  ...batch162,
  ...batch163,
  ...batch164,
  ...batch165,
  ...batch166,
  ...batch167,
  ...batch168,
  ...batch169,
  ...batch170,
  ...batch171,
  ...batch172,
  ...batch173,
  ...batch174,
  ...batch175,
  ...batch176,
  ...batch177,
  ...batch178,
  ...batch179,
  ...batch180,
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) set.add(tag);
  }
  return Array.from(set).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter((post) => post.tags.includes(tag));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      overlap: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map((entry) => entry.post);
}
