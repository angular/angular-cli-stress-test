/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1955Component } from './comp-1955.component';

describe('Comp1955Component', () => {
  let component: Comp1955Component;
  let fixture: ComponentFixture<Comp1955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
