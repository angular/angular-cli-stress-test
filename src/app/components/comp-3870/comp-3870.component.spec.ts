/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3870Component } from './comp-3870.component';

describe('Comp3870Component', () => {
  let component: Comp3870Component;
  let fixture: ComponentFixture<Comp3870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
