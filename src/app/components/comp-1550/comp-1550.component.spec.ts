/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1550Component } from './comp-1550.component';

describe('Comp1550Component', () => {
  let component: Comp1550Component;
  let fixture: ComponentFixture<Comp1550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
