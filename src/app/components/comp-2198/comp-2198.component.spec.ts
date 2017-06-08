/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2198Component } from './comp-2198.component';

describe('Comp2198Component', () => {
  let component: Comp2198Component;
  let fixture: ComponentFixture<Comp2198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
