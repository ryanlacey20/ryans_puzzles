import React from 'react';
import './WordSearchCell.css';

const WordSearchCell = ({ cell }) => {
    return (
        <div className={`grid-cell-component`} id={`${cell.x}${cell.y}`}>
            {cell.letter}
        </div >
    );
};

export default WordSearchCell;
