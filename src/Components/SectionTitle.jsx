import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center w-4/12 mx-auto'>
            <p className='text-yellow-600 py-3'>---{subheading}---</p>
            <h1 className='border-y-4 text-2xl font-bold py-3 '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;