import { Link, useParams } from "react-router-dom";
const About = () => {
  const { id } = useParams();
  // const dd= true;
  // if(dd){
  //   throw new Error("Error from about")
  // }
  return (
    <div>
      About Page {id ?? null}
      <Link to={"/"}>BACK </Link>
    </div>
  );
};

export default About;
