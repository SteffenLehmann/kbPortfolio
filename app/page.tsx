import { getNewestPost } from "@/lib/posts";
import Link from "next/link";
import Image from 'next/image';

export default async function Home() {
  const post = await getNewestPost();
  return (
    <div>
      <main>
        <section>
          <h1>Kirstine Bjørn</h1>
        </section>
        <section>
          <h2>Digital marketing</h2>
          <p>
            Marketing professional with expertise in digital marketing, content creation, and B2B strategy. With a Master’s in Culture, Communication & Globalization, she combines strategic insight with hands-on execution.
          </p>
        </section>
        <section>
          <h2>Seneste Indlæg</h2>
          {post ? (
            <div>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <span>{post.description}</span>
              {post.image && (
                <div>
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
          ) : (
            <p>No posts available</p>
          )}
        </section>
      </main>
    </div>
  );
}
