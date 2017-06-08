/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1791Component } from './comp-1791.component';

describe('Comp1791Component', () => {
  let component: Comp1791Component;
  let fixture: ComponentFixture<Comp1791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
