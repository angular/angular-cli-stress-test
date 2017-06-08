/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2004Component } from './comp-2004.component';

describe('Comp2004Component', () => {
  let component: Comp2004Component;
  let fixture: ComponentFixture<Comp2004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
