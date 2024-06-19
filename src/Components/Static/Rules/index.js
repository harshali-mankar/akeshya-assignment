import React from 'react'
import MatchBanner from '../../Matches/Banner'
import Nav from '../../Matches/Navbar'
import Tabs from '../../Matches/Tabs'

const Rules = () => {
  return (
    <>
      <section className="si-main__wrap">
        <div className="si-main__container">
            <MatchBanner/>
            <Nav/>
            <Tabs/>
            <div className='si-rules si-static'>
                <section className='si-rules-sec'>
                  <div className='si-static-hd'>
                    <span>Gameplay</span>
                  </div>
                  <div className='si-static-cont'>
                    <ul>
                    <li>A Pre-match predictor is a game where users make a pre-prediction on a question or multiple questions related to the outcome of a game, player performance, and/or events in a game.</li>
                      <li>Users’ correct predictions earn them points based on a unique and easy-to-understand earning points system. </li>
                      <li>Users will have to log in or register by leveraging the login/ registration of the KKR app to play the game.</li>
                      <li>A new match will be opened once the previous match is locked.</li>
                      <li>Users can view different questions with their respective options(outcomes).</li>
                      <li>Users can make a prediction for all questions or decide to skip any question.</li>
                      <li>There will be a total of 8 questions available for each match: 5 constant questions for all matches and 3 questions that differ for every match, randomly selected from the available set of questions.</li>
                      <li>All prediction choices will be resolved once the match ends</li>
                      <li>The Pre-match questions will require users to make a prediction before the match starts.</li>
                      <li>User must submit their predictions to enter the game before the match locks, unsubmitted answers wont be counted as a prediction.</li>
                      <li>The pre-match questions will be published before the scheduled start of the match and will be available till the match locks(start).</li>
                    </ul>
                  </div>
                </section>
                <section className='si-rules-sec'>
                  <div className='si-static-hd'>
                    <span>Rules</span>
                  </div>
                  <div className='si-static-cont'>
                    <ul>
                      <li>Users will have to log in to participate in the game.</li>
                      <li>Users can win 10 & 20 points for a correct prediction for Pre-match questions.</li>
                      <li>For 20 points questions points will varry as per predictions the closest prediction the users will get the max points and for exact outcome will get 20 points.</li>
                      <li>Users can change their prediction as often as they like until the match starts at which point the selections get locked. The last selected prediction before locking will be accepted.</li>
                      <li>In case of the match ends in a tie, the match winner will be decided based on the team winning the super over.</li>
                      <li>In case of a tie, the user who has submitted the predictions first will feature higher on the leaderboards.</li>
                      <li>Leaderboards will be based on the number of points a user has won.</li>
                      <li>There will be a Match & Overall leaderboard. This rank will be based on the total points won for the pre-match questions for the match.</li>
                      <li>Users who predicted every answer correctly at the earliest will be on top of the leaderboard.</li>
                      <li>If any match is called off for any reason, we will abandon the particular match and remove it from the listing.</li>
                      <li>Joker - Users can use the joker once per match for any question to double the points on a win.</li>
                      </ul>
                  </div>
                </section>
  
            </div>
        </div>
      </section>

    </>
    
  )
}

export default Rules