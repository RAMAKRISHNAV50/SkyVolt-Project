// import React from "react";
// import windSensorData from "../data/windSensorData";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { Pie } from "react-chartjs-2";

// /* REGISTER CHART */
// ChartJS.register(ArcElement, Tooltip, Legend);

// /* ================================
//    MAIN DASHBOARD COMPONENT
// ================================ */
// const ClintDashboard = () => {

//   /* ROLE CHECK */
//   const role = localStorage.getItem("role"); // "admin" or "client"

//   /* 🚫 BLOCK CLIENT FROM ADMIN VIEW */
//   if (role !== "client") {
//     return (
//       <div style={styles.blocked}>
//         <h2>🚫 Access Restricted</h2>
//         <p>Please contact admin to access Client Dashboard</p>
//       </div>
//     );
//   }

//   /* ================================
//      CREATE CLIENT DATA
//   ================================ */
//   const clientData = windSensorData.map(item => ({
//     userName: item.User_Name,
//     sector: item.Sector,
//     energyUsed: Number(item.Monthly_Energy_Usage_kWh) || 0,
//     adminAllocated: Number(item.admin_monthly_sending_volt) || 0,
//     remaining:
//       (Number(item.admin_monthly_sending_volt) || 0) -
//       (Number(item.Monthly_Energy_Usage_kWh) || 0)
//   }));

//   /* DEMO → TAKE FIRST CLIENT */
//   const client = clientData[0];

//   /* PIE CHART DATA */
//   const pieData = {
//     labels: ["Energy Used", "Remaining Allocation"],
//     datasets: [
//       {
//         data: [client.energyUsed, client.remaining],
//         backgroundColor: ["#ef4444", "#22c55e"]
//       }
//     ]
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Client Energy Usage Dashboard</h2>

//       {/* KPI SECTION */}
//       <div style={styles.kpiGrid}>
//         <Kpi title="User Name" value={client.userName} />
//         <Kpi title="Sector" value={client.sector} />
//         <Kpi
//           title="Energy Allocated by Admin"
//           value={`${Math.round(client.adminAllocated)} kWh`}
//         />
//         <Kpi
//           title="Energy Used"
//           value={`${Math.round(client.energyUsed)} kWh`}
//         />
//       </div>

//       {/* CHART */}
//       <div style={styles.panel}>
//         <h4>Energy Consumption Summary</h4>
//         <Pie data={pieData} />
//       </div>
//     </div>
//   );
// };

// /* ================================
//    KPI COMPONENT
// ================================ */
// const Kpi = ({ title, value }) => (
//   <div style={styles.kpiTile}>
//     <p style={styles.kpiTitle}>{title}</p>
//     <h3>{value}</h3>
//   </div>
// );

// /* ================================
//    INLINE STYLES
// ================================ */
// const styles = {
//   container: {
//     padding: "24px",
//     background: "#f8fafc",
//     minHeight: "100vh",
//     fontFamily: "Arial"
//   },
//   heading: {
//     fontSize: "26px",
//     marginBottom: "20px"
//   },
//   kpiGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "16px",
//     marginBottom: "30px"
//   },
//   kpiTile: {
//     background: "#ffffff",
//     padding: "16px",
//     borderRadius: "12px",
//     boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
//   },
//   kpiTitle: {
//     color: "#64748b",
//     fontSize: "13px"
//   },
//   panel: {
//     background: "#ffffff",
//     padding: "16px",
//     borderRadius: "14px",
//     boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//     maxWidth: "500px"
//   },
//   blocked: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f1f5f9",
//     color: "#0f172a"
//   }
// };

// export default ClintDashboard;

