import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useUrl = create(
    persist(
        (set) => ({
            url: "",
            setUrl: (value) => set((state) => ({url: value}))
        }), {
            name: "url from api",
            createJSONStorage: (() => sessionStorage)
        }
))