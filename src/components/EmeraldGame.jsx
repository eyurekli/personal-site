import ChaosEmerald from "./ChaosEmerald";
import { useState, useEffect } from 'react';

export default function EmeraldGame()
{
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
            setGameCompleted(true);
            setCurrentEmerald(null);
        } else 
        {
            setCurrentEmerald(null); // Temporarily hide emerald
            setTimeout(() => {
                setCurrentEmerald(getNextEmerald());
            }, 1000); // Delay before next emerald appears
        }
    };

    const getNextEmerald = () => {

        const randomColor = remainingEmeralds[Math.floor(Math.random() * remainingEmeralds.length)];
        removeEmerald(randomColor);
        console.log("Removing Emerald...");
        console.log(remainingEmeralds);
        return remainingEmeralds[Math.floor(Math.random() * remainingEmeralds.length)];
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

    return (
        <div id="emerald-game">
            {collectedEmeralds.length > 0 && <p>Collected: {collectedEmeralds.length} / 7</p>}
            {gameCompleted ? (
                <div className="victory-message">
                <h2>You've collected all the Chaos Emeralds!</h2>
                <p>Now you're Super Sonic!</p>
                </div>
            ) : (
                currentEmerald && (
                <ChaosEmerald
                    color={currentEmerald}
                    onClick={handleEmeraldClick}
                />
                )
            )}
        </div>
    )
}