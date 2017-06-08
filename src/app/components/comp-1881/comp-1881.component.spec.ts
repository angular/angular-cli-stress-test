/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1881Component } from './comp-1881.component';

describe('Comp1881Component', () => {
  let component: Comp1881Component;
  let fixture: ComponentFixture<Comp1881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
