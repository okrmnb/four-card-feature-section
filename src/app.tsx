import React from "react";
import Card from "./card";

const App: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center space-y-10">
      <div className="flex flex-col pt-10 items-center space-y-3">
        <div className="flex flex-col space-y-1">
          <span className="text-2xl">Reliable, efficient delivery</span>
          <span className="text-2xl font-bold">Powered by Technology</span>
        </div>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="grid grid-rows-4 md:grid-rows-4 md:grid-cols-3 justify-between space-y-2 space-x-4">
        <Card className="md:row-start-2 md:row-end-4" />
        <Card className="md:row-start-1 md:row-end-3" />
        <Card className="md:row-start-3 md:row-end-5" />
        <Card className="md:row-start-2 md:row-end-4" />
      </div>
    </div>
  );
};

export default App;
