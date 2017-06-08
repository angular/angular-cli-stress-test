/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3945Component } from './comp-3945.component';

describe('Comp3945Component', () => {
  let component: Comp3945Component;
  let fixture: ComponentFixture<Comp3945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
