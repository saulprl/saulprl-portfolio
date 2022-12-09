import { lazy, memo, Suspense } from "react";
import { Avatar, Box, Skeleton, Typography, useTheme } from "@mui/material";

import saulprlPic from "../../assets/pic-squared.jpg";

const Socials = lazy(() => import("./Socials"));

const Presentation = () => {
  const theme = useTheme();

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const avatar = (
    <Avatar
      alt="Saúl Ramos"
      src={saulprlPic}
      imgProps={{ loading: "lazy" }}
      sx={{
        width: { xs: "170px", sm: "220px" },
        height: { xs: "170px", sm: "220px" },
        margin: "auto",
        mt: "8px",
        mr: "8px",
        border: theme.palette.border.default,
        transition: "border 250ms linear",
      }}
    />
  );

  return (
    <>
      <Typography variant="h5" textAlign="center">
        Saúl Ramos Laborín
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center" },
        }}
      >
        <Box>{avatar}</Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-around",
            background: theme.palette.background.default,
            maxWidth: "180px",
            // mx: "auto",
            mt: { sm: "8px" },
            pt: "2px",
            pb: "2px",
            borderRadius: "6px",
            border: theme.palette.border.default,
            transition: "all 250ms linear",
          }}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                  height: { xs: "130px", sm: "40px" },
                  width: { xs: "40px", sm: "130px" },
                }}
              />
            }
          >
            <Socials
              iconColor={iconColor}
              hoverColor={theme.palette.info.main}
            />
          </Suspense>
        </Box>
      </Box>
    </>
  );
};

export default memo(Presentation);
