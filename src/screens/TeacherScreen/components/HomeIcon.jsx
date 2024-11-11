import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M22.183 11.836L12.53 2.189a.748.748 0 00-1.06 0l-9.654 9.647a1.501 1.501 0 001.06 2.562h1.017v6.883c0 .415.335.75.75.75H10.5v-5.25h2.625v5.25h6.232a.75.75 0 00.75-.75v-6.883h1.017a1.502 1.502 0 001.06-2.562z"
                fill="url(#paint0_linear_172_209)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_172_209"
                    x1={3.50049}
                    y1={1.96936}
                    x2={23.1185}
                    y2={21.1485}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#0AE6F8" />
                    <Stop offset={1} stopColor="#0C1E82" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SvgComponent