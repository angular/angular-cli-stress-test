/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1011Component } from './comp-1011.component';

describe('Comp1011Component', () => {
  let component: Comp1011Component;
  let fixture: ComponentFixture<Comp1011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
