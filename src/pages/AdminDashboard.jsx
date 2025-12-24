// import React, { useState } from "react";
// import windSensorData from "../data/windSensorData";
// import {
//   Chart as ChartJS,
//   LineElement,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   PointElement,
// } from "chart.js";
// import { Line, Bar, Pie } from "react-chartjs-2";

// /* REGISTER */
// ChartJS.register(
//   LineElement,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   PointElement
// );

// /* SAFE */
// const safe = (v) => (typeof v === "number" ? v : 0);
// const COLORS = ["#22c55e", "#38bdf8", "#facc15", "#f87171", "#a855f7"];

// const WINDOW_SIZE = 20;

// const AdminDashboard = () => {
//   /* ---------- NORMALIZE ---------- */
//   const data = windSensorData.map((d) => ({
//     time: d["Date/Time"],
//     wind: safe(d["Wind Speed (m/s)"]),
//     power: safe(d["LV ActivePower (kW)"]),
//     energy: safe(d.Monthly_Energy_Usage_kWh),
//     temp: safe(d.Ambient_Temperature_C),
//     humidity: safe(d.Humidity_Percent),
//     rpm: safe(d.Generator_Speed_RPM),
//     windingTemp: safe(d.Generator_Winding_Temperature_C),
//   }));

//   /* ---------- STATE ---------- */
//   const [startIndex, setStartIndex] = useState(
//     Math.max(0, data.length - WINDOW_SIZE)
//   );

//   const visibleData = data.slice(startIndex, startIndex + WINDOW_SIZE);
//   const latest = visibleData[visibleData.length - 1] || {};

//   /* ---------- HANDLERS ---------- */
//   const nextData = () => {
//     if (startIndex + WINDOW_SIZE < data.length) {
//       setStartIndex(startIndex + WINDOW_SIZE);
//     }
//   };

//   const prevData = () => {
//     if (startIndex - WINDOW_SIZE >= 0) {
//       setStartIndex(startIndex - WINDOW_SIZE);
//     }
//   };

//   /* ---------- CHARTS ---------- */
//   const powerChart = {
//     labels: visibleData.map((d) => d.time),
//     datasets: [
//       {
//         label: "Active Power (kW)",
//         data: visibleData.map((d) => d.power),
//         borderColor: "#22c55e",
//         backgroundColor: "rgba(34,197,94,0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const windChart = {
//     labels: visibleData.map((d) => d.time),
//     datasets: [
//       {
//         label: "Wind Speed (m/s)",
//         data: visibleData.map((d) => d.wind),
//         borderColor: "#38bdf8",
//         backgroundColor: "rgba(56,189,248,0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const generatorChart = {
//     labels: visibleData.slice(-10).map((d) => d.time),
//     datasets: [
//       {
//         label: "Generator RPM",
//         data: visibleData.slice(-10).map((d) => d.rpm),
//         backgroundColor: "#a855f7",
//       },
//       {
//         label: "Winding Temp (°C)",
//         data: visibleData.slice(-10).map((d) => d.windingTemp),
//         backgroundColor: "#f87171",
//       },
//     ],
//   };

//   const energyPie = {
//     labels: visibleData.slice(-5).map((d) => d.time),
//     datasets: [
//       {
//         label: "Energy Usage",
//         data: visibleData.slice(-5).map((d) => d.energy),
//         backgroundColor: COLORS,
//       },
//     ],
//   };

//   return (
//     <div className="energy-admin-dashboard">
//       <h2 className="dashboard-heading">Wind Energy Management Dashboard</h2>

//       {/* CONTROLS */}
//       <div className="dashboard-controls">
//         <button onClick={prevData} disabled={startIndex === 0}>
//           ⏮ Previous
//         </button>
//         <button
//           onClick={nextData}
//           disabled={startIndex + WINDOW_SIZE >= data.length}
//         >
//           ⏭ Next
//         </button>
//       </div>

