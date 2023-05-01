import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { firebaseApp } from "utils/firebase";



 export class NoteAPI {
    static async create (formValues) {
       const response = await addDoc(collection(firebaseApp.db, "notes"),formValues);
       return {
        id: response.id,
        ...formValues,
       }
    }
    static async fetchAll () {
        const q = query(collection(firebaseApp.db,"notes"),orderBy("created_at","asc"));
        const response = await getDocs(q);
        return response.docs.map((document)=> {
        return {
            id:document.id,

        ...document.data() ,
        };
    })
 }
    static async deleteById (noteId) {
       deleteDoc(doc(firebaseApp.db,"notes",noteId))
    }
    static async UpdateById (id,values) {
        const query = doc(firebaseApp.db,"notes",id);
        const response = await updateDoc(query,values)
        return {
            id,
            ...values,
        }
    }

    static onShouldSyncNotes(onChange) {
        const q = query (collection(firebaseApp.db, "notes"))
        const unsubscribe= onSnapshot(q,(querySnapshoot)=>{
            const isUserPerformingChange= querySnapshoot.metadata.hasPendingWrites;
            if (!isUserPerformingChange){
                console.log("You are not synced with the notes collection");
                onChange();
            }
        });
        return unsubscribe;
    }
    
 }

