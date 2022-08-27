import React from 'react';
import SharedNav from '../Shared/SharedNav';
import Trending from './Trending/Trending';

const Blog = () => {
    return (
        <>
            <SharedNav />
            <div className='mid-container h-[100vh]'>
                <Trending />
            </div>
        </>
    );
};

export default Blog;