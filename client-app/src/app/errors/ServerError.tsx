import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

export default function ServerError() {
    const { state } = useLocation<any>();

    return (
        <Container>
            <Paper>
                {state?.error ? (
                        <>
                            <Typography variant="h3" color="error" gutterBottom>{state.error.title}</Typography>
                            <Divider />
                            <Typography>{state.error.detail || 'Internal server error'}</Typography>
                        </>
                    ) : (
                        <Typography variant="h5" gutterBottom>Server error</Typography>
                    )
                }
                <Button component={NavLink} to='/catalog' variant="contained">Go back to the store</Button>
            </Paper>
        </Container>
    );
}