import { React, useState } from "react";
import { Table, Radio, Tabs, Card, Space, Input } from "antd";

function Statistics() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const [query, setQuery] = useState('')
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const SessionDates = ['Tab1','Tab2','Tab3','Tab4','Tab5','Tab6','Tab7','Tab8','2022-02-03','2021-03-02']
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <Card title="Session Manager" size="small">
        <Input
          value={query} 
          placeholder="Date: YYYY-MM-dd" 
          size='middle'
          onChange={onChange}/>
        <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{
          height: 1200,
        }}
        
        items={
          SessionDates.filter((tab) => {
            return tab.startsWith(query);
          }).map((val, i) => {
            const id = i;
            return {
              label: val,
              key: id,
              children: <Table dataSource={dataSource} columns={columns} pagination={false} />,
            };
        })}
      />
        </Card>
      </Space>
      
    </div>
  );
}

export default Statistics;
