import Grid from "@mui/material/Grid2";

export const PruebaGrid = () => {
  return (
    <div>
      <Grid container={true}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <h2 style={{ backgroundColor: "red" }}>Caja 1</h2>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <h2 style={{ backgroundColor: "blue" }}>Caja 2</h2>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <h2 style={{ backgroundColor: "green" }}>Caja 3</h2>
        </Grid>
      </Grid>
    </div>
  );
};
