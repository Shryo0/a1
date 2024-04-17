// SudokuCell.tsx
import React from 'react';

interface SudokuCellProps {
  row: number;
  col: number;
  value: number;
  onChange: (row: number, col: number, value: number) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ row, col, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    onChange(row, col, newValue);
  };

  return (
    <input
      type="number"
      className="sudoku-cell"
      value={value === 0 ? '' : value}
      min="1"
      max="9"
      onChange={handleChange}
    />
  );
};

export default SudokuCell;
