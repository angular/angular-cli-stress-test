/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp64Component } from './comp-64.component';

describe('Comp64Component', () => {
  let component: Comp64Component;
  let fixture: ComponentFixture<Comp64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
