import {
  Alert,
  Button,
  Input,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Search = ({ contract }: any) => {
  const [username, setUsername] = useState<String | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) =>
    setUsername(await contract.members(data.address));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Stack direction={'row'} spacing={2} sx={{ marginY: '50px' }}> */}
      <Input
        placeholder="Address to check"
        {...register('address', { required: true })}
      />
      <Button type={'submit'} variant="contained">
        Search
      </Button>
      <Snackbar open={username != null} autoHideDuration={4000}>
        <Alert severity="info" sx={{ width: '100%' }}>
          This address is{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            {username}
          </Typography>
        </Alert>
      </Snackbar>
    </form>
  );
};
