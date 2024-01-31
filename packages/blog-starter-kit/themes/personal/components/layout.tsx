import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { Montserrat} from 'next/font/google'

type Props = {
	children: React.ReactNode;
};
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap'
  })
export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />

			<div className={`${montserrat.variable} font-montserrat min-h-screen bg-[#0F172A] dark:bg-neutral-950`}>
			<img className="zigzag-img-left" src="/blog/assets/blog/authors/zigzag.png"/>
			<img className="zigzag-img-right" src="/blog/assets/blog/authors/zigzag.png"/>

				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
