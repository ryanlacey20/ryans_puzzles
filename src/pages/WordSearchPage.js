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
                    'Content-Type': 'application/json', 'X-requestType': 'read',
                },
                body: JSON.stringify({ word1: 'apple1', word2: 'banana2', word3: "pineapple3" }),
            });
            let data = await response.json();
            data = data.data

            const { gridData, wordPositions } = data;
            setGrid(gridData);
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
