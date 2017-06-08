/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1429Component } from './comp-1429.component';

describe('Comp1429Component', () => {
  let component: Comp1429Component;
  let fixture: ComponentFixture<Comp1429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
