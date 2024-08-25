import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";
import { parseCookies } from "nookies";

export function withAuth(WrappedComponent: any) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const { "sb-access-token": token } = parseCookies();

        if (!token) {
          if (router.pathname !== "/admin") {
            router.push("/admin");
          }
        } else {
          const {
            data: { user },
            error,
          } = await supabase.auth.getUser(token);

          if (error || !user) {
            if (router.pathname !== "/admin") {
              router.push("/admin");
            }
          }
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
}
