import { useState, useEffect, useRef } from "react";
import useComment from "./useComment";
import { IComment } from "../../../../../infrastructure/Models/Entity/IComment";
import useUserRating from "./UserRating";

interface OwnProps {
  EntityId: number;
  totalPages: number;
  initialComments: IComment[];
}

type Props = OwnProps;

const useOverpageComment = ({
  EntityId,
  totalPages,
  initialComments,
}: Props) => {
  const commentsData = useComment({ EntityId });
  const rating = useUserRating({ title: "", EntityId });
  const page = useRef(0);
  const [allComments, setAllComments] = useState<IComment[]>(initialComments);

  useEffect(() => {
    page.current = 1;
    return () => {
      if (observableRef.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (page.current > 1) {
      setAllComments(prevState => [...prevState, ...commentsData.comments]);
    }
    return () => {
      if (page.current === totalPages) {
        observer.current.disconnect();
      }
    };
  }, [commentsData.comments]);

  const loadMore = (pageIndex: number) => {
    commentsData.onPageChange({
      ...commentsData.pagination,
      PageIndex: pageIndex,
    });
  };

  const rootRef = useRef<HTMLDivElement>(null);
  const observableRef = useRef<HTMLDivElement>(null);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (page.current < totalPages) {
            page.current += 1;
            loadMore(page.current);
          }
        }
      },
      {
        root: rootRef.current,
      },
    ),
  );
  useEffect(() => {
    if (observableRef.current) {
      observer.current.observe(observableRef.current);
    }
    return () => {
      if (observableRef.current) {
        observer.current.unobserve(observableRef.current);
      }
    };
  }, [observableRef.current]);

  return {
    rating,
    allComments,
    rootRef,
    observableRef,
  };
};

export default useOverpageComment;
