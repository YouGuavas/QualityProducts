import Image from 'next/image';
import banner from '../public/banner.svg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Quality Products | Top Shelf Cannabis in Flint, MI',
	description:
		'Quality Products is a high-end cannabis provider serving the greater Flint, MI area. Powered by Donnovan Aleman. Website facilitated by Patrick Other (Pat).',
	icons: { icon: '/favicon.ico' },
};

export default function Home() {
	return (
		<main className={``}>
			<p>
				NOTE - this site is in &quot;Rough Draft&quot; mode - I need to make a
				ton of changes. This is only for visualization.
			</p>

			<div className={`banner-container width-full center bg-1`}>
				<Image
					src={banner.src}
					fill
					className={`relative`}
					alt="Car and flag"
				/>
			</div>
			<h1 className={`undisplayed`}>Quality Products</h1>
			<section className={``}>
				<h2>A Quality Mission.</h2>
				<p>Placeholder text - mission statement.</p>
			</section>

			<section className={``}>
				<h2>How to Grow Quality Products</h2>
				<p>
					Placeholder text - a description of the care that goes into growing
					Quality Products&apos; products.
				</p>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={``}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={``}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore starter templates for Next.js.</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={``}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</section>
		</main>
	);
}
