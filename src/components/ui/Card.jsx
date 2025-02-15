const Card = ({ title, description, icon, className }) => {
  return (
    <div className={className}>
      <div className="w-fit mx-auto rounded-full p-4 bg-mantle">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="textarea-md text-subtext-1">{description}</p>
    </div>
  );
};

export default Card;
