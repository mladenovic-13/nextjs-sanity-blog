import { Slug } from "@sanity/types/dist/dts";

export interface Post {
  title: string;
  slug: Slug;
  body: string;
}
