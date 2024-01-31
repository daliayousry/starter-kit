import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';
import { DateFormatter } from './date-formatter';
import Link from 'next/link';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	console.log("posts", posts)
	return (
		<section className="flex w-full flex-col items-stretch gap-10">
			{posts[0] &&
				<div className="mb-8">
					<img className="rounded-md mb-6" src={posts[0].coverImage ? posts[0].coverImage.url : ''} />
					<h2 className="text-lg  text-white text-white dark:text-white font-bold w-[70%]">
						<Link href={`/${posts[0].slug}`}>{posts[0].title}</Link>
					</h2>
					<p className="flex flex-row items-center gap-2 mt-2">
						<Link href={`/${posts[0].slug}}`} className="text-sm text-neutral-600 dark:text-neutral-400">
							<DateFormatter dateString={posts[0].publishedAt} />
						</Link>
					</p>
				</div>}
			{posts.map((post, index) => (
				<MinimalPostPreview
					key={post.id}
					title={post.title}
					date={post.publishedAt}
					img={post.coverImage ? post.coverImage.url : ''}
					author={{
						name: post.author.name,
					}}
					slug={post.slug}
					commentCount={post.comments?.totalDocuments}
				/>
			)).slice(1)}
		</section>
	);
};
