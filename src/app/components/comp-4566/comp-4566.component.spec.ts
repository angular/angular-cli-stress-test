/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4566Component } from './comp-4566.component';

describe('Comp4566Component', () => {
  let component: Comp4566Component;
  let fixture: ComponentFixture<Comp4566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
