import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CppComponent } from './compiler/cpp/cpp.component';
import { JavaComponent } from './compiler/java/java.component';
import { PythonComponent } from './compiler/python/python.component';


const routes: Routes = [
  {path:"java",component:JavaComponent},
  {path:"python",component:PythonComponent},
  {path:"cpp",component:CppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
