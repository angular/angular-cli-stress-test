/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4758Component } from './comp-4758.component';

describe('Comp4758Component', () => {
  let component: Comp4758Component;
  let fixture: ComponentFixture<Comp4758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
