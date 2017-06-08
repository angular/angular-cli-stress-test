/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2538Component } from './comp-2538.component';

describe('Comp2538Component', () => {
  let component: Comp2538Component;
  let fixture: ComponentFixture<Comp2538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
