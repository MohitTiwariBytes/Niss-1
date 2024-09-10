import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import NavBar from '../Navbar/Navbar';
import './Dashboard.css'; // Import custom CSS
// import XLSX from 'xlsx'; // Import the XLSX library
import Footer from "../Footer/Footer";


const Dashboard = () => {
    const [dataEntryData, setDataEntryData] = useState([]);
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        // Fetch data from local storage
        const storedDataEntryData = JSON.parse(localStorage.getItem('dataEntryData')) || [];
        const storedContactData = JSON.parse(localStorage.getItem('contactData')) || [];

        setDataEntryData(storedDataEntryData);
        setContactData(storedContactData);
    }, []);

    const downloadExcel = (data, fileName) => {
        // Create a new workbook and add the data as a worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
        // Write the workbook to a file
        XLSX.writeFile(wb, fileName);
    };

    return (
        <div className="dashboard-page">
            <NavBar />
            <div className="container mt-5">
                <h1 className="text-center mb-4" style={{marginTop:"2em"}}>Dashboard</h1>

                <div className="dashboard-section">
                    <h2>Contact Us Records</h2>
                    
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactData.length > 0 ? (
                                contactData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.message}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                  
                </div>
               
            </div>

            <button 
                        className="btn btn-primary mb-3" style={{marginLeft:"35em",marginTop:"2em"}}
                        onClick={() => downloadExcel(contactData, 'contact_us_records.xlsx')}
                    >
                        Download Contact Us Data as Excel
                    </button> <Footer></Footer>
        </div>
       
    );
};

export default Dashboard;
