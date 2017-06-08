/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1933Component } from './comp-1933.component';

describe('Comp1933Component', () => {
  let component: Comp1933Component;
  let fixture: ComponentFixture<Comp1933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
