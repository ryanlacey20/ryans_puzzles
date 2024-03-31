import React from 'react';

const WordSearchCell = ({ cell }) => {
    return (
        <div className={`grid-cell`} id={`${cell.x}${cell.y}`}>
            {cell.letter}
        </div >
    );
};

export default WordSearchCell;
