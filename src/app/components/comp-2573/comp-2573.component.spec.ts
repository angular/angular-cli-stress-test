/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2573Component } from './comp-2573.component';

describe('Comp2573Component', () => {
  let component: Comp2573Component;
  let fixture: ComponentFixture<Comp2573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
