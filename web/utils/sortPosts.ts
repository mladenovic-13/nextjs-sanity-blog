export const sortPosts = (posts: Frontmatter[]): CategorizedPosts => {
  let categorizedPosts: CategorizedPosts = {
    "Computer Science": [],
    CSS: [],
    JavaScript: [],
  };

  posts.forEach((post) => {
    if (post.category === "CS") categorizedPosts["Computer Science"].push(post);
    if (post.category === "CSS") categorizedPosts.CSS.push(post);
    if (post.category === "JS") categorizedPosts.JavaScript.push(post);
  });

  return categorizedPosts;
};
