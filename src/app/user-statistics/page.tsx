// src/app/user-statistics/page.tsx
'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';

function UserStatisticsPage() {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'http://localhost:8888/api/v1/public/daily-new-users-count?pastDays=90'
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        New User Registrations (Last 90 Days)
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="p-4 rounded shadow">
          <ResponsiveContainer width="100%" height={400} minWidth={300}>
            {/* <LineChart data={data}>
              <CartesianGrid stroke="#AAA" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart> */}

            <BarChart width={520} height={280} data={data}>
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={{ stroke: '#5dc1fb' }}
                tick={{ fill: '#999' }}
              />
              <Bar dataKey="time" fill="#8884d8" barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default UserStatisticsPage;
