import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../constants/images';

function GameScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={images.background}
          resizeMode="cover"
        />
        <SafeAreaView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleOpponent}>Opponent's Guess</Text>
            <Text style={styles.titleHigher}>Higher or Lower ?</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleOpponent: {
    fontSize: 16,
  },
  titleHigher: {
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.15,
  },
  titleContainer: {},
});

export default GameScreen;
