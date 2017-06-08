/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1412Component } from './comp-1412.component';

describe('Comp1412Component', () => {
  let component: Comp1412Component;
  let fixture: ComponentFixture<Comp1412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
