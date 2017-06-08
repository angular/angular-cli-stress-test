/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1164Component } from './comp-1164.component';

describe('Comp1164Component', () => {
  let component: Comp1164Component;
  let fixture: ComponentFixture<Comp1164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
