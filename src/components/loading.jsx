import React, { useState, useEffect } from 'react';
import Card from './card';


export default function Loading({ commands }) {
  const [visibleCommands, setVisibleCommands] = useState([]);

  const generateRandomNumber = () => Math.floor(Math.random() * 101);

  useEffect(() => {
    commands.forEach((command, index) => {
      setTimeout(() => {
        setVisibleCommands((prevCommands) => [
          ...prevCommands,
          { position: generateRandomNumber(), data: command }
        ]);
      }, index * 1000); 
    });
  }, [commands]);

  return (
    <div className='loading-container'>
      {visibleCommands.map((command, index) => (
        <Card key={index} position={command.position} data={command.data} />
      ))}
      <div className='loading-title'>
        Çekiliş Yapılıyor...
      </div>
    </div>
  );
}