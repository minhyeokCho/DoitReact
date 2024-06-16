import { useCallback, useMemo } from "react"
import * as D from '../data'
import { Button } from "../theme/daisyui"
import { Title } from "../components"

export default function Callback() {
	// const onClick = useCallback(() => alert('button clicked'), [])
	const onClick = useCallback((name:string) => () => alert(`${name} clicked`), [])

	const buttons = useMemo (
		() =>
			D.makeArray(3).map(D.randomName).map((name,index) =>(
				<Button 
					key={index}
					onClick={onClick(name)}
					className="btn-primary btn-wide btn-xs"
				>
					{name}
				</Button>
			)), [onClick]
	)

	return (
		<div className="mt-4">
			<Title>callback </Title>
			<div>
				{buttons}
			</div>
		</div>
	)
}