/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp487Component } from './comp-487.component';

describe('Comp487Component', () => {
  let component: Comp487Component;
  let fixture: ComponentFixture<Comp487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
