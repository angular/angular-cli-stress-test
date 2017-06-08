/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2119Component } from './comp-2119.component';

describe('Comp2119Component', () => {
  let component: Comp2119Component;
  let fixture: ComponentFixture<Comp2119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
