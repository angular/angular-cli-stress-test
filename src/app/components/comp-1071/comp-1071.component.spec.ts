/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1071Component } from './comp-1071.component';

describe('Comp1071Component', () => {
  let component: Comp1071Component;
  let fixture: ComponentFixture<Comp1071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
