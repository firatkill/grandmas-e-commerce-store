import React from "react";
import { useParams } from "react-router-dom";

function CompanyPages() {
  const params = useParams();
  const containerStyle = {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    width: "50%",
    margin: "auto",
    "justify-content": "space-around",
  };

  const headerStyle = { margin: "0" };
  const paraStyle = { width: "80%", "text-align": "center" };
  console.log(params.pageName);
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{params.pageName.toUpperCase()}</h1>
      <hr />
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta,
        ligula ut iaculis lacinia, ipsum ipsum lacinia nisl, eu rutrum ipsum
        elit eget dui. Praesent interdum urna sed sagittis ultricies. Duis lorem
        nulla, consectetur nec ipsum et, pulvinar auctor velit. Ut et facilisis
        ipsum, at rhoncus velit. Phasellus quis nibh luctus, feugiat metus quis,
        pharetra neque. Praesent sed nibh ac sapien volutpat convallis. Quisque
        fermentum tristique arcu, in sodales ipsum sollicitudin non. Curabitur
        dictum, odio eu malesuada dapibus, nibh nibh aliquet ante, eu mattis
        tortor nulla nec erat. Aenean commodo felis sagittis, tincidunt nulla
        id, suscipit orci. Ut aliquet imperdiet condimentum. Aenean pellentesque
        pharetra lacus, non iaculis velit finibus a. Donec ante dolor, hendrerit
        ac bibendum dapibus, aliquam at lacus. Sed a aliquam libero. Nunc ut
        sapien vel neque luctus gravida. Vestibulum vitae vulputate quam. Nam
        facilisis hendrerit purus vitae molestie. Integer euismod finibus justo,
        at porta augue gravida ac. Nam eget elit metus. Fusce pulvinar elementum
        imperdiet.
      </p>
    </div>
  );
}

export default CompanyPages;
