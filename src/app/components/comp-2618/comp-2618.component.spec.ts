/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2618Component } from './comp-2618.component';

describe('Comp2618Component', () => {
  let component: Comp2618Component;
  let fixture: ComponentFixture<Comp2618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
