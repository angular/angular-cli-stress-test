/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1498Component } from './comp-1498.component';

describe('Comp1498Component', () => {
  let component: Comp1498Component;
  let fixture: ComponentFixture<Comp1498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
