import { useState } from 'react';
import Sidebar from './Sidebar';
import MatchDisplay from './Matchdisplay';
import styles from "./App.module.css";


const sportsData = {
  football: [
    {
      teamA:
        "Manchester United", teamB: "Liverpool", location: 'Wembley Stadium, London, England', time: 'Sunday, August 20, 2023   7:00 PM'
    },
    {
      teamA: 'Brentford', teamB: 'Arsenal', location: 'Atatürk Olimpiyat, Istanbul, Turkey', time: 'Wednesday, August 23, 2023   9:00 PM'
    },
    { teamA: 'Luton Town', teamB: 'Chelsea', location: 'BayArena, Leverkusen, Germany', time: 'Friday, August 25, 2023     7:00 PM' },
  ],
  basketball: [
    { teamA: 'Minnesota', teamB: 'Denver', location: 'City, Arena: Manila (PHI), Philippine Arena', time: 'Wednesday, October 25, 2023    5:00 AM' },
    { teamA: 'Los Angeles', teamB: 'Golden State', location: 'City, Arena: Okinawa (JPN), Okinawa Arena', time: 'Saturday, October 28, 2023    4:30 AM' },
    { teamA: 'Cleveland', teamB: 'Orlando', location: 'City, Arena: Manila (PHI), Mall of Asia Arena', time: 'Monday, October 30, 2023    	6:30 AM' },
  ],
  baseball: [
    {
      teamA: 'Astros', teamB: 'Mariners', location: 'Chase Field, Phoenix, Arizona', time: 'Sunday Aug 20  1:05 PM'
    },
    { teamA: 'Yankees', teamB: 'Red Sox', location: 'Taichung Intercontinental Baseball Stadium, Taichung', time: 'Monday Aug 21   6:40 PM' },
    { teamA: 'Twins', teamB: 'Blue Jays', location: 'Tokyo Dome, Tokyo', time: 'Tuesday Aug 22   4:07 PM' },
  ],
  tabletennis: [
    {
      teamA: 'Ma Long (China)', teamB: 'Dimitrij Ovtcharov (Germany)', location: 'Paris Expo Porte de Versailles', time: 'Wednesday, August 23, 2023   5:40 PM'
    },
    { teamA: 'Jun Mizutani (Japan)', teamB: 'Lin Yun-ju (Chinese Taipei)', location: 'Tokyo Metropolitan Gymnasium', time: 'Monday, October 30, 2023    	6:30 AM' },
    { teamA: 'Doo Hoi Kem (Hong Kong)', teamB: 'Xu Xin (China)', location: 'Los Angeles Convention Center', time: 'Friday, August 25, 2023     7:00 PM' },
  ]
};

function App() {
  const [selectedSport, setSelectedSport] = useState('football');

  return (
    <div className={styles.container}>
      <Sidebar selectedSport={selectedSport} setSelectedSport={setSelectedSport} sportsData={sportsData} />
      <MatchDisplay selectedSport={selectedSport} sportsData={sportsData} />
    </div>
  );
}

export default App;
