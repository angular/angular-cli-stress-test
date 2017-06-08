/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2559Component } from './comp-2559.component';

describe('Comp2559Component', () => {
  let component: Comp2559Component;
  let fixture: ComponentFixture<Comp2559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
