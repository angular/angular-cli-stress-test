/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1084Component } from './comp-1084.component';

describe('Comp1084Component', () => {
  let component: Comp1084Component;
  let fixture: ComponentFixture<Comp1084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
