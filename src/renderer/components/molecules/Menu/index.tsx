import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Box, Button, List, ListItem } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useHotkeys } from 'react-hotkeys-hook';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeModel } from 'renderer/store/theme.store';
import logoDark from '../../../assets/logo_dark.svg';
import './style.scss';

export const Menu = () => {
  const navigate = useNavigate();
  const theme = useStoreState((state: ThemeModel) => state.theme) as string;
  useHotkeys('esc', () => window.electron.ipcRenderer.exit(), []);
  useHotkeys('f2', () => navigate('/'), []);
  useHotkeys('f3', () => navigate('/stock'), []);
  useHotkeys('f4', () => navigate('/config'), []);

  return (
    <>
      <Box className="cont">
        <List>
          <ListItem sx={{ margin: 3 }} component="div" disablePadding>
            {theme === 'dark' ? (
              <img
                style={{ width: 100, marginTop: 30, opacity: 0.9 }}
                src={logoDark}
                alt="Logo"
                loading="lazy"
              ></img>
            ) : (
              <img
                style={{ width: 100, marginTop: 30, opacity: 0.9 }}
                src={logoDark}
                alt="Logo"
              ></img>
            )}
          </ListItem>
          <NavLink to="/">
            <ListItem component="div" disablePadding>
              <Button
                color={theme === 'dark' ? 'inherit' : 'primary'}
                size="large"
                startIcon={<ShoppingBasketIcon />}
              >
                <strong>Caixa (F2)</strong>
              </Button>
            </ListItem>
          </NavLink>


          <NavLink to="/stock">
            <ListItem component="div" disablePadding>
              <Button
                color={theme === 'dark' ? 'inherit' : 'primary'}
                size="large"
                startIcon={<Inventory2Icon />}
              >
                <strong>Estoque (F3)</strong>
              </Button>
            </ListItem>
          </NavLink>

          <NavLink to="/stock">
            <ListItem component="div" disablePadding>
              <Button
                color={theme === 'dark' ? 'inherit' : 'primary'}
                size="large"
                startIcon={<CalculateIcon />}
              >
                <strong>Calculadora (Tab)</strong>
              </Button>
            </ListItem>
          </NavLink>

          <NavLink to="/config">
            <ListItem component="div" disablePadding>
              <Button
                color={theme === 'dark' ? 'inherit' : 'primary'}
                size="large"
                startIcon={<SettingsIcon />}
              >
                <strong>Configura????es (F4)</strong>
              </Button>
            </ListItem>
          </NavLink>

          <ListItem sx={{ marginTop: 33 }} component="div" disablePadding>
            <Button
              color={'error'}
              size="large"
              startIcon={<LogoutIcon />}
              onClick={() => window.electron.ipcRenderer.exit()}
            >
              <strong>Sair (Esc)</strong>
            </Button>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
