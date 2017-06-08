/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2604Component } from './comp-2604.component';

describe('Comp2604Component', () => {
  let component: Comp2604Component;
  let fixture: ComponentFixture<Comp2604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
