import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
	img: string;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount, img }: Props) => {
	const postURL = `/${slug}`;
	return (
		<section className="grid grid-cols-12 gap-8 items-center">

		<img src={img} className="col-span-4 md:col-span-4 rounded-md w-[250px]" alt="Image" />
	  
		<div className="col-span-8 md:col-span-8">
		  <h2 className="text-md lg:text-lg  text-white text-white dark:text-white font-bold ">
			<Link href={postURL}>{title}</Link>
		  </h2>
		  <p className="flex flex-row items-center gap-2 mt-2">
			<Link href={postURL} className="text-xs lg:text-md text-neutral-600 dark:text-neutral-400">
			  <DateFormatter dateString={date} />
			</Link>
			{/* {commentCount > 2 && (
			  <>
				<span>&middot;</span>
				<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
				  {commentCount} comments
				</Link>
			  </>
			)} */}
		  </p>
		</div>

	  </section>
	  
	);
};
