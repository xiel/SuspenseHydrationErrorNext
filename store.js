export function createStore() {
  const subscribers = new Set();

  let state = Object.freeze({
    didSuspensionFinish: false,
    suspensionPromise: null,
  });

  function subscribe(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  }

  function getSnapshot() {
    return state;
  }

  function updateState(newState) {
    state = Object.freeze({ ...state, ...newState });
    subscribers.forEach((callback) => callback());
  }

  return {
    subscribe,
    getSnapshot,
    updateState,
  };
}
