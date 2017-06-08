/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2039Component } from './comp-2039.component';

describe('Comp2039Component', () => {
  let component: Comp2039Component;
  let fixture: ComponentFixture<Comp2039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
