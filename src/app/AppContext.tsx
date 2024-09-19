"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface AppProviderInterface {
     children: ReactNode
}

export interface AppContextInterface {
     data: {
          supportOn: boolean
     }
     setData: Dispatch<SetStateAction<{supportOn: boolean}>>
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppProvider: React.FC<AppProviderInterface> = ({children}) => {
     const [data,setData] = useState({
          supportOn: false
     })
     return(
          <AppContext.Provider value={{data,setData}}>
               {children}
          </AppContext.Provider>
     )
}

export default AppContext