import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthDataContext = {
    user: User | null;
    signInUrl: string;
}

type AuthResp = {
    token: string,
    user: {
        avatar_url: string,
        id: string,
        name: string,
        login: string,
    },

}


export const AuthContext = createContext({} as AuthDataContext);

type AuthProvider = {
    children: ReactNode,
}

export function AuthProvider(props: AuthProvider) {

    const [user, setUser] = useState<User | null>(null)


    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=25aca71b9b716823d1c9`;

    async function signIn(code: string) {

        const resp = await api.post<AuthResp>('authenticate', {
            code: code,
        })

        const { token, user } = resp.data;

        localStorage.setItem('@authUser:token', token);

        setUser(user)

    }

    useEffect(() => {
        const url = window.location.href;
        const hasGitHub = url.includes('?code=');
        if (hasGitHub) {
            const [urlWithoutCode, githubCode] = url.split('?code=');

            window.history.pushState({}, '', urlWithoutCode);

            signIn(githubCode);
        }
    }, [])


    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}