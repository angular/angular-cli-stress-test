/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1560Component } from './comp-1560.component';

describe('Comp1560Component', () => {
  let component: Comp1560Component;
  let fixture: ComponentFixture<Comp1560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
