import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  //bigShoeImg - it's current img, that is displayed in the main window.
  //imgURL.bigShoe - it's img, that is displayed, if user clicked in current card
  //logic: when we clicked in card and that is not yet active in the main window, we call the function "changeBigShoeImage(which is a prop setBigShoeImg) and pass the URL of the new image to it"
  const handleCLick = () => {
    //if current bigShoeImg not equal
    //img, which find in object current smalImg (imgURL.bigShoe)
    if (bigShoeImg !== imgURL.bigShoe) {
      // then called function updated state and send it in new URL.
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleCLick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
