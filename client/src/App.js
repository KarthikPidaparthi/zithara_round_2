import React, { useState, useEffect, useCallback } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import './App.css'; // Import the custom CSS file


function App() {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [search, setSearch] = useState('');
  
  const handleSortChange = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };


 // get data
 const fetchRecords = useCallback(async () => {
  try {
    if (sortBy==='Name'){
    const response = await fetch("http://localhost:5000/customers/nameSort");
    const jsonData = await response.json();
    setRecords(jsonData);
  }
  else if (sortBy==='Date'){
    const response = await fetch("http://localhost:5000/customers/date");
    const jsonData = await response.json();
    setRecords(jsonData);
  }
  else if (sortBy==='Time'){
    const response = await fetch("http://localhost:5000/customers/time");
    const jsonData = await response.json();
    setRecords(jsonData);
  }
  else{
    const response = await fetch("http://localhost:5000/customers");
    const jsonData = await response.json();
    setRecords(jsonData);
  }
    
  } catch (error) {
    console.error(error);
  }
}, [sortBy]);

useEffect(() => {
  
  // Use the debounced function
  fetchRecords();
}, [currentPage, search, fetchRecords,]);

//console.log( search);

  
  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString();
  };

 // Calculate the total number of pages
  const recordsPerPage=20;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const visibleRecord=records.slice(firstIndex,lastIndex);
  const npages=Math.ceil(records.length/recordsPerPage);
  const numbers=[...Array(npages+1).keys()].slice(1)


  



  return (
    <div className="app-container">
      <Form className="filter-form">
        
      <Form.Group controlId="sortBy">
          <Form.Label>Sort By</Form.Label>
          <Form.Control as="select" onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="Name">Name</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
          </Form.Control>
        </Form.Group>

        

        <Form.Group controlId="search">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Search by name or location" onChange={(e)=>{
            e.preventDefault()
            setSearch(e.target.value.toLowerCase())}} />
        </Form.Group>
      </Form>

      <Table striped bordered hover className="data-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {search.toLowerCase()===''
              ?visibleRecord.map((record) => (
                <tr key={record.sno}>
                  <td>{record.sno}</td>
                  <td>{record.customer_name}</td>
                  <td>{record.age}</td>
                  <td>{record.phone}</td>
                  <td>{record.location}</td>
                  <td>{formatDate(record.created_at)}</td>
                  <td>{formatTime(record.created_at)}</td>
                </tr>
              ))
          : records.filter((item)=>
            (item.customer_name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search))
          ).map((record) => (
            <tr key={record.sno}>
              <td>{record.sno}</td>
              <td>{record.customer_name}</td>
              <td>{record.age}</td>
              <td>{record.phone}</td>
              <td>{record.location}</td>
              <td>{formatDate(record.created_at)}</td>
              <td>{formatTime(record.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {search.toLowerCase() === '' &&(
        <Pagination >
        
        {/* Previous page button */}
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />

        {/* Page numbers */}
        {Array.from({ length: npages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        {/* Next page button */}
        <Pagination.Next
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, npages))}
          disabled={currentPage === npages}
        />
      </Pagination>)}
    </div>
  );
}

export default App;
