/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp417Component } from './comp-417.component';

describe('Comp417Component', () => {
  let component: Comp417Component;
  let fixture: ComponentFixture<Comp417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
