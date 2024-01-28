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
  PaperProps,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaperWithFooter, defaultNoOptionsText, defaultRenderInput } from "@/components/AutocompleteHelper";

type FooterComponentType = {
  openDialogEventHandler: () => void;
};

function FooterComponent(props: FooterComponentType) {
  const { openDialogEventHandler } = props;
  const preventEventHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ p: 1 }}>
        {/* リンクをクリックするとマウスダウンが走り、Optionリストが閉じるのでイベントを停止する */}
        <Button onMouseDown={preventEventHandler} onClick={openDialogEventHandler}>
          ダイアログを開く
        </Button>
        <Link href="/hello" onMouseDown={preventEventHandler}>
          Hello
        </Link>
      </Box>
    </>
  );
}

export default function AutoCompletePage() {
  const userRouter = useRouter();
  const values: { id: number; label: string }[] = [];
  for (let i = 0; i < 20; i++) {
    values.push({ id: i, label: `option label ${i}` });
  }

  const [selectLabel, setSelectLabel] = useState<string>();
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <Box sx={{ mt: 2, ml: 2, width: "300px" }}>
      <Box>
        selected label is <span style={{ fontWeight: "bold" }}>{selectLabel ?? "none"}</span>
      </Box>
      <Autocomplete
        options={values}
        renderInput={defaultRenderInput}
        noOptionsText={defaultNoOptionsText}
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.id}
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
        PaperComponent={(props) => {
          return (
            <PaperWithFooter
              {...props}
              footer={
                <FooterComponent
                  openDialogEventHandler={() => {
                    setShowDialog(true);
                  }}
                />
              }
            />
          );
        }}
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
