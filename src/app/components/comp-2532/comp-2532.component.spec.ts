/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2532Component } from './comp-2532.component';

describe('Comp2532Component', () => {
  let component: Comp2532Component;
  let fixture: ComponentFixture<Comp2532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
