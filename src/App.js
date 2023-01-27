import logo from './logo.svg';
import ResponsiveAppBar from  './comp1/Header';
import Navbar from './comp2/Navbar2'
import Box from "@mui/material/Box"

import Slidr from './mainComp/slidr'
import Mainprod  from "./main2Comp/mainprod"
import ProdM from "./main3Comp/prodM"
import 'bootstrap/dist/css/bootstrap.min.css';
import Rem from './remdiCmp/Rem'
import ProCarol from './MainPComp1/ProCarol'
import Deal from './DealComp/Deal'
import IndividualIntervalsExample from './BodyCarosal/Bcarosal'
import AnPSld from "./AnothMSldComp/AnPSld"
// import Silider1 from './mainComp/silider1'
// import ProdSlider from './compSl2.js/productSld'
import './App.css';

function App() {
  return (
   <div>
     <header>
      <Box>
     <ResponsiveAppBar  />
      </Box>

     
    <div>
      <Box >
    <Navbar/>
      </Box>
    </div>
    </header>

      <section>
        <Box>
      <Rem />
        </Box>
      </section>

      <main  >
        <Box>
       <Slidr />
        </Box>
      </main>

    <section>
      <Box >
      <Mainprod/>
      </Box>
    </section>
    {/* <br /> */}

    <section>
    <ProdM />
    </section>
      <br />

    <section>
      <Box>
        
    <ProCarol />
      </Box>
    </section>
        <br />
        <br />
        {/* <br /> */}
        {/* <br /> */}
      <section>
        <Box>
        <Deal />
        </Box>
      </section>
      <br />
      <section>
        <Box>
          <IndividualIntervalsExample />
        </Box>
      </section>
      
      <section>
      <Box>
      <AnPSld />
      </Box>
      </section>
   </div>
  );
}

export default App;
