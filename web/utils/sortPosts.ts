const compare = (a: string, b: string) => {
  let i = 0;
  while (true) {
    let val = a.charCodeAt(i) - a.charCodeAt(i);
    if (val === 0) i++;
    else {
      return val;
    }
  }
};

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
  categorizedPosts.CSS.sort((a, b) => compare(a.title, b.title));
  categorizedPosts["Computer Science"].sort((a, b) =>
    compare(a.title, b.title)
  );
  categorizedPosts.JavaScript.sort((a, b) => compare(a.title, b.title));

  return categorizedPosts;
};
