import { useRoutes, Navigate} from 'react-router-dom';


const Routes = () => {
    const MainRoutes = {
        path: "/",
   
    }

    return useRoutes([MainRoutes]);
}

export default Routes