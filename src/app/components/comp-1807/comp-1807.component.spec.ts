/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1807Component } from './comp-1807.component';

describe('Comp1807Component', () => {
  let component: Comp1807Component;
  let fixture: ComponentFixture<Comp1807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
