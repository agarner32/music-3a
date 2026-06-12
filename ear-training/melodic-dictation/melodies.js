const MAX_PLAYS = 6; // Default plays for all melodies — change this to adjust globally

const MELODIES = [
  {
    id: "week01-01",
    title: "Melody 1",
    week: 1,
    clef: "treble",
    keySignature: "C",
    timeSignature: "4/4",
    mode: "major",
    audio: "audio/week-01/melody-01.mp3",
    octaveRange: [4, 5],
    notes: [
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "G", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "C", octave: 4, dur: "h" }
    ]
  },
  {
    id: "week01-02",
    title: "Melody 2",
    week: 1,
    clef: "treble",
    keySignature: "C",
    timeSignature: "4/4",
    mode: "major",
    audio: "audio/week-01/melody-02.mp3",
    octaveRange: [4, 5],
    notes: [
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "8" },
      { pitch: "D", octave: 4, dur: "8" },
      { pitch: "C", octave: 4, dur: "h" }
    ]
  },
  {
    id: "week01-03",
    title: "Melody 3",
    week: 1,
    clef: "treble",
    keySignature: "F",
    timeSignature: "4/4",
    mode: "major",
    audio: "audio/week-01/melody-03.mp3",
    octaveRange: [4, 5],
    notes: [
      { pitch: "F", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "F", octave: 4, dur: "h" }
    ]
  },
  {
    id: "week01-04",
    title: "Melody 4",
    week: 1,
    clef: "treble",
    keySignature: "F",
    timeSignature: "4/4",
    mode: "major",
    audio: "audio/week-01/melody-04.mp3",
    octaveRange: [4, 5],
    notes: [
      { pitch: "F", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "q" },
      { pitch: "F", octave: 4, dur: "h" }
    ]
  },
  {
    id: "week01-05",
    title: "Melody 5",
    week: 1,
    clef: "treble",
    keySignature: "C",
    timeSignature: "4/4",
    mode: "major",
    audio: "audio/week-01/melody-05.mp3",
    octaveRange: [4, 5],
    notes: [
      { pitch: "C", octave: 4, dur: "q" },
      { pitch: "D", octave: 4, dur: "q" },
      { pitch: "E", octave: 4, dur: "8" },
      { pitch: "E", octave: 4, dur: "8" },
      { pitch: "F", octave: 4, dur: "q" },
      { pitch: "G", octave: 4, dur: "8" },
      { pitch: "F", octave: 4, dur: "8" },
      { pitch: "E", octave: 4, dur: "8" },
      { pitch: "D", octave: 4, dur: "8" },
      { pitch: "C", octave: 4, dur: "h" }
    ]
  }
];
