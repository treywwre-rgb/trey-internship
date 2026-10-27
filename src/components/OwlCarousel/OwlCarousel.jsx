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
      {/* Your existing NFT card JSX */}
    </div>
  ))}
</OwlCarousel>