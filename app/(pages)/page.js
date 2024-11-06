import { sanityFetch } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { RowsPhotoAlbum } from "react-photo-album";
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import "react-photo-album/rows.css";
import { Button } from "@/components/ui/button";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";

export default async function GalleryPage({ searchParams }) {
  const posts = await sanityFetch({
    query: `*[_type == "post"] {
      _id,
      title,
      description,
      link,
      tags,
      photos[] {
        asset->
      },
    }`,
  });
  const layout = (await searchParams)?.layout || "grid";
  const images = posts.map((post) => ({
    src: post.photos?.[0].asset?.url,
    width: post.photos?.[0].asset?.metadata?.dimensions?.width,
    height: post.photos?.[0].asset?.metadata?.dimensions?.height,
    id: post._id,
    length: post.photos?.length,
  }));

  // console.log("Posts: " + JSON.stringify(posts, null, 2));

  return (
    <div className="">
      <div className="flex gap-12 justify-center py-6">
        <Button asChild variant={layout === "grid" ? "secondary" : "ghost"}>
          <Link href="?layout=grid">
            <CiGrid41 size={24} /> Grid
          </Link>
        </Button>
        <Button asChild variant={layout === "list" ? "secondary" : "ghost"}>
          <Link href="?layout=list">
            <div>
              <CiGrid2H size={24} />
            </div>{" "}
            List
          </Link>
        </Button>
      </div>

      <div className="">
        {layout === "grid" ? (
          <div className="lg:mx-8">
            <div className="lg:container lg:mx-auto">
              <GalleryGrid images={images} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            {posts.map((post) => (
              <div key={post._id} className="max-h-screen mx-auto">
                <Link href={`/post/${post._id}`}>
                  <img
                    src={post.photos?.[0].asset?.url}
                    className="max-h-[80vh] object-contain mx-auto"
                    alt={post.title}
                  />
                </Link>
                <div className="min-h-24">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.link}
                  </a>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <ul className="text-xs text-secondary-foreground">
                    {post.tags?.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
