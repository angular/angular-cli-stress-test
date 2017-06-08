/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1534Component } from './comp-1534.component';

describe('Comp1534Component', () => {
  let component: Comp1534Component;
  let fixture: ComponentFixture<Comp1534Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1534Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
