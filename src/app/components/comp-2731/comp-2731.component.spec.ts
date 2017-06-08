/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2731Component } from './comp-2731.component';

describe('Comp2731Component', () => {
  let component: Comp2731Component;
  let fixture: ComponentFixture<Comp2731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
