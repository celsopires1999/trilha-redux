import React from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';


function App() {
  return (
    <Stack spacing={2} direction="row" margin={2}>
      <Button variant="contained" color="primary">
          Hello World
      </Button>
    </Stack>
  );
}

export default App;
