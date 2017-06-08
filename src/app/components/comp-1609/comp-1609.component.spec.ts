/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1609Component } from './comp-1609.component';

describe('Comp1609Component', () => {
  let component: Comp1609Component;
  let fixture: ComponentFixture<Comp1609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
