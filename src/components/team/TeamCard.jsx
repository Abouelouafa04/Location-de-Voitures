// components/team/TeamCard.jsx
import "./team.css";

const TeamCard = ({ member }) => {
  return (
    <article className="team-card">
      <div className="team-avatar">
        <img src={member.image} alt={member.name} loading="lazy" />
      </div>

      <h3>{member.name}</h3>
      <span>{member.role}</span>
    </article>
  );
};

export default TeamCard;
