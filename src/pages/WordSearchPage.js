import React, { useState, useEffect } from 'react';
import './WordSearchPage.css'
import WordSearchGrid from '../components/WordSearchGrid';

const WordSearchPage = () => {
    const [grid, setGrid] = useState([]);
    const [wordPositions, setWordPositions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchGridData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/generate-word-search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ word1: 'apple3', word2: 'banana3' }),
            });
            const data = await response.json();

            const { grid, wordPositions } = data.grid;
            setGrid(grid);
            console.log("grid dataa:", grid)
            console.log("wordpositions outisde", wordPositions)
            setWordPositions(wordPositions);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching grid data:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchGridData();
    }, []);


    if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (

            <div className="word-search-page">
                <WordSearchGrid grid={grid} wordPositions={wordPositions} />

            </div>
        );
    }

};

export default WordSearchPage;
