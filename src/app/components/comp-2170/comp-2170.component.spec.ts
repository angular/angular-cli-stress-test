/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2170Component } from './comp-2170.component';

describe('Comp2170Component', () => {
  let component: Comp2170Component;
  let fixture: ComponentFixture<Comp2170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
