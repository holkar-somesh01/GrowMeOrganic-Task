import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material'
// import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetBlogQuery } from '../redux/api/blogApi';
import { useSelector } from 'react-redux';
import { useGetUsersQuery } from '../redux/api/userApi';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Table = () => {
    const { data: blogData } = useGetBlogQuery();
    const { user } = useSelector(state => state.auth);
    const { data: GetUser } = useGetUsersQuery();
    const [userData, setUserData] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "title",
            headerName: 'Title',
            flex: 1,
            editable: true,
        },
        {
            field: 'body',
            headerName: 'Body',
            flex: 1,
            editable: true,
        },
        {
            field: 'userId',
            headerName: 'UserID',
            type: 'number',
            flex: 1,
            editable: true,
        }
    ];

    useEffect(() => {
        if (user && blogData) {
            const filteredData = blogData.filter(item => item.userId === user.id);
            const rowsWithIds = filteredData.map((row, index) => ({ ...row, id: index + 1 }));
            setUserData(rowsWithIds);
        }
    }, [blogData, user]);

    return (
        <>
            <Navbar />
            <React.Fragment>
                <CssBaseline />
                <Container fixed style={{ marginTop: 30, marginBottom: 20 }}>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <Box sx={{ height: "100%", width: '100%', }}>
                            <DataGrid
                                rows={userData}
                                getRowId={(row) => row.id}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                        },
                                    },
                                }}
                                pageSizeOptions={[10, 20, 50]}
                                checkboxSelection
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
            <Footer />
        </>
    );
};

export default Table;
