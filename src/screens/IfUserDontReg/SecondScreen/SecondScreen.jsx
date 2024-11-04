import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Title from '../../StartScreen/components/Title/Title';
import ScreenText from '../FirstScreen/components/ScreenText';
import NavigationButton from '../FirstScreen/components/NavigationButton';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import LinearView from '../FirstScreen/components/BottomLines/LinearView';
import EmptyView from "../FirstScreen/components/BottomLines/EmptyView"

SplashScreen.preventAutoHideAsync();

export default function SecondScreen() {
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
                    <Title textStyle={{ fontFamily: 'Ubuntu-Bold' }}>Мотивуй</Title>
                    <ScreenText style={{ fontFamily: "Roboto-Regular", paddingRight: 62, paddingLeft: 62, marginBottom: 17 }}>
                        Додаток, який допоможе зробити тренувальнй процес цікавішим для спортсменів {'\n'}
                        та продуктивнішим для {'\n'} тренера
                    </ScreenText>
                    <View style={styles.linesContainer}>
                        <EmptyView />
                        <LinearView />
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
