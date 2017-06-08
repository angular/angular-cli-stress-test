/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2050Component } from './comp-2050.component';

describe('Comp2050Component', () => {
  let component: Comp2050Component;
  let fixture: ComponentFixture<Comp2050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
