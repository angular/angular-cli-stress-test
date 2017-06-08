/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1343Component } from './comp-1343.component';

describe('Comp1343Component', () => {
  let component: Comp1343Component;
  let fixture: ComponentFixture<Comp1343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
