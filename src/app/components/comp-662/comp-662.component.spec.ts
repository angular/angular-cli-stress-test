/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp662Component } from './comp-662.component';

describe('Comp662Component', () => {
  let component: Comp662Component;
  let fixture: ComponentFixture<Comp662Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp662Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
