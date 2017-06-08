/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2382Component } from './comp-2382.component';

describe('Comp2382Component', () => {
  let component: Comp2382Component;
  let fixture: ComponentFixture<Comp2382Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2382Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
