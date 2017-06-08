/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2070Component } from './comp-2070.component';

describe('Comp2070Component', () => {
  let component: Comp2070Component;
  let fixture: ComponentFixture<Comp2070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
