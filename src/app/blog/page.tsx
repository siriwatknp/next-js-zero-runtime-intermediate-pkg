import * as React from "react";
import { getAllBlogPosts } from "@/lib/sourcing";
import BlogIndex from "@/lib/BlogIndex";

export default async function Blog() {
  const props = await getAllBlogPosts();

  return <BlogIndex {...props} />;
}
