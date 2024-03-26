import { ImageResponse } from "next/og";
import { getSinglePostDetails } from "../../../../services";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "About life tech hubs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const slug = params.id;

  const post = await getSinglePostDetails(slug);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        tw="relative"
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          tw="w-full h-full object-contain absolute right-0 left-0 bottom-0 top-0 brightness-125 contrast-125"
          src={post.featuredImage.url}
          alt=""
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
