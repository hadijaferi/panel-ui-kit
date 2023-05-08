import { LINKS } from "../../Constants/LINKS";

export default function formatVitrinLink(username: string, page?: string) {
  return (
    LINKS.VITRIN.replace("[username]", username) + (page ? `?q=${page}` : "")
  );
}
