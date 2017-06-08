/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2151Component } from './comp-2151.component';

describe('Comp2151Component', () => {
  let component: Comp2151Component;
  let fixture: ComponentFixture<Comp2151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
