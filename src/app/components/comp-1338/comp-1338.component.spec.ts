/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1338Component } from './comp-1338.component';

describe('Comp1338Component', () => {
  let component: Comp1338Component;
  let fixture: ComponentFixture<Comp1338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
