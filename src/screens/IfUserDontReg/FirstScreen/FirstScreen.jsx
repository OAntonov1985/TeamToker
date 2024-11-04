import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Title from '../../StartScreen/components/Title/Title';
import ScreenText from './components/ScreenText';
import NavigationButton from './components/NavigationButton';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import LinearView from './components/BottomLines/LinearView';
import EmptyView from "./components/BottomLines/EmptyView"

SplashScreen.preventAutoHideAsync();

export default function FirstScreen() {
    const [loaded, error] = useFonts({
        'Ubuntu-Bold': require('../../../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
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
                source={require("../../../../assets/images/background.png")}
                resizeMode="cover"
                style={styles.image}>
                <View style={styles.contentContainer}>
                    <NavigationButton title={"Пропустити"} />
                    <Title textStyle={{ fontFamily: 'Ubuntu-Bold' }}>Відстежуй</Title>
                    <ScreenText style={{ fontFamily: "Roboto-Regular", marginRight: 70, marginLeft: 65, marginBottom: 78 }}>
                        За допомогою додатку,
                        ти зможеш відстежувати
                        прогрес спортсменів
                    </ScreenText>
                    <View style={styles.linesContainer}>
                        <LinearView />
                        <EmptyView />
                        <EmptyView />
                    </View>
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
        marginTop: 73,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        flex: 1,
        alignItems: "center"
    },
    linesContainer: {
        flex: 1,
        flexDirection: "row",
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
