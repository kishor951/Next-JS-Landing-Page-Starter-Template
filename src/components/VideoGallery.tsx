import React from 'react';

const socialLinks = [
	{
		href: 'https://www.youtube.com/@ProductiveLift/shorts',
		label: 'YouTube',
		icon: (
			<svg
				width='24'
				height='24'
				fill='currentColor'
				className='inline mr-2 text-red-600'
				viewBox='0 0 24 24'
			>
				<path d='M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
			</svg>
		),
	},
	{
		href: 'https://www.instagram.com/productivelift/',
		label: 'Instagram',
		icon: (
			<svg
				width='24'
				height='24'
				fill='currentColor'
				className='inline mr-2 text-pink-500'
				viewBox='0 0 24 24'
			>
				<path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z' />
			</svg>
		),
	},
	{
		href: 'https://www.threads.com/@productivelift',
		label: 'Threads',
		icon: (
			<svg
				width='24'
				height='24'
				fill='currentColor'
				className='inline mr-2 text-black'
				viewBox='0 0 24 24'
			>
				<circle
					cx='12'
					cy='12'
					r='10'
					stroke='currentColor'
					strokeWidth='2'
					fill='none'
				/>
				<text
					x='12'
					y='16'
					textAnchor='middle'
					fontSize='12'
					fill='currentColor'
				>
					@
				</text>
			</svg>
		),
	},
];

const videos = [
	{
		url: 'https://www.youtube.com/shorts/dFGvJOpxFmE',
		thumb: 'https://i.ytimg.com/vi/dFGvJOpxFmE/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLA5IghYCkkK2wqDciQP4V_Wa_xZrQ',
		title: 'Milking nostalgia #coolie',
		views: '1.1K views',
	},
	{
		url: 'https://www.youtube.com/shorts/rc_NO4dMvQA',
		thumb: 'https://i.ytimg.com/vi/rc_NO4dMvQA/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAXUFpUwf0pHdAmvk-jHJzg1nIZAg',
		title: 'AI Won’t Replace Your job. But This Will.#job #ai #growth #business',
		views: '1.2K views',
	},
	{
		url: 'https://www.youtube.com/shorts/p9v5aXIaAc0',
		thumb: 'https://i.ytimg.com/vi/p9v5aXIaAc0/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLA_mSxtraBgmgbko8c7kdyMktRQ1w',
		title: 'Save time with this Free AI Hack for Prompting! - #ai #prompt #chatgpt #gemini',
		views: '1.3K views',
	},
	// ...add more videos as needed...
];

function getYouTubeId(url: string) {
	const patterns = [
		/(?:youtube\.com\/watch\?v=)([\w-_-]{11})/, // watch?v=
		/(?:youtu\.be\/)([\w-_-]{11})/, // youtu.be/
		/(?:youtube\.com\/shorts\/)([\w-_-]{11})/, // shorts/
		/(?:youtube\.com\/embed\/)([\w-_-]{11})/, // embed/
	];
	for (const p of patterns) {
		const m = url.match(p);
		if (m && m[1]) return m[1];
	}
	return null;
}

export default function VideoGallery() {
	return (
		<section className='py-48 bg-gray-800 motion-safe:animate-fade-in'>
			<div className='max-w-5xl mx-auto px-4 py-12'>
				<h2 className='text-2xl font-bold mb-4 text-center text-white'>
					Watch Our Top YouTube Shorts
				</h2>
				<div className='flex justify-center gap-6 mb-8'>
					{socialLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 hover:bg-gray-600 text-base font-medium text-gray-200'
							aria-label={link.label}
						>
							{link.icon}
							{link.label}
						</a>
					))}
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{videos.map((video) => {
						const id = getYouTubeId(video.url);
						const embedSrc = id
							? `https://www.youtube.com/embed/${id}`
							: video.url;
						return (
							<div
								key={video.url}
								className='block group border border-gray-600 bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition'
								aria-label={video.title}
							>
								<div className='relative pb-[56.25%] bg-black'>
									<iframe
										src={`${embedSrc}?rel=0&modestbranding=1`}
										title={video.title}
										className='absolute inset-0 w-full h-full'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										loading='lazy'
									/>
								</div>
								<div className='p-3'>
									<div className='font-semibold text-gray-200 text-sm mb-1 line-clamp-2'>
										{video.title}
									</div>
									<div className='text-xs text-gray-400'>
										{video.views}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
