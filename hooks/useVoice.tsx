// hooks/useVoice.ts
import { useState, useEffect } from 'react';
import Voice from '@react-native-voice/voice';

export const useVoice = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Voice.onSpeechStart = () => setIsListening(true);
    Voice.onSpeechEnd = () => setIsListening(false);
    Voice.onSpeechResults = (e) => {
      if (e.value) setTranscript(e.value[0]);
    };
    Voice.onSpeechError = (e) => {
      setError(e.error?.message ?? 'Unknown error');
      setIsListening(false);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      setError(null);
      await Voice.start('en-US');
    } catch (e: any) {
      setError(e.message);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return {
    transcript,
    isListening,
    error,
    startListening,
    stopListening,
  };
};