import React, { useMemo, useState, useEffect } from "react";
import windSensorData from "../data/windSensorData";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
} from "chart.js";
import { Pie, Line, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

/* ================================
   SAFE DATE PARSER
================================ */
const parseDate = (value) => {
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
};

const DAILY_LIMIT = 100;

const ClientDashboard = () => {
  /* ================================
     NORMALIZE DATA
  ================================ */
  const data = useMemo(() => {
    return windSensorData
      .map((row) => {
        const dateObj = parseDate(row["Date/Time"]);
        if (!dateObj) return null;

        return {
          date: dateObj.toISOString().slice(0, 10), // YYYY-MM-DD
          time: dateObj.toLocaleTimeString(),
          power: Number(row["LV ActivePower (kW)"]) || 0,
          wind: Number(row["Wind Speed (m/s)"]) || 0,
          energy: Number(row.Monthly_Energy_Usage_kWh) || 0
        };
      })
      .filter(Boolean);
  }, []);

  /* ================================
     DATE RANGE FOR CALENDAR
  ================================ */
  const allDates = useMemo(
    () => [...new Set(data.map((d) => d.date))].sort(),
    [data]
  );

  const minDate = allDates[0];
  const maxDate = allDates[allDates.length - 1];

  const [selectedDate, setSelectedDate] = useState("");

  /* AUTO SELECT LATEST DATE */
  useEffect(() => {
    if (!selectedDate && maxDate) {
      setSelectedDate(maxDate);
    }
  }, [maxDate, selectedDate]);

  /* ================================
     FILTER DATA BY DATE
  ================================ */
  const filteredData = useMemo(() => {
    return data.filter((d) => d.date === selectedDate);
  }, [data, selectedDate]);

  /* ================================
     ENERGY CALCULATION
  ================================ */
  const totalEnergy = filteredData.reduce(
    (sum, d) => sum + d.energy,
    0
  );

  const remaining = Math.max(totalEnergy-DAILY_LIMIT);

  /* ================================
     CHART DATA
  ================================ */
  const powerLine = {
    labels: filteredData.map((d) => d.time),
    datasets: [
      {
        label: "Active Power (kW)",
        data: filteredData.map((d) => d.power),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4
      }
    ]
  };

  const windBar = {
    labels: filteredData.map((d) => d.time),
    datasets: [
      {
        label: "Wind Speed (m/s)",
        data: filteredData.map((d) => d.wind),
        backgroundColor: "#38bdf8"
      }
    ]
  };

  const energyPie = {
    labels: ["Energy Used", "Remaining Energy"],
    datasets: [
      {
        data: [
          totalEnergy > 0 ? totalEnergy : 1,
          remaining > 0 ? remaining : 1
        ],
        backgroundColor: ["#ef4444", "#22c55e"]
      }
    ]
  };

  /* ================================
     NO DATA STATE
  ================================ */
  if (!filteredData.length) {
    return (
      <h2 style={{ padding: 30 }}>
        No data available for selected date
      </h2>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Client Wind Energy Dashboard</h2>

      {/* CALENDAR */}
      <input
        type="date"
        min={minDate}
        max={maxDate}
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={styles.calendar}
      />

      {/* KPI */}
      <div style={styles.kpiGrid}>
        <Kpi title="Daily Limit" value="100 kWh" />
        <Kpi title="Energy Used" value={`${totalEnergy} kWh`} />
        <Kpi title="Remaining Energy" value={`${remaining} kWh`} />
      </div>

      {/* CHARTS */}
      <div style={styles.grid}>
        <Panel title="Power Trend">
          <Line data={powerLine} />
        </Panel>

        <Panel title="Wind Speed">
          <Bar data={windBar} />
        </Panel>

        <Panel title="Energy Usage">
          <Pie data={energyPie} />
        </Panel>
      </div>
    </div>
  );
};

/* ================================
   UI COMPONENTS
================================ */
const Kpi = ({ title, value }) => (
  <div style={styles.kpiTile}>
    <p>{title}</p>
    <h3>{value}</h3>
  </div>
);

const Panel = ({ title, children }) => (
  <div style={styles.panel}>
    <h4>{title}</h4>
    {children}
  </div>
);

/* ================================
   STYLES
================================ */
const styles = {
  container: {
    padding: 24,
    background: "#f8fafc",
    minHeight: "100vh"
  },
  heading: {
    fontSize: 26,
    marginBottom: 16
  },
  calendar: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    border: "1px solid #cbd5e1"
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
    marginBottom: 30
  },
  kpiTile: {
    background: "#fff",
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 20
  },
  panel: {
    background: "#fff",
    padding: 16,
    borderRadius: 14,
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
  }
};

export default ClientDashboard;
