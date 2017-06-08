/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2087Component } from './comp-2087.component';

describe('Comp2087Component', () => {
  let component: Comp2087Component;
  let fixture: ComponentFixture<Comp2087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
