import { useCallback, useEffect, useRef } from 'react';

// A short mechanical click, synthesized locally after a desktop mouse gesture.
export default function useMouseClickSound() {
  const audioRef = useRef(null);
  useEffect(() => () => {
    const audio = audioRef.current;
    audioRef.current = null;
    if (audio && audio.state !== 'closed') audio.close().catch(() => {});
  }, []);

  return useCallback((event) => {
    if (event.detail === 0 || window.matchMedia('(max-width: 760px), (pointer: coarse)').matches) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      const audio = audioRef.current || (audioRef.current = new Audio());
      if (audio.state === 'suspended') audio.resume().catch(() => {});
      const duration = 0.035;
      const buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * duration), audio.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let index = 0; index < samples.length; index++) {
        const time = index / audio.sampleRate;
        const attack = Math.exp(-time * 260);
        const release = time > 0.015 ? 0.55 * Math.exp(-(time - 0.015) * 400) : 0;
        samples[index] = (Math.random() * 2 - 1) * (attack + release);
      }
      const source = audio.createBufferSource();
      const filter = audio.createBiquadFilter();
      const volume = audio.createGain();
      source.buffer = buffer;
      filter.type = 'highpass';
      filter.frequency.value = 950;
      volume.gain.value = 0.16;
      source.connect(filter);
      filter.connect(volume);
      volume.connect(audio.destination);
      source.onended = () => { source.disconnect(); filter.disconnect(); volume.disconnect(); };
      source.start();
    } catch {
      // Audio support must never prevent a navigation or power action.
    }
  }, []);
}
