import { NoteAPI } from "API/note.api";
import { TextCard } from "components/TextCard/TextCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "store/notes/notes-slice";
import s from "./style.module.css";

export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function deleteNote_(note) {
    if (window.confirm("Delete note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              // className={`card ${note.name}`}
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
