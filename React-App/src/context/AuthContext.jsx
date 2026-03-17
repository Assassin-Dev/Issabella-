import { createContext } from "react";
const AuthContest = createContext(null);
export default function AuthProvider() {
return <AuthContest.Provider></AuthContest.Provider>
}