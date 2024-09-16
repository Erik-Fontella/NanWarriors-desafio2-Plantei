import React from "react";
import "./AboutInfo.css";

interface Person {
    name: string;
    bio: string;
    imgUrl: string;
    linkedin?: string;
    github?: string;
}

const people: Person[] = [
    {
        name: "Erick",
        bio: "Engenheiro de Software.",
        imgUrl: "../../../assets/aboutUs/erik.jpeg",  
        linkedin: "https://www.linkedin.com/in/erikricarde/",
        github: "https://github.com/herick",
    },
    {
        name: "Guilherme",
        bio: "Desenvolvedor Frontend",
        imgUrl: "../../../assets/aboutUs/guilherme.jpg",  
        linkedin: "https://www.linkedin.com/in/guilhermecaneda/",
        github: "https://github.com/GuilhermeCaneda",
    },
    {
        name: "João",
        bio: "Engenheiro.",
        imgUrl: "../../../assets/aboutUs/joao.jpg",  
        linkedin: "",
        github: "https://github.com/CoaoJarlos",
    },

    {
        name: "Mauricio",
        bio: "Desenvolvedor.",
        imgUrl: "../../../assets/aboutUs/mauricio.jpg",  
        linkedin: "https://www.linkedin.com/in/mauricio-beutler-a78287258/",
        github: "https://github.com/Beutler28",
    },
    {
        name: "Thais",
        bio: "Desenvolvedora.",
        imgUrl: "../../../assets/aboutUs/thais.jpeg",  
        linkedin: "https://www.linkedin.com/in/thais-dos-santos-9858701b2/",
        github: "https://github.com/thais",
    },
];

const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
    return (
        <div className="card">
            <img
                src={person.imgUrl || "https://via.placeholder.com/150"}
                alt={person.name}
                className="card-image"
            />
            <h2>{person.name}</h2>
            <p>{person.bio}</p>
            <div className="card-links">
                {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                )}
                {person.github && (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

const AboutInfo: React.FC = () => {
    return (
        <div className="container">
            {people.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    );
};

export default AboutInfo;
