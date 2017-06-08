/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp574Component } from './comp-574.component';

describe('Comp574Component', () => {
  let component: Comp574Component;
  let fixture: ComponentFixture<Comp574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
