/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2420Component } from './comp-2420.component';

describe('Comp2420Component', () => {
  let component: Comp2420Component;
  let fixture: ComponentFixture<Comp2420Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2420Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
