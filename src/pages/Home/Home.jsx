import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../..";
import ToonsList from "../../components/ToonsList";

const Home = () => {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/webtoons`)
      .then((response) => response.json())
      .then((data) => setWebtoons(data));
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top 10 Popular Webtoons</h1>

      <div className="flex items-center justify-center py-10">
        <ToonsList webtoons={webtoons} />
      </div>
    </main>
  );
};

export default Home;
