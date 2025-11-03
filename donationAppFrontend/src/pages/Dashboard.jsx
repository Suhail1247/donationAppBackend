import { Container, Typography } from "@mui/material";
import DonationCard from "../components/DonationCard";

const Dashboard = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Active Donation Campaigns
      </Typography>
      <DonationCard title="Feed the Hungry" description="Help us provide meals to families in need." amount={500} />
      <DonationCard title="Education for All" description="Sponsor education for underprivileged children." amount={1000} />
    </Container>
  );
};

export default Dashboard;
