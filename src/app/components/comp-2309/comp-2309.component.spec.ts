/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2309Component } from './comp-2309.component';

describe('Comp2309Component', () => {
  let component: Comp2309Component;
  let fixture: ComponentFixture<Comp2309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
