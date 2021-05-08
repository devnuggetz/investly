import {
  SET_CURRENT_EXAMPLE,
  SET_CURRENT_MODULE,
  SET_CURRENT_TOPIC,
} from '../../actionTypes/module';

export const setCurrentModule = data => {
  return {
    type: SET_CURRENT_MODULE,
    data,
  };
};
export const setCurrentExample = data => {
  console.log('Action called');
  return {
    type: SET_CURRENT_EXAMPLE,
    data,
  };
};
export const setCurrentTopic = data => {
  return {
    type: SET_CURRENT_TOPIC,
    data,
  };
};
