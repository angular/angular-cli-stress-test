/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3984Component } from './comp-3984.component';

describe('Comp3984Component', () => {
  let component: Comp3984Component;
  let fixture: ComponentFixture<Comp3984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
