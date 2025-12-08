import ChaosEmerald from "./ChaosEmerald";
import { useState, useEffect, useRef } from 'react';
import './../styles/EmeraldGame.css'



export default function EmeraldGame()
{
    const emeraldColors = [
        'red', 'blue', 'green', 'yellow', 'cyan', 'purple', 'white'
    ];

    const [collectedEmeralds, setCollectedEmeralds] = useState([]);
    const [remainingEmeralds, setRemainingEmeralds] = useState([...emeraldColors]);
    const [currentEmerald, setCurrentEmerald] = useState(null);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [volume, setVolume] = useState(0.5); // Default 50% of slider (which equals 35% actual volume)
    const [isMuted, setIsMuted] = useState(false);
    
    // Maximum actual audio volume is 70% (0.7) - even at 100% slider, audio is capped at 70%
    const MAX_AUDIO_VOLUME = 0.7;

    // Create audio instance with useRef to persist across renders
    const all_seven_audio = useRef(null);
    
    useEffect(() => {
        all_seven_audio.current = new Audio('/sounds/all_seven.mp3');
        all_seven_audio.current.volume = 0.5 * MAX_AUDIO_VOLUME; // Set initial volume to 35% (50% slider * 70% max)
        
        return () => {
            // Cleanup audio on unmount
            if (all_seven_audio.current) {
                all_seven_audio.current.pause();
                all_seven_audio.current = null;
            }
        };
    }, []);

    // Update audio volume when volume or mute state changes
    useEffect(() => {
        if (all_seven_audio.current) {
            // Convert slider value (0-1) to actual audio volume (0-0.7)
            all_seven_audio.current.volume = isMuted ? 0 : volume * MAX_AUDIO_VOLUME;
        }
    }, [volume, isMuted]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(false); // Unmute when adjusting volume
    };

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    const handleEmeraldClick = () => {
        setCollectedEmeralds((prev) => [...prev, currentEmerald]);
        if (collectedEmeralds.length + 1 === 7) 
        {
            if (all_seven_audio.current) {
                all_seven_audio.current.play();
            }
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

    // Preload emerald images when game component mounts
    useEffect(() => {
        const emeraldImages = [
            ...emeraldColors.map(color => `/emeralds/emerald_${color}.png`),
            '/emeralds/emerald_gray.png'
        ];
        
        // Preload all emerald images
        emeraldImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // emeraldColors is a constant, no need to include in deps

    // Set the first emerald when the game starts
    useEffect(() => {
        if (!gameCompleted) {
            setCurrentEmerald(getNextEmerald());
        }
    }, []);

    const emeraldTable = (
        <div id="emerald-table" role="list" aria-label="Chaos Emeralds collection">
            {collectedEmeralds.map((color) => (
                <div key={`collected-${color}`} className="emerald-image" role="listitem">
                    <img 
                        src={`/emeralds/emerald_${color}.png`}
                        alt={`${color} Chaos Emerald - Collected`}
                        loading="eager"
                        width="75"
                        height="75"
                    />
                </div>
            ))}
            {emeraldColors.filter(color => !collectedEmeralds.includes(color)).map((color) => (
                <div key={`remaining-${color}`} className="emerald-image" role="listitem">
                    <img 
                        src={"/emeralds/emerald_gray.png"}
                        alt={`${color} Chaos Emerald - Not collected`}
                        loading="eager"
                        width="75"
                        height="75"
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div id="emerald-game" role="region" aria-label="Emerald Game">
            <div className="game-content">
                <p className="game-instructions">Search For the Seven Chaos Emeralds...</p>
                <p className="game-counter" aria-live="polite" aria-atomic="true">
                    Collected: {collectedEmeralds.length} / 7
                </p>
                
                {/* Audio Controls */}
                <div className="audio-controls" role="group" aria-label="Audio controls">
                    <button
                        className="mute-button"
                        onClick={handleMuteToggle}
                        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
                        title={isMuted ? 'Unmute sound' : 'Mute sound'}
                    >
                        {isMuted ? '🔇' : '🔊'}
                    </button>
                    <label htmlFor="volume-slider" className="volume-label">
                        <span className="sr-only">Volume</span>
                        <input
                            id="volume-slider"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="volume-slider"
                            aria-label="Volume control"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
                        />
                        <span className="volume-value" aria-live="polite">
                            {Math.round((isMuted ? 0 : volume) * 100)}%
                        </span>
                    </label>
                </div>

                {emeraldTable}
            </div>
            
            {gameCompleted ? (
                <div className="victory-message" role="status" aria-live="polite">
                    <h2>You collected all 7 Chaos Emeralds!</h2>
                </div>
            ) : (
                currentEmerald && (
                    <ChaosEmerald 
                        color={currentEmerald} 
                        onClick={handleEmeraldClick}
                        aria-label={`Click to collect the ${currentEmerald} Chaos Emerald`}
                    />
                )
            )}
        </div>
    )
}