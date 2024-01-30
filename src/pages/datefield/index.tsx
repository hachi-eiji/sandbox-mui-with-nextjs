import { useState } from "react";
import { Box } from "@mui/material";
import AppDatePicker, { dateErrorMessage } from "@/components/AppDatePicker";
import { format } from "date-fns/format";

export default function DateFieldPage() {
  const [error, setError] = useState<string>();
  const [selectDate, setSelectDate] = useState<Date | undefined | null>(new Date());

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "350px" }}>
      <Box>{selectDate && format(selectDate, "yyyy年MM月dd日")}</Box>
      <Box>{error}</Box>
      <AppDatePicker
        defaultValue={selectDate}
        onChange={(value, context) => {
          setError(dateErrorMessage(context.validationError));
          if (!context.validationError) {
            setSelectDate(value);
          } else {
            setSelectDate(null);
          }
        }}
      />
    </Box>
  );
}
