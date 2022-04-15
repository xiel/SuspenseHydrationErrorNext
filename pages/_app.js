import { Suspense } from "react";
import { SomethingB } from "../fakeLoadSuspension";

export default function App({ Component, pageProps, router }) {
  console.log('Rendering App with Page', Component.displayName || Component.name);

  return (
    <Suspense fallback={<progress />}>
      <Component {...pageProps} />
      <SomethingB />
    </Suspense>
  );
}
