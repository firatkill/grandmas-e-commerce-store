import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
function NotFoundPage() {
  return (
    <div className={"NotFoundPage__Container"}>
      <HiOutlineEmojiSad className={"NotFoundPage__Emoji"} />
      <h1 className={"NotFoundPage__Text"}>
        Sorry, the page you're looking for is not valid or forbidden until you
        log in !
      </h1>
    </div>
  );
}

export default NotFoundPage;
