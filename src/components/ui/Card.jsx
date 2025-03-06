const Card = ({ title, description, icon, className }) => {
  return (
    <div className={className}>
      <div className="bg-mantle mx-auto w-fit rounded-full p-4">{icon}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="textarea-md text-subtext-1">{description}</p>
    </div>
  );
};

export default Card;
