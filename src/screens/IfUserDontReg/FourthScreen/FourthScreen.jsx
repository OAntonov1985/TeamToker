import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import Title from '../../StartScreen/components/Title/Title';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import ButtonReg from "../../../UI/BottomButton/ButtonReg"

SplashScreen.preventAutoHideAsync();

export default function FourthScreen() {
    const [loaded, error] = useFonts({
        'Ubuntu-Bold': require('../../../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
        'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
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
                source={require("../../../../assets/images/Untitled1.png")}
                resizeMode="cover"
                style={styles.image}>
                <View style={styles.contentContainer}>
                    <View>
                        <Title textStyle={{ fontFamily: 'Ubuntu-Bold' }}>TeamTocker</Title>
                        <ImageBackground
                            source={require("../../../../assets/images/StartIconParts/Frame 2608941.png")}
                            resizeMode="cover"
                            style={styles.iconImage}
                        />
                    </View>
                    <View>
                        <ButtonReg buttonText={"Зареєструватися"} textStyle={{ fontFamily: 'Roboto-Bold' }} nextComponent={"CoachSelectionScreen"} />
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
        flex: 1,
        width: "100%",
        marginTop: 144,
        marginBottom: 46,
        justifyContent: "space-between",
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
    },
    iconImage: {
        height: 128,
        width: 95,
        margin: "auto",
        position: "absolute",
        top: 120,
        left: 169
    }
});
