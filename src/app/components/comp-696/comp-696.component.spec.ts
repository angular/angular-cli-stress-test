/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp696Component } from './comp-696.component';

describe('Comp696Component', () => {
  let component: Comp696Component;
  let fixture: ComponentFixture<Comp696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
