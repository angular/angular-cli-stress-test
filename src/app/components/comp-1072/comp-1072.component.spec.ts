/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1072Component } from './comp-1072.component';

describe('Comp1072Component', () => {
  let component: Comp1072Component;
  let fixture: ComponentFixture<Comp1072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
