/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2318Component } from './comp-2318.component';

describe('Comp2318Component', () => {
  let component: Comp2318Component;
  let fixture: ComponentFixture<Comp2318Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2318Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
