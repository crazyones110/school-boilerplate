import { JsExample } from "pages/JsExample";
import { VscodeTip } from "pages/VscodeTip";

export const routes = [
  {
    component: VscodeTip,
    path: '/tip1',
    exact: true
  },
  {
    component: JsExample,
    path: '/tip2',
    exact: true
  }
]