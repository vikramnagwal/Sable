import { useSession, } from "next-auth/react";

export function useThrowIfAuthenticated() {
    const { data: session, status } = useSession();

    if (status === "authenticated" && session) {
        throw new Error("You are already authenticated");
    }}
//  fix this