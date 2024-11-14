// import { Pressable, Text, StyleSheet, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';

// export default function ButtonReg({ buttonText, textStyle, nextComponent, style }) {
//     const navigation = useNavigation();

//     return (
//         <Pressable
//             onPress={() => console.log(777)}
//             style={({ pressed }) => [
//                 styles.container,
//                 pressed && styles.pressed,
//                 style,
//             ]}
//         >
//             <LinearGradient
//                 colors={['#BF61E1', '#9045F0', '#5E27FF']}
//                 start={{ x: 0, y: 1 }}
//                 end={{ x: 0.92, y: 0 }}
//                 style={[
//                     styles.gradient,
//                     styles.gradientPressed,
//                 ]}
//             >
//                 <Text style={[styles.textStyleInComponents, textStyle]}>
//                     {buttonText}
//                 </Text>
//             </LinearGradient>
//         </Pressable>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: "91%",
//         height: 56,
//         borderRadius: 18,
//         justifyContent: "center",
//         alignSelf: "center",
//         marginHorizontal: 16,
//     },
//     textStyleInComponents: {
//         textAlign: "center",
//         fontSize: 16,
//         color: "#fff"
//     },
//     pressed: {
//         opacity: 0.7,
//     },
//     gradient: {
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 10,
//     },
//     gradientPressed: {
//         transform: [{ scale: 0.97 }], // Робить фон трохи меншою при натисканні
//     },
// })


// {/* <Pressable onPress={typeof nextComponent === "string"
//     ? () => navigation.navigate(nextComponent)
//     : typeof nextComponent === "function"
//         ? nextComponent
//         : null}
//     // style={styles.container}
//     style={({ pressed }) => [styles.container, pressed && styles.pressed]}
// > */}




import React, { useRef } from 'react';
import { Animated, Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function GradientButton({ buttonText, textStyle, nextComponent, style }) {
    const animatedValue = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation();

    const handlePressIn = () => {
        Animated.timing(animatedValue, {
            toValue: 0.6,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onPress={typeof nextComponent === "string"
                ? () => navigation.navigate(nextComponent)
                : typeof nextComponent === "function"
                    ? nextComponent
                    : null}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={styles.container}
        >
            <Animated.View style={[styles.gradientContainer, { opacity: animatedValue }]}>
                <LinearGradient
                    colors={['#BF61E1', '#9045F0', '#5E27FF']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0.92, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={[styles.textStyleInComponents, textStyle]}>
                        {buttonText}
                    </Text>
                </LinearGradient>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "91%",
        height: 56,
        borderRadius: 18,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 16,
    },
    gradientContainer: {
        borderRadius: 10,
    },
    gradient: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textStyleInComponents: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
