/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp67Component } from './comp-67.component';

describe('Comp67Component', () => {
  let component: Comp67Component;
  let fixture: ComponentFixture<Comp67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
