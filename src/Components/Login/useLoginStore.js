import create from "zustand"
import { persist } from "zustand/middleware"

export const useLoginStore = create(persist((set) => ({
        loggedIn: false,
        username: "",
        access_token: "",
        userInfo: "",
        setLoggedIn: (loggedIn, username, access_token, userInfo) => set((state) => ({
            ...state, loggedIn, username, access_token, userInfo
        })),
        setLogOut: () => set(() => ({ loggedIn: false, userInfo: "", username: "", access_token: "" }))

    
}), { name: "token", getStorage: () => localStorage }))