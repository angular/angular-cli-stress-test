/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1272Component } from './comp-1272.component';

describe('Comp1272Component', () => {
  let component: Comp1272Component;
  let fixture: ComponentFixture<Comp1272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
