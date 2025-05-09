import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-my-component3',
  templateUrl: './my-component3.component.html',
  styleUrls: ['./my-component3.component.css']
})
export class MyComponent3Component implements OnInit {
  orderBy = undefined;
  userId = input.required<string>();
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  myWelcome = input.required<string>();
  constructor() { }

  ngOnInit() {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => (this.orderBy = params['order']),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    console.log(this.orderBy);



    /*
    console.log(this.userId());
    const subscription = this.activatedRoute.queryParams.subscribe(params => {
      const orderBy = params['order'];
      const orderbyDesc = params['category'];
      console.log(orderBy);
      console.log(orderbyDesc);
    });
    subscription.unsubscribe();
    */
  }
  onBack() {
    this.router.navigate(['/component2'], {
      replaceUrl: true
    });
  }

}

export const resolverName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return "Hi I'm Arun Kumar...";
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot) => {
  return resolverName(activatedRoute, routerState) + '\'s tasks'
}