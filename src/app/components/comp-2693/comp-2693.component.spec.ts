/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2693Component } from './comp-2693.component';

describe('Comp2693Component', () => {
  let component: Comp2693Component;
  let fixture: ComponentFixture<Comp2693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
