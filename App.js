import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import COLORS from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    // setUserNumber(null); 
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
       <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  // If the game is Over, and the Number has been chosen
  if (gameIsOver && userNumber) {
     screen = (
        <GameOverScreen
           userNumber={userNumber}
           roundsNumber={guessRounds}
           onStartNewGame={startNewGameHandler}
        />
     );
  }

   return (
      <LinearGradient colors={[COLORS.primary700, COLORS.accent500]} style={styles.rootScreen}>
         <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}
            style={styles.rootScreen}>
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
         </ImageBackground>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   rootScreen: {
      flex: 1,
   },
   backgroundImage: {
    opacity: 0.15
   }
});
