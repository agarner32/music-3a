const MAX_PLAYS = 6; // Default plays for all melodies — change this to adjust globally

const MELODIES = [
  {
    id: "week01-01",
    title: "Melody 1",
    week: 1,
    clef: "treble",
    keySignature: "C",
    timeSignature: "4/4",
    audio: "audio/week-01/melody-01.mp3",
    octaveRange: [4, 5],
    // maxPlays: 3, // uncomment to override global for this melody
    notes: [
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "G", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "C", octave: 4, dur: "h" }
    ]
  }
];
