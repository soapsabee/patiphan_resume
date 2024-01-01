import { useRoutes, Navigate} from 'react-router-dom';
import { HomePage, AboutMePage, DownloadPDFPage, PortfolioPage } from '../pages'
import { Layout } from '../components';

const Routes = () => {
    const MainRoutes = {
        path: "/",
        element: <Layout/>,
        children: [
          { element: <Navigate to="home" />, index: true },
          { path: "home", element: <HomePage/> },
          { path: "aboutme", element: <AboutMePage/> },
          { path: "file-document", element: <DownloadPDFPage/>},
          { path: "portfolio", element: <PortfolioPage/>}
        ]
    }

    return useRoutes([MainRoutes]);
}

export default Routes