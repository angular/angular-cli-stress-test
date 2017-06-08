/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3309Component } from './comp-3309.component';

describe('Comp3309Component', () => {
  let component: Comp3309Component;
  let fixture: ComponentFixture<Comp3309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
