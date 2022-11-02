import { createContext, Dispatch, useReducer } from 'react';
import { Cars } from '../interfaces/CarsInterface';
import ActionType from '../interfaces/ActionEnum';

type State = {
  isLoading: boolean;
  data: Cars[];
  error: string;
};

type Action =
  | { type: ActionType.SET_DATA; data: Cars[] }
  | { type: ActionType.SET_IS_LOADING }
  | { type: ActionType.SET_ERROR; error: string };
type CarsDistpatch = Dispatch<Action>;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const CarsStateContext = createContext<State | null>(initialState);
export const CarsDispatchContext = createContext<CarsDistpatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: state.isLoading,
      };
    case ActionType.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('Unknown Action');
  }
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
