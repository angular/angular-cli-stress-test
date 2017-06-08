/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1430Component } from './comp-1430.component';

describe('Comp1430Component', () => {
  let component: Comp1430Component;
  let fixture: ComponentFixture<Comp1430Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1430Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
