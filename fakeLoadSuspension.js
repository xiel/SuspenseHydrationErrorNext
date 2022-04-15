import { useSyncExternalStore } from "react";
import { createStore } from "./store";

const store = createStore();

export function SomethingA() {
  useFakeLoadSuspension("A");
  return <p>A</p>;
}

export function SomethingB() {
  useFakeLoadSuspension("B");
  return <p>B</p>;
}

function useFakeLoadSuspension(label = "") {
  console.log("Rendering", label);

  const state = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot
  );

  if (!state.didSuspensionFinish) {
    if (state.suspensionPromise) {
      console.log("Suspending by reusing promise in", label);
      throw state.suspensionPromise;
    } else {
      const suspensionPromise = new Promise((resolve) => {
        setTimeout(() => {
          console.log("Promise resolved in", label);

          store.updateState({
            didSuspensionFinish: true,
            suspensionPromise: null,
          });

          resolve();
        }, 1000);
      });

      store.updateState({
        suspensionPromise,
      });

      console.log("Suspending in", label);
      throw suspensionPromise;
    }
  }

  console.log("Rendering normally (after suspension)", label);
}
