/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2886Component } from './comp-2886.component';

describe('Comp2886Component', () => {
  let component: Comp2886Component;
  let fixture: ComponentFixture<Comp2886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
