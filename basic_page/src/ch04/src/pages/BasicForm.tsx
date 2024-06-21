import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Input } from "../theme/daisyui";

type FormType = {
	name : string
	email : string
}

export default function BasicForm() {
	// const [name, setName] = useState<string>('')
	// const [email, setEmail] = useState<string>('')

	const [form, setForm] = useState<FormType>({name: '', email: ''});

	const onSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			//const formData = new FormData()
			// formData.append('name', name)
			// formData.append('email',email)
			// alert(JSON.stringify(Object.fromEntries(formData), null, 2))
			alert(JSON.stringify(form, null, 2))

		},
	[form])

	const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		// setName(notUsed => e.target.value)
		setForm(state => ({...state, name:e.target.value}))
	}, [])

	const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		// setEmail(notUsed => e.target.value)
		setForm(state => ({...state, email:e.target.value}))
	}, [])

	return(
		<>
			<form onSubmit={onSubmit}>
				<p>userName</p>
				<Input value={form.name} onChange={onChangeName} type="text" id="name"  />
				<p>email</p>
				<Input value={form.email} onChange={onChangeEmail} type="email" id="email"  />

				<input type="submit" value='SUBMIT' />
				<input type="button" defaultValue="CANCEL" />
			</form>
		</>
	)
}