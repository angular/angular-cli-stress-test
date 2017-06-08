/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2844Component } from './comp-2844.component';

describe('Comp2844Component', () => {
  let component: Comp2844Component;
  let fixture: ComponentFixture<Comp2844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
