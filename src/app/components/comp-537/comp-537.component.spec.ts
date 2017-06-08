/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp537Component } from './comp-537.component';

describe('Comp537Component', () => {
  let component: Comp537Component;
  let fixture: ComponentFixture<Comp537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
