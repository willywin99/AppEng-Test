import React, { useState, useEffect } from 'react';
import { Table, Input, Image, Spin, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

interface User {
  name: string;
  location: string;
  email: string;
  age: number;
  phone: string;
  cell: string;
  picture: string[];
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // const response = await fetch('/users?results=10&page=1'); // Or your API endpoint
        // const response = await fetch('http://localhost:5000/api/users?results=10&page=1');
        const response = await axios.get('http://localhost:5000/api/users', {
          params: {
            results : pageSize,
            page: currentPage,
          },
        });
        // const data = await response.json();
        // setUsers(data);
        setUsers(response.data.users); // Access the 'users' array from the API response
        setTotalUsers(response.data.total); // Access the 'total' count from the API response
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, pageSize, searchTerm]);  // add searchTerm to dependency array

  const columns: ColumnsType<User> = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      width: 80,
      key: 'picture',
      render: (pictures) => (
        <Image 
          width={50} 
          height={50} 
          src={pictures[0]} 
          alt="User Avatar" 
          style={{borderRadius: '5px'}}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Cell',
      dataIndex: 'cell',
      key: 'cell',
    },
  ];

  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(search) ||
      user.location.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
    );
  });

  return (
    <div style={{ padding: '20px' }}> {/* Overall page padding */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Input.Search
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ borderRadius: '5px', width: '50%' }}
        />
        <Button type="primary">+ New Data</Button> {/* Button on the right */}
      </div>
  
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <Table
            columns={columns}
            dataSource={filteredUsers}
            bordered
            pagination={false}
            components={{ // Use components prop for header styling
              header: {
                cell: (props) => (
                  <th
                    {...props}
                    style={{
                      backgroundColor: '#f0f0f0',
                      fontWeight: 'bold',
                      padding: '10px', // Adjust padding as needed
                      textAlign: 'left', // Align text to the left
                    }}
                  />
                ),
              },
            }}
            rowClassName={() => 'table-row'} // Add a class to the rows
          />
          <Pagination  // Added Pagination Component
              current={currentPage}
              pageSize={pageSize}
              total={totalUsers}
              onChange={(page, size) => {
                setCurrentPage(page);
                setPageSize(size);
              }}
              style={{ marginTop: '16px', textAlign: 'center' }}
          />
        </div>
      )}
    </div>
  );
};

export default App;