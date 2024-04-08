import HomePage from "../components/homePage";
import client from "../../tina/__generated__/client";

const Home = async () => {
  const res = await client.queries.page({ relativePath: "homePage.json" });

  return (
    <HomePage data={res.data} query={res.query} variables={res.variables} />
  );
};

export default Home;
