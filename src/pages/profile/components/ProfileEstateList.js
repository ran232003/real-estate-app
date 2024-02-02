import React from "react";
import ProfileEstateItem from "./ProfileEstateItem";

const ProfileEstateList = (props) => {
  const { estates } = props;
  return (
    <div className="ProfileEstateList">
      <h2>Your Estates</h2>
      {estates.length > 0 ? (
        estates.map((item) => {
          console.log(item, "item");
          return <ProfileEstateItem estate={item} />;
        })
      ) : (
        <h3>No Results</h3>
      )}
    </div>
  );
};

export default ProfileEstateList;
