import { createContext, SetStateAction, useContext } from "react";

export type AppContextProps = {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

const defaultContext = {
  loading: false,
  setLoading: () => null,
};

const AppContext = createContext<AppContextProps>(defaultContext);

export const ContextProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);

export default AppContext;
