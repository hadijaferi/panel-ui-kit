import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useDoor from "./useDoor";
import { Sections } from "../Models/IContext";
import { mallContext } from "../Container";

const useNavigate = () => {
  const router = useRouter();
  const contextMall = useContext(mallContext);
  const door = useDoor();
  const Navigate = (section: Sections, query?: string) => {
    if (section === "searchMall") {
      router.push(`mall/?floor=${query}`, undefined, { shallow: true }).then();
      door.toggle(true);
    } else {
      router.back();
      door.toggle(true);
      setTimeout(() => {
        contextMall.setSection("floors");
      }, 1500);
      setTimeout(() => {
        door.toggle(false);
      }, 3000);
    }
    setTimeout(() => {
      contextMall.setSection(section);
    }, 1500);
    setTimeout(() => {
      door.toggle(false);
    }, 3000);
  };
  useEffect(() => {
    router.beforePopState(history => {
      if (history.as === "/mall") {
        door.toggle(true);
        setTimeout(() => {
          contextMall.setSection("floors");
        }, 1500);
        setTimeout(() => {
          door.toggle(false);
        }, 3000);
      }
      return true;
    });
  }, []);

  return {
    Navigate,
    Section: contextMall.section,
  };
};

export default useNavigate;
