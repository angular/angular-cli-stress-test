/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2696Component } from './comp-2696.component';

describe('Comp2696Component', () => {
  let component: Comp2696Component;
  let fixture: ComponentFixture<Comp2696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
