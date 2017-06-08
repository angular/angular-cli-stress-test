/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1081Component } from './comp-1081.component';

describe('Comp1081Component', () => {
  let component: Comp1081Component;
  let fixture: ComponentFixture<Comp1081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
