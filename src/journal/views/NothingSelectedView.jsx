import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.secondary',
        borderRadius: 3
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'inherit' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' color='inherit'>Selecciona o crea una nota</Typography>
      </Grid>
    </Grid>
  );
};
