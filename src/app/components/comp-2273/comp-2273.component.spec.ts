/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2273Component } from './comp-2273.component';

describe('Comp2273Component', () => {
  let component: Comp2273Component;
  let fixture: ComponentFixture<Comp2273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
