import React from 'react';
import SharedNav from '../Shared/SharedNav';
import ShortReads from './ShortReads/ShortReads';
import Trending from './Trending/Trending';

const Blog = () => {
    return (
        <>
            <SharedNav />
            <div className='mid-container h-[100vh]'>
                <Trending />
                <ShortReads/>
            </div>
        </>
    );
};

export default Blog;