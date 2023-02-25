import { React, useState } from "react";
import { EditOutlined } from '@ant-design/icons';
import { Table, Radio, Tabs, Card, Space, Input, Button } from "antd";
import EditableTable from "@/components/EditableTable";


function Statistics() {
  
  const SessionDates = ['Tab1','Tab2','Tab3','Tab4','Tab5','Tab6','Tab7','Tab8','2022-02-03','2021-03-02']

  const [query, setQuery] = useState('')
  const onChange = (e) => {
    setQuery(e.target.value);
  };

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
          height: 600,
        }}
        
        items={
          SessionDates.filter((tab) => {
            return tab.startsWith(query);
          }).map((val, i) => {
            const id = i;
            return {
              label: val,
              key: id,
              children:    
                <div>
                  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <EditableTable />
                  </Space>
                </div> ,
            };
        })}
      />
        </Card>
      </Space>
      
    </div>
  );
}

export default Statistics;
