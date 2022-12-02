import { Tooltip, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import { Message } from '../App';

// create mui component messge with author and text
export const MessageBox = ({ message, sender, username }: Message) => {
  return (
    <Grid
      container
      width={'full'}
      sx={{ width: '100%', padding: 0 }}
      spacing={2}
    >
      <Grid display="flex" justifyContent="right" alignItems="center" xs={4}>
        <Tooltip title={sender}>
          <Typography noWrap={true} sx={{ fontWeight: 'bold' }}>
            {username || 'Anonymous'}
          </Typography>
        </Tooltip>
      </Grid>
      <Grid display="flex" justifyContent="left" alignItems="center" xs={8}>
        <p className="text">{message}</p>
      </Grid>
    </Grid>
  );
};
