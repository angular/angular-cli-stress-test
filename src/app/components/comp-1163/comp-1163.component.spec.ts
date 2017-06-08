/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1163Component } from './comp-1163.component';

describe('Comp1163Component', () => {
  let component: Comp1163Component;
  let fixture: ComponentFixture<Comp1163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
