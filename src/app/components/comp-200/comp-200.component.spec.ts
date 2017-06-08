/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp200Component } from './comp-200.component';

describe('Comp200Component', () => {
  let component: Comp200Component;
  let fixture: ComponentFixture<Comp200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
