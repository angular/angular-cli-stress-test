/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1653Component } from './comp-1653.component';

describe('Comp1653Component', () => {
  let component: Comp1653Component;
  let fixture: ComponentFixture<Comp1653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
