/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1863Component } from './comp-1863.component';

describe('Comp1863Component', () => {
  let component: Comp1863Component;
  let fixture: ComponentFixture<Comp1863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
