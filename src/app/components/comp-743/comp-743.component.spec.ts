/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp743Component } from './comp-743.component';

describe('Comp743Component', () => {
  let component: Comp743Component;
  let fixture: ComponentFixture<Comp743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
