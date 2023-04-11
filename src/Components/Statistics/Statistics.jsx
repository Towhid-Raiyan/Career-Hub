import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer,Cell } from 'recharts';

const Statistics = () => {
    const marksArray = [
        { id: 1, name: 'Assignment 1', marks: 60 },
        { id: 2, name: 'Assignment 2', marks: 60 },
        { id: 3, name: 'Assignment 3', marks: 60 },
        { id: 4, name: 'Assignment 4', marks: 60 },
        { id: 5, name: 'Assignment 5', marks: 50 },
        { id: 6, name: 'Assignment 6', marks: 50 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#8884d8', '#ff4d4d'];
    return (
        <div>
            <h2 className='text-2xl font-extrabold bg-indigo-50 text-center pb-9 mb-7'>Assignment Marks in Graphical Representation</h2>
            <div className='flex justify-center '>
                <PieChart width={500} height={300}>
                    <Pie
                        dataKey="marks"
                        isAnimationActive={false}
                        data={marksArray}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {marksArray.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>

        </div>
    );
};

export default Statistics;