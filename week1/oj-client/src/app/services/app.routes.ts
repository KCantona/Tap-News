import { ProblemListComponent } from './../components/problem-list/problem-list.component';
import { RouterModule, Routes} from "@angular/router";
import { ProblemDetailComponent } from 'app/components/problem-detail/problem-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: "problems",
    component: ProblemListComponent
  },
  {
    path: "problems/:id",
    component: ProblemDetailComponent,
  },
  {
    path: "**",
    redirectTo: "problems",
  }
];

export const routing = RouterModule.forRoot(routes);
