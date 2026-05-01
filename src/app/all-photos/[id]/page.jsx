// import React from 'react';

// const PhotoDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     // console.log(id, 'details');
//     const res = await fetch('https://pixgen-nine.vercel.app/data.json');
//     const photos = await res.json();

//     const photo = photos.find(p=> p.id === Number(id));
//     console.log(photo);
    

//     return (
//         <div>
//             Photo details
//         </div>
//     );
// };

// export default PhotoDetailsPage;

import React from 'react';
import NextImage from 'next/image';
import { Card, Chip, Button, Separator } from "@heroui/react";
import { FaHeart, FaDownload, FaRegCopy, FaCube } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi2";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    
    // Fetching data
    const res = await fetch('https://pixgen-nine.vercel.app/data.json', { cache: 'no-store' });
    const photos = await res.json();
    const photo = photos.find(p => p.id === Number(id));

    if (!photo) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-default-600">Image Not Found</h2>
                <Button as="a" href="/" variant="flat" className="mt-4">Return Home</Button>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-8 lg:py-16">
            {/* Grid: Stacks on mobile, side-by-side on lg (laptop) screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-20 items-start">
                
                {/* Image Container - Sticky on Desktop */}
                <div className="lg:col-span-7">
                    <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-default-100 lg:sticky lg:top-24 aspect-square">
                        <NextImage
                            src={photo.imageUrl}
                            alt={photo.title}
                            fill
                            priority
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                </div>

                {/* Info Container */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="space-y-4">
                        <Chip color="secondary" variant="flat" size="sm" className="font-bold">
                            {photo.category}
                        </Chip>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                            {photo.title}
                        </h1>
                        <div className="flex items-center gap-4 text-default-500 font-medium">
                            <span className="flex items-center gap-2"><FaCube className='text-yellow-600' /> {photo.model}</span>
                            <Separator orientation="vertical" className="h-4" />
                            <span>{photo.resolution}</span>
                        </div>
                    </div>

                    <Separator />

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:flex gap-4">
                        <Button 
                            color="danger" 
                            variant="flat" 
                            size="lg" 
                            className="font-bold flex-1" 
                            startContent={<FaHeart />}
                        >
                            <FaHeart className='text-red-400' />
                            <p>{photo.likes}</p>
                        </Button>
                        <Button 
                            color="primary" 
                            variant="flat" 
                            size="lg" 
                            className="font-bold flex-1" 
                            startContent={<FaDownload />}
                        >
                            <FaDownload className='text-blue-400' />
                            <p>{photo.downloads}</p>
                        </Button>
                    </div>

                    {/* Prompt Box */}
                    <div className="space-y-3">
                        <p className="text-xs font-bold text-default-400 uppercase tracking-widest">Generation Prompt</p>
                        <div className="bg-default-50 border-1 border-default-200 rounded-2xl p-6 relative group">
                            <p className="text-default-700 text-lg leading-relaxed italic pr-10">
                                {photo.prompt}
                            </p>
                            <button className="absolute top-5 right-5 text-default-400 hover:text-primary transition-colors">
                                <FaRegCopy size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {photo.tags.map((tag) => (
                            <Chip key={tag} variant="dot" size="md" className="capitalize border-default-200">
                                {tag}
                            </Chip>
                        ))}
                    </div>

                    <Separator />

                    <div className="flex items-center gap-2 text-default-400 text-sm">
                        <HiOutlineCalendar size={18} />
                        <span>Published on {new Date(photo.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoDetailsPage;