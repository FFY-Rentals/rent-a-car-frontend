import { useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props:any) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
			{props.children}
		</AuthContext.Provider>			
	)
}