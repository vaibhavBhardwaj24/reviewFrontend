// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";

// const OnePhone = () => {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams(); // Get the search parameters
//   const name = searchParams.get("name"); // Extract the 'name' parameter
//   const [data, setData] = useState(null); // State to hold the response data
//   const [info, setInfo] = useState(null);
//   const [loadingData, setLoadData] = useState(true);
//   const [loadingInfo, setLoadInfo] = useState(true);
//   console.log({ id, name });
//   // const { sentiment_analysis, top_word_count_frequency } = data;

//   // Function to generate font sizes based on frequency
//   const getFontSize = (frequency) => {
//     return `${Math.min(Math.max(frequency, 10), 50)}px`; // Adjust limits as needed
//   };
//   const chartData = [
//     { name: "Positive", value: data.sentiment_analysis.positive },
//     { name: "Negative", value: data.sentiment_analysis.negative },
//     // { name: "Compound", value: Math.abs(data.sentiment_analysis.compound) }, // Using absolute value for visualization
//   ];

//   const COLORS = ["#82ca9d", "#ff6347", "#ffce54"];
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const infoRes = await axios.get("http://localhost:3000/test", {
//           id: id,
//         });
//         setInfo(infoRes.data);
//         setLoadInfo(false);
//         const response = await axios.post("http://127.0.0.1:5000/dev", {
//           model: name,
//         });
//         console.log(response);
//         setData(response.data);
//         setLoadData(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     if (name) {
//       fetchData(); // Call the fetchData function if name is available
//     }
//   }, [name]); // Runs when 'name' changes

//   return (
//     <div className="h-full w-full text-white bg-black pt-[3.75rem]">
//       {loadingInfo ? (
//         <>loading</>
//       ) : (
//         <div className="flex  w-full gap-4">
//           <div className="p-10 bg-white h-[600px] flex justify-center items-center w-1/3 overflow-hidden rounded-br-md">
//             <img
//               src={info.receivedData.img}
//               alt={info.receivedData.name}
//               className="h-full w-full"
//             />
//           </div>
//           <div className="flex flex-col p-4 w-2/3">
//             <h1 className="text-5xl font-bold underline pb-1">
//               {info.receivedData.name}
//             </h1>
//             <div className="p-4">
//               <h1 className=" text-4xl font-semibold  text-gray-400">
//                 Quick Specs
//               </h1>
//               <div className="grid grid-cols-4 p-4 w-full gap-5">
//                 {info.receivedData.quickSpec.map((spec, ind) => (
//                   <div
//                     key={ind}
//                     className="hover:-translate-y-2 duration-300 cursor-default w-full h-24 bg-gray-400/60 flex flex-col items-center rounded-lg justify-around"
//                   >
//                     <h2 className="text-3xl">{spec.value}</h2>
//                     <h3>{spec.name}</h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="">
//               <h1 className=" text-4xl font-semibold  text-gray-400">
//                 Sentimental Analysis
//               </h1>
//               {loadingData && (
//                 <div>
//                   <div className="w-full h-full flex flex-col items-center justify-center p-10 bg-gray-800 text-white">
//                     <h1 className="text-3xl mb-6">Sentiment Analysis</h1>
//                     <div className="w-full h-96">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={chartData}
//                             dataKey="value"
//                             nameKey="name"
//                             outerRadius={80}
//                             fill="#8884d8"
//                             label
//                           >
//                             {chartData.map((entry, index) => (
//                               <Cell
//                                 key={`cell-${index}`}
//                                 fill={COLORS[index % COLORS.length]}
//                               />
//                             ))}
//                           </Pie>
//                           <Tooltip />
//                           <Legend />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                     <h3 className="text-2xl mb-4">Top Words:</h3>
//                     <div className="flex flex-wrap">
//                       {Object.entries(data.top_word_count_frequency).map(
//                         ([word, frequency]) => (
//                           <div
//                             key={word}
//                             className="relative group mr-4 mb-2"
//                             style={{ fontSize: getFontSize(frequency) }}
//                           >
//                             {/* The word */}
//                             <span>{word}</span>

//                             {/* Tooltip */}
//                             <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                               Frequency: {frequency}
//                             </div>
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>}{" "} */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OnePhone;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Import chart components

const OnePhone = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams(); // Get the search parameters
  const name = searchParams.get("name"); // Extract the 'name' parameter
  const [data, setData] = useState(null); // State to hold the response data
  const [info, setInfo] = useState(null);
  const [loadingData, setLoadData] = useState(true);
  const [loadingInfo, setLoadInfo] = useState(true);

  // Function to generate font sizes based on frequency
  const getFontSize = (frequency) => {
    return `${Math.min(Math.max(frequency, 10), 50)}px`; // Adjust limits as needed
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoRes = await axios.get("http://localhost:3000/test", {
          params: { id }, // Pass id as a query parameter
        });
        setInfo(infoRes.data);
        setLoadInfo(false);

        const response = await axios.post("http://127.0.0.1:5000/dev", {
          model: name,
        });
        setData(response.data);
        setLoadData(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (name) {
      fetchData(); // Call the fetchData function if name is available
    }
  }, [name]); // Runs when 'name' changes

  // Check if data is loaded before rendering charts
  const chartData = data
    ? [
        { name: "Positive", value: data.sentiment_analysis.positive },
        { name: "Negative", value: data.sentiment_analysis.negative },
      ]
    : [];

  const COLORS = ["#82ca9d", "#ff6347"];

  return (
    <div className="h-full w-full text-white bg-black pt-[3.75rem]">
      {loadingInfo ? (
        <>Loading...</>
      ) : (
        <div className="flex w-full gap-4">
          <div className="p-10 bg-white h-[600px] flex justify-center items-center w-1/3 overflow-hidden rounded-br-md">
            <img
              src={info.receivedData.img}
              alt={info.receivedData.name}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col p-4 w-2/3">
            <h1 className="text-5xl font-bold underline pb-1">
              {info.receivedData.name}
            </h1>
            <div className="p-4">
              <h1 className="text-4xl font-semibold text-gray-400">
                Quick Specs
              </h1>
              <div className="grid grid-cols-4 p-4 w-full gap-5">
                {info.receivedData.quickSpec.map((spec, ind) => (
                  <div
                    key={ind}
                    className="hover:-translate-y-2 duration-300 cursor-default w-full h-24 bg-gray-400/60 flex flex-col items-center rounded-lg justify-around"
                  >
                    <h2 className="text-3xl">{spec.value}</h2>
                    <h3>{spec.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-gray-400">
                Sentiment Analysis
              </h1>
              {loadingData ? (
                <div className="w-full h-full flex items-center justify-center p-10 bg -gray-800 text-white">
                  <h1 className="text-3xl mb-6">
                    Loading Sentiment Analysis...
                  </h1>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-full flex h-96 mb-4">
                    <ResponsiveContainer height="100%" width="50%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          dataKey="value"
                          nameKey="name"
                          outerRadius={100}
                          fill="#8884d8"
                          label
                        >
                          {chartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="text-white w-1/2 text-4xl flex gap-2 flex-col">
                      <div className="flex w-2/3 justify-between">
                        Compound-{" "}
                        <p
                          className={`p-2 rounded-xl  ${
                            data.sentiment_analysis.compound < 0
                              ? "bg-red-600/50 border-2 border-red-700"
                              : ""
                          }`}
                        >
                          {(data.sentiment_analysis.compound * 100).toFixed(3)}
                        </p>
                      </div>
                      <div className="flex w-2/3 justify-between">
                        Positive-{" "}
                        <p className="p-2 bg-green-600/50 border-2 rounded-xl border-green-700">
                          {(data.sentiment_analysis.positive * 100).toFixed(3)}
                        </p>
                      </div>
                      <div className="flex w-2/3 justify-between">
                        Negative-{" "}
                        <p className="p-2 bg-red-600/50 border-2 rounded-xl border-red-700">
                          {(data.sentiment_analysis.negative * 100).toFixed(3)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl mb-4">Top Words:</h3>
                  <div className="flex flex-wrap">
                    {data &&
                      Object.entries(data.top_word_count_frequency).map(
                        ([word, frequency]) => (
                          <div
                            key={word}
                            className="relative group mr-4 mb-2 cursor-default hover:-translate-y-2 duration-200"
                            style={{ fontSize: getFontSize(frequency) }}
                          >
                            {/* The word */}
                            <span>{word}</span>

                            {/* Tooltip */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                              Frequency: {frequency}
                            </div>
                          </div>
                        )
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnePhone;

// {
//   /* <div>
// <h1>One Phone</h1>
// <p>Device ID: {id}</p>
// <p>Device Name: {name}</p>
// Display the fetched data
// </div> */
// }

// const SentimentAnalysis = ({ data }) => {

//   return (
//     <div className="p-8 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-4">Sentiment Analysis</h2>

//       <div className="mb-6">
//         <h3 className="text-2xl">Overall Sentiment:</h3>
//         <div className="flex items-center">
//           <div className="w-full bg-gray-700 rounded-full h-4">
//             <div
//               className="bg-red-500 h-full rounded-full"
//               style={{ width: `${sentiment_analysis.negative * 100}%` }}
//             />
//           </div>
//           <span className="ml-2">
//             {(sentiment_analysis.negative * 100).toFixed(2)}%
//           </span>
//         </div>
//         <div className="flex items-center my-2">
//           <div className="w-full bg-gray-700 rounded-full h-4">
//             <div
//               className="bg-gray-500 h-full rounded-full"
//               style={{ width: `${sentiment_analysis.neutral * 100}%` }}
//             />
//           </div>
//           <span className="ml-2">
//             {(sentiment_analysis.neutral * 100).toFixed(2)}%
//           </span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-full bg-gray-700 rounded-full h-4">
//             <div
//               className="bg-green-500 h-full rounded-full"
//               style={{ width: `${sentiment_analysis.positive * 100}%` }}
//             />
//           </div>
//           <span className="ml-2">
//             {(sentiment_analysis.positive * 100).toFixed(2)}%
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// };

// Example usage
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// function SentimentAnalysis({ data }) {
//   // Colors for each pie slice

//   return <></>;
// }
