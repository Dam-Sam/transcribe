import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Animated, Pressable, Platform } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native";
import { useVoice } from '../../hooks/useVoice';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function Index() {
  const [isListening, setIsListening] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const {
    transcript,
    isListening: voiceIsListening,
    error,
    startListening,
    stopListening,
  } = useVoice();

  useEffect(() => {
    if (isListening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.3,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scaleAnim.stopAnimation();
      scaleAnim.setValue(1);
    }
  }, [isListening]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
      console.log('Stopped listening to the microphone');
    } else {
      startListening();
      console.log('Started listening to the microphone');
    }
    setIsListening(!isListening);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Live Transcription</Text>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          onPress={toggleListening}
          style={({ pressed }) => [
            styles.micButton,
            { opacity: pressed ? 0.6 : 1 },
            isListening && styles.listening,
          ]}
        >
          <MaterialIcons
            name={isListening ? 'mic' : 'mic-none'}
            size={40}
            color="white"
          />
        </Pressable>
      </Animated.View>
      <Text style={styles.status}>
        {isListening ? 'Listening...' : 'Tap the mic to start'}
      </Text>

      <Text style={styles.text}>
        {transcript || 'Press the button and speak...'}
      </Text>

      <Button title={isListening ? 'Stop Listening' : 'Start Listening'} onPress={toggleListening} />
      {error && <Text style={styles.text}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    color: "#fff",
    borderRadius: 5,
  },
  status: {
    marginTop: 30,
    fontSize: 18,
    color: '#ccc',
  },
  micButton: {
    backgroundColor: '#1e1e1e',
    borderRadius: 50,
    padding: 20,
    elevation: 5,
  },
  listening: {
    backgroundColor: '#e53935',
  },
});
