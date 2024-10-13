import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../..';
import ToonsList from '../../components/ToonsList';

const Favorites = () => {

    const userId = localStorage.getItem('id');

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const response = await fetch(`${BASE_URL}/api/webtoons/favorites/${userId}`);
            if (response.ok) {
                const data = await response.json();
                setFavorites(data);
            }
        };

        fetchFavorites();
    }, [userId]);

    return (
        <div>
            <h2 className="text-2xl font-bold ml-16 mt-8 text-pink-500">Favorite Webtoons</h2>
            <div className="flex items-center justify-center py-10">
            <ToonsList webtoons={favorites} />
            </div>
        </div>
    );
};

export default Favorites;