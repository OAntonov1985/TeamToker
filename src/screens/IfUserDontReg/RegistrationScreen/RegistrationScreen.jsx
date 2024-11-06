import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Title from '../../StartScreen/components/Title/Title';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SubTitle from '../CoachSelectionScreen/components/SubTitle';

SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen() {
    const [loaded, error] = useFonts({
        'Ubuntu-Medium': require('../../../../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
        'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-BoldItalic': require('../../../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }



    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.contentContainer}>
                    <SubTitle textStyle={{ fontFamily: 'Ubuntu-Medium' }}>Створити новий
                        профіль</SubTitle>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    background: {
        flex: 1
    },
    contentContainer: {
        backgroundColor: "gray",
        marginTop: 223
    }, image: {
        flex: 1,
        // alignItems: "center"
    },
});
