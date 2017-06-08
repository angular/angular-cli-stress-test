/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1299Component } from './comp-1299.component';

describe('Comp1299Component', () => {
  let component: Comp1299Component;
  let fixture: ComponentFixture<Comp1299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
