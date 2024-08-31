import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Friend from '~/pages/Friend';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';

// Do not login
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
    {
        path: config.routes.friend,
        component: Friend,
    },
];

// Login to see
const privateRoutes = [];

export { publicRoutes, privateRoutes };
