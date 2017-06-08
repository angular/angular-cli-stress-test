/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2496Component } from './comp-2496.component';

describe('Comp2496Component', () => {
  let component: Comp2496Component;
  let fixture: ComponentFixture<Comp2496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
