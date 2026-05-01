import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
    // console.log(photo);

    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image 
                fill 
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='rounded-xl object-cover' alt={photo.title} src={photo.imageUrl} />
                <Chip size='sm' color="danger" className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>
            <div className='flex gap-5'>
                <div className='flex items-center gap-2'>
                    <p> <FaHeart className='text-red-400' /> </p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-2'>
                    <p> <FaDownload className='text-blue-400' /> </p>
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Button variant='outline' className='w-full'>View</Button>
        </Card>
    );
};

export default PhotoCard;