import { ChangeEvent, useCallback, useMemo, useState } from "react";
import * as D from '../data'

export default function RadioInputTest() {
	const job = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []);

	const [selectedJobTitle, setSelectedJobTitle] = useState<string>(job[0])

	const onChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
		setSelectedJobTitle(notUsed => e.target.value)
	}, [])

	const radioInput = useMemo(() => job.map((value, index) => (
		<label key={index}>
			<input
				type="radio"
				name='jobs'
				defaultValue={value}
				checked={value ===selectedJobTitle}
				onChange={onChange}
			/>
			<span>{value}</span>
		</label>
	)), [job, selectedJobTitle, onChange])

	return (
		<>
			<p>selected job : {selectedJobTitle} </p>
			<div>
				{radioInput}
			</div>
		</>
	)
}