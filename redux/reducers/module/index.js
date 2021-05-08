import {
  SET_CURRENT_EXAMPLE,
  SET_CURRENT_MODULE,
  SET_CURRENT_TOPIC,
} from '../../actionTypes/module';

const initState = {
  currentModule: {},
  currentTopic: {},
  currentExample: {},
};

export default function moduleReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_MODULE: {
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
    case SET_CURRENT_EXAMPLE: {
      console.log('reducersx');
      const {data} = action;
      return {
        ...state,
        currentExample: data,
      };
    }

    default: {
      return {...state};
    }
  }
}
