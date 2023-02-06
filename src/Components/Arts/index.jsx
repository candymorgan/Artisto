import React from "react";
import "./Arts.css";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Frame from '../../Frame.svg'
import Arrow2 from '../../Arrow2.svg'
import { Display } from "../Context";
// import Group7 from '../../Group7.svg'


function Arts() {
  const [info, setInfo] = useState();
  const [url, setUrl] = useState("")
  const static_url = "/full/843,/0/default.jpg"
  const [search, setSearch] = useState("")
  const { setSingleImage, setDescription } = useContext(Display)

  useEffect(() => {

    Axios.get("https://api.artic.edu/api/v1/artworks")
      .then((res) => {
        res.data.data.length = 6
        setInfo(res.data.data);
        setUrl(res.data.config.iiif_url)
        console.log(res.data.data);
        // console.log(res.data.config.iiif_url);
      });

  }, []);


  const handleClick = (singleId) => {
    const singleImageUrl = `${url}/${singleId.image_id}${static_url}`
    setSingleImage(singleImageUrl)
    setDescription(singleId)
  }



  return (
    <>
      <div className="generalContainer">
        <div className="writeUpAndSearchDiv">
          <div className="collectionWriteUp">
            <div>
              <h1>Art in the collection</h1>
              <div>
                <p>
                  Browse a curated selection of art around the world, including
                  museum exhibitions, gallery openings, upcoming and many more
                </p>
              </div>
            </div>
          </div>

          <div className="searchInput">
            <div><img src={Frame} alt="" /></div>
            <div><input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} /></div>

          </div>
        </div>


        <div className="artsContainer">

          {info?.filter(image => image.title.toLowerCase().includes(search))
            .map((image) => (


              <Link to="/nextpage">

                <div className="arts">
                  <div onClick={() => handleClick(image)}>
                    <div className="images">
                      <img src={`${url}/${image.image_id}${static_url}`} alt=" " />
                    </div>
                    <div className="imageDescription">
                      <h4>{image.title}</h4>
                      <p>
                        {`${image.date_start} - ${image.date_end}`}
                        <span>
                          <br />
                          {image.artist_display}
                        </span>

                      </p>
                    </div>
                  </div>
                </div>


              </Link>


            ))}
        </div>



        <div className="explore1">
          <div className="yellowContainer3"></div>
          <div className="whiteContainer3">
            <h3>Explore more</h3>
            <div><img src={Arrow2} alt="" className="fward" /></div>
          </div>
        </div>

      </div>
    </>

  );
}


export default Arts;
