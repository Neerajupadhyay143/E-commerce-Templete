import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Custom Arrow Icons
const CustomArrowBackIcon = () => (
    <ArrowBackIosNewIcon style={{ color: '#62C3C6' }} />
);

const CustomArrowForwardIcon = () => (
    <ArrowForwardIosIcon style={{ color: '#62C3C6' }} />
);

// Custom Pagination Styling
const CustomPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
        color: '#045A5C',
    },
    '& .Mui-selected': {
        color: '#FFF',
        backgroundColor: '#045A5C',
    },
    '& .MuiPaginationItem-icon': {
        color: '#62C3C6',
    },
});

export default function PaginationCart() {
    return (
        <div>
            <CustomPagination
                count={10} // Adjust the number of pages as needed
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            previous: CustomArrowBackIcon,
                            next: CustomArrowForwardIcon,
                        }}
                        {...item}
                    />
                )}
            />
        </div>
    );
}
