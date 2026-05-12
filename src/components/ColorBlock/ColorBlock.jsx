// Імпортуємо одразу два хуки: для стану (useState) і для відслідковування (useEffect)
import { useState, useEffect } from 'react';

function ColorBlock() {
  // 1. Створюємо стан 'color'. Початкове значення задаємо 'red'.
  const [color, setColor] = useState('red');

  // 2. Функція, яка перевіряє поточний колір і змінює його на протилежний
  const toggleColor = () => {
    if (color === 'red') {
      setColor('blue');
    } else {
      setColor('red');
    }
  };

  // 3. Хук useEffect. Він спрацює при першому запуску, 
  // а потім щоразу, коли зміниться змінна 'color' (бо вона вказана в масиві [color])
  useEffect(() => {
    console.log(`Поточний колір блоку змінився на: ${color}`);
  }, [color]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Практика з useEffect</h2>
      
      
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color, // Ось тут колір прив'язаний до стану
          margin: '0 auto 20px auto',
          borderRadius: '10px',
          border: '3px solid #333'
        }}
      ></div>
      
      
      <button 
        onClick={toggleColor}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Змінити колір
      </button>
    </div>
  );
}

// Обов'язково експортуємо компонент!
export default ColorBlock;