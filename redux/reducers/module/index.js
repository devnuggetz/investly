import {SET_CURRENT_MODULE, SET_CURRENT_TOPIC} from '../../actionTypes/module';

const initState = {
  currentModule: {},
  currentTopic: {},
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
    case SET_CURRENT_TOPIC: {
      const {data} = action;
      return {
        ...state,
        currentTopic: data,
      };
    }
    default: {
      return {...state};
    }
  }
}
