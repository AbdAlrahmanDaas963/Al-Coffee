import { useTheme, useMediaQuery } from '@mui/material';

function useScreenSize() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    isSmall,
    isMedium,
    isLarge
  };
}

export default useScreenSize;
