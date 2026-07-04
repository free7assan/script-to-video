export interface Channel {
  id: string;
  name: string;
  youtube_channel_id: string;
  youtube_url: string;
  thumbnail_url: string | null;
  subscriber_count: number | null;
  description: string | null;
  blueprint: Blueprint | null;
  status: "pending" | "fetching" | "analyzing" | "completed" | "error" | "cancelled" | "paused";
  error_message: string | null;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: string;
  channel_id: string;
  youtube_video_id: string;
  title: string;
  description: string | null;
  published_at: string;
  transcript: string | null;
  transcript_language: string | null;
  duration_seconds: number | null;
  view_count: number | null;
  analysis: VideoAnalysis | null;
  created_at: string;
}

export interface VideoAnalysis {
  hook_style: string;
  structure: string[];
  key_techniques: string[];
  tone: string;
  cta_style: string;
  summary: string;
}

export interface AnalysisJob {
  id: string;
  channel_id: string;
  status:
    | "pending"
    | "fetching_videos"
    | "fetching_transcripts"
    | "analyzing_videos"
    | "synthesizing"
    | "completed"
    | "error"
    | "cancelled"
    | "paused";
  progress: number;
  total_videos: number;
  processed_videos: number;
  error_message: string | null;
  model_used: string | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
}

export interface Blueprint {
  channel_summary: {
    niche: string;
    content_pillars: string[];
    target_audience: string;
    channel_style: string;
  };
  video_structure: {
    hook_patterns: string[];
    body_structure: string[];
    outro_patterns: string[];
    typical_length_seconds: number;
    typical_structure_summary: string;
  };
  script_methodology: {
    opening_formulas: string[];
    transition_phrases: string[];
    storytelling_approach: string;
    call_to_action_styles: string[];
    common_phrases: string[];
    pace_and_rhythm: string;
    language_style: string;
  };
  content_themes: {
    recurring_topics: string[];
    angle_approaches: string[];
    seasonal_patterns: string;
  };
  engagement_patterns: {
    question_techniques: string[];
    audience_interaction: string[];
    retention_strategies: string[];
    thumbnail_title_patterns: string;
  };
  _meta?: {
    archived_at?: string;
  };
}

export interface CreateChannelInput {
  youtube_url: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

// New normalized table row types
export interface VideoAnalysisRow {
  id: string;
  video_id: string;
  analysis_data: VideoAnalysis;
  created_at: string;
}

export interface BlueprintRow {
  id: string;
  channel_id: string;
  blueprint_data: Blueprint;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Script {
  id: string;
  user_id: string;
  channel_id: string | null;
  title: string;
  description: string;
  duration_minutes: number;
  script_content: any;
  mode: string;
  archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface SavedAnalysis {
  id: string;
  user_id: string;
  youtube_url: string;
  video_title: string;
  analysis_data: VideoAnalysis;
  created_at: string;
}

export interface SaveScriptInput {
  channel_id?: string | null;
  title: string;
  description: string;
  duration_minutes: number;
  script_content: any;
  mode: string;
}
