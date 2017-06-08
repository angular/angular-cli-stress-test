/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2234Component } from './comp-2234.component';

describe('Comp2234Component', () => {
  let component: Comp2234Component;
  let fixture: ComponentFixture<Comp2234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
