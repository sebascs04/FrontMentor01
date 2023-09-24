import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ReactionIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F55"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
    />
  </Svg>
)
export default ReactionIcon
