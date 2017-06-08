/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2594Component } from './comp-2594.component';

describe('Comp2594Component', () => {
  let component: Comp2594Component;
  let fixture: ComponentFixture<Comp2594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
