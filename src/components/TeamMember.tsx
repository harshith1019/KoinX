import React from "react";

interface Props {
  name: string;
  role: string;
  description: string;
  photo: string;
}

const TeamMember = ({ name, role, description, photo }: Props) => {
  return (
    <div className="card text-center border-0 shadow-sm p-3">
      {/* Photo Section */}
      <div className="mb-3">
        <img
          src={photo}
          alt={name}
          className="img-fluid rounded-circle"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>
      {/* Text Section */}
      <h5 className="mb-1">{name}</h5>
      <p className="text-muted mb-2">{role}</p>
      <p className="text-muted small">{description}</p>
    </div>
  );
};

export default TeamMember;
