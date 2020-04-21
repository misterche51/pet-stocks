import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions/modalActions';


const initialState = {
  isModalOpen: false,
}

export function modalReducer(state = initialState, {type}) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      }
      default:
        return state;
  }
}