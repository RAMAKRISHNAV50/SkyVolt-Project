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
