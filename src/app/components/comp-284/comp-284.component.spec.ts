/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp284Component } from './comp-284.component';

describe('Comp284Component', () => {
  let component: Comp284Component;
  let fixture: ComponentFixture<Comp284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
