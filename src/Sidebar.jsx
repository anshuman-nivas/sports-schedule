import styles from "./Sidebar.module.css";
const sportIcons = {
    football: "fa-regular fa-futbol",
    basketball: "fa-basketball-ball",
    baseball: "fa-baseball-ball",
    tabletennis: "fa-table-tennis",
};

function Sidebar({ selectedSport, setSelectedSport, sportsData }) {

    const sports = Object.keys(sportsData);

    return (
        <div className={styles.sidebar}>
            {sports.map((sport) => (
                <div
                    key={sport}
                    className={`sport-icon ${selectedSport === sport ? 'selected' : ''}`}
                    onClick={() => setSelectedSport(sport)}
                >
                    <i className={`fas ${sportIcons[sport]}`} />
                </div>
            ))}
        </div>
    );
}

export default Sidebar;