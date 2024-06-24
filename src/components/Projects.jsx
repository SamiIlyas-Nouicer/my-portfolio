import Project from "./projects/Project"
import movieImage from "./../assets/movie_app.png"
import pfe from "./../assets/pfe.png"
import twitter from "./../assets/twitter.jpg"

export default function Projects() {
  const movieTechnologies = ["React", "Tailwind", "Firebase", "Git", "Next.js"]
  const movieDescription =
    "MovieWise is an innovative social media platform dedicated to film enthusiasts."
  const PfeTechnologies = [
    "React",
    "Material-UI",
    "Redux",
    "Git",
    "Express.js",
    "Node.js",
    "Mysql",
  ]
  const PfeDescription =
    "ElitCloud was a platform that allowed users to check and buy cloud services."
  const TwitterTechnologies = [
    "Python",
    "Jupyter Notebook",
    "TensorFlow",
    "Keras",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "scikit-learn",
  ]
  const TwitterDescription =
    "Sentiment analysis of tweets using machine and deep learning techniques."

  return (
    <div className="flex flex-col mt-10 p-5">
      <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 w-full  mx-auto">
        <Project
          technologies={movieTechnologies}
          image={movieImage}
          description={movieDescription}
        />
        <Project
          technologies={PfeTechnologies}
          image={pfe}
          description={PfeDescription}
        />
        <Project
          technologies={TwitterTechnologies}
          image={twitter}
          description={TwitterDescription}
        />
      </div>
    </div>
  )
}
