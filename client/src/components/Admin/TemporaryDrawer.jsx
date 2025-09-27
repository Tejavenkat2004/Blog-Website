// import * as React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import SettingsIcon from '@mui/icons-material/Settings';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();
  
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
//   const handleLogout = () => {
    
//     navigate('/'); 
//   };


//   const DrawerList = (
//     <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
//       <Box sx={{ display: 'flex', alignItems: 'center', padding: 3, backgroundColor: '#f5f5f5', flexDirection: 'column' }}>
//         <AccountCircleIcon sx={{ fontSize: 160 }} />
//         <Box sx={{ marginTop: 2 }}>
//           <strong style={{ fontSize: '1.2rem' }}>John Doe</strong>
//           <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>johndoe@example.com</p>
//         </Box>
//       </Box>
//       <Divider />

//       <List sx={{ flexGrow: 1 }}>
//         {[ 
//           { text: 'DashBoard', icon: <DashboardIcon />, link: '/dashboard' }, 
//           { text: 'AddBlog', icon: <AddBoxIcon />, link: '/add_blog' }, 
//           { text: 'DeleteBlog', icon: <DeleteIcon />, link: '/delete_blog' }, 
//           { text: 'EditBlog', icon: <EditIcon />, link: '/update_blog' }
//         ].map((item) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton component={Link} to={item.link}>  {/* Wrap in Link component */}
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <Box sx={{ paddingBottom: 2 }}>
//         <List>
          
//           <ListItem disablePadding>
//             <ListItemButton onClick={handleLogout}>
//               <ListItemIcon>
//                 <ExitToAppIcon />
//               </ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)} sx={{ position: 'absolute', top: 10, left: 10 }}>
//         <MenuIcon />
//       </Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);  // Initialize state for user
  const navigate = useNavigate();
  
  // Fetch user data from localStorage
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Parse and set user data
    }
  }, []);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const handleLogout = () => {
    // Clear user data and navigate to home
    localStorage.removeItem('user');
    navigate('/');
  };

  const DrawerList = (
    <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 3, backgroundColor: '#f5f5f5', flexDirection: 'column' }}>
        <AccountCircleIcon sx={{ fontSize: 160 }} />
        {user ? (  // If user is available, show name and email
          <Box sx={{ marginTop: 2 }}>
            <strong style={{ fontSize: '1.2rem' }}>{user.username}</strong>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{user.email}</p>
          </Box>
        ) : (
          <Box sx={{ marginTop: 2 }}>
            <strong style={{ fontSize: '1.2rem' }}>Guest</strong>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Not signed in</p>
          </Box>
        )}
      </Box>
      <Divider />

      <List sx={{ flexGrow: 1 }}>
        {[ 
          { text: 'DashBoard', icon: <DashboardIcon />, link: '/dashboard' }, 
          { text: 'AddBlog', icon: <AddBoxIcon />, link: '/add_blog' }, 
          { text: 'DeleteBlog', icon: <DeleteIcon />, link: '/delete_blog' }, 
          { text: 'EditBlog', icon: <EditIcon />, link: '/update_blog' }
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ paddingBottom: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ position: 'absolute', top: 10, left: 10 }}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
