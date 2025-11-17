"use client";
import { ReactElement, useEffect, useState } from "react";

export default function HydrationWrapper(props: {children: ReactElement}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{props.children}</>;
}