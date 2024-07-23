import {View, Text, Pressable, StyleSheet} from 'react-native';
import styles from './styles';

function PrimaryButton({children}) {
  function pressHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
