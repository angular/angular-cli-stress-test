/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2688Component } from './comp-2688.component';

describe('Comp2688Component', () => {
  let component: Comp2688Component;
  let fixture: ComponentFixture<Comp2688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
