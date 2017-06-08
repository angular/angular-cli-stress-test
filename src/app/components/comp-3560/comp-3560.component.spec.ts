/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3560Component } from './comp-3560.component';

describe('Comp3560Component', () => {
  let component: Comp3560Component;
  let fixture: ComponentFixture<Comp3560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
