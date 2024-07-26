import React from "react";

function SkillBar(props) {
  return (
    <section style={{paddingBottom: "20px"}}>
      <h1 className="skill-name-text">
        {props.title}
      </h1>
      <div className="bar-background">
        <div className="bar-fill" style={{width: props.percentage}}></div>
      </div>
    </section>
  );
}

export default SkillBar;