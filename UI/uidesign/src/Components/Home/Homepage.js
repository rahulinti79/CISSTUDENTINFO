import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LogoutIcon from '@mui/icons-material/Logout';
// import studentpic from '../../Images/myphoto'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'rgb(0 52 103)', // Set background color to rgb(0 52 103)
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledListItemText = styled(ListItemText)({
  color: 'white', // Set text color to white
});

const cardData = [
  { 
    name: 'ANIL', 
    phoneNumber: '469-708-5956', 
    company: 'VELLUNTA INC',
    introductionPhoto: '{{}}', //i have to put original path 
    role:"Full Stack Java Developer" ,
    technologies: ['React', 'CSS','Java','aws','sql', "Java"], 
    jobApplications: [
      { vendorName: 'Vendor A', company: 'Company A', phone: '123-456-7890', email: 'vendorA@example.com', date: '2022-01-01', status: 'Applied' },
    ]
  },
];

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgb(0 52 103)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            WELCOME TO CIS
          </Typography>
          <LogoutIcon  sx={{position: 'absolute',right: '34px'}}/>
          
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgb(0 52 103)', // Set background color to red
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#fff' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['RTR', 'INTERVIEWS', 'ON HOLD', 'SUBMISSIONS'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon sx={{ color: 'white' }} /> : <MailIcon sx={{ color: 'white' }} />}
                </ListItemIcon>
                <StyledListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box sx={{ flexWrap: 'wrap', marginTop: '64px',width:'75rem' ,padding:"24px", }}>
        {cardData.map((data, index) => (
          <Card key={index} sx={{ minWidth: 250, margin: '10px', boxShadow: "-1px 0px 11px 2px #003467" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Phone Number: {data.phoneNumber}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Role: {data.role}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Company: {data.company}
              </Typography>
              <img src={data.introductionPhoto} alt="Introduction" />
              <Typography variant="h6" component="div">
                Technologies:
              </Typography>
              <ul>
                {data.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <Typography variant="h6" component="div">
                Job Applications:
              </Typography>
              <table>
                <thead>
                  <tr>
                    <th>Vendor Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.jobApplications.map((job, i) => (
                    <tr key={i}>
                      <td>{job.vendorName}</td>
                      <td>{job.company}</td>
                      <td>{job.phone}</td>
                      <td>{job.email}</td>
                      <td>{job.date}</td>
                      <td>{job.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
