"use client";
import { useRouter } from "next/navigation";
import { RowsPhotoAlbum } from "react-photo-album";
import { PiCardsLight } from "react-icons/pi";
import "react-photo-album/rows.css";

export default function GalleryGrid({ images }) {
  const router = useRouter();
  console.log("Images: " + JSON.stringify(images, null, 2));
  return (
    <RowsPhotoAlbum
      photos={images}
      onClick={({ photo }) => {
        console.log("Photo: ", photo);
        router.push(`/post/${photo.id}`);
      }}
      spacing={4}
      render={{
        image: (props) => <img {...props} className="group" />,
        extras: (_, { photo, index }) => (
          <span className="absolute bottom-1 right-1 group-hover:bg-gray-500">
            {photo.length > 1 && (
              <span className="bg-white/40 rounded-md p-1 text-xs flex items-center">
                {photo.length}
                <PiCardsLight size="18" />
              </span>
            )}
          </span>
        ),
      }}
    />
  );
}
