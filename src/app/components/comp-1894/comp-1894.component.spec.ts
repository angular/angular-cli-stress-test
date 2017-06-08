/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1894Component } from './comp-1894.component';

describe('Comp1894Component', () => {
  let component: Comp1894Component;
  let fixture: ComponentFixture<Comp1894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
