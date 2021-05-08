import {SET_CURRENT_MODULE} from '../../actionTypes/module';

export const setCurrentModule = data => {
  console.log('Action Called');
  return {
    type: SET_CURRENT_MODULE,
    data,
  };
};
