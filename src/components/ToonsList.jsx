import React from 'react';
import { Link } from 'react-router-dom';

const ToonsList = ({ webtoons }) => {
    return (
        <div className="grid gap-y-8 gap-6">
            {webtoons.map((webtoon) => (
                <Link
                    to={`/webtoon/${webtoon._id}`}
                    key={webtoon._id}
                    className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                >
                    <img
                        src={webtoon.cover_image}
                        alt={webtoon.title}
                        className="w-full lg:h-[300px] object-cover"
                    />
                    <div className="p-4 bg-white">
                        <h2 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
                            {webtoon.title}
                        </h2>
                        <p className="text-gray-600">Creator: {webtoon.creator}</p>
                        <p className="text-gray-700 mt-2">
                            {webtoon.description.length > 100
                                ? `${webtoon.description.substring(0, 100)}...`
                                : webtoon.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ToonsList;