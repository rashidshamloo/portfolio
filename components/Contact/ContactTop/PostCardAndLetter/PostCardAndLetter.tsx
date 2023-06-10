// next
import Image from 'next/image';

// components
import PostCard from './PostCard';
import Letter from './Letter';

// types
interface postCardAndLetterProps {
  userName: string;
  userEmail: string;
}

const PostCardAndLetter = ({ userName, userEmail }: postCardAndLetterProps) => {
  return (
    <div className="relative mb-[2em] flex aspect-[5/4] w-full max-w-[50em] items-center justify-center text-[0.575rem] sm:text-[0.65rem] lg:text-sm 2xl:text-base">
      <div className="absolute -inset-x-[8em] -bottom-[9em] -top-[4em] -z-[1] bg-[url('/images/blob-anim.svg')] bg-center bg-no-repeat dark:bg-[url('/images/blob-anim-dark.svg')]"></div>
      <div className="pointer-events-none absolute left-0 top-1/2 z-10 aspect-[4108/6087] w-[18.75em] -translate-y-1/2 drop-shadow-md dark:brightness-75">
        <Image src="/images/quill.webp" fill alt="Quill" />
      </div>
      <div className="felx flex-col items-center justify-center">
        <PostCard
          segments={6}
          darkImage="/images/postcard/night.webp"
          lightImage="/images/postcard/day.webp"
        />
        <Letter userName={userName} userEmail={userEmail} />
      </div>
    </div>
  );
};

export default PostCardAndLetter;
