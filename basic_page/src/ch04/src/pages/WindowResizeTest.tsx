import { useWindowResize } from "../hooks";

export default function WindowResizeTest() {
	const [width, height] = useWindowResize()

	return(
		<>
			<p>
				width: {width}, height : {height}
			</p>
		</>
	)
}