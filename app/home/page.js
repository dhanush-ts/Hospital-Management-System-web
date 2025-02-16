"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const type = localStorage.getItem("user_type");
    if (!type) {
        const jwt = searchParams.get("jwt");
        const user_type = searchParams.get("user_type");

        if (jwt && user_type) {
        localStorage.setItem("jwt", JSON.stringify(jwt));
        localStorage.setItem("user_type", user_type);
        }
    }
  }, [searchParams]);

  return <div>P</div>;
}
