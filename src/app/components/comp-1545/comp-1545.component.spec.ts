/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1545Component } from './comp-1545.component';

describe('Comp1545Component', () => {
  let component: Comp1545Component;
  let fixture: ComponentFixture<Comp1545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
