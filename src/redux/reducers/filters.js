import { INIT_STATE } from '../../constant';
import { filterSearch, getType } from '../actions';

const filtersReducer = (state = INIT_STATE.filters, action) => {
    switch (action.type) {
        case getType(filterSearch):
            return {
                ...state,
                search: action.payload,
            };

        default:
            return state;
    }
};

export default filtersReducer;
