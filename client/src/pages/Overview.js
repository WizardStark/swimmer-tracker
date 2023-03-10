import React, { useState, useEffect } from "react";
import Chart from "@/components/Chart";
import EditableTable from "@/components/EditableTable";

function Overview() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )} */}
      <EditableTable />
      <Chart />
    </div>
  );
}

export default Overview;
