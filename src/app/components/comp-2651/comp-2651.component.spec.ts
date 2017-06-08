/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2651Component } from './comp-2651.component';

describe('Comp2651Component', () => {
  let component: Comp2651Component;
  let fixture: ComponentFixture<Comp2651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
