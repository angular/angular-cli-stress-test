/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1660Component } from './comp-1660.component';

describe('Comp1660Component', () => {
  let component: Comp1660Component;
  let fixture: ComponentFixture<Comp1660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
