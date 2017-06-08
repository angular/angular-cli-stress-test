/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4610Component } from './comp-4610.component';

describe('Comp4610Component', () => {
  let component: Comp4610Component;
  let fixture: ComponentFixture<Comp4610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
