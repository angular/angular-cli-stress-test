/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4163Component } from './comp-4163.component';

describe('Comp4163Component', () => {
  let component: Comp4163Component;
  let fixture: ComponentFixture<Comp4163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
