import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./blog.module.css";
import Image from 'next/image';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className={styles.blog}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className={styles.blogPost}>
          <div className={styles.blogPostContent}>
            <Link href={`/blog/${post.slug}`} className={styles.blogLink}>
              {post.title}
            </Link>
            <p>{post.date} - {post.author}</p>
            <span>{post.description}</span>
          </div>
          {post.image && (
            <div className={styles.blogPostImage}>
              <Image
                src={post.image}        // Image source (path or URL)
                alt={post.title}        // Alt text for the image
                layout="responsive"     // Make the image responsive
                width={800}             // Width of the image
                height={400}            // Height of the image
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}