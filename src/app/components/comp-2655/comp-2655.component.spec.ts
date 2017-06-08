/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2655Component } from './comp-2655.component';

describe('Comp2655Component', () => {
  let component: Comp2655Component;
  let fixture: ComponentFixture<Comp2655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
