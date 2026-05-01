import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
const res = await fetch('https://pixgen-nine.vercel.app/category.json');
const categories = await res.json();
console.log(categories);

    return (
        <div className='mb-5 space-x-1'>
                {categories.map(category=> <Link key={category.id} href={`?category=${category.name.toLowerCase()}`} ><Button variant='secondary' size='sm' >{category.name}</Button></Link>)}
        </div>
    );
};

export default Category;