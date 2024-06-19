import React from "react";
import MatchBanner from "./Banner";
import Nav from "./Navbar";
import Tabs from "./Tabs";
import MatchesCard from "./Cards";
import SupportedStrip from "./Support";



const Matches = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container">
            <SupportedStrip />
            <MatchBanner />
            <Nav />
        
            <Tabs/>
            <MatchesCard /> 
        

          

     

          
          <div>

           </div>
        </div>
      </section>
    </>
  );
};

export default Matches;
