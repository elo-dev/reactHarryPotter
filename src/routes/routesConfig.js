import Characters from "../Components/Characters/Characters";
import { Home } from "../Components/Home/Home";
import Students from "../Components/Students/Students";

export const routesConfig = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/characters',
        exact: true,
        component: Characters
    },
    {
        path: '/students',
        exact: true,
        component: Students
    }
]