/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1115Component } from './comp-1115.component';

describe('Comp1115Component', () => {
  let component: Comp1115Component;
  let fixture: ComponentFixture<Comp1115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
