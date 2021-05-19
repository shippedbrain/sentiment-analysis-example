import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
    { path: 'showcase/sentiment-analysis', component: SentimentAnalysisComponent },
    { path: '**', redirectTo: '/showcase/sentiment-analysis', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
