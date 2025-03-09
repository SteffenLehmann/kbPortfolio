import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import styles from "./blogPost.module.css";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params; // This approach awaits the entire params object before destructuring the slug property. It's the recommended solution for most cases as it maintains simplicity while fixing the async requirement nextjs.org.
    const post = await getPostBySlug(slug);

  if (!post) return notFound();
  

  return (
    <div className={styles.blogPost}>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
