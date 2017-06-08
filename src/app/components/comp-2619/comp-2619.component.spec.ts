/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2619Component } from './comp-2619.component';

describe('Comp2619Component', () => {
  let component: Comp2619Component;
  let fixture: ComponentFixture<Comp2619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
