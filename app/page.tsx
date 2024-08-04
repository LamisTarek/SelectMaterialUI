import Image from "next/image";
import styles from "./page.module.css";
import CustomSelect from "@/components/CustomSelect";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Custom Select with Colored Arrow
      </Typography>
      <CustomSelect />
    </Container>
  );
}
