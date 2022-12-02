import {
  Alert,
  Button,
  FormControl,
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
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) =>
    setUsername(await contract.members(data.address));

  return (
    <>
      <FormControl
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          paddingY: '25px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Input
          placeholder="Address to check"
          {...register('address', { required: true })}
        />
        <Button type={'submit'} variant="contained" sx={{ marginLeft: '10px' }}>
          Search
        </Button>
      </FormControl>
      {errors.address && <Alert severity="error">Address is required</Alert>}
      {username && !errors.address && (
        <Alert severity="info">
          This address is{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            {username}
          </Typography>
        </Alert>
      )}
    </>
  );
};
