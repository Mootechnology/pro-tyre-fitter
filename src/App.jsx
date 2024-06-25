import React, { useEffect } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import FAQS from "./faqs";
import BlogPage from "./blogs";
import ContactPage from "./Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import MobileTyreFitting from "./MobileTyreFitting";
import MobileTyreRepair from "./MobileTyreRepair";
import TyreReplacement from "./TyreReplacement";
import FlatTyre from "./FlatTyre";
import BurstTyre from "./BurstTyre";
import PartWornTyre from "./PartWornTyre";
import JumpStart from "./JumpStart";
import LocknutWheel from "./LocknutWheel";
import MobileBreakdown from "./MobileBreakdown";
// import RegisterPage from "./register";
import ScrollToTop from "react-scroll-to-top";
import Luton from "./areas/Luton";
import StAlbans from "./areas/StAlbans";
import Harlow from "./areas/Harlow";
import HemelHempStead from "./areas/Hemel HempStead";
import Cheshunt from "./areas/Cheshunt";
import Codicote from "./areas/Codicote";
import LondonColney from "./areas/London Colney";
import KingsLangley from "./areas/Kings Langley";
import WheatHampstead from "./areas/WheatHampstead";
import AbbotsLangley from "./areas/Abbots Langley";
import Broxbourne from "./areas/Broxbourne";
import Borehamwood from "./areas/Borehamwood";
import SouthMimms from "./areas/South Mimms";
import Cuffley from "./areas/Cuffley";
import Ware from "./areas/Ware";
import Hatfield from "./areas/Hatfield";
import PottersBar from "./areas/PottersBar";
import Ilford from "./areas/Ilford";
import Edmonton from "./areas/Edmonton";
import Wangsted from "./areas/Wangsted";
import Chingford from "./areas/Chingford";
import WoodfordGreen from "./areas/WoodfordGreen";
import Barnet from "./areas/Barnet";
import Woodgreen from "./areas/Woodgreen";
import Hoddesdon from "./areas/Hoddesdon";
import Blog1 from "./blog1";
import ErrorPage from "./ErrorPage";
import { CanonicalProvider } from "./canonical";

const App = () => {
  useEffect(() => {
    if (window.location.hostname.startsWith("www.")) {
      window.location.replace(
        `https://${window.location.hostname.substring(4)}${
          window.location.pathname
        }${window.location.search}`
      );
    }
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      <ScrollToTop smooth color="#18bd9d" />

      <Router>
        <Navbar />
        <CanonicalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/mobile-tyre-fitting" element={<MobileTyreFitting />}/>
            <Route path="/services/mobile-tyre-repair" element={<MobileTyreRepair />}/>
            <Route path="/services/tyre-replacement" element={<TyreReplacement />}/>
            <Route path="/services/flat-tyre" element={<FlatTyre />} />
            <Route path="/services/burst-tyre" element={<BurstTyre />} />
            <Route path="/services/part-worn-tyre" element={<PartWornTyre />} />
            <Route path="/services/jumpstart" element={<JumpStart />} />
            <Route path="/services/locknut-wheel-removal" element={<LocknutWheel />}/>
            <Route path="/services/mobile-breakdown" element={<MobileBreakdown />}/>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/areas/luton" element={<Luton />} />
            <Route path="/areas/st-albans" element={<StAlbans />} />
            <Route path="/areas/harlow" element={<Harlow />} />
            <Route path="/areas/hemelhempstead" element={<HemelHempStead />} />
            <Route path="/areas/cheshunt" element={<Cheshunt />} />
            <Route path="/areas/codicote" element={<Codicote />} />
            <Route path="/areas/londoncolney" element={<LondonColney />} />
            <Route path="/areas/kingslangley" element={<KingsLangley />} />
            <Route path="/areas/wheathampstead" element={<WheatHampstead />} />
            <Route path="/areas/abbotslangley" element={<AbbotsLangley />} />
            <Route path="/areas/broxbourne" element={<Broxbourne />} />
            <Route path="/areas/borehamwood" element={<Borehamwood />} />
            <Route path="/areas/southmimms" element={<SouthMimms />} />
            <Route path="/areas/cuffley" element={<Cuffley />} />
            <Route path="/areas/ware" element={<Ware />} />
            <Route path="/areas/hatfield" element={<Hatfield />} />
            <Route path="/areas/potters-bar" element={<PottersBar />} />
            <Route path="/areas/ilford" element={<Ilford />} />
            <Route path="/areas/edmonton" element={<Edmonton />} />
            <Route path="/areas/wangsted" element={<Wangsted />} />
            <Route path="/areas/chingford" element={<Chingford />} />
            <Route path="/areas/woodford-green" element={<WoodfordGreen />} />
            <Route path="/areas/barnet" element={<Barnet />} />
            <Route path="/areas/woodgreen" element={<Woodgreen />} />
            <Route path="/areas/hoddesdon" element={<Hoddesdon />} />
            {/* Blog */}
            <Route
              path="/blogs/tips-tor-choosing-the-right-mobile-tyre-fitting-service"
              element={<Blog1 />}
            />
          </Routes>
        </CanonicalProvider>
        <div className="whatsapp__icon">
          <a href="https://wa.me/+447441427933">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <Footer />
      </Router>
    </>
  );
};
export default App;