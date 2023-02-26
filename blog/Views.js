import React, { useState, useEffect } from "react";
function Views(props) {
  const [views, setViews] = useState("X");
  useEffect(async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: props.name,
    });

    let response = await fetch(
      "https://server-ten-iota.vercel.app/auth/views",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    console.log(data.views);
    setViews(data.views);

    // console.log(props.name, views);
  }, []);

  return <p style={{fontSize:"medium" , color:"#1877F2", display:"inline-block"}}>{views}</p>;
}

export default Views;
