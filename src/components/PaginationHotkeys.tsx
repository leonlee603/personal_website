"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaginationHotkeys({
  prevHref,
  nextHref,
  hasPrev,
  hasNext,
}: {
  prevHref: string;
  nextHref: string;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isTyping) return;

      if (e.key === "ArrowLeft" && hasPrev) {
        e.preventDefault();
        router.push(prevHref);
      }

      if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        router.push(nextHref);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, prevHref, nextHref, hasPrev, hasNext]);

  return null;
}