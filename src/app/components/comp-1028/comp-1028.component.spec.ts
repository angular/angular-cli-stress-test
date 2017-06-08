/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1028Component } from './comp-1028.component';

describe('Comp1028Component', () => {
  let component: Comp1028Component;
  let fixture: ComponentFixture<Comp1028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
