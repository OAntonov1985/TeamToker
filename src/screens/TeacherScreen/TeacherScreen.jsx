import { View, SafeAreaView, ImageBackground, StyleSheet, Text, Image } from 'react-native';
import NavBarItem from './components/NavBarItem';
import Icon from "./components/Icon";
import Arrow from "./components/Arrow";
import HomeIcon from "./components/HomeIcon";
import People from "./components/People";
import Calendar from "./components/Calendar";
import Payment from "./components/Payment";
import Star from "./components/Star";
import Cup from "./components/Cup";
import ViewIcon from "./components/ViewIcon"

export default function TeacherScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.container}>
                <SafeAreaView style={{ height: 52, marginBottom: 29 }} />
                <View style={styles.mainContentView}>
                    <View style={styles.iconSettings}>
                        <Icon />
                    </View>
                    <View style={styles.teacherImageContainer} >
                        <ImageBackground
                            source={require("../../../assets/images/9c4d361cb9f54e38261e75afcd23b9b1.jpg")}
                            resizeMode="cover"
                            style={styles.logoImageSettings}
                        />
                    </View>
                    <Text style={styles.subText} >Головний тренер</Text>
                    <Text style={styles.titleText}>Долецький О.В.</Text>
                    <View style={styles.selector}>
                        <Text style={styles.textInSelector}>Ваші групи</Text>
                        <View style={styles.viewInSelector}><ViewIcon /></View>
                    </View>
                    <Text style={styles.titleTextInMain}>Створіть свою {'\n'} команду</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Arrow />
                </View>

                <View style={styles.navigationContainer}>
                    <View style={styles.innerContainer}>
                        <NavBarItem text={"Home"} isActive={true} image={<HomeIcon />} />
                        <NavBarItem text={"Команда"} isActive={false} image={<People />} />

                        <View style={[styles.itemContainer, { position: "relative" }]}>
                            <View style={styles.star}>
                                <Star />
                                <Cup style={styles.cup} />
                            </View>
                        </View>
                        <NavBarItem text={"Події"} isActive={false} image={<Calendar />} />
                        <NavBarItem text={"Оплата"} isActive={false} image={<Payment />} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 83,
        backgroundColor: '#FFF',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 9
    },
    image: {
        width: 24,
        height: 24,
    },
    imageActive: {
        position: "absolute",
        width: 65,
        height: 65,
        bottom: 5
    },
    innerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    itemContainer: {
        width: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    activeText: {
        color: '#0B82BD',
        fontSize: 12,
        lineHeight: 14
    },
    unactiveText: {
        color: "#0D0D0C80"
    },
    arrowContainer: {
        position: "absolute",
        bottom: 85,
        left: 72
    },
    arrowView: {
        width: 118,
        height: 223,
        rotate: '-160.195deg'
    },
    star: {
        position: "absolute",
        top: -36,
        right: 10,
        width: 65,
        height: 65,
    },
    cup: {
        position: "absolute",
        top: 22,
        left: 19,
        zIndex: 5
    },
    mainContentView: {
        display: "flex",
        // backgroundColor: "gray",
        alignItems: "center"
    },
    iconSettings: {
        position: "absolute",
        right: 14
    },
    teacherImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 70,
        borderWidth: 4,
        borderColor: '#6B45F4',
        overflow: 'hidden',
        marginBottom: 8
    },
    logoImageSettings: {
        flex: 1,
    },
    subText: {
        color: "#FFF",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        marginBottom: 4

    },
    titleText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 20,
        letterSpacing: 0.25,
        marginBottom: 40
    },
    selector: {
        display: "flex",
        flexDirection: "row",
        width: "91.6%",
        height: 60,
        paddingLeft: 16,
        paddingRight: 8,
        paddingVertical: 8,
        backgroundColor: "rgba(240, 243, 250, 0.20)",
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "rgba(240, 243, 250, 0.20)",
        borderWidth: 1,
        marginBottom: 50
    },
    textInSelector: {
        color: "#FFF",
        fontSize: 20,
        letterSpacing: 0.25
    },
    viewInSelector: {
        width: 72,
        height: 44,
        backgroundColor: "#BFBEBE",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#EAEEF4",
        borderWidth: 1
    },
    titleTextInMain: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.25
    }
})