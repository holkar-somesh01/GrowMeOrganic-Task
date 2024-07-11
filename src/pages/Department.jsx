import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Navbar from './Navbar';
import Footer from './Footer';

const Department = () => {
    const DEPARTMENT = [
        {
            id: 'grid',
            label: 'Customer Service',
            children: [
                { id: '1', label: 'Support' },
                {
                    id: '2', label: 'Customer_Success', children: [
                        { id: "well", label: "Well Servise" },
                        { id: "24/7", label: "24/7" },
                    ]
                },
            ],
        },
        {
            id: 'pickers',
            label: 'Design',
            children: [
                {
                    id: 'pickers-community', label: 'Graphic Design', children: [
                        { id: "PhotoShop", label: "PhotoShop" },
                        { id: "Canva", label: "Canva" },
                        { id: "Figma1", label: "Figma" },
                    ]
                },
                {
                    id: 'pickers-pro', label: 'Product Design', children: [
                        { id: "Laptop", label: "Laptop" },
                        { id: "Mouse", label: "Mouse" }
                    ]
                },
                {
                    id: 'web-design', label: 'Web Design', children: [
                        { id: "Figma", label: "Figma" },
                    ]
                },
            ],
        },
        {
            id: 'Web',
            label: 'Web Developer',
            children: [
                {
                    id: 'React', label: 'React.js', children: [
                        { id: "Bootstrap", label: "Bootstrap" },
                        { id: "Tailwind", label: "Tailwind" },
                        { id: "Redux", label: "Redux" },
                    ]
                },
                { id: 'Next', label: 'Next.js' },
                { id: 'TypeScript', label: 'TypeScript' },
            ],
        },
        {
            id: 'Mobile',
            label: 'React Native',
            children: [{ id: 'paper', label: 'React Native Paper' }],
        },
    ];

    return (
        <>
            <Navbar />
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Department
                </Typography>
                <Grid container rowSpacing={0} columnSpacing={4}>
                    {DEPARTMENT.map((dept, index) => (
                        <Grid item xs={12} sm={6} md={4} key={dept.id}>
                            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                                <Typography variant="h6" gutterBottom bgcolor={"Highlight"} style={{ borderRadius: "5px", padding: "5px", color: "white" }}>
                                    {dept.label}
                                </Typography>
                                <RichTreeView
                                    items={[dept]}
                                    itemChildrenIndentation={24}
                                    defaultExpandedItems={[]} // Empty array to collapse all nodes by default
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Department;
