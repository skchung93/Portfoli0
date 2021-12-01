export default function Portfolio() {
  return (
    <article id="Portfolio" className="row pb-2">
            <h2 className="col-md-3">Portfolio</h2>
            <div className="col-md-3 card">
                <h4 className="card-header">
                    <a href="https://github.com/skchung93/Workday-Scheduler-HW5" target="_blank">Work Day Scheduler</a>
                </h4>
                <a href="https://skchung93.github.io/Workday-Scheduler-HW5/" target="_blank">
                    <img src="images/WorkdayTracker.png" className="card-body mb-2 max-vh-50" alt="Portfolio piece number 1"/>
                </a>
            </div>
            <div className="col-md-3 card">
                <h4 className="card-header">
                    <a href="https://github.com/skchung93/Exercise-Tracker" target="_blank">Exercise Tracker</a>
                </h4>
                <a href="https://fitness-tracker-skc.herokuapp.com/" target="_blank">
                    <img src="images/FitnessTracker.png" className="card-body mb-2 max-vh-50" alt="Portfolio piece number 2"/>
                </a>    
            </div>
            <div className="col-md-3 card">
                <h4 className="card-header">
                    <a href="https://github.com/xaker00/habitron" target="_blank">Habitron</a>
                </h4>
                <a href="https://habitron-ivs.herokuapp.com/" target="_blank">
                    <img src="images/Habitron.jpeg" className="card-body mb-2 max-vh-50" alt="Portfolio piece number 3"/>
                </a>    
            </div>
        </article>
  );
}


// className = "d-flex flex-column min-vh-100"