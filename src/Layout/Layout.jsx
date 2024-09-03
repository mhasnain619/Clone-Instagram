import * as React from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Avatar, Button, Divider } from '@mui/material';
import { GoHomeFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import { MdExplore } from 'react-icons/md';
import { BsCameraReels } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import { CiSquarePlus } from 'react-icons/ci';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

function InstagramUI(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const leftDrawer = (
        <Box>
            {/* Instagram Logo */}
            <Box sx={{ height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold" fontFamily="monospace">Instagram</Typography>
            </Box>
            {/* Navigation Icons */}
            <List>
                {['Home', 'Search', 'Explore', 'Reels', 'Messages', 'Notifications', 'Create', 'Profile', 'More'].map((text) => {
                    let icon;
                    switch (text) {
                        case 'Home':
                            icon = <GoHomeFill />;
                            break;
                        case 'Search':
                            icon = <IoSearch />;
                            break;
                        case 'Explore':
                            icon = <MdExplore />;
                            break;
                        case 'Reels':
                            icon = <BsCameraReels />;
                            break;
                        case 'Messages':
                            icon = <BiMessageSquareDetail />;
                            break;
                        case 'Notifications':
                            icon = <FaRegHeart />;
                            break;
                        case 'Create':
                            icon = <CiSquarePlus />;
                            break;
                        default:
                            icon = <GoHomeFill />;
                            break;
                    }
                    return (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    const rightDrawer = (
        <Box sx={{ padding: 2 }}>
            {/* User Profile Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ marginRight: 1 }}>A</Avatar>
                    <Box>
                        <Typography>anain_ty_</Typography>
                        <Typography variant="caption">محمد حسنین</Typography>
                    </Box>
                </Box>
                <Button color="primary" size="small">Switch</Button>
            </Box>
            {/* Suggestions */}
            <Typography variant="subtitle2" gutterBottom>Suggested for you</Typography>
            <List>
                {['mushahid_balti', 'i_kamilkarim1', 'kawishbalti_', 'muhammmad_ali_11', 'shujju_003'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <Avatar sx={{ marginRight: 1 }}>M</Avatar>
                            <ListItemText primary={text} secondary="Followed by ..." />
                            <Button color="primary" size="small">Follow</Button>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const stories = [
        { id: 1, src: 'profile1.jpg', alt: 'Profile 1' },
        { id: 2, src: 'profile2.jpg', alt: 'Profile 2' },
        { id: 3, src: 'profile3.jpg', alt: 'Profile 3' },
        { id: 4, src: 'profile3.jpg', alt: 'Profile 4' },
        { id: 5, src: 'profile3.jpg', alt: 'Profile 5' },
        { id: 6, src: 'profile3.jpg', alt: 'Profile 6' },
        { id: 7, src: 'profile3.jpg', alt: 'Profile 7' },
        { id: 8, src: 'profile3.jpg', alt: 'Profile 8' },
        { id: 9, src: 'profile3.jpg', alt: 'Profile 9' },
        { id: 10, src: 'profile3.jpg', alt: 'Profile 10' },
        { id: 11, src: 'profile3.jpg', alt: 'Profile 11' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        { id: 12, src: 'profile3.jpg', alt: 'Profile 12' },
        // Add more story items as needed
    ];
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* AppBar */}
            {/* {sm: `calc(100% - ${drawerWidth}px)` }, ml: {sm: `${drawerWidth}px` } */}

            <AppBar sx={{ backgroundColor: "#fff", boxShadow: "none", }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ backgroundColor: "green", display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            width: '100%', // Explicit width for the container
                            padding: '10px',
                            gap: '10px',
                            '&::-webkit-scrollbar': { display: 'none' }, // Hides scrollbar for Webkit-based browsers
                            scrollbarWidth: 'none', // Hides scrollbar for Firefox
                        }}
                    >
                        {stories.map((story) => (
                            <Box
                                key={story.id}
                                sx={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: '3px solid #f09433',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    backgroundColor: 'white',
                                }}
                            >
                                <Avatar
                                    src={story.src}
                                    alt={story.alt}
                                    sx={{ width: '100%', height: '100%' }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Left Drawer */}
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="left drawer">
                {/* Temporary Drawer for mobile */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {leftDrawer}
                </Drawer>
                {/* Permanent Drawer for desktop */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {leftDrawer}
                </Drawer>
            </Box>
            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth * 2}px)` } }}>
                {/* Content will go here */}
            </Box>
            {/* Right Drawer */}
            <Box component="nav" sx={{ width: 500, flexShrink: 0 }} aria-label="right drawer">
                <Drawer
                    variant="permanent"
                    anchor="right"
                    open
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { width: 400 },
                    }}
                >
                    {rightDrawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default InstagramUI;
