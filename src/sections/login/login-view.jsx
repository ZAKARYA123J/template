import { useRef } from 'react';
import React,{useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'src/routes/hooks';
import { bgGradient } from 'src/theme/css';
import Logo from 'src/components/logo';

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    banque: '',
    montant: '',
    aLOrdreDe: '',
    faitA: '',
    date: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleClick = () => {
    router.push('/dashboard');
  };

  const renderForm = (
    <Stack spacing={3}>
      {Object.keys(formValues).map((key) => (
        <TextField
          key={key}
          name={key}
          id={key}
          label={key === 'aLOrdreDe' ? "A l'ordre de " : key}
          variant="outlined"
          onChange={handleChange}
        />
      ))}
      <Button onClick={handlePrint}>Print this out!</Button>
    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          {renderForm}
        </Card>
        <div style={{ display: 'none' }}>
          <div ref={componentRef}>
            <pre>
              {Object.entries(formValues).map(([key, value]) => ` ${value}`).join('\n')}
            </pre>
          </div>
        </div>
      </Stack>
    </Box>
  );
}
