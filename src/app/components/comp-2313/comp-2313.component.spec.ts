/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2313Component } from './comp-2313.component';

describe('Comp2313Component', () => {
  let component: Comp2313Component;
  let fixture: ComponentFixture<Comp2313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
