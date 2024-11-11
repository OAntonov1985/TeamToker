
import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={24}
            >
                <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
            </Mask>
            <G mask="url(#a)">
                <Path
                    d="M11.1 19h1.75v-1.25c.833-.15 1.55-.475 2.15-.975.6-.5.9-1.242.9-2.225 0-.7-.2-1.342-.6-1.925-.4-.583-1.2-1.092-2.4-1.525-1-.333-1.692-.625-2.075-.875-.383-.25-.575-.592-.575-1.025 0-.433.154-.775.463-1.025.308-.25.754-.375 1.337-.375.533 0 .95.13 1.25.388.3.258.517.579.65.962l1.6-.65a3.349 3.349 0 00-1.013-1.525C14.046 6.542 13.5 6.3 12.9 6.25V5h-1.75v1.25c-.833.183-1.483.55-1.95 1.1-.467.55-.7 1.167-.7 1.85 0 .783.23 1.417.688 1.9.458.483 1.179.9 2.162 1.25 1.05.383 1.78.725 2.188 1.025.408.3.612.692.612 1.175 0 .55-.196.954-.588 1.212-.391.259-.862.388-1.412.388-.55 0-1.037-.17-1.463-.512-.425-.342-.737-.855-.937-1.538l-1.65.65c.233.8.596 1.446 1.088 1.938.491.491 1.129.829 1.912 1.012V19zm.9 3a9.738 9.738 0 01-3.9-.788 10.099 10.099 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 012 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 012.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0112 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 013.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0122 12a9.738 9.738 0 01-.788 3.9 10.098 10.098 0 01-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0112 22z"
                    fill="#7C7C7C"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent