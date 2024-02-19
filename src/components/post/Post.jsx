import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

const Post = ({
  cover,
  cat,
  title,
  desc,
  author,
  createdAt,
  slug,
  timeReading,
}) => {
  const date = moment(createdAt).format("MMM DD");

  return (
    <div className="ease w-full transition-all duration-[.4s]">
      <div className="ease group overflow-hidden transition-all duration-[.4s]">
        <div className="aspect-video overflow-hidden sm:rounded-lg">
          <Link href={`/articles/${slug}`}>
            <Image
              width={1800}
              height={1000}
              className=" h-auto w-full cursor-pointer object-cover transition duration-300 ease-in-out group-hover:scale-110 group-hover:hue-rotate-30"
              src={cover}
              alt="cover "
            />
          </Link>
        </div>
        <div className="space-y-3 p-4">
          <div className="flex w-full items-center justify-between">
            <p className="inline-block rounded-lg border border-solid border-green-400 px-3 py-1 text-xs">
              {cat}
            </p>
            <p className="text-xs font-medium text-slate-700">{timeReading}</p>
          </div>
          <Link
            href={`/articles/${slug}`}
            className="ease line-clamp-2 cursor-pointer text-base font-semibold text-slate-700 decoration-green-600 transition-all duration-100 hover:text-green-600 hover:underline "
          >
            {title}
          </Link>
          <p className="line-clamp-3 text-sm text-slate-600">{desc}</p>
          <div className="flex items-center space-x-3 pt-3">
            <div className="ease h-8 w-8 overflow-hidden rounded-full transition-all duration-[.4s]">
              <Image
                width={32}
                height={32}
                className="h-auto w-auto"
                src={author.photo.url}
                alt={author.name}
              />
            </div>
            <div className="text-xs font-medium text-slate-500">
              <p className="">{author.name}</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
