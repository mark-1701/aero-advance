import { useEffect, useState } from 'react';
import Area from '../../../../components/graphics/Area';
import Bar from '../../../../components/graphics/Bar';
import HorizontalBar from '../../../../components/graphics/HorizontalBar';
import Line from '../../../../components/graphics/Line';
import Pie from '../../../../components/graphics/Pie';
import TicketStateCard from '../../../../components/graphics/TicketStateCard';
import { getData } from '../../../../data/api';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData('ticket/general-ticket-statistics');
      setData(response);
      console.log(response);
    };
    fetchData();
  }, []);

  const ticketStates = [
    {
      title: 'Nuevo',
      shortTitle: 'nv',
      key: 'new',
      backgroundColor: 'bg-blue-600',
      backgroundColorFill: '#3b82f6'
    },
    {
      title: 'Abierto',
      shortTitle: 'ab',
      key: 'open',
      backgroundColor: 'bg-purple-950',
      backgroundColorFill: '#3b0764'
    },
    {
      title: 'En Progreso',
      shortTitle: 'ep',
      key: 'in progress',
      backgroundColor: 'bg-orange-600',
      backgroundColorFill: '#a21caf'
    },
    {
      title: 'En Espera',
      shortTitle: 'ee',
      key: 'on hold',
      backgroundColor: 'bg-amber-400',
      backgroundColorFill: '#facc15'
    },
    {
      title: 'Aprovacion',
      shortTitle: 'ap',
      key: 'requires approval',
      backgroundColor: 'bg-yellow-200',
      backgroundColorFill: '#d9f99d'
    },
    {
      title: 'Resuelto',
      shortTitle: 'rs',
      key: 'resolved',
      backgroundColor: 'bg-green-600',
      backgroundColorFill: '#16a34a'
    },
    {
      title: 'Cerrado',
      shortTitle: 'cr',
      shortTitle: '',
      key: 'closed',
      backgroundColor: 'bg-orange-600',
      backgroundColorFill: '#ea580c'
    },
    {
      title: 'Reabierto',
      shortTitle: 'ra',
      key: 'reopened',
      backgroundColor: 'bg-red-800',
      backgroundColorFill: '#881337'
    },
    {
      title: 'Cancelado',
      shortTitle: 'ca',
      key: 'canceled',
      backgroundColor: 'bg-red-950',
      backgroundColorFill: '#450a0a'
    }
  ];


  const getTicketCount = key => {
    const ticket = data.find(item => item.name === key);
    return ticket ? ticket.ticket_count : 0;
  };

  const pieData = ticketStates.map(({ key, title }) => ({
    x: title,
    y: getTicketCount(key)
  }));

  const areaData = ticketStates.map(({ key, shortTitle }) => ({
    x: shortTitle,
    y: getTicketCount(key)
  }));

  const barData = ticketStates.map(({ key, shortTitle, backgroundColorFill }) => ({
    x: shortTitle,
    y: getTicketCount(key),
    fill: backgroundColorFill
  }));

  return (
    <>
      <h1 className="title">Dashboard</h1>
      <div className="grid grid-cols-8 gap-5 m-10">
        {ticketStates.map(({ title, key, backgroundColor }) => (
          <TicketStateCard
            key={key}
            backgroundColor={backgroundColor}
            title={title}
            number={getTicketCount(key)}
          />
        ))}
      </div>
      <div className="h-[1000px] grid grid-cols-2 grid-rows-2">
        <Pie data={pieData} />
        <Bar data={barData} />
        <Area data={areaData} />
        {/* <Line /> */}
        <HorizontalBar data={barData} />
      </div>
    </>
  );
};

export default Dashboard;
