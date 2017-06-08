/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp247Component } from './comp-247.component';

describe('Comp247Component', () => {
  let component: Comp247Component;
  let fixture: ComponentFixture<Comp247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
