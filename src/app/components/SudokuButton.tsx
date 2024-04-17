// SudokuButton.tsx
import React from 'react';

interface SudokuButtonProps {
  label: string;
  onClick: () => void;
}

const SudokuButton: React.FC<SudokuButtonProps> = ({ label, onClick }) => {
  return (
    <button className="sudoku-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SudokuButton;
