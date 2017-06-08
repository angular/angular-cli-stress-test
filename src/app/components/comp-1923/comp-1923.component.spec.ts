/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1923Component } from './comp-1923.component';

describe('Comp1923Component', () => {
  let component: Comp1923Component;
  let fixture: ComponentFixture<Comp1923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
