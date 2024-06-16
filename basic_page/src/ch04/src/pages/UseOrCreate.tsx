import { useMemo } from "react";
import * as D from '../data'

export default function CreateOrUseTest(){
	const headTexts = useMemo<string[]>(() =>[
		'NO', 'NAME', 'Job title', 'email'
	], [])

	const users =useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

	const head = useMemo(
		() => headTexts.map(text => <th key={text} >{text}</th> ),[headTexts]
	)

	const body = useMemo(
		() =>
			users.map((user, index) => (
				<tr key={user.uuid}>
					<th>{index + 1}</th>
				</tr>
			)),
		[users]
	)

	return(<>
		<p>{head}</p>
		<div>
			{body}
		</div>
	
	</>
	)
}