import { useAppContext } from './contexts/appContext';
import Link from 'next/link'

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer>
			<div>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">

					<div className="border-t border-[#733EE480] mb-4"></div>
					<span className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-transparent"></span>

					{/* Bottom area */}
					<div className="flex flex-col  md:flex-row justify-between items-center">

						{/* Social links */}
						<ul className="flex  md:order-1 md:ml-4 md:mb-4 ">
							<li>
								<Link href="https://twitter.com/DaliaIhab2" className="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-transparent hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
									<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
									</svg>
								</Link>
							</li>
							<li className="ml-4">
								<Link href="https://github.com/daliayousry" className="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-transparent hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
									<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
									</svg>
								</Link>
							</li>
							<li className="ml-4">
								<Link href="https://www.instagram.com/daliaihabphotography42/" className="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-transparent hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
									<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<circle cx="20.145" cy="11.892" r="1" />
										<path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
										<path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
									</svg>
								</Link>
							</li>
							<li className="ml-4">
								<Link href="https://www.linkedin.com/in/DaliaIhab" className="flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-transparent hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
									<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
									</svg>
								</Link>
							</li>
						</ul>

						{/* Copyrights note */}
						<div className="text-white text-sm lg:mr-4 mb-8 mt-4">Made with <span><svg className="inline" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
							<path d="M8.05001 5.03125C5.38584 5.03125 3.11459 7.02458 3.11459 9.61208C3.11459 11.3975 3.95026 12.9001 5.05809 14.145C6.16305 15.386 7.58809 16.4277 8.87513 17.2998L11.0975 18.8044C11.2164 18.8848 11.3565 18.9277 11.5 18.9277C11.6435 18.9277 11.7837 18.8848 11.9025 18.8044L14.1249 17.2998C15.4129 16.4277 16.837 15.386 17.941 14.145C19.0498 12.9001 19.8854 11.3975 19.8854 9.61208C19.8854 7.02458 17.6142 5.03125 14.95 5.03125C13.5758 5.03125 12.3673 5.67525 11.5 6.509C10.6327 5.67525 9.4233 5.03125 8.05001 5.03125Z" fill="#D11149" />
						</svg></span> by Dalia Ihab.</div>

					</div>

				</div>
			</div>
		</footer>
	);
};
