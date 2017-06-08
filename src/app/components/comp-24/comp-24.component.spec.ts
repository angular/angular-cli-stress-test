/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp24Component } from './comp-24.component';

describe('Comp24Component', () => {
  let component: Comp24Component;
  let fixture: ComponentFixture<Comp24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