//       {/* KPI */}
//       <div className="kpi-grid">
//         <Kpi title="Wind Speed" value={`${latest.wind} m/s`} />
//         <Kpi title="Active Power" value={`${latest.power} kW`} />
//         <Kpi title="Generator RPM" value={latest.rpm} />
//         <Kpi title="Winding Temp" value={`${latest.windingTemp} °C`} />
//       </div>

//       {/* CHARTS */}
//       <div className="grid-2">
//         <Panel title="Power Output Trend" info="Electricity generated over time">
//           <Line data={powerChart} />
//         </Panel>

//         <Panel title="Wind Speed Trend" info="Wind speed variations">
//           <Line data={windChart} />
//         </Panel>
//       </div>

//       <div className="grid-3">
//         <Panel title="Generator Health" info="RPM & winding temperature">
//           <Bar data={generatorChart} />
//         </Panel>

//         <Panel title="Energy Distribution" info="Recent energy usage">
//           <Pie data={energyPie} />
//         </Panel>

//         <Panel title="Environment Status" info="Turbine surroundings">
//           <p>🌡 {latest.temp} °C</p>
//           <p>💧 {latest.humidity}%</p>
//         </Panel>
//       </div>
//     </div>
//   );
// };

// /* ---------- COMPONENTS ---------- */

// const Kpi = ({ title, value }) => (
//   <div className="kpi-tile">
//     <p>{title}</p>
//     <h3>{value}</h3>
//   </div>
// );

// const Panel = ({ title, info, children }) => (
//   <div className="dashboard-panel">
//     <div className="panel-header">
//       <h4>{title}</h4>
//       <div className="info-wrapper">
//         <span className="info-icon">ℹ</span>
//         <div className="info-tooltip">{info}</div>
//       </div>
//     </div>
//     {children}
//   </div>
// );

// export default AdminDashboard;
// import React, { useState, useMemo, useEffect } from "react";
// import windSensorData from "../data/windSensorData";
// import {
//   Chart as ChartJS,
//   LineElement,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   PointElement,
// } from "chart.js";
// import { Line, Bar, Pie } from "react-chartjs-2";


// /* ---------------- REGISTER ---------------- */
// ChartJS.register(
//   LineElement,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   PointElement
// );

// /* ---------------- HELPERS ---------------- */
// const safe = (v) => (typeof v === "number" && !isNaN(v) ? v : 0);

// const parseDateSafe = (value) => {
//   const d = new Date(value);
//   return isNaN(d.getTime()) ? null : d;
// };

// const COLORS = ["#22c55e", "#38bdf8", "#facc15", "#f87171", "#a855f7"];

// const AdminDashboard = () => {
//   /* ---------- NORMALIZE DATA (100% SAFE) ---------- */
//   const data = useMemo(() => {
//     return windSensorData
//       .map((row) => {
//         const dateObj = parseDateSafe(row["Date/Time"]);
//         if (!dateObj) return null; // skip invalid rows

//         return {
//           date: dateObj.toISOString().slice(0, 10), // YYYY-MM-DD
//           month: dateObj.toISOString().slice(0, 7), // YYYY-MM
//           time: row["Date/Time"],
//           wind: safe(row["Wind Speed (m/s)"]),
//           power: safe(row["LV ActivePower (kW)"]),
//           energy: safe(row.Monthly_Energy_Usage_kWh),
//           temp: safe(row.Ambient_Temperature_C),
//           humidity: safe(row.Humidity_Percent),
//           rpm: safe(row.Generator_Speed_RPM),
//           windingTemp: safe(row.Generator_Winding_Temperature_C),
//         };
//       })
//       .filter(Boolean);
//   }, []);

//   /* ---------- UNIQUE VALUES ---------- */
//   const uniqueDates = useMemo(
//     () => [...new Set(data.map((d) => d.date))],
//     [data]
//   );
//   const uniqueMonths = useMemo(
//     () => [...new Set(data.map((d) => d.month))],
//     [data]
//   );

