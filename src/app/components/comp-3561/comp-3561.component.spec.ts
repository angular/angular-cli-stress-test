/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3561Component } from './comp-3561.component';

describe('Comp3561Component', () => {
  let component: Comp3561Component;
  let fixture: ComponentFixture<Comp3561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
