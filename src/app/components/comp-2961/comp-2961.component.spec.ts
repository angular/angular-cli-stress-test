/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2961Component } from './comp-2961.component';

describe('Comp2961Component', () => {
  let component: Comp2961Component;
  let fixture: ComponentFixture<Comp2961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
