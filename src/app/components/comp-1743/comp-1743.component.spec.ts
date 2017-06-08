/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1743Component } from './comp-1743.component';

describe('Comp1743Component', () => {
  let component: Comp1743Component;
  let fixture: ComponentFixture<Comp1743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
