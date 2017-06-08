/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2407Component } from './comp-2407.component';

describe('Comp2407Component', () => {
  let component: Comp2407Component;
  let fixture: ComponentFixture<Comp2407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
