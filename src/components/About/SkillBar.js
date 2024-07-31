import React from "react";

function SkillBar(props) {
  return (
    <section style={{paddingBottom: "4vh"}}>
      <h1 className="skill-name">
        {props.title}
      </h1>
      <div className="skill-bar-background">
        <div className="skill-bar-fill" style={{width: props.percentage}}></div>
      </div>
    </section>
  );
}

export default SkillBar;