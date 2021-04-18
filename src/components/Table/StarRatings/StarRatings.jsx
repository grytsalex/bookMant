import React from "react";
import { Box } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

export const StarRatings = () => {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

  return (
    <Box>
      <Rating
        name="hover-feedback"
        value={value}
        size="small" 
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </Box>
  );
};
