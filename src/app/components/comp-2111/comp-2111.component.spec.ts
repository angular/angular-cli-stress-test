/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2111Component } from './comp-2111.component';

describe('Comp2111Component', () => {
  let component: Comp2111Component;
  let fixture: ComponentFixture<Comp2111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
