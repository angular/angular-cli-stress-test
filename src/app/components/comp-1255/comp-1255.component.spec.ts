/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1255Component } from './comp-1255.component';

describe('Comp1255Component', () => {
  let component: Comp1255Component;
  let fixture: ComponentFixture<Comp1255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
