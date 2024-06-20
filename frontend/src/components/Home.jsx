import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        Welcome <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Home;
