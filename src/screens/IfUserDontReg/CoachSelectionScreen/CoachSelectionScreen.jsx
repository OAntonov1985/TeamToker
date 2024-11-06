import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import SubTitle from './components/SubTitle';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import RoleItem from './components/RoleItem';
import ButtonReg from '../../../UI/BottomButton/ButtonReg';

SplashScreen.preventAutoHideAsync();

export default function CoachSelectionScreen() {
    const [selectedRole, setSelectedRole] = useState(0);

    const [loaded, error] = useFonts({
        'Ubuntu-Medium': require('../../../../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular': require('../../../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
        'Ubuntu-Bold': require('../../../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    function selectedItem(num) {
        console.log(num)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.contentContainer}>
                    <SubTitle textStyle={{ fontFamily: 'Ubuntu-Medium' }}>Оберіть вашу {'\n'} роль</SubTitle>
                    <View style={styles.itemContainer}>
                        <RoleItem textStyle={{ fontFamily: 'Ubuntu-Regular' }}
                            subText={"Головний тренер"}
                            imageSourse={require("../../../../assets/images/imageInSelectorScreen/mainTeacher.png")}
                            num={1}
                            onPress={selectedItem}

                        />
                        <RoleItem textStyle={{ fontFamily: 'Ubuntu-Regular' }}
                            subText={"Спортсмен"}
                            imageSourse={require("../../../../assets/images/imageInSelectorScreen/student.png")}
                            num={2}
                            onPress={selectedItem}
                        />
                        <RoleItem textStyle={{ fontFamily: 'Ubuntu-Regular' }}
                            subText={"Батьки"}
                            imageSourse={require("../../../../assets/images/imageInSelectorScreen/pearents.png")}
                            num={3}
                            onPress={selectedItem}
                        />
                    </View>
                    <ButtonReg buttonText={"Продовжити"} textStyle={{ fontFamily: 'Ubuntu-Bold' }} nextComponent={"RegistrationScreen"} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

    }, image: {
        flex: 1,
        alignItems: "center"
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        marginTop: 76,
        marginBottom: 20,
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginBottom: 32
    }
});