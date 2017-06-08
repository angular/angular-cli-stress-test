/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp56Component } from './comp-56.component';

describe('Comp56Component', () => {
  let component: Comp56Component;
  let fixture: ComponentFixture<Comp56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
