import React from "react";
import MatchBanner from "../Matches/Banner";
import Nav from "../Matches/Navbar";
import Tabs from "../Matches/Tabs";
import CustomDropdown from "./customDropdown";
import Ldisc from "./LdDisc";
import LdTable from "./ldTable";
import Top3 from "./Top3";


const Leaderboard = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container">
           <MatchBanner />
           <Nav />
           <Tabs/>
          <div className="si-ld">
            <Ldisc/>
            <div className='si-viewbyMatch'>
             <label>View by Matches:</label>
              <CustomDropdown/>
             </div>
             <Top3/>
             <LdTable/>

            
          </div>
        </div>
      </section>
    </>  
  );
};

export default Leaderboard;
