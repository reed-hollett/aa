"use client";

import { Agentation } from "agentation";
import { useState, useEffect } from "react";

export default function AgentationToolbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <Agentation />;
}
