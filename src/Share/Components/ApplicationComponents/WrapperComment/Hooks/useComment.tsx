import { useEffect, useState } from "react";
import { IComment } from "../../../../../infrastructure/Models/Entity/IComment";
import { IPagination } from "../../../../../infrastructure/Models/IPagination";
import { CommentSortType } from "../../../../../infrastructure/Models/Enums/CommentSortType";
import CommentService from "../Services/Comment";

interface IUseComment {
  EntityId: number;
}

export interface IReturnUseComment {
  comments: IComment[];
  isLoading: boolean;
  pagination: IPagination;
  sortType: CommentSortType;
  onSortTypeChange: (newSortType: CommentSortType) => void;
  onPageChange: (newPagination: IPagination) => void;
}

const useComment = (props: IUseComment) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [sortType, setSortType] = useState<CommentSortType>(
    CommentSortType.Newest,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<IPagination>({
    MaxPageSize: 0,
    PageIndex: 1,
    PageSize: 10,
    TotalPages: 0,
    TotalItems: 0,
  });
  const getCommentList = (
    newPagination: IPagination = pagination,
    newSortType: CommentSortType = sortType,
  ) => {
    setIsLoading(true);
    CommentService.getCommentList({
      ProductId: props.EntityId,
      SortType: newSortType,
      ...newPagination,
    })
      .then((res: any) => {
        setIsLoading(false);
        setPagination(res.data.Data.Pagination);
        setComments(res.data.Data?.Items);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onPaginationChange = (newPagination: IPagination) => {
    setPagination(newPagination);
    getCommentList(newPagination);
  };

  const onSortTypeChange = (newSortType: CommentSortType) => {
    setSortType(newSortType);
    getCommentList(pagination, newSortType);
  };

  useEffect(() => {
    getCommentList();
  }, [props.EntityId]);

  const returnProps = (): IReturnUseComment => {
    return {
      comments,
      isLoading,
      pagination,
      sortType,
      onSortTypeChange,
      onPageChange: onPaginationChange,
    };
  };

  return returnProps();
};

export default useComment;
