import { useNavigate,useRoutes} from 'react-router-dom';
import { HomePage, AboutMePage, DownloadPDFPage, PortfolioPage } from '../pages'
import { Layout } from '../components';

const Routes = () => {
    const MainRoutes = {
        path: "/",
        element: <Layout/>,
        children: [
          { path: "home", element: <HomePage/> },
          { path: "aboutme", element: <AboutMePage/> },
          { path: "file-document", element: <DownloadPDFPage/>},
          { path: "portfolio", element: <PortfolioPage/>}
        ]
    }

    return useRoutes([MainRoutes]);
}

export default Routes