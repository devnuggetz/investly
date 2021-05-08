import {SET_CURRENT_MODULE} from '../../actionTypes/module';

const initState = {
  currentModule: {},
};

export default function moduleReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_MODULE: {
      console.log('Reducer Called');
      const {data} = action;
      return {
        ...state,
        currentModule: data,
      };
    }
    default: {
      return {...state};
    }
  }
}
