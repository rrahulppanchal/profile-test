import React from 'react';
import CandlestickChart from '../../Components/Charts/CandleCharts';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getPosts } from '../../store/taskSlice/taskSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import Loader from '../../Components/Common/Loader';
const lineChartData = [
  { x: '2023-08-01', y: [100, 120, 90, 110] },
  { x: '2023-08-02', y: [110, 140, 100, 120] },
  { x: '2023-08-03', y: [120, 130, 110, 125] }
];
const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const taskData = useAppSelector((state) => state);
  console.log(taskData);
  return (
    <>
      <div className="dashboard-container">
        <Row>
          <Col>
            {taskData?.task?.isLoading ? (
              <Loader />
            ) : (
              <Table striped bordered hover variant="dark">
                <thead className="rounded">
                  <tr>
                    <th className="text-color rounded">#</th>
                    <th className="text-color">First Name</th>
                    <th className="text-color">Last Name</th>
                    <th className="text-color">Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-color">1</td>
                    <td className="text-color">Mark</td>
                    <td className="text-color">Otto</td>
                    <td className="text-color">@mdo</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Col>
          <Col>{taskData?.task?.isLoading ? <Loader /> : <CandlestickChart />}</Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
