import React, { useEffect, useState } from "react";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchCollections() {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        if (!response.ok) {
          throw new Error("Failed to fetch collections");
        }

        const data = await response.json();
        console.log(data);
        setCollections(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCollections();
  }, []);

  <OwlCarousel
  className="owl-theme"
  loop
  margin={20}
  nav
  responsive={{
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 },
  }}
>
  {collections.map((collection) => (
    <div className="nft_coll" key={collection.id}>
      <div className="nft_wrap">
        <Link to={`/item-details/${collection.id}`}>
            <img src={collection.nftImage} className="lazy img-fluid" alt="" />
        </Link>
        </div>
        <div className="nft_coll_pp">
        <Link to={`/author/${collection.authorId}`}>
            <img className="lazy pp-coll" src={collection.authorImage} alt="" />
        </Link>
        <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
        <Link to={`/explore/${collection.nftId}`}>
            <h4>{collection.title}</h4>
        </Link>
        <span>ERC-{collection.code}</span>
        </div>
    </div>
  ))}
</OwlCarousel>
};

export default HotCollections;
