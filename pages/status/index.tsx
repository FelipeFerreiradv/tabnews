import DatabaseStatusPage from "./_components/database-status";
import UpdatedAt from "./_components/updated-at";

const Status = () => {
  return (
    <>
      <h1>Status Page</h1>
      <UpdatedAt />
      <DatabaseStatusPage />
    </>
  );
};

export default Status;
