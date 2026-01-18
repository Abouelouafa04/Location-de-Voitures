// components/team/TeamGrid.jsx
import TeamCard from "./TeamCard";
import teamData from "../../data/teamData";
import "./team.css";

const TeamGrid = () => {
  return (
    <section className="team-section">
      <h2>Rencontrez Notre Équipe</h2>

      <div className="team-grid">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
