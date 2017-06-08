/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2459Component } from './comp-2459.component';

describe('Comp2459Component', () => {
  let component: Comp2459Component;
  let fixture: ComponentFixture<Comp2459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
