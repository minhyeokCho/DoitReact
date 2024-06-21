import { useCallback, useEffect, useState } from "react";
import { useToggle } from "../hooks";
import * as D from '../data'
import { Button } from "../theme/daisyui";
import { Avatar } from "../components";


export default function FetchTest() {
	const [loading, toggleLoading] = useToggle()
	const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
	const [error, setError] = useState<Error | null>(null)

	const getRandomUser = useCallback(() => {
		toggleLoading()
		D.fetchRandomUser().then(setRandomUser).catch(setError).finally(toggleLoading)
	}, [toggleLoading])
	useEffect(getRandomUser, [getRandomUser])

	return(
		<>
			<Button onClick={getRandomUser}>
				get random user
			</Button>
			{loading && (
				<Button className="btn-circle loading">loading...</Button>
			)}
			{error && (
				<p> {error.message} </p>
			)}
			{randomUser && (
				<div>
					<Avatar src={randomUser.picture.large}/>
					<p>
						{randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
					</p>
					<p>
						{randomUser?.email}
					</p>
				</div>
			)}
		</>
	)
}