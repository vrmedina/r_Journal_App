import { useDispatch, useSelector } from "react-redux";
import { startCreateNote } from "../../store/journal/thunks";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, activeNote } = useSelector((state) => state.journal);

  const onClickCreateNote = () => {
    dispatch(startCreateNote());
  };

  return (
    <JournalLayout>
      {activeNote ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickCreateNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "primary.main",
          ":hover": { backgroundColor: "primary.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
