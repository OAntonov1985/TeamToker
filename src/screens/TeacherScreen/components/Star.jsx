import * as React from "react"
import Svg, {
    Mask,
    Path,
    G,
    Defs,
    LinearGradient,
    Stop
} from "react-native-svg";
import { View, StyleSheet } from "react-native";

function SvgComponent() {
    return (
        <View >
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={90}
                height={90}
                viewBox="0 0 66 65"
                fill="none"
                style={styles.svg}
            >
                <Mask
                    id="a"
                    style={{
                        maskType: "alpha"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={66}
                    height={65}
                >
                    <Path fill="#FFF" d="M0.5 0H65.5V65H0.5z" />
                </Mask>
                <G mask="url(#a)" transform="translate(0, 0)">
                    <Path
                        d="M21.151 17.333l7.584-9.817c.541-.723 1.184-1.253 1.93-1.592A5.583 5.583 0 0133 5.417c.813 0 1.591.169 2.336.507.745.339 1.388.87 1.93 1.592l7.583 9.817 11.51 3.86c1.174.36 2.1 1.027 2.776 1.997a5.497 5.497 0 011.016 3.216c0 .542-.079 1.084-.237 1.625a5.04 5.04 0 01-.779 1.558L51.688 40.15l.27 11.104c.046 1.58-.474 2.912-1.557 3.995-1.083 1.083-2.347 1.625-3.792 1.625-.09 0-.586-.068-1.49-.203L33 53.286l-12.12 3.386a2.57 2.57 0 01-.744.17c-.271.022-.52.033-.745.033-1.445 0-2.709-.542-3.792-1.625-1.083-1.083-1.602-2.415-1.557-3.995l.27-11.172-7.38-10.494a5.041 5.041 0 01-.778-1.558 5.78 5.78 0 01-.237-1.625c0-1.128.327-2.178.982-3.148.654-.97 1.568-1.659 2.742-2.065l11.51-3.86z"
                        fill="url(#paint0_linear_172_219)"
                    />
                </G>
                <Defs>
                    <LinearGradient
                        id="paint0_linear_172_219"
                        x1={11.5796}
                        y1={12.5567}
                        x2={61.8069}
                        y2={53.9203}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#FFC851" />
                        <Stop offset={1} stopColor="#FA7F00" />
                    </LinearGradient>
                </Defs>
            </Svg>

        </View>
    )
}
const styles = StyleSheet.create({
    svg: {
        position: 'absolute',
        zIndex: 5,
        top: 0,
        left: 0,
    }
});

export default SvgComponent