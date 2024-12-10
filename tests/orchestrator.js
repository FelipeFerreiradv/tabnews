import retry from "async-retry";

const waitForAllServices = async () => {
  const waitForWebServer = async () => {
    return retry(fethStatusPage, {
      retries: 100,
      minTimeout: 100,
      maxTimeout: 5000,
    });

    async function fethStatusPage(bail, tryNumber) {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json();

      if (response.status != 200) {
        throw Error(`ERROR ${response.status}`);
      }
    }
  };

  await waitForWebServer();
};

export default {
  waitForAllServices,
};
