import React from 'react'
import MatchBanner from '../../Matches/Banner'
import Nav from '../../Matches/Navbar'
import Tabs from '../../Matches/Tabs'
import config from "../../../Common/config";


const Prizes = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container">
            <MatchBanner/>
            <Nav/>
            <Tabs/>
            <div className='si-prizes si-static'>
                <section className='si-prizes-sec si-1stMd'>
                  <div className='si-prizes-lft'>
                    <label class="si-medal si-1st"><span>1</span></label>
                    <div className='si-prizes-hd'><span>1st Prize</span></div>
                    <div className='si-prizes-cont'>
                      <ul>
                        <li>Signed Mini Bat</li> 
                        <li>KKR Jersey</li> 
                        <li>Premium Match tickets</li>
                      </ul>
                    </div>
                  </div>
                  <div className='si-prizes-rgt '>
                    <img src={`${config.IMG_BASE}/prizes-1.png`} alt="KKR flag" />
                  </div>
                </section>
                <section className='si-prizes-sec si-2ndMd'>
                  <div className='si-prizes-lft'>
                    <label class="si-medal si-2nd"><span>2</span></label>
                    <div className='si-prizes-hd'><span>2nd Prize</span></div>
                    <div className='si-prizes-cont'>
                      <ul>
                        <li>Signed Mini Bat</li>  
                      </ul>
                    </div>
                  </div>
                  <div className='si-prizes-rgt'>
                    <img src={`${config.IMG_BASE}/prizes-2.png`} alt="KKR flag" />
                  </div>
                </section>
                <section className='si-prizes-sec si-3rdMd'>
                  <div className='si-prizes-lft'>
                      <label class="si-medal si-3rd"><span>3</span></label>
                      <div className='si-prizes-hd'><span>3rd Prize</span></div>
                      <div className='si-prizes-cont'>
                        <ul> 
                          <li>Signed Ball</li>
                        </ul>
                        </div>
                    </div>
                    <div className='si-prizes-rgt'>
                      <img src={`${config.IMG_BASE}/prizes-3.png`} alt="KKR flag" />
                    </div>
                </section>
                <div className='si-prizesTnC'>
                  <strong>Terms and Conditions:</strong>
                  <ul>
                    <li>Mini bat and Ball will be digital signed</li>
                    <li>Delivery of merchandise will be done Before 30 days after the end of IPL 2023. Some goodies will get delivered before time as well</li>
                    <li>The images are for visual representation only and product may not be exactly as per the pictures</li>
                    <li>All match tickets will be available for home matches only.</li>
                  </ul>
                



                </div>


            </div>
         </div>
      </section>
      

    </>
    
  )
}

export default Prizes