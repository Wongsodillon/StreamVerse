import { UserType } from "./UserTypes";

export type Stream = {
  id: string;
  title: string;
  thumbnail: string;
  user: string;
  views: string;
};

export type StreamType = {
  id: number;
  user_id: number;
  title: string;
  thumbnail: string;
  stream_url: string;
  is_live: boolean;
  topic_id: string;
  createdAt: Date;
  updatedAt: Date;
  user: UserType;
};
