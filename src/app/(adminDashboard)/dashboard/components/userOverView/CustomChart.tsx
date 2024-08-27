"use client"
import { Tooltip } from "antd";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, XAxis, YAxis } from "recharts";


const data = [
  {
    name: 'Jan',
    uv: 42,
    pv: 64,
    amt: 240,
  },
  {
    name: 'Feb',
    uv: 52,
    pv: 82,
  },
  {
    name: 'Mar',
    uv: 34,
    pv: 64,
  },
  {
    name: 'Apr',
    uv: 42,
    pv: 62,
  },
  {
    name: 'May',
    uv: 61,
    pv: 72,
  },
 
  {
    name: 'June',
    uv: 54,
    pv: 64,
  },
  {
    name: 'July',
    uv: 72,
    pv: 22,
  },
  {
    name: 'Augst',
    uv: 52,
    pv: 82,
  },
  {
    name: 'Sep',
    uv: 32,
    pv: 52,
  },
  {
    name: 'Oct',
    uv: 52,
    pv: 82,
  },
  {
    name: 'Nov',
    uv: 52,
    pv: 12,
  },
  {
    name: 'Dec',
    uv: 52,
    pv: 82,
  },
];

// @ts-ignore
const getRoundedPath = (x, y, width, height, radius) => {
  return `M${x},${y + height} 
          L${x},${y + radius} 
          Q${x},${y} ${x + radius},${y} 
          L${x + width - radius},${y} 
          Q${x + width},${y} ${x + width},${y + radius} 
          L${x + width},${y + height} Z`;
};

//@ts-ignore
const TopRoundedBar = (props) => {
  let { fill, x, y, width, height,marginLeft: left } = props;
  const radius = 18; // You can adjust the corner radius here
   width = 30;
   console.log(props);
   
  return <path d={getRoundedPath(x, y, width, height, radius)} stroke="none" fill={fill} />;
};


const CustomChart = () => {
    
    return (
      <div style={{
        width: "100%",
        height: "100%"
      }} >
     <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#4DB5AD"  shape={<TopRoundedBar/>} activeBar={<Rectangle fill="#4DB9AF" stroke="blue" />} />
          <Bar dataKey="uv" fill="#2B4E63" shape={<TopRoundedBar/>} activeBar={<Rectangle fill="black" stroke="purple" />} />
        </BarChart>
     </ResponsiveContainer>
     
      </div>
    );
};

export default CustomChart;