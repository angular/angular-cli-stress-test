/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2711Component } from './comp-2711.component';

describe('Comp2711Component', () => {
  let component: Comp2711Component;
  let fixture: ComponentFixture<Comp2711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
