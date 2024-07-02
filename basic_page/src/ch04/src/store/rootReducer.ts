import type {Action} from 'redux'
import { AppState } from "./Appstate"
import { Actions } from './actions'

const initialAppState = {
	today : new Date()
}

export const rootReducer = (state: AppState = initialAppState, action : Actions) => {
	switch(action.type) {
		case 'setToday' : {
			return {
				...state, today:action.today
			}
		}
	}
	return state;
}