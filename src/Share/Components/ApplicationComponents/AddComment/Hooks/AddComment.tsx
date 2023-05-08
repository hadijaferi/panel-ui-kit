import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AddCommentServices from "../Service";
import { IGetProductDetailsCommentsResponse } from "../Models/IGetProductDetailsCommentsResponse";

export interface ICommentContainerDesktopProps {
  title: string;
  description: string;
}

interface ISubmitCommentValues {
  title: string;
  description: string;
}

export interface IAddCommentReturn {
  setSignupSchema: () => any;
  submitComment: (value: ISubmitCommentValues) => any;
  onChangeCheckbox: () => void;
  onChangeBottomSheet: (val: boolean) => void;
  onChangeRating: (val: number) => void;
  getProductDetailsComment: () => any;
  isLoading: boolean;
  isChecked: boolean;
  bottomSheetOpen: boolean;
  setBottomSheetOpen: (
    value: ((prevState: boolean) => boolean) | boolean,
  ) => void;
  rate: number;
  product: IGetProductDetailsCommentsResponse | undefined;
  goBackAction: () => void;
}

interface IComments {
  productId?: string | number;
}

const AddComments = (props: IComments): IAddCommentReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [rate, setRate] = useState<number>(0);
  const [product, setProduct] = useState<IGetProductDetailsCommentsResponse>();

  const setSignupSchema = () => {
    const SignupSchema = Yup.object().shape({
      title: Yup.string().min(1).max(50).required("لطفا عنوان را وارد کنید"),
      description: Yup.string()
        .min(1)
        .max(400)
        .required("لطفا توضیحات را وارد کنید"),
    });
    return SignupSchema;
  };

  const onChangeBottomSheet = (val: boolean) => {
    setBottomSheetOpen(val);
  };
  const getProductDetailsComment = () => {
    AddCommentServices.getProductDetailsComments(Number(props?.productId))
      .then(response => {
        if (response.data.IsSuccess) {
          setProduct(response.data.Data);
        }
      })
      .catch(_err => {});
  };
  useEffect(() => {
    getProductDetailsComment();
  }, []);
  const submitComment = (values: ISubmitCommentValues) => {
    if (!isLoading) {
      setIsLoading(true);
    }
    AddCommentServices.submitAddComments({
      ProductId: Number(props?.productId),
      Rating: rate,
      ReviewText: values.description,
      Title: values.title,
      SendAnonymously: isChecked,
    })
      .then(_r => {
        setIsLoading(false);
      })
      .catch(_err => {
        setIsLoading(false);
      });
  };

  const onChangeRating = (val: number) => {
    setRate(val);
  };
  const onChangeCheckbox = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  const router = useRouter();

  const goBackAction = () => {
    const backUrl = router.query.back as string;

    if (backUrl && backUrl !== "") {
      router.push(backUrl);
    } else {
      router.back();
    }
  };
  return {
    setSignupSchema,
    submitComment,
    onChangeRating,
    getProductDetailsComment,
    onChangeCheckbox,
    onChangeBottomSheet,
    setBottomSheetOpen,
    isLoading,
    isChecked,
    rate,
    product,
    bottomSheetOpen,
    goBackAction,
  };
};

export default AddComments;
