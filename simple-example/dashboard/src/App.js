import React, { lazy, Suspense } from "react";

// nutkit is the name given inside nutkit module federation plugin
const NutkitButton = lazy(() => import("nutkit/Button"));

const App = () => (
  <div>
    <h1>Dashboard</h1>
    <Suspense fallback="Loading Button">
      <NutkitButton />
    </Suspense>
  </div>
);

export default App;
