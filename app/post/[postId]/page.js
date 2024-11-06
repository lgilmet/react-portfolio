import DateDisplay from "@/app/components/DateDisplay";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/lib/sanity/client";
import { PiArrowLeftLight } from "react-icons/pi";
import { SocialIcon } from "react-social-icons";
import { GoChevronLeft, GoArrowLeft } from "react-icons/go";

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
        fgColor="#000"
        // className="h-4 w-4 border"
        style={{ height: 30, width: 30, left: -0 }}
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

  console.log("Post: ", post);
  console.log("Prev: ", prevPostId);
  console.log("Next: ", nextPostId);
  console.log("currentIndex: ", currentIndex);
  return (
    <div>
      <nav className="flex p-2 items-center justify-between gap-8">
        <a href="/" className="flex gap-4">
          <GoArrowLeft size="24" />
          Lucas Guillemette
        </a>
        <div className="flex gap-4 items-center">
          {prevPostId ? (
            <a href={`/post/${prevPostId}`}>
              <GoChevronLeft size="24" className="" />
            </a>
          ) : (
            <div>
              <GoChevronLeft size="24" className="opacity-40" />
            </div>
          )}
          {nextPostId ? (
            <a href={`/post/${nextPostId}`}>
              <GoChevronLeft size="24" className="transform rotate-180" />
            </a>
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
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

      {/* <img key={firstPhoto?._id} src={firstPhoto.asset?.url} alt={post.title} /> */}

      <div className="flex flex-col items-center gap-8 pb-8">
        <div className="p-2 lg:pl-0 w-full lg:max-w-[80vh] mx-auto">
          <div className="flex justify-between">
            <h2>{post.title}</h2>
          </div>
          {post.link && <ViewLink link={post.link} />}
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <p>{post.description}</p>
          <div className="text-sm text-neutral-600 flex">
            <DateDisplay dateString={post._createdAt} />
            <ul className="flex pl-4 text-xs gap-2">
              {post.tags?.map((tag) => {
                if (!tag) return null;
                return (
                  <li key={tag} className="p-1 rounded bg-gray-100">
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
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
