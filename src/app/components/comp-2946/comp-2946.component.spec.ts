/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2946Component } from './comp-2946.component';

describe('Comp2946Component', () => {
  let component: Comp2946Component;
  let fixture: ComponentFixture<Comp2946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
