import { Button, Input, Stack } from '@mui/material';

export const Search: React.FC = () => {
  return (
    <Stack direction={'row'} spacing={2} sx={{ marginY: '50px' }}>
      <Input placeholder="0x53c74fb1e05c968b7b021484931f083aad0d3a3bfc97f36f0b11d1b7e1a4af6e" />
      <Button variant="contained">Search</Button>
    </Stack>
  );
};
