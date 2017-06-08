/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2100Component } from './comp-2100.component';

describe('Comp2100Component', () => {
  let component: Comp2100Component;
  let fixture: ComponentFixture<Comp2100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
