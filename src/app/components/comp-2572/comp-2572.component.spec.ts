/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2572Component } from './comp-2572.component';

describe('Comp2572Component', () => {
  let component: Comp2572Component;
  let fixture: ComponentFixture<Comp2572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
