import useSWR from "swr";

const fecthStatus = async () => {
  const response = await fetch("api/v1/status");
  const responseBody = await response.json();
  return responseBody;
};

const Status = () => {
  const response = useSWR("status", fecthStatus);
  console.log(response.isLoading);
  console.log(response.data);

  return (
    <>
      <h1>Status Page</h1>
    </>
  );
};

export default Status;
