import React, { useState } from 'react';
import { Popover, IconButton, Box, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const languages = [
    ['Bahasa Indonesia', 'Bahasa Melayu', 'Dansk', 'Deutsch', 'English', 'Español', 'Français', 'Italiano'],
    ['Magyar', 'Nederlands', 'Norsk', 'Polski', 'Português (Brasil)', 'Português (Portugal)', 'Română', 'Suomi'],
    ['Svenska', 'Türkçe', 'Wikang Filipino', 'Čeština', 'Ελληνικά', 'Русский', 'עברית', 'العربية'],
    ['हिन्दी', 'தமிழ்', 'తెలుగు', 'ไทย', '日本語', '简体中文', '繁體中文', '한국어']
];

function Language() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <IconButton
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <LanguageIcon fontSize="large" />
                <ArrowDropDownIcon />
            </IconButton>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    style: {
                        padding: '10px',
                        borderRadius: '10px',
                        backgroundColor: '#111',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'row',
                    },
                }}
            >
                {languages.map((column, index) => (
                    <Box key={index} sx={{ margin: '0 20px' }}>
                        {column.map((language, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    color: 'red',
                                    padding: '5px 0',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    }
                                }}
                            >
                                {language}
                            </Typography>
                        ))}
                    </Box>
                ))}
            </Popover>
        </div>
    )
}

export default Language