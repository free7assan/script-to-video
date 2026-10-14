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
import { batch181 } from "./batch-181-scriptwriting";
import { batch182 } from "./batch-182-storyboarding";
import { batch183 } from "./batch-183-shotlists";
import { batch184 } from "./batch-184-videooutlines";
import { batch185 } from "./batch-185-voiceoverwriting";
import { batch186 } from "./batch-186-interviewquestions";
import { batch187 } from "./batch-187-scriptformatting";
import { batch188 } from "./batch-188-teleprompter";
import { batch189 } from "./batch-189-scriptediting";
import { batch190 } from "./batch-190-tablereads";
import { batch191 } from "./batch-191-lighting";
import { batch192 } from "./batch-192-sounddesign";
import { batch193 } from "./batch-193-colorgrading";
import { batch194 } from "./batch-194-transitions";
import { batch195 } from "./batch-195-pacing";
import { batch196 } from "./batch-196-jumpcuts";
import { batch197 } from "./batch-197-vfxbasics";
import { batch198 } from "./batch-198-greenscreen";
import { batch199 } from "./batch-199-verticalvideo";
import { batch200 } from "./batch-200-longformvideo";
import { batch201 } from "./batch-201-establishingshots";
import { batch202 } from "./batch-202-closeups";
import { batch203 } from "./batch-203-cameramovement";
import { batch204 } from "./batch-204-depthoffield";
import { batch205 } from "./batch-205-framerates";
import { batch206 } from "./batch-206-aspectratios";
import { batch207 } from "./batch-207-exposure";
import { batch208 } from "./batch-208-audiorecording";
import { batch209 } from "./batch-209-stockfootage";
import { batch210 } from "./batch-210-compression";
import { batch211 } from "./batch-211-youtubegrowth";
import { batch212 } from "./batch-212-subscribergrowth";
import { batch213 } from "./batch-213-watchtime";
import { batch214 } from "./batch-214-clickthroughrate";
import { batch215 } from "./batch-215-impressionshare";
import { batch216 } from "./batch-216-seoaudit";
import { batch217 } from "./batch-217-contentcalendar";
import { batch218 } from "./batch-218-postingschedule";
import { batch219 } from "./batch-219-crosspromotion";
import { batch220 } from "./batch-220-communityposts";
import { batch221 } from "./batch-221-sponsorships";
import { batch222 } from "./batch-222-branddeals";
import { batch223 } from "./batch-223-digitalproducts";
import { batch224 } from "./batch-224-templatesselling";
import { batch225 } from "./batch-225-adrevenue";
import { batch226 } from "./batch-226-crowdfunding";
import { batch227 } from "./batch-227-consulting";
import { batch228 } from "./batch-228-workshops";
import { batch229 } from "./batch-229-agencies";
import { batch230 } from "./batch-230-productizedservices";
import { batch231 } from "./batch-231-viewerpsychology";
import { batch232 } from "./batch-232-attentionspan";
import { batch233 } from "./batch-233-curiositygaps";
import { batch234 } from "./batch-234-emotionalstorytelling";
import { batch235 } from "./batch-235-parasocial";
import { batch236 } from "./batch-236-fanengagement";
import { batch237 } from "./batch-237-commentsmanagement";
import { batch238 } from "./batch-238-superfans";
import { batch239 } from "./batch-239-audienceloyalty";
import { batch240 } from "./batch-240-viewerfeedback";
import { batch241 } from "./batch-241-aivideotools";
import { batch242 } from "./batch-242-aivoice";
import { batch243 } from "./batch-243-aiscripttools";
import { batch244 } from "./batch-244-editingsoftware";
import { batch245 } from "./batch-245-streamingsoftware";
import { batch246 } from "./batch-246-workflowautomation";
import { batch247 } from "./batch-247-analyticstools";
import { batch248 } from "./batch-248-thumbnailtools";
import { batch249 } from "./batch-249-productivitytools";
import { batch250 } from "./batch-250-collaborationtools";
import { batch251 } from "./batch-251-realestatecontent";
import { batch252 } from "./batch-252-financecontent";
import { batch253 } from "./batch-253-healthcontent";
import { batch254 } from "./batch-254-diycontent";
import { batch255 } from "./batch-255-sportscontent";
import { batch256 } from "./batch-256-petcontent";
import { batch257 } from "./batch-257-gardeningcontent";
import { batch258 } from "./batch-258-parentingcontent";
import { batch259 } from "./batch-259-photographycontent";
import { batch260 } from "./batch-260-sciencecontent";
import { batch261 } from "./batch-261-languagelearning";
import { batch262 } from "./batch-262-codingcontent";
import { batch263 } from "./batch-263-meditationcontent";
import { batch264 } from "./batch-264-fashioncontent";
import { batch265 } from "./batch-265-interiordesign";
import { batch266 } from "./batch-266-automotivecontent";
import { batch267 } from "./batch-267-historycontent";
import { batch268 } from "./batch-268-artcontent";
import { batch269 } from "./batch-269-newscommentary";
import { batch270 } from "./batch-270-bookcontent";
import { batch271 } from "./batch-271-remoteworkcontent";
import { batch272 } from "./batch-272-streetfoodcontent";
import { batch273 } from "./batch-273-mentalhealthcontent";
import { batch274 } from "./batch-274-careercontent";
import { batch275 } from "./batch-275-productivitycontent";
import { batch276 } from "./batch-276-minimalismcontent";
import { batch277 } from "./batch-277-sustainabilitycontent";
import { batch278 } from "./batch-278-truecrimecontent";
import { batch279 } from "./batch-279-reactioncontent";
import { batch280 } from "./batch-280-explainercontent";

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
  ...batch181,
  ...batch182,
  ...batch183,
  ...batch184,
  ...batch185,
  ...batch186,
  ...batch187,
  ...batch188,
  ...batch189,
  ...batch190,
  ...batch191,
  ...batch192,
  ...batch193,
  ...batch194,
  ...batch195,
  ...batch196,
  ...batch197,
  ...batch198,
  ...batch199,
  ...batch200,
  ...batch201,
  ...batch202,
  ...batch203,
  ...batch204,
  ...batch205,
  ...batch206,
  ...batch207,
  ...batch208,
  ...batch209,
  ...batch210,
  ...batch211,
  ...batch212,
  ...batch213,
  ...batch214,
  ...batch215,
  ...batch216,
  ...batch217,
  ...batch218,
  ...batch219,
  ...batch220,
  ...batch221,
  ...batch222,
  ...batch223,
  ...batch224,
  ...batch225,
  ...batch226,
  ...batch227,
  ...batch228,
  ...batch229,
  ...batch230,
  ...batch231,
  ...batch232,
  ...batch233,
  ...batch234,
  ...batch235,
  ...batch236,
  ...batch237,
  ...batch238,
  ...batch239,
  ...batch240,
  ...batch241,
  ...batch242,
  ...batch243,
  ...batch244,
  ...batch245,
  ...batch246,
  ...batch247,
  ...batch248,
  ...batch249,
  ...batch250,
  ...batch251,
  ...batch252,
  ...batch253,
  ...batch254,
  ...batch255,
  ...batch256,
  ...batch257,
  ...batch258,
  ...batch259,
  ...batch260,
  ...batch261,
  ...batch262,
  ...batch263,
  ...batch264,
  ...batch265,
  ...batch266,
  ...batch267,
  ...batch268,
  ...batch269,
  ...batch270,
  ...batch271,
  ...batch272,
  ...batch273,
  ...batch274,
  ...batch275,
  ...batch276,
  ...batch277,
  ...batch278,
  ...batch279,
  ...batch280,
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
