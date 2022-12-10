import { lazy, Suspense } from "react";

import { IconButton, Skeleton, Tooltip } from "@mui/material";

const EmailIcon = lazy(() => import("@mui/icons-material/Email"));
const GitHubIcon = lazy(() => import("@mui/icons-material/GitHub"));
const TwitterIcon = lazy(() => import("@mui/icons-material/Twitter"));

const Socials = ({ iconColor, hoverColor }) => {
  return (
    <>
      <Tooltip title="Twitter">
        <IconButton
          aria-label="twitter.com"
          onClick={() => window.open("https://twitter.com/saulpxrl", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ height: "24px", width: "24px" }}
              />
            }
          >
            <TwitterIcon sx={{ transition: "color 275ms linear" }} />
          </Suspense>
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          aria-label="github.com"
          onClick={() => window.open("https://github.com/saulprl", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ height: "24px", width: "24px" }}
              />
            }
          >
            <GitHubIcon sx={{ transition: "color 275ms linear" }} />
          </Suspense>
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton
          aria-label="e-mail"
          onClick={() => window.open("mailto:saulramos378@gmail.com", "_blank")}
          sx={{
            color: iconColor,
            "&.MuiIconButton-root:hover": { color: hoverColor },
          }}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ height: "24px", width: "24px" }}
              />
            }
          >
            <EmailIcon sx={{ transition: "color 275ms linear" }} />
          </Suspense>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Socials;
