import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import Navbar from './Navbar'

const Department = () => {
    const DEPARTMENT = [
        {
            id: 'grid',
            label: "customer_service",
            children: [
                { id: '1', label: 'support' },
                { id: '2', label: 'customer_success' },
            ],
        },
        {
            id: 'pickers',
            label: 'design',
            children: [
                { id: 'pickers-community', label: 'graphic_design' },
                { id: 'pickers-pro', label: 'product_design' },
                { id: 'web_design', label: 'web_design' },
            ],
        },
        {
            id: 'Web',
            label: 'Web Developer',
            children: [
                { id: 'React', label: 'React js' },
                { id: 'Next', label: 'Next js' },
                { id: 'TypeScript', label: 'TypeScrit' },
            ],
        },
        {
            id: 'Mobile',
            label: 'React Native',
            children: [{ id: 'paper', label: 'React Native Paper' }],
        },
    ];
    return <>
        <Navbar />
        <div>Department</div>
        <div style={{ padding: 40 }}>
            <Box sx={{ minHeight: 352, minWidth: 250 }}>
                <RichTreeView
                    items={DEPARTMENT}
                    itemChildrenIndentation={24}
                    defaultExpandedItems={['grid']}
                />
            </Box>
        </div>
    </>
}

export default Department