import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartScreen from './src/screens/StartScreen/StartScreen';
import FirstScreen from './src/screens/IfUserDontReg/FirstScreen/FirstScreen';
import SecondScreen from "./src/screens/IfUserDontReg/SecondScreen/SecondScreen.jsx";
import ThirdScreen from "./src/screens/IfUserDontReg/ThirdScreen/ThirdScreen.jsx"


export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            {/* <StartScreen /> */}
            {/* <FirstScreen /> */}
            {/* <SecondScreen /> */}
            <ThirdScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
