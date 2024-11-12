import { Formik } from 'formik';
import { TextInput, View, StyleSheet, ImageBackground, SafeAreaView, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import BackButton from '../../../UI/BackButton/BackButton';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import SubTitle from '../CoachSelectionScreen/components/SubTitle';
import ButtonReg from '../../../UI/BottomButton/ButtonReg';

SplashScreen.preventAutoHideAsync();

export default function RegistrationFormScreen() {

    const [loaded, error] = useFonts({
        'Ubuntu-Medium': require('../../../../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
        'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
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
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <ImageBackground
                source={require("../../../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.image}>
                <SafeAreaView style={{ height: 52, marginBottom: 26 }} />
                <ScrollView style={[styles.contetnContainer]}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <BackButton textStyle={{ fontFamily: "Roboto-Regular" }} />
                    <SubTitle textStyle={{ fontFamily: "Ubuntu-Medium", textAlign: "left", marginBottom: 38 }}>Введіть ваші данні</SubTitle>
                    <Formik style={styles.form}
                        initialValues={{
                            clubTitle: '',
                            fullName: '',
                            email: '',
                            password: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Text style={styles.label}>Назва клубу</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Введіть назву вашого клубу"
                                    placeholderTextColor="#FFFFFF"
                                    onChangeText={handleChange('clubTitle')}
                                    onBlur={handleBlur('clubTitle')}
                                    value={values.clubTitle}
                                />

                                <Text style={styles.label}>Ім'я та прізвище</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Введіть ваше ім'я та прізвище"
                                    placeholderTextColor="#FFFFFF"
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />


                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Введіть ваш email"
                                    placeholderTextColor="#FFFFFF"
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />


                                <Text style={styles.label}>Пароль</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Введіть ваш пароль"
                                    placeholderTextColor="#FFFFFF"
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                <ButtonReg nextComponent={"TeacherScreen"} buttonText="Зареєструватись" style={{ width: "100%", marginTop: 40, marginBottom: 50 }} textStyle={{ fontFamily: "Roboto-Bold" }} />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    image: {
        flex: 1,
    },
    contetnContainer: {
        paddingHorizontal: 16
    },
    form: { marginBottom: 72 },
    label: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 22.4,
        fontFamily: 'Roboto-Regular'
    },
    input: {
        width: "auto",
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 56,
        borderWidth: 1,
        borderRadius: 18,
        backgroundColor: "rgba(240, 243, 250, 0.20)",
        borderColor: "rgba(240, 243, 250, 0.20)",
        lineHeight: 20,
        color: "#fff",
        fontFamily: "Roboto-Regular",
        marginBottom: 16
    }
})