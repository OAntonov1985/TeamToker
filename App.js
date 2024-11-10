import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartScreen from './src/screens/StartScreen/StartScreen';
import FirstScreen from './src/screens/IfUserDontReg/FirstScreen/FirstScreen';
import SecondScreen from "./src/screens/IfUserDontReg/SecondScreen/SecondScreen.jsx";
import ThirdScreen from "./src/screens/IfUserDontReg/ThirdScreen/ThirdScreen.jsx";
import FourthScreen from './src/screens/IfUserDontReg/FourthScreen/FourthScreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './src/screens/IfUserDontReg/RegistrationScreen/RegistrationScreen.jsx';
import CoachSelectionScreen from './src/screens/IfUserDontReg/CoachSelectionScreen/CoachSelectionScreen.jsx';
import RegistrationFormScreen from './src/screens/IfUserDontReg/RegistrationFormScreen/RegistrationFormScreen.jsx';
import TeacherScreen from './src/screens/TeacherScreen.jsx';


const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="FourthScreen" component={FourthScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="CoachSelectionScreen" component={CoachSelectionScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="RegistrationFormScreen" component={RegistrationFormScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TeacherScreen" component={TeacherScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
