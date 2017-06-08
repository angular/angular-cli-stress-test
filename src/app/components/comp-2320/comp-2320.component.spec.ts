/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2320Component } from './comp-2320.component';

describe('Comp2320Component', () => {
  let component: Comp2320Component;
  let fixture: ComponentFixture<Comp2320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
