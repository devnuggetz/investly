const initState = {
  questions: [],
  selectedOption: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    default: {
      return {...state};
    }
  }
}
