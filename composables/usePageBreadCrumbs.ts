
import breadcrumbs from '@/services/breadcrumb.json'
import type { IBreadCrumb } from '@/types/DashboardModel'
export default (param: string) => {
    if (param == 'panel' || param == "profile")
        return breadcrumbs[param] as IBreadCrumb[]
    return []
}