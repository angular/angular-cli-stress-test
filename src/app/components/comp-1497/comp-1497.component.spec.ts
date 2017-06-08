/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1497Component } from './comp-1497.component';

describe('Comp1497Component', () => {
  let component: Comp1497Component;
  let fixture: ComponentFixture<Comp1497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
