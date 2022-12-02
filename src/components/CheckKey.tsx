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
  
  export const CheckKey = ({ contract }: any) => {
    const [isRevert, setIsRevert] = useState<boolean>(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data: any) => {
        await contract.claimKey(data.key, "PDO", {gasLimit: 1000000})
    }
      
  
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
            placeholder="The key to check"
            {...register('key', { required: true })}
          />
          <Button type={'submit'} variant="contained" sx={{ marginLeft: '10px' }}>
            Check
          </Button>
        </FormControl>
        {isRevert && 
        <Snackbar>
          <Alert severity="error">The key is not valid</Alert>
        </Snackbar>}
      </>
    );
  };
  