import Project from "./projects/Project";
import movieImage from "./../assets/movie_app.png";
import pfe from "./../assets/pfe.png";
import twitter from "./../assets/twitter.jpg";
export default function Projects() {
  const movieTechnologies = ["React", "Tailwind", "Firebase", "Git", "Next.js"];
  const movieDescription =
    "MovieWise is an innovative social media platform dedicated to film enthusiasts.";
  const PfeTechnologies = [
    "React",
    "Material-UI",
    "Redux",
    "Git",
    "Express.js",
    "Node.js",
    "Mysql",
  ];
  const PfeDescription =
    "ElitCloud was a platform that allowed users to check and buy cloud services.";

  const TwitterTechnologies = [
    "Python",
    "JupiterNotebook",
    "Tensorflow",
    "Keras",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "scikit-learn",
  ];
  const TwitterDescription =
    "Sentiment analysis of tweets using machine and deeplearning learning techniques.";

  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
      <div className="flex flex-wrap justify-center gap-5 ">
        <Project
          technologies={movieTechnologies}
          image={movieImage}
          description={movieDescription}
        />
        <Project
          technologies={PfeTechnologies}
          image={pfe}
          description={PfeDescription}
        />{" "}
        <Project
          technologies={TwitterTechnologies}
          image={twitter}
          description={TwitterDescription}
        />
      </div>
    </div>
  );
}
