import {
  Card,
  CardActionArea,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        width="100%"
        marginY="8px"
      >
        <Typography fontWeight="bold" variant="h4">
          Seleziona un tema
        </Typography>
        <Card sx={{ width: '50%', borderTop: '4px solid teal' }}>
          <CardActionArea onClick={() => navigate('/13aprile')}>
            <CardHeader title="13 Aprile" />
          </CardActionArea>
        </Card>
        <Card sx={{ width: '50%', borderTop: '4px solid teal' }}>
          <CardActionArea onClick={() => navigate('/23giugno')}>
            <CardHeader title="23 Giugno" />
          </CardActionArea>
        </Card>
      </Stack>
    </>
  )
}
