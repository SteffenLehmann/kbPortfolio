import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "public/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    //console.log(data);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: data.date,
      author: data.author,
      image: data.image,
      description: data.description,
    };
  });
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getNewestPost(){
  const posts = getAllPosts();
  console.log(posts, 'getNewestPost');
  return posts[0];
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    image: data.image,
    contentHtml: contentHtml,
  };
}
