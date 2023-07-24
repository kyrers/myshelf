"use client";

import { Global } from "@emotion/react";
import { globalStyle } from "./styles";

/**
 * Instead of using Global directly on the layout.tsx file
 * wrap it in this component to avoid "use client" in the entire layout,
 * thus keeping the benefits of server components.
 */
export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}
