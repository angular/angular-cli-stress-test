/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp143Component } from './comp-143.component';

describe('Comp143Component', () => {
  let component: Comp143Component;
  let fixture: ComponentFixture<Comp143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
