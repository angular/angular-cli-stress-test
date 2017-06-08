/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2717Component } from './comp-2717.component';

describe('Comp2717Component', () => {
  let component: Comp2717Component;
  let fixture: ComponentFixture<Comp2717Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2717Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
