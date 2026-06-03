// AbortController for cancelling api request;
useEffect(() => {
  const controller = new AbortController();

  async function fetchUsers() {
    try {
      const res = await fetch(url, {
        signal: controller.signal
      });

      const data = await res.json();

      console.log(data);

    } catch (err) {
      console.log(err.message);
    }
  }

  fetchUsers();

  return () => {
    controller.abort();
  };

}, []);

// 2)retry Logic for api Request
async function fetchUsers(retries = 3) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed");
    }

    return await res.json();

  } catch (err) {

    if (retries > 0) {

      await new Promise(resolve =>
        setTimeout(resolve, 1000)
      );

      return fetchUsers(retries - 1);
    }

    throw err;
  }
}