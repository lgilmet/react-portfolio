import DateDisplay from "@/app/components/DateDisplay";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { sanityFetch } from "@/lib/sanity/client";
import { SocialIcon } from "react-social-icons";
import { GoChevronLeft, GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

function ViewLink({ link }) {
  function cleanLink(link) {
    return link?.replace(/^https?:\/\/(www\.)?/, "");
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm underline"
    >
      {cleanLink(link)}
      <SocialIcon
        url={link}
        bgColor="#0000"
        className=""
        fgColor="currentColor"
        style={{ height: 32, width: 32, left: -0 }}
        as="span"
      />
    </a>
  );
}

export default async function PostPage({ params }) {
  const { postId } = await params;
  const post = await sanityFetch({
    query: `*[_type == "post" && _id == $slug][0] {
      _id,
      title,
      ...,
      description,
      link,
      tags,
      photos[] {
        asset->,
        description, 
        link
      },
    }`,
    queryParams: { slug: postId },
  });

  const navigationData = await sanityFetch({
    query: `*[_type == "post"] {
      _id,
      title,
    }`,
  });

  const currentIndex = navigationData.findIndex((item) => item._id === postId);
  const prevPostId =
    currentIndex > 0 ? navigationData[currentIndex - 1]._id : null;
  const nextPostId =
    currentIndex < navigationData.length - 1
      ? navigationData[currentIndex + 1]._id
      : null;

  return (
    <div>
      <nav className="flex p-2 items-center justify-between gap-8">
        <Link href="/" className="flex gap-4">
          <GoArrowLeft size="24" />
          Lucas Guillemette
        </Link>
        <div className="flex gap-4 items-center">
          {prevPostId ? (
            <Link href={`/post/${prevPostId}`}>
              <GoChevronLeft size="24" className="" />
            </Link>
          ) : (
            <div>
              <GoChevronLeft size="24" className="opacity-40" />
            </div>
          )}
          {nextPostId ? (
            <Link href={`/post/${nextPostId}`}>
              <GoChevronLeft size="24" className="transform rotate-180" />
            </Link>
          ) : (
            <div>
              <GoChevronLeft
                size="24"
                className="opacity-40 transform rotate-180"
              />
            </div>
          )}
          <ThemeSwitch />
        </div>
      </nav>

      <div className="flex flex-col items-center gap-8 pb-8">
        <div className="p-2 lg:pl-0 w-full lg:max-w-[80vh] mx-auto">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="text-xs text-secondary-foreground">
            <DateDisplay dateString={post._createdAt} />
          </div>
          <ul className="flex text-[0.7rem] gap-2 mt-2 ">
            {post.tags?.map((tag) => {
              if (!tag) return null;
              return (
                <li key={tag}>
                  <Badge variant="secondary">{tag}</Badge>
                </li>
              );
            })}
          </ul>
          {post.link && <ViewLink link={post.link} />}
        </div>
        <div className="flex flex-col gap-6">
          {post.photos?.map((photo, index) => {
            return (
              <div
                key={photo.asset?._id}
                className="w-full lg:max-w-[80vh] mx-auto"
              >
                <img
                  src={photo.asset?.url}
                  alt={photo.asset?._id}
                  className="max-h-[80vh] object-contain mx-auto border-red-600"
                />
                {(photo.description || photo.link) && (
                  <div className="p-2 pb-8">
                    {photo.description && <p>{photo.description}</p>}
                    {photo.link && (
                      <a
                        href={photo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {photo.link}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
