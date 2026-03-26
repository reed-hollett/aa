export interface PressEntry {
  publication: string;
  date: string;
  headline: string;
  url: string;
  image: string;
}

const SQ = "https://images.squarespace-cdn.com/content/v1/51215fbae4b04a9f6b5db308";

export const pressEntries: PressEntry[] = [
  { publication: "Brick Underground", date: "August 2023", headline: "IKEA vs. Home Depot: Which should you choose for a NYC kitchen renovation?", url: "https://www.brickunderground.com/blog/2012/06/renovation_qs_ikea_versus_home_depot", image: `${SQ}/f54aae21-974b-4792-ba53-98901739260a/26-Brick-Underground-03.jpg` },
  { publication: "Domino", date: "June 2023", headline: "In This Dog Bed Designer\u2019s NYC Home, Even the Graphic Shower Tile Is Pup-Proof", url: "https://www.domino.com/design-inspiration/kingboy-dog-beds-founder-tribeca-loft/", image: `${SQ}/04736f7d-93b9-48bb-b692-8abb5197c6fa/25-domino-white-street.jpg` },
  { publication: "Financial Times", date: "July 2022", headline: "Shhh\u2026! Have you seen my secret room?", url: "https://www.ft.com/content/ad3644b3-a160-479c-956b-494f2e6651c4", image: `${SQ}/24964817-c338-4104-bd8c-d1b9e785d40c/23-Financial-Times-Secret-Room-Brown-Blasberg.jpg` },
  { publication: "Curbed", date: "May 2020", headline: "7 Interior Designers Share Their Go-To Sources for Affordable Sofas", url: "https://www.curbed.com/article/affordable-sofa-couch-online-brand-quality.html", image: `${SQ}/1590714255498-FO0JXV1FY4ZGL5ZE6L3D/21-Curbed-Online-Sofa-01.jpg` },
  { publication: "New York Magazine", date: "April 2020", headline: "The Best Sleeper Sofas, According to Interior Designers", url: "https://nymag.com/strategist/article/best-sleeper-sofas-pull-out-couches.html", image: `${SQ}/1590714198906-70STBH3T151Y5BV946N2/20-NY-Magazine-Sofa-02.jpg` },
  { publication: "Das Unger Magazin", date: "January 2020", headline: "The Green Issue", url: "#", image: `${SQ}/1590714176193-QJY4FUCHSIBO3QZSPT5G/19-Unger-Magazine-Germany.jpg` },
  { publication: "Brick Underground", date: "January 2020", headline: "How to save money on your NYC bathroom renovation", url: "https://www.brickunderground.com/improve/how-to-save-money-NYC-bathroom-renovation-vanity-soaking-tub-double-shower", image: `${SQ}/1589314314260-M7BQ1VK8DEZM3K8NP84V/18-Brick-Underground-02.jpg` },
  { publication: "Clever by Architectural Digest", date: "July 2019", headline: "High Design Airbnb Rentals We\u2019d Love to Call Home", url: "https://www.architecturaldigest.com/gallery/high-design-airbnb-rentals-wed-love-to-call-home", image: `${SQ}/1591219522171-61BEPDRRDUXT4VS1RZYZ/22-Clever-AD-02.jpg` },
  { publication: "Architectural Digest", date: "March 2019", headline: "Star Power Coast to Coast", url: "#", image: `${SQ}/1555948234684-JHRMK7324QZCLJ2OEY78/16-AD-Magazine-BB.jpg` },
  { publication: "Architectural Digest", date: "March 2019", headline: "Derek Blasberg\u2019s Manhattan Pad Brings Youthful Style Uptown", url: "https://www.architecturaldigest.com/story/derek-blasbergs-manhattan-pad-brings-youthful-style-uptown", image: `${SQ}/1555948234684-JHRMK7324QZCLJ2OEY78/16-AD-Magazine-BB.jpg` },
  { publication: "Vogue Living \u2013 Australia", date: "January 2019", headline: "Inside the $15.3 million Brooklyn home bought by Emily Blunt and John Krasinski", url: "https://www.vogue.com.au/vogue-living/design/inside-the-153-million-brooklyn-home-bought-by-emily-blunt-and-john-krasinski/image-gallery/d921087ec5108caf7652b8e9bf4cebfa", image: `${SQ}/1588018573191-VIQMEPDLRW033ZTPZ05Z/15-Vogue-Living-AU.jpg` },
  { publication: "Elle Decor \u2013 Espa\u00f1a", date: "November 2018", headline: "Un Piso Dise\u00f1ado Para Coleccionistas De Arte", url: "https://www.elledecor.com/es/casas/a25218264/piso-lujo-arte-brooklyn/", image: `${SQ}/1544485909242-RIWHJTZAKJRI7VV2NLXK/13-End-Decor-Spain.jpg` },
  { publication: "Wallpaper*", date: "November 2018", headline: "DDG launches townhouse inside a Beaux Arts building in Brooklyn", url: "https://www.wallpaper.com/architecture/the-standish-townhouse-171-columbia-heights-brooklyn-ddg-atelier-armbruster-new-york", image: `${SQ}/1588018545790-8IA4HJPZWGY6Y51M68NG/14-Wallpaper-Magazine.jpg` },
  { publication: "End Magazine", date: "June 2018", headline: "Mi Casa", url: "https://www.endmag.org/articles/2018/6/4/mi-casa", image: `${SQ}/1528753825368-KV9M88PLINUBVZ5T82HL/12-End-Magazine.jpg` },
  { publication: "Metropolis Magazine", date: "April 2018", headline: "Made to Endure", url: "#", image: `${SQ}/1525359527490-RMD2XHU4GJP8JY0BATE2/10-Metropolis-Print-Yaiza.jpg` },
  { publication: "Design Within Reach", date: "February 2018", headline: "Creating a unique space", url: "http://www.dwr.com/interiors-standish?lang=en_US", image: `${SQ}/1525360354697-AFHX5WTN6EXBP9Q9XFA8/09-Design-Within-Reach.jpg` },
  { publication: "Architectural Digest", date: "November 2017", headline: "DWR Gets In On the Model Unit Game", url: "https://www.architecturaldigest.com/story/dwr-model-unit-the-standish-brooklyn-heights", image: `${SQ}/1512154437919-9Y4OBSGM38KQ37DK3O9L/image-asset.jpeg` },
  { publication: "Dering Hall", date: "September 2017", headline: "Gorgeous Black and White Bathrooms", url: "https://deringhall.com/daily-features/contributors/dering-hall/gorgeous-black-and-white-bathrooms?slide=40", image: `${SQ}/1512155612687-J02SRVPWAITSDES8HR1K/image-asset.jpeg` },
  { publication: "Dering Hall", date: "August 2017", headline: "22 Must-See Closet Designs", url: "https://deringhall.com/daily-features/contributors/dering-hall/22-must-see-closet-designs?slide=20", image: `${SQ}/1528754323000-0HNGDCR5KEES17HBRFOT/03-Dering-Hall-Closet-Design-01.jpg` },
  { publication: "Dering Hall", date: "August 2017", headline: "34 Minimalist Kitchens", url: "https://deringhall.com/daily-features/contributors/dering-hall/34-minimalist-kitchens?slide=16", image: `${SQ}/1512157824049-GH4WUW9EK2J699B7KST1/image-asset.jpeg` },
  { publication: "Houzz Germany", date: "July 2017", headline: "Was wir in der Wohnk\u00fcche wollen: 8 Gr\u00fcnde f\u00fcr den K\u00fcchentresen", url: "https://www.houzz.com/ideabooks/88482773/list/was-wir-in-der-wohnkueche-wollen-8-gruende-fuer-den-kuechentresen", image: `${SQ}/1512159656878-LNPYPAK5H1GZ1G4LSTOZ/image-asset.jpeg` },
  { publication: "Dwell", date: "April 2017", headline: "7 Brooklyn Row Houses Renovations", url: "https://www.dwell.com/article/7-brooklyn-row-houses-renovations-c1b07347", image: `${SQ}/1512158772021-6TZLK196BN5822GWMRT2/image-asset.jpeg` },
  { publication: "Design Milk", date: "January 2017", headline: "An Industrial Loft in TriBeCa with a Monochromatic Palette", url: "http://design-milk.com/an-industrial-loft-in-tribeca-with-a-monochromatic-palette/", image: `${SQ}/1512158952469-1XPWLA4JQ7XA0A3H1Y8W/image-asset.jpeg` },
  { publication: "Dwell Magazine", date: "September 2016", headline: "Dwell Digital World", url: "#", image: `${SQ}/1512159534109-HOMHFHR9VDFV0R12MXAF/08-Dwell-Print-Digital-World.jpg` },
];
