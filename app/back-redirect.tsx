"use client";
import { useEffect } from "react";

export default function BackRedirect() {
  useEffect(() => {
    const target = process.env.NEXT_PUBLIC_BACK_URL || "https://meubackredirect";
    const query = window.location.search.replace("?", "");
    const redirect = `${target}${target.includes("?") ? "&" : "?"}${query}`;

    window.history.pushState({}, "", window.location.href);
    window.history.pushState({}, "", window.location.href);
    window.history.pushState({}, "", window.location.href);

    const handleBack = () => {
      window.setTimeout(() => {
        window.location.href = redirect;
      }, 1);
    };

    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  }, []);

  return null;
}
