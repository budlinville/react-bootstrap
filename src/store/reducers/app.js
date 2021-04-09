import { SET_THEME } from '../actions/app';
import { dark } from '../../themes';

const initialState = {
	theme: dark	// || light
}

const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: action.theme
			}
			default:
				return state;
	}
};

export default appReducer;