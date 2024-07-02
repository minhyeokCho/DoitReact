import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { useInterval } from "../hooks";
import { useReducer } from "react";
import { SetTodayAction } from "../store/actions";

export default function useReducerClock() {
	const [{today}, dispatch] = useReducer(
		(state : AppState, action: SetTodayAction) => {
			switch (action.type){
				case 'setToday' :
				return {...state, today : new Date()}
			}
			return state
		},
		{
			today:new Date()
		}
	)

	useInterval(() => {
		dispatch ({type: 'setToday', today : new Date()})
	})

	return (
		<>
			<p>UseReduxClock</p>
			<p> {today.toLocaleTimeString()} </p>
			<p> {today.toLocaleDateString()} </p>
		</>
	)
}

