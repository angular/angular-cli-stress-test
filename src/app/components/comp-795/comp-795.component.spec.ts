/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp795Component } from './comp-795.component';

describe('Comp795Component', () => {
  let component: Comp795Component;
  let fixture: ComponentFixture<Comp795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
