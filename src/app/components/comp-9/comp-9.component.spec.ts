/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp9Component } from './comp-9.component';

describe('Comp9Component', () => {
  let component: Comp9Component;
  let fixture: ComponentFixture<Comp9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
