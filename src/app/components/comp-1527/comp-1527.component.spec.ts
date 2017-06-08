/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1527Component } from './comp-1527.component';

describe('Comp1527Component', () => {
  let component: Comp1527Component;
  let fixture: ComponentFixture<Comp1527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
