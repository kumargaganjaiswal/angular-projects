import { Routes } from '@angular/router';
import { MyComponent1Component } from './components/my-component1/my-component1.component';
import { MyComponent2Component } from './components/my-component2/my-component2.component';
import { MyComponent3Component } from './components/my-component3/my-component3.component';
import { NotaskComponent } from './components/notask/notask.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: NotaskComponent
    },

    {
        path: 'component1/:userId',
        component: MyComponent1Component,
        children: [
            {
                path: 'component3',
                component: MyComponent3Component
            }
        ]
    }, {
        path: 'component2',
        component: MyComponent2Component
    },
    {
        path: 'component3',
        component: MyComponent3Component
    },

];
