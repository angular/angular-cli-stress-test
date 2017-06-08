/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp69Component } from './comp-69.component';

describe('Comp69Component', () => {
  let component: Comp69Component;
  let fixture: ComponentFixture<Comp69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
