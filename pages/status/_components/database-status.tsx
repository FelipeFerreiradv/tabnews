import useSWR from "swr";

const fetchAPI = async (key: string) => {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
};

const DatabaseStatusPage = () => {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  const version = JSON.stringify(data.dependencies.database.version);
  const max_connections = JSON.stringify(
    data.dependencies.database.max_connections,
  );
  const openedConnections = JSON.stringify(
    data.dependencies.database.opened_connections,
  );
  return (
    <>
      <h1>Database</h1>
      <h3>{isLoading ? "Loading..." : `Version: ${version}`}</h3>
      <h3>
        {isLoading ? "Loading..." : `Max connections: ${max_connections}`}
      </h3>
      <h3>
        {isLoading ? "Loading..." : `Opened Connections: ${openedConnections}`}
      </h3>
    </>
  );
};

export default DatabaseStatusPage;
