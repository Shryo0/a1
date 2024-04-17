// pages/index.tsx
import React from 'react';
import SudokuGrid from '../components/SudokuGrid';
import SudokuButton from '../components/SudokuButton';
import styles from '../styles/sudoku.module.css';

const SudokuPage: React.FC = () => {
  const handleNewGame = () => {
    // Lógica para iniciar um novo jogo
    console.log('Novo jogo iniciado!');
  };

  const handleCheckGame = () => {
    // Lógica para verificar se o jogo está correto
    console.log('Verificando jogo...');
  };

  return (
    <div className={styles.container}>
      <h1>Sudoku</h1>
      <SudokuGrid />
      <div className={styles.buttons}>
        <SudokuButton label="Novo Jogo" onClick={handleNewGame} />
        <SudokuButton label="Verificar" onClick={handleCheckGame} />
      </div>
    </div>
  );
};

export default SudokuPage;
