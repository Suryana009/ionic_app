import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'tab',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'tab1',
		loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
	},
	{
		path: '',
		loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
	},
	{
		path: 'product',
		loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
	}
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
