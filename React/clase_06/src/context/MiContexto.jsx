import { createContext, useReducer } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children}) => {

    const initialState = {
        data: "",
        loading: true,
        error: false
    };

    const contextReducer = (state, action) => {
        switch (action.type) {
            case 'isError':
                return {
                    ...state,
                    data: "",
                    loading: false,
                    error: true
                };
            case 'isLoading':
                return {
                    ...state,
                    data: "",
                    loading: true,
                    error: false
                };
            case 'dataRecibida':
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    error: false
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(contextReducer, initialState)

    return (
        <Contexto.Provider 
        // value={{color: 'crimson', titulo: 'Soy un titulo en el contexto'}}
            value={{state, dispatch}}
         >
            {children}
        </Contexto.Provider>
    )
}