import { useState } from "react";
import "./App.css";
import GetDerivedStateFromProps from "./reactLifecycle/mounting/GetDerivedStateFromProps";

import Practice from "./components/Practice";
import PureComponents from "./components/PureComponents ";
import ReferentialEqualityUseMemo from "./components/ReferentialEqualityUseMemo";
import StaticTypeChecking from "./components/StaticTypeChecking";
import Constructor from "./reactLifecycle/mounting/Constructor";
import ComponentDidMount from "./reactLifecycle/mounting/ComponentDidMount";
import GetDerivedStateFromProp from "./reactLifecycle/updating/GetDerivedStateFromProps";
import ShouldComponentUpdate from "./reactLifecycle/updating/ShouldComponentUpdate";
import Render from "./reactLifecycle/updating/Render";
import GetSnapshotBeforeUpdate from "./reactLifecycle/updating/GetSnapshotBeforepdate";
import ComponentDidUpdate from "./reactLifecycle/updating/ComponentDidUpdate";
import ComponentWillUnmount from "./reactLifecycle/unmounting/ComponentWillUnmount";
import Router from "./router/Router";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      {/* <StaticTypeChecking /> */}
      {/* <Practice /> */}
      {/* <PureComponents /> */}
      {/* <ReferentialEqualityUseMemo /> */}
      {/* <Constructor /> */}
      {/* <GetDerivedStateFromProps favcol="yellow" /> */}
      {/* <ComponentDidMount /> */}
      {/* <GetDerivedStateFromProp favcol="yellow" /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <Render /> */}
      {/* <GetSnapshotBeforeUpdate /> */}
      {/* <ComponentDidUpdate /> */}
      {/* <ComponentWillUnmount /> */}
      {/* <Router /> */}
      <h1>hell to redux</h1>
      <Profile />
    </div>
  );
}
export default App;
