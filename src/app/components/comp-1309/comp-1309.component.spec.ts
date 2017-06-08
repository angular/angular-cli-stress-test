/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1309Component } from './comp-1309.component';

describe('Comp1309Component', () => {
  let component: Comp1309Component;
  let fixture: ComponentFixture<Comp1309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
