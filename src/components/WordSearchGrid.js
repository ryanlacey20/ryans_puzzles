import React from 'react';
import './WordSearchGrid.css';
import WordSearchCell from './WordSearchCell';

const WordSearchGrid = ({ grid, wordPositions }) => {
    return (
        <div className="grid-container">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} >
                            <WordSearchCell cell={cell} />
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    );
};

export default WordSearchGrid;
