import React, { useState, useEffect } from "react";
import Axios from "axios";

const Testing = () => {

  // const [info, setInfo] = useState();

  // useEffect(() => {
  //   fetch('https://api.artic.edu/api/v1/artworks')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setInfo(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {});

  //   console.log(info);
  // }, []);
  // return (
  //   <>
  //     {info?.data.map((image, idx) => {
  //       return <div key={idx}>hhhhfhhfhf</div>;
  //     })}
  //   </>
  // );
  const [info, setInfo] = useState();
  const [url, setUrl] = useState("")
  const static_url = "/full/843,/0/default.jpg"

  useEffect(() => {
    Axios.get("https://api.artic.edu/api/v1/artworks")
    .then((res) => {
      res.data.data.length = 7
      setInfo(res.data.data);
      setUrl(res.data.config.iiif_url)
      console.log(res.data.data);
      console.log(res.data.config.iiif_url);
    });

  }, []);
  return (
    <>
      {
        info?.map((image, idx) => {
         
          return( 
            <div>
          <img src={`${url}/${image.image_id}${static_url}`} alt="" />
          <p>{image.title}</p>
           </div>
          )
         
        })
        
      }
     
    </>
  );
};

export default Testing;
