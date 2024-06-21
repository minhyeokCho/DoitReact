import { useCallback, useRef } from "react";
import { Button } from "../theme/daisyui";

export default function ClickTest() {
	const inputRef = useRef<HTMLInputElement>(null)
	const onClick = useCallback(() => inputRef.current?.click(), []);
	return(
		<>
			<Button onClick={onClick}>
				Click
			</Button>
			<input type="file" ref={inputRef}  />
		</>
	)
}