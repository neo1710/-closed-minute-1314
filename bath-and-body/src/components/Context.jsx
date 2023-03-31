import { createContext } from "react";

export const ContextApi=createContext();

export default function ContextProvider(props){



    return (
<ContextApi.Provider>
    {props.Chikdren}
</ContextApi.Provider>
    )

}