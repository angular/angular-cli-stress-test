/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp806Component } from './comp-806.component';

describe('Comp806Component', () => {
  let component: Comp806Component;
  let fixture: ComponentFixture<Comp806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
