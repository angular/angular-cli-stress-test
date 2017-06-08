/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2818Component } from './comp-2818.component';

describe('Comp2818Component', () => {
  let component: Comp2818Component;
  let fixture: ComponentFixture<Comp2818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
