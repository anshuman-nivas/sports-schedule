import styles from "./Matchdisplay.module.css";

function MatchDisplay({ selectedSport, sportsData }) {
    const matches = sportsData[selectedSport] || [];

    let imageUrl = "";

    switch (selectedSport) {
        case 'football':
            imageUrl = "https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-6/302685248_6378798492135944_5091437052586878179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HKPjQiAWux0AX-LvdQ-&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBSdAZP5mdLi0VGs1BFSyomatH05VuiqFXtGPBDTn-8wA&oe=64E5BCE8";
            break;
        case 'basketball':
            imageUrl = "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/331538630_1235600307385587_1063188948317711313_n.jpg?stp=dst-jpg_p640x640&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=goDKczjhQcYAX_ACoS5&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCnAQx2XFYZhaH7GPGZaHoFGG43y3hyOI2aQlPGRVLCtA&oe=64E52130";
            break;
        case 'baseball':
            imageUrl = "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/357700922_1227705804562693_4865767550074318555_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=593McCi_bs0AX_nTjCb&_nc_ht=scontent.fdel29-1.fna&oh=00_AfCa3SuAIAjWqiRAJ9RPFa3S9OIMExSWGcfY7Z6t1VocNA&oe=64E5F85D";
            break;
        case 'tabletennis':
            imageUrl = "https://scontent.fdel29-1.fna.fbcdn.net/v/t31.18172-8/10700402_746606125376788_1819444036503363793_o.jpg?stp=dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=8631f5&_nc_ohc=s0N4FExLm5cAX8UkPhH&_nc_ht=scontent.fdel29-1.fna&oh=00_AfB4IjPsmOYQKYMsoBmoCmnRZ01P5scN26w35BELMMIovg&oe=65088C1E";
            break;
        default:
            imageUrl = "https://scontent.fknu1-5.fna.fbcdn.net/v/t39.30808-6/302685248_6378798492135944_5091437052586878179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HKPjQiAWux0AX-LvdQ-&_nc_ht=scontent.fknu1-5.fna&oh=00_AfBSdAZP5mdLi0VGs1BFSyomatH05VuiqFXtGPBDTn-8wA&oe=64E5BCE8";
    }

    return (
        <div className={styles.fifa}>
            <div className={styles.imageContainer}>
                <img className={styles.games} src={imageUrl} alt="" />
            </div>
            <div className="match-display" >
                {matches.map((match, index) => (
                    <div key={index} className={styles.match}>
                        <div className={styles.teams}>
                            {match.teamA} vs. {match.teamB}
                        </div>
                        <div className={styles.location}>{match.location}</div>
                        <div className={styles.time}>{match.time}</div>
                    </div>
                ))}
            </div>
        </div>

    );
}


export default MatchDisplay;