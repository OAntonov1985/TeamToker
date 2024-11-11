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

export default function TeacherScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/imageInSelectorScreen/bgColor.png")}
                resizeMode="cover"
                style={styles.container}>
                <SafeAreaView style={{ height: 52, marginBottom: 26 }} />

                <View>
                    <Icon />
                    {/* <SvgIcon width={24} height={24} /> */}
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
    test: {
        position: "absolute",
        bottom: 18,
        with: 35,
        height: 35
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
        // backgroundColor: "red"
    },
    cup: {
        position: "absolute",
        top: 22,
        left: 19,
        zIndex: 5
    }
})