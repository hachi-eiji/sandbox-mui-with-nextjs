import { DatePicker, jaJP, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ja";

export default function DateFieldPage() {
  return (
    <LocalizationProvider
      adapterLocale="ja"
      localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
      dateAdapter={AdapterDayjs}
    >
      <DatePicker label="test" format="YYYY/MM/DD" />
    </LocalizationProvider>
  );
}
