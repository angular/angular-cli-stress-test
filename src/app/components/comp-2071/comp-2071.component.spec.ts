/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2071Component } from './comp-2071.component';

describe('Comp2071Component', () => {
  let component: Comp2071Component;
  let fixture: ComponentFixture<Comp2071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
