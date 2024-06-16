import { useCallback, useState } from "react";
import { Icon } from "../theme/daisyui";

export default function NumberState() {
	const [count, setCount] = useState<number>(0)

	const increment = useCallback(() => {
		setCount(count => count + 1)
	},[])

	const decrement = useCallback(() => {
		setCount(count => count - 1)
	}, [])

	return (
		<section>
			<Icon name="add" onClick={increment} />
			<p> {count} </p>
			<Icon name="minus" onClick={decrement} />
		</section>
	)
}