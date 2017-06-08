/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1227Component } from './comp-1227.component';

describe('Comp1227Component', () => {
  let component: Comp1227Component;
  let fixture: ComponentFixture<Comp1227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
