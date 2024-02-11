import moment from 'moment';
import Link from 'next/link';

const Post = ({ cover, cat, title, desc, author, createdAt, slug }) => {
  const date = moment(createdAt).format('MMM DD');
  return (
    <div className='w-full transition-all duration-[.4s] ease'>
      <div className='group overflow-hidden transition-all duration-[.4s] ease'>
        <div className='overflow-hidden aspect-video rounded-lg'>
          <Link href={`/articles/${slug}`}>
            <img
              className='cursor-pointer w-full h-full object-cover group-hover:scale-110 group-hover:hue-rotate-30 transition duration-300 ease-in-out'
              src={cover}
              alt='cover '
            />
          </Link>
        </div>
        <div className='p-4 space-y-3'>
          <p className='text-xs border border-solid border-green-400 rounded-lg inline-block px-3 py-1'>
            {cat}
          </p>
          <Link
            href={`/articles/${slug}`}
            className='text-base hover:text-green-600 line-clamp-2 hover:underline decoration-green-600 transition-all duration-100 ease font-semibold text-slate-700 cursor-pointer '>
            {title}
          </Link>
          <p className='text-sm text-slate-600 line-clamp-3'>{desc}</p>
          <div className='flex space-x-3 items-center pt-3'>
            <div className='h-8 w-8 rounded-full overflow-hidden transition-all duration-[.4s] ease'>
              <img className='w-full' src={author.photo.url} alt='' />
            </div>
            <div className='text-slate-500 font-medium text-xs'>
              <p className=''>{author.name}</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
