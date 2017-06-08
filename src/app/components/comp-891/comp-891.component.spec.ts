/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp891Component } from './comp-891.component';

describe('Comp891Component', () => {
  let component: Comp891Component;
  let fixture: ComponentFixture<Comp891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
