import {SET_CURRENT_MODULE, SET_CURRENT_TOPIC} from '../../actionTypes/module';

export const setCurrentModule = data => {
  console.log('Action Called');
  return {
    type: SET_CURRENT_MODULE,
    data,
  };
};

export const setCurrentTopic = data => {
  console.log('Action Called');
  return {
    type: SET_CURRENT_TOPIC,
    data,
  };
};
