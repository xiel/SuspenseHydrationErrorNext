import { useState } from "react";

export function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <aside>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </aside>
  );
}
