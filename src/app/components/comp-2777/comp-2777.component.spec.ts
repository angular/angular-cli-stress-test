/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2777Component } from './comp-2777.component';

describe('Comp2777Component', () => {
  let component: Comp2777Component;
  let fixture: ComponentFixture<Comp2777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
