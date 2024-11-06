import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Title from '../../StartScreen/components/Title/Title';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
            <LinearGradient
                colors={['#14DAB3', '#565FD7', '#161D73']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.background}
            >
                <View style={styles.contentContainer}>
                    <Title textStyle={{ fontFamily: 'Ubuntu-Medium' }}>Створити новий
                        профіль</Title>
                </View>
            </LinearGradient>
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
    }
});
