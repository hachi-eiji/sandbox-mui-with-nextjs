import { Autocomplete, Box, TextField } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function AutoCompletePage() {
  const values: { id: number; label: string }[] = [];
  for (let i = 0; i < 20; i++) {
    values.push({ id: i, label: `option label ${i}` });
  }

  const [selectLabel, setSelectLabel] = useState<string>();

  return (
    <Box sx={{ mt: 2, ml: 2, width: "300px" }}>
      <Box>
        selected label is <span style={{ fontWeight: "bold" }}>{selectLabel ?? "none"}</span>
      </Box>
      <Autocomplete
        size="small"
        options={values}
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.id}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} placeholder="select opion" />}
        onChange={(event, value, reason) => {
          switch (reason) {
            case "selectOption":
              setSelectLabel(value?.label);
              break;
            case "clear":
              setSelectLabel(undefined);
              break;
            default:
            //none
          }
        }}
      />
    </Box>
  );
}
