import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
         REMOVE_MOVIE, ADD_MOVIE} from '../actions/index'

const initialState = {
  loading:false,
  mylist:[],
  recommendations:[],
  error:""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {...state, loading: true}
      case FETCH_DATA_SUCCESS:
        return { loading:false, 
                mylist:action.payload.mylist,
                recommendations: action.payload.recommendations,
                error:""}
      case FETCH_DATA_FAILURE:
        return { loading: false,
                  mylist: [],
                  recommendations: [],
                  error:action.payload}
      case REMOVE_MOVIE:
        return {...state,
          mylist: [...state.mylist.filter(el => el !== action.payload)],
          recommendations:[...state.recommendations.concat(action.payload)]
        }
      case ADD_MOVIE:
        return {...state,
          recommendations:[...state.recommendations.filter(el => el !== action.payload)],
          mylist: [...state.mylist.concat(action.payload)]
        }
      default:
        return state;
    }
  }

export default reducer;