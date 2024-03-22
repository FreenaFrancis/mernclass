

import Life from "./componnets/Life";
import ProfileComponent from "./componnets/Profile";
import Demo from "./componnets/cls";
import Conditions from "./componnets/condition/Conditions";
import Logical from "./componnets/condition/Logical";
import Conditional from "./componnets/condition/condition";
import StaticList from "./componnets/list/Staticlist";
import Tablefilter from "./componnets/list/filter";
import { ItemList } from "./componnets/list/list";
import { TableList } from "./componnets/list/table";
import CounterComponent from "./componnets/state/CounterCLass";
import Functional from "./componnets/state/State";


function App() {
  return (
    <div className="App">
    {/* <Demo/> 
    <ProfileComponent/>
    <CounterComponent/>
    <Functional/>
    <Life/>
    //
    <ItemList />
    <TableList/> */}
    <Tablefilter/>
    <StaticList/>
    {/* <Conditional/> */}
{/* <Logical/>
    <Conditions/>
    <Conditional/>
    {/* <ItemList /> */}
    </div>
  );
}

export default App;
