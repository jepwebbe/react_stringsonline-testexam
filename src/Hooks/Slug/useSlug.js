import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useSlug = create(
    persist(
        (set) => ({
            slug: [],
            setSlug: (value) => set((state) => ({slug: value}))
        }), {
            name: "slug name",
            createJSONStorage: (() => sessionStorage)
        }
))