import { Container, Typography } from "@mui/material";

const AdminPanel = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography variant="body1">Manage campaigns and track payments here.</Typography>
    </Container>
  );
};

export default AdminPanel;
