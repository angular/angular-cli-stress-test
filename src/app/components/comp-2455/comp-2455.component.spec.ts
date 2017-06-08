/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2455Component } from './comp-2455.component';

describe('Comp2455Component', () => {
  let component: Comp2455Component;
  let fixture: ComponentFixture<Comp2455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
