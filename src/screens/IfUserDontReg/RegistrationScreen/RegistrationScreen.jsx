import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import SubTitle from '../CoachSelectionScreen/components/SubTitle';
import ButtonReg from '../../../UI/BottomButton/ButtonReg';
import GoogleButtonReg from '../../../UI/GoogleButtonReg/GoogleButtonReg';
import FaceBookButton from '../../../UI/FaceBookButton/FaceBookButton';

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
                    <SubTitle textStyle={{ fontFamily: 'Ubuntu-Medium' }}>Створити новий {'\n'}
                        профіль</SubTitle>
                    <ButtonReg buttonText={"Реєстрація через ел. пошту"}
                        nextComponent={"RegistrationFormScreen"}
                        style={styles.buttonReg}
                        textStyle={{ fontFamily: 'Roboto-Bold' }}
                    />
                    <View style={styles.conteinerForLines}>
                        <View style={styles.gorizontalLine} />
                        <Text style={styles.textInConteinerLines}>{'або'}</Text>
                        <View style={styles.gorizontalLine} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <GoogleButtonReg buttonTextStyle={{ fontFamily: 'Roboto-Bold' }} />
                        <FaceBookButton buttonTextStyle={{ color: "white", fontFamily: 'Roboto-Bold' }} />
                    </View>
                    <View style={styles.altEnterContainer}>
                        <Text style={[styles.text, { fontFamily: 'Roboto-Regular' }]}>Вже зареєстровані?</Text>
                        <Pressable>
                            <Text style={[styles.text, { fontFamily: 'Roboto-Bold', textDecorationLine: "underline" }]}>Увійти</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

    },
    background: {
        flex: 1
    },
    contentContainer: {
        marginTop: 223,
    },
    image: {
        flex: 1,
    },
    buttonReg: {
        marginBottom: 29,
        fontFamily: 'Roboto-Bold'
    },
    conteinerForLines: {
        display: "flex",
        flexDirection: "row",
        gap: 12,
        marginHorizontal: 16,
        alignItems: "center",
        marginBottom: 34
    },
    gorizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#FFFFFF",
        opacity: 0.12,
    },
    textInConteinerLines: {
        color: "#fff",
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        lineHeight: 16
    },
    buttonContainer: {
        paddingHorizontal: 16,
    },
    altEnterContainer: {
        marginHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 7,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 20,
    }
});
