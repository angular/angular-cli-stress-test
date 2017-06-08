/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2065Component } from './comp-2065.component';

describe('Comp2065Component', () => {
  let component: Comp2065Component;
  let fixture: ComponentFixture<Comp2065Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2065Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
