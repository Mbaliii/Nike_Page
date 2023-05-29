import logo from './logo.svg';
import './App.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import main from './img/sag.jpg';


function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="main">
      <Box position="static" className="banner">
        <Box className="icon">
          <img src="https://freepngimg.com/thumb/nike_logo/3-2-nike-logo-png.png" />
        </Box>
        <Box className="option">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
        <Box className="mobile">
          <Button onClick={handleOpen}>
            <MenuIcon />
          </Button>
        </Box>

        <Box className="cart">
          <Button>
            <LocalMallIcon />
          </Button>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          <Button>Men</Button>
          <Button>Women</Button>
          <Button>Kids</Button>
          <Button>Customize</Button>
          <Button>Favorites</Button>
        </Box>
      </Modal>
      <Box className="card">
        <Box>
          <Typography id="title">
            NIKE
            <br /> MID <br />
            BLAZER
          </Typography>
          <Typography id="bag-btn">
            Add to Bag
            <Button>
              <LocalMallIcon />
            </Button>
          </Typography>
        </Box>
        <img className="card-img" src={main} />
      </Box>
      <Box className="scroll">
        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b70aed42-0084-405b-8e44-6d52b59fa4f3/custom-nike-air-force-1-high-by-you-shoes.png"
            />
          </Box>
          <Typography>NIKE AIR HUARHE PREMIUM</Typography>
          <Typography target="shop">Shop Now </Typography>
        </Box>
        


        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e29f7d60-0a8e-4206-9ef7-20ff5ae1c8c6/air-force-1-high-utility-2-boot-Nf7bJp.png"
            />
          </Box>
          <Typography>NIKE AIR FORCE I HIGH</Typography>
          <Typography target="shop">Shop Now </Typography>
        </Box>
       


        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-CBDjT0.png"
            />
          </Box>
          <Typography> NIKE AIR SPAN II PREMIUM</Typography>
          <Typography target="shop"> Shop now</Typography>
        </Box>
        

        <Box id="card">
          <Box>
            <img
              id="list-img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1e80f517-1d6f-47c7-9a1a-7f476cbea04d/custom-nike-air-force-1-mid-by-you-shoes.png"
            />
          </Box>
          <Typography>NIKE SF AIR FORCE 1 'Vintage Wine'</Typography>
          <Typography target="shop">Shop Now </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;