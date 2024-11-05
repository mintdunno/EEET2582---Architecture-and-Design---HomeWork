import GridTableCard from "./GridTableCard";
import loadUserData from "./GridTableApiCall";

const GridTable = () => {
  const users = loadUserData();
  
  return (
    <div
      className="
        grid grid-flow-row
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        mx-auto p-4
        gap-4
        "
    >
      {users.map((user, index) => (
        <GridTableCard user={user} key={index} />
      ))}
    </div>
  );
};
export default GridTable;
