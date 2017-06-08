/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1571Component } from './comp-1571.component';

describe('Comp1571Component', () => {
  let component: Comp1571Component;
  let fixture: ComponentFixture<Comp1571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
