import { useState } from "react";

export default function InputTest() {
	const [value, setValue] = useState<string>('')
	const [checked, setChecked] = useState<boolean>(false)

	return(
		<section>
			<input type="text" value={value} />
			<input type="checkbox" checked={checked} />
		</section>
	)
}