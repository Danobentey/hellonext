const Membership = ({ title, perks }: { title: string; perks: [] }) => {
  return (
    <div>
      <img src="" alt="" />
      <h2 className="text-2xl">{title}</h2>
      <ul>
        {perks.map((perk, idx) => (
          <li key={idx}>{perk}</li>
        ))}
      </ul>
      <button>Learn More</button>
    </div>
  );
};

export default Membership;
