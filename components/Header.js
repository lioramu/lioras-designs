import Button from '@mui/material/Button';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import { IconButton } from '@mui/material';

export default function Header({ setIsOpen }) {
  const handleDrawerOpen = () => {
    setIsOpen((p) => !p);
  };
  return (
    <>
      <IconButton onClick={() => handleNavigation('ראשי')}>
        <CottageSharpIcon sx={{ fontSize: 48 }} onClick={handleDrawerOpen} />
      </IconButton>
     
    </>
  );
}
