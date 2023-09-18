import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Project.css";
import thinkfulBnbImage from '../../images/thinkfulbnb-image.png'; 
import kanyeSaysImage from '../../images/kanye-says-image.png'
import criticScale from '../../images/criticscale.png'
import localLib from '../../images/locallib.png'
import guau from '../../images/guau.png'
import jorgenehme from '../../images/jorgenehme.png'

function Project() {
  // Sample data for the cards
  const cardData = [
    {
      title: "Kanye Says",
      text: "I've created a fun project – a Random Quote Generator. It shares quotes from my favorite artists and TV characters. It's a small, enjoyable way to discover inspiring and entertaining quotes with just a click.",
      listItems: [
        "React",
        "CSS",
        "HTML",
      ],
      github: "https://github.com/Salame1996/kanye-says",
      image: kanyeSaysImage, // Add image file name
    },
    {
      title: "ThinkfulBNB",
      text: `I created a web application during my coding bootcamp that allows users to make hotel reservations conveniently. This fun project was developed using HTML and CSS, providing an engaging and user-friendly interface for booking hotel accommodations `,
      listItems: [
        "HTML",
        "CSS",
      ],
      github: "https://github.com/Salame1996/thinkfulbnb-",
      image: thinkfulBnbImage, // Add image file name
    },
    {
      title: "CriticScale",
      text: "CritiScale simplifies music exploration. Connect to Spotify, discover artists and albums, and engage with a community of fellow music enthusiasts. Share reviews, rate albums, and enjoy a personalized music journey.",
      listItems: [
        "React",
        "Spotify API",
        "HTML, CSS",
      ],
      github: "https://github.com/Salame1996/music-critic",
      image: criticScale,
    },
    {
      title: "Local Library",
      text: "I tackled the Thinkful Bootcamp challenge with a JavaScript logic implementation. My task was to create a program to find books by author or name and count the ones that are reserved. This project showcased my problem-solving skills and JavaScript proficiency.",
      listItems: [
        "JavaScript",
      ],
      github: "https://github.com/Salame1996/local-lib-project",
      image: localLib,
    },
    {
      title: "Guau",
      text: "I developed a sleek and intuitive e-commerce website for a client specializing in dog-related merchandise. This platform allows customers to effortlessly purchase products using credit and debit cards. The project highlights my expertise in creating user-friendly interfaces and secure online transaction systems.",
      listItems: [
        "WordPress",
        "WooCommerce",
        "PHP",
      ],
      github: "https://guau.com.ec/",
      image: guau,
    },
    {
      title: "Mixed by Jorge Nehme",
      text: "I designed and developed a web app for a client to showcase and sell their music production services. This platform ensures a swift and secure environment for clients to upload files and access Google Drive integration. The project emphasizes my proficiency in creating online marketplaces with seamless file handling capabilities.",
      listItems: [
        "WordPress",
        "WooCommerce",
        "PHP",
      ],
      github: "https://mixedbyjorgenehme.com/",
      image: jorgenehme,
    },
    {
      title: "Restaurant Reservation System",
      text: "I designed and developed a web app for hassle-free restaurant reservations. Customers can easily book online or via phone, while restaurant staff efficiently manage reservations through the app. This project showcases my skills in creating seamless user experiences and effective backend systems.",
      listItems: [
        "React",
        "Express",
        "Node",
      ],
      github: "https://github.com/Salame1996/finalCapstone",
      image: jorgenehme,
    },
    {
      title: "Random Quote Generator",
      text: "I developed a web app that displays random quotes from my favorite artists, all presented with an appealing user interface.",
      listItems: [
        "JavaScript",
        "React",
        "CSS",
      ],
      github: "https://github.com/Salame1996/Random-Quote-Generator/tree/master",
      image: jorgenehme,
    },
    {
      title: "Restaurant Reservation System",
      text: "I designed and developed a web app for hassle-free restaurant reservations. Customers can easily book online or via phone, while restaurant staff efficiently manage reservations through the app. This project showcases my skills in creating seamless user experiences and effective backend systems.",
      listItems: [
        "React",
        "Express",
        "Node",
      ],
      github: "https://github.com/Salame1996/finalCapstone",
      image: jorgenehme,
    },
  
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} className="card">
          <Card.Img
            variant="top"
            src={card.image}
          />
          <Card.Body className="custom-card-body">
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {card.listItems.map((item, itemIndex) => (
              <ListGroup.Item key={itemIndex}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body className="github-body"> {/* Added a class to target the GitHub link */}
            {card.github && (
              <Card.Link
                className="card-link"
                href={card.github}
                target="_blank"
              >
                Github Repo
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Project;

