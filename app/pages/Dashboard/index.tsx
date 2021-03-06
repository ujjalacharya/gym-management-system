import React from 'react';
import { Card, Col, Row } from 'antd';
import path from 'path';
import LayoutSidebar from '../../components/Layout/Layout';

const notification = {
  title: 'Notification with image',
  body: 'Short message plus a custom image',
  icon: path.join(__dirname, '../../../assets/img/programming.png'),
};

const Dashboard = (): JSX.Element => {
  const handleSystemNotification = (): void => {
    const myNotification = new window.Notification(
      notification.title,
      notification
    );

    myNotification.onclick = () => {
      console.log('Notification clicked');
    };
  };

  return (
    <LayoutSidebar>
      <div className="site-card-wrapper">
        <Row gutter={16} style={{ marginBottom: '2rem' }}>
          <Col span={8}>
            <Card
              title="Total Earning"
              bordered={false}
              onClick={handleSystemNotification}
            >
              <div style={{ backgroundColor: '#ded677' }}>Rs. 80,000</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Monthly Earning" bordered={false}>
              <div style={{ backgroundColor: '#72bfdc' }}>Rs. 15,000</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Weekly Earning" bordered={false}>
              <div style={{ backgroundColor: '#9797e2' }}>Rs. 5,000</div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '2rem' }}>
          <Col span={8}>
            <Card title="Total Customers" bordered={false}>
              <div style={{ backgroundColor: '#ded677' }}>48</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Monthly Customers" bordered={false}>
              <div style={{ backgroundColor: '#72bfdc' }}>8</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Weekly Customers" bordered={false}>
              <div style={{ backgroundColor: '#9797e2' }}>2</div>
            </Card>
          </Col>
        </Row>
      </div>
    </LayoutSidebar>
  );
};

export default Dashboard;
