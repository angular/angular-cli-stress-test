/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2911Component } from './comp-2911.component';

describe('Comp2911Component', () => {
  let component: Comp2911Component;
  let fixture: ComponentFixture<Comp2911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
