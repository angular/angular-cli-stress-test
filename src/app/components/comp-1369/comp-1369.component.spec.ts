/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1369Component } from './comp-1369.component';

describe('Comp1369Component', () => {
  let component: Comp1369Component;
  let fixture: ComponentFixture<Comp1369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
