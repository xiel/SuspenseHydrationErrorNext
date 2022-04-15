import React, { useState } from "react";
import { SomethingA } from "../fakeLoadSuspension";
import { CounterButton } from "../CounterButton";

export default function IndexPage() {
  return (
    <>
      <h1>Suspense Demo</h1>
      <p>React v18.0.0, Next v12.1.5</p>
      <figure>
        <blockquote>
          <p>
            "Hydration failed because the initial UI does not match what was
            rendered on the server."
          </p>
        </blockquote>
        <figcaption>
          <cite>
            node_modules/react-dom/cjs/react-dom.development.js (14344:0)
          </cite>
        </figcaption>
      </figure>
      <h4>This headline hydrates fine.</h4>
      <SomethingA />
      <h3>
        💥 This element after the suspending Component triggers an error (only
        in development).
      </h3>
      <hr />
      <CounterButton />
      <hr />
    </>
  );
}
