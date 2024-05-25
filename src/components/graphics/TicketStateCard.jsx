const TicketStateCard = ({ backgroundColor, title, number }) => {
  return (
    <div className={`flex flex-col justify-center items-center g-2 h-32 rounded-xl ${backgroundColor}`}>
      <h2 className="text-lg font-bold text-white text-center">{title}</h2>
      <p className="text-6xl fontbold text-white">{number}</p>
    </div>
  );
};

export default TicketStateCard;
