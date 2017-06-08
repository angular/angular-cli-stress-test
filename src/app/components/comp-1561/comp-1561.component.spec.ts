/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1561Component } from './comp-1561.component';

describe('Comp1561Component', () => {
  let component: Comp1561Component;
  let fixture: ComponentFixture<Comp1561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
