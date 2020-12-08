import React, { useState, useEffect } from "react";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch("/logs"); // proxy is added
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="text-center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="text-center">No logs to show...</p>
      ) : (
        logs.map(log => <li>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
