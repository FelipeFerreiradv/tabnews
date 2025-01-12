import useSWR from "swr";

const fetchAPI = async (key: string) => {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
};

const UpdatedAt = () => {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  const updatedAtText = new Date(data.update_at).toLocaleString("pt-BR");
  return (
    <h1>{isLoading ? "Loading..." : `Lastest Updated: ${updatedAtText}`}</h1>
  );
};

export default UpdatedAt;
