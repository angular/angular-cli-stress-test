/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2299Component } from './comp-2299.component';

describe('Comp2299Component', () => {
  let component: Comp2299Component;
  let fixture: ComponentFixture<Comp2299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
