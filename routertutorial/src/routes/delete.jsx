import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function deleteUser({params}) {
    await deleteContact(params.contactId);
    return redirect("/");
}