/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3822Component } from './comp-3822.component';

describe('Comp3822Component', () => {
  let component: Comp3822Component;
  let fixture: ComponentFixture<Comp3822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
