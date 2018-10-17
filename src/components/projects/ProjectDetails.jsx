import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-5">
        <div className="card-content">
          <span className="card-title">
            <b>Project Title - {id}</b>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            saepe rerum, doloribus laborum cupiditate, itaque nemo nulla,
            eveniet assumenda at qui inventore accusamus. Dolor aspernatur
            quisquam numquam fugit, eius natus!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net ninja</div>
          <div>"2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