//   /* ---------- FILTER STATES ---------- */
//   const [mode, setMode] = useState("date"); // date | range | month
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);
//   const [selectedMonth, setSelectedMonth] = useState(null);

//   /* ---------- AUTO INIT (LATEST DATA) ---------- */
//   useEffect(() => {
//     if (!uniqueDates.length) return;

//     const latestDate = uniqueDates[uniqueDates.length - 1];
//     setSelectedDate(latestDate);
//     setFromDate(uniqueDates[0]);
//     setToDate(latestDate);
//     setSelectedMonth(uniqueMonths[uniqueMonths.length - 1]);
//   }, [uniqueDates, uniqueMonths]);

//   /* ---------- FILTER LOGIC ---------- */
//   const filteredData = useMemo(() => {
//     if (!data.length) return [];

//     if (mode === "date" && selectedDate) {
//       return data.filter((d) => d.date === selectedDate);
//     }

//     if (mode === "range" && fromDate && toDate) {
//       return data.filter((d) => d.date >= fromDate && d.date <= toDate);
//     }

//     if (mode === "month" && selectedMonth) {
//       return data.filter((d) => d.month === selectedMonth);
//     }

//     return data;
//   }, [mode, selectedDate, fromDate, toDate, selectedMonth, data]);

//   /* ---------- NO DATA GUARD ---------- */
//   if (!filteredData.length) {
//     return (
//       <div className="energy-admin-dashboard">
//         <h2>No data available for selected filter 📭</h2>
//       </div>
//     );
//   }

//   const latest = filteredData[filteredData.length - 1];

//   /* ---------- CHART DATA ---------- */
//   const powerChart = {
//     labels: filteredData.map((d) => d.time),
//     datasets: [
//       {
//         label: "Active Power (kW)",
//         data: filteredData.map((d) => d.power),
//         borderColor: "#22c55e",
//         backgroundColor: "rgba(34,197,94,0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const windChart = {
//     labels: filteredData.map((d) => d.time),
//     datasets: [
//       {
//         label: "Wind Speed (m/s)",
//         data: filteredData.map((d) => d.wind),
//         borderColor: "#38bdf8",
//         backgroundColor: "rgba(56,189,248,0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const generatorChart = {
//     labels: filteredData.slice(-10).map((d) => d.time),
//     datasets: [
//       {
//         label: "Generator RPM",
//         data: filteredData.slice(-10).map((d) => d.rpm),
//         backgroundColor: "#a855f7",
//       },
//       {
//         label: "Winding Temp (°C)",
//         data: filteredData.slice(-10).map((d) => d.windingTemp),
//         backgroundColor: "#f87171",
//       },
//     ],
//   };

//   const energyPie = {
//     labels: filteredData.slice(-5).map((d) => d.time),
//     datasets: [
//       {
//         label: "Energy Usage",
//         data: filteredData.slice(-5).map((d) => d.energy),
//         backgroundColor: COLORS,
//       },
//     ],
//   };

//   /* ---------- UI ---------- */
//   return (
//     <div className="energy-admin-dashboard">
//       <h2 className="dashboard-heading">Wind Energy Management Dashboard</h2>

//       {/* FILTER CONTROLS */}
//       <div className="dashboard-controls">
//         <select value={mode} onChange={(e) => setMode(e.target.value)}>
//           <option value="date">Single Date</option>
//           <option value="range">Date Range</option>
//           <option value="month">Month</option>
//         </select>

//         {mode === "date" && (
//           <select
//             value={selectedDate || ""}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           >
//             {uniqueDates.map((d) => (
//               <option key={d} value={d}>{d}</option>
//             ))}
//           </select>
//         )}

//         {mode === "range" && (
//           <>
//             <input type="date" value={fromDate || ""} onChange={(e) => setFromDate(e.target.value)} />
//             <input type="date" value={toDate || ""} onChange={(e) => setToDate(e.target.value)} />
//           </>
//         )}

