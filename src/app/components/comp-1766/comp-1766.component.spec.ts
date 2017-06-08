/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1766Component } from './comp-1766.component';

describe('Comp1766Component', () => {
  let component: Comp1766Component;
  let fixture: ComponentFixture<Comp1766Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1766Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
