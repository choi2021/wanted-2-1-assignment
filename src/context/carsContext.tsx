import { createContext, Dispatch, useReducer } from 'react';
import { CarType } from '../types/CarsInterface';
import ActionType from '../types/ActionEnum';

type State = {
  isLoading: boolean;
  data: CarType[];
  error: string;
};

type Action =
  | { type: ActionType.SET_DATA; data: CarType[] }
  | { type: ActionType.SET_IS_LOADING; isLoading: boolean }
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
        isLoading: action.isLoading,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CarsStateContext.Provider value={state}>
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsStateContext.Provider>
  );
};
