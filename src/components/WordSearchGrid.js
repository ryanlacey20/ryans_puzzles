import React, { useState } from 'react';
import './WordSearchGrid.css';
import WordSearchCell from './WordSearchCell';

const WordSearchGrid = ({ grid, wordPositions }) => {
    console.log('grid', grid, 'word positions', wordPositions);
    const [selectedCells, setSelectedCells] = useState([]);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [foundWordCells, setFoundWordCells] = useState([]);

    const handleMouseDown = (x, y) => {
        setIsMouseDown(true);
        setSelectedCells([{ x, y }]);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        checkSelectedWord();
        setSelectedCells([]); // Clear selected cells after mouse up
    };

    const handleMouseEnter = (x, y) => {
        if (isMouseDown) {
            addSelectedCell(x, y);
        }
    };

    const addSelectedCell = (x, y) => {
        const cellIndex = selectedCells.findIndex(cell => cell.x === x && cell.y === y);
        if (cellIndex === -1) {
            setSelectedCells([...selectedCells, { x, y }]);
        }
    };

    const checkSelectedWord = () => {
        const selectedWord = selectedCells.map(cell => grid[cell.x][cell.y].letter).join('');

        // Convert wordPositions to an array if it's an object
        const wordPositionsArray = Array.isArray(wordPositions) ? wordPositions : Object.values(wordPositions);

        console.log('wordpoistions array', wordPositionsArray)

        const foundWord = wordPositionsArray.find(wordPos => wordPos.word === selectedWord);
        if (foundWord) {
            console.log(`Found word: ${selectedWord}`);
            const foundWordCells = [];
            wordPositionsArray.forEach(wordPos => {
                const { startX, startY, endX, endY } = wordPos;
                for (let x = startX; x <= endX; x++) {
                    for (let y = startY; y <= endY; y++) {
                        if (selectedCells.some(cell => cell.x === x && cell.y === y)) {
                            foundWordCells.push({ x, y });
                        }
                    }
                }
            });
            setFoundWordCells(foundWordCells);
        } else {
            console.log(`Selected cells do not form a word.`);
        }
    };

    return (
        <div className="grid-container" onMouseUp={handleMouseUp}>
            {Object.keys(grid).map((rowIndex) => {
                const row = grid[rowIndex];
                return (
                    <div key={rowIndex} className="grid-row">
                        {Object.keys(row).map((colIndex) => {
                            const cell = row[colIndex];
                            const isCellFound = foundWordCells.some(foundCell => foundCell.x === cell.x && foundCell.y === cell.y);
                            const isCellSelected = selectedCells.some(selectedCell => selectedCell.x === cell.x && selectedCell.y === cell.y);
                            const isCellPartOfFoundWord = foundWordCells.some(foundCell =>
                                foundCell.x === cell.x && foundCell.y === cell.y
                            );
                            return (
                                <div
                                    key={colIndex}
                                    onMouseDown={() => handleMouseDown(cell.x, cell.y)}
                                    onMouseEnter={() => handleMouseEnter(cell.x, cell.y)}
                                    className={`grid-cell ${isCellFound ? 'found' : ''} ${isCellSelected ? 'highlighted' : ''} ${isCellPartOfFoundWord ? 'part-of-word' : ''}`}
                                >
                                    <WordSearchCell
                                        cell={cell}
                                        isSelected={isCellSelected}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );


};

export default WordSearchGrid;
