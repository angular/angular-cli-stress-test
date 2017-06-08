/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp309Component } from './comp-309.component';

describe('Comp309Component', () => {
  let component: Comp309Component;
  let fixture: ComponentFixture<Comp309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
