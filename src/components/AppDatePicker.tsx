import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DatePicker,
  DatePickerProps,
  DateValidationError,
  LocalizationProvider,
  PickersCalendarHeaderProps,
} from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { css } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import { subMonths } from "date-fns/subMonths";
import { format } from "date-fns/format";
import { addMonths } from "date-fns";
import { useState } from "react";

const style = {
  container: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "4px",
    marginRight: "16px",
    marginLeft: "16px",
  }),
};

function CalendarHeader(props: PickersCalendarHeaderProps<Date>) {
  const currentMonth = props.currentMonth;
  return (
    <Box css={[style.container]}>
      <Box>
        <IconButton
          onClick={() => {
            props.onMonthChange(subMonths(currentMonth, 1), "right");
          }}
        >
          <ArrowLeftIcon />
        </IconButton>
      </Box>
      <Box>{format(props.currentMonth, "yyyy年MM月")}</Box>
      <Box>
        <IconButton
          onClick={() => {
            props.onMonthChange(addMonths(currentMonth, 1), "left");
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

// 他のエラーメッセージは必要に応じて
export function dateErrorMessage(error: DateValidationError, value?: Date | null): string | undefined {
  if (!error) return undefined;

  switch (error) {
    case "invalidDate":
      return "不正な日付です";
    default:
      return "選択できません";
  }
}

export default function AppDatePicker(props: DatePickerProps<Date>) {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  return (
    <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
      <DatePicker
        {...props}
        format="yyyy/MM/dd"
        onError={(error, value) => {
          setErrorMessage(dateErrorMessage(error, value));
        }}
        slots={{ calendarHeader: CalendarHeader }}
        slotProps={{
          field: { clearable: true },
          textField: { helperText: errorMessage },
        }}
      />
    </LocalizationProvider>
  );
}
