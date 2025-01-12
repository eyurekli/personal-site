import ChaosEmerald from "./ChaosEmerald";
import { useState, useEffect } from 'react';
import './../styles/EmeraldGame.css'



export default function EmeraldGame()
{

    const all_seven_audio = new Audio('/sounds/all_seven.mp3');

    all_seven_audio.volume = 0.05;

    const emeraldColors = [
        'red', 'blue', 'green', 'yellow', 'cyan', 'purple', 'white'
    ];

    const [collectedEmeralds, setCollectedEmeralds] = useState([]);
    const [remainingEmeralds, setRemainingEmeralds] = useState([...emeraldColors]);
    const [currentEmerald, setCurrentEmerald] = useState(null);
    const [gameCompleted, setGameCompleted] = useState(false);

    const handleEmeraldClick = () => {
        setCollectedEmeralds((prev) => [...prev, currentEmerald]);
        if (collectedEmeralds.length + 1 === 7) 
        {
            all_seven_audio.play()
            setGameCompleted(true);
            setCurrentEmerald(null);
        } else 
        {
            setCurrentEmerald(null); // Temporarily hide emerald
            setTimeout(() => {
                setCurrentEmerald(getNextEmerald(remainingEmeralds));
            }, 1000); // Delay before next emerald appears
        }
    };

    const getNextEmerald = () => {

        const randomColor = remainingEmeralds[Math.floor(Math.random() * remainingEmeralds.length)];
        removeEmerald(randomColor);
        return randomColor;
    };

    const removeEmerald = (colorToRemove) => {
        setRemainingEmeralds((remaining) => remaining.filter(color => color !== colorToRemove));
    }

    // Set the first emerald when the game starts
    useEffect(() => {
        if (!gameCompleted) {
            setCurrentEmerald(getNextEmerald());
        }
    }, []);

    const emeraldTable = (
        <div id="emerald-table">
            {collectedEmeralds.map((color) => (
                <div className="emerald-image">
                  <img 
                      src={`/emeralds/emerald_${color}.png`}
                      style={{
                        width: '75px'
                    }}
                      alt={`${color} Chaos Emerald`} 
                  />
              </div>
            ))}
            {emeraldColors.filter(color => !collectedEmeralds.includes(color)).map((color) => (
                <div className="emerald-image">
                    <img 
                        src={"/emeralds/emerald_gray.png"}
                        alt={`${color} Chaos Emerald`} 
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div id="emerald-game">
            {collectedEmeralds.length > 0 && 
                <div>
                    <p>Collected: {collectedEmeralds.length} / 7</p>
                    {emeraldTable}
                </div>
            }
            {gameCompleted ?  (
                <div className="victory-message">
                <h2>You collected all 7 Chaos Emeralds!</h2>
                </div>
            ) : (
                currentEmerald && (
                    <ChaosEmerald color={currentEmerald} onClick={handleEmeraldClick}/>
                )
            )}
        </div>
    )
}