//         {mode === "month" && (
//           <select
//             value={selectedMonth || ""}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//           >
//             {uniqueMonths.map((m) => (
//               <option key={m} value={m}>{m}</option>
//             ))}
//           </select>
//         )}
//       </div>

//       {/* KPI */}
//       <div className="kpi-grid">
//         <Kpi title="Wind Speed" value={`${latest.wind} m/s`} />
//         <Kpi title="Active Power" value={`${latest.power} kW`} />
//         <Kpi title="Generator RPM" value={latest.rpm} />
//         <Kpi title="Winding Temp" value={`${latest.windingTemp} °C`} />
//       </div>

//       {/* CHARTS */}
//       <div className="grid-2">
//         <Panel title="Power Output Trend">
//           <Line data={powerChart} />
//         </Panel>

//         <Panel title="Wind Speed Trend">
//           <Line data={windChart} />
//         </Panel>
//       </div>

//       <div className="grid-3">
//         <Panel title="Generator Health">
//           <Bar data={generatorChart} />
//         </Panel>

//         <Panel title="Energy Distribution">
//           <Pie data={energyPie} />
//         </Panel>

//         <Panel title="Environment Status">
//           <p>🌡 {latest.temp} °C</p>
//           <p>💧 {latest.humidity}%</p>
//         </Panel>
//       </div>
//     </div>
//   );
// };

// /* ---------- SMALL COMPONENTS ---------- */
// const Kpi = ({ title, value }) => (
//   <div className="kpi-tile">
//     <p>{title}</p>
//     <h3>{value}</h3>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <div className="dashboard-panel">
//     <h4>{title}</h4>
//     {children}
//   </div>
// );

// export default AdminDashboard;

import React, { useState, useMemo, useEffect } from "react";
import windSensorData from "../data/windSensorData";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

/* ---------------- REGISTER ---------------- */
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

/* ---------------- HELPERS ---------------- */
const safe = (v) => (typeof v === "number" && !isNaN(v) ? v : 0);

const parseDateSafe = (value) => {
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
};

const COLORS = ["#22c55e", "#38bdf8", "#facc15", "#f87171", "#a855f7"];

