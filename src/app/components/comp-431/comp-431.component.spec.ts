/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp431Component } from './comp-431.component';

describe('Comp431Component', () => {
  let component: Comp431Component;
  let fixture: ComponentFixture<Comp431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
