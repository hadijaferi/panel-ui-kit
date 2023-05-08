import {ELEMENTS} from "../Constants/Dom/ELEMENTS";

export default function goToCommentSection() {
    const getOffset = (el: any) => {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }
    const marginTop = (document.getElementById(ELEMENTS.HEADER)?.clientHeight ?? 0) + (document.getElementById(ELEMENTS.SCROLL_TAB_PDP_SDP)?.clientHeight ?? 0);
    const commentElement = document.getElementById(ELEMENTS.SECTION_COMMENT);
    window.scrollTo({
        top: (getOffset(commentElement).top ?? 0) - marginTop,
        behavior: "smooth",
    })
}
