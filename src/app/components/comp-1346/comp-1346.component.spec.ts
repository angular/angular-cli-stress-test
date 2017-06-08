/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1346Component } from './comp-1346.component';

describe('Comp1346Component', () => {
  let component: Comp1346Component;
  let fixture: ComponentFixture<Comp1346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
