/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3217Component } from './comp-3217.component';

describe('Comp3217Component', () => {
  let component: Comp3217Component;
  let fixture: ComponentFixture<Comp3217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
