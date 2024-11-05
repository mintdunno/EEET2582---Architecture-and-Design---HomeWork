import GridTableCard from "./GridTableCard";
const GridTable = () => {
  const users = [
    { name: "John Doe", age: 28, email: "john@example.com" },
    { name: "Jane Smith", age: 34, email: "jane@example.com" },
    { name: "Sam Johnson", age: 22, email: "sam@example.com" },
    { name: "Alice Brown", age: 29, email: "alice@example.com" },
    { name: "Bob White", age: 31, email: "bob@example.com" },
    { name: "Charlie Black", age: 27, email: "charlie@example.com" },
    { name: "Diana Green", age: 26, email: "diana@example.com" },
    { name: "Eve Blue", age: 33, email: "eve@example.com" },
    { name: "Frank Red", age: 30, email: "frank@example.com" },
  ];

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
