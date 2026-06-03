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

