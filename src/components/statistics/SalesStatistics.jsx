import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  {
    "name": "Jan",
    "uv": 500,
    "pv": 150,
  },
  {
    "name": "Feb",
    "uv": 350,
    "pv": 250,
  },
  {
    "name": "Mar",
    "uv": 160,
    "pv": 270,
  },
  {
    "name": "Apr",
    "uv": 168,
    "pv": 290,
  },
  {
    "name": "May",
    "uv": 162,
    "pv": 300,
  },
  {
    "name": "Jun",
    "uv": 120,
    "pv": 180,
  },
  {
    "name": "Jul",
    "uv": 150,
    "pv": 430,
  },
  {
    "name": "Aug",
    "uv": 165,
    "pv": 240,
  },
  {
    "name": "Sep",
    "uv": 220,
    "pv": 300,
  },
  {
    "name": "Oct",
    "uv": 210,
    "pv": 270,
  },
  {
    "name": "Nov",
    "uv": 190,
    "pv": 245,
  },
  {
    "name": "Dec",
    "uv": 175,
    "pv": 290,
  },
];

const SalesStatistics = () => {

  const renderStatHeader = () => {
    return (
      <div className="stat-header">
        <h4 className="color-gray-700">Sales Overview</h4>
        <p className="color-gray-400"><span className="color-green-400">(+5) more</span> in 2021</p>
      </div>
    )
  }

  const renderSalesGraph = () => {
    return (
      <div className="sales-graph-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={730} height={250} data={salesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ fontSize: "0.7vw"}} />
            <YAxis tick={{ fontSize: "0.7vw"}} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#2D3748" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#4FD1C5" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="sales-statistics-container page-section bg-white">
      {renderStatHeader()}
      {renderSalesGraph()}
    </div>
  )
};

export default SalesStatistics;