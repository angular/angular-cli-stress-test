/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4076Component } from './comp-4076.component';

describe('Comp4076Component', () => {
  let component: Comp4076Component;
  let fixture: ComponentFixture<Comp4076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
