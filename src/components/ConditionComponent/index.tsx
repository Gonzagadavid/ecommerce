import { ReactNode } from "react";

export default function ConditionComponent({ condition, children }: { condition: boolean, children: ReactNode }) {
  if (!condition) return null;

  return (
    <>
      {children}
    </>
  );
}