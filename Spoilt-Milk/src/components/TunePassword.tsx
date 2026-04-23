import React, { useState } from 'react';
import "./Tune.css"

//this is an object where the keys are strings and the values ar numbers <3
const NOTES: Record<string, number> = {
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
    '-': 0
};

const NOTE_NAMES = Object.keys(NOTES);

const TunePassword = () => {

    const [tune, setTune] = useState<string[]>(Array(8).fill('-')); //tell useState it's an array of strings.

    const playNote = (note: string) => { //node parameter is a string o7

        if (note === '-' || !note) return;

        const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext; //typescript fdoesn't just know 'webkitAudioContext' on the window object (and neither do you). We cast window to any here just for the fallback to bypass the TS error.
        const audioCtx = new AudioCtxClass();

        const oscillator = audioCtx.createOscillator();

        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine'

        oscillator.frequency.value = NOTES[note];

        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);

        gainNode.connect(audioCtx.destination);

        oscillator.start();

        oscillator.stop(audioCtx.currentTime + 0.3);
    }

    const handleNoteSlider = (slotIndex: number, noteIndex: number) => {
        const newNote = NOTE_NAMES[noteIndex];
        const newTune = [...tune];
        newTune[slotIndex] = newNote;
        setTune(newTune);
        playNote(newNote);
    };

    const playSequence = () => {
        tune.forEach((note, index) => {
            setTimeout(() => {
                playNote(note);
            }, index * 400);
        });
    };


    // r/ ExplainLikeI'm5
    // imagine you have 9 jars of milk on the wall. Each jar has a different label and it makes the sound of that note when you do the water playing thing but with jars of milk (C4, D4, E4... and one jar is empty for "-").

    // type='range' The Sliding Down Blood Thing
    // this turns the input into a slider (computers are smart, you don't have to overcomplicate and rebuild the wheel. we aim for effectivness, not smart inventions, except when debugging...actully no, with debugging too. i'll retype my entire code just for everyone to tell me it's perfect and it sill doens't work for me to finally cheat the import anf i SPELT IT WRONGGG, IM A SYNTAX ERROR MAXXER BRO

    // anyway

    // Think of it as a ladder you can slide back and forth to reach the 9 jars of milk

    // min{0} and max={NOTE_NAMES.length - 1} THE BOUNDS
    // This tells the slider where the drip starts and stops :P

    // min={0}: The drip starts at jar #0 (-)

    // max={8}: thenlast jar is index 8, so the slider doest drip off the edge of the container

    // value={NOTE_NAMES.indexOf((currentNote)) (where are weeee and i'm so sooorryy)}
    // This tells the drop to sit in triage on the slider for now until it's moved.Then drop looks at her older sister and says "what number Jar is G4 milk? and if G4 is the 5th jar, the slider moves itself to position 5.

    // onChange=(e) => ...} "hei hii, i moved. and everyting you brab me i wil keep moving" .;D

    // a.target.value: This is the number of the new jar the ladder is touching (like 3 >:3)

    // parseInt(...): Since the slider speaks in "text" numbers, we use this to turn it into a "real" math number so the computer can calculate with this o7

    // handleNoteSlider(slotIndex, ...):
    // This sends a messege to the main code saying 


    return (
        <>
            <div className='passwrord-container'>
                <h2> Create your audio Password</h2>

                <div className='slider-grid'>
                    {tune.map((currentNote, slotIndex) => (
                        <div key={slotIndex} className='slider-col'>
                            <div className='slider-row'>
                                <span className='current-note'>{currentNote}</span>
                                <input 
    type='range' 
    min={0} 
    max={NOTE_NAMES.length - 1} 
    value={NOTE_NAMES.indexOf(currentNote)} 
    onChange={(e) => handleNoteSlider(slotIndex, parseInt(e.target.value))}
    className="blood-slider"
    style={{
        /* Use 'to top' and tweak the percentage calculation */
        background: `linear-gradient(to right, #67161F ${
            (NOTE_NAMES.indexOf(currentNote) / (NOTE_NAMES.length - 1)) * 100
        }%, rgba(103, 22, 31, 0.2) 0%)`
    }}
/>




                            </div>
                        </div>
                    ))}
                </div>

                <div className='password-controls'>
                    <button onClick={playSequence} className='contrls-btn'>
                        ▶
                    </button>

                    <button onClick={() => alert(`Saving Password as ${tune.join('')}`)} className='controls-btn'>Save Password</button>
                </div>

                <p className='user-password-string'>RETURN USE'S PASSWORD AT STRING: <strong>{tune.join('')}</strong></p>

            </div>
        </>
    );
};

export default TunePassword;