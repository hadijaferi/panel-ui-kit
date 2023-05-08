import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { ILayouts } from "../../../src/infrastructure/Models/Theme/ILayouts";
import Comments from "../../../src/Modules/Profile/Components/Comments/Comments";
import ProfilePageService from "../../../src/Modules/Profile/Services/ProfilePageService";
import { ICommentsResponse } from "../../../src/Modules/Profile/Models/Comments/ICommentsResponse";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      Layout: ILayouts.WEBSITE,
    },
  };
};

const ProfileComments = () => {
  const [items, setItems] = useState<ICommentsResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    ProfilePageService.getComments({
      ProductReviewsType: 1,
      PageIndex: 1,
      PageSize: 1000,
    })
      .then(({ data: { Data } }) => {
        setItems(Data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <Comments comments={items} isLoading={loading} />
    </div>
  );
};
export default ProfileComments;