const AdminDashboard = () => {
  /* ---------- NORMALIZE DATA ---------- */
  const data = useMemo(() => {
    return windSensorData
      .map((row) => {
        const dateObj = parseDateSafe(row["Date/Time"]);
        if (!dateObj) return null;

        return {
          date: dateObj.toISOString().slice(0, 10),
          month: dateObj.toISOString().slice(0, 7),
          time: dateObj.toLocaleTimeString(),
          wind: safe(row["Wind Speed (m/s)"]),
          power: safe(row["LV ActivePower (kW)"]),
          energy: safe(row.Monthly_Energy_Usage_kWh),
          temp: safe(row.Ambient_Temperature_C),
          humidity: safe(row.Humidity_Percent),
          rpm: safe(row.Generator_Speed_RPM),
          windingTemp: safe(row.Generator_Winding_Temperature_C),
        };
      })
      .filter(Boolean);
  }, []);

  /* ---------- UNIQUE VALUES ---------- */
  const uniqueDates = useMemo(
    () => [...new Set(data.map((d) => d.date))],
    [data]
  );

  const uniqueMonths = useMemo(
    () => [...new Set(data.map((d) => d.month))],
    [data]
  );

  /* ---------- FILTER STATES ---------- */
  const [mode, setMode] = useState("date"); // date | month
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(true);

  /* ---------- AUTO LOAD LATEST DATA ---------- */
  useEffect(() => {
  if (!uniqueDates.length) return;

  const latestDate = uniqueDates[uniqueDates.length - 1];

  setSelectedDate(latestDate);
  setSelectedMonth(uniqueMonths[uniqueMonths.length - 1]);

  setLoading(false); // ✅ data ready
}, [uniqueDates, uniqueMonths]);


  /* ---------- FILTER LOGIC ---------- */
  const filteredData = useMemo(() => {
    if (!data.length) return [];

    if (mode === "date" && selectedDate) {
      return data.filter((d) => d.date === selectedDate);
    }

    if (mode === "month" && selectedMonth) {
      return data.filter((d) => d.month === selectedMonth);
    }

    return data;
  }, [mode, selectedDate, selectedMonth, data]);

  /* ---------- NO DATA GUARD ---------- */
  if (loading) {
  return (
    <div className="energy-admin-dashboard">
      <h2>Loading dashboard data… ⏳</h2>
    </div>
  );
}

if (!filteredData.length) {
  return (
    <div className="energy-admin-dashboard">
      <h2>No data available for selected filter 📭</h2>
    </div>
  );
}


  const latest = filteredData[filteredData.length - 1];

  /* ---------- CHART DATA ---------- */
  const powerChart = {
    labels: filteredData.map((d) => d.time),
    datasets: [
      {
        label: "Active Power (kW)",
        data: filteredData.map((d) => d.power),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
      },
    ],
  };

  const windChart = {
    labels: filteredData.map((d) => d.time),
    datasets: [
      {
        label: "Wind Speed (m/s)",
        data: filteredData.map((d) => d.wind),
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56,189,248,0.2)",
        tension: 0.4,
      },
    ],
  };

  const generatorChart = {
    labels: filteredData.slice(-10).map((d) => d.time),
    datasets: [
      {
        label: "Generator RPM",
        data: filteredData.slice(-10).map((d) => d.rpm),
        backgroundColor: "#a855f7",
      },
      {
        label: "Winding Temp (°C)",
        data: filteredData.slice(-10).map((d) => d.windingTemp),
        backgroundColor: "#f87171",
      },
    ],
  };

  const energyPie = {
    labels: filteredData.slice(-5).map((d) => d.time),
    datasets: [
      {
        label: "Energy Usage",
        data: filteredData.slice(-5).map((d) => d.energy),
        backgroundColor: COLORS,
      },
    ],
  };

  /* ---------- UI ---------- */
  return (
    <div className="energy-admin-dashboard">
      <h2 className="dashboard-heading">Wind Energy Management Dashboard</h2>

      {/* FILTER CONTROLS */}
      <div className="dashboard-controls">
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="date">Single Date</option>
          <option value="month">Month</option>
        </select>

        {mode === "date" && (
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {uniqueDates.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        )}

        {mode === "month" && (
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {uniqueMonths.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        )}
      </div>

      {/* KPI */}
      <div className="kpi-grid">
        <Kpi title="Wind Speed" value={`${latest.wind} m/s`} />
        <Kpi title="Active Power" value={`${latest.power} kW`} />
        <Kpi title="Generator RPM" value={latest.rpm} />
        <Kpi title="Winding Temp" value={`${latest.windingTemp} °C`} />
      </div>

      {/* CHARTS */}
      <div className="grid-2">
        <Panel title="Power Output Trend">
          <Line data={powerChart} />
        </Panel>

        <Panel title="Wind Speed Trend">
          <Line data={windChart} />
        </Panel>
      </div>

      <div className="grid-3">
        <Panel title="Generator Health">
          <Bar data={generatorChart} />
        </Panel>

        <Panel title="Energy Distribution">
          <Pie data={energyPie} />
        </Panel>

        <Panel title="Environment Status">
          <p>🌡 {latest.temp} °C</p>
          <p>💧 {latest.humidity}%</p>
        </Panel>
      </div>
    </div>
  );
};

/* ---------- SMALL COMPONENTS ---------- */
const Kpi = ({ title, value }) => (
  <div className="kpi-tile">
    <p>{title}</p>
    <h3>{value}</h3>
  </div>
);

const Panel = ({ title, children }) => (
  <div className="dashboard-panel">
    <h4>{title}</h4>
    {children}
  </div>
);

export default AdminDashboard;
