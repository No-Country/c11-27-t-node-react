const getConfig = () => ({
  Headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default getConfig;
