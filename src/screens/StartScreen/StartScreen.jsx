import React from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartScrereIconView from './components/StartScreemIcon/StartScrereIcon';
import Title from './components/Title/Title';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function StartScreen() {
    const [loaded, error] = useFonts({
        'Roboto-BlackItalic': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
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
                source={require("../../../assets/images/Untitled2.png")}
                resizeMode="cover"
                style={[styles.image, styles.imagePosition]}>
                <View style={styles.contentContainer}>
                    <StartScrereIconView />
                    <Title textStyle={{ color: 'blue', fontSize: 48, fontFamily: 'Roboto-BlackItalic' }}>TeamTocker</Title>
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
    contentContainer: {
        width: "100%",
        flex: 1,
        marginBottom: 124,
        marginTop: 117,
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        flex: 1,
        alignItems: "center",
        // width: "100%",
        // height: "113%"
    },
    imagePosition: {
        // left: -10,
        // position: "absolute",
    },
});