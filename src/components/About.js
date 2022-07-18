import React from "react";
import Links from "./Links";

function About(props) {

  //NOTE IF / ELSE STATEMENT: not preferrable in react
  //ALTERNATIVE: Ternary statement: {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
  
  //save condition (display p tags if bio is  passed to #about) to "withBio"
  const withBio = (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );

  //save condition (do not display p tags if bio is not passed to #about) to "noBio"
  const noBio = (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
  //save condition (if bio is passed to #about) to checkBio
  const checkBio = props.bio
  if(checkBio){
    return withBio
  }else{
    return noBio
  }
}

export default About;
