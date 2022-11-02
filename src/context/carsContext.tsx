import { createContext, useContext, Dispatch, useReducer } from 'react';
import { Cars } from '../interfaces/CarsInterface';

const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_DATA = 'SET_DATA';
const SET_ERROR = 'SET_ERROR';

type State = {
  isLoading: boolean;
  data: Cars[];
  error: string;
};

type Action = {
  type: string;
  data: Cars[];
  error: string;
  isLoading: boolean;
};

type CarsDistpatch = Dispatch<Action>;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

const CarsStateContext = createContext<State | null>(initialState);
const CarsDispatchContext = createContext<CarsDistpatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('Unknown Action');
  }
};

export const useCarsState = () => {
  const state = useContext(CarsStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useCarsDispatch = () => {
  const dispatch = useContext(CarsDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const CarsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, dispatch] = useReducer(reducer, initialState);
  return (
    <CarsStateContext.Provider value={cars}>
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsStateContext.Provider>
  );
};
