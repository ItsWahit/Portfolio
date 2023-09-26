import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wahit Fitriyanto </span>
            from <span className="purple"> Jawa Tengah, Indonesia.</span>
            <br /> I am Wahit Fitriyanto, an informatics engineering student at Boyolali University. I have great interest in web development, data structures, and algorithms. I am an enthusiastic learner and always want to learn and work in various technologies and domains. I love exploring new technologies and leveraging them to solve real problems. Apart from that, I also like learning new things that I have never learned before.
            <br />
            I actively contribute on Github, where I share my projects related to Nodejs, Python, React, TypeScript, PHP, MySQL, and others. I also have a personal blog where I write about technical topics that interest me. I also often participate in hackathons, meetups, and other technology events.
            <br />
            <br />
            I am a friendly and sociable person. I enjoy sharing knowledge and experiences with others. I also have a good sense of humor and like to joke. I am an optimist and always try to improve myself.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Talking and hangout with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Wahit Fitriyanto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
