import TeamMember from "./TeamMember";
import Johnsmith from "../assets/john_smith.jpg";
import Elinawilliams from "../assets/elina_williams.jpg";
import Johnsmith1 from "../assets/john_smith1.jpg";
// Sample data for the team members
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
    photo: Johnsmith,
  },
  {
    id: 2,
    name: "Elina Williams",
    role: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
    photo: Elinawilliams,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.",
    photo: Johnsmith1,
  },
];

const TeamGrid = () => {
  return (
    <div className="row">
      {teamMembers.map((member) => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={member.id}>
          <TeamMember
            name={member.name}
            role={member.role}
            description={member.description}
            photo={member.photo}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
