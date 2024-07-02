import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { useInterval } from "../hooks";

export default function ReduxClock() {
	const today = useSelector<AppState, Date>(state => state.today)
	const dispatch = useDispatch()

	useInterval(() => {
		dispatch({type:'setToday', today:new Date()})
	})

	return (
		<>
			<p>ReduxClock</p>
			<p> {today.toLocaleTimeString()} </p>
			<p> {today.toLocaleDateString()} </p>
		</>
	)
}

