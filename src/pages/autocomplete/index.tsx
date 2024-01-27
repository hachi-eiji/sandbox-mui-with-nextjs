import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AutoCompletePage() {
  const userRouter = useRouter();
  const values: { id: number; label: string }[] = [];
  for (let i = 0; i < 20; i++) {
    values.push({ id: i, label: `option label ${i}` });
  }

  const [selectLabel, setSelectLabel] = useState<string>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const preventEventHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  };

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
        onClose={(event, reason) => {
          // なぜかonClose(blur)が2回走る...なんで？
          console.log(event, reason);
        }}
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
        PaperComponent={({ children, ...others }) => (
          <Paper {...others}>
            {/*40vh は MUIのコンポーネントのulのサイズと同じ高さ*/}
            <Box sx={{ maxHeight: "40vh" }}>{children}</Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              {/* リンクをクリックするとマウスダウンが走り、Optionリストが閉じるのでイベントを停止する */}
              <Button
                onMouseDown={preventEventHandler}
                onClick={() => {
                  setShowDialog(true);
                }}
              >
                ダイアログを開く
              </Button>
              <Link href="/hello" onMouseDown={preventEventHandler}>
                Hello
              </Link>
            </Box>
          </Paper>
        )}
      />
      <Dialog open={showDialog}>
        <DialogTitle>タイトル</DialogTitle>
        <DialogContent>
          <DialogContentText>移動しますか？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDialog(false);
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              setShowDialog(false);
              userRouter.push("/hello");
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
