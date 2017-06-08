/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1423Component } from './comp-1423.component';

describe('Comp1423Component', () => {
  let component: Comp1423Component;
  let fixture: ComponentFixture<Comp1423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
