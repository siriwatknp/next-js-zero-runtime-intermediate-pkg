import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "@/lib/Link";

export default function Home() {
  const props = { slug: "/blog" };
  return (
    <React.Fragment>
      <Button
        component={Link}
        aria-describedby={`describe-${props.slug}`}
        href={`/blog/${props.slug}`}
        id={`describe-${props.slug}`}
        endIcon={<KeyboardArrowRightRoundedIcon />}
        sx={{ mt: 1 }}
      >
        Read more
      </Button>
    </React.Fragment>
  );
}
