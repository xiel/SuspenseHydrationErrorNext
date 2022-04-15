let didSuspensionFinish = false;
let suspensionPromise = null;

export function SomethingA() {
  fakeLoadSuspension("A");
  return <p>A</p>;
}

export function SomethingB() {
  fakeLoadSuspension("B");
  return <p>B</p>;
}

function fakeLoadSuspension(label = "") {
  console.log("Rendering", label);

  if (!didSuspensionFinish) {
    if (suspensionPromise) {
      console.log("Suspending by reusing promise in", label);
      throw suspensionPromise;
    } else {
      suspensionPromise = new Promise((resolve) => {
        setTimeout(() => {
          console.log("- - - -");
          console.log("Promise resolved in", label);
          console.log("- - - -");
          didSuspensionFinish = true;
          resolve();
        }, 200);
      });
      console.log("Suspending in", label);
      throw suspensionPromise;
    }
  }

  console.log("Rendering normally (after suspension)", label);
}
