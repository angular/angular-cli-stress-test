/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4961Component } from './comp-4961.component';

describe('Comp4961Component', () => {
  let component: Comp4961Component;
  let fixture: ComponentFixture<Comp4961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
