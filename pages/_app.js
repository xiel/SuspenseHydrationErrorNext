import { Suspense } from "react";
import { SomethingB } from "../fakeLoadSuspension";

export default function App({ Component, pageProps }) {
  console.log("Rendering Page", Component.displayName || Component.name);

  return (
    <Suspense fallback={<progress />}>
      <Component {...pageProps} />
      <SomethingB />
    </Suspense>
  );
}
