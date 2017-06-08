/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1795Component } from './comp-1795.component';

describe('Comp1795Component', () => {
  let component: Comp1795Component;
  let fixture: ComponentFixture<Comp1795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
