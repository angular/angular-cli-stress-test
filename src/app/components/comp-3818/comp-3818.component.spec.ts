/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3818Component } from './comp-3818.component';

describe('Comp3818Component', () => {
  let component: Comp3818Component;
  let fixture: ComponentFixture<Comp3818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
