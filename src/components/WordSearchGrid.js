import React, { useState } from 'react';
import './WordSearchGrid.css';
import WordSearchCell from './WordSearchCell';

const WordSearchGrid = ({ grid, wordPositions }) => {
    const [selectedCells, setSelectedCells] = useState([]);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const addSelectedCell = (x, y) => {

        const cellIndex = selectedCells.findIndex(cell => cell.x === x && cell.y === y);
        if (cellIndex === -1) {
            setSelectedCells([...selectedCells, { x, y }]);
        }
    };

    const handleMouseDown = (x, y) => {
        setIsMouseDown(true);
        setSelectedCells([{ x, y }]);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
        checkSelectedWord();
    };

    const handleMouseMove = (x, y) => {
        if (isMouseDown) {
            addSelectedCell(x, y);
        }
    };

    const checkSelectedWord = () => {

        const selectedWord = selectedCells.map(cell => grid[cell.x][cell.y].letter).join('');

        const foundWord = wordPositions.find(wordPos => wordPos.word === selectedWord);
        if (foundWord) {
            console.log(`Found word: ${selectedWord}`);

        } else {
            console.log(`Selected cells do not form a word.`);
        }
    };

    return (
        <div className="grid-container">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => (
                        <div
                            key={colIndex}
                            onMouseDown={() => handleMouseDown(cell.x, cell.y)}
                            onMouseUp={handleMouseUp}
                            onMouseMove={() => handleMouseMove(cell.x, cell.y)}
                        >
                            <WordSearchCell
                                cell={cell}
                                isSelected={selectedCells.some(selectedCell => selectedCell.x === cell.x && selectedCell.y === cell.y)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default WordSearchGrid;
