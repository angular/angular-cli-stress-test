/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1944Component } from './comp-1944.component';

describe('Comp1944Component', () => {
  let component: Comp1944Component;
  let fixture: ComponentFixture<Comp1944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
