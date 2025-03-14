"use client";

import { ReactNode } from "react";
import useGsapAnimations from "../hooks/gsapAnimations";

const GsapProvider = ({ children }: { children: ReactNode }) => {
  useGsapAnimations();
  return <>{children}</>;
};

export default GsapProvider;
