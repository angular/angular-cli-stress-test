/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1839Component } from './comp-1839.component';

describe('Comp1839Component', () => {
  let component: Comp1839Component;
  let fixture: ComponentFixture<Comp1839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
