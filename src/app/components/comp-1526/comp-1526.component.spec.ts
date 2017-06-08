/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1526Component } from './comp-1526.component';

describe('Comp1526Component', () => {
  let component: Comp1526Component;
  let fixture: ComponentFixture<Comp1526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
