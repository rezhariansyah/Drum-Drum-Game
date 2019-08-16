const initialState = {
  userList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [...state.userList, action.payload.data]
      };
    case `LOGIN_USER_PENDING`:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case `LOGIN_USER_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case `LOGIN_USER_FULFILLED`:
      console.log("actioon", action);

      // const token = action.payload.data.result.token;
      // const id_user = res.data.id_user;
      // const fullname = res.data.fullname;
      // const status = res.data.status;
      // const role = res.data.role;
      // const ktp = res.data.ktp;
      // console.log('bbababa',fullname)
      // AsyncStorage.setItem("token", token);
      // AsyncStorage.setItem("id_user", id_user);
      // AsyncStorage.setItem("fullname", fullname);
      // AsyncStorage.setItem("ktp", ktp);
      // AsyncStorage.setItem("status", status);
      // AsyncStorage.setItem("role", role);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userLogin: [state.userLogin, action.payload]
      };
    //highest score
    case "HIGHEST_SCORE_LOADING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "HIGHEST_SCORE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "HIGHEST_SCORE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [...state.userList, action.payload.data]
      };
    default:
      return state;
  }
};

export default user;
