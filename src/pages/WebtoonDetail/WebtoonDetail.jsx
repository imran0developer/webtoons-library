import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../..';

const WebtoonDetail = () => {
    const { id } = useParams();
    const [webtoon, setWebtoon] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    const onFav = async () => {
        const response = await fetch(`${BASE_URL}/api/webtoons/favorites/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: userId }),
        });
    
        if (response.ok) {

            setTimeout(() => {
                navigate('/favourites')    
            }, 2000);
            
        } else {
            alert('Failed to add to favorites.');
        }
    };

    useEffect(() => {
        fetch(`${BASE_URL}/api/webtoons/${id}`)
            .then(response => response.json())
            .then(data => setWebtoon(data));
    }, [id]);

    if (!webtoon) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{webtoon.title}</h1>
        <img src={webtoon.cover_image} alt={webtoon.title} className="lg:w-[75%] bg-cyan-300 object-cover mb-4" />
        <p className="text-gray-600">Creator: {webtoon.creator}</p>
        <p className="text-gray-700 mt-2">{webtoon.description}</p>
        {token && <div className='flex items-center justify-center my-16'>
            <button onClick={onFav} className={`w-[30%] bg-pink-500 text-white p-2 rounded mt-2`}>Add to Favourite</button>
        </div>}

        {/* Comments Section (Placeholder) */}
        <div className="mt-6">
            <h2 className="text-xl font-semibold">User Comments</h2>
            {/* Placeholder for comments functionality */}
            <textarea placeholder="Leave a comment..." className="w-full h-24 border rounded p-2 mt-2"></textarea>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Submit</button>
        </div>
    </div>
    );
};

export default WebtoonDetail;
