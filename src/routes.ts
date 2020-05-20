import { JsExample } from "pages/JsExample";
import { VscodeTip } from "pages/VscodeTip";
import { useState } from "react";

interface Route {
  component: React.ComponentType,
  path: string,
  exact: boolean
}
export function useRoutes() {
  return useState<Route[]>([
    {
      component: VscodeTip,
      path: '/tip1',
      exact: true
    },
    {
      component: JsExample,
      path: '/tip2',
      exact: true
    }])[0]
}
