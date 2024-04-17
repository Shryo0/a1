// SudokuGrid.tsx
import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

const initialGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const SudokuGrid: React.FC = () => {
  const [grid, setGrid] = useState(initialGrid);

  const handleCellChange = (row: number, col: number, value: number) => {
    // Atualizar o estado do grid com o novo valor
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={cell}
              onChange={handleCellChange}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
