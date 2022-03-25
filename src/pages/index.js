import Home01 from "./Home";
// import Home08 from "./Home08";
import Explore from "./Explore";
// import LiveAuctions from "./LiveAuctions";
// import ItemDetails01 from "./ItemDetails01";
// import ItemDetails02 from "./ItemDetails02";
import Activity from "./Activity";
// import Blog from "./Blog";
// import BlogDetails from "./BlogDetails";
// import HelpCenter from "./HelpCenter";
// import Authors01 from "./Authors01";
// import Authors02 from "./Authors02";
// import WalletConnect from "./WalletConnect";
// import CreateItem from "./CreateItem";
// import EditProfile from "./EditProfile";
// import Ranking from "./Ranking";
// import Login from "./Login";
// import SignUp from "./SignUp";
import NoResult from "./NoResult";
// import FAQ from "./FAQ";
import Contact from "./Contact";


const routes = [
  { path: '/', component: <Home01 />},
  // { path: '/home-08', component: <Home08 />},
  // { path: '/explore-01', component: <Explore01 />},
  { path: '/explore', component: <Explore />},
  // { path: '/explore-03', component: <Explore03 />},
  // { path: '/explore-04', component: <Explore04 />},
  // { path: '/live-auctions', component: <LiveAuctions />},
  // { path: '/item-details-01', component: <ItemDetails01 />},
  // { path: '/item-details-02', component: <ItemDetails02 />},
  { path: '/activity', component: <Activity />},
  // { path: '/blog', component: <Blog />},
  // { path: '/blog-details', component: <BlogDetails />},
  // { path: '/help-center', component: <HelpCenter />},
  // { path: '/authors-01', component: <Authors01 />},
  // { path: '/authors-02', component: <Authors02 />},
  // { path: '/wallet-connect', component: <WalletConnect />},
  // { path: '/create-item', component: <CreateItem />},
  // { path: '/edit-profile', component: <EditProfile />},
  // { path: '/ranking', component: <Ranking />},
  // { path: '/login', component: <Login />},
  // { path: '/sign-up', component: <SignUp />},
  { path: '/no-result', component: <NoResult />},
  // { path: '/faq', component: <FAQ />},
  { path: '/contact', component: <Contact />},
]

export default routes;