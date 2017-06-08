/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4951Component } from './comp-4951.component';

describe('Comp4951Component', () => {
  let component: Comp4951Component;
  let fixture: ComponentFixture<Comp4951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
