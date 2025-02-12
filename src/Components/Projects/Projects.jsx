import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/Topicexplorer.jpeg"; 
import bannerImg2 from "../../assets/amazonclone.jpeg";
import bannerImg3 from "../../assets/decvoting.jpeg"; 
import bannerImg4 from "../../assets/Paraformatter.jpeg"; 

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Topic Explorer Website"
          main="Topic Explorer is a tool for exploring and learning various topics with the help of AI. It allows users to ask questions and get short notes on various topics using OpenAI's GPT model."
          img={bannerImg1} 
          githubLink="https://github.com/DivanshiChauhan/Topic-Explorer" 
        />
        <ProjectCard
          title="Amazon Clone"
          main="A basic clone of Amazon built using html and css."
          img={bannerImg2} 
          githubLink="https://github.com/DivanshiChauhan/AmazonClone" 
        />
        <ProjectCard
          title="Decentralized Voting Smart Contract"
          main="Decentralized Voting is a smart contract that enables transparent, secure, and tamper-proof voting on the blockchain"
          img={bannerImg3} 
          githubLink="https://github.com/DivanshiChauhan/Voting-Smart-Contract"
        />
        <ProjectCard
          title="Paragraph Formatter"
          main="Paragraph Formatter is a simple code-based tool that formats and cleans up paragraphs by adjusting spacing, indentation, and alignment for improved readability and consistency"
          img={bannerImg4} 
          githubLink="https://github.com/DivanshiChauhan/paragraph-formatter" 
        />
      </div>
    </div>
  );
};

export default Projects;